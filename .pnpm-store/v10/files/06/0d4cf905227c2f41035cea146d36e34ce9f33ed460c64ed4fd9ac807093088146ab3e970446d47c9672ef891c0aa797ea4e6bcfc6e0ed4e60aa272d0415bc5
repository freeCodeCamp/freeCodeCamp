import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
} from "@aws-sdk/middleware-host-header";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import {
  RegionInputConfig,
  RegionResolvedConfig,
} from "@smithy/config-resolver";
import {
  EndpointInputConfig,
  EndpointResolvedConfig,
} from "@smithy/middleware-endpoint";
import {
  RetryInputConfig,
  RetryResolvedConfig,
} from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";
import {
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  CreateTokenCommandInput,
  CreateTokenCommandOutput,
} from "./commands/CreateTokenCommand";
import {
  CreateTokenWithIAMCommandInput,
  CreateTokenWithIAMCommandOutput,
} from "./commands/CreateTokenWithIAMCommand";
import {
  RegisterClientCommandInput,
  RegisterClientCommandOutput,
} from "./commands/RegisterClientCommand";
import {
  StartDeviceAuthorizationCommandInput,
  StartDeviceAuthorizationCommandOutput,
} from "./commands/StartDeviceAuthorizationCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
} from "./endpoint/EndpointParameters";
import { RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";
export { __Client };
export type ServiceInputTypes =
  | CreateTokenCommandInput
  | CreateTokenWithIAMCommandInput
  | RegisterClientCommandInput
  | StartDeviceAuthorizationCommandInput;
export type ServiceOutputTypes =
  | CreateTokenCommandOutput
  | CreateTokenWithIAMCommandOutput
  | RegisterClientCommandOutput
  | StartDeviceAuthorizationCommandOutput;
export interface ClientDefaults
  extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  requestHandler?: __HttpHandlerUserInput;
  sha256?: __ChecksumConstructor | __HashConstructor;
  urlParser?: __UrlParser;
  bodyLengthChecker?: __BodyLengthCalculator;
  streamCollector?: __StreamCollector;
  base64Decoder?: __Decoder;
  base64Encoder?: __Encoder;
  utf8Decoder?: __Decoder;
  utf8Encoder?: __Encoder;
  runtime?: string;
  disableHostPrefix?: boolean;
  serviceId?: string;
  useDualstackEndpoint?: boolean | __Provider<boolean>;
  useFipsEndpoint?: boolean | __Provider<boolean>;
  defaultUserAgentProvider?: Provider<__UserAgent>;
  region?: string | __Provider<string>;
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;
  maxAttempts?: number | __Provider<number>;
  retryMode?: string | __Provider<string>;
  logger?: __Logger;
  extensions?: RuntimeExtension[];
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}
export type SSOOIDCClientConfigType = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
export interface SSOOIDCClientConfig extends SSOOIDCClientConfigType {}
export type SSOOIDCClientResolvedConfigType =
  __SmithyResolvedConfiguration<__HttpHandlerOptions> &
    Required<ClientDefaults> &
    RuntimeExtensionsConfig &
    RegionResolvedConfig &
    EndpointResolvedConfig<EndpointParameters> &
    RetryResolvedConfig &
    HostHeaderResolvedConfig &
    UserAgentResolvedConfig &
    HttpAuthSchemeResolvedConfig &
    ClientResolvedEndpointParameters;
export interface SSOOIDCClientResolvedConfig
  extends SSOOIDCClientResolvedConfigType {}
export declare class SSOOIDCClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SSOOIDCClientResolvedConfig
> {
  readonly config: SSOOIDCClientResolvedConfig;
  constructor(
    ...[configuration]: __CheckOptionalClientConfig<SSOOIDCClientConfig>
  );
  destroy(): void;
  private getDefaultHttpAuthSchemeParametersProvider;
  private getIdentityProviderConfigProvider;
}
