# has-symbols <sup>[![Version Badge][2]][1]</sup>

[![Build Status][3]][4]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

Determine if the JS environment has Symbol support. Supports spec, or shams.

## Example

```js
var hasSymbols = require('has-symbols');

hasSymbols() === true; // if the environment has native Symbol support. Not polyfillable, not forgeable.

var hasSymbolsKinda = require('has-symbols/shams');
hasSymbolsKinda() === true; // if the environment has a Symbol sham that mostly follows the spec.
```

## Supported Symbol shams
 - get-own-property-symbols [npm](https://www.npmjs.com/package/get-own-property-symbols) | [github](https://github.com/WebReflection/get-own-property-symbols)
 - core-js [npm](https://www.npmjs.com/package/core-js) | [github](https://github.com/zloirock/core-js)

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/has-symbols
[2]: http://versionbadg.es/ljharb/has-symbols.svg
[3]: https://travis-ci.org/ljharb/has-symbols.svg
[4]: https://travis-ci.org/ljharb/has-symbols
[5]: https://david-dm.org/ljharb/has-symbols.svg
[6]: https://david-dm.org/ljharb/has-symbols
[7]: https://david-dm.org/ljharb/has-symbols/dev-status.svg
[8]: https://david-dm.org/ljharb/has-symbols#info=devDependencies
[9]: https://ci.testling.com/ljharb/has-symbols.png
[10]: https://ci.testling.com/ljharb/has-symbols
[11]: https://nodei.co/npm/has-symbols.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/has-symbols.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/has-symbols.svg
[downloads-url]: http://npm-stat.com/charts.html?package=has-symbols
