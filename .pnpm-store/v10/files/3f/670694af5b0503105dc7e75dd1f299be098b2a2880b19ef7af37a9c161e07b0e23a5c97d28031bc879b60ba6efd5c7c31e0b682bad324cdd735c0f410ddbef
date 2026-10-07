import { Binary } from '../../bson';
import { MongoMissingCredentialsError } from '../../error';
import { ns } from '../../utils';
import { type AuthContext, AuthProvider } from './auth_provider';

export class Plain extends AuthProvider {
  override async auth(authContext: AuthContext): Promise<void> {
    const { connection, credentials } = authContext;
    if (!credentials) {
      throw new MongoMissingCredentialsError('AuthContext must provide credentials.');
    }

    const { username, password } = credentials;

    const payload = new Binary(Buffer.from(`\x00${username}\x00${password}`));
    const command = {
      saslStart: 1,
      mechanism: 'PLAIN',
      payload: payload,
      autoAuthorize: 1
    };

    await connection.command(ns('$external.$cmd'), command, undefined);
  }
}
