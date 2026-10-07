import { Emitter } from "@socket.io/component-emitter";
import type { Packet, BinaryType, RawData } from "engine.io-parser";
import { CloseDetails, Transport } from "./transport.js";
import { CookieJar } from "./globals.node.js";
export interface SocketOptions {
    /**
     * The host that we're connecting to. Set from the URI passed when connecting
     */
    host?: string;
    /**
     * The hostname for our connection. Set from the URI passed when connecting
     */
    hostname?: string;
    /**
     * If this is a secure connection. Set from the URI passed when connecting
     */
    secure?: boolean;
    /**
     * The port for our connection. Set from the URI passed when connecting
     */
    port?: string | number;
    /**
     * Any query parameters in our uri. Set from the URI passed when connecting
     */
    query?: {
        [key: string]: any;
    };
    /**
     * `http.Agent` to use, defaults to `false` (NodeJS only)
     *
     * Note: the type should be "undefined | http.Agent | https.Agent | false", but this would break browser-only clients.
     *
     * @see https://nodejs.org/api/http.html#httprequestoptions-callback
     */
    agent?: string | boolean;
    /**
     * Whether the client should try to upgrade the transport from
     * long-polling to something better.
     * @default true
     */
    upgrade?: boolean;
    /**
     * Forces base 64 encoding for polling transport even when XHR2
     * responseType is available and WebSocket even if the used standard
     * supports binary.
     */
    forceBase64?: boolean;
    /**
     * The param name to use as our timestamp key
     * @default 't'
     */
    timestampParam?: string;
    /**
     * Whether to add the timestamp with each transport request. Note: this
     * is ignored if the browser is IE or Android, in which case requests
     * are always stamped
     * @default false
     */
    timestampRequests?: boolean;
    /**
     * A list of transports to try (in order). Engine.io always attempts to
     * connect directly with the first one, provided the feature detection test
     * for it passes.
     *
     * @default ['polling','websocket', 'webtransport']
     */
    transports?: ("polling" | "websocket" | "webtransport" | string)[] | TransportCtor[];
    /**
     * Whether all the transports should be tested, instead of just the first one.
     *
     * If set to `true`, the client will first try to connect with HTTP long-polling, and then with WebSocket in case of
     * failure, and finally with WebTransport if the previous attempts have failed.
     *
     * If set to `false` (default), if the connection with HTTP long-polling fails, then the client will not test the
     * other transports and will abort the connection.
     *
     * @default false
     */
    tryAllTransports?: boolean;
    /**
     * If true and if the previous websocket connection to the server succeeded,
     * the connection attempt will bypass the normal upgrade process and will
     * initially try websocket. A connection attempt following a transport error
     * will use the normal upgrade process. It is recommended you turn this on
     * only when using SSL/TLS connections, or if you know that your network does
     * not block websockets.
     * @default false
     */
    rememberUpgrade?: boolean;
    /**
     * Timeout for xhr-polling requests in milliseconds (0) (only for polling transport)
     */
    requestTimeout?: number;
    /**
     * Transport options for Node.js client (headers etc)
     */
    transportOptions?: Object;
    /**
     * (SSL) Certificate, Private key and CA certificates to use for SSL.
     * Can be used in Node.js client environment to manually specify
     * certificate information.
     */
    pfx?: string;
    /**
     * (SSL) Private key to use for SSL. Can be used in Node.js client
     * environment to manually specify certificate information.
     */
    key?: string;
    /**
     * (SSL) A string or passphrase for the private key or pfx. Can be
     * used in Node.js client environment to manually specify certificate
     * information.
     */
    passphrase?: string;
    /**
     * (SSL) Public x509 certificate to use. Can be used in Node.js client
     * environment to manually specify certificate information.
     */
    cert?: string;
    /**
     * (SSL) An authority certificate or array of authority certificates to
     * check the remote host against.. Can be used in Node.js client
     * environment to manually specify certificate information.
     */
    ca?: string | string[];
    /**
     * (SSL) A string describing the ciphers to use or exclude. Consult the
     * [cipher format list]
     * (http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT) for
     * details on the format.. Can be used in Node.js client environment to
     * manually specify certificate information.
     */
    ciphers?: string;
    /**
     * (SSL) If true, the server certificate is verified against the list of
     * supplied CAs. An 'error' event is emitted if verification fails.
     * Verification happens at the connection level, before the HTTP request
     * is sent. Can be used in Node.js client environment to manually specify
     * certificate information.
     */
    rejectUnauthorized?: boolean;
    /**
     * Headers that will be passed for each request to the server (via xhr-polling and via websockets).
     * These values then can be used during handshake or for special proxies.
     */
    extraHeaders?: {
        [header: string]: string;
    };
    /**
     * Whether to include credentials (cookies, authorization headers, TLS
     * client certificates, etc.) with cross-origin XHR polling requests
     * @default false
     */
    withCredentials?: boolean;
    /**
     * Whether to automatically close the connection whenever the beforeunload event is received.
     * @default false
     */
    closeOnBeforeunload?: boolean;
    /**
     * Whether to always use the native timeouts. This allows the client to
     * reconnect when the native timeout functions are overridden, such as when
     * mock clocks are installed.
     * @default false
     */
    useNativeTimers?: boolean;
    /**
     * Whether the heartbeat timer should be unref'ed, in order not to keep the Node.js event loop active.
     *
     * @see https://nodejs.org/api/timers.html#timeoutunref
     * @default false
     */
    autoUnref?: boolean;
    /**
     * parameters of the WebSocket permessage-deflate extension (see ws module api docs). Set to false to disable.
     * @default false
     */
    perMessageDeflate?: {
        threshold: number;
    };
    /**
     * The path to get our client file from, in the case of the server
     * serving it
     * @default '/engine.io'
     */
    path?: string;
    /**
     * Whether we should add a trailing slash to the request path.
     * @default true
     */
    addTrailingSlash?: boolean;
    /**
     * Either a single protocol string or an array of protocol strings. These strings are used to indicate sub-protocols,
     * so that a single server can implement multiple WebSocket sub-protocols (for example, you might want one server to
     * be able to handle different types of interactions depending on the specified protocol)
     * @default []
     */
    protocols?: string | string[];
}
type TransportCtor = {
    new (o: any): Transport;
};
type BaseSocketOptions = Omit<SocketOptions, "transports"> & {
    transports: TransportCtor[];
};
interface HandshakeData {
    sid: string;
    upgrades: string[];
    pingInterval: number;
    pingTimeout: number;
    maxPayload: number;
}
interface SocketReservedEvents {
    open: () => void;
    handshake: (data: HandshakeData) => void;
    packet: (packet: Packet) => void;
    packetCreate: (packet: Packet) => void;
    data: (data: RawData) => void;
    message: (data: RawData) => void;
    drain: () => void;
    flush: () => void;
    heartbeat: () => void;
    ping: () => void;
    pong: () => void;
    error: (err: string | Error) => void;
    upgrading: (transport: Transport) => void;
    upgrade: (transport: Transport) => void;
    upgradeError: (err: Error) => void;
    close: (reason: string, description?: CloseDetails | Error) => void;
}
type SocketState = "opening" | "open" | "closing" | "closed";
interface WriteOptions {
    compress?: boolean;
}
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes without upgrade mechanism, which means that it will keep the first low-level transport that
 * successfully establishes the connection.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithoutUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithoutUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithUpgrade
 * @see Socket
 */
