import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { CognitoIdentityServiceException as __BaseException } from "./CognitoIdentityServiceException";
/**
 * @public
 * @enum
 */
export declare const AmbiguousRoleResolutionType: {
    readonly AUTHENTICATED_ROLE: "AuthenticatedRole";
    readonly DENY: "Deny";
};
/**
 * @public
 */
export type AmbiguousRoleResolutionType = (typeof AmbiguousRoleResolutionType)[keyof typeof AmbiguousRoleResolutionType];
/**
 * @public
 * <p>A provider representing an Amazon Cognito user pool and its client ID.</p>
 */
export interface CognitoIdentityProvider {
    /**
     * @public
     * <p>The provider name for an Amazon Cognito user pool. For example,
     *             <code>cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789</code>.</p>
     */
    ProviderName?: string;
    /**
     * @public
     * <p>The client ID for the Amazon Cognito user pool.</p>
     */
    ClientId?: string;
    /**
     * @public
     * <p>TRUE if server-side token validation is enabled for the identity provider’s
     *          token.</p>
     *          <p>Once you set <code>ServerSideTokenCheck</code> to TRUE for an identity pool, that
     *          identity pool will check with the integrated user pools to make sure that the user has not
     *          been globally signed out or deleted before the identity pool provides an OIDC token or AWS
     *          credentials for the user.</p>
     *          <p>If the user is signed out or deleted, the identity pool will return a 400 Not
     *          Authorized error.</p>
     */
    ServerSideTokenCheck?: boolean;
}
/**
 * @public
 * <p>Input to the CreateIdentityPool action.</p>
 */
export interface CreateIdentityPoolInput {
    /**
     * @public
     * <p>A string that you provide.</p>
     */
    IdentityPoolName: string | undefined;
    /**
     * @public
     * <p>TRUE if the identity pool supports unauthenticated logins.</p>
     */
    AllowUnauthenticatedIdentities: boolean | undefined;
    /**
     * @public
     * <p>Enables or disables the Basic (Classic) authentication flow. For more information, see
     *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Identity Pools (Federated Identities) Authentication Flow</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
     */
    AllowClassicFlow?: boolean;
    /**
     * @public
     * <p>Optional key:value pairs mapping provider names to provider app IDs.</p>
     */
    SupportedLoginProviders?: Record<string, string>;
    /**
     * @public
     * <p>The "domain" by which Cognito will refer to your users. This name acts as a
     *          placeholder that allows your backend and the Cognito service to communicate about the
     *          developer provider. For the <code>DeveloperProviderName</code>, you can use letters as well
     *          as period (<code>.</code>), underscore (<code>_</code>), and dash
     *          (<code>-</code>).</p>
     *          <p>Once you have set a developer provider name, you cannot change it. Please take care
     *          in setting this parameter.</p>
     */
    DeveloperProviderName?: string;
    /**
     * @public
     * <p>The Amazon Resource Names (ARN) of the OpenID Connect providers.</p>
     */
    OpenIdConnectProviderARNs?: string[];
    /**
     * @public
     * <p>An array of Amazon Cognito user pools and their client IDs.</p>
     */
    CognitoIdentityProviders?: CognitoIdentityProvider[];
    /**
     * @public
     * <p>An array of Amazon Resource Names (ARNs) of the SAML provider for your identity
     *          pool.</p>
     */
    SamlProviderARNs?: string[];
    /**
     * @public
     * <p>Tags to assign to the identity pool. A tag is a label that you can apply to identity
     *          pools to categorize and manage them in different ways, such as by purpose, owner,
     *          environment, or other criteria.</p>
     */
    IdentityPoolTags?: Record<string, string>;
}
/**
 * @public
 * <p>An object representing an Amazon Cognito identity pool.</p>
 */
