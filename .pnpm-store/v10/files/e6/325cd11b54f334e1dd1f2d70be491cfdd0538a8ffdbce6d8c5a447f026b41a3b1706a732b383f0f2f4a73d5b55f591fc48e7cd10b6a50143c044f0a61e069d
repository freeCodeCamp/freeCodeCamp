import { Transport } from "../transport";
export declare class WebSocket extends Transport {
    protected perMessageDeflate: any;
    private socket;
    /**
     * WebSocket transport
     *
     * @param req
     */
    constructor(req: any);
    /**
     * Transport name
     */
    get name(): string;
    /**
     * Advertise upgrade support.
     */
    get handlesUpgrades(): boolean;
    /**
     * Writes a packet payload.
     *
     * @param {Array} packets
     * @private
     */
    send(packets: any): void;
    /**
     * Closes the transport.
     *
     * @private
     */
    doClose(fn: any): void;
}
