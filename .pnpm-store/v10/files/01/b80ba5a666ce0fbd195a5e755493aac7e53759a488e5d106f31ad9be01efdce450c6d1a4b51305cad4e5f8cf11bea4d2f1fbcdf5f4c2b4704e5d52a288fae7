import { Logger } from "@smithy/types";
/**
 * @internal
 */
export declare const DEFAULT_TIMEOUT = 1000;
/**
 * @internal
 */
export declare const DEFAULT_MAX_RETRIES = 0;
/**
 * @public
 */
export interface RemoteProviderConfig {
    /**
     * The connection timeout (in milliseconds)
     */
    timeout: number;
    /**
     * The maximum number of times the HTTP connection should be retried
     */
    maxRetries: number;
}
/**
 * @public
 */
export interface RemoteProviderInit extends Partial<RemoteProviderConfig> {
    logger?: Logger;
    /**
     * Only used in the IMDS credential provider.
     */
    ec2MetadataV1Disabled?: boolean;
    /**
     * AWS_PROFILE.
     */
    profile?: string;
}
/**
 * @internal
 */
export declare const providerConfigFromInit: ({ maxRetries, timeout, }: RemoteProviderInit) => RemoteProviderConfig;
