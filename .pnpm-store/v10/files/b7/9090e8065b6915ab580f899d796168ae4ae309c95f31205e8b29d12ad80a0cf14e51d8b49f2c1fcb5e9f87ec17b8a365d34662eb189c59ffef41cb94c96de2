# has-proto <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Does this environment have the ability to set the [[Prototype]] of an object on creation with `__proto__`?

## Example

```js
var hasProto = require('has-proto');
var assert = require('assert');

assert.equal(typeof hasProto(), 'boolean');

var hasProtoAccessor = require('has-proto/accessor')();
if (hasProtoAccessor) {
	assert.equal([].__proto__, Array.prototype);
} else {
	assert(!('__proto__' in Object.prototype));
}

var hasProtoMutator = require('has-proto/mutator');
var obj = {};
assert('toString' in obj);

obj.__proto__ = null;
if (hasProtoMutator) {
	assert(!('toString' in obj));
} else {
	assert('toString' in obj);
	assert.equal(obj.__proto__, null);
}
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/has-proto
[npm-version-svg]: https://versionbadg.es/inspect-js/has-proto.svg
[deps-svg]: https://david-dm.org/inspect-js/has-proto.svg
[deps-url]: https://david-dm.org/inspect-js/has-proto
[dev-deps-svg]: https://david-dm.org/inspect-js/has-proto/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/has-proto#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/has-proto.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/has-proto.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/has-proto.svg
[downloads-url]: https://npm-stat.com/charts.html?package=has-proto
[codecov-image]: https://codecov.io/gh/inspect-js/has-proto/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/has-proto/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/has-proto
[actions-url]: https://github.com/inspect-js/has-proto/actions
