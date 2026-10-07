import { Endpoint } from "@smithy/types";
/**
 * Returns the host to use for instance metadata service call.
 *
 * The host is read from endpoint which can be set either in
 * {@link ENV_ENDPOINT_NAME} environment variable or {@link CONFIG_ENDPOINT_NAME}
 * configuration property.
 *
 * If endpoint is not set, then endpoint mode is read either from
 * {@link ENV_ENDPOINT_MODE_NAME} environment variable or {@link CONFIG_ENDPOINT_MODE_NAME}
 * configuration property. If endpoint mode is not set, then default endpoint mode
 * {@link EndpointMode.IPv4} is used.
 *
 * If endpoint mode is set to {@link EndpointMode.IPv4}, then the host is {@link Endpoint.IPv4}.
 * If endpoint mode is set to {@link EndpointMode.IPv6}, then the host is {@link Endpoint.IPv6}.
 *
 * @returns Host to use for instance metadata service call.
 *
 * @internal
 */
export declare const getInstanceMetadataEndpoint: () => Promise<Endpoint>;
