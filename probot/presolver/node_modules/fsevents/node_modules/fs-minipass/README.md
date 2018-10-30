# fs-minipass

Filesystem streams based on [minipass](http://npm.im/minipass).

4 classes are exported:

- ReadStream
- ReadStreamSync
- WriteStream
- WriteStreamSync

When using `ReadStreamSync`, all of the data is made available
immediately upon consuming the stream.  Nothing is buffered in memory
when the stream is constructed.  If the stream is piped to a writer,
then it will synchronously `read()` and emit data into the writer as
fast as the writer can consume it.  (That is, it will respect
backpressure.)  If you call `stream.read()` then it will read the
entire file and return the contents.

When using `WriteStreamSync`, every write is flushed to the file
synchronously.  If your writes all come in a single tick, then it'll
write it all out in a single tick.  It's as synchronous as you are.

The async versions work much like their node builtin counterparts,
with the exception of introducing significantly less Stream machinery
overhead.

## USAGE

It's just streams, you pipe them or read() them or write() to them.

```js
const fsm = require('fs-minipass')
const readStream = new fsm.ReadStream('file.txt')
const writeStream = new fsm.WriteStream('output.txt')
writeStream.write('some file header or whatever\n')
readStream.pipe(writeStream)
```

## ReadStream(path, options)

Path string is required, but somewhat irrelevant if an open file
descriptor is passed in as an option.

Options:

- `fd` Pass in a numeric file descriptor, if the file is already open.
- `readSize` The size of reads to do, defaults to 16MB
- `size` The size of the file, if known.  Prevents zero-byte read()
  call at the end.
- `autoClose` Set to `false` to prevent the file descriptor from being
  closed when the file is done being read.

## WriteStream(path, options)

Path string is required, but somewhat irrelevant if an open file
descriptor is passed in as an option.

Options:

- `fd` Pass in a numeric file descriptor, if the file is already open.
- `mode` The mode to create the file with. Defaults to `0o666`.
- `start` The position in the file to start reading.  If not
  specified, then the file will start writing at position zero, and be
  truncated by default.
- `autoClose` Set to `false` to prevent the file descriptor from being
  closed when the stream is ended.
- `flags` Flags to use when opening the file.  Irrelevant if `fd` is
  passed in, since file won't be opened in that case.  Defaults to
  `'a'` if a `pos` is specified, or `'w'` otherwise.
