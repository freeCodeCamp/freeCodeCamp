# is-buffer [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/feross/is-buffer/master.svg
[travis-url]: https://travis-ci.org/feross/is-buffer
[npm-image]: https://img.shields.io/npm/v/is-buffer.svg
[npm-url]: https://npmjs.org/package/is-buffer
[downloads-image]: https://img.shields.io/npm/dm/is-buffer.svg
[downloads-url]: https://npmjs.org/package/is-buffer
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

#### Determine if an object is a [`Buffer`](http://nodejs.org/api/buffer.html) (including the [browserify Buffer](https://github.com/feross/buffer))

[![saucelabs][saucelabs-image]][saucelabs-url]

[saucelabs-image]: https://saucelabs.com/browser-matrix/is-buffer.svg
[saucelabs-url]: https://saucelabs.com/u/is-buffer

## Why not use `Buffer.isBuffer`?

This module lets you check if an object is a `Buffer` without using `Buffer.isBuffer` (which includes the whole [buffer](https://github.com/feross/buffer) module in [browserify](http://browserify.org/)).

It's future-proof and works in node too!

## install

```bash
npm install is-buffer
```

## usage

```js
var isBuffer = require('is-buffer')

isBuffer(new Buffer(4)) // true
isBuffer(Buffer.alloc(4)) //true

isBuffer(undefined) // false
isBuffer(null) // false
isBuffer('') // false
isBuffer(true) // false
isBuffer(false) // false
isBuffer(0) // false
isBuffer(1) // false
isBuffer(1.0) // false
isBuffer('string') // false
isBuffer({}) // false
isBuffer(function foo () {}) // false
```

## license

MIT. Copyright (C) [Feross Aboukhadijeh](http://feross.org).
