import { Identity, IdentityProvider } from "./identity";
/**
 * @public
 */
export interface AwsCredentialIdentity extends Identity {
    /**
     * AWS access key ID
     */
    readonly accessKeyId: string;
    /**
     * AWS secret access key
     */
    readonly secretAccessKey: string;
    /**
     * A security or session token to use with these credentials. Usually
     * present for temporary credentials.
     */
    readonly sessionToken?: string;
    /**
     * AWS credential scope for this set of credentials.
     */
    readonly credentialScope?: string;
}
/**
 * @public
 */
export type AwsCredentialIdentityProvider = IdentityProvider<AwsCredentialIdentity>;
