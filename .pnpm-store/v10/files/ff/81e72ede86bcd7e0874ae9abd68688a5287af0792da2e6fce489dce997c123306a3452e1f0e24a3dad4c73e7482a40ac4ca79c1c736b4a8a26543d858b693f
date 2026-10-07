import { Transport } from "../transport";
/**
 * Reference: https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API
 */
export declare class WebTransport extends Transport {
    private readonly session;
    private readonly writer;
    constructor(session: any, stream: any, reader: any);
    get name(): string;
    send(packets: any): Promise<void>;
    doClose(fn: any): void;
}
