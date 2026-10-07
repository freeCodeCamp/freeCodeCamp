import { FromIniInit } from "@aws-sdk/credential-provider-ini";
import { FromProcessInit } from "@aws-sdk/credential-provider-process";
import {
  FromSSOInit,
  SsoCredentialsParameters,
} from "@aws-sdk/credential-provider-sso";
import { FromTokenFileInit } from "@aws-sdk/credential-provider-web-identity";
import { RemoteProviderInit } from "@smithy/credential-provider-imds";
import { AwsCredentialIdentity, MemoizedProvider } from "@smithy/types";
export type DefaultProviderInit = FromIniInit &
  RemoteProviderInit &
  FromProcessInit &
  (FromSSOInit & Partial<SsoCredentialsParameters>) &
  FromTokenFileInit;
export declare const defaultProvider: (
  init?: DefaultProviderInit
) => MemoizedProvider<AwsCredentialIdentity>;
export declare const credentialsWillNeedRefresh: (
  credentials: AwsCredentialIdentity
) => boolean;
export declare const credentialsTreatedAsExpired: (
  credentials: AwsCredentialIdentity
) => boolean;
