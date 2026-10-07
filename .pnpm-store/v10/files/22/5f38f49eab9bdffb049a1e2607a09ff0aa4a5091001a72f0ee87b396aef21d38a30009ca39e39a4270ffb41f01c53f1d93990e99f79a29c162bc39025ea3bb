import { CredentialProviderOptions } from "@aws-sdk/types";
import { AwsCredentialIdentity, Provider } from "@smithy/types";
import { CognitoProviderParameters } from "./CognitoProviderParameters";
export interface CognitoIdentityCredentials extends AwsCredentialIdentity {
  identityId: string;
}
export type CognitoIdentityCredentialProvider =
  Provider<CognitoIdentityCredentials>;
export declare function fromCognitoIdentity(
  parameters: FromCognitoIdentityParameters
): CognitoIdentityCredentialProvider;
export interface FromCognitoIdentityParameters
  extends CognitoProviderParameters,
    CredentialProviderOptions {
  identityId: string;
}
