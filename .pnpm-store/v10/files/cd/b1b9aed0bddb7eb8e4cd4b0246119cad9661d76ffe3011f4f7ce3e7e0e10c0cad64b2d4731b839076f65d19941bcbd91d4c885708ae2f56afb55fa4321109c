# json-ext

[![NPM version](https://img.shields.io/npm/v/@discoveryjs/json-ext.svg)](https://www.npmjs.com/package/@discoveryjs/json-ext)
[![Build Status](https://github.com/discoveryjs/json-ext/actions/workflows/ci.yml/badge.svg)](https://github.com/discoveryjs/json-ext/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/discoveryjs/json-ext/badge.svg?branch=master)](https://coveralls.io/github/discoveryjs/json-ext?)
[![NPM Downloads](https://img.shields.io/npm/dm/@discoveryjs/json-ext.svg)](https://www.npmjs.com/package/@discoveryjs/json-ext)

A set of utilities that extend the use of JSON. Designed to be fast and memory efficient

Features:

- [x] `parseChunked()` – Parse JSON that comes by chunks (e.g. FS readable stream or fetch response stream)
- [x] `stringifyStream()` – Stringify stream (Node.js)
- [x] `stringifyInfo()` – Get estimated size and other facts of JSON.stringify() without converting a value to string
- [ ] **TBD** Support for circular references
- [ ] **TBD** Binary representation [branch](https://github.com/discoveryjs/json-ext/tree/binary)
- [ ] **TBD** WHATWG [Streams](https://streams.spec.whatwg.org/) support

## Install

```bash
npm install @discoveryjs/json-ext
```

## API

- [parseChunked(chunkEmitter)](#parsechunkedchunkemitter)
- [stringifyStream(value[, replacer[, space]])](#stringifystreamvalue-replacer-space)
- [stringifyInfo(value[, replacer[, space[, options]]])](#stringifyinfovalue-replacer-space-options)
    - [Options](#options)
        - [async](#async)
        - [continueOnCircular](#continueoncircular)
- [version](#version)

### parseChunked(chunkEmitter)

Works the same as [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) but takes `chunkEmitter` instead of string and returns [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

> NOTE: `reviver` parameter is not supported yet, but will be added in next releases.
> NOTE: WHATWG streams aren't supported yet

When to use:
- It's required to avoid freezing the main thread during big JSON parsing, since this process can be distributed in time
- Huge JSON needs to be parsed (e.g. >500MB on Node.js)
- Needed to reduce memory pressure. `JSON.parse()` needs to receive the entire JSON before parsing it. With `parseChunked()` you may parse JSON as first bytes of it comes. This approach helps to avoid storing a huge string in the memory at a single time point and following GC.

[Benchmark](https://github.com/discoveryjs/json-ext/tree/master/benchmarks#parse-chunked)

Usage:

```js
const { parseChunked } = require('@discoveryjs/json-ext');

// as a regular Promise
parseChunked(chunkEmitter)
    .then(data => {
        /* data is parsed JSON */
    });

// using await (keep in mind that not every runtime has a support for top level await)
const data = await parseChunked(chunkEmitter);
```

Parameter `chunkEmitter` can be:
- [`ReadableStream`](https://nodejs.org/dist/latest-v14.x/docs/api/stream.html#stream_readable_streams) (Node.js only)
```js
const fs = require('fs');
const { parseChunked } = require('@discoveryjs/json-ext');

parseChunked(fs.createReadStream('path/to/file.json'))
```
- Generator, async generator or function that returns iterable (chunks). Chunk might be a `string`, `Uint8Array` or `Buffer` (Node.js only):
```js
const { parseChunked } = require('@discoveryjs/json-ext');
const encoder = new TextEncoder();

// generator
parseChunked(function*() {
    yield '{ "hello":';
    yield Buffer.from(' "wor');    // Node.js only
    yield encoder.encode('ld" }'); // returns Uint8Array(5) [ 108, 100, 34, 32, 125 ]
});

// async generator
parseChunked(async function*() {
    for await (const chunk of someAsyncSource) {
        yield chunk;
    }
});

// function that returns iterable
parseChunked(() => ['{ "hello":', ' "world"}'])
```

Using with [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):

```js
async function loadData(url) {
    const response = await fetch(url);
    const reader = response.body.getReader();

    return parseChunked(async function*() {
        while (true) {
            const { done, value } = await reader.read();

            if (done) {
                break;
            }

            yield value;
        }
    });
}

loadData('https://example.com/data.json')
    .then(data => {
        /* data is parsed JSON */
    })
```

### stringifyStream(value[, replacer[, space]])

Works the same as [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), but returns an instance of [`ReadableStream`](https://nodejs.org/dist/latest-v14.x/docs/api/stream.html#stream_readable_streams) instead of string.

> NOTE: WHATWG Streams aren't supported yet, so function available for Node.js only for now

Departs from JSON.stringify():
- Outputs `null` when `JSON.stringify()` returns `undefined` (since streams may not emit `undefined`)
- A promise is resolving and the resulting value is stringifying as a regular one
- A stream in non-object mode is piping to output as is
- A stream in object mode is piping to output as an array of objects

When to use:
- Huge JSON needs to be generated (e.g. >500MB on Node.js)
- Needed to reduce memory pressure. `JSON.stringify()` needs to generate the entire JSON before send or write it to somewhere. With `stringifyStream()` you may send a result to somewhere as first bytes of the result appears. This approach helps to avoid storing a huge string in the memory at a single time point.
- The object being serialized contains Promises or Streams (see Usage for examples)

[Benchmark](https://github.com/discoveryjs/json-ext/tree/master/benchmarks#stream-stringifying)

Usage:

```js
const { stringifyStream } = require('@discoveryjs/json-ext');

// handle events
stringifyStream(data)
    .on('data', chunk => console.log(chunk))
    .on('error', error => consold.error(error))
    .on('finish', () => console.log('DONE!'));

// pipe into a stream
stringifyStream(data)
    .pipe(writableStream);
```

Using Promise or ReadableStream in serializing object:

```js
const fs = require('fs');
const { stringifyStream } = require('@discoveryjs/json-ext');

// output will be
// {"name":"example","willSerializeResolvedValue":42,"fromFile":[1, 2, 3],"at":{"any":{"level":"promise!"}}}
stringifyStream({
    name: 'example',
    willSerializeResolvedValue: Promise.resolve(42),
    fromFile: fs.createReadStream('path/to/file.json'), // support file content is "[1, 2, 3]", it'll be inserted as it
    at: {
        any: {
            level: new Promise(resolve => setTimeout(() => resolve('promise!'), 100))
        }
    }
})

// in case several async requests are used in object, it's prefered
// to put fastest requests first, because in this case
stringifyStream({
    foo: fetch('http://example.com/request_takes_2s').then(req => req.json()),
    bar: fetch('http://example.com/request_takes_5s').then(req => req.json())
});
```

Using with [`WritableStream`](https://nodejs.org/dist/latest-v14.x/docs/api/stream.html#stream_writable_streams) (Node.js only):

```js
const fs = require('fs');
const { stringifyStream } = require('@discoveryjs/json-ext');

// pipe into a console
stringifyStream(data)
    .pipe(process.stdout);

// pipe into a file
stringifyStream(data)
    .pipe(fs.createWriteStream('path/to/file.json'));

// wrapping into a Promise
new Promise((resolve, reject) => {
    stringifyStream(data)
        .on('error', reject)
        .pipe(stream)
        .on('error', reject)
        .on('finish', resolve);
});
```

### stringifyInfo(value[, replacer[, space[, options]]])

`value`, `replacer` and `space` arguments are the same as for `JSON.stringify()`.

Result is an object:

```js
{
    minLength: Number,  // minimal bytes when values is stringified
    circular: [...],    // list of circular references
    duplicate: [...],   // list of objects that occur more than once
    async: [...]        // list of async values, i.e. promises and streams
}
```

Example:

```js
const { stringifyInfo } = require('@discoveryjs/json-ext');

console.log(
    stringifyInfo({ test: true }).minLength
);
// > 13
// that equals '{"test":true}'.length
```

#### Options

##### async

Type: `Boolean`  
Default: `false`

Collect async values (promises and streams) or not.

##### continueOnCircular

Type: `Boolean`  
Default: `false`

Stop collecting info for a value or not whenever circular reference is found. Setting option to `true` allows to find all circular references.

### version

The version of library, e.g. `"0.3.1"`.

## License

MIT
