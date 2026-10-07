declare module "node:timers" {
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
    }
    import clearImmediate = globalThis.clearImmediate;
    import clearInterval = globalThis.clearInterval;
    import clearTimeout = globalThis.clearTimeout;
    import setImmediate = globalThis.setImmediate;
    import setInterval = globalThis.setInterval;
    import setTimeout = globalThis.setTimeout;
    export { clearImmediate, clearInterval, clearTimeout, promises, setImmediate, setInterval, setTimeout };
}
declare module "timers" {
    export * from "node:timers";
}
