import { EngineRequest, Transport } from "../transport";
import type { Packet, RawData } from "engine.io-parser";
export declare class Polling extends Transport {
    maxHttpBufferSize: number;
    httpCompression: any;
    private req;
    private res;
    private dataReq;
    private dataRes;
    private shouldClose;
    private readonly closeTimeout;
    /**
     * HTTP polling constructor.
     */
    constructor(req: any);
    /**
     * Transport name
     */
    get name(): string;
    /**
     * Overrides onRequest.
     *
     * @param {EngineRequest} req
     * @package
     */
    onRequest(req: EngineRequest): void;
    /**
     * The client sends a request awaiting for us to send data.
     *
     * @private
     */
    private onPollRequest;
    /**
     * The client sends a request with data.
     *
     * @private
     */
    private onDataRequest;
    /**
     * Processes the incoming data payload.
     *
     * @param data - encoded payload
     * @protected
     */
    onData(data: RawData): void;
    /**
     * Overrides onClose.
     *
     * @private
     */
    onClose(): void;
    send(packets: Packet[]): void;
    /**
     * Writes data as response to poll request.
     *
     * @param {String} data
     * @param {Object} options
     * @private
     */
    private write;
    /**
     * Performs the write.
     *
     * @protected
     */
    protected doWrite(data: any, options: any, callback: any): void;
    /**
     * Compresses data.
     *
     * @private
     */
    private compress;
    /**
     * Closes the transport.
     *
     * @private
     */
    doClose(fn: () => void): void;
    /**
     * Returns headers for a response.
     *
     * @param {http.IncomingMessage} req
     * @param {Object} headers - extra headers
     * @private
     */
    private headers;
}
