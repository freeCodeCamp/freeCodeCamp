# @polka/url [![npm](https://badgen.now.sh/npm/v/@polka/url)](https://npmjs.org/package/@polka/url)

> Super fast, memoized `req.url` parser; _not_ limited to [Polka][polka]!

Parses the `url` from a [`IncomingMessage`](https://nodejs.org/api/http.html#http_class_http_incomingmessage) request. The returned object will always only contain the following keys: `search`, `query`, `pathname`, `path`, `href`, and `_raw`.

> **Note:** This library does not process `protocol`, `hostname`, `port`, etc.<br>This is because the incoming `req.url` value only begins with the path information.

Parsed requests will be mutated with a `_parsedUrl` key, containing the returned output. This is used for future memoization, so as to avoid parsing the same `url` value multiple times.

## Install

```
$ npm install --save @polka/url
```

## Usage

```js
const parse = require('@polka/url');

let req = { url: '/foo/bar?fizz=buzz' };
let foo = parse(req);
//=> { search: '?fizz=buzz',
//=>   query: 'fizz=buzz',
//=>   pathname: '/foo/bar',
//=>   path: '/foo/bar?fizz=buzz',
//=>   href: '/foo/bar?fizz=buzz',
//=>   _raw: '/foo/bar?fizz=buzz' }

// Attaches result for future memoization
assert.deepEqual(foo, req._parsedUrl); //=> true
```

## API

### url(req)
Returns: `Object` or `undefined`

> **Important:** The `req` must have a `url` key, otherwise `undefined` will be returned.<br>If no input is provided at all, a `TypeError` will be thrown.

#### req
Type: `IncomingMessage` or `Object`

The incoming HTTP request (`req`) or a plain `Object` with a `url` key.

> **Note:** In Node.js servers, the [`req.url`](https://nodejs.org/api/http.html#http_message_url) begins with a pathname & does not include a `hash`.


## Benchmarks

> Running the `parseurl` benchmark suite on Node 10.9.0

```
Parsing: "/foo/bar?user=tj&pet=fluffy"
  nativeurl  x  3,496,593 ops/sec ±0.78% (194 runs sampled)
  parseurl   x  5,702,515 ops/sec ±0.59% (194 runs sampled)
  @polka/url x 11,510,281 ops/sec ±1.93% (192 runs sampled)

REPEAT: "/foo/bar?user=tj&pet=fluffy"
  nativeurl  x  3,344,884 ops/sec ±0.13% (191 runs sampled)
  parseurl   x 20,386,848 ops/sec ±0.22% (192 runs sampled)
  @polka/url x 21,088,923 ops/sec ±0.58% (191 runs sampled)

Parsing: "/foo/bar"
  nativeurl  x  9,808,119 ops/sec ±0.51% (190 runs sampled)
  parseurl   x 26,186,627 ops/sec ±0.16% (195 runs sampled)
  @polka/url x 43,946,765 ops/sec ±0.55% (194 runs sampled)

Parsing: "/"
  nativeurl  x 15,698,746 ops/sec ±0.79% (192 runs sampled)
  parseurl   x 36,861,339 ops/sec ±0.19% (195 runs sampled)
  @polka/url x 48,295,119 ops/sec ±0.51% (194 runs sampled)
```


## Support

Any issues or questions can be sent to the [Polka][polka] repository.<br>However, please specify that your inquiry is about `@polka/url` specifically.


## License

MIT © [Luke Edwards](https://lukeed.com)

[polka]: https://github.com/lukeed/polka
