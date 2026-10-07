# unbox-primitive <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Unbox a boxed JS primitive value. This module works cross-realm/iframe, does not depend on `instanceof` or mutable properties, and works despite ES6 Symbol.toStringTag.

## Example

```js
var unboxPrimitive = require('unbox-primitive');
var assert = require('assert');

assert.equal(unboxPrimitive(new Boolean(false)), false);
assert.equal(unboxPrimitive(new String('f')), 'f');
assert.equal(unboxPrimitive(new Number(42)), 42);
const s = Symbol();
assert.equal(unboxPrimitive(Object(s)), s);
assert.equal(unboxPrimitive(new BigInt(42)), 42n);

// any primitive, or non-boxed-primitive object, will throw
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/unbox-primitive
[npm-version-svg]: https://versionbadg.es/ljharb/unbox-primitive.svg
[deps-svg]: https://david-dm.org/ljharb/unbox-primitive.svg
[deps-url]: https://david-dm.org/ljharb/unbox-primitive
[dev-deps-svg]: https://david-dm.org/ljharb/unbox-primitive/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/unbox-primitive#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/unbox-primitive.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/unbox-primitive.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/unbox-primitive.svg
[downloads-url]: https://npm-stat.com/charts.html?package=unbox-primitive
[codecov-image]: https://codecov.io/gh/ljharb/unbox-primitive/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/unbox-primitive/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/unbox-primitive
[actions-url]: https://github.com/ljharb/unbox-primitive/actions
