# is-boolean-object <sup>[![Version Badge][2]][1]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

Is this value a JS Boolean? This module works cross-realm/iframe, and despite ES6 @@toStringTag.

## Example

```js
var isBoolean = require('is-boolean-object');
var assert = require('assert');

assert.notOk(isBoolean(undefined));
assert.notOk(isBoolean(null));
assert.notOk(isBoolean('foo'));
assert.notOk(isBoolean(function () {}));
assert.notOk(isBoolean([]));
assert.notOk(isBoolean({}));
assert.notOk(isBoolean(/a/g));
assert.notOk(isBoolean(new RegExp('a', 'g')));
assert.notOk(isBoolean(new Date()));
assert.notOk(isBoolean(42));
assert.notOk(isBoolean(NaN));
assert.notOk(isBoolean(Infinity));

assert.ok(isBoolean(new Boolean(42)));
assert.ok(isBoolean(false));
assert.ok(isBoolean(Object(false)));
assert.ok(isBoolean(true));
assert.ok(isBoolean(Object(true)));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/is-boolean-object
[2]: https://versionbadg.es/inspect-js/is-boolean-object.svg
[5]: https://david-dm.org/inspect-js/is-boolean-object.svg
[6]: https://david-dm.org/inspect-js/is-boolean-object
[7]: https://david-dm.org/inspect-js/is-boolean-object/dev-status.svg
[8]: https://david-dm.org/inspect-js/is-boolean-object#info=devDependencies
[11]: https://nodei.co/npm/is-boolean-object.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-boolean-object.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-boolean-object.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-boolean-object
[codecov-image]: https://codecov.io/gh/inspect-js/is-boolean-object/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-boolean-object/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/is-boolean-object
[actions-url]: https://github.com/inspect-js/is-boolean-object/actions
