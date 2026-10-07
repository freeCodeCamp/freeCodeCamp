/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type * as Bidi from 'webdriver-bidi-protocol';
import type { Frame } from '../api/Frame.js';
import { ConsoleMessage } from '../common/ConsoleMessage.js';
import type { ConsoleMessageLocation, ConsoleMessageType } from '../common/ConsoleMessage.js';
import type { BidiElementHandle } from './bidi.js';
import { BidiJSHandle } from './JSHandle.js';
/**
 * @internal
 *
 * TODO: Remove this and map CDP the correct method.
 * Requires breaking change.
 */
export declare function convertConsoleMessageLevel(method: string): ConsoleMessageType;
/**
 * @internal
 */
export declare function getStackTraceLocations(stackTrace?: Bidi.Script.StackTrace): ConsoleMessageLocation[];
/**
 * @internal
 */
export declare function getConsoleMessage(entry: Bidi.Log.ConsoleLogEntry, args: Array<BidiJSHandle<unknown> | BidiElementHandle<Node>>, frame?: Frame, targetId?: string): ConsoleMessage;
/**
 * @internal
 */
export declare function isConsoleLogEntry(event: Bidi.Log.Entry): event is Bidi.Log.ConsoleLogEntry;
/**
 * @internal
 */
export declare function isJavaScriptLogEntry(event: Bidi.Log.Entry): event is Bidi.Log.JavascriptLogEntry;
/**
 * @internal
 */
export declare function createEvaluationError(details: Bidi.Script.ExceptionDetails): unknown;
/**
 * @internal
 */
export declare function rewriteNavigationError(message: string, ms: number): (error: unknown) => never;
/**
 * @internal
 */
export declare function rewriteEvaluationError(error: unknown): never;
//# sourceMappingURL=util.d.ts.map