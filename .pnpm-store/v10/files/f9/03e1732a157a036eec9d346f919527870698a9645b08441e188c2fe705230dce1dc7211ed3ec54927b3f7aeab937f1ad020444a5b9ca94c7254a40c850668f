"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateMachine = void 0;
const fs = require("fs/promises");
const net = require("net");
const tls = require("tls");
const bson_1 = require("../bson");
const abstract_cursor_1 = require("../cursor/abstract_cursor");
const deps_1 = require("../deps");
const error_1 = require("../error");
const timeout_1 = require("../timeout");
const utils_1 = require("../utils");
const client_encryption_1 = require("./client_encryption");
const errors_1 = require("./errors");
let socks = null;
function loadSocks() {
    if (socks == null) {
        const socksImport = (0, deps_1.getSocks)();
        if ('kModuleError' in socksImport) {
            throw socksImport.kModuleError;
        }
        socks = socksImport;
    }
    return socks;
}
// libmongocrypt states
const MONGOCRYPT_CTX_ERROR = 0;
const MONGOCRYPT_CTX_NEED_MONGO_COLLINFO = 1;
const MONGOCRYPT_CTX_NEED_MONGO_MARKINGS = 2;
const MONGOCRYPT_CTX_NEED_MONGO_KEYS = 3;
const MONGOCRYPT_CTX_NEED_KMS_CREDENTIALS = 7;
const MONGOCRYPT_CTX_NEED_KMS = 4;
const MONGOCRYPT_CTX_READY = 5;
const MONGOCRYPT_CTX_DONE = 6;
const HTTPS_PORT = 443;
const stateToString = new Map([
    [MONGOCRYPT_CTX_ERROR, 'MONGOCRYPT_CTX_ERROR'],
    [MONGOCRYPT_CTX_NEED_MONGO_COLLINFO, 'MONGOCRYPT_CTX_NEED_MONGO_COLLINFO'],
    [MONGOCRYPT_CTX_NEED_MONGO_MARKINGS, 'MONGOCRYPT_CTX_NEED_MONGO_MARKINGS'],
    [MONGOCRYPT_CTX_NEED_MONGO_KEYS, 'MONGOCRYPT_CTX_NEED_MONGO_KEYS'],
    [MONGOCRYPT_CTX_NEED_KMS_CREDENTIALS, 'MONGOCRYPT_CTX_NEED_KMS_CREDENTIALS'],
    [MONGOCRYPT_CTX_NEED_KMS, 'MONGOCRYPT_CTX_NEED_KMS'],
    [MONGOCRYPT_CTX_READY, 'MONGOCRYPT_CTX_READY'],
    [MONGOCRYPT_CTX_DONE, 'MONGOCRYPT_CTX_DONE']
]);
const INSECURE_TLS_OPTIONS = [
    'tlsInsecure',
    'tlsAllowInvalidCertificates',
    'tlsAllowInvalidHostnames'
];
/**
 * Helper function for logging. Enabled by setting the environment flag MONGODB_CRYPT_DEBUG.
 * @param msg - Anything you want to be logged.
 */
function debug(msg) {
    if (process.env.MONGODB_CRYPT_DEBUG) {
        // eslint-disable-next-line no-console
        console.error(msg);
    }
}
/**
 * This is kind of a hack.  For `rewrapManyDataKey`, we have tests that
 * guarantee that when there are no matching keys, `rewrapManyDataKey` returns
 * nothing.  We also have tests for auto encryption that guarantee for `encrypt`
 * we return an error when there are no matching keys.  This error is generated in
 * subsequent iterations of the state machine.
 * Some apis (`encrypt`) throw if there are no filter matches and others (`rewrapManyDataKey`)
 * do not.  We set the result manually here, and let the state machine continue.  `libmongocrypt`
 * will inform us if we need to error by setting the state to `MONGOCRYPT_CTX_ERROR` but
 * otherwise we'll return `{ v: [] }`.
 */
let EMPTY_V;
/**
 * @internal
 * An internal class that executes across a MongoCryptContext until either
 * a finishing state or an error is reached. Do not instantiate directly.
 */
