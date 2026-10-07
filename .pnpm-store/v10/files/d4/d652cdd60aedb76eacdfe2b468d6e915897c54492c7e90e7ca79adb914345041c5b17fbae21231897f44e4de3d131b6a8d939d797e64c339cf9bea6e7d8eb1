# @aws-sdk/credential-providers

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/credential-providers/latest.svg)](https://www.npmjs.com/package/@aws-sdk/credential-providers)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/credential-providers.svg)](https://www.npmjs.com/package/@aws-sdk/credential-providers)

A collection of all credential providers, with default clients.

# Table of Contents

1. [From Cognito Identity](#fromcognitoidentity)
1. [From Cognito Identity Pool](#fromcognitoidentitypool)
1. [From Temporary Credentials](#fromtemporarycredentials)
1. [From Web Token](#fromwebtoken)
   1. [Examples](#examples)
1. [From Token File](#fromtokenfile)
1. [From Instance and Container Metadata Service](#fromcontainermetadata-and-frominstancemetadata)
1. [From HTTP(S)](#fromhttp)
1. [From Shared INI files](#fromini)
   1. [Sample Files](#sample-files)
1. [From Environmental Variables](#fromenv)
1. [From Credential Process](#fromprocess)
   1. [Sample files](#sample-files-1)
1. [From Single Sign-On Service](#fromsso)
   1. [Supported Configuration](#supported-configuration)
   1. [SSO login with AWS CLI](#sso-login-with-the-aws-cli)
   1. [Sample Files](#sample-files-2)
1. [From Node.js default credentials provider chain](#fromNodeProviderChain)

## `fromCognitoIdentity()`

- Uses `@aws-sdk/client-cognito-identity`
- Available in browsers & native apps

The function `fromCognitoIdentity()` returns `CredentialsProvider` that retrieves credentials for
the provided identity ID. See [GetCredentialsForIdentity API][getcredentialsforidentity_api]
for more information.

```javascript
import { fromCognitoIdentity } from "@aws-sdk/credential-providers"; // ES6 import
// const { fromCognitoIdentity } = require("@aws-sdk/credential-providers"); // CommonJS import

const client = new FooClient({
  region,
  credentials: fromCognitoIdentity({
    // Required. The unique identifier for the identity against which credentials
    // will be issued.
    identityId: "us-east-1:128d0a74-c82f-4553-916d-90053example",
    // Optional. The ARN of the role to be assumed when multiple roles were received in the token
    // from the identity provider.
    customRoleArn: "arn:aws:iam::1234567890:role/MYAPP-CognitoIdentity",
    // Optional. A set of name-value pairs that map provider names to provider tokens.
    // Required when using identities associated with external identity providers such as Facebook.
    logins: {
      "graph.facebook.com": "FBTOKEN",
      "www.amazon.com": "AMAZONTOKEN",
      "accounts.google.com": "GOOGLETOKEN",
      "api.twitter.com": "TWITTERTOKEN'",
      "www.digits.com": "DIGITSTOKEN",
    },
    // Optional. Custom client config if you need overwrite default Cognito Identity client
    // configuration.
    clientConfig: { region },
  }),
});
```

## `fromCognitoIdentityPool()`

- Uses `@aws-sdk/client-cognito-identity`
- Available in browsers & native apps

The function `fromCognitoIdentityPool()` returns `AwsCredentialIdentityProvider` that calls [GetId API][getid_api]
to obtain an `identityId`, then generates temporary AWS credentials with
[GetCredentialsForIdentity API][getcredentialsforidentity_api], see
[`fromCognitoIdentity()`](#fromcognitoidentity).

Results from `GetId` are cached internally, but results from `GetCredentialsForIdentity` are not.

```javascript
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers"; // ES6 import
// const { fromCognitoIdentityPool } = require("@aws-sdk/credential-providers"); // CommonJS import

const client = new FooClient({
  region,
  credentials: fromCognitoIdentityPool({
    // Required. The unique identifier for the identity pool from which an identity should be
    // retrieved or generated.
    identityPoolId: "us-east-1:1699ebc0-7900-4099-b910-2df94f52a030",
    // Optional. A standard AWS account ID (9+ digits)
    accountId: "123456789",
    // Optional. A cache in which to store resolved Cognito IdentityIds.
    cache: custom_storage,
    // Optional. A unique identifier for the user used to cache Cognito IdentityIds on a per-user
    // basis.
    userIdentifier: "user_0",
    // Optional. The ARN of the role to be assumed when multiple roles were received in the token
    // from the identity provider.
    customRoleArn: "arn:aws:iam::1234567890:role/MYAPP-CognitoIdentity",
    // Optional. A set of name-value pairs that map provider names to provider tokens.
    // Required when using identities associated with external identity providers such as Facebook.
    logins: {
      "graph.facebook.com": "FBTOKEN",
      "www.amazon.com": "AMAZONTOKEN",
      "accounts.google.com": "GOOGLETOKEN",
      "api.twitter.com": "TWITTERTOKEN",
      "www.digits.com": "DIGITSTOKEN",
    },
    // Optional. Custom client config if you need overwrite default Cognito Identity client
    // configuration.
    clientConfig: { region },
  }),
});
```

## `fromTemporaryCredentials()`

- Uses `@aws-sdk/client-sts`
- Available in browsers & native apps

The function `fromTemporaryCredentials` returns `AwsCredentialIdentityProvider` that retrieves temporary
credentials from [STS AssumeRole API][assumerole_api].

```javascript
import { fromTemporaryCredentials } from "@aws-sdk/credential-providers"; // ES6 import
// const { fromTemporaryCredentials } = require("@aws-sdk/credential-providers"); // CommonJS import

const client = new FooClient({
  region,
  credentials: fromTemporaryCredentials({
    // Optional. The master credentials used to get and refresh temporary credentials from AWS STS.
    // If skipped, it uses the default credential resolved by internal STS client.
    masterCredentials: fromTemporaryCredentials({
      params: { RoleArn: "arn:aws:iam::1234567890:role/RoleA" },
    }),
    // Required. Options passed to STS AssumeRole operation.
    params: {
      // Required. ARN of role to assume.
      RoleArn: "arn:aws:iam::1234567890:role/RoleB",
      // Optional. An identifier for the assumed role session. If skipped, it generates a random
      // session name with prefix of 'aws-sdk-js-'.
      RoleSessionName: "aws-sdk-js-123",
      // Optional. The duration, in seconds, of the role session.
      DurationSeconds: 3600,
      // ... For more options see https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html
    },
    // Optional. Custom STS client configurations overriding the default ones.
    clientConfig: { region },
    // Optional. A function that returns a promise fulfilled with an MFA token code for the provided
    // MFA Serial code. Required if `params` has `SerialNumber` config.
    mfaCodeProvider: async (mfaSerial) => {
      return "token";
    },
  }),
});
```

## `fromWebToken()`

- Uses `@aws-sdk/client-sts`
- Available in browsers & native apps

The function `fromWebToken` returns `AwsCredentialIdentityProvider` that gets credentials calling
[STS AssumeRoleWithWebIdentity API][assumerolewithwebidentity_api]

```javascript
import { fromWebToken } from "@aws-sdk/credential-providers"; // ES6 import
// const { fromWebToken } = require("@aws-sdk/credential-providers"); // CommonJS import

const client = new FooClient({
  region,
  credentials: fromWebToken({
    // Required. ARN of the role that the caller is assuming.
    roleArn: "arn:aws:iam::1234567890:role/RoleA",
    // Required. The OAuth 2.0 access token or OpenID Connect ID token that is provided by the
    // identity provider.
    webIdentityToken: await openIdProvider(),
    // Optional. Custom STS client configurations overriding the default ones.
    clientConfig: { region },
    // Optional. A function that assumes a role with web identity and returns a promise fulfilled
    // with credentials for the assumed role.
    roleAssumerWithWebIdentity,
    // Optional. An identifier for the assumed role session.
    roleSessionName: "session_123",
    // Optional. The fully qualified host component of the domain name of the identity provider.
    providerId: "graph.facebook.com",
    // Optional. ARNs of the IAM managed policies that you want to use as managed session.
    policyArns: [{ arn: "arn:aws:iam::1234567890:policy/SomePolicy" }],
    // Optional. An IAM policy in JSON format that you want to use as an inline session policy.
    policy: "JSON_STRING",
    // Optional. The duration, in seconds, of the role session. Default to 3600.
    durationSeconds: 7200,
  }),
});
```

### Examples

You can directly configure individual identity providers to access AWS resources using web identity
federation. AWS currently supports authenticating users using web identity federation through
several identity providers:

- [Login with Amazon](https://login.amazon.com/)

- [Facebook Login](https://developers.facebook.com/docs/facebook-login/web/)

- [Google Sign-in](https://developers.google.com/identity/)

You must first register your application with the providers that your application supports. Next,
create an IAM role and set up permissions for it. The IAM role you create is then used to grant the
permissions you configured for it through the respective identity provider. For example, you can set
up a role that allows users who logged in through Facebook to have read access to a specific Amazon
S3 bucket you control.

After you have both an IAM role with configured privileges and an application registered with your
chosen identity providers, you can set up the SDK to get credentials for the IAM role using helper
code, as follows:

The value in the ProviderId parameter depends on the specified identity provider. The value in the
WebIdentityToken parameter is the access token retrieved from a successful login with the identity
provider. For more information on how to configure and retrieve access tokens for each identity
provider, see the documentation for the identity provider.

## `fromContainerMetadata()` and `fromInstanceMetadata()`

- Not available in browsers & native apps

`fromContainerMetadata` and `fromInstanceMetadata` will create `AwsCredentialIdentityProvider` functions that
read from the ECS container metadata service and the EC2 instance metadata service, respectively.

```javascript
import { fromInstanceMetadata } from "@aws-sdk/credential-providers"; // ES6 import
// const { fromInstanceMetadata } = require("@aws-sdk/credential-providers"); // CommonJS import

const client = new FooClient({
  credentials: fromInstanceMetadata({
    // Optional. The connection timeout (in milliseconds) to apply to any remote requests.
    // If not specified, a default value of `1000` (one second) is used.
    timeout: 1000,
    // Optional. The maximum number of times any HTTP connections should be retried. If not
    // specified, a default value of `0` will be used.
    maxRetries: 0,
  }),
});
```

```javascript
import { fromContainerMetadata } from "@aws-sdk/credential-providers"; // ES6 import
// const { fromContainerMetadata } = require("@aws-sdk/credential-providers"); // CommonJS import

const client = new FooClient({
  credentials: fromContainerMetadata({
    // Optional. The connection timeout (in milliseconds) to apply to any remote requests.
    // If not specified, a default value of `1000` (one second) is used.
    timeout: 1000,
    // Optional. The maximum number of times any HTTP connections should be retried. If not
    // specified, a default value of `0` will be used.
    maxRetries: 0,
  }),
});
```

A `AwsCredentialIdentityProvider` function created with `fromContainerMetadata` will return a promise that will
resolve with credentials for the IAM role associated with containers in an Amazon ECS task. Please
see [IAM Roles for Tasks][iam_roles_for_tasks] for more information on using IAM roles with Amazon
ECS.

A `AwsCredentialIdentityProvider` function created with `fromInstanceMetadata` will return a promise that will
resolve with credentials for the IAM role associated with an EC2 instance.
Please see [IAM Roles for Amazon EC2][iam_roles_for_ec2] for more information on using IAM roles
with Amazon EC2. Both IMDSv1 (a request/response method) and IMDSv2 (a session-oriented method) are
supported.

Please see [Configure the instance metadata service][config_instance_metadata] for more information.

## `fromHttp()`

- Available in browsers & native apps, without the EC2 and Container metadata components.

This creates a provider function that makes a `GET` request to
any provided HTTPS URL. A limited set of HTTP destinations are also accepted.

This is a general form of the `fromContainerMetadata` function.

The server is expected to respond with the following format in JSON:

```ts
type HttpProviderResponse = {
  AccessKeyId: string;
  SecretAccessKey: string;
  Token: string;
  AccountId?: string;
  Expiration: string; // rfc3339
};
```

The acceptable non-HTTPS destinations are described in the validation error if encountered:

```
URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]
```

Node.js:

```js
import { fromHttp } from "@aws-sdk/credential-providers";
// const { fromHttp } = require("@aws-sdk/credential-providers");

const client = new FooClient({
  credentials: fromHttp({
    /**
     * If this value is provided, it will be used as-is.
     */
    awsContainerCredentialsFullUri: "...",
    /**
     * If this value is provided instead of the full URI, it
     * will be appended to the default link local host of 169.254.170.2.
     */
    awsContainerCredentialsRelativeUri: "...",

    /**
     * Will be read on each credentials request to
     * add an Authorization request header value.
     */
    awsContainerAuthorizationTokenFile: "...",

    /**
     * An alternative to awsContainerAuthorizationTokenFile,
     * this is the token value itself.
     */
    awsContainerAuthorizationToken: "...",
  }),
});
```

If not provided in the JavaScript code, the following process envrionment variables will
be read:

```
AWS_CONTAINER_CREDENTIALS_RELATIVE_URI
AWS_CONTAINER_CREDENTIALS_FULL_URI
AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE
AWS_CONTAINER_AUTHORIZATION_TOKEN
```

Browsers:

```js
import { fromHttp } from "@aws-sdk/credential-providers";

const client = new FooClient({
  credentials: fromHttp({
    /**
     * BROWSER ONLY.
     *
     * In browsers, a relative URI is not allowed, and a full URI must be provided.
     * HTTPS is required.
     *
     * This value is required for the browser environment.
     */
    credentialsFullUri: "...",

    /**
     * BROWSER ONLY.
     *
     * Providing this value will set an "Authorization" request
     * header value on the GET request.
     */
    authorizationToken: "...",
  }),
});
```

## `fromIni()`

- May use `@aws-sdk/client-sso` or `@aws-sdk/client-sts` depending
  on how the file is configured.
- Not available in browsers & native apps.

`fromIni` creates `AwsCredentialIdentityProvider` functions that read from a shared credentials file at
`~/.aws/credentials` and a shared configuration file at `~/.aws/config`. Both files are expected to
be INI formatted with section names corresponding to profiles. Sections in the credentials file are
treated as profile names, whereas profile sections in the config file must have the format of
`[profile profile-name]`, except for the default profile. Please see the
[sample files](#sample-files) below for examples of well-formed configuration and credentials files.

Profiles that appear in both files will not be merged, and the version that appears in the
credentials file will be given precedence over the profile found in the config file.

```javascript
import { fromIni } from "@aws-sdk/credential-providers"; // ES6 import
// const { fromIni } = require("@aws-sdk/credential-providers"); // CommonJS import

const client = new FooClient({
  credentials: fromIni({
    // Optional. The configuration profile to use. If not specified, the provider will use the value
    // in the `AWS_PROFILE` environment variable or a default of `default`.
    profile: "profile",
    // Optional. The path to the shared credentials file. If not specified, the provider will use
    // the value in the `AWS_SHARED_CREDENTIALS_FILE` environment variable or a default of
    // `~/.aws/credentials`.
    filepath: "~/.aws/credentials",
    // Optional. The path to the shared config file. If not specified, the provider will use the
    // value in the `AWS_CONFIG_FILE` environment variable or a default of `~/.aws/config`.
    configFilepath: "~/.aws/config",
    // Optional. A function that returns a a promise fulfilled with an MFA token code for the
    // provided MFA Serial code. If a profile requires an MFA code and `mfaCodeProvider` is not a
    // valid function, the credential provider promise will be rejected.
    mfaCodeProvider: async (mfaSerial) => {
      return "token";
    },
    // Optional. Custom STS client configurations overriding the default ones.
    clientConfig: { region },
  }),
});
```

### Sample files

#### `~/.aws/credentials`

```ini
[default]
aws_access_key_id=foo
aws_secret_access_key=bar

[dev]
aws_access_key_id=foo2
aws_secret_access_key=bar2
```

#### `~/.aws/config`

```ini
[default]
aws_access_key_id=foo
aws_secret_access_key=bar

[profile dev]
aws_access_key_id=foo2
aws_secret_access_key=bar2
```

#### profile with source profile

```ini
[second]
aws_access_key_id=foo
aws_secret_access_key=bar

[first]
source_profile=second
role_arn=arn:aws:iam::123456789012:role/example-role-arn
```

#### profile with source provider

You can supply `credential_source` options to tell the SDK where to source credentials for the call
to `AssumeRole`. The supported credential providers are listed below:

```ini
[default]
role_arn=arn:aws:iam::123456789012:role/example-role-arn
credential_source = Ec2InstanceMetadata
```

```ini
[default]
role_arn=arn:aws:iam::123456789012:role/example-role-arn
credential_source = Environment
```

```ini
[default]
role_arn=arn:aws:iam::123456789012:role/example-role-arn
credential_source = EcsContainer
```

#### profile with web_identity_token_file

```ini
[default]
web_identity_token_file=/temp/token
role_arn=arn:aws:iam::123456789012:role/example-role-arn
```

You can specify another profile(`second`) whose credentials are used to assume the role by the
`role_arn` setting in this profile(`first`).

```ini
[second]
web_identity_token_file=/temp/token
role_arn=arn:aws:iam::123456789012:role/example-role-2

[first]
source_profile=second
role_arn=arn:aws:iam::123456789012:role/example-role
```

#### profile with sso credentials

See [`fromSSO()`](#fromsso) fro more information

## `fromEnv()`

- Not available in browser & native apps

```javascript
import { fromEnv } from "@aws-sdk/credential-providers"; // ES6 import
// const { fromEnv } = require("@aws-sdk/credential-providers"); // CommonJS import

const client = new FooClient({
  credentials: fromEnv(),
});
```

`fromEnv` returns a `AwsCredentialIdentityProvider` function, that reads credentials from the following
environment variables:

- `AWS_ACCESS_KEY_ID` - The access key for your AWS account.
- `AWS_SECRET_ACCESS_KEY` - The secret key for your AWS account.
- `AWS_SESSION_TOKEN` - The session key for your AWS account. This is only needed when you are using
  temporarycredentials.
- `AWS_CREDENTIAL_EXPIRATION` - The expiration time of the credentials contained in the environment
  variables described above. This value must be in a format compatible with the
  [ISO-8601 standard][iso8601_standard] and is only needed when you are using temporary credentials.

If either the `AWS_ACCESS_KEY_ID` or `AWS_SECRET_ACCESS_KEY` environment variable is not set or
contains a falsy value, the promise returned by the `fromEnv` function will be rejected.

## `fromProcess()`

- Not available in browsers & native apps

```javascript
import { fromProcess } from "@aws-sdk/credential-providers"; // ES6 import
// const { fromProcess } = require("@aws-sdk/credential-providers"); // CommonJS import

const client = new FooClient({
  credentials: fromProcess({
    // Optional. The configuration profile to use. If not specified, the provider will use the value
    // in the `AWS_PROFILE` environment variable or a default of `default`.
    profile: "profile",
    // Optional. The path to the shared credentials file. If not specified, the provider will use
    // the value in the `AWS_SHARED_CREDENTIALS_FILE` environment variable or a default of
    // `~/.aws/credentials`.
    filepath: "~/.aws/credentials",
    // Optional. The path to the shared config file. If not specified, the provider will use the
    // value in the `AWS_CONFIG_FILE` environment variable or a default of `~/.aws/config`.
    configFilepath: "~/.aws/config",
  }),
});
```

`fromSharedConfigFiles` creates a `AwsCredentialIdentityProvider` functions that executes a given process and
attempt to read its standard output to receive a JSON payload containing the credentials. The
process command is read from a shared credentials file at `~/.aws/credentials` and a shared
configuration file at `~/.aws/config`. Both files are expected to be INI formatted with section
names corresponding to profiles. Sections in the credentials file are treated as profile names,
whereas profile sections in the config file must have the format of`[profile profile-name]`, except
for the default profile. Please see the [sample files](#sample-files-1) below for examples of
well-formed configuration and credentials files.

Profiles that appear in both files will not be merged, and the version that appears in the
credentials file will be given precedence over the profile found in the config file.

### Sample files

#### `~/.aws/credentials`

```ini
[default]
credential_process = /usr/local/bin/awscreds

[dev]
credential_process = /usr/local/bin/awscreds dev
```

#### `~/.aws/config`

```ini
[default]
credential_process = /usr/local/bin/awscreds

[profile dev]
credential_process = /usr/local/bin/awscreds dev
```

## `fromTokenFile()`

- Uses `@aws-sdk/client-sts`
- Not available in browsers & native apps

The function `fromTokenFile` returns `AwsCredentialIdentityProvider` that reads credentials as follows:

- Reads file location of where the OIDC token is stored from either provided option
  `webIdentityTokenFile` or environment variable `AWS_WEB_IDENTITY_TOKEN_FILE`.
- Reads IAM role wanting to be assumed from either provided option `roleArn` or environment
  variable `AWS_ROLE_ARN`.
- Reads optional role session name to be used to distinguish sessions from provided option
  `roleSessionName` or environment variable `AWS_ROLE_SESSION_NAME`. If session name is not defined,
  it comes up with a role session name.
- Reads OIDC token from file on disk.
- Calls sts:AssumeRoleWithWebIdentity via `roleAssumerWithWebIdentity` option to get credentials.

| **Configuration Key** | **Environment Variable**    | **Required** | **Description**                                   |
| --------------------- | --------------------------- | ------------ | ------------------------------------------------- |
| webIdentityTokenFile  | AWS_WEB_IDENTITY_TOKEN_FILE | true         | File location of where the `OIDC` token is stored |
| roleArn               | AWS_ROLE_ARN                | true         | The IAM role wanting to be assumed                |
| roleSessionName       | AWS_ROLE_SESSION_NAME       | false        | The IAM session name used to distinguish sessions |

```javascript
import { fromTokenFile } from "@aws-sdk/credential-providers"; // ES6 import
// const { fromTokenFile } = require("@aws-sdk/credential-providers"); // CommonJS import

const client = new FooClient({
  credentials: fromTokenFile({
    // Optional. STS client config to make the assume role request.
    clientConfig: { region }
  });
});
```

## `fromSSO()`

- Uses `@aws-sdk/client-sso` & `@aws-sdk/client-sso-oidc`
- Not available in browsers & native apps

> This credential provider **ONLY** supports profiles using the SSO credential. If you have a
> profile that assumes a role which derived from the SSO credential, you should use the
> [`fromIni()`](#fromini), or `@aws-sdk/credential-provider-node` package.

`fromSSO`, that creates `AwsCredentialIdentityProvider` functions that read from the _resolved_ access token
from local disk then requests temporary AWS credentials. For guidance on the AWS Single Sign-On
service, please refer to [AWS's Single Sign-On documentation][sso_api].

You can create the `AwsCredentialIdentityProvider` functions using the inline SSO parameters(`ssoStartUrl`,
`ssoAccountId`, `ssoRegion`, `ssoRoleName`) or load them from
[AWS SDKs and Tools shared configuration and credentials files][shared_config_files].
Profiles in the `credentials` file are given precedence over profiles in the `config` file.

This credential provider is intended for use with the AWS SDK for Node.js.

### Supported configuration

You may customize how credentials are resolved by providing an options hash to the `fromSSO` factory
function. You can either load the SSO config from shared INI credential files, or specify the
`ssoStartUrl`, `ssoAccountId`, `ssoRegion`, and `ssoRoleName` directly from the code.

```javascript
import { fromSSO } from "@aws-sdk/credential-providers"; // ES6 import
// const { fromSSO } = require("@aws-sdk/credential-providers") // CommonJS import

const client = new FooClient({
  credentials: fromSSO({
    // Optional. The configuration profile to use. If not specified, the provider will use the value
    // in the `AWS_PROFILE` environment variable or `default` by default.
    profile: "my-sso-profile",
    // Optional. The path to the shared credentials file. If not specified, the provider will use
    // the value in the `AWS_SHARED_CREDENTIALS_FILE` environment variable or a default of
    // `~/.aws/credentials`.
    filepath: "~/.aws/credentials",
    // Optional. The path to the shared config file. If not specified, the provider will use the
    // value in the `AWS_CONFIG_FILE` environment variable or a default of `~/.aws/config`.
    configFilepath: "~/.aws/config",
    // Optional. The URL to the AWS SSO service. Required if any of the `sso*` options(except for
    // `ssoClient`) is provided.
    ssoStartUrl: "https://d-abc123.awsapps.com/start",
    // Optional. The ID of the AWS account to use for temporary credentials. Required if any of the
    // `sso*` options(except for `ssoClient`) is provided.
    ssoAccountId: "1234567890",
    // Optional. The AWS region to use for temporary credentials. Required if any of the `sso*`
    // options(except for `ssoClient`) is provided.
    ssoRegion: "us-east-1",
    // Optional. The name of the AWS role to assume. Required if any of the `sso*` options(except
    // for `ssoClient`) is provided.
    ssoRoleName: "SampleRole",
    // Optional. Overwrite the configuration used construct the SSO service client. If not
    // specified, a default SSO client will be created with the region specified in the profile
    // `sso_region` entry.
    clientConfig: { region },
  }),
});
```

### SSO Login with the AWS CLI

This credential provider relies on the [AWS CLI][cli_sso] to log into an AWS SSO session. Here's a
brief walk-through:

1. Create a new AWS SSO enabled profile using the AWS CLI. It will ask you to login to your AWS SSO
   account and prompt for the name of the profile:

```console
$ aws configure sso
...
...
CLI profile name [123456789011_ReadOnly]: my-sso-profile<ENTER>
```

2. Configure your SDK client with the SSO credential provider:

```javascript
//...
const client = new FooClient({ credentials: fromSSO({ profile: "my-sso-profile" });
```

Alternatively, the SSO credential provider is supported in shared INI credentials provider

```javascript
//...
const client = new FooClient({ credentials: fromIni({ profile: "my-sso-profile" });
```

3. To log out from the current SSO session, use the AWS CLI:

```console
$ aws sso logout
Successfully signed out of all SSO profiles.
```

### Sample files

This credential provider is only applicable if the profile specified in shared configuration and
credentials files contain ALL of the following entries.

#### `~/.aws/credentials`

```ini
[sample-profile]
sso_account_id = 012345678901
sso_region = us-east-1
sso_role_name = SampleRole
sso_start_url = https://d-abc123.awsapps.com/start
```

#### `~/.aws/config`

```ini
[profile sample-profile]
sso_account_id = 012345678901
sso_region = us-east-1
sso_role_name = SampleRole
sso_start_url = https://d-abc123.awsapps.com/start
```

## `fromNodeProviderChain()`

- May use `@aws-sdk/client-sts`, `@aws-sdk/client-sso`, etc. depending on
  which link in the chain finally resolves credentials.
- Not available in browsers & native apps

The credential provider used as default in the Node.js clients, but with default role assumers so
you don't need to import them from STS client and supply them manually. You normally don't need
to use this explicitly in the client constructor. It is useful for utility functions requiring
credentials like S3 presigner, or RDS signer.

This credential provider will attempt to find credentials from the following sources (listed in
order of precedence):

- [Environment variables exposed via `process.env`](#fromenv)
- [SSO credentials from token cache](#fromsso)
- [Web identity token credentials](#fromtokenfile)
- [Shared credentials and config ini files](#fromini)
- [The EC2/ECS Instance Metadata Service](#fromcontainermetadata-and-frominstancemetadata)

This credential provider will invoke one provider at a time and only
continue to the next if no credentials have been located. For example, if
the process finds values defined via the `AWS_ACCESS_KEY_ID` and
`AWS_SECRET_ACCESS_KEY` environment variables, the files at
`~/.aws/credentials` and `~/.aws/config` will not be read, nor will any
messages be sent to the Instance Metadata Service

```js
import { fromNodeProviderChain } from "@aws-sdk/credential-providers"; // ES6 import
// const { fromNodeProviderChain } = require("@aws-sdk/credential-providers") // CommonJS import
const credentialProvider = fromNodeProviderChain({
  //...any input of fromEnv(), fromSSO(), fromTokenFile(), fromIni(),
  // fromProcess(), fromInstanceMetadata(), fromContainerMetadata()
  // Optional. Custom STS client configurations overriding the default ones.
  clientConfig: { region },
});
```

## Add Custom Headers to STS assume-role calls

You can specify the plugins--groups of middleware, to inject to the STS client.
For example, you can inject custom headers to each STS assume-role calls. It's
available in [`fromTemporaryCredentials()`](#fromtemporarycredentials),
[`fromWebToken()`](#fromwebtoken), [`fromTokenFile()`](#fromtokenfile), [`fromIni()`](#fromini).

Code example:

```javascript
const addConfusedDeputyMiddleware = (next) => (args) => {
  args.request.headers["x-amz-source-account"] = account;
  args.request.headers["x-amz-source-arn"] = sourceArn;
  return next(args);
};
const confusedDeputyPlugin = {
  applyToStack: (stack) => {
    stack.add(addConfusedDeputyMiddleware, { step: "finalizeRequest" });
  },
};
const provider = fromTemporaryCredentials({
  // Required. Options passed to STS AssumeRole operation.
  params: {
    RoleArn: "arn:aws:iam::1234567890:role/Role",
  },
  clientPlugins: [confusedDeputyPlugin],
});
```

[getcredentialsforidentity_api]: https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html
[getid_api]: https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetId.html
[assumerole_api]: https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html
[assumerolewithwebidentity_api]: https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html
[iam_roles_for_tasks]: http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html
[iam_roles_for_ec2]: http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html
[config_instance_metadata]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html
[iso8601_standard]: https://en.wikipedia.org/wiki/ISO_8601
[sso_api]: https://aws.amazon.com/single-sign-on/
[shared_config_files]: https://docs.aws.amazon.com/credref/latest/refdocs/creds-config-files.html
[cli_sso]: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html#sso-configure-profile
