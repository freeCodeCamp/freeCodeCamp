import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { SSOServiceException as __BaseException } from "./SSOServiceException";
/**
 * @public
 * <p>Provides information about your AWS account.</p>
 */
export interface AccountInfo {
    /**
     * @public
     * <p>The identifier of the AWS account that is assigned to the user.</p>
     */
    accountId?: string;
    /**
     * @public
     * <p>The display name of the AWS account that is assigned to the user.</p>
     */
    accountName?: string;
    /**
     * @public
     * <p>The email address of the AWS account that is assigned to the user.</p>
     */
    emailAddress?: string;
}
/**
 * @public
 */
export interface GetRoleCredentialsRequest {
    /**
     * @public
     * <p>The friendly name of the role that is assigned to the user.</p>
     */
    roleName: string | undefined;
    /**
     * @public
     * <p>The identifier for the AWS account that is assigned to the user.</p>
     */
    accountId: string | undefined;
    /**
     * @public
     * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
     *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>IAM Identity Center OIDC API Reference Guide</i>.</p>
     */
    accessToken: string | undefined;
}
/**
 * @public
 * <p>Provides information about the role credentials that are assigned to the user.</p>
 */
export interface RoleCredentials {
    /**
     * @public
     * <p>The identifier used for the temporary security credentials. For more information, see
     *         <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the
     *         <i>AWS IAM User Guide</i>.</p>
     */
    accessKeyId?: string;
    /**
     * @public
     * <p>The key that is used to sign the request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the
     *         <i>AWS IAM User Guide</i>.</p>
     */
    secretAccessKey?: string;
    /**
     * @public
     * <p>The token used for temporary credentials. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the
     *         <i>AWS IAM User Guide</i>.</p>
     */
    sessionToken?: string;
    /**
     * @public
     * <p>The date on which temporary security credentials expire.</p>
     */
    expiration?: number;
}
/**
 * @public
 */
export interface GetRoleCredentialsResponse {
    /**
     * @public
     * <p>The credentials for the role that is assigned to the user.</p>
     */
    roleCredentials?: RoleCredentials;
}
/**
 * @public
 * <p>Indicates that a problem occurred with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 */
export declare class InvalidRequestException extends __BaseException {
    readonly name: "InvalidRequestException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>);
}
/**
 * @public
 * <p>The specified resource doesn't exist.</p>
 */
export declare class ResourceNotFoundException extends __BaseException {
    readonly name: "ResourceNotFoundException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>);
}
/**
 * @public
 * <p>Indicates that the request is being made too frequently and is more than what the server
 *       can handle.</p>
 */
export declare class TooManyRequestsException extends __BaseException {
    readonly name: "TooManyRequestsException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>);
}
/**
 * @public
 * <p>Indicates that the request is not authorized. This can happen due to an invalid access
 *       token in the request.</p>
 */
export declare class UnauthorizedException extends __BaseException {
    readonly name: "UnauthorizedException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>);
}
/**
 * @public
 */
export interface ListAccountRolesRequest {
    /**
     * @public
     * <p>The page token from the previous response output when you request subsequent pages.</p>
     */
    nextToken?: string;
    /**
     * @public
     * <p>The number of items that clients can request per page.</p>
     */
    maxResults?: number;
    /**
     * @public
     * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
     *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>IAM Identity Center OIDC API Reference Guide</i>.</p>
     */
    accessToken: string | undefined;
    /**
     * @public
     * <p>The identifier for the AWS account that is assigned to the user.</p>
     */
    accountId: string | undefined;
}
/**
 * @public
 * <p>Provides information about the role that is assigned to the user.</p>
 */
export interface RoleInfo {
    /**
     * @public
     * <p>The friendly name of the role that is assigned to the user.</p>
     */
    roleName?: string;
    /**
     * @public
     * <p>The identifier of the AWS account assigned to the user.</p>
     */
    accountId?: string;
}
/**
 * @public
 */
export interface ListAccountRolesResponse {
    /**
     * @public
     * <p>The page token client that is used to retrieve the list of accounts.</p>
     */
    nextToken?: string;
    /**
     * @public
     * <p>A paginated response with the list of roles and the next token if more results are
     *       available.</p>
     */
    roleList?: RoleInfo[];
}
/**
 * @public
 */
export interface ListAccountsRequest {
    /**
     * @public
     * <p>(Optional) When requesting subsequent pages, this is the page token from the previous
     *       response output.</p>
     */
    nextToken?: string;
    /**
     * @public
     * <p>This is the number of items clients can request per page.</p>
     */
    maxResults?: number;
    /**
     * @public
     * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
     *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>IAM Identity Center OIDC API Reference Guide</i>.</p>
     */
    accessToken: string | undefined;
}
/**
 * @public
 */
export interface ListAccountsResponse {
    /**
     * @public
     * <p>The page token client that is used to retrieve the list of accounts.</p>
     */
    nextToken?: string;
    /**
     * @public
     * <p>A paginated response with the list of account information and the next token if more
     *       results are available.</p>
     */
    accountList?: AccountInfo[];
}
/**
 * @public
 */
export interface LogoutRequest {
    /**
     * @public
     * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
     *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>IAM Identity Center OIDC API Reference Guide</i>.</p>
     */
    accessToken: string | undefined;
}
/**
 * @internal
 */
export declare const GetRoleCredentialsRequestFilterSensitiveLog: (obj: GetRoleCredentialsRequest) => any;
/**
 * @internal
 */
export declare const RoleCredentialsFilterSensitiveLog: (obj: RoleCredentials) => any;
/**
 * @internal
 */
export declare const GetRoleCredentialsResponseFilterSensitiveLog: (obj: GetRoleCredentialsResponse) => any;
/**
 * @internal
 */
export declare const ListAccountRolesRequestFilterSensitiveLog: (obj: ListAccountRolesRequest) => any;
/**
 * @internal
 */
export declare const ListAccountsRequestFilterSensitiveLog: (obj: ListAccountsRequest) => any;
/**
 * @internal
 */
export declare const LogoutRequestFilterSensitiveLog: (obj: LogoutRequest) => any;
