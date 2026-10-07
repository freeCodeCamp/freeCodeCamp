# @fastify/forwarded

[![CI](https://github.com/fastify/forwarded/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/forwarded/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/@fastify/forwarded.svg?style=flat)](https://www.npmjs.com/package/@fastify/forwarded)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)

Parse HTTP X-Forwarded-For header.

Updated version of the great https://github.com/jshttp/forwarded.
Implements https://github.com/jshttp/forwarded/pull/9.

## Installation

```sh
$ npm i @fastify/forwarded
```

## API

```js
const forwarded = require('@fastify/forwarded')
```

### forwarded(req)

```js
const addresses = forwarded(req)
```

Parse the `X-Forwarded-For` header from the request. Returns an array
of the addresses, including the socket address for the `req`, in reverse
order (i.e. index `0` is the socket address and the last index is the
furthest address, typically the end-user).

## Testing

```sh
$ npm test
```

## License

[MIT](LICENSE)
