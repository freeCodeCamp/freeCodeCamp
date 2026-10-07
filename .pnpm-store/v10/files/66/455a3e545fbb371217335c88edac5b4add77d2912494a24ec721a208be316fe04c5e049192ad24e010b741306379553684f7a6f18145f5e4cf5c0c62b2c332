# @aws-sdk/credential-provider-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/credential-provider-node/latest.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/credential-provider-node.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-node)

## AWS Credential Provider for Node.JS

This module provides a factory function, `fromEnv`, that will attempt to source
AWS credentials from a Node.JS environment. It will attempt to find credentials
from the following sources (listed in order of precedence):

- Environment variables exposed via `process.env`
- SSO credentials from token cache
- Web identity token credentials
- Shared credentials and config ini files
- The EC2/ECS Instance Metadata Service

The default credential provider will invoke one provider at a time and only
continue to the next if no credentials have been located. For example, if the
process finds values defined via the `AWS_ACCESS_KEY_ID` and
`AWS_SECRET_ACCESS_KEY` environment variables, the files at `~/.aws/credentials`
and `~/.aws/config` will not be read, nor will any messages be sent to the
Instance Metadata Service.

If invalid configuration is encountered (such as a profile in
`~/.aws/credentials` specifying as its `source_profile` the name of a profile
that does not exist), then the chained provider will be rejected with an error
and will not invoke the next provider in the list.

_IMPORTANT_: if you intend to acquire credentials using EKS 
[IAM Roles for Service Accounts](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html) 
then you must explicitly specify a value for `roleAssumerWithWebIdentity`. There is a
default function available in `@aws-sdk/client-sts` package. An example of using
this:

```js
const { getDefaultRoleAssumerWithWebIdentity } = require("@aws-sdk/client-sts");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");

const provider = defaultProvider({
  roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity({
    // You must explicitly pass a region if you are not using us-east-1
    region: "eu-west-1"
  }),
});

const client = new S3Client({ credentialDefaultProvider: provider });
```

_IMPORTANT_: We provide a wrapper of this provider in `@aws-sdk/credential-providers`
package to save you from importing `getDefaultRoleAssumerWithWebIdentity()` or
`getDefaultRoleAssume()` from STS package. Similarly, you can do:

```js
const { fromNodeProviderChain } = require("@aws-sdk/credential-providers");

const credentials = fromNodeProviderChain();

const client = new S3Client({ credentials });
```

## Supported configuration

You may customize how credentials are resolved by providing an options hash to
the `defaultProvider` factory function. The following options are
supported:

- `profile` - The configuration profile to use. If not specified, the provider
  will use the value in the `AWS_PROFILE` environment variable or a default of
  `default`.
- `filepath` - The path to the shared credentials file. If not specified, the
  provider will use the value in the `AWS_SHARED_CREDENTIALS_FILE` environment
  variable or a default of `~/.aws/credentials`.
- `configFilepath` - The path to the shared config file. If not specified, the
  provider will use the value in the `AWS_CONFIG_FILE` environment variable or a
  default of `~/.aws/config`.
- `mfaCodeProvider` - A function that returns a a promise fulfilled with an
  MFA token code for the provided MFA Serial code. If a profile requires an MFA
  code and `mfaCodeProvider` is not a valid function, the credential provider
  promise will be rejected.
- `roleAssumer` - A function that assumes a role and returns a promise
  fulfilled with credentials for the assumed role. If not specified, no role
  will be assumed, and an error will be thrown.
- `roleArn` - ARN to assume. If not specified, the provider will use the value
  in the `AWS_ROLE_ARN` environment variable.
- `webIdentityTokenFile` - File location of where the `OIDC` token is stored.
  If not specified, the provider will use the value in the `AWS_WEB_IDENTITY_TOKEN_FILE`
  environment variable.
- `roleAssumerWithWebIdentity` - A function that assumes a role with web identity and
  returns a promise fulfilled with credentials for the assumed role.
- `timeout` - The connection timeout (in milliseconds) to apply to any remote
  requests. If not specified, a default value of `1000` (one second) is used.
- `maxRetries` - The maximum number of times any HTTP connections should be
  retried. If not specified, a default value of `0` will be used.

## Related packages:

- [AWS Credential Provider for Node.JS - Environment Variables](../credential-provider-env)
- [AWS Credential Provider for Node.JS - SSO](../credential-provider-sso)
- [AWS Credential Provider for Node.JS - Web Identity](../credential-provider-web-identity)
- [AWS Credential Provider for Node.JS - Shared Configuration Files](../credential-provider-ini)
- [AWS Credential Provider for Node.JS - Instance and Container Metadata](../credential-provider-imds)
- [AWS Shared Configuration File Loader](../shared-ini-file-loader)
