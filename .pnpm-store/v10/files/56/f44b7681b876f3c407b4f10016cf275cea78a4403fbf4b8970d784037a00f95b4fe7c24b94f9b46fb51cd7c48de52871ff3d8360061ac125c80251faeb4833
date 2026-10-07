import { EventEmitter } from "events";
import { Socket } from "./socket";
import { type PerMessageDeflateOptions } from "ws";
import type { IncomingMessage, Server as HttpServer, ServerResponse } from "http";
import type { CorsOptions, CorsOptionsDelegate } from "cors";
import type { Duplex } from "stream";
import type { EngineRequest, Transport } from "./transport";
import type { CookieSerializeOptions } from "./contrib/types.cookie";
type TransportName = "polling" | "websocket" | "webtransport";
export type ErrorCallback = (errorCode?: (typeof Server.errors)[keyof typeof Server.errors], errorContext?: Record<string, unknown> & {
    name?: string;
    message?: string;
}) => void;
export interface AttachOptions {
    /**
     * name of the path to capture
     * @default "/engine.io"
     */
    path?: string;
    /**
     * destroy unhandled upgrade requests
     * @default true
     */
    destroyUpgrade?: boolean;
    /**
     * milliseconds after which unhandled requests are ended
     * @default 1000
     */
    destroyUpgradeTimeout?: number;
    /**
     * Whether we should add a trailing slash to the request path.
     * @default true
     */
    addTrailingSlash?: boolean;
}
export interface ServerOptions {
    /**
     * how many ms without a pong packet to consider the connection closed
     * @default 20000
     */
    pingTimeout?: number;
    /**
     * how many ms before sending a new ping packet
     * @default 25000
     */
    pingInterval?: number;
    /**
     * how many ms before an uncompleted transport upgrade is cancelled
     * @default 10000
     */
    upgradeTimeout?: number;
    /**
     * how many bytes or characters a message can be, before closing the session (to avoid DoS).
     * @default 1e5 (100 KB)
     */
    maxHttpBufferSize?: number;
    /**
     * A function that receives a given handshake or upgrade request as its first parameter,
     * and can decide whether to continue or not. The second argument is a function that needs
     * to be called with the decided information: fn(err, success), where success is a boolean
     * value where false means that the request is rejected, and err is an error code.
     */
    allowRequest?: (req: IncomingMessage, fn: (err: string | null | undefined, success: boolean) => void) => void;
    /**
     * The low-level transports that are enabled. WebTransport is disabled by default and must be manually enabled:
     *
     * @example
     * new Server({
     *   transports: ["polling", "websocket", "webtransport"]
     * });
     *
     * @default ["polling", "websocket"]
     */
    transports?: TransportName[];
    /**
     * whether to allow transport upgrades
     * @default true
     */
    allowUpgrades?: boolean;
    /**
     * parameters of the WebSocket permessage-deflate extension (see ws module api docs). Set to false to disable.
     * @default false
     */
    perMessageDeflate?: boolean | PerMessageDeflateOptions;
    /**
     * parameters of the http compression for the polling transports (see zlib api docs). Set to false to disable.
     * @default true
     */
    httpCompression?: boolean | object;
    /**
     * what WebSocket server implementation to use. Specified module must
     * conform to the ws interface (see ws module api docs).
     * An alternative c++ addon is also available by installing eiows module.
     *
     * @default `require("ws").Server`
     */
    wsEngine?: any;
    /**
     * an optional packet which will be concatenated to the handshake packet emitted by Engine.IO.
     */
    initialPacket?: any;
    /**
     * configuration of the cookie that contains the client sid to send as part of handshake response headers. This cookie
     * might be used for sticky-session. Defaults to not sending any cookie.
     * @default false
     */
    cookie?: (CookieSerializeOptions & {
        name: string;
    }) | boolean;
    /**
     * the options that will be forwarded to the cors module
     */
    cors?: CorsOptions | CorsOptionsDelegate;
    /**
     * whether to enable compatibility with Socket.IO v2 clients
     * @default false
     */
    allowEIO3?: boolean;
}
/**
 * An Express-compatible middleware.
 *
 * Middleware functions are functions that have access to the request object (req), the response object (res), and the
 * next middleware function in the application’s request-response cycle.
 *
 * @see https://expressjs.com/en/guide/using-middleware.html
 */
