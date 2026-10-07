import { Identity, IdentityProvider } from "../identity/identity";
import { HandlerExecutionContext } from "../middleware";
import { HttpSigner } from "./HttpSigner";
import { IdentityProviderConfig } from "./IdentityProviderConfig";
/**
 * ID for {@link HttpAuthScheme}
 * @internal
 */
export type HttpAuthSchemeId = string;
/**
 * Interface that defines an HttpAuthScheme
 * @internal
 */
export interface HttpAuthScheme {
    /**
     * ID for an HttpAuthScheme, typically the absolute shape ID of a Smithy auth trait.
     */
    schemeId: HttpAuthSchemeId;
    /**
     * Gets the IdentityProvider corresponding to an HttpAuthScheme.
     */
    identityProvider(config: IdentityProviderConfig): IdentityProvider<Identity> | undefined;
    /**
     * HttpSigner corresponding to an HttpAuthScheme.
     */
    signer: HttpSigner;
}
/**
 * Interface that defines the identity and signing properties when selecting
 * an HttpAuthScheme.
 * @internal
 */
export interface HttpAuthOption {
    schemeId: HttpAuthSchemeId;
    identityProperties?: Record<string, unknown>;
    signingProperties?: Record<string, unknown>;
    propertiesExtractor?: <TConfig extends object, TContext extends HandlerExecutionContext>(config: TConfig, context: TContext) => {
        identityProperties?: Record<string, unknown>;
        signingProperties?: Record<string, unknown>;
    };
}
/**
 * @internal
 */
export interface SelectedHttpAuthScheme {
    httpAuthOption: HttpAuthOption;
    identity: Identity;
    signer: HttpSigner;
}
