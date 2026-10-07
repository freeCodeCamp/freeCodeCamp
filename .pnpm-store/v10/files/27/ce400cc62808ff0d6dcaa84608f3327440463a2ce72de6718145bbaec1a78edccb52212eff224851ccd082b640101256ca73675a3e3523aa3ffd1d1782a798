# streamx

An iteration of the Node.js core streams with a series of improvements.

```
npm install streamx
```

[![Build Status](https://github.com/streamxorg/streamx/workflows/Build%20Status/badge.svg)](https://github.com/streamxorg/streamx/actions?query=workflow%3A%22Build+Status%22)

## Main improvements from Node.js core stream

#### Proper lifecycle support.

Streams have an `_open` function that is called before any read/write operation and a `_destroy`
function that is always run as the last part of the stream.

This makes it easy to maintain state.

#### Easy error handling

Fully integrates a `.destroy()` function. When called the stream will wait for any
pending operation to finish and call the stream destroy logic.

Close is _always_ the last event emitted and `destroy` is always run.

#### `pipe()` error handles

`pipe` accepts a callback that is called when the pipeline is fully drained.
It also error handles the streams provided and destroys both streams if either
of them fail.

#### All streams are both binary and object mode streams

A `map` function can be provided to map your input data into buffers
or other formats. To indicate how much buffer space each data item takes
an `byteLength` function can be provided as well.

This removes the need for two modes of streams.

#### Simplicity

This is a full rewrite, all contained in one file.

Lots of stream methods are simplified based on how I and devs I work with actually use streams in the wild.

#### Backwards compat

streamx aims to be compatible with Node.js streams whenever it is reasonable to do so.

This means that streamx streams behave a lot like Node.js streams from the outside but still provides the
improvements above.

#### Smaller browser footprint

streamx has a much smaller footprint when compiled for the browser:

```
$ for x in stream{,x}; do echo $x: $(browserify -r $x | wc -c) bytes; done
stream: 173844 bytes
streamx: 46943 bytes
```

With optimizations turned on, the difference is even more stark:

```
$ for x in stream{,x}; do echo $x: $(browserify -r $x -p tinyify | wc -c) bytes; done
stream: 62649 bytes
streamx: 8460 bytes
$ for x in stream{,x}; do echo $x: $(browserify -r $x -p tinyify | gzip | wc -c) "bytes (gzipped)"; done
stream: 18053 bytes (gzipped)
streamx: 2806 bytes (gzipped)
```

#### AbortSignal support

To make it easier to integrate streams in a `async/await` flow, all streams support a `signal` option
that accepts a [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) to as an
alternative means to `.destroy` streams.

## Usage

```js
const { Readable } = require('streamx')

const rs = new Readable({
  read(cb) {
    this.push('Cool data')
    cb(null)
  }
})

rs.on('data', (data) => console.log('data:', data))
```

## API

This streamx package contains 4 streams similar to Node.js core.

## Readable Stream

#### `rs = new stream.Readable([options])`

Create a new readable stream.

Options include:

```
{
  highWaterMark: 16384, // max buffer size in bytes
  map: (data) => data, // optional function to map input data
  byteLength: (data) => size, // optional function that calculates the byte size of input data
  signal: abortController.signal, // optional AbortSignal that triggers `.destroy` when on `abort`
  eagerOpen: false // eagerly open the stream
}
```

In addition you can pass the `open`, `read`, and `destroy` functions as shorthands in
the constructor instead of overwrite the methods below.

The default byteLength function returns the byte length of buffers and `1024`
for any other object. This means the buffer will contain around 16 non buffers
or buffers worth 16kb when full if the defaults are used.

If you set highWaterMark to `0` then all read ahead buffering on the stream
is disabled and it will only call `_read` when a user reads rather than ahead of time.

#### `rs._read(cb)`

This function is called when the stream wants you to push new data.
Overwrite this and add your own read logic.
You should call the callback when you are fully done with the read.

Can also be set using `options.read` in the constructor.

Note that this function differs from Node.js streams in that it takes
the "read finished" callback.

#### `drained = rs.push(data)`

Push new data to the stream. Returns true if the buffer is not full
and you should push more data if you can.

If you call `rs.push(null)` you signal to the stream that no more
data will be pushed and that you want to end the stream.

#### `data = rs.read()`

Read a piece of data from the stream buffer. If the buffer is currently empty
`null` will be returned and you should wait for `readable` to be emitted before
trying again. If the stream has been ended it will also return `null`.

Note that this method differs from Node.js streams in that it does not accept
an optional amounts of bytes to consume.

#### `rs.unshift(data)`

Add a piece of data to the front of the buffer. Use this if you read too much
data using the `rs.read()` function.

#### `rs._open(cb)`

This function is called once before the first read is issued. Use this function
to implement your own open logic.

Can also be set using `options.open` in the constructor.

#### `rs._destroy(cb)`

This function is called just before the stream is fully destroyed. You should
use this to implement whatever teardown logic you need. The final part of the
stream life cycle is always to call destroy itself so this function will always
be called wheather or not the stream ends gracefully or forcefully.

Can also be set using `options.destroy` in the constructor.

Note that the `_destroy` might be called without the open function being called
in case no read was ever performed on the stream.

#### `rs._predestroy()`

A simple hook that is called as soon as the first `stream.destroy()` call is invoked.

Use this in case you need to cancel pending reads (if possible) instead of waiting for them to finish.

Can also be set using `options.predestroy` in the constructor.

#### `rs.destroy([error])`

Forcefully destroy the stream. Will call `_destroy` as soon as all pending reads have finished.
Once the stream is fully destroyed `close` will be emitted.

If you pass an error this error will be emitted just before `close` is, signifying a reason
as to why this stream was destroyed.

#### `rs.pause()`

Pauses the stream. You will only need to call this if you want to pause a resumed stream.

Returns this stream instance.

#### `rs.resume()`

Will start reading data from the stream as fast as possible.

If you do not call this, you need to use the `read()` method to read data or the `pipe()` method to
pipe the stream somewhere else or the `data` handler.

If none of these option are used the stream will stay paused.

Returns this stream instance.

#### `bool = Readable.isPaused(rs)`

Returns `true` if the stream is paused, else `false`.

#### `writableStream = rs.pipe(writableStream, [callback])`

Efficently pipe the readable stream to a writable stream (can be Node.js core stream or a stream from this package).
If you provide a callback the callback is called when the pipeline has fully finished with an optional error in case
it failed.

To cancel the pipeline destroy either of the streams.

#### `rs.on('readable')`

Emitted when data is pushed to the stream if the buffer was previously empty.

#### `rs.on('data', data)`

Emitted when data is being read from the stream. If you attach a data handler you are implicitly resuming the stream.

#### `rs.on('end')`

Emitted when the readable stream has ended and no data is left in it's buffer.

#### `rs.on('close')`

Emitted when the readable stream has fully closed (i.e. it's destroy function has completed)

#### `rs.on('error', err)`

Emitted if any of the stream operations fail with an error. `close` is always emitted right after this.

#### `rs.on('piping', dest)`

Emitted when the readable stream is pipeing to a destination.

#### `rs.destroyed`

Boolean property indicating wheather or not this stream has been destroyed.

#### `bool = Readable.isBackpressured(rs)`

Static method to check if a readable stream is currently under backpressure.

#### `stream = Readable.from(arrayOrBufferOrStringOrAsyncIterator)`

Static method to turn an array or buffer or string or AsyncIterator into a readable stream.

## Writable Stream

#### `ws = new stream.Writable([options])`

Create a new writable stream.

Options include:

```
{
  highWaterMark: 16384, // max buffer size in bytes
  map: (data) => data, // optional function to map input data
  byteLength: (data) => size, // optional function that calculates the byte size of input data
  signal: abortController.signal // optional AbortSignal that triggers `.destroy` when on `abort`
}
```

In addition you can pass the `open`, `write`, `final`, and `destroy` functions as shorthands in
the constructor instead of overwrite the methods below.

The default byteLength function returns the byte length of buffers and `1024`
for any other object. This means the buffer will contain around 16 non buffers
or buffers worth 16kb when full if the defaults are used.

#### `ws._open(cb)`

This function is called once before the first write is issued. Use this function
to implement your own open logic.

Can also be set using `options.open` in the constructor.

#### `ws._destroy(cb)`

This function is called just before the stream is fully destroyed. You should
use this to implement whatever teardown logic you need. The final part of the
stream life cycle is always to call destroy itself so this function will always
be called wheather or not the stream ends gracefully or forcefully.

Can also be set using `options.destroy` in the constructor.

Note that the `_destroy` might be called without the open function being called
in case no write was ever performed on the stream.

#### `ws._predestroy()`

A simple hook that is called as soon as the first `stream.destroy()` call is invoked.

Use this in case you need to cancel pending writes (if possible) instead of waiting for them to finish.

Can also be set using `options.predestroy` in the constructor.

#### `ws.destroy([error])`

Forcefully destroy the stream. Will call `_destroy` as soon as all pending reads have finished.
Once the stream is fully destroyed `close` will be emitted.

If you pass an error this error will be emitted just before `close` is, signifying a reason
as to why this stream was destroyed.

#### `drained = ws.write(data)`

Write a piece of data to the stream. Returns `true` if the stream buffer is not full and you
should keep writing to it if you can. If `false` is returned the stream will emit `drain`
once it's buffer is fully drained.

#### `ws._write(data, callback)`

This function is called when the stream want to write some data. Use this to implement your own
write logic. When done call the callback and the stream will call it again if more data exists in the buffer.

Can also be set using `options.write` in the constructor.

#### `ws._writev(batch, callback)`

Similar to `_write` but passes an array of all data in the current write buffer instead of the oldest one.
Useful if the destination you are writing the data to supports batching.

Can also be set using `options.writev` in the constructor.

#### `ws.end()`

Gracefully end the writable stream. Call this when you no longer want to write to the stream.

Once all writes have been fully drained `finish` will be emitted.

Returns this stream instance.

#### `ws._final(callback)`

This function is called just before `finish` is emitted, i.e. when all writes have flushed but `ws.end()`
have been called. Use this to implement any logic that should happen after all writes but before finish.

Can also be set using `options.final` in the constructor.

#### `ws.on('finish')`

Emitted when the stream has been ended and all writes have been drained.

#### `ws.on('close')`

Emitted when the readable stream has fully closed (i.e. it's destroy function has completed)

#### `ws.on('error', err)`

Emitted if any of the stream operations fail with an error. `close` is always emitted right after this.

#### `ws.on('pipe', src)`

Emitted when a readable stream is being piped to the writable one.

#### `ws.destroyed`

Boolean property indicating wheather or not this stream has been destroyed.

#### `bool = Writable.isBackpressured(ws)`

Static method to check if a writable stream is currently under backpressure.

#### `bool = await Writable.drained(ws)`

Static helper to wait for a stream to drain the currently queued writes.
Returns true if they were drained and false otherwise if the stream was destroyed.

## Duplex Stream

#### `s = new stream.Duplex([options])`

A duplex stream is a stream that is both readable and writable.

Since JS does not support multiple inheritance it inherits directly from Readable
but implements the Writable API as well.

If you want to provide only a map function for the readable side use `mapReadable` instead.
If you want to provide only a byteLength function for the readable side use `byteLengthReadable` instead.

Same goes for the writable side but using `mapWritable` and `byteLengthWritable` instead.

## Transform Stream

A Transform stream is a duplex stream with an `._transform` template method that allows to
asynchronously map the input to a different output.

The transform stream overrides the `_write` and `_read` operations of `Readable` and `Writable` but
still allows the setting of these options in the constructor. Usually it is unnecessary to pass
in `read` or `write`/`writev` or to override the corresponding `._read`, `._write` or `._writev` operation.

#### `ts = new stream.Transform([options])`

A transform stream is a duplex stream that maps the data written to it and emits that as readable data.

Has the same options as a duplex stream except you can provide a `transform` function also.

#### `ts._transform(data, callback)`

Transform the incoming data. Call `callback(null, mappedData)` or use `ts.push(mappedData)` to
return data to the readable side of the stream.

Per default the transform function just remits the incoming data making it act as a pass-through stream.

## Pipeline

`pipeline` allows to stream form a readable through a set of duplex streams to a writable entry.

```js
const { pipeline, Readable, Transform, Writable } = require('streamx')
const lastStream = pipeline(
  Readable.from([1, 2, 3]),
  new Transform({
    transform (from, cb) {
      this.push(from.toString())
      cb()
    }
  }),
  new Writable({
    write (data, cb) {
      console.log(data)
      cb()
    }
  })
  error => {
    // Callback once write has finished
  }
)
```

#### `lastStream = stream.pipeline(...streams, [done])`

Pipe all streams together and return the last stream piped to.
When the last stream finishes the pipeline ended succesfully.

If any of the streams error, whether they are Node.js core streams
or streamx streams, all streams in the pipeline are shutdown.

Optionally you can pass a done callback to know when the pipeline is done.

#### `promise = stream.pipelinePromise(...streams)`

Same as normal pipeline except instead of returning the last stream it returns
a promise representing the done callback. Note you should error handle this
promise if you use this version.

## Helpers

#### `bool = isStream(stream)`

#### `bool = isStreamx(stream)`

#### `err = getStreamError(stream, [options])`

Returns `null` if the stream has no errors.

## Utilities

Streamx aims to be minimal and stable. It therefore only contains a minimal set of utilities.
To help discover of other modules that help you build streamx apps, we link some useful utilities here

- [stream-composer](https://github.com/mafintosh/stream-composer) - Compose streams like Node's `stream.compose` and the `duplexify` and `pumpify` modules.
- [teex](https://github.com/mafintosh/teex) - Clone a readable stream into multiple new readable instances.
- [merge-readable](https://github.com/holepunchto/merge-readable) - Merge multiple readers into a new readable with optional mapping of data

## Contributing

If you want to help contribute to streamx a good way to start is to help writing more test
cases, compatibility tests, documentation, or performance benchmarks.

If in doubt open an issue :)

## License

MIT
