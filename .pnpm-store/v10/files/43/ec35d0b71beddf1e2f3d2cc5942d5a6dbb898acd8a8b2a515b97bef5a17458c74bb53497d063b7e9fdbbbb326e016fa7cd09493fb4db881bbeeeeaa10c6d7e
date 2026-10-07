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
  Hookified: () => Hookified
});
module.exports = __toCommonJS(index_exports);

// src/eventified.ts
var Eventified = class {
  _eventListeners;
  _maxListeners;
  _logger;
  _throwOnEmitError = false;
  _throwOnEmptyListeners = false;
  _errorEvent = "error";
  constructor(options) {
    this._eventListeners = /* @__PURE__ */ new Map();
    this._maxListeners = 100;
    this._logger = options?.logger;
    if (options?.throwOnEmitError !== void 0) {
      this._throwOnEmitError = options.throwOnEmitError;
    }
    if (options?.throwOnEmptyListeners !== void 0) {
      this._throwOnEmptyListeners = options.throwOnEmptyListeners;
    }
  }
  /**
   * Gets the logger
   * @returns {Logger}
   */
  get logger() {
    return this._logger;
  }
  /**
   * Sets the logger
   * @param {Logger} logger
   */
  set logger(logger) {
    this._logger = logger;
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
      return this.getAllListeners().length;
    }
    const listeners = this._eventListeners.get(eventName);
    return listeners ? listeners.length : 0;
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
    return this._eventListeners.get(event) ?? [];
  }
  /**
   * Prepends a listener to the beginning of the listeners array for the specified event
   * @param {string | symbol} eventName
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  prependListener(eventName, listener) {
    const listeners = this._eventListeners.get(eventName) ?? [];
    listeners.unshift(listener);
    this._eventListeners.set(eventName, listeners);
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
    if (!this._eventListeners.has(event)) {
      this._eventListeners.set(event, []);
    }
    const listeners = this._eventListeners.get(event);
    if (listeners) {
      if (listeners.length >= this._maxListeners) {
        console.warn(
          `MaxListenersExceededWarning: Possible event memory leak detected. ${listeners.length + 1} ${event} listeners added. Use setMaxListeners() to increase limit.`
        );
      }
      listeners.push(listener);
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
    const listeners = this._eventListeners.get(event) ?? [];
    const index = listeners.indexOf(listener);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
    if (listeners.length === 0) {
      this._eventListeners.delete(event);
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
    const listeners = this._eventListeners.get(event);
    if (listeners && listeners.length > 0) {
      for (const listener of listeners) {
        listener(...arguments_);
        result = true;
      }
    }
    if (event === this._errorEvent) {
      const error = arguments_[0] instanceof Error ? arguments_[0] : new Error(`${arguments_[0]}`);
      if (this._throwOnEmitError && !result) {
        throw error;
      } else {
        if (this.listeners(this._errorEvent).length === 0 && this._throwOnEmptyListeners === true) {
          throw error;
        }
      }
    }
    this.sendLog(event, arguments_);
    return result;
  }
  /**
   * Gets all listeners for a specific event. If no event is provided, it returns all listeners
   * @param {string} [event] (Optional) The event name
   * @returns {EventListener[]} An array of listeners
   */
  listeners(event) {
    return this._eventListeners.get(event) ?? [];
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
    this._maxListeners = n;
    for (const listeners of this._eventListeners.values()) {
      if (listeners.length > n) {
        listeners.splice(n);
      }
    }
  }
  /**
   * Gets all listeners
   * @returns {EventListener[]} An array of listeners
   */
  getAllListeners() {
    let result = [];
    for (const listeners of this._eventListeners.values()) {
      result = [...result, ...listeners];
    }
    return result;
  }
  /**
   * Sends a log message using the configured logger based on the event name
   * @param {string | symbol} eventName - The event name that determines the log level
   * @param {unknown} data - The data to log
   */
  sendLog(eventName, data) {
    if (!this._logger) {
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
        this._logger.error?.(message, { event: eventName, data });
        break;
      }
      case "warn": {
        this._logger.warn?.(message, { event: eventName, data });
        break;
      }
      case "trace": {
        this._logger.trace?.(message, { event: eventName, data });
        break;
      }
      case "debug": {
        this._logger.debug?.(message, { event: eventName, data });
        break;
      }
      case "fatal": {
        this._logger.fatal?.(message, { event: eventName, data });
        break;
      }
      default: {
        this._logger.info?.(message, { event: eventName, data });
        break;
      }
    }
  }
};

