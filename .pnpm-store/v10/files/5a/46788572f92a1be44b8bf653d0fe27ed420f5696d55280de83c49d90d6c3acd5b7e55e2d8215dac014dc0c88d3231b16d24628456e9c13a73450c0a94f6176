# secure-json-parse

![CI](https://github.com/fastify/secure-json-parse/workflows/CI/badge.svg)
[![NPM version](https://img.shields.io/npm/v/secure-json-parse.svg?style=flat)](https://www.npmjs.com/package/secure-json-parse)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://standardjs.com/)

`JSON.parse()` drop-in replacement with prototype poisoning protection.

## Introduction

Consider this:

```js
> const a = '{"__proto__":{ "b":5}}';
'{"__proto__":{ "b":5}}'

> const b = JSON.parse(a);
{ __proto__: { b: 5 } }

> b.b;
undefined

> const c = Object.assign({}, b);
{}

> c.b
5
```

The problem is that `JSON.parse()` retains the `__proto__` property as a plain object key. By
itself, this is not a security issue. However, as soon as that object is assigned to another or
iterated on and values copied, the `__proto__` property leaks and becomes the object's prototype.

## Install
```
npm i secure-json-parse
```

## Usage

Pass the option object as a second (or third) parameter for configuring the action to take in case of a bad JSON, if nothing is configured, the default is to throw a `SyntaxError`.<br/>
You can choose which action to perform in case `__proto__` is present, and in case `constructor.prototype` is present.

```js
const sjson = require('secure-json-parse')

const goodJson = '{ "a": 5, "b": 6 }'
const badJson = '{ "a": 5, "b": 6, "__proto__": { "x": 7 }, "constructor": {"prototype": {"bar": "baz"} } }'

console.log(JSON.parse(goodJson), sjson.parse(goodJson, { protoAction: 'remove', constructorAction: 'remove' }))
console.log(JSON.parse(badJson), sjson.parse(badJson, { protoAction: 'remove', constructorAction: 'remove' }))
```

## API

### `sjson.parse(text, [reviver], [options])`

Parses a given JSON-formatted text into an object where:
- `text` - the JSON text string.
- `reviver` - the `JSON.parse()` optional `reviver` argument.
- `options` - optional configuration object where:
    - `protoAction` - optional string with one of:
        - `'error'` - throw a `SyntaxError` when a `__proto__` key is found. This is the default value.
        - `'remove'` - deletes any `__proto__` keys from the result object.
        - `'ignore'` - skips all validation (same as calling `JSON.parse()` directly).
    - `constructorAction` - optional string with one of:
        - `'error'` - throw a `SyntaxError` when a `constructor.prototype` key is found. This is the default value.
        - `'remove'` - deletes any `constructor` keys from the result object.
        - `'ignore'` - skips all validation (same as calling `JSON.parse()` directly).

### `sjson.scan(obj, [options])`

Scans a given object for prototype properties where:
- `obj` - the object being scanned.
- `options` - optional configuration object where:
    - `protoAction` - optional string with one of:
        - `'error'` - throw a `SyntaxError` when a `__proto__` key is found. This is the default value.
        - `'remove'` - deletes any `__proto__` keys from the input `obj`.
    - `constructorAction` - optional string with one of:
        - `'error'` - throw a `SyntaxError` when a `constructor.prototype` key is found. This is the default value.
        - `'remove'` - deletes any `constructor` keys from the input `obj`.

## Benchmarks

Machine: 2,7 GHz Quad-Core Intel Core i7

```
v14.8.0

> node ignore.js

JSON.parse x 679,376 ops/sec ±1.15% (84 runs sampled)
secure-json-parse x 649,605 ops/sec ±0.58% (87 runs sampled)
reviver x 244,414 ops/sec ±1.05% (88 runs sampled)
Fastest is JSON.parse

> node no__proto__.js

JSON.parse x 652,190 ops/sec ±0.67% (86 runs sampled)
secure-json-parse x 589,785 ops/sec ±1.01% (88 runs sampled)
reviver x 218,075 ops/sec ±1.58% (87 runs sampled)
Fastest is JSON.parse

> node remove.js

JSON.parse x 683,527 ops/sec ±0.62% (88 runs sampled)
secure-json-parse x 316,926 ops/sec ±0.63% (87 runs sampled)
reviver x 214,167 ops/sec ±0.63% (86 runs sampled)
Fastest is JSON.parse

> node throw.js

JSON.parse x 682,548 ops/sec ±0.60% (88 runs sampled)
JSON.parse error x 170,716 ops/sec ±0.93% (87 runs sampled)
secure-json-parse x 104,483 ops/sec ±0.62% (87 runs sampled)
reviver x 114,197 ops/sec ±0.63% (87 runs sampled)
Fastest is JSON.parse
```

# Acknowledgements
This project has been forked from [hapijs/bourne](https://github.com/hapijs/bourne).
All the credits before the commit [4690682](https://github.com/hapijs/bourne/commit/4690682c6cdaa06590da7b2485d5df91c09da889) goes to the hapijs/bourne project contributors.
After, the project will be maintained by the Fastify team.

# License
Licensed under BSD-3-Clause.
