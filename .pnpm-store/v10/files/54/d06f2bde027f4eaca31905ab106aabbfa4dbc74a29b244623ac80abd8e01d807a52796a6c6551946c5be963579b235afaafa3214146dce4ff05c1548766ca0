import { EndpointPartition } from "@smithy/types";
export type PartitionsInfo = {
    partitions: Array<{
        id: string;
        outputs: {
            dnsSuffix: string;
            dualStackDnsSuffix: string;
            name: string;
            supportsDualStack: boolean;
            supportsFIPS: boolean;
        };
        regionRegex: string;
        regions: Record<string, {
            description?: string;
        } | undefined>;
    }>;
};
/**
 * Evaluates a single string argument value as a region, and matches the
 * string value to an AWS partition.
 * The matcher MUST always return a successful object describing the partition
 * that the region has been determined to be a part of.
 */
export declare const partition: (value: string) => EndpointPartition;
/**
 * Set custom partitions.json data.
 * @internal
 */
export declare const setPartitionInfo: (partitionsInfo: PartitionsInfo, userAgentPrefix?: string) => void;
/**
 * Reset to the default partitions.json data.
 * @internal
 */
export declare const useDefaultPartitionInfo: () => void;
/**
 * @internal
 */
export declare const getUserAgentPrefix: () => string;
