import { FromSSOInit } from "@aws-sdk/credential-provider-sso";
import { AwsCredentialIdentityProvider } from "@smithy/types";
/**
 * Creates a credential provider function that reads from the _resolved_ access token from local disk then requests
 * temporary AWS credentials.
 *
 * You can create the `AwsCredentialIdentityProvider` functions using the inline SSO parameters(`ssoStartUrl`, `ssoAccountId`,
 * `ssoRegion`, `ssoRoleName`) or load them from [AWS SDKs and Tools shared configuration and credentials files](https://docs.aws.amazon.com/credref/latest/refdocs/creds-config-files.html).
 * Profiles in the `credentials` file are given precedence over profiles in the `config` file.
 *
 * ```javascript
 * import { fromSSO } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromSSO } = require(@aws-sdk/credential-providers") // CommonJS import
 *
 * const client = new FooClient({
 *   credentials: fromSSO({
 *     // Optional. The configuration profile to use. If not specified, the provider will use the value in the
 *     // `AWS_PROFILE` environment variable or `default` by default.
 *     profile: "my-sso-profile",
 *     // Optional. The path to the shared credentials file. If not specified, the provider will use the value in the
 *     // `AWS_SHARED_CREDENTIALS_FILE` environment variable or a default of `~/.aws/credentials`.
 *     filepath: "~/.aws/credentials",
 *     // Optional. The path to the shared config file. If not specified, the provider will use the value in the
 *     // `AWS_CONFIG_FILE` environment variable or a default of `~/.aws/config`.
 *     configFilepath: "~/.aws/config",
 *     // Optional. The URL to the AWS SSO service. Required if any of the `sso*` options(except for `ssoClient`) is
 *     // provided.
 *     ssoStartUrl: "https://d-abc123.awsapps.com/start",
 *     // Optional. The ID of the AWS account to use for temporary credentials. Required if any of the `sso*`
 *     // options(except for `ssoClient`) is provided.
 *     ssoAccountId: "1234567890",
 *     // Optional. The AWS region to use for temporary credentials. Required if any of the `sso*` options(except for
 *     // `ssoClient`) is provided.
 *     ssoRegion: "us-east-1",
 *     // Optional. The name of the AWS role to assume. Required if any of the `sso*` options(except for `ssoClient`) is
 *     // provided.
 *     ssoRoleName: "SampleRole",
 *     // Optional. Overwrite the configuration used construct the SSO service client.
 *     clientConfig: { region },
 *   }),
 * });
 * ```
 */
export declare const fromSSO: (init?: FromSSOInit) => AwsCredentialIdentityProvider;
