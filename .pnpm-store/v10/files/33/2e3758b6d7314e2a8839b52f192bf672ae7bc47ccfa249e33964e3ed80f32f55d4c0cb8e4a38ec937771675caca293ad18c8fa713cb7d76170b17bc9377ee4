/**
 * Cached SSO token retrieved from SSO login flow.
 */
export interface SSOToken {
    /**
     * A base64 encoded string returned by the sso-oidc service.
     */
    accessToken: string;
    /**
     * The expiration time of the accessToken as an RFC 3339 formatted timestamp.
     */
    expiresAt: string;
    /**
     * The token used to obtain an access token in the event that the accessToken is invalid or expired.
     */
    refreshToken?: string;
    /**
     * The unique identifier string for each client. The client ID generated when performing the registration
     * portion of the OIDC authorization flow. This is used to refresh the accessToken.
     */
    clientId?: string;
    /**
     * A secret string generated when performing the registration portion of the OIDC authorization flow.
     * This is used to refresh the accessToken.
     */
    clientSecret?: string;
    /**
     * The expiration time of the client registration (clientId and clientSecret) as an RFC 3339 formatted timestamp.
     */
    registrationExpiresAt?: string;
    /**
     * The configured sso_region for the profile that credentials are being resolved for.
     */
    region?: string;
    /**
     * The configured sso_start_url for the profile that credentials are being resolved for.
     */
    startUrl?: string;
}
/**
 * @param id - can be either a start URL or the SSO session name.
 * Returns the SSO token from the file system.
 */
export declare const getSSOTokenFromFile: (id: string) => Promise<SSOToken>;
