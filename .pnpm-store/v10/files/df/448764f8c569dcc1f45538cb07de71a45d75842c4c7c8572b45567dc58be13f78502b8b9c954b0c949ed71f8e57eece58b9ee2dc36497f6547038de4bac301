import { booleanSelector, SelectorType } from "@smithy/util-config-provider";
export const ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
export const CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
export const DEFAULT_USE_FIPS_ENDPOINT = false;
export const NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => booleanSelector(env, ENV_USE_FIPS_ENDPOINT, SelectorType.ENV),
    configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, SelectorType.CONFIG),
    default: false,
};
