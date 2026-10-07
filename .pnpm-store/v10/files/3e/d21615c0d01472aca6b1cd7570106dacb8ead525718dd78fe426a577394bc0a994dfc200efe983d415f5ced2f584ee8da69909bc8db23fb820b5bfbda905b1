/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { OperatorFunction } from '../../third_party/rxjs/rxjs.js';
import { Observable } from '../../third_party/rxjs/rxjs.js';
import type { CDPSession } from '../api/CDPSession.js';
import type { EventEmitter, EventType } from './EventEmitter.js';
import type { ParsedPDFOptions, PDFOptions } from './PDFOptions.js';
/**
 * @internal
 */
export declare const debugError: (...args: unknown[]) => void;
/**
 * @internal
 */
export declare const DEFAULT_VIEWPORT: Readonly<{
    width: 800;
    height: 600;
}>;
/**
 * @internal
 */
export declare class PuppeteerURL {
    #private;
    static INTERNAL_URL: string;
    static fromCallSite(functionName: string, site: NodeJS.CallSite): PuppeteerURL;
    static parse: (url: string) => PuppeteerURL;
    static isPuppeteerURL: (url: string) => boolean;
    get functionName(): string;
    get siteString(): string;
    toString(): string;
}
/**
 * @internal
 */
export declare const withSourcePuppeteerURLIfNone: <T extends NonNullable<unknown>>(functionName: string, object: T) => T;
/**
 * @internal
 */
export declare const getSourcePuppeteerURLIfAvailable: <T extends NonNullable<unknown>>(object: T) => PuppeteerURL | undefined;
/**
 * @internal
 */
export declare const isString: (obj: unknown) => obj is string;
/**
 * @internal
 */
export declare const isNumber: (obj: unknown) => obj is number;
/**
 * @internal
 */
export declare const isPlainObject: (obj: unknown) => obj is Record<any, unknown>;
/**
 * @internal
 */
export declare const isRegExp: (obj: unknown) => obj is RegExp;
/**
 * @internal
 */
export declare const isDate: (obj: unknown) => obj is Date;
/**
 * @internal
 */
export declare function evaluationString(fun: Function | string, ...args: unknown[]): string;
/**
 * @internal
 */
export declare function getReadableAsTypedArray(readable: ReadableStream<Uint8Array>, path?: string): Promise<Uint8Array | null>;
/**
 * @internal
 */
export declare function getReadableFromProtocolStream(client: CDPSession, handle: string): Promise<ReadableStream<Uint8Array>>;
/**
 * @internal
 */
export declare function validateDialogType(type: string): 'alert' | 'confirm' | 'prompt' | 'beforeunload';
/**
 * @internal
 */
export declare function timeout(ms: number, cause?: Error): Observable<never>;
/**
 * @internal
 */
export declare const UTILITY_WORLD_NAME: string;
/**
 * @internal
 */
export declare const SOURCE_URL_REGEX: RegExp;
/**
 * @internal
 */
export declare function getSourceUrlComment(url: string): string;
/**
 * @internal
 */
export declare const NETWORK_IDLE_TIME = 500;
/**
 * @internal
 */
export declare function parsePDFOptions(options?: PDFOptions, lengthUnit?: 'in' | 'cm'): ParsedPDFOptions;
/**
 * @internal
 */
export declare const unitToPixels: {
    px: number;
    in: number;
    cm: number;
    mm: number;
};
/**
 * @internal
 */
export declare function fromEmitterEvent<Events extends Record<EventType, unknown>, Event extends keyof Events>(emitter: EventEmitter<Events>, eventName: Event): Observable<Events[Event]>;
/**
 * @internal
 */
export declare function fromAbortSignal(signal?: AbortSignal, cause?: Error): Observable<never>;
/**
 * @internal
 */
export declare function filterAsync<T>(predicate: (value: T) => boolean | PromiseLike<boolean>): OperatorFunction<T, T>;
//# sourceMappingURL=util.d.ts.map