/// <reference types="node" />

import SMTPConnection = require("../smtp-connection");

import stream = require("stream");

export type LoggerLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal";

export interface Logger {
    level(level: LoggerLevel): void;
    trace(...params: any[]): void;
    debug(...params: any[]): void;
    info(...params: any[]): void;
    warn(...params: any[]): void;
    error(...params: any[]): void;
    fatal(...params: any[]): void;
}

export interface ResolveHostnameOptions {
    host?: string | undefined;
    servername?: string | false | undefined;
}

export interface ResolveHostnameValue {
    host: string;
    servername: string | false;
    _cached?: true | undefined;
}

export function resolveHostname(
    options: ResolveHostnameOptions | null | undefined,
    callback: (err: Error | null, value: ResolveHostnameValue) => void,
): void;

/** Parses connection url to a structured configuration object */
export function parseConnectionUrl(url: string): SMTPConnection.Options;
/** Returns a bunyan-compatible logger interface. Uses either provided logger or creates a default console logger */
export function getLogger(options?: { [key: string]: any }, defaults?: { [key: string]: any }): Logger;
/** Wrapper for creating a callback than either resolves or rejects a promise based on input */
export function callbackPromise(resolve: (...args: any[]) => void, reject: (err: Error) => void): () => void;
/**
 * Resolves a String or a Buffer value for content value. Useful if the value
 * is a Stream or a file or an URL. If the value is a Stream, overwrites
 * the stream object with the resolved value (you can't stream a value twice).
 *
 * This is useful when you want to create a plugin that needs a content value,
 * for example the `html` or `text` value as a String or a Buffer but not as
 * a file path or an URL.
 */
export function resolveContent(
    data: object | any[],
    key: string | number,
    callback: (err: Error | null, value: Buffer | string) => void,
): void;
export function resolveContent(data: object | any[], key: string | number): Promise<Buffer | string>;
/** Copies properties from source objects to target objects */
export function assign(target: object, ...sources: object[]): object;
export function encodeXText(str: string): string;
