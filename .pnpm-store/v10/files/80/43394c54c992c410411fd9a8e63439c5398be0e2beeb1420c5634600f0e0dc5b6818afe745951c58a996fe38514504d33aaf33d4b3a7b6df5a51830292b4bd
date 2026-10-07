# ms [![CI](https://github.com/lukeed/ms/workflows/CI/badge.svg)](https://github.com/lukeed/ms/actions) [![codecov](https://badgen.net/codecov/c/github/lukeed/ms)](https://codecov.io/gh/lukeed/ms)

> A tiny (414B) and [fast](#benchmarks) utility to convert milliseconds to and from strings.

---

***NOTICE:** This is a fork of [vercel/ms](https://github.com/vercel/ms)!*<br>
In June 2019, I [opened a PR](https://github.com/zeit/ms/pull/120) with signficiant performance and code size improvements. After nearly 2 years of silence, it was eventually closed. :cry: A year into my wait, I started anew (this repo), hoping to improve upon my own improvements.

---

This module is delivered as:

* **CommonJS**: [`dist/index.js`](https://unpkg.com/@lukeed/ms/dist/index.js)
* **ES Module**: [`dist/index.mjs`](https://unpkg.com/@lukeed/ms/dist/index.mjs)
* **UMD**: [`dist/index.min.js`](https://unpkg.com/@lukeed/ms/dist/index.min.js)

## Install

```
$ npm install --save @lukeed/ms
```


## Usage

```js
import { parse, format } from '@lukeed/ms';

// string => number
parse('2 days');   //=> 172800000
parse('1d');       //=> 86400000
parse('10h');      //=> 36000000
parse('2.5 hrs');  //=> 9000000
parse('2h');       //=> 7200000
parse('1m');       //=> 60000
parse('5s');       //=> 5000
parse('1y');       //=> 31557600000
parse('100');      //=> 100
parse('-3 days');  //=> -259200000
parse('-1h');      //=> -3600000
parse('-200');     //=> -200

// number => string
format(60000);             //=> '1m'
format(2 * 60000);         //=> '2m'
format(-3 * 60000);        //=> '-3m'
format(parse('10 hours')); //=> '10h'

// number => string (long)
format(60000, true);             //=> '1 minute'
format(2 * 60000, true);         //=> '2 minutes'
format(-3 * 60000, true);        //=> '-3 minutes'
format(parse('10 hours'), true); //=> '10 hours'
```


## API

### ms.parse(input)
Returns: `Number`

Parses the input string, returning the number of milliseconds.

#### input
Type: `String`

The human-readable time string; eg: `10min`, `10m`, `10 minutes`.


### ms.format(milli, long?)
Returns: `Number`

Formats the millisecond count to a human-readable time string.

> **Important:** The output will be rounded to the nearest whole integer.

#### milli
Type: `Number`

The number of milliseconds.

#### long
Type: `Boolean`<br>
Default: `false`

Whether or not the output should use the interval's long/full form; eg `hour` or `hours` instead of `h`.

> **Note:** When `long`, the count and interval will be separated by a single space.<br>Also, when `long`, the interval may be pluralized; eg `1 second` vs `2 seconds`.


## Benchmarks

> Running on Node.js v12.18.4

```
Validation :: parse
  ✔ lukeed/ms
  ✔ zeit/ms

Benchmark :: "parse"
  lukeed/ms      x 351,319 ops/sec ±0.31% (96 runs sampled)
  zeit/ms        x 245,576 ops/sec ±1.66% (94 runs sampled)

Benchmark :: "parse" (long)
  lukeed/ms      x 335,538 ops/sec ±0.50% (94 runs sampled)
  zeit/ms        x 265,410 ops/sec ±1.72% (95 runs sampled)


Validation :: format
  ✔ lukeed/ms
  ✔ zeit/ms

Benchmark :: "format"
  lukeed/ms      x 4,109,440 ops/sec ±0.35% (94 runs sampled)
  zeit/ms        x 3,420,198 ops/sec ±1.61% (94 runs sampled)

Benchmark :: "format" (long)
  lukeed/ms      x 3,402,872 ops/sec ±0.14% (97 runs sampled)
  zeit/ms        x 1,344,908 ops/sec ±3.68% (96 runs sampled)
```


## Credits

This is obviously a fork of [zeit/ms](https://github.com/zeit/ms).

I opened a [PR in June 2019](https://github.com/zeit/ms/pull/120) that introduced significant performance gains and code reduction &mdash; it was ignored for nearly two years. This repository is a from-scratch re-implementation that takes the goals of that PR a bit further.


## License

MIT © [Luke Edwards](https://lukeed.com)
