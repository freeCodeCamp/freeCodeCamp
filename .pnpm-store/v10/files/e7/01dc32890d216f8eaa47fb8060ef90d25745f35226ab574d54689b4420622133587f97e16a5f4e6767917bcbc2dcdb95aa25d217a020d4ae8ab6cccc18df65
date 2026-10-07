"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScramSHA256 = exports.ScramSHA1 = void 0;
const saslprep_1 = require("@mongodb-js/saslprep");
const crypto = require("crypto");
const bson_1 = require("../../bson");
const error_1 = require("../../error");
const utils_1 = require("../../utils");
const auth_provider_1 = require("./auth_provider");
const providers_1 = require("./providers");
class ScramSHA extends auth_provider_1.AuthProvider {
    constructor(cryptoMethod) {
        super();
        this.cryptoMethod = cryptoMethod || 'sha1';
    }
    async prepare(handshakeDoc, authContext) {
        const cryptoMethod = this.cryptoMethod;
        const credentials = authContext.credentials;
        if (!credentials) {
            throw new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.');
        }
        const nonce = await (0, utils_1.randomBytes)(24);
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
    async auth(authContext) {
        const { reauthenticating, response } = authContext;
        if (response?.speculativeAuthenticate && !reauthenticating) {
            return await continueScramConversation(this.cryptoMethod, response.speculativeAuthenticate, authContext);
        }
        return await executeScram(this.cryptoMethod, authContext);
    }
}
function cleanUsername(username) {
    return username.replace('=', '=3D').replace(',', '=2C');
}
function clientFirstMessageBare(username, nonce) {
    // NOTE: This is done b/c Javascript uses UTF-16, but the server is hashing in UTF-8.
    // Since the username is not sasl-prep-d, we need to do this here.
    return Buffer.concat([
        Buffer.from('n=', 'utf8'),
        Buffer.from(username, 'utf8'),
        Buffer.from(',r=', 'utf8'),
        Buffer.from(nonce.toString('base64'), 'utf8')
    ]);
}
function makeFirstMessage(cryptoMethod, credentials, nonce) {
    const username = cleanUsername(credentials.username);
    const mechanism = cryptoMethod === 'sha1' ? providers_1.AuthMechanism.MONGODB_SCRAM_SHA1 : providers_1.AuthMechanism.MONGODB_SCRAM_SHA256;
    // NOTE: This is done b/c Javascript uses UTF-16, but the server is hashing in UTF-8.
    // Since the username is not sasl-prep-d, we need to do this here.
    return {
        saslStart: 1,
        mechanism,
        payload: new bson_1.Binary(Buffer.concat([Buffer.from('n,,', 'utf8'), clientFirstMessageBare(username, nonce)])),
        autoAuthorize: 1,
        options: { skipEmptyExchange: true }
    };
}
async function executeScram(cryptoMethod, authContext) {
    const { connection, credentials } = authContext;
    if (!credentials) {
        throw new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.');
    }
    if (!authContext.nonce) {
        throw new error_1.MongoInvalidArgumentError('AuthContext must contain a valid nonce property');
    }
    const nonce = authContext.nonce;
    const db = credentials.source;
    const saslStartCmd = makeFirstMessage(cryptoMethod, credentials, nonce);
    const response = await connection.command((0, utils_1.ns)(`${db}.$cmd`), saslStartCmd, undefined);
    await continueScramConversation(cryptoMethod, response, authContext);
}
async function continueScramConversation(cryptoMethod, response, authContext) {
    const connection = authContext.connection;
    const credentials = authContext.credentials;
    if (!credentials) {
        throw new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.');
    }
    if (!authContext.nonce) {
        throw new error_1.MongoInvalidArgumentError('Unable to continue SCRAM without valid nonce');
    }
    const nonce = authContext.nonce;
    const db = credentials.source;
    const username = cleanUsername(credentials.username);
    const password = credentials.password;
    const processedPassword = cryptoMethod === 'sha256' ? (0, saslprep_1.saslprep)(password) : passwordDigest(username, password);
    const payload = Buffer.isBuffer(response.payload)
        ? new bson_1.Binary(response.payload)
        : response.payload;
    const dict = parsePayload(payload);
    const iterations = parseInt(dict.i, 10);
    if (iterations && iterations < 4096) {
        // TODO(NODE-3483)
        throw new error_1.MongoRuntimeError(`Server returned an invalid iteration count ${iterations}`);
    }
    const salt = dict.s;
    const rnonce = dict.r;
    if (rnonce.startsWith('nonce')) {
        // TODO(NODE-3483)
        throw new error_1.MongoRuntimeError(`Server returned an invalid nonce: ${rnonce}`);
    }
    // Set up start of proof
    const withoutProof = `c=biws,r=${rnonce}`;
    const saltedPassword = HI(processedPassword, Buffer.from(salt, 'base64'), iterations, cryptoMethod);
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
        payload: new bson_1.Binary(Buffer.from(clientFinal))
    };
    const r = await connection.command((0, utils_1.ns)(`${db}.$cmd`), saslContinueCmd, undefined);
    const parsedResponse = parsePayload(r.payload);
    if (!compareDigest(Buffer.from(parsedResponse.v, 'base64'), serverSignature)) {
        throw new error_1.MongoRuntimeError('Server returned an invalid signature');
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
    await connection.command((0, utils_1.ns)(`${db}.$cmd`), retrySaslContinueCmd, undefined);
}
function parsePayload(payload) {
    const payloadStr = payload.toString('utf8');
    const dict = {};
    const parts = payloadStr.split(',');
    for (let i = 0; i < parts.length; i++) {
        const valueParts = (parts[i].match(/^([^=]*)=(.*)$/) ?? []).slice(1);
        dict[valueParts[0]] = valueParts[1];
    }
    return dict;
}
function passwordDigest(username, password) {
    if (typeof username !== 'string') {
        throw new error_1.MongoInvalidArgumentError('Username must be a string');
    }
    if (typeof password !== 'string') {
        throw new error_1.MongoInvalidArgumentError('Password must be a string');
    }
    if (password.length === 0) {
        throw new error_1.MongoInvalidArgumentError('Password cannot be empty');
    }
    let md5;
    try {
        md5 = crypto.createHash('md5');
    }
    catch (err) {
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
function xor(a, b) {
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
function H(method, text) {
    return crypto.createHash(method).update(text).digest();
}
function HMAC(method, key, text) {
    return crypto.createHmac(method, key).update(text).digest();
}
let _hiCache = {};
let _hiCacheCount = 0;
function _hiCachePurge() {
    _hiCache = {};
    _hiCacheCount = 0;
}
const hiLengthMap = {
    sha256: 32,
    sha1: 20
};
function HI(data, salt, iterations, cryptoMethod) {
    // omit the work if already generated
    const key = [data, salt.toString('base64'), iterations].join('_');
    if (_hiCache[key] != null) {
        return _hiCache[key];
    }
    // generate the salt
    const saltedData = crypto.pbkdf2Sync(data, salt, iterations, hiLengthMap[cryptoMethod], cryptoMethod);
    // cache a copy to speed up the next lookup, but prevent unbounded cache growth
    if (_hiCacheCount >= 200) {
        _hiCachePurge();
    }
    _hiCache[key] = saltedData;
    _hiCacheCount += 1;
    return saltedData;
}
function compareDigest(lhs, rhs) {
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
class ScramSHA1 extends ScramSHA {
    constructor() {
        super('sha1');
    }
}
exports.ScramSHA1 = ScramSHA1;
class ScramSHA256 extends ScramSHA {
    constructor() {
        super('sha256');
    }
}
exports.ScramSHA256 = ScramSHA256;
//# sourceMappingURL=scram.js.map