import { Provider } from "@smithy/types";
export interface RegionInputConfig {
  region?: string | Provider<string>;
  useFipsEndpoint?: boolean | Provider<boolean>;
}
interface PreviouslyResolved {}
export interface RegionResolvedConfig {
  region: Provider<string>;
  useFipsEndpoint: Provider<boolean>;
}
export declare const resolveRegionConfig: <T>(
  input: T & RegionInputConfig & PreviouslyResolved
) => T & RegionResolvedConfig;
export {};
