import { normalizeProvider } from "@smithy/util-middleware";
import { AdaptiveRetryStrategy, DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE, RETRY_MODES, StandardRetryStrategy, } from "@smithy/util-retry";
export const ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
export const CONFIG_MAX_ATTEMPTS = "max_attempts";
export const NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        const value = env[ENV_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    configFileSelector: (profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    default: DEFAULT_MAX_ATTEMPTS,
};
export const resolveRetryConfig = (input) => {
    const { retryStrategy } = input;
    const maxAttempts = normalizeProvider(input.maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
    return {
        ...input,
        maxAttempts,
        retryStrategy: async () => {
            if (retryStrategy) {
                return retryStrategy;
            }
            const retryMode = await normalizeProvider(input.retryMode)();
            if (retryMode === RETRY_MODES.ADAPTIVE) {
                return new AdaptiveRetryStrategy(maxAttempts);
            }
            return new StandardRetryStrategy(maxAttempts);
        },
    };
};
export const ENV_RETRY_MODE = "AWS_RETRY_MODE";
export const CONFIG_RETRY_MODE = "retry_mode";
export const NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_RETRY_MODE],
    configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
    default: DEFAULT_RETRY_MODE,
};
