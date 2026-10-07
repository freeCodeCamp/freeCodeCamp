import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig } from "@smithy/config-resolver";
import { EndpointInputConfig, EndpointResolvedConfig } from "@smithy/middleware-endpoint";
import { RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import { Client as __Client, DefaultsMode as __DefaultsMode, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@smithy/smithy-client";
import { AwsCredentialIdentityProvider, BodyLengthCalculator as __BodyLengthCalculator, CheckOptionalClientConfig as __CheckOptionalClientConfig, ChecksumConstructor as __ChecksumConstructor, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Logger as __Logger, Provider as __Provider, Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser, UserAgent as __UserAgent } from "@smithy/types";
import { HttpAuthSchemeInputConfig, HttpAuthSchemeResolvedConfig } from "./auth/httpAuthSchemeProvider";
import { CreateTokenCommandInput, CreateTokenCommandOutput } from "./commands/CreateTokenCommand";
import { CreateTokenWithIAMCommandInput, CreateTokenWithIAMCommandOutput } from "./commands/CreateTokenWithIAMCommand";
import { RegisterClientCommandInput, RegisterClientCommandOutput } from "./commands/RegisterClientCommand";
import { StartDeviceAuthorizationCommandInput, StartDeviceAuthorizationCommandOutput } from "./commands/StartDeviceAuthorizationCommand";
import { ClientInputEndpointParameters, ClientResolvedEndpointParameters, EndpointParameters } from "./endpoint/EndpointParameters";
import { RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";
export { __Client };
/**
 * @public
 */
export type ServiceInputTypes = CreateTokenCommandInput | CreateTokenWithIAMCommandInput | RegisterClientCommandInput | StartDeviceAuthorizationCommandInput;
/**
 * @public
 */
export type ServiceOutputTypes = CreateTokenCommandOutput | CreateTokenWithIAMCommandOutput | RegisterClientCommandOutput | StartDeviceAuthorizationCommandOutput;
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
export type SSOOIDCClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointInputConfig<EndpointParameters> & RetryInputConfig & HostHeaderInputConfig & UserAgentInputConfig & HttpAuthSchemeInputConfig & ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of SSOOIDCClient class constructor that set the region, credentials and other options.
 */
export interface SSOOIDCClientConfig extends SSOOIDCClientConfigType {
}
/**
 * @public
 */
export type SSOOIDCClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RuntimeExtensionsConfig & RegionResolvedConfig & EndpointResolvedConfig<EndpointParameters> & RetryResolvedConfig & HostHeaderResolvedConfig & UserAgentResolvedConfig & HttpAuthSchemeResolvedConfig & ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of SSOOIDCClient class. This is resolved and normalized from the {@link SSOOIDCClientConfig | constructor configuration interface}.
 */
export interface SSOOIDCClientResolvedConfig extends SSOOIDCClientResolvedConfigType {
}
/**
 * @public
 * <p>IAM Identity Center OpenID Connect (OIDC) is a web service that enables a client (such as CLI
 *       or a native application) to register with IAM Identity Center. The service also enables the client to
 *       fetch the user’s access token upon successful authentication and authorization with
 *       IAM Identity Center.</p>
 *          <note>
 *             <p>IAM Identity Center uses the <code>sso</code> and <code>identitystore</code> API namespaces.</p>
 *          </note>
 *          <p>
 *             <b>Considerations for Using This Guide</b>
 *          </p>
 *          <p>Before you begin using this guide, we recommend that you first review the following
 *       important information about how the IAM Identity Center OIDC service works.</p>
 *          <ul>
 *             <li>
 *                <p>The IAM Identity Center OIDC service currently implements only the portions of the OAuth 2.0 Device
 *           Authorization Grant standard (<a href="https://tools.ietf.org/html/rfc8628">https://tools.ietf.org/html/rfc8628</a>) that are necessary to enable single
 *           sign-on authentication with the CLI. </p>
 *             </li>
 *             <li>
 *                <p>With older versions of the CLI, the service only emits OIDC access tokens, so to
 *           obtain a new token, users must explicitly re-authenticate. To access the OIDC flow that
 *           supports token refresh and doesn’t require re-authentication, update to the latest CLI
 *           version (1.27.10 for CLI V1 and 2.9.0 for CLI V2) with support for OIDC token refresh and
 *           configurable IAM Identity Center session durations. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/configure-user-session.html">Configure Amazon Web Services access portal session duration </a>. </p>
 *             </li>
 *             <li>
 *                <p>The access tokens provided by this service grant access to all Amazon Web Services account
 *           entitlements assigned to an IAM Identity Center user, not just a particular application.</p>
 *             </li>
 *             <li>
 *                <p>The documentation in this guide does not describe the mechanism to convert the access
 *           token into Amazon Web Services Auth (“sigv4”) credentials for use with IAM-protected Amazon Web Services service
 *           endpoints. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/PortalAPIReference/API_GetRoleCredentials.html">GetRoleCredentials</a> in the <i>IAM Identity Center Portal API Reference
 *             Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <p>For general information about IAM Identity Center, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">What is
 *         IAM Identity Center?</a> in the <i>IAM Identity Center User Guide</i>.</p>
 */
export declare class SSOOIDCClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, SSOOIDCClientResolvedConfig> {
    /**
     * The resolved configuration of SSOOIDCClient class. This is resolved and normalized from the {@link SSOOIDCClientConfig | constructor configuration interface}.
     */
    readonly config: SSOOIDCClientResolvedConfig;
    constructor(...[configuration]: __CheckOptionalClientConfig<SSOOIDCClientConfig>);
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    destroy(): void;
    private getDefaultHttpAuthSchemeParametersProvider;
    private getIdentityProviderConfigProvider;
}
