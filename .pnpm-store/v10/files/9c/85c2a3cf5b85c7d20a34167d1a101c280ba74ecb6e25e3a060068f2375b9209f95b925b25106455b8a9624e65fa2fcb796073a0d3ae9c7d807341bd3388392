"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Eventified: () => Eventified,
  Hook: () => Hook,
  Hookified: () => Hookified,
  WaterfallHook: () => WaterfallHook
});
module.exports = __toCommonJS(index_exports);

// src/eventified.ts
var ERROR_EVENT = "error";
var Eventified = class {
  _eventListeners;
  _maxListeners;
  _eventLogger;
  _throwOnEmitError = false;
  _throwOnEmptyListeners = true;
  constructor(options) {
    this._eventListeners = /* @__PURE__ */ new Map();
    this._maxListeners = 0;
    this._eventLogger = options?.eventLogger;
    if (options?.throwOnEmitError !== void 0) {
      this._throwOnEmitError = options.throwOnEmitError;
    }
    if (options?.throwOnEmptyListeners !== void 0) {
      this._throwOnEmptyListeners = options.throwOnEmptyListeners;
    }
  }
  /**
   * Gets the event logger
   * @returns {Logger}
   */
  get eventLogger() {
    return this._eventLogger;
  }
  /**
   * Sets the event logger
   * @param {Logger} eventLogger
   */
  set eventLogger(eventLogger) {
    this._eventLogger = eventLogger;
  }
  /**
   * Gets whether an error should be thrown when an emit throws an error. Default is false and only emits an error event.
   * @returns {boolean}
   */
  get throwOnEmitError() {
    return this._throwOnEmitError;
  }
  /**
   * Sets whether an error should be thrown when an emit throws an error. Default is false and only emits an error event.
   * @param {boolean} value
   */
  set throwOnEmitError(value) {
    this._throwOnEmitError = value;
  }
  /**
   * Gets whether an error should be thrown when emitting 'error' event with no listeners. Default is false.
   * @returns {boolean}
   */
  get throwOnEmptyListeners() {
    return this._throwOnEmptyListeners;
  }
  /**
   * Sets whether an error should be thrown when emitting 'error' event with no listeners. Default is false.
   * @param {boolean} value
   */
  set throwOnEmptyListeners(value) {
    this._throwOnEmptyListeners = value;
  }
  /**
   * Adds a handler function for a specific event that will run only once
   * @param {string | symbol} eventName
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  once(eventName, listener) {
    const onceListener = (...arguments_) => {
      this.off(eventName, onceListener);
      listener(...arguments_);
    };
    this.on(eventName, onceListener);
    return this;
  }
  /**
   * Gets the number of listeners for a specific event. If no event is provided, it returns the total number of listeners
   * @param {string} eventName The event name. Not required
   * @returns {number} The number of listeners
   */
  listenerCount(eventName) {
    if (eventName === void 0) {
      let count = 0;
      for (const entry2 of this._eventListeners.values()) {
        count += typeof entry2 === "function" ? 1 : entry2.length;
      }
      return count;
    }
    const entry = this._eventListeners.get(eventName);
    if (entry === void 0) {
      return 0;
    }
    return typeof entry === "function" ? 1 : entry.length;
  }
  /**
   * Gets an array of event names
   * @returns {Array<string | symbol>} An array of event names
   */
  eventNames() {
    return [...this._eventListeners.keys()];
  }
  /**
   * Gets an array of listeners for a specific event. If no event is provided, it returns all listeners
   * @param {string} [event] (Optional) The event name
   * @returns {EventListener[]} An array of listeners
   */
  rawListeners(event) {
    if (event === void 0) {
      return this.getAllListeners();
    }
    const entry = this._eventListeners.get(event);
    if (entry === void 0) {
      return [];
    }
    return typeof entry === "function" ? [entry] : entry;
  }
  /**
   * Prepends a listener to the beginning of the listeners array for the specified event
   * @param {string | symbol} eventName
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  prependListener(eventName, listener) {
    const existing = this._eventListeners.get(eventName);
    if (existing === void 0) {
      this._eventListeners.set(eventName, listener);
    } else if (typeof existing === "function") {
      this._eventListeners.set(eventName, [listener, existing]);
    } else {
      existing.unshift(listener);
    }
    return this;
  }
  /**
   * Prepends a one-time listener to the beginning of the listeners array for the specified event
   * @param {string | symbol} eventName
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  prependOnceListener(eventName, listener) {
    const onceListener = (...arguments_) => {
      this.off(eventName, onceListener);
      listener(...arguments_);
    };
    this.prependListener(eventName, onceListener);
    return this;
  }
  /**
   * Gets the maximum number of listeners that can be added for a single event
   * @returns {number} The maximum number of listeners
   */
  maxListeners() {
    return this._maxListeners;
  }
  /**
   * Adds a listener for a specific event. It is an alias for the on() method
   * @param {string | symbol} event
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  addListener(event, listener) {
    this.on(event, listener);
    return this;
  }
  /**
   * Adds a listener for a specific event
   * @param {string | symbol} event
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  on(event, listener) {
    const existing = this._eventListeners.get(event);
    if (existing === void 0) {
      this._eventListeners.set(event, listener);
      return this;
    }
    if (typeof existing === "function") {
      const arr = [existing, listener];
      this._eventListeners.set(event, arr);
      if (this._maxListeners > 0 && arr.length > this._maxListeners) {
        console.warn(
          `MaxListenersExceededWarning: Possible event memory leak detected. ${arr.length} ${event} listeners added. Use setMaxListeners() to increase limit.`
        );
      }
    } else {
      existing.push(listener);
      if (this._maxListeners > 0 && existing.length > this._maxListeners) {
        console.warn(
          `MaxListenersExceededWarning: Possible event memory leak detected. ${existing.length} ${event} listeners added. Use setMaxListeners() to increase limit.`
        );
      }
    }
    return this;
  }
  /**
   * Removes a listener for a specific event. It is an alias for the off() method
   * @param {string | symbol} event
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  removeListener(event, listener) {
    this.off(event, listener);
    return this;
  }
  /**
   * Removes a listener for a specific event
   * @param {string | symbol} event
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  off(event, listener) {
    const entry = this._eventListeners.get(event);
    if (entry === void 0) {
      return this;
    }
    if (typeof entry === "function") {
      if (entry === listener) {
        this._eventListeners.delete(event);
      }
      return this;
    }
    const index = entry.indexOf(listener);
    if (index !== -1) {
      if (entry.length === 2) {
        this._eventListeners.set(event, entry[1 - index]);
      } else if (entry.length === 1) {
        this._eventListeners.delete(event);
      } else {
        entry.splice(index, 1);
      }
    }
    return this;
  }
  /**
   * Calls all listeners for a specific event
   * @param {string | symbol} event
   * @param arguments_ The arguments to pass to the listeners
   * @returns {boolean} Returns true if the event had listeners, false otherwise
   */
  emit(event, ...arguments_) {
    let result = false;
    const entry = this._eventListeners.get(event);
    const argumentLength = arguments_.length;
    if (entry !== void 0) {
      if (typeof entry === "function") {
        if (argumentLength === 1) {
          entry(arguments_[0]);
        } else if (argumentLength === 2) {
          entry(arguments_[0], arguments_[1]);
        } else {
          entry(...arguments_);
        }
      } else {
        const len = entry.length;
        for (let i = 0; i < len; i++) {
          if (argumentLength === 1) {
            entry[i](arguments_[0]);
          } else if (argumentLength === 2) {
            entry[i](arguments_[0], arguments_[1]);
          } else {
            entry[i](...arguments_);
          }
        }
      }
      result = true;
    }
    if (this._eventLogger) {
      this.sendToEventLogger(event, arguments_);
    }
    if (!result && event === ERROR_EVENT) {
      const error = arguments_[0] instanceof Error ? arguments_[0] : new Error(`${arguments_[0]}`);
      if (this._throwOnEmitError || this._throwOnEmptyListeners) {
        throw error;
      }
    }
    return result;
  }
  /**
   * Gets all listeners for a specific event. If no event is provided, it returns all listeners
   * @param {string} [event] (Optional) The event name
   * @returns {EventListener[]} An array of listeners
   */
  listeners(event) {
    const entry = this._eventListeners.get(event);
    if (entry === void 0) {
      return [];
    }
    return typeof entry === "function" ? [entry] : entry;
  }
  /**
   * Removes all listeners for a specific event. If no event is provided, it removes all listeners
   * @param {string} [event] (Optional) The event name
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  removeAllListeners(event) {
    if (event !== void 0) {
      this._eventListeners.delete(event);
    } else {
      this._eventListeners.clear();
    }
    return this;
  }
  /**
   * Sets the maximum number of listeners that can be added for a single event
   * @param {number} n The maximum number of listeners
   * @returns {void}
   */
  setMaxListeners(n) {
    this._maxListeners = n < 0 ? 0 : n;
  }
  /**
   * Gets all listeners
   * @returns {EventListener[]} An array of listeners
   */
  getAllListeners() {
    const result = [];
    for (const entry of this._eventListeners.values()) {
      if (typeof entry === "function") {
        result.push(entry);
      } else {
        for (let i = 0; i < entry.length; i++) {
          result.push(entry[i]);
        }
      }
    }
    return result;
  }
  /**
   * Sends a log message using the configured logger based on the event name
   * @param {string | symbol} eventName - The event name that determines the log level
   * @param {unknown} data - The data to log
   */
  sendToEventLogger(eventName, data) {
    if (!this._eventLogger) {
      return;
    }
    let message;
    if (typeof data === "string") {
      message = data;
    } else if (Array.isArray(data) && data.length > 0 && data[0] instanceof Error) {
      message = data[0].message;
    } else if (data instanceof Error) {
      message = data.message;
    } else if (Array.isArray(data) && data.length > 0 && typeof data[0]?.message === "string") {
      message = data[0].message;
    } else {
      message = JSON.stringify(data);
    }
    switch (eventName) {
      case "error": {
        this._eventLogger.error?.(message, { event: eventName, data });
        break;
      }
      case "warn": {
        this._eventLogger.warn?.(message, { event: eventName, data });
        break;
      }
      case "trace": {
        this._eventLogger.trace?.(message, { event: eventName, data });
        break;
      }
      case "debug": {
        this._eventLogger.debug?.(message, { event: eventName, data });
        break;
      }
      case "fatal": {
        this._eventLogger.fatal?.(message, { event: eventName, data });
        break;
      }
      default: {
        this._eventLogger.info?.(message, { event: eventName, data });
        break;
      }
    }
  }
};

