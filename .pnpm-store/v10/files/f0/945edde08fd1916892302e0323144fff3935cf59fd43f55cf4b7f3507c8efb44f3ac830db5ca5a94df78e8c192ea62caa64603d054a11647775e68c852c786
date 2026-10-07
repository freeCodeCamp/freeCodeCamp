# es-set-tostringtag <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

A helper to optimistically set Symbol.toStringTag, when possible.

## Example
Most common usage:
```js
var assert = require('assert');
var setToStringTag = require('es-set-tostringtag');

var obj = {};

assert.equal(Object.prototype.toString.call(obj), '[object Object]');

setToStringTag(obj, 'tagged!');

assert.equal(Object.prototype.toString.call(obj), '[object tagged!]');
```

## Options
An optional options argument can be provided as the third argument. The available options are:

### `force`
If the `force` option is set to `true`, the toStringTag will be set even if it is already set.

### `nonConfigurable`
If the `nonConfigurable` option is set to `true`, the toStringTag will be defined as non-configurable when possible.

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.com/package/es-set-tostringtag
[npm-version-svg]: https://versionbadg.es/es-shims/es-set-tostringtag.svg
[deps-svg]: https://david-dm.org/es-shims/es-set-tostringtag.svg
[deps-url]: https://david-dm.org/es-shims/es-set-tostringtag
[dev-deps-svg]: https://david-dm.org/es-shims/es-set-tostringtag/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/es-set-tostringtag#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/es-set-tostringtag.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/es-set-tostringtag.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/es-set-tostringtag.svg
[downloads-url]: https://npm-stat.com/charts.html?package=es-set-tostringtag
[codecov-image]: https://codecov.io/gh/es-shims/es-set-tostringtag/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/es-set-tostringtag/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/es-set-tostringtag
[actions-url]: https://github.com/es-shims/es-set-tostringtag/actions
