import { AwsCredentialIdentity, HttpRequest as IHttpRequest, HttpResponse, HttpSigner } from "@smithy/types";
/**
 * @internal
 */
export declare class AwsSdkSigV4Signer implements HttpSigner {
    sign(httpRequest: IHttpRequest, 
    /**
     * `identity` is bound in {@link resolveAWSSDKSigV4Config}
     */
    identity: AwsCredentialIdentity, signingProperties: Record<string, unknown>): Promise<IHttpRequest>;
    errorHandler(signingProperties: Record<string, unknown>): (error: Error) => never;
    successHandler(httpResponse: HttpResponse | unknown, signingProperties: Record<string, unknown>): void;
}
/**
 * @deprecated renamed to {@link AwsSdkSigV4Signer}
 */
export declare const AWSSDKSigV4Signer: typeof AwsSdkSigV4Signer;
