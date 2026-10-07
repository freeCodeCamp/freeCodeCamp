# is-weakref <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

Is this value a JS WeakRef? This module works cross-realm/iframe, and despite ES6 @@toStringTag.

## Example

```js
var isWeakRef = require('is-weakref');
assert(!isWeakRef(function () {}));
assert(!isWeakRef(null));
assert(!isWeakRef(function* () { yield 42; return Infinity; });
assert(!isWeakRef(Symbol('foo')));
assert(!isWeakRef(1n));
assert(!isWeakRef(Object(1n)));

assert(!isWeakRef(new Set()));
assert(!isWeakRef(new WeakSet()));
assert(!isWeakRef(new Map()));
assert(!isWeakRef(new WeakMap()));

assert(isWeakRef(new WeakRef({})));

class MyWeakRef extends WeakRef {}
assert(isWeakRef(new MyWeakRef({})));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/is-weakref
[npm-version-svg]: https://versionbadg.es/inspect-js/is-weakref.svg
[deps-svg]: https://david-dm.org/inspect-js/is-weakref.svg
[deps-url]: https://david-dm.org/inspect-js/is-weakref
[dev-deps-svg]: https://david-dm.org/inspect-js/is-weakref/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/is-weakref#info=devDependencies
[license-image]: https://img.shields.io/npm/l/is-weakref.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-weakref.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-weakref
[codecov-image]: https://codecov.io/gh/inspect-js/is-weakref/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-weakref/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/is-weakref
[actions-url]: https://github.com/inspect-js/is-weakref/actions
