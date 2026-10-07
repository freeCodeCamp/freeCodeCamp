import { EngineRequest, Transport } from "../transport";
import type { Packet } from "engine.io-parser";
import type { PerMessageDeflateOptions } from "ws";
export declare class WebSocket extends Transport {
    perMessageDeflate?: boolean | PerMessageDeflateOptions;
    private socket;
    /**
     * WebSocket transport
     *
     * @param {EngineRequest} req
     */
    constructor(req: EngineRequest);
    /**
     * Transport name
     */
    get name(): string;
    /**
     * Advertise upgrade support.
     */
    get handlesUpgrades(): boolean;
    send(packets: Packet[]): void;
    /**
     * Whether the encoding of the WebSocket frame can be skipped.
     * @param packet
     * @private
     */
    private _canSendPreEncodedFrame;
    private _doSend;
    private _doSendLast;
    private _onSent;
    private _onSentLast;
    doClose(fn?: () => void): void;
}
