import { AssumeRoleWithWebIdentityParams } from "@aws-sdk/credential-provider-web-identity";
import { CredentialProviderOptions } from "@aws-sdk/types";
import { SourceProfileInit } from "@smithy/shared-ini-file-loader";
import {
  AwsCredentialIdentity,
  AwsCredentialIdentityProvider,
  Pluggable,
} from "@smithy/types";
import { STSClientConfig } from "./loadSts";
import { AssumeRoleParams } from "./resolveAssumeRoleCredentials";
export interface FromIniInit
  extends SourceProfileInit,
    CredentialProviderOptions {
  mfaCodeProvider?: (mfaSerial: string) => Promise<string>;
  roleAssumer?: (
    sourceCreds: AwsCredentialIdentity,
    params: AssumeRoleParams
  ) => Promise<AwsCredentialIdentity>;
  roleAssumerWithWebIdentity?: (
    params: AssumeRoleWithWebIdentityParams
  ) => Promise<AwsCredentialIdentity>;
  clientConfig?: STSClientConfig;
  clientPlugins?: Pluggable<any, any>[];
}
export declare const fromIni: (
  init?: FromIniInit
) => AwsCredentialIdentityProvider;
