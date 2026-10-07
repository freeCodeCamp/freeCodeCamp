"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBAWS = void 0;
const BSON = require("../../bson");
const deps_1 = require("../../deps");
const error_1 = require("../../error");
const utils_1 = require("../../utils");
const auth_provider_1 = require("./auth_provider");
const aws_temporary_credentials_1 = require("./aws_temporary_credentials");
const mongo_credentials_1 = require("./mongo_credentials");
const providers_1 = require("./providers");
const ASCII_N = 110;
const bsonOptions = {
    useBigInt64: false,
    promoteLongs: true,
    promoteValues: true,
    promoteBuffers: false,
    bsonRegExp: false
};
class MongoDBAWS extends auth_provider_1.AuthProvider {
    constructor(credentialProvider) {
        super();
        this.credentialProvider = credentialProvider;
        this.credentialFetcher = aws_temporary_credentials_1.AWSTemporaryCredentialProvider.isAWSSDKInstalled
            ? new aws_temporary_credentials_1.AWSSDKCredentialProvider(credentialProvider)
            : new aws_temporary_credentials_1.LegacyAWSTemporaryCredentialProvider();
    }
    async auth(authContext) {
        const { connection } = authContext;
        if (!authContext.credentials) {
            throw new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.');
        }
        if ('kModuleError' in deps_1.aws4) {
            throw deps_1.aws4['kModuleError'];
        }
        const { sign } = deps_1.aws4;
        if ((0, utils_1.maxWireVersion)(connection) < 9) {
            throw new error_1.MongoCompatibilityError('MONGODB-AWS authentication requires MongoDB version 4.4 or later');
        }
        if (!authContext.credentials.username) {
            authContext.credentials = await makeTempCredentials(authContext.credentials, this.credentialFetcher);
        }
        const { credentials } = authContext;
        const accessKeyId = credentials.username;
        const secretAccessKey = credentials.password;
        // Allow the user to specify an AWS session token for authentication with temporary credentials.
        const sessionToken = credentials.mechanismProperties.AWS_SESSION_TOKEN;
        // If all three defined, include sessionToken, else include username and pass, else no credentials
        const awsCredentials = accessKeyId && secretAccessKey && sessionToken
            ? { accessKeyId, secretAccessKey, sessionToken }
            : accessKeyId && secretAccessKey
                ? { accessKeyId, secretAccessKey }
                : undefined;
        const db = credentials.source;
        const nonce = await (0, utils_1.randomBytes)(32);
        // All messages between MongoDB clients and servers are sent as BSON objects
        // in the payload field of saslStart and saslContinue.
        const saslStart = {
            saslStart: 1,
            mechanism: 'MONGODB-AWS',
            payload: BSON.serialize({ r: nonce, p: ASCII_N }, bsonOptions)
        };
        const saslStartResponse = await connection.command((0, utils_1.ns)(`${db}.$cmd`), saslStart, undefined);
        const serverResponse = BSON.deserialize(saslStartResponse.payload.buffer, bsonOptions);
        const host = serverResponse.h;
        const serverNonce = serverResponse.s.buffer;
        if (serverNonce.length !== 64) {
            // TODO(NODE-3483)
            throw new error_1.MongoRuntimeError(`Invalid server nonce length ${serverNonce.length}, expected 64`);
        }
        if (!utils_1.ByteUtils.equals(serverNonce.subarray(0, nonce.byteLength), nonce)) {
            // throw because the serverNonce's leading 32 bytes must equal the client nonce's 32 bytes
            // https://github.com/mongodb/specifications/blob/master/source/auth/auth.md#conversation-5
            // TODO(NODE-3483)
            throw new error_1.MongoRuntimeError('Server nonce does not begin with client nonce');
        }
        if (host.length < 1 || host.length > 255 || host.indexOf('..') !== -1) {
            // TODO(NODE-3483)
            throw new error_1.MongoRuntimeError(`Server returned an invalid host: "${host}"`);
        }
        const body = 'Action=GetCallerIdentity&Version=2011-06-15';
        const options = sign({
            method: 'POST',
            host,
            region: deriveRegion(serverResponse.h),
            service: 'sts',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': body.length,
                'X-MongoDB-Server-Nonce': utils_1.ByteUtils.toBase64(serverNonce),
                'X-MongoDB-GS2-CB-Flag': 'n'
            },
            path: '/',
            body
        }, awsCredentials);
        const payload = {
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
        await connection.command((0, utils_1.ns)(`${db}.$cmd`), saslContinue, undefined);
    }
}
exports.MongoDBAWS = MongoDBAWS;
async function makeTempCredentials(credentials, awsCredentialFetcher) {
    function makeMongoCredentialsFromAWSTemp(creds) {
        // The AWS session token (creds.Token) may or may not be set.
        if (!creds.AccessKeyId || !creds.SecretAccessKey) {
            throw new error_1.MongoMissingCredentialsError('Could not obtain temporary MONGODB-AWS credentials');
        }
        return new mongo_credentials_1.MongoCredentials({
            username: creds.AccessKeyId,
            password: creds.SecretAccessKey,
            source: credentials.source,
            mechanism: providers_1.AuthMechanism.MONGODB_AWS,
            mechanismProperties: {
                AWS_SESSION_TOKEN: creds.Token
            }
        });
    }
    const temporaryCredentials = await awsCredentialFetcher.getCredentials();
    return makeMongoCredentialsFromAWSTemp(temporaryCredentials);
}
function deriveRegion(host) {
    const parts = host.split('.');
    if (parts.length === 1 || parts[1] === 'amazonaws') {
        return 'us-east-1';
    }
    return parts[1];
}
//# sourceMappingURL=mongodb_aws.js.map