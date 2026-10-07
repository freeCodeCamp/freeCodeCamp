# @aws-sdk/token-providers

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/token-providers/latest.svg)](https://www.npmjs.com/package/@aws-sdk/token-providers)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/token-providers.svg)](https://www.npmjs.com/package/@aws-sdk/token-providers)

A collection of all token providers. The token providers should be used when the authorization
type is going to be token based. For example, the `bearer` authorization type set using
[httpBearerAuth trait][http-bearer-auth-trait] in Smithy.

## Static Token Provider

```ts
import { fromStatic } from "@aws-sdk/token-providers";

const token = { token: "TOKEN" };
const staticTokenProvider = fromStatic(token);

const staticToken = await staticTokenProvider(); // returns { token: "TOKEN" }
```

## SSO Token Provider

```ts
import { fromSso } from "@aws-sdk/token-providers";

// returns token from SSO token cache or ssoOidc.createToken() call.
const ssoToken = await fromSso();
```

## Token Provider Chain

```ts
import { nodeProvider } from "@aws-sdk/token-providers";

// returns token from default providers.
const token = await nodeProvider();
```

[http-bearer-auth-trait]: https://smithy.io/2.0/spec/authentication-traits.html#smithy-api-httpbearerauth-trait

---

### Development

This package contains a minimal copy of the SSO OIDC client, instead of relying on the full client, which
would cause a circular dependency.

When regenerating the bundled version of the SSO OIDC client, run the esbuild.js script and then make the following changes:

- Remove any dependency of the generated client on the credential chain such that it would create
  a circular dependency back to this package. Because we only need the `CreateTokenCommand`, the client, and this command's
  associated `Exception`s, it is possible to remove auth dependencies.
- Ensure all required packages are declared in the `package.json` of token-providers.
