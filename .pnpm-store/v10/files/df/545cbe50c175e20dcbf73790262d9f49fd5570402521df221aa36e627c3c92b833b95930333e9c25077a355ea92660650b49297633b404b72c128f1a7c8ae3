import { Polling } from "./polling";
import type { RawData } from "engine.io-parser";
export declare class JSONP extends Polling {
    private readonly head;
    private readonly foot;
    /**
     * JSON-P polling transport.
     */
    constructor(req: any);
    onData(data: RawData): void;
    doWrite(data: any, options: any, callback: any): void;
}
