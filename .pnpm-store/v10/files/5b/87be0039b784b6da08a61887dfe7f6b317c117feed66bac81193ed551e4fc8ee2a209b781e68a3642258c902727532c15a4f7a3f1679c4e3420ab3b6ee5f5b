import { CredentialsProviderError } from "@smithy/property-provider";
import { isAssumeRoleProfile, resolveAssumeRoleCredentials } from "./resolveAssumeRoleCredentials";
import { isProcessProfile, resolveProcessCredentials } from "./resolveProcessCredentials";
import { isSsoProfile, resolveSsoCredentials } from "./resolveSsoCredentials";
import { isStaticCredsProfile, resolveStaticCredentials } from "./resolveStaticCredentials";
import { isWebIdentityProfile, resolveWebIdentityCredentials } from "./resolveWebIdentityCredentials";
export const resolveProfileData = async (profileName, profiles, options, visitedProfiles = {}) => {
    const data = profiles[profileName];
    if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
    }
    if (isAssumeRoleProfile(data)) {
        return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles);
    }
    if (isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
    }
    if (isWebIdentityProfile(data)) {
        return resolveWebIdentityCredentials(data, options);
    }
    if (isProcessProfile(data)) {
        return resolveProcessCredentials(options, profileName);
    }
    if (isSsoProfile(data)) {
        return await resolveSsoCredentials(profileName, options);
    }
    throw new CredentialsProviderError(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
};
