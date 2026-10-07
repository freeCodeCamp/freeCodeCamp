/**
 * Much of the Node.js core API is built around an idiomatic asynchronous
 * event-driven architecture in which certain kinds of objects (called "emitters")
 * emit named events that cause `Function` objects ("listeners") to be called.
 *
 * For instance: a `net.Server` object emits an event each time a peer
 * connects to it; a `fs.ReadStream` emits an event when the file is opened;
 * a `stream` emits an event whenever data is available to be read.
 *
 * All objects that emit events are instances of the `EventEmitter` class. These
 * objects expose an `eventEmitter.on()` function that allows one or more
 * functions to be attached to named events emitted by the object. Typically,
 * event names are camel-cased strings but any valid JavaScript property key
 * can be used.
 *
 * When the `EventEmitter` object emits an event, all of the functions attached
 * to that specific event are called _synchronously_. Any values returned by the
 * called listeners are _ignored_ and discarded.
 *
 * The following example shows a simple `EventEmitter` instance with a single
 * listener. The `eventEmitter.on()` method is used to register listeners, while
 * the `eventEmitter.emit()` method is used to trigger the event.
 *
 * ```js
 * import { EventEmitter } from 'node:events';
 *
 * class MyEmitter extends EventEmitter {}
 *
 * const myEmitter = new MyEmitter();
 * myEmitter.on('event', () => {
 *   console.log('an event occurred!');
 * });
 * myEmitter.emit('event');
 * ```
 * @see [source](https://github.com/nodejs/node/blob/v24.x/lib/events.js)
 */
declare module "events" {
    import { AsyncResource, AsyncResourceOptions } from "node:async_hooks";
    interface EventEmitterOptions {
        /**
         * Enables automatic capturing of promise rejection.
         */
        captureRejections?: boolean | undefined;
    }
    interface StaticEventEmitterOptions {
        /**
         * Can be used to cancel awaiting events.
         */
        signal?: AbortSignal | undefined;
    }
    interface StaticEventEmitterIteratorOptions extends StaticEventEmitterOptions {
        /**
         * Names of events that will end the iteration.
         */
        close?: string[] | undefined;
        /**
         * The high watermark. The emitter is paused every time the size of events being buffered is higher than it.
         * Supported only on emitters implementing `pause()` and `resume()` methods.
         * @default Number.MAX_SAFE_INTEGER
         */
        highWaterMark?: number | undefined;
        /**
         * The low watermark. The emitter is resumed every time the size of events being buffered is lower than it.
         * Supported only on emitters implementing `pause()` and `resume()` methods.
         * @default 1
         */
        lowWaterMark?: number | undefined;
    }
    interface EventEmitter<T extends EventMap<T> = DefaultEventMap> extends NodeJS.EventEmitter<T> {}
    type EventMap<T> = Record<keyof T, any[]> | DefaultEventMap;
    type DefaultEventMap = [never];
    type AnyRest = [...args: any[]];
    type Args<K, T> = T extends DefaultEventMap ? AnyRest : (
        K extends keyof T ? T[K] : never
    );
    type Key<K, T> = T extends DefaultEventMap ? string | symbol : K | keyof T;
    type Key2<K, T> = T extends DefaultEventMap ? string | symbol : K & keyof T;
    type Listener<K, T, F> = T extends DefaultEventMap ? F : (
        K extends keyof T ? (
                T[K] extends unknown[] ? (...args: T[K]) => void : never
            )
            : never
    );
    type Listener1<K, T> = Listener<K, T, (...args: any[]) => void>;
    type Listener2<K, T> = Listener<K, T, Function>;

    /**
     * The `EventEmitter` class is defined and exposed by the `node:events` module:
     *
     * ```js
     * import { EventEmitter } from 'node:events';
     * ```
     *
     * All `EventEmitter`s emit the event `'newListener'` when new listeners are
     * added and `'removeListener'` when existing listeners are removed.
     *
     * It supports the following option:
     * @since v0.1.26
     */
    class EventEmitter<T extends EventMap<T> = DefaultEventMap> {
        constructor(options?: EventEmitterOptions);

        [EventEmitter.captureRejectionSymbol]?<K>(error: Error, event: Key<K, T>, ...args: Args<K, T>): void;

