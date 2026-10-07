import { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
import {
  CognitoIdentityCredentialProvider,
  FromCognitoIdentityPoolParameters as _FromCognitoIdentityPoolParameters,
} from "@aws-sdk/credential-provider-cognito-identity";
export interface FromCognitoIdentityPoolParameters
  extends Pick<
    _FromCognitoIdentityPoolParameters,
    Exclude<keyof _FromCognitoIdentityPoolParameters, "client">
  > {
  clientConfig?: CognitoIdentityClientConfig;
}
export declare const fromCognitoIdentityPool: (
  options: FromCognitoIdentityPoolParameters
) => CognitoIdentityCredentialProvider;
