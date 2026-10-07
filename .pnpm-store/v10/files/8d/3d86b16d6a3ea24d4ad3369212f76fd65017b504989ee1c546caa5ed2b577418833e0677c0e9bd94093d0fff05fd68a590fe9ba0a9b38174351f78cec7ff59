# array.prototype.findlastindex <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Array.prototype.findLastIndex` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the proposed [spec](https://tc39.es/proposal-array-find-from-last).

Because `Array.prototype.findLastIndex` depends on a receiver (the `this` value), the main export takes the array to operate on as the first argument.

## Getting started

```sh
npm install --save array.prototype.findlastindex
```

## Usage/Examples

```js
var findLastIndex = require('array.prototype.findlastindex');
var assert = require('assert');

var arr = [1, [2], [], 3, [[4]]];
var isNumber = function (x) { return typeof x === 'number' };

assert.deepEqual(findLastIndex(arr, isNumber), 3);
```

```js
var findLastIndex = require('array.prototype.findlastindex');
var assert = require('assert');
/* when Array#findLastIndex is not present */
delete Array.prototype.findLastIndex;
var shimmed = findLastIndex.shim();

assert.equal(shimmed, findLastIndex.getPolyfill());
assert.deepEqual(arr.findLastIndex(isNumber), findLastIndex(arr, isNumber));
```

```js
var findLastIndex = require('array.prototype.findlastindex');
var assert = require('assert');
/* when Array#findLastIndex is present */
var shimmed = findLastIndex.shim();

assert.equal(shimmed, Array.prototype.findLastIndex);
assert.deepEqual(arr.findLastIndex(isNumber), findLastIndex(arr, isNumber));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/array.prototype.findlastindex
[npm-version-svg]: https://versionbadg.es/es-shims/Array.prototype.findLastIndex.svg
[deps-svg]: https://david-dm.org/es-shims/Array.prototype.findLastIndex.svg
[deps-url]: https://david-dm.org/es-shims/Array.prototype.findLastIndex
[dev-deps-svg]: https://david-dm.org/es-shims/Array.prototype.findLastIndex/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Array.prototype.findLastIndex#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/array.prototype.findlastindex.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/array.prototype.findlastindex.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/array.prototype.findlastindex.svg
[downloads-url]: https://npm-stat.com/charts.html?package=array.prototype.findlastindex
[codecov-image]: https://codecov.io/gh/es-shims/Array.prototype.findLastIndex/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Array.prototype.findLastIndex/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Array.prototype.findLastIndex
[actions-url]: https://github.com/es-shims/Array.prototype.findLastIndex
