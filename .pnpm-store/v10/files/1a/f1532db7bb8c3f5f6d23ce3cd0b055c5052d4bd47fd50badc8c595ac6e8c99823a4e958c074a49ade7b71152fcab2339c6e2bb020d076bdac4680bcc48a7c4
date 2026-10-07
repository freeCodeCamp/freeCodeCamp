# call-bound <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Robust call-bound JavaScript intrinsics, using `call-bind` and `get-intrinsic`.

## Getting started

```sh
npm install --save call-bound
```

## Usage/Examples

```js
const assert = require('assert');
const callBound = require('call-bound');

const slice = callBound('Array.prototype.slice');

delete Function.prototype.call;
delete Function.prototype.bind;
delete Array.prototype.slice;

assert.deepEqual(slice([1, 2, 3, 4], 1, -1), [2, 3]);
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/call-bound
[npm-version-svg]: https://versionbadg.es/ljharb/call-bound.svg
[deps-svg]: https://david-dm.org/ljharb/call-bound.svg
[deps-url]: https://david-dm.org/ljharb/call-bound
[dev-deps-svg]: https://david-dm.org/ljharb/call-bound/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/call-bound#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/call-bound.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/call-bound.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/call-bound.svg
[downloads-url]: https://npm-stat.com/charts.html?package=call-bound
[codecov-image]: https://codecov.io/gh/ljharb/call-bound/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/call-bound/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/call-bound
[actions-url]: https://github.com/ljharb/call-bound/actions
