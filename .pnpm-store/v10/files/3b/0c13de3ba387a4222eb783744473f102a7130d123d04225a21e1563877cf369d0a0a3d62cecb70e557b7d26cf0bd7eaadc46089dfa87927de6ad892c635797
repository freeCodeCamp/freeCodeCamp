import type { FromIniInit } from "@aws-sdk/credential-provider-ini";
import type { FromProcessInit } from "@aws-sdk/credential-provider-process";
import type { FromSSOInit, SsoCredentialsParameters } from "@aws-sdk/credential-provider-sso";
import type { FromTokenFileInit } from "@aws-sdk/credential-provider-web-identity";
import type { RemoteProviderInit } from "@smithy/credential-provider-imds";
import { AwsCredentialIdentity, MemoizedProvider } from "@smithy/types";
/**
 * @public
 */
export type DefaultProviderInit = FromIniInit & RemoteProviderInit & FromProcessInit & (FromSSOInit & Partial<SsoCredentialsParameters>) & FromTokenFileInit;
/**
 * Creates a credential provider that will attempt to find credentials from the
 * following sources (listed in order of precedence):
 *   * Environment variables exposed via `process.env`
 *   * SSO credentials from token cache
 *   * Web identity token credentials
 *   * Shared credentials and config ini files
 *   * The EC2/ECS Instance Metadata Service
 *
 * The default credential provider will invoke one provider at a time and only
 * continue to the next if no credentials have been located. For example, if
 * the process finds values defined via the `AWS_ACCESS_KEY_ID` and
 * `AWS_SECRET_ACCESS_KEY` environment variables, the files at
 * `~/.aws/credentials` and `~/.aws/config` will not be read, nor will any
 * messages be sent to the Instance Metadata Service.
 *
 * @param init                  Configuration that is passed to each individual
 *                              provider
 *
 * @see {@link fromEnv}         The function used to source credentials from
 *                              environment variables.
 * @see {@link fromSSO}         The function used to source credentials from
 *                              resolved SSO token cache.
 * @see {@link fromTokenFile}   The function used to source credentials from
 *                              token file.
 * @see {@link fromIni}         The function used to source credentials from INI
 *                              files.
 * @see {@link fromProcess}     The function used to sources credentials from
 *                              credential_process in INI files.
 * @see {@link fromInstanceMetadata}    The function used to source credentials from the
 *                                      EC2 Instance Metadata Service.
 * @see {@link fromContainerMetadata}   The function used to source credentials from the
 *                                      ECS Container Metadata Service.
 */
export declare const defaultProvider: (init?: DefaultProviderInit) => MemoizedProvider<AwsCredentialIdentity>;
/**
 * @internal
 *
 * @returns credentials have expiration.
 */
export declare const credentialsWillNeedRefresh: (credentials: AwsCredentialIdentity) => boolean;
/**
 * @internal
 *
 * @returns credentials with less than 5 minutes left.
 */
export declare const credentialsTreatedAsExpired: (credentials: AwsCredentialIdentity) => boolean;
