# KaPi-flex
Complete css grid system based on flex.

Documentation + examples: [https://pszczesniak.github.io/kapi-flex/](https://pszczesniak.github.io/kapi-flex/)

## Description

Written in [SCSS](http://sass-lang.com/) using [BEM](https://css-tricks.com/bem-101/) methodology so you can easily customize it to your own needs. Works on IE10+ and on every other browser. You can use default RWD break points or change it to your favourite. You can customize gaps between columns, aligning cells, flex direction, justifying content etc.

## Instalation

Project is using `grunt` so it needs `Node.js`.
Downlod repository and run `npm install` and after that type `grunt` and hit enter; If you want to build project (minified CSS) - type `grunt build`. Css files can be found in `/dist/css` folder.

If you just want to use it without customization - get css file from `dist/css` and... that's all :)

### Fully responsive

![KaPi-flex responsive live example](http://piotr-szczesniak.kapisoft.pl/images/flex-grid-rwd.gif)

Default breakpoints:

Prefix | Value | Css media query
------ | ----- | ---------------
xs | 200px | @media screen and (min-width: 200px)
sm | 769px | @media screen and (min-width: 769px)
md | 1025px | @media screen and (min-width: 1025px)
lg | 1365px | @media screen and (min-width: 1365px)
xl | 1520px | @media screen and (min-width: 1520px)

### Customization

Just change values in `_config.scss`:
```scss
//grid breakpoints
$breakpoints_names: ('xs': 200px, 'sm': 769px, 'md': 1025px, 'lg': 1365px, 'xl': 1520px);

//how many colummn do you want in your grid
$grid-column-count: 12;

//default gap size between columns
$marginGap: 10px;

//column gaps sizes
$column_gap: (0, 20, 30);
```
### HTML and CSS examples:

```html
<div class="grid">
    <div class="col-lg-3 col-sm-6 col-xs-12">col 1</div>
    <div class="col-lg-3 col-sm-6 col-xs-12">col 2</div>
    ...
    <div class="col-lg-3 col-sm-6 col-xs-12">col 100</div>
</div>
```

CSS grid class tree:
```css
.grid
     --xs
     --sm
     --md
     --lg
     --xl
         -column
         -top
         -middle
         -bottom
         -center
         -baseline
         -reverse
         -end
         -start
         -around
         -between
         -side-gaps
    Examples of class names: grid, grid--xs-top, grid--lg-reverse.

    (resposive prefixes are optional)
    --column
    --top
    --middle
    --bottom
    --center
    --baseline
    --reverse
    --end
    --start
    --around
    --between
    --side-gaps
    --(0, 10, 20, 30) - gaps in pixels

    Examples of class names: grid, grid--top, grid--reverse, grid--20.
```

CSS column class tree:
```css
.col
    -xs
    -sm
    -md
    -lg
    -xl
       -top
       -middle
       -bottom
       -center
       -baseline
       -first
       -last
       -spacer
       -(1 - 12)

       Examples of class names: col-xs, col-sm-middle, col-md-3.

.col-push,
.col-pull
         -xs
         -sm
         -md
         -lg
         -xl
            -(1 - 12)

            Examples of class names: col-push-xs-3, col-sm-pull-5.
```
