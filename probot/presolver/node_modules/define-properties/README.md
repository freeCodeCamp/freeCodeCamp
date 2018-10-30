#define-properties <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

[![browser support][testling-svg]][testling-url]

Define multiple non-enumerable properties at once. Uses `Object.defineProperty` when available; falls back to standard assignment in older engines.
Existing properties are not overridden. Accepts a map of property names to a predicate that, when true, force-overrides.

## Example

```js
var define = require('define-properties');
var assert = require('assert');

var obj = define({ a: 1, b: 2 }, {
	a: 10,
	b: 20,
	c: 30
});
assert(obj.a === 1);
assert(obj.b === 2);
assert(obj.c === 30);
if (define.supportsDescriptors) {
	assert.deepEqual(Object.keys(obj), ['a', 'b']);
	assert.deepEqual(Object.getOwnPropertyDescriptor(obj, 'c'), {
		configurable: true,
		enumerable: false,
		value: 30,
		writable: false
	});
}
```

Then, with predicates:
```js
var define = require('define-properties');
var assert = require('assert');

var obj = define({ a: 1, b: 2, c: 3 }, {
	a: 10,
	b: 20,
	c: 30
}, {
	a: function () { return false; },
	b: function () { return true; }
});
assert(obj.a === 1);
assert(obj.b === 20);
assert(obj.c === 3);
if (define.supportsDescriptors) {
	assert.deepEqual(Object.keys(obj), ['a', 'c']);
	assert.deepEqual(Object.getOwnPropertyDescriptor(obj, 'b'), {
		configurable: true,
		enumerable: false,
		value: 20,
		writable: false
	});
}
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/define-properties
[npm-version-svg]: http://versionbadg.es/ljharb/define-properties.svg
[travis-svg]: https://travis-ci.org/ljharb/define-properties.svg
[travis-url]: https://travis-ci.org/ljharb/define-properties
[deps-svg]: https://david-dm.org/ljharb/define-properties.svg
[deps-url]: https://david-dm.org/ljharb/define-properties
[dev-deps-svg]: https://david-dm.org/ljharb/define-properties/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/define-properties#info=devDependencies
[testling-svg]: https://ci.testling.com/ljharb/define-properties.png
[testling-url]: https://ci.testling.com/ljharb/define-properties
[npm-badge-png]: https://nodei.co/npm/define-properties.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/define-properties.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/define-properties.svg
[downloads-url]: http://npm-stat.com/charts.html?package=define-properties

