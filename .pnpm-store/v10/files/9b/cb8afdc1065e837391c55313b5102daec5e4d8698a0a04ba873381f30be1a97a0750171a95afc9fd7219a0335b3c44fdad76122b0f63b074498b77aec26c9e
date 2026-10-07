import { addAzureParams, AZURE_BASE_URL } from '../../../client-side-encryption/providers/azure';
import { MongoAzureError } from '../../../error';
import { get } from '../../../utils';
import type { OIDCCallbackFunction, OIDCCallbackParams, OIDCResponse } from '../mongodb_oidc';

/** Azure request headers. */
const AZURE_HEADERS = Object.freeze({ Metadata: 'true', Accept: 'application/json' });

/** Invalid endpoint result error. */
const ENDPOINT_RESULT_ERROR =
  'Azure endpoint did not return a value with only access_token and expires_in properties';

/** Error for when the token audience is missing in the environment. */
const TOKEN_RESOURCE_MISSING_ERROR =
  'TOKEN_RESOURCE must be set in the auth mechanism properties when ENVIRONMENT is azure.';

/**
 * The callback function to be used in the automated callback workflow.
 * @param params - The OIDC callback parameters.
 * @returns The OIDC response.
 */
export const callback: OIDCCallbackFunction = async (
  params: OIDCCallbackParams
): Promise<OIDCResponse> => {
  const tokenAudience = params.tokenAudience;
  const username = params.username;
  if (!tokenAudience) {
    throw new MongoAzureError(TOKEN_RESOURCE_MISSING_ERROR);
  }
  const response = await getAzureTokenData(tokenAudience, username);
  if (!isEndpointResultValid(response)) {
    throw new MongoAzureError(ENDPOINT_RESULT_ERROR);
  }
  return response;
};

/**
 * Hit the Azure endpoint to get the token data.
 */
async function getAzureTokenData(tokenAudience: string, username?: string): Promise<OIDCResponse> {
  const url = new URL(AZURE_BASE_URL);
  addAzureParams(url, tokenAudience, username);
  const response = await get(url, {
    headers: AZURE_HEADERS
  });
  if (response.status !== 200) {
    throw new MongoAzureError(
      `Status code ${response.status} returned from the Azure endpoint. Response body: ${response.body}`
    );
  }
  const result = JSON.parse(response.body);
  return {
    accessToken: result.access_token,
    expiresInSeconds: Number(result.expires_in)
  };
}

/**
 * Determines if a result returned from the endpoint is valid.
 * This means the result is not nullish, contains the access_token required field
 * and the expires_in required field.
 */
function isEndpointResultValid(
  token: unknown
): token is { access_token: unknown; expires_in: unknown } {
  if (token == null || typeof token !== 'object') return false;
  return (
    'accessToken' in token &&
    typeof token.accessToken === 'string' &&
    'expiresInSeconds' in token &&
    typeof token.expiresInSeconds === 'number'
  );
}
