import { HttpAuthSchemeId, Identity, IdentityProvider, IdentityProviderConfig } from "@smithy/types";
/**
 * Default implementation of IdentityProviderConfig
 * @internal
 */
export declare class DefaultIdentityProviderConfig implements IdentityProviderConfig {
    private authSchemes;
    /**
     * Creates an IdentityProviderConfig with a record of scheme IDs to identity providers.
     *
     * @param config scheme IDs and identity providers to configure
     */
    constructor(config: Record<HttpAuthSchemeId, IdentityProvider<Identity> | undefined>);
    getIdentityProvider(schemeId: HttpAuthSchemeId): IdentityProvider<Identity> | undefined;
}
