# is-finalizationregistry <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Is this value a JS FinalizationRegistry? This module works cross-realm/iframe, and despite ES6 @@toStringTag.

## Example

```js
var isFinalizationRegistry = require('is-finalizationregistry');
assert(!isFinalizationRegistry(function () {}));
assert(!isFinalizationRegistry(null));
assert(!isFinalizationRegistry(function* () { yield 42; return Infinity; });
assert(!isFinalizationRegistry(Symbol('foo')));
assert(!isFinalizationRegistry(1n));
assert(!isFinalizationRegistry(Object(1n)));

assert(!isFinalizationRegistry(new Set()));
assert(!isFinalizationRegistry(new WeakSet()));
assert(!isFinalizationRegistry(new Map()));
assert(!isFinalizationRegistry(new WeakMap()));
assert(!isFinalizationRegistry(new WeakRef({})));

assert(isFinalizationRegistry(new FinalizationRegistry(function () {})));

class MyFinalizationRegistry extends FinalizationRegistry {}
assert(isFinalizationRegistry(new MyFinalizationRegistry(function () {})));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/is-finalizationregistry
[npm-version-svg]: https://versionbadg.es/inspect-js/is-finalizationregistry.svg
[deps-svg]: https://david-dm.org/inspect-js/is-finalizationregistry.svg
[deps-url]: https://david-dm.org/inspect-js/is-finalizationregistry
[dev-deps-svg]: https://david-dm.org/inspect-js/is-finalizationregistry/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/is-finalizationregistry#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/is-finalizationregistry.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-finalizationregistry.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-finalizationregistry.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-finalizationregistry
[codecov-image]: https://codecov.io/gh/inspect-js/is-finalizationregistry/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-finalizationregistry/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/is-finalizationregistry
[actions-url]: https://github.com/inspect-js/is-finalizationregistry/actions
