/**
 * The `timer` module exposes a global API for scheduling functions to
 * be called at some future period of time. Because the timer functions are
 * globals, there is no need to import `node:timers` to use the API.
 *
 * The timer functions within Node.js implement a similar API as the timers API
 * provided by Web Browsers but use a different internal implementation that is
 * built around the Node.js [Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#setimmediate-vs-settimeout).
 * @see [source](https://github.com/nodejs/node/blob/v24.x/lib/timers.js)
 */
declare module "timers" {
    import { Abortable } from "node:events";
    import * as promises from "node:timers/promises";
    export interface TimerOptions extends Abortable {
        /**
         * Set to `false` to indicate that the scheduled `Timeout`
         * should not require the Node.js event loop to remain active.
         * @default true
         */
        ref?: boolean | undefined;
    }
    global {
        namespace NodeJS {
            /**
             * This object is created internally and is returned from `setImmediate()`. It
             * can be passed to `clearImmediate()` in order to cancel the scheduled
             * actions.
             *
             * By default, when an immediate is scheduled, the Node.js event loop will continue
             * running as long as the immediate is active. The `Immediate` object returned by
             * `setImmediate()` exports both `immediate.ref()` and `immediate.unref()`
             * functions that can be used to control this default behavior.
             */
            interface Immediate extends RefCounted, Disposable {
                /**
                 * If true, the `Immediate` object will keep the Node.js event loop active.
                 * @since v11.0.0
                 */
                hasRef(): boolean;
                /**
                 * When called, requests that the Node.js event loop _not_ exit so long as the
                 * `Immediate` is active. Calling `immediate.ref()` multiple times will have no
                 * effect.
                 *
                 * By default, all `Immediate` objects are "ref'ed", making it normally unnecessary
                 * to call `immediate.ref()` unless `immediate.unref()` had been called previously.
                 * @since v9.7.0
                 * @returns a reference to `immediate`
                 */
                ref(): this;
                /**
                 * When called, the active `Immediate` object will not require the Node.js event
                 * loop to remain active. If there is no other activity keeping the event loop
                 * running, the process may exit before the `Immediate` object's callback is
                 * invoked. Calling `immediate.unref()` multiple times will have no effect.
                 * @since v9.7.0
                 * @returns a reference to `immediate`
                 */
                unref(): this;
                /**
                 * Cancels the immediate. This is similar to calling `clearImmediate()`.
                 * @since v20.5.0, v18.18.0
                 */
                [Symbol.dispose](): void;
                _onImmediate(...args: any[]): void;
            }
            // Legacy interface used in Node.js v9 and prior
            // TODO: remove in a future major version bump
            /** @deprecated Use `NodeJS.Timeout` instead. */
            interface Timer extends RefCounted {
                hasRef(): boolean;
                refresh(): this;
                [Symbol.toPrimitive](): number;
            }
            /**
             * This object is created internally and is returned from `setTimeout()` and
             * `setInterval()`. It can be passed to either `clearTimeout()` or
             * `clearInterval()` in order to cancel the scheduled actions.
             *
             * By default, when a timer is scheduled using either `setTimeout()` or
             * `setInterval()`, the Node.js event loop will continue running as long as the
             * timer is active. Each of the `Timeout` objects returned by these functions
             * export both `timeout.ref()` and `timeout.unref()` functions that can be used to
             * control this default behavior.
             */
            interface Timeout extends RefCounted, Disposable, Timer {
                /**
                 * Cancels the timeout.
                 * @since v0.9.1
                 * @legacy Use `clearTimeout()` instead.
                 * @returns a reference to `timeout`
                 */
                close(): this;
                /**
                 * If true, the `Timeout` object will keep the Node.js event loop active.
                 * @since v11.0.0
                 */
                hasRef(): boolean;
                /**
                 * When called, requests that the Node.js event loop _not_ exit so long as the
                 * `Timeout` is active. Calling `timeout.ref()` multiple times will have no effect.
                 *
                 * By default, all `Timeout` objects are "ref'ed", making it normally unnecessary
                 * to call `timeout.ref()` unless `timeout.unref()` had been called previously.
                 * @since v0.9.1
                 * @returns a reference to `timeout`
                 */
                ref(): this;
                /**
                 * Sets the timer's start time to the current time, and reschedules the timer to
                 * call its callback at the previously specified duration adjusted to the current
                 * time. This is useful for refreshing a timer without allocating a new
                 * JavaScript object.
                 *
                 * Using this on a timer that has already called its callback will reactivate the
                 * timer.
                 * @since v10.2.0
                 * @returns a reference to `timeout`
                 */
                refresh(): this;
                /**
                 * When called, the active `Timeout` object will not require the Node.js event loop
                 * to remain active. If there is no other activity keeping the event loop running,
                 * the process may exit before the `Timeout` object's callback is invoked. Calling
                 * `timeout.unref()` multiple times will have no effect.
                 * @since v0.9.1
                 * @returns a reference to `timeout`
                 */
                unref(): this;
                /**
                 * Coerce a `Timeout` to a primitive. The primitive can be used to
                 * clear the `Timeout`. The primitive can only be used in the
                 * same thread where the timeout was created. Therefore, to use it
                 * across `worker_threads` it must first be passed to the correct
                 * thread. This allows enhanced compatibility with browser
                 * `setTimeout()` and `setInterval()` implementations.
                 * @since v14.9.0, v12.19.0
                 */
                [Symbol.toPrimitive](): number;
                /**
                 * Cancels the timeout.
                 * @since v20.5.0, v18.18.0
                 */
                [Symbol.dispose](): void;
                _onTimeout(...args: any[]): void;
            }
        }
        /**
         * Schedules the "immediate" execution of the `callback` after I/O events'
         * callbacks.
         *
         * When multiple calls to `setImmediate()` are made, the `callback` functions are
         * queued for execution in the order in which they are created. The entire callback
         * queue is processed every event loop iteration. If an immediate timer is queued
         * from inside an executing callback, that timer will not be triggered until the
         * next event loop iteration.
         *
         * If `callback` is not a function, a `TypeError` will be thrown.
         *
         * This method has a custom variant for promises that is available using
         * `timersPromises.setImmediate()`.
         * @since v0.9.1
         * @param callback The function to call at the end of this turn of
         * the Node.js [Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#setimmediate-vs-settimeout)
         * @param args Optional arguments to pass when the `callback` is called.
         * @returns for use with `clearImmediate()`
         */
        function setImmediate<TArgs extends any[]>(
            callback: (...args: TArgs) => void,
            ...args: TArgs
        ): NodeJS.Immediate;
        // Allow a single void-accepting argument to be optional in arguments lists.
        // Allows usage such as `new Promise(resolve => setTimeout(resolve, ms))` (#54258)
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        function setImmediate(callback: (_: void) => void): NodeJS.Immediate;
        namespace setImmediate {
            import __promisify__ = promises.setImmediate;
            export { __promisify__ };
        }
        /**
         * Schedules repeated execution of `callback` every `delay` milliseconds.
         *
         * When `delay` is larger than `2147483647` or less than `1` or `NaN`, the `delay`
         * will be set to `1`. Non-integer delays are truncated to an integer.
         *
         * If `callback` is not a function, a `TypeError` will be thrown.
         *
         * This method has a custom variant for promises that is available using
         * `timersPromises.setInterval()`.
         * @since v0.0.1
         * @param callback The function to call when the timer elapses.
         * @param delay The number of milliseconds to wait before calling the
         * `callback`. **Default:** `1`.
         * @param args Optional arguments to pass when the `callback` is called.
         * @returns for use with `clearInterval()`
         */
        function setInterval<TArgs extends any[]>(
            callback: (...args: TArgs) => void,
            delay?: number,
            ...args: TArgs
        ): NodeJS.Timeout;
        // Allow a single void-accepting argument to be optional in arguments lists.
        // Allows usage such as `new Promise(resolve => setTimeout(resolve, ms))` (#54258)
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        function setInterval(callback: (_: void) => void, delay?: number): NodeJS.Timeout;
        /**
         * Schedules execution of a one-time `callback` after `delay` milliseconds.
         *
         * The `callback` will likely not be invoked in precisely `delay` milliseconds.
         * Node.js makes no guarantees about the exact timing of when callbacks will fire,
         * nor of their ordering. The callback will be called as close as possible to the
         * time specified.
         *
         * When `delay` is larger than `2147483647` or less than `1` or `NaN`, the `delay`
         * will be set to `1`. Non-integer delays are truncated to an integer.
         *
         * If `callback` is not a function, a `TypeError` will be thrown.
         *
         * This method has a custom variant for promises that is available using
         * `timersPromises.setTimeout()`.
         * @since v0.0.1
         * @param callback The function to call when the timer elapses.
         * @param delay The number of milliseconds to wait before calling the
         * `callback`. **Default:** `1`.
         * @param args Optional arguments to pass when the `callback` is called.
         * @returns for use with `clearTimeout()`
         */
        function setTimeout<TArgs extends any[]>(
            callback: (...args: TArgs) => void,
            delay?: number,
            ...args: TArgs
        ): NodeJS.Timeout;
        // Allow a single void-accepting argument to be optional in arguments lists.
        // Allows usage such as `new Promise(resolve => setTimeout(resolve, ms))` (#54258)
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        function setTimeout(callback: (_: void) => void, delay?: number): NodeJS.Timeout;
        namespace setTimeout {
            import __promisify__ = promises.setTimeout;
            export { __promisify__ };
        }
        /**
         * Cancels an `Immediate` object created by `setImmediate()`.
         * @since v0.9.1
         * @param immediate An `Immediate` object as returned by `setImmediate()`.
         */
        function clearImmediate(immediate: NodeJS.Immediate | undefined): void;
        /**
         * Cancels a `Timeout` object created by `setInterval()`.
         * @since v0.0.1
         * @param timeout A `Timeout` object as returned by `setInterval()`
         * or the primitive of the `Timeout` object as a string or a number.
         */
        function clearInterval(timeout: NodeJS.Timeout | string | number | undefined): void;
        /**
         * Cancels a `Timeout` object created by `setTimeout()`.
         * @since v0.0.1
         * @param timeout A `Timeout` object as returned by `setTimeout()`
         * or the primitive of the `Timeout` object as a string or a number.
         */
        function clearTimeout(timeout: NodeJS.Timeout | string | number | undefined): void;
        /**
         * The `queueMicrotask()` method queues a microtask to invoke `callback`. If
         * `callback` throws an exception, the `process` object `'uncaughtException'`
         * event will be emitted.
         *
         * The microtask queue is managed by V8 and may be used in a similar manner to
         * the `process.nextTick()` queue, which is managed by Node.js. The
         * `process.nextTick()` queue is always processed before the microtask queue
         * within each turn of the Node.js event loop.
         * @since v11.0.0
         * @param callback Function to be queued.
         */
        function queueMicrotask(callback: () => void): void;
    }
    import clearImmediate = globalThis.clearImmediate;
    import clearInterval = globalThis.clearInterval;
    import clearTimeout = globalThis.clearTimeout;
    import setImmediate = globalThis.setImmediate;
    import setInterval = globalThis.setInterval;
    import setTimeout = globalThis.setTimeout;
    export { clearImmediate, clearInterval, clearTimeout, promises, setImmediate, setInterval, setTimeout };
}
declare module "node:timers" {
    export * from "timers";
}
