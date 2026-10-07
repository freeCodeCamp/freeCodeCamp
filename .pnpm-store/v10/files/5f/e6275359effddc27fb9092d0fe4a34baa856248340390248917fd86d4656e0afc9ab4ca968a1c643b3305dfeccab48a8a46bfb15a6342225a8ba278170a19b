<img alt='CSS declaration sorter logo' src='https://raw.githubusercontent.com/Siilwyn/css-declaration-sorter/master/logo.svg?sanitize=true' height='260' align='right'>

# CSS Declaration Sorter
[![npm][npm-badge]][npm]

A Node.js module and [PostCSS] plugin to sort CSS, SCSS or Less declarations based on their property names. Ensuring styling is organized, more consistent and in order... The goal of this package is to sort the source code of a project in the build process or to decrease the distributed CSS gzipped size.

Check out [the Prettier plugin](https://github.com/Siilwyn/prettier-plugin-css-order) for usage with a variety of file formats.

## Niceness
- Up-to-date CSS properties fetched from the [MDN Compatibility Data](https://github.com/mdn/browser-compat-data/) project.
- Choose your wanted order or provide your own.
- Nested rules sorting support.
- SCSS and Less support when combined with either [postcss-scss](https://github.com/postcss/postcss-scss) or [postcss-less](https://github.com/webschik/postcss-less).
- Thought-out sorting orders out of the box, **approved by their authors**.

## Alphabetical example
Input:
```css
body {
    display: block;
    animation: none;
    color: #C55;
    border: 0;
}
```

Output:
```css
body {
    animation: none;
    border: 0;
    color: #C55;
    display: block;
}
```

## Built-in sorting orders
- Alphabetical  
`alphabetical`  
*Default, order in a simple alphabetical manner from a - z.*

- [SMACSS](http://smacss.com/book/formatting#grouping)  
`smacss`  
*Order from most important, flow affecting properties, to least important properties.*
  1. Box
  2. Border
  3. Background
  4. Text
  5. Other

- [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS)  
`concentric-css`  
*Order properties applying outside the box model, moving inward to intrinsic changes.*
  1. Positioning
  2. Visibility
  3. Box model
  4. Dimensions
  5. Text

## Usage
Following the PostCSS plugin guidelines, this package depends on PostCSS as a peer dependency:  
`npm install postcss css-declaration-sorter --save-dev`

### CLI
This module does not include its own CLI but works with the official [PostCSS CLI](https://github.com/postcss/postcss-cli). To use the examples below, the `postcss-cli` package is a required dependency.

Piping out result from file:  
`postcss input.css --use css-declaration-sorter | cat`

Sorting multiple files by overwriting:  
`postcss *.css --use css-declaration-sorter --replace --no-map`

Sorting all files in a directory with SCSS syntax using [postcss-scss](https://github.com/postcss/postcss-scss) by overwriting:  
`postcss ./src/**/*.scss --syntax postcss-scss --use css-declaration-sorter --replace --no-map`

Sorting all files in the directory with SCSS syntax and SMACSS order by overwriting, using `package.json` configuration:  
```json
"postcss": {
  "syntax": "postcss-scss",
  "map": false,
  "plugins": {
    "css-declaration-sorter": { "order": "smacss" }
  }
}
```

`postcss ./src/**/*.scss --replace --config package.json`

### Vanilla JS
```js
import postcss from 'postcss';
import { cssDeclarationSorter } from 'css-declaration-sorter';

postcss([cssDeclarationSorter({ order: 'smacss' })])
  .process('a { color: hyperblue; display: block; }', { from: undefined })
  .then(result => console.log(
    result.css === 'a { display: block; color: hyperblue; }'
  ));
```
___

**[View more usage examples](/examples) in combination with other tools.**  

___

## API
### cssDeclarationSorter({ order, keepOverrides })

#### order
Type: `string` or `function`  
Default: `alphabetical`  
Options: `alphabetical`, `smacss`, `concentric-css`

Provide the name of one of the built-in sort orders or a comparison function that is passed to ([`Array.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)). This function receives two declaration names and is expected to return `-1`, `0` or `1` depending on the wanted order.

#### keepOverrides
Type: `Boolean`  
Default: `false`  

To prevent breaking legacy CSS where shorthand declarations override longhand declarations (also taking into account vendor prefixes) this option can enabled. For example `animation-name: some; animation: greeting;` will be kept in this order when `keepOverrides` is `true`.

[PostCSS]: https://github.com/postcss/postcss

[npm]: https://www.npmjs.com/package/css-declaration-sorter
[npm-badge]: https://tinyshields.dev/npm/css-declaration-sorter.svg
