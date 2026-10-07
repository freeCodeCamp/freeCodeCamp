import { RegionInfo } from "@smithy/types";
import { PartitionHash } from "./PartitionHash";
import { RegionHash } from "./RegionHash";
/**
 * @internal
 */
export interface GetRegionInfoOptions {
    useFipsEndpoint?: boolean;
    useDualstackEndpoint?: boolean;
    signingService: string;
    regionHash: RegionHash;
    partitionHash: PartitionHash;
}
/**
 * @internal
 */
export declare const getRegionInfo: (region: string, { useFipsEndpoint, useDualstackEndpoint, signingService, regionHash, partitionHash, }: GetRegionInfoOptions) => RegionInfo;
