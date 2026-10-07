import { FromProcessInit } from "@aws-sdk/credential-provider-process";
import { AwsCredentialIdentityProvider } from "@smithy/types";
/**
 * Creates a credential provider function that executes a given process and attempt to read its standard output to
 * receive a JSON payload containing the credentials.
 *
 * ```javascript
 * import { fromProcess } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromProcess } = require("@aws-sdk/credential-providers"); // CommonJS import
 *
 * const client = new FooClient({
 *   credentials: fromProcess({
 *     // Optional. The configuration profile to use. If not specified, the provider will use the value in the
 *     // `AWS_PROFILE` environment variable or a default of `default`.
 *     profile: "profile",
 *     // Optional. The path to the shared credentials file. If not specified, the provider will use the value in the
 *     // `AWS_SHARED_CREDENTIALS_FILE` environment variable or a default of `~/.aws/credentials`.
 *     filepath: "~/.aws/credentials",
 *     // Optional. The path to the shared config file. If not specified, the provider will use the value in the
 *     // `AWS_CONFIG_FILE` environment variable or a default of `~/.aws/config`.
 *     configFilepath: "~/.aws/config",
 *   }),
 * });
 * ```
 */
export declare const fromProcess: (init?: FromProcessInit) => AwsCredentialIdentityProvider;
