# dequal [![CI](https://github.com/lukeed/dequal/workflows/CI/badge.svg)](https://github.com/lukeed/dequal/actions)

> A tiny (304B to 489B) utility to check for deep equality

This module supports comparison of all types, including `Function`, `RegExp`, `Date`, `Set`, `Map`, `TypedArray`s, `DataView`, `null`, `undefined`, and `NaN` values. Complex values (eg, Objects, Arrays, Sets, Maps, etc) are traversed recursively.

> **Important:**
> * key order **within Objects** does not matter
> * value order **within Arrays** _does_ matter
> * values **within Sets and Maps** use value equality
> * keys **within Maps** use value equality


## Install

```
$ npm install --save dequal
```

## Modes

There are two "versions" of `dequal` available:

#### `dequal`
> **Size (gzip):** 489 bytes<br>
> **Availability:** [CommonJS](https://unpkg.com/dequal/dist/index.js), [ES Module](https://unpkg.com/dequal/dist/index.mjs), [UMD](https://unpkg.com/dequal/dist/index.min.js)

#### `dequal/lite`
> **Size (gzip):** 304 bytes<br>
> **Availability:** [CommonJS](https://unpkg.com/dequal/lite/index.js), [ES Module](https://unpkg.com/dequal/lite/index.mjs)

|  | IE9+ | Number | String | Date | RegExp | Object | Array | Class | Set | Map | ArrayBuffer | [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) | [DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) |
|-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| `dequal` | :x: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| `dequal/lite` | :+1: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: | :x: | :x: | :x: | :x: |

> <sup>**Note:** Table scrolls horizontally!</sup>

## Usage

```js
import { dequal } from 'dequal';

dequal(1, 1); //=> true
dequal({}, {}); //=> true
dequal('foo', 'foo'); //=> true
dequal([1, 2, 3], [1, 2, 3]); //=> true
dequal(dequal, dequal); //=> true
dequal(/foo/, /foo/); //=> true
dequal(null, null); //=> true
dequal(NaN, NaN); //=> true
dequal([], []); //=> true
dequal(
  [{ a:1 }, [{ b:{ c:[1] } }]],
  [{ a:1 }, [{ b:{ c:[1] } }]]
); //=> true

dequal(1, '1'); //=> false
dequal(null, undefined); //=> false
dequal({ a:1, b:[2,3] }, { a:1, b:[2,5] }); //=> false
dequal(/foo/i, /bar/g); //=> false
```

## API

### dequal(foo, bar)
Returns: `Boolean`

Both `foo` and `bar` can be of any type.<br>
A `Boolean` is returned indicating if the two were deeply equal.


## Benchmarks

> Running Node v10.13.0

The benchmarks can be found in the [`/bench`](/bench) directory. They are separated into two categories:

* `basic` – compares an object comprised of `String`, `Number`, `Date`, `Array`, and `Object` values.
* `complex` – like `basic`, but adds `RegExp`, `Map`, `Set`, and `Uint8Array` values.

> **Note:** Only candidates that pass validation step(s) are listed. <br>For example, `fast-deep-equal/es6` handles `Set` and `Map` values, but uses _referential equality_ while those listed use _value equality_.

```
Load times:
  assert             0.109ms
  util               0.006ms
  fast-deep-equal    0.479ms
  lodash/isequal    22.826ms
  nano-equal         0.417ms
  dequal             0.396ms
  dequal/lite        0.264ms

Benchmark :: basic
  assert.deepStrictEqual  x    325,262 ops/sec ±0.57% (94 runs sampled)
  util.isDeepStrictEqual  x    318,812 ops/sec ±0.87% (94 runs sampled)
  fast-deep-equal         x  1,332,393 ops/sec ±0.36% (93 runs sampled)
  lodash.isEqual          x    269,129 ops/sec ±0.59% (95 runs sampled)
  nano-equal              x  1,122,053 ops/sec ±0.36% (96 runs sampled)
  dequal/lite             x  1,700,972 ops/sec ±0.31% (94 runs sampled)
  dequal                  x  1,698,972 ops/sec ±0.63% (97 runs sampled)

Benchmark :: complex
  assert.deepStrictEqual  x    124,518 ops/sec ±0.64% (96 runs sampled)
  util.isDeepStrictEqual  x    125,113 ops/sec ±0.24% (96 runs sampled)
  lodash.isEqual          x     58,677 ops/sec ±0.49% (96 runs sampled)
  dequal                  x    345,386 ops/sec ±0.27% (96 runs sampled)
```

## License

MIT © [Luke Edwards](https://lukeed.com)
