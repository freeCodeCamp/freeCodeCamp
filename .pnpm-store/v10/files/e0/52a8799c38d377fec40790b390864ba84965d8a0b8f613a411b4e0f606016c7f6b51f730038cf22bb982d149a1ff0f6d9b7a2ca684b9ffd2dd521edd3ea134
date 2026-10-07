import { FromWebTokenInit } from "@aws-sdk/credential-provider-web-identity";
import type { AwsCredentialIdentityProvider } from "@smithy/types";
/**
 * Creates a credential provider function that gets credentials calling STS
 * AssumeRoleWithWebIdentity API.
 *
 * ```javascript
 * import { fromWebToken } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromWebToken } = require("@aws-sdk/credential-providers"); // CommonJS import
 *
 * const dynamodb = new DynamoDBClient({
 *   region,
 *   credentials: fromWebToken({
 *     // Required. ARN of the role that the caller is assuming.
 *     roleArn: "arn:aws:iam::1234567890:role/RoleA",
 *     // Required. The OAuth 2.0 access token or OpenID Connect ID token that is provided by the identity provider.
 *     webIdentityToken: await openIdProvider()
 *     // Optional. Custom STS client configurations overriding the default ones.
 *     clientConfig: { region }
 *     // Optional. Custom STS client middleware plugin to modify the client default behavior.
 *     // e.g. adding custom headers.
 *     clientPlugins: [addFooHeadersPlugin],
 *     // Optional. A function that assumes a role with web identity and returns a promise fulfilled with credentials for
 *     // the assumed role.
 *     roleAssumerWithWebIdentity,
 *     // Optional. An identifier for the assumed role session.
 *     roleSessionName: "session_123",
 *     // Optional. The fully qualified host component of the domain name of the identity provider.
 *     providerId: "graph.facebook.com",
 *     // Optional. ARNs of the IAM managed policies that you want to use as managed session.
 *     policyArns: [{arn: "arn:aws:iam::1234567890:policy/SomePolicy"}],
 *     // Optional. An IAM policy in JSON format that you want to use as an inline session policy.
 *     policy: "JSON_STRING",
 *     // Optional. The duration, in seconds, of the role session. Default to 3600.
 *     durationSeconds: 7200
 *   }),
 * });
 * ```
 */
export declare const fromWebToken: (init: FromWebTokenInit) => AwsCredentialIdentityProvider;