export interface IdentityPool {
    /**
     * @public
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
    /**
     * @public
     * <p>A string that you provide.</p>
     */
    IdentityPoolName: string | undefined;
    /**
     * @public
     * <p>TRUE if the identity pool supports unauthenticated logins.</p>
     */
    AllowUnauthenticatedIdentities: boolean | undefined;
    /**
     * @public
     * <p>Enables or disables the Basic (Classic) authentication flow. For more information, see
     *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Identity Pools (Federated Identities) Authentication Flow</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
     */
    AllowClassicFlow?: boolean;
    /**
     * @public
     * <p>Optional key:value pairs mapping provider names to provider app IDs.</p>
     */
    SupportedLoginProviders?: Record<string, string>;
    /**
     * @public
     * <p>The "domain" by which Cognito will refer to your users.</p>
     */
    DeveloperProviderName?: string;
    /**
     * @public
     * <p>The ARNs of the OpenID Connect providers.</p>
     */
    OpenIdConnectProviderARNs?: string[];
    /**
     * @public
     * <p>A list representing an Amazon Cognito user pool and its client ID.</p>
     */
    CognitoIdentityProviders?: CognitoIdentityProvider[];
    /**
     * @public
     * <p>An array of Amazon Resource Names (ARNs) of the SAML provider for your identity
     *          pool.</p>
     */
    SamlProviderARNs?: string[];
    /**
     * @public
     * <p>The tags that are assigned to the identity pool. A tag is a label that you can apply to
     *          identity pools to categorize and manage them in different ways, such as by purpose, owner,
     *          environment, or other criteria.</p>
     */
    IdentityPoolTags?: Record<string, string>;
}
/**
 * @public
 * <p>Thrown when the service encounters an error during processing the request.</p>
 */
export declare class InternalErrorException extends __BaseException {
    readonly name: "InternalErrorException";
    readonly $fault: "server";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>);
}
/**
 * @public
 * <p>Thrown for missing or bad input parameter(s).</p>
 */
export declare class InvalidParameterException extends __BaseException {
    readonly name: "InvalidParameterException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>);
}
/**
 * @public
 * <p>Thrown when the total number of user pools has exceeded a preset limit.</p>
 */
export declare class LimitExceededException extends __BaseException {
    readonly name: "LimitExceededException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>);
}
/**
 * @public
 * <p>Thrown when a user is not authorized to access the requested resource.</p>
 */
export declare class NotAuthorizedException extends __BaseException {
    readonly name: "NotAuthorizedException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<NotAuthorizedException, __BaseException>);
}
/**
 * @public
 * <p>Thrown when a user tries to use a login which is already linked to another
 *          account.</p>
 */
export declare class ResourceConflictException extends __BaseException {
    readonly name: "ResourceConflictException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>);
}
/**
 * @public
 * <p>Thrown when a request is throttled.</p>
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
 * <p>Input to the <code>DeleteIdentities</code> action.</p>
 */
export interface DeleteIdentitiesInput {
    /**
     * @public
     * <p>A list of 1-60 identities that you want to delete.</p>
     */
    IdentityIdsToDelete: string[] | undefined;
}
/**
 * @public
 * @enum
 */
export declare const ErrorCode: {
    readonly ACCESS_DENIED: "AccessDenied";
    readonly INTERNAL_SERVER_ERROR: "InternalServerError";
};
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];
/**
 * @public
 * <p>An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and
 *          IdentityId.</p>
 */
export interface UnprocessedIdentityId {
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
    /**
     * @public
     * <p>The error code indicating the type of error that occurred.</p>
     */
    ErrorCode?: ErrorCode;
}
/**
 * @public
 * <p>Returned in response to a successful <code>DeleteIdentities</code>
 *          operation.</p>
 */
export interface DeleteIdentitiesResponse {
    /**
     * @public
     * <p>An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and
     *          IdentityId.</p>
     */
    UnprocessedIdentityIds?: UnprocessedIdentityId[];
}
/**
 * @public
 * <p>Input to the DeleteIdentityPool action.</p>
 */
