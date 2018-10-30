# es-to-primitive <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

ECMAScript “ToPrimitive” algorithm. Provides ES5 and ES2015 versions.
When different versions of the spec conflict, the default export will be the latest version of the abstract operation.
Alternative versions will also be available under an `es5`/`es2015` exported property if you require a specific version.

## Example

```js
var toPrimitive = require('es-to-primitive');
var assert = require('assert');

assert(toPrimitive(function () {}) === String(function () {}));

var date = new Date();
assert(toPrimitive(date) === String(date));

assert(toPrimitive({ valueOf: function () { return 3; } }) === 3);

assert(toPrimitive(['a', 'b', 3]) === String(['a', 'b', 3]));

var sym = Symbol();
assert(toPrimitive(Object(sym)) === sym);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/es-to-primitive
[npm-version-svg]: http://versionbadg.es/ljharb/es-to-primitive.svg
[travis-svg]: https://travis-ci.org/ljharb/es-to-primitive.svg
[travis-url]: https://travis-ci.org/ljharb/es-to-primitive
[deps-svg]: https://david-dm.org/ljharb/es-to-primitive.svg
[deps-url]: https://david-dm.org/ljharb/es-to-primitive
[dev-deps-svg]: https://david-dm.org/ljharb/es-to-primitive/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/es-to-primitive#info=devDependencies
[testling-svg]: https://ci.testling.com/ljharb/es-to-primitive.png
[testling-url]: https://ci.testling.com/ljharb/es-to-primitive
[npm-badge-png]: https://nodei.co/npm/es-to-primitive.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/es-to-primitive.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/es-to-primitive.svg
[downloads-url]: http://npm-stat.com/charts.html?package=es-to-primitive
