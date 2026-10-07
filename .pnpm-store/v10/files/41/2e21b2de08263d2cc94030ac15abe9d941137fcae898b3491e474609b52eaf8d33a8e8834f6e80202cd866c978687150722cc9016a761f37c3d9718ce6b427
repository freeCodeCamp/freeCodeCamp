import { saslprep } from '@mongodb-js/saslprep';
import * as crypto from 'crypto';

import { Binary, type Document } from '../../bson';
import {
  MongoInvalidArgumentError,
  MongoMissingCredentialsError,
  MongoRuntimeError
} from '../../error';
import { ns, randomBytes } from '../../utils';
import type { HandshakeDocument } from '../connect';
import { type AuthContext, AuthProvider } from './auth_provider';
import type { MongoCredentials } from './mongo_credentials';
import { AuthMechanism } from './providers';

type CryptoMethod = 'sha1' | 'sha256';

class ScramSHA extends AuthProvider {
  cryptoMethod: CryptoMethod;

  constructor(cryptoMethod: CryptoMethod) {
    super();
    this.cryptoMethod = cryptoMethod || 'sha1';
  }

  override async prepare(
    handshakeDoc: HandshakeDocument,
    authContext: AuthContext
  ): Promise<HandshakeDocument> {
    const cryptoMethod = this.cryptoMethod;
    const credentials = authContext.credentials;
    if (!credentials) {
      throw new MongoMissingCredentialsError('AuthContext must provide credentials.');
    }

    const nonce = await randomBytes(24);
    // store the nonce for later use
    authContext.nonce = nonce;

    const request = {
      ...handshakeDoc,
      speculativeAuthenticate: {
        ...makeFirstMessage(cryptoMethod, credentials, nonce),
        db: credentials.source
      }
    };

    return request;
  }

  override async auth(authContext: AuthContext) {
    const { reauthenticating, response } = authContext;
    if (response?.speculativeAuthenticate && !reauthenticating) {
      return await continueScramConversation(
        this.cryptoMethod,
        response.speculativeAuthenticate,
        authContext
      );
    }
    return await executeScram(this.cryptoMethod, authContext);
  }
}

function cleanUsername(username: string) {
  return username.replace('=', '=3D').replace(',', '=2C');
}

function clientFirstMessageBare(username: string, nonce: Buffer) {
  // NOTE: This is done b/c Javascript uses UTF-16, but the server is hashing in UTF-8.
  // Since the username is not sasl-prep-d, we need to do this here.
  return Buffer.concat([
    Buffer.from('n=', 'utf8'),
    Buffer.from(username, 'utf8'),
    Buffer.from(',r=', 'utf8'),
    Buffer.from(nonce.toString('base64'), 'utf8')
  ]);
}

function makeFirstMessage(
  cryptoMethod: CryptoMethod,
  credentials: MongoCredentials,
  nonce: Buffer
) {
  const username = cleanUsername(credentials.username);
  const mechanism =
    cryptoMethod === 'sha1' ? AuthMechanism.MONGODB_SCRAM_SHA1 : AuthMechanism.MONGODB_SCRAM_SHA256;

  // NOTE: This is done b/c Javascript uses UTF-16, but the server is hashing in UTF-8.
  // Since the username is not sasl-prep-d, we need to do this here.
  return {
    saslStart: 1,
    mechanism,
    payload: new Binary(
      Buffer.concat([Buffer.from('n,,', 'utf8'), clientFirstMessageBare(username, nonce)])
    ),
    autoAuthorize: 1,
    options: { skipEmptyExchange: true }
  };
}

async function executeScram(cryptoMethod: CryptoMethod, authContext: AuthContext): Promise<void> {
  const { connection, credentials } = authContext;
  if (!credentials) {
    throw new MongoMissingCredentialsError('AuthContext must provide credentials.');
  }
  if (!authContext.nonce) {
    throw new MongoInvalidArgumentError('AuthContext must contain a valid nonce property');
  }
  const nonce = authContext.nonce;
  const db = credentials.source;

  const saslStartCmd = makeFirstMessage(cryptoMethod, credentials, nonce);
  const response = await connection.command(ns(`${db}.$cmd`), saslStartCmd, undefined);
  await continueScramConversation(cryptoMethod, response, authContext);
}

