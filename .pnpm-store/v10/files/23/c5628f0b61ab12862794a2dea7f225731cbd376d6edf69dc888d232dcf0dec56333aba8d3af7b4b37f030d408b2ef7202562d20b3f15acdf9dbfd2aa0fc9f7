# destr

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]

A faster, secure and convenient alternative for [`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).

## Usage

### Node.js

Install dependency:

```bash
# npm
npm i destr

# yarn
yarn add destr

# pnpm
pnpm i destr
```

Import into your Node.js project:

```js
// ESM
import { destr, safeDestr } from "destr";

// CommonJS
const { destr, safeDestr } = require("destr");
```

### Deno

```js
import { destr, safeDestr } from "https://deno.land/x/destr/src/index.ts";

console.log(destr('{ "deno": "yay" }'));
```

## Why?

### ✅ Type Safe

```ts
const obj = JSON.parse("{}"); // obj type is any

const obj = destr("{}"); // obj type is unknown by default

const obj = destr<MyInterface>("{}"); // obj is well-typed
```

### ✅ Fast fallback to input if is not string

```js
// Uncaught SyntaxError: Unexpected token u in JSON at position 0
JSON.parse();

// undefined
destr();
```

### ✅ Fast lookup for known string values

```js
// Uncaught SyntaxError: Unexpected token T in JSON at position 0
JSON.parse("TRUE");

// true
destr("TRUE");
```

### ✅ Fallback to original value if parse fails (empty or any plain string)

```js
// Uncaught SyntaxError: Unexpected token s in JSON at position 0
JSON.parse("salam");

// "salam"
destr("salam");
```

**Note:** This fails in safe/strict mode with `safeDestr`.

### ✅ Avoid prototype pollution

```js
const input = '{ "user": { "__proto__": { "isAdmin": true } } }';

// { user: { __proto__: { isAdmin: true } } }
JSON.parse(input);

// { user: {} }
destr(input);
```

### ✅ Strict Mode

When using `safeDestr` it will throw an error if the input is not a valid JSON string or parsing fails. (non string values and built-ins will be still returned as-is)

```js
// Returns "[foo"
destr("[foo");

// Throws an error
safeDestr("[foo");
```

## Benchmarks

`destr` is faster generally for arbitrary inputs but also sometimes little bit slower than `JSON.parse` when parsing a valid JSON string mainly because of transform to avoid [prototype pollution](https://learn.snyk.io/lessons/prototype-pollution/javascript/) which can lead to serious security issues if not being sanitized. In the other words, `destr` is better when input is not always a JSON string or from untrusted source like request body.

Check [Benchmark Results](./BENCH.md) or run with `pnpm run bench:node` or `pnpm run bench:bun` yourself!

## License

MIT. Made with 💖

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/destr?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/destr
[npm-downloads-src]: https://img.shields.io/npm/dm/destr?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/destr
[bundle-src]: https://img.shields.io/bundlephobia/minzip/destr?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=destr
[license-src]: https://img.shields.io/github/license/unjs/destr.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/unjs/destr/blob/main/LICENSE
