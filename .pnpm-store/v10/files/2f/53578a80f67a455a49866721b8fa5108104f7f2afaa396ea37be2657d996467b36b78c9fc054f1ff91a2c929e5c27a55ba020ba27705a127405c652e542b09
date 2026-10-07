import { Packet } from "socket.io-parser";
import type { IncomingMessage } from "http";
import type { Server } from "./index";
import type { EventsMap } from "./typed-events";
import type { Socket } from "./socket";
import type { Socket as RawSocket } from "engine.io";
interface WriteOptions {
    compress?: boolean;
    volatile?: boolean;
    preEncoded?: boolean;
    wsPreEncoded?: string;
}
export declare class Client<ListenEvents extends EventsMap, EmitEvents extends EventsMap, ServerSideEvents extends EventsMap, SocketData = any> {
    readonly conn: RawSocket;
    private readonly id;
    private readonly server;
    private readonly encoder;
    private readonly decoder;
    private sockets;
    private nsps;
    private connectTimeout?;
    /**
     * Client constructor.
     *
     * @param server instance
     * @param conn
     * @package
     */
    constructor(server: Server<ListenEvents, EmitEvents, ServerSideEvents, SocketData>, conn: RawSocket);
    /**
     * @return the reference to the request that originated the Engine.IO connection
     *
     * @public
     */
    get request(): IncomingMessage;
    /**
     * Sets up event listeners.
     *
     * @private
     */
    private setup;
    /**
     * Connects a client to a namespace.
     *
     * @param {String} name - the namespace
     * @param {Object} auth - the auth parameters
     * @private
     */
    private connect;
    /**
     * Connects a client to a namespace.
     *
     * @param name - the namespace
     * @param {Object} auth - the auth parameters
     *
     * @private
     */
    private doConnect;
    /**
     * Disconnects from all namespaces and closes transport.
     *
     * @private
     */
    _disconnect(): void;
    /**
     * Removes a socket. Called by each `Socket`.
     *
     * @private
     */
    _remove(socket: Socket<ListenEvents, EmitEvents, ServerSideEvents, SocketData>): void;
    /**
     * Closes the underlying connection.
     *
     * @private
     */
    private close;
    /**
     * Writes a packet to the transport.
     *
     * @param {Object} packet object
     * @param {Object} opts
     * @private
     */
    _packet(packet: Packet | Packet[], opts?: WriteOptions): void;
    private writeToEngine;
    /**
     * Called with incoming transport data.
     *
     * @private
     */
    private ondata;
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    private ondecoded;
    private _parseNamespace;
    /**
     * Handles an error.
     *
     * @param {Object} err object
     * @private
     */
    private onerror;
    /**
     * Called upon transport close.
     *
     * @param reason
     * @param description
     * @private
     */
    private onclose;
    /**
     * Cleans up event listeners.
     * @private
     */
    private destroy;
}
export {};
