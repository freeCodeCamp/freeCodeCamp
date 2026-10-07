# dunder-proto <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

If available, the `Object.prototype.__proto__` accessor and mutator, call-bound.

## Getting started

```sh
npm install --save dunder-proto
```

## Usage/Examples

```js
const assert = require('assert');
const getDunder = require('dunder-proto/get');
const setDunder = require('dunder-proto/set');

const obj = {};

assert.equal('toString' in obj, true);
assert.equal(getDunder(obj), Object.prototype);

setDunder(obj, null);

assert.equal('toString' in obj, false);
assert.equal(getDunder(obj), null);
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/dunder-proto
[npm-version-svg]: https://versionbadg.es/es-shims/dunder-proto.svg
[deps-svg]: https://david-dm.org/es-shims/dunder-proto.svg
[deps-url]: https://david-dm.org/es-shims/dunder-proto
[dev-deps-svg]: https://david-dm.org/es-shims/dunder-proto/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/dunder-proto#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/dunder-proto.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/dunder-proto.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/dunder-proto.svg
[downloads-url]: https://npm-stat.com/charts.html?package=dunder-proto
[codecov-image]: https://codecov.io/gh/es-shims/dunder-proto/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/dunder-proto/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/dunder-proto
[actions-url]: https://github.com/es-shims/dunder-proto/actions
