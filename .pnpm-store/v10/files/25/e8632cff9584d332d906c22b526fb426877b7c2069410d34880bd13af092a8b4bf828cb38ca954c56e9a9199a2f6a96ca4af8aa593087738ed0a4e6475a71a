import {
	Stream,
	Writable as WritableStream,
	Readable as ReadableStream,
	Duplex as DuplexStream,
	Transform as TransformStream,
} from 'node:stream';

/**
@returns Whether `stream` is a [`Stream`](https://nodejs.org/api/stream.html#stream_stream).

@example
```
import fs from 'node:fs';
import {isStream} from 'is-stream';

isStream(fs.createReadStream('unicorn.png'));
//=> true

isStream({});
//=> false
```
*/
export function isStream(stream: unknown): stream is Stream;

/**
@returns Whether `stream` is a [`stream.Writable`](https://nodejs.org/api/stream.html#stream_class_stream_writable).

@example
```
import fs from 'node:fs';
import {isWritableStream} from 'is-stream';

isWritableStream(fs.createWriteStrem('unicorn.txt'));
//=> true
```
*/
export function isWritableStream(stream: unknown): stream is WritableStream;

/**
@returns Whether `stream` is a [`stream.Readable`](https://nodejs.org/api/stream.html#stream_class_stream_readable).

@example
```
import fs from 'node:fs';
import {isReadableStream} from 'is-stream';

isReadableStream(fs.createReadStream('unicorn.png'));
//=> true
```
*/
export function isReadableStream(stream: unknown): stream is ReadableStream;

/**
@returns Whether `stream` is a [`stream.Duplex`](https://nodejs.org/api/stream.html#stream_class_stream_duplex).

@example
```
import {Duplex as DuplexStream} from 'node:stream';
import {isDuplexStream} from 'is-stream';

isDuplexStream(new DuplexStream());
//=> true
```
*/
export function isDuplexStream(stream: unknown): stream is DuplexStream;

/**
@returns Whether `stream` is a [`stream.Transform`](https://nodejs.org/api/stream.html#stream_class_stream_transform).

@example
```
import fs from 'node:fs';
import StringifyStream from 'streaming-json-stringify';
import {isTransformStream} from 'is-stream';

isTransformStream(StringifyStream());
//=> true
```
*/
export function isTransformStream(stream: unknown): stream is TransformStream;
