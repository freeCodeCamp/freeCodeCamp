import { Logger, Provider } from "@smithy/types";
import { InstanceMetadataCredentials } from "../types";
/**
 * @internal
 *
 * IMDS credential supports static stability feature. When used, the expiration
 * of recently issued credentials is extended. The server side allows using
 * the recently expired credentials. This mitigates impact when clients using
 * refreshable credentials are unable to retrieve updates.
 *
 * @param provider Credential provider
 * @returns A credential provider that supports static stability
 */
export declare const staticStabilityProvider: (provider: Provider<InstanceMetadataCredentials>, options?: {
    logger?: Logger | undefined;
}) => Provider<InstanceMetadataCredentials>;
