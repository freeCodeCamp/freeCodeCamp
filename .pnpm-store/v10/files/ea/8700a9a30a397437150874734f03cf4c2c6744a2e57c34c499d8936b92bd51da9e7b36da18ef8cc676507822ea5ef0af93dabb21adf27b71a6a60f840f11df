# is-stream

> Check if something is a [Node.js stream](https://nodejs.org/api/stream.html)

## Install

```
$ npm install is-stream
```

## Usage

```js
import fs from 'node:fs';
import {isStream} from 'is-stream';

isStream(fs.createReadStream('unicorn.png'));
//=> true

isStream({});
//=> false
```

## API

### isStream(stream)

Returns a `boolean` for whether it's a [`Stream`](https://nodejs.org/api/stream.html#stream_stream).

#### isWritableStream(stream)

Returns a `boolean` for whether it's a [`stream.Writable`](https://nodejs.org/api/stream.html#stream_class_stream_writable).

#### isReadableStream(stream)

Returns a `boolean` for whether it's a [`stream.Readable`](https://nodejs.org/api/stream.html#stream_class_stream_readable).

#### isDuplexStream(stream)

Returns a `boolean` for whether it's a [`stream.Duplex`](https://nodejs.org/api/stream.html#stream_class_stream_duplex).

#### isTransformStream(stream)

Returns a `boolean` for whether it's a [`stream.Transform`](https://nodejs.org/api/stream.html#stream_class_stream_transform).

## Related

- [is-file-stream](https://github.com/jamestalmage/is-file-stream) - Detect if a stream is a file stream

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-is-stream?utm_source=npm-is-stream&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
