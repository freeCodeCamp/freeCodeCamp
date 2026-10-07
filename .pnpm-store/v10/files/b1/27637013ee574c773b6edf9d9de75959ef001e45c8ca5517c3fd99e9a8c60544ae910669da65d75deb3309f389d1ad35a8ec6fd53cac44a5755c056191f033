# es-get-iterator <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Get an iterator for any JS language value. Works robustly across all environments, all versions.

In modern engines, `value[Symbol.iterator]()` is sufficient to produce an iterator (an object with a `.next` method) for that object. However, older engines:
 - may lack `Symbol` support altogether
 - may have `Symbol.iterator` but not implement it on everything it should, like arguments objects
 - may have `Map` and `Set`, but a non-standard name for the iterator-producing method (`.iterator` or `['@@iterator']`, eg)
 - may be old versions of Firefox that produce values until they throw a StopIteration exception, rather than having iteration result objects
 - may be polyfilled/shimmed/shammed, with `es6-shim` or `core-js` or similar

This library attempts to provide an abstraction over all that complexity!

In node v13+, `exports` is used to provide a lean implementation that lacks all the complexity described above, in combination with the `browser` field so that bundlers will pick up the proper implementation.

## Targeting browsers with Symbol support

If you are targeting browsers that definitely all have Symbol support, then you can configure your bundler to replace `require('has-symbols')()` with a literal `true`, which should allow dead code elimination to reduce the size of the bundled code.

### With `@rollup/plugin-replace`

```js
// rollup.config.js

import replace from '@rollup/plugin-replace';

export default {
	...
	plugins: [
		replace({
			"require('has-symbols')()": 'true',
			delimiters: ['', '']
		})
	]
};
```

## Example

```js
var getIterator = require('es-get-iterator');
var assert = require('assert');

var iterator = getIterator('a 💩');
assert.deepEqual(
	[iterator.next(), iterator.next(), iterator.next(), iterator.next()],
	[{ done: false, value: 'a' }, { done: false, value: ' ' }, { done: false, value: '💩' }, { done: true, value: undefined }]
);

var iterator = getIterator([1, 2]);
assert.deepEqual(
	[iterator.next(), iterator.next(), iterator.next()],
	[{ done: false, value: 1 }, { done: false, value: 2 }, { done: true, value: undefined }]
);

var iterator = getIterator(new Set([1, 2]));
assert.deepEqual(
	[iterator.next(), iterator.next(), iterator.next()],
	[{ done: false, value: 1 }, { done: false, value: 2 }, { done: true, value: undefined }]
);

var iterator = getIterator(new Map([[1, 2], [3, 4]]));
assert.deepEqual(
	[iterator.next(), iterator.next(), iterator.next()],
	[{ done: false, value: [1, 2] }, { done: false, value: [3, 4] }, { done: true, value: undefined }]
);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/es-get-iterator
[npm-version-svg]: https://versionbadg.es/ljharb/es-get-iterator.svg
[deps-svg]: https://david-dm.org/ljharb/es-get-iterator.svg
[deps-url]: https://david-dm.org/ljharb/es-get-iterator
[dev-deps-svg]: https://david-dm.org/ljharb/es-get-iterator/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/es-get-iterator#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/es-get-iterator.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/es-get-iterator.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/es-get-iterator.svg
[downloads-url]: https://npm-stat.com/charts.html?package=es-get-iterator
