# CSRF

[![CI](https://github.com/fastify/csrf/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/csrf/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/@fastify/csrf.svg?style=flat)](https://www.npmjs.com/package/@fastify/csrf)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)

Logic behind CSRF token creation and verification.

Read [Understanding-CSRF](https://github.com/pillarjs/understanding-csrf)
for more information on CSRF. Use this module to create custom CSRF middleware.

Looking for a CSRF framework for your favorite framework that uses this
module?

  * Express/connect: [csurf](https://www.npmjs.com/package/csurf) or
    [alt-xsrf](https://www.npmjs.com/package/alt-xsrf)
  * Koa: [koa-csrf](https://www.npmjs.com/package/koa-csrf) or
    [koa-atomic-session](https://www.npmjs.com/package/koa-atomic-session)

This module is a fork of https://github.com/pillarjs/csrf at f0d66c91ea4be6d30a03bd311ed9518951d9c3e4.

### Install

```sh
$ npm i @fastify/csrf
```

### TypeScript

This module includes a [TypeScript](https://www.typescriptlang.org/)
declaration file to enable auto-complete in compatible editors and type
information for TypeScript projects.

## API

<!-- eslint-disable no-unused-vars -->

```js
const Tokens = require('@fastify/csrf')
```

### new Tokens([options])

Create a new token generation/verification instance. The `options` argument is
optional and will just use all defaults if missing.

#### Options

Tokens accept these properties in the options object.

##### algorithm

The hash-algorithm to generate the token. Defaults to `sha256`.

##### saltLength

The length of the internal salt to use, in characters. Internally, the salt
is a base 62 string. Defaults to `8` characters.

##### secretLength

The length of the secret to generate, in bytes. Note that the secret is
passed around base-64 encoded and that this length refers to the underlying
bytes, not the length of the base-64 string. Defaults to `18` bytes.

##### userInfo

Require user-specific information in `tokens.create()` and
`tokens.verify()`.

##### hmacKey

When set, the `hmacKey` is used to generate the cryptographic HMAC hash instead of the default hash function.

##### validity

The maximum validity of the token to generate, in milliseconds. Note that the epoch is
passed around base-36 encoded. Defaults to `0` milliseconds (disabled).

#### tokens.create(secret[, userInfo])

Create a new CSRF token attached to the given `secret`. The `secret` is a
string, typically generated from the `tokens.secret()` or `tokens.secretSync()`
methods. This token is what you should add into HTML `<form>` blocks and
expect the user's browser to provide back.

<!-- eslint-disable no-undef, no-unused-vars -->

```js
const secret = tokens.secretSync()
const token = tokens.create(secret)
```

The `userInfo` parameter can be used to protect against cookie tossing
attacks (and similar) when the application is deployed with untrusted
subdomains. It will encode some user-specific information within the
token. It is used only if `userInfo: true` is passed to the
constructor.

#### tokens.secret(callback)

Asynchronously create a new `secret`, which is a string. The secret is to
be kept on the server, typically stored in a server-side session for the
user. The secret should be at least per user.

<!-- eslint-disable no-undef -->

```js
tokens.secret(function (err, secret) {
  if (err) throw err
  // Do something with the secret
})
```

#### tokens.secret()

Asynchronously create a new `secret` and return a `Promise`. Please see
`tokens.secret(callback)` documentation for full details.

**Note**: To use promises in Node.js _prior to 0.12_, promises must be
"polyfilled" using `global.Promise = require('bluebird')`.

<!-- eslint-disable no-undef -->

```js
tokens.secret().then(function (secret) {
  // Do something with the secret
})
```

#### tokens.secretSync()

A synchronous version of `tokens.secret(callback)`. Please see
`tokens.secret(callback)` documentation for full details.

<!-- eslint-disable no-undef, no-unused-vars -->

```js
const secret = tokens.secretSync()
```

#### tokens.verify(secret, token[, userInfo])

Check whether a CSRF token is valid for the given `secret`, returning
a Boolean.

<!-- eslint-disable no-undef -->

```js
if (!tokens.verify(secret, token)) {
  throw new Error('invalid token!')
}
```

The `userInfo` parameter is required if `userInfo: true` was configured
during initialization. The user-specific information must match what was
passed in `tokens.create()`.

## License

Licensed under [MIT](./LICENSE).
