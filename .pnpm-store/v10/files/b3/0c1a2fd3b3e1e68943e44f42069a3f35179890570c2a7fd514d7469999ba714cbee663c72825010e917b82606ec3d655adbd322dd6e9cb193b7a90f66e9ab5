import { SignatureV4CryptoInit, SignatureV4Init } from "@smithy/signature-v4";
import {
  AuthScheme,
  AwsCredentialIdentity,
  AwsCredentialIdentityProvider,
  ChecksumConstructor,
  HashConstructor,
  MemoizedProvider,
  Provider,
  RegionInfoProvider,
  RequestSigner,
} from "@smithy/types";
export interface AwsSdkSigV4AuthInputConfig {
  credentials?: AwsCredentialIdentity | AwsCredentialIdentityProvider;
  signer?:
    | RequestSigner
    | ((authScheme?: AuthScheme) => Promise<RequestSigner>);
  signingEscapePath?: boolean;
  systemClockOffset?: number;
  signingRegion?: string;
  signerConstructor?: new (
    options: SignatureV4Init & SignatureV4CryptoInit
  ) => RequestSigner;
}
export interface AwsSdkSigV4PreviouslyResolved {
  credentialDefaultProvider?: (
    input: any
  ) => MemoizedProvider<AwsCredentialIdentity>;
  region: string | Provider<string>;
  sha256: ChecksumConstructor | HashConstructor;
  signingName?: string;
  regionInfoProvider?: RegionInfoProvider;
  defaultSigningName?: string;
  serviceId: string;
  useFipsEndpoint: Provider<boolean>;
  useDualstackEndpoint: Provider<boolean>;
}
export interface AwsSdkSigV4AuthResolvedConfig {
  credentials: AwsCredentialIdentityProvider;
  signer: (authScheme?: AuthScheme) => Promise<RequestSigner>;
  signingEscapePath: boolean;
  systemClockOffset: number;
}
export declare const resolveAwsSdkSigV4Config: <T>(
  config: T & AwsSdkSigV4AuthInputConfig & AwsSdkSigV4PreviouslyResolved
) => T & AwsSdkSigV4AuthResolvedConfig;
export interface AWSSDKSigV4AuthInputConfig
  extends AwsSdkSigV4AuthInputConfig {}
export interface AWSSDKSigV4PreviouslyResolved
  extends AwsSdkSigV4PreviouslyResolved {}
export interface AWSSDKSigV4AuthResolvedConfig
  extends AwsSdkSigV4AuthResolvedConfig {}
export declare const resolveAWSSDKSigV4Config: <T>(
  config: T & AwsSdkSigV4AuthInputConfig & AwsSdkSigV4PreviouslyResolved
) => T & AwsSdkSigV4AuthResolvedConfig;
