# is-callable <sup>[![Version Badge][2]][1]</sup>

[![Build Status][3]][4]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

[![browser support][9]][10]

Is this JS value callable? Works with Functions and GeneratorFunctions, despite ES6 @@toStringTag.

## Example

```js
var isCallable = require('is-callable');
var assert = require('assert');

assert.notOk(isCallable(undefined));
assert.notOk(isCallable(null));
assert.notOk(isCallable(false));
assert.notOk(isCallable(true));
assert.notOk(isCallable([]));
assert.notOk(isCallable({}));
assert.notOk(isCallable(/a/g));
assert.notOk(isCallable(new RegExp('a', 'g')));
assert.notOk(isCallable(new Date()));
assert.notOk(isCallable(42));
assert.notOk(isCallable(NaN));
assert.notOk(isCallable(Infinity));
assert.notOk(isCallable(new Number(42)));
assert.notOk(isCallable('foo'));
assert.notOk(isCallable(Object('foo')));

assert.ok(isCallable(function () {}));
assert.ok(isCallable(function* () {}));
assert.ok(isCallable(x => x * x));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/is-callable
[2]: http://versionbadg.es/ljharb/is-callable.svg
[3]: https://travis-ci.org/ljharb/is-callable.svg
[4]: https://travis-ci.org/ljharb/is-callable
[5]: https://david-dm.org/ljharb/is-callable.svg
[6]: https://david-dm.org/ljharb/is-callable
[7]: https://david-dm.org/ljharb/is-callable/dev-status.svg
[8]: https://david-dm.org/ljharb/is-callable#info=devDependencies
[9]: https://ci.testling.com/ljharb/is-callable.png
[10]: https://ci.testling.com/ljharb/is-callable
[11]: https://nodei.co/npm/is-callable.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/is-callable.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/is-callable.svg
[downloads-url]: http://npm-stat.com/charts.html?package=is-callable
