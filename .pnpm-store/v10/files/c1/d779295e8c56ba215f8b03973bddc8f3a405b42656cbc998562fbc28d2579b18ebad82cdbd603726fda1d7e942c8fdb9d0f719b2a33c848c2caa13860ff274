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
     * Logger instance for logging errors.
     */
    logger?: Logger;
    /**
     * Whether to throw an error when emit 'error' and there are no listeners. Default is false and only emits an error event.
     */
    throwOnEmitError?: boolean;
    /**
     * Whether to throw on 'error' when there are no listeners. This is the standard functionality in EventEmitter
     * @default false - in v2 this will be set to true by default
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
type Hook = (...arguments_: any[]) => Promise<void> | void;
type HookEntry = {
    /**
     * The event name for the hook
     */
    event: string;
    /**
     * The handler function for the hook
     */
    handler: Hook;
};
type HookifiedOptions = {
    /**
     * Whether an error should be thrown when a hook throws an error. Default is false and only emits an error event.
     * @deprecated - this will be deprecated in version 2. Please use throwOnHookError.
     */
    throwHookErrors?: boolean;
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
} & EventEmitterOptions;

declare class Eventified implements IEventEmitter {
    private readonly _eventListeners;
    private _maxListeners;
    private _logger?;
    private _throwOnEmitError;
    private _throwOnEmptyListeners;
    private _errorEvent;
    constructor(options?: EventEmitterOptions);
    /**
     * Gets the logger
     * @returns {Logger}
     */
    get logger(): Logger | undefined;
    /**
     * Sets the logger
     * @param {Logger} logger
     */
    set logger(logger: Logger | undefined);
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
    private sendLog;
}

declare class Hookified extends Eventified {
    private readonly _hooks;
    private _throwOnHookError;
    private _enforceBeforeAfter;
    private _deprecatedHooks;
    private _allowDeprecated;
    constructor(options?: HookifiedOptions);
    /**
     * Gets all hooks
     * @returns {Map<string, Hook[]>}
     */
    get hooks(): Map<string, Hook[]>;
    /**
     * Gets whether an error should be thrown when a hook throws an error. Default is false and only emits an error event.
     * @returns {boolean}
     * @deprecated - this will be deprecated in version 2. Please use throwOnHookError.
     */
    get throwHookErrors(): boolean;
    /**
     * Sets whether an error should be thrown when a hook throws an error. Default is false and only emits an error event.
     * @param {boolean} value
     * @deprecated - this will be deprecated in version 2. Please use throwOnHookError.
     */
    set throwHookErrors(value: boolean);
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
    /**
     * Adds a handler function for a specific event
     * @param {string} event
     * @param {Hook} handler - this can be async or sync
     * @returns {void}
     */
    onHook(event: string, handler: Hook): void;
    /**
     * Adds a handler function for a specific event
     * @param {HookEntry} hookEntry
     * @returns {void}
     */
    onHookEntry(hookEntry: HookEntry): void;
    /**
     * Alias for onHook. This is provided for compatibility with other libraries that use the `addHook` method.
     * @param {string} event
     * @param {Hook} handler - this can be async or sync
     * @returns {void}
     */
    addHook(event: string, handler: Hook): void;
    /**
     * Adds a handler function for a specific event
     * @param {Array<HookEntry>} hooks
     * @returns {void}
     */
    onHooks(hooks: HookEntry[]): void;
    /**
     * Adds a handler function for a specific event that runs before all other handlers
     * @param {string} event
     * @param {Hook} handler - this can be async or sync
     * @returns {void}
     */
    prependHook(event: string, handler: Hook): void;
    /**
     * Adds a handler that only executes once for a specific event before all other handlers
     * @param event
     * @param handler
     */
    prependOnceHook(event: string, handler: Hook): void;
    /**
     * Adds a handler that only executes once for a specific event
     * @param event
     * @param handler
     */
    onceHook(event: string, handler: Hook): void;
    /**
     * Removes a handler function for a specific event
     * @param {string} event
     * @param {Hook} handler
     * @returns {void}
     */
    removeHook(event: string, handler: Hook): void;
    /**
     * Removes all handlers for a specific event
     * @param {Array<HookEntry>} hooks
     * @returns {void}
     */
    removeHooks(hooks: HookEntry[]): void;
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
     * @returns {Hook[]}
     */
    getHooks(event: string): Hook[] | undefined;
    /**
     * Removes all hooks
     * @returns {void}
     */
    clearHooks(): void;
}

export { type EventEmitterOptions, type EventListener, Eventified, type Hook, type HookEntry, Hookified, type HookifiedOptions, type IEventEmitter, type Logger };
