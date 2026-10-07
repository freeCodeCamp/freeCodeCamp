import { CredentialsProviderError } from "@smithy/property-provider";
export const fromEnv = (envVarSelector) => async () => {
    try {
        const config = envVarSelector(process.env);
        if (config === undefined) {
            throw new Error();
        }
        return config;
    }
    catch (e) {
        throw new CredentialsProviderError(e.message || `Cannot load config from environment variables with getter: ${envVarSelector}`);
    }
};
