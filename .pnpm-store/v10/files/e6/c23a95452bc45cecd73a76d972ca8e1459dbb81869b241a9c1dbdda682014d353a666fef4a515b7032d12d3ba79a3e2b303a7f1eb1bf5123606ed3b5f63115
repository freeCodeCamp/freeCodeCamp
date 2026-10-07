import type { Binary, BSONSerializeOptions } from '../../bson';
import * as BSON from '../../bson';
import { aws4 } from '../../deps';
import {
  MongoCompatibilityError,
  MongoMissingCredentialsError,
  MongoRuntimeError
} from '../../error';
import { ByteUtils, maxWireVersion, ns, randomBytes } from '../../utils';
import { type AuthContext, AuthProvider } from './auth_provider';
import {
  type AWSCredentialProvider,
  AWSSDKCredentialProvider,
  type AWSTempCredentials,
  AWSTemporaryCredentialProvider,
  LegacyAWSTemporaryCredentialProvider
} from './aws_temporary_credentials';
import { MongoCredentials } from './mongo_credentials';
import { AuthMechanism } from './providers';

const ASCII_N = 110;
const bsonOptions: BSONSerializeOptions = {
  useBigInt64: false,
  promoteLongs: true,
  promoteValues: true,
  promoteBuffers: false,
  bsonRegExp: false
};

interface AWSSaslContinuePayload {
  a: string;
  d: string;
  t?: string;
}

export class MongoDBAWS extends AuthProvider {
  private credentialFetcher: AWSTemporaryCredentialProvider;
  private credentialProvider?: AWSCredentialProvider;

  constructor(credentialProvider?: AWSCredentialProvider) {
    super();

    this.credentialProvider = credentialProvider;
    this.credentialFetcher = AWSTemporaryCredentialProvider.isAWSSDKInstalled
      ? new AWSSDKCredentialProvider(credentialProvider)
      : new LegacyAWSTemporaryCredentialProvider();
  }

  override async auth(authContext: AuthContext): Promise<void> {
    const { connection } = authContext;
    if (!authContext.credentials) {
      throw new MongoMissingCredentialsError('AuthContext must provide credentials.');
    }

    if ('kModuleError' in aws4) {
      throw aws4['kModuleError'];
    }
    const { sign } = aws4;

    if (maxWireVersion(connection) < 9) {
      throw new MongoCompatibilityError(
        'MONGODB-AWS authentication requires MongoDB version 4.4 or later'
      );
    }

    if (!authContext.credentials.username) {
      authContext.credentials = await makeTempCredentials(
        authContext.credentials,
        this.credentialFetcher
      );
    }

    const { credentials } = authContext;

    const accessKeyId = credentials.username;
    const secretAccessKey = credentials.password;
    // Allow the user to specify an AWS session token for authentication with temporary credentials.
    const sessionToken = credentials.mechanismProperties.AWS_SESSION_TOKEN;

    // If all three defined, include sessionToken, else include username and pass, else no credentials
    const awsCredentials =
      accessKeyId && secretAccessKey && sessionToken
        ? { accessKeyId, secretAccessKey, sessionToken }
        : accessKeyId && secretAccessKey
          ? { accessKeyId, secretAccessKey }
          : undefined;

    const db = credentials.source;
    const nonce = await randomBytes(32);

    // All messages between MongoDB clients and servers are sent as BSON objects
    // in the payload field of saslStart and saslContinue.
    const saslStart = {
      saslStart: 1,
      mechanism: 'MONGODB-AWS',
      payload: BSON.serialize({ r: nonce, p: ASCII_N }, bsonOptions)
    };

    const saslStartResponse = await connection.command(ns(`${db}.$cmd`), saslStart, undefined);

    const serverResponse = BSON.deserialize(saslStartResponse.payload.buffer, bsonOptions) as {
      s: Binary;
      h: string;
    };
    const host = serverResponse.h;
    const serverNonce = serverResponse.s.buffer;
    if (serverNonce.length !== 64) {
      // TODO(NODE-3483)
      throw new MongoRuntimeError(`Invalid server nonce length ${serverNonce.length}, expected 64`);
    }

    if (!ByteUtils.equals(serverNonce.subarray(0, nonce.byteLength), nonce)) {
      // throw because the serverNonce's leading 32 bytes must equal the client nonce's 32 bytes
      // https://github.com/mongodb/specifications/blob/master/source/auth/auth.md#conversation-5

      // TODO(NODE-3483)
      throw new MongoRuntimeError('Server nonce does not begin with client nonce');
    }

    if (host.length < 1 || host.length > 255 || host.indexOf('..') !== -1) {
      // TODO(NODE-3483)
      throw new MongoRuntimeError(`Server returned an invalid host: "${host}"`);
    }

    const body = 'Action=GetCallerIdentity&Version=2011-06-15';
    const options = sign(
      {
        method: 'POST',
        host,
        region: deriveRegion(serverResponse.h),
        service: 'sts',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': body.length,
          'X-MongoDB-Server-Nonce': ByteUtils.toBase64(serverNonce),
          'X-MongoDB-GS2-CB-Flag': 'n'
        },
        path: '/',
        body
      },
      awsCredentials
    );

    const payload: AWSSaslContinuePayload = {
      a: options.headers.Authorization,
      d: options.headers['X-Amz-Date']
    };

    if (sessionToken) {
      payload.t = sessionToken;
    }

    const saslContinue = {
      saslContinue: 1,
      conversationId: saslStartResponse.conversationId,
      payload: BSON.serialize(payload, bsonOptions)
    };

    await connection.command(ns(`${db}.$cmd`), saslContinue, undefined);
  }
}

async function makeTempCredentials(
  credentials: MongoCredentials,
  awsCredentialFetcher: AWSTemporaryCredentialProvider
): Promise<MongoCredentials> {
  function makeMongoCredentialsFromAWSTemp(creds: AWSTempCredentials) {
    // The AWS session token (creds.Token) may or may not be set.
    if (!creds.AccessKeyId || !creds.SecretAccessKey) {
      throw new MongoMissingCredentialsError('Could not obtain temporary MONGODB-AWS credentials');
    }

    return new MongoCredentials({
      username: creds.AccessKeyId,
      password: creds.SecretAccessKey,
      source: credentials.source,
      mechanism: AuthMechanism.MONGODB_AWS,
      mechanismProperties: {
        AWS_SESSION_TOKEN: creds.Token
      }
    });
  }
  const temporaryCredentials = await awsCredentialFetcher.getCredentials();

  return makeMongoCredentialsFromAWSTemp(temporaryCredentials);
}

function deriveRegion(host: string) {
  const parts = host.split('.');
  if (parts.length === 1 || parts[1] === 'amazonaws') {
    return 'us-east-1';
  }

  return parts[1];
}
