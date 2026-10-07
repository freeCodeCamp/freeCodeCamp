# safe-stable-stringify

Safe, deterministic and fast serialization alternative to [JSON.stringify][].
Zero dependencies. ESM and CJS. 100% coverage.

Gracefully handles circular structures and bigint instead of throwing.

Optional custom circular values, deterministic behavior or strict JSON
compatibility check.

## stringify(value[, replacer[, space]])

The same as [JSON.stringify][].

* `value` {any}
* `replacer` {string[]|function|null}
* `space` {number|string}
* Returns: {string}

```js
const stringify = require('safe-stable-stringify')

const bigint = { a: 0, c: 2n, b: 1 }

stringify(bigint)
// '{"a":0,"b":1,"c":2}'
JSON.stringify(bigint)
// TypeError: Do not know how to serialize a BigInt

const circular = { b: 1, a: 0 }
circular.circular = circular

stringify(circular)
// '{"a":0,"b":1,"circular":"[Circular]"}'
JSON.stringify(circular)
// TypeError: Converting circular structure to JSON

stringify(circular, ['a', 'b'], 2)
// {
//   "a": 0,
//   "b": 1
// }
```

## stringify.configure(options)

* `bigint` {boolean} If `true`, bigint values are converted to a number. Otherwise
  they are ignored. **Default:** `true`.
* `circularValue` {string|null|undefined|ErrorConstructor} Defines the value for
  circular references. Set to `undefined`, circular properties are not
  serialized (array entries are replaced with `null`). Set to `Error`, to throw
  on circular references. **Default:** `'[Circular]'`.
* `deterministic` {boolean} If `true`, guarantee a deterministic key order
  instead of relying on the insertion order. **Default:** `true`.
* `maximumBreadth` {number} Maximum number of entries to serialize per object
  (at least one). The serialized output contains information about how many
  entries have not been serialized. Ignored properties are counted as well
  (e.g., properties with symbol values). Using the array replacer overrules this
  option. **Default:** `Infinity`
* `maximumDepth` {number} Maximum number of object nesting levels (at least 1)
  that will be serialized. Objects at the maximum level are serialized as
  `'[Object]'` and arrays as `'[Array]'`. **Default:** `Infinity`
* `strict` {boolean} Instead of handling any JSON value gracefully, throw an
  error in case it may not be represented as JSON (functions, NaN, ...).
  Circular values and bigint values throw as well in case either option is not
  explicitly defined. Sets and Maps are not detected! **Default:** `false`
* Returns: {function} A stringify function with the options applied.

```js
import { configure } from 'safe-stable-stringify'

const stringify = configure({
  bigint: true,
  circularValue: 'Magic circle!',
  deterministic: false,
  maximumDepth: 1,
  maximumBreadth: 4
})

const circular = {
  bigint: 999_999_999_999_999_999n,
  typed: new Uint8Array(3),
  deterministic: "I don't think so",
}
circular.circular = circular
circular.ignored = true
circular.alsoIgnored = 'Yes!'

const stringified = stringify(circular, null, 4)

console.log(stringified)
// {
//     "bigint": 999999999999999999,
//     "typed": "[Object]",
//     "deterministic": "I don't think so",
//     "circular": "Magic circle!",
//     "...": "2 items not stringified"
// }

const throwOnCircular = configure({
  circularValue: Error
})

throwOnCircular(circular);
// TypeError: Converting circular structure to JSON
```

## Differences to JSON.stringify

1. _Circular values_ are replaced with the string `[Circular]` (configurable).
1. _Object keys_ are sorted instead of using the insertion order (configurable).
1. _BigInt_ values are stringified as regular number instead of throwing a
   TypeError (configurable).
1. _Boxed primitives_ (e.g., `Number(5)`) are not unboxed and are handled as
   regular object.

Those are the only differences to `JSON.stringify()`. This is a side effect free
variant and [`toJSON`][], [`replacer`][] and the [`spacer`][] work the same as
with `JSON.stringify()`.

## Performance / Benchmarks

Currently this is by far the fastest known stable (deterministic) stringify
implementation. This is especially important for big objects and TypedArrays.

(Dell Precision 5540, i7-9850H CPU @ 2.60GHz, Node.js 16.11.1)

```md
simple:   simple object x 3,463,894 ops/sec ±0.44% (98 runs sampled)
simple:   circular      x 1,236,007 ops/sec ±0.46% (99 runs sampled)
simple:   deep          x 18,942 ops/sec ±0.41% (93 runs sampled)
simple:   deep circular x 18,690 ops/sec ±0.72% (96 runs sampled)

replacer:   simple object x 2,664,940 ops/sec ±0.31% (98 runs sampled)
replacer:   circular      x 1,015,981 ops/sec ±0.09% (99 runs sampled)
replacer:   deep          x 17,328 ops/sec ±0.38% (97 runs sampled)
replacer:   deep circular x 17,071 ops/sec ±0.21% (98 runs sampled)

array:   simple object x 3,869,608 ops/sec ±0.22% (98 runs sampled)
array:   circular      x 3,853,943 ops/sec ±0.45% (96 runs sampled)
array:   deep          x 3,563,227 ops/sec ±0.20% (100 runs sampled)
array:   deep circular x 3,286,475 ops/sec ±0.07% (100 runs sampled)

indentation:   simple object x 2,183,162 ops/sec ±0.66% (97 runs sampled)
indentation:   circular      x 872,538 ops/sec ±0.57% (98 runs sampled)
indentation:   deep          x 16,795 ops/sec ±0.48% (93 runs sampled)
indentation:   deep circular x 16,443 ops/sec ±0.40% (97 runs sampled)
```

Comparing `safe-stable-stringify` with known alternatives:

```md
fast-json-stable-stringify x 18,765 ops/sec ±0.71% (94 runs sampled)
json-stable-stringify x 13,870 ops/sec ±0.72% (94 runs sampled)
fast-stable-stringify x 21,343 ops/sec ±0.33% (95 runs sampled)
faster-stable-stringify x 17,707 ops/sec ±0.44% (97 runs sampled)
json-stringify-deterministic x 11,208 ops/sec ±0.57% (98 runs sampled)
fast-safe-stringify x 21,460 ops/sec ±0.75% (99 runs sampled)
this x 30,367 ops/sec ±0.39% (96 runs sampled)

The fastest is this
```

The `fast-safe-stringify` comparison uses the modules stable implementation.

## Acknowledgements

Sponsored by [MaibornWolff](https://www.maibornwolff.de/) and [nearForm](http://nearform.com)

## License

MIT

[`replacer`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The%20replacer%20parameter
[`spacer`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The%20space%20argument
[`toJSON`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON()_behavior
[JSON.stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