// src/hooks/hook.ts
var Hook = class {
  id;
  event;
  handler;
  /**
   * Creates a new Hook instance
   * @param {string} event - The event name for the hook
   * @param {HookFn} handler - The handler function for the hook
   * @param {string} [id] - Optional unique identifier for the hook
   */
  constructor(event, handler, id) {
    this.id = id;
    this.event = event;
    this.handler = handler;
  }
};

// src/hooks/waterfall-hook.ts
var WaterfallHook = class {
  id;
  event;
  handler;
  hooks;
  _finalHandler;
  /**
   * Creates a new WaterfallHook instance
   * @param {string} event - The event name for the hook
   * @param {WaterfallHookFn} finalHandler - The final handler function that receives the transformed result
   * @param {string} [id] - Optional unique identifier for the hook
   */
  constructor(event, finalHandler, id) {
    this.id = id;
    this.event = event;
    this.hooks = [];
    this._finalHandler = finalHandler;
    this.handler = async (...arguments_) => {
      const initialArgs = arguments_.length === 1 ? arguments_[0] : arguments_;
      const results = [];
      for (const hook of this.hooks) {
        const result = await hook({ initialArgs, results: [...results] });
        results.push({ hook, result });
      }
      await this._finalHandler({ initialArgs, results: [...results] });
    };
  }
  /**
   * Adds a hook function to the end of the waterfall chain
   * @param {WaterfallHookFn} hook - The hook function to add
   */
  addHook(hook) {
    this.hooks.push(hook);
  }
  /**
   * Removes a specific hook function from the waterfall chain
   * @param {WaterfallHookFn} hook - The hook function to remove
   * @returns {boolean} true if the hook was found and removed
   */
  removeHook(hook) {
    const index = this.hooks.indexOf(hook);
    if (index !== -1) {
      this.hooks.splice(index, 1);
      return true;
    }
    return false;
  }
};

