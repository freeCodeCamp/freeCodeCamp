# entities [![NPM version](http://img.shields.io/npm/v/entities.svg)](https://npmjs.org/package/entities) [![Downloads](https://img.shields.io/npm/dm/entities.svg)](https://npmjs.org/package/entities) [![Build Status](http://img.shields.io/travis/fb55/entities.svg)](http://travis-ci.org/fb55/entities) [![Coverage](http://img.shields.io/coveralls/fb55/entities.svg)](https://coveralls.io/r/fb55/entities)

Encode & decode HTML & XML entities with ease & speed.

## How to…

### …install `entities`

    npm install entities

### …use `entities`

```javascript
const entities = require("entities");

//encoding
entities.escape("&#38;"); // "&#x26;#38;"
entities.encodeXML("&#38;"); // "&amp;#38;"
entities.encodeHTML("&#38;"); // "&amp;&num;38&semi;"

//decoding
entities.decodeXML("asdf &amp; &#xFF; &#xFC; &apos;"); // "asdf & ÿ ü '"
entities.decodeHTML("asdf &amp; &yuml; &uuml; &apos;"); // "asdf & ÿ ü '"
```

## Performance

This is how `entities` compares to other libraries on a very basic benchmark
(see `scripts/benchmark.ts`, for 10,000,000 iterations):

| Library        | `decode` performance | `encode` performance | Bundle size                                                                |
| -------------- | -------------------- | -------------------- | -------------------------------------------------------------------------- |
| entities       | 10.809s              | 17.683s              | ![npm bundle size](https://img.shields.io/bundlephobia/min/entities)       |
| html-entities  | 14.029s              | 22.670s              | ![npm bundle size](https://img.shields.io/bundlephobia/min/html-entities)  |
| he             | 16.163s              | 44.010s              | ![npm bundle size](https://img.shields.io/bundlephobia/min/he)             |
| parse-entities | 28.507s              | N/A                  | ![npm bundle size](https://img.shields.io/bundlephobia/min/parse-entities) |

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
