![Node.js CI](https://github.com/Borewit/peek-readable/workflows/Node.js%20CI/badge.svg)
[![NPM version](https://badge.fury.io/js/peek-readable.svg)](https://npmjs.org/package/peek-readable)
[![npm downloads](http://img.shields.io/npm/dm/peek-readable.svg)](https://npmcharts.com/compare/peek-readable?start=600&interval=30)
[![Coverage Status](https://coveralls.io/repos/github/Borewit/peek-readable/badge.svg?branch=master)](https://coveralls.io/github/Borewit/peek-readable?branch=master)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/d4b511481b3a4634b6ca5c0724407eb9)](https://www.codacy.com/gh/Borewit/peek-readable/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Borewit/peek-readable&amp;utm_campaign=Badge_Grade)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Borewit/peek-readable.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Borewit/peek-readable/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Borewit/peek-readable.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Borewit/peek-readable/context:javascript)
[![Known Vulnerabilities](https://snyk.io/test/github/Borewit/peek-readable/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Borewit/peek-readable?targetFile=package.json)

# peek-readable

A promise based asynchronous stream reader, which makes reading from a stream easy.

Allows to read and peek from a [Readable Stream](https://nodejs.org/api/stream.html#stream_readable_streams) 

Note that [peek-readable](https://github.com/Borewit/peek-readable) was formally released as [then-read-stream](https://github.com/Borewit/peek-readable).

## Usage

### Installation

```shell script
npm install --save peek-readable
```

The `peek-readable` contains one class: `StreamReader`, which reads from a [stream.Readable](https://nodejs.org/api/stream.html#stream_class_stream_readable).

### Compatibility

NPM module is compliant with [ECMAScript 2018 (ES9)](https://en.wikipedia.org/wiki/ECMAScript#9th_Edition_%E2%80%93_ECMAScript_2018).

## Examples

In the following example we read the first 16 bytes from a stream and store them in our buffer.
Source code of examples can be found [here](test/examples.ts).

```js
const fs = require('fs');
const { StreamReader } = require('peek-readable');

(async () => {
  const readable = fs.createReadStream('JPEG_example_JPG_RIP_001.jpg');
  const streamReader = new StreamReader(readable);
  const uint8Array = new Uint8Array(16);
  const bytesRead = await streamReader.read(uint8Array, 0, 16);;
  // buffer contains 16 bytes, if the end-of-stream has not been reached
})();
```

End-of-stream detection:
```js
(async () => {

  const fileReadStream = fs.createReadStream('JPEG_example_JPG_RIP_001.jpg');
  const streamReader = new StreamReader(fileReadStream);
  const buffer = Buffer.alloc(16); // or use: new Uint8Array(16);

  try {
    await streamReader.read(buffer, 0, 16);
    // buffer contains 16 bytes, if the end-of-stream has not been reached
  } catch(error) {
    if (error instanceof EndOfStreamError) {
      console.log('End-of-stream reached');
    }
  }
})();
```

With peek you can read ahead:
```js
const fs = require('fs');
const { StreamReader } = require('peek-readable');

const fileReadStream = fs.createReadStream('JPEG_example_JPG_RIP_001.jpg');
const streamReader = new StreamReader(fileReadStream);
const buffer = Buffer.alloc(20);

(async () => {
  let bytesRead = await streamReader.peek(buffer, 0, 3);
  if (bytesRead === 3 && buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF) {
    console.log('This is a JPEG file');
  } else {
    throw Error('Expected a JPEG file');
  }

  bytesRead = await streamReader.read(buffer, 0, 20); // Read JPEG header
  if (bytesRead === 20) {
    console.log('Got the JPEG header');
  } else {
    throw Error('Failed to read JPEG header');
  }
})();
```
