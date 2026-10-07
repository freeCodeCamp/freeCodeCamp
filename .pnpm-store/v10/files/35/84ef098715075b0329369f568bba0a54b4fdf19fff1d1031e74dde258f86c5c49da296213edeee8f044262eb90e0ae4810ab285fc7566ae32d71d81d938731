import type { Binary } from '../../bson';
import { type AWSCredentialProvider } from '../../cmap/auth/aws_temporary_credentials';
import { loadAWSCredentials } from './aws';
import { loadAzureCredentials } from './azure';
import { loadGCPCredentials } from './gcp';

/**
 * @public
 *
 * A data key provider.  Allowed values:
 *
 * - aws, gcp, local, kmip or azure
 * - (`mongodb-client-encryption>=6.0.1` only) a named key, in the form of:
 *    `aws:<name>`, `gcp:<name>`, `local:<name>`, `kmip:<name>`, `azure:<name>`
 *  where `name` is an alphanumeric string, underscores allowed.
 */
export type ClientEncryptionDataKeyProvider = keyof KMSProviders;

/** @public */
export interface AWSKMSProviderConfiguration {
  /**
   * The access key used for the AWS KMS provider
   */
  accessKeyId: string;

  /**
   * The secret access key used for the AWS KMS provider
   */
  secretAccessKey: string;

  /**
   * An optional AWS session token that will be used as the
   * X-Amz-Security-Token header for AWS requests.
   */
  sessionToken?: string;
}

/** @public */
export interface LocalKMSProviderConfiguration {
  /**
   * The master key used to encrypt/decrypt data keys.
   * A 96-byte long Buffer or base64 encoded string.
   */
  key: Binary | Uint8Array | string;
}

/** @public */
export interface KMIPKMSProviderConfiguration {
  /**
   * The output endpoint string.
   * The endpoint consists of a hostname and port separated by a colon.
   * E.g. "example.com:123". A port is always present.
   */
  endpoint?: string;
}

/** @public */
export type AzureKMSProviderConfiguration =
  | {
      /**
       * The tenant ID identifies the organization for the account
       */
      tenantId: string;

      /**
       * The client ID to authenticate a registered application
       */
      clientId: string;

      /**
       * The client secret to authenticate a registered application
       */
      clientSecret: string;

      /**
       * If present, a host with optional port. E.g. "example.com" or "example.com:443".
       * This is optional, and only needed if customer is using a non-commercial Azure instance
       * (e.g. a government or China account, which use different URLs).
       * Defaults to "login.microsoftonline.com"
       */
      identityPlatformEndpoint?: string | undefined;
    }
  | {
      /**
       * If present, an access token to authenticate with Azure.
       */
      accessToken: string;
    };

/** @public */
export type GCPKMSProviderConfiguration =
  | {
      /**
       * The service account email to authenticate
       */
      email: string;

      /**
       * A PKCS#8 encrypted key. This can either be a base64 string or a binary representation
       */
      privateKey: string | Buffer;

      /**
       * If present, a host with optional port. E.g. "example.com" or "example.com:443".
       * Defaults to "oauth2.googleapis.com"
       */
      endpoint?: string | undefined;
    }
  | {
      /**
       * If present, an access token to authenticate with GCP.
       */
      accessToken: string;
    };

/**
 * @public
 * Configuration options for custom credential providers for KMS requests.
 */
export interface CredentialProviders {
  /* A custom AWS credential provider */
  aws?: AWSCredentialProvider;
}

/**
 * @public
 * Configuration options that are used by specific KMS providers during key generation, encryption, and decryption.
 *
 * Named KMS providers _are not supported_ for automatic KMS credential fetching.
 */
export interface KMSProviders {
  /**
   * Configuration options for using 'aws' as your KMS provider
   */
  aws?: AWSKMSProviderConfiguration | Record<string, never>;
  [key: `aws:${string}`]: AWSKMSProviderConfiguration;

  /**
   * Configuration options for using 'local' as your KMS provider
   */
  local?: LocalKMSProviderConfiguration;
  [key: `local:${string}`]: LocalKMSProviderConfiguration;

  /**
   * Configuration options for using 'kmip' as your KMS provider
   */
  kmip?: KMIPKMSProviderConfiguration;
  [key: `kmip:${string}`]: KMIPKMSProviderConfiguration;

  /**
   * Configuration options for using 'azure' as your KMS provider
   */
  azure?: AzureKMSProviderConfiguration | Record<string, never>;
  [key: `azure:${string}`]: AzureKMSProviderConfiguration;

  /**
   * Configuration options for using 'gcp' as your KMS provider
   */
  gcp?: GCPKMSProviderConfiguration | Record<string, never>;
  [key: `gcp:${string}`]: GCPKMSProviderConfiguration;
}

/**
 * Auto credential fetching should only occur when the provider is defined on the kmsProviders map
 * and the settings are an empty object.
 *
 * This is distinct from a nullish provider key.
 *
 * @internal - exposed for testing purposes only
 */
export function isEmptyCredentials(
  providerName: ClientEncryptionDataKeyProvider,
  kmsProviders: KMSProviders
): boolean {
  const provider = kmsProviders[providerName];
  if (provider == null) {
    return false;
  }
  return typeof provider === 'object' && Object.keys(provider).length === 0;
}

/**
 * Load cloud provider credentials for the user provided KMS providers.
 * Credentials will only attempt to get loaded if they do not exist
 * and no existing credentials will get overwritten.
 *
 * @internal
 */
export async function refreshKMSCredentials(
  kmsProviders: KMSProviders,
  credentialProviders?: CredentialProviders
): Promise<KMSProviders> {
  let finalKMSProviders = kmsProviders;

  if (isEmptyCredentials('aws', kmsProviders)) {
    finalKMSProviders = await loadAWSCredentials(finalKMSProviders, credentialProviders?.aws);
  }

  if (isEmptyCredentials('gcp', kmsProviders)) {
    finalKMSProviders = await loadGCPCredentials(finalKMSProviders);
  }

  if (isEmptyCredentials('azure', kmsProviders)) {
    finalKMSProviders = await loadAzureCredentials(finalKMSProviders);
  }
  return finalKMSProviders;
}
