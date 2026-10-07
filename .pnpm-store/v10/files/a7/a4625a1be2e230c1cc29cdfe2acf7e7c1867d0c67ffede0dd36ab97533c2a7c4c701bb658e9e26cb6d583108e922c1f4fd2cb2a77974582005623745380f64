import { CredentialProviderOptions } from "@aws-sdk/types";
export interface FromHttpOptions extends CredentialProviderOptions {
  awsContainerCredentialsFullUri?: string;
  awsContainerCredentialsRelativeUri?: string;
  awsContainerAuthorizationTokenFile?: string;
  awsContainerAuthorizationToken?: string;
  credentialsFullUri?: string;
  authorizationToken?: string;
  maxRetries?: number;
  timeout?: number;
}
export type HttpProviderCredentials = {
  AccessKeyId: string;
  SecretAccessKey: string;
  Token: string;
  AccountId?: string;
  Expiration: string;
};
