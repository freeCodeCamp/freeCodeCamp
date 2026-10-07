![Node.js CI](https://github.com/Borewit/strtok3/workflows/Node.js%20CI/badge.svg)
[![NPM version](https://badge.fury.io/js/strtok3.svg)](https://npmjs.org/package/strtok3)
[![npm downloads](http://img.shields.io/npm/dm/strtok3.svg)](https://npmcharts.com/compare/strtok3,token-types?start=1200&interval=30)
[![DeepScan grade](https://deepscan.io/api/teams/5165/projects/8526/branches/103329/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5165&pid=8526&bid=103329)
[![Known Vulnerabilities](https://snyk.io/test/github/Borewit/strtok3/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Borewit/strtok3?targetFile=package.json)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Borewit/strtok3.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Borewit/strtok3/alerts/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/59dd6795e61949fb97066ca52e6097ef)](https://www.codacy.com/app/Borewit/strtok3?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Borewit/strtok3&amp;utm_campaign=Badge_Grade)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Borewit/strtok3.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Borewit/strtok3/context:javascript)
# strtok3

A promise based streaming [*tokenizer*](#tokenizer) for [Node.js](http://nodejs.org) and browsers.
This node module is a successor of [strtok2](https://github.com/Borewit/strtok2).

The `strtok3` contains a few methods to turn different input into a [*tokenizer*](#tokenizer). Designed to
*   Support a streaming environment
*   Decoding of binary data, strings and numbers in mind
*   Read [predefined](https://github.com/Borewit/token-types) or custom tokens.
*   Optimized [*tokenizers*](#tokenizer) for reading from [file](#method-strtok3fromfile), [stream](#method-strtok3fromstream) or [buffer](#method-strtok3frombuffer).

It can read from:
*   A file (taking a file path as an input)
*   A Node.js [stream](https://nodejs.org/api/stream.html).
*   A [Buffer](https://nodejs.org/api/buffer.html) or [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
*   HTTP chunked transfer provided by [@tokenizer/http](https://github.com/Borewit/tokenizer-http).
*   Chunked [Amazon S3](https://aws.amazon.com/s3) access provided by [@tokenizer/s3](https://github.com/Borewit/tokenizer-s3).

## Installation

```sh
npm install strtok3
```

### Compatibility

NPM module is compliant with [ECMAScript 2018 (ES9)](https://en.wikipedia.org/wiki/ECMAScript#9th_Edition_%E2%80%93_ECMAScript_2018).

## API

Use one of the methods to instantiate an [*abstract tokenizer*](#tokenizer):
*   [strtok3.fromFile](#method-strtok3fromfile)
*   [strtok3.fromStream](#method-strtok3fromstream)
*   [strtok3.fromBuffer](#method-strtok3fromBuffer)
*   [strtok3.fromUint8Array](#method-strtok3fromUint8Array)

### strtok3 methods

All of the strtok3 methods return a [*tokenizer*](#tokenizer), either directly or via a promise.

#### Method `strtok3.fromFile()`

| Parameter | Type                  | Description                |
|-----------|-----------------------|----------------------------|
| path      | Path to file (string) | Path to file to read from  |

> __Note__: that [file-information](#file-information) is automatically added.

Returns, via a promise, a [*tokenizer*](#tokenizer) which can be used to parse a file.

```js
const strtok3 = require('strtok3');
const Token = require('token-types');
    
(async () => {

  const tokenizer = await strtok3.fromFile("somefile.bin");
         try {
    const myNumber = await tokenizer.readToken(Token.UINT8);
    console.log(`My number: ${myNumber}`);
  } finally {
    tokenizer.close(); // Close the file
  } 
})();

```

#### Method `strtok3.fromStream()`

Create [*tokenizer*](#tokenizer) from a node.js [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable).

| Parameter |  Optional | Type                                                                        | Description              |
|-----------|-----------|-----------------------------------------------------------------------------|--------------------------|
| stream    | no        | [Readable](https://nodejs.org/api/stream.html#stream_class_stream_readable) | Stream to read from      |
| fileInfo  | yes       | [IFileInfo](#IFileInfo)                                                     | Provide file information |

Returns a [*tokenizer*](#tokenizer), via a Promise, which can be used to parse a buffer.

```js
const strtok3 = require('strtok3');
const Token = require('token-types');

strtok3.fromStream(stream).then(tokenizer => {
  return tokenizer.readToken(Token.UINT8).then(myUint8Number => {
    console.log(`My number: ${myUint8Number}`);
  });
});
```

#### Method `strtok3.fromBuffer()`

| Parameter  | Optional | Type                                             | Description                            |
|------------|----------|--------------------------------------------------|----------------------------------------|
| uint8Array | no       | [Uint8Array](https://nodejs.org/api/buffer.html) | Uint8Array or Buffer to read from      |
| fileInfo   | yes      | [IFileInfo](#IFileInfo)                          | Provide file information               |

Returns a [*tokenizer*](#tokenizer) which can be used to parse the provided buffer.

```js
const strtok3 = require('strtok3');
    
const tokenizer = strtok3.fromBuffer(buffer);

tokenizer.readToken(Token.UINT8).then(myUint8Number => {
  console.log(`My number: ${myUint8Number}`);
});
```

## Tokenizer
The tokenizer allows us to *read* or *peek* from the *tokenizer-stream*. The *tokenizer-stream* is an abstraction of a [stream](https://nodejs.org/api/stream.html), file or [Buffer](https://nodejs.org/api/buffer.html).
It can also be translated in chunked reads, as done in [@tokenizer/http](https://github.com/Borewit/tokenizer-http);

What is the difference with Nodejs.js stream?
*   The *tokenizer-stream* supports jumping / seeking in a the *tokenizer-stream* using [`tokenizer.ignore()`](#method-tokenizerignore)
*   In addition to *read* methods, it has *peek* methods, to read a ahead and check what is coming.

The [tokenizer.position](#attribute-tokenizerposition) keeps tracks of the read position.

### strtok3 attributes

#### Attribute `tokenizer.fileInfo`
Optional attribute describing the file information, see [IFileInfo](#IFileInfo)

#### Attribute `tokenizer.position`
Pointer to the current position in the [*tokenizer*](#tokenizer) stream.
If a *position* is provided to a *read* or *peek* method, is should be, at least, equal or greater than this value.

### Tokenizer methods 

There are two kind of methods:
1.   *read* methods: used to read a *token* of [Buffer](https://nodejs.org/api/buffer.html) from the [*tokenizer*](#tokenizer). The position of the *tokenizer-stream* will advance with the size of the token.
2.   *peek* methods: same as the read, but it will *not* advance the pointer. It allows to read (peek) ahead.

#### Method `tokenizer.readBuffer()`

Read buffer from stream.
`readBuffer(buffer, options?)`

| Parameter  | Type                                                           | Description                                                                                                                                                                                                                            |
|------------|----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| buffer     | [Buffer](https://nodejs.org/api/buffer.html) &#124; Uint8Array | Target buffer to write the data read to                                                                                                                                                                                                |
| options    | [IReadChunkOptions](#ireadchunkoptions)                        | An integer specifying the number of bytes to read                                                                                                                                                                                      |

Return value `Promise<number>` Promise with number of bytes read. The number of bytes read maybe if less, *mayBeLess* flag was set.

#### Method `tokenizer.peekBuffer()`

Peek (read ahead) buffer from [*tokenizer*](#tokenizer)
`peekBuffer(buffer,  options?)`

| Parameter  | Type                                    | Description                                         |
|------------|-----------------------------------------|-----------------------------------------------------|
| buffer     | Buffer &#124; Uint8Array                | Target buffer to write the data read (peeked) to.   |
| options    | [IReadChunkOptions](#ireadchunkoptions) | An integer specifying the number of bytes to read.  |                                                                                                                           |

Return value `Promise<number>` Promise with number of bytes read. The number of bytes read maybe if less, *mayBeLess* flag was set.

#### Method `tokenizer.readToken()`

Read a *token* from the tokenizer-stream.
`readToken(token, position?)`

| Parameter  | Type                    | Description                                                                                                           |
|------------|-------------------------|---------------------------------------------------------------------------------------------------------------------- |
| token      | [IGetToken](#IGetToken) | Token to read from the tokenizer-stream.                                                                              |
| position?  | number                  | Offset where to begin reading within the file. If position is null, data will be read from the current file position. |

Return value `Promise<number>`. Promise with number of bytes read. The number of bytes read maybe if less, *mayBeLess* flag was set.

#### Method `tokenizer.peekToken()`

Peek a *token* from the [*tokenizer*](#tokenizer).
`peekToken(token, position?)`

| Parameter  | Type                       | Description                                                                                                             |
|------------|----------------------------|-------------------------------------------------------------------------------------------------------------------------|
| token      | [IGetToken<T>](#IGetToken) | Token to read from the tokenizer-stream.                                                                                |
| position?  | number                     | Offset where to begin reading within the file. If position is null, data will be read from the current file position.   |

Return value `Promise<T>` Promise with token value peeked from the [*tokenizer*](#tokenizer).

#### Method `tokenizer.readNumber()`

Peek a numeric [*token*](#token) from the [*tokenizer*](#tokenizer).
`readNumber(token)`

| Parameter  | Type                            | Description                                        |
|------------|---------------------------------|----------------------------------------------------|
| token      | [IGetToken<number>](#IGetToken) | Numeric token to read from the tokenizer-stream.   |

Return value `Promise<number>` Promise with number peeked from the *tokenizer-stream*.

#### Method `tokenizer.ignore()`

Advanse the offset pointer with the number of bytes provided. 
`ignore(length)`

| Parameter  | Type   | Description                                                          |
|------------|--------|----------------------------------------------------------------------|
| ignore     | number | Numeric of bytes to ignore. Will advance the `tokenizer.position`    |

Return value `Promise<number>` Promise with number peeked from the *tokenizer-stream*.

#### Method `tokenizer.close()`
Clean up resources, such as closing a file pointer if applicable.

### IReadChunkOptions

Each attribute is optional:

| Attribute | Type    | Description                                                                                                                                                                                                                   |
|-----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| offset    | number  | The offset in the buffer to start writing at; if not provided, start at 0                                                                                                                                                     |
| length    | number  | Requested number of bytes to read.                                                                                                                                                                                            |
| position  | number  | Position where to peek from the file. If position is null, data will be read from the [current file position](#attribute-tokenizerposition). Position may not be less then [tokenizer.position](#attribute-tokenizerposition) |
| mayBeLess | boolean | If and only if set, will not throw an EOF error if less then the requested *mayBeLess* could be read.                                                                                                                         |

Example:
```js
  tokenizer.peekBuffer(buffer, {mayBeLess: true});
```

## IFileInfo

File information interface which describes the underlying file, each attribute is optional.

| Attribute | Type    | Description                                                                                       |
|-----------|---------|---------------------------------------------------------------------------------------------------|
| size      | number  | File size in bytes                                                                                | 
| mimeType  | number  | [MIME-type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of file. |
| path      | number  | File path                                                                                         |
| url       | boolean | File URL                                                                                          |

## Token

The *token* is basically a description what to read form the [*tokenizer-stream*](#tokenizer). 
A basic set of *token types* can be found here: [*token-types*](https://github.com/Borewit/token-types).

A token is something which implements the following interface:
```ts
export interface IGetToken<T> {

  /**
   * Length in bytes of encoded value
   */
  len: number;

  /**
   * Decode value from buffer at offset
   * @param buf Buffer to read the decoded value from
   * @param off Decode offset
   */
  get(buf: Buffer, off: number): T;
}
```
The *tokenizer* reads `token.len` bytes from the *tokenizer-stream* into a Buffer.
The `token.get` will be called with the Buffer. `token.get` is responsible for conversion from the buffer to the desired output type.

## Browser compatibility
To exclude fs based dependencies, you can use a submodule-import from 'strtok3/lib/core'.

| function              | 'strtok3'           | 'strtok3/lib/core'  |
| ----------------------| --------------------|---------------------|
| `parseBuffer`         | ✓                   | ✓                   |
| `parseStream`         | ✓                   | ✓                   |
| `fromFile`            | ✓                   |                     |

### Working with Web-API readable stream
To convert a [Web-API readable stream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader) into a [Node.js readable stream]((https://nodejs.org/api/stream.html#stream_readable_streams)), you can use [readable-web-to-node-stream](https://github.com/Borewit/readable-web-to-node-stream) to convert one in another.

Example submodule-import:
```js
const strtok3core = require('strtok3/lib/core'); // Submodule-import to prevent Node.js specific dependencies
const {ReadableWebToNodeStream} = require('readable-web-to-node-stream');

(async () => {

  const response = await fetch(url);
  const readableWebStream = response.body; // Web-API readable stream
  const nodeStream = new ReadableWebToNodeStream(readableWebStream); // convert to Node.js readable stream
  
  const tokenizer = strtok3core.fromStream(nodeStream); // And we now have tokenizer in a web environment
})();
```

## Licence

(The MIT License)

Copyright (c) 2020 Borewit

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
