# has-property-descriptors <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Does the environment have full property descriptor support? Handles IE 8's broken defineProperty/gOPD.

## Example

```js
var hasPropertyDescriptors = require('has-property-descriptors');
var assert = require('assert');

assert.equal(hasPropertyDescriptors(), true); // will be `false` in IE 6-8, and ES5 engines

// Arrays can not have their length `[[Defined]]` in some engines
assert.equal(hasPropertyDescriptors.hasArrayLengthDefineBug(), false); // will be `true` in Firefox 4-22, and node v0.6
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/has-property-descriptors
[npm-version-svg]: https://versionbadg.es/inspect-js/has-property-descriptors.svg
[deps-svg]: https://david-dm.org/inspect-js/has-property-descriptors.svg
[deps-url]: https://david-dm.org/inspect-js/has-property-descriptors
[dev-deps-svg]: https://david-dm.org/inspect-js/has-property-descriptors/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/has-property-descriptors#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/has-property-descriptors.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/has-property-descriptors.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/has-property-descriptors.svg
[downloads-url]: https://npm-stat.com/charts.html?package=has-property-descriptors
[codecov-image]: https://codecov.io/gh/inspect-js/has-property-descriptors/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/has-property-descriptors/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/has-property-descriptors
[actions-url]: https://github.com/inspect-js/has-property-descriptors/actions
