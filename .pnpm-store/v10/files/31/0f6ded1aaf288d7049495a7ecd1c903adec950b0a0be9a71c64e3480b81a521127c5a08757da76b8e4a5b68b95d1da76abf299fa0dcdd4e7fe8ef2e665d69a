import { Transport } from "../transport";
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
     * @param req
     *
     * @private
     */
    onRequest(req: any): void;
    /**
     * The client sends a request awaiting for us to send data.
     *
     * @private
     */
    onPollRequest(req: any, res: any): void;
    /**
     * The client sends a request with data.
     *
     * @private
     */
    onDataRequest(req: any, res: any): void;
    /**
     * Cleanup request.
     *
     * @private
     */
    private onDataRequestCleanup;
    /**
     * Processes the incoming data payload.
     *
     * @param {String} encoded payload
     * @private
     */
    onData(data: any): void;
    /**
     * Overrides onClose.
     *
     * @private
     */
    onClose(): void;
    /**
     * Writes a packet payload.
     *
     * @param {Object} packet
     * @private
     */
    send(packets: any): void;
    /**
     * Writes data as response to poll request.
     *
     * @param {String} data
     * @param {Object} options
     * @private
     */
    write(data: any, options: any): void;
    /**
     * Performs the write.
     *
     * @private
     */
    doWrite(data: any, options: any, callback: any): void;
    /**
     * Compresses data.
     *
     * @private
     */
    compress(data: any, encoding: any, callback: any): void;
    /**
     * Closes the transport.
     *
     * @private
     */
    doClose(fn: any): void;
    /**
     * Returns headers for a response.
     *
     * @param req - request
     * @param {Object} extra headers
     * @private
     */
    headers(req: any, headers: any): any;
}
