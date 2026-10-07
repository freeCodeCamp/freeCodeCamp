const AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
const AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
export const NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        return env[AWS_DEFAULTS_MODE_ENV];
    },
    configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
    },
    default: "legacy",
};
