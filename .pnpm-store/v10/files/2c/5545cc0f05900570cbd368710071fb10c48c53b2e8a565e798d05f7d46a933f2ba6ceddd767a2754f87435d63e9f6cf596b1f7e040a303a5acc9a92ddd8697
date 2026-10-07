import { AwsSdkSigV4Signer } from "@aws-sdk/core";
import { NoAuthSigner } from "@smithy/core";
import { NodeHttpHandler as RequestHandler } from "@smithy/node-http-handler";
import { IdentityProviderConfig } from "@smithy/types";
import { STSClientConfig } from "./STSClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: STSClientConfig) => {
    runtime: string;
    defaultsMode: import("@smithy/types").Provider<import("@smithy/smithy-client").ResolvedDefaultsMode>;
    bodyLengthChecker: import("@smithy/types").BodyLengthCalculator;
    credentialDefaultProvider: any;
    defaultUserAgentProvider: import("@smithy/types").Provider<import("@smithy/types").UserAgent>;
    httpAuthSchemes: import("@smithy/types").HttpAuthScheme[] | ({
        schemeId: string;
        identityProvider: (ipc: IdentityProviderConfig) => import("@smithy/types").IdentityProvider<import("@smithy/types").Identity> | ((idProps: Record<string, any> | undefined) => Promise<any>);
        signer: AwsSdkSigV4Signer;
    } | {
        schemeId: string;
        identityProvider: (ipc: IdentityProviderConfig) => import("@smithy/types").IdentityProvider<import("@smithy/types").Identity> | (() => Promise<{}>);
        signer: NoAuthSigner;
    })[];
    maxAttempts: number | import("@smithy/types").Provider<number>;
    region: string | import("@smithy/types").Provider<string>;
    requestHandler: RequestHandler | import("@smithy/protocol-http").HttpHandler<any>;
    retryMode: string | import("@smithy/types").Provider<string>;
    sha256: import("@smithy/types").HashConstructor;
    streamCollector: import("@smithy/types").StreamCollector;
    useDualstackEndpoint: boolean | import("@smithy/types").Provider<boolean>;
    useFipsEndpoint: boolean | import("@smithy/types").Provider<boolean>;
    apiVersion: string;
    urlParser: import("@smithy/types").UrlParser;
    base64Decoder: import("@smithy/types").Decoder;
    base64Encoder: import("@smithy/types").Encoder;
    utf8Decoder: import("@smithy/types").Decoder;
    utf8Encoder: import("@smithy/types").Encoder;
    disableHostPrefix: boolean;
    serviceId: string;
    logger: import("@smithy/types").Logger;
    extensions: import("./runtimeExtensions").RuntimeExtension[];
    endpoint?: ((string | import("@smithy/types").Endpoint | import("@smithy/types").Provider<import("@smithy/types").Endpoint> | import("@smithy/types").EndpointV2 | import("@smithy/types").Provider<import("@smithy/types").EndpointV2>) & (string | import("@smithy/types").Provider<string> | import("@smithy/types").Endpoint | import("@smithy/types").Provider<import("@smithy/types").Endpoint> | import("@smithy/types").EndpointV2 | import("@smithy/types").Provider<import("@smithy/types").EndpointV2>)) | undefined;
    endpointProvider: (params: import("./endpoint/EndpointParameters").EndpointParameters, context?: {
        logger?: import("@smithy/types").Logger | undefined;
    } | undefined) => import("@smithy/types").EndpointV2;
    tls?: boolean | undefined;
    retryStrategy?: import("@smithy/types").RetryStrategy | import("@smithy/types").RetryStrategyV2 | undefined;
    customUserAgent?: string | import("@smithy/types").UserAgent | undefined;
    httpAuthSchemeProvider: import("./auth/httpAuthSchemeProvider").STSHttpAuthSchemeProvider;
    credentials?: import("@smithy/types").AwsCredentialIdentity | import("@smithy/types").AwsCredentialIdentityProvider | undefined;
    signer?: import("@smithy/types").RequestSigner | ((authScheme?: import("@smithy/types").AuthScheme | undefined) => Promise<import("@smithy/types").RequestSigner>) | undefined;
    signingEscapePath?: boolean | undefined;
    systemClockOffset?: number | undefined;
    signingRegion?: string | undefined;
    signerConstructor?: (new (options: import("@smithy/signature-v4").SignatureV4Init & import("@smithy/signature-v4").SignatureV4CryptoInit) => import("@smithy/types").RequestSigner) | undefined;
    useGlobalEndpoint?: boolean | import("@smithy/types").Provider<boolean> | undefined;
};
