# clone-response

> Clone a Node.js HTTP response stream

[![Build Status](https://travis-ci.org/lukechilds/clone-response.svg?branch=master)](https://travis-ci.org/lukechilds/clone-response)
[![Coverage Status](https://coveralls.io/repos/github/lukechilds/clone-response/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/clone-response?branch=master)
[![npm](https://img.shields.io/npm/dm/clone-response.svg)](https://www.npmjs.com/package/clone-response)
[![npm](https://img.shields.io/npm/v/clone-response.svg)](https://www.npmjs.com/package/clone-response)

Returns a new stream and copies over all properties and methods from the original response giving you a complete duplicate.

This is useful in situations where you need to consume the response stream but also want to pass an unconsumed stream somewhere else to be consumed later.

## Install

```shell
npm install --save clone-response
```

## Usage

```js
const http = require('http');
const cloneResponse = require('clone-response');

http.get('http://example.com', response => {
  const clonedResponse = cloneResponse(response);
  response.pipe(process.stdout);

  setImmediate(() => {
    // The response stream has already been consumed by the time this executes,
    // however the cloned response stream is still available.
    doSomethingWithResponse(clonedResponse);
  });
});
```

Please bear in mind that the process of cloning a stream consumes it. However, you can consume a stream multiple times in the same tick, therefore allowing you to create multiple clones. e.g:

```js
const clone1 = cloneResponse(response);
const clone2 = cloneResponse(response);
// response can still be consumed in this tick but cannot be consumed if passed
// into any async callbacks. clone1 and clone2 can be passed around and be
// consumed in the future.
```

## API

### cloneResponse(response)

Returns a clone of the passed in response.

#### response

Type: `stream`

A [Node.js HTTP response stream](https://nodejs.org/api/http.html#http_class_http_incomingmessage) to clone.

## License

MIT © Luke Childs
