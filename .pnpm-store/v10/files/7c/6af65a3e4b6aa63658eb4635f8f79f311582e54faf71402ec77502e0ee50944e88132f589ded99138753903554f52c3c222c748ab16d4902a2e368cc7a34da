import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { SSOServiceException as __BaseException } from "./SSOServiceException";
export interface AccountInfo {
  accountId?: string;
  accountName?: string;
  emailAddress?: string;
}
export interface GetRoleCredentialsRequest {
  roleName: string | undefined;
  accountId: string | undefined;
  accessToken: string | undefined;
}
export interface RoleCredentials {
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
  expiration?: number;
}
export interface GetRoleCredentialsResponse {
  roleCredentials?: RoleCredentials;
}
export declare class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InvalidRequestException, __BaseException>
  );
}
export declare class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>
  );
}
export declare class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>
  );
}
export declare class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<UnauthorizedException, __BaseException>
  );
}
export interface ListAccountRolesRequest {
  nextToken?: string;
  maxResults?: number;
  accessToken: string | undefined;
  accountId: string | undefined;
}
export interface RoleInfo {
  roleName?: string;
  accountId?: string;
}
export interface ListAccountRolesResponse {
  nextToken?: string;
  roleList?: RoleInfo[];
}
export interface ListAccountsRequest {
  nextToken?: string;
  maxResults?: number;
  accessToken: string | undefined;
}
export interface ListAccountsResponse {
  nextToken?: string;
  accountList?: AccountInfo[];
}
export interface LogoutRequest {
  accessToken: string | undefined;
}
export declare const GetRoleCredentialsRequestFilterSensitiveLog: (
  obj: GetRoleCredentialsRequest
) => any;
export declare const RoleCredentialsFilterSensitiveLog: (
  obj: RoleCredentials
) => any;
export declare const GetRoleCredentialsResponseFilterSensitiveLog: (
  obj: GetRoleCredentialsResponse
) => any;
export declare const ListAccountRolesRequestFilterSensitiveLog: (
  obj: ListAccountRolesRequest
) => any;
export declare const ListAccountsRequestFilterSensitiveLog: (
  obj: ListAccountsRequest
) => any;
export declare const LogoutRequestFilterSensitiveLog: (
  obj: LogoutRequest
) => any;
