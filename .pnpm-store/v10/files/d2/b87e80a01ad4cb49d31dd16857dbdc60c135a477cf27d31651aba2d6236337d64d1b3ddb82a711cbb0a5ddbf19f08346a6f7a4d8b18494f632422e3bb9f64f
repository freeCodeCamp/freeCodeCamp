import { STSClientConfig } from "./STSClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: STSClientConfig) => {
    runtime: string;
    sha256: import("@smithy/types").HashConstructor;
    requestHandler: import("@smithy/types").NodeHttpHandlerOptions | import("@smithy/types").FetchHttpHandlerOptions | Record<string, unknown> | import("@smithy/protocol-http").HttpHandler<any> | import("@smithy/fetch-http-handler").FetchHttpHandler;
    apiVersion: string;
    urlParser: import("@smithy/types").UrlParser;
    bodyLengthChecker: import("@smithy/types").BodyLengthCalculator;
    streamCollector: import("@smithy/types").StreamCollector;
    base64Decoder: import("@smithy/types").Decoder;
    base64Encoder: import("@smithy/types").Encoder;
    utf8Decoder: import("@smithy/types").Decoder;
    utf8Encoder: import("@smithy/types").Encoder;
    disableHostPrefix: boolean;
    serviceId: string;
    useDualstackEndpoint: boolean | import("@smithy/types").Provider<boolean>;
    useFipsEndpoint: boolean | import("@smithy/types").Provider<boolean>;
    defaultUserAgentProvider: import("@smithy/types").Provider<import("@smithy/types").UserAgent>;
    region: string | import("@smithy/types").Provider<any>;
    credentialDefaultProvider: (input: any) => import("@smithy/types").AwsCredentialIdentityProvider;
    maxAttempts: number | import("@smithy/types").Provider<number>;
    retryMode: string | import("@smithy/types").Provider<string>;
    logger: import("@smithy/types").Logger;
    extensions: import("./runtimeExtensions").RuntimeExtension[];
    defaultsMode: import("@smithy/smithy-client").DefaultsMode | import("@smithy/types").Provider<import("@smithy/smithy-client").DefaultsMode>;
    endpoint?: string | import("@smithy/types").Endpoint | import("@smithy/types").Provider<import("@smithy/types").Endpoint> | import("@smithy/types").EndpointV2 | import("@smithy/types").Provider<import("@smithy/types").EndpointV2> | undefined;
    endpointProvider: (params: import("./endpoint/EndpointParameters").EndpointParameters, context?: {
        logger?: import("@smithy/types").Logger | undefined;
    } | undefined) => import("@smithy/types").EndpointV2;
    tls?: boolean | undefined;
    retryStrategy?: import("@smithy/types").RetryStrategy | import("@smithy/types").RetryStrategyV2 | undefined;
    customUserAgent?: string | import("@smithy/types").UserAgent | undefined;
    httpAuthSchemes: import("@smithy/types").HttpAuthScheme[] | ({
        schemeId: string;
        identityProvider: (ipc: import("@smithy/types").IdentityProviderConfig) => import("@smithy/types").IdentityProvider<import("@smithy/types").Identity> | undefined;
        signer: import("@aws-sdk/core").AwsSdkSigV4Signer;
    } | {
        schemeId: string;
        identityProvider: (ipc: import("@smithy/types").IdentityProviderConfig) => import("@smithy/types").IdentityProvider<import("@smithy/types").Identity> | (() => Promise<{}>);
        signer: import("@smithy/core").NoAuthSigner;
    })[];
    httpAuthSchemeProvider: import("./auth/httpAuthSchemeProvider").STSHttpAuthSchemeProvider;
    credentials?: import("@smithy/types").AwsCredentialIdentity | import("@smithy/types").AwsCredentialIdentityProvider | undefined;
    signer?: import("@smithy/types").RequestSigner | ((authScheme?: import("@smithy/types").AuthScheme | undefined) => Promise<import("@smithy/types").RequestSigner>) | undefined;
    signingEscapePath?: boolean | undefined;
    systemClockOffset?: number | undefined;
    signingRegion?: string | undefined;
    signerConstructor?: (new (options: import("@smithy/signature-v4").SignatureV4Init & import("@smithy/signature-v4").SignatureV4CryptoInit) => import("@smithy/types").RequestSigner) | undefined;
    useGlobalEndpoint?: boolean | import("@smithy/types").Provider<boolean> | undefined;
};
