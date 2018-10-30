#object.getownpropertydescriptors <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

[![browser support][testling-svg]][testling-url]

An ES2017 spec-compliant shim for `Object.getOwnPropertyDescriptors` that works in ES5.
Invoke its "shim" method to shim `Object.getOwnPropertyDescriptors` if it is unavailable, and if `Object.getOwnPropertyDescriptor` is available.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://github.com/tc39/ecma262/pull/582).

## Example

```js
var getDescriptors = require('object.getownpropertydescriptors');
var assert = require('assert');
var obj = { normal: Infinity };
var enumDescriptor = {
	enumerable: false,
	writable: false,
	configurable: true,
	value: true
};
var writableDescriptor = {
	enumerable: true,
	writable: true,
	configurable: true,
	value: 42
};
var symbol = Symbol();
var symDescriptor = {
	enumerable: true,
	writable: true,
	configurable: false,
	value: [symbol]
};

Object.defineProperty(obj, 'enumerable', enumDescriptor);
Object.defineProperty(obj, 'writable', writableDescriptor);
Object.defineProperty(obj, 'symbol', symDescriptor);

var descriptors = getDescriptors(obj);

assert.deepEqual(descriptors, {
	normal: {
		enumerable: true,
		writable: true,
		configurable: true,
		value: Infinity
	},
	enumerable: enumDescriptor,
	writable: writableDescriptor,
	symbol: symDescriptor
});
```

```js
var getDescriptors = require('object.getownpropertydescriptors');
var assert = require('assert');
/* when Object.getOwnPropertyDescriptors is not present */
delete Object.getOwnPropertyDescriptors;
var shimmedDescriptors = getDescriptors.shim();
assert.equal(shimmedDescriptors, getDescriptors);
assert.deepEqual(shimmedDescriptors(obj), getDescriptors(obj));
```

```js
var getDescriptors = require('object.getownpropertydescriptors');
var assert = require('assert');
/* when Object.getOwnPropertyDescriptors is present */
var shimmedDescriptors = getDescriptors.shim();
assert.notEqual(shimmedDescriptors, getDescriptors);
assert.deepEqual(shimmedDescriptors(obj), getDescriptors(obj));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/object.getownpropertydescriptors
[npm-version-svg]: http://versionbadg.es/ljharb/object.getownpropertydescriptors.svg
[travis-svg]: https://travis-ci.org/ljharb/object.getownpropertydescriptors.svg
[travis-url]: https://travis-ci.org/ljharb/object.getownpropertydescriptors
[deps-svg]: https://david-dm.org/ljharb/object.getownpropertydescriptors.svg
[deps-url]: https://david-dm.org/ljharb/object.getownpropertydescriptors
[dev-deps-svg]: https://david-dm.org/ljharb/object.getownpropertydescriptors/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/object.getownpropertydescriptors#info=devDependencies
[testling-svg]: https://ci.testling.com/ljharb/object.getownpropertydescriptors.png
[testling-url]: https://ci.testling.com/ljharb/object.getownpropertydescriptors
[npm-badge-png]: https://nodei.co/npm/object.getownpropertydescriptors.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/object.getownpropertydescriptors.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/object.getownpropertydescriptors.svg
[downloads-url]: http://npm-stat.com/charts.html?package=object.getownpropertydescriptors
