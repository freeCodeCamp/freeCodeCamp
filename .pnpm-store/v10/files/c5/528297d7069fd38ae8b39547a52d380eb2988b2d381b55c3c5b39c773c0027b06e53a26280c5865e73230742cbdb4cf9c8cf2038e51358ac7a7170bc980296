/**
 * The `timers/promises` API provides an alternative set of timer functions
 * that return `Promise` objects. The API is accessible via
 * `require('node:timers/promises')`.
 *
 * ```js
 * import {
 *   setTimeout,
 *   setImmediate,
 *   setInterval,
 * } from 'node:timers/promises';
 * ```
 * @since v15.0.0
 * @see [source](https://github.com/nodejs/node/blob/v24.x/lib/timers/promises.js)
 */
declare module "timers/promises" {
    import { TimerOptions } from "node:timers";
    /**
     * ```js
     * import {
     *   setTimeout,
     * } from 'node:timers/promises';
     *
     * const res = await setTimeout(100, 'result');
     *
     * console.log(res);  // Prints 'result'
     * ```
     * @since v15.0.0
     * @param delay The number of milliseconds to wait before fulfilling the
     * promise. **Default:** `1`.
     * @param value A value with which the promise is fulfilled.
     */
    function setTimeout<T = void>(delay?: number, value?: T, options?: TimerOptions): Promise<T>;
    /**
     * ```js
     * import {
     *   setImmediate,
     * } from 'node:timers/promises';
     *
     * const res = await setImmediate('result');
     *
     * console.log(res);  // Prints 'result'
     * ```
     * @since v15.0.0
     * @param value A value with which the promise is fulfilled.
     */
    function setImmediate<T = void>(value?: T, options?: TimerOptions): Promise<T>;
    /**
     * Returns an async iterator that generates values in an interval of `delay` ms.
     * If `ref` is `true`, you need to call `next()` of async iterator explicitly
     * or implicitly to keep the event loop alive.
     *
     * ```js
     * import {
     *   setInterval,
     * } from 'node:timers/promises';
     *
     * const interval = 100;
     * for await (const startTime of setInterval(interval, Date.now())) {
     *   const now = Date.now();
     *   console.log(now);
     *   if ((now - startTime) > 1000)
     *     break;
     * }
     * console.log(Date.now());
     * ```
     * @since v15.9.0
     * @param delay The number of milliseconds to wait between iterations.
     * **Default:** `1`.
     * @param value A value with which the iterator returns.
     */
    function setInterval<T = void>(delay?: number, value?: T, options?: TimerOptions): NodeJS.AsyncIterator<T>;
    interface Scheduler {
        /**
         * An experimental API defined by the [Scheduling APIs](https://github.com/WICG/scheduling-apis) draft specification
         * being developed as a standard Web Platform API.
         *
         * Calling `timersPromises.scheduler.wait(delay, options)` is roughly equivalent
         * to calling `timersPromises.setTimeout(delay, undefined, options)` except that
         * the `ref` option is not supported.
         *
         * ```js
         * import { scheduler } from 'node:timers/promises';
         *
         * await scheduler.wait(1000); // Wait one second before continuing
         * ```
         * @since v17.3.0, v16.14.0
         * @experimental
         * @param delay The number of milliseconds to wait before resolving the
         * promise.
         */
        wait(delay: number, options?: { signal?: AbortSignal }): Promise<void>;
        /**
         * An experimental API defined by the [Scheduling APIs](https://github.com/WICG/scheduling-apis) draft specification
         * being developed as a standard Web Platform API.
         *
         * Calling `timersPromises.scheduler.yield()` is equivalent to calling
         * `timersPromises.setImmediate()` with no arguments.
         * @since v17.3.0, v16.14.0
         * @experimental
         */
        yield(): Promise<void>;
    }
    const scheduler: Scheduler;
}
declare module "node:timers/promises" {
    export * from "timers/promises";
}
