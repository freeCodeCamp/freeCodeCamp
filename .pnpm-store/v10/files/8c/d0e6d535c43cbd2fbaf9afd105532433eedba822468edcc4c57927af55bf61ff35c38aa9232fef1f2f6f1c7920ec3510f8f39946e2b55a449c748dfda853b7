# is-number-object <sup>[![Version Badge][2]][1]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

Is this value a JS Number object? This module works cross-realm/iframe, and despite ES6 @@toStringTag.

## Example

```js
var isNumber = require('is-number-object');
var assert = require('assert');

assert.notOk(isNumber(undefined));
assert.notOk(isNumber(null));
assert.notOk(isNumber(false));
assert.notOk(isNumber(true));
assert.notOk(isNumber('foo'));
assert.notOk(isNumber(function () {}));
assert.notOk(isNumber([]));
assert.notOk(isNumber({}));
assert.notOk(isNumber(/a/g));
assert.notOk(isNumber(new RegExp('a', 'g')));
assert.notOk(isNumber(new Date()));

assert.ok(isNumber(42));
assert.ok(isNumber(NaN));
assert.ok(isNumber(Infinity));
assert.ok(isNumber(new Number(42)));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/is-number-object
[2]: https://versionbadg.es/inspect-js/is-number-object.svg
[5]: https://david-dm.org/inspect-js/is-number-object.svg
[6]: https://david-dm.org/inspect-js/is-number-object
[7]: https://david-dm.org/inspect-js/is-number-object/dev-status.svg
[8]: https://david-dm.org/inspect-js/is-number-object#info=devDependencies
[11]: https://nodei.co/npm/is-number-object.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-number-object.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-number-object.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-number-object
[codecov-image]: https://codecov.io/gh/inspect-js/is-number-object/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-number-object/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/is-number-object
[actions-url]: https://github.com/inspect-js/is-number-object/actions
