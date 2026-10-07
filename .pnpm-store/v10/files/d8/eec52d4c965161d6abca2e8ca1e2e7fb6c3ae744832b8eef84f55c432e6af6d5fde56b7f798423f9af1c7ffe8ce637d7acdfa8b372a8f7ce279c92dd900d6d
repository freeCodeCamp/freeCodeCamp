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
    regions: Record<
      string,
      | {
          description?: string;
        }
      | undefined
    >;
  }>;
};
export declare const partition: (value: string) => EndpointPartition;
export declare const setPartitionInfo: (
  partitionsInfo: PartitionsInfo,
  userAgentPrefix?: string
) => void;
export declare const useDefaultPartitionInfo: () => void;
export declare const getUserAgentPrefix: () => string;
