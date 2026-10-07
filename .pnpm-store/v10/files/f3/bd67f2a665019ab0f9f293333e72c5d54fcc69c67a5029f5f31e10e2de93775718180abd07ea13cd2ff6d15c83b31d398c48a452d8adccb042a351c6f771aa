# set-proto <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Robustly set the [[Prototype]] of an object. Uses the best available method.

## Getting started

```sh
npm install --save set-proto
```

## Usage/Examples

```js
const assert = require('assert');
const setProto = require('set-proto');

const a = { a: 1, b: 2, [Symbol.toStringTag]: 'foo' };
const b = { c: 3 };

assert.ok(!('c' in a));

setProto(a, b);

assert.ok('c' in a);
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/set-proto
[npm-version-svg]: https://versionbadg.es/ljharb/set-proto.svg
[deps-svg]: https://david-dm.org/ljharb/set-proto.svg
[deps-url]: https://david-dm.org/ljharb/set-proto
[dev-deps-svg]: https://david-dm.org/ljharb/set-proto/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/set-proto#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/set-proto.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/set-proto.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/set-proto.svg
[downloads-url]: https://npm-stat.com/charts.html?package=set-proto
[codecov-image]: https://codecov.io/gh/ljharb/set-proto/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/set-proto/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/set-proto
[actions-url]: https://github.com/ljharb/set-proto/actions
