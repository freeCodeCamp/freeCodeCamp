import { CredentialProviderOptions } from "@aws-sdk/types";
import { SourceProfileInit } from "@smithy/shared-ini-file-loader";
import { AwsCredentialIdentityProvider } from "@smithy/types";
import { SSOClient, SSOClientConfig } from "./loadSso";
export interface SsoCredentialsParameters {
  ssoStartUrl: string;
  ssoSession?: string;
  ssoAccountId: string;
  ssoRegion: string;
  ssoRoleName: string;
}
export interface FromSSOInit
  extends SourceProfileInit,
    CredentialProviderOptions {
  ssoClient?: SSOClient;
  clientConfig?: SSOClientConfig;
}
export declare const fromSSO: (
  init?: FromSSOInit & Partial<SsoCredentialsParameters>
) => AwsCredentialIdentityProvider;