// src/index.ts
var Hookified = class extends Eventified {
  _hooks;
  _throwOnHookError = false;
  _enforceBeforeAfter = false;
  _deprecatedHooks;
  _allowDeprecated = true;
  constructor(options) {
    super({
      logger: options?.logger,
      throwOnEmitError: options?.throwOnEmitError,
      throwOnEmptyListeners: options?.throwOnEmptyListeners
    });
    this._hooks = /* @__PURE__ */ new Map();
    this._deprecatedHooks = options?.deprecatedHooks ? new Map(options.deprecatedHooks) : /* @__PURE__ */ new Map();
    if (options?.throwOnHookError !== void 0) {
      this._throwOnHookError = options.throwOnHookError;
    } else if (options?.throwHookErrors !== void 0) {
      this._throwOnHookError = options.throwHookErrors;
    }
    if (options?.enforceBeforeAfter !== void 0) {
      this._enforceBeforeAfter = options.enforceBeforeAfter;
    }
    if (options?.allowDeprecated !== void 0) {
      this._allowDeprecated = options.allowDeprecated;
    }
  }
  /**
   * Gets all hooks
   * @returns {Map<string, Hook[]>}
   */
  get hooks() {
    return this._hooks;
  }
  /**
   * Gets whether an error should be thrown when a hook throws an error. Default is false and only emits an error event.
   * @returns {boolean}
   * @deprecated - this will be deprecated in version 2. Please use throwOnHookError.
   */
  get throwHookErrors() {
    return this._throwOnHookError;
  }
  /**
   * Sets whether an error should be thrown when a hook throws an error. Default is false and only emits an error event.
   * @param {boolean} value
   * @deprecated - this will be deprecated in version 2. Please use throwOnHookError.
   */
  set throwHookErrors(value) {
    this._throwOnHookError = value;
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
  /**
   * Adds a handler function for a specific event
   * @param {string} event
   * @param {Hook} handler - this can be async or sync
   * @returns {void}
   */
  onHook(event, handler) {
    this.onHookEntry({ event, handler });
  }
  /**
   * Adds a handler function for a specific event
   * @param {HookEntry} hookEntry
   * @returns {void}
   */
  onHookEntry(hookEntry) {
    this.validateHookName(hookEntry.event);
    if (!this.checkDeprecatedHook(hookEntry.event)) {
      return;
    }
    const eventHandlers = this._hooks.get(hookEntry.event);
    if (eventHandlers) {
      eventHandlers.push(hookEntry.handler);
    } else {
      this._hooks.set(hookEntry.event, [hookEntry.handler]);
    }
  }
  /**
   * Alias for onHook. This is provided for compatibility with other libraries that use the `addHook` method.
   * @param {string} event
   * @param {Hook} handler - this can be async or sync
   * @returns {void}
   */
  addHook(event, handler) {
    this.onHookEntry({ event, handler });
  }
  /**
   * Adds a handler function for a specific event
   * @param {Array<HookEntry>} hooks
   * @returns {void}
   */
  onHooks(hooks) {
    for (const hook of hooks) {
      this.onHook(hook.event, hook.handler);
    }
  }
  /**
   * Adds a handler function for a specific event that runs before all other handlers
   * @param {string} event
   * @param {Hook} handler - this can be async or sync
   * @returns {void}
   */
  prependHook(event, handler) {
    this.validateHookName(event);
    if (!this.checkDeprecatedHook(event)) {
      return;
    }
    const eventHandlers = this._hooks.get(event);
    if (eventHandlers) {
      eventHandlers.unshift(handler);
    } else {
      this._hooks.set(event, [handler]);
    }
  }
  /**
   * Adds a handler that only executes once for a specific event before all other handlers
   * @param event
   * @param handler
   */
  prependOnceHook(event, handler) {
    this.validateHookName(event);
    if (!this.checkDeprecatedHook(event)) {
      return;
    }
    const hook = async (...arguments_) => {
      this.removeHook(event, hook);
      return handler(...arguments_);
    };
    this.prependHook(event, hook);
  }
  /**
   * Adds a handler that only executes once for a specific event
   * @param event
   * @param handler
   */
  onceHook(event, handler) {
    this.validateHookName(event);
    if (!this.checkDeprecatedHook(event)) {
      return;
    }
    const hook = async (...arguments_) => {
      this.removeHook(event, hook);
      return handler(...arguments_);
    };
    this.onHook(event, hook);
  }
  /**
   * Removes a handler function for a specific event
   * @param {string} event
   * @param {Hook} handler
   * @returns {void}
   */
  removeHook(event, handler) {
    this.validateHookName(event);
    if (!this.checkDeprecatedHook(event)) {
      return;
    }
    const eventHandlers = this._hooks.get(event);
    if (eventHandlers) {
      const index = eventHandlers.indexOf(handler);
      if (index !== -1) {
        eventHandlers.splice(index, 1);
      }
    }
  }
  /**
   * Removes all handlers for a specific event
   * @param {Array<HookEntry>} hooks
   * @returns {void}
   */
  removeHooks(hooks) {
    for (const hook of hooks) {
      this.removeHook(hook.event, hook.handler);
    }
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
      for (const handler of eventHandlers) {
        try {
          await handler(...arguments_);
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
      for (const handler of eventHandlers) {
        if (handler.constructor.name === "AsyncFunction") {
          continue;
        }
        try {
          handler(...arguments_);
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
   * @returns {Hook[]}
   */
  getHooks(event) {
    this.validateHookName(event);
    if (!this.checkDeprecatedHook(event)) {
      return void 0;
    }
    return this._hooks.get(event);
  }
  /**
   * Removes all hooks
   * @returns {void}
   */
  clearHooks() {
    this._hooks.clear();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Eventified,
  Hookified
});
/* v8 ignore next -- @preserve */
