import {
  AwsCredentialIdentity,
  HttpRequest as IHttpRequest,
  HttpResponse,
  HttpSigner,
} from "@smithy/types";
export declare class AwsSdkSigV4Signer implements HttpSigner {
  sign(
    httpRequest: IHttpRequest,
    identity: AwsCredentialIdentity,
    signingProperties: Record<string, unknown>
  ): Promise<IHttpRequest>;
  errorHandler(
    signingProperties: Record<string, unknown>
  ): (error: Error) => never;
  successHandler(
    httpResponse: HttpResponse | unknown,
    signingProperties: Record<string, unknown>
  ): void;
}
export declare const AWSSDKSigV4Signer: typeof AwsSdkSigV4Signer;
