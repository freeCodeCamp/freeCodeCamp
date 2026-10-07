import { SignatureV4CryptoInit, SignatureV4Init } from "@smithy/signature-v4";
import { AuthScheme, AwsCredentialIdentity, AwsCredentialIdentityProvider, ChecksumConstructor, HashConstructor, MemoizedProvider, Provider, RegionInfoProvider, RequestSigner } from "@smithy/types";
/**
 * @internal
 */
export interface AwsSdkSigV4AuthInputConfig {
    /**
     * The credentials used to sign requests.
     */
    credentials?: AwsCredentialIdentity | AwsCredentialIdentityProvider;
    /**
     * The signer to use when signing requests.
     */
    signer?: RequestSigner | ((authScheme?: AuthScheme) => Promise<RequestSigner>);
    /**
     * Whether to escape request path when signing the request.
     */
    signingEscapePath?: boolean;
    /**
     * An offset value in milliseconds to apply to all signing times.
     */
    systemClockOffset?: number;
    /**
     * The region where you want to sign your request against. This
     * can be different to the region in the endpoint.
     */
    signingRegion?: string;
    /**
     * The injectable SigV4-compatible signer class constructor. If not supplied,
     * regular SignatureV4 constructor will be used.
     *
     * @internal
     */
    signerConstructor?: new (options: SignatureV4Init & SignatureV4CryptoInit) => RequestSigner;
}
/**
 * @internal
 */
export interface AwsSdkSigV4PreviouslyResolved {
    credentialDefaultProvider?: (input: any) => MemoizedProvider<AwsCredentialIdentity>;
    region: string | Provider<string>;
    sha256: ChecksumConstructor | HashConstructor;
    signingName?: string;
    regionInfoProvider?: RegionInfoProvider;
    defaultSigningName?: string;
    serviceId: string;
    useFipsEndpoint: Provider<boolean>;
    useDualstackEndpoint: Provider<boolean>;
}
/**
 * @internal
 */
export interface AwsSdkSigV4AuthResolvedConfig {
    /**
     * Resolved value for input config {@link AwsSdkSigV4AuthInputConfig.credentials}
     * This provider MAY memoize the loaded credentials for certain period.
     * See {@link MemoizedProvider} for more information.
     */
    credentials: AwsCredentialIdentityProvider;
    /**
     * Resolved value for input config {@link AwsSdkSigV4AuthInputConfig.signer}
     */
    signer: (authScheme?: AuthScheme) => Promise<RequestSigner>;
    /**
     * Resolved value for input config {@link AwsSdkSigV4AuthInputConfig.signingEscapePath}
     */
    signingEscapePath: boolean;
    /**
     * Resolved value for input config {@link AwsSdkSigV4AuthInputConfig.systemClockOffset}
     */
    systemClockOffset: number;
}
/**
 * @internal
 */
export declare const resolveAwsSdkSigV4Config: <T>(config: T & AwsSdkSigV4AuthInputConfig & AwsSdkSigV4PreviouslyResolved) => T & AwsSdkSigV4AuthResolvedConfig;
/**
 * @deprecated renamed to {@link AwsSdkSigV4AuthInputConfig}
 */
export interface AWSSDKSigV4AuthInputConfig extends AwsSdkSigV4AuthInputConfig {
}
/**
 * @deprecated renamed to {@link AwsSdkSigV4PreviouslyResolved}
 */
export interface AWSSDKSigV4PreviouslyResolved extends AwsSdkSigV4PreviouslyResolved {
}
/**
 * @deprecated renamed to {@link AwsSdkSigV4AuthResolvedConfig}
 */
export interface AWSSDKSigV4AuthResolvedConfig extends AwsSdkSigV4AuthResolvedConfig {
}
/**
 * @deprecated renamed to {@link resolveAwsSdkSigV4Config}
 */
export declare const resolveAWSSDKSigV4Config: <T>(config: T & AwsSdkSigV4AuthInputConfig & AwsSdkSigV4PreviouslyResolved) => T & AwsSdkSigV4AuthResolvedConfig;
