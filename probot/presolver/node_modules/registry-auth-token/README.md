# registry-auth-token

[![npm version](http://img.shields.io/npm/v/registry-auth-token.svg?style=flat-square)](http://browsenpm.org/package/registry-auth-token)[![Build Status](http://img.shields.io/travis/rexxars/registry-auth-token/master.svg?style=flat-square)](https://travis-ci.org/rexxars/registry-auth-token)

Get the auth token set for an npm registry from `.npmrc`. Also allows fetching the configured registry URL for a given npm scope.

## Installing

```
npm install --save registry-auth-token
```

## Usage

Returns an object containing `token` and `type`, or `undefined` if no token can be found. `type` can be either `Bearer` or `Basic`.

```js
var getAuthToken = require('registry-auth-token')
var getRegistryUrl = require('registry-auth-token/registry-url')

// Get auth token and type for default `registry` set in `.npmrc`
console.log(getAuthToken()) // {token: 'someToken', type: 'Bearer'}

// Get auth token for a specific registry URL
console.log(getAuthToken('//registry.foo.bar'))

// Find the registry auth token for a given URL (with deep path):
// If registry is at `//some.host/registry`
// URL passed is `//some.host/registry/deep/path`
// Will find token the closest matching path; `//some.host/registry`
console.log(getAuthToken('//some.host/registry/deep/path', {recursive: true}))

// Find the configured registry url for scope `@foobar`.
// Falls back to the global registry if not defined.
console.log(getRegistryUrl('@foobar'))

// Use the npm config that is passed in
console.log(getRegistryUrl('http://registry.foobar.eu/', {
  npmrc: {
    'registry': 'http://registry.foobar.eu/',
    '//registry.foobar.eu/:_authToken': 'qar'
  }
}))
```

## Return value

```js
// If auth info can be found:
{token: 'someToken', type: 'Bearer'}

// Or:
{token: 'someOtherToken', type: 'Basic'}

// Or, if nothing is found:
undefined
```

## Security

Please be careful when using this. Leaking your auth token is dangerous.

## License

MIT-licensed. See LICENSE.
