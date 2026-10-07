type Logger = {
    trace: (message: string, ...arguments_: unknown[]) => void;
    debug: (message: string, ...arguments_: unknown[]) => void;
    info: (message: string, ...arguments_: unknown[]) => void;
    warn: (message: string, ...arguments_: unknown[]) => void;
    error: (message: string, ...arguments_: unknown[]) => void;
    fatal: (message: string, ...arguments_: unknown[]) => void;
};
type EventEmitterOptions = {
    /**
     * Logger instance for logging events.
     */
    eventLogger?: Logger;
    /**
     * Whether to throw an error when emit 'error' and there are no listeners. Default is false and only emits an error event.
     */
    throwOnEmitError?: boolean;
    /**
     * Whether to throw on 'error' when there are no listeners. This is the standard functionality in EventEmitter
     * @default true
     */
    throwOnEmptyListeners?: boolean;
};
type IEventEmitter = {
    /**
     * Registers a listener for the specified event.
     *
     * @param eventName - The name (or symbol) of the event to listen for.
     * @param listener - A callback function that will be invoked when the event is emitted.
     * @returns The current instance of EventEmitter for method chaining.
     *
     * @example
     * emitter.on('data', (message) => {
     *   console.log(message);
     * });
     */
    on(eventName: string | symbol, listener: (...arguments_: any[]) => void): IEventEmitter;
    /**
     * Alias for `on`. Registers a listener for the specified event.
     *
     * @param eventName - The name (or symbol) of the event to listen for.
     * @param listener - A callback function that will be invoked when the event is emitted.
     * @returns The current instance of EventEmitter for method chaining.
     */
    addListener(eventName: string | symbol, listener: (...arguments_: any[]) => void): IEventEmitter;
    /**
     * Registers a one-time listener for the specified event. The listener is removed after it is called once.
     *
     * @param eventName - The name (or symbol) of the event to listen for.
     * @param listener - A callback function that will be invoked once when the event is emitted.
     * @returns The current instance of EventEmitter for method chaining.
     *
     * @example
     * emitter.once('close', () => {
     *   console.log('The connection was closed.');
     * });
     */
    once(eventName: string | symbol, listener: (...arguments_: any[]) => void): IEventEmitter;
    /**
     * Removes a previously registered listener for the specified event.
     *
     * @param eventName - The name (or symbol) of the event to stop listening for.
     * @param listener - The specific callback function to remove.
     * @returns The current instance of EventEmitter for method chaining.
     *
     * @example
     * emitter.off('data', myListener);
     */
    off(eventName: string | symbol, listener: (...arguments_: any[]) => void): IEventEmitter;
    /**
     * Alias for `off`. Removes a previously registered listener for the specified event.
     *
     * @param eventName - The name (or symbol) of the event to stop listening for.
     * @param listener - The specific callback function to remove.
     * @returns The current instance of EventEmitter for method chaining.
     */
    removeListener(eventName: string | symbol, listener: (...arguments_: any[]) => void): IEventEmitter;
    /**
     * Emits the specified event, invoking all registered listeners with the provided arguments.
     *
     * @param eventName - The name (or symbol) of the event to emit.
     * @param args - Arguments passed to each listener.
     * @returns `true` if the event had listeners, `false` otherwise.
     *
     * @example
     * emitter.emit('data', 'Hello World');
     */
    emit(eventName: string | symbol, ...arguments_: any[]): boolean;
    /**
     * Returns the number of listeners registered for the specified event.
     *
     * @param eventName - The name (or symbol) of the event.
     * @returns The number of registered listeners.
     *
     * @example
     * const count = emitter.listenerCount('data');
     * console.log(count); // e.g., 2
     */
    listenerCount(eventName: string | symbol): number;
    /**
     * Removes all listeners for the specified event. If no event is specified, it removes all listeners for all events.
     *
     * @param eventName - (Optional) The name (or symbol) of the event.
     * @returns The current instance of EventEmitter for method chaining.
     *
     * @example
     * emitter.removeAllListeners('data');
     */
    removeAllListeners(eventName?: string | symbol): IEventEmitter;
    /**
     * Returns an array of event names for which listeners have been registered.
     *
     * @returns An array of event names (or symbols).
     *
     * @example
     * const events = emitter.eventNames();
     * console.log(events); // e.g., ['data', 'close']
     */
    eventNames(): Array<string | symbol>;
    /**
     * Returns an array of listeners registered for the specified event.
     *
     * @param eventName - The name (or symbol) of the event.
     * @returns An array of listener functions.
     *
     * @example
     * const listeners = emitter.listeners('data');
     * console.log(listeners.length); // e.g., 2
     */
    listeners(eventName: string | symbol): Array<(...arguments_: any[]) => void>;
    /**
     * Returns an array of raw listeners for the specified event. This includes listeners wrapped by internal mechanisms (e.g., once-only listeners).
     *
     * @param eventName - The name (or symbol) of the event.
     * @returns An array of raw listener functions.
     *
     * @example
     * const rawListeners = emitter.rawListeners('data');
     */
    rawListeners(eventName: string | symbol): Array<(...arguments_: any[]) => void>;
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     *
     * @param eventName - The name (or symbol) of the event to listen for.
     * @param listener - A callback function that will be invoked when the event is emitted.
     * @returns The current instance of EventEmitter for method chaining.
     *
     * @example
     * emitter.prependListener('data', (message) => {
     *   console.log('This will run first.');
     * });
     */
    prependListener(eventName: string | symbol, listener: (...arguments_: any[]) => void): IEventEmitter;
    /**
     * Adds a one-time listener to the beginning of the listeners array for the specified event.
     *
     * @param eventName - The name (or symbol) of the event to listen for.
     * @param listener - A callback function that will be invoked once when the event is emitted.
     * @returns The current instance of EventEmitter for method chaining.
     *
     * @example
     * emitter.prependOnceListener('data', (message) => {
     *   console.log('This will run first and only once.');
     * });
     */
    prependOnceListener(eventName: string | symbol, listener: (...arguments_: any[]) => void): IEventEmitter;
};
type EventListener = (...arguments_: any[]) => void;
type HookFn = (...arguments_: any[]) => Promise<void> | void;
interface IHook {
    /**
     * Unique identifier for the hook. Auto-generated via crypto.randomUUID() if not provided.
     */
    id?: string;
    /**
     * The event name for the hook
     */
    event: string;
    /**
     * The handler function for the hook
     */
    handler: HookFn;
}
type WaterfallHookResult = {
    /**
     * The hook function that produced this result
     */
    hook: WaterfallHookFn;
    /**
     * The value returned by the hook
     */
    result: any;
};
type WaterfallHookContext = {
    /**
     * The original arguments passed to the waterfall execution, before any hooks processed them.
     */
    initialArgs: any;
    /**
     * Array of results from previous hooks in execution order, each containing the hook and its result.
     * Empty for the first hook.
     */
    results: WaterfallHookResult[];
};
type WaterfallHookFn = (context: WaterfallHookContext) => Promise<any> | any;
interface IWaterfallHook extends IHook {
    /**
     * Array of hook functions that are called sequentially.
     * Each hook receives a WaterfallHookContext with initialArgs and results.
     */
    hooks: WaterfallHookFn[];
    /**
     * Adds a hook function to the end of the waterfall chain
     */
    addHook(hook: WaterfallHookFn): void;
    /**
     * Removes a specific hook function from the waterfall chain
     */
    removeHook(hook: WaterfallHookFn): boolean;
}
type OnHookOptions = {
    /**
     * Per-call override for useHookClone.
     * When true, hook objects are cloned before storing.
     * When false, the original IHook reference is stored directly.
     * When undefined, falls back to the instance-level useHookClone setting.
     * @type {boolean}
     */
    useHookClone?: boolean;
    /**
     * Controls where the hook is inserted in the handlers array.
     * - "Top": Insert at the beginning (index 0), before all existing handlers.
     * - "Bottom": Append to the end, after all existing handlers. This is the default.
     * - number: Insert at a specific index. Values are clamped to the array bounds.
     */
    position?: "Top" | "Bottom" | number;
};
type PrependHookOptions = Omit<OnHookOptions, "position">;
type HookifiedOptions = {
    /**
     * Whether an error should be thrown when a hook throws an error. Default is false and only emits an error event.
     */
    throwOnHookError?: boolean;
    /**
     * Whether to enforce that all hook names start with 'before' or 'after'. Default is false.
     * @type {boolean}
     * @default false
     */
    enforceBeforeAfter?: boolean;
    /**
     * Map of deprecated hook names to deprecation messages. When a deprecated hook is used, a warning will be emitted.
     * @type {Map<string, string>}
     * @default new Map()
     */
    deprecatedHooks?: Map<string, string>;
    /**
     * Whether to allow deprecated hooks to be registered and executed. Default is true.
     * @type {boolean}
     * @default true
     */
    allowDeprecated?: boolean;
    /**
     * Whether to clone hook objects before storing. Default is true.
     * When false, the original IHook reference is stored directly.
     * @type {boolean}
     * @default true
     */
    useHookClone?: boolean;
} & EventEmitterOptions;

