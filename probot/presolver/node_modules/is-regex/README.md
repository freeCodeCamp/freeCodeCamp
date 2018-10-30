#is-regex <sup>[![Version Badge][2]][1]</sup>

[![Build Status][3]][4]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

[![browser support][9]][10]

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
[2]: http://versionbadg.es/ljharb/is-regex.svg
[3]: https://travis-ci.org/ljharb/is-regex.svg
[4]: https://travis-ci.org/ljharb/is-regex
[5]: https://david-dm.org/ljharb/is-regex.svg
[6]: https://david-dm.org/ljharb/is-regex
[7]: https://david-dm.org/ljharb/is-regex/dev-status.svg
[8]: https://david-dm.org/ljharb/is-regex#info=devDependencies
[9]: https://ci.testling.com/ljharb/is-regex.png
[10]: https://ci.testling.com/ljharb/is-regex
[11]: https://nodei.co/npm/is-regex.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/is-regex.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/is-regex.svg
[downloads-url]: http://npm-stat.com/charts.html?package=is-regex

