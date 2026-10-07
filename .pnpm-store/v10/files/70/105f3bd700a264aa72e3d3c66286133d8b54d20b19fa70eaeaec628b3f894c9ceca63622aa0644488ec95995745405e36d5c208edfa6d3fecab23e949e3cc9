import { Binary, BSON, type Document } from '../../../bson';
import { type MongoCredentials } from '../mongo_credentials';
import { AuthMechanism } from '../providers';

/** @internal */
export interface OIDCCommand {
  saslStart?: number;
  saslContinue?: number;
  conversationId?: number;
  mechanism?: string;
  autoAuthorize?: number;
  db?: string;
  payload: Binary;
}

/**
 * Generate the finishing command document for authentication. Will be a
 * saslStart or saslContinue depending on the presence of a conversation id.
 */
export function finishCommandDocument(token: string, conversationId?: number): OIDCCommand {
  if (conversationId != null) {
    return {
      saslContinue: 1,
      conversationId: conversationId,
      payload: new Binary(BSON.serialize({ jwt: token }))
    };
  }
  // saslContinue requires a conversationId in the command to be valid so in this
  // case the server allows "step two" to actually be a saslStart with the token
  // as the jwt since the use of the cached value has no correlating conversating
  // on the particular connection.
  return {
    saslStart: 1,
    mechanism: AuthMechanism.MONGODB_OIDC,
    payload: new Binary(BSON.serialize({ jwt: token }))
  };
}

/**
 * Generate the saslStart command document.
 */
export function startCommandDocument(credentials: MongoCredentials): OIDCCommand {
  const payload: Document = {};
  if (credentials.username) {
    payload.n = credentials.username;
  }
  return {
    saslStart: 1,
    autoAuthorize: 1,
    mechanism: AuthMechanism.MONGODB_OIDC,
    payload: new Binary(BSON.serialize(payload))
  };
}
