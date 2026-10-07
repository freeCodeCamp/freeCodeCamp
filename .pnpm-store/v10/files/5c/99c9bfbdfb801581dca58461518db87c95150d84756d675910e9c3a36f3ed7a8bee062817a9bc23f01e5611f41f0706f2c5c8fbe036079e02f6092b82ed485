const ssoOidcClientsHash = {};
export const getSsoOidcClient = async (ssoRegion) => {
    const { SSOOIDCClient } = await import("./loadSsoOidc");
    if (ssoOidcClientsHash[ssoRegion]) {
        return ssoOidcClientsHash[ssoRegion];
    }
    const ssoOidcClient = new SSOOIDCClient({ region: ssoRegion });
    ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
    return ssoOidcClient;
};
