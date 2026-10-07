import { getSsoOidcClient } from "./getSsoOidcClient";
export const getNewSsoOidcToken = async (ssoToken, ssoRegion) => {
    const { CreateTokenCommand } = await import("./loadSsoOidc");
    const ssoOidcClient = await getSsoOidcClient(ssoRegion);
    return ssoOidcClient.send(new CreateTokenCommand({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token",
    }));
};
