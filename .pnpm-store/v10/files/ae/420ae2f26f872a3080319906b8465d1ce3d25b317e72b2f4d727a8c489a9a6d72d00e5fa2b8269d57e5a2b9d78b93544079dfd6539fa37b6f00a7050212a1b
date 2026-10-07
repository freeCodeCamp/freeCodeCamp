# fast-safe-stringify

Safe and fast serialization alternative to [JSON.stringify][].

Gracefully handles circular structures instead of throwing in most cases.
It could return an error string if the circular object is too complex to analyze,
e.g. in case there are proxies involved.

Provides a deterministic ("stable") version as well that will also gracefully
handle circular structures. See the example below for further information.

## Usage

The same as [JSON.stringify][].

`stringify(value[, replacer[, space[, options]]])`

```js
const safeStringify = require('fast-safe-stringify')
const o = { a: 1 }
o.o = o

console.log(safeStringify(o))
// '{"a":1,"o":"[Circular]"}'
console.log(JSON.stringify(o))
// TypeError: Converting circular structure to JSON

function replacer(key, value) {
  console.log('Key:', JSON.stringify(key), 'Value:', JSON.stringify(value))
  // Remove the circular structure
  if (value === '[Circular]') {
    return
  }
  return value
}

// those are also defaults limits when no options object is passed into safeStringify
// configure it to lower the limit.
const options = {
  depthLimit: Number.MAX_SAFE_INTEGER,
  edgesLimit: Number.MAX_SAFE_INTEGER
};

const serialized = safeStringify(o, replacer, 2, options)
// Key: "" Value: {"a":1,"o":"[Circular]"}
// Key: "a" Value: 1
// Key: "o" Value: "[Circular]"
console.log(serialized)
// {
//  "a": 1
// }
```


Using the deterministic version also works the same:

```js
const safeStringify = require('fast-safe-stringify')
const o = { b: 1, a: 0 }
o.o = o

console.log(safeStringify(o))
// '{"b":1,"a":0,"o":"[Circular]"}'
console.log(safeStringify.stableStringify(o))
// '{"a":0,"b":1,"o":"[Circular]"}'
console.log(JSON.stringify(o))
// TypeError: Converting circular structure to JSON
```

A faster and side-effect free implementation is available in the
[safe-stable-stringify][] module. However it is still considered experimental
due to a new and more complex implementation.

### Replace strings constants

- `[Circular]` - when same reference is found
- `[...]` - when some limit from options object is reached

## Differences to JSON.stringify

In general the behavior is identical to [JSON.stringify][]. The [`replacer`][]
and [`space`][] options are also available.

A few exceptions exist to [JSON.stringify][] while using [`toJSON`][] or
[`replacer`][]:

### Regular safe stringify

- Manipulating a circular structure of the passed in value in a `toJSON` or the
  `replacer` is not possible! It is possible for any other value and property.

- In case a circular structure is detected and the [`replacer`][] is used it
  will receive the string `[Circular]` as the argument instead of the circular
  object itself.

### Deterministic ("stable") safe stringify

- Manipulating the input object either in a [`toJSON`][] or the [`replacer`][]
  function will not have any effect on the output. The output entirely relies on
  the shape the input value had at the point passed to the stringify function!

- In case a circular structure is detected and the [`replacer`][] is used it
  will receive the string `[Circular]` as the argument instead of the circular
  object itself.

A side effect free variation without these limitations can be found as well
([`safe-stable-stringify`][]). It is also faster than the current
implementation. It is still considered experimental due to a new and more
complex implementation.

## Benchmarks

Although not JSON, the Node.js `util.inspect` method can be used for similar
purposes (e.g. logging) and also handles circular references.

Here we compare `fast-safe-stringify` with some alternatives:
(Lenovo T450s with a i7-5600U CPU using Node.js 8.9.4)

```md
fast-safe-stringify:   simple object x 1,121,497 ops/sec ±0.75% (97 runs sampled)
fast-safe-stringify:   circular      x 560,126 ops/sec ±0.64% (96 runs sampled)
fast-safe-stringify:   deep          x 32,472 ops/sec ±0.57% (95 runs sampled)
fast-safe-stringify:   deep circular x 32,513 ops/sec ±0.80% (92 runs sampled)

util.inspect:          simple object x 272,837 ops/sec ±1.48% (90 runs sampled)
util.inspect:          circular      x 116,896 ops/sec ±1.19% (95 runs sampled)
util.inspect:          deep          x 19,382 ops/sec ±0.66% (92 runs sampled)
util.inspect:          deep circular x 18,717 ops/sec ±0.63% (96 runs sampled)

json-stringify-safe:   simple object x 233,621 ops/sec ±0.97% (94 runs sampled)
json-stringify-safe:   circular      x 110,409 ops/sec ±1.85% (95 runs sampled)
json-stringify-safe:   deep          x 8,705 ops/sec ±0.87% (96 runs sampled)
json-stringify-safe:   deep circular x 8,336 ops/sec ±2.20% (93 runs sampled)
```

For stable stringify comparisons, see the performance benchmarks in the
[`safe-stable-stringify`][] readme.

## Protip

Whether `fast-safe-stringify` or alternatives are used: if the use case
consists of deeply nested objects without circular references the following
pattern will give best results.
Shallow or one level nested objects on the other hand will slow down with it.
It is entirely dependant on the use case.

```js
const stringify = require('fast-safe-stringify')

function tryJSONStringify (obj) {
  try { return JSON.stringify(obj) } catch (_) {}
}

const serializedString = tryJSONStringify(deep) || stringify(deep)
```

## Acknowledgements

Sponsored by [nearForm](http://nearform.com)

## License

MIT

[`replacer`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The%20replacer%20parameter
[`safe-stable-stringify`]: https://github.com/BridgeAR/safe-stable-stringify
[`space`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The%20space%20argument
[`toJSON`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON()_behavior
[benchmark]: https://github.com/epoberezkin/fast-json-stable-stringify/blob/67f688f7441010cfef91a6147280cc501701e83b/benchmark
[JSON.stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
