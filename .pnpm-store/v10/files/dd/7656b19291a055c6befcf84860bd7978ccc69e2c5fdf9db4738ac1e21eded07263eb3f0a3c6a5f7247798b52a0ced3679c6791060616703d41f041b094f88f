# is-bigint <sup>[![Version Badge][2]][1]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

Is this an ES BigInt value?

## Example

```js
var isBigInt = require('is-bigint');
assert(!isBigInt(function () {}));
assert(!isBigInt(null));
assert(!isBigInt(function* () { yield 42; return Infinity; });
assert(!isBigInt(Symbol('foo')));

assert(isBigInt(1n));
assert(isBigInt(Object(1n)));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/is-bigint
[2]: https://versionbadg.es/inspect-js/is-bigint.svg
[5]: https://david-dm.org/inspect-js/is-bigint.svg
[6]: https://david-dm.org/inspect-js/is-bigint
[7]: https://david-dm.org/inspect-js/is-bigint/dev-status.svg
[8]: https://david-dm.org/inspect-js/is-bigint#info=devDependencies
[11]: https://nodei.co/npm/is-bigint.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-bigint.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-bigint.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-bigint
[codecov-image]: https://codecov.io/gh/inspect-js/is-bigint/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-bigint/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/is-bigint
[actions-url]: https://github.com/inspect-js/is-bigint/actions