// src/index.ts
var Hookified = class extends Eventified {
  _hooks;
  _throwOnHookError = false;
  _enforceBeforeAfter = false;
  _deprecatedHooks;
  _allowDeprecated = true;
  _useHookClone = true;
  constructor(options) {
    super({
      eventLogger: options?.eventLogger,
      throwOnEmitError: options?.throwOnEmitError,
      throwOnEmptyListeners: options?.throwOnEmptyListeners
    });
    this._hooks = /* @__PURE__ */ new Map();
    this._deprecatedHooks = options?.deprecatedHooks ? new Map(options.deprecatedHooks) : /* @__PURE__ */ new Map();
    if (options?.throwOnHookError !== void 0) {
      this._throwOnHookError = options.throwOnHookError;
    }
    if (options?.enforceBeforeAfter !== void 0) {
      this._enforceBeforeAfter = options.enforceBeforeAfter;
    }
    if (options?.allowDeprecated !== void 0) {
      this._allowDeprecated = options.allowDeprecated;
    }
    if (options?.useHookClone !== void 0) {
      this._useHookClone = options.useHookClone;
    }
  }
  /**
   * Gets all hooks
   * @returns {Map<string, IHook[]>}
   */
  get hooks() {
    return this._hooks;
  }
  /**
   * Gets whether an error should be thrown when a hook throws an error. Default is false and only emits an error event.
   * @returns {boolean}
   */
  get throwOnHookError() {
    return this._throwOnHookError;
  }
  /**
   * Sets whether an error should be thrown when a hook throws an error. Default is false and only emits an error event.
   * @param {boolean} value
   */
  set throwOnHookError(value) {
    this._throwOnHookError = value;
  }
  /**
   * Gets whether to enforce that all hook names start with 'before' or 'after'. Default is false.
   * @returns {boolean}
   * @default false
   */
  get enforceBeforeAfter() {
    return this._enforceBeforeAfter;
  }
  /**
   * Sets whether to enforce that all hook names start with 'before' or 'after'. Default is false.
   * @param {boolean} value
   */
  set enforceBeforeAfter(value) {
    this._enforceBeforeAfter = value;
  }
  /**
   * Gets the map of deprecated hook names to deprecation messages.
   * @returns {Map<string, string>}
   */
  get deprecatedHooks() {
    return this._deprecatedHooks;
  }
  /**
   * Sets the map of deprecated hook names to deprecation messages.
   * @param {Map<string, string>} value
   */
  set deprecatedHooks(value) {
    this._deprecatedHooks = value;
  }
  /**
   * Gets whether deprecated hooks are allowed to be registered and executed. Default is true.
   * @returns {boolean}
   */
  get allowDeprecated() {
    return this._allowDeprecated;
  }
  /**
   * Sets whether deprecated hooks are allowed to be registered and executed. Default is true.
   * @param {boolean} value
   */
  set allowDeprecated(value) {
    this._allowDeprecated = value;
  }
  /**
   * Gets whether hook objects are cloned before storing. Default is true.
   * @returns {boolean}
   */
  get useHookClone() {
    return this._useHookClone;
  }
  /**
   * Sets whether hook objects are cloned before storing. Default is true.
   * When false, the original IHook reference is stored directly.
   * @param {boolean} value
   */
  set useHookClone(value) {
    this._useHookClone = value;
  }
  onHook(hookOrEvent, optionsOrHandler) {
    let hook;
    let options;
    if (typeof hookOrEvent === "string") {
      if (typeof optionsOrHandler !== "function") {
        throw new TypeError(
          "When calling onHook(event, handler), the second argument must be a function"
        );
      }
      hook = { event: hookOrEvent, handler: optionsOrHandler };
      options = void 0;
    } else {
      hook = hookOrEvent;
      options = optionsOrHandler;
    }
    this.validateHookName(hook.event);
    if (!this.checkDeprecatedHook(hook.event)) {
      return void 0;
    }
    const shouldClone = options?.useHookClone ?? this._useHookClone;
    const entry = shouldClone ? { id: hook.id, event: hook.event, handler: hook.handler } : hook;
    entry.id = entry.id ?? crypto.randomUUID();
    const eventHandlers = this._hooks.get(hook.event);
    if (eventHandlers) {
      const existingIndex = eventHandlers.findIndex((h) => h.id === entry.id);
      if (existingIndex !== -1) {
        eventHandlers[existingIndex] = entry;
      } else {
        const position = options?.position ?? "Bottom";
        if (position === "Top") {
          eventHandlers.unshift(entry);
        } else if (position === "Bottom") {
          eventHandlers.push(entry);
        } else {
          const index = Math.max(0, Math.min(position, eventHandlers.length));
          eventHandlers.splice(index, 0, entry);
        }
      }
    } else {
      this._hooks.set(hook.event, [entry]);
    }
    return entry;
  }
  /**
   * Alias for onHook. This is provided for compatibility with other libraries that use the `addHook` method.
   * @param {string} event - the event name
   * @param {HookFn} handler - the handler function
   * @returns {void}
   */
  addHook(event, handler) {
    this.onHook({ event, handler });
  }
  /**
   * Adds handler functions for specific events
   * @param {Array<IHook>} hooks
   * @param {OnHookOptions} [options] - optional per-call options (e.g., useHookClone override, position)
   * @returns {void}
   */
  onHooks(hooks, options) {
    for (const hook of hooks) {
      this.onHook(hook, options);
    }
  }
  /**
   * Adds a handler function for a specific event that runs before all other handlers.
   * Equivalent to calling `onHook(hook, { position: "Top" })`.
   * @param {IHook} hook - the hook containing event name and handler
   * @param {PrependHookOptions} [options] - optional per-call options (e.g., useHookClone override)
   * @returns {IHook | undefined} the stored hook, or undefined if blocked by deprecation
   */
  prependHook(hook, options) {
    return this.onHook(hook, { ...options, position: "Top" });
  }
  /**
   * Adds a handler that only executes once for a specific event before all other handlers.
   * Equivalent to calling `onHook` with a self-removing wrapper and `{ position: "Top" }`.
   * @param {IHook} hook - the hook containing event name and handler
   * @param {PrependHookOptions} [options] - optional per-call options (e.g., useHookClone override)
   * @returns {IHook | undefined} the stored hook, or undefined if blocked by deprecation
   */
  prependOnceHook(hook, options) {
    const wrappedHandler = async (...arguments_) => {
      this.removeHook({ event: hook.event, handler: wrappedHandler });
      return hook.handler(...arguments_);
    };
    return this.onHook(
      { id: hook.id, event: hook.event, handler: wrappedHandler },
      { ...options, position: "Top" }
    );
  }
  /**
   * Adds a handler that only executes once for a specific event
   * @param {IHook} hook - the hook containing event name and handler
   */
  onceHook(hook) {
    this.validateHookName(hook.event);
    if (!this.checkDeprecatedHook(hook.event)) {
      return;
    }
    const wrappedHandler = async (...arguments_) => {
      this.removeHook({ event: hook.event, handler: wrappedHandler });
      return hook.handler(...arguments_);
    };
    this.onHook({ id: hook.id, event: hook.event, handler: wrappedHandler });
  }
  /**
   * Removes a handler function for a specific event
   * @param {IHook} hook - the hook containing event name and handler to remove
   * @returns {IHook | undefined} the removed hook, or undefined if not found
   */
  removeHook(hook) {
    this.validateHookName(hook.event);
    const eventHandlers = this._hooks.get(hook.event);
    if (eventHandlers) {
      const index = eventHandlers.findIndex((h) => h.handler === hook.handler);
      if (index !== -1) {
        eventHandlers.splice(index, 1);
        if (eventHandlers.length === 0) {
          this._hooks.delete(hook.event);
        }
        return { event: hook.event, handler: hook.handler };
      }
    }
    return void 0;
  }
  /**
   * Removes multiple hook handlers
   * @param {Array<IHook>} hooks
   * @returns {IHook[]} the hooks that were successfully removed
   */
  removeHooks(hooks) {
    const removed = [];
    for (const hook of hooks) {
      const result = this.removeHook(hook);
      if (result) {
        removed.push(result);
      }
    }
    return removed;
  }
  /**
   * Calls all handlers for a specific event
   * @param {string} event
   * @param {T[]} arguments_
   * @returns {Promise<void>}
   */
  async hook(event, ...arguments_) {
    this.validateHookName(event);
    if (!this.checkDeprecatedHook(event)) {
      return;
    }
    const eventHandlers = this._hooks.get(event);
    if (eventHandlers) {
      for (const hook of [...eventHandlers]) {
        try {
          await hook.handler(...arguments_);
        } catch (error) {
          const message = `${event}: ${error.message}`;
          this.emit("error", new Error(message));
          if (this._throwOnHookError) {
            throw new Error(message);
          }
        }
      }
    }
  }
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
  hookSync(event, ...arguments_) {
    this.validateHookName(event);
    if (!this.checkDeprecatedHook(event)) {
      return;
    }
    const eventHandlers = this._hooks.get(event);
    if (eventHandlers) {
      for (const hook of [...eventHandlers]) {
        if (hook.handler.constructor.name === "AsyncFunction") {
          continue;
        }
        try {
          hook.handler(...arguments_);
        } catch (error) {
          const message = `${event}: ${error.message}`;
          this.emit("error", new Error(message));
          if (this._throwOnHookError) {
            throw new Error(message);
          }
        }
      }
    }
  }
  /**
   * Prepends the word `before` to your hook. Example is event is `test`, the before hook is `before:test`.
   * @param {string} event - The event name
   * @param {T[]} arguments_ - The arguments to pass to the hook
   */
  async beforeHook(event, ...arguments_) {
    await this.hook(`before:${event}`, ...arguments_);
  }
  /**
   * Prepends the word `after` to your hook. Example is event is `test`, the after hook is `after:test`.
   * @param {string} event - The event name
   * @param {T[]} arguments_ - The arguments to pass to the hook
   */
  async afterHook(event, ...arguments_) {
    await this.hook(`after:${event}`, ...arguments_);
  }
  /**
   * Calls all handlers for a specific event. This is an alias for `hook` and is provided for
   * compatibility with other libraries that use the `callHook` method.
   * @param {string} event
   * @param {T[]} arguments_
   * @returns {Promise<void>}
   */
  async callHook(event, ...arguments_) {
    await this.hook(event, ...arguments_);
  }
  /**
   * Gets all hooks for a specific event
   * @param {string} event
   * @returns {IHook[]}
   */
  getHooks(event) {
    this.validateHookName(event);
    return this._hooks.get(event);
  }
  /**
   * Gets a specific hook by id, searching across all events
   * @param {string} id - the hook id
   * @returns {IHook | undefined} the hook if found, or undefined
   */
  getHook(id) {
    for (const eventHandlers of this._hooks.values()) {
      const found = eventHandlers.find((h) => h.id === id);
      if (found) {
        return found;
      }
    }
    return void 0;
  }
  /**
   * Removes one or more hooks by id, searching across all events
   * @param {string | string[]} id - the hook id or array of hook ids to remove
   * @returns {IHook | IHook[] | undefined} the removed hook(s), or undefined/empty array if not found
   */
  removeHookById(id) {
    if (Array.isArray(id)) {
      const removed = [];
      for (const singleId of id) {
        const result = this.removeHookById(singleId);
        if (result && !Array.isArray(result)) {
          removed.push(result);
        }
      }
      return removed;
    }
    for (const [event, eventHandlers] of this._hooks.entries()) {
      const index = eventHandlers.findIndex((h) => h.id === id);
      if (index !== -1) {
        const [removed] = eventHandlers.splice(index, 1);
        if (eventHandlers.length === 0) {
          this._hooks.delete(event);
        }
        return removed;
      }
    }
    return void 0;
  }
  /**
   * Removes all hooks
   * @returns {void}
   */
  clearHooks() {
    this._hooks.clear();
  }
  /**
   * Removes all hooks for a specific event and returns the removed hooks.
   * @param {string} event - The event name to remove hooks for.
   * @returns {IHook[]} the hooks that were removed
   */
  removeEventHooks(event) {
    this.validateHookName(event);
    const eventHandlers = this._hooks.get(event);
    if (eventHandlers) {
      const removed = [...eventHandlers];
      this._hooks.delete(event);
      return removed;
    }
    return [];
  }
  /**
   * Validates hook event name if enforceBeforeAfter is enabled
   * @param {string} event - The event name to validate
   * @throws {Error} If enforceBeforeAfter is true and event doesn't start with 'before' or 'after'
   */
  validateHookName(event) {
    if (this._enforceBeforeAfter) {
      const eventValue = event.trim().toLocaleLowerCase();
      if (!eventValue.startsWith("before") && !eventValue.startsWith("after")) {
        throw new Error(
          `Hook event "${event}" must start with "before" or "after" when enforceBeforeAfter is enabled`
        );
      }
    }
  }
  /**
   * Checks if a hook is deprecated and emits a warning if it is
   * @param {string} event - The event name to check
   * @returns {boolean} - Returns true if the hook should proceed, false if it should be blocked
   */
  checkDeprecatedHook(event) {
    if (this._deprecatedHooks.has(event)) {
      const message = this._deprecatedHooks.get(event);
      const warningMessage = `Hook "${event}" is deprecated${message ? `: ${message}` : ""}`;
      this.emit("warn", { hook: event, message: warningMessage });
      return this._allowDeprecated;
    }
    return true;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Eventified,
  Hook,
  Hookified,
  WaterfallHook
});
/* v8 ignore start -- @preserve: single-element arrays are stored as functions */
/* v8 ignore next 3 -- @preserve: guarded by caller */
/* v8 ignore next -- @preserve */
