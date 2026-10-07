# which-builtin-type <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

What is the type of this builtin JavaScript value? Works cross-realm, without `instanceof`, and can not be fooled by a `constructor` property.

## Example

```js
var whichBuiltinType = require('which-builtin-type');
var assert = require('assert');

assert.equal(undefined, whichBuiltinType(undefined));
assert.equal(null, whichBuiltinType(null));
assert.equal('Boolean', whichBuiltinType(false));
assert.equal('Boolean', whichBuiltinType(true));
assert.equal('Array', whichBuiltinType([]));
assert.equal('Object', whichBuiltinType({}));
assert.equal('RegExp', whichBuiltinType(/a/g));
assert.equal('RegExp', whichBuiltinType(new RegExp('a', 'g')));
assert.equal('Date', whichBuiltinType(new Date()));
assert.equal('Number', whichBuiltinType(42));
assert.equal('Number', whichBuiltinType(NaN));
assert.equal('Number', whichBuiltinType(Infinity));
assert.equal('Number', whichBuiltinType(new Number(42)));
assert.equal('String', whichBuiltinType('foo'));
assert.equal('String', whichBuiltinType(Object('foo')));
assert.equal('Function', whichBuiltinType(function () {}));
assert.equal('GeneratorFunction', whichBuiltinType(function* () {}));
assert.equal('Function', whichBuiltinType(x => x * x));
assert.equal('Array', whichBuiltinType([]));
assert.equal('Int8Array', whichBuiltinType(new Int8Array()));
assert.equal('Uint8Array', whichBuiltinType(new Uint8Array()));
assert.equal('Uint8ClampedArray', whichBuiltinType(new Uint8ClampedArray()));
assert.equal('Int16Array', whichBuiltinType(new Int16Array()));
assert.equal('Uint16Array', whichBuiltinType(new Uint16Array()));
assert.equal('Int32Array', whichBuiltinType(new Int32Array()));
assert.equal('Uint32Array', whichBuiltinType(new Uint32Array()));
assert.equal('Float32Array', whichBuiltinType(new Float32Array()));
assert.equal('Float64Array', whichBuiltinType(new Float64Array()));
assert.equal('BigInt64Array', whichBuiltinType(new BigInt64Array()));
assert.equal('BigUint64Array', whichBuiltinType(new BigUint64Array()));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/which-builtin-type
[npm-version-svg]: https://versionbadg.es/inspect-js/which-builtin-type.svg
[deps-svg]: https://david-dm.org/inspect-js/which-builtin-type.svg
[deps-url]: https://david-dm.org/inspect-js/which-builtin-type
[dev-deps-svg]: https://david-dm.org/inspect-js/which-builtin-type/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/which-builtin-type#info=devDependencies
[npm-badge-png]: https://which-builtin-type/which-builtin-type.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/which-builtin-type.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/which-builtin-type.svg
[downloads-url]: https://npm-stat.com/charts.html?package=which-builtin-type
[codecov-image]: https://codecov.io/gh/inspect-js/which-builtin-type/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/which-builtin-type/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/which-builtin-type
[actions-url]: https://github.com/inspect-js/which-builtin-type/actions
