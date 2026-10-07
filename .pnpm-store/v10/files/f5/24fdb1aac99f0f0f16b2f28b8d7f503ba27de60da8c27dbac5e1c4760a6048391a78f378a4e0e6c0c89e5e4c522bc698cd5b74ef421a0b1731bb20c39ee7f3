import { Socket as Engine, SocketOptions as EngineOptions } from "engine.io-client";
import { Socket, SocketOptions, DisconnectDescription } from "./socket.js";
import { Packet } from "socket.io-parser";
import { DefaultEventsMap, EventsMap, Emitter } from "@socket.io/component-emitter";
export interface ManagerOptions extends EngineOptions {
    /**
     * Should we force a new Manager for this connection?
     * @default false
     */
    forceNew: boolean;
    /**
     * Should we multiplex our connection (reuse existing Manager) ?
     * @default true
     */
    multiplex: boolean;
    /**
     * The path to get our client file from, in the case of the server
     * serving it
     * @default '/socket.io'
     */
    path: string;
    /**
     * Should we allow reconnections?
     * @default true
     */
    reconnection: boolean;
    /**
     * How many reconnection attempts should we try?
     * @default Infinity
     */
    reconnectionAttempts: number;
    /**
     * The time delay in milliseconds between reconnection attempts
     * @default 1000
     */
    reconnectionDelay: number;
    /**
     * The max time delay in milliseconds between reconnection attempts
     * @default 5000
     */
    reconnectionDelayMax: number;
    /**
     * Used in the exponential backoff jitter when reconnecting
     * @default 0.5
     */
    randomizationFactor: number;
    /**
     * The timeout in milliseconds for our connection attempt
     * @default 20000
     */
    timeout: number;
    /**
     * Should we automatically connect?
     * @default true
     */
    autoConnect: boolean;
    /**
     * the parser to use. Defaults to an instance of the Parser that ships with socket.io.
     */
    parser: any;
}
interface ManagerReservedEvents {
    open: () => void;
    error: (err: Error) => void;
    ping: () => void;
    packet: (packet: Packet) => void;
    close: (reason: string, description?: DisconnectDescription) => void;
    reconnect_failed: () => void;
    reconnect_attempt: (attempt: number) => void;
    reconnect_error: (err: Error) => void;
    reconnect: (attempt: number) => void;
}
export declare class Manager<ListenEvents extends EventsMap = DefaultEventsMap, EmitEvents extends EventsMap = ListenEvents> extends Emitter<{}, {}, ManagerReservedEvents> {
    /**
     * The Engine.IO client instance
     *
     * @public
     */
    engine: Engine;
    /**
     * @private
     */
    _autoConnect: boolean;
    /**
     * @private
     */
    _readyState: "opening" | "open" | "closed";
    /**
     * @private
     */
    _reconnecting: boolean;
    private readonly uri;
    opts: Partial<ManagerOptions>;
    private nsps;
    private subs;
    private backoff;
    private setTimeoutFn;
    private clearTimeoutFn;
    private _reconnection;
    private _reconnectionAttempts;
    private _reconnectionDelay;
    private _randomizationFactor;
    private _reconnectionDelayMax;
    private _timeout;
    private encoder;
    private decoder;
    private skipReconnect;
    /**
     * `Manager` constructor.
     *
     * @param uri - engine instance or engine uri/opts
     * @param opts - options
     * @public
     */
    constructor(opts: Partial<ManagerOptions>);
    constructor(uri?: string, opts?: Partial<ManagerOptions>);
    constructor(uri?: string | Partial<ManagerOptions>, opts?: Partial<ManagerOptions>);
    /**
     * Sets the `reconnection` config.
     *
     * @param {Boolean} v - true/false if it should automatically reconnect
     * @return {Manager} self or value
     * @public
     */
    reconnection(v: boolean): this;
    reconnection(): boolean;
    reconnection(v?: boolean): this | boolean;
    /**
     * Sets the reconnection attempts config.
     *
     * @param {Number} v - max reconnection attempts before giving up
     * @return {Manager} self or value
     * @public
     */
    reconnectionAttempts(v: number): this;
    reconnectionAttempts(): number;
    reconnectionAttempts(v?: number): this | number;
    /**
     * Sets the delay between reconnections.
     *
     * @param {Number} v - delay
     * @return {Manager} self or value
     * @public
     */
    reconnectionDelay(v: number): this;
    reconnectionDelay(): number;
    reconnectionDelay(v?: number): this | number;
    /**
     * Sets the randomization factor
     *
     * @param v - the randomization factor
     * @return self or value
     * @public
     */
    randomizationFactor(v: number): this;
    randomizationFactor(): number;
    randomizationFactor(v?: number): this | number;
    /**
     * Sets the maximum delay between reconnections.
     *
     * @param v - delay
     * @return self or value
     * @public
     */
    reconnectionDelayMax(v: number): this;
    reconnectionDelayMax(): number;
    reconnectionDelayMax(v?: number): this | number;
    /**
     * Sets the connection timeout. `false` to disable
     *
     * @param v - connection timeout
     * @return self or value
     * @public
     */
    timeout(v: number | boolean): this;
    timeout(): number | boolean;
    timeout(v?: number | boolean): this | number | boolean;
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    private maybeReconnectOnOpen;
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn?: (err?: Error) => void): this;
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn?: (err?: Error) => void): this;
    /**
     * Called upon transport open.
     *
     * @private
     */
    private onopen;
    /**
     * Called upon a ping.
     *
     * @private
     */
    private onping;
    /**
     * Called with data.
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
    /**
     * Called upon socket error.
     *
     * @private
     */
    private onerror;
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp: string, opts?: Partial<SocketOptions>): Socket;
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket: Socket): void;
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet: Partial<Packet & {
        query: string;
        options: any;
    }>): void;
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    private cleanup;
    /**
     * Close the current socket.
     *
     * @private
     */
    _close(): void;
    /**
     * Alias for close()
     *
     * @private
     */
    private disconnect;
    /**
     * Called when:
     *
     * - the low-level engine is closed
     * - the parser encountered a badly formatted packet
     * - all sockets are disconnected
     *
     * @private
     */
    private onclose;
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    private reconnect;
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    private onreconnect;
}
export {};
