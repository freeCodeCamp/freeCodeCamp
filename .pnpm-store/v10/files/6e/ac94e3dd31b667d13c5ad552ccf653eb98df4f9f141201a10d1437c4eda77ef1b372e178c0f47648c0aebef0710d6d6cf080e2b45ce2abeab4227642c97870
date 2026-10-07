import { readFile } from 'fs/promises';

import type { OIDCCallbackFunction, OIDCResponse } from '../mongodb_oidc';

/** The fallback file name */
const FALLBACK_FILENAME = '/var/run/secrets/kubernetes.io/serviceaccount/token';

/** The azure environment variable for the file name. */
const AZURE_FILENAME = 'AZURE_FEDERATED_TOKEN_FILE';

/** The AWS environment variable for the file name. */
const AWS_FILENAME = 'AWS_WEB_IDENTITY_TOKEN_FILE';

/**
 * The callback function to be used in the automated callback workflow.
 * @param params - The OIDC callback parameters.
 * @returns The OIDC response.
 */
export const callback: OIDCCallbackFunction = async (): Promise<OIDCResponse> => {
  let filename: string;
  if (process.env[AZURE_FILENAME]) {
    filename = process.env[AZURE_FILENAME];
  } else if (process.env[AWS_FILENAME]) {
    filename = process.env[AWS_FILENAME];
  } else {
    filename = FALLBACK_FILENAME;
  }
  const token = await readFile(filename, 'utf8');
  return { accessToken: token };
};
