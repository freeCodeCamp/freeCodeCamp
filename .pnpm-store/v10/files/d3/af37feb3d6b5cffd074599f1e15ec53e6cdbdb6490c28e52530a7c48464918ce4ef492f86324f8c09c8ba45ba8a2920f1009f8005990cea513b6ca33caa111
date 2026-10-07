# v8-compile-cache

[![Build Status](https://travis-ci.org/zertosh/v8-compile-cache.svg?branch=master)](https://travis-ci.org/zertosh/v8-compile-cache)

`v8-compile-cache` attaches a `require` hook to use [V8's code cache](https://v8project.blogspot.com/2015/07/code-caching.html) to speed up instantiation time. The "code cache" is the work of parsing and compiling done by V8.

The ability to tap into V8 to produce/consume this cache was introduced in [Node v5.7.0](https://nodejs.org/en/blog/release/v5.7.0/).

## Usage

1. Add the dependency:

  ```sh
  $ npm install --save v8-compile-cache
  ```

2. Then, in your entry module add:

  ```js
  require('v8-compile-cache');
  ```

**Requiring `v8-compile-cache` in Node <5.7.0 is a noop – but you need at least Node 4.0.0 to support the ES2015 syntax used by `v8-compile-cache`.**

## Options

Set the environment variable `DISABLE_V8_COMPILE_CACHE=1` to disable the cache.

Cache directory is defined by environment variable `V8_COMPILE_CACHE_CACHE_DIR` or defaults to `<os.tmpdir()>/v8-compile-cache-<V8_VERSION>`.

## Internals

Cache files are suffixed `.BLOB` and `.MAP` corresponding to the entry module that required `v8-compile-cache`. The cache is _entry module specific_ because it is faster to load the entire code cache into memory at once, than it is to read it from disk on a file-by-file basis.

## Benchmarks

See https://github.com/zertosh/v8-compile-cache/tree/master/bench.

**Load Times:**

| Module           | Without Cache | With Cache |
| ---------------- | -------------:| ----------:|
| `babel-core`     | `218ms`       | `185ms`    |
| `yarn`           | `153ms`       | `113ms`    |
| `yarn` (bundled) | `228ms`       | `105ms`    |

_^ Includes the overhead of loading the cache itself._

## Acknowledgements

* `FileSystemBlobStore` and `NativeCompileCache` are based on Atom's implementation of their v8 compile cache: 
  - https://github.com/atom/atom/blob/b0d7a8a/src/file-system-blob-store.js
  - https://github.com/atom/atom/blob/b0d7a8a/src/native-compile-cache.js
* `mkdirpSync` is based on:
  - https://github.com/substack/node-mkdirp/blob/f2003bb/index.js#L55-L98
