import type { Document } from '../../bson';
import { MongoMissingCredentialsError } from '../../error';
import { ns } from '../../utils';
import type { HandshakeDocument } from '../connect';
import { type AuthContext, AuthProvider } from './auth_provider';
import type { MongoCredentials } from './mongo_credentials';

export class X509 extends AuthProvider {
  override async prepare(
    handshakeDoc: HandshakeDocument,
    authContext: AuthContext
  ): Promise<HandshakeDocument> {
    const { credentials } = authContext;
    if (!credentials) {
      throw new MongoMissingCredentialsError('AuthContext must provide credentials.');
    }
    return { ...handshakeDoc, speculativeAuthenticate: x509AuthenticateCommand(credentials) };
  }

  override async auth(authContext: AuthContext) {
    const connection = authContext.connection;
    const credentials = authContext.credentials;
    if (!credentials) {
      throw new MongoMissingCredentialsError('AuthContext must provide credentials.');
    }
    const response = authContext.response;

    if (response?.speculativeAuthenticate) {
      return;
    }

    await connection.command(ns('$external.$cmd'), x509AuthenticateCommand(credentials), undefined);
  }
}

function x509AuthenticateCommand(credentials: MongoCredentials) {
  const command: Document = { authenticate: 1, mechanism: 'MONGODB-X509' };
  if (credentials.username) {
    command.user = credentials.username;
  }

  return command;
}
