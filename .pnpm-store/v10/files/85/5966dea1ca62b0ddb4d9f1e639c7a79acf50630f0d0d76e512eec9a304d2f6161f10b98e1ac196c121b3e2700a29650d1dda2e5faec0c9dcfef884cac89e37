/// <reference types="node" />

import { Transform, TransformOptions } from "stream";

declare namespace RelaxedBody {
    interface Options extends TransformOptions {
        hashAlgo?: string;
        debug?: boolean;
    }
}

/**
 * Streams through a message body and calculates relaxed body hash
 */
declare class RelaxedBody extends Transform {
    constructor(options?: RelaxedBody.Options);

    addListener(event: "hash", listener: (digest: Buffer, debugBody: Buffer | false) => void): this;
    addListener(event: "close", listener: () => void): this;
    addListener(event: "data", listener: (chunk: any) => void): this;
    addListener(event: "end", listener: () => void): this;
    addListener(event: "readable", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    emit(event: "hash", digest: Buffer, debugBody: Buffer | false): boolean;
    emit(event: "close"): boolean;
    emit(event: "data", chunk: any): boolean;
    emit(event: "end"): boolean;
    emit(event: "readable"): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;

    on(event: "hash", listener: (digest: Buffer, debugBody: Buffer | false) => void): this;
    on(event: "close", listener: () => void): this;
    on(event: "data", listener: (chunk: any) => void): this;
    on(event: "end", listener: () => void): this;
    on(event: "readable", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once(event: "hash", listener: (digest: Buffer, debugBody: Buffer | false) => void): this;
    once(event: "close", listener: () => void): this;
    once(event: "data", listener: (chunk: any) => void): this;
    once(event: "end", listener: () => void): this;
    once(event: "readable", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener(event: "hash", listener: (digest: Buffer, debugBody: Buffer | false) => void): this;
    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "data", listener: (chunk: any) => void): this;
    prependListener(event: "end", listener: () => void): this;
    prependListener(event: "readable", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener(event: "hash", listener: (digest: Buffer, debugBody: Buffer | false) => void): this;
    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "data", listener: (chunk: any) => void): this;
    prependOnceListener(event: "end", listener: () => void): this;
    prependOnceListener(event: "readable", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

    removeListener(event: "hash", listener: (digest: Buffer, debugBody: Buffer | false) => void): this;
    removeListener(event: "close", listener: () => void): this;
    removeListener(event: "data", listener: (chunk: any) => void): this;
    removeListener(event: "end", listener: () => void): this;
    removeListener(event: "readable", listener: () => void): this;
    removeListener(event: "error", listener: (err: Error) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
}

export = RelaxedBody;
