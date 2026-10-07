import type { Packet, RawData } from "engine.io-parser";
import { Emitter } from "@socket.io/component-emitter";
import type { Socket, SocketOptions } from "./socket.js";
export declare class TransportError extends Error {
    readonly description: any;
    readonly context: any;
    readonly type = "TransportError";
    constructor(reason: string, description: any, context: any);
}
export interface CloseDetails {
    description: string;
    context?: unknown;
}
interface TransportReservedEvents {
    open: () => void;
    error: (err: TransportError) => void;
    packet: (packet: Packet) => void;
    close: (details?: CloseDetails) => void;
    poll: () => void;
    pollComplete: () => void;
    drain: () => void;
}
type TransportState = "opening" | "open" | "closed" | "pausing" | "paused";
export declare abstract class Transport extends Emitter<Record<never, never>, Record<never, never>, TransportReservedEvents> {
    query: Record<string, string>;
    writable: boolean;
    protected opts: SocketOptions;
    protected supportsBinary: boolean;
    protected readyState: TransportState;
    protected socket: Socket;
    protected setTimeoutFn: typeof setTimeout;
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    constructor(opts: any);
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    protected onError(reason: string, description: any, context?: any): this;
    /**
     * Opens the transport.
     */
    open(): this;
    /**
     * Closes the transport.
     */
    close(): this;
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */
    send(packets: any): void;
    /**
     * Called upon open
     *
     * @protected
     */
    protected onOpen(): void;
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */
    protected onData(data: RawData): void;
    /**
     * Called with a decoded packet.
     *
     * @protected
     */
    protected onPacket(packet: Packet): void;
    /**
     * Called upon close.
     *
     * @protected
     */
    protected onClose(details?: CloseDetails): void;
    /**
     * The name of the transport
     */
    abstract get name(): string;
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */
    pause(onPause: () => void): void;
    protected createUri(schema: string, query?: Record<string, unknown>): string;
    private _hostname;
    private _port;
    private _query;
    protected abstract doOpen(): any;
    protected abstract doClose(): any;
    protected abstract write(packets: Packet[]): any;
}
export {};
