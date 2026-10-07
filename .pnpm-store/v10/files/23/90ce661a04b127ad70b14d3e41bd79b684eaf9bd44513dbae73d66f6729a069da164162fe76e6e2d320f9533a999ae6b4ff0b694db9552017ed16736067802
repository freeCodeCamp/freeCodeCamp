# concat-stream

Writable stream that concatenates all the data from a stream and calls a callback with the result. Use this when you want to collect all the data from a stream into a single buffer.

[![Build Status](https://travis-ci.org/maxogden/concat-stream.svg?branch=master)](https://travis-ci.org/maxogden/concat-stream)

[![NPM](https://nodei.co/npm/concat-stream.png)](https://nodei.co/npm/concat-stream/)

### description

Streams emit many buffers. If you want to collect all of the buffers, and when the stream ends concatenate all of the buffers together and receive a single buffer then this is the module for you.

Only use this if you know you can fit all of the output of your stream into a single Buffer (e.g. in RAM).

There are also `objectMode` streams that emit things other than Buffers, and you can concatenate these too. See below for details.

## Related

`concat-stream` is part of the [mississippi stream utility collection](https://github.com/maxogden/mississippi) which includes more useful stream modules similar to this one.

### examples

#### Buffers

```js
var fs = require('fs')
var concat = require('concat-stream')

var readStream = fs.createReadStream('cat.png')
var concatStream = concat(gotPicture)

readStream.on('error', handleError)
readStream.pipe(concatStream)

function gotPicture(imageBuffer) {
  // imageBuffer is all of `cat.png` as a node.js Buffer
}

function handleError(err) {
  // handle your error appropriately here, e.g.:
  console.error(err) // print the error to STDERR
  process.exit(1) // exit program with non-zero exit code
}

```

#### Arrays

```js
var write = concat(function(data) {})
write.write([1,2,3])
write.write([4,5,6])
write.end()
// data will be [1,2,3,4,5,6] in the above callback
```

#### Uint8Arrays

```js
var write = concat(function(data) {})
var a = new Uint8Array(3)
a[0] = 97; a[1] = 98; a[2] = 99
write.write(a)
write.write('!')
write.end(Buffer.from('!!1'))
```

See `test/` for more examples

# methods

```js
var concat = require('concat-stream')
```

## var writable = concat(opts={}, cb)

Return a `writable` stream that will fire `cb(data)` with all of the data that
was written to the stream. Data can be written to `writable` as strings,
Buffers, arrays of byte integers, and Uint8Arrays. 

By default `concat-stream` will give you back the same data type as the type of the first buffer written to the stream. Use `opts.encoding` to set what format `data` should be returned as, e.g. if you if you don't want to rely on the built-in type checking or for some other reason.

* `string` - get a string
* `buffer` - get back a Buffer
* `array` - get an array of byte integers
* `uint8array`, `u8`, `uint8` - get back a Uint8Array
* `object`, get back an array of Objects

If you don't specify an encoding, and the types can't be inferred (e.g. you write things that aren't in the list above), it will try to convert concat them into a `Buffer`.

If nothing is written to `writable` then `data` will be an empty array `[]`.

# error handling

`concat-stream` does not handle errors for you, so you must handle errors on whatever streams you pipe into `concat-stream`. This is a general rule when programming with node.js streams: always handle errors on each and every stream. Since `concat-stream` is not itself a stream it does not emit errors.

We recommend using [`end-of-stream`](https://npmjs.org/end-of-stream) or [`pump`](https://npmjs.org/pump) for writing error tolerant stream code.

# license

MIT LICENSE
