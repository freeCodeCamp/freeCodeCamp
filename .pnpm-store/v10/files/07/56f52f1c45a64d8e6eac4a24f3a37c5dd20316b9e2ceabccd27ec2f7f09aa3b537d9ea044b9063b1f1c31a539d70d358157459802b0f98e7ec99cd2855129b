import { EventEmitter } from "events";
import * as parser_v4 from "engine.io-parser";
import * as parser_v3 from "./parser-v3/index";
import type { IncomingMessage, ServerResponse } from "http";
import { Packet, RawData } from "engine.io-parser";
import type { WebSocket } from "ws";
type ReadyState = "open" | "closing" | "closed";
export type EngineRequest = IncomingMessage & {
    _query: Record<string, string>;
    res?: ServerResponse;
    cleanup?: Function;
    websocket?: WebSocket & {
        _socket?: {
            remoteAddress: string;
        };
    };
};
export declare abstract class Transport extends EventEmitter {
    /**
     * The session ID.
     */
    sid: string;
    /**
     * Whether the transport is currently ready to send packets.
     */
    writable: boolean;
    /**
     * The revision of the protocol:
     *
     * - 3 is used in Engine.IO v3 / Socket.IO v2
     * - 4 is used in Engine.IO v4 and above / Socket.IO v3 and above
     *
     * It is found in the `EIO` query parameters of the HTTP requests.
     *
     * @see https://github.com/socketio/engine.io-protocol
     */
    protocol: 3 | 4;
    /**
     * The current state of the transport.
     * @protected
     */
    protected _readyState: ReadyState;
    /**
     * Whether the transport is discarded and can be safely closed (used during upgrade).
     * @protected
     */
    protected discarded: boolean;
    /**
     * The parser to use (depends on the revision of the {@link Transport#protocol}.
     * @protected
     */
    protected parser: typeof parser_v4 | typeof parser_v3;
    /**
     * Whether the transport supports binary payloads (else it will be base64-encoded)
     * @protected
     */
    protected supportsBinary: boolean;
    get readyState(): ReadyState;
    set readyState(state: ReadyState);
    /**
     * The list of transports this transport can be upgraded to.
     */
    static upgradesTo: string[];
    /**
     * Transport constructor.
     *
     * @param {EngineRequest} req
     */
    constructor(req: {
        _query: Record<string, string>;
    });
    /**
     * Flags the transport as discarded.
     *
     * @package
     */
    discard(): void;
    /**
     * Called with an incoming HTTP request.
     *
     * @param req
     * @package
     */
    onRequest(req: any): void;
    /**
     * Closes the transport.
     *
     * @package
     */
    close(fn?: () => void): void;
    /**
     * Called with a transport error.
     *
     * @param {String} msg - message error
     * @param {Object} desc - error description
     * @protected
     */
    protected onError(msg: string, desc?: any): void;
    /**
     * Called with parsed out a packets from the data stream.
     *
     * @param {Object} packet
     * @protected
     */
    protected onPacket(packet: Packet): void;
    /**
     * Called with the encoded packet data.
     *
     * @param data
     * @protected
     */
    protected onData(data: RawData): void;
    /**
     * Called upon transport close.
     *
     * @protected
     */
    protected onClose(): void;
    /**
     * The name of the transport.
     */
    abstract get name(): string;
    /**
     * Sends an array of packets.
     *
     * @param {Array} packets
     * @package
     */
    abstract send(packets: Packet[]): void;
    /**
     * Closes the transport.
     */
    abstract doClose(fn?: () => void): void;
}
export {};