export declare class SocketWithoutUpgrade extends Emitter<Record<never, never>, Record<never, never>, SocketReservedEvents> {
    id: string;
    transport: Transport;
    binaryType: BinaryType;
    readyState: SocketState;
    writeBuffer: Packet[];
    protected readonly opts: BaseSocketOptions;
    protected readonly transports: string[];
    protected upgrading: boolean;
    protected setTimeoutFn: typeof setTimeout;
    private _prevBufferLen;
    private _pingInterval;
    private _pingTimeout;
    private _maxPayload?;
    private _pingTimeoutTimer;
    /**
     * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
     * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
     */
    private _pingTimeoutTime;
    private clearTimeoutFn;
    private readonly _beforeunloadEventListener;
    private readonly _offlineEventListener;
    private readonly secure;
    private readonly hostname;
    private readonly port;
    private readonly _transportsByName;
    /**
     * The cookie jar will store the cookies sent by the server (Node. js only).
     */
    readonly _cookieJar: CookieJar;
    static priorWebsocketSuccess: boolean;
    static protocol: number;
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    constructor(uri: string | BaseSocketOptions, opts: BaseSocketOptions);
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    protected createTransport(name: string): Transport;
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */
    private _open;
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */
    protected setTransport(transport: Transport): void;
    /**
     * Called when connection is deemed open.
     *
     * @private
     */
    protected onOpen(): void;
    /**
     * Handles a packet.
     *
     * @private
     */
    private _onPacket;
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */
    protected onHandshake(data: HandshakeData): void;
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */
    private _resetPingTimeout;
    /**
     * Called on `drain` event
     *
     * @private
     */
    private _onDrain;
    /**
     * Flush write buffers.
     *
     * @private
     */
    protected flush(): void;
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    private _getWritablePackets;
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */
    _hasPingExpired(): boolean;
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
    write(msg: RawData, options?: WriteOptions, fn?: () => void): this;
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
    send(msg: RawData, options?: WriteOptions, fn?: () => void): this;
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */
    private _sendPacket;
    /**
     * Closes the connection.
     */
    close(): this;
    /**
     * Called upon transport error
     *
     * @private
     */
    private _onError;
    /**
     * Called upon transport close.
     *
     * @private
     */
    private _onClose;
}
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see Socket
 */
export declare class SocketWithUpgrade extends SocketWithoutUpgrade {
    private _upgrades;
    onOpen(): void;
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */
    private _probe;
    onHandshake(data: HandshakeData): void;
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */
    private _filterUpgrades;
}
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * @example
 * import { Socket } from "engine.io-client";
 *
 * const socket = new Socket();
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see SocketWithUpgrade
 */
export declare class Socket extends SocketWithUpgrade {
    constructor(uri?: string, opts?: SocketOptions);
    constructor(opts: SocketOptions);
}
export {};
