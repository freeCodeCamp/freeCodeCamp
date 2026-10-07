import { CONFIG_PREFIX_SEPARATOR } from "@smithy/shared-ini-file-loader";
const ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
const CONFIG_ENDPOINT_URL = "endpoint_url";
export const getEndpointUrlConfig = (serviceId) => ({
    environmentVariableSelector: (env) => {
        const serviceSuffixParts = serviceId.split(" ").map((w) => w.toUpperCase());
        const serviceEndpointUrl = env[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
            return serviceEndpointUrl;
        const endpointUrl = env[ENV_ENDPOINT_URL];
        if (endpointUrl)
            return endpointUrl;
        return undefined;
    },
    configFileSelector: (profile, config) => {
        if (config && profile.services) {
            const servicesSection = config[["services", profile.services].join(CONFIG_PREFIX_SEPARATOR)];
            if (servicesSection) {
                const servicePrefixParts = serviceId.split(" ").map((w) => w.toLowerCase());
                const endpointUrl = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(CONFIG_PREFIX_SEPARATOR)];
                if (endpointUrl)
                    return endpointUrl;
            }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
            return endpointUrl;
        return undefined;
    },
    default: undefined,
});
