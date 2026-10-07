import { type Document } from '../../bson';
import { MongoNetworkTimeoutError } from '../../error';
import { get } from '../../utils';
import { MongoCryptAzureKMSRequestError } from '../errors';
import { type KMSProviders } from './index';

const MINIMUM_TOKEN_REFRESH_IN_MILLISECONDS = 6000;
/** Base URL for getting Azure tokens. */
export const AZURE_BASE_URL = 'http://169.254.169.254/metadata/identity/oauth2/token?';

/**
 * The access token that libmongocrypt expects for Azure kms.
 */
interface AccessToken {
  accessToken: string;
}

/**
 * The response from the azure idms endpoint, including the `expiresOnTimestamp`.
 * `expiresOnTimestamp` is needed for caching.
 */
interface AzureTokenCacheEntry extends AccessToken {
  accessToken: string;
  expiresOnTimestamp: number;
}

/**
 * @internal
 */
export class AzureCredentialCache {
  cachedToken: AzureTokenCacheEntry | null = null;

  async getToken(): Promise<AccessToken> {
    if (this.cachedToken == null || this.needsRefresh(this.cachedToken)) {
      this.cachedToken = await this._getToken();
    }

    return { accessToken: this.cachedToken.accessToken };
  }

  needsRefresh(token: AzureTokenCacheEntry): boolean {
    const timeUntilExpirationMS = token.expiresOnTimestamp - Date.now();
    return timeUntilExpirationMS <= MINIMUM_TOKEN_REFRESH_IN_MILLISECONDS;
  }

  /**
   * exposed for testing
   */
  resetCache() {
    this.cachedToken = null;
  }

  /**
   * exposed for testing
   */
  _getToken(): Promise<AzureTokenCacheEntry> {
    return fetchAzureKMSToken();
  }
}

/** @internal */
export const tokenCache = new AzureCredentialCache();

/** @internal */
async function parseResponse(response: {
  body: string;
  status?: number;
}): Promise<AzureTokenCacheEntry> {
  const { status, body: rawBody } = response;

  const body: { expires_in?: number; access_token?: string } = (() => {
    try {
      return JSON.parse(rawBody);
    } catch {
      throw new MongoCryptAzureKMSRequestError('Malformed JSON body in GET request.');
    }
  })();

  if (status !== 200) {
    throw new MongoCryptAzureKMSRequestError('Unable to complete request.', body);
  }

  if (!body.access_token) {
    throw new MongoCryptAzureKMSRequestError(
      'Malformed response body - missing field `access_token`.'
    );
  }

  if (!body.expires_in) {
    throw new MongoCryptAzureKMSRequestError(
      'Malformed response body - missing field `expires_in`.'
    );
  }

  const expiresInMS = Number(body.expires_in) * 1000;
  if (Number.isNaN(expiresInMS)) {
    throw new MongoCryptAzureKMSRequestError(
      'Malformed response body - unable to parse int from `expires_in` field.'
    );
  }

  return {
    accessToken: body.access_token,
    expiresOnTimestamp: Date.now() + expiresInMS
  };
}

/**
 * @internal
 *
 * exposed for CSFLE
 * [prose test 18](https://github.com/mongodb/specifications/tree/master/source/client-side-encryption/tests#azure-imds-credentials)
 */
export interface AzureKMSRequestOptions {
  headers?: Document;
  url?: URL | string;
}

/**
 * @internal
 * Get the Azure endpoint URL.
 */
export function addAzureParams(url: URL, resource: string, username?: string): URL {
  url.searchParams.append('api-version', '2018-02-01');
  url.searchParams.append('resource', resource);
  if (username) {
    url.searchParams.append('client_id', username);
  }
  return url;
}

/**
 * @internal
 *
 * parses any options provided by prose tests to `fetchAzureKMSToken` and merges them with
 * the default values for headers and the request url.
 */
export function prepareRequest(options: AzureKMSRequestOptions): {
  headers: Document;
  url: URL;
} {
  const url = new URL(options.url?.toString() ?? AZURE_BASE_URL);
  addAzureParams(url, 'https://vault.azure.net');
  const headers = { ...options.headers, 'Content-Type': 'application/json', Metadata: true };
  return { headers, url };
}

/**
 * @internal
 *
 * `AzureKMSRequestOptions` allows prose tests to modify the http request sent to the idms
 * servers.  This is required to simulate different server conditions.  No options are expected to
 * be set outside of tests.
 *
 * exposed for CSFLE
 * [prose test 18](https://github.com/mongodb/specifications/tree/master/source/client-side-encryption/tests#azure-imds-credentials)
 */
export async function fetchAzureKMSToken(
  options: AzureKMSRequestOptions = {}
): Promise<AzureTokenCacheEntry> {
  const { headers, url } = prepareRequest(options);
  try {
    const response = await get(url, { headers });
    return await parseResponse(response);
  } catch (error) {
    if (error instanceof MongoNetworkTimeoutError) {
      throw new MongoCryptAzureKMSRequestError(`[Azure KMS] ${error.message}`);
    }
    throw error;
  }
}

/**
 * @internal
 *
 * @throws Will reject with a `MongoCryptError` if the http request fails or the http response is malformed.
 */
export async function loadAzureCredentials(kmsProviders: KMSProviders): Promise<KMSProviders> {
  const azure = await tokenCache.getToken();
  return { ...kmsProviders, azure };
}
