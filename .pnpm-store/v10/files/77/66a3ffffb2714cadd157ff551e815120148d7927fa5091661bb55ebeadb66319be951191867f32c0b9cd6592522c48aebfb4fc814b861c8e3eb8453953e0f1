# fast-querystring

![Test](https://github.com/anonrig/fast-querystring/workflows/test/badge.svg)
[![codecov](https://codecov.io/gh/anonrig/fast-querystring/branch/main/graph/badge.svg?token=4ZDJA2BMOH)](https://codecov.io/gh/anonrig/fast-querystring)
[![NPM version](https://img.shields.io/npm/v/fast-querystring.svg?style=flat)](https://www.npmjs.com/package/fast-querystring)

Fast query-string parser and stringifier to replace the legacy `node:querystring` module.

### Installation

```
npm i fast-querystring
```

### Features

- Supports both `parse` and `stringify` methods from `node:querystring` module
- Parsed object does not have prototype methods
- Uses `&` separator as default
- Supports only input of type `string`
- Supports repeating keys in query string
  - `foo=bar&foo=baz` parses into `{foo: ['bar', 'baz']}`
- Supports pairs with missing values
  - `foo=bar&hola` parses into `{foo: 'bar', hola: ''}`
- Stringify does not support nested values (just like `node:querystring`)

### Usage

```javascript
const qs = require('fast-querystring')

// Parsing a querystring
console.log(qs.parse('hello=world&foo=bar&values=v1&values=v2'))
// {
//   hello: 'world',
//   foo: 'bar',
//   values: ['v1', 'v2']
// }

// Stringifying an object
console.log(qs.stringify({ foo: ['bar', 'baz'] }))
// 'foo=bar&foo=baz'
```

### Benchmark

All benchmarks are run using Node.js v20.2.0 running on M1 Max.

- Parsing a query-string

```
> node benchmark/parse.mjs

╔═════════════════════════════════════════╤═════════╤═══════════════════╤═══════════╗
║ Slower tests                            │ Samples │            Result │ Tolerance ║
╟─────────────────────────────────────────┼─────────┼───────────────────┼───────────╢
║ query-string                            │   10000 │  273968.62 op/sec │  ± 1.48 % ║
║ qs                                      │    9999 │  324118.68 op/sec │  ± 0.99 % ║
║ querystringify                          │    1000 │  410157.64 op/sec │  ± 0.68 % ║
║ @aws-sdk/querystring-parser             │    1000 │  431465.20 op/sec │  ± 0.83 % ║
║ URLSearchParams-with-Object.fromEntries │    5000 │  833939.19 op/sec │  ± 0.97 % ║
║ URLSearchParams-with-construct          │   10000 │  980017.92 op/sec │  ± 2.42 % ║
║ node:querystring                        │   10000 │ 1068165.86 op/sec │  ± 3.41 % ║
║ querystringparser                       │    3000 │ 1384001.31 op/sec │  ± 0.95 % ║
╟─────────────────────────────────────────┼─────────┼───────────────────┼───────────╢
║ Fastest test                            │ Samples │            Result │ Tolerance ║
╟─────────────────────────────────────────┼─────────┼───────────────────┼───────────╢
║ fast-querystring                        │   10000 │ 1584458.62 op/sec │  ± 2.64 % ║
╚═════════════════════════════════════════╧═════════╧═══════════════════╧═══════════╝
```

- Stringify a query-string

```
> node benchmark/stringify.mjs

╔══════════════════════════════╤═════════╤═══════════════════╤═══════════╗
║ Slower tests                 │ Samples │            Result │ Tolerance ║
╟──────────────────────────────┼─────────┼───────────────────┼───────────╢
║ query-string                 │   10000 │  314662.25 op/sec │  ± 1.08 % ║
║ qs                           │    9500 │  353621.74 op/sec │  ± 0.98 % ║
║ http-querystring-stringify   │   10000 │  372189.04 op/sec │  ± 1.48 % ║
║ @aws-sdk/querystring-builder │   10000 │  411658.63 op/sec │  ± 1.67 % ║
║ URLSearchParams              │   10000 │  454438.85 op/sec │  ± 1.32 % ║
║ querystringparser            │   10000 │  455615.18 op/sec │  ± 4.22 % ║
║ querystringify               │   10000 │  879020.96 op/sec │  ± 2.12 % ║
║ querystringify-ts            │   10000 │  879134.48 op/sec │  ± 2.19 % ║
║ node:querystring             │   10000 │ 1244505.97 op/sec │  ± 2.12 % ║
╟──────────────────────────────┼─────────┼───────────────────┼───────────╢
║ Fastest test                 │ Samples │            Result │ Tolerance ║
╟──────────────────────────────┼─────────┼───────────────────┼───────────╢
║ fast-querystring             │   10000 │ 1953717.60 op/sec │  ± 3.16 % ║
╚══════════════════════════════╧═════════╧═══════════════════╧═══════════╝
```

- Importing package.

```
> node benchmark/import.mjs

╔═════════════════════════════╤═════════╤═════════════════╤═══════════╗
║ Slower tests                │ Samples │          Result │ Tolerance ║
╟─────────────────────────────┼─────────┼─────────────────┼───────────╢
║ @aws-sdk/querystring-parser │    1000 │ 12360.51 op/sec │  ± 0.57 % ║
║ qs                          │    1000 │ 14507.74 op/sec │  ± 0.36 % ║
║ querystringify              │    1000 │ 14750.53 op/sec │  ± 0.39 % ║
║ query-string                │    1000 │ 16335.05 op/sec │  ± 0.87 % ║
║ querystringparser           │    1000 │ 17018.50 op/sec │  ± 0.42 % ║
╟─────────────────────────────┼─────────┼─────────────────┼───────────╢
║ Fastest test                │ Samples │          Result │ Tolerance ║
╟─────────────────────────────┼─────────┼─────────────────┼───────────╢
║ fast-querystring            │    2500 │ 74605.83 op/sec │  ± 0.91 % ║
╚═════════════════════════════╧═════════╧═════════════════╧═══════════╝
```
