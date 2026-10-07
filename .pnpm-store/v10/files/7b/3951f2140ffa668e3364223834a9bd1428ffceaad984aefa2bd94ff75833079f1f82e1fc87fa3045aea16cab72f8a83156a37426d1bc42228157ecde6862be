import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { STSServiceException as __BaseException } from "./STSServiceException";
export interface AssumedRoleUser {
  AssumedRoleId: string | undefined;
  Arn: string | undefined;
}
export interface PolicyDescriptorType {
  arn?: string;
}
export interface ProvidedContext {
  ProviderArn?: string;
  ContextAssertion?: string;
}
export interface Tag {
  Key: string | undefined;
  Value: string | undefined;
}
export interface AssumeRoleRequest {
  RoleArn: string | undefined;
  RoleSessionName: string | undefined;
  PolicyArns?: PolicyDescriptorType[];
  Policy?: string;
  DurationSeconds?: number;
  Tags?: Tag[];
  TransitiveTagKeys?: string[];
  ExternalId?: string;
  SerialNumber?: string;
  TokenCode?: string;
  SourceIdentity?: string;
  ProvidedContexts?: ProvidedContext[];
}
export interface Credentials {
  AccessKeyId: string | undefined;
  SecretAccessKey: string | undefined;
  SessionToken: string | undefined;
  Expiration: Date | undefined;
}
export interface AssumeRoleResponse {
  Credentials?: Credentials;
  AssumedRoleUser?: AssumedRoleUser;
  PackedPolicySize?: number;
  SourceIdentity?: string;
}
export declare class ExpiredTokenException extends __BaseException {
  readonly name: "ExpiredTokenException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ExpiredTokenException, __BaseException>
  );
}
export declare class MalformedPolicyDocumentException extends __BaseException {
  readonly name: "MalformedPolicyDocumentException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      MalformedPolicyDocumentException,
      __BaseException
    >
  );
}
export declare class PackedPolicyTooLargeException extends __BaseException {
  readonly name: "PackedPolicyTooLargeException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<PackedPolicyTooLargeException, __BaseException>
  );
}
export declare class RegionDisabledException extends __BaseException {
  readonly name: "RegionDisabledException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<RegionDisabledException, __BaseException>
  );
}
export interface AssumeRoleWithSAMLRequest {
  RoleArn: string | undefined;
  PrincipalArn: string | undefined;
  SAMLAssertion: string | undefined;
  PolicyArns?: PolicyDescriptorType[];
  Policy?: string;
  DurationSeconds?: number;
}
export interface AssumeRoleWithSAMLResponse {
  Credentials?: Credentials;
  AssumedRoleUser?: AssumedRoleUser;
  PackedPolicySize?: number;
  Subject?: string;
  SubjectType?: string;
  Issuer?: string;
  Audience?: string;
  NameQualifier?: string;
  SourceIdentity?: string;
}
export declare class IDPRejectedClaimException extends __BaseException {
  readonly name: "IDPRejectedClaimException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<IDPRejectedClaimException, __BaseException>
  );
}
export declare class InvalidIdentityTokenException extends __BaseException {
  readonly name: "InvalidIdentityTokenException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InvalidIdentityTokenException, __BaseException>
  );
}
export interface AssumeRoleWithWebIdentityRequest {
  RoleArn: string | undefined;
  RoleSessionName: string | undefined;
  WebIdentityToken: string | undefined;
  ProviderId?: string;
  PolicyArns?: PolicyDescriptorType[];
  Policy?: string;
  DurationSeconds?: number;
}
export interface AssumeRoleWithWebIdentityResponse {
  Credentials?: Credentials;
  SubjectFromWebIdentityToken?: string;
  AssumedRoleUser?: AssumedRoleUser;
  PackedPolicySize?: number;
  Provider?: string;
  Audience?: string;
  SourceIdentity?: string;
}
export declare class IDPCommunicationErrorException extends __BaseException {
  readonly name: "IDPCommunicationErrorException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<IDPCommunicationErrorException, __BaseException>
  );
}
export interface DecodeAuthorizationMessageRequest {
  EncodedMessage: string | undefined;
}
export interface DecodeAuthorizationMessageResponse {
  DecodedMessage?: string;
}
export declare class InvalidAuthorizationMessageException extends __BaseException {
  readonly name: "InvalidAuthorizationMessageException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      InvalidAuthorizationMessageException,
      __BaseException
    >
  );
}
export interface GetAccessKeyInfoRequest {
  AccessKeyId: string | undefined;
}
export interface GetAccessKeyInfoResponse {
  Account?: string;
}
export interface GetCallerIdentityRequest {}
export interface GetCallerIdentityResponse {
  UserId?: string;
  Account?: string;
  Arn?: string;
}
export interface GetFederationTokenRequest {
  Name: string | undefined;
  Policy?: string;
  PolicyArns?: PolicyDescriptorType[];
  DurationSeconds?: number;
  Tags?: Tag[];
}
export interface FederatedUser {
  FederatedUserId: string | undefined;
  Arn: string | undefined;
}
export interface GetFederationTokenResponse {
  Credentials?: Credentials;
  FederatedUser?: FederatedUser;
  PackedPolicySize?: number;
}
export interface GetSessionTokenRequest {
  DurationSeconds?: number;
  SerialNumber?: string;
  TokenCode?: string;
}
export interface GetSessionTokenResponse {
  Credentials?: Credentials;
}
export declare const CredentialsFilterSensitiveLog: (obj: Credentials) => any;
export declare const AssumeRoleResponseFilterSensitiveLog: (
  obj: AssumeRoleResponse
) => any;
export declare const AssumeRoleWithSAMLRequestFilterSensitiveLog: (
  obj: AssumeRoleWithSAMLRequest
) => any;
export declare const AssumeRoleWithSAMLResponseFilterSensitiveLog: (
  obj: AssumeRoleWithSAMLResponse
) => any;
export declare const AssumeRoleWithWebIdentityRequestFilterSensitiveLog: (
  obj: AssumeRoleWithWebIdentityRequest
) => any;
export declare const AssumeRoleWithWebIdentityResponseFilterSensitiveLog: (
  obj: AssumeRoleWithWebIdentityResponse
) => any;
export declare const GetFederationTokenResponseFilterSensitiveLog: (
  obj: GetFederationTokenResponse
) => any;
export declare const GetSessionTokenResponseFilterSensitiveLog: (
  obj: GetSessionTokenResponse
) => any;
