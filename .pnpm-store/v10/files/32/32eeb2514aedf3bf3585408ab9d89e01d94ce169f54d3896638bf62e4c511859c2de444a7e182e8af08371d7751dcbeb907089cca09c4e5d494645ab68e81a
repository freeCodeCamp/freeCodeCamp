import {
  AwsCredentialIdentity,
  AwsCredentialIdentityProvider,
  HttpAuthScheme,
} from "@smithy/types";
import { CognitoIdentityHttpAuthSchemeProvider } from "./httpAuthSchemeProvider";
export interface HttpAuthExtensionConfiguration {
  setHttpAuthScheme(httpAuthScheme: HttpAuthScheme): void;
  httpAuthSchemes(): HttpAuthScheme[];
  setHttpAuthSchemeProvider(
    httpAuthSchemeProvider: CognitoIdentityHttpAuthSchemeProvider
  ): void;
  httpAuthSchemeProvider(): CognitoIdentityHttpAuthSchemeProvider;
  setCredentials(
    credentials: AwsCredentialIdentity | AwsCredentialIdentityProvider
  ): void;
  credentials():
    | AwsCredentialIdentity
    | AwsCredentialIdentityProvider
    | undefined;
}
export type HttpAuthRuntimeConfig = Partial<{
  httpAuthSchemes: HttpAuthScheme[];
  httpAuthSchemeProvider: CognitoIdentityHttpAuthSchemeProvider;
  credentials: AwsCredentialIdentity | AwsCredentialIdentityProvider;
}>;
export declare const getHttpAuthExtensionConfiguration: (
  runtimeConfig: HttpAuthRuntimeConfig
) => HttpAuthExtensionConfiguration;
export declare const resolveHttpAuthRuntimeConfig: (
  config: HttpAuthExtensionConfiguration
) => HttpAuthRuntimeConfig;
