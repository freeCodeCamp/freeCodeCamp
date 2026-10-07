import { loadConfig } from "@smithy/node-config-provider";
import { parseUrl } from "@smithy/url-parser";
import { Endpoint as InstanceMetadataEndpoint } from "../config/Endpoint";
import { ENDPOINT_CONFIG_OPTIONS } from "../config/EndpointConfigOptions";
import { EndpointMode } from "../config/EndpointMode";
import { ENDPOINT_MODE_CONFIG_OPTIONS, } from "../config/EndpointModeConfigOptions";
export const getInstanceMetadataEndpoint = async () => parseUrl((await getFromEndpointConfig()) || (await getFromEndpointModeConfig()));
const getFromEndpointConfig = async () => loadConfig(ENDPOINT_CONFIG_OPTIONS)();
const getFromEndpointModeConfig = async () => {
    const endpointMode = await loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS)();
    switch (endpointMode) {
        case EndpointMode.IPv4:
            return InstanceMetadataEndpoint.IPv4;
        case EndpointMode.IPv6:
            return InstanceMetadataEndpoint.IPv6;
        default:
            throw new Error(`Unsupported endpoint mode: ${endpointMode}.` + ` Select from ${Object.values(EndpointMode)}`);
    }
};
