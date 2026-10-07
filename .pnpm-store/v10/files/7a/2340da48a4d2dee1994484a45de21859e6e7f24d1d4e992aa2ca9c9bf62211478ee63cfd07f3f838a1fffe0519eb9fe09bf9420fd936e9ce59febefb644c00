import { booleanSelector, SelectorType } from "@smithy/util-config-provider";
export const ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
export const CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
export const DEFAULT_USE_DUALSTACK_ENDPOINT = false;
export const NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => booleanSelector(env, ENV_USE_DUALSTACK_ENDPOINT, SelectorType.ENV),
    configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, SelectorType.CONFIG),
    default: false,
};
