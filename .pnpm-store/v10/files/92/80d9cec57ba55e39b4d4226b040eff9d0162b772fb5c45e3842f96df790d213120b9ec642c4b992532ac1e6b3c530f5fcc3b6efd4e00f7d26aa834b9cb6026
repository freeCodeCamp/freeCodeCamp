# @fastify/oauth2

[![CI](https://github.com/fastify/fastify-oauth2/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify-oauth2/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/@fastify/oauth2.svg?style=flat)](https://www.npmjs.com/package/@fastify/oauth2)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)

Wrapper around the [`simple-oauth2`](https://github.com/lelylan/simple-oauth2) library.

v4.x of this module support Fastify v3.x
[v3.x](https://github.com/fastify/fastify-oauth2/tree/3.x) of this module support Fastify v2.x

## Install

```
npm i @fastify/oauth2
```

## Usage

Two separate endpoints need to be created when using the fastify-oauth2 module, one for the callback from the OAuth2 service provider (such as Facebook or Discord) and another for initializing the OAuth2 login flow.

```js
const fastify = require('fastify')({ logger: { level: 'trace' } })
const oauthPlugin = require('@fastify/oauth2')

fastify.register(oauthPlugin, {
  name: 'facebookOAuth2',
  credentials: {
    client: {
      id: '<CLIENT_ID>',
      secret: '<CLIENT_SECRET>'
    },
    auth: oauthPlugin.FACEBOOK_CONFIGURATION
  },
  // register a fastify url to start the redirect flow to the service provider's OAuth2 login
  startRedirectPath: '/login/facebook',
  // service provider redirects here after user login
  callbackUri: 'http://localhost:3000/login/facebook/callback'
  // You can also define callbackUri as a function that takes a FastifyRequest and returns a string
  // callbackUri: req => `${req.protocol}://${req.hostname}/login/facebook/callback`,
})

// This is the new endpoint that initializes the OAuth2 login flow
// This endpoint is only required if startRedirectPath has not been provided
fastify.get('/login/facebook', {}, (req, reply) => {
  fastify.facebookOAuth2.generateAuthorizationUri(
    req,
    reply,
    (err, authorizationEndpoint) => {
     if (err) console.error(err)
     reply.redirect(authorizationEndpoint)
    }
  );
});

// The service provider redirect the user here after successful login
fastify.get('/login/facebook/callback', async function (request, reply) {
  const { token } = await this.facebookOAuth2.getAccessTokenFromAuthorizationCodeFlow(request)

  console.log(token.access_token)

  // if later need to refresh the token this can be used
  // const { token: newToken } = await this.getNewAccessTokenUsingRefreshToken(token)

  reply.send({ access_token: token.access_token })
})
```

In short, it is necessary to initially navigate to the `/login/facebook` endpoint manually in a web browser. This will redirect to the OAuth2 service provider's login screen. From there, the service provider will automatically redirect back to the `/login/facebook/callback` endpoint where the access token can be retrieved and used. The `CLIENT_ID` and `CLIENT_SECRET` need to be replaced with the ones provided by the service provider.

A complete example is provided at [fastify-discord-oauth2-example](https://github.com/fastify/fastify-oauth2/blob/main/examples/discord.js)

### Usage with `@fastify/cookie`

Since v7.2.0, `@fastify/oauth2` requires the use of cookies to securely implement the OAuth2 exchange. Therefore, if you need `@fastify/cookie` yourself,
you will need to register it _before_ `@fastify/oauth2`.

```js
const fastify = require('fastify')({ logger: { level: 'trace' } })
const oauthPlugin = require('@fastify/oauth2')

fastify.register(require('@fastify/cookie'), cookieOptions)
fastify.register(oauthPlugin, oauthOptions)
```

Cookies are by default `httpOnly`, `sameSite: Lax`. If this does not suit your use case, it is possible to override the default cookie settings by providing options in the configuration object, for example

```js
fastify.register(oauthPlugin, {
  ...,
  cookie: {
    secure: true,
    sameSite: 'none'
  }
})
```

Additionally, you can customize the names of the cookies by setting the `redirectStateCookieName` and `verifierCookieName` options.
The default values for these cookies are `oauth2-code-verifier` for `verifierCookieName` and `oauth2-redirect-state` for `redirectStateCookieName`.

```js
fastify.register(oauthPlugin, {
  ...,
  redirectStateCookieName: 'custom-redirect-state',
  verifierCookieName: 'custom-code-verifier'
})
```

### Preset configurations

You can choose some default setup to assign to `auth` option.

- `APPLE_CONFIGURATION`
- `FACEBOOK_CONFIGURATION`
- `GITHUB_CONFIGURATION`
- `GITLAB_CONFIGURATION`
- `LINKEDIN_CONFIGURATION`
- `GOOGLE_CONFIGURATION`
- `MICROSOFT_CONFIGURATION`
- `VKONTAKTE_CONFIGURATION`
- `SPOTIFY_CONFIGURATION`
- `DISCORD_CONFIGURATION`
- `TWITCH_CONFIGURATION`
- `VATSIM_CONFIGURATION`
- `VATSIM_DEV_CONFIGURATION`
- `EPIC_GAMES_CONFIGURATION`
- `YANDEX_CONFIGURATION`
- `X_CONFIGURATION`

### Custom configuration

Of course, you can set the OAUTH endpoints by yourself if a preset is not in our module:

```js
fastify.register(oauthPlugin, {
  name: 'customOauth2',
  credentials: {
    client: {
      id: '<CLIENT_ID>',
      secret: '<CLIENT_SECRET>'
    },
    auth: {
      authorizeHost: 'https://my-site.com',
      authorizePath: '/authorize',
      tokenHost: 'https://token.my-site.com',
      tokenPath: '/api/token'
    }
  },
  startRedirectPath: '/login',
  callbackUri: 'http://localhost:3000/login/callback',
  callbackUriParams: {
    exampleParam: 'example param value'
  }
})
```

## Use automated discovery endpoint

When your provider supports OpenID connect discovery and you want to configure authorization, token and revocation endpoints automatically,
then you can use discovery option.
`discovery` is a simple object that requires `issuer` property.

Issuer is expected to be string URL or metadata url.
Variants with or without trailing slash are supported.

You can see more in [example here](./examples/discovery.js).

```js
fastify.register(oauthPlugin, {
  name: 'customOAuth2',
  scope: ['profile', 'email'],
  credentials: {
    client: {
      id: '<CLIENT_ID>',
      secret: '<CLIENT_SECRET>',
    },
    // Note how "auth" is not needed anymore when discovery is used.
  },
  startRedirectPath: '/login',
  callbackUri: 'http://localhost:3000/callback',
  discovery: { issuer: 'https://identity.mycustomdomain.com' }
  // pkce: 'S256', you can still do this explicitly, but since discovery is used,
  // it's BEST to let plugin do it itself
  // based on what Authorization Server Metadata response
});
```

Important notes for discovery:

- You should not set up `credentials.auth` anymore when discovery mechanics is used.
- When your provider supports it, plugin will also select appropriate PKCE method in authorization code grant
- In case you still want to select method yourself, and know exactly what you are doing; you can still do it explicitly.

### Schema configuration

You can specify your own schema for the `startRedirectPath` end-point. It allows you to create a well-documented document when using `@fastify/swagger` together.
Note: `schema` option will override the `tags` option without merging them.

```js
fastify.register(oauthPlugin, {
  name: 'facebookOAuth2',
  credentials: {
    client: {
      id: '<CLIENT_ID>',
      secret: '<CLIENT_SECRET>'
    },
    auth: oauthPlugin.FACEBOOK_CONFIGURATION
  },
  // register a fastify url to start the redirect flow
  startRedirectPath: '/login/facebook',
  // facebook redirect here after the user login
  callbackUri: 'http://localhost:3000/login/facebook/callback',
  // add tags for the schema
  tags: ['facebook', 'oauth2'],
  // add schema
  schema: {
    tags: ['facebook', 'oauth2'] // this will take the precedence
  }
})
```

## Set custom state

The `generateStateFunction` accepts a function to generate the `state` parameter for the OAUTH flow. This function receives the Fastify instance's `request` object as a parameter.
The `state` parameter will be also set into a `httpOnly`, `sameSite: Lax` cookie.
When you set it, it is required to provide the function `checkStateFunction` in order to validate the states generated.

```js
  fastify.register(oauthPlugin, {
    name: 'facebookOAuth2',
    credentials: {
      client: {
        id: '<CLIENT_ID>',
        secret: '<CLIENT_SECRET>'
      },
      auth: oauthPlugin.FACEBOOK_CONFIGURATION
    },
    // register a fastify url to start the redirect flow
    startRedirectPath: '/login/facebook',
    // facebook redirect here after the user login
    callbackUri: 'http://localhost:3000/login/facebook/callback',
    // custom function to generate the state
    generateStateFunction: (request) => {
      const state = request.query.customCode
      request.session.state = state
      return state
    },
    // custom function to check the state is valid
    checkStateFunction: (request, callback) => {
      if (request.query.state === request.session.state) {
        callback()
        return
      }
      callback(new Error('Invalid state'))
    }
  })
```

Async functions are supported here, and the fastify instance can be accessed via `this`.

```js
  fastify.register(oauthPlugin, {
    name: 'facebookOAuth2',
    credentials: {
      client: {
        id: '<CLIENT_ID>',
        secret: '<CLIENT_SECRET>'
      },
      auth: oauthPlugin.FACEBOOK_CONFIGURATION
    },
    // register a fastify url to start the redirect flow
    startRedirectPath: '/login/facebook',
    // facebook redirect here after the user login
    callbackUri: 'http://localhost:3000/login/facebook/callback',
    // custom function to generate the state and store it into the redis
    generateStateFunction: async function (request) {
      const state = request.query.customCode
      await this.redis.set(stateKey, state)
      return state
    },
    // custom function to check the state is valid
    checkStateFunction: async function (request, callback) {
      if (request.query.state !== request.session.state) {
        throw new Error('Invalid state')
      }
      return true
    }
  })
```

## Set custom callbackUri Parameters

The `callbackUriParams` accepts an object that will be translated to query parameters for the callback OAUTH flow. The default value is {}.

```js
fastify.register(oauthPlugin, {
  name: 'googleOAuth2',
  scope: ['profile', 'email'],
  credentials: {
    client: {
      id: '<CLIENT_ID>',
      secret: '<CLIENT_SECRET>',
    },
    auth: oauthPlugin.GOOGLE_CONFIGURATION,
  },
  startRedirectPath: '/login/google',
  callbackUri: 'http://localhost:3000/login/google/callback',
  callbackUriParams: {
    // custom query param that will be passed to callbackUri
    access_type: 'offline', // will tell Google to send a refreshToken too
  },
  pkce: 'S256'
  // check if your provider supports PKCE,
  // in case they do,
  // use of this parameter is highly encouraged
  // in order to prevent authorization code interception attacks
});
```

## Set custom tokenRequest body Parameters

The `tokenRequestParams` parameter accepts an object that will be translated to additional parameters in the POST body
when requesting access tokens via the service’s token endpoint.

## Examples

See the [`example/`](./examples/) folder for more examples.

## Reference

This Fastify plugin decorates the fastify instance with the [`simple-oauth2`](https://github.com/lelylan/simple-oauth2)
instance inside a **namespace** specified by the property `name` both with and without an `oauth2` prefix.

E.g. For `name: 'customOauth2'`, the `simple-oauth2` instance will become accessible like this:

`fastify.oauth2CustomOauth2.oauth2` and `fastify.customOauth2.oauth2`

In this manner, we can register multiple OAuth providers and each OAuth providers `simple-oauth2` instance will live in its own **namespace**.

E.g.

- `fastify.oauth2Facebook.oauth2`
- `fastify.oauth2Github.oauth2`
- `fastify.oauth2Spotify.oauth2`
- `fastify.oauth2Vkontakte.oauth2`

Assuming we have registered multiple OAuth providers like this:

- `fastify.register(oauthPlugin, { name: 'facebook', { ... } // facebooks credentials, startRedirectPath, callbackUri etc )`
- `fastify.register(oauthPlugin, { name: 'github', { ... } // githubs credentials, startRedirectPath, callbackUri etc )`
- `fastify.register(oauthPlugin, { name: 'spotify', { ... } // spotifys credentials, startRedirectPath, callbackUri etc )`
- `fastify.register(oauthPlugin, { name: 'vkontakte', { ... } // vkontaktes credentials, startRedirectPath, callbackUri etc )`

## Utilities

This fastify plugin adds 6 utility decorators to your fastify instance using the same **namespace**:

- `getAccessTokenFromAuthorizationCodeFlow(request, callback)`: A function that uses the Authorization code flow to fetch an OAuth2 token using the data in the last request of the flow. If the callback is not passed it will return a promise. The callback call or promise resolution returns an [AccessToken](https://github.com/lelylan/simple-oauth2/blob/master/API.md#accesstoken) object, which has an `AccessToken.token` property with the following keys:
  - `access_token`
  - `refresh_token` (optional, only if the `offline scope` was originally requested, as seen in the callbackUriParams example)
  - `token_type` (generally `'Bearer'`)
  - `expires_in` (number of seconds for the token to expire, e.g. `240000`)

- OR `getAccessTokenFromAuthorizationCodeFlow(request, reply, callback)` variant with 3 arguments, which should be used when PKCE extension is used.
  This allows fastify-oauth2 to delete PKCE code_verifier cookie so it doesn't stay in browser in case server has issue when fetching token. See [Google With PKCE example for more](./examples/google-with-pkce.js).

  *Important to note*: if your provider supports `S256` as code_challenge_method, always prefer that.
  Only use `plain` when your provider doesn't support `S256`.


- `getNewAccessTokenUsingRefreshToken(Token, params, callback)`: A function that takes a `AccessToken`-Object as `Token` and retrieves a new `AccessToken`-Object. This is generally useful with background processing workers to re-issue a new AccessToken when the previous AccessToken has expired. The `params` argument is optional and it is an object that can be used to pass in additional parameters to the refresh request (e.g. a stricter set of scopes). If the callback is not passed this function will return a Promise. The object resulting from the callback call or the resolved Promise is a new `AccessToken` object (see above). Example of how you would use it for `name:googleOAuth2`:
```js
fastify.googleOAuth2.getNewAccessTokenUsingRefreshToken(currentAccessToken, (err, newAccessToken) => {
   // Handle the new accessToken
});
```

- `generateAuthorizationUri(requestObject, replyObject, callback)`: A function that generates the authorization uri. If the callback is not passed this function will return a Promise. The string resulting from the callback call or the resolved Promise is the authorization uri. This is generally useful when you want to handle the redirect yourself in a specific route. The `requestObject` argument passes the request object to the `generateStateFunction`). You **do not** need to declare a `startRedirectPath` if you use this approach. Example of how you would use it:

```js
fastify.get('/external', { /* Hooks can be used here */ }, (req, reply) => {
  fastify.oauth2CustomOAuth2.generateAuthorizationUri(req, reply, (err, authorizationEndpoint) => {
    reply.redirect(authorizationEndpoint)
  });
});
```

- `revokeToken(Token, tokenType, params, callback)`: A function to revoke the current access_token or refresh_token on the authorization server. If the callback is not passed it will return a promise. The callback call or promise resolution returns `void`
```js
fastify.googleOAuth2.revokeToken(currentAccessToken, 'access_token', undefined, (err) => {
   // Handle the reply here
});
```
- `revokeAllToken(Token, params, callback)`: A function to revoke the current access_token and refresh_token on the authorization server. If the callback is not passed it will return a promise. The callback call or promise resolution returns `void`
```js
fastify.googleOAuth2.revokeAllToken(currentAccessToken, undefined, (err) => {
   // Handle the reply here
});
```

- `userinfo(tokenOrTokenSet)`: A function to retrieve userinfo data from Authorization Provider. Both token (as object) or `access_token` string value can be passed.

Important note:
Userinfo will only work when `discovery` option is used and such endpoint is advertised by identity provider.

For a statically configured plugin, you need to make a HTTP call yourself.

See more on OIDC standard definition for [Userinfo endpoint](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo)

See more on `userinfo_endpoint` property in [OIDC Discovery Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata) standard definition.

```js
fastify.googleOAuth2.userinfo(currentAccessToken, (err, userinfo) => {
   // do something with userinfo
});
// with custom params
fastify.googleOAuth2.userinfo(currentAccessToken, { method: 'GET', params: { /* add your custom key value pairs here to be appended to request */ } },  (err, userinfo) => {
   // do something with userinfo
});

// or promise version
const userinfo = await fastify.googleOAuth2.userinfo(currentAccessToken);
// use custom params
const userinfo = await fastify.googleOAuth2.userinfo(currentAccessToken, { method: 'GET', params: { /* ... */ } });
```

There are variants with callback and promises.
Custom parameters can be passed as option.
See [Types](./types/index.d.ts) and usage patterns [in examples](./examples/userinfo.js).

Note:

We support HTTP `GET` and `POST` requests to userinfo endpoint sending access token using `Bearer` schema in headers.
You can do this by setting (`via: "header"` parameter), but it's not mandatory since it's a default value.

We also support `POST` by sending `access_token` in a request body. You can do this by explicitly providing `via: "body"` parameter.

E.g. For `name: 'customOauth2'`, the helpers `getAccessTokenFromAuthorizationCodeFlow` and `getNewAccessTokenUsingRefreshToken` will become accessible like this:

- `fastify.oauth2CustomOauth2.getAccessTokenFromAuthorizationCodeFlow`
- `fastify.oauth2CustomOauth2.getNewAccessTokenUsingRefreshToken`

## Usage with TypeScript

Type definitions are provided with the package. Decorations are applied during runtime and are based on auth configuration name. One solution is to leverage TypeScript declaration merging to add type-safe namespace. Make sure you have `@types/node` installed for this to work correctly.

In project declarations files .d.ts

```ts
import { OAuth2Namespace } from '@fastify/oauth2';

declare module 'fastify' {
  interface FastifyInstance {
    facebookOAuth2: OAuth2Namespace;
    myCustomOAuth2: OAuth2Namespace;
  }
}
```

All auth configurations are made available with an `oauth2` prefix that's typed to `OAuth2Namespace | undefined`, such as eg. `fastify.oauth2CustomOauth2` for `customOauth2`.

## Provider Quirks

The following providers require additional work to be set up correctly.

### Twitch

Twitch requires that the request for a token in the oauth2 flow contains the `client_id` and `client_secret` properties in `tokenRequestParams`:

```js
fastify.register(oauthPlugin, {
  name: 'twitchOauth2',
  credentials: {
    client: {
      id: '<CLIENT_ID>',
      secret: '<CLIENT_SECRET>'
    },
    auth: oauthPlugin.TWITCH_CONFIGURATION
  },
  tokenRequestParams: {
    client_id: '<CLIENT_ID>',
    client_secret: '<CLIENT_SECRET>',
  },
  // register a fastify url to start the redirect flow
  startRedirectPath: '/login/twitch',
  // twitch redirect here after the user login
  callbackUri: 'http://localhost:3000/login/twitch/callback'
})
```

## License

Licensed under [MIT](./LICENSE).

*NB* See [`simple-oauth2`](https://github.com/lelylan/simple-oauth2) license too
