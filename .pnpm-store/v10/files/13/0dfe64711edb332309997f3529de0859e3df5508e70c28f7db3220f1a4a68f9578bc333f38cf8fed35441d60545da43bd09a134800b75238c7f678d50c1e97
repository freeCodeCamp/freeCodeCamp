[![NPM version](https://img.shields.io/npm/v/csso.svg)](https://www.npmjs.com/package/csso)
[![Build Status](https://travis-ci.org/css/csso.svg?branch=master)](https://travis-ci.org/css/csso)
[![Coverage Status](https://coveralls.io/repos/github/css/csso/badge.svg?branch=master)](https://coveralls.io/github/css/csso?branch=master)
[![NPM Downloads](https://img.shields.io/npm/dm/csso.svg)](https://www.npmjs.com/package/csso)
[![Twitter](https://img.shields.io/badge/Twitter-@cssoptimizer-blue.svg)](https://twitter.com/cssoptimizer)

CSSO (CSS Optimizer) is a CSS minifier. It performs three sort of transformations: cleaning (removing redundant), compression (replacement for shorter form) and restructuring (merge of declarations, rulesets and so on). As a result your CSS becomes much smaller.

[![Originated by Yandex](https://cdn.rawgit.com/css/csso/8d1b89211ac425909f735e7d5df87ee16c2feec6/docs/yandex.svg)](https://www.yandex.com/)
[![Sponsored by Avito](https://cdn.rawgit.com/css/csso/8d1b89211ac425909f735e7d5df87ee16c2feec6/docs/avito.svg)](https://www.avito.ru/)

## Ready to use

- [Web interface](http://css.github.io/csso/csso.html)
- [csso-cli](https://github.com/css/csso-cli) – command line interface
- [gulp-csso](https://github.com/ben-eb/gulp-csso) – `Gulp` plugin
- [grunt-csso](https://github.com/t32k/grunt-csso) – `Grunt` plugin
- [broccoli-csso](https://github.com/sindresorhus/broccoli-csso) – `Broccoli` plugin
- [postcss-csso](https://github.com/lahmatiy/postcss-csso) – `PostCSS` plugin
- [csso-loader](https://github.com/sandark7/csso-loader) – `webpack` loader
- [csso-webpack-plugin](https://github.com/zoobestik/csso-webpack-plugin) – `webpack` plugin
- [CSSO Visual Studio Code plugin](https://marketplace.visualstudio.com/items?itemName=Aneryu.csso)

## Install

```
npm install csso
```

## API

<!-- TOC depthfrom:3 -->

- [minify(source[, options])](#minifysource-options)
- [minifyBlock(source[, options])](#minifyblocksource-options)
- [syntax.compress(ast[, options])](#syntaxcompressast-options)
- [Source maps](#source-maps)
- [Usage data](#usage-data)
    - [White list filtering](#white-list-filtering)
    - [Black list filtering](#black-list-filtering)
    - [Scopes](#scopes)

<!-- /TOC -->

Basic usage:

```js
var csso = require('csso');

var minifiedCss = csso.minify('.test { color: #ff0000; }').css;

console.log(minifiedCss);
// .test{color:red}
```

CSSO is based on [CSSTree](https://github.com/csstree/csstree) to parse CSS into AST, AST traversal and to generate AST back to CSS. All `CSSTree` API is available behind `syntax` field. You may minify CSS step by step:

```js
var csso = require('csso');
var ast = csso.syntax.parse('.test { color: #ff0000; }');
var compressedAst = csso.syntax.compress(ast).ast;
var minifiedCss = csso.syntax.generate(compressedAst);

console.log(minifiedCss);
// .test{color:red}
```

> Warning: CSSO uses early versions of CSSTree that still in active development. CSSO doesn't guarantee API behind `syntax` field or AST format will not change in future releases of CSSO, since it's subject to change in CSSTree. Be careful with CSSO updates if you use `syntax` API until this warning removal.

### minify(source[, options])

Minify `source` CSS passed as `String`.

```js
var result = csso.minify('.test { color: #ff0000; }', {
    restructure: false,   // don't change CSS structure, i.e. don't merge declarations, rulesets etc
    debug: true           // show additional debug information:
                          // true or number from 1 to 3 (greater number - more details)
});

console.log(result.css);
// > .test{color:red}
```

Returns an object with properties:

- css `String` – resulting CSS
- map `Object` – instance of [`SourceMapGenerator`](https://github.com/mozilla/source-map#sourcemapgenerator) or `null`

Options:

- sourceMap

  Type: `Boolean`  
  Default: `false`

  Generate a source map when `true`.

- filename

  Type: `String`  
  Default: `'<unknown>'`

  Filename of input CSS, uses for source map generation.

- debug

  Type: `Boolean`  
  Default: `false`

  Output debug information to `stderr`.

- beforeCompress

  Type: `function(ast, options)` or `Array<function(ast, options)>` or `null`  
  Default: `null`

  Called right after parse is run.

- afterCompress

  Type: `function(compressResult, options)` or `Array<function(compressResult, options)>` or `null`  
  Default: `null`

  Called right after [`syntax.compress()`](#syntaxcompressast-options) is run.

- Other options are the same as for [`syntax.compress()`](#syntaxcompressast-options) function.

### minifyBlock(source[, options])

The same as `minify()` but for list of declarations. Usually it's a `style` attribute value.

```js
var result = csso.minifyBlock('color: rgba(255, 0, 0, 1); color: #ff0000');

console.log(result.css);
// > color:red
```

### syntax.compress(ast[, options])

Does the main task – compress an AST. This is CSSO's extension in CSSTree syntax API.

> NOTE: `syntax.compress()` performs AST compression by transforming input AST by default (since AST cloning is expensive and needed in rare cases). Use `clone` option with truthy value in case you want to keep input AST untouched.

Returns an object with properties:

- ast `Object` – resulting AST

Options:

- restructure

  Type: `Boolean`  
  Default: `true`

  Disable or enable a structure optimisations.

- forceMediaMerge

  Type: `Boolean`  
  Default: `false`

  Enables merging of `@media` rules with the same media query by splitted by other rules. The optimisation is unsafe in general, but should work fine in most cases. Use it on your own risk.

- clone

  Type: `Boolean`  
  Default: `false`

  Transform a copy of input AST if `true`. Useful in case of AST reuse.

- comments

  Type: `String` or `Boolean`  
  Default: `true`

  Specify what comments to leave:

  - `'exclamation'` or `true` – leave all exclamation comments (i.e. `/*! .. */`)
  - `'first-exclamation'` – remove every comment except first one
  - `false` – remove all comments

- usage

  Type: `Object` or `null`  
  Default: `null`

  Usage data for advanced optimisations (see [Usage data](#usage-data) for details)

- logger

  Type: `Function` or `null`  
  Default: `null`

  Function to track every step of transformation.

### Source maps

To get a source map set `true` for `sourceMap` option. Additianaly `filename` option can be passed to specify source file. When `sourceMap` option is `true`, `map` field of result object will contain a [`SourceMapGenerator`](https://github.com/mozilla/source-map#sourcemapgenerator) instance. This object can be mixed with another source map or translated to string.

```js
var csso = require('csso');
var css = fs.readFileSync('path/to/my.css', 'utf8');
var result = csso.minify(css, {
  filename: 'path/to/my.css', // will be added to source map as reference to source file
  sourceMap: true             // generate source map
});

console.log(result);
// { css: '...minified...', map: SourceMapGenerator {} }

console.log(result.map.toString());
// '{ .. source map content .. }'
```

Example of generating source map with respect of source map from input CSS:

```js
var require('source-map');
var csso = require('csso');
var inputFile = 'path/to/my.css';
var input = fs.readFileSync(inputFile, 'utf8');
var inputMap = input.match(/\/\*# sourceMappingURL=(\S+)\s*\*\/\s*$/);
var output = csso.minify(input, {
  filename: inputFile,
  sourceMap: true
});

// apply input source map to output
if (inputMap) {
  output.map.applySourceMap(
    new SourceMapConsumer(inputMap[1]),
    inputFile
  )
}

// result CSS with source map
console.log(
  output.css +
  '/*# sourceMappingURL=data:application/json;base64,' +
  new Buffer(output.map.toString()).toString('base64') +
  ' */'
);
```

### Usage data

`CSSO` can use data about how `CSS` is used in a markup for better compression. File with this data (`JSON`) can be set using `usage` option. Usage data may contain following sections:

- `blacklist` – a set of black lists (see [Black list filtering](#black-list-filtering))
- `tags` – white list of tags
- `ids` – white list of ids
- `classes` – white list of classes
- `scopes` – groups of classes which never used with classes from other groups on the same element

All sections are optional. Value of `tags`, `ids` and `classes` should be an array of a string, value of `scopes` should be an array of arrays of strings. Other values are ignoring.

#### White list filtering

`tags`, `ids` and `classes` are using on clean stage to filter selectors that contain something not in the lists. Selectors are filtering only by those kind of simple selector which white list is specified. For example, if only `tags` list is specified then type selectors are checking, and if all type selectors in selector present in list or selector has no any type selector it isn't filter.

> `ids` and `classes` are case sensitive, `tags` – is not.

Input CSS:

```css
* { color: green; }
ul, ol, li { color: blue; }
UL.foo, span.bar { color: red; }
```

Usage data:

```json
{
    "tags": ["ul", "LI"]
}
```

Resulting CSS:

```css
*{color:green}ul,li{color:blue}ul.foo{color:red}
```

Filtering performs for nested selectors too. `:not()` pseudos content is ignoring since the result of matching is unpredictable. Example for the same usage data as above:

```css
:nth-child(2n of ul, ol) { color: red }
:nth-child(3n + 1 of img) { color: yellow }
:not(div, ol, ul) { color: green }
:has(:matches(ul, ol), ul, ol) { color: blue }
```

Turns into:

```css
:nth-child(2n of ul){color:red}:not(div,ol,ul){color:green}:has(:matches(ul),ul){color:blue}
```

#### Black list filtering

Black list filtering performs the same as white list filtering, but filters things that mentioned in the lists. `blacklist` can contain the lists `tags`, `ids` and `classes`.

Black list has a higher priority, so when something mentioned in the white list and in the black list then white list occurrence is ignoring. The `:not()` pseudos content ignoring as well.

```css
* { color: green; }
ul, ol, li { color: blue; }
UL.foo, li.bar { color: red; }
```

Usage data:

```json
{
    "blacklist": {
        "tags": ["ul"]
    },
    "tags": ["ul", "LI"]
}
```

Resulting CSS:

```css
*{color:green}li{color:blue}li.bar{color:red}
```

#### Scopes

Scopes is designed for CSS scope isolation solutions such as [css-modules](https://github.com/css-modules/css-modules). Scopes are similar to namespaces and define lists of class names that exclusively used on some markup. This information allows the optimizer to move rules more agressive. Since it assumes selectors from different scopes don't match for the same element. This can improve rule merging.

Suppose we have a file:

```css
.module1-foo { color: red; }
.module1-bar { font-size: 1.5em; background: yellow; }

.module2-baz { color: red; }
.module2-qux { font-size: 1.5em; background: yellow; width: 50px; }
```

It can be assumed that first two rules are never used with the second two on the same markup. But we can't say that for sure without a markup review. The optimizer doesn't know it either and will perform safe transformations only. The result will be the same as input but with no spaces and some semicolons:

```css
.module1-foo{color:red}.module1-bar{font-size:1.5em;background:#ff0}.module2-baz{color:red}.module2-qux{font-size:1.5em;background:#ff0;width:50px}
```

With usage data `CSSO` can produce better output. If follow usage data is provided:

```json
{
    "scopes": [
        ["module1-foo", "module1-bar"],
        ["module2-baz", "module2-qux"]
    ]
}
```

The result will be (29 bytes extra saving):

```css
.module1-foo,.module2-baz{color:red}.module1-bar,.module2-qux{font-size:1.5em;background:#ff0}.module2-qux{width:50px}
```

If class name isn't mentioned in the `scopes` it belongs to default scope. `scopes` data doesn't affect `classes` whitelist. If class name mentioned in `scopes` but missed in `classes` (both sections are specified) it will be filtered.

Note that class name can't be set for several scopes. Also a selector can't have class names from different scopes. In both cases an exception will thrown.

Currently the optimizer doesn't care about changing order safety for out-of-bounds selectors (i.e. selectors that match to elements without class name, e.g. `.scope div` or `.scope ~ :last-child`). It assumes that scoped CSS modules doesn't relay on it's order. It may be fix in future if to be an issue.
