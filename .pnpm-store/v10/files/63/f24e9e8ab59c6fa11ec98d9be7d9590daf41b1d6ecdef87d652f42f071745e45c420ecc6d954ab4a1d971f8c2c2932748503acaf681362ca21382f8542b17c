import { CredentialProviderOptions } from "@aws-sdk/types";
import type { AwsCredentialIdentityProvider } from "@smithy/types";
import { FromWebTokenInit } from "./fromWebToken";
/**
 * @public
 */
export interface FromTokenFileInit extends Partial<Omit<FromWebTokenInit, "webIdentityToken">>, CredentialProviderOptions {
    /**
     * File location of where the `OIDC` token is stored.
     */
    webIdentityTokenFile?: string;
}
/**
 * @internal
 *
 * Represents OIDC credentials from a file on disk.
 */
export declare const fromTokenFile: (init?: FromTokenFileInit) => AwsCredentialIdentityProvider;
