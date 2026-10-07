import { SsoProfile } from "@aws-sdk/credential-provider-sso";
import { CredentialProviderOptions } from "@aws-sdk/types";
import { Profile } from "@smithy/types";
export declare const resolveSsoCredentials: (
  profile: string,
  options?: CredentialProviderOptions
) => Promise<import("@aws-sdk/types").AwsCredentialIdentity>;
export declare const isSsoProfile: (arg: Profile) => arg is Partial<SsoProfile>;
