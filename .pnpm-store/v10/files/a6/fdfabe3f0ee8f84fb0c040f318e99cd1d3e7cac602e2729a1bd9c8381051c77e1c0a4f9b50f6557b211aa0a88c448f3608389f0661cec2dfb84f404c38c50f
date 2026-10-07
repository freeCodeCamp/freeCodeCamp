# form-data-encoder

Encode `FormData` content into the `multipart/form-data` format

[![Code Coverage](https://codecov.io/github/octet-stream/form-data-encoder/coverage.svg?branch=master)](https://codecov.io/github/octet-stream/form-data-encoder?branch=master)
[![CI](https://github.com/octet-stream/form-data-encoder/workflows/CI/badge.svg)](https://github.com/octet-stream/form-data-encoder/actions/workflows/ci.yml)
[![ESLint](https://github.com/octet-stream/form-data-encoder/workflows/ESLint/badge.svg)](https://github.com/octet-stream/form-data-encoder/actions/workflows/eslint.yml)

## Requirements

- Node.js v14.17 or higher;
- Runtime should support `TextEncoder`, `TextDecoder`, `WeakMap`, `WeakSet` and async generator functions;
- For TypeScript users: tsc v4.3 or higher.

## Installation

You can install this package using npm:

```sh
npm install form-data-encoder
```

Or yarn:

```sh
yarn add form-data-encoder
```

Or pnpm:

```sh
pnpm add form-data-encoder
```

## Usage

1. To start the encoding process, you need to create a new Encoder instance with the FormData you want to encode:

```js
import {Readable} from "stream"

import {FormData, File} from "formdata-node"
import {FormDataEncoder} from "form-data-encoder"

import fetch from "node-fetch"

const form = new FormData()

form.set("greeting", "Hello, World!")
form.set("file", new File(["On Soviet Moon landscape see binoculars through YOU"], "file.txt"))

const encoder = new FormDataEncoder(form)

const options = {
  method: "post",

  // Set request headers provided by the Encoder.
  // The `headers` property has `Content-Type` and `Content-Length` headers.
  headers: encoder.headers,

  // Create a Readable stream from the Encoder.
  // You can omit usage of `Readable.from` for HTTP clients whose support async iterables in request body.
  // The Encoder will yield FormData content portions encoded into the multipart/form-data format as node-fetch consumes the stream.
  body: Readable.from(encoder.encode()) // or just Readable.from(encoder)
}

const response = await fetch("https://httpbin.org/post", options)

console.log(await response.json())
```

2. Encoder support different spec-compatible FormData implementations. Let's try it with [`formdata-polyfill`](https://github.com/jimmywarting/FormData):

```js
import {Readable} from "stream"

import {FormDataEncoder} from "form-data-encoder"
import {FormData} from "formdata-polyfill/esm-min.js"
import {File} from "fetch-blob" // v3

const form = new FormData()

form.set("field", "Some value")
form.set("file", new File(["File content goes here"], "file.txt"))

const encoder = new FormDataEncoder(form)

const options = {
  method: "post",
  headers: encoder.headers,
  body: Readable.from(encoder)
}

await fetch("https://httpbin.org/post", options)
```

3. Because the Encoder is iterable (it has both Symbol.asyncIterator and Symbol.iterator methods), you can use it with different targets. Let's say you want to convert FormData content into `Blob`, for that you can write a function like this:

```js
import {Readable} from "stream"

import {FormDataEncoder} from "form-data-encoder"

import {FormData, File, Blob, fileFromPath} from "formdata-node"

import fetch from "node-fetch"

const form = new FormData()

form.set("field", "Just a random string")
form.set("file", new File(["Using files is class amazing"], "file.txt"))
form.set("fileFromPath", await fileFromPath("path/to/a/file.txt"))

// Note 1: When using with native Blob or fetch-blob@2 you might also need to generate boundary string for your FormDataEncoder instance
// because Blob will lowercase value of the `type` option and default boundary generator produces a string with both lower and upper cased alphabetical characters. Math.random() should be enough to fix this:
// const encoder = new FormDataEncoder(form, String(Math.random()))
const encoder = new FormDataEncoder(form)

const options = {
  method: "post",

  // Note 2: To use this approach with fetch-blob@2 you probably gonna need to convert the encoder parts output to an array first:
  // new Blob([...encoder], {type: encoder.contentType})
  body: new Blob(encoder, {type: encoder.contentType})
}

const response = await fetch("https://httpbin.org/post", options)

console.log(await response.json())
```

4. Here's FormData to Blob conversion with async-iterator approach:

```js
import {FormData} from "formdata-polyfill/esm-min.js"
import {blobFrom} from "fetch-blob/from.js"
import {FormDataEncoder} from "form-data-encoder"

import Blob from "fetch-blob"
import fetch from "node-fetch"

// This approach may require much more RAM compared to the previous one, but it works too.
async function toBlob(form) {
  const encoder = new Encoder(form)
  const chunks = []

  for await (const chunk of encoder) {
    chunks.push(chunk)
  }

  return new Blob(chunks, {type: encoder.contentType})
}

const form = new FormData()

form.set("name", "John Doe")
form.set("avatar", await blobFrom("path/to/an/avatar.png"), "avatar.png")

const options = {
  method: "post",
  body: await toBlob(form)
}

await fetch("https://httpbin.org/post", options)
```

5. Another way to convert FormData parts to blob using `form-data-encoder` is making a Blob-ish class:

```js
import {Readable} from "stream"

import {FormDataEncoder} from "form-data-encoder"
import {FormData} from "formdata-polyfill/esm-min.js"
import {blobFrom} from "fetch-blob/from.js"

import Blob from "fetch-blob"
import fetch from "node-fetch"

class BlobDataItem {
  constructor(encoder) {
    this.#encoder = encoder
    this.#size = encoder.headers["Content-Length"]
    this.#type = encoder.headers["Content-Type"]
  }

  get type() {
    return this.#type
  }

  get size() {
    return this.#size
  }

  stream() {
    return Readable.from(this.#encoder)
  }

  get [Symbol.toStringTag]() {
    return "Blob"
  }
}

const form = new FormData()

form.set("name", "John Doe")
form.set("avatar", await blobFrom("path/to/an/avatar.png"), "avatar.png")

const encoder = new FormDataEncoder(form)

// Note that node-fetch@2 performs more strictness tests for Blob objects, so you may need to do extra steps before you set up request body (like, maybe you'll need to instaniate a Blob with BlobDataItem as one of its blobPart)
const blob = new BlobDataItem(enocoder) // or new Blob([new BlobDataItem(enocoder)], {type: encoder.contentType})

const options = {
  method: "post",
  body: blob
}

await fetch("https://httpbin.org/post", options)
```

6. In this example we will pull FormData content into the ReadableStream:

```js
 // This module is only necessary when you targeting Node.js or need web streams that implement Symbol.asyncIterator
import {ReadableStream} from "web-streams-polyfill/ponyfill/es2018"

import {FormDataEncoder} from "form-data-encoder"
import {FormData} from "formdata-node"

import fetch from "node-fetch"

function toReadableStream(encoder) {
  const iterator = encoder.encode()

  return new ReadableStream({
    async pull(controller) {
      const {value, done} = await iterator.next()

      if (done) {
        return controller.close()
      }

      controller.enqueue(value)
    }
  })
}

const form = new FormData()

form.set("field", "My hovercraft is full of eels")

const encoder = new FormDataEncoder(form)

const options = {
  method: "post",
  headers: encoder.headers,
  body: toReadableStream(encoder)
}

// Note that this example requires `fetch` to support Symbol.asyncIterator, which node-fetch lacks of (but will support eventually)
await fetch("https://httpbin.org/post", options)
```

7. Speaking of async iterables - if HTTP client supports them, you can use encoder like this:

```js
import {FormDataEncoder} from "form-data-encoder"
import {FormData} from "formdata-node"

import fetch from "node-fetch"

const form = new FormData()

form.set("field", "My hovercraft is full of eels")

const encoder = new FormDataEncoder(form)

const options = {
  method: "post",
  headers: encoder.headers,
  body: encoder
}

await fetch("https://httpbin.org/post", options)
```

8. ...And for those client whose supporting form-data-encoder out of the box, the usage will be much, much more simpler:

```js
import {FormData} from "formdata-node" // Or any other spec-compatible implementation

import fetch from "node-fetch"

const form = new FormData()

form.set("field", "My hovercraft is full of eels")

const options = {
  method: "post",
  body: form
}

// Note that node-fetch does NOT support form-data-encoder
await fetch("https://httpbin.org/post", options)
```

## API

### `class FormDataEncoder`

##### `constructor(form[, boundary, options]) -> {FormDataEncoder}`

  - **{FormDataLike}** form - FormData object to encode. This object must be a spec-compatible FormData implementation.
  - **{string}** [boundary] - An optional boundary string that will be used by the encoder. If there's no boundary string is present, FormDataEncoder will generate it automatically.
  - **{object}** [options] - FormDataEncoder options.
  - **{boolean}** [options.enableAdditionalHeaders = false] - When enabled, the encoder will emit additional per part headers, such as `Content-Length`. Please note that the web clients do not include these, so when enabled this option might cause an error if `multipart/form-data` does not consider additional headers.

Creates a `multipart/form-data` encoder.

#### Instance properties

##### `boundary -> {string}`

Returns boundary string.

##### `contentType -> {string}`

Returns Content-Type header.

##### `contentLength -> {string}`

Return Content-Length header.

##### `headers -> {object}`

Returns headers object with Content-Type and Content-Length header.

#### Instance methods

##### `values() -> {Generator<Uint8Array | FileLike, void, undefined>}`

Creates an iterator allowing to go through form-data parts (with metadata).
This method **will not** read the files.

##### `encode() -> {AsyncGenerator<Uint8Array, void, undefined>}`

Creates an async iterator allowing to perform the encoding by portions.
This method **will** also read files.

##### `[Symbol.iterator]() -> {Generator<Uint8Array | FileLike, void, undefined>}`

An alias for `Encoder#values()` method.

##### `[Symbol.asyncIterator]() -> {AsyncGenerator<Uint8Array, void, undefined>}`

An alias for `Encoder#encode()` method.

### `isFile(value) -> {boolean}`

Check if a value is File-ish object.

  - **{unknown}** value - a value to test

### `isFormData(value) -> {boolean}`

Check if a value is FormData-ish object.

  - **{unknown}** value - a value to test
