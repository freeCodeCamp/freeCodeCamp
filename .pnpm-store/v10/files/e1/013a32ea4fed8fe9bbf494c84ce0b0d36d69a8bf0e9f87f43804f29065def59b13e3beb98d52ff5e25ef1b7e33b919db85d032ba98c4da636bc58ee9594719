import { FromEnvInit } from "@aws-sdk/credential-provider-env";
import { AwsCredentialIdentityProvider } from "@smithy/types";
/**
 * Create a credential provider that reads credentials from the following environment variables:
 *
 * - `AWS_ACCESS_KEY_ID` - The access key for your AWS account.
 * - `AWS_SECRET_ACCESS_KEY` - The secret key for your AWS account.
 * - `AWS_SESSION_TOKEN` - The session key for your AWS account. This is only
 *   needed when you are using temporary credentials.
 * - `AWS_CREDENTIAL_EXPIRATION` - The expiration time of the credentials contained
 *   in the environment variables described above. This value must be in a format
 *   compatible with the [ISO-8601 standard](https://en.wikipedia.org/wiki/ISO_8601)
 *   and is only needed when you are using temporary credentials.
 *
 * If either the `AWS_ACCESS_KEY_ID` or `AWS_SECRET_ACCESS_KEY` environment variable is not set or contains a falsy
 * value, the promise returned by the `fromEnv` function will be rejected.
 *
 * ```javascript
 * import { fromEnv } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromEnv } = require("@aws-sdk/credential-providers"); // CommonJS import
 *
 * const client = new DynamoDBClient({
 *   credentials: fromEnv(),
 * });
 * ```
 */
export declare const fromEnv: (init?: FromEnvInit) => AwsCredentialIdentityProvider;
