import { AwsRegionExtensionConfiguration } from "@aws-sdk/types";
import { Provider } from "@smithy/types";
export type RegionExtensionRuntimeConfigType = Partial<{
  region: string | Provider<string>;
}>;
export declare const getAwsRegionExtensionConfiguration: (
  runtimeConfig: RegionExtensionRuntimeConfigType
) => {
  setRegion(region: Provider<string>): void;
  region(): Provider<string>;
};
export declare const resolveAwsRegionExtensionConfiguration: (
  awsRegionExtensionConfiguration: AwsRegionExtensionConfiguration
) => RegionExtensionRuntimeConfigType;
