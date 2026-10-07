import { CredentialsProviderError } from "@smithy/property-provider";
import { getProfileName } from "@smithy/shared-ini-file-loader";
import { resolveCredentialSource } from "./resolveCredentialSource";
import { resolveProfileData } from "./resolveProfileData";
export const isAssumeRoleProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 &&
    (isAssumeRoleWithSourceProfile(arg) || isAssumeRoleWithProviderProfile(arg));
const isAssumeRoleWithSourceProfile = (arg) => typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
const isAssumeRoleWithProviderProfile = (arg) => typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
export const resolveAssumeRoleCredentials = async (profileName, profiles, options, visitedProfiles = {}) => {
    options.logger?.debug("@aws-sdk/credential-provider-ini", "resolveAssumeRoleCredentials (STS)");
    const data = profiles[profileName];
    if (!options.roleAssumer) {
        const { getDefaultRoleAssumer } = await import("./loadSts");
        options.roleAssumer = getDefaultRoleAssumer({
            ...options.clientConfig,
            credentialProviderLogger: options.logger,
            parentClientConfig: options?.parentClientConfig,
        }, options.clientPlugins);
    }
    const { source_profile } = data;
    if (source_profile && source_profile in visitedProfiles) {
        throw new CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile` +
            ` ${getProfileName(options)}. Profiles visited: ` +
            Object.keys(visitedProfiles).join(", "), false);
    }
    const sourceCredsProvider = source_profile
        ? resolveProfileData(source_profile, profiles, options, {
            ...visitedProfiles,
            [source_profile]: true,
        })
        : (await resolveCredentialSource(data.credential_source, profileName)(options))();
    const params = {
        RoleArn: data.role_arn,
        RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
        ExternalId: data.external_id,
        DurationSeconds: parseInt(data.duration_seconds || "3600", 10),
    };
    const { mfa_serial } = data;
    if (mfa_serial) {
        if (!options.mfaCodeProvider) {
            throw new CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, false);
        }
        params.SerialNumber = mfa_serial;
        params.TokenCode = await options.mfaCodeProvider(mfa_serial);
    }
    const sourceCreds = await sourceCredsProvider;
    return options.roleAssumer(sourceCreds, params);
};