type Middleware = (req: IncomingMessage, res: ServerResponse, next: (err?: any) => void) => void;
export declare abstract class BaseServer extends EventEmitter {
    opts: ServerOptions;
    protected clients: Record<string, Socket>;
    clientsCount: number;
    protected middlewares: Middleware[];
    /**
     * Server constructor.
     *
     * @param {Object} opts - options
     */
    constructor(opts?: ServerOptions);
    protected abstract init(): void;
    /**
     * Compute the pathname of the requests that are handled by the server
     * @param options
     * @protected
     */
    protected _computePath(options: AttachOptions): string;
    /**
     * Returns a list of available transports for upgrade given a certain transport.
     */
    upgrades(transport: TransportName): string[];
    /**
     * Verifies a request.
     *
     * @param {EngineRequest} req
     * @param upgrade - whether it's an upgrade request
     * @param fn
     * @protected
     * @return whether the request is valid
     */
    protected verify(req: EngineRequest, upgrade: boolean, fn: ErrorCallback): void | boolean;
    /**
     * Adds a new middleware.
     *
     * @example
     * import helmet from "helmet";
     *
     * engine.use(helmet());
     *
     * @param fn
     */
    use(fn: any): void;
    /**
     * Apply the middlewares to the request.
     *
     * @param req
     * @param res
     * @param callback
     * @protected
     */
    protected _applyMiddlewares(req: IncomingMessage, res: ServerResponse, callback: (err?: any) => void): void;
    /**
     * Closes all clients.
     */
    close(): this;
    protected abstract cleanup(): any;
    /**
     * generate a socket id.
     * Overwrite this method to generate your custom socket id
     *
     * @param {IncomingMessage} req - the request object
     */
    generateId(req: IncomingMessage): string | PromiseLike<string>;
    /**
     * Handshakes a new client.
     *
     * @param {String} transportName
     * @param {Object} req - the request object
     * @param {Function} closeConnection
     *
     * @protected
     */
    protected handshake(transportName: TransportName, req: EngineRequest, closeConnection: ErrorCallback): Promise<any>;
    onWebTransportSession(session: any): Promise<any>;
    protected abstract createTransport(transportName: TransportName, req: EngineRequest): any;
    /**
     * Protocol errors mappings.
     */
    static errors: {
        readonly UNKNOWN_TRANSPORT: 0;
        readonly UNKNOWN_SID: 1;
        readonly BAD_HANDSHAKE_METHOD: 2;
        readonly BAD_REQUEST: 3;
        readonly FORBIDDEN: 4;
        readonly UNSUPPORTED_PROTOCOL_VERSION: 5;
    };
    static errorMessages: {
        readonly 0: "Transport unknown";
        readonly 1: "Session ID unknown";
        readonly 2: "Bad handshake method";
        readonly 3: "Bad request";
        readonly 4: "Forbidden";
        readonly 5: "Unsupported protocol version";
    };
}
/**
 * An Engine.IO server based on Node.js built-in HTTP server and the `ws` package for WebSocket connections.
 */
export declare class Server extends BaseServer {
    httpServer?: HttpServer;
    private ws;
    /**
     * Initialize websocket server
     *
     * @protected
     */
    protected init(): void;
    protected cleanup(): void;
    /**
     * Prepares a request by processing the query string.
     *
     * @private
     */
    private prepare;
    protected createTransport(transportName: TransportName, req: IncomingMessage): Transport;
    /**
     * Handles an Engine.IO HTTP request.
     *
     * @param {EngineRequest} req
     * @param {ServerResponse} res
     */
    handleRequest(req: EngineRequest, res: ServerResponse): void;
    /**
     * Handles an Engine.IO HTTP Upgrade.
     */
    handleUpgrade(req: EngineRequest, socket: Duplex, upgradeHead: Buffer): void;
    /**
     * Called upon a ws.io connection.
     * @param req
     * @param socket
     * @param websocket
     * @private
     */
    private onWebSocket;
    /**
     * Captures upgrade requests for a http.Server.
     *
     * @param {http.Server} server
     * @param {Object} options
     */
    attach(server: HttpServer, options?: AttachOptions): void;
}
export {};
