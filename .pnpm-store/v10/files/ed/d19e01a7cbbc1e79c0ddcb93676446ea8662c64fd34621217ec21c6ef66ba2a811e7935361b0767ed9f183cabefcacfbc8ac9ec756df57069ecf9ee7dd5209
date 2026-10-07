import { CognitoIdentityExtensionConfiguration } from "./extensionConfiguration";
export interface RuntimeExtension {
  configure(
    extensionConfiguration: CognitoIdentityExtensionConfiguration
  ): void;
}
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}
export declare const resolveRuntimeExtensions: (
  runtimeConfig: any,
  extensions: RuntimeExtension[]
) => any;