        /**
         * Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
         * event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
         * The `Promise` will resolve with an array of all the arguments emitted to the
         * given event.
         *
         * This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
         * semantics and does not listen to the `'error'` event.
         *
         * ```js
         * import { once, EventEmitter } from 'node:events';
         * import process from 'node:process';
         *
         * const ee = new EventEmitter();
         *
         * process.nextTick(() => {
         *   ee.emit('myevent', 42);
         * });
         *
         * const [value] = await once(ee, 'myevent');
         * console.log(value);
         *
         * const err = new Error('kaboom');
         * process.nextTick(() => {
         *   ee.emit('error', err);
         * });
         *
         * try {
         *   await once(ee, 'myevent');
         * } catch (err) {
         *   console.error('error happened', err);
         * }
         * ```
         *
         * The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
         * '`error'` event itself, then it is treated as any other kind of event without
         * special handling:
         *
         * ```js
         * import { EventEmitter, once } from 'node:events';
         *
         * const ee = new EventEmitter();
         *
         * once(ee, 'error')
         *   .then(([err]) => console.log('ok', err.message))
         *   .catch((err) => console.error('error', err.message));
         *
         * ee.emit('error', new Error('boom'));
         *
         * // Prints: ok boom
         * ```
         *
         * An `AbortSignal` can be used to cancel waiting for the event:
         *
         * ```js
         * import { EventEmitter, once } from 'node:events';
         *
         * const ee = new EventEmitter();
         * const ac = new AbortController();
         *
         * async function foo(emitter, event, signal) {
         *   try {
         *     await once(emitter, event, { signal });
         *     console.log('event emitted!');
         *   } catch (error) {
         *     if (error.name === 'AbortError') {
         *       console.error('Waiting for the event was canceled!');
         *     } else {
         *       console.error('There was an error', error.message);
         *     }
         *   }
         * }
         *
         * foo(ee, 'foo', ac.signal);
         * ac.abort(); // Abort waiting for the event
         * ee.emit('foo'); // Prints: Waiting for the event was canceled!
         * ```
         * @since v11.13.0, v10.16.0
         */
        static once(
            emitter: NodeJS.EventEmitter,
            eventName: string | symbol,
            options?: StaticEventEmitterOptions,
        ): Promise<any[]>;
        static once(emitter: EventTarget, eventName: string, options?: StaticEventEmitterOptions): Promise<any[]>;
        /**
         * ```js
         * import { on, EventEmitter } from 'node:events';
         * import process from 'node:process';
         *
         * const ee = new EventEmitter();
         *
         * // Emit later on
         * process.nextTick(() => {
         *   ee.emit('foo', 'bar');
         *   ee.emit('foo', 42);
         * });
         *
         * for await (const event of on(ee, 'foo')) {
         *   // The execution of this inner block is synchronous and it
         *   // processes one event at a time (even with await). Do not use
         *   // if concurrent execution is required.
         *   console.log(event); // prints ['bar'] [42]
         * }
         * // Unreachable here
         * ```
         *
         * Returns an `AsyncIterator` that iterates `eventName` events. It will throw
         * if the `EventEmitter` emits `'error'`. It removes all listeners when
         * exiting the loop. The `value` returned by each iteration is an array
         * composed of the emitted event arguments.
         *
         * An `AbortSignal` can be used to cancel waiting on events:
         *
         * ```js
         * import { on, EventEmitter } from 'node:events';
         * import process from 'node:process';
         *
         * const ac = new AbortController();
         *
         * (async () => {
         *   const ee = new EventEmitter();
         *
         *   // Emit later on
         *   process.nextTick(() => {
         *     ee.emit('foo', 'bar');
         *     ee.emit('foo', 42);
         *   });
         *
         *   for await (const event of on(ee, 'foo', { signal: ac.signal })) {
         *     // The execution of this inner block is synchronous and it
         *     // processes one event at a time (even with await). Do not use
         *     // if concurrent execution is required.
         *     console.log(event); // prints ['bar'] [42]
         *   }
         *   // Unreachable here
         * })();
         *
         * process.nextTick(() => ac.abort());
         * ```
         *
         * Use the `close` option to specify an array of event names that will end the iteration:
         *
         * ```js
         * import { on, EventEmitter } from 'node:events';
         * import process from 'node:process';
         *
         * const ee = new EventEmitter();
         *
         * // Emit later on
         * process.nextTick(() => {
         *   ee.emit('foo', 'bar');
         *   ee.emit('foo', 42);
         *   ee.emit('close');
         * });
         *
         * for await (const event of on(ee, 'foo', { close: ['close'] })) {
         *   console.log(event); // prints ['bar'] [42]
         * }
         * // the loop will exit after 'close' is emitted
         * console.log('done'); // prints 'done'
         * ```
         * @since v13.6.0, v12.16.0
         * @return An `AsyncIterator` that iterates `eventName` events emitted by the `emitter`
         */
        static on(
            emitter: NodeJS.EventEmitter,
            eventName: string | symbol,
            options?: StaticEventEmitterIteratorOptions,
        ): NodeJS.AsyncIterator<any[]>;
        static on(
            emitter: EventTarget,
            eventName: string,
            options?: StaticEventEmitterIteratorOptions,
        ): NodeJS.AsyncIterator<any[]>;
        /**
         * A class method that returns the number of listeners for the given `eventName` registered on the given `emitter`.
         *
         * ```js
         * import { EventEmitter, listenerCount } from 'node:events';
         *
         * const myEmitter = new EventEmitter();
         * myEmitter.on('event', () => {});
         * myEmitter.on('event', () => {});
         * console.log(listenerCount(myEmitter, 'event'));
         * // Prints: 2
         * ```
         * @since v0.9.12
         * @deprecated Since v3.2.0 - Use `listenerCount` instead.
         * @param emitter The emitter to query
         * @param eventName The event name
         */
        static listenerCount(emitter: NodeJS.EventEmitter, eventName: string | symbol): number;
        /**
         * Returns a copy of the array of listeners for the event named `eventName`.
         *
         * For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
         * the emitter.
         *
         * For `EventTarget`s this is the only way to get the event listeners for the
         * event target. This is useful for debugging and diagnostic purposes.
         *
         * ```js
         * import { getEventListeners, EventEmitter } from 'node:events';
         *
         * {
         *   const ee = new EventEmitter();
         *   const listener = () => console.log('Events are fun');
         *   ee.on('foo', listener);
         *   console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
         * }
         * {
         *   const et = new EventTarget();
         *   const listener = () => console.log('Events are fun');
         *   et.addEventListener('foo', listener);
         *   console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
         * }
         * ```
         * @since v15.2.0, v14.17.0
         */
        static getEventListeners(emitter: EventTarget | NodeJS.EventEmitter, name: string | symbol): Function[];
        /**
         * Returns the currently set max amount of listeners.
         *
         * For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
         * the emitter.
         *
         * For `EventTarget`s this is the only way to get the max event listeners for the
         * event target. If the number of event handlers on a single EventTarget exceeds
         * the max set, the EventTarget will print a warning.
         *
         * ```js
         * import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';
         *
         * {
         *   const ee = new EventEmitter();
         *   console.log(getMaxListeners(ee)); // 10
         *   setMaxListeners(11, ee);
         *   console.log(getMaxListeners(ee)); // 11
         * }
         * {
         *   const et = new EventTarget();
         *   console.log(getMaxListeners(et)); // 10
         *   setMaxListeners(11, et);
         *   console.log(getMaxListeners(et)); // 11
         * }
         * ```
         * @since v19.9.0
         */
        static getMaxListeners(emitter: EventTarget | NodeJS.EventEmitter): number;
        /**
         * ```js
         * import { setMaxListeners, EventEmitter } from 'node:events';
         *
         * const target = new EventTarget();
         * const emitter = new EventEmitter();
         *
         * setMaxListeners(5, target, emitter);
         * ```
         * @since v15.4.0
         * @param n A non-negative number. The maximum number of listeners per `EventTarget` event.
         * @param eventTargets Zero or more {EventTarget} or {EventEmitter} instances. If none are specified, `n` is set as the default max for all newly created {EventTarget} and {EventEmitter}
         * objects.
         */
        static setMaxListeners(n?: number, ...eventTargets: Array<EventTarget | NodeJS.EventEmitter>): void;
        /**
         * Listens once to the `abort` event on the provided `signal`.
         *
         * Listening to the `abort` event on abort signals is unsafe and may
         * lead to resource leaks since another third party with the signal can
         * call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
         * this since it would violate the web standard. Additionally, the original
         * API makes it easy to forget to remove listeners.
         *
         * This API allows safely using `AbortSignal`s in Node.js APIs by solving these
         * two issues by listening to the event such that `stopImmediatePropagation` does
         * not prevent the listener from running.
         *
         * Returns a disposable so that it may be unsubscribed from more easily.
         *
         * ```js
         * import { addAbortListener } from 'node:events';
         *
         * function example(signal) {
         *   let disposable;
         *   try {
         *     signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
         *     disposable = addAbortListener(signal, (e) => {
         *       // Do something when signal is aborted.
         *     });
         *   } finally {
         *     disposable?.[Symbol.dispose]();
         *   }
         * }
         * ```
         * @since v20.5.0
         * @return Disposable that removes the `abort` listener.
         */
        static addAbortListener(signal: AbortSignal, resource: (event: Event) => void): Disposable;
        /**
         * This symbol shall be used to install a listener for only monitoring `'error'` events. Listeners installed using this symbol are called before the regular `'error'` listeners are called.
         *
         * Installing a listener using this symbol does not change the behavior once an `'error'` event is emitted. Therefore, the process will still crash if no
         * regular `'error'` listener is installed.
         * @since v13.6.0, v12.17.0
         */
        static readonly errorMonitor: unique symbol;
        /**
         * Value: `Symbol.for('nodejs.rejection')`
         *
         * See how to write a custom `rejection handler`.
         * @since v13.4.0, v12.16.0
         */
        static readonly captureRejectionSymbol: unique symbol;
        /**
         * Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)
         *
         * Change the default `captureRejections` option on all new `EventEmitter` objects.
         * @since v13.4.0, v12.16.0
         */
        static captureRejections: boolean;
        /**
         * By default, a maximum of `10` listeners can be registered for any single
         * event. This limit can be changed for individual `EventEmitter` instances
         * using the `emitter.setMaxListeners(n)` method. To change the default
         * for _all_`EventEmitter` instances, the `events.defaultMaxListeners` property
         * can be used. If this value is not a positive number, a `RangeError` is thrown.
         *
         * Take caution when setting the `events.defaultMaxListeners` because the
         * change affects _all_ `EventEmitter` instances, including those created before
         * the change is made. However, calling `emitter.setMaxListeners(n)` still has
         * precedence over `events.defaultMaxListeners`.
         *
         * This is not a hard limit. The `EventEmitter` instance will allow
         * more listeners to be added but will output a trace warning to stderr indicating
         * that a "possible EventEmitter memory leak" has been detected. For any single
         * `EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()` methods can be used to
         * temporarily avoid this warning:
         *
         * ```js
         * import { EventEmitter } from 'node:events';
         * const emitter = new EventEmitter();
         * emitter.setMaxListeners(emitter.getMaxListeners() + 1);
         * emitter.once('event', () => {
         *   // do stuff
         *   emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
         * });
         * ```
         *
         * The `--trace-warnings` command-line flag can be used to display the
         * stack trace for such warnings.
         *
         * The emitted warning can be inspected with `process.on('warning')` and will
         * have the additional `emitter`, `type`, and `count` properties, referring to
         * the event emitter instance, the event's name and the number of attached
         * listeners, respectively.
         * Its `name` property is set to `'MaxListenersExceededWarning'`.
         * @since v0.11.2
         */
        static defaultMaxListeners: number;
    }
    import internal = require("node:events");
    namespace EventEmitter {
        // Should just be `export { EventEmitter }`, but that doesn't work in TypeScript 3.4
        export { internal as EventEmitter };
        export interface Abortable {
            /**
             * When provided the corresponding `AbortController` can be used to cancel an asynchronous action.
             */
            signal?: AbortSignal | undefined;
        }

