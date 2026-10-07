import { Endpoint, EndpointParameters, EndpointV2, Logger, Provider, UrlParser } from "@smithy/types";
/**
 * @public
 *
 * Endpoint config interfaces and resolver for Endpoint v2. They live in separate package to allow per-service onboarding.
 * When all services onboard Endpoint v2, the resolver in config-resolver package can be removed.
 * This interface includes all the endpoint parameters with built-in bindings of "AWS::*" and "SDK::*"
 */
export interface EndpointInputConfig<T extends EndpointParameters = EndpointParameters> {
    /**
     * The fully qualified endpoint of the webservice. This is only for using
     * a custom endpoint (for example, when using a local version of S3).
     *
     * Endpoint transformations such as S3 applying a bucket to the hostname are
     * still applicable to this custom endpoint.
     */
    endpoint?: string | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>;
    /**
     * Providing a custom endpointProvider will override
     * built-in transformations of the endpoint such as S3 adding the bucket
     * name to the hostname, since they are part of the default endpointProvider.
     */
    endpointProvider?: (params: T, context?: {
        logger?: Logger;
    }) => EndpointV2;
    /**
     * Whether TLS is enabled for requests.
     * @deprecated
     */
    tls?: boolean;
    /**
     * Enables IPv6/IPv4 dualstack endpoint.
     */
    useDualstackEndpoint?: boolean | Provider<boolean>;
    /**
     * Enables FIPS compatible endpoints.
     */
    useFipsEndpoint?: boolean | Provider<boolean>;
}
interface PreviouslyResolved<T extends EndpointParameters = EndpointParameters> {
    urlParser: UrlParser;
    region: Provider<string>;
    endpointProvider: (params: T, context?: {
        logger?: Logger;
    }) => EndpointV2;
    logger?: Logger;
}
/**
 * @internal
 *
 * This supercedes the similarly named EndpointsResolvedConfig (no parametric types)
 * from resolveEndpointsConfig.ts in @smithy/config-resolver.
 */
export interface EndpointResolvedConfig<T extends EndpointParameters = EndpointParameters> {
    /**
     * Custom endpoint provided by the user.
     * This is normalized to a single interface from the various acceptable types.
     * This field will be undefined if a custom endpoint is not provided.
     */
    endpoint?: Provider<Endpoint>;
    endpointProvider: (params: T, context?: {
        logger?: Logger;
    }) => EndpointV2;
    /**
     * Whether TLS is enabled for requests.
     * @deprecated
     */
    tls: boolean;
    /**
     * Whether the endpoint is specified by caller.
     * @internal
     * @deprecated
     */
    isCustomEndpoint?: boolean;
    /**
     * Resolved value for input {@link EndpointsInputConfig.useDualstackEndpoint}
     */
    useDualstackEndpoint: Provider<boolean>;
    /**
     * Resolved value for input {@link EndpointsInputConfig.useFipsEndpoint}
     */
    useFipsEndpoint: Provider<boolean>;
    /**
     * Unique service identifier.
     * @internal
     */
    serviceId?: string;
}
/**
 * @internal
 */
export declare const resolveEndpointConfig: <T, P extends EndpointParameters = EndpointParameters>(input: T & EndpointInputConfig<P> & PreviouslyResolved<P>) => T & EndpointResolvedConfig<P>;
export {};
