import { Identity, IdentityProvider } from "../identity/identity";
import { HttpAuthSchemeId } from "./HttpAuthScheme";
/**
 * Interface to get an IdentityProvider for a specified HttpAuthScheme
 * @internal
 */
export interface IdentityProviderConfig {
    /**
     * Get the IdentityProvider for a specified HttpAuthScheme.
     * @param schemeId schemeId of the HttpAuthScheme
     * @returns IdentityProvider or undefined if HttpAuthScheme is not found
     */
    getIdentityProvider(schemeId: HttpAuthSchemeId): IdentityProvider<Identity> | undefined;
}
