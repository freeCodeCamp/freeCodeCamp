import { fromSso as getSsoTokenProvider } from "@aws-sdk/token-providers";
import { CredentialsProviderError } from "@smithy/property-provider";
import { getSSOTokenFromFile } from "@smithy/shared-ini-file-loader";
const SHOULD_FAIL_CREDENTIAL_CHAIN = false;
export const resolveSSOCredentials = async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, clientConfig, profile, }) => {
    let token;
    const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
    if (ssoSession) {
        try {
            const _token = await getSsoTokenProvider({ profile })();
            token = {
                accessToken: _token.token,
                expiresAt: new Date(_token.expiration).toISOString(),
            };
        }
        catch (e) {
            throw new CredentialsProviderError(e.message, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
    }
    else {
        try {
            token = await getSSOTokenFromFile(ssoStartUrl);
        }
        catch (e) {
            throw new CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
    }
    if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { accessToken } = token;
    const { SSOClient, GetRoleCredentialsCommand } = await import("./loadSso");
    const sso = ssoClient ||
        new SSOClient(Object.assign({}, clientConfig ?? {}, {
            region: clientConfig?.region ?? ssoRegion,
        }));
    let ssoResp;
    try {
        ssoResp = await sso.send(new GetRoleCredentialsCommand({
            accountId: ssoAccountId,
            roleName: ssoRoleName,
            accessToken,
        }));
    }
    catch (e) {
        throw CredentialsProviderError.from(e, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration, credentialScope } = {} } = ssoResp;
    if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new CredentialsProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration), credentialScope };
};
