import { CredentialProviderOptions } from "@aws-sdk/types";
import {
  AwsCredentialIdentity,
  AwsCredentialIdentityProvider,
  Pluggable,
} from "@smithy/types";
import { STSClientConfig } from "./loadSts";
export interface AssumeRoleWithWebIdentityParams {
  RoleArn: string;
  RoleSessionName: string;
  WebIdentityToken: string;
  ProviderId?: string;
  PolicyArns?: {
    arn?: string;
  }[];
  Policy?: string;
  DurationSeconds?: number;
}
type LowerCaseKey<T> = {
  [K in keyof T as `${Uncapitalize<string & K>}`]: T[K];
};
export interface FromWebTokenInit
  extends Pick<
      LowerCaseKey<AssumeRoleWithWebIdentityParams>,
      Exclude<
        keyof LowerCaseKey<AssumeRoleWithWebIdentityParams>,
        "roleSessionName"
      >
    >,
    CredentialProviderOptions {
  roleSessionName?: string;
  roleAssumerWithWebIdentity?: (
    params: AssumeRoleWithWebIdentityParams
  ) => Promise<AwsCredentialIdentity>;
  clientConfig?: STSClientConfig;
  clientPlugins?: Pluggable<any, any>[];
}
export declare const fromWebToken: (
  init: FromWebTokenInit
) => AwsCredentialIdentityProvider;
export {};
