# Array Flatten

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Flatten an array of nested arrays into a single flat array. Accepts an optional depth.

## Installation

```
npm install array-flatten --save
```

## Usage

```javascript
var flatten = require('array-flatten')

flatten([1, [2, [3, [4, [5], 6], 7], 8], 9])
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9]

flatten([1, [2, [3, [4, [5], 6], 7], 8], 9], 2)
//=> [1, 2, 3, [4, [5], 6], 7, 8, 9]

(function () {
  flatten(arguments) //=> [1, 2, 3]
})(1, [2, 3])
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/array-flatten.svg?style=flat
[npm-url]: https://npmjs.org/package/array-flatten
[downloads-image]: https://img.shields.io/npm/dm/array-flatten.svg?style=flat
[downloads-url]: https://npmjs.org/package/array-flatten
[travis-image]: https://img.shields.io/travis/blakeembrey/array-flatten.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/array-flatten
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/array-flatten.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/array-flatten?branch=master
