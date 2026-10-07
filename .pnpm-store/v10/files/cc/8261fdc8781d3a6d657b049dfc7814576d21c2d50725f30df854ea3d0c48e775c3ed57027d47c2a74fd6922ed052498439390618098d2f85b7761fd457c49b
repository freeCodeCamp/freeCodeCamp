import { getExtendedInstanceMetadataCredentials } from "./getExtendedInstanceMetadataCredentials";
export const staticStabilityProvider = (provider, options = {}) => {
    const logger = options?.logger || console;
    let pastCredentials;
    return async () => {
        let credentials;
        try {
            credentials = await provider();
            if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
                credentials = getExtendedInstanceMetadataCredentials(credentials, logger);
            }
        }
        catch (e) {
            if (pastCredentials) {
                logger.warn("Credential renew failed: ", e);
                credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger);
            }
            else {
                throw e;
            }
        }
        pastCredentials = credentials;
        return credentials;
    };
};
