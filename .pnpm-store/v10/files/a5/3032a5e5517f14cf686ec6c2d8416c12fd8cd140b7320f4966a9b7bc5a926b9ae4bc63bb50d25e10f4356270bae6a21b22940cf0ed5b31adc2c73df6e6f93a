export const getAwsRegionExtensionConfiguration = (runtimeConfig) => {
    let runtimeConfigRegion = async () => {
        if (runtimeConfig.region === undefined) {
            throw new Error("Region is missing from runtimeConfig");
        }
        const region = runtimeConfig.region;
        if (typeof region === "string") {
            return region;
        }
        return region();
    };
    return {
        setRegion(region) {
            runtimeConfigRegion = region;
        },
        region() {
            return runtimeConfigRegion;
        },
    };
};
export const resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
    return {
        region: awsRegionExtensionConfiguration.region(),
    };
};
