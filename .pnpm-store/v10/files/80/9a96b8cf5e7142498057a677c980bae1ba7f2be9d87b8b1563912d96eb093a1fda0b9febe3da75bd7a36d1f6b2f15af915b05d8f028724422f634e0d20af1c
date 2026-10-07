# reflect.getprototypeof <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES2015 mostly-spec-compliant `Reflect.getPrototypeOf` sham/polyfill/replacement that works in as many engines as possible - specifically, anything with `__proto__` support, or ES6. Built-in types will also work correctly in older engines.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://www.ecma-international.org/ecma-262/5.1/).

## Example

```js
var getPrototypeOf = require('reflect.getprototypeof');
var assert = require('assert');

assert.throws(() => getPrototypeOf(true));
assert.throws(() => getPrototypeOf(42));
assert.throws(() => getPrototypeOf(''));
assert.equal(getPrototypeOf(/a/g), RegExp.prototype);
assert.equal(getPrototypeOf(new Date()), Date.prototype);
assert.equal(getPrototypeOf(function () {}), Function.prototype);
assert.equal(getPrototypeOf([]), Array.prototype);
assert.equal(getPrototypeOf({}), Object.prototype);
```

```js
var getPrototypeOf = require('reflect.getprototypeof');
var assert = require('assert');
/* when Reflect or Reflect.getPrototypeOf is not present */
if (typeof Reflect === 'object') { delete Reflect.getPrototypeOf; }
delete globalThis.Reflect;
var shimmed = getPrototypeOf.shim();
assert.equal(shimmed, getPrototypeOf.getPolyfill());

assert.throws(() => Reflect.getPrototypeOf(true));
assert.throws(() => Reflect.getPrototypeOf(42));
assert.throws(() => Reflect.getPrototypeOf(''));
assert.equal(Reflect.getPrototypeOf(/a/g), RegExp.prototype);
assert.equal(Reflect.getPrototypeOf(new Date()), Date.prototype);
assert.equal(Reflect.getPrototypeOf(function () {}), Function.prototype);
assert.equal(Reflect.getPrototypeOf([]), Array.prototype);
assert.equal(Reflect.getPrototypeOf({}), Object.prototype);
```

```js
var getPrototypeOf = require('reflect.getprototypeof');
var assert = require('assert');
/* when Reflect.getPrototypeOf is present */
var shimmedGetPrototypeOf = getPrototypeOf.shim();
assert.equal(shimmedGetPrototypeOf, Reflect.getPrototypeOf);
assert.equal(Reflect.getPrototypeOf([]), Array.prototype);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/reflect.getprototypeof
[npm-version-svg]: https://versionbadg.es/es-shims/Reflect.getPrototypeOf.svg
[deps-svg]: https://david-dm.org/es-shims/Reflect.getPrototypeOf.svg
[deps-url]: https://david-dm.org/es-shims/Reflect.getPrototypeOf
[dev-deps-svg]: https://david-dm.org/es-shims/Reflect.getPrototypeOf/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Reflect.getPrototypeOf#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/reflect.getprototypeof.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/reflect.getprototypeof.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/reflect.getprototypeof.svg
[downloads-url]: https://npm-stat.com/charts.html?package=reflect.getprototypeof
[codecov-image]: https://codecov.io/gh/es-shims/Reflect.getPrototypeOf/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Reflect.getPrototypeOf/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Reflect.getPrototypeOf
[actions-url]: https://github.com/es-shims/Reflect.getPrototypeOf/actions