declare class Eventified implements IEventEmitter {
    private readonly _eventListeners;
    private _maxListeners;
    private _eventLogger?;
    private _throwOnEmitError;
    private _throwOnEmptyListeners;
    constructor(options?: EventEmitterOptions);
    /**
     * Gets the event logger
     * @returns {Logger}
     */
    get eventLogger(): Logger | undefined;
    /**
     * Sets the event logger
     * @param {Logger} eventLogger
     */
    set eventLogger(eventLogger: Logger | undefined);
    /**
     * Gets whether an error should be thrown when an emit throws an error. Default is false and only emits an error event.
     * @returns {boolean}
     */
    get throwOnEmitError(): boolean;
    /**
     * Sets whether an error should be thrown when an emit throws an error. Default is false and only emits an error event.
     * @param {boolean} value
     */
    set throwOnEmitError(value: boolean);
    /**
     * Gets whether an error should be thrown when emitting 'error' event with no listeners. Default is false.
     * @returns {boolean}
     */
    get throwOnEmptyListeners(): boolean;
    /**
     * Sets whether an error should be thrown when emitting 'error' event with no listeners. Default is false.
     * @param {boolean} value
     */
    set throwOnEmptyListeners(value: boolean);
    /**
     * Adds a handler function for a specific event that will run only once
     * @param {string | symbol} eventName
     * @param {EventListener} listener
     * @returns {IEventEmitter} returns the instance of the class for chaining
     */
    once(eventName: string | symbol, listener: EventListener): IEventEmitter;
    /**
     * Gets the number of listeners for a specific event. If no event is provided, it returns the total number of listeners
     * @param {string} eventName The event name. Not required
     * @returns {number} The number of listeners
     */
    listenerCount(eventName?: string | symbol): number;
    /**
     * Gets an array of event names
     * @returns {Array<string | symbol>} An array of event names
     */
    eventNames(): Array<string | symbol>;
    /**
     * Gets an array of listeners for a specific event. If no event is provided, it returns all listeners
     * @param {string} [event] (Optional) The event name
     * @returns {EventListener[]} An array of listeners
     */
    rawListeners(event?: string | symbol): EventListener[];
    /**
     * Prepends a listener to the beginning of the listeners array for the specified event
     * @param {string | symbol} eventName
     * @param {EventListener} listener
     * @returns {IEventEmitter} returns the instance of the class for chaining
     */
    prependListener(eventName: string | symbol, listener: EventListener): IEventEmitter;
    /**
     * Prepends a one-time listener to the beginning of the listeners array for the specified event
     * @param {string | symbol} eventName
     * @param {EventListener} listener
     * @returns {IEventEmitter} returns the instance of the class for chaining
     */
    prependOnceListener(eventName: string | symbol, listener: EventListener): IEventEmitter;
    /**
     * Gets the maximum number of listeners that can be added for a single event
     * @returns {number} The maximum number of listeners
     */
    maxListeners(): number;
    /**
     * Adds a listener for a specific event. It is an alias for the on() method
     * @param {string | symbol} event
     * @param {EventListener} listener
     * @returns {IEventEmitter} returns the instance of the class for chaining
     */
    addListener(event: string | symbol, listener: EventListener): IEventEmitter;
    /**
     * Adds a listener for a specific event
     * @param {string | symbol} event
     * @param {EventListener} listener
     * @returns {IEventEmitter} returns the instance of the class for chaining
     */
    on(event: string | symbol, listener: EventListener): IEventEmitter;
    /**
     * Removes a listener for a specific event. It is an alias for the off() method
     * @param {string | symbol} event
     * @param {EventListener} listener
     * @returns {IEventEmitter} returns the instance of the class for chaining
     */
    removeListener(event: string, listener: EventListener): IEventEmitter;
    /**
     * Removes a listener for a specific event
     * @param {string | symbol} event
     * @param {EventListener} listener
     * @returns {IEventEmitter} returns the instance of the class for chaining
     */
    off(event: string | symbol, listener: EventListener): IEventEmitter;
    /**
     * Calls all listeners for a specific event
     * @param {string | symbol} event
     * @param arguments_ The arguments to pass to the listeners
     * @returns {boolean} Returns true if the event had listeners, false otherwise
     */
    emit(event: string | symbol, ...arguments_: any[]): boolean;
    /**
     * Gets all listeners for a specific event. If no event is provided, it returns all listeners
     * @param {string} [event] (Optional) The event name
     * @returns {EventListener[]} An array of listeners
     */
    listeners(event: string | symbol): EventListener[];
    /**
     * Removes all listeners for a specific event. If no event is provided, it removes all listeners
     * @param {string} [event] (Optional) The event name
     * @returns {IEventEmitter} returns the instance of the class for chaining
     */
    removeAllListeners(event?: string | symbol): IEventEmitter;
    /**
     * Sets the maximum number of listeners that can be added for a single event
     * @param {number} n The maximum number of listeners
     * @returns {void}
     */
    setMaxListeners(n: number): void;
    /**
     * Gets all listeners
     * @returns {EventListener[]} An array of listeners
     */
    getAllListeners(): EventListener[];
    /**
     * Sends a log message using the configured logger based on the event name
     * @param {string | symbol} eventName - The event name that determines the log level
     * @param {unknown} data - The data to log
     */
    private sendToEventLogger;
}

