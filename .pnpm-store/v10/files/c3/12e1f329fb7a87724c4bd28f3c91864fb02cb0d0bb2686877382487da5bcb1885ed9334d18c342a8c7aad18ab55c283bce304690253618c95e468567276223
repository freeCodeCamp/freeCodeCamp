import { chain, CredentialsProviderError, memoize } from "@smithy/property-provider";
import { ENV_PROFILE } from "@smithy/shared-ini-file-loader";
import { remoteProvider } from "./remoteProvider";
export const defaultProvider = (init = {}) => memoize(chain(...(init.profile || process.env[ENV_PROFILE]
    ? []
    : [
        async () => {
            init.logger?.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromEnv");
            const { fromEnv } = await import("@aws-sdk/credential-provider-env");
            return fromEnv(init)();
        },
    ]), async () => {
    init.logger?.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromSSO");
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        throw new CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).");
    }
    const { fromSSO } = await import("@aws-sdk/credential-provider-sso");
    return fromSSO(init)();
}, async () => {
    init.logger?.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromIni");
    const { fromIni } = await import("@aws-sdk/credential-provider-ini");
    return fromIni(init)();
}, async () => {
    init.logger?.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromProcess");
    const { fromProcess } = await import("@aws-sdk/credential-provider-process");
    return fromProcess(init)();
}, async () => {
    init.logger?.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromTokenFile");
    const { fromTokenFile } = await import("@aws-sdk/credential-provider-web-identity");
    return fromTokenFile(init)();
}, async () => {
    init.logger?.debug("@aws-sdk/credential-provider-node", "defaultProvider::remoteProvider");
    return (await remoteProvider(init))();
}, async () => {
    throw new CredentialsProviderError("Could not load credentials from any providers", false);
}), credentialsTreatedAsExpired, credentialsWillNeedRefresh);
export const credentialsWillNeedRefresh = (credentials) => credentials?.expiration !== undefined;
export const credentialsTreatedAsExpired = (credentials) => credentials?.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000;
