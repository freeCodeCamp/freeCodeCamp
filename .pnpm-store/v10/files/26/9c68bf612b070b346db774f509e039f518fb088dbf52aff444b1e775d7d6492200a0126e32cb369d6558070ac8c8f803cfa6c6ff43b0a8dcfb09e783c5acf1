/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { ConsoleMessage } from '../common/ConsoleMessage.js';
import type { EventType } from '../common/EventEmitter.js';
import { EventEmitter } from '../common/EventEmitter.js';
import { TimeoutSettings } from '../common/TimeoutSettings.js';
import type { EvaluateFunc, HandleFor } from '../common/types.js';
import type { CDPSession } from './CDPSession.js';
import type { Realm } from './Realm.js';
/**
 * @public
 */
export declare enum WebWorkerEvent {
    /**
     * Emitted when the worker calls a console API.
     */
    Console = "console",
    /**
     * Emitted when the worker throws an exception.
     */
    Error = "error"
}
/**
 * @public
 */
export interface WebWorkerEvents extends Record<EventType, unknown> {
    [WebWorkerEvent.Console]: ConsoleMessage;
    [WebWorkerEvent.Error]: Error;
}
/**
 * This class represents a
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API | WebWorker}.
 *
 * @remarks
 * The events `workercreated` and `workerdestroyed` are emitted on the page
 * object to signal the worker lifecycle.
 *
 * @example
 *
 * ```ts
 * page.on('workercreated', worker =>
 *   console.log('Worker created: ' + worker.url()),
 * );
 * page.on('workerdestroyed', worker =>
 *   console.log('Worker destroyed: ' + worker.url()),
 * );
 *
 * console.log('Current workers:');
 * for (const worker of page.workers()) {
 *   console.log('  ' + worker.url());
 * }
 * ```
 *
 * @public
 */
export declare abstract class WebWorker extends EventEmitter<WebWorkerEvents> {
    #private;
    /**
     * @internal
     */
    readonly timeoutSettings: TimeoutSettings;
    /**
     * @internal
     */
    constructor(url: string);
    /**
     * @internal
     */
    abstract mainRealm(): Realm;
    /**
     * The URL of this web worker.
     */
    url(): string;
    /**
     * The CDP session client the WebWorker belongs to.
     */
    abstract get client(): CDPSession;
    /**
     * Evaluates a given function in the {@link WebWorker | worker}.
     *
     * @remarks If the given function returns a promise,
     * {@link WebWorker.evaluate | evaluate} will wait for the promise to resolve.
     *
     * As a rule of thumb, if the return value of the given function is more
     * complicated than a JSON object (e.g. most classes), then
     * {@link WebWorker.evaluate | evaluate} will _likely_ return some truncated
     * value (or `{}`). This is because we are not returning the actual return
     * value, but a deserialized version as a result of transferring the return
     * value through a protocol to Puppeteer.
     *
     * In general, you should use
     * {@link WebWorker.evaluateHandle | evaluateHandle} if
     * {@link WebWorker.evaluate | evaluate} cannot serialize the return value
     * properly or you need a mutable {@link JSHandle | handle} to the return
     * object.
     *
     * @param func - Function to be evaluated.
     * @param args - Arguments to pass into `func`.
     * @returns The result of `func`.
     */
    evaluate<Params extends unknown[], Func extends EvaluateFunc<Params> = EvaluateFunc<Params>>(func: Func | string, ...args: Params): Promise<Awaited<ReturnType<Func>>>;
    /**
     * Evaluates a given function in the {@link WebWorker | worker}.
     *
     * @remarks If the given function returns a promise,
     * {@link WebWorker.evaluate | evaluate} will wait for the promise to resolve.
     *
     * In general, you should use
     * {@link WebWorker.evaluateHandle | evaluateHandle} if
     * {@link WebWorker.evaluate | evaluate} cannot serialize the return value
     * properly or you need a mutable {@link JSHandle | handle} to the return
     * object.
     *
     * @param func - Function to be evaluated.
     * @param args - Arguments to pass into `func`.
     * @returns A {@link JSHandle | handle} to the return value of `func`.
     */
    evaluateHandle<Params extends unknown[], Func extends EvaluateFunc<Params> = EvaluateFunc<Params>>(func: Func | string, ...args: Params): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
    close(): Promise<void>;
}
//# sourceMappingURL=WebWorker.d.ts.map