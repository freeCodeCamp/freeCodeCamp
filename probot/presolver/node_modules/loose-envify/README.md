# loose-envify

[![Build Status](https://travis-ci.org/zertosh/loose-envify.svg?branch=master)](https://travis-ci.org/zertosh/loose-envify)

Fast (and loose) selective `process.env` replacer using [js-tokens](https://github.com/lydell/js-tokens) instead of an AST. Works just like [envify](https://github.com/hughsk/envify) but much faster.

## Gotchas

* Doesn't handle broken syntax.
* Doesn't look inside embedded expressions in template strings.
  - **this won't work:**
  ```js
  console.log(`the current env is ${process.env.NODE_ENV}`);
  ```
* Doesn't replace oddly-spaced or oddly-commented expressions.
  - **this won't work:**
  ```js
  console.log(process./*won't*/env./*work*/NODE_ENV);
  ```

## Usage/Options

loose-envify has the exact same interface as [envify](https://github.com/hughsk/envify), including the CLI.

## Benchmark

```
envify:

  $ for i in {1..5}; do node bench/bench.js 'envify'; done
  708ms
  727ms
  791ms
  719ms
  720ms

loose-envify:

  $ for i in {1..5}; do node bench/bench.js '../'; done
  51ms
  52ms
  52ms
  52ms
  52ms
```
