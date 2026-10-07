import { CredentialsProviderError } from "@smithy/property-provider";
import { getProfileName, loadSsoSessionData, parseKnownFiles } from "@smithy/shared-ini-file-loader";
import { isSsoProfile } from "./isSsoProfile";
import { resolveSSOCredentials } from "./resolveSSOCredentials";
import { validateSsoProfile } from "./validateSsoProfile";
export const fromSSO = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-sso", "fromSSO");
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
    const { ssoClient } = init;
    const profileName = getProfileName(init);
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await parseKnownFiles(init);
        const profile = profiles[profileName];
        if (!profile) {
            throw new CredentialsProviderError(`Profile ${profileName} was not found.`);
        }
        if (!isSsoProfile(profile)) {
            throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
        }
        if (profile?.sso_session) {
            const ssoSessions = await loadSsoSessionData(init);
            const session = ssoSessions[profile.sso_session];
            const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
            if (ssoRegion && ssoRegion !== session.sso_region) {
                throw new CredentialsProviderError(`Conflicting SSO region` + conflictMsg, false);
            }
            if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
                throw new CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, false);
            }
            profile.sso_region = session.sso_region;
            profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile);
        return resolveSSOCredentials({
            ssoStartUrl: sso_start_url,
            ssoSession: sso_session,
            ssoAccountId: sso_account_id,
            ssoRegion: sso_region,
            ssoRoleName: sso_role_name,
            ssoClient: ssoClient,
            clientConfig: init.clientConfig,
            profile: profileName,
        });
    }
    else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new CredentialsProviderError("Incomplete configuration. The fromSSO() argument hash must include " +
            '"ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
    }
    else {
        return resolveSSOCredentials({
            ssoStartUrl,
            ssoSession,
            ssoAccountId,
            ssoRegion,
            ssoRoleName,
            ssoClient,
            clientConfig: init.clientConfig,
            profile: profileName,
        });
    }
};
