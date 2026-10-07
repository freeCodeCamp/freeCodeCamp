# is-date-object <sup>[![Version Badge][2]][1]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

Is this value a JS Date object? This module works cross-realm/iframe, and despite ES6 @@toStringTag.

## Example

```js
var isDate = require('is-date-object');
var assert = require('assert');

assert.notOk(isDate(undefined));
assert.notOk(isDate(null));
assert.notOk(isDate(false));
assert.notOk(isDate(true));
assert.notOk(isDate(42));
assert.notOk(isDate('foo'));
assert.notOk(isDate(function () {}));
assert.notOk(isDate([]));
assert.notOk(isDate({}));
assert.notOk(isDate(/a/g));
assert.notOk(isDate(new RegExp('a', 'g')));

assert.ok(isDate(new Date()));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/is-date-object
[2]: https://versionbadg.es/inspect-js/is-date-object.svg
[5]: https://david-dm.org/inspect-js/is-date-object.svg
[6]: https://david-dm.org/inspect-js/is-date-object
[7]: https://david-dm.org/inspect-js/is-date-object/dev-status.svg
[8]: https://david-dm.org/inspect-js/is-date-object#info=devDependencies
[11]: https://nodei.co/npm/is-date-object.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-date-object.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-date-object.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-date-object
[codecov-image]: https://codecov.io/gh/inspect-js/is-date-object/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-date-object/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/is-date-object
[actions-url]: https://github.com/inspect-js/is-date-object/actions
