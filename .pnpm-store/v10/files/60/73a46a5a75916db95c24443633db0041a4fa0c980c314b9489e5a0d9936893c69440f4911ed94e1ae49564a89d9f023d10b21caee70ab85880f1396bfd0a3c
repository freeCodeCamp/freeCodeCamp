import { FromIniInit } from "@aws-sdk/credential-provider-ini";
import { AwsCredentialIdentityProvider } from "@smithy/types";
/**
 * Creates a credential provider function that reads from a shared credentials file at `~/.aws/credentials` and a
 * shared configuration file at `~/.aws/config`. Both files are expected to be INI formatted with section names
 * corresponding to profiles. Sections in the credentials file are treated as profile names, whereas profile sections in
 * the config file must have the format of`[profile profile-name]`, except for the default profile.
 *
 * Profiles that appear in both files will not be merged, and the version that appears in the credentials file will be
 * given precedence over the profile found in the config file.
 *
 * ```javascript
 * import { fromIni } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromIni } = require("@aws-sdk/credential-providers"); // CommonJS import
 *
 * const client = new FooClient({
 *   credentials: fromIni({
 *     // Optional. The configuration profile to use. If not specified, the provider will use the value in the
 *     // `AWS_PROFILE` environment variable or a default of `default`.
 *     profile: "profile",
 *     // Optional. The path to the shared credentials file. If not specified, the provider will use the value in the
 *     // `AWS_SHARED_CREDENTIALS_FILE` environment variable or a default of `~/.aws/credentials`.
 *     filepath: "~/.aws/credentials",
 *     // Optional. The path to the shared config file. If not specified, the provider will use the value in the
 *     // `AWS_CONFIG_FILE` environment variable or a default of `~/.aws/config`.
 *     configFilepath: "~/.aws/config",
 *     // Optional. A function that returns a a promise fulfilled with an MFA token code for the provided MFA Serial
 *     // code. If a profile requires an MFA code and `mfaCodeProvider` is not a valid function, the credential provider
 *     // promise will be rejected.
 *     mfaCodeProvider: async (mfaSerial) => {
 *       return "token";
 *     },
 *     // Optional. Custom STS client configurations overriding the default ones.
 *     clientConfig: { region },
 *     // Optional. Custom STS client middleware plugin to modify the client default behavior.
 *     // e.g. adding custom headers.
 *     clientPlugins: [addFooHeadersPlugin],
 *   }),
 * });
 * ```
 */
export declare const fromIni: (init?: FromIniInit) => AwsCredentialIdentityProvider;
