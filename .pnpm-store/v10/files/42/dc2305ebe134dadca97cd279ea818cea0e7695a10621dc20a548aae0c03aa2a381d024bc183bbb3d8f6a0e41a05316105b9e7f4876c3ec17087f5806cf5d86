import { Manager, ManagerOptions } from "./manager.js";
import { DisconnectDescription, Socket, SocketOptions } from "./socket.js";
/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @public
 */
declare function lookup(opts?: Partial<ManagerOptions & SocketOptions>): Socket;
declare function lookup(uri?: string, opts?: Partial<ManagerOptions & SocketOptions>): Socket;
/**
 * Protocol version.
 *
 * @public
 */
export { protocol } from "socket.io-parser";
/**
 * Expose constructors for standalone build.
 *
 * @public
 */
export { DisconnectDescription, Manager, ManagerOptions, Socket, SocketOptions, lookup as io, lookup as connect, lookup as default, };
export { Fetch, NodeXHR, XHR, NodeWebSocket, WebSocket, WebTransport, } from "engine.io-client";
