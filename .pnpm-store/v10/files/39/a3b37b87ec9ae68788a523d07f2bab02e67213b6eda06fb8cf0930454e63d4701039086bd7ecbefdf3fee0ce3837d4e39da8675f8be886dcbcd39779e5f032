# get-proto <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Robustly get the [[Prototype]] of an object. Uses the best available method.

## Getting started

```sh
npm install --save get-proto
```

## Usage/Examples

```js
const assert = require('assert');
const getProto = require('get-proto');

const a = { a: 1, b: 2, [Symbol.toStringTag]: 'foo' };
const b = { c: 3, __proto__: a };

assert.equal(getProto(b), a);
assert.equal(getProto(a), Object.prototype);
assert.equal(getProto({ __proto__: null }), null);
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/get-proto
[npm-version-svg]: https://versionbadg.es/ljharb/get-proto.svg
[deps-svg]: https://david-dm.org/ljharb/get-proto.svg
[deps-url]: https://david-dm.org/ljharb/get-proto
[dev-deps-svg]: https://david-dm.org/ljharb/get-proto/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/get-proto#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/get-proto.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/get-proto.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/get-proto.svg
[downloads-url]: https://npm-stat.com/charts.html?package=get-proto
[codecov-image]: https://codecov.io/gh/ljharb/get-proto/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/get-proto/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/get-proto
[actions-url]: https://github.com/ljharb/get-proto/actions
