import type { CredentialProviderOptions } from "@aws-sdk/types";
/**
 * @public
 *
 * Input for the fromHttp function in the HTTP Credentials Provider for Node.js.
 */
export interface FromHttpOptions extends CredentialProviderOptions {
    /**
     * If this value is provided, it will be used as-is.
     *
     * For browser environments, use instead {@link credentialsFullUri}.
     */
    awsContainerCredentialsFullUri?: string;
    /**
     * If this value is provided instead of the full URI, it
     * will be appended to the default link local host of 169.254.170.2.
     *
     * Not supported in browsers.
     */
    awsContainerCredentialsRelativeUri?: string;
    /**
     * Will be read on each credentials request to
     * add an Authorization request header value.
     *
     * Not supported in browsers.
     */
    awsContainerAuthorizationTokenFile?: string;
    /**
     * An alternative to awsContainerAuthorizationTokenFile,
     * this is the token value itself.
     *
     * For browser environments, use instead {@link authorizationToken}.
     */
    awsContainerAuthorizationToken?: string;
    /**
     * BROWSER ONLY.
     *
     * In browsers, a relative URI is not allowed, and a full URI must be provided.
     * HTTPS is required.
     *
     * This value is required for the browser environment.
     */
    credentialsFullUri?: string;
    /**
     * BROWSER ONLY.
     *
     * Providing this value will set an "Authorization" request
     * header value on the GET request.
     */
    authorizationToken?: string;
    /**
     * Default is 3 retry attempts or 4 total attempts.
     */
    maxRetries?: number;
    /**
     * Default is 1000ms. Time in milliseconds to spend waiting between retry attempts.
     */
    timeout?: number;
}
/**
 * @public
 */
export type HttpProviderCredentials = {
    AccessKeyId: string;
    SecretAccessKey: string;
    Token: string;
    AccountId?: string;
    Expiration: string;
};
