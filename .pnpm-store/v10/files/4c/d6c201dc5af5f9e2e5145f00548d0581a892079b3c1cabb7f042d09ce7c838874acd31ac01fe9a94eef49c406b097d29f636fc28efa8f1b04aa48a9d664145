# @fastify/cookie

[![CI](https://github.com/fastify/fastify-cookie/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/fastify/fastify-cookie/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/@fastify/cookie.svg?style=flat)](https://www.npmjs.com/package/@fastify/cookie)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)

A plugin for [Fastify](http://fastify.dev/) that adds support for reading and
setting cookies.

This plugin's cookie parsing works via Fastify's `onRequest` hook. Therefore,
you should register it before any other `onRequest` hooks that will depend
upon this plugin's actions.

It is also possible to [import the low-level cookie parsing and serialization functions](#importing-serialize-and-parse).

## Install
```sh
npm i @fastify/cookie
```

### Compatibility
| Plugin version | Fastify version |
| ---------------|-----------------|
| `^10.x`        | `^5.x`          |
| `^7.x`         | `^4.x`          |
| `^4.x`         | `^3.x`          |
| `^2.x`         | `^2.x`          |
| `^1.x`         | `^1.x`          |

Please note that if a Fastify version is out of support, then so are the corresponding versions of this plugin
in the table above.
See [Fastify's LTS policy](https://github.com/fastify/fastify/blob/main/docs/Reference/LTS.md) for more details.

## Example

```js
const fastify = require('fastify')()

fastify.register(require('@fastify/cookie'), {
  secret: "my-secret", // for cookies signature
  hook: 'onRequest', // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
  parseOptions: {}  // options for parsing cookies
})

fastify.get('/', (req, reply) => {
  const aCookieValue = req.cookies.cookieName
  // `reply.unsignCookie()` is also available
  const bCookie = req.unsignCookie(req.cookies.cookieSigned);
  reply
    .setCookie('foo', 'foo', {
      domain: 'example.com',
      path: '/'
    })
    .cookie('baz', 'baz') // alias for setCookie
    .setCookie('bar', 'bar', {
      path: '/',
      signed: true
    })
    .send({ hello: 'world' })
})
```

## TypeScript Example

```ts
import type { FastifyCookieOptions } from '@fastify/cookie'
import cookie from '@fastify/cookie'
import fastify from 'fastify'

const app = fastify()

app.register(cookie, {
  secret: "my-secret", // for cookies signature
  parseOptions: {}     // options for parsing cookies
} as FastifyCookieOptions)
```

## Importing `serialize` and `parse`

```js
const { serialize, parse } = require('@fastify/cookie')
const fastify = require('fastify')()

fastify.get('/', (req, reply) => {
  const cookie = serialize('lang', 'en', {
    maxAge: 60_000,
  })

  reply.header('Set-Cookie', cookie)

  reply.send('Language set!')
})
```

## Options

- `secret` (`String` | `Array` | `Buffer` | `Object`):
  - A `String` or `Buffer` can be passed to use as secret to sign the cookie using [`cookie-signature`](http://npm.im/cookie-signature).
  - An `Array` can be passed if key rotation is desired. Read more about it in [Rotating signing secret](#rotating-secret).
  - More sophisticated cookie signing mechanisms can be implemented by supplying an `Object`. Read more about it in [Custom cookie signer](#custom-cookie-signer).

- `hook`: the [Fastify Hook](https://fastify.dev/docs/latest/Reference/Lifecycle/#lifecycle) to register the parsing of cookie into. Default: `onRequest`.

- `algorithm`: the [algorithm](https://nodejs.org/api/crypto.html#cryptogethashes) to use to sign the cookies. Default: `sha256`.

- `parseOptions`: An `Object` to modify the serialization of set cookies.

### :warning: Security Considerations :warning:

It is recommended to use `sha256` or stronger hashing algorithm as well as a `secret` that is at least 20 bytes long.

#### parseOptions

##### domain

Specifies the value for the [`Domain` `Set-Cookie` attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.3). By default, no
domain is set, and most clients will consider the cookie to apply to only the current domain.

##### encode

Specifies a function that will be used to encode a cookie's value. Since the value of a cookie
has a limited character set (and must be a simple string), this function can be used to encode
a value into a string suited for a cookie's value.

The default function is the global `encodeURIComponent`, which will encode a JavaScript string
into UTF-8 byte sequences and then URL-encode any that fall outside of the cookie range.

##### expires

Specifies the `Date` object to be the value for the [`Expires` `Set-Cookie` attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.1).
By default, no expiration is set, and most clients will consider this a "non-persistent cookie" and
will delete it on a condition like exiting a web browser application.

**Note:** the [cookie storage model specification](https://datatracker.ietf.org/doc/html/rfc6265#section-5.3) states that if both `expires` and
`maxAge` are set, then `maxAge` takes precedence, but it is possible not all clients obey this,
so if both are set, they should point to the same date and time.

##### httpOnly

Specifies the `boolean` value for the [`HttpOnly` `Set-Cookie` attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.6). When truthy,
the `HttpOnly` attribute is set, otherwise, it is not. By default, the `HttpOnly` attribute is not set.

**Note:** be careful when setting this to `true`, as compliant clients will not allow client-side
JavaScript to see the cookie in `document.cookie`.

##### maxAge

Specifies the `number` (in seconds) to be the value for the [`Max-Age` `Set-Cookie` attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.2).
The given number will be converted to an integer by rounding down. By default, no maximum age is set.

**Note:** the [cookie storage model specification](https://datatracker.ietf.org/doc/html/rfc6265#section-5.3) states that if both `expires` and
`maxAge` are set, then `maxAge` takes precedence, but it is possible not all clients obey this,
so if both are set, they should point to the same date and time.

##### partitioned

Specifies the `boolean` value for the [`Partitioned` `Set-Cookie`](https://datatracker.ietf.org/doc/html/draft-cutler-httpbis-partitioned-cookies#section-2.1)
attribute. When truthy, the `Partitioned` attribute is set, otherwise it is not. By default, the
`Partitioned` attribute is not set.

⚠️ **Warning:** [This is an attribute that has not yet been fully standardized](https://github.com/fastify/fastify-cookie/pull/261#issuecomment-1803234334), and may change in the future without reflecting the semver versioning. This also means many clients may ignore the attribute until they understand it.

More information about this can be found in [the proposal](https://github.com/privacycg/CHIPS).


##### priority

Specifies the `string` to be the value for the [`Priority` `Set-Cookie` attribute](https://tools.ietf.org/html/draft-west-cookie-priority-00#section-4.1).

  - `'low'` will set the `Priority` attribute to `Low`.
  - `'medium'` will set the `Priority` attribute to `Medium`, the default priority when not set.
  - `'high'` will set the `Priority` attribute to `High`.

More information about the different priority levels can be found in
[the specification](https://tools.ietf.org/html/draft-west-cookie-priority-00#section-4.1).

⚠️ **Warning:** This is an attribute that has not yet been fully standardized, and may change in the future without reflecting the semver versioning. This also means many clients may ignore the attribute until they understand it.

##### path

Specifies the value for the [`Path` `Set-Cookie` attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.4). By default, the path
is considered the ["default path"](https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.4).

##### sameSite

Specifies the `boolean` or `string` to be the value for the [`SameSite` `Set-Cookie` attribute](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7).

  - `true` will set the `SameSite` attribute to `Strict` for strict same site enforcement.
  - `false` will not set the `SameSite` attribute.
  - `'lax'` will set the `SameSite` attribute to `Lax` for lax same site enforcement.
  - `'none'` will set the `SameSite` attribute to `None` for an explicit cross-site cookie.
  - `'strict'` will set the `SameSite` attribute to `Strict` for strict same site enforcement.

More information about the different enforcement levels can be found in
[the specification](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7).

**Note:** This is an attribute that has not yet been fully standardized, and may change in the future.
This also means many clients may ignore this attribute until they understand it.

##### secure

Specifies the `boolean` value for the [`Secure` `Set-Cookie` attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.5). When truthy,
the `Secure` attribute is set, otherwise, it is not. By default, the `Secure` attribute is not set.

**Note:** be careful when setting this to `true`, as compliant clients will not send the cookie back to
the server in the future if the browser does not have an HTTPS connection.

## API

### Parsing

Cookies are parsed in the `onRequest` Fastify hook and attached to the request
as an object named `cookies`. Thus, if a request contains the header
`Cookie: foo=foo` then, within your handler, `req.cookies.foo` would equal
`'foo'`.

You can pass options to the [cookie parse](https://github.com/jshttp/cookie#cookieparsestr-options) by setting an object named `parseOptions` in the plugin config object.

### Sending

The method `setCookie(name, value, options)`, and its alias `cookie(name, value, options)`, are added to the `reply` object
via the Fastify `decorateReply` API. Thus, in a request handler,
`reply.setCookie('foo', 'foo', {path: '/'})` will set a cookie named `foo`
with a value of `'foo'` on the cookie path `/`.

+ `name`: a string name for the cookie to be set
+ `value`: a string value for the cookie
+ `options`: an options object as described in the [cookie serialize][cs] documentation
+ `options.signed`: the cookie should be signed
+ `options.secure`: if set to `true` it will set the Secure-flag. If it is set to `"auto"` Secure-flag is set when the connection is using tls.

#### Securing the cookie

Following are _some_ of the precautions that should be taken to ensure the integrity of an application:

- It's important to use `options.httpOnly` cookies to prevent attacks like XSS.
- Use signed cookies (`options.signed`) to ensure they are not getting tampered wit client-side by an attacker.
- Use `__Host-` [Cookie Prefix](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#Attributes) to avoid Cookie Tossing attacks.
- It is important to [use HTTPS for your website/app](https://letsencrypt.org/) to avoid a bunch of other potential security issues like [MITM](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) etc.

### Clearing

The method `clearCookie(name, options)` is added to the `reply` object
via the Fastify `decorateReply` API. Thus, in a request handler,
`reply.clearCookie('foo', {path: '/'})` will clear a cookie named `foo`
on the cookie path `/`.

+ `name`: a string name for the cookie to be cleared
+ `options`: an options object as described in the [cookie serialize][cs]
documentation. It is optional to pass an `options` object

### Manual cookie parsing

The method `parseCookie(cookieHeader)` is added to the `fastify` instance
via the Fastify `decorate` API. Thus, `fastify.parseCookie('sessionId=aYb4uTIhdBXC')`
will parse the raw cookie header and return an object `{ "sessionId": "aYb4uTIhdBXC" }`.

[cs]: https://www.npmjs.com/package/cookie#options-1

<a id="rotating-secret"></a>
### Rotating signing secret

Key rotation is when an encryption key is retired and replaced by generating a new cryptographic key. To implement rotation, supply an `Array` of keys to `secret` option.

**Example:**
```js
fastify.register(require('@fastify/cookie'), {
  secret: [key1, key2]
})
```

The plugin will **always** use the first key (`key1`) to sign cookies. When parsing incoming cookies, it will iterate over the supplied array to see if any of the available keys are able to decode the given signed cookie. This ensures that any old signed cookies are still valid.

Note:
- Key rotation is **only** achieved by redeploying the server again with the new `secret` array.
- Iterating through all secrets is an expensive process, so the rotation list should contain as few keys as possible. Ideally, only the current key and the most recently retired key.
- Although previously signed cookies are valid even after rotation, cookies should be updated with the new key as soon as possible. See the following example for how to accomplish this.

**Example:**
```js
fastify.get('/', (req, reply) => {
  const result = reply.unsignCookie(req.cookies.myCookie)

  if (result.valid && result.renew) {
    // Setting the same cookie again, this time the plugin will sign it with a new key
    reply.setCookie('myCookie', result.value, {
      domain: 'example.com', // same options as before
      path: '/',
      signed: true
    })
  }
})
```

<a id="custom-cookie-signer"></a>
### Custom cookie signer

The `secret` option optionally accepts an object with `sign` and `unsign` functions. This allows for implementing a custom cookie signing mechanism. See the following example:

**Example:**
```js
fastify.register(require('@fastify/cookie'), {
  secret: {
    sign: (value) => {
      // sign using custom logic
      return signedValue
    },
    unsign: (value) => {
      // unsign using custom logic
      return {
        valid: true, // the cookie has been unsigned successfully
        renew: false, // the cookie has been unsigned with an old secret
        value: 'unsignedValue'
      }
    }
  }
})
```

### Manual cookie unsigning

The method `unsignCookie(value)` is added to the `fastify` instance, to the `request` and the `reply` object
via the Fastify `decorate`, `decorateRequest`, and `decorateReply` APIs, if a secret was provided as an option.
Using it on a signed cookie will call the provided signer's (or the default signer if no custom implementation is provided) `unsign` method on the cookie.

**Example:**

```js
fastify.register(require('@fastify/cookie'), { secret: 'my-secret' })

fastify.get('/', (req, rep) => {
  if (fastify.unsignCookie(req.cookie.foo).valid === false) {
    rep.send('cookie is invalid')
    return
  }

  rep.send('cookie is valid')
})
```

### Other cases of manual signing

Sometimes the service under test should only accept requests with signed cookies, but it does not generate them itself.

**Example:**

```js

test('Request requires signed cookie', async () => {
    const response = await app.inject({
        method: 'GET',
        url: '/',
        headers: {
          cookies : {
            'sid': app.signCookie(sidValue)
          }
        },
    });

    expect(response.statusCode).toBe(200);
});
```

### Manual signing/unsigning with low-level utilities

With Signer:

```js
const { Signer } = require('@fastify/cookie');

const signer = new Signer('secret');
const signedValue = signer.sign('test');
const {valid, renew, value } = signer.unsign(signedValue);
```

With sign/unsign utilities:

```js
const { fastifyCookie } = require('@fastify/cookie');

const signedValue = fastifyCookie.sign('test', 'secret');
const unsignedvalue = fastifyCookie.unsign(signedValue, 'secret');
```


## License

Licensed under [MIT](./LICENSE).
