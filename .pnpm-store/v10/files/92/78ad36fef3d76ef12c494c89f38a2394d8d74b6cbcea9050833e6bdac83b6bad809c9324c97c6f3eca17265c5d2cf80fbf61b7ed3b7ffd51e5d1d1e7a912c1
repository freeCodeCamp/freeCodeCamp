import { AwsSdkSigV4AuthInputConfig, AwsSdkSigV4AuthResolvedConfig, AwsSdkSigV4PreviouslyResolved } from "@aws-sdk/core";
import { HandlerExecutionContext, HttpAuthScheme, HttpAuthSchemeParameters, HttpAuthSchemeParametersProvider, HttpAuthSchemeProvider } from "@smithy/types";
import { CognitoIdentityClientResolvedConfig } from "../CognitoIdentityClient";
/**
 * @internal
 */
export interface CognitoIdentityHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
    region?: string;
}
/**
 * @internal
 */
export interface CognitoIdentityHttpAuthSchemeParametersProvider extends HttpAuthSchemeParametersProvider<CognitoIdentityClientResolvedConfig, HandlerExecutionContext, CognitoIdentityHttpAuthSchemeParameters, object> {
}
/**
 * @internal
 */
export declare const defaultCognitoIdentityHttpAuthSchemeParametersProvider: (config: CognitoIdentityClientResolvedConfig, context: HandlerExecutionContext, input: object) => Promise<CognitoIdentityHttpAuthSchemeParameters>;
/**
 * @internal
 */
export interface CognitoIdentityHttpAuthSchemeProvider extends HttpAuthSchemeProvider<CognitoIdentityHttpAuthSchemeParameters> {
}
/**
 * @internal
 */
export declare const defaultCognitoIdentityHttpAuthSchemeProvider: CognitoIdentityHttpAuthSchemeProvider;
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
    httpAuthSchemeProvider?: CognitoIdentityHttpAuthSchemeProvider;
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
    readonly httpAuthSchemeProvider: CognitoIdentityHttpAuthSchemeProvider;
}
/**
 * @internal
 */
export declare const resolveHttpAuthSchemeConfig: <T>(config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved) => T & HttpAuthSchemeResolvedConfig;
