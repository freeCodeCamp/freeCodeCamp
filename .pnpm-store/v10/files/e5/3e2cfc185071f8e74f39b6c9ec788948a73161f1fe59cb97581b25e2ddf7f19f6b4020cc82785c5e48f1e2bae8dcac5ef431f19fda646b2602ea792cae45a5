# typed-array-buffer <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Get the ArrayBuffer out of a TypedArray, robustly.

This will work in node <= 0.10 and < 0.11.4, where there's no prototype accessor, only a nonconfigurable own property.
It will also work in modern engines where `TypedArray.prototype.buffer` has been deleted after this module has loaded.

## Example

```js
const typedArrayBuffer = require('typed-array-buffer');
const assert = require('assert');

const arr = new Uint8Array(0);
assert.equal(arr.buffer, typedArrayBuffer(arr));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/typed-array-buffer
[npm-version-svg]: https://versionbadg.es/inspect-js/typed-array-buffer.svg
[deps-svg]: https://david-dm.org/inspect-js/typed-array-buffer.svg
[deps-url]: https://david-dm.org/inspect-js/typed-array-buffer
[dev-deps-svg]: https://david-dm.org/inspect-js/typed-array-buffer/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/typed-array-buffer#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/typed-array-buffer.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/typed-array-buffer.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/typed-array-buffer.svg
[downloads-url]: https://npm-stat.com/charts.html?package=typed-array-buffer
[codecov-image]: https://codecov.io/gh/inspect-js/typed-array-buffer/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/typed-array-buffer/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/typed-array-buffer
[actions-url]: https://github.com/inspect-js/typed-array-buffer/actions
