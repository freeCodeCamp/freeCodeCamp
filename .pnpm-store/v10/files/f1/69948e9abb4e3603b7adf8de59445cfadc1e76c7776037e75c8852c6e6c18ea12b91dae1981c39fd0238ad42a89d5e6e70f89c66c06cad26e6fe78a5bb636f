import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { SSOOIDCServiceException as __BaseException } from "./SSOOIDCServiceException";
export declare class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException";
  readonly $fault: "client";
  error?: string;
  error_description?: string;
  constructor(
    opts: __ExceptionOptionType<AccessDeniedException, __BaseException>
  );
}
export declare class AuthorizationPendingException extends __BaseException {
  readonly name: "AuthorizationPendingException";
  readonly $fault: "client";
  error?: string;
  error_description?: string;
  constructor(
    opts: __ExceptionOptionType<AuthorizationPendingException, __BaseException>
  );
}
export interface CreateTokenRequest {
  clientId: string | undefined;
  clientSecret: string | undefined;
  grantType: string | undefined;
  deviceCode?: string;
  code?: string;
  refreshToken?: string;
  scope?: string[];
  redirectUri?: string;
}
export interface CreateTokenResponse {
  accessToken?: string;
  tokenType?: string;
  expiresIn?: number;
  refreshToken?: string;
  idToken?: string;
}
export declare class ExpiredTokenException extends __BaseException {
  readonly name: "ExpiredTokenException";
  readonly $fault: "client";
  error?: string;
  error_description?: string;
  constructor(
    opts: __ExceptionOptionType<ExpiredTokenException, __BaseException>
  );
}
export declare class InternalServerException extends __BaseException {
  readonly name: "InternalServerException";
  readonly $fault: "server";
  error?: string;
  error_description?: string;
  constructor(
    opts: __ExceptionOptionType<InternalServerException, __BaseException>
  );
}
export declare class InvalidClientException extends __BaseException {
  readonly name: "InvalidClientException";
  readonly $fault: "client";
  error?: string;
  error_description?: string;
  constructor(
    opts: __ExceptionOptionType<InvalidClientException, __BaseException>
  );
}
export declare class InvalidGrantException extends __BaseException {
  readonly name: "InvalidGrantException";
  readonly $fault: "client";
  error?: string;
  error_description?: string;
  constructor(
    opts: __ExceptionOptionType<InvalidGrantException, __BaseException>
  );
}
export declare class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException";
  readonly $fault: "client";
  error?: string;
  error_description?: string;
  constructor(
    opts: __ExceptionOptionType<InvalidRequestException, __BaseException>
  );
}
export declare class InvalidScopeException extends __BaseException {
  readonly name: "InvalidScopeException";
  readonly $fault: "client";
  error?: string;
  error_description?: string;
  constructor(
    opts: __ExceptionOptionType<InvalidScopeException, __BaseException>
  );
}
export declare class SlowDownException extends __BaseException {
  readonly name: "SlowDownException";
  readonly $fault: "client";
  error?: string;
  error_description?: string;
  constructor(opts: __ExceptionOptionType<SlowDownException, __BaseException>);
}
export declare class UnauthorizedClientException extends __BaseException {
  readonly name: "UnauthorizedClientException";
  readonly $fault: "client";
  error?: string;
  error_description?: string;
  constructor(
    opts: __ExceptionOptionType<UnauthorizedClientException, __BaseException>
  );
}
export declare class UnsupportedGrantTypeException extends __BaseException {
  readonly name: "UnsupportedGrantTypeException";
  readonly $fault: "client";
  error?: string;
  error_description?: string;
  constructor(
    opts: __ExceptionOptionType<UnsupportedGrantTypeException, __BaseException>
  );
}
export interface CreateTokenWithIAMRequest {
  clientId: string | undefined;
  grantType: string | undefined;
  code?: string;
  refreshToken?: string;
  assertion?: string;
  scope?: string[];
  redirectUri?: string;
  subjectToken?: string;
  subjectTokenType?: string;
  requestedTokenType?: string;
}
export interface CreateTokenWithIAMResponse {
  accessToken?: string;
  tokenType?: string;
  expiresIn?: number;
  refreshToken?: string;
  idToken?: string;
  issuedTokenType?: string;
  scope?: string[];
}
export declare class InvalidRequestRegionException extends __BaseException {
  readonly name: "InvalidRequestRegionException";
  readonly $fault: "client";
  error?: string;
  error_description?: string;
  endpoint?: string;
  region?: string;
  constructor(
    opts: __ExceptionOptionType<InvalidRequestRegionException, __BaseException>
  );
}
export declare class InvalidClientMetadataException extends __BaseException {
  readonly name: "InvalidClientMetadataException";
  readonly $fault: "client";
  error?: string;
  error_description?: string;
  constructor(
    opts: __ExceptionOptionType<InvalidClientMetadataException, __BaseException>
  );
}
export interface RegisterClientRequest {
  clientName: string | undefined;
  clientType: string | undefined;
  scopes?: string[];
}
export interface RegisterClientResponse {
  clientId?: string;
  clientSecret?: string;
  clientIdIssuedAt?: number;
  clientSecretExpiresAt?: number;
  authorizationEndpoint?: string;
  tokenEndpoint?: string;
}
export interface StartDeviceAuthorizationRequest {
  clientId: string | undefined;
  clientSecret: string | undefined;
  startUrl: string | undefined;
}
export interface StartDeviceAuthorizationResponse {
  deviceCode?: string;
  userCode?: string;
  verificationUri?: string;
  verificationUriComplete?: string;
  expiresIn?: number;
  interval?: number;
}
export declare const CreateTokenRequestFilterSensitiveLog: (
  obj: CreateTokenRequest
) => any;
export declare const CreateTokenResponseFilterSensitiveLog: (
  obj: CreateTokenResponse
) => any;
export declare const CreateTokenWithIAMRequestFilterSensitiveLog: (
  obj: CreateTokenWithIAMRequest
) => any;
export declare const CreateTokenWithIAMResponseFilterSensitiveLog: (
  obj: CreateTokenWithIAMResponse
) => any;
export declare const RegisterClientResponseFilterSensitiveLog: (
  obj: RegisterClientResponse
) => any;
export declare const StartDeviceAuthorizationRequestFilterSensitiveLog: (
  obj: StartDeviceAuthorizationRequest
) => any;
