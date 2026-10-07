# is-nan <sup>[![Version Badge][2]][1]</sup>

[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

ES2015-compliant shim for Number.isNaN - the global isNaN returns false positives.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan).

## Example

```js
Number.isNaN = require('is-nan');
var assert = require('assert');

assert.notOk(Number.isNaN(undefined));
assert.notOk(Number.isNaN(null));
assert.notOk(Number.isNaN(false));
assert.notOk(Number.isNaN(true));
assert.notOk(Number.isNaN(0));
assert.notOk(Number.isNaN(42));
assert.notOk(Number.isNaN(Infinity));
assert.notOk(Number.isNaN(-Infinity));
assert.notOk(Number.isNaN('foo'));
assert.notOk(Number.isNaN(function () {}));
assert.notOk(Number.isNaN([]));
assert.notOk(Number.isNaN({}));

assert.ok(Number.isNaN(NaN));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/is-nan
[2]: https://versionbadg.es/es-shims/is-nan.svg
[5]: https://david-dm.org/es-shims/is-nan.svg
[6]: https://david-dm.org/es-shims/is-nan
[7]: https://david-dm.org/es-shims/is-nan/dev-status.svg
[8]: https://david-dm.org/es-shims/is-nan#info=devDependencies
[11]: https://nodei.co/npm/is-nan.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-nan.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-nan.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-nan
