"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocksClientError = exports.SocksClient = void 0;
const events_1 = require("events");
const net = require("net");
const smart_buffer_1 = require("smart-buffer");
const constants_1 = require("../common/constants");
const helpers_1 = require("../common/helpers");
const receivebuffer_1 = require("../common/receivebuffer");
const util_1 = require("../common/util");
Object.defineProperty(exports, "SocksClientError", { enumerable: true, get: function () { return util_1.SocksClientError; } });
const ip_address_1 = require("ip-address");
class SocksClient extends events_1.EventEmitter {
    constructor(options) {
        super();
        this.options = Object.assign({}, options);
        // Validate SocksClientOptions
        (0, helpers_1.validateSocksClientOptions)(options);
        // Default state
        this.setState(constants_1.SocksClientState.Created);
    }
    /**
     * Creates a new SOCKS connection.
     *
     * Note: Supports callbacks and promises. Only supports the connect command.
     * @param options { SocksClientOptions } Options.
     * @param callback { Function } An optional callback function.
     * @returns { Promise }
     */
    static createConnection(options, callback) {
        return new Promise((resolve, reject) => {
            // Validate SocksClientOptions
            try {
                (0, helpers_1.validateSocksClientOptions)(options, ['connect']);
            }
            catch (err) {
                if (typeof callback === 'function') {
                    callback(err);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    return resolve(err); // Resolves pending promise (prevents memory leaks).
                }
                else {
                    return reject(err);
                }
            }
            const client = new SocksClient(options);
            client.connect(options.existing_socket);
            client.once('established', (info) => {
                client.removeAllListeners();
                if (typeof callback === 'function') {
                    callback(null, info);
                    resolve(info); // Resolves pending promise (prevents memory leaks).
                }
                else {
                    resolve(info);
                }
            });
            // Error occurred, failed to establish connection.
            client.once('error', (err) => {
                client.removeAllListeners();
                if (typeof callback === 'function') {
                    callback(err);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    resolve(err); // Resolves pending promise (prevents memory leaks).
                }
                else {
                    reject(err);
                }
            });
        });
    }
    /**
     * Creates a new SOCKS connection chain to a destination host through 2 or more SOCKS proxies.
     *
     * Note: Supports callbacks and promises. Only supports the connect method.
     * Note: Implemented via createConnection() factory function.
     * @param options { SocksClientChainOptions } Options
     * @param callback { Function } An optional callback function.
     * @returns { Promise }
     */
    static createConnectionChain(options, callback) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            // Validate SocksClientChainOptions
            try {
                (0, helpers_1.validateSocksClientChainOptions)(options);
            }
            catch (err) {
                if (typeof callback === 'function') {
                    callback(err);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    return resolve(err); // Resolves pending promise (prevents memory leaks).
                }
                else {
                    return reject(err);
                }
            }
            // Shuffle proxies
            if (options.randomizeChain) {
                (0, util_1.shuffleArray)(options.proxies);
            }
            try {
                let sock;
                for (let i = 0; i < options.proxies.length; i++) {
                    const nextProxy = options.proxies[i];
                    // If we've reached the last proxy in the chain, the destination is the actual destination, otherwise it's the next proxy.
                    const nextDestination = i === options.proxies.length - 1
                        ? options.destination
                        : {
                            host: options.proxies[i + 1].host ||
                                options.proxies[i + 1].ipaddress,
                            port: options.proxies[i + 1].port,
                        };
                    // Creates the next connection in the chain.
                    const result = yield SocksClient.createConnection({
                        command: 'connect',
                        proxy: nextProxy,
                        destination: nextDestination,
                        existing_socket: sock,
                    });
                    // If sock is undefined, assign it here.
                    sock = sock || result.socket;
                }
                if (typeof callback === 'function') {
                    callback(null, { socket: sock });
                    resolve({ socket: sock }); // Resolves pending promise (prevents memory leaks).
                }
                else {
                    resolve({ socket: sock });
                }
            }
            catch (err) {
                if (typeof callback === 'function') {
                    callback(err);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    resolve(err); // Resolves pending promise (prevents memory leaks).
                }
                else {
                    reject(err);
                }
            }
        }));
    }
    /**
     * Creates a SOCKS UDP Frame.
     * @param options
     */
    static createUDPFrame(options) {
        const buff = new smart_buffer_1.SmartBuffer();
        buff.writeUInt16BE(0);
        buff.writeUInt8(options.frameNumber || 0);
        // IPv4/IPv6/Hostname
        if (net.isIPv4(options.remoteHost.host)) {
            buff.writeUInt8(constants_1.Socks5HostType.IPv4);
            buff.writeUInt32BE((0, helpers_1.ipv4ToInt32)(options.remoteHost.host));
        }
        else if (net.isIPv6(options.remoteHost.host)) {
            buff.writeUInt8(constants_1.Socks5HostType.IPv6);
            buff.writeBuffer((0, helpers_1.ipToBuffer)(options.remoteHost.host));
        }
        else {
            buff.writeUInt8(constants_1.Socks5HostType.Hostname);
            buff.writeUInt8(Buffer.byteLength(options.remoteHost.host));
            buff.writeString(options.remoteHost.host);
        }
        // Port
        buff.writeUInt16BE(options.remoteHost.port);
        // Data
        buff.writeBuffer(options.data);
        return buff.toBuffer();
    }
    /**
     * Parses a SOCKS UDP frame.
     * @param data
     */
    static parseUDPFrame(data) {
        const buff = smart_buffer_1.SmartBuffer.fromBuffer(data);
        buff.readOffset = 2;
        const frameNumber = buff.readUInt8();
        const hostType = buff.readUInt8();
        let remoteHost;
        if (hostType === constants_1.Socks5HostType.IPv4) {
            remoteHost = (0, helpers_1.int32ToIpv4)(buff.readUInt32BE());
        }
        else if (hostType === constants_1.Socks5HostType.IPv6) {
            remoteHost = ip_address_1.Address6.fromByteArray(Array.from(buff.readBuffer(16))).canonicalForm();
        }
        else {
            remoteHost = buff.readString(buff.readUInt8());
        }
        const remotePort = buff.readUInt16BE();
        return {
            frameNumber,
            remoteHost: {
                host: remoteHost,
                port: remotePort,
            },
            data: buff.readBuffer(),
        };
    }
    /**
     * Internal state setter. If the SocksClient is in an error state, it cannot be changed to a non error state.
     */
    setState(newState) {
        if (this.state !== constants_1.SocksClientState.Error) {
            this.state = newState;
        }
    }
    /**
     * Starts the connection establishment to the proxy and destination.
     * @param existingSocket Connected socket to use instead of creating a new one (internal use).
     */
    connect(existingSocket) {
        this.onDataReceived = (data) => this.onDataReceivedHandler(data);
        this.onClose = () => this.onCloseHandler();
        this.onError = (err) => this.onErrorHandler(err);
        this.onConnect = () => this.onConnectHandler();
        // Start timeout timer (defaults to 30 seconds)
        const timer = setTimeout(() => this.onEstablishedTimeout(), this.options.timeout || constants_1.DEFAULT_TIMEOUT);
        // check whether unref is available as it differs from browser to NodeJS (#33)
        if (timer.unref && typeof timer.unref === 'function') {
            timer.unref();
        }
        // If an existing socket is provided, use it to negotiate SOCKS handshake. Otherwise create a new Socket.
        if (existingSocket) {
            this.socket = existingSocket;
        }
        else {
            this.socket = new net.Socket();
        }
        // Attach Socket error handlers.
        this.socket.once('close', this.onClose);
        this.socket.once('error', this.onError);
        this.socket.once('connect', this.onConnect);
        this.socket.on('data', this.onDataReceived);
        this.setState(constants_1.SocksClientState.Connecting);
        this.receiveBuffer = new receivebuffer_1.ReceiveBuffer();
        if (existingSocket) {
            this.socket.emit('connect');
        }
        else {
            this.socket.connect(this.getSocketOptions());
            if (this.options.set_tcp_nodelay !== undefined &&
                this.options.set_tcp_nodelay !== null) {
                this.socket.setNoDelay(!!this.options.set_tcp_nodelay);
            }
        }
        // Listen for established event so we can re-emit any excess data received during handshakes.
        this.prependOnceListener('established', (info) => {
            setImmediate(() => {
                if (this.receiveBuffer.length > 0) {
                    const excessData = this.receiveBuffer.get(this.receiveBuffer.length);
                    info.socket.emit('data', excessData);
                }
                info.socket.resume();
            });
        });
    }
    // Socket options (defaults host/port to options.proxy.host/options.proxy.port)
    getSocketOptions() {
        return Object.assign(Object.assign({}, this.options.socket_options), { host: this.options.proxy.host || this.options.proxy.ipaddress, port: this.options.proxy.port });
    }
    /**
     * Handles internal Socks timeout callback.
     * Note: If the Socks client is not BoundWaitingForConnection or Established, the connection will be closed.
     */
    onEstablishedTimeout() {
        if (this.state !== constants_1.SocksClientState.Established &&
            this.state !== constants_1.SocksClientState.BoundWaitingForConnection) {
            this.closeSocket(constants_1.ERRORS.ProxyConnectionTimedOut);
        }
    }
    /**
     * Handles Socket connect event.
     */
    onConnectHandler() {
        this.setState(constants_1.SocksClientState.Connected);
        // Send initial handshake.
        if (this.options.proxy.type === 4) {
            this.sendSocks4InitialHandshake();
        }
        else {
            this.sendSocks5InitialHandshake();
        }
        this.setState(constants_1.SocksClientState.SentInitialHandshake);
    }
    /**
     * Handles Socket data event.
     * @param data
     */
    onDataReceivedHandler(data) {
        /*
          All received data is appended to a ReceiveBuffer.
          This makes sure that all the data we need is received before we attempt to process it.
        */
        this.receiveBuffer.append(data);
        // Process data that we have.
        this.processData();
    }
    /**
     * Handles processing of the data we have received.
     */
    processData() {
        // If we have enough data to process the next step in the SOCKS handshake, proceed.
        while (this.state !== constants_1.SocksClientState.Established &&
            this.state !== constants_1.SocksClientState.Error &&
            this.receiveBuffer.length >= this.nextRequiredPacketBufferSize) {
            // Sent initial handshake, waiting for response.
            if (this.state === constants_1.SocksClientState.SentInitialHandshake) {
                if (this.options.proxy.type === 4) {
                    // Socks v4 only has one handshake response.
                    this.handleSocks4FinalHandshakeResponse();
                }
                else {
                    // Socks v5 has two handshakes, handle initial one here.
                    this.handleInitialSocks5HandshakeResponse();
                }
                // Sent auth request for Socks v5, waiting for response.
            }
            else if (this.state === constants_1.SocksClientState.SentAuthentication) {
                this.handleInitialSocks5AuthenticationHandshakeResponse();
                // Sent final Socks v5 handshake, waiting for final response.
            }
            else if (this.state === constants_1.SocksClientState.SentFinalHandshake) {
                this.handleSocks5FinalHandshakeResponse();
                // Socks BIND established. Waiting for remote connection via proxy.
            }
            else if (this.state === constants_1.SocksClientState.BoundWaitingForConnection) {
                if (this.options.proxy.type === 4) {
                    this.handleSocks4IncomingConnectionResponse();
                }
                else {
                    this.handleSocks5IncomingConnectionResponse();
                }
            }
            else {
                this.closeSocket(constants_1.ERRORS.InternalError);
                break;
            }
        }
    }
    /**
     * Handles Socket close event.
     * @param had_error
     */
    onCloseHandler() {
        this.closeSocket(constants_1.ERRORS.SocketClosed);
    }
    /**
     * Handles Socket error event.
     * @param err
     */
    onErrorHandler(err) {
        this.closeSocket(err.message);
    }
    /**
     * Removes internal event listeners on the underlying Socket.
     */
    removeInternalSocketHandlers() {
        // Pauses data flow of the socket (this is internally resumed after 'established' is emitted)
        this.socket.pause();
        this.socket.removeListener('data', this.onDataReceived);
        this.socket.removeListener('close', this.onClose);
        this.socket.removeListener('error', this.onError);
        this.socket.removeListener('connect', this.onConnect);
    }
    /**
     * Closes and destroys the underlying Socket. Emits an error event.
     * @param err { String } An error string to include in error event.
     */
    closeSocket(err) {
        // Make sure only one 'error' event is fired for the lifetime of this SocksClient instance.
        if (this.state !== constants_1.SocksClientState.Error) {
            // Set internal state to Error.
            this.setState(constants_1.SocksClientState.Error);
            // Destroy Socket
            this.socket.destroy();
            // Remove internal listeners
            this.removeInternalSocketHandlers();
            // Fire 'error' event.
            this.emit('error', new util_1.SocksClientError(err, this.options));
        }
    }
    /**
     * Sends initial Socks v4 handshake request.
     */
    sendSocks4InitialHandshake() {
        const userId = this.options.proxy.userId || '';
        const buff = new smart_buffer_1.SmartBuffer();
        buff.writeUInt8(0x04);
        buff.writeUInt8(constants_1.SocksCommand[this.options.command]);
        buff.writeUInt16BE(this.options.destination.port);
        // Socks 4 (IPv4)
        if (net.isIPv4(this.options.destination.host)) {
            buff.writeBuffer((0, helpers_1.ipToBuffer)(this.options.destination.host));
            buff.writeStringNT(userId);
            // Socks 4a (hostname)
        }
        else {
            buff.writeUInt8(0x00);
            buff.writeUInt8(0x00);
            buff.writeUInt8(0x00);
            buff.writeUInt8(0x01);
            buff.writeStringNT(userId);
            buff.writeStringNT(this.options.destination.host);
        }
        this.nextRequiredPacketBufferSize =
            constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks4Response;
        this.socket.write(buff.toBuffer());
    }
    /**
     * Handles Socks v4 handshake response.
     * @param data
     */
    handleSocks4FinalHandshakeResponse() {
        const data = this.receiveBuffer.get(8);
        if (data[1] !== constants_1.Socks4Response.Granted) {
            this.closeSocket(`${constants_1.ERRORS.Socks4ProxyRejectedConnection} - (${constants_1.Socks4Response[data[1]]})`);
        }
        else {
            // Bind response
            if (constants_1.SocksCommand[this.options.command] === constants_1.SocksCommand.bind) {
                const buff = smart_buffer_1.SmartBuffer.fromBuffer(data);
                buff.readOffset = 2;
                const remoteHost = {
                    port: buff.readUInt16BE(),
                    host: (0, helpers_1.int32ToIpv4)(buff.readUInt32BE()),
                };
                // If host is 0.0.0.0, set to proxy host.
                if (remoteHost.host === '0.0.0.0') {
                    remoteHost.host = this.options.proxy.ipaddress;
                }
                this.setState(constants_1.SocksClientState.BoundWaitingForConnection);
                this.emit('bound', { remoteHost, socket: this.socket });
                // Connect response
            }
            else {
                this.setState(constants_1.SocksClientState.Established);
                this.removeInternalSocketHandlers();
                this.emit('established', { socket: this.socket });
            }
        }
    }
    /**
     * Handles Socks v4 incoming connection request (BIND)
     * @param data
     */
    handleSocks4IncomingConnectionResponse() {
        const data = this.receiveBuffer.get(8);
        if (data[1] !== constants_1.Socks4Response.Granted) {
            this.closeSocket(`${constants_1.ERRORS.Socks4ProxyRejectedIncomingBoundConnection} - (${constants_1.Socks4Response[data[1]]})`);
        }
        else {
            const buff = smart_buffer_1.SmartBuffer.fromBuffer(data);
            buff.readOffset = 2;
            const remoteHost = {
                port: buff.readUInt16BE(),
                host: (0, helpers_1.int32ToIpv4)(buff.readUInt32BE()),
            };
            this.setState(constants_1.SocksClientState.Established);
            this.removeInternalSocketHandlers();
            this.emit('established', { remoteHost, socket: this.socket });
        }
    }
    /**
     * Sends initial Socks v5 handshake request.
     */
    sendSocks5InitialHandshake() {
        const buff = new smart_buffer_1.SmartBuffer();
        // By default we always support no auth.
        const supportedAuthMethods = [constants_1.Socks5Auth.NoAuth];
        // We should only tell the proxy we support user/pass auth if auth info is actually provided.
        // Note: As of Tor v0.3.5.7+, if user/pass auth is an option from the client, by default it will always take priority.
        if (this.options.proxy.userId || this.options.proxy.password) {
            supportedAuthMethods.push(constants_1.Socks5Auth.UserPass);
        }
        // Custom auth method?
        if (this.options.proxy.custom_auth_method !== undefined) {
            supportedAuthMethods.push(this.options.proxy.custom_auth_method);
        }
        // Build handshake packet
        buff.writeUInt8(0x05);
        buff.writeUInt8(supportedAuthMethods.length);
        for (const authMethod of supportedAuthMethods) {
            buff.writeUInt8(authMethod);
        }
        this.nextRequiredPacketBufferSize =
            constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5InitialHandshakeResponse;
        this.socket.write(buff.toBuffer());
        this.setState(constants_1.SocksClientState.SentInitialHandshake);
    }
    /**
     * Handles initial Socks v5 handshake response.
     * @param data
     */
    handleInitialSocks5HandshakeResponse() {
        const data = this.receiveBuffer.get(2);
        if (data[0] !== 0x05) {
            this.closeSocket(constants_1.ERRORS.InvalidSocks5IntiailHandshakeSocksVersion);
        }
        else if (data[1] === constants_1.SOCKS5_NO_ACCEPTABLE_AUTH) {
            this.closeSocket(constants_1.ERRORS.InvalidSocks5InitialHandshakeNoAcceptedAuthType);
        }
        else {
            // If selected Socks v5 auth method is no auth, send final handshake request.
            if (data[1] === constants_1.Socks5Auth.NoAuth) {
                this.socks5ChosenAuthType = constants_1.Socks5Auth.NoAuth;
                this.sendSocks5CommandRequest();
                // If selected Socks v5 auth method is user/password, send auth handshake.
            }
            else if (data[1] === constants_1.Socks5Auth.UserPass) {
                this.socks5ChosenAuthType = constants_1.Socks5Auth.UserPass;
                this.sendSocks5UserPassAuthentication();
                // If selected Socks v5 auth method is the custom_auth_method, send custom handshake.
            }
            else if (data[1] === this.options.proxy.custom_auth_method) {
                this.socks5ChosenAuthType = this.options.proxy.custom_auth_method;
                this.sendSocks5CustomAuthentication();
            }
            else {
                this.closeSocket(constants_1.ERRORS.InvalidSocks5InitialHandshakeUnknownAuthType);
            }
        }
    }
    /**
     * Sends Socks v5 user & password auth handshake.
     *
     * Note: No auth and user/pass are currently supported.
     */
    sendSocks5UserPassAuthentication() {
        const userId = this.options.proxy.userId || '';
        const password = this.options.proxy.password || '';
        const buff = new smart_buffer_1.SmartBuffer();
        buff.writeUInt8(0x01);
        buff.writeUInt8(Buffer.byteLength(userId));
        buff.writeString(userId);
        buff.writeUInt8(Buffer.byteLength(password));
        buff.writeString(password);
        this.nextRequiredPacketBufferSize =
            constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5UserPassAuthenticationResponse;
        this.socket.write(buff.toBuffer());
        this.setState(constants_1.SocksClientState.SentAuthentication);
    }
    sendSocks5CustomAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            this.nextRequiredPacketBufferSize =
                this.options.proxy.custom_auth_response_size;
            this.socket.write(yield this.options.proxy.custom_auth_request_handler());
            this.setState(constants_1.SocksClientState.SentAuthentication);
        });
    }
    handleSocks5CustomAuthHandshakeResponse(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.options.proxy.custom_auth_response_handler(data);
        });
    }
    handleSocks5AuthenticationNoAuthHandshakeResponse(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return data[1] === 0x00;
        });
    }
    handleSocks5AuthenticationUserPassHandshakeResponse(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return data[1] === 0x00;
        });
    }
    /**
     * Handles Socks v5 auth handshake response.
     * @param data
     */
    handleInitialSocks5AuthenticationHandshakeResponse() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setState(constants_1.SocksClientState.ReceivedAuthenticationResponse);
            let authResult = false;
            if (this.socks5ChosenAuthType === constants_1.Socks5Auth.NoAuth) {
                authResult = yield this.handleSocks5AuthenticationNoAuthHandshakeResponse(this.receiveBuffer.get(2));
            }
            else if (this.socks5ChosenAuthType === constants_1.Socks5Auth.UserPass) {
                authResult =
                    yield this.handleSocks5AuthenticationUserPassHandshakeResponse(this.receiveBuffer.get(2));
            }
            else if (this.socks5ChosenAuthType === this.options.proxy.custom_auth_method) {
                authResult = yield this.handleSocks5CustomAuthHandshakeResponse(this.receiveBuffer.get(this.options.proxy.custom_auth_response_size));
            }
            if (!authResult) {
                this.closeSocket(constants_1.ERRORS.Socks5AuthenticationFailed);
            }
            else {
                this.sendSocks5CommandRequest();
            }
        });
    }
    /**
     * Sends Socks v5 final handshake request.
     */
    sendSocks5CommandRequest() {
        const buff = new smart_buffer_1.SmartBuffer();
        buff.writeUInt8(0x05);
        buff.writeUInt8(constants_1.SocksCommand[this.options.command]);
        buff.writeUInt8(0x00);
        // ipv4, ipv6, domain?
        if (net.isIPv4(this.options.destination.host)) {
            buff.writeUInt8(constants_1.Socks5HostType.IPv4);
            buff.writeBuffer((0, helpers_1.ipToBuffer)(this.options.destination.host));
        }
        else if (net.isIPv6(this.options.destination.host)) {
            buff.writeUInt8(constants_1.Socks5HostType.IPv6);
            buff.writeBuffer((0, helpers_1.ipToBuffer)(this.options.destination.host));
        }
        else {
            buff.writeUInt8(constants_1.Socks5HostType.Hostname);
            buff.writeUInt8(this.options.destination.host.length);
            buff.writeString(this.options.destination.host);
        }
        buff.writeUInt16BE(this.options.destination.port);
        this.nextRequiredPacketBufferSize =
            constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHeader;
        this.socket.write(buff.toBuffer());
        this.setState(constants_1.SocksClientState.SentFinalHandshake);
    }
    /**
     * Handles Socks v5 final handshake response.
     * @param data
     */
    handleSocks5FinalHandshakeResponse() {
        // Peek at available data (we need at least 5 bytes to get the hostname length)
        const header = this.receiveBuffer.peek(5);
        if (header[0] !== 0x05 || header[1] !== constants_1.Socks5Response.Granted) {
            this.closeSocket(`${constants_1.ERRORS.InvalidSocks5FinalHandshakeRejected} - ${constants_1.Socks5Response[header[1]]}`);
        }
        else {
            // Read address type
            const addressType = header[3];
            let remoteHost;
            let buff;
            // IPv4
            if (addressType === constants_1.Socks5HostType.IPv4) {
                // Check if data is available.
                const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv4;
                if (this.receiveBuffer.length < dataNeeded) {
                    this.nextRequiredPacketBufferSize = dataNeeded;
                    return;
                }
                buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(4));
                remoteHost = {
                    host: (0, helpers_1.int32ToIpv4)(buff.readUInt32BE()),
                    port: buff.readUInt16BE(),
                };
                // If given host is 0.0.0.0, assume remote proxy ip instead.
                if (remoteHost.host === '0.0.0.0') {
                    remoteHost.host = this.options.proxy.ipaddress;
                }
                // Hostname
            }
            else if (addressType === constants_1.Socks5HostType.Hostname) {
                const hostLength = header[4];
                const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHostname(hostLength); // header + host length + host + port
                // Check if data is available.
                if (this.receiveBuffer.length < dataNeeded) {
                    this.nextRequiredPacketBufferSize = dataNeeded;
                    return;
                }
                buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(5));
                remoteHost = {
                    host: buff.readString(hostLength),
                    port: buff.readUInt16BE(),
                };
                // IPv6
            }
            else if (addressType === constants_1.Socks5HostType.IPv6) {
                // Check if data is available.
                const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv6;
                if (this.receiveBuffer.length < dataNeeded) {
                    this.nextRequiredPacketBufferSize = dataNeeded;
                    return;
                }
                buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(4));
                remoteHost = {
                    host: ip_address_1.Address6.fromByteArray(Array.from(buff.readBuffer(16))).canonicalForm(),
                    port: buff.readUInt16BE(),
                };
            }
            // We have everything we need
            this.setState(constants_1.SocksClientState.ReceivedFinalResponse);
            // If using CONNECT, the client is now in the established state.
            if (constants_1.SocksCommand[this.options.command] === constants_1.SocksCommand.connect) {
                this.setState(constants_1.SocksClientState.Established);
                this.removeInternalSocketHandlers();
                this.emit('established', { remoteHost, socket: this.socket });
            }
            else if (constants_1.SocksCommand[this.options.command] === constants_1.SocksCommand.bind) {
                /* If using BIND, the Socks client is now in BoundWaitingForConnection state.
                   This means that the remote proxy server is waiting for a remote connection to the bound port. */
                this.setState(constants_1.SocksClientState.BoundWaitingForConnection);
                this.nextRequiredPacketBufferSize =
                    constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHeader;
                this.emit('bound', { remoteHost, socket: this.socket });
                /*
                  If using Associate, the Socks client is now Established. And the proxy server is now accepting UDP packets at the
                  given bound port. This initial Socks TCP connection must remain open for the UDP relay to continue to work.
                */
            }
            else if (constants_1.SocksCommand[this.options.command] === constants_1.SocksCommand.associate) {
                this.setState(constants_1.SocksClientState.Established);
                this.removeInternalSocketHandlers();
                this.emit('established', {
                    remoteHost,
                    socket: this.socket,
                });
            }
        }
    }
    /**
     * Handles Socks v5 incoming connection request (BIND).
     */
    handleSocks5IncomingConnectionResponse() {
        // Peek at available data (we need at least 5 bytes to get the hostname length)
        const header = this.receiveBuffer.peek(5);
        if (header[0] !== 0x05 || header[1] !== constants_1.Socks5Response.Granted) {
            this.closeSocket(`${constants_1.ERRORS.Socks5ProxyRejectedIncomingBoundConnection} - ${constants_1.Socks5Response[header[1]]}`);
        }
        else {
            // Read address type
            const addressType = header[3];
            let remoteHost;
            let buff;
            // IPv4
            if (addressType === constants_1.Socks5HostType.IPv4) {
                // Check if data is available.
                const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv4;
                if (this.receiveBuffer.length < dataNeeded) {
                    this.nextRequiredPacketBufferSize = dataNeeded;
                    return;
                }
                buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(4));
                remoteHost = {
                    host: (0, helpers_1.int32ToIpv4)(buff.readUInt32BE()),
                    port: buff.readUInt16BE(),
                };
                // If given host is 0.0.0.0, assume remote proxy ip instead.
                if (remoteHost.host === '0.0.0.0') {
                    remoteHost.host = this.options.proxy.ipaddress;
                }
                // Hostname
            }
            else if (addressType === constants_1.Socks5HostType.Hostname) {
                const hostLength = header[4];
                const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHostname(hostLength); // header + host length + port
                // Check if data is available.
                if (this.receiveBuffer.length < dataNeeded) {
                    this.nextRequiredPacketBufferSize = dataNeeded;
                    return;
                }
                buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(5));
                remoteHost = {
                    host: buff.readString(hostLength),
                    port: buff.readUInt16BE(),
                };
                // IPv6
            }
            else if (addressType === constants_1.Socks5HostType.IPv6) {
                // Check if data is available.
                const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv6;
                if (this.receiveBuffer.length < dataNeeded) {
                    this.nextRequiredPacketBufferSize = dataNeeded;
                    return;
                }
                buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(4));
                remoteHost = {
                    host: ip_address_1.Address6.fromByteArray(Array.from(buff.readBuffer(16))).canonicalForm(),
                    port: buff.readUInt16BE(),
                };
            }
            this.setState(constants_1.SocksClientState.Established);
            this.removeInternalSocketHandlers();
            this.emit('established', { remoteHost, socket: this.socket });
        }
    }
    get socksClientOptions() {
        return Object.assign({}, this.options);
    }
}
exports.SocksClient = SocksClient;
//# sourceMappingURL=socksclient.js.map