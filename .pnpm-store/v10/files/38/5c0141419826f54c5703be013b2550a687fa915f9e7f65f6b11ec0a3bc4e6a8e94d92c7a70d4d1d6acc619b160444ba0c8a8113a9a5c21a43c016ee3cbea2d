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
  AssumeRoleCommandInput,
  AssumeRoleCommandOutput,
} from "./commands/AssumeRoleCommand";
import {
  AssumeRoleWithSAMLCommandInput,
  AssumeRoleWithSAMLCommandOutput,
} from "./commands/AssumeRoleWithSAMLCommand";
import {
  AssumeRoleWithWebIdentityCommandInput,
  AssumeRoleWithWebIdentityCommandOutput,
} from "./commands/AssumeRoleWithWebIdentityCommand";
import {
  DecodeAuthorizationMessageCommandInput,
  DecodeAuthorizationMessageCommandOutput,
} from "./commands/DecodeAuthorizationMessageCommand";
import {
  GetAccessKeyInfoCommandInput,
  GetAccessKeyInfoCommandOutput,
} from "./commands/GetAccessKeyInfoCommand";
import {
  GetCallerIdentityCommandInput,
  GetCallerIdentityCommandOutput,
} from "./commands/GetCallerIdentityCommand";
import {
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput,
} from "./commands/GetFederationTokenCommand";
import {
  GetSessionTokenCommandInput,
  GetSessionTokenCommandOutput,
} from "./commands/GetSessionTokenCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
} from "./endpoint/EndpointParameters";
import { RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";
export { __Client };
export type ServiceInputTypes =
  | AssumeRoleCommandInput
  | AssumeRoleWithSAMLCommandInput
  | AssumeRoleWithWebIdentityCommandInput
  | DecodeAuthorizationMessageCommandInput
  | GetAccessKeyInfoCommandInput
  | GetCallerIdentityCommandInput
  | GetFederationTokenCommandInput
  | GetSessionTokenCommandInput;
export type ServiceOutputTypes =
  | AssumeRoleCommandOutput
  | AssumeRoleWithSAMLCommandOutput
  | AssumeRoleWithWebIdentityCommandOutput
  | DecodeAuthorizationMessageCommandOutput
  | GetAccessKeyInfoCommandOutput
  | GetCallerIdentityCommandOutput
  | GetFederationTokenCommandOutput
  | GetSessionTokenCommandOutput;
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
export type STSClientConfigType = Partial<
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
export interface STSClientConfig extends STSClientConfigType {}
export type STSClientResolvedConfigType =
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
export interface STSClientResolvedConfig extends STSClientResolvedConfigType {}
export declare class STSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  STSClientResolvedConfig
> {
  readonly config: STSClientResolvedConfig;
  constructor(...[configuration]: __CheckOptionalClientConfig<STSClientConfig>);
  destroy(): void;
  private getDefaultHttpAuthSchemeParametersProvider;
  private getIdentityProviderConfigProvider;
}
