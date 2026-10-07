# safe-push-apply <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Push an array of items into an array, while being robust against prototype modification.

## Getting started

```sh
npm install --save safe-push-apply
```

## Usage/Examples

```js
var safePushApply = require('safe-push-apply');
var assert = require('assert');

var arr = [1, 2, 3];

var orig = Array.prototype[Symbol.iterator];
delete Array.prototype[Symbol.iterator];
assert.throws(() => {
    try {
        arr.push(...[3, 4, 5]);
    } finally {
        Array.prototype[Symbol.iterator] = orig;
    }
}, 'array is not iterable anymore');

delete Array.prototype.push;
safePushApply(arr, [3, 4, 5]);

assert.deepEqual(arr, [1, 2, 3, 3, 4, 5]);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/safe-push-apply
[npm-version-svg]: https://versionbadg.es/ljharb/safe-push-apply.svg
[deps-svg]: https://david-dm.org/ljharb/safe-push-apply.svg
[deps-url]: https://david-dm.org/ljharb/safe-push-apply
[dev-deps-svg]: https://david-dm.org/ljharb/safe-push-apply/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/safe-push-apply#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/safe-push-apply.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/safe-push-apply.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/safe-push-apply.svg
[downloads-url]: https://npm-stat.com/charts.html?package=safe-push-apply
[codecov-image]: https://codecov.io/gh/ljharb/safe-push-apply/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/safe-push-apply/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/safe-push-apply
[actions-url]: https://github.com/ljharb/safe-push-apply/actions
