/**
 * trace-event - A library to create a trace of your node app per
 * Google's Trace Event format:
 * // JSSTYLED
 *      https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU
 */
/// <reference types="node" />
import { Readable as ReadableStream } from "stream";
export interface Event {
    ts: number;
    pid: number;
    tid: number;
    /** event phase */
    ph?: string;
    [otherData: string]: any;
}
export interface Fields {
    cat?: any;
    args?: any;
    [filedName: string]: any;
}
export interface TracerOptions {
    parent?: Tracer | null;
    fields?: Fields | null;
    objectMode?: boolean | null;
    noStream?: boolean;
}
export declare class Tracer extends ReadableStream {
    private _objectMode;
    /** Node Stream internal APIs */
    private _push;
    private firstPush?;
    private noStream;
    private events;
    private parent;
    private fields;
    constructor(opts?: TracerOptions);
    /**
     * If in no streamMode in order to flush out the trace
     * you need to call flush.
     */
    flush(): void;
    _read(_: number): void;
    private _pushString;
    private _flush;
    child(fields: Fields): Tracer;
    begin(fields: Fields): void;
    end(fields: Fields): void;
    completeEvent(fields: Fields): void;
    instantEvent(fields: Fields): void;
    mkEventFunc(ph: string): (fields: Fields) => void;
}
