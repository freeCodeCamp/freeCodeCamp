# simple-concat [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/feross/simple-concat/master.svg
[travis-url]: https://travis-ci.org/feross/simple-concat
[npm-image]: https://img.shields.io/npm/v/simple-concat.svg
[npm-url]: https://npmjs.org/package/simple-concat
[downloads-image]: https://img.shields.io/npm/dm/simple-concat.svg
[downloads-url]: https://npmjs.org/package/simple-concat
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### Super-minimalist version of [`concat-stream`](https://github.com/maxogden/concat-stream). Less than 15 lines!

## install

```
npm install simple-concat
```

## usage

This example is longer than the implementation.

```js
var s = new stream.PassThrough()
concat(s, function (err, buf) {
  if (err) throw err
  console.error(buf)
})
s.write('abc')
setTimeout(function () {
  s.write('123')
}, 10)
setTimeout(function () {
  s.write('456')
}, 20)
setTimeout(function () {
  s.end('789')
}, 30)
```

## license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
