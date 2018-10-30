#object-keys <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

[![browser support][testling-svg]][testling-url]

An Object.keys shim. Invoke its "shim" method to shim Object.keys if it is unavailable.

Most common usage:
```js
var keys = Object.keys || require('object-keys');
```

## Example

```js
var keys = require('object-keys');
var assert = require('assert');
var obj = {
	a: true,
	b: true,
	c: true
};

assert.deepEqual(keys(obj), ['a', 'b', 'c']);
```

```js
var keys = require('object-keys');
var assert = require('assert');
/* when Object.keys is not present */
delete Object.keys;
var shimmedKeys = keys.shim();
assert.equal(shimmedKeys, keys);
assert.deepEqual(Object.keys(obj), keys(obj));
```

```js
var keys = require('object-keys');
var assert = require('assert');
/* when Object.keys is present */
var shimmedKeys = keys.shim();
assert.equal(shimmedKeys, Object.keys);
assert.deepEqual(Object.keys(obj), keys(obj));
```

## Source
Implementation taken directly from [es5-shim][es5-shim-url], with modifications, including from [lodash][lodash-url].

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/object-keys
[npm-version-svg]: http://versionbadg.es/ljharb/object-keys.svg
[travis-svg]: https://travis-ci.org/ljharb/object-keys.svg
[travis-url]: https://travis-ci.org/ljharb/object-keys
[deps-svg]: https://david-dm.org/ljharb/object-keys.svg
[deps-url]: https://david-dm.org/ljharb/object-keys
[dev-deps-svg]: https://david-dm.org/ljharb/object-keys/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/object-keys#info=devDependencies
[testling-svg]: https://ci.testling.com/ljharb/object-keys.png
[testling-url]: https://ci.testling.com/ljharb/object-keys
[es5-shim-url]: https://github.com/es-shims/es5-shim/blob/master/es5-shim.js#L542-589
[lodash-url]: https://github.com/lodash/lodash
[npm-badge-png]: https://nodei.co/npm/object-keys.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/object-keys.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/object-keys.svg
[downloads-url]: http://npm-stat.com/charts.html?package=object-keys

