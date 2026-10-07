# @fastify/csrf-protection

[![CI](https://github.com/fastify/csrf-protection/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/csrf-protection/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/@fastify/csrf-protection.svg?style=flat)](https://www.npmjs.com/package/@fastify/csrf-protection)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)

This plugin helps developers protect their Fastify server against [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) attacks.
In order to fully protect against CSRF, developers should study [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
in depth. See also [pillarjs/understanding-csrf](https://github.com/pillarjs/understanding-csrf) as a good guide.

## Security Disclaimer

Securing applications against CSRF is a _developer's responsibility_ and it should not be fully trusted to any third-party modules.
We do not claim that this module is able to protect an application without a clear study of CSRF, its impact, and the needed mitigations.
@fastify/csrf-protection provides a series of utilities that developers can use to secure their application.
We recommend using [@fastify/helmet](https://github.com/fastify/fastify-helmet) to implement some of those mitigations.

Security is always a tradeoff between risk mitigation, functionality, performance, and developer experience.
As a result, we will not consider a report of a plugin default configuration option as a security
vulnerability that might be unsafe in certain scenarios as long as this module provides a
way to provide full mitigation through configuration.

## Install
```js
npm i @fastify/csrf-protection
```

### Compatibility
| Plugin version | Fastify version |
| ---------------|-----------------|
| `^7.x`         | `^5.x`          |
| `^4.x`         | `^4.x`          |
| `^3.x`         | `^3.x`          |


Please note that if a Fastify version is out of support, then so are the corresponding versions of this plugin
in the table above.
See [Fastify's LTS policy](https://github.com/fastify/fastify/blob/main/docs/Reference/LTS.md) for more details.

## Usage


### Use with [`@fastify/cookie`](https://github.com/fastify/fastify-cookie)

If you use `@fastify/csrf-protection` with `@fastify/cookie`, the CSRF secret will be added to the response cookies.
By default, the cookie used will be named `_csrf`, but you can rename it via the `cookieKey` option.
When `cookieOpts` are provided, they **override** the default cookie options. Make sure you restore any of the default options which provide sensible and secure defaults.

```js
fastify.register(require('@fastify/cookie'))
fastify.register(require('@fastify/csrf-protection'))

// if you want to sign cookies:
fastify.register(require('@fastify/cookie'), { secret }) // See following section to ensure security
fastify.register(require('@fastify/csrf-protection'), { cookieOpts: { signed: true } })

// generate a token
fastify.route({
  method: 'GET',
  path: '/',
  handler: async (req, reply) => {
    const token = reply.generateCsrf()
    return { token }
  }
})

// protect a route
fastify.route({
  method: 'POST',
  path: '/',
  onRequest: fastify.csrfProtection,
  handler: async (req, reply) => {
    return req.body
  }
})
```

### Use with [`@fastify/session`](https://github.com/fastify/session)

If you use `@fastify/csrf-protection` with `@fastify/session`, the CSRF secret will be added to the session.
By default, the key used will be named `_csrf`, but you can rename it via the `sessionKey` option.

```js
fastify.register(require('@fastify-session'), { secret: "a string which is longer than 32 characters" })
fastify.register(require('@fastify/csrf-protection'), { sessionPlugin: '@fastify/session' })

// generate a token
fastify.route({
  method: 'GET',
  path: '/',
  handler: async (req, reply) => {
    const token = reply.generateCsrf()
    return { token }
  }
})

// protect a route
fastify.route({
  method: 'POST',
  path: '/',
  onRequest: fastify.csrfProtection,
  handler: async (req, reply) => {
    return req.body
  }
})
```

### Use with [`@fastify/secure-session`](https://github.com/fastify/fastify-secure-session)

If you use `@fastify/csrf-protection` with `@fastify/secure-session`, the CSRF secret will be added to the session.
By default, the key used will be named `_csrf`, but you can rename it via the `sessionKey` option.

```js
fastify.register(require('@fastify/secure-session'), { secret: "a string which is longer than 32 characters" })
fastify.register(require('@fastify/csrf-protection'), { sessionPlugin: '@fastify/secure-session' })

// generate a token
fastify.route({
  method: 'GET',
  path: '/',
  handler: async (req, reply) => {
    const token = reply.generateCsrf()
    return { token }
  }
})

// protect a route
fastify.route({
  method: 'POST',
  path: '/',
  onRequest: fastify.csrfProtection,
  handler: async (req, reply) => {
    return req.body
  }
})
```

### Securing the secret

The `secret` shown in the code above is strictly just an example. In all cases, you would need to make sure that the `secret` is:
- **Never** hard-coded in the code or `.env` files or anywhere in the repository
- Stored in some external services like KMS, Vault, or something similar
- Read at run-time and supplied to this option
- Of significant character length to provide adequate entropy
- A truly random sequence of characters (You could use [crypto-random-string](https://npm.im/crypto-random-string))

Apart from these safeguards, it is extremely important to [use HTTPS for your website/app](https://letsencrypt.org/) to avoid a bunch of other potential security issues like [MITM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) etc.

## API

### Module Options

| Options      | Description |
| ----------- | ----------- |
| `cookieKey` |  The name of the cookie where the CSRF secret will be stored, default `_csrf`.     |
| `cookieOpts` |  The cookie serialization options. See [@fastify/cookie](https://github.com/fastify/fastify-cookie).    |
| `sessionKey` |  The key where to store the CSRF secret in the session.     |
| `getToken` |  A sync function to get the CSRF secret from the request.     |
| `getUserInfo` |  A sync function to get a string of user-specific information to prevent cookie tossing.     |
| `sessionPlugin` |  The session plugin that you are using (if applicable).     |
| `csrfOpts` |  The csrf options. See [@fastify/csrf](https://github.com/fastify/csrf).     |
| `logLevel` | The log level for `fastify.csrfProtection` errors.     |

### `reply.generateCsrf([opts])`

Generates a secret (if it is not already present) and returns a promise that resolves to the associated secret.

```js
const token = reply.generateCsrf()
```

You can also pass the [cookie serialization](https://github.com/fastify/fastify-cookie) options to the function.

The option `userInfo` is required if `getUserInfo` has been specified in the module option.
The provided `userInfo` is hashed inside the csrf token and it is not directly exposed.
This option is needed to protect against cookie tossing.
The option `csrfOpts.hmacKey` is required if `getUserInfo` has been specified in the module option in combination with using [@fastify/cookie](https://github.com/fastify/fastify-cookie) as sessionPlugin.

### `fastify.csrfProtection(request, reply, next)`

A hook that you can use for protecting routes or entire plugins from CSRF attacks.
Generally, we recommend using an `onRequest` hook, but if you are sending the token
via the request body, then you must use a `preValidation` or `preHandler` hook.

```js
// protect the fastify instance
fastify.addHook('onRequest', fastify.csrfProtection)

// protect a single route
fastify.route({
  method: 'POST',
  path: '/',
  onRequest: fastify.csrfProtection,
  handler: async (req, reply) => {
    return req.body
  }
})
```

You can configure the function to read the CSRF token via the `getToken` option, by default the following is used:

```js
function getToken (req) {
  return (req.body && req.body._csrf) ||
    req.headers['csrf-token'] ||
    req.headers['xsrf-token'] ||
    req.headers['x-csrf-token'] ||
    req.headers['x-xsrf-token']
}
```

It is recommended to provide a custom `getToken` function for performance and [security](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#use-of-custom-request-headers) reasons.

```js
fastify.register(require('@fastify/csrf-protection'),
  { getToken: function (req) { return req.headers['csrf-token'] } }
)
```
or

```js
fastify.register(require('@fastify/csrf-protection'),
  { getToken: (req) => req.headers['csrf-token'] }
)
```

## License

Licensed under [MIT](./LICENSE).
