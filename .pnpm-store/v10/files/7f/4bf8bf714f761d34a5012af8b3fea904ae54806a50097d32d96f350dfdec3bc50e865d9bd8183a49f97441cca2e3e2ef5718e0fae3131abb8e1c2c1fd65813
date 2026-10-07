import {
  AwsSdkSigV4AuthInputConfig,
  AwsSdkSigV4AuthResolvedConfig,
  AwsSdkSigV4PreviouslyResolved,
} from "@aws-sdk/core";
import {
  Client,
  HandlerExecutionContext,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
} from "@smithy/types";
import { STSClientResolvedConfig } from "../STSClient";
export interface STSHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}
export interface STSHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    STSClientResolvedConfig,
    HandlerExecutionContext,
    STSHttpAuthSchemeParameters,
    object
  > {}
export declare const defaultSTSHttpAuthSchemeParametersProvider: (
  config: STSClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
) => Promise<STSHttpAuthSchemeParameters>;
export interface STSHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<STSHttpAuthSchemeParameters> {}
export declare const defaultSTSHttpAuthSchemeProvider: STSHttpAuthSchemeProvider;
export interface StsAuthInputConfig {}
export interface StsAuthResolvedConfig {
  stsClientCtor: new (clientConfig: any) => Client<any, any, any>;
}
export declare const resolveStsAuthConfig: <T>(
  input: T & StsAuthInputConfig
) => T & StsAuthResolvedConfig;
export interface HttpAuthSchemeInputConfig
  extends StsAuthInputConfig,
    AwsSdkSigV4AuthInputConfig {
  httpAuthSchemes?: HttpAuthScheme[];
  httpAuthSchemeProvider?: STSHttpAuthSchemeProvider;
}
export interface HttpAuthSchemeResolvedConfig
  extends StsAuthResolvedConfig,
    AwsSdkSigV4AuthResolvedConfig {
  readonly httpAuthSchemes: HttpAuthScheme[];
  readonly httpAuthSchemeProvider: STSHttpAuthSchemeProvider;
}
export declare const resolveHttpAuthSchemeConfig: <T>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved
) => T & HttpAuthSchemeResolvedConfig;
