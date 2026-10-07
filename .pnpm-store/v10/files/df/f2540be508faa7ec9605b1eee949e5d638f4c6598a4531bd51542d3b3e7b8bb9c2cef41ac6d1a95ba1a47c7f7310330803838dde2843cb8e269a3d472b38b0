# is-string <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Is this value a JS String object or primitive? This module works cross-realm/iframe, and despite ES6 @@toStringTag.

## Example

```js
var isString = require('is-string');
var assert = require('assert');

assert.notOk(isString(undefined));
assert.notOk(isString(null));
assert.notOk(isString(false));
assert.notOk(isString(true));
assert.notOk(isString(function () {}));
assert.notOk(isString([]));
assert.notOk(isString({}));
assert.notOk(isString(/a/g));
assert.notOk(isString(new RegExp('a', 'g')));
assert.notOk(isString(new Date()));
assert.notOk(isString(42));
assert.notOk(isString(NaN));
assert.notOk(isString(Infinity));
assert.notOk(isString(new Number(42)));

assert.ok(isString('foo'));
assert.ok(isString(Object('foo')));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/is-string
[npm-version-svg]: https://versionbadg.es/inspect-js/is-string.svg
[deps-svg]: https://david-dm.org/inspect-js/is-string.svg
[deps-url]: https://david-dm.org/inspect-js/is-string
[dev-deps-svg]: https://david-dm.org/inspect-js/is-string/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/is-string#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/is-string.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-string.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-string.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-string
[codecov-image]: https://codecov.io/gh/inspect-js/is-string/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-string/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/is-string
[actions-url]: https://github.com/inspect-js/is-string/actions