/**
 * Concrete implementation of the IHook interface.
 * Provides a convenient class-based way to create hook entries.
 */
declare class Hook implements IHook {
    id?: string;
    event: string;
    handler: HookFn;
    /**
     * Creates a new Hook instance
     * @param {string} event - The event name for the hook
     * @param {HookFn} handler - The handler function for the hook
     * @param {string} [id] - Optional unique identifier for the hook
     */
    constructor(event: string, handler: HookFn, id?: string);
}

/**
 * A WaterfallHook chains multiple hook functions sequentially,
 * where each hook receives a context with the previous result,
 * initial arguments, and accumulated results. After all hooks
 * have executed, the final handler receives the transformed result.
 * Implements IHook for compatibility with Hookified.onHook().
 */
declare class WaterfallHook implements IWaterfallHook {
    id?: string;
    event: string;
    handler: HookFn;
    hooks: WaterfallHookFn[];
    private readonly _finalHandler;
    /**
     * Creates a new WaterfallHook instance
     * @param {string} event - The event name for the hook
     * @param {WaterfallHookFn} finalHandler - The final handler function that receives the transformed result
     * @param {string} [id] - Optional unique identifier for the hook
     */
    constructor(event: string, finalHandler: WaterfallHookFn, id?: string);
    /**
     * Adds a hook function to the end of the waterfall chain
     * @param {WaterfallHookFn} hook - The hook function to add
     */
    addHook(hook: WaterfallHookFn): void;
    /**
     * Removes a specific hook function from the waterfall chain
     * @param {WaterfallHookFn} hook - The hook function to remove
     * @returns {boolean} true if the hook was found and removed
     */
    removeHook(hook: WaterfallHookFn): boolean;
}

