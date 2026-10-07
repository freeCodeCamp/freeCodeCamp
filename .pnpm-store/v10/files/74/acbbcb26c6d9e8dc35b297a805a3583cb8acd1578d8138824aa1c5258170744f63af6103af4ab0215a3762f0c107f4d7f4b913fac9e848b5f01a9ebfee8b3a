import { Endpoint, Provider, RegionInfoProvider, UrlParser } from "@smithy/types";
/**
 * @public
 */
export interface EndpointsInputConfig {
    /**
     * The fully qualified endpoint of the webservice. This is only required when using
     * a custom endpoint (for example, when using a local version of S3).
     */
    endpoint?: string | Endpoint | Provider<Endpoint>;
    /**
     * Whether TLS is enabled for requests.
     */
    tls?: boolean;
    /**
     * Enables IPv6/IPv4 dualstack endpoint.
     */
    useDualstackEndpoint?: boolean | Provider<boolean>;
}
interface PreviouslyResolved {
    regionInfoProvider: RegionInfoProvider;
    urlParser: UrlParser;
    region: Provider<string>;
    useFipsEndpoint: Provider<boolean>;
}
/**
 * @internal
 */
export interface EndpointsResolvedConfig extends Required<EndpointsInputConfig> {
    /**
     * Resolved value for input {@link EndpointsInputConfig.endpoint}
     */
    endpoint: Provider<Endpoint>;
    /**
     * Whether the endpoint is specified by caller.
     * @internal
     */
    isCustomEndpoint?: boolean;
    /**
     * Resolved value for input {@link EndpointsInputConfig.useDualstackEndpoint}
     */
    useDualstackEndpoint: Provider<boolean>;
}
/**
 * @internal
 *
 * @deprecated endpoints rulesets use @smithy/middleware-endpoint resolveEndpointConfig.
 * All generated clients should migrate to Endpoints 2.0 endpointRuleSet traits.
 */
export declare const resolveEndpointsConfig: <T>(input: T & EndpointsInputConfig & PreviouslyResolved) => T & EndpointsResolvedConfig;
export {};