export interface DeleteIdentityPoolInput {
    /**
     * @public
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
}
/**
 * @public
 * <p>Thrown when the requested resource (for example, a dataset or record) does not
 *          exist.</p>
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
 * <p>Input to the <code>DescribeIdentity</code> action.</p>
 */
export interface DescribeIdentityInput {
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId: string | undefined;
}
/**
 * @public
 * <p>A description of the identity.</p>
 */
export interface IdentityDescription {
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
    /**
     * @public
     * <p>The provider names.</p>
     */
    Logins?: string[];
    /**
     * @public
     * <p>Date on which the identity was created.</p>
     */
    CreationDate?: Date;
    /**
     * @public
     * <p>Date on which the identity was last modified.</p>
     */
    LastModifiedDate?: Date;
}
/**
 * @public
 * <p>Input to the DescribeIdentityPool action.</p>
 */
export interface DescribeIdentityPoolInput {
    /**
     * @public
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
}
/**
 * @public
 * <p>An exception thrown when a dependent service such as Facebook or Twitter is not
 *          responding</p>
 */
export declare class ExternalServiceException extends __BaseException {
    readonly name: "ExternalServiceException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ExternalServiceException, __BaseException>);
}
/**
 * @public
 * <p>Input to the <code>GetCredentialsForIdentity</code> action.</p>
 */
export interface GetCredentialsForIdentityInput {
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId: string | undefined;
    /**
     * @public
     * <p>A set of optional name-value pairs that map provider names to provider tokens. The
     *          name-value pair will follow the syntax "provider_name":
     *          "provider_user_identifier".</p>
     *          <p>Logins should not be specified when trying to get credentials for an unauthenticated
     *          identity.</p>
     *          <p>The Logins parameter is required when using identities associated with external
     *          identity providers such as Facebook. For examples of <code>Logins</code> maps, see the code
     *          examples in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/external-identity-providers.html">External Identity Providers</a> section of the Amazon Cognito Developer
     *          Guide.</p>
     */
    Logins?: Record<string, string>;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the role to be assumed when multiple roles were
     *          received in the token from the identity provider. For example, a SAML-based identity
     *          provider. This parameter is optional for identity providers that do not support role
     *          customization.</p>
     */
    CustomRoleArn?: string;
}
/**
 * @public
 * <p>Credentials for the provided identity ID.</p>
 */
export interface Credentials {
    /**
     * @public
     * <p>The Access Key portion of the credentials.</p>
     */
    AccessKeyId?: string;
    /**
     * @public
     * <p>The Secret Access Key portion of the credentials</p>
     */
    SecretKey?: string;
    /**
     * @public
     * <p>The Session Token portion of the credentials</p>
     */
    SessionToken?: string;
    /**
     * @public
     * <p>The date at which these credentials will expire.</p>
     */
    Expiration?: Date;
}
/**
 * @public
 * <p>Returned in response to a successful <code>GetCredentialsForIdentity</code>
 *          operation.</p>
 */
export interface GetCredentialsForIdentityResponse {
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
    /**
     * @public
     * <p>Credentials for the provided identity ID.</p>
     */
    Credentials?: Credentials;
}
/**
 * @public
 * <p>Thrown if the identity pool has no role associated for the given auth type
 *          (auth/unauth) or if the AssumeRole fails.</p>
 */
export declare class InvalidIdentityPoolConfigurationException extends __BaseException {
    readonly name: "InvalidIdentityPoolConfigurationException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidIdentityPoolConfigurationException, __BaseException>);
}
/**
 * @public
 * <p>Input to the GetId action.</p>
 */
export interface GetIdInput {
    /**
     * @public
     * <p>A standard AWS account ID (9+ digits).</p>
     */
    AccountId?: string;
    /**
     * @public
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
    /**
     * @public
     * <p>A set of optional name-value pairs that map provider names to provider tokens. The
     *          available provider names for <code>Logins</code> are as follows:</p>
     *          <ul>
     *             <li>
     *                <p>Facebook: <code>graph.facebook.com</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>Amazon Cognito user pool:
     *                   <code>cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID></code>,
     *                for example, <code>cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789</code>.
     *             </p>
     *             </li>
     *             <li>
     *                <p>Google: <code>accounts.google.com</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>Amazon: <code>www.amazon.com</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>Twitter: <code>api.twitter.com</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>Digits: <code>www.digits.com</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    Logins?: Record<string, string>;
}
/**
 * @public
 * <p>Returned in response to a GetId request.</p>
 */
export interface GetIdResponse {
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
}
/**
 * @public
 * <p>Input to the <code>GetIdentityPoolRoles</code> action.</p>
 */
export interface GetIdentityPoolRolesInput {
    /**
     * @public
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
}
/**
 * @public
 * @enum
 */
export declare const MappingRuleMatchType: {
    readonly CONTAINS: "Contains";
    readonly EQUALS: "Equals";
    readonly NOT_EQUAL: "NotEqual";
    readonly STARTS_WITH: "StartsWith";
};
/**
 * @public
 */
export type MappingRuleMatchType = (typeof MappingRuleMatchType)[keyof typeof MappingRuleMatchType];
/**
 * @public
 * <p>A rule that maps a claim name, a claim value, and a match type to a role
 *          ARN.</p>
 */
export interface MappingRule {
    /**
     * @public
     * <p>The claim name that must be present in the token, for example, "isAdmin" or
     *          "paid".</p>
     */
    Claim: string | undefined;
    /**
     * @public
     * <p>The match condition that specifies how closely the claim value in the IdP token must
     *          match <code>Value</code>.</p>
     */
    MatchType: MappingRuleMatchType | undefined;
    /**
     * @public
     * <p>A brief string that the claim must match, for example, "paid" or "yes".</p>
     */
    Value: string | undefined;
    /**
     * @public
     * <p>The role ARN.</p>
     */
    RoleARN: string | undefined;
}
/**
 * @public
 * <p>A container for rules.</p>
 */
export interface RulesConfigurationType {
    /**
     * @public
     * <p>An array of rules. You can specify up to 25 rules per identity provider.</p>
     *          <p>Rules are evaluated in order. The first one to match specifies the role.</p>
     */
    Rules: MappingRule[] | undefined;
}
/**
 * @public
 * @enum
 */
export declare const RoleMappingType: {
    readonly RULES: "Rules";
    readonly TOKEN: "Token";
};
/**
 * @public
 */
export type RoleMappingType = (typeof RoleMappingType)[keyof typeof RoleMappingType];
/**
 * @public
 * <p>A role mapping.</p>
 */
export interface RoleMapping {
    /**
     * @public
     * <p>The role mapping type. Token will use <code>cognito:roles</code> and
     *             <code>cognito:preferred_role</code> claims from the Cognito identity provider token to
     *          map groups to roles. Rules will attempt to match claims from the token to map to a
     *          role.</p>
     */
    Type: RoleMappingType | undefined;
    /**
     * @public
     * <p>If you specify Token or Rules as the <code>Type</code>,
     *             <code>AmbiguousRoleResolution</code> is required.</p>
     *          <p>Specifies the action to be taken if either no rules match the claim value for the
     *             <code>Rules</code> type, or there is no <code>cognito:preferred_role</code> claim and
     *          there are multiple <code>cognito:roles</code> matches for the <code>Token</code>
     *          type.</p>
     */
    AmbiguousRoleResolution?: AmbiguousRoleResolutionType;
    /**
     * @public
     * <p>The rules to be used for mapping users to roles.</p>
     *          <p>If you specify Rules as the role mapping type, <code>RulesConfiguration</code> is
     *          required.</p>
     */
    RulesConfiguration?: RulesConfigurationType;
}
/**
 * @public
 * <p>Returned in response to a successful <code>GetIdentityPoolRoles</code>
 *          operation.</p>
 */
export interface GetIdentityPoolRolesResponse {
    /**
     * @public
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId?: string;
    /**
     * @public
     * <p>The map of roles associated with this pool. Currently only authenticated and
     *          unauthenticated roles are supported.</p>
     */
    Roles?: Record<string, string>;
    /**
     * @public
     * <p>How users for a specific identity provider are to mapped to roles. This is a
     *             String-to-<a>RoleMapping</a> object map. The string identifies the identity
     *          provider, for example, "graph.facebook.com" or
     *          "cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id".</p>
     */
    RoleMappings?: Record<string, RoleMapping>;
}
/**
 * @public
 * <p>Input to the GetOpenIdToken action.</p>
 */
export interface GetOpenIdTokenInput {
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId: string | undefined;
    /**
     * @public
     * <p>A set of optional name-value pairs that map provider names to provider tokens. When
     *          using graph.facebook.com and www.amazon.com, supply the access_token returned from the
     *          provider's authflow. For accounts.google.com, an Amazon Cognito user pool provider, or any
     *          other OpenID Connect provider, always include the <code>id_token</code>.</p>
     */
    Logins?: Record<string, string>;
}
/**
 * @public
 * <p>Returned in response to a successful GetOpenIdToken request.</p>
 */
export interface GetOpenIdTokenResponse {
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID. Note that the IdentityId returned may
     *          not match the one passed on input.</p>
     */
    IdentityId?: string;
    /**
     * @public
     * <p>An OpenID token, valid for 10 minutes.</p>
     */
    Token?: string;
}
/**
 * @public
 * <p>The provided developer user identifier is already registered with Cognito under a
 *          different identity ID.</p>
 */
export declare class DeveloperUserAlreadyRegisteredException extends __BaseException {
    readonly name: "DeveloperUserAlreadyRegisteredException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<DeveloperUserAlreadyRegisteredException, __BaseException>);
}
/**
 * @public
 * <p>Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.</p>
 */
export interface GetOpenIdTokenForDeveloperIdentityInput {
    /**
     * @public
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
    /**
     * @public
     * <p>A set of optional name-value pairs that map provider names to provider tokens. Each
     *          name-value pair represents a user from a public provider or developer provider. If the user
     *          is from a developer provider, the name-value pair will follow the syntax
     *             <code>"developer_provider_name": "developer_user_identifier"</code>. The developer
     *          provider is the "domain" by which Cognito will refer to your users; you provided this
     *          domain while creating/updating the identity pool. The developer user identifier is an
     *          identifier from your backend that uniquely identifies a user. When you create an identity
     *          pool, you can specify the supported logins.</p>
     */
    Logins: Record<string, string> | undefined;
    /**
     * @public
     * <p>Use this operation to configure attribute mappings for custom providers. </p>
     */
    PrincipalTags?: Record<string, string>;
    /**
     * @public
     * <p>The expiration time of the token, in seconds. You can specify a custom expiration
     *          time for the token so that you can cache it. If you don't provide an expiration time, the
     *          token is valid for 15 minutes. You can exchange the token with Amazon STS for temporary AWS
     *          credentials, which are valid for a maximum of one hour. The maximum token duration you can
     *          set is 24 hours. You should take care in setting the expiration time for a token, as there
     *          are significant security implications: an attacker could use a leaked token to access your
     *          AWS resources for the token's duration.</p>
     *          <note>
     *             <p>Please provide for a small grace period, usually no more than 5 minutes, to account for clock skew.</p>
     *          </note>
     */
    TokenDuration?: number;
}
/**
 * @public
 * <p>Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code>
 *          request.</p>
 */
export interface GetOpenIdTokenForDeveloperIdentityResponse {
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
    /**
     * @public
     * <p>An OpenID token.</p>
     */
    Token?: string;
}
/**
 * @public
 */
export interface GetPrincipalTagAttributeMapInput {
    /**
     * @public
     * <p>You can use this operation to get the ID of the Identity Pool you setup attribute mappings for.</p>
     */
    IdentityPoolId: string | undefined;
    /**
     * @public
     * <p>You can use this operation to get the provider name.</p>
     */
    IdentityProviderName: string | undefined;
}
/**
 * @public
 */
export interface GetPrincipalTagAttributeMapResponse {
    /**
     * @public
     * <p>You can use this operation to get the ID of the Identity Pool you setup attribute mappings for.</p>
     */
    IdentityPoolId?: string;
    /**
     * @public
     * <p>You can use this operation to get the provider name.</p>
     */
    IdentityProviderName?: string;
    /**
     * @public
     * <p>You can use this operation to list </p>
     */
    UseDefaults?: boolean;
    /**
     * @public
     * <p>You can use this operation to add principal tags. The <code>PrincipalTags</code>operation enables you to reference user attributes in your IAM permissions policy.</p>
     */
    PrincipalTags?: Record<string, string>;
}
/**
 * @public
 * <p>Input to the ListIdentities action.</p>
 */
export interface ListIdentitiesInput {
    /**
     * @public
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
    /**
     * @public
     * <p>The maximum number of identities to return.</p>
     */
    MaxResults: number | undefined;
    /**
     * @public
     * <p>A pagination token.</p>
     */
    NextToken?: string;
    /**
     * @public
     * <p>An optional boolean parameter that allows you to hide disabled identities. If
     *          omitted, the ListIdentities API will include disabled identities in the response.</p>
     */
    HideDisabled?: boolean;
}
/**
 * @public
 * <p>The response to a ListIdentities request.</p>
 */
export interface ListIdentitiesResponse {
    /**
     * @public
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId?: string;
    /**
     * @public
     * <p>An object containing a set of identities and associated mappings.</p>
     */
    Identities?: IdentityDescription[];
    /**
     * @public
     * <p>A pagination token.</p>
     */
    NextToken?: string;
}
/**
 * @public
 * <p>Input to the ListIdentityPools action.</p>
 */
export interface ListIdentityPoolsInput {
    /**
     * @public
     * <p>The maximum number of identities to return.</p>
     */
    MaxResults: number | undefined;
    /**
     * @public
     * <p>A pagination token.</p>
     */
    NextToken?: string;
}
/**
 * @public
 * <p>A description of the identity pool.</p>
 */
export interface IdentityPoolShortDescription {
    /**
     * @public
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId?: string;
    /**
     * @public
     * <p>A string that you provide.</p>
     */
    IdentityPoolName?: string;
}
/**
 * @public
 * <p>The result of a successful ListIdentityPools action.</p>
 */
export interface ListIdentityPoolsResponse {
    /**
     * @public
     * <p>The identity pools returned by the ListIdentityPools action.</p>
     */
    IdentityPools?: IdentityPoolShortDescription[];
    /**
     * @public
     * <p>A pagination token.</p>
     */
    NextToken?: string;
}
/**
 * @public
 */
export interface ListTagsForResourceInput {
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the identity pool that the tags are assigned
     *          to.</p>
     */
    ResourceArn: string | undefined;
}
/**
 * @public
 */
export interface ListTagsForResourceResponse {
    /**
     * @public
     * <p>The tags that are assigned to the identity pool.</p>
     */
    Tags?: Record<string, string>;
}
/**
 * @public
 * <p>Input to the <code>LookupDeveloperIdentityInput</code> action.</p>
 */
export interface LookupDeveloperIdentityInput {
    /**
     * @public
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
    /**
     * @public
     * <p>A unique ID used by your backend authentication process to identify a user.
     *          Typically, a developer identity provider would issue many developer user identifiers, in
     *          keeping with the number of users.</p>
     */
    DeveloperUserIdentifier?: string;
    /**
     * @public
     * <p>The maximum number of identities to return.</p>
     */
    MaxResults?: number;
    /**
     * @public
     * <p>A pagination token. The first call you make will have <code>NextToken</code> set to
     *          null. After that the service will return <code>NextToken</code> values as needed. For
     *          example, let's say you make a request with <code>MaxResults</code> set to 10, and there are
     *          20 matches in the database. The service will return a pagination token as a part of the
     *          response. This token can be used to call the API again and get results starting from the
     *          11th match.</p>
     */
    NextToken?: string;
}
/**
 * @public
 * <p>Returned in response to a successful <code>LookupDeveloperIdentity</code>
 *          action.</p>
 */
export interface LookupDeveloperIdentityResponse {
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
    /**
     * @public
     * <p>This is the list of developer user identifiers associated with an identity ID.
     *          Cognito supports the association of multiple developer user identifiers with an identity
     *          ID.</p>
     */
    DeveloperUserIdentifierList?: string[];
    /**
     * @public
     * <p>A pagination token. The first call you make will have <code>NextToken</code> set to
     *          null. After that the service will return <code>NextToken</code> values as needed. For
     *          example, let's say you make a request with <code>MaxResults</code> set to 10, and there are
     *          20 matches in the database. The service will return a pagination token as a part of the
     *          response. This token can be used to call the API again and get results starting from the
     *          11th match.</p>
     */
    NextToken?: string;
}
/**
 * @public
 * <p>Input to the <code>MergeDeveloperIdentities</code> action.</p>
 */
export interface MergeDeveloperIdentitiesInput {
    /**
     * @public
     * <p>User identifier for the source user. The value should be a
     *             <code>DeveloperUserIdentifier</code>.</p>
     */
    SourceUserIdentifier: string | undefined;
    /**
     * @public
     * <p>User identifier for the destination user. The value should be a
     *             <code>DeveloperUserIdentifier</code>.</p>
     */
    DestinationUserIdentifier: string | undefined;
    /**
     * @public
     * <p>The "domain" by which Cognito will refer to your users. This is a (pseudo) domain
     *          name that you provide while creating an identity pool. This name acts as a placeholder that
     *          allows your backend and the Cognito service to communicate about the developer provider.
     *          For the <code>DeveloperProviderName</code>, you can use letters as well as period (.),
     *          underscore (_), and dash (-).</p>
     */
    DeveloperProviderName: string | undefined;
    /**
     * @public
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
}
/**
 * @public
 * <p>Returned in response to a successful <code>MergeDeveloperIdentities</code>
 *          action.</p>
 */
export interface MergeDeveloperIdentitiesResponse {
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
}
/**
 * @public
 * <p>Thrown if there are parallel requests to modify a resource.</p>
 */
export declare class ConcurrentModificationException extends __BaseException {
    readonly name: "ConcurrentModificationException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>);
}
/**
 * @public
 * <p>Input to the <code>SetIdentityPoolRoles</code> action.</p>
 */
export interface SetIdentityPoolRolesInput {
    /**
     * @public
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
    /**
     * @public
     * <p>The map of roles associated with this pool. For a given role, the key will be either
     *          "authenticated" or "unauthenticated" and the value will be the Role ARN.</p>
     */
    Roles: Record<string, string> | undefined;
    /**
     * @public
     * <p>How users for a specific identity provider are to mapped to roles. This is a string
     *          to <a>RoleMapping</a> object map. The string identifies the identity provider,
     *          for example, "graph.facebook.com" or
     *          "cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id".</p>
     *          <p>Up to 25 rules can be specified per identity provider.</p>
     */
    RoleMappings?: Record<string, RoleMapping>;
}
/**
 * @public
 */
export interface SetPrincipalTagAttributeMapInput {
    /**
     * @public
     * <p>The ID of the Identity Pool you want to set attribute mappings for.</p>
     */
    IdentityPoolId: string | undefined;
    /**
     * @public
     * <p>The provider name you want to use for attribute mappings.</p>
     */
    IdentityProviderName: string | undefined;
    /**
     * @public
     * <p>You can use this operation to use default (username and clientID) attribute mappings.</p>
     */
    UseDefaults?: boolean;
    /**
     * @public
     * <p>You can use this operation to add principal tags.</p>
     */
    PrincipalTags?: Record<string, string>;
}
/**
 * @public
 */
export interface SetPrincipalTagAttributeMapResponse {
    /**
     * @public
     * <p>The ID of the Identity Pool you want to set attribute mappings for.</p>
     */
    IdentityPoolId?: string;
    /**
     * @public
     * <p>The provider name you want to use for attribute mappings.</p>
     */
    IdentityProviderName?: string;
    /**
     * @public
     * <p>You can use this operation to select default (username and clientID) attribute mappings.</p>
     */
    UseDefaults?: boolean;
    /**
     * @public
     * <p>You can use this operation to add principal tags. The <code>PrincipalTags</code>operation enables you to reference user attributes in your IAM permissions policy.</p>
     */
    PrincipalTags?: Record<string, string>;
}
/**
 * @public
 */
export interface TagResourceInput {
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the identity pool.</p>
     */
    ResourceArn: string | undefined;
    /**
     * @public
     * <p>The tags to assign to the identity pool.</p>
     */
    Tags: Record<string, string> | undefined;
}
/**
 * @public
 */
export interface TagResourceResponse {
}
/**
 * @public
 * <p>Input to the <code>UnlinkDeveloperIdentity</code> action.</p>
 */
export interface UnlinkDeveloperIdentityInput {
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId: string | undefined;
    /**
     * @public
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
    /**
     * @public
     * <p>The "domain" by which Cognito will refer to your users.</p>
     */
    DeveloperProviderName: string | undefined;
    /**
     * @public
     * <p>A unique ID used by your backend authentication process to identify a user.</p>
     */
    DeveloperUserIdentifier: string | undefined;
}
/**
 * @public
 * <p>Input to the UnlinkIdentity action.</p>
 */
export interface UnlinkIdentityInput {
    /**
     * @public
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId: string | undefined;
    /**
     * @public
     * <p>A set of optional name-value pairs that map provider names to provider
     *          tokens.</p>
     */
    Logins: Record<string, string> | undefined;
    /**
     * @public
     * <p>Provider names to unlink from this identity.</p>
     */
    LoginsToRemove: string[] | undefined;
}
/**
 * @public
 */
export interface UntagResourceInput {
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the identity pool.</p>
     */
    ResourceArn: string | undefined;
    /**
     * @public
     * <p>The keys of the tags to remove from the user pool.</p>
     */
    TagKeys: string[] | undefined;
}
/**
 * @public
 */
export interface UntagResourceResponse {
}