async function continueScramConversation(
  cryptoMethod: CryptoMethod,
  response: Document,
  authContext: AuthContext
): Promise<void> {
  const connection = authContext.connection;
  const credentials = authContext.credentials;
  if (!credentials) {
    throw new MongoMissingCredentialsError('AuthContext must provide credentials.');
  }
  if (!authContext.nonce) {
    throw new MongoInvalidArgumentError('Unable to continue SCRAM without valid nonce');
  }
  const nonce = authContext.nonce;

  const db = credentials.source;
  const username = cleanUsername(credentials.username);
  const password = credentials.password;

  const processedPassword =
    cryptoMethod === 'sha256' ? saslprep(password) : passwordDigest(username, password);

  const payload: Binary = Buffer.isBuffer(response.payload)
    ? new Binary(response.payload)
    : response.payload;

  const dict = parsePayload(payload);

  const iterations = parseInt(dict.i, 10);
  if (iterations && iterations < 4096) {
    // TODO(NODE-3483)
    throw new MongoRuntimeError(`Server returned an invalid iteration count ${iterations}`);
  }

  const salt = dict.s;
  const rnonce = dict.r;
  if (rnonce.startsWith('nonce')) {
    // TODO(NODE-3483)
    throw new MongoRuntimeError(`Server returned an invalid nonce: ${rnonce}`);
  }

  // Set up start of proof
  const withoutProof = `c=biws,r=${rnonce}`;
  const saltedPassword = HI(
    processedPassword,
    Buffer.from(salt, 'base64'),
    iterations,
    cryptoMethod
  );

  const clientKey = HMAC(cryptoMethod, saltedPassword, 'Client Key');
  const serverKey = HMAC(cryptoMethod, saltedPassword, 'Server Key');
  const storedKey = H(cryptoMethod, clientKey);
  const authMessage = [
    clientFirstMessageBare(username, nonce),
    payload.toString('utf8'),
    withoutProof
  ].join(',');

  const clientSignature = HMAC(cryptoMethod, storedKey, authMessage);
  const clientProof = `p=${xor(clientKey, clientSignature)}`;
  const clientFinal = [withoutProof, clientProof].join(',');

  const serverSignature = HMAC(cryptoMethod, serverKey, authMessage);
  const saslContinueCmd = {
    saslContinue: 1,
    conversationId: response.conversationId,
    payload: new Binary(Buffer.from(clientFinal))
  };

  const r = await connection.command(ns(`${db}.$cmd`), saslContinueCmd, undefined);
  const parsedResponse = parsePayload(r.payload);

  if (!compareDigest(Buffer.from(parsedResponse.v, 'base64'), serverSignature)) {
    throw new MongoRuntimeError('Server returned an invalid signature');
  }

  if (r.done !== false) {
    // If the server sends r.done === true we can save one RTT
    return;
  }

  const retrySaslContinueCmd = {
    saslContinue: 1,
    conversationId: r.conversationId,
    payload: Buffer.alloc(0)
  };

  await connection.command(ns(`${db}.$cmd`), retrySaslContinueCmd, undefined);
}

function parsePayload(payload: Binary) {
  const payloadStr = payload.toString('utf8');
  const dict: Document = {};
  const parts = payloadStr.split(',');
  for (let i = 0; i < parts.length; i++) {
    const valueParts = (parts[i].match(/^([^=]*)=(.*)$/) ?? []).slice(1);
    dict[valueParts[0]] = valueParts[1];
  }
  return dict;
}

function passwordDigest(username: string, password: string) {
  if (typeof username !== 'string') {
    throw new MongoInvalidArgumentError('Username must be a string');
  }

  if (typeof password !== 'string') {
    throw new MongoInvalidArgumentError('Password must be a string');
  }

  if (password.length === 0) {
    throw new MongoInvalidArgumentError('Password cannot be empty');
  }

  let md5: crypto.Hash;
  try {
    md5 = crypto.createHash('md5');
  } catch (err) {
    if (crypto.getFips()) {
      // This error is (slightly) more helpful than what comes from OpenSSL directly, e.g.
      // 'Error: error:060800C8:digital envelope routines:EVP_DigestInit_ex:disabled for FIPS'
      throw new Error('Auth mechanism SCRAM-SHA-1 is not supported in FIPS mode');
    }
    throw err;
  }
  md5.update(`${username}:mongo:${password}`, 'utf8');
  return md5.digest('hex');
}

// XOR two buffers
function xor(a: Buffer, b: Buffer) {
  if (!Buffer.isBuffer(a)) {
    a = Buffer.from(a);
  }

  if (!Buffer.isBuffer(b)) {
    b = Buffer.from(b);
  }

  const length = Math.max(a.length, b.length);
  const res = [];

  for (let i = 0; i < length; i += 1) {
    res.push(a[i] ^ b[i]);
  }

  return Buffer.from(res).toString('base64');
}

function H(method: CryptoMethod, text: Buffer) {
  return crypto.createHash(method).update(text).digest();
}

function HMAC(method: CryptoMethod, key: Buffer, text: Buffer | string) {
  return crypto.createHmac(method, key).update(text).digest();
}

interface HICache {
  [key: string]: Buffer;
}

let _hiCache: HICache = {};
let _hiCacheCount = 0;
function _hiCachePurge() {
  _hiCache = {};
  _hiCacheCount = 0;
}

const hiLengthMap = {
  sha256: 32,
  sha1: 20
};

function HI(data: string, salt: Buffer, iterations: number, cryptoMethod: CryptoMethod) {
  // omit the work if already generated
  const key = [data, salt.toString('base64'), iterations].join('_');
  if (_hiCache[key] != null) {
    return _hiCache[key];
  }

  // generate the salt
  const saltedData = crypto.pbkdf2Sync(
    data,
    salt,
    iterations,
    hiLengthMap[cryptoMethod],
    cryptoMethod
  );

  // cache a copy to speed up the next lookup, but prevent unbounded cache growth
  if (_hiCacheCount >= 200) {
    _hiCachePurge();
  }

  _hiCache[key] = saltedData;
  _hiCacheCount += 1;
  return saltedData;
}

function compareDigest(lhs: Buffer, rhs: Uint8Array) {
  if (lhs.length !== rhs.length) {
    return false;
  }

  if (typeof crypto.timingSafeEqual === 'function') {
    return crypto.timingSafeEqual(lhs, rhs);
  }

  let result = 0;
  for (let i = 0; i < lhs.length; i++) {
    result |= lhs[i] ^ rhs[i];
  }

  return result === 0;
}

export class ScramSHA1 extends ScramSHA {
  constructor() {
    super('sha1');
  }
}

export class ScramSHA256 extends ScramSHA {
  constructor() {
    super('sha256');
  }
}
