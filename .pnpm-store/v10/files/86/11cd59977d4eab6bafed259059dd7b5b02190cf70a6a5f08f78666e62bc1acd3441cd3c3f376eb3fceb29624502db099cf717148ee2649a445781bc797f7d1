import { MONGODB_ERROR_CODES, MongoError, MongoOIDCError } from '../../../error';
import { Timeout, TimeoutError } from '../../../timeout';
import { type Connection } from '../../connection';
import { type MongoCredentials } from '../mongo_credentials';
import {
  OIDC_VERSION,
  type OIDCCallbackFunction,
  type OIDCCallbackParams,
  type OIDCResponse
} from '../mongodb_oidc';
import { AUTOMATED_TIMEOUT_MS, CallbackWorkflow } from './callback_workflow';
import { type TokenCache } from './token_cache';

/**
 * Class implementing behaviour for the non human callback workflow.
 * @internal
 */
export class AutomatedCallbackWorkflow extends CallbackWorkflow {
  /**
   * Instantiate the human callback workflow.
   */
  constructor(cache: TokenCache, callback: OIDCCallbackFunction) {
    super(cache, callback);
  }

  /**
   * Execute the OIDC callback workflow.
   */
  async execute(connection: Connection, credentials: MongoCredentials): Promise<void> {
    // If there is a cached access token, try to authenticate with it. If
    // authentication fails with an Authentication error (18),
    // invalidate the access token, fetch a new access token, and try
    // to authenticate again.
    // If the server fails for any other reason, do not clear the cache.
    if (this.cache.hasAccessToken) {
      const token = this.cache.getAccessToken();
      if (!connection.accessToken) {
        connection.accessToken = token;
      }
      try {
        return await this.finishAuthentication(connection, credentials, token);
      } catch (error) {
        if (
          error instanceof MongoError &&
          error.code === MONGODB_ERROR_CODES.AuthenticationFailed
        ) {
          this.cache.removeAccessToken();
          return await this.execute(connection, credentials);
        } else {
          throw error;
        }
      }
    }
    const response = await this.fetchAccessToken(credentials);
    this.cache.put(response);
    connection.accessToken = response.accessToken;
    await this.finishAuthentication(connection, credentials, response.accessToken);
  }

  /**
   * Fetches the access token using the callback.
   */
  protected async fetchAccessToken(credentials: MongoCredentials): Promise<OIDCResponse> {
    const controller = new AbortController();
    const params: OIDCCallbackParams = {
      timeoutContext: controller.signal,
      version: OIDC_VERSION
    };
    if (credentials.username) {
      params.username = credentials.username;
    }
    if (credentials.mechanismProperties.TOKEN_RESOURCE) {
      params.tokenAudience = credentials.mechanismProperties.TOKEN_RESOURCE;
    }
    const timeout = Timeout.expires(AUTOMATED_TIMEOUT_MS);
    try {
      return await Promise.race([this.executeAndValidateCallback(params), timeout]);
    } catch (error) {
      if (TimeoutError.is(error)) {
        controller.abort();
        throw new MongoOIDCError(`OIDC callback timed out after ${AUTOMATED_TIMEOUT_MS}ms.`);
      }
      throw error;
    } finally {
      timeout.clear();
    }
  }
}
