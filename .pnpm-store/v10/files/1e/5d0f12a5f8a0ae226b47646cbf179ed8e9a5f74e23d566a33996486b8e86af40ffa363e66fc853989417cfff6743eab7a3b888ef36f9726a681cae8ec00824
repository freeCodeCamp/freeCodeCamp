# globalThis <sup>[![Version Badge][npm-version-svg]][npm-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][npm-url]

An ECMAScript spec-compliant polyfill/shim for `globalThis`. Invoke its "shim" method to shim `globalThis` if it is unavailable.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec proposal](https://github.com/tc39/proposal-global).

Most common usage:
```js
var globalThis = require('globalthis')(); // returns native globalThis if compliant
	/* or */
var globalThis = require('globalthis/polyfill')(); // returns native globalThis if compliant
```

## Example

```js
var assert = require('assert');

// the below function is not CSP-compliant, but reliably gets the
// global object in sloppy mode in every engine.
var getGlobal = Function('return this');

assert.equal(globalThis, getGlobal());
```

```js
/* when `globalThis` is not present */
var shimmedGlobal = require('globalthis').shim();
	/* or */
var shimmedGlobal = require('globalthis/shim')();

assert.equal(shimmedGlobal, globalThis);
assert.equal(shimmedGlobal, getGlobal());
```

```js
/* when `globalThis` is present */
var shimmedGlobal = require('globalthis').shim();

assert.equal(shimmedGlobal, globalThis);
assert.equal(shimmedGlobal, getGlobal());
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[npm-url]: https://npmjs.org/package/globalthis
[npm-version-svg]: https://versionbadg.es/ljharb/globalThis.svg
[deps-svg]: https://david-dm.org/ljharb/globalThis.svg?theme=shields.io
[deps-url]: https://david-dm.org/ljharb/globalThis
[dev-deps-svg]: https://david-dm.org/ljharb/globalThis/dev-status.svg?theme=shields.io
[dev-deps-url]: https://david-dm.org/ljharb/globalThis#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/globalthis.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/globalthis.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/globalthis.svg
[downloads-url]: https://npm-stat.com/charts.html?package=globalthis
[codecov-image]: https://codecov.io/gh/es-shims/globalThis/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/globalThis/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/globalThis
[actions-url]: https://github.com/es-shims/globalThis/actions
