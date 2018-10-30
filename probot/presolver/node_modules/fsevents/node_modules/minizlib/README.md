# minizlib

A tiny fast zlib stream built on [minipass](http://npm.im/minipass)
and Node.js's zlib binding.

This module was created to serve the needs of
[node-tar](http://npm.im/tar) v2.  If your needs are different, then
it may not be for you.

## How does this differ from the streams in `require('zlib')`?

First, there are no convenience methods to compress or decompress a
buffer.  If you want those, use the built-in `zlib` module.  This is
only streams.

This module compresses and decompresses the data as fast as you feed
it in.  It is synchronous, and runs on the main process thread.  Zlib
operations can be high CPU, but they're very fast, and doing it this
way means much less bookkeeping and artificial deferral.

Node's built in zlib streams are built on top of `stream.Transform`.
They do the maximally safe thing with respect to consistent
asynchrony, buffering, and backpressure.

This module _does_ support backpressure, and will buffer output chunks
that are not consumed, but is less of a mediator between the input and
output.  There is no high or low watermarks, no state objects, and so
artificial async deferrals.  It will not protect you from Zalgo.

If you write, data will be emitted right away.  If you write
everything synchronously in one tick, and you are listening to the
`data` event to consume it, then it'll all be emitted right away in
that same tick.  If you want data to be emitted in the next tick, then
write it in the next tick.

It is thus the responsibility of the reader and writer to manage their
own consumption and process execution flow.

The goal is to compress and decompress as fast as possible, even for
files that are too large to store all in one buffer.

The API is very similar to the built-in zlib module.  There are
classes that you instantiate with `new` and they are streams that can
be piped together.
