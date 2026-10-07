"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LEGAL_TCP_SOCKET_OPTIONS = exports.LEGAL_TLS_SOCKET_OPTIONS = void 0;
exports.connect = connect;
exports.makeConnection = makeConnection;
exports.performInitialHandshake = performInitialHandshake;
exports.prepareHandshakeDocument = prepareHandshakeDocument;
exports.makeSocket = makeSocket;
const net = require("net");
const tls = require("tls");
const constants_1 = require("../constants");
const deps_1 = require("../deps");
const error_1 = require("../error");
const utils_1 = require("../utils");
const auth_provider_1 = require("./auth/auth_provider");
const providers_1 = require("./auth/providers");
const connection_1 = require("./connection");
const constants_2 = require("./wire_protocol/constants");
async function connect(options) {
    let connection = null;
    try {
        const socket = await makeSocket(options);
        connection = makeConnection(options, socket);
        await performInitialHandshake(connection, options);
        return connection;
    }
    catch (error) {
        connection?.destroy();
        throw error;
    }
}
function makeConnection(options, socket) {
    let ConnectionType = options.connectionType ?? connection_1.Connection;
    if (options.autoEncrypter) {
        ConnectionType = connection_1.CryptoConnection;
    }
    return new ConnectionType(socket, options);
}
function checkSupportedServer(hello, options) {
    const maxWireVersion = Number(hello.maxWireVersion);
    const minWireVersion = Number(hello.minWireVersion);
    const serverVersionHighEnough = !Number.isNaN(maxWireVersion) && maxWireVersion >= constants_2.MIN_SUPPORTED_WIRE_VERSION;
    const serverVersionLowEnough = !Number.isNaN(minWireVersion) && minWireVersion <= constants_2.MAX_SUPPORTED_WIRE_VERSION;
    if (serverVersionHighEnough) {
        if (serverVersionLowEnough) {
            return null;
        }
        const message = `Server at ${options.hostAddress} reports minimum wire version ${JSON.stringify(hello.minWireVersion)}, but this version of the Node.js Driver requires at most ${constants_2.MAX_SUPPORTED_WIRE_VERSION} (MongoDB ${constants_2.MAX_SUPPORTED_SERVER_VERSION})`;
        return new error_1.MongoCompatibilityError(message);
    }
    const message = `Server at ${options.hostAddress} reports maximum wire version ${JSON.stringify(hello.maxWireVersion) ?? 0}, but this version of the Node.js Driver requires at least ${constants_2.MIN_SUPPORTED_WIRE_VERSION} (MongoDB ${constants_2.MIN_SUPPORTED_SERVER_VERSION})`;
    return new error_1.MongoCompatibilityError(message);
}
async function performInitialHandshake(conn, options) {
    const credentials = options.credentials;
    if (credentials) {
        if (!(credentials.mechanism === providers_1.AuthMechanism.MONGODB_DEFAULT) &&
            !options.authProviders.getOrCreateProvider(credentials.mechanism, credentials.mechanismProperties)) {
            throw new error_1.MongoInvalidArgumentError(`AuthMechanism '${credentials.mechanism}' not supported`);
        }
    }
    const authContext = new auth_provider_1.AuthContext(conn, credentials, options);
    conn.authContext = authContext;
    const handshakeDoc = await prepareHandshakeDocument(authContext);
    // @ts-expect-error: TODO(NODE-5141): The options need to be filtered properly, Connection options differ from Command options
    const handshakeOptions = { ...options, raw: false };
    if (typeof options.connectTimeoutMS === 'number') {
        // The handshake technically is a monitoring check, so its socket timeout should be connectTimeoutMS
        handshakeOptions.socketTimeoutMS = options.connectTimeoutMS;
    }
    const start = new Date().getTime();
    const response = await executeHandshake(handshakeDoc, handshakeOptions);
    if (!('isWritablePrimary' in response)) {
        // Provide hello-style response document.
        response.isWritablePrimary = response[constants_1.LEGACY_HELLO_COMMAND];
    }
    if (response.helloOk) {
        conn.helloOk = true;
    }
    const supportedServerErr = checkSupportedServer(response, options);
    if (supportedServerErr) {
        throw supportedServerErr;
    }
    if (options.loadBalanced) {
        if (!response.serviceId) {
            throw new error_1.MongoCompatibilityError('Driver attempted to initialize in load balancing mode, ' +
                'but the server does not support this mode.');
        }
    }
    // NOTE: This is metadata attached to the connection while porting away from
    //       handshake being done in the `Server` class. Likely, it should be
    //       relocated, or at very least restructured.
    conn.hello = response;
    conn.lastHelloMS = new Date().getTime() - start;
    if (!response.arbiterOnly && credentials) {
        // store the response on auth context
        authContext.response = response;
        const resolvedCredentials = credentials.resolveAuthMechanism(response);
        const provider = options.authProviders.getOrCreateProvider(resolvedCredentials.mechanism, resolvedCredentials.mechanismProperties);
        if (!provider) {
            throw new error_1.MongoInvalidArgumentError(`No AuthProvider for ${resolvedCredentials.mechanism} defined.`);
        }
        try {
            await provider.auth(authContext);
        }
        catch (error) {
            if (error instanceof error_1.MongoError) {
                error.addErrorLabel(error_1.MongoErrorLabel.HandshakeError);
                if ((0, error_1.needsRetryableWriteLabel)(error, response.maxWireVersion, conn.description.type)) {
                    error.addErrorLabel(error_1.MongoErrorLabel.RetryableWriteError);
                }
            }
            throw error;
        }
    }
    // Connection establishment is socket creation (tcp handshake, tls handshake, MongoDB handshake (saslStart, saslContinue))
    // Once connection is established, command logging can log events (if enabled)
    conn.established = true;
    async function executeHandshake(handshakeDoc, handshakeOptions) {
        try {
            const handshakeResponse = await conn.command((0, utils_1.ns)('admin.$cmd'), handshakeDoc, handshakeOptions);
            return handshakeResponse;
        }
        catch (error) {
            if (error instanceof error_1.MongoError) {
                error.addErrorLabel(error_1.MongoErrorLabel.HandshakeError);
            }
            throw error;
        }
    }
}
/**
 * @internal
 *
 * This function is only exposed for testing purposes.
 */
