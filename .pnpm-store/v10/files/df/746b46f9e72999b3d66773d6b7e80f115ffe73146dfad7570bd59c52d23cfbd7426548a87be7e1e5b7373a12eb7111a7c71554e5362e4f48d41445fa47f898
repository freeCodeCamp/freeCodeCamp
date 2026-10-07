# is-set <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Is this value a JS Set? This module works cross-realm/iframe, and despite ES6 @@toStringTag.

## Example

```js
var isSet = require('is-set');
assert(!isSet(function () {}));
assert(!isSet(null));
assert(!isSet(function* () { yield 42; return Infinity; });
assert(!isSet(Symbol('foo')));
assert(!isSet(1n));
assert(!isSet(Object(1n)));

assert(!isSet(new Map()));
assert(!isSet(new WeakSet()));
assert(!isSet(new WeakMap()));

assert(isSet(new Set()));

class MySet extends Set {}
assert(isSet(new MySet()));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/is-set
[npm-version-svg]: https://versionbadg.es/inspect-js/is-set.svg
[deps-svg]: https://david-dm.org/inspect-js/is-set.svg
[deps-url]: https://david-dm.org/inspect-js/is-set
[dev-deps-svg]: https://david-dm.org/inspect-js/is-set/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/is-set#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/is-set.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-set.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-set.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-set
[codecov-image]: https://codecov.io/gh/inspect-js/is-set/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-set/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/is-set
[actions-url]: https://github.com/inspect-js/is-set/actions
