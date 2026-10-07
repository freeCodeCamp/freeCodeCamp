import { AwsSdkSigV4Signer } from "@aws-sdk/core";
import { NoAuthSigner } from "@smithy/core";
import { IdentityProviderConfig } from "@smithy/types";
import { STSClientConfig } from "./STSClient";
export declare const getRuntimeConfig: (config: STSClientConfig) => {
  apiVersion: string;
  base64Decoder: import("@smithy/types").Decoder;
  base64Encoder: import("@smithy/types").Encoder;
  disableHostPrefix: boolean;
  endpointProvider: (
    params: import("./endpoint/EndpointParameters").EndpointParameters,
    context?:
      | {
          logger?: import("@smithy/types").Logger | undefined;
        }
      | undefined
  ) => import("@smithy/types").EndpointV2;
  extensions: import("./runtimeExtensions").RuntimeExtension[];
  httpAuthSchemeProvider: import("./auth/httpAuthSchemeProvider").STSHttpAuthSchemeProvider;
  httpAuthSchemes:
    | import("@smithy/types").HttpAuthScheme[]
    | (
        | {
            schemeId: string;
            identityProvider: (
              ipc: IdentityProviderConfig
            ) =>
              | import("@smithy/types").IdentityProvider<
                  import("@smithy/types").Identity
                >
              | undefined;
            signer: AwsSdkSigV4Signer;
          }
        | {
            schemeId: string;
            identityProvider: (
              ipc: IdentityProviderConfig
            ) =>
              | import("@smithy/types").IdentityProvider<
                  import("@smithy/types").Identity
                >
              | (() => Promise<{}>);
            signer: NoAuthSigner;
          }
      )[];
  logger: import("@smithy/types").Logger;
  serviceId: string;
  urlParser: import("@smithy/types").UrlParser;
  utf8Decoder: import("@smithy/types").Decoder;
  utf8Encoder: import("@smithy/types").Encoder;
};
