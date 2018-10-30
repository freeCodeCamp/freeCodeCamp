# isStream

[![Build Status](https://secure.travis-ci.org/rvagg/isstream.png)](http://travis-ci.org/rvagg/isstream)

**Test if an object is a `Stream`**

[![NPM](https://nodei.co/npm/isstream.svg)](https://nodei.co/npm/isstream/)

The missing `Stream.isStream(obj)`: determine if an object is standard Node.js `Stream`. Works for Node-core `Stream` objects (for 0.8, 0.10, 0.11, and in theory, older and newer versions) and all versions of **[readable-stream](https://github.com/isaacs/readable-stream)**.

## Usage:

```js
var isStream = require('isstream')
var Stream = require('stream')

isStream(new Stream()) // true

isStream({}) // false

isStream(new Stream.Readable())    // true
isStream(new Stream.Writable())    // true
isStream(new Stream.Duplex())      // true
isStream(new Stream.Transform())   // true
isStream(new Stream.PassThrough()) // true
```

## But wait! There's more!

You can also test for `isReadable(obj)`, `isWritable(obj)` and `isDuplex(obj)` to test for implementations of Streams2 (and Streams3) base classes.

```js
var isReadable = require('isstream').isReadable
var isWritable = require('isstream').isWritable
var isDuplex = require('isstream').isDuplex
var Stream = require('stream')

isReadable(new Stream()) // false
isWritable(new Stream()) // false
isDuplex(new Stream())   // false

isReadable(new Stream.Readable())    // true
isReadable(new Stream.Writable())    // false
isReadable(new Stream.Duplex())      // true
isReadable(new Stream.Transform())   // true
isReadable(new Stream.PassThrough()) // true

isWritable(new Stream.Readable())    // false
isWritable(new Stream.Writable())    // true
isWritable(new Stream.Duplex())      // true
isWritable(new Stream.Transform())   // true
isWritable(new Stream.PassThrough()) // true

isDuplex(new Stream.Readable())    // false
isDuplex(new Stream.Writable())    // false
isDuplex(new Stream.Duplex())      // true
isDuplex(new Stream.Transform())   // true
isDuplex(new Stream.PassThrough()) // true
```

*Reminder: when implementing your own streams, please [use **readable-stream** rather than core streams](http://r.va.gg/2014/06/why-i-dont-use-nodes-core-stream-module.html).*


## License

**isStream** is Copyright (c) 2015 Rod Vagg [@rvagg](https://twitter.com/rvagg) and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE.md file for more details.
