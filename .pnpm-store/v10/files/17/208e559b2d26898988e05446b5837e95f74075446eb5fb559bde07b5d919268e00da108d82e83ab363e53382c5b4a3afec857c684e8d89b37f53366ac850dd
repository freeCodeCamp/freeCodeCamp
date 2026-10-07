import type { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
import { CognitoIdentityCredentialProvider, FromCognitoIdentityPoolParameters as _FromCognitoIdentityPoolParameters } from "@aws-sdk/credential-provider-cognito-identity";
export interface FromCognitoIdentityPoolParameters extends Omit<_FromCognitoIdentityPoolParameters, "client"> {
    clientConfig?: CognitoIdentityClientConfig;
}
/**
 * Creates a credential provider function that retrieves or generates a unique identifier using Amazon Cognito's `GetId`
 * operation, then generates temporary AWS credentials using Amazon Cognito's `GetCredentialsForIdentity` operation.
 *
 * Results from `GetId` are cached internally, but results from `GetCredentialsForIdentity` are not.
 *
 * ```javascript
 * import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromCognitoIdentityPool } = require("@aws-sdk/credential-providers"); // CommonJS import
 *
 * const client = new FooClient({
 *   region,
 *   credentials: fromCognitoIdentityPool({
 *     // Required. The unique identifier for the identity pool from which an identity should be retrieved or generated.
 *     identityPoolId: "us-east-1:1699ebc0-7900-4099-b910-2df94f52a030";
 *     // Optional. A standard AWS account ID (9+ digits)
 *     accountId: "123456789",
 *     // Optional. A cache in which to store resolved Cognito IdentityIds.
 *     cache: custom_storage,
 *     // Optional. A unique identifier for the user used to cache Cognito IdentityIds on a per-user basis.
 *     userIdentifier: "user_0",
 *     // optional. The ARN of the role to be assumed when multiple roles were
 *     // received in the token from the identity provider.
 *     customRoleArn: "arn:aws:iam::1234567890:role/MYAPP-CognitoIdentity"
 *     // Optional. A set of name-value pairs that map provider names to provider
 *     // tokens. Required when using identities associated with external identity
 *     // providers such as Facebook.
 *     logins: {
 *       'graph.facebook.com': 'FBTOKEN',
 *       'www.amazon.com': 'AMAZONTOKEN',
 *       'accounts.google.com': 'GOOGLETOKEN',
 *       'api.twitter.com': 'TWITTERTOKEN',
 *       'www.digits.com': 'DIGITSTOKEN'
 *     },
 *     // Optional. Custom client configuration if you need overwrite default Cognito Identity client configuration.
 *     client: new CognitoIdentityClient({ region })
 *   }),
 * });
 * ```
 */
export declare const fromCognitoIdentityPool: (options: FromCognitoIdentityPoolParameters) => CognitoIdentityCredentialProvider;
