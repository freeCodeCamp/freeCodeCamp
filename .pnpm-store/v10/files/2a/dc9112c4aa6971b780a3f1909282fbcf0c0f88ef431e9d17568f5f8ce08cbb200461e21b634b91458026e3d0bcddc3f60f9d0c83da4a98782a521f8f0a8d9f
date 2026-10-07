import type { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
import { CognitoIdentityCredentialProvider as _CognitoIdentityCredentialProvider, FromCognitoIdentityParameters as _FromCognitoIdentityParameters } from "@aws-sdk/credential-provider-cognito-identity";
export interface FromCognitoIdentityParameters extends Omit<_FromCognitoIdentityParameters, "client"> {
    /**
     * Custom client configuration if you need overwrite default Cognito Identity client configuration.
     */
    clientConfig?: CognitoIdentityClientConfig;
}
export type CognitoIdentityCredentialProvider = _CognitoIdentityCredentialProvider;
/**
 * Creates a credential provider function that reetrieves temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from this function call are not cached internally.
 *
 * ```javascript
 * import { fromCognitoIdentity } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromCognitoIdentity } = require("@aws-sdk/credential-providers"); // CommonJS import
 *
 * const client = new FooClient({
 *   region,
 *   credentials: fromCognitoIdentity({
 *     // Required. The unique identifier for the identity against which credentials
 *     // will be issued.
 *     identityId: "us-east-1:128d0a74-c82f-4553-916d-90053e4a8b0f"
 *     // optional. The ARN of the role to be assumed when multiple roles were
 *     // received in the token from the identity provider.
 *     customRoleArn: "arn:aws:iam::1234567890:role/MYAPP-CognitoIdentity"
 *     // Optional. A set of name-value pairs that map provider names to provider
 *     // tokens. Required when using identities associated with external identity
 *     // providers such as Facebook.
 *     logins: {
 *       "graph.facebook.com": "FBTOKEN",
 *       "www.amazon.com": "AMAZONTOKEN",
 *       "accounts.google.com": "GOOGLETOKEN",
 *       "api.twitter.com": "TWITTERTOKEN'",
 *       "www.digits.com": "DIGITSTOKEN"
 *     },
 *     // Optional. Custom client configuration if you need overwrite default Cognito Identity client configuration.
 *     clientConfig: { region }
 *   }),
 * });
 * ```
 */
export declare const fromCognitoIdentity: (options: FromCognitoIdentityParameters) => _CognitoIdentityCredentialProvider;
