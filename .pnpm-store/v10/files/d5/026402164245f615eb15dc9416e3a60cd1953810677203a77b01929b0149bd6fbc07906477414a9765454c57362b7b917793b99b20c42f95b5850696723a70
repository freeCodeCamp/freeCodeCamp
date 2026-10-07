import type { Packet, RawData } from "engine.io-parser";
import { BaseWS } from "./websocket.js";
/**
 * WebSocket transport based on the `WebSocket` object provided by the `ws` package.
 *
 * Usage: Node.js, Deno (compat), Bun (compat)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
 * @see https://caniuse.com/mdn-api_websocket
 */
export declare class WS extends BaseWS {
    createSocket(uri: string, protocols: string | string[] | undefined, opts: Record<string, any>): any;
    doWrite(packet: Packet, data: RawData): void;
}
