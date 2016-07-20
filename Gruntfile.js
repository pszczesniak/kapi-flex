module.exports = function(grunt) {
    var config = {
        src:        'src',
        dist:       'dist'
    };

    // Initialize the grunt configuration
    grunt.initConfig({
        // config
        config: config,

        // Sass file compilation and compression
        sass: {
            frontend: {
                options: {
                    outputStyle: 'nasted',
                    sourceMap: false
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/scss',
                    src: ['*.scss'],
                    dest: '<%= config.dist %>/css',
                    ext: '.css'
                }]
            }
        },

        // Combine Media Queries
        cmq: {
            options: {
              log: true
            },
            target: {
              files: {
                '<%= config.dist %>/css': ['<%= config.dist %>/css/kapi-flex.css']
              }
            }
        },

        // CSS minification
        cssmin: {
            frontend: {
              files: [{
                expand: true,
                cwd: '<%= config.dist %>/css/',
                src: ['*.css', '!*.min.css'],
                dest: '<%= config.dist %>/css/',
                ext: '.min.css'
              }]
            }
        },

        // Adding autoprefixes to CSS files
        autoprefixer: {
            options: {
              browsers: ['last 5 versions']
            },
            dist: {
              src: '<%= config.dist %>/css/*.css'
            }
        },

        // SCSS linting
        scsslint: {
            allFiles: [
              '<%= config.src %>/scss/**/*.scss',
            ],
            options: {
              bundleExec: false,
              colorizeOutput: false
            }
        },

        // automatically run tasks when changing Sass
        watch: {
            sass_frontend: {
              files: [
                '<%= config.src %>/scss/*.scss',
                '<%= config.src %>/scss/kapi-flex/*.scss'
            ],
              tasks: ['sass:frontend'],
              options: {
                spawn: false,
                livereload: true
              }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-combine-media-queries');

    grunt.registerTask('test', ['scsslint']);

    // Set the task to call watching for changes and compilation tasks
    grunt.registerTask('default', 'Development', function() {
        grunt.task.run(['watch']);
    });

    grunt.registerTask('build', 'Production', function() {
        grunt.task.run(['cmq', 'autoprefixer', 'cssmin:frontend']);
    });

};