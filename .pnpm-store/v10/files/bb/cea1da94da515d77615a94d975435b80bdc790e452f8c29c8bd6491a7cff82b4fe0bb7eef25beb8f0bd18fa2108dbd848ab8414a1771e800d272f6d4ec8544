# node-object-hash

<div style="margin: 24px 0 16px;">
<img src="https://gitlab.com/m03geek/node-object-hash/raw/master/logo.svg" align="left" width="256" height="auto" alt="logo" />

Tiny and fast node.js object hash library with properties/arrays sorting to provide constant hashes.
It also provides a method that returns sorted object strings that can be used for object comparison without hashes.
One of the fastest among other analogues (see [benchmarks](#benchmarks)).

Hashes are built on top of node's crypto module. If you want to use it in browser it's recommented to use `objectSorter` only. It will provide you with unique string representation of your object. Afterwards you may use some hash library to reduce string size. Also you may use something like [browserify-crypto](https://github.com/crypto-browserify/crypto-browserify) or some kind of crypto functions polyfills.

[![Node](https://img.shields.io/node/v/node-object-hash.svg)](https://nodejs.org/download/release/latest)
[![NPM Version](https://img.shields.io/npm/v/node-object-hash.svg)](https://www.npmjs.com/package/node-object-hash)
[![Downloads Count](https://img.shields.io/npm/dm/node-object-hash.svg)](https://www.npmjs.com/package/node-object-hash)
[![Vunerabilities Count](https://snyk.io/test/npm/node-object-hash/badge.svg)](https://www.npmjs.com/package/node-object-hash)
[![Npms.io Score](https://badges.npms.io/node-object-hash.svg)](https://npms.io/search?q=node-object-hash)
[![Build Status](https://github.com/SkeLLLa/node-object-hash/workflows/build/badge.svg)](https://github.com/SkeLLLa/node-object-hash/commits/master)
[![License](https://img.shields.io/npm/l/node-object-hash.svg)](https://gitlab.com/m03geek/node-object-hash/blob/master/LICENSE)
[![Codecov Coverage](https://codecov.io/gh/SkeLLLa/node-object-hash/branch/master/graph/badge.svg?token=wLjMou8TT7)](https://codecov.io/gh/SkeLLLa/node-object-hash)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/github/SkeLLLa/node-object-hash.svg)](https://lgtm.com/projects/g/SkeLLLa/node-object-hash/)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/SkeLLLa/node-object-hash.svg)](https://lgtm.com/projects/g/SkeLLLa/node-object-hash/)

</div>

<br/>

## ToC

- [node-object-hash](#node-object-hash)
  - [ToC](#toc)
  - [What's new in v2.0.0](#whats-new-in-v200)
    - [Breaking changes](#breaking-changes)
    - [New features](#new-features)
  - [Installation](#installation)
  - [Features](#features)
    - [Type map](#type-map)
    - [Coercion map](#coercion-map)
  - [Changes](#changes)
  - [Docs](#docs)
    - [API overview](#api-overview)
      - [Constructor](#constructor)
    - [API methods](#api-methods)
      - [`hash(object[, options])`](#hashobject-options)
      - [`sort(object)`](#sortobject)
    - [Hashing custom objects](#hashing-custom-objects)
  - [Requirements](#requirements)
    - [version \>=1.0.0](#version-100)
    - [version \>=0.1.0 && <1.0.0](#version-010--100)
  - [Examples](#examples)
  - [Benchmarks](#benchmarks)
    - [Usage](#usage)
    - [Results](#results)
      - [Custom benchmark (code)](#custom-benchmark-code)
      - [Benchmark suite module (code)](#benchmark-suite-module-code)
    - [Links](#links)
  - [License](#license)

## What's new in v2.0.0

### Breaking changes

- Library rewritten in typescript that could cause some side-effects, but it should not.
- With `coerce=false` `Set`s will no longer generate the same hashes as `Array`s. In order to restore previous behavior set `coerce.set=true`.
- With `coerce=false` `Symbol`s will generate hash based on symbol `.toString` value. That's useful for `Symbol.for('smth')`. If `coerce.symbol=true` all `Symbols`s will have equal hashes.
  TLDR; If you use library with `Set`s or `Symbol`s with `coerce=false` in order to keep hashes the same as in `v1.X.X` you should use following constructor:

```
const hasher = require('node-object-hash')({coerce: {set: true, symbol: true}})
```

- Object sorter sources moved to `dist` directory. If you required it directly via `require('node-object-hash/objectSorter')` you should change it to require('node-object-hash/dist/objectSorter').
- Removed old `v0` version from code.
- Changed license to MIT.

### New features

- New granular options. Now you can specify what types need to be sorted or coerced.
- Add new `trim` option. It can be used to remove unncecessary spaces in `string`s or `function` bodies.
- Library rewritten to typescript, so it may have better ts compatibility.

## Installation

`npm i node-object-hash -S`

## Features

- Supports object property sorting for constant hashes for objects with same properties, but different order.
- Supports ES6 Maps and Sets.
- Supports type coercion (see table below).
- Supports all hashes and encodings of crypto library.
- Supports large objects and arrays.
- Has granular options that allows to control what should be sorted or coerced.
- Very fast comparing to other libs (see [Benchmarks](#benchmarks) section).

### Type map

This map displays what types will have identical string representation (e.g. new Set([1, 2, 3]) and [1, 2, 3] will have
equal string representations and hashes.

| Initial type              | Mapped type  |
| ------------------------- | ------------ |
| Array ([])                | array        |
| ArrayObject (new Array()) |              |
| Int8Array                 |              |
| Uint8Array                |              |
| Uint8ClampedArray         |              |
| Int16Array                |              |
| Uint16Array               |              |
| Int32Array                |              |
| Uint32Array               |              |
| Float32Array              |              |
| Float64Array              |              |
| Buffer                    |              |
| Set                       |              |
|                           |              |
| Map                       | array[array] |
|                           |              |
| string ('')               | string       |
| String (new String())     |              |
|                           |              |
| boolean (true)            | boolean      |
| Boolean (new Boolean())   |              |
|                           |              |
| number (true)             | number       |
| Number (new Number())     |              |
|                           |              |
| Date                      | date         |
|                           |              |
| Symbol                    | symbol       |
|                           |              |
| undefined                 | undefined    |
|                           |              |
| null                      | null         |
|                           |              |
| function                  | function     |
|                           |              |
| Object ({})               | object       |
| Object (new Object())     |              |
|                           |              |
| other                     | unknown      |

### Coercion map

| Initial "type" | Coerced type   | Example      |
| -------------- | -------------- | ------------ |
| boolean        | string         | true -> 1    |
| number         | string         | '1' -> 1     |
| string         | string         | 'a' -> a     |
| null           | string (empty) | null ->      |
| undefined      | string (empty) | undefined -> |

## Changes

See [changelog](CHANGELOG.md)

## Docs

Full API docs could be found in [docs](./docs/README.md).

### API overview

#### Constructor

```js
require('node-object-hash')([options]);
```

Returns preconfigured object with API

Parameters:

- `options`:`object` - object with hasher config options
- `options.coerce`:`boolean|object` - if true performs type coercion (default: `true`);
  e.g. `hash(true) == hash('1') == hash(1)`, `hash(false) == hash('0') == hash(0)`
- `options.sort`:`boolean|object` - if true performs sorting on objects, arrays, etc. (default: `true`); in order to
  perform sorting on `TypedArray` (`Buffer`, `Int8Array`, etc.), specify it explicitly: `typedArray: true`
- `options.trim`:`boolean|object` - if true performs trim of spaces and replaces space-like characters with single space (default: `false`);
- `options.alg`:`string` - sets default hash algorithm (default: `'sha256'`); can be overridden in `hash` method;
- `options.enc`:`string` - sets default hash encoding (default: `'hex'`); can be overridden in `hash` method;

### API methods

#### `hash(object[, options])`

Returns hash string.

- `object`:`*` object for calculating hash;
- `options`:`object` object with options;
- `options.alg`:`string` - hash algorithm (default: `'sha256'`);
- `options.enc`:`string` - hash encoding (default: `'hex'`);

#### `sort(object)`

Returns sorted string generated from object (can be used for object comparison)

- `object`:`*` - object for sorting;

### Hashing custom objects

In order to serialize and hash your custom objects you may provide `.toHashableString()` method for your object. It should return `string` that will be hashed. You may use `objectSorter` and pass notable fields to it in your `.toHashableString` method.

For typescript users you may add to your classes `implements Hashable`.

## Requirements

### version \>=1.0.0

- `>=nodejs-0.10.0`

### version \>=0.1.0 && <1.0.0

- `>=nodejs-6.0.0`
- `>=nodejs-4.0.0` (requires to run node with `--harmony` flag)

## Examples

```js
var hasher = require('node-object-hash');

var hashSortCoerce = hasher({ sort: true, coerce: true });
// or
// var hashSortCoerce = hasher();
// or
// var hashSort = hasher({sort:true, coerce:false});
// or
// var hashCoerce = hasher({sort:false, coerce:true});

var objects = {
  a: {
    a: [{ c: 2, a: 1, b: { a: 3, c: 2, b: 0 } }],
    b: [1, 'a', {}, null],
  },
  b: {
    b: ['a', 1, {}, undefined],
    a: [{ c: '2', b: { b: false, c: 2, a: '3' }, a: true }],
  },
  c: ['4', true, 0, 2, 3],
};

hashSortCoerce.hash(objects.a) === hashSortCoerce.hash(objects.b);
// returns true

hashSortCoerce.sort(object.c);
// returns '[0,1,2,3,4]'
```

For more examples you can see [tests](./test) or try it out online at [runkit](https://runkit.com/skellla/node-object-hash-example)

## Benchmarks

Bench data - array of 100000 complex objects

### Usage

- `npm run bench` to run custom benchmark
- `npm run benchmark` to run benchmark suite
- `npm run benchmark:hash` to run hash benchmark suite

### Results

| Hashing algorithm  | Result hash bytes length | Performance (ops/sec) |
| ------------------ | ------------------------ | --------------------- |
| `sha256` (default) | 64                       | 1,599 +- 5.77%        |
| `sha1`             | 40                       | 1,983 +- 1.50%        |
| `sha224`           | 56                       | 1,701 +- 2.81%        |
| `sha384`           | 96                       | 1,800 +- 0.81%        |
| `sha512`           | 128                      | 1,847 +- 1.75%        |
| `md4`              | 32                       | 1,971 +- 0.98%        |
| `md5`              | 32                       | 1,691 +- 3.18%        |
| `whirlpool`        | 128                      | 1,487 +- 2.33%        |
|                    |                          |                       |

#### Custom benchmark ([code](bench/index.js))

| Library                           | Time (ms)  | Memory (Mb)        |
| --------------------------------- | ---------- | ------------------ |
| node-object-hash-0.2.1            | 5813.575   | 34                 |
| node-object-hash-1.0.X            | 2805.581   | 27                 |
| node-object-hash-1.1.X (node v7)  | 2555.583   | 27                 |
| node-object-hash-1.2.X (node v7)  | 2390.752   | 28                 |
| node-object-hash-2.X.X (node v12) | 1990.622   | 24                 |
| object-hash-1.1.5 (node v7)       | 28115.553  | 39                 |
| object-hash-1.1.4                 | 534528.254 | 41                 |
| object-hash-1.1.3                 | ERROR      | Out of heap memory |
| hash-object-0.1.7                 | 9219.826   | 42                 |

#### Benchmark suite module ([code](bench/bench.js))

| Library (node v12)     | Perf (ops/s) |
| ---------------------- | ------------ |
| node-object-hash-2.0.0 | 2087 ±0.59%  |
| object-hash-1.3.1      | 239 ±0.39%   |
| hash-object-0.1.7      | 711 ±0.18%   |

### Links

- [object-hash](https://www.npmjs.com/package/object-hash) - Slow, useful for browsers because it not uses node's crypto library
- [hash-object](https://www.npmjs.com/package/hash-object) - no ES6 types support

## License

MIT
