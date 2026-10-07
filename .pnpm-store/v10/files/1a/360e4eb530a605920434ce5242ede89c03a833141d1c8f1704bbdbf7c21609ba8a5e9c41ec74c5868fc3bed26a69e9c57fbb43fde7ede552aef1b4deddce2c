# object.values <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES2017 spec-compliant `Object.values` shim. Invoke its "shim" method to shim `Object.values` if it is unavailable or noncompliant.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.github.io/ecma262/#sec-object.values).

Most common usage:
```js
var assert = require('assert');
var values = require('object.values');

var obj = { a: 1, b: 2, c: 3 };
var expected = [1, 2, 3];

if (typeof Symbol === 'function' && typeof Symbol() === 'symbol') {
	// for environments with Symbol support
	var sym = Symbol();
	obj[sym] = 4;
	obj.d = sym;
	expected.push(sym);
}

assert.deepEqual(values(obj), expected);

if (!Object.values) {
	values.shim();
}

assert.deepEqual(Object.values(obj), expected);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.com/package/object.values
[npm-version-svg]: https://versionbadg.es/es-shims/Object.values.svg
[deps-svg]: https://david-dm.org/es-shims/Object.values.svg
[deps-url]: https://david-dm.org/es-shims/Object.values
[dev-deps-svg]: https://david-dm.org/es-shims/Object.values/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Object.values#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/object.values.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/object.values.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/object.values.svg
[downloads-url]: https://npm-stat.com/charts.html?package=object.values
[codecov-image]: https://codecov.io/gh/es-shims/Object.values/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Object.values/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Object.values
[actions-url]: https://github.com/es-shims/Object.values/actions
