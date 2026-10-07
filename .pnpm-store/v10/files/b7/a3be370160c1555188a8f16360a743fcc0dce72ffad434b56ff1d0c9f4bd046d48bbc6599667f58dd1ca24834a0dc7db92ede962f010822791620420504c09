import partitionsInfo from "./partitions.json";
let selectedPartitionsInfo = partitionsInfo;
let selectedUserAgentPrefix = "";
export const partition = (value) => {
    const { partitions } = selectedPartitionsInfo;
    for (const partition of partitions) {
        const { regions, outputs } = partition;
        for (const [region, regionData] of Object.entries(regions)) {
            if (region === value) {
                return {
                    ...outputs,
                    ...regionData,
                };
            }
        }
    }
    for (const partition of partitions) {
        const { regionRegex, outputs } = partition;
        if (new RegExp(regionRegex).test(value)) {
            return {
                ...outputs,
            };
        }
    }
    const DEFAULT_PARTITION = partitions.find((partition) => partition.id === "aws");
    if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex," +
            " and default partition with id 'aws' doesn't exist.");
    }
    return {
        ...DEFAULT_PARTITION.outputs,
    };
};
export const setPartitionInfo = (partitionsInfo, userAgentPrefix = "") => {
    selectedPartitionsInfo = partitionsInfo;
    selectedUserAgentPrefix = userAgentPrefix;
};
export const useDefaultPartitionInfo = () => {
    setPartitionInfo(partitionsInfo, "");
};
export const getUserAgentPrefix = () => selectedUserAgentPrefix;
