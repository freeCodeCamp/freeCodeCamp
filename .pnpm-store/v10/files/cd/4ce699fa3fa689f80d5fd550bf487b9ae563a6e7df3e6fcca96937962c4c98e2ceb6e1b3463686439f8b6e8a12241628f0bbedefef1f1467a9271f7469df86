import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig } from "@smithy/config-resolver";
import { EndpointInputConfig, EndpointResolvedConfig } from "@smithy/middleware-endpoint";
import { RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import { Client as __Client, DefaultsMode as __DefaultsMode, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@smithy/smithy-client";
import { BodyLengthCalculator as __BodyLengthCalculator, CheckOptionalClientConfig as __CheckOptionalClientConfig, ChecksumConstructor as __ChecksumConstructor, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Logger as __Logger, Provider as __Provider, Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser, UserAgent as __UserAgent } from "@smithy/types";
import { HttpAuthSchemeInputConfig, HttpAuthSchemeResolvedConfig } from "./auth/httpAuthSchemeProvider";
import { GetRoleCredentialsCommandInput, GetRoleCredentialsCommandOutput } from "./commands/GetRoleCredentialsCommand";
import { ListAccountRolesCommandInput, ListAccountRolesCommandOutput } from "./commands/ListAccountRolesCommand";
import { ListAccountsCommandInput, ListAccountsCommandOutput } from "./commands/ListAccountsCommand";
import { LogoutCommandInput, LogoutCommandOutput } from "./commands/LogoutCommand";
import { ClientInputEndpointParameters, ClientResolvedEndpointParameters, EndpointParameters } from "./endpoint/EndpointParameters";
import { RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";
export { __Client };
/**
 * @public
 */
export type ServiceInputTypes = GetRoleCredentialsCommandInput | ListAccountRolesCommandInput | ListAccountsCommandInput | LogoutCommandInput;
/**
 * @public
 */
export type ServiceOutputTypes = GetRoleCredentialsCommandOutput | ListAccountRolesCommandOutput | ListAccountsCommandOutput | LogoutCommandOutput;
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
export type SSOClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointInputConfig<EndpointParameters> & RetryInputConfig & HostHeaderInputConfig & UserAgentInputConfig & HttpAuthSchemeInputConfig & ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of SSOClient class constructor that set the region, credentials and other options.
 */
export interface SSOClientConfig extends SSOClientConfigType {
}
/**
 * @public
 */
export type SSOClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RuntimeExtensionsConfig & RegionResolvedConfig & EndpointResolvedConfig<EndpointParameters> & RetryResolvedConfig & HostHeaderResolvedConfig & UserAgentResolvedConfig & HttpAuthSchemeResolvedConfig & ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of SSOClient class. This is resolved and normalized from the {@link SSOClientConfig | constructor configuration interface}.
 */
export interface SSOClientResolvedConfig extends SSOClientResolvedConfigType {
}
/**
 * @public
 * <p>AWS IAM Identity Center (successor to AWS Single Sign-On) Portal is a web service that makes it easy for you to assign user access to
 *       IAM Identity Center resources such as the AWS access portal. Users can get AWS account applications and roles
 *       assigned to them and get federated into the application.</p>
 *          <note>
 *             <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and
 *           <code>identitystore</code> API namespaces will continue to retain their original name for
 *         backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p>
 *          </note>
 *          <p>This reference guide describes the IAM Identity Center Portal operations that you can call
 *       programatically and includes detailed information on data types and errors.</p>
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms, such as Java, Ruby, .Net, iOS, or Android. The SDKs provide a
 *         convenient way to create programmatic access to IAM Identity Center and other AWS services. For more
 *         information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 */
export declare class SSOClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, SSOClientResolvedConfig> {
    /**
     * The resolved configuration of SSOClient class. This is resolved and normalized from the {@link SSOClientConfig | constructor configuration interface}.
     */
    readonly config: SSOClientResolvedConfig;
    constructor(...[configuration]: __CheckOptionalClientConfig<SSOClientConfig>);
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    destroy(): void;
    private getDefaultHttpAuthSchemeParametersProvider;
    private getIdentityProviderConfigProvider;
}
