import { CredentialsProviderError } from "@smithy/property-provider";
export const ENV_KEY = "AWS_ACCESS_KEY_ID";
export const ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
export const ENV_SESSION = "AWS_SESSION_TOKEN";
export const ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
export const ENV_CREDENTIAL_SCOPE = "AWS_CREDENTIAL_SCOPE";
export const fromEnv = (init) => async () => {
    init?.logger?.debug("@aws-sdk/credential-provider-env", "fromEnv");
    const accessKeyId = process.env[ENV_KEY];
    const secretAccessKey = process.env[ENV_SECRET];
    const sessionToken = process.env[ENV_SESSION];
    const expiry = process.env[ENV_EXPIRATION];
    const credentialScope = process.env[ENV_CREDENTIAL_SCOPE];
    if (accessKeyId && secretAccessKey) {
        return {
            accessKeyId,
            secretAccessKey,
            ...(sessionToken && { sessionToken }),
            ...(expiry && { expiration: new Date(expiry) }),
            ...(credentialScope && { credentialScope }),
        };
    }
    throw new CredentialsProviderError("Unable to find environment variable credentials.");
};
