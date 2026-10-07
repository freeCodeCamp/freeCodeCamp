# Simple OAuth2

[![NPM Package Version](https://img.shields.io/npm/v/simple-oauth2.svg?style=flat-square)](https://www.npmjs.com/package/simple-oauth2)
[![Build Status](https://github.com/lelylan/simple-oauth2/workflows/Node.js%20CI/badge.svg)](https://github.com/lelylan/simple-oauth2/actions)

[Simple OAuth2](#simple-oauth2) is a Node.js client library for the [OAuth 2.0](http://oauth.net/2/) authorization framework. [OAuth 2.0](http://oauth.net/2/) is the industry-standard protocol for authorization, enabling third-party applications to obtain limited access to an HTTP service, either on behalf of a resource owner or by allowing the third-party application to obtain access on its own behalf.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Requirements](#requirements)
- [Usage](#usage)
  - [Supported Grant Types](#supported-grant-types)
    - [Authorization Code Grant](#authorization-code-grant)
    - [Resource Owner Password Credentials Grant](#resource-owner-password-credentials-grant)
    - [Client Credentials Grant](#client-credentials-grant)
  - [Access Token](#access-token)
    - [Refresh an access token](#refresh-an-access-token)
    - [Revoke an access or refresh token](#revoke-an-access-or-refresh-token)
  - [Errors](#errors)
- [Debugging the module](#debugging-the-module)
- [Contributing](#contributing)
- [Authors](#authors)
  - [Contributors](#contributors)
- [Changelog](#changelog)
- [License](#license)
- [Thanks to Open Source](#thanks-to-open-source)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Requirements

| Version                                                                          | Node support        |
|----------------------------------------------------------------------------------|---------------------|
| [5.x](https://github.com/lelylan/simple-oauth2/tree/5.x)                         | Node 14.x or higher |
| [6.x (Development)](https://github.com/lelylan/simple-oauth2/tree/master)        | Node 16.x or higher |

Older node versions are unsupported.

## Usage

Install the client library using [npm](http://npmjs.org/):

```bash
npm install --save simple-oauth2
```

With a minimal configuration, create a client instance of any supported [grant type](#supported-grant-types).

```javascript
const config = {
  client: {
    id: '<client-id>',
    secret: '<client-secret>'
  },
  auth: {
    tokenHost: 'https://api.oauth.com'
  }
};

const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');
```

For a complete reference of configuration options, see the [API Options](./API.md#options)

### Supported Grant Types

Depending on your use-case, any of the following supported grant types may be useful:

#### Authorization Code Grant

The [Authorization Code](https://oauth.net/2/grant-types/authorization-code/) grant type is used by confidential and public clients to exchange an authorization code for an access token. After the user returns to the client via the redirect URL, the application will get the authorization code from the URL and use it to request an access token.

```javascript
async function run() {
  const client = new AuthorizationCode(config);

  const authorizationUri = client.authorizeURL({
    redirect_uri: 'http://localhost:3000/callback',
    scope: '<scope>',
    state: '<state>',
    
    customParam: 'foo', // non-standard oauth params may be passed as well
  });

  // Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
  res.redirect(authorizationUri);

  const tokenParams = {
    code: '<code>',
    redirect_uri: 'http://localhost:3000/callback',
    scope: '<scope>',
  };

  try {
    const accessToken = await client.getToken(tokenParams);
  } catch (error) {
    console.log('Access Token Error', error.message);
  }
}

run();
```

See the [API reference](./API.md#new-authorizationcodeoptions) for a complete reference of available options or any of our available examples at the [example folder](./example).

#### Resource Owner Password Credentials Grant

The [Resource Owner Password Credentials](https://oauth.net/2/grant-types/password/) grant type is a way to exchange a user's credentials for an access token. Because the client application has to collect the user's password and send it to the authorization server, it is not recommended that this grant be used at all anymore.

```javascript
async function run() {
  const client = new ResourceOwnerPassword(config);

  const tokenParams = {
    username: 'username',
    password: 'password',
    scope: '<scope>',
  };

  try {
    const accessToken = await client.getToken(tokenParams);
  } catch (error) {
    console.log('Access Token Error', error.message);
  }
}

run();
```

See the [API reference](./API.md#new-resourceownerpasswordoptions) for a complete reference of available options.

#### Client Credentials Grant

The [Client Credentials](https://oauth.net/2/grant-types/client-credentials/) grant type is used by clients to obtain an access token outside of the context of a user. This is typically used by clients to access resources about themselves rather than to access a user's resources.

```javascript
async function run() {
  const client = new ClientCredentials(config);

  const tokenParams = {
    scope: '<scope>',
  };

  try {
    const accessToken = await client.getToken(tokenParams);
  } catch (error) {
    console.log('Access Token error', error.message);
  }
}

run();
```

See the [API reference](./API.md#new-clientcredentialsoptions) for a complete reference of available options.

### Access Token

On completion of any [supported grant type](#supported-grant-types) an access token will be obtained. A list of supported operations can be found below.

#### Refresh an access token

On long lived applications, it is often necessary to refresh access tokens. In such scenarios the access token is usually persisted in an external database by first serializing it.


```javascript
async function run() {
  const accessTokenJSONString = JSON.stringify(accessToken);

  await persistAccessTokenJSON(accessTokenJSONString);
}

run();
```

By the time we need to refresh the persistent access token, we can get back an [AccessToken](./API.md#accesstoken) instance by using the client's [.createToken](./API.md#createtokentoken--accesstoken) method.

```javascript
async function run() {
  const accessTokenJSONString = await getPersistedAccessTokenJSON();

  let accessToken = client.createToken(JSON.parse(accessTokenJSONString));
}

run();
```

Once we have determined the access token needs refreshing with the [.expired()](./API.md#expiredexpirationwindowseconds--boolean) method, we can finally refresh it with a [.refresh()](./API.md#await-refreshparams--accesstoken) method call.

```javascript
async function run() {
  if (accessToken.expired()) {
    try {
      const refreshParams = {
        scope: '<scope>',
      };

      accessToken = await accessToken.refresh(refreshParams);
    } catch (error) {
      console.log('Error refreshing access token: ', error.message);
    }
  }
}

run();
```

The [.expired()](./API.md##expiredexpirationwindowseconds--boolean) helper is useful for knowing when a token has definitively expired. However, there is a common race condition when tokens are near expiring. If an OAuth 2.0 token is issued with a `expires_in` property (as opposed to an `expires_at` property), there can be discrepancies between the time the OAuth 2.0 server issues the access token and when it is received.

These come down to factors such as network and processing latency and can be worked around by preemptively refreshing the access token:

```javascript
async function run() {
  const EXPIRATION_WINDOW_IN_SECONDS = 300; // Window of time before the actual expiration to refresh the token

  if (accessToken.expired(EXPIRATION_WINDOW_IN_SECONDS)) {
    try {
      accessToken = await accessToken.refresh();
    } catch (error) {
      console.log('Error refreshing access token: ', error.message);
    }
  }
}

run();
```

**Warning:** Tokens obtained with the Client Credentials grant may not be refreshed. Fetch a new token when it's expired.

See the [API reference](./API.md#accesstoken) for a complete reference of available options.

#### Revoke an access or refresh token

When you've done with the token or you want to log out, you can revoke both access and refresh tokens.

```javascript
async function run() {
  try {
    await accessToken.revoke('access_token');
    await accessToken.revoke('refresh_token');
  } catch (error) {
    console.log('Error revoking token: ', error.message);
  }
}

run();
```

As a convenience method, you can also revoke both tokens in a single call:

```javascript
async function run() {
  try {
    // Revokes both tokens, refresh token is only revoked if the access_token is properly revoked
    await accessToken.revokeAll();
  } catch (error) {
    console.log('Error revoking token: ', error.message);
  }
}

run();
```

See the [API reference](./API.md#accesstoken) for a complete reference of available options.

### Errors

Whenever a client or server error is produced, a [boom](https://github.com/hapijs/boom) error is thrown by the library. As such any [boom error property](https://hapi.dev/module/boom/api) is available, but the exact information may vary according to the type of error.

```javascript
async function run() {
  const client = new ClientCredentials(config);

  try {
    await client.getToken();
  } catch(error) {
    console.log(error.output);
  }
}

run();

// { statusCode: 401,
//   payload:
//    { statusCode: 401,
//      error: 'Unauthorized',
//      message: 'Response Error: 401 Unauthorized' },
//   headers: {} }
```

## Debugging the module
This module uses the [debug](https://github.com/visionmedia/debug) module to help on error diagnosis. Use the following environment variable to help in your debug journey:

```
DEBUG=*simple-oauth2*
```

## Contributing

See [CONTRIBUTING](./CONTRIBUTING.md)

## Authors

[Andrea Reginato](http://twitter.com/lelylan)

### Contributors

Special thanks to the following people for submitting patches.

* [Jonathan Samines](https://github.com/jonathansamines)

## Changelog

See [CHANGELOG](./CHANGELOG.md)

## License

Simple OAuth 2.0 is licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)

## Thanks to Open Source

Simple OAuth 2.0 come to life thanks to the work I've made in Lelylan, an open source microservices architecture for the Internet of Things. If this project helped you in any way, think about giving us a <a href="https://github.com/lelylan/lelylan">star on Github</a>.

<a href="https://github.com/lelylan/lelylan">
<img src="https://raw.githubusercontent.com/lelylan/lelylan/master/public/logo-lelylan.png" data-canonical-src="https://raw.githubusercontent.com/lelylan/lelylan/master/public/logo-lelylan.png" width="300"/></a>
