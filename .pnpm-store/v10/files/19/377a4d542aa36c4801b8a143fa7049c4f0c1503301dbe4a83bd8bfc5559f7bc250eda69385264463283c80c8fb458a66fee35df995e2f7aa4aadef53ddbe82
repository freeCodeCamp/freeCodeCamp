import type { CredentialProviderOptions } from "@aws-sdk/types";
import { SourceProfileInit } from "@smithy/shared-ini-file-loader";
import { AwsCredentialIdentityProvider } from "@smithy/types";
import type { SSOClient, SSOClientConfig } from "./loadSso";
/**
 * @internal
 */
export interface SsoCredentialsParameters {
    /**
     * The URL to the AWS SSO service.
     */
    ssoStartUrl: string;
    /**
     * SSO session identifier.
     * Presence implies usage of the SSOTokenProvider.
     */
    ssoSession?: string;
    /**
     * The ID of the AWS account to use for temporary credentials.
     */
    ssoAccountId: string;
    /**
     * The AWS region to use for temporary credentials.
     */
    ssoRegion: string;
    /**
     * The name of the AWS role to assume.
     */
    ssoRoleName: string;
}
/**
 * @internal
 */
export interface FromSSOInit extends SourceProfileInit, CredentialProviderOptions {
    ssoClient?: SSOClient;
    clientConfig?: SSOClientConfig;
}
/**
 * @internal
 *
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 *
 * The SSO credential provider must support both
 *
 * 1. the legacy profile format,
 * @example
 * ```
 * [profile sample-profile]
 * sso_account_id = 012345678901
 * sso_region = us-east-1
 * sso_role_name = SampleRole
 * sso_start_url = https://www.....com/start
 * ```
 *
 * 2. and the profile format for SSO Token Providers.
 * @example
 * ```
 * [profile sso-profile]
 * sso_session = dev
 * sso_account_id = 012345678901
 * sso_role_name = SampleRole
 *
 * [sso-session dev]
 * sso_region = us-east-1
 * sso_start_url = https://www.....com/start
 * ```
 */
export declare const fromSSO: (init?: FromSSOInit & Partial<SsoCredentialsParameters>) => AwsCredentialIdentityProvider;
