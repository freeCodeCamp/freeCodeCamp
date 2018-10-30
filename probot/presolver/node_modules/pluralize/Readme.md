# Pluralize

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Pluralize and singularize any word.

## Installation

```
npm install pluralize --save
bower install pluralize --save
```

### Node

```javascript
var pluralize = require('pluralize')
```

### AMD

```javascript
define(function (require, exports, module) {
  var pluralize = require('pluralize')
})
```

### `<script>` tag

```html
<script src="pluralize.js"></script>
```

## Why?

This module uses a pre-defined list of rules, applied in order, to singularize or pluralize a given word. There are many cases where this is useful, such as any automation based on user input. For applications where the word(s) are known ahead of time, you can use a simple ternary (or function) which would be a much lighter alternative.

## Usage

```javascript
pluralize('test') //=> "tests"
pluralize('test', 1) //=> "test"
pluralize('test', 5) //=> "tests"
pluralize('test', 1, true) //=> "1 test"
pluralize('test', 5, true) //=> "5 tests"

pluralize.plural('regex') //=> "regexes"
pluralize.addPluralRule(/gex$/i, 'gexii')
pluralize.plural('regex') //=> "regexii"

pluralize.plural('singles', 1) //=> "single"
pluralize.addSingularRule(/singles$/i, 'singular')
pluralize.plural('singles', 1) //=> "singular"

pluralize.plural('irregular') //=> "irregulars"
pluralize.addIrregularRule('irregular', 'regular')
pluralize.plural('irregular') //=> "regular"

pluralize.plural('paper') //=> "papers"
pluralize.addUncountableRule('paper')
pluralize.plural('paper') //=> "paper"
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/pluralize.svg?style=flat
[npm-url]: https://npmjs.org/package/pluralize
[downloads-image]: https://img.shields.io/npm/dm/pluralize.svg?style=flat
[downloads-url]: https://npmjs.org/package/pluralize
[travis-image]: https://img.shields.io/travis/blakeembrey/pluralize.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/pluralize
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/pluralize.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/pluralize?branch=master
