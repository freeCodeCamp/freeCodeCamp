import type { Document } from '../../bson';
import { MongoRuntimeError } from '../../error';
import type { HandshakeDocument } from '../connect';
import type { Connection, ConnectionOptions } from '../connection';
import type { MongoCredentials } from './mongo_credentials';

/**
 * Context used during authentication
 * @internal
 */
export class AuthContext {
  /** The connection to authenticate */
  connection: Connection;
  /** The credentials to use for authentication */
  credentials?: MongoCredentials;
  /** If the context is for reauthentication. */
  reauthenticating = false;
  /** The options passed to the `connect` method */
  options: ConnectionOptions;

  /** A response from an initial auth attempt, only some mechanisms use this (e.g, SCRAM) */
  response?: Document;
  /** A random nonce generated for use in an authentication conversation */
  nonce?: Buffer;

  constructor(
    connection: Connection,
    credentials: MongoCredentials | undefined,
    options: ConnectionOptions
  ) {
    this.connection = connection;
    this.credentials = credentials;
    this.options = options;
  }
}

/**
 * Provider used during authentication.
 * @internal
 */
export abstract class AuthProvider {
  /**
   * Prepare the handshake document before the initial handshake.
   *
   * @param handshakeDoc - The document used for the initial handshake on a connection
   * @param authContext - Context for authentication flow
   */
  async prepare(
    handshakeDoc: HandshakeDocument,
    _authContext: AuthContext
  ): Promise<HandshakeDocument> {
    return handshakeDoc;
  }

  /**
   * Authenticate
   *
   * @param context - A shared context for authentication flow
   */
  abstract auth(context: AuthContext): Promise<void>;

  /**
   * Reauthenticate.
   * @param context - The shared auth context.
   */
  async reauth(context: AuthContext): Promise<void> {
    if (context.reauthenticating) {
      throw new MongoRuntimeError('Reauthentication already in progress.');
    }
    try {
      context.reauthenticating = true;
      await this.auth(context);
    } finally {
      context.reauthenticating = false;
    }
  }
}
