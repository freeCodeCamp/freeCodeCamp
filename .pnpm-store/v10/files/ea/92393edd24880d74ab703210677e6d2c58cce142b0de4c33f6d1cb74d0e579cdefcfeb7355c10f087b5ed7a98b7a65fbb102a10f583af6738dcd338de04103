import { AttachOptions, BaseServer } from "./server";
import { EngineRequest } from "./transport";
export interface uOptions {
    /**
     * What permessage-deflate compression to use. uWS.DISABLED, uWS.SHARED_COMPRESSOR or any of the uWS.DEDICATED_COMPRESSOR_xxxKB.
     * @default uWS.DISABLED
     */
    compression?: number;
    /**
     * Maximum amount of seconds that may pass without sending or getting a message. Connection is closed if this timeout passes. Resolution (granularity) for timeouts are typically 4 seconds, rounded to closest. Disable by using 0.
     * @default 120
     */
    idleTimeout?: number;
    /**
     * Maximum length of allowed backpressure per socket when publishing or sending messages. Slow receivers with too high backpressure will be skipped until they catch up or timeout.
     * @default 1024 * 1024
     */
    maxBackpressure?: number;
}
/**
 * An Engine.IO server based on the `uWebSockets.js` package.
 */
export declare class uServer extends BaseServer {
    protected init(): void;
    protected cleanup(): void;
    /**
     * Prepares a request by processing the query string.
     *
     * @private
     */
    private prepare;
    protected createTransport(transportName: string, req: EngineRequest): any;
    /**
     * Attach the engine to a µWebSockets.js server
     * @param app
     * @param options
     */
    attach(app: any, options?: AttachOptions & uOptions): void;
    _applyMiddlewares(req: any, res: any, callback: (err?: any) => void): void;
    private handleRequest;
    private handleUpgrade;
    private abortRequest;
}
