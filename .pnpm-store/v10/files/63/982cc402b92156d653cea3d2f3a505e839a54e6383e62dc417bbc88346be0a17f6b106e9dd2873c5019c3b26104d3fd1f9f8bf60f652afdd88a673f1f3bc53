import { getChecksumConfiguration, resolveChecksumRuntimeConfig } from "./checksum";
import { getRetryConfiguration, resolveRetryRuntimeConfig } from "./retry";
export const getDefaultExtensionConfiguration = (runtimeConfig) => {
    return {
        ...getChecksumConfiguration(runtimeConfig),
        ...getRetryConfiguration(runtimeConfig),
    };
};
export const getDefaultClientConfiguration = getDefaultExtensionConfiguration;
export const resolveDefaultRuntimeConfig = (config) => {
    return {
        ...resolveChecksumRuntimeConfig(config),
        ...resolveRetryRuntimeConfig(config),
    };
};