        export interface EventEmitterReferencingAsyncResource extends AsyncResource {
            readonly eventEmitter: EventEmitterAsyncResource;
        }

        export interface EventEmitterAsyncResourceOptions extends AsyncResourceOptions, EventEmitterOptions {
            /**
             * The type of async event, this is required when instantiating `EventEmitterAsyncResource`
             * directly rather than as a child class.
             * @default new.target.name if instantiated as a child class.
             */
            name?: string | undefined;
        }

        /**
         * Integrates `EventEmitter` with `AsyncResource` for `EventEmitter`s that
         * require manual async tracking. Specifically, all events emitted by instances
         * of `events.EventEmitterAsyncResource` will run within its `async context`.
         *
         * ```js
         * import { EventEmitterAsyncResource, EventEmitter } from 'node:events';
         * import { notStrictEqual, strictEqual } from 'node:assert';
         * import { executionAsyncId, triggerAsyncId } from 'node:async_hooks';
         *
         * // Async tracking tooling will identify this as 'Q'.
         * const ee1 = new EventEmitterAsyncResource({ name: 'Q' });
         *
         * // 'foo' listeners will run in the EventEmitters async context.
         * ee1.on('foo', () => {
         *   strictEqual(executionAsyncId(), ee1.asyncId);
         *   strictEqual(triggerAsyncId(), ee1.triggerAsyncId);
         * });
         *
         * const ee2 = new EventEmitter();
         *
         * // 'foo' listeners on ordinary EventEmitters that do not track async
         * // context, however, run in the same async context as the emit().
         * ee2.on('foo', () => {
         *   notStrictEqual(executionAsyncId(), ee2.asyncId);
         *   notStrictEqual(triggerAsyncId(), ee2.triggerAsyncId);
         * });
         *
         * Promise.resolve().then(() => {
         *   ee1.emit('foo');
         *   ee2.emit('foo');
         * });
         * ```
         *
         * The `EventEmitterAsyncResource` class has the same methods and takes the
         * same options as `EventEmitter` and `AsyncResource` themselves.
         * @since v17.4.0, v16.14.0
         */
        export class EventEmitterAsyncResource extends EventEmitter {
            /**
             * @param options Only optional in child class.
             */
            constructor(options?: EventEmitterAsyncResourceOptions);
            /**
             * Call all `destroy` hooks. This should only ever be called once. An error will
             * be thrown if it is called more than once. This **must** be manually called. If
             * the resource is left to be collected by the GC then the `destroy` hooks will
             * never be called.
             */
            emitDestroy(): void;
            /**
             * The unique `asyncId` assigned to the resource.
             */
            readonly asyncId: number;
            /**
             * The same triggerAsyncId that is passed to the AsyncResource constructor.
             */
            readonly triggerAsyncId: number;
            /**
             * The returned `AsyncResource` object has an additional `eventEmitter` property
             * that provides a reference to this `EventEmitterAsyncResource`.
             */
            readonly asyncResource: EventEmitterReferencingAsyncResource;
        }
        /**
         * The `NodeEventTarget` is a Node.js-specific extension to `EventTarget`
         * that emulates a subset of the `EventEmitter` API.
         * @since v14.5.0
         */
        export interface NodeEventTarget extends EventTarget {
            /**
             * Node.js-specific extension to the `EventTarget` class that emulates the
             * equivalent `EventEmitter` API. The only difference between `addListener()` and
             * `addEventListener()` is that `addListener()` will return a reference to the
             * `EventTarget`.
             * @since v14.5.0
             */
            addListener(type: string, listener: (arg: any) => void): this;
            /**
             * Node.js-specific extension to the `EventTarget` class that dispatches the
             * `arg` to the list of handlers for `type`.
             * @since v15.2.0
             * @returns `true` if event listeners registered for the `type` exist,
             * otherwise `false`.
             */
            emit(type: string, arg: any): boolean;
            /**
             * Node.js-specific extension to the `EventTarget` class that returns an array
             * of event `type` names for which event listeners are registered.
             * @since 14.5.0
             */
            eventNames(): string[];
            /**
             * Node.js-specific extension to the `EventTarget` class that returns the number
             * of event listeners registered for the `type`.
             * @since v14.5.0
             */
            listenerCount(type: string): number;
            /**
             * Node.js-specific extension to the `EventTarget` class that sets the number
             * of max event listeners as `n`.
             * @since v14.5.0
             */
            setMaxListeners(n: number): void;
            /**
             * Node.js-specific extension to the `EventTarget` class that returns the number
             * of max event listeners.
             * @since v14.5.0
             */
            getMaxListeners(): number;
            /**
             * Node.js-specific alias for `eventTarget.removeEventListener()`.
             * @since v14.5.0
             */
            off(type: string, listener: (arg: any) => void, options?: EventListenerOptions): this;
            /**
             * Node.js-specific alias for `eventTarget.addEventListener()`.
             * @since v14.5.0
             */
            on(type: string, listener: (arg: any) => void): this;
            /**
             * Node.js-specific extension to the `EventTarget` class that adds a `once`
             * listener for the given event `type`. This is equivalent to calling `on`
             * with the `once` option set to `true`.
             * @since v14.5.0
             */
            once(type: string, listener: (arg: any) => void): this;
            /**
             * Node.js-specific extension to the `EventTarget` class. If `type` is specified,
             * removes all registered listeners for `type`, otherwise removes all registered
             * listeners.
             * @since v14.5.0
             */
            removeAllListeners(type?: string): this;
            /**
             * Node.js-specific extension to the `EventTarget` class that removes the
             * `listener` for the given `type`. The only difference between `removeListener()`
             * and `removeEventListener()` is that `removeListener()` will return a reference
             * to the `EventTarget`.
             * @since v14.5.0
             */
            removeListener(type: string, listener: (arg: any) => void, options?: EventListenerOptions): this;
        }
    }
    global {
        namespace NodeJS {
            interface EventEmitter<T extends EventMap<T> = DefaultEventMap> {
                [EventEmitter.captureRejectionSymbol]?<K>(error: Error, event: Key<K, T>, ...args: Args<K, T>): void;
                /**
                 * Alias for `emitter.on(eventName, listener)`.
                 * @since v0.1.26
                 */
                addListener<K>(eventName: Key<K, T>, listener: Listener1<K, T>): this;
                /**
                 * Adds the `listener` function to the end of the listeners array for the event
                 * named `eventName`. No checks are made to see if the `listener` has already
                 * been added. Multiple calls passing the same combination of `eventName` and
                 * `listener` will result in the `listener` being added, and called, multiple times.
                 *
                 * ```js
                 * server.on('connection', (stream) => {
                 *   console.log('someone connected!');
                 * });
                 * ```
                 *
                 * Returns a reference to the `EventEmitter`, so that calls can be chained.
                 *
                 * By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
                 * event listener to the beginning of the listeners array.
                 *
                 * ```js
                 * import { EventEmitter } from 'node:events';
                 * const myEE = new EventEmitter();
                 * myEE.on('foo', () => console.log('a'));
                 * myEE.prependListener('foo', () => console.log('b'));
                 * myEE.emit('foo');
                 * // Prints:
                 * //   b
                 * //   a
                 * ```
                 * @since v0.1.101
                 * @param eventName The name of the event.
                 * @param listener The callback function
                 */
                on<K>(eventName: Key<K, T>, listener: Listener1<K, T>): this;
                /**
                 * Adds a **one-time** `listener` function for the event named `eventName`. The
                 * next time `eventName` is triggered, this listener is removed and then invoked.
                 *
                 * ```js
                 * server.once('connection', (stream) => {
                 *   console.log('Ah, we have our first user!');
                 * });
                 * ```
                 *
                 * Returns a reference to the `EventEmitter`, so that calls can be chained.
                 *
                 * By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
                 * event listener to the beginning of the listeners array.
                 *
                 * ```js
                 * import { EventEmitter } from 'node:events';
                 * const myEE = new EventEmitter();
                 * myEE.once('foo', () => console.log('a'));
                 * myEE.prependOnceListener('foo', () => console.log('b'));
                 * myEE.emit('foo');
                 * // Prints:
                 * //   b
                 * //   a
                 * ```
                 * @since v0.3.0
                 * @param eventName The name of the event.
                 * @param listener The callback function
                 */
                once<K>(eventName: Key<K, T>, listener: Listener1<K, T>): this;
                /**
                 * Removes the specified `listener` from the listener array for the event named `eventName`.
                 *
                 * ```js
                 * const callback = (stream) => {
                 *   console.log('someone connected!');
                 * };
                 * server.on('connection', callback);
                 * // ...
                 * server.removeListener('connection', callback);
                 * ```
                 *
                 * `removeListener()` will remove, at most, one instance of a listener from the
                 * listener array. If any single listener has been added multiple times to the
                 * listener array for the specified `eventName`, then `removeListener()` must be
                 * called multiple times to remove each instance.
                 *
                 * Once an event is emitted, all listeners attached to it at the
                 * time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
                 * will not remove them from`emit()` in progress. Subsequent events behave as expected.
                 *
                 * ```js
                 * import { EventEmitter } from 'node:events';
                 * class MyEmitter extends EventEmitter {}
                 * const myEmitter = new MyEmitter();
                 *
                 * const callbackA = () => {
                 *   console.log('A');
                 *   myEmitter.removeListener('event', callbackB);
                 * };
                 *
                 * const callbackB = () => {
                 *   console.log('B');
                 * };
                 *
                 * myEmitter.on('event', callbackA);
                 *
                 * myEmitter.on('event', callbackB);
                 *
                 * // callbackA removes listener callbackB but it will still be called.
                 * // Internal listener array at time of emit [callbackA, callbackB]
                 * myEmitter.emit('event');
                 * // Prints:
                 * //   A
                 * //   B
                 *
                 * // callbackB is now removed.
                 * // Internal listener array [callbackA]
                 * myEmitter.emit('event');
                 * // Prints:
                 * //   A
                 * ```
                 *
                 * Because listeners are managed using an internal array, calling this will
                 * change the position indices of any listener registered _after_ the listener
                 * being removed. This will not impact the order in which listeners are called,
                 * but it means that any copies of the listener array as returned by
                 * the `emitter.listeners()` method will need to be recreated.
                 *
                 * When a single function has been added as a handler multiple times for a single
                 * event (as in the example below), `removeListener()` will remove the most
                 * recently added instance. In the example the `once('ping')` listener is removed:
                 *
                 * ```js
                 * import { EventEmitter } from 'node:events';
                 * const ee = new EventEmitter();
                 *
                 * function pong() {
                 *   console.log('pong');
                 * }
                 *
                 * ee.on('ping', pong);
                 * ee.once('ping', pong);
                 * ee.removeListener('ping', pong);
                 *
                 * ee.emit('ping');
                 * ee.emit('ping');
                 * ```
                 *
                 * Returns a reference to the `EventEmitter`, so that calls can be chained.
                 * @since v0.1.26
                 */
                removeListener<K>(eventName: Key<K, T>, listener: Listener1<K, T>): this;
                /**
                 * Alias for `emitter.removeListener()`.
                 * @since v10.0.0
                 */
                off<K>(eventName: Key<K, T>, listener: Listener1<K, T>): this;
                /**
                 * Removes all listeners, or those of the specified `eventName`.
                 *
                 * It is bad practice to remove listeners added elsewhere in the code,
                 * particularly when the `EventEmitter` instance was created by some other
                 * component or module (e.g. sockets or file streams).
                 *
                 * Returns a reference to the `EventEmitter`, so that calls can be chained.
                 * @since v0.1.26
                 */
                removeAllListeners(eventName?: Key<unknown, T>): this;
                /**
                 * By default `EventEmitter`s will print a warning if more than `10` listeners are
                 * added for a particular event. This is a useful default that helps finding
                 * memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
                 * modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.
                 *
                 * Returns a reference to the `EventEmitter`, so that calls can be chained.
                 * @since v0.3.5
                 */
                setMaxListeners(n: number): this;
                /**
                 * Returns the current max listener value for the `EventEmitter` which is either
                 * set by `emitter.setMaxListeners(n)` or defaults to {@link EventEmitter.defaultMaxListeners}.
                 * @since v1.0.0
                 */
                getMaxListeners(): number;
                /**
                 * Returns a copy of the array of listeners for the event named `eventName`.
                 *
                 * ```js
                 * server.on('connection', (stream) => {
                 *   console.log('someone connected!');
                 * });
                 * console.log(util.inspect(server.listeners('connection')));
                 * // Prints: [ [Function] ]
                 * ```
                 * @since v0.1.26
                 */
                listeners<K>(eventName: Key<K, T>): Array<Listener2<K, T>>;
                /**
                 * Returns a copy of the array of listeners for the event named `eventName`,
                 * including any wrappers (such as those created by `.once()`).
                 *
                 * ```js
                 * import { EventEmitter } from 'node:events';
                 * const emitter = new EventEmitter();
                 * emitter.once('log', () => console.log('log once'));
                 *
                 * // Returns a new Array with a function `onceWrapper` which has a property
                 * // `listener` which contains the original listener bound above
                 * const listeners = emitter.rawListeners('log');
                 * const logFnWrapper = listeners[0];
                 *
                 * // Logs "log once" to the console and does not unbind the `once` event
                 * logFnWrapper.listener();
                 *
                 * // Logs "log once" to the console and removes the listener
                 * logFnWrapper();
                 *
                 * emitter.on('log', () => console.log('log persistently'));
                 * // Will return a new Array with a single function bound by `.on()` above
                 * const newListeners = emitter.rawListeners('log');
                 *
                 * // Logs "log persistently" twice
                 * newListeners[0]();
                 * emitter.emit('log');
                 * ```
                 * @since v9.4.0
                 */
                rawListeners<K>(eventName: Key<K, T>): Array<Listener2<K, T>>;
                /**
                 * Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
                 * to each.
                 *
                 * Returns `true` if the event had listeners, `false` otherwise.
                 *
                 * ```js
                 * import { EventEmitter } from 'node:events';
                 * const myEmitter = new EventEmitter();
                 *
                 * // First listener
                 * myEmitter.on('event', function firstListener() {
                 *   console.log('Helloooo! first listener');
                 * });
                 * // Second listener
                 * myEmitter.on('event', function secondListener(arg1, arg2) {
                 *   console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
                 * });
                 * // Third listener
                 * myEmitter.on('event', function thirdListener(...args) {
                 *   const parameters = args.join(', ');
                 *   console.log(`event with parameters ${parameters} in third listener`);
                 * });
                 *
                 * console.log(myEmitter.listeners('event'));
                 *
                 * myEmitter.emit('event', 1, 2, 3, 4, 5);
                 *
                 * // Prints:
                 * // [
                 * //   [Function: firstListener],
                 * //   [Function: secondListener],
                 * //   [Function: thirdListener]
                 * // ]
                 * // Helloooo! first listener
                 * // event with parameters 1, 2 in second listener
                 * // event with parameters 1, 2, 3, 4, 5 in third listener
                 * ```
                 * @since v0.1.26
                 */
                emit<K>(eventName: Key<K, T>, ...args: Args<K, T>): boolean;
                /**
                 * Returns the number of listeners listening for the event named `eventName`.
                 * If `listener` is provided, it will return how many times the listener is found
                 * in the list of the listeners of the event.
                 * @since v3.2.0
                 * @param eventName The name of the event being listened for
                 * @param listener The event handler function
                 */
                listenerCount<K>(eventName: Key<K, T>, listener?: Listener2<K, T>): number;
                /**
                 * Adds the `listener` function to the _beginning_ of the listeners array for the
                 * event named `eventName`. No checks are made to see if the `listener` has
                 * already been added. Multiple calls passing the same combination of `eventName`
                 * and `listener` will result in the `listener` being added, and called, multiple times.
                 *
                 * ```js
                 * server.prependListener('connection', (stream) => {
                 *   console.log('someone connected!');
                 * });
                 * ```
                 *
                 * Returns a reference to the `EventEmitter`, so that calls can be chained.
                 * @since v6.0.0
                 * @param eventName The name of the event.
                 * @param listener The callback function
                 */
                prependListener<K>(eventName: Key<K, T>, listener: Listener1<K, T>): this;
                /**
                 * Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
                 * listener is removed, and then invoked.
                 *
                 * ```js
                 * server.prependOnceListener('connection', (stream) => {
                 *   console.log('Ah, we have our first user!');
                 * });
                 * ```
                 *
                 * Returns a reference to the `EventEmitter`, so that calls can be chained.
                 * @since v6.0.0
                 * @param eventName The name of the event.
                 * @param listener The callback function
                 */
                prependOnceListener<K>(eventName: Key<K, T>, listener: Listener1<K, T>): this;
                /**
                 * Returns an array listing the events for which the emitter has registered
                 * listeners. The values in the array are strings or `Symbol`s.
                 *
                 * ```js
                 * import { EventEmitter } from 'node:events';
                 *
                 * const myEE = new EventEmitter();
                 * myEE.on('foo', () => {});
                 * myEE.on('bar', () => {});
                 *
                 * const sym = Symbol('symbol');
                 * myEE.on(sym, () => {});
                 *
                 * console.log(myEE.eventNames());
                 * // Prints: [ 'foo', 'bar', Symbol(symbol) ]
                 * ```
                 * @since v6.0.0
                 */
                eventNames(): Array<(string | symbol) & Key2<unknown, T>>;
            }
        }
    }
    export = EventEmitter;
}
declare module "node:events" {
    import events = require("events");
    export = events;
}
