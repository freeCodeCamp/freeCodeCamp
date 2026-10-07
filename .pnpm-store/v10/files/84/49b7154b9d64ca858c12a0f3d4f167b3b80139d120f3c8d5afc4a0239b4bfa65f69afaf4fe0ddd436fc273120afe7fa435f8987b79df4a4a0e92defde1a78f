import { HttpRequest } from "@smithy/protocol-http";
import { ServiceException } from "@smithy/smithy-client";
import {
  AuthScheme,
  AwsCredentialIdentity,
  HandlerExecutionContext,
  HttpRequest as IHttpRequest,
  HttpResponse,
  HttpSigner,
  RequestSigner,
} from "@smithy/types";

import { getDateHeader, getSkewCorrectedDate, getUpdatedSystemClockOffset } from "../utils";

/**
 * @internal
 */
const throwSigningPropertyError = <T>(name: string, property: T | undefined): T | never => {
  if (!property) {
    throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
  }
  return property;
};

/**
 * @internal
 */
interface AwsSdkSigV4Config {
  systemClockOffset: number;
  signer: (authScheme?: AuthScheme) => Promise<RequestSigner>;
}

/**
 * @internal
 */
interface AwsSdkSigV4AuthSigningProperties {
  config: AwsSdkSigV4Config;
  signer: RequestSigner;
  signingRegion?: string;
  signingName?: string;
}

/**
 * @internal
 */
interface AwsSdkSigV4Exception extends ServiceException {
  ServerTime?: string;
}

/**
 * @internal
 */
const validateSigningProperties = async (
  signingProperties: Record<string, unknown>
): Promise<AwsSdkSigV4AuthSigningProperties> => {
  const context = throwSigningPropertyError(
    "context",
    signingProperties.context as HandlerExecutionContext | undefined
  );
  const config = throwSigningPropertyError("config", signingProperties.config as AwsSdkSigV4Config | undefined);
  const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
  const signerFunction = throwSigningPropertyError(
    "signer",
    config.signer as ((authScheme?: AuthScheme) => Promise<RequestSigner>) | undefined
  );
  const signer = await signerFunction(authScheme);
  const signingRegion: string | undefined = signingProperties?.signingRegion as string | undefined;
  const signingName = signingProperties?.signingName as string | undefined;
  return {
    config,
    signer,
    signingRegion,
    signingName,
  };
};

/**
 * @internal
 */
export class AwsSdkSigV4Signer implements HttpSigner {
  async sign(
    httpRequest: IHttpRequest,
    /**
     * `identity` is bound in {@link resolveAWSSDKSigV4Config}
     */
    identity: AwsCredentialIdentity,
    signingProperties: Record<string, unknown>
  ): Promise<IHttpRequest> {
    if (!HttpRequest.isInstance(httpRequest)) {
      throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
    }
    const { config, signer, signingRegion, signingName } = await validateSigningProperties(signingProperties);

    const signedRequest = await signer.sign(httpRequest, {
      signingDate: getSkewCorrectedDate(config.systemClockOffset),
      signingRegion: signingRegion,
      signingService: signingName,
    });
    return signedRequest;
  }

  errorHandler(signingProperties: Record<string, unknown>): (error: Error) => never {
    return (error: Error) => {
      const serverTime: string | undefined =
        (error as AwsSdkSigV4Exception).ServerTime ?? getDateHeader((error as AwsSdkSigV4Exception).$response);
      if (serverTime) {
        const config = throwSigningPropertyError(
          "config",
          signingProperties.config as AwsSdkSigV4Config | undefined
        );
        config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
      }
      throw error;
    };
  }

  successHandler(httpResponse: HttpResponse | unknown, signingProperties: Record<string, unknown>): void {
    const dateHeader = getDateHeader(httpResponse);
    if (dateHeader) {
      const config = throwSigningPropertyError(
        "config",
        signingProperties.config as AwsSdkSigV4Config | undefined
      );
      config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
    }
  }
}

/**
 * @deprecated renamed to {@link AwsSdkSigV4Signer}
 */
export const AWSSDKSigV4Signer = AwsSdkSigV4Signer;
