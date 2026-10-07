# is-regex <sup>[![Version Badge][2]][1]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

Is this value a JS regex?
This module works cross-realm/iframe, and despite ES6 @@toStringTag.

## Example

```js
var isRegex = require('is-regex');
var assert = require('assert');

assert.notOk(isRegex(undefined));
assert.notOk(isRegex(null));
assert.notOk(isRegex(false));
assert.notOk(isRegex(true));
assert.notOk(isRegex(42));
assert.notOk(isRegex('foo'));
assert.notOk(isRegex(function () {}));
assert.notOk(isRegex([]));
assert.notOk(isRegex({}));

assert.ok(isRegex(/a/g));
assert.ok(isRegex(new RegExp('a', 'g')));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/is-regex
[2]: https://versionbadg.es/inspect-js/is-regex.svg
[5]: https://david-dm.org/inspect-js/is-regex.svg
[6]: https://david-dm.org/inspect-js/is-regex
[7]: https://david-dm.org/inspect-js/is-regex/dev-status.svg
[8]: https://david-dm.org/inspect-js/is-regex#info=devDependencies
[11]: https://nodei.co/npm/is-regex.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-regex.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-regex.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-regex
[codecov-image]: https://codecov.io/gh/inspect-js/is-regex/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-regex/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/is-regex
[actions-url]: https://github.com/inspect-js/is-regex/actions