async function prepareHandshakeDocument(authContext) {
    const options = authContext.options;
    const compressors = options.compressors ? options.compressors : [];
    const { serverApi } = authContext.connection;
    const clientMetadata = await options.extendedMetadata;
    const handshakeDoc = {
        [serverApi?.version || options.loadBalanced === true ? 'hello' : constants_1.LEGACY_HELLO_COMMAND]: 1,
        helloOk: true,
        client: clientMetadata,
        compression: compressors
    };
    if (options.loadBalanced === true) {
        handshakeDoc.loadBalanced = true;
    }
    const credentials = authContext.credentials;
    if (credentials) {
        if (credentials.mechanism === providers_1.AuthMechanism.MONGODB_DEFAULT && credentials.username) {
            handshakeDoc.saslSupportedMechs = `${credentials.source}.${credentials.username}`;
            const provider = authContext.options.authProviders.getOrCreateProvider(providers_1.AuthMechanism.MONGODB_SCRAM_SHA256, credentials.mechanismProperties);
            if (!provider) {
                // This auth mechanism is always present.
                throw new error_1.MongoInvalidArgumentError(`No AuthProvider for ${providers_1.AuthMechanism.MONGODB_SCRAM_SHA256} defined.`);
            }
            return await provider.prepare(handshakeDoc, authContext);
        }
        const provider = authContext.options.authProviders.getOrCreateProvider(credentials.mechanism, credentials.mechanismProperties);
        if (!provider) {
            throw new error_1.MongoInvalidArgumentError(`No AuthProvider for ${credentials.mechanism} defined.`);
        }
        return await provider.prepare(handshakeDoc, authContext);
    }
    return handshakeDoc;
}
/** @public */
exports.LEGAL_TLS_SOCKET_OPTIONS = [
    'allowPartialTrustChain',
    'ALPNProtocols',
    'ca',
    'cert',
    'checkServerIdentity',
    'ciphers',
    'crl',
    'ecdhCurve',
    'key',
    'minDHSize',
    'passphrase',
    'pfx',
    'rejectUnauthorized',
    'secureContext',
    'secureProtocol',
    'servername',
    'session'
];
/** @public */
exports.LEGAL_TCP_SOCKET_OPTIONS = [
    'autoSelectFamily',
    'autoSelectFamilyAttemptTimeout',
    'keepAliveInitialDelay',
    'family',
    'hints',
    'localAddress',
    'localPort',
    'lookup'
];
function parseConnectOptions(options) {
    const hostAddress = options.hostAddress;
    if (!hostAddress)
        throw new error_1.MongoInvalidArgumentError('Option "hostAddress" is required');
    const result = {};
    for (const name of exports.LEGAL_TCP_SOCKET_OPTIONS) {
        if (options[name] != null) {
            result[name] = options[name];
        }
    }
    result.keepAliveInitialDelay ??= 120000;
    result.keepAlive = true;
    result.noDelay = options.noDelay ?? true;
    if (typeof hostAddress.socketPath === 'string') {
        result.path = hostAddress.socketPath;
        return result;
    }
    else if (typeof hostAddress.host === 'string') {
        result.host = hostAddress.host;
        result.port = hostAddress.port;
        return result;
    }
    else {
        // This should never happen since we set up HostAddresses
        // But if we don't throw here the socket could hang until timeout
        // TODO(NODE-3483)
        throw new error_1.MongoRuntimeError(`Unexpected HostAddress ${JSON.stringify(hostAddress)}`);
    }
}
function parseSslOptions(options) {
    const result = parseConnectOptions(options);
    // Merge in valid SSL options
    for (const name of exports.LEGAL_TLS_SOCKET_OPTIONS) {
        if (options[name] != null) {
            result[name] = options[name];
        }
    }
    if (options.existingSocket) {
        result.socket = options.existingSocket;
    }
    // Set default sni servername to be the same as host
    if (result.servername == null && result.host && !net.isIP(result.host)) {
        result.servername = result.host;
    }
    return result;
}
async function makeSocket(options) {
    const useTLS = options.tls ?? false;
    const connectTimeoutMS = options.connectTimeoutMS ?? 30000;
    const existingSocket = options.existingSocket;
    let socket;
    if (options.proxyHost != null) {
        // Currently, only Socks5 is supported.
        return await makeSocks5Connection({
            ...options,
            connectTimeoutMS // Should always be present for Socks5
        });
    }
    if (useTLS) {
        const tlsSocket = tls.connect(parseSslOptions(options));
        if (typeof tlsSocket.disableRenegotiation === 'function') {
            tlsSocket.disableRenegotiation();
        }
        socket = tlsSocket;
    }
    else if (existingSocket) {
        // In the TLS case, parseSslOptions() sets options.socket to existingSocket,
        // so we only need to handle the non-TLS case here (where existingSocket
        // gives us all we need out of the box).
        socket = existingSocket;
    }
    else {
        socket = net.createConnection(parseConnectOptions(options));
    }
    socket.setTimeout(connectTimeoutMS);
    let cancellationHandler = null;
    const { promise: connectedSocket, resolve, reject } = (0, utils_1.promiseWithResolvers)();
    if (existingSocket) {
        resolve(socket);
    }
    else {
        const start = performance.now();
        const connectEvent = useTLS ? 'secureConnect' : 'connect';
        socket
            .once(connectEvent, () => resolve(socket))
            .once('error', cause => reject(new error_1.MongoNetworkError(error_1.MongoError.buildErrorMessage(cause), { cause })))
            .once('timeout', () => {
            reject(new error_1.MongoNetworkTimeoutError(`Socket '${connectEvent}' timed out after ${(performance.now() - start) | 0}ms (connectTimeoutMS: ${connectTimeoutMS})`));
        })
            .once('close', () => reject(new error_1.MongoNetworkError(`Socket closed after ${(performance.now() - start) | 0} during connection establishment`)));
        if (options.cancellationToken != null) {
            cancellationHandler = () => reject(new error_1.MongoNetworkError(`Socket connection establishment was cancelled after ${(performance.now() - start) | 0}`));
            options.cancellationToken.once('cancel', cancellationHandler);
        }
    }
    try {
        socket = await connectedSocket;
        return socket;
    }
    catch (error) {
        socket.destroy();
        throw error;
    }
    finally {
        socket.setTimeout(0);
        if (cancellationHandler != null) {
            options.cancellationToken?.removeListener('cancel', cancellationHandler);
        }
    }
}
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
async function makeSocks5Connection(options) {
    const hostAddress = utils_1.HostAddress.fromHostPort(options.proxyHost ?? '', // proxyHost is guaranteed to set here
    options.proxyPort ?? 1080);
    // First, connect to the proxy server itself:
    const rawSocket = await makeSocket({
        ...options,
        hostAddress,
        tls: false,
        proxyHost: undefined
    });
    const destination = parseConnectOptions(options);
    if (typeof destination.host !== 'string' || typeof destination.port !== 'number') {
        throw new error_1.MongoInvalidArgumentError('Can only make Socks5 connections to TCP hosts');
    }
    socks ??= loadSocks();
    let existingSocket;
    try {
        // Then, establish the Socks5 proxy connection:
        const connection = await socks.SocksClient.createConnection({
            existing_socket: rawSocket,
            timeout: options.connectTimeoutMS,
            command: 'connect',
            destination: {
                host: destination.host,
                port: destination.port
            },
            proxy: {
                // host and port are ignored because we pass existing_socket
                host: 'iLoveJavaScript',
                port: 0,
                type: 5,
                userId: options.proxyUsername || undefined,
                password: options.proxyPassword || undefined
            }
        });
        existingSocket = connection.socket;
    }
    catch (cause) {
        throw new error_1.MongoNetworkError(error_1.MongoError.buildErrorMessage(cause), { cause });
    }
    // Finally, now treat the resulting duplex stream as the
    // socket over which we send and receive wire protocol messages:
    return await makeSocket({ ...options, existingSocket, proxyHost: undefined });
}
//# sourceMappingURL=connect.js.map