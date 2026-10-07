import * as fs from 'fs';

import { MongoAWSError } from '../../../error';
import type { OIDCCallbackFunction, OIDCResponse } from '../mongodb_oidc';

/** Error for when the token is missing in the environment. */
const TOKEN_MISSING_ERROR = 'OIDC_TOKEN_FILE must be set in the environment.';

/**
 * The callback function to be used in the automated callback workflow.
 * @param params - The OIDC callback parameters.
 * @returns The OIDC response.
 */
export const callback: OIDCCallbackFunction = async (): Promise<OIDCResponse> => {
  const tokenFile = process.env.OIDC_TOKEN_FILE;
  if (!tokenFile) {
    throw new MongoAWSError(TOKEN_MISSING_ERROR);
  }
  const token = await fs.promises.readFile(tokenFile, 'utf8');
  return { accessToken: token };
};
