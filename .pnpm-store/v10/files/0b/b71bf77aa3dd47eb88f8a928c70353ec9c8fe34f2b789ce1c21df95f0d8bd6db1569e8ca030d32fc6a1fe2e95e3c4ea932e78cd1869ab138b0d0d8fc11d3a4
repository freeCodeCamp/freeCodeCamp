import type { CredentialProviderOptions } from "@aws-sdk/types";
import { AwsCredentialIdentityProvider } from "@smithy/types";
/**
 * @internal
 *
 * Resolve the `credential_source` entry from the profile, and return the
 * credential providers respectively. No memoization is needed for the
 * credential source providers because memoization should be added outside the
 * fromIni() provider. The source credential needs to be refreshed every time
 * fromIni() is called.
 */
export declare const resolveCredentialSource: (credentialSource: string, profileName: string) => (options?: CredentialProviderOptions) => Promise<AwsCredentialIdentityProvider>;
