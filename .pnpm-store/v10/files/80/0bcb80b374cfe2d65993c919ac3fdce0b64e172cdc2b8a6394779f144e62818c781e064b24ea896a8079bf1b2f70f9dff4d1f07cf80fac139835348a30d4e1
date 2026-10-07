import { CredentialProviderOptions, TokenIdentityProvider } from "@aws-sdk/types";
import { SourceProfileInit } from "@smithy/shared-ini-file-loader";
export interface FromSsoInit extends SourceProfileInit, CredentialProviderOptions {
}
/**
 * Creates a token provider that will read from SSO token cache or ssoOidc.createToken() call.
 */
export declare const fromSso: (init?: FromSsoInit) => TokenIdentityProvider;
