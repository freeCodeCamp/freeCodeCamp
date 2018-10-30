# parseurl

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
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

> parseurl@1.3.2 bench nodejs-parseurl
> node benchmark/index.js

  http_parser@2.7.0
  node@4.8.4
  v8@4.5.103.47
  uv@1.9.1
  zlib@1.2.11
  ares@1.10.1-DEV
  icu@56.1
  modules@46
  openssl@1.0.2k

> node benchmark/fullurl.js

  Parsing URL "http://localhost:8888/foo/bar?user=tj&pet=fluffy"

  3 tests completed.

  fasturl   x 1,246,766 ops/sec ±0.74% (188 runs sampled)
  nativeurl x    91,536 ops/sec ±0.54% (189 runs sampled)
  parseurl  x    90,645 ops/sec ±0.38% (189 runs sampled)

> node benchmark/pathquery.js

  Parsing URL "/foo/bar?user=tj&pet=fluffy"

  3 tests completed.

  fasturl   x 2,077,650 ops/sec ±0.69% (186 runs sampled)
  nativeurl x   638,669 ops/sec ±0.67% (189 runs sampled)
  parseurl  x 2,431,842 ops/sec ±0.71% (189 runs sampled)

> node benchmark/samerequest.js

  Parsing URL "/foo/bar?user=tj&pet=fluffy" on same request object

  3 tests completed.

  fasturl   x  2,135,391 ops/sec ±0.69% (188 runs sampled)
  nativeurl x    672,809 ops/sec ±3.83% (186 runs sampled)
  parseurl  x 11,604,947 ops/sec ±0.70% (189 runs sampled)

> node benchmark/simplepath.js

  Parsing URL "/foo/bar"

  3 tests completed.

  fasturl   x 4,961,391 ops/sec ±0.97% (186 runs sampled)
  nativeurl x   914,931 ops/sec ±0.83% (186 runs sampled)
  parseurl  x 7,559,196 ops/sec ±0.66% (188 runs sampled)

> node benchmark/slash.js

  Parsing URL "/"

  3 tests completed.

  fasturl   x  4,053,379 ops/sec ±0.91% (187 runs sampled)
  nativeurl x    963,999 ops/sec ±0.58% (189 runs sampled)
  parseurl  x 11,516,143 ops/sec ±0.58% (188 runs sampled)
```

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/parseurl.svg
[npm-url]: https://npmjs.org/package/parseurl
[node-version-image]: https://img.shields.io/node/v/parseurl.svg
[node-version-url]: https://nodejs.org/en/download/
[travis-image]: https://img.shields.io/travis/pillarjs/parseurl/master.svg
[travis-url]: https://travis-ci.org/pillarjs/parseurl
[coveralls-image]: https://img.shields.io/coveralls/pillarjs/parseurl/master.svg
[coveralls-url]: https://coveralls.io/r/pillarjs/parseurl?branch=master
[downloads-image]: https://img.shields.io/npm/dm/parseurl.svg
[downloads-url]: https://npmjs.org/package/parseurl
