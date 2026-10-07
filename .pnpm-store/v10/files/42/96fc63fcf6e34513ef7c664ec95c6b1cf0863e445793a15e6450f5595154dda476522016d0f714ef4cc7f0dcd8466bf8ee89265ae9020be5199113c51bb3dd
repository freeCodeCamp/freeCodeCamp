# has-tostringtag <sup>[![Version Badge][2]][1]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

Determine if the JS environment has `Symbol.toStringTag` support. Supports spec, or shams.

## Example

```js
var hasSymbolToStringTag = require('has-tostringtag');

hasSymbolToStringTag() === true; // if the environment has native Symbol.toStringTag support. Not polyfillable, not forgeable.

var hasSymbolToStringTagKinda = require('has-tostringtag/shams');
hasSymbolToStringTagKinda() === true; // if the environment has a Symbol.toStringTag sham that mostly follows the spec.
```

## Supported Symbol shams
 - get-own-property-symbols [npm](https://www.npmjs.com/package/get-own-property-symbols) | [github](https://github.com/WebReflection/get-own-property-symbols)
 - core-js [npm](https://www.npmjs.com/package/core-js) | [github](https://github.com/zloirock/core-js)

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/has-tostringtag
[2]: https://versionbadg.es/inspect-js/has-tostringtag.svg
[5]: https://david-dm.org/inspect-js/has-tostringtag.svg
[6]: https://david-dm.org/inspect-js/has-tostringtag
[7]: https://david-dm.org/inspect-js/has-tostringtag/dev-status.svg
[8]: https://david-dm.org/inspect-js/has-tostringtag#info=devDependencies
[11]: https://nodei.co/npm/has-tostringtag.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/has-tostringtag.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/has-tostringtag.svg
[downloads-url]: https://npm-stat.com/charts.html?package=has-tostringtag
[codecov-image]: https://codecov.io/gh/inspect-js/has-tostringtag/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/has-tostringtag/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/has-tostringtag
[actions-url]: https://github.com/inspect-js/has-tostringtag/actions
