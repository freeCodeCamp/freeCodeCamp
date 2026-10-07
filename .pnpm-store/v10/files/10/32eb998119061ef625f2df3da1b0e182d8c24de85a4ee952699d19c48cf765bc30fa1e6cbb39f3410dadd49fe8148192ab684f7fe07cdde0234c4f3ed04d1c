import { ChecksumConfiguration } from "./checksum";
/**
 * @deprecated will be replaced by DefaultExtensionConfiguration.
 * @internal
 *
 * Default client configuration consisting various configurations for modifying a service client
 */
export interface DefaultClientConfiguration extends ChecksumConfiguration {
}
/**
 * @deprecated will be removed for implicit type.
 */
type GetDefaultConfigurationType = (runtimeConfig: any) => DefaultClientConfiguration;
/**
 * @deprecated moving to @smithy/smithy-client.
 * @internal
 *
 * Helper function to resolve default client configuration from runtime config
 *
 */
export declare const getDefaultClientConfiguration: GetDefaultConfigurationType;
/**
 * @deprecated will be removed for implicit type.
 */
type ResolveDefaultRuntimeConfigType = (clientConfig: DefaultClientConfiguration) => any;
/**
 * @deprecated moving to @smithy/smithy-client.
 * @internal
 *
 * Helper function to resolve runtime config from default client configuration
 */
export declare const resolveDefaultRuntimeConfig: ResolveDefaultRuntimeConfigType;
export {};
