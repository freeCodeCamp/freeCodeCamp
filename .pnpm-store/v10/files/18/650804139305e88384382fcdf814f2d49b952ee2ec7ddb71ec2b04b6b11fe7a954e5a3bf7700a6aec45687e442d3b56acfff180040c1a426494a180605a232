import {
  AwsSdkSigV4AuthInputConfig,
  AwsSdkSigV4AuthResolvedConfig,
  AwsSdkSigV4PreviouslyResolved,
} from "@aws-sdk/core";
import {
  HandlerExecutionContext,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
} from "@smithy/types";
import { SSOClientResolvedConfig } from "../SSOClient";
export interface SSOHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}
export interface SSOHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    SSOClientResolvedConfig,
    HandlerExecutionContext,
    SSOHttpAuthSchemeParameters,
    object
  > {}
export declare const defaultSSOHttpAuthSchemeParametersProvider: (
  config: SSOClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
) => Promise<SSOHttpAuthSchemeParameters>;
export interface SSOHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<SSOHttpAuthSchemeParameters> {}
export declare const defaultSSOHttpAuthSchemeProvider: SSOHttpAuthSchemeProvider;
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig {
  httpAuthSchemes?: HttpAuthScheme[];
  httpAuthSchemeProvider?: SSOHttpAuthSchemeProvider;
}
export interface HttpAuthSchemeResolvedConfig
  extends AwsSdkSigV4AuthResolvedConfig {
  readonly httpAuthSchemes: HttpAuthScheme[];
  readonly httpAuthSchemeProvider: SSOHttpAuthSchemeProvider;
}
export declare const resolveHttpAuthSchemeConfig: <T>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved
) => T & HttpAuthSchemeResolvedConfig;
