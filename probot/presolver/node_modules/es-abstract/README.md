# es-abstract <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

[![browser support][testling-svg]][testling-url]

ECMAScript spec abstract operations.
When different versions of the spec conflict, the default export will be the latest version of the abstract operation.
All abstract operations will also be available under an `es5`/`es2015`/`es2016` entry point, and exported property, if you require a specific version.

## Example

```js
var ES = require('es-abstract');
var assert = require('assert');

assert(ES.isCallable(function () {}));
assert(!ES.isCallable(/a/g));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/es-abstract
[npm-version-svg]: http://versionbadg.es/ljharb/es-abstract.svg
[travis-svg]: https://travis-ci.org/ljharb/es-abstract.svg
[travis-url]: https://travis-ci.org/ljharb/es-abstract
[deps-svg]: https://david-dm.org/ljharb/es-abstract.svg
[deps-url]: https://david-dm.org/ljharb/es-abstract
[dev-deps-svg]: https://david-dm.org/ljharb/es-abstract/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/es-abstract#info=devDependencies
[testling-svg]: https://ci.testling.com/ljharb/es-abstract.png
[testling-url]: https://ci.testling.com/ljharb/es-abstract
[npm-badge-png]: https://nodei.co/npm/es-abstract.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/es-abstract.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/es-abstract.svg
[downloads-url]: https://npm-stat.com/charts.html?package=es-abstract
