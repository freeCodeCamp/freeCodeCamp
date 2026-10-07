# array-buffer-byte-length <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Get the byte length of an ArrayBuffer, even in engines without a `.byteLength` method.

## Example

```js
const assert = require('assert');
const byteLength = require('array-buffer-byte-length');

assert.equal(byteLength([]), NaN, 'an array is not an ArrayBuffer, yields NaN');

assert.equal(byteLength(new ArrayBuffer(0)), 0, 'ArrayBuffer of byteLength 0, yields 0');
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/array-buffer-byte-length
[npm-version-svg]: https://versionbadg.es/inspect-js/array-buffer-byte-length.svg
[deps-svg]: https://david-dm.org/inspect-js/array-buffer-byte-length.svg
[deps-url]: https://david-dm.org/inspect-js/array-buffer-byte-length
[dev-deps-svg]: https://david-dm.org/inspect-js/array-buffer-byte-length/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/array-buffer-byte-length#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/array-buffer-byte-length.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/array-buffer-byte-length.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/array-buffer-byte-length.svg
[downloads-url]: https://npm-stat.com/charts.html?package=array-buffer-byte-length
[codecov-image]: https://codecov.io/gh/inspect-js/array-buffer-byte-length/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/array-buffer-byte-length/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/array-buffer-byte-length
[actions-url]: https://github.com/inspect-js/array-buffer-byte-length/actions
