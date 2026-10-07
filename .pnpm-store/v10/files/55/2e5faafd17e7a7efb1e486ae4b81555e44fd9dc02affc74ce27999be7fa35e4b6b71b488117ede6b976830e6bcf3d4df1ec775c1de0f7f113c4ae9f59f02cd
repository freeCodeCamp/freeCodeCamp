import { setTimeout } from 'timers/promises';

import { type Document } from '../../../bson';
import { MongoMissingCredentialsError } from '../../../error';
import { ns } from '../../../utils';
import type { Connection } from '../../connection';
import type { MongoCredentials } from '../mongo_credentials';
import {
  type OIDCCallbackFunction,
  type OIDCCallbackParams,
  type OIDCResponse,
  type Workflow
} from '../mongodb_oidc';
import { finishCommandDocument, startCommandDocument } from './command_builders';
import { type TokenCache } from './token_cache';

/** 5 minutes in milliseconds */
export const HUMAN_TIMEOUT_MS = 300000;
/** 1 minute in milliseconds */
export const AUTOMATED_TIMEOUT_MS = 60000;

/** Properties allowed on results of callbacks. */
const RESULT_PROPERTIES = ['accessToken', 'expiresInSeconds', 'refreshToken'];

/** Error message when the callback result is invalid. */
const CALLBACK_RESULT_ERROR =
  'User provided OIDC callbacks must return a valid object with an accessToken.';

/** The time to throttle callback calls. */
const THROTTLE_MS = 100;

/**
 * OIDC implementation of a callback based workflow.
 * @internal
 */
export abstract class CallbackWorkflow implements Workflow {
  cache: TokenCache;
  callback: OIDCCallbackFunction;
  lastExecutionTime: number;

  /**
   * Instantiate the callback workflow.
   */
  constructor(cache: TokenCache, callback: OIDCCallbackFunction) {
    this.cache = cache;
    this.callback = this.withLock(callback);
    this.lastExecutionTime = Date.now() - THROTTLE_MS;
  }

  /**
   * Get the document to add for speculative authentication. This also needs
   * to add a db field from the credentials source.
   */
  async speculativeAuth(connection: Connection, credentials: MongoCredentials): Promise<Document> {
    // Check if the Client Cache has an access token.
    // If it does, cache the access token in the Connection Cache and send a JwtStepRequest
    // with the cached access token in the speculative authentication SASL payload.
    if (this.cache.hasAccessToken) {
      const accessToken = this.cache.getAccessToken();
      connection.accessToken = accessToken;
      const document = finishCommandDocument(accessToken);
      document.db = credentials.source;
      return { speculativeAuthenticate: document };
    }
    return {};
  }

  /**
   * Reauthenticate the callback workflow. For this we invalidated the access token
   * in the cache and run the authentication steps again. No initial handshake needs
   * to be sent.
   */
  async reauthenticate(connection: Connection, credentials: MongoCredentials): Promise<void> {
    if (this.cache.hasAccessToken) {
      // Reauthentication implies the token has expired.
      if (connection.accessToken === this.cache.getAccessToken()) {
        // If connection's access token is the same as the cache's, remove
        // the token from the cache and connection.
        this.cache.removeAccessToken();
        delete connection.accessToken;
      } else {
        // If the connection's access token is different from the cache's, set
        // the cache's token on the connection and do not remove from the
        // cache.
        connection.accessToken = this.cache.getAccessToken();
      }
    }
    await this.execute(connection, credentials);
  }

  /**
   * Execute the OIDC callback workflow.
   */
  abstract execute(
    connection: Connection,
    credentials: MongoCredentials,
    response?: Document
  ): Promise<void>;

  /**
   * Starts the callback authentication process. If there is a speculative
   * authentication document from the initial handshake, then we will use that
   * value to get the issuer, otherwise we will send the saslStart command.
   */
  protected async startAuthentication(
    connection: Connection,
    credentials: MongoCredentials,
    response?: Document
  ): Promise<Document> {
    let result;
    if (response?.speculativeAuthenticate) {
      result = response.speculativeAuthenticate;
    } else {
      result = await connection.command(
        ns(credentials.source),
        startCommandDocument(credentials),
        undefined
      );
    }
    return result;
  }

  /**
   * Finishes the callback authentication process.
   */
  protected async finishAuthentication(
    connection: Connection,
    credentials: MongoCredentials,
    token: string,
    conversationId?: number
  ): Promise<void> {
    await connection.command(
      ns(credentials.source),
      finishCommandDocument(token, conversationId),
      undefined
    );
  }

  /**
   * Executes the callback and validates the output.
   */
  protected async executeAndValidateCallback(params: OIDCCallbackParams): Promise<OIDCResponse> {
    const result = await this.callback(params);
    // Validate that the result returned by the callback is acceptable. If it is not
    // we must clear the token result from the cache.
    if (isCallbackResultInvalid(result)) {
      throw new MongoMissingCredentialsError(CALLBACK_RESULT_ERROR);
    }
    return result;
  }

  /**
   * Ensure the callback is only executed one at a time and throttles the calls
   * to every 100ms.
   */
  protected withLock(callback: OIDCCallbackFunction): OIDCCallbackFunction {
    let lock: Promise<any> = Promise.resolve();
    return async (params: OIDCCallbackParams): Promise<OIDCResponse> => {
      // We do this to ensure that we would never return the result of the
      // previous lock, only the current callback's value would get returned.
      await lock;
      lock = lock

        .catch(() => null)

        .then(async () => {
          const difference = Date.now() - this.lastExecutionTime;
          if (difference <= THROTTLE_MS) {
            await setTimeout(THROTTLE_MS - difference, { signal: params.timeoutContext });
          }
          this.lastExecutionTime = Date.now();
          return await callback(params);
        });
      return await lock;
    };
  }
}

/**
 * Determines if a result returned from a request or refresh callback
 * function is invalid. This means the result is nullish, doesn't contain
 * the accessToken required field, and does not contain extra fields.
 */
function isCallbackResultInvalid(tokenResult: unknown): boolean {
  if (tokenResult == null || typeof tokenResult !== 'object') return true;
  if (!('accessToken' in tokenResult)) return true;
  return !Object.getOwnPropertyNames(tokenResult).every(prop => RESULT_PROPERTIES.includes(prop));
}
