import { CredentialsProviderError } from "@smithy/property-provider";
/**
 * @public
 *
 * A specific sub-case of CredentialsProviderError, when the IMDSv1 fallback
 * has been attempted but shut off by SDK configuration.
 */
export declare class InstanceMetadataV1FallbackError extends CredentialsProviderError {
    readonly tryNextLink: boolean;
    name: string;
    constructor(message: string, tryNextLink?: boolean);
}