declare class Hookified extends Eventified {
    private readonly _hooks;
    private _throwOnHookError;
    private _enforceBeforeAfter;
    private _deprecatedHooks;
    private _allowDeprecated;
    private _useHookClone;
    constructor(options?: HookifiedOptions);
    /**
     * Gets all hooks
     * @returns {Map<string, IHook[]>}
     */
    get hooks(): Map<string, IHook[]>;
    /**
     * Gets whether an error should be thrown when a hook throws an error. Default is false and only emits an error event.
     * @returns {boolean}
     */
    get throwOnHookError(): boolean;
    /**
     * Sets whether an error should be thrown when a hook throws an error. Default is false and only emits an error event.
     * @param {boolean} value
     */
    set throwOnHookError(value: boolean);
    /**
     * Gets whether to enforce that all hook names start with 'before' or 'after'. Default is false.
     * @returns {boolean}
     * @default false
     */
    get enforceBeforeAfter(): boolean;
    /**
     * Sets whether to enforce that all hook names start with 'before' or 'after'. Default is false.
     * @param {boolean} value
     */
    set enforceBeforeAfter(value: boolean);
    /**
     * Gets the map of deprecated hook names to deprecation messages.
     * @returns {Map<string, string>}
     */
    get deprecatedHooks(): Map<string, string>;
    /**
     * Sets the map of deprecated hook names to deprecation messages.
     * @param {Map<string, string>} value
     */
    set deprecatedHooks(value: Map<string, string>);
    /**
     * Gets whether deprecated hooks are allowed to be registered and executed. Default is true.
     * @returns {boolean}
     */
    get allowDeprecated(): boolean;
    /**
     * Sets whether deprecated hooks are allowed to be registered and executed. Default is true.
     * @param {boolean} value
     */
    set allowDeprecated(value: boolean);
    /**
     * Gets whether hook objects are cloned before storing. Default is true.
     * @returns {boolean}
     */
    get useHookClone(): boolean;
    /**
     * Sets whether hook objects are cloned before storing. Default is true.
     * When false, the original IHook reference is stored directly.
     * @param {boolean} value
     */
    set useHookClone(value: boolean);
    /**
     * Adds a handler function for a specific event.
     * Supports both object and legacy signatures:
     *   onHook({ event, handler }, options?)
     *   onHook(event, handler)
     * To register multiple hooks at once, use {@link onHooks}.
     * @param {IHook | string} hookOrEvent - the hook object or event name
     * @param {OnHookOptions | HookFn} [optionsOrHandler] - options (when using object form) or handler function (when using string form)
     * @returns {IHook | undefined} the stored hook, or undefined if blocked by deprecation
     */
    onHook(hook: IHook, options?: OnHookOptions): IHook | undefined;
    onHook(event: string, handler: HookFn): IHook | undefined;
    /**
     * Alias for onHook. This is provided for compatibility with other libraries that use the `addHook` method.
     * @param {string} event - the event name
     * @param {HookFn} handler - the handler function
     * @returns {void}
     */
    addHook(event: string, handler: HookFn): void;
    /**
     * Adds handler functions for specific events
     * @param {Array<IHook>} hooks
     * @param {OnHookOptions} [options] - optional per-call options (e.g., useHookClone override, position)
     * @returns {void}
     */
    onHooks(hooks: IHook[], options?: OnHookOptions): void;
    /**
     * Adds a handler function for a specific event that runs before all other handlers.
     * Equivalent to calling `onHook(hook, { position: "Top" })`.
     * @param {IHook} hook - the hook containing event name and handler
     * @param {PrependHookOptions} [options] - optional per-call options (e.g., useHookClone override)
     * @returns {IHook | undefined} the stored hook, or undefined if blocked by deprecation
     */
    prependHook(hook: IHook, options?: PrependHookOptions): IHook | undefined;
    /**
     * Adds a handler that only executes once for a specific event before all other handlers.
     * Equivalent to calling `onHook` with a self-removing wrapper and `{ position: "Top" }`.
     * @param {IHook} hook - the hook containing event name and handler
     * @param {PrependHookOptions} [options] - optional per-call options (e.g., useHookClone override)
     * @returns {IHook | undefined} the stored hook, or undefined if blocked by deprecation
     */
    prependOnceHook(hook: IHook, options?: PrependHookOptions): IHook | undefined;
    /**
     * Adds a handler that only executes once for a specific event
     * @param {IHook} hook - the hook containing event name and handler
     */
    onceHook(hook: IHook): void;
    /**
     * Removes a handler function for a specific event
     * @param {IHook} hook - the hook containing event name and handler to remove
     * @returns {IHook | undefined} the removed hook, or undefined if not found
     */
    removeHook(hook: IHook): IHook | undefined;
    /**
     * Removes multiple hook handlers
     * @param {Array<IHook>} hooks
     * @returns {IHook[]} the hooks that were successfully removed
     */
    removeHooks(hooks: IHook[]): IHook[];
    /**
     * Calls all handlers for a specific event
     * @param {string} event
     * @param {T[]} arguments_
     * @returns {Promise<void>}
     */
    hook<T>(event: string, ...arguments_: T[]): Promise<void>;
    /**
     * Calls all synchronous handlers for a specific event.
     * Async handlers (declared with `async` keyword) are silently skipped.
     *
     * Note: The `hook` method is preferred as it executes both sync and async functions.
     * Use `hookSync` only when you specifically need synchronous execution.
     * @param {string} event
     * @param {T[]} arguments_
     * @returns {void}
     */
    hookSync<T>(event: string, ...arguments_: T[]): void;
    /**
     * Prepends the word `before` to your hook. Example is event is `test`, the before hook is `before:test`.
     * @param {string} event - The event name
     * @param {T[]} arguments_ - The arguments to pass to the hook
     */
    beforeHook<T>(event: string, ...arguments_: T[]): Promise<void>;
    /**
     * Prepends the word `after` to your hook. Example is event is `test`, the after hook is `after:test`.
     * @param {string} event - The event name
     * @param {T[]} arguments_ - The arguments to pass to the hook
     */
    afterHook<T>(event: string, ...arguments_: T[]): Promise<void>;
    /**
     * Calls all handlers for a specific event. This is an alias for `hook` and is provided for
     * compatibility with other libraries that use the `callHook` method.
     * @param {string} event
     * @param {T[]} arguments_
     * @returns {Promise<void>}
     */
    callHook<T>(event: string, ...arguments_: T[]): Promise<void>;
    /**
     * Gets all hooks for a specific event
     * @param {string} event
     * @returns {IHook[]}
     */
    getHooks(event: string): IHook[] | undefined;
    /**
     * Gets a specific hook by id, searching across all events
     * @param {string} id - the hook id
     * @returns {IHook | undefined} the hook if found, or undefined
     */
    getHook(id: string): IHook | undefined;
    /**
     * Removes one or more hooks by id, searching across all events
     * @param {string | string[]} id - the hook id or array of hook ids to remove
     * @returns {IHook | IHook[] | undefined} the removed hook(s), or undefined/empty array if not found
     */
    removeHookById(id: string | string[]): IHook | IHook[] | undefined;
    /**
     * Removes all hooks
     * @returns {void}
     */
    clearHooks(): void;
    /**
     * Removes all hooks for a specific event and returns the removed hooks.
     * @param {string} event - The event name to remove hooks for.
     * @returns {IHook[]} the hooks that were removed
     */
    removeEventHooks(event: string): IHook[];
    /**
     * Validates hook event name if enforceBeforeAfter is enabled
     * @param {string} event - The event name to validate
     * @throws {Error} If enforceBeforeAfter is true and event doesn't start with 'before' or 'after'
     */
    private validateHookName;
    /**
     * Checks if a hook is deprecated and emits a warning if it is
     * @param {string} event - The event name to check
     * @returns {boolean} - Returns true if the hook should proceed, false if it should be blocked
     */
    private checkDeprecatedHook;
}

export { type EventEmitterOptions, type EventListener, Eventified, Hook, type HookFn, Hookified, type HookifiedOptions, type IEventEmitter, type IHook, type IWaterfallHook, type Logger, type OnHookOptions, type PrependHookOptions, WaterfallHook, type WaterfallHookContext, type WaterfallHookFn, type WaterfallHookResult };
