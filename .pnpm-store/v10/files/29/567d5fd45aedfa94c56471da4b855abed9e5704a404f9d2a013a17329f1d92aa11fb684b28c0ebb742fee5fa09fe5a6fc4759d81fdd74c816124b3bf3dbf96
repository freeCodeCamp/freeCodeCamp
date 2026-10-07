![Karma CI](https://github.com/Borewit/readable-web-to-node-stream/workflows/Karma%20CI/badge.svg)
[![NPM version](https://badge.fury.io/js/readable-web-to-node-stream.svg)](https://npmjs.org/package/readable-web-to-node-stream)
[![npm downloads](http://img.shields.io/npm/dm/readable-web-to-node-stream.svg)](https://npmcharts.com/compare/readable-web-to-node-stream)
[![dependencies Status](https://david-dm.org/Borewit/readable-web-to-node-stream/status.svg)](https://david-dm.org/Borewit/readable-web-to-node-stream)
[![Known Vulnerabilities](https://snyk.io/test/github/Borewit/readable-web-to-node-stream/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Borewit/readable-web-to-node-stream?targetFile=package.json)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/d4b511481b3a4634b6ca5c0724407eb9)](https://www.codacy.com/gh/Borewit/peek-readable/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Borewit/peek-readable&amp;utm_campaign=Badge_Grade)
[![Coverage Status](https://coveralls.io/repos/github/Borewit/readable-web-to-node-stream/badge.svg?branch=master)](https://coveralls.io/github/Borewit/readable-web-to-node-stream?branch=master)
[![Minified size](https://badgen.net/bundlephobia/min/readable-web-to-node-stream)](https://bundlephobia.com/result?p=readable-web-to-node-stream)

# readable-web-to-node-stream

Converts a [Web-API readable stream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader) into a [Node.js readable stream](https://nodejs.org/api/stream.html#stream_readable_streams).

## Installation
Install via [npm](http://npmjs.org/):

```bash
npm install readable-web-to-node-stream
```
or or [yarn](https://yarnpkg.com/):
```bash
yarn add readable-web-to-node-stream
```

## Compatibility

Source is written in TypeScript and compiled to ECMAScript 2017 (ES8).

Unit tests are performed on the following browsers:

*   Google Chrome 74.0
*   Firefox 68.0
*   Safari 12.0
*   Opera 60.0
 
## Example

Import readable-web-stream-to-node in JavaScript:
```js
const {ReadableWebToNodeStream} = require('readable-web-to-node-stream');

async function download(url) {
    const response = await fetch(url);
    const readableWebStream = response.body;
    const nodeStream = new ReadableWebToNodeStream(readableWebStream);
}
```

## API

**constructor(stream: ReadableStream): Promise<void>**

`stream: ReadableStream`: the [Web-API readable stream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader).

**close(): Promise<void>**
Will cancel close the Readable-node stream, and will release Web-API-readable-stream.

**waitForReadToComplete(): Promise<void>**
If there is no unresolved read call to Web-API Readable​Stream immediately returns, otherwise it will wait until the read is resolved.

## Licence

(The MIT License)

Copyright (c) 2019 Borewit

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
