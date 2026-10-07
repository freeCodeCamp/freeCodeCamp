<div align="center">
  <img src="logo.png" alt="klona" height="100" />
</div>

<div align="center">
  <a href="https://npmjs.org/package/klona">
    <img src="https://badgen.now.sh/npm/v/klona" alt="version" />
  </a>
  <a href="https://github.com/lukeed/klona/actions">
    <img src="https://github.com/lukeed/klona/workflows/CI/badge.svg" alt="CI" />
  </a>
  <a href="https://npmjs.org/package/klona">
    <img src="https://badgen.now.sh/npm/dm/klona" alt="downloads" />
  </a>
  <a href="https://codecov.io/gh/lukeed/klona">
    <img src="https://codecov.io/gh/lukeed/klona/branch/master/graph/badge.svg?token=8ej0WeKqz7" alt="codecov" />
  </a>
</div>

<div align="center">A tiny (240B to 501B) and fast utility to "deep clone" Objects, Arrays, Dates, RegExps, and more!</div>


## Features

* Super tiny and [performant](#benchmarks)
* Deep clone / recursive copies
* Safely handles complex data types<br>
    _Array, Date, Map, Object, RegExp, Set, TypedArray, and more_

Unlike a "shallow copy" (eg, `Object.assign`), a "deep clone" recursively traverses a source input and copies its _values_ &mdash; instead of _references_ to its values &mdash; into a new instance of that input. The result is a structurally equivalent clone that operates independently of the original source and controls its own values.

> **Why "klona"?** It's "clone" in Swedish.<br>
> **What's with the sheep?** [Dolly](https://en.wikipedia.org/wiki/Dolly_(sheep)).


## Install

```
$ npm install --save klona
```


## Modes

There are multiple "versions" of `klona` available, which allows you to bring only the functionality you need!

#### `klona/json`
> **Size (gzip):** 240 bytes<br>
> **Availability:** [CommonJS](https://unpkg.com/klona/json/index.js), [ES Module](https://unpkg.com/klona/json/index.mjs), [UMD](https://unpkg.com/klona/json/index.min.js)<br>
> **Ability:** JSON data types

```js
import { klona } from 'klona/json';
```

#### `klona/lite`
> **Size (gzip):** 354 bytes<br>
> **Availability:** [CommonJS](https://unpkg.com/klona/lite/index.js), [ES Module](https://unpkg.com/klona/lite/index.mjs), [UMD](https://unpkg.com/klona/lite/index.min.js)<br>
> **Ability:** extends `klona/json` with support for custom class, Date, and RegExp

```js
import { klona } from 'klona/lite';
```

#### `klona`
> **Size (gzip):** 451 bytes<br>
> **Availability:** [CommonJS](https://unpkg.com/klona/dist/index.js), [ES Module](https://unpkg.com/klona/dist/index.mjs), [UMD](https://unpkg.com/klona/dist/index.min.js)<br>
> **Ability:** extends `klona/lite` with support for Map, Set, DataView, ArrayBuffer, TypedArray

```js
import { klona } from 'klona';
```

#### `klona/full`
> **Size (gzip):** 501 bytes<br>
> **Availability:** [CommonJS](https://unpkg.com/klona/full/index.js), [ES Module](https://unpkg.com/klona/full/index.mjs), [UMD](https://unpkg.com/klona/full/index.min.js)<br>
> **Ability:** extends `klona` with support for Symbol properties and and non-enumerable properties

```js
import { klona } from 'klona/full';
```


## Usage

```js
import { klona } from 'klona';

const input = {
  foo: 1,
  bar: {
    baz: 2,
    bat: {
      hello: 'world'
    }
  }
};

const output = klona(input);

// exact copy of original
assert.deepStrictEqual(input, output);

// applying deep updates...
output.bar.bat.hola = 'mundo';
output.bar.baz = 99;

// ...doesn't affect source!
console.log(
  JSON.stringify(input, null, 2)
);
// {
//   "foo": 1,
//   "bar": {
//     "baz": 2,
//     "bat": {
//       "hello": "world"
//     }
//   }
// }
```


## API

### klona(input)
Returns: `typeof input`

Returns a deep copy/clone of the input.


## Benchmarks

> Running Node v12.18.3

The benchmarks can be found in the [`/bench`](/bench) directory. They are separated into multiple categories:

* `JSON` – compares an array of objects comprised of JSON data types (`String`, `Number`, `null`, `Array`, `Object`)
* `LITE` – like `JSON`, but adds `RegExp`, `Date` and `undefined` values
* `DEFAULT` – object with `RegExp`, `Date`, `Array`, `Map`, `Set`, custom class, `Int8Array`, `DataView`, `Buffer` values
* `FULL` – like `DEFAULT`, but adds `Symbol` and non-enumerable properties

> **Important:** Only candidates that pass validation step(s) are listed. <br>However, `lodash` and `clone` are kept to highlight important differences.

> **Note:** The `clone/include` candidate refers to its [`includeNonEnumerable` option](https://www.npmjs.com/package/clone#api) enabled.

```
Load times:
  lodash/clonedeep   29.257ms
  rfdc                0.511ms
  clone               0.576ms
  clone-deep          2.494ms
  deep-copy           0.451ms
  klona/full          0.408ms
  klona               0.265ms
  klona/lite          0.308ms
  klona/json          0.263ms

Benchmark :: JSON
  JSON.stringify      x   53,899 ops/sec ±0.76% (92 runs sampled)
  lodash              x   46,800 ops/sec ±0.86% (90 runs sampled)
  rfdc                x  221,456 ops/sec ±0.88% (92 runs sampled)
  clone               x   39,537 ops/sec ±0.68% (92 runs sampled)
  clone/include       x   25,488 ops/sec ±1.06% (88 runs sampled)
  clone-deep          x   99,998 ops/sec ±0.91% (93 runs sampled)
  deep-copy           x  141,270 ops/sec ±0.95% (92 runs sampled)
  klona/full          x   55,016 ops/sec ±0.68% (94 runs sampled)
  klona               x  281,215 ops/sec ±0.77% (93 runs sampled)
  klona/lite          x  318,481 ops/sec ±0.72% (91 runs sampled)
  klona/json          x  334,932 ops/sec ±0.66% (93 runs sampled)

Benchmark :: LITE
  lodash              x   36,992 ops/sec ±0.65% (91 runs sampled)
  clone               x   35,974 ops/sec ±1.13% (88 runs sampled)
  clone/include       x   22,609 ops/sec ±1.02% (91 runs sampled)
  clone-deep          x   92,846 ops/sec ±0.66% (93 runs sampled)
  klona/full          x   47,873 ops/sec ±0.83% (88 runs sampled)
  klona               x  226,638 ops/sec ±1.16% (93 runs sampled)
  klona/lite          x  257,900 ops/sec ±0.82% (93 runs sampled)

Benchmark :: DEFAULT
  lodash              x   55,914 ops/sec ±0.75% (93 runs sampled)
    ✘ Buffer
    ✘ Map keys
  clone               x   92,127 ops/sec ±0.83% (94 runs sampled)
    ✘ DataView
  clone/include       x   62,052 ops/sec ±0.88% (93 runs sampled)
    ✘ DataView
  klona/full          x   90,308 ops/sec ±0.68% (89 runs sampled)
  klona               x  230,257 ops/sec ±0.71% (91 runs sampled)

Benchmark :: FULL
  lodash              x   60,361 ops/sec ±0.65% (91 runs sampled)
    ✘ Buffer
    ✘ Map keys
    ✘ Missing non-enumerable Properties
  clone/include       x   47,263 ops/sec ±0.85% (93 runs sampled)
    ✘ DataView
    ✘ Incorrect non-enumerable Properties
  klona/full          x   82,346 ops/sec ±0.62% (93 runs sampled)
```


## Related

* [dlv](https://github.com/developit/dlv) – safely **read** from deep properties in 120 bytes
* [dset](https://github.com/lukeed/dset) – safely **write** into deep properties in 160 bytes
* [dequal](https://github.com/lukeed/dequal) – safely check for deep equality in 304 to 489 bytes


## License

MIT © [Luke Edwards](https://lukeed.com)
