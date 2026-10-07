# data-view-byte-length <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Get the `byteLength` out of a DataView, robustly.

This will work in node <= 0.10 and < 0.11.4, where there's no prototype accessor, only a nonconfigurable own property.
It will also work in modern engines where `DataView.prototype.byteLength` has been deleted after this module has loaded.

## Example

```js
const dataViewByteLength = require('data-view-byte-length');
const assert = require('assert');

const ab = new ArrayBuffer(42);
const dv = new DataView(ab);
assert.equal(dataViewByteLength(dv), 42);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/data-view-byte-length
[npm-version-svg]: https://versionbadg.es/inspect-js/data-view-byte-length.svg
[deps-svg]: https://david-dm.org/inspect-js/data-view-byte-length.svg
[deps-url]: https://david-dm.org/inspect-js/data-view-byte-length
[dev-deps-svg]: https://david-dm.org/inspect-js/data-view-byte-length/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/data-view-byte-length#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/data-view-byte-length.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/data-view-byte-length.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/data-view-byte-length.svg
[downloads-url]: https://npm-stat.com/charts.html?package=data-view-byte-length
[codecov-image]: https://codecov.io/gh/inspect-js/data-view-byte-length/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/data-view-byte-length/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/data-view-byte-length
[actions-url]: https://github.com/inspect-js/data-view-byte-length/actions
