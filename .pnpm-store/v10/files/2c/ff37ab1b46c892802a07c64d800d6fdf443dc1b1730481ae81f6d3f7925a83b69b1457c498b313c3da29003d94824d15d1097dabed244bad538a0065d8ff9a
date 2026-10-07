import { AwsSdkSigV4AuthInputConfig, AwsSdkSigV4AuthResolvedConfig, AwsSdkSigV4PreviouslyResolved } from "@aws-sdk/core";
import { HandlerExecutionContext, HttpAuthScheme, HttpAuthSchemeParameters, HttpAuthSchemeParametersProvider, HttpAuthSchemeProvider } from "@smithy/types";
import { SSOClientResolvedConfig } from "../SSOClient";
/**
 * @internal
 */
export interface SSOHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
    region?: string;
}
/**
 * @internal
 */
export interface SSOHttpAuthSchemeParametersProvider extends HttpAuthSchemeParametersProvider<SSOClientResolvedConfig, HandlerExecutionContext, SSOHttpAuthSchemeParameters, object> {
}
/**
 * @internal
 */
export declare const defaultSSOHttpAuthSchemeParametersProvider: (config: SSOClientResolvedConfig, context: HandlerExecutionContext, input: object) => Promise<SSOHttpAuthSchemeParameters>;
/**
 * @internal
 */
export interface SSOHttpAuthSchemeProvider extends HttpAuthSchemeProvider<SSOHttpAuthSchemeParameters> {
}
/**
 * @internal
 */
export declare const defaultSSOHttpAuthSchemeProvider: SSOHttpAuthSchemeProvider;
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
    httpAuthSchemeProvider?: SSOHttpAuthSchemeProvider;
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
    readonly httpAuthSchemeProvider: SSOHttpAuthSchemeProvider;
}
/**
 * @internal
 */
export declare const resolveHttpAuthSchemeConfig: <T>(config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved) => T & HttpAuthSchemeResolvedConfig;
