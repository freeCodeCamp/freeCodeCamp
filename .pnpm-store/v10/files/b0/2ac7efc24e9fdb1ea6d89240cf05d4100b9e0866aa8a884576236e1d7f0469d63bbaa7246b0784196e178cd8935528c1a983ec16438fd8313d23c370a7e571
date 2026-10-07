/// <reference types="node" />

import { Transform } from "stream";

declare namespace MessageParser {
    interface Header {
        key: string;
        line: string;
    }
}

/**
 * MessageParser instance is a transform stream that separates message headers
 * from the rest of the body. Headers are emitted with the 'headers' event. Message
 * body is passed on as the resulting stream.
 */
declare class MessageParser extends Transform {
    addListener(event: "headers", listener: (headers: MessageParser.Header[]) => void): this;
    addListener(event: "close", listener: () => void): this;
    addListener(event: "data", listener: (chunk: any) => void): this;
    addListener(event: "end", listener: () => void): this;
    addListener(event: "readable", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    emit(event: "headers", headers: MessageParser.Header[]): boolean;
    emit(event: "close"): boolean;
    emit(event: "data", chunk: any): boolean;
    emit(event: "end"): boolean;
    emit(event: "readable"): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;

    on(event: "headers", listener: (headers: MessageParser.Header[]) => void): this;
    on(event: "close", listener: () => void): this;
    on(event: "data", listener: (chunk: any) => void): this;
    on(event: "end", listener: () => void): this;
    on(event: "readable", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once(event: "headers", listener: (headers: MessageParser.Header[]) => void): this;
    once(event: "close", listener: () => void): this;
    once(event: "data", listener: (chunk: any) => void): this;
    once(event: "end", listener: () => void): this;
    once(event: "readable", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener(event: "headers", listener: (headers: MessageParser.Header[]) => void): this;
    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "data", listener: (chunk: any) => void): this;
    prependListener(event: "end", listener: () => void): this;
    prependListener(event: "readable", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener(event: "headers", listener: (headers: MessageParser.Header[]) => void): this;
    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "data", listener: (chunk: any) => void): this;
    prependOnceListener(event: "end", listener: () => void): this;
    prependOnceListener(event: "readable", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

    removeListener(event: "headers", listener: (headers: MessageParser.Header[]) => void): this;
    removeListener(event: "close", listener: () => void): this;
    removeListener(event: "data", listener: (chunk: any) => void): this;
    removeListener(event: "end", listener: () => void): this;
    removeListener(event: "readable", listener: () => void): this;
    removeListener(event: "error", listener: (err: Error) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
}

export = MessageParser;
