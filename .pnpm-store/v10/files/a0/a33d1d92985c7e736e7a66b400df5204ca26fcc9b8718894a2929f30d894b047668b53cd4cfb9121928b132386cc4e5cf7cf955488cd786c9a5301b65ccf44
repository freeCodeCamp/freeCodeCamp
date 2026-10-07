/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { JSHandle } from '../api/JSHandle.js';
import { ConsoleMessage, type ConsoleMessageType } from '../common/ConsoleMessage.js';
/**
 * @internal
 */
export declare function createConsoleMessage(event: Protocol.Runtime.ConsoleAPICalledEvent, values: JSHandle[], targetId?: string): ConsoleMessage;
/**
 * @internal
 */
export declare function createEvaluationError(details: Protocol.Runtime.ExceptionDetails): unknown;
/**
 * @internal
 */
export declare function createClientError(details: Protocol.Runtime.ExceptionDetails): Error | unknown;
/**
 * @internal
 */
export declare function valueFromJSHandle(handle: JSHandle): unknown;
/**
 * @internal
 */
export declare function valueFromRemoteObjectReference(handle: JSHandle): string;
/**
 * @internal
 */
export declare function valueFromPrimitiveRemoteObject(remoteObject: Protocol.Runtime.RemoteObject): unknown;
/**
 * @internal
 */
export declare function addPageBinding(type: string, name: string, prefix: string): void;
/**
 * @internal
 */
export declare const CDP_BINDING_PREFIX = "puppeteer_";
/**
 * @internal
 */
export declare function pageBindingInitString(type: string, name: string): string;
/**
 * @internal
 */
export declare function convertConsoleMessageLevel(method: string): ConsoleMessageType;
//# sourceMappingURL=utils.d.ts.map