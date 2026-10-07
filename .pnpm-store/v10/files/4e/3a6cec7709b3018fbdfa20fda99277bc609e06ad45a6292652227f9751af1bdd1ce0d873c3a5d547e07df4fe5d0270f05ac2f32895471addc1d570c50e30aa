# parseurl

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Node.js Version][node-image]][node-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Parse a URL with memoization.

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install parseurl
```

## API

```js
var parseurl = require('parseurl')
```

### parseurl(req)

Parse the URL of the given request object (looks at the `req.url` property)
and return the result. The result is the same as `url.parse` in Node.js core.
Calling this function multiple times on the same `req` where `req.url` does
not change will return a cached parsed object, rather than parsing again.

### parseurl.original(req)

Parse the original URL of the given request object and return the result.
This works by trying to parse `req.originalUrl` if it is a string, otherwise
parses `req.url`. The result is the same as `url.parse` in Node.js core.
Calling this function multiple times on the same `req` where `req.originalUrl`
does not change will return a cached parsed object, rather than parsing again.

## Benchmark

```bash
$ npm run-script bench

> parseurl@1.3.3 bench nodejs-parseurl
> node benchmark/index.js

  http_parser@2.8.0
  node@10.6.0
  v8@6.7.288.46-node.13
  uv@1.21.0
  zlib@1.2.11
  ares@1.14.0
  modules@64
  nghttp2@1.32.0
  napi@3
  openssl@1.1.0h
  icu@61.1
  unicode@10.0
  cldr@33.0
  tz@2018c

> node benchmark/fullurl.js

  Parsing URL "http://localhost:8888/foo/bar?user=tj&pet=fluffy"

  4 tests completed.

  fasturl            x 2,207,842 ops/sec ±3.76% (184 runs sampled)
  nativeurl - legacy x   507,180 ops/sec ±0.82% (191 runs sampled)
  nativeurl - whatwg x   290,044 ops/sec ±1.96% (189 runs sampled)
  parseurl           x   488,907 ops/sec ±2.13% (192 runs sampled)

> node benchmark/pathquery.js

  Parsing URL "/foo/bar?user=tj&pet=fluffy"

  4 tests completed.

  fasturl            x 3,812,564 ops/sec ±3.15% (188 runs sampled)
  nativeurl - legacy x 2,651,631 ops/sec ±1.68% (189 runs sampled)
  nativeurl - whatwg x   161,837 ops/sec ±2.26% (189 runs sampled)
  parseurl           x 4,166,338 ops/sec ±2.23% (184 runs sampled)

> node benchmark/samerequest.js

  Parsing URL "/foo/bar?user=tj&pet=fluffy" on same request object

  4 tests completed.

  fasturl            x  3,821,651 ops/sec ±2.42% (185 runs sampled)
  nativeurl - legacy x  2,651,162 ops/sec ±1.90% (187 runs sampled)
  nativeurl - whatwg x    175,166 ops/sec ±1.44% (188 runs sampled)
  parseurl           x 14,912,606 ops/sec ±3.59% (183 runs sampled)

> node benchmark/simplepath.js

  Parsing URL "/foo/bar"

  4 tests completed.

  fasturl            x 12,421,765 ops/sec ±2.04% (191 runs sampled)
  nativeurl - legacy x  7,546,036 ops/sec ±1.41% (188 runs sampled)
  nativeurl - whatwg x    198,843 ops/sec ±1.83% (189 runs sampled)
  parseurl           x 24,244,006 ops/sec ±0.51% (194 runs sampled)

> node benchmark/slash.js

  Parsing URL "/"

  4 tests completed.

  fasturl            x 17,159,456 ops/sec ±3.25% (188 runs sampled)
  nativeurl - legacy x 11,635,097 ops/sec ±3.79% (184 runs sampled)
  nativeurl - whatwg x    240,693 ops/sec ±0.83% (189 runs sampled)
  parseurl           x 42,279,067 ops/sec ±0.55% (190 runs sampled)
```

## License

  [MIT](LICENSE)

[coveralls-image]: https://badgen.net/coveralls/c/github/pillarjs/parseurl/master
[coveralls-url]: https://coveralls.io/r/pillarjs/parseurl?branch=master
[node-image]: https://badgen.net/npm/node/parseurl
[node-url]: https://nodejs.org/en/download
[npm-downloads-image]: https://badgen.net/npm/dm/parseurl
[npm-url]: https://npmjs.org/package/parseurl
[npm-version-image]: https://badgen.net/npm/v/parseurl
[travis-image]: https://badgen.net/travis/pillarjs/parseurl/master
[travis-url]: https://travis-ci.org/pillarjs/parseurl
