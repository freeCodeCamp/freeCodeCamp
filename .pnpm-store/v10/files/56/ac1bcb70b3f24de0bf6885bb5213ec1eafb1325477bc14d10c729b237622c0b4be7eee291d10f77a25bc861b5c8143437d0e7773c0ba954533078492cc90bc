import { Transport } from "../transport.js";
import type { Packet, RawData } from "engine.io-parser";
export declare abstract class BaseWS extends Transport {
    protected ws: any;
    get name(): string;
    doOpen(): this;
    abstract createSocket(uri: string, protocols: string | string[] | undefined, opts: Record<string, any>): any;
    /**
     * Adds event listeners to the socket
     *
     * @private
     */
    private addEventListeners;
    write(packets: any): void;
    abstract doWrite(packet: Packet, data: RawData): any;
    doClose(): void;
    /**
     * Generates uri for connection.
     *
     * @private
     */
    private uri;
}
/**
 * WebSocket transport based on the built-in `WebSocket` object.
 *
 * Usage: browser, Node.js (since v21), Deno, Bun
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
 * @see https://caniuse.com/mdn-api_websocket
 * @see https://nodejs.org/api/globals.html#websocket
 */
export declare class WS extends BaseWS {
    createSocket(uri: string, protocols: string | string[] | undefined, opts: Record<string, any>): any;
    doWrite(_packet: Packet, data: RawData): void;
}
