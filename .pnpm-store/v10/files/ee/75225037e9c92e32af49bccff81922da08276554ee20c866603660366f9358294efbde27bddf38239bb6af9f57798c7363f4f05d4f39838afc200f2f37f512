import type { CredentialProviderOptions } from "@aws-sdk/types";
import { AwsCredentialIdentity, Provider } from "@smithy/types";
import { CognitoProviderParameters } from "./CognitoProviderParameters";
/**
 * @internal
 */
export interface CognitoIdentityCredentials extends AwsCredentialIdentity {
    /**
     * The Cognito ID returned by the last call to AWS.CognitoIdentity.getOpenIdToken().
     */
    identityId: string;
}
/**
 * @internal
 */
export type CognitoIdentityCredentialProvider = Provider<CognitoIdentityCredentials>;
/**
 * @internal
 *
 * Retrieves temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from this function call are not cached internally.
 */
export declare function fromCognitoIdentity(parameters: FromCognitoIdentityParameters): CognitoIdentityCredentialProvider;
/**
 * @internal
 */
export interface FromCognitoIdentityParameters extends CognitoProviderParameters, CredentialProviderOptions {
    /**
     * The unique identifier for the identity against which credentials will be
     * issued.
     */
    identityId: string;
}
