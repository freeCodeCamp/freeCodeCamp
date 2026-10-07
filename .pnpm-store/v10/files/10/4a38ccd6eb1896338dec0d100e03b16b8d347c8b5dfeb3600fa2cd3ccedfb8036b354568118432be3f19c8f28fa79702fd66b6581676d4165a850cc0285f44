[![npm version](https://img.shields.io/npm/dw/ordered-binary)](https://www.npmjs.org/package/ordered-binary)
[![npm version](https://img.shields.io/npm/v/ordered-binary.svg?style=flat-square)](https://www.npmjs.org/package/ordered-binary)
[![license](https://img.shields.io/badge/license-MIT-brightgreen)](LICENSE)

The ordered-binary package provides a representation of JavaScript primitives, serialized into binary format (NodeJS Buffers or Uint8Arrays), such that the binary values are naturally ordered such that it matches the natural ordering or values. For example, since -2.0321 > -2.04, then `toBufferKey(-2.0321)` will be greater than `toBufferKey(-2.04)` as a binary representation, in left-to-right evaluation. This is particular useful for storing keys as binaries with something like LMDB or LevelDB, to avoid any custom sorting.

The ordered-binary package supports strings, numbers, booleans, symbols, null, as well as an array of primitives. Here is an example of ordering of primitive values:
```
Buffer.from([0]) // buffers are left unchanged, and this is the minimum value
Symbol.for('even symbols')
-10 // negative supported
-1.1 // decimals supported
400
3E10
'Hello'
['Hello', 'World']
'World'
'hello'
['hello', 1, 'world']
['hello', 'world']
Buffer.from([0xff])
```


The main module exports these functions:

`writeKey(key: string | number | boolean | null | Array, target: Buffer, position: integer, inSequence?: boolean)` - Writes the provide key to the target buffer

`readKey(buffer, start, end, inSequence)` - Reads the key from the buffer, given the provided start and end, as a primitive value

`toBufferKey(jsPrimitive)` - This accepts a string, number, or boolean as the argument, and returns a `Buffer`.

`fromBufferKey(bufferKey, multiple)` - This accepts a Buffer and returns a JavaScript primitive value. This can also parse buffers that hold multiple values delimited by a byte `30`, by setting the second argument to true (in which case it will return an array).

And these constants:

`MINIMUM_KEY` - The minimum key supported (`null`, which is represented as single zero byte)
`MAXIMUM_KEY` - A maximum key larger than any supported primitive (single 0xff byte)
