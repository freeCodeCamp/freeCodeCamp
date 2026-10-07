/**
 * The `node:diagnostics_channel` module provides an API to create named channels
 * to report arbitrary message data for diagnostics purposes.
 *
 * It can be accessed using:
 *
 * ```js
 * import diagnostics_channel from 'node:diagnostics_channel';
 * ```
 *
 * It is intended that a module writer wanting to report diagnostics messages
 * will create one or many top-level channels to report messages through.
 * Channels may also be acquired at runtime but it is not encouraged
 * due to the additional overhead of doing so. Channels may be exported for
 * convenience, but as long as the name is known it can be acquired anywhere.
 *
 * If you intend for your module to produce diagnostics data for others to
 * consume it is recommended that you include documentation of what named
 * channels are used along with the shape of the message data. Channel names
 * should generally include the module name to avoid collisions with data from
 * other modules.
 * @since v15.1.0, v14.17.0
 * @see [source](https://github.com/nodejs/node/blob/v24.x/lib/diagnostics_channel.js)
 */
declare module "diagnostics_channel" {
    import { AsyncLocalStorage } from "node:async_hooks";
    /**
     * Check if there are active subscribers to the named channel. This is helpful if
     * the message you want to send might be expensive to prepare.
     *
     * This API is optional but helpful when trying to publish messages from very
     * performance-sensitive code.
     *
     * ```js
     * import diagnostics_channel from 'node:diagnostics_channel';
     *
     * if (diagnostics_channel.hasSubscribers('my-channel')) {
     *   // There are subscribers, prepare and publish message
     * }
     * ```
     * @since v15.1.0, v14.17.0
     * @param name The channel name
     * @return If there are active subscribers
     */
    function hasSubscribers(name: string | symbol): boolean;
    /**
     * This is the primary entry-point for anyone wanting to publish to a named
     * channel. It produces a channel object which is optimized to reduce overhead at
     * publish time as much as possible.
     *
     * ```js
     * import diagnostics_channel from 'node:diagnostics_channel';
     *
     * const channel = diagnostics_channel.channel('my-channel');
     * ```
     * @since v15.1.0, v14.17.0
     * @param name The channel name
     * @return The named channel object
     */
    function channel(name: string | symbol): Channel;
    type ChannelListener = (message: unknown, name: string | symbol) => void;
    /**
     * Register a message handler to subscribe to this channel. This message handler
     * will be run synchronously whenever a message is published to the channel. Any
     * errors thrown in the message handler will trigger an `'uncaughtException'`.
     *
     * ```js
     * import diagnostics_channel from 'node:diagnostics_channel';
     *
     * diagnostics_channel.subscribe('my-channel', (message, name) => {
     *   // Received data
     * });
     * ```
     * @since v18.7.0, v16.17.0
     * @param name The channel name
     * @param onMessage The handler to receive channel messages
     */
    function subscribe(name: string | symbol, onMessage: ChannelListener): void;
    /**
     * Remove a message handler previously registered to this channel with {@link subscribe}.
     *
     * ```js
     * import diagnostics_channel from 'node:diagnostics_channel';
     *
     * function onMessage(message, name) {
     *   // Received data
     * }
     *
     * diagnostics_channel.subscribe('my-channel', onMessage);
     *
     * diagnostics_channel.unsubscribe('my-channel', onMessage);
     * ```
     * @since v18.7.0, v16.17.0
     * @param name The channel name
     * @param onMessage The previous subscribed handler to remove
     * @return `true` if the handler was found, `false` otherwise.
     */
    function unsubscribe(name: string | symbol, onMessage: ChannelListener): boolean;
    /**
     * Creates a `TracingChannel` wrapper for the given `TracingChannel Channels`. If a name is given, the corresponding tracing
     * channels will be created in the form of `tracing:${name}:${eventType}` where `eventType` corresponds to the types of `TracingChannel Channels`.
     *
     * ```js
     * import diagnostics_channel from 'node:diagnostics_channel';
     *
     * const channelsByName = diagnostics_channel.tracingChannel('my-channel');
     *
     * // or...
     *
     * const channelsByCollection = diagnostics_channel.tracingChannel({
     *   start: diagnostics_channel.channel('tracing:my-channel:start'),
     *   end: diagnostics_channel.channel('tracing:my-channel:end'),
     *   asyncStart: diagnostics_channel.channel('tracing:my-channel:asyncStart'),
     *   asyncEnd: diagnostics_channel.channel('tracing:my-channel:asyncEnd'),
     *   error: diagnostics_channel.channel('tracing:my-channel:error'),
     * });
     * ```
     * @since v19.9.0
     * @experimental
     * @param nameOrChannels Channel name or object containing all the `TracingChannel Channels`
     * @return Collection of channels to trace with
     */
    function tracingChannel<
        StoreType = unknown,
        ContextType extends object = StoreType extends object ? StoreType : object,
    >(
        nameOrChannels: string | TracingChannelCollection<StoreType, ContextType>,
    ): TracingChannel<StoreType, ContextType>;
    /**
     * The class `Channel` represents an individual named channel within the data
     * pipeline. It is used to track subscribers and to publish messages when there
     * are subscribers present. It exists as a separate object to avoid channel
     * lookups at publish time, enabling very fast publish speeds and allowing
     * for heavy use while incurring very minimal cost. Channels are created with {@link channel}, constructing a channel directly
     * with `new Channel(name)` is not supported.
     * @since v15.1.0, v14.17.0
     */
    class Channel<StoreType = unknown, ContextType = StoreType> {
        readonly name: string | symbol;
        /**
         * Check if there are active subscribers to this channel. This is helpful if
         * the message you want to send might be expensive to prepare.
         *
         * This API is optional but helpful when trying to publish messages from very
         * performance-sensitive code.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * if (channel.hasSubscribers) {
         *   // There are subscribers, prepare and publish message
         * }
         * ```
         * @since v15.1.0, v14.17.0
         */
        readonly hasSubscribers: boolean;
        private constructor(name: string | symbol);
        /**
         * Publish a message to any subscribers to the channel. This will trigger
         * message handlers synchronously so they will execute within the same context.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * channel.publish({
         *   some: 'message',
         * });
         * ```
         * @since v15.1.0, v14.17.0
         * @param message The message to send to the channel subscribers
         */
        publish(message: unknown): void;
        /**
         * Register a message handler to subscribe to this channel. This message handler
         * will be run synchronously whenever a message is published to the channel. Any
         * errors thrown in the message handler will trigger an `'uncaughtException'`.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * channel.subscribe((message, name) => {
         *   // Received data
         * });
         * ```
         * @since v15.1.0, v14.17.0
         * @param onMessage The handler to receive channel messages
         */
        subscribe(onMessage: ChannelListener): void;
        /**
         * Remove a message handler previously registered to this channel with `channel.subscribe(onMessage)`.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * function onMessage(message, name) {
         *   // Received data
         * }
         *
         * channel.subscribe(onMessage);
         *
         * channel.unsubscribe(onMessage);
         * ```
         * @since v15.1.0, v14.17.0
         * @param onMessage The previous subscribed handler to remove
         * @return `true` if the handler was found, `false` otherwise.
         */
        unsubscribe(onMessage: ChannelListener): void;
        /**
         * When `channel.runStores(context, ...)` is called, the given context data
         * will be applied to any store bound to the channel. If the store has already been
         * bound the previous `transform` function will be replaced with the new one.
         * The `transform` function may be omitted to set the given context data as the
         * context directly.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         * import { AsyncLocalStorage } from 'node:async_hooks';
         *
         * const store = new AsyncLocalStorage();
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * channel.bindStore(store, (data) => {
         *   return { data };
         * });
         * ```
         * @since v19.9.0
         * @experimental
         * @param store The store to which to bind the context data
         * @param transform Transform context data before setting the store context
         */
        bindStore(store: AsyncLocalStorage<StoreType>, transform?: (context: ContextType) => StoreType): void;
        /**
         * Remove a message handler previously registered to this channel with `channel.bindStore(store)`.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         * import { AsyncLocalStorage } from 'node:async_hooks';
         *
         * const store = new AsyncLocalStorage();
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * channel.bindStore(store);
         * channel.unbindStore(store);
         * ```
         * @since v19.9.0
         * @experimental
         * @param store The store to unbind from the channel.
         * @return `true` if the store was found, `false` otherwise.
         */
        unbindStore(store: AsyncLocalStorage<StoreType>): boolean;
        /**
         * Applies the given data to any AsyncLocalStorage instances bound to the channel
         * for the duration of the given function, then publishes to the channel within
         * the scope of that data is applied to the stores.
         *
         * If a transform function was given to `channel.bindStore(store)` it will be
         * applied to transform the message data before it becomes the context value for
         * the store. The prior storage context is accessible from within the transform
         * function in cases where context linking is required.
         *
         * The context applied to the store should be accessible in any async code which
         * continues from execution which began during the given function, however
         * there are some situations in which `context loss` may occur.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         * import { AsyncLocalStorage } from 'node:async_hooks';
         *
         * const store = new AsyncLocalStorage();
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * channel.bindStore(store, (message) => {
         *   const parent = store.getStore();
         *   return new Span(message, parent);
         * });
         * channel.runStores({ some: 'message' }, () => {
         *   store.getStore(); // Span({ some: 'message' })
         * });
         * ```
         * @since v19.9.0
         * @experimental
         * @param context Message to send to subscribers and bind to stores
         * @param fn Handler to run within the entered storage context
         * @param thisArg The receiver to be used for the function call.
         * @param args Optional arguments to pass to the function.
         */
        runStores<ThisArg = any, Args extends any[] = any[], Result = any>(
            context: ContextType,
            fn: (this: ThisArg, ...args: Args) => Result,
            thisArg?: ThisArg,
            ...args: Args
        ): Result;
    }
    interface TracingChannelSubscribers<ContextType extends object> {
        start: (message: ContextType) => void;
        end: (
            message: ContextType & {
                error?: unknown;
                result?: unknown;
            },
        ) => void;
        asyncStart: (
            message: ContextType & {
                error?: unknown;
                result?: unknown;
            },
        ) => void;
        asyncEnd: (
            message: ContextType & {
                error?: unknown;
                result?: unknown;
            },
        ) => void;
        error: (
            message: ContextType & {
                error: unknown;
            },
        ) => void;
    }
    interface TracingChannelCollection<StoreType = unknown, ContextType = StoreType> {
        start: Channel<StoreType, ContextType>;
        end: Channel<StoreType, ContextType>;
        asyncStart: Channel<StoreType, ContextType>;
        asyncEnd: Channel<StoreType, ContextType>;
        error: Channel<StoreType, ContextType>;
    }
    /**
     * The class `TracingChannel` is a collection of `TracingChannel Channels` which
     * together express a single traceable action. It is used to formalize and
     * simplify the process of producing events for tracing application flow. {@link tracingChannel} is used to construct a `TracingChannel`. As with `Channel` it is recommended to create and reuse a
     * single `TracingChannel` at the top-level of the file rather than creating them
     * dynamically.
     * @since v19.9.0
     * @experimental
     */
    class TracingChannel<StoreType = unknown, ContextType extends object = {}> implements TracingChannelCollection {
        start: Channel<StoreType, ContextType>;
        end: Channel<StoreType, ContextType>;
        asyncStart: Channel<StoreType, ContextType>;
        asyncEnd: Channel<StoreType, ContextType>;
        error: Channel<StoreType, ContextType>;
        /**
         * Helper to subscribe a collection of functions to the corresponding channels.
         * This is the same as calling `channel.subscribe(onMessage)` on each channel
         * individually.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channels = diagnostics_channel.tracingChannel('my-channel');
         *
         * channels.subscribe({
         *   start(message) {
         *     // Handle start message
         *   },
         *   end(message) {
         *     // Handle end message
         *   },
         *   asyncStart(message) {
         *     // Handle asyncStart message
         *   },
         *   asyncEnd(message) {
         *     // Handle asyncEnd message
         *   },
         *   error(message) {
         *     // Handle error message
         *   },
         * });
         * ```
         * @since v19.9.0
         * @experimental
         * @param subscribers Set of `TracingChannel Channels` subscribers
         */
        subscribe(subscribers: TracingChannelSubscribers<ContextType>): void;
        /**
         * Helper to unsubscribe a collection of functions from the corresponding channels.
         * This is the same as calling `channel.unsubscribe(onMessage)` on each channel
         * individually.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channels = diagnostics_channel.tracingChannel('my-channel');
         *
         * channels.unsubscribe({
         *   start(message) {
         *     // Handle start message
         *   },
         *   end(message) {
         *     // Handle end message
         *   },
         *   asyncStart(message) {
         *     // Handle asyncStart message
         *   },
         *   asyncEnd(message) {
         *     // Handle asyncEnd message
         *   },
         *   error(message) {
         *     // Handle error message
         *   },
         * });
         * ```
         * @since v19.9.0
         * @experimental
         * @param subscribers Set of `TracingChannel Channels` subscribers
         * @return `true` if all handlers were successfully unsubscribed, and `false` otherwise.
         */
        unsubscribe(subscribers: TracingChannelSubscribers<ContextType>): void;
        /**
         * Trace a synchronous function call. This will always produce a `start event` and `end event` around the execution and may produce an `error event` if the given function throws an error.
         * This will run the given function using `channel.runStores(context, ...)` on the `start` channel which ensures all
         * events should have any bound stores set to match this trace context.
         *
         * To ensure only correct trace graphs are formed, events will only be published if subscribers are present prior to starting the trace. Subscriptions
         * which are added after the trace begins will not receive future events from that trace, only future traces will be seen.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channels = diagnostics_channel.tracingChannel('my-channel');
         *
         * channels.traceSync(() => {
         *   // Do something
         * }, {
         *   some: 'thing',
         * });
         * ```
         * @since v19.9.0
         * @experimental
         * @param fn Function to wrap a trace around
         * @param context Shared object to correlate events through
         * @param thisArg The receiver to be used for the function call
         * @param args Optional arguments to pass to the function
         * @return The return value of the given function
         */
        traceSync<ThisArg = any, Args extends any[] = any[], Result = any>(
            fn: (this: ThisArg, ...args: Args) => Result,
            context?: ContextType,
            thisArg?: ThisArg,
            ...args: Args
        ): Result;
        /**
         * Trace a promise-returning function call. This will always produce a `start event` and `end event` around the synchronous portion of the
         * function execution, and will produce an `asyncStart event` and `asyncEnd event` when a promise continuation is reached. It may also
         * produce an `error event` if the given function throws an error or the
         * returned promise rejects. This will run the given function using `channel.runStores(context, ...)` on the `start` channel which ensures all
         * events should have any bound stores set to match this trace context.
         *
         * To ensure only correct trace graphs are formed, events will only be published if subscribers are present prior to starting the trace. Subscriptions
         * which are added after the trace begins will not receive future events from that trace, only future traces will be seen.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channels = diagnostics_channel.tracingChannel('my-channel');
         *
         * channels.tracePromise(async () => {
         *   // Do something
         * }, {
         *   some: 'thing',
         * });
         * ```
         * @since v19.9.0
         * @experimental
         * @param fn Promise-returning function to wrap a trace around
         * @param context Shared object to correlate trace events through
         * @param thisArg The receiver to be used for the function call
         * @param args Optional arguments to pass to the function
         * @return Chained from promise returned by the given function
         */
        tracePromise<ThisArg = any, Args extends any[] = any[], Result = any>(
            fn: (this: ThisArg, ...args: Args) => Promise<Result>,
            context?: ContextType,
            thisArg?: ThisArg,
            ...args: Args
        ): Promise<Result>;
        /**
         * Trace a callback-receiving function call. This will always produce a `start event` and `end event` around the synchronous portion of the
         * function execution, and will produce a `asyncStart event` and `asyncEnd event` around the callback execution. It may also produce an `error event` if the given function throws an error or
         * the returned
         * promise rejects. This will run the given function using `channel.runStores(context, ...)` on the `start` channel which ensures all
         * events should have any bound stores set to match this trace context.
         *
         * The `position` will be -1 by default to indicate the final argument should
         * be used as the callback.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channels = diagnostics_channel.tracingChannel('my-channel');
         *
         * channels.traceCallback((arg1, callback) => {
         *   // Do something
         *   callback(null, 'result');
         * }, 1, {
         *   some: 'thing',
         * }, thisArg, arg1, callback);
         * ```
         *
         * The callback will also be run with `channel.runStores(context, ...)` which
         * enables context loss recovery in some cases.
         *
         * To ensure only correct trace graphs are formed, events will only be published if subscribers are present prior to starting the trace. Subscriptions
         * which are added after the trace begins will not receive future events from that trace, only future traces will be seen.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         * import { AsyncLocalStorage } from 'node:async_hooks';
         *
         * const channels = diagnostics_channel.tracingChannel('my-channel');
         * const myStore = new AsyncLocalStorage();
         *
         * // The start channel sets the initial store data to something
         * // and stores that store data value on the trace context object
         * channels.start.bindStore(myStore, (data) => {
         *   const span = new Span(data);
         *   data.span = span;
         *   return span;
         * });
         *
         * // Then asyncStart can restore from that data it stored previously
         * channels.asyncStart.bindStore(myStore, (data) => {
         *   return data.span;
         * });
         * ```
         * @since v19.9.0
         * @experimental
         * @param fn callback using function to wrap a trace around
         * @param position Zero-indexed argument position of expected callback
         * @param context Shared object to correlate trace events through
         * @param thisArg The receiver to be used for the function call
         * @param args Optional arguments to pass to the function
         * @return The return value of the given function
         */
        traceCallback<ThisArg = any, Args extends any[] = any[], Result = any>(
            fn: (this: ThisArg, ...args: Args) => Result,
            position?: number,
            context?: ContextType,
            thisArg?: ThisArg,
            ...args: Args
        ): Result;
        /**
         * `true` if any of the individual channels has a subscriber, `false` if not.
         *
         * This is a helper method available on a {@link TracingChannel} instance to check
         * if any of the [TracingChannel Channels](https://nodejs.org/api/diagnostics_channel.html#tracingchannel-channels) have subscribers.
         * A `true` is returned if any of them have at least one subscriber, a `false` is returned otherwise.
         *
         * ```js
         * const diagnostics_channel = require('node:diagnostics_channel');
         *
         * const channels = diagnostics_channel.tracingChannel('my-channel');
         *
         * if (channels.hasSubscribers) {
         *   // Do something
         * }
         * ```
         * @since v22.0.0, v20.13.0
         */
        readonly hasSubscribers: boolean;
    }
}
declare module "node:diagnostics_channel" {
    export * from "diagnostics_channel";
}
