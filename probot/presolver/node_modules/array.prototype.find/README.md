[![Build Status](https://travis-ci.org/duncanhall/Array.prototype.find.svg?branch=master)](https://travis-ci.org/duncanhall/Array.prototype.find)

# ES6 `Array.prototype.find` polyfill

Simple ES6 [Array.prototype.find](http://people.mozilla.org/%7Ejorendorff/es6-draft.html#sec-array.prototype.find) polyfill for older environments taken from [es6-shim](https://github.com/paulmillr/es6-shim).

For browsers and node.js.

## Installation
* Just include repo before your scripts.
* `npm install array.prototype.find`

## Usage

* `Array.prototype.find(predicate[, thisArg])` returns first item that matches `predicate` function.
* `predicate(value, index, collection)`: takes three arguments
    * `value`: current collection element
    * `index`: current collection element index
    * `collection`: the collection

```javascript
// as a function
var find = require('array.prototype.find');
find([1, 2], function (x) { return x === 2; }); // 2

// to shim it
require('array.prototype.find').shim();
```

Code example:

```javascript
// Default:
[1, 5, 10, 15].find(function (a) { return a > 9; }) // 10
```

## Acknowledgements

Tests, fixes and travis support added by [_duncanhall](http://twitter.com/_duncanhall)

## License

[The MIT License](https://github.com/paulmillr/mit) (c) 2016 Paul Miller (http://paulmillr.com)