// TODO(DRIVERS-2671): clarify CSOT behavior for FLE APIs
class StateMachine {
    constructor(options, bsonOptions = (0, bson_1.pluckBSONSerializeOptions)(options)) {
        this.options = options;
        this.bsonOptions = bsonOptions;
    }
    /**
     * Executes the state machine according to the specification
     */
    async execute(executor, context, options) {
        const keyVaultNamespace = executor._keyVaultNamespace;
        const keyVaultClient = executor._keyVaultClient;
        const metaDataClient = executor._metaDataClient;
        const mongocryptdClient = executor._mongocryptdClient;
        const mongocryptdManager = executor._mongocryptdManager;
        let result = null;
        // Typescript treats getters just like properties: Once you've tested it for equality
        // it cannot change. Which is exactly the opposite of what we use state and status for.
        // Every call to at least `addMongoOperationResponse` and `finalize` can change the state.
        // These wrappers let us write code more naturally and not add compiler exceptions
        // to conditions checks inside the state machine.
        const getStatus = () => context.status;
        const getState = () => context.state;
        while (getState() !== MONGOCRYPT_CTX_DONE && getState() !== MONGOCRYPT_CTX_ERROR) {
            options.signal?.throwIfAborted();
            debug(`[context#${context.id}] ${stateToString.get(getState()) || getState()}`);
            switch (getState()) {
                case MONGOCRYPT_CTX_NEED_MONGO_COLLINFO: {
                    const filter = (0, bson_1.deserialize)(context.nextMongoOperation());
                    if (!metaDataClient) {
                        throw new errors_1.MongoCryptError('unreachable state machine state: entered MONGOCRYPT_CTX_NEED_MONGO_COLLINFO but metadata client is undefined');
                    }
                    const collInfoCursor = this.fetchCollectionInfo(metaDataClient, context.ns, filter, options);
                    for await (const collInfo of collInfoCursor) {
                        context.addMongoOperationResponse((0, bson_1.serialize)(collInfo));
                        if (getState() === MONGOCRYPT_CTX_ERROR)
                            break;
                    }
                    if (getState() === MONGOCRYPT_CTX_ERROR)
                        break;
                    context.finishMongoOperation();
                    break;
                }
                case MONGOCRYPT_CTX_NEED_MONGO_MARKINGS: {
                    const command = context.nextMongoOperation();
                    if (getState() === MONGOCRYPT_CTX_ERROR)
                        break;
                    if (!mongocryptdClient) {
                        throw new errors_1.MongoCryptError('unreachable state machine state: entered MONGOCRYPT_CTX_NEED_MONGO_MARKINGS but mongocryptdClient is undefined');
                    }
                    // When we are using the shared library, we don't have a mongocryptd manager.
                    const markedCommand = mongocryptdManager
                        ? await mongocryptdManager.withRespawn(this.markCommand.bind(this, mongocryptdClient, context.ns, command, options))
                        : await this.markCommand(mongocryptdClient, context.ns, command, options);
                    context.addMongoOperationResponse(markedCommand);
                    context.finishMongoOperation();
                    break;
                }
                case MONGOCRYPT_CTX_NEED_MONGO_KEYS: {
                    const filter = context.nextMongoOperation();
                    const keys = await this.fetchKeys(keyVaultClient, keyVaultNamespace, filter, options);
                    if (keys.length === 0) {
                        // See docs on EMPTY_V
                        result = EMPTY_V ??= (0, bson_1.serialize)({ v: [] });
                    }
                    for (const key of keys) {
                        context.addMongoOperationResponse((0, bson_1.serialize)(key));
                    }
                    context.finishMongoOperation();
                    break;
                }
                case MONGOCRYPT_CTX_NEED_KMS_CREDENTIALS: {
                    const kmsProviders = await executor.askForKMSCredentials();
                    context.provideKMSProviders((0, bson_1.serialize)(kmsProviders));
                    break;
                }
                case MONGOCRYPT_CTX_NEED_KMS: {
                    await Promise.all(this.requests(context, options));
                    context.finishKMSRequests();
                    break;
                }
                case MONGOCRYPT_CTX_READY: {
                    const finalizedContext = context.finalize();
                    if (getState() === MONGOCRYPT_CTX_ERROR) {
                        const message = getStatus().message || 'Finalization error';
                        throw new errors_1.MongoCryptError(message);
                    }
                    result = finalizedContext;
                    break;
                }
                default:
                    throw new errors_1.MongoCryptError(`Unknown state: ${getState()}`);
            }
        }
        if (getState() === MONGOCRYPT_CTX_ERROR || result == null) {
            const message = getStatus().message;
            if (!message) {
                debug(`unidentifiable error in MongoCrypt - received an error status from \`libmongocrypt\` but received no error message.`);
            }
            throw new errors_1.MongoCryptError(message ??
                'unidentifiable error in MongoCrypt - received an error status from `libmongocrypt` but received no error message.');
        }
        return result;
    }
    /**
     * Handles the request to the KMS service. Exposed for testing purposes. Do not directly invoke.
     * @param kmsContext - A C++ KMS context returned from the bindings
     * @returns A promise that resolves when the KMS reply has be fully parsed
     */
    async kmsRequest(request, options) {
        const parsedUrl = request.endpoint.split(':');
        const port = parsedUrl[1] != null ? Number.parseInt(parsedUrl[1], 10) : HTTPS_PORT;
        const socketOptions = {
            host: parsedUrl[0],
            servername: parsedUrl[0],
            port,
            ...(0, client_encryption_1.autoSelectSocketOptions)(this.options.socketOptions || {})
        };
        const message = request.message;
        const buffer = new utils_1.BufferPool();
        let netSocket;
        let socket;
        function destroySockets() {
            for (const sock of [socket, netSocket]) {
                if (sock) {
                    sock.destroy();
                }
            }
        }
        function onerror(cause) {
            return new errors_1.MongoCryptError('KMS request failed', { cause });
        }
        function onclose() {
            return new errors_1.MongoCryptError('KMS request closed');
        }
        const tlsOptions = this.options.tlsOptions;
        if (tlsOptions) {
            const kmsProvider = request.kmsProvider;
            const providerTlsOptions = tlsOptions[kmsProvider];
            if (providerTlsOptions) {
                const error = this.validateTlsOptions(kmsProvider, providerTlsOptions);
                if (error) {
                    throw error;
                }
                try {
                    await this.setTlsOptions(providerTlsOptions, socketOptions);
                }
                catch (err) {
                    throw onerror(err);
                }
            }
        }
        let abortListener;
        try {
            if (this.options.proxyOptions && this.options.proxyOptions.proxyHost) {
                netSocket = new net.Socket();
                const { promise: willConnect, reject: rejectOnNetSocketError, resolve: resolveOnNetSocketConnect } = (0, utils_1.promiseWithResolvers)();
                netSocket
                    .once('error', err => rejectOnNetSocketError(onerror(err)))
                    .once('close', () => rejectOnNetSocketError(onclose()))
                    .once('connect', () => resolveOnNetSocketConnect());
                const netSocketOptions = {
                    ...socketOptions,
                    host: this.options.proxyOptions.proxyHost,
                    port: this.options.proxyOptions.proxyPort || 1080
                };
                netSocket.connect(netSocketOptions);
                await willConnect;
                try {
                    socks ??= loadSocks();
                    socketOptions.socket = (await socks.SocksClient.createConnection({
                        existing_socket: netSocket,
                        command: 'connect',
                        destination: { host: socketOptions.host, port: socketOptions.port },
                        proxy: {
                            // host and port are ignored because we pass existing_socket
                            host: 'iLoveJavaScript',
                            port: 0,
                            type: 5,
                            userId: this.options.proxyOptions.proxyUsername,
                            password: this.options.proxyOptions.proxyPassword
                        }
                    })).socket;
                }
                catch (err) {
                    throw onerror(err);
                }
            }
            socket = tls.connect(socketOptions, () => {
                socket.write(message);
            });
            const { promise: willResolveKmsRequest, reject: rejectOnTlsSocketError, resolve } = (0, utils_1.promiseWithResolvers)();
            abortListener = (0, utils_1.addAbortListener)(options?.signal, function () {
                destroySockets();
                rejectOnTlsSocketError(this.reason);
            });
            socket
                .once('error', err => rejectOnTlsSocketError(onerror(err)))
                .once('close', () => rejectOnTlsSocketError(onclose()))
                .on('data', data => {
                buffer.append(data);
                while (request.bytesNeeded > 0 && buffer.length) {
                    const bytesNeeded = Math.min(request.bytesNeeded, buffer.length);
                    request.addResponse(buffer.read(bytesNeeded));
                }
                if (request.bytesNeeded <= 0) {
                    resolve();
                }
            });
            await (options?.timeoutContext?.csotEnabled()
                ? Promise.all([
                    willResolveKmsRequest,
                    timeout_1.Timeout.expires(options.timeoutContext?.remainingTimeMS)
                ])
                : willResolveKmsRequest);
        }
        catch (error) {
            if (error instanceof timeout_1.TimeoutError)
                throw new error_1.MongoOperationTimeoutError('KMS request timed out');
            throw error;
        }
        finally {
            // There's no need for any more activity on this socket at this point.
            destroySockets();
            abortListener?.[utils_1.kDispose]();
        }
    }
    *requests(context, options) {
        for (let request = context.nextKMSRequest(); request != null; request = context.nextKMSRequest()) {
            yield this.kmsRequest(request, options);
        }
    }
    /**
     * Validates the provided TLS options are secure.
     *
     * @param kmsProvider - The KMS provider name.
     * @param tlsOptions - The client TLS options for the provider.
     *
     * @returns An error if any option is invalid.
     */
    validateTlsOptions(kmsProvider, tlsOptions) {
        const tlsOptionNames = Object.keys(tlsOptions);
        for (const option of INSECURE_TLS_OPTIONS) {
            if (tlsOptionNames.includes(option)) {
                return new errors_1.MongoCryptError(`Insecure TLS options prohibited for ${kmsProvider}: ${option}`);
            }
        }
    }
    /**
     * Sets only the valid secure TLS options.
     *
     * @param tlsOptions - The client TLS options for the provider.
     * @param options - The existing connection options.
     */
    async setTlsOptions(tlsOptions, options) {
        // If a secureContext is provided, ensure it is set.
        if (tlsOptions.secureContext) {
            options.secureContext = tlsOptions.secureContext;
        }
        if (tlsOptions.tlsCertificateKeyFile) {
            const cert = await fs.readFile(tlsOptions.tlsCertificateKeyFile);
            options.cert = options.key = cert;
        }
        if (tlsOptions.tlsCAFile) {
            options.ca = await fs.readFile(tlsOptions.tlsCAFile);
        }
        if (tlsOptions.tlsCertificateKeyFilePassword) {
            options.passphrase = tlsOptions.tlsCertificateKeyFilePassword;
        }
    }
    /**
     * Fetches collection info for a provided namespace, when libmongocrypt
     * enters the `MONGOCRYPT_CTX_NEED_MONGO_COLLINFO` state. The result is
     * used to inform libmongocrypt of the schema associated with this
     * namespace. Exposed for testing purposes. Do not directly invoke.
     *
     * @param client - A MongoClient connected to the topology
     * @param ns - The namespace to list collections from
     * @param filter - A filter for the listCollections command
     * @param callback - Invoked with the info of the requested collection, or with an error
     */
    fetchCollectionInfo(client, ns, filter, options) {
        const { db } = utils_1.MongoDBCollectionNamespace.fromString(ns);
        const cursor = client.db(db).listCollections(filter, {
            promoteLongs: false,
            promoteValues: false,
            timeoutContext: options?.timeoutContext && new abstract_cursor_1.CursorTimeoutContext(options?.timeoutContext, Symbol()),
            signal: options?.signal,
            nameOnly: false
        });
        return cursor;
    }
    /**
     * Calls to the mongocryptd to provide markings for a command.
     * Exposed for testing purposes. Do not directly invoke.
     * @param client - A MongoClient connected to a mongocryptd
     * @param ns - The namespace (database.collection) the command is being executed on
     * @param command - The command to execute.
     * @param callback - Invoked with the serialized and marked bson command, or with an error
     */
    async markCommand(client, ns, command, options) {
        const { db } = utils_1.MongoDBCollectionNamespace.fromString(ns);
        const bsonOptions = { promoteLongs: false, promoteValues: false };
        const rawCommand = (0, bson_1.deserialize)(command, bsonOptions);
        const commandOptions = {
            timeoutMS: undefined,
            signal: undefined
        };
        if (options?.timeoutContext?.csotEnabled()) {
            commandOptions.timeoutMS = options.timeoutContext.remainingTimeMS;
        }
        if (options?.signal) {
            commandOptions.signal = options.signal;
        }
        const response = await client.db(db).command(rawCommand, {
            ...bsonOptions,
            ...commandOptions
        });
        return (0, bson_1.serialize)(response, this.bsonOptions);
    }
    /**
     * Requests keys from the keyVault collection on the topology.
     * Exposed for testing purposes. Do not directly invoke.
     * @param client - A MongoClient connected to the topology
     * @param keyVaultNamespace - The namespace (database.collection) of the keyVault Collection
     * @param filter - The filter for the find query against the keyVault Collection
     * @param callback - Invoked with the found keys, or with an error
     */
    fetchKeys(client, keyVaultNamespace, filter, options) {
        const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(keyVaultNamespace);
        const commandOptions = {
            timeoutContext: undefined,
            signal: undefined
        };
        if (options?.timeoutContext != null) {
            commandOptions.timeoutContext = new abstract_cursor_1.CursorTimeoutContext(options.timeoutContext, Symbol());
        }
        if (options?.signal != null) {
            commandOptions.signal = options.signal;
        }
        return client
            .db(dbName)
            .collection(collectionName, { readConcern: { level: 'majority' } })
            .find((0, bson_1.deserialize)(filter), commandOptions)
            .toArray();
    }
}
exports.StateMachine = StateMachine;
//# sourceMappingURL=state_machine.js.map