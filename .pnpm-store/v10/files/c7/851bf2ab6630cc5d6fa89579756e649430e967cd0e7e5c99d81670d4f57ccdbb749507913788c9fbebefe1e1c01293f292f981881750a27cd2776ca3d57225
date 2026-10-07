import { Endpoint, Provider, UrlParser } from "@smithy/types";
import { EndpointsInputConfig, EndpointsResolvedConfig } from "./resolveEndpointsConfig";
/**
 * @public
 */
export interface CustomEndpointsInputConfig extends EndpointsInputConfig {
    /**
     * The fully qualified endpoint of the webservice.
     */
    endpoint: string | Endpoint | Provider<Endpoint>;
}
interface PreviouslyResolved {
    urlParser: UrlParser;
}
/**
 * @internal
 */
export interface CustomEndpointsResolvedConfig extends EndpointsResolvedConfig {
    /**
     * Whether the endpoint is specified by caller.
     * @internal
     */
    isCustomEndpoint: true;
}
/**
 * @internal
 */
export declare const resolveCustomEndpointsConfig: <T>(input: T & CustomEndpointsInputConfig & PreviouslyResolved) => T & CustomEndpointsResolvedConfig;
export {};
