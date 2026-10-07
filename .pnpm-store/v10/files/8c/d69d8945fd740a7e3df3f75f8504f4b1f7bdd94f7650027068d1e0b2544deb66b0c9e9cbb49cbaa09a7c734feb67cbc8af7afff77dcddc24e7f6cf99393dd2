import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig } from "@smithy/config-resolver";
import { EndpointInputConfig, EndpointResolvedConfig } from "@smithy/middleware-endpoint";
import { RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import { Client as __Client, DefaultsMode as __DefaultsMode, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@smithy/smithy-client";
import { AwsCredentialIdentityProvider, BodyLengthCalculator as __BodyLengthCalculator, CheckOptionalClientConfig as __CheckOptionalClientConfig, ChecksumConstructor as __ChecksumConstructor, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Logger as __Logger, Provider as __Provider, Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser, UserAgent as __UserAgent } from "@smithy/types";
import { HttpAuthSchemeInputConfig, HttpAuthSchemeResolvedConfig } from "./auth/httpAuthSchemeProvider";
import { AssumeRoleCommandInput, AssumeRoleCommandOutput } from "./commands/AssumeRoleCommand";
import { AssumeRoleWithSAMLCommandInput, AssumeRoleWithSAMLCommandOutput } from "./commands/AssumeRoleWithSAMLCommand";
import { AssumeRoleWithWebIdentityCommandInput, AssumeRoleWithWebIdentityCommandOutput } from "./commands/AssumeRoleWithWebIdentityCommand";
import { DecodeAuthorizationMessageCommandInput, DecodeAuthorizationMessageCommandOutput } from "./commands/DecodeAuthorizationMessageCommand";
import { GetAccessKeyInfoCommandInput, GetAccessKeyInfoCommandOutput } from "./commands/GetAccessKeyInfoCommand";
import { GetCallerIdentityCommandInput, GetCallerIdentityCommandOutput } from "./commands/GetCallerIdentityCommand";
import { GetFederationTokenCommandInput, GetFederationTokenCommandOutput } from "./commands/GetFederationTokenCommand";
import { GetSessionTokenCommandInput, GetSessionTokenCommandOutput } from "./commands/GetSessionTokenCommand";
import { ClientInputEndpointParameters, ClientResolvedEndpointParameters, EndpointParameters } from "./endpoint/EndpointParameters";
import { RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";
export { __Client };
/**
 * @public
 */
export type ServiceInputTypes = AssumeRoleCommandInput | AssumeRoleWithSAMLCommandInput | AssumeRoleWithWebIdentityCommandInput | DecodeAuthorizationMessageCommandInput | GetAccessKeyInfoCommandInput | GetCallerIdentityCommandInput | GetFederationTokenCommandInput | GetSessionTokenCommandInput;
/**
 * @public
 */
export type ServiceOutputTypes = AssumeRoleCommandOutput | AssumeRoleWithSAMLCommandOutput | AssumeRoleWithWebIdentityCommandOutput | DecodeAuthorizationMessageCommandOutput | GetAccessKeyInfoCommandOutput | GetCallerIdentityCommandOutput | GetFederationTokenCommandOutput | GetSessionTokenCommandOutput;
/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
    /**
     * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
     */
    requestHandler?: __HttpHandlerUserInput;
    /**
     * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
     * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
     * @internal
     */
    sha256?: __ChecksumConstructor | __HashConstructor;
    /**
     * The function that will be used to convert strings into HTTP endpoints.
     * @internal
     */
    urlParser?: __UrlParser;
    /**
     * A function that can calculate the length of a request body.
     * @internal
     */
    bodyLengthChecker?: __BodyLengthCalculator;
    /**
     * A function that converts a stream into an array of bytes.
     * @internal
     */
    streamCollector?: __StreamCollector;
    /**
     * The function that will be used to convert a base64-encoded string to a byte array.
     * @internal
     */
    base64Decoder?: __Decoder;
    /**
     * The function that will be used to convert binary data to a base64-encoded string.
     * @internal
     */
    base64Encoder?: __Encoder;
    /**
     * The function that will be used to convert a UTF8-encoded string to a byte array.
     * @internal
     */
    utf8Decoder?: __Decoder;
    /**
     * The function that will be used to convert binary data to a UTF-8 encoded string.
     * @internal
     */
    utf8Encoder?: __Encoder;
    /**
     * The runtime environment.
     * @internal
     */
    runtime?: string;
    /**
     * Disable dynamically changing the endpoint of the client based on the hostPrefix
     * trait of an operation.
     */
    disableHostPrefix?: boolean;
    /**
     * Unique service identifier.
     * @internal
     */
    serviceId?: string;
    /**
     * Enables IPv6/IPv4 dualstack endpoint.
     */
    useDualstackEndpoint?: boolean | __Provider<boolean>;
    /**
     * Enables FIPS compatible endpoints.
     */
    useFipsEndpoint?: boolean | __Provider<boolean>;
    /**
     * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
     * @internal
     */
    defaultUserAgentProvider?: Provider<__UserAgent>;
    /**
     * The AWS region to which this client will send requests
     */
    region?: string | __Provider<string>;
    /**
     * Default credentials provider; Not available in browser runtime.
     * @deprecated
     * @internal
     */
    credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;
    /**
     * Value for how many times a request will be made at most in case of retry.
     */
    maxAttempts?: number | __Provider<number>;
    /**
     * Specifies which retry algorithm to use.
     * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
     *
     */
    retryMode?: string | __Provider<string>;
    /**
     * Optional logger for logging debug/info/warn/error.
     */
    logger?: __Logger;
    /**
     * Optional extensions
     */
    extensions?: RuntimeExtension[];
    /**
     * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
     */
    defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}
/**
 * @public
 */
export type STSClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointInputConfig<EndpointParameters> & RetryInputConfig & HostHeaderInputConfig & UserAgentInputConfig & HttpAuthSchemeInputConfig & ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of STSClient class constructor that set the region, credentials and other options.
 */
export interface STSClientConfig extends STSClientConfigType {
}
/**
 * @public
 */
export type STSClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RuntimeExtensionsConfig & RegionResolvedConfig & EndpointResolvedConfig<EndpointParameters> & RetryResolvedConfig & HostHeaderResolvedConfig & UserAgentResolvedConfig & HttpAuthSchemeResolvedConfig & ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of STSClient class. This is resolved and normalized from the {@link STSClientConfig | constructor configuration interface}.
 */
export interface STSClientResolvedConfig extends STSClientResolvedConfigType {
}
/**
 * @public
 * <fullname>Security Token Service</fullname>
 *          <p>Security Token Service (STS) enables you to request temporary, limited-privilege
 *       credentials for users. This guide provides descriptions of the STS API. For
 *       more information about using this service, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary Security Credentials</a>.</p>
 */
export declare class STSClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, STSClientResolvedConfig> {
    /**
     * The resolved configuration of STSClient class. This is resolved and normalized from the {@link STSClientConfig | constructor configuration interface}.
     */
    readonly config: STSClientResolvedConfig;
    constructor(...[configuration]: __CheckOptionalClientConfig<STSClientConfig>);
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    destroy(): void;
    private getDefaultHttpAuthSchemeParametersProvider;
    private getIdentityProviderConfigProvider;
}
