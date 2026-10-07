import { CredentialProviderOptions } from "@aws-sdk/types";
import { CognitoProviderParameters } from "./CognitoProviderParameters";
import { CognitoIdentityCredentialProvider } from "./fromCognitoIdentity";
import { Storage } from "./Storage";
export declare function fromCognitoIdentityPool({
  accountId,
  cache,
  client,
  clientConfig,
  customRoleArn,
  identityPoolId,
  logins,
  userIdentifier,
  logger,
  parentClientConfig,
}: FromCognitoIdentityPoolParameters): CognitoIdentityCredentialProvider;
export interface FromCognitoIdentityPoolParameters
  extends CognitoProviderParameters,
    CredentialProviderOptions {
  accountId?: string;
  cache?: Storage;
  identityPoolId: string;
  userIdentifier?: string;
}
