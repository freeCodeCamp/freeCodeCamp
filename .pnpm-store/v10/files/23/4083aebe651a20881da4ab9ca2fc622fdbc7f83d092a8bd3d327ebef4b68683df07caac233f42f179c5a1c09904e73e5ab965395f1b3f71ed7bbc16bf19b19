import { CredentialProviderOptions, TokenIdentity, TokenIdentityProvider } from "@aws-sdk/types";
export interface FromStaticInit extends CredentialProviderOptions {
    token?: TokenIdentity;
}
/**
 * Creates a token provider that will read from static token.
 */
export declare const fromStatic: ({ token, logger }: FromStaticInit) => TokenIdentityProvider;
