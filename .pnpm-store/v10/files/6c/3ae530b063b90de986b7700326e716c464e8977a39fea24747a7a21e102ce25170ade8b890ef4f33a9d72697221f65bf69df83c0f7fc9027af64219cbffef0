/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { Frame } from '../api/Frame.js';
import type { JSHandle } from '../api/JSHandle.js';
/**
 * @public
 */
export interface ConsoleMessageLocation {
    /**
     * URL of the resource if known or `undefined` otherwise.
     */
    url?: string;
    /**
     * 0-based line number in the resource if known or `undefined` otherwise.
     */
    lineNumber?: number;
    /**
     * 0-based column number in the resource if known or `undefined` otherwise.
     */
    columnNumber?: number;
}
/**
 * The supported types for console messages.
 * @public
 */
export type ConsoleMessageType = 'log' | 'debug' | 'info' | 'error' | 'warn' | 'dir' | 'dirxml' | 'table' | 'trace' | 'clear' | 'startGroup' | 'startGroupCollapsed' | 'endGroup' | 'assert' | 'profile' | 'profileEnd' | 'count' | 'timeEnd' | 'verbose';
/**
 * ConsoleMessage objects are dispatched by page via the 'console' event.
 * @public
 */
export declare class ConsoleMessage {
    #private;
    /**
     * @internal
     */
    constructor(type: ConsoleMessageType, text: string, args: JSHandle[], stackTraceLocations: ConsoleMessageLocation[], frame?: Frame, rawStackTrace?: Protocol.Runtime.StackTrace, targetId?: string);
    /**
     * The type of the console message.
     */
    type(): ConsoleMessageType;
    /**
     * The text of the console message.
     */
    text(): string;
    /**
     * An array of arguments passed to the console.
     */
    args(): JSHandle[];
    /**
     * The location of the console message.
     */
    location(): ConsoleMessageLocation;
    /**
     * The array of locations on the stack of the console message.
     */
    stackTrace(): ConsoleMessageLocation[];
    /**
     * The underlying protocol stack trace if available.
     *
     * @internal
     */
    _rawStackTrace(): Protocol.Runtime.StackTrace | undefined;
    /**
     * The targetId from which this console message originated.
     *
     * @internal
     */
    _targetId(): string | undefined;
}
//# sourceMappingURL=ConsoleMessage.d.ts.map