# gzip-size [![Build Status](https://travis-ci.com/sindresorhus/gzip-size.svg?branch=master)](https://travis-ci.com/github/sindresorhus/gzip-size)

> Get the gzipped size of a string or buffer

## Install

```
$ npm install gzip-size
```

## Usage

```js
const gzipSize = require('gzip-size');

const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';

console.log(text.length);
//=> 191

console.log(gzipSize.sync(text));
//=> 78
```

## API

### gzipSize(input, options?)

Returns a `Promise<number>` with the size.

### gzipSize.sync(input, options?)

Returns the size.

#### input

Type: `string | Buffer`

#### options

Type: `object`

Any [`zlib` option](https://nodejs.org/api/zlib.html#zlib_class_options).

### gzipSize.stream(options?)

Returns a [`stream.PassThrough`](https://nodejs.org/api/stream.html#stream_class_stream_passthrough). The stream emits a `gzip-size` event and has a `gzipSize` property.

### gzipSize.file(path, options?)

Returns a `Promise<number>` with the size of the file.

#### path

Type: `string`

### gzipSize.fileSync(path, options?)

Returns the size of the file.

## Related

- [gzip-size-cli](https://github.com/sindresorhus/gzip-size-cli) - CLI for this module

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-gzip-size?utm_source=npm-gzip-size&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
