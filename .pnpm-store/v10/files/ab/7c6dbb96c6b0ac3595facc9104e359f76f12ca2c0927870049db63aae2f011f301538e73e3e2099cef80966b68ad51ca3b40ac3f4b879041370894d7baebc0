import { Polling } from "./polling.js";
import { Emitter } from "@socket.io/component-emitter";
import type { SocketOptions } from "../socket.js";
import type { CookieJar } from "../globals.node.js";
import type { RawData } from "engine.io-parser";
export declare abstract class BaseXHR extends Polling {
    protected readonly xd: boolean;
    private pollXhr;
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    constructor(opts: any);
    /**
     * Creates a request.
     *
     * @private
     */
    abstract request(opts?: Record<string, any>): any;
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    doWrite(data: any, fn: any): void;
    /**
     * Starts a poll cycle.
     *
     * @private
     */
    doPoll(): void;
}
interface RequestReservedEvents {
    success: () => void;
    data: (data: RawData) => void;
    error: (err: number | Error, context: unknown) => void;
}
export type RequestOptions = SocketOptions & {
    method?: string;
    data?: RawData;
    xd: boolean;
    cookieJar: CookieJar;
};
export declare class Request extends Emitter<Record<never, never>, Record<never, never>, RequestReservedEvents> {
    private readonly createRequest;
    private readonly _opts;
    private readonly _method;
    private readonly _uri;
    private readonly _data;
    private _xhr;
    private setTimeoutFn;
    private _index;
    static requestsCount: number;
    static requests: {};
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    constructor(createRequest: (opts: RequestOptions) => XMLHttpRequest, uri: string, opts: RequestOptions);
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    private _create;
    /**
     * Called upon error.
     *
     * @private
     */
    private _onError;
    /**
     * Cleans up house.
     *
     * @private
     */
    private _cleanup;
    /**
     * Called upon load.
     *
     * @private
     */
    private _onLoad;
    /**
     * Aborts the request.
     *
     * @package
     */
    abort(): void;
}
/**
 * HTTP long-polling based on the built-in `XMLHttpRequest` object.
 *
 * Usage: browser
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 */
export declare class XHR extends BaseXHR {
    constructor(opts: any);
    request(opts?: Record<string, any>): Request;
}
export {};
