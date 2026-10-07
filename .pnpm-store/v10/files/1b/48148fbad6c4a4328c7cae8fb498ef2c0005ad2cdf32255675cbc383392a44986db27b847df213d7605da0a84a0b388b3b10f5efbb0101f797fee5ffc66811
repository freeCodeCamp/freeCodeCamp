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
  GetRoleCredentialsCommandInput,
  GetRoleCredentialsCommandOutput,
} from "./commands/GetRoleCredentialsCommand";
import {
  ListAccountRolesCommandInput,
  ListAccountRolesCommandOutput,
} from "./commands/ListAccountRolesCommand";
import {
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
} from "./commands/ListAccountsCommand";
import {
  LogoutCommandInput,
  LogoutCommandOutput,
} from "./commands/LogoutCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
} from "./endpoint/EndpointParameters";
import { RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";
export { __Client };
export type ServiceInputTypes =
  | GetRoleCredentialsCommandInput
  | ListAccountRolesCommandInput
  | ListAccountsCommandInput
  | LogoutCommandInput;
export type ServiceOutputTypes =
  | GetRoleCredentialsCommandOutput
  | ListAccountRolesCommandOutput
  | ListAccountsCommandOutput
  | LogoutCommandOutput;
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
  maxAttempts?: number | __Provider<number>;
  retryMode?: string | __Provider<string>;
  logger?: __Logger;
  extensions?: RuntimeExtension[];
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}
export type SSOClientConfigType = Partial<
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
export interface SSOClientConfig extends SSOClientConfigType {}
export type SSOClientResolvedConfigType =
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
export interface SSOClientResolvedConfig extends SSOClientResolvedConfigType {}
export declare class SSOClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SSOClientResolvedConfig
> {
  readonly config: SSOClientResolvedConfig;
  constructor(...[configuration]: __CheckOptionalClientConfig<SSOClientConfig>);
  destroy(): void;
  private getDefaultHttpAuthSchemeParametersProvider;
  private getIdentityProviderConfigProvider;
}
