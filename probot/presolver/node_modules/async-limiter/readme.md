# Async-Limiter

A module for limiting concurrent asynchronous actions in flight. Forked from [queue](https://github.com/jessetane/queue).

[![npm](http://img.shields.io/npm/v/async-limiter.svg?style=flat-square)](http://www.npmjs.org/async-limiter)
[![tests](https://img.shields.io/travis/STRML/async-limiter.svg?style=flat-square&branch=master)](https://travis-ci.org/STRML/async-limiter)
[![coverage](https://img.shields.io/coveralls/STRML/async-limiter.svg?style=flat-square&branch=master)](https://coveralls.io/r/STRML/async-limiter)

This module exports a class `Limiter` that implements some of the `Array` API.
Pass async functions (ones that accept a callback or return a promise) to an instance's additive array methods.

## Motivation

Certain functions, like `zlib`, have [undesirable behavior](https://github.com/nodejs/node/issues/8871#issuecomment-250915913) when
run at infinite concurrency.

In this case, it is actually faster, and takes far less memory, to limit concurrency.

This module should do the absolute minimum work necessary to queue up functions. PRs are welcome that would
make this module faster or lighter, but new functionality is not desired.

Style should confirm to nodejs/node style.

## Example

``` javascript
var Limiter = require('async-limiter')

var t = new Limiter({concurrency: 2});
var results = []

// add jobs using the familiar Array API
t.push(function (cb) {
  results.push('two')
  cb()
})

t.push(
  function (cb) {
    results.push('four')
    cb()
  },
  function (cb) {
    results.push('five')
    cb()
  }
)

t.unshift(function (cb) {
  results.push('one')
  cb()
})

t.splice(2, 0, function (cb) {
  results.push('three')
  cb()
})

// Jobs run automatically. If you want a callback when all are done,
// call 'onDone()'.
t.onDone(function () {
  console.log('all done:', results)
})
```

## Zlib Example

```js
const zlib = require('zlib');
const Limiter = require('async-limiter');

const message = {some: "data"};
const payload = new Buffer(JSON.stringify(message));

// Try with different concurrency values to see how this actually
// slows significantly with higher concurrency!
//
// 5:        1398.607ms
// 10:       1375.668ms
// Infinity: 4423.300ms
//
const t = new Limiter({concurrency: 5});
function deflate(payload, cb) {
  t.push(function(done) {
    zlib.deflate(payload, function(err, buffer) {
      done();
      cb(err, buffer);
    });
  });
}

console.time('deflate');
for(let i = 0; i < 30000; ++i) {
  deflate(payload, function (err, buffer) {});
}
q.onDone(function() {
  console.timeEnd('deflate');
});
```

## Install

`npm install async-limiter`

## Test

`npm test`

## API

### `var t = new Limiter([opts])`
Constructor. `opts` may contain inital values for:
* `q.concurrency`

## Instance methods

### `q.onDone(fn)`
`fn` will be called once and only once, when the queue is empty.

## Instance methods mixed in from `Array`
Mozilla has docs on how these methods work [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
### `q.push(element1, ..., elementN)`
### `q.unshift(element1, ..., elementN)`
### `q.splice(index , howMany[, element1[, ...[, elementN]]])`

## Properties
### `q.concurrency`
Max number of jobs the queue should process concurrently, defaults to `Infinity`.

### `q.length`
Jobs pending + jobs to process (readonly).

