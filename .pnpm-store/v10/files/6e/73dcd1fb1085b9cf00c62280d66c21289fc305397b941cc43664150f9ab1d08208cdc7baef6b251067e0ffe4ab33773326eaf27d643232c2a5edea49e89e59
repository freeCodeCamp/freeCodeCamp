# fast-uri

<div align="center">

[![CI](https://github.com/fastify/fast-uri/actions/workflows/ci.yml/badge.svg)](https://github.com/fastify/fast-uri/actions/workflows/ci.yml)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://standardjs.com/)

</div>

Dependency free RFC 3986 URI toolbox.

## Usage

## Options

All of the above functions can accept an additional options argument that is an object that can contain one or more of the following properties:

*	`scheme` (string)
	Indicates the scheme that the URI should be treated as, overriding the URI's normal scheme parsing behavior.

*	`reference` (string)
	If set to `"suffix"`, it indicates that the URI is in the suffix format and the parser will use the option's `scheme` property to determine the URI's scheme.

*	`tolerant` (boolean, false)
	If set to `true`, the parser will relax URI resolving rules.

*	`absolutePath` (boolean, false)
	If set to `true`, the serializer will not resolve a relative `path` component.

*	`unicodeSupport` (boolean, false)
	If set to `true`, the parser will unescape non-ASCII characters in the parsed output as per [RFC 3987](http://www.ietf.org/rfc/rfc3987.txt).

*	`domainHost` (boolean, false)
	If set to `true`, the library will treat the `host` component as a domain name, and convert IDNs (International Domain Names) as per [RFC 5891](http://www.ietf.org/rfc/rfc5891.txt).

### Parse

```js
const uri = require('fast-uri')
uri.parse('uri://user:pass@example.com:123/one/two.three?q1=a1&q2=a2#body')
// Output
{
  scheme : "uri",
  userinfo : "user:pass",
  host : "example.com",
  port : 123,
  path : "/one/two.three",
  query : "q1=a1&q2=a2",
  fragment : "body"
}
```

### Serialize

```js
const uri = require('fast-uri')
uri.serialize({scheme : "http", host : "example.com", fragment : "footer"})
// Output
"http://example.com/#footer"

```

### Resolve

```js
const uri = require('fast-uri')
uri.resolve("uri://a/b/c/d?q", "../../g") 
// Output
"uri://a/g"
```

### Equal

```js
const uri = require('fast-uri')
uri.equal("example://a/b/c/%7Bfoo%7D", "eXAMPLE://a/./b/../b/%63/%7bfoo%7d")
// Output
true
```

## Scheme supports

fast-uri supports inserting custom [scheme](http://en.wikipedia.org/wiki/URI_scheme) dependent processing rules. Currently, fast-uri has built in support for the following schemes:

*	http \[[RFC 2616](http://www.ietf.org/rfc/rfc2616.txt)\]
*	https \[[RFC 2818](http://www.ietf.org/rfc/rfc2818.txt)\]
*	ws \[[RFC 6455](http://www.ietf.org/rfc/rfc6455.txt)\]
*	wss \[[RFC 6455](http://www.ietf.org/rfc/rfc6455.txt)\]
*	urn \[[RFC 2141](http://www.ietf.org/rfc/rfc2141.txt)\]
*	urn:uuid \[[RFC 4122](http://www.ietf.org/rfc/rfc4122.txt)\]


## Benchmarks

```
fast-uri: parse domain x 1,306,864 ops/sec ±0.31% (100 runs sampled)
urijs: parse domain x 483,001 ops/sec ±0.09% (99 runs sampled)
WHATWG URL: parse domain x 862,461 ops/sec ±0.18% (97 runs sampled)
fast-uri: parse IPv4 x 2,381,452 ops/sec ±0.26% (96 runs sampled)
urijs: parse IPv4 x 384,705 ops/sec ±0.34% (99 runs sampled)
WHATWG URL: parse IPv4 NOT SUPPORTED
fast-uri: parse IPv6 x 923,519 ops/sec ±0.09% (100 runs sampled)
urijs: parse IPv6 x 289,070 ops/sec ±0.07% (95 runs sampled)
WHATWG URL: parse IPv6 NOT SUPPORTED
fast-uri: parse URN x 2,596,395 ops/sec ±0.42% (98 runs sampled)
urijs: parse URN x 1,152,412 ops/sec ±0.09% (97 runs sampled)
WHATWG URL: parse URN x 1,183,307 ops/sec ±0.38% (100 runs sampled)
fast-uri: parse URN uuid x 1,666,861 ops/sec ±0.10% (98 runs sampled)
urijs: parse URN uuid x 852,724 ops/sec ±0.17% (95 runs sampled)
WHATWG URL: parse URN uuid NOT SUPPORTED
fast-uri: serialize uri x 1,741,499 ops/sec ±0.57% (95 runs sampled)
urijs: serialize uri x 389,014 ops/sec ±0.28% (93 runs sampled)
fast-uri: serialize IPv6 x 441,095 ops/sec ±0.37% (97 runs sampled)
urijs: serialize IPv6 x 255,443 ops/sec ±0.58% (94 runs sampled)
fast-uri: serialize ws x 1,448,667 ops/sec ±0.25% (97 runs sampled)
urijs: serialize ws x 352,884 ops/sec ±0.08% (96 runs sampled)
fast-uri: resolve x 340,084 ops/sec ±0.98% (98 runs sampled)
urijs: resolve x 225,759 ops/sec ±0.37% (95 runs sampled)
```

## TODO

- [ ] Support MailTo
- [ ] Be 100% iso compatible with uri-js
- [ ] Add browser test stack
