# entities [![NPM version](https://img.shields.io/npm/v/entities.svg)](https://npmjs.org/package/entities) [![Downloads](https://img.shields.io/npm/dm/entities.svg)](https://npmjs.org/package/entities) [![Node.js CI](https://github.com/fb55/entities/actions/workflows/nodejs-test.yml/badge.svg)](https://github.com/fb55/entities/actions/workflows/nodejs-test.yml)

Encode & decode HTML & XML entities with ease & speed.

## Features

- 😇 Tried and true: `entities` is used by many popular libraries; eg.
  [`htmlparser2`](https://github.com/fb55/htmlparser2), the official
  [AWS SDK](https://github.com/aws/aws-sdk-js-v3) and
  [`commonmark`](https://github.com/commonmark/commonmark.js) use it to process
  HTML entities.
- ⚡️ Fast: `entities` is the fastest library for decoding HTML entities (as of
  September 2025); see [performance](#performance).
- 🎛 Configurable: Get an output tailored for your needs. You are fine with
  UTF8? That'll save you some bytes. Prefer to only have ASCII characters? We
  can do that as well!

## How to…

### …install `entities`

    npm install entities

### …use `entities`

```javascript
const entities = require("entities");

// Encoding
entities.escapeUTF8("&#38; ü"); // "&amp;#38; ü"
entities.encodeXML("&#38; ü"); // "&amp;#38; &#xfc;"
entities.encodeHTML("&#38; ü"); // "&amp;&num;38&semi; &uuml;"

// Decoding
entities.decodeXML("asdf &amp; &#xFF; &#xFC; &apos;"); // "asdf & ÿ ü '"
entities.decodeHTML("asdf &amp; &yuml; &uuml; &apos;"); // "asdf & ÿ ü '"
```

## Performance

Benchmarked in September 2025 with Node v24.6.0 on Apple M2 using `tinybench`.
Higher ops/s is better; `avg (μs)` is the mean time per operation.
See `scripts/benchmark.ts` to reproduce.

### Decoding

| Library        | Version | ops/s     | avg (μs) | ±%   | slower |
| -------------- | ------- | --------- | -------- | ---- | ------ |
| entities       | 7.0.0   | 5,838,416 | 175.57   | 0.06 | —      |
| html-entities  | 2.6.0   | 2,919,637 | 347.77   | 0.33 | 50.0%  |
| he             | 1.2.0   | 2,318,438 | 446.48   | 0.70 | 60.3%  |
| parse-entities | 4.0.2   |   852,855 | 1,199.51 | 0.36 | 85.4%  |

### Encoding

| Library        | Version | ops/s     | avg (μs) | ±%   | slower |
| -------------- | ------- | --------- | -------- | ---- | ------ |
| entities       | 7.0.0   | 2,770,115 | 368.09   | 0.11 | —      |
| html-entities  | 2.6.0   | 1,491,963 | 679.96   | 0.58 | 46.2%  |
| he             | 1.2.0   |   481,278 | 2,118.25 | 0.61 | 82.6%  |

### Escaping

| Library        | Version | ops/s     | avg (μs) | ±%   | slower |
| -------------- | ------- | --------- | -------- | ---- | ------ |
| entities       | 7.0.0   | 4,616,468 | 223.84   | 0.17 | —      |
| he             | 1.2.0   | 3,659,301 | 280.76   | 0.58 | 20.7%  |
| html-entities  | 2.6.0   | 3,555,301 | 296.63   | 0.84 | 23.0%  |

Note: Micro-benchmarks may vary across machines and Node versions.

---

## FAQ

> What methods should I actually use to encode my documents?

If your target supports UTF-8, the `escapeUTF8` method is going to be your best
choice. Otherwise, use either `encodeHTML` or `encodeXML` based on whether
you're dealing with an HTML or an XML document.

You can have a look at the options for the `encode` and `decode` methods to see
everything you can configure.

> When should I use strict decoding?

When strict decoding, entities not terminated with a semicolon will be ignored.
This is helpful for decoding entities in legacy environments.

> Why should I use `entities` instead of alternative modules?

As of September 2025, `entities` is faster than other modules. Still, this is
not a differentiated space and other modules can catch up.

**More importantly**, you might already have `entities` in your dependency graph
(as a dependency of eg. `cheerio`, or `htmlparser2`), and including it directly
might not even increase your bundle size. The same is true for other entity
libraries, so have a look through your `node_modules` directory!

> Does `entities` support tree shaking?

Yes! `entities` ships as both a CommonJS and a ES module. Note that for best
results, you should not use the `encode` and `decode` functions, as they wrap
around a number of other functions, all of which will remain in the bundle.
Instead, use the functions that you need directly.

---

## Acknowledgements

This library wouldn't be possible without the work of these individuals. Thanks
to

- [@mathiasbynens](https://github.com/mathiasbynens) for his explanations about
  character encodings, and his library `he`, which was one of the inspirations
  for `entities`
- [@inikulin](https://github.com/inikulin) for his work on optimized tries for
  decoding HTML entities for the `parse5` project
- [@mdevils](https://github.com/mdevils) for taking on the challenge of
  producing a quick entity library with his `html-entities` library. `entities`
  would be quite a bit slower if there wasn't any competition. Right now
  `entities` is on top, but we'll see how long that lasts!

---

License: BSD-2-Clause

## Security contact information

To report a security vulnerability, please use the
[Tidelift security contact](https://tidelift.com/security). Tidelift will
coordinate the fix and disclosure.

## `entities` for enterprise

Available as part of the Tidelift Subscription

The maintainers of `entities` and thousands of other packages are working with
Tidelift to deliver commercial support and maintenance for the open source
dependencies you use to build your applications. Save time, reduce risk, and
improve code health, while paying the maintainers of the exact dependencies you
use.
[Learn more.](https://tidelift.com/subscription/pkg/npm-entities?utm_source=npm-entities&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
