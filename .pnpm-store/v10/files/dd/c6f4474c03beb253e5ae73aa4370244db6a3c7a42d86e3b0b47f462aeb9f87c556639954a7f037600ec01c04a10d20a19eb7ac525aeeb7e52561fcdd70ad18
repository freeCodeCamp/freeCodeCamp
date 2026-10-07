import type { CognitoIdentityClient, CognitoIdentityClientConfig } from "./loadCognitoIdentity";
import { Logins } from "./Logins";
/**
 * @internal
 */
export interface CognitoProviderParameters {
    /**
     * The SDK client with which the credential provider will contact the Amazon
     * Cognito service.
     */
    client?: CognitoIdentityClient;
    /**
     * Client config, only used when not supplying a client.
     */
    clientConfig?: CognitoIdentityClientConfig;
    /**
     * The Amazon Resource Name (ARN) of the role to be assumed when multiple
     * roles were received in the token from the identity provider. For example,
     * a SAML-based identity provider. This parameter is optional for identity
     * providers that do not support role customization.
     */
    customRoleArn?: string;
    /**
     * A set of key-value pairs that map external identity provider names to
     * login tokens or functions that return promises for login tokens. The
     * latter should be used when login tokens must be periodically refreshed.
     *
     * Logins should not be specified when trying to get credentials for an
     * unauthenticated identity.
     */
    logins?: Logins;
}
