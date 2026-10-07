import { AssumeRoleCommandInput, STSClientConfig } from "@aws-sdk/client-sts";
import { CredentialProviderOptions } from "@aws-sdk/types";
import {
  AwsCredentialIdentity,
  AwsCredentialIdentityProvider,
  Pluggable,
} from "@smithy/types";
export interface FromTemporaryCredentialsOptions
  extends CredentialProviderOptions {
  params: Pick<
    AssumeRoleCommandInput,
    Exclude<keyof AssumeRoleCommandInput, "RoleSessionName">
  > & {
    RoleSessionName?: string;
  };
  masterCredentials?: AwsCredentialIdentity | AwsCredentialIdentityProvider;
  clientConfig?: STSClientConfig;
  clientPlugins?: Pluggable<any, any>[];
  mfaCodeProvider?: (mfaSerial: string) => Promise<string>;
}
export declare const fromTemporaryCredentials: (
  options: FromTemporaryCredentialsOptions
) => AwsCredentialIdentityProvider;
