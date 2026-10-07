import { Transport } from "../transport.js";
import { Packet } from "engine.io-parser";
/**
 * WebTransport transport based on the built-in `WebTransport` object.
 *
 * Usage: browser, Node.js (with the `@fails-components/webtransport` package)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
 * @see https://caniuse.com/webtransport
 */
export declare class WT extends Transport {
    private _transport;
    private _writer;
    get name(): string;
    protected doOpen(): this;
    protected write(packets: Packet[]): void;
    protected doClose(): void;
}
