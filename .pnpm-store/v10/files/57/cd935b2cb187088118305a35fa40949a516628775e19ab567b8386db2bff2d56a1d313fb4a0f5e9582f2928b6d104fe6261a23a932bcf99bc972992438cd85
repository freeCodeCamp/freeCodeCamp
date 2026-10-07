import { Pluggable } from "@smithy/types";
import { DefaultCredentialProvider, RoleAssumer, RoleAssumerWithWebIdentity, STSRoleAssumerOptions } from "./defaultStsRoleAssumers";
import { ServiceInputTypes, ServiceOutputTypes } from "./STSClient";
/**
 * The default role assumer that used by credential providers when sts:AssumeRole API is needed.
 */
export declare const getDefaultRoleAssumer: (stsOptions?: STSRoleAssumerOptions, stsPlugins?: Pluggable<ServiceInputTypes, ServiceOutputTypes>[]) => RoleAssumer;
/**
 * The default role assumer that used by credential providers when sts:AssumeRoleWithWebIdentity API is needed.
 */
export declare const getDefaultRoleAssumerWithWebIdentity: (stsOptions?: STSRoleAssumerOptions, stsPlugins?: Pluggable<ServiceInputTypes, ServiceOutputTypes>[]) => RoleAssumerWithWebIdentity;
/**
 * The default credential providers depend STS client to assume role with desired API: sts:assumeRole,
 * sts:assumeRoleWithWebIdentity, etc. This function decorates the default credential provider with role assumers which
 * encapsulates the process of calling STS commands. This can only be imported by AWS client packages to avoid circular
 * dependencies.
 *
 * @internal
 *
 * @deprecated this is no longer needed. Use the defaultProvider directly,
 * which will load STS if needed.
 */
export declare const decorateDefaultCredentialProvider: (provider: DefaultCredentialProvider) => DefaultCredentialProvider;
