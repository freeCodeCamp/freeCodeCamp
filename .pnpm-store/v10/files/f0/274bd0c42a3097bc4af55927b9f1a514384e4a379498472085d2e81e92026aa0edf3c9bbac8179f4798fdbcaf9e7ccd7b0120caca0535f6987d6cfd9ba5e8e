# typedarray-to-buffer [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/feross/typedarray-to-buffer/master.svg
[travis-url]: https://travis-ci.org/feross/typedarray-to-buffer
[npm-image]: https://img.shields.io/npm/v/typedarray-to-buffer.svg
[npm-url]: https://npmjs.org/package/typedarray-to-buffer
[downloads-image]: https://img.shields.io/npm/dm/typedarray-to-buffer.svg
[downloads-url]: https://npmjs.org/package/typedarray-to-buffer
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

#### Convert a typed array to a [Buffer](https://github.com/feross/buffer) without a copy.

[![saucelabs][saucelabs-image]][saucelabs-url]

[saucelabs-image]: https://saucelabs.com/browser-matrix/typedarray-to-buffer.svg
[saucelabs-url]: https://saucelabs.com/u/typedarray-to-buffer

Say you're using the ['buffer'](https://github.com/feross/buffer) module on npm, or
[browserify](http://browserify.org/) and you're working with lots of binary data.

Unfortunately, sometimes the browser or someone else's API gives you a typed array like
`Uint8Array` to work with and you need to convert it to a `Buffer`. What do you do?

Of course: `Buffer.from(uint8array)`

But, alas, every time you do `Buffer.from(uint8array)` **the entire array gets copied**.
The `Buffer` constructor does a copy; this is
defined by the [node docs](http://nodejs.org/api/buffer.html) and the 'buffer' module
matches the node API exactly.

So, how can we avoid this expensive copy in
[performance critical applications](https://github.com/feross/buffer/issues/22)?

***Simply use this module, of course!***

If you have an `ArrayBuffer`, you don't need this module, because
`Buffer.from(arrayBuffer)`
[is already efficient](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_arraybuffer_byteoffset_length).

## install

```bash
npm install typedarray-to-buffer
```

## usage

To convert a typed array to a `Buffer` **without a copy**, do this:

```js
var toBuffer = require('typedarray-to-buffer')

var arr = new Uint8Array([1, 2, 3])
arr = toBuffer(arr)

// arr is a buffer now!

arr.toString()  // '\u0001\u0002\u0003'
arr.readUInt16BE(0)  // 258
```

## how it works

If the browser supports typed arrays, then `toBuffer` will **augment the typed array** you
pass in with the `Buffer` methods and return it. See [how does Buffer
work?](https://github.com/feross/buffer#how-does-it-work) for more about how augmentation
works.

This module uses the typed array's underlying `ArrayBuffer` to back the new `Buffer`. This
respects the "view" on the `ArrayBuffer`, i.e. `byteOffset` and `byteLength`. In other
words, if you do `toBuffer(new Uint32Array([1, 2, 3]))`, then the new `Buffer` will
contain `[1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0]`, **not** `[1, 2, 3]`. And it still doesn't
require a copy.

If the browser doesn't support typed arrays, then `toBuffer` will create a new `Buffer`
object, copy the data into it, and return it. There's no simple performance optimization
we can do for old browsers. Oh well.

If this module is used in node, then it will just call `Buffer.from`. This is just for
the convenience of modules that work in both node and the browser.

## license

MIT. Copyright (C) [Feross Aboukhadijeh](http://feross.org).
