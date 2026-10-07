import { CredentialProviderOptions } from "@aws-sdk/types";
import { AwsCredentialIdentityProvider } from "@smithy/types";
import { FromWebTokenInit } from "./fromWebToken";
export interface FromTokenFileInit
  extends Partial<
      Pick<
        FromWebTokenInit,
        Exclude<keyof FromWebTokenInit, "webIdentityToken">
      >
    >,
    CredentialProviderOptions {
  webIdentityTokenFile?: string;
}
export declare const fromTokenFile: (
  init?: FromTokenFileInit
) => AwsCredentialIdentityProvider;
