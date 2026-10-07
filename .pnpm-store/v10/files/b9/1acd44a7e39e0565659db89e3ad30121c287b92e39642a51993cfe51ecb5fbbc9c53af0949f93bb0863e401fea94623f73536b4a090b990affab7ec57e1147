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
  CreateIdentityPoolCommandInput,
  CreateIdentityPoolCommandOutput,
} from "./commands/CreateIdentityPoolCommand";
import {
  DeleteIdentitiesCommandInput,
  DeleteIdentitiesCommandOutput,
} from "./commands/DeleteIdentitiesCommand";
import {
  DeleteIdentityPoolCommandInput,
  DeleteIdentityPoolCommandOutput,
} from "./commands/DeleteIdentityPoolCommand";
import {
  DescribeIdentityCommandInput,
  DescribeIdentityCommandOutput,
} from "./commands/DescribeIdentityCommand";
import {
  DescribeIdentityPoolCommandInput,
  DescribeIdentityPoolCommandOutput,
} from "./commands/DescribeIdentityPoolCommand";
import {
  GetCredentialsForIdentityCommandInput,
  GetCredentialsForIdentityCommandOutput,
} from "./commands/GetCredentialsForIdentityCommand";
import { GetIdCommandInput, GetIdCommandOutput } from "./commands/GetIdCommand";
import {
  GetIdentityPoolRolesCommandInput,
  GetIdentityPoolRolesCommandOutput,
} from "./commands/GetIdentityPoolRolesCommand";
import {
  GetOpenIdTokenCommandInput,
  GetOpenIdTokenCommandOutput,
} from "./commands/GetOpenIdTokenCommand";
import {
  GetOpenIdTokenForDeveloperIdentityCommandInput,
  GetOpenIdTokenForDeveloperIdentityCommandOutput,
} from "./commands/GetOpenIdTokenForDeveloperIdentityCommand";
import {
  GetPrincipalTagAttributeMapCommandInput,
  GetPrincipalTagAttributeMapCommandOutput,
} from "./commands/GetPrincipalTagAttributeMapCommand";
import {
  ListIdentitiesCommandInput,
  ListIdentitiesCommandOutput,
} from "./commands/ListIdentitiesCommand";
import {
  ListIdentityPoolsCommandInput,
  ListIdentityPoolsCommandOutput,
} from "./commands/ListIdentityPoolsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  LookupDeveloperIdentityCommandInput,
  LookupDeveloperIdentityCommandOutput,
} from "./commands/LookupDeveloperIdentityCommand";
import {
  MergeDeveloperIdentitiesCommandInput,
  MergeDeveloperIdentitiesCommandOutput,
} from "./commands/MergeDeveloperIdentitiesCommand";
import {
  SetIdentityPoolRolesCommandInput,
  SetIdentityPoolRolesCommandOutput,
} from "./commands/SetIdentityPoolRolesCommand";
import {
  SetPrincipalTagAttributeMapCommandInput,
  SetPrincipalTagAttributeMapCommandOutput,
} from "./commands/SetPrincipalTagAttributeMapCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput,
} from "./commands/TagResourceCommand";
import {
  UnlinkDeveloperIdentityCommandInput,
  UnlinkDeveloperIdentityCommandOutput,
} from "./commands/UnlinkDeveloperIdentityCommand";
import {
  UnlinkIdentityCommandInput,
  UnlinkIdentityCommandOutput,
} from "./commands/UnlinkIdentityCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateIdentityPoolCommandInput,
  UpdateIdentityPoolCommandOutput,
} from "./commands/UpdateIdentityPoolCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
} from "./endpoint/EndpointParameters";
import { RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";
export { __Client };
export type ServiceInputTypes =
  | CreateIdentityPoolCommandInput
  | DeleteIdentitiesCommandInput
  | DeleteIdentityPoolCommandInput
  | DescribeIdentityCommandInput
  | DescribeIdentityPoolCommandInput
  | GetCredentialsForIdentityCommandInput
  | GetIdCommandInput
  | GetIdentityPoolRolesCommandInput
  | GetOpenIdTokenCommandInput
  | GetOpenIdTokenForDeveloperIdentityCommandInput
  | GetPrincipalTagAttributeMapCommandInput
  | ListIdentitiesCommandInput
  | ListIdentityPoolsCommandInput
  | ListTagsForResourceCommandInput
  | LookupDeveloperIdentityCommandInput
  | MergeDeveloperIdentitiesCommandInput
  | SetIdentityPoolRolesCommandInput
  | SetPrincipalTagAttributeMapCommandInput
  | TagResourceCommandInput
  | UnlinkDeveloperIdentityCommandInput
  | UnlinkIdentityCommandInput
  | UntagResourceCommandInput
  | UpdateIdentityPoolCommandInput;
export type ServiceOutputTypes =
  | CreateIdentityPoolCommandOutput
  | DeleteIdentitiesCommandOutput
  | DeleteIdentityPoolCommandOutput
  | DescribeIdentityCommandOutput
  | DescribeIdentityPoolCommandOutput
  | GetCredentialsForIdentityCommandOutput
  | GetIdCommandOutput
  | GetIdentityPoolRolesCommandOutput
  | GetOpenIdTokenCommandOutput
  | GetOpenIdTokenForDeveloperIdentityCommandOutput
  | GetPrincipalTagAttributeMapCommandOutput
  | ListIdentitiesCommandOutput
  | ListIdentityPoolsCommandOutput
  | ListTagsForResourceCommandOutput
  | LookupDeveloperIdentityCommandOutput
  | MergeDeveloperIdentitiesCommandOutput
  | SetIdentityPoolRolesCommandOutput
  | SetPrincipalTagAttributeMapCommandOutput
  | TagResourceCommandOutput
  | UnlinkDeveloperIdentityCommandOutput
  | UnlinkIdentityCommandOutput
  | UntagResourceCommandOutput
  | UpdateIdentityPoolCommandOutput;
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
export type CognitoIdentityClientConfigType = Partial<
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
export interface CognitoIdentityClientConfig
  extends CognitoIdentityClientConfigType {}
export type CognitoIdentityClientResolvedConfigType =
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
export interface CognitoIdentityClientResolvedConfig
  extends CognitoIdentityClientResolvedConfigType {}
export declare class CognitoIdentityClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CognitoIdentityClientResolvedConfig
> {
  readonly config: CognitoIdentityClientResolvedConfig;
  constructor(
    ...[configuration]: __CheckOptionalClientConfig<CognitoIdentityClientConfig>
  );
  destroy(): void;
  private getDefaultHttpAuthSchemeParametersProvider;
  private getIdentityProviderConfigProvider;
}
