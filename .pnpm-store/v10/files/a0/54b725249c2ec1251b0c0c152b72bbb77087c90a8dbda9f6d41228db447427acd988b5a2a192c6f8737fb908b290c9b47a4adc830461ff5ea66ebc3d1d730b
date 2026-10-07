import { EventEmitter } from "events";
import type { IncomingMessage } from "http";
import type { EngineRequest, Transport } from "./transport";
import type { BaseServer } from "./server";
import type { RawData } from "engine.io-parser";
export interface SendOptions {
    compress?: boolean;
}
type ReadyState = "opening" | "open" | "closing" | "closed";
type SendCallback = (transport: Transport) => void;
export declare class Socket extends EventEmitter {
    /**
     * The revision of the protocol:
     *
     * - 3rd is used in Engine.IO v3 / Socket.IO v2
     * - 4th is used in Engine.IO v4 and above / Socket.IO v3 and above
     *
     * It is found in the `EIO` query parameters of the HTTP requests.
     *
     * @see https://github.com/socketio/engine.io-protocol
     */
    readonly protocol: number;
    /**
     * A reference to the first HTTP request of the session
     *
     * TODO for the next major release: remove it
     */
    request: IncomingMessage;
    /**
     * The IP address of the client.
     */
    readonly remoteAddress: string;
    /**
     * The current state of the socket.
     */
    _readyState: ReadyState;
    /**
     * The current low-level transport.
     */
    transport: Transport;
    private server;
    upgrading: boolean;
    upgraded: boolean;
    private writeBuffer;
    private packetsFn;
    private sentCallbackFn;
    private cleanupFn;
    private pingTimeoutTimer;
    private pingIntervalTimer;
    /**
     * This is the session identifier that the client will use in the subsequent HTTP requests. It must not be shared with
     * others parties, as it might lead to session hijacking.
     *
     * @private
     */
    private readonly id;
    get readyState(): ReadyState;
    set readyState(state: ReadyState);
    constructor(id: string, server: BaseServer, transport: Transport, req: EngineRequest, protocol: number);
    /**
     * Called upon transport considered open.
     *
     * @private
     */
    private onOpen;
    /**
     * Called upon transport packet.
     *
     * @param {Object} packet
     * @private
     */
    private onPacket;
    /**
     * Called upon transport error.
     *
     * @param {Error} err - error object
     * @private
     */
    private onError;
    /**
     * Pings client every `this.pingInterval` and expects response
     * within `this.pingTimeout` or closes connection.
     *
     * @private
     */
    private schedulePing;
    /**
     * Resets ping timeout.
     *
     * @private
     */
    private resetPingTimeout;
    /**
     * Attaches handlers for the given transport.
     *
     * @param {Transport} transport
     * @private
     */
    private setTransport;
    /**
     * Upon transport "drain" event
     *
     * @private
     */
    private onDrain;
    /**
     * Upgrades socket to the given transport
     *
     * @param {Transport} transport
     * @private
     */
    _maybeUpgrade(transport: Transport): void;
    /**
     * Clears listeners and timers associated with current transport.
     *
     * @private
     */
    private clearTransport;
    /**
     * Called upon transport considered closed.
     * Possible reasons: `ping timeout`, `client error`, `parse error`,
     * `transport error`, `server close`, `transport close`
     */
    private onClose;
    /**
     * Sends a message packet.
     *
     * @param {Object} data
     * @param {Object} options
     * @param {Function} callback
     * @return {Socket} for chaining
     */
    send(data: RawData, options?: SendOptions, callback?: SendCallback): this;
    /**
     * Alias of {@link send}.
     *
     * @param data
     * @param options
     * @param callback
     */
    write(data: RawData, options?: SendOptions, callback?: SendCallback): this;
    /**
     * Sends a packet.
     *
     * @param {String} type - packet type
     * @param {String} data
     * @param {Object} options
     * @param {Function} callback
     *
     * @private
     */
    private sendPacket;
    /**
     * Attempts to flush the packets buffer.
     *
     * @private
     */
    private flush;
    /**
     * Get available upgrades for this socket.
     *
     * @private
     */
    private getAvailableUpgrades;
    /**
     * Closes the socket and underlying transport.
     *
     * @param {Boolean} discard - optional, discard the transport
     * @return {Socket} for chaining
     */
    close(discard?: boolean): void;
    /**
     * Closes the underlying transport.
     *
     * @param {Boolean} discard
     * @private
     */
    private closeTransport;
}
export {};
