import { Provider } from "@smithy/types";
/**
 * @public
 */
export interface RegionInputConfig {
    /**
     * The AWS region to which this client will send requests
     */
    region?: string | Provider<string>;
    /**
     * Enables FIPS compatible endpoints.
     */
    useFipsEndpoint?: boolean | Provider<boolean>;
}
interface PreviouslyResolved {
}
/**
 * @internal
 */
export interface RegionResolvedConfig {
    /**
     * Resolved value for input config {@link RegionInputConfig.region}
     */
    region: Provider<string>;
    /**
     * Resolved value for input {@link RegionInputConfig.useFipsEndpoint}
     */
    useFipsEndpoint: Provider<boolean>;
}
/**
 * @internal
 */
export declare const resolveRegionConfig: <T>(input: T & RegionInputConfig & PreviouslyResolved) => T & RegionResolvedConfig;
export {};
