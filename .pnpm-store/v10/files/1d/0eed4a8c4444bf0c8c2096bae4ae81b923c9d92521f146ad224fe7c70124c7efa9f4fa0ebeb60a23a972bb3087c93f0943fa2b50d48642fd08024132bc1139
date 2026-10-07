import { AwsSdkSigV4AuthInputConfig, AwsSdkSigV4AuthResolvedConfig, AwsSdkSigV4PreviouslyResolved } from "@aws-sdk/core";
import { HandlerExecutionContext, HttpAuthScheme, HttpAuthSchemeParameters, HttpAuthSchemeParametersProvider, HttpAuthSchemeProvider } from "@smithy/types";
import { SSOOIDCClientResolvedConfig } from "../SSOOIDCClient";
/**
 * @internal
 */
export interface SSOOIDCHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
    region?: string;
}
/**
 * @internal
 */
export interface SSOOIDCHttpAuthSchemeParametersProvider extends HttpAuthSchemeParametersProvider<SSOOIDCClientResolvedConfig, HandlerExecutionContext, SSOOIDCHttpAuthSchemeParameters, object> {
}
/**
 * @internal
 */
export declare const defaultSSOOIDCHttpAuthSchemeParametersProvider: (config: SSOOIDCClientResolvedConfig, context: HandlerExecutionContext, input: object) => Promise<SSOOIDCHttpAuthSchemeParameters>;
/**
 * @internal
 */
export interface SSOOIDCHttpAuthSchemeProvider extends HttpAuthSchemeProvider<SSOOIDCHttpAuthSchemeParameters> {
}
/**
 * @internal
 */
export declare const defaultSSOOIDCHttpAuthSchemeProvider: SSOOIDCHttpAuthSchemeProvider;
/**
 * @internal
 */
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig {
    /**
     * experimentalIdentityAndAuth: Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
     * @internal
     */
    httpAuthSchemes?: HttpAuthScheme[];
    /**
     * experimentalIdentityAndAuth: Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
     * @internal
     */
    httpAuthSchemeProvider?: SSOOIDCHttpAuthSchemeProvider;
}
/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig extends AwsSdkSigV4AuthResolvedConfig {
    /**
     * experimentalIdentityAndAuth: Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
     * @internal
     */
    readonly httpAuthSchemes: HttpAuthScheme[];
    /**
     * experimentalIdentityAndAuth: Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
     * @internal
     */
    readonly httpAuthSchemeProvider: SSOOIDCHttpAuthSchemeProvider;
}
/**
 * @internal
 */
export declare const resolveHttpAuthSchemeConfig: <T>(config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved) => T & HttpAuthSchemeResolvedConfig;
