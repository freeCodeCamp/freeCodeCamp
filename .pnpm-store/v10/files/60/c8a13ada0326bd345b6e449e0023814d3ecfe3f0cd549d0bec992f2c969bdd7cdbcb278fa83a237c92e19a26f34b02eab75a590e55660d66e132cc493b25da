# get-stream

> Get a stream as a string, Buffer, ArrayBuffer or array

## Features

- Works in any JavaScript environment ([Node.js](#nodejs-streams), [browsers](#web-streams), etc.).
- Supports [text streams](#getstreamstream-options), [binary streams](#getstreamasbufferstream-options) and [object streams](#getstreamasarraystream-options).
- Supports [async iterables](#async-iterables).
- Can set a [maximum stream size](#maxbuffer).
- Returns [partially read data](#errors) when the stream errors.
- [Fast](#benchmarks).

## Install

```sh
npm install get-stream
```

## Usage

### Node.js streams

```js
import fs from 'node:fs';
import getStream from 'get-stream';

const stream = fs.createReadStream('unicorn.txt');

console.log(await getStream(stream));
/*
              ,,))))))));,
           __)))))))))))))),
\|/       -\(((((''''((((((((.
-*-==//////((''  .     `)))))),
/|\      ))| o    ;-.    '(((((                                  ,(,
         ( `|    /  )    ;))))'                               ,_))^;(~
            |   |   |   ,))((((_     _____------~~~-.        %,;(;(>';'~
            o_);   ;    )))(((` ~---~  `::           \      %%~~)(v;(`('~
                  ;    ''''````         `:       `:::|\,__,%%    );`'; ~
                 |   _                )     /      `:|`----'     `-'
           ______/\/~    |                 /        /
         /~;;.____/;;'  /          ___--,-(   `;;;/
        / //  _;______;'------~~~~~    /;;/\    /
       //  | |                        / ;   \;;,\
      (<_  | ;                      /',/-----'  _>
       \_| ||_                     //~;~~~~~~~~~
           `\_|                   (,~~
                                   \~\
                                    ~~
*/
```

### Web streams

```js
import getStream from 'get-stream';

const {body: readableStream} = await fetch('https://example.com');
console.log(await getStream(readableStream));
```

### Async iterables

```js
import {opendir} from 'node:fs/promises';
import {getStreamAsArray} from 'get-stream';

const asyncIterable = await opendir(directory);
console.log(await getStreamAsArray(asyncIterable));
```

## API

The following methods read the stream's contents and return it as a promise.

### getStream(stream, options?)

`stream`: [`stream.Readable`](https://nodejs.org/api/stream.html#class-streamreadable), [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream), or [`AsyncIterable<string | Buffer | ArrayBuffer | DataView | TypedArray>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols)\
`options`: [`Options`](#options)

Get the given `stream` as a string.

### getStreamAsBuffer(stream, options?)

Get the given `stream` as a Node.js [`Buffer`](https://nodejs.org/api/buffer.html#class-buffer).

```js
import {getStreamAsBuffer} from 'get-stream';

const stream = fs.createReadStream('unicorn.png');
console.log(await getStreamAsBuffer(stream));
```

### getStreamAsArrayBuffer(stream, options?)

Get the given `stream` as an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

```js
import {getStreamAsArrayBuffer} from 'get-stream';

const {body: readableStream} = await fetch('https://example.com');
console.log(await getStreamAsArrayBuffer(readableStream));
```

### getStreamAsArray(stream, options?)

Get the given `stream` as an array. Unlike [other methods](#api), this supports [streams of objects](https://nodejs.org/api/stream.html#object-mode).

```js
import {getStreamAsArray} from 'get-stream';

const {body: readableStream} = await fetch('https://example.com');
console.log(await getStreamAsArray(readableStream));
```

#### options

Type: `object`

##### maxBuffer

Type: `number`\
Default: `Infinity`

Maximum length of the stream. If exceeded, the promise will be rejected with a `MaxBufferError`.

Depending on the [method](#api), the length is measured with [`string.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), [`buffer.length`](https://nodejs.org/api/buffer.html#buflength), [`arrayBuffer.byteLength`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength) or [`array.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length).

## Errors

If the stream errors, the returned promise will be rejected with the `error`. Any contents already read from the stream will be set to `error.bufferedData`, which is a `string`, a `Buffer`, an `ArrayBuffer` or an array depending on the [method used](#api).

```js
import getStream from 'get-stream';

try {
	await getStream(streamThatErrorsAtTheEnd('unicorn'));
} catch (error) {
	console.log(error.bufferedData);
	//=> 'unicorn'
}
```

## Tips

### Alternatives

If you do not need the [`maxBuffer`](#maxbuffer) option, [`error.bufferedData`](#errors), nor browser support, you can use the following methods instead of this package.

#### [`streamConsumers.text()`](https://nodejs.org/api/webstreams.html#streamconsumerstextstream)

```js
import fs from 'node:fs';
import {text} from 'node:stream/consumers';

const stream = fs.createReadStream('unicorn.txt', {encoding: 'utf8'});
console.log(await text(stream))
```

#### [`streamConsumers.buffer()`](https://nodejs.org/api/webstreams.html#streamconsumersbufferstream)

```js
import {buffer} from 'node:stream/consumers';

console.log(await buffer(stream))
```

#### [`streamConsumers.arrayBuffer()`](https://nodejs.org/api/webstreams.html#streamconsumersarraybufferstream)

```js
import {arrayBuffer} from 'node:stream/consumers';

console.log(await arrayBuffer(stream))
```

#### [`readable.toArray()`](https://nodejs.org/api/stream.html#readabletoarrayoptions)

```js
console.log(await stream.toArray())
```

#### [`Array.fromAsync()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync)

If your [environment supports it](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync#browser_compatibility):

```js
console.log(await Array.fromAsync(stream))
```

### Non-UTF-8 encoding

When all of the following conditions apply:
  - [`getStream()`](#getstreamstream-options) is used (as opposed to [`getStreamAsBuffer()`](#getstreamasbufferstream-options) or [`getStreamAsArrayBuffer()`](#getstreamasarraybufferstream-options))
  - The stream is binary (not text)
  - The stream's encoding is not UTF-8 (for example, it is UTF-16, hexadecimal, or Base64)

Then the stream must be decoded using a transform stream like [`TextDecoderStream`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoderStream) or [`b64`](https://github.com/hapijs/b64).

```js
import getStream from 'get-stream';

const textDecoderStream = new TextDecoderStream('utf-16le');
const {body: readableStream} = await fetch('https://example.com');
console.log(await getStream(readableStream.pipeThrough(textDecoderStream)));
```

### Blobs

[`getStreamAsArrayBuffer()`](#getstreamasarraybufferstream-options) can be used to create [Blobs](https://developer.mozilla.org/en-US/docs/Web/API/Blob).

```js
import {getStreamAsArrayBuffer} from 'get-stream';

const stream = fs.createReadStream('unicorn.txt');
console.log(new Blob([await getStreamAsArrayBuffer(stream)]));
```

### JSON streaming

[`getStreamAsArray()`](#getstreamasarraystream-options) can be combined with JSON streaming utilities to parse JSON incrementally.

```js
import fs from 'node:fs';
import {compose as composeStreams} from 'node:stream';
import {getStreamAsArray} from 'get-stream';
import streamJson from 'stream-json';
import streamJsonArray from 'stream-json/streamers/StreamArray.js';

const stream = fs.createReadStream('big-array-of-objects.json');
console.log(await getStreamAsArray(
	composeStreams(stream, streamJson.parser(), streamJsonArray.streamArray()),
));
```

## Benchmarks

### Node.js stream (100 MB, binary)

- `getStream()`: 142ms
- `text()`: 139ms
- `getStreamAsBuffer()`: 106ms
- `buffer()`: 83ms
- `getStreamAsArrayBuffer()`: 105ms
- `arrayBuffer()`: 81ms
- `getStreamAsArray()`: 24ms
- `stream.toArray()`: 21ms

### Node.js stream (100 MB, text)

- `getStream()`: 90ms
- `text()`: 89ms
- `getStreamAsBuffer()`: 127ms
- `buffer()`: 192ms
- `getStreamAsArrayBuffer()`: 129ms
- `arrayBuffer()`: 195ms
- `getStreamAsArray()`: 89ms
- `stream.toArray()`: 90ms

### Web ReadableStream (100 MB, binary)

- `getStream()`: 223ms
- `text()`: 221ms
- `getStreamAsBuffer()`: 182ms
- `buffer()`: 153ms
- `getStreamAsArrayBuffer()`: 171ms
- `arrayBuffer()`: 155ms
- `getStreamAsArray()`: 83ms

### Web ReadableStream (100 MB, text)

- `getStream()`: 141ms
- `text()`: 139ms
- `getStreamAsBuffer()`: 91ms
- `buffer()`: 80ms
- `getStreamAsArrayBuffer()`: 89ms
- `arrayBuffer()`: 81ms
- `getStreamAsArray()`: 21ms

[Benchmarks' source file](benchmarks/index.js).

## FAQ

### How is this different from [`concat-stream`](https://github.com/maxogden/concat-stream)?

This module accepts a stream instead of being one and returns a promise instead of using a callback. The API is simpler and it only supports returning a string, `Buffer`, an `ArrayBuffer` or an array. It doesn't have a fragile type inference. You explicitly choose what you want. And it doesn't depend on the huge `readable-stream` package.

## Related

- [get-stdin](https://github.com/sindresorhus/get-stdin) - Get stdin as a string or buffer
- [into-stream](https://github.com/sindresorhus/into-stream) - The opposite of this package
