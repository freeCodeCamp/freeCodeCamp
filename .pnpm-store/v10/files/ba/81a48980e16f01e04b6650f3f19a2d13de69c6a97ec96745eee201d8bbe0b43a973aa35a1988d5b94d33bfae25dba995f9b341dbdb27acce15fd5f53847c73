# is-map <sup>[![Version Badge][2]][1]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

Is this value a JS Map? This module works cross-realm/iframe, and despite ES6 @@toStringTag.

## Example

```js
var isMap = require('is-map');
assert(!isMap(function () {}));
assert(!isMap(null));
assert(!isMap(function* () { yield 42; return Infinity; });
assert(!isMap(Symbol('foo')));
assert(!isMap(1n));
assert(!isMap(Object(1n)));

assert(!isMap(new Set()));
assert(!isMap(new WeakSet()));
assert(!isMap(new WeakMap()));

assert(isMap(new Map()));

class MyMap extends Map {}
assert(isMap(new MyMap()));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/is-map
[2]: https://versionbadg.es/inspect-js/is-map.svg
[5]: https://david-dm.org/inspect-js/is-map.svg
[6]: https://david-dm.org/inspect-js/is-map
[7]: https://david-dm.org/inspect-js/is-map/dev-status.svg
[8]: https://david-dm.org/inspect-js/is-map#info=devDependencies
[11]: https://nodei.co/npm/is-map.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-map.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-map.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-map
[codecov-image]: https://codecov.io/gh/inspect-js/is-map/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-map/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/is-map
[actions-url]: https://github.com/inspect-js/is-map/actions
