# which-typed-array <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Which kind of Typed Array is this JavaScript value? Works cross-realm, without `instanceof`, and despite Symbol.toStringTag.

## Example

```js
var whichTypedArray = require('which-typed-array');
var assert = require('assert');

assert.equal(false, whichTypedArray(undefined));
assert.equal(false, whichTypedArray(null));
assert.equal(false, whichTypedArray(false));
assert.equal(false, whichTypedArray(true));
assert.equal(false, whichTypedArray([]));
assert.equal(false, whichTypedArray({}));
assert.equal(false, whichTypedArray(/a/g));
assert.equal(false, whichTypedArray(new RegExp('a', 'g')));
assert.equal(false, whichTypedArray(new Date()));
assert.equal(false, whichTypedArray(42));
assert.equal(false, whichTypedArray(NaN));
assert.equal(false, whichTypedArray(Infinity));
assert.equal(false, whichTypedArray(new Number(42)));
assert.equal(false, whichTypedArray('foo'));
assert.equal(false, whichTypedArray(Object('foo')));
assert.equal(false, whichTypedArray(function () {}));
assert.equal(false, whichTypedArray(function* () {}));
assert.equal(false, whichTypedArray(x => x * x));
assert.equal(false, whichTypedArray([]));

assert.equal('Int8Array', whichTypedArray(new Int8Array()));
assert.equal('Uint8Array', whichTypedArray(new Uint8Array()));
assert.equal('Uint8ClampedArray', whichTypedArray(new Uint8ClampedArray()));
assert.equal('Int16Array', whichTypedArray(new Int16Array()));
assert.equal('Uint16Array', whichTypedArray(new Uint16Array()));
assert.equal('Int32Array', whichTypedArray(new Int32Array()));
assert.equal('Uint32Array', whichTypedArray(new Uint32Array()));
assert.equal('Float32Array', whichTypedArray(new Float32Array()));
assert.equal('Float64Array', whichTypedArray(new Float64Array()));
assert.equal('BigInt64Array', whichTypedArray(new BigInt64Array()));
assert.equal('BigUint64Array', whichTypedArray(new BigUint64Array()));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/which-typed-array
[npm-version-svg]: https://versionbadg.es/inspect-js/which-typed-array.svg
[deps-svg]: https://david-dm.org/inspect-js/which-typed-array.svg
[deps-url]: https://david-dm.org/inspect-js/which-typed-array
[dev-deps-svg]: https://david-dm.org/inspect-js/which-typed-array/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/which-typed-array#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/which-typed-array.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/which-typed-array.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/which-typed-array.svg
[downloads-url]: https://npm-stat.com/charts.html?package=which-typed-array
[codecov-image]: https://codecov.io/gh/inspect-js/which-typed-array/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/which-typed-array/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/which-typed-array
[actions-url]: https://github.com/inspect-js/which-typed-array/actions
