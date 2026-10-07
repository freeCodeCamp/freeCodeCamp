import { EndpointMode } from "./EndpointMode";
export const ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
export const CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
export const ENDPOINT_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_ENDPOINT_MODE_NAME],
    configFileSelector: (profile) => profile[CONFIG_ENDPOINT_MODE_NAME],
    default: EndpointMode.IPv4,
};
