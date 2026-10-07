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

// src/browser/index.ts
var index_exports = {};
__export(index_exports, {
  SetupWorkerApi: () => SetupWorkerApi,
  setupWorker: () => setupWorker
});
module.exports = __toCommonJS(index_exports);

// node_modules/.pnpm/outvariant@1.4.3/node_modules/outvariant/lib/index.mjs
var POSITIONALS_EXP = /(%?)(%([sdijo]))/g;
function serializePositional(positional, flag) {
  switch (flag) {
    case "s":
      return positional;
    case "d":
    case "i":
      return Number(positional);
    case "j":
      return JSON.stringify(positional);
    case "o": {
      if (typeof positional === "string") {
        return positional;
      }
      const json = JSON.stringify(positional);
      if (json === "{}" || json === "[]" || /^\[object .+?\]$/.test(json)) {
        return positional;
      }
      return json;
    }
  }
}
function format(message, ...positionals) {
  if (positionals.length === 0) {
    return message;
  }
  let positionalIndex = 0;
  let formattedMessage = message.replace(
    POSITIONALS_EXP,
    (match, isEscaped, _, flag) => {
      const positional = positionals[positionalIndex];
      const value = serializePositional(positional, flag);
      if (!isEscaped) {
        positionalIndex++;
        return value;
      }
      return match;
    }
  );
  if (positionalIndex < positionals.length) {
    formattedMessage += ` ${positionals.slice(positionalIndex).join(" ")}`;
  }
  formattedMessage = formattedMessage.replace(/%{2,2}/g, "%");
  return formattedMessage;
}
var STACK_FRAMES_TO_IGNORE = 2;
function cleanErrorStack(error2) {
  if (!error2.stack) {
    return;
  }
  const nextStack = error2.stack.split("\n");
  nextStack.splice(1, STACK_FRAMES_TO_IGNORE);
  error2.stack = nextStack.join("\n");
}
var InvariantError = class extends Error {
  constructor(message, ...positionals) {
    super(message);
    this.message = message;
    this.name = "Invariant Violation";
    this.message = format(message, ...positionals);
    cleanErrorStack(this);
  }
};
var invariant = (predicate, message, ...positionals) => {
  if (!predicate) {
    throw new InvariantError(message, ...positionals);
  }
};
invariant.as = (ErrorConstructor, predicate, message, ...positionals) => {
  if (!predicate) {
    const formatMessage = positionals.length === 0 ? message : format(message, ...positionals);
    let error2;
    try {
      error2 = Reflect.construct(ErrorConstructor, [
        formatMessage
      ]);
    } catch (err) {
      error2 = ErrorConstructor(formatMessage);
    }
    throw error2;
  }
};

// node_modules/.pnpm/is-node-process@1.2.0/node_modules/is-node-process/lib/index.mjs
function isNodeProcess() {
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return true;
  }
  if (typeof process !== "undefined") {
    const type = process.type;
    if (type === "renderer" || type === "worker") {
      return false;
    }
    return !!(process.versions && process.versions.node);
  }
  return false;
}

// node_modules/.pnpm/@open-draft+logger@0.3.0/node_modules/@open-draft/logger/lib/index.mjs
var __defProp2 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var colors_exports = {};
__export2(colors_exports, {
  blue: () => blue,
  gray: () => gray,
  green: () => green,
  red: () => red,
  yellow: () => yellow
});
function yellow(text) {
  return `\x1B[33m${text}\x1B[0m`;
}
function blue(text) {
  return `\x1B[34m${text}\x1B[0m`;
}
function gray(text) {
  return `\x1B[90m${text}\x1B[0m`;
}
function red(text) {
  return `\x1B[31m${text}\x1B[0m`;
}
function green(text) {
  return `\x1B[32m${text}\x1B[0m`;
}
var IS_NODE = isNodeProcess();
var Logger = class {
  constructor(name) {
    this.name = name;
    this.prefix = `[${this.name}]`;
    const LOGGER_NAME = getVariable("DEBUG");
    const LOGGER_LEVEL = getVariable("LOG_LEVEL");
    const isLoggingEnabled = LOGGER_NAME === "1" || LOGGER_NAME === "true" || typeof LOGGER_NAME !== "undefined" && this.name.startsWith(LOGGER_NAME);
    if (isLoggingEnabled) {
      this.debug = isDefinedAndNotEquals(LOGGER_LEVEL, "debug") ? noop : this.debug;
      this.info = isDefinedAndNotEquals(LOGGER_LEVEL, "info") ? noop : this.info;
      this.success = isDefinedAndNotEquals(LOGGER_LEVEL, "success") ? noop : this.success;
      this.warning = isDefinedAndNotEquals(LOGGER_LEVEL, "warning") ? noop : this.warning;
      this.error = isDefinedAndNotEquals(LOGGER_LEVEL, "error") ? noop : this.error;
    } else {
      this.info = noop;
      this.success = noop;
      this.warning = noop;
      this.error = noop;
      this.only = noop;
    }
  }
  prefix;
  extend(domain) {
    return new Logger(`${this.name}:${domain}`);
  }
  /**
   * Print a debug message.
   * @example
   * logger.debug('no duplicates found, creating a document...')
   */
  debug(message, ...positionals) {
    this.logEntry({
      level: "debug",
      message: gray(message),
      positionals,
      prefix: this.prefix,
      colors: {
        prefix: "gray"
      }
    });
  }
  /**
   * Print an info message.
   * @example
   * logger.info('start parsing...')
   */
  info(message, ...positionals) {
    this.logEntry({
      level: "info",
      message,
      positionals,
      prefix: this.prefix,
      colors: {
        prefix: "blue"
      }
    });
    const performance2 = new PerformanceEntry();
    return (message2, ...positionals2) => {
      performance2.measure();
      this.logEntry({
        level: "info",
        message: `${message2} ${gray(`${performance2.deltaTime}ms`)}`,
        positionals: positionals2,
        prefix: this.prefix,
        colors: {
          prefix: "blue"
        }
      });
    };
  }
  /**
   * Print a success message.
   * @example
   * logger.success('successfully created document')
   */
  success(message, ...positionals) {
    this.logEntry({
      level: "info",
      message,
      positionals,
      prefix: `\u2714 ${this.prefix}`,
      colors: {
        timestamp: "green",
        prefix: "green"
      }
    });
  }
  /**
   * Print a warning.
   * @example
   * logger.warning('found legacy document format')
   */
  warning(message, ...positionals) {
    this.logEntry({
      level: "warning",
      message,
      positionals,
      prefix: `\u26A0 ${this.prefix}`,
      colors: {
        timestamp: "yellow",
        prefix: "yellow"
      }
    });
  }
  /**
   * Print an error message.
   * @example
   * logger.error('something went wrong')
   */
  error(message, ...positionals) {
    this.logEntry({
      level: "error",
      message,
      positionals,
      prefix: `\u2716 ${this.prefix}`,
      colors: {
        timestamp: "red",
        prefix: "red"
      }
    });
  }
  /**
   * Execute the given callback only when the logging is enabled.
   * This is skipped in its entirety and has no runtime cost otherwise.
   * This executes regardless of the log level.
   * @example
   * logger.only(() => {
   *   logger.info('additional info')
   * })
   */
  only(callback) {
    callback();
  }
  createEntry(level, message) {
    return {
      timestamp: /* @__PURE__ */ new Date(),
      level,
      message
    };
  }
  logEntry(args) {
    const {
      level,
      message,
      prefix,
      colors: customColors,
      positionals = []
    } = args;
    const entry = this.createEntry(level, message);
    const timestampColor = customColors?.timestamp || "gray";
    const prefixColor = customColors?.prefix || "gray";
    const colorize = {
      timestamp: colors_exports[timestampColor],
      prefix: colors_exports[prefixColor]
    };
    const write = this.getWriter(level);
    write(
      [colorize.timestamp(this.formatTimestamp(entry.timestamp))].concat(prefix != null ? colorize.prefix(prefix) : []).concat(serializeInput(message)).join(" "),
      ...positionals.map(serializeInput)
    );
  }
  formatTimestamp(timestamp) {
    return `${timestamp.toLocaleTimeString(
      "en-GB"
    )}:${timestamp.getMilliseconds()}`;
  }
  getWriter(level) {
    switch (level) {
      case "debug":
      case "success":
      case "info": {
        return log;
      }
      case "warning": {
        return warn;
      }
      case "error": {
        return error;
      }
    }
  }
};
var PerformanceEntry = class {
  startTime;
  endTime;
  deltaTime;
  constructor() {
    this.startTime = performance.now();
  }
  measure() {
    this.endTime = performance.now();
    const deltaTime = this.endTime - this.startTime;
    this.deltaTime = deltaTime.toFixed(2);
  }
};
var noop = () => void 0;
function log(message, ...positionals) {
  if (IS_NODE) {
    process.stdout.write(format(message, ...positionals) + "\n");
    return;
  }
  console.log(message, ...positionals);
}
function warn(message, ...positionals) {
  if (IS_NODE) {
    process.stderr.write(format(message, ...positionals) + "\n");
    return;
  }
  console.warn(message, ...positionals);
}
function error(message, ...positionals) {
  if (IS_NODE) {
    process.stderr.write(format(message, ...positionals) + "\n");
    return;
  }
  console.error(message, ...positionals);
}
function getVariable(variableName) {
  if (IS_NODE) {
    return process.env[variableName];
  }
  return globalThis[variableName]?.toString();
}
function isDefinedAndNotEquals(value, expected) {
  return value !== void 0 && value !== expected;
}
function serializeInput(message) {
  if (typeof message === "undefined") {
    return "undefined";
  }
  if (message === null) {
    return "null";
  }
  if (typeof message === "string") {
    return message;
  }
  if (typeof message === "object") {
    return JSON.stringify(message);
  }
  return message.toString();
}

// node_modules/.pnpm/strict-event-emitter@0.5.1/node_modules/strict-event-emitter/lib/index.mjs
var MemoryLeakError = class extends Error {
  constructor(emitter, type, count) {
    super(
      `Possible EventEmitter memory leak detected. ${count} ${type.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    this.emitter = emitter;
    this.type = type;
    this.count = count;
    this.name = "MaxListenersExceededWarning";
  }
};
var _Emitter = class {
  static listenerCount(emitter, eventName) {
    return emitter.listenerCount(eventName);
  }
  constructor() {
    this.events = /* @__PURE__ */ new Map();
    this.maxListeners = _Emitter.defaultMaxListeners;
    this.hasWarnedAboutPotentialMemoryLeak = false;
  }
  _emitInternalEvent(internalEventName, eventName, listener) {
    this.emit(
      internalEventName,
      ...[eventName, listener]
    );
  }
  _getListeners(eventName) {
    return Array.prototype.concat.apply([], this.events.get(eventName)) || [];
  }
  _removeListener(listeners, listener) {
    const index = listeners.indexOf(listener);
    if (index > -1) {
      listeners.splice(index, 1);
    }
    return [];
  }
  _wrapOnceListener(eventName, listener) {
    const onceListener = (...data) => {
      this.removeListener(eventName, onceListener);
      return listener.apply(this, data);
    };
    Object.defineProperty(onceListener, "name", { value: listener.name });
    return onceListener;
  }
  setMaxListeners(maxListeners) {
    this.maxListeners = maxListeners;
    return this;
  }
  /**
   * Returns the current max listener value for the `Emitter` which is
   * either set by `emitter.setMaxListeners(n)` or defaults to
   * `Emitter.defaultMaxListeners`.
   */
  getMaxListeners() {
    return this.maxListeners;
  }
  /**
   * Returns an array listing the events for which the emitter has registered listeners.
   * The values in the array will be strings or Symbols.
   */
  eventNames() {
    return Array.from(this.events.keys());
  }
  /**
   * Synchronously calls each of the listeners registered for the event named `eventName`,
   * in the order they were registered, passing the supplied arguments to each.
   * Returns `true` if the event has listeners, `false` otherwise.
   *
   * @example
   * const emitter = new Emitter<{ hello: [string] }>()
   * emitter.emit('hello', 'John')
   */
  emit(eventName, ...data) {
    const listeners = this._getListeners(eventName);
    listeners.forEach((listener) => {
      listener.apply(this, data);
    });
    return listeners.length > 0;
  }
  addListener(eventName, listener) {
    this._emitInternalEvent("newListener", eventName, listener);
    const nextListeners = this._getListeners(eventName).concat(listener);
    this.events.set(eventName, nextListeners);
    if (this.maxListeners > 0 && this.listenerCount(eventName) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
      this.hasWarnedAboutPotentialMemoryLeak = true;
      const memoryLeakWarning = new MemoryLeakError(
        this,
        eventName,
        this.listenerCount(eventName)
      );
      console.warn(memoryLeakWarning);
    }
    return this;
  }
  on(eventName, listener) {
    return this.addListener(eventName, listener);
  }
  once(eventName, listener) {
    return this.addListener(
      eventName,
      this._wrapOnceListener(eventName, listener)
    );
  }
  prependListener(eventName, listener) {
    const listeners = this._getListeners(eventName);
    if (listeners.length > 0) {
      const nextListeners = [listener].concat(listeners);
      this.events.set(eventName, nextListeners);
    } else {
      this.events.set(eventName, listeners.concat(listener));
    }
    return this;
  }
  prependOnceListener(eventName, listener) {
    return this.prependListener(
      eventName,
      this._wrapOnceListener(eventName, listener)
    );
  }
  removeListener(eventName, listener) {
    const listeners = this._getListeners(eventName);
    if (listeners.length > 0) {
      this._removeListener(listeners, listener);
      this.events.set(eventName, listeners);
      this._emitInternalEvent("removeListener", eventName, listener);
    }
    return this;
  }
  /**
   * Alias for `emitter.removeListener()`.
   *
   * @example
   * emitter.off('hello', listener)
   */
  off(eventName, listener) {
    return this.removeListener(eventName, listener);
  }
  removeAllListeners(eventName) {
    if (eventName) {
      this.events.delete(eventName);
    } else {
      this.events.clear();
    }
    return this;
  }
  /**
   * Returns a copy of the array of listeners for the event named `eventName`.
   */
  listeners(eventName) {
    return Array.from(this._getListeners(eventName));
  }
  /**
   * Returns the number of listeners listening to the event named `eventName`.
   */
  listenerCount(eventName) {
    return this._getListeners(eventName).length;
  }
  rawListeners(eventName) {
    return this.listeners(eventName);
  }
};
var Emitter = _Emitter;
Emitter.defaultMaxListeners = 10;

// node_modules/.pnpm/@mswjs+interceptors@0.41.3/node_modules/@mswjs/interceptors/lib/browser/createRequestId-DQcIlohW.mjs
var INTERNAL_REQUEST_ID_HEADER_NAME = "x-interceptors-internal-request-id";
function getGlobalSymbol(symbol) {
  return globalThis[symbol] || void 0;
}
function setGlobalSymbol(symbol, value) {
  globalThis[symbol] = value;
}
function deleteGlobalSymbol(symbol) {
  delete globalThis[symbol];
}
var InterceptorReadyState = /* @__PURE__ */ (function(InterceptorReadyState$1) {
  InterceptorReadyState$1["INACTIVE"] = "INACTIVE";
  InterceptorReadyState$1["APPLYING"] = "APPLYING";
  InterceptorReadyState$1["APPLIED"] = "APPLIED";
  InterceptorReadyState$1["DISPOSING"] = "DISPOSING";
  InterceptorReadyState$1["DISPOSED"] = "DISPOSED";
  return InterceptorReadyState$1;
})({});
var Interceptor = class {
  constructor(symbol) {
    this.symbol = symbol;
    this.readyState = InterceptorReadyState.INACTIVE;
    this.emitter = new Emitter();
    this.subscriptions = [];
    this.logger = new Logger(symbol.description);
    this.emitter.setMaxListeners(0);
    this.logger.info("constructing the interceptor...");
  }
  /**
  * Determine if this interceptor can be applied
  * in the current environment.
  */
  checkEnvironment() {
    return true;
  }
  /**
  * Apply this interceptor to the current process.
  * Returns an already running interceptor instance if it's present.
  */
  apply() {
    const logger = this.logger.extend("apply");
    logger.info("applying the interceptor...");
    if (this.readyState === InterceptorReadyState.APPLIED) {
      logger.info("intercepted already applied!");
      return;
    }
    if (!this.checkEnvironment()) {
      logger.info("the interceptor cannot be applied in this environment!");
      return;
    }
    this.readyState = InterceptorReadyState.APPLYING;
    const runningInstance = this.getInstance();
    if (runningInstance) {
      logger.info("found a running instance, reusing...");
      this.on = (event, listener) => {
        logger.info('proxying the "%s" listener', event);
        runningInstance.emitter.addListener(event, listener);
        this.subscriptions.push(() => {
          runningInstance.emitter.removeListener(event, listener);
          logger.info('removed proxied "%s" listener!', event);
        });
        return this;
      };
      this.readyState = InterceptorReadyState.APPLIED;
      return;
    }
    logger.info("no running instance found, setting up a new instance...");
    this.setup();
    this.setInstance();
    this.readyState = InterceptorReadyState.APPLIED;
  }
  /**
  * Setup the module augments and stubs necessary for this interceptor.
  * This method is not run if there's a running interceptor instance
  * to prevent instantiating an interceptor multiple times.
  */
  setup() {
  }
  /**
  * Listen to the interceptor's public events.
  */
  on(event, listener) {
    const logger = this.logger.extend("on");
    if (this.readyState === InterceptorReadyState.DISPOSING || this.readyState === InterceptorReadyState.DISPOSED) {
      logger.info("cannot listen to events, already disposed!");
      return this;
    }
    logger.info('adding "%s" event listener:', event, listener);
    this.emitter.on(event, listener);
    return this;
  }
  once(event, listener) {
    this.emitter.once(event, listener);
    return this;
  }
  off(event, listener) {
    this.emitter.off(event, listener);
    return this;
  }
  removeAllListeners(event) {
    this.emitter.removeAllListeners(event);
    return this;
  }
  /**
  * Disposes of any side-effects this interceptor has introduced.
  */
  dispose() {
    const logger = this.logger.extend("dispose");
    if (this.readyState === InterceptorReadyState.DISPOSED) {
      logger.info("cannot dispose, already disposed!");
      return;
    }
    logger.info("disposing the interceptor...");
    this.readyState = InterceptorReadyState.DISPOSING;
    if (!this.getInstance()) {
      logger.info("no interceptors running, skipping dispose...");
      return;
    }
    this.clearInstance();
    logger.info("global symbol deleted:", getGlobalSymbol(this.symbol));
    if (this.subscriptions.length > 0) {
      logger.info("disposing of %d subscriptions...", this.subscriptions.length);
      for (const dispose of this.subscriptions) dispose();
      this.subscriptions = [];
      logger.info("disposed of all subscriptions!", this.subscriptions.length);
    }
    this.emitter.removeAllListeners();
    logger.info("destroyed the listener!");
    this.readyState = InterceptorReadyState.DISPOSED;
  }
  getInstance() {
    const instance = getGlobalSymbol(this.symbol);
    this.logger.info("retrieved global instance:", instance?.constructor?.name);
    return instance;
  }
  setInstance() {
    setGlobalSymbol(this.symbol, this);
    this.logger.info("set global instance!", this.symbol.description);
  }
  clearInstance() {
    deleteGlobalSymbol(this.symbol);
    this.logger.info("cleared global instance!", this.symbol.description);
  }
};
function createRequestId() {
  return Math.random().toString(16).slice(2);
}

// node_modules/.pnpm/@mswjs+interceptors@0.41.3/node_modules/@mswjs/interceptors/lib/browser/resolveWebSocketUrl-C83-x9iE.mjs
function resolveWebSocketUrl(url) {
  if (typeof url === "string") return resolveWebSocketUrl(new URL(url, typeof location !== "undefined" ? location.href : void 0));
  if (url.protocol === "http:") url.protocol = "ws:";
  else if (url.protocol === "https:") url.protocol = "wss:";
  if (url.protocol !== "ws:" && url.protocol !== "wss:")
    throw new SyntaxError(`Failed to construct 'WebSocket': The URL's scheme must be either 'http', 'https', 'ws', or 'wss'. '${url.protocol}' is not allowed.`);
  if (url.hash !== "") throw new SyntaxError(`Failed to construct 'WebSocket': The URL contains a fragment identifier ('${url.hash}'). Fragment identifiers are not allowed in WebSocket URLs.`);
  return url.href;
}

// node_modules/.pnpm/@mswjs+interceptors@0.41.3/node_modules/@mswjs/interceptors/lib/browser/hasConfigurableGlobal-npXitu1-.mjs
async function emitAsync(emitter, eventName, ...data) {
  const listeners = emitter.listeners(eventName);
  if (listeners.length === 0) return;
  for (const listener of listeners) await listener.apply(emitter, data);
}
function hasConfigurableGlobal(propertyName) {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, propertyName);
  if (typeof descriptor === "undefined") return false;
  if (typeof descriptor.get === "function" && typeof descriptor.get() === "undefined") return false;
  if (typeof descriptor.get === "undefined" && descriptor.value == null) return false;
  if (typeof descriptor.set === "undefined" && !descriptor.configurable) {
    console.error(`[MSW] Failed to apply interceptor: the global \`${propertyName}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`);
    return false;
  }
  return true;
}

// node_modules/.pnpm/@open-draft+deferred-promise@2.2.0/node_modules/@open-draft/deferred-promise/build/index.mjs
function createDeferredExecutor() {
  const executor = (resolve, reject) => {
    executor.state = "pending";
    executor.resolve = (data) => {
      if (executor.state !== "pending") {
        return;
      }
      executor.result = data;
      const onFulfilled = (value) => {
        executor.state = "fulfilled";
        return value;
      };
      return resolve(
        data instanceof Promise ? data : Promise.resolve(data).then(onFulfilled)
      );
    };
    executor.reject = (reason) => {
      if (executor.state !== "pending") {
        return;
      }
      queueMicrotask(() => {
        executor.state = "rejected";
      });
      return reject(executor.rejectionReason = reason);
    };
  };
  return executor;
}
var DeferredPromise = class extends Promise {
  #executor;
  resolve;
  reject;
  constructor(executor = null) {
    const deferredExecutor = createDeferredExecutor();
    super((originalResolve, originalReject) => {
      deferredExecutor(originalResolve, originalReject);
      executor?.(deferredExecutor.resolve, deferredExecutor.reject);
    });
    this.#executor = deferredExecutor;
    this.resolve = this.#executor.resolve;
    this.reject = this.#executor.reject;
  }
  get state() {
    return this.#executor.state;
  }
  get rejectionReason() {
    return this.#executor.rejectionReason;
  }
  then(onFulfilled, onRejected) {
    return this.#decorate(super.then(onFulfilled, onRejected));
  }
  catch(onRejected) {
    return this.#decorate(super.catch(onRejected));
  }
  finally(onfinally) {
    return this.#decorate(super.finally(onfinally));
  }
  #decorate(promise) {
    return Object.defineProperties(promise, {
      resolve: { configurable: true, value: this.resolve },
      reject: { configurable: true, value: this.reject }
    });
  }
};

// node_modules/.pnpm/@mswjs+interceptors@0.41.3/node_modules/@mswjs/interceptors/lib/browser/interceptors/WebSocket/index.mjs
function bindEvent(target, event) {
  Object.defineProperties(event, {
    target: {
      value: target,
      enumerable: true,
      writable: true
    },
    currentTarget: {
      value: target,
      enumerable: true,
      writable: true
    }
  });
  return event;
}
var kCancelable = Symbol("kCancelable");
var kDefaultPrevented = Symbol("kDefaultPrevented");
var CancelableMessageEvent = class extends MessageEvent {
  constructor(type, init) {
    super(type, init);
    this[kCancelable] = !!init.cancelable;
    this[kDefaultPrevented] = false;
  }
  get cancelable() {
    return this[kCancelable];
  }
  set cancelable(nextCancelable) {
    this[kCancelable] = nextCancelable;
  }
  get defaultPrevented() {
    return this[kDefaultPrevented];
  }
  set defaultPrevented(nextDefaultPrevented) {
    this[kDefaultPrevented] = nextDefaultPrevented;
  }
  preventDefault() {
    if (this.cancelable && !this[kDefaultPrevented]) this[kDefaultPrevented] = true;
  }
};
var CloseEvent = class extends Event {
  constructor(type, init = {}) {
    super(type, init);
    this.code = init.code === void 0 ? 0 : init.code;
    this.reason = init.reason === void 0 ? "" : init.reason;
    this.wasClean = init.wasClean === void 0 ? false : init.wasClean;
  }
};
var CancelableCloseEvent = class extends CloseEvent {
  constructor(type, init = {}) {
    super(type, init);
    this[kCancelable] = !!init.cancelable;
    this[kDefaultPrevented] = false;
  }
  get cancelable() {
    return this[kCancelable];
  }
  set cancelable(nextCancelable) {
    this[kCancelable] = nextCancelable;
  }
  get defaultPrevented() {
    return this[kDefaultPrevented];
  }
  set defaultPrevented(nextDefaultPrevented) {
    this[kDefaultPrevented] = nextDefaultPrevented;
  }
  preventDefault() {
    if (this.cancelable && !this[kDefaultPrevented]) this[kDefaultPrevented] = true;
  }
};
var kEmitter$1 = Symbol("kEmitter");
var kBoundListener$1 = Symbol("kBoundListener");
var WebSocketClientConnection = class {
  constructor(socket, transport) {
    this.socket = socket;
    this.transport = transport;
    this.id = createRequestId();
    this.url = new URL(socket.url);
    this[kEmitter$1] = new EventTarget();
    this.transport.addEventListener("outgoing", (event) => {
      const message = bindEvent(this.socket, new CancelableMessageEvent("message", {
        data: event.data,
        origin: event.origin,
        cancelable: true
      }));
      this[kEmitter$1].dispatchEvent(message);
      if (message.defaultPrevented) event.preventDefault();
    });
    this.transport.addEventListener("close", (event) => {
      this[kEmitter$1].dispatchEvent(bindEvent(this.socket, new CloseEvent("close", event)));
    });
  }
  /**
  * Listen for the outgoing events from the connected WebSocket client.
  */
  addEventListener(type, listener, options) {
    if (!Reflect.has(listener, kBoundListener$1)) {
      const boundListener = listener.bind(this.socket);
      Object.defineProperty(listener, kBoundListener$1, {
        value: boundListener,
        enumerable: false,
        configurable: false
      });
    }
    this[kEmitter$1].addEventListener(type, Reflect.get(listener, kBoundListener$1), options);
  }
  /**
  * Removes the listener for the given event.
  */
  removeEventListener(event, listener, options) {
    this[kEmitter$1].removeEventListener(event, Reflect.get(listener, kBoundListener$1), options);
  }
  /**
  * Send data to the connected client.
  */
  send(data) {
    this.transport.send(data);
  }
  /**
  * Close the WebSocket connection.
  * @param {number} code A status code (see https://www.rfc-editor.org/rfc/rfc6455#section-7.4.1).
  * @param {string} reason A custom connection close reason.
  */
  close(code, reason) {
    this.transport.close(code, reason);
  }
};
var WEBSOCKET_CLOSE_CODE_RANGE_ERROR = "InvalidAccessError: close code out of user configurable range";
var kPassthroughPromise = Symbol("kPassthroughPromise");
var kOnSend = Symbol("kOnSend");
var kClose = Symbol("kClose");
var WebSocketOverride = class extends EventTarget {
  static {
    this.CONNECTING = 0;
  }
  static {
    this.OPEN = 1;
  }
  static {
    this.CLOSING = 2;
  }
  static {
    this.CLOSED = 3;
  }
  constructor(url, protocols) {
    super();
    this.CONNECTING = 0;
    this.OPEN = 1;
    this.CLOSING = 2;
    this.CLOSED = 3;
    this._onopen = null;
    this._onmessage = null;
    this._onerror = null;
    this._onclose = null;
    this.url = resolveWebSocketUrl(url);
    this.protocol = "";
    this.extensions = "";
    this.binaryType = "blob";
    this.readyState = this.CONNECTING;
    this.bufferedAmount = 0;
    this[kPassthroughPromise] = new DeferredPromise();
    queueMicrotask(async () => {
      if (await this[kPassthroughPromise]) return;
      this.protocol = typeof protocols === "string" ? protocols : Array.isArray(protocols) && protocols.length > 0 ? protocols[0] : "";
      if (this.readyState === this.CONNECTING) {
        this.readyState = this.OPEN;
        this.dispatchEvent(bindEvent(this, new Event("open")));
      }
    });
  }
  set onopen(listener) {
    this.removeEventListener("open", this._onopen);
    this._onopen = listener;
    if (listener !== null) this.addEventListener("open", listener);
  }
  get onopen() {
    return this._onopen;
  }
  set onmessage(listener) {
    this.removeEventListener("message", this._onmessage);
    this._onmessage = listener;
    if (listener !== null) this.addEventListener("message", listener);
  }
  get onmessage() {
    return this._onmessage;
  }
  set onerror(listener) {
    this.removeEventListener("error", this._onerror);
    this._onerror = listener;
    if (listener !== null) this.addEventListener("error", listener);
  }
  get onerror() {
    return this._onerror;
  }
  set onclose(listener) {
    this.removeEventListener("close", this._onclose);
    this._onclose = listener;
    if (listener !== null) this.addEventListener("close", listener);
  }
  get onclose() {
    return this._onclose;
  }
  /**
  * @see https://websockets.spec.whatwg.org/#ref-for-dom-websocket-send%E2%91%A0
  */
  send(data) {
    if (this.readyState === this.CONNECTING) {
      this.close();
      throw new DOMException("InvalidStateError");
    }
    if (this.readyState === this.CLOSING || this.readyState === this.CLOSED) return;
    this.bufferedAmount += getDataSize(data);
    queueMicrotask(() => {
      this.bufferedAmount = 0;
      this[kOnSend]?.(data);
    });
  }
  close(code = 1e3, reason) {
    invariant(code, WEBSOCKET_CLOSE_CODE_RANGE_ERROR);
    invariant(code === 1e3 || code >= 3e3 && code <= 4999, WEBSOCKET_CLOSE_CODE_RANGE_ERROR);
    this[kClose](code, reason);
  }
  [kClose](code = 1e3, reason, wasClean = true) {
    if (this.readyState === this.CLOSING || this.readyState === this.CLOSED) return;
    this.readyState = this.CLOSING;
    queueMicrotask(() => {
      this.readyState = this.CLOSED;
      this.dispatchEvent(bindEvent(this, new CloseEvent("close", {
        code,
        reason,
        wasClean
      })));
      this._onopen = null;
      this._onmessage = null;
      this._onerror = null;
      this._onclose = null;
    });
  }
  addEventListener(type, listener, options) {
    return super.addEventListener(type, listener, options);
  }
  removeEventListener(type, callback, options) {
    return super.removeEventListener(type, callback, options);
  }
};
function getDataSize(data) {
  if (typeof data === "string") return data.length;
  if (data instanceof Blob) return data.size;
  return data.byteLength;
}
var kEmitter = Symbol("kEmitter");
var kBoundListener = Symbol("kBoundListener");
var kSend = Symbol("kSend");
var WebSocketServerConnection = class {
  constructor(client, transport, createConnection) {
    this.client = client;
    this.transport = transport;
    this.createConnection = createConnection;
    this[kEmitter] = new EventTarget();
    this.mockCloseController = new AbortController();
    this.realCloseController = new AbortController();
    this.transport.addEventListener("outgoing", (event) => {
      if (typeof this.realWebSocket === "undefined") return;
      queueMicrotask(() => {
        if (!event.defaultPrevented)
          this[kSend](event.data);
      });
    });
    this.transport.addEventListener("incoming", this.handleIncomingMessage.bind(this));
  }
  /**
  * The `WebSocket` instance connected to the original server.
  * Accessing this before calling `server.connect()` will throw.
  */
  get socket() {
    invariant(this.realWebSocket, 'Cannot access "socket" on the original WebSocket server object: the connection is not open. Did you forget to call `server.connect()`?');
    return this.realWebSocket;
  }
  /**
  * Open connection to the original WebSocket server.
  */
  connect() {
    invariant(!this.realWebSocket || this.realWebSocket.readyState !== WebSocket.OPEN, 'Failed to call "connect()" on the original WebSocket instance: the connection already open');
    const realWebSocket = this.createConnection();
    realWebSocket.binaryType = this.client.binaryType;
    realWebSocket.addEventListener("open", (event) => {
      this[kEmitter].dispatchEvent(bindEvent(this.realWebSocket, new Event("open", event)));
    }, { once: true });
    realWebSocket.addEventListener("message", (event) => {
      this.transport.dispatchEvent(bindEvent(this.realWebSocket, new MessageEvent("incoming", {
        data: event.data,
        origin: event.origin
      })));
    });
    this.client.addEventListener("close", (event) => {
      this.handleMockClose(event);
    }, { signal: this.mockCloseController.signal });
    realWebSocket.addEventListener("close", (event) => {
      this.handleRealClose(event);
    }, { signal: this.realCloseController.signal });
    realWebSocket.addEventListener("error", () => {
      const errorEvent = bindEvent(realWebSocket, new Event("error", { cancelable: true }));
      this[kEmitter].dispatchEvent(errorEvent);
      if (!errorEvent.defaultPrevented) this.client.dispatchEvent(bindEvent(this.client, new Event("error")));
    });
    this.realWebSocket = realWebSocket;
  }
  /**
  * Listen for the incoming events from the original WebSocket server.
  */
  addEventListener(event, listener, options) {
    if (!Reflect.has(listener, kBoundListener)) {
      const boundListener = listener.bind(this.client);
      Object.defineProperty(listener, kBoundListener, {
        value: boundListener,
        enumerable: false
      });
    }
    this[kEmitter].addEventListener(event, Reflect.get(listener, kBoundListener), options);
  }
  /**
  * Remove the listener for the given event.
  */
  removeEventListener(event, listener, options) {
    this[kEmitter].removeEventListener(event, Reflect.get(listener, kBoundListener), options);
  }
  /**
  * Send data to the original WebSocket server.
  * @example
  * server.send('hello')
  * server.send(new Blob(['hello']))
  * server.send(new TextEncoder().encode('hello'))
  */
  send(data) {
    this[kSend](data);
  }
  [kSend](data) {
    const { realWebSocket } = this;
    invariant(realWebSocket, 'Failed to call "server.send()" for "%s": the connection is not open. Did you forget to call "server.connect()"?', this.client.url);
    if (realWebSocket.readyState === WebSocket.CLOSING || realWebSocket.readyState === WebSocket.CLOSED) return;
    if (realWebSocket.readyState === WebSocket.CONNECTING) {
      realWebSocket.addEventListener("open", () => {
        realWebSocket.send(data);
      }, { once: true });
      return;
    }
    realWebSocket.send(data);
  }
  /**
  * Close the actual server connection.
  */
  close() {
    const { realWebSocket } = this;
    invariant(realWebSocket, 'Failed to close server connection for "%s": the connection is not open. Did you forget to call "server.connect()"?', this.client.url);
    this.realCloseController.abort();
    if (realWebSocket.readyState === WebSocket.CLOSING || realWebSocket.readyState === WebSocket.CLOSED) return;
    realWebSocket.close();
    queueMicrotask(() => {
      this[kEmitter].dispatchEvent(bindEvent(this.realWebSocket, new CancelableCloseEvent("close", {
        code: 1e3,
        cancelable: true
      })));
    });
  }
  handleIncomingMessage(event) {
    const messageEvent = bindEvent(event.target, new CancelableMessageEvent("message", {
      data: event.data,
      origin: event.origin,
      cancelable: true
    }));
    this[kEmitter].dispatchEvent(messageEvent);
    if (!messageEvent.defaultPrevented) this.client.dispatchEvent(bindEvent(
      /**
      * @note Bind the forwarded original server events
      * to the mock WebSocket instance so it would
      * dispatch them straight away.
      */
      this.client,
      new MessageEvent("message", {
        data: event.data,
        origin: event.origin
      })
    ));
  }
  handleMockClose(_event) {
    if (this.realWebSocket) this.realWebSocket.close();
  }
  handleRealClose(event) {
    this.mockCloseController.abort();
    const closeEvent = bindEvent(this.realWebSocket, new CancelableCloseEvent("close", {
      code: event.code,
      reason: event.reason,
      wasClean: event.wasClean,
      cancelable: true
    }));
    this[kEmitter].dispatchEvent(closeEvent);
    if (!closeEvent.defaultPrevented) this.client[kClose](event.code, event.reason);
  }
};
var WebSocketClassTransport = class extends EventTarget {
  constructor(socket) {
    super();
    this.socket = socket;
    this.socket.addEventListener("close", (event) => {
      this.dispatchEvent(bindEvent(this.socket, new CloseEvent("close", event)));
    });
    this.socket[kOnSend] = (data) => {
      this.dispatchEvent(bindEvent(this.socket, new CancelableMessageEvent("outgoing", {
        data,
        origin: this.socket.url,
        cancelable: true
      })));
    };
  }
  addEventListener(type, callback, options) {
    return super.addEventListener(type, callback, options);
  }
  dispatchEvent(event) {
    return super.dispatchEvent(event);
  }
  send(data) {
    queueMicrotask(() => {
      if (this.socket.readyState === this.socket.CLOSING || this.socket.readyState === this.socket.CLOSED) return;
      const dispatchEvent = () => {
        this.socket.dispatchEvent(bindEvent(
          /**
          * @note Setting this event's "target" to the
          * WebSocket override instance is important.
          * This way it can tell apart original incoming events
          * (must be forwarded to the transport) from the
          * mocked message events like the one below
          * (must be dispatched on the client instance).
          */
          this.socket,
          new MessageEvent("message", {
            data,
            origin: this.socket.url
          })
        ));
      };
      if (this.socket.readyState === this.socket.CONNECTING) this.socket.addEventListener("open", () => {
        dispatchEvent();
      }, { once: true });
      else dispatchEvent();
    });
  }
  close(code, reason) {
    this.socket[kClose](code, reason);
  }
};
var WebSocketInterceptor = class WebSocketInterceptor2 extends Interceptor {
  static {
    this.symbol = Symbol("websocket");
  }
  constructor() {
    super(WebSocketInterceptor2.symbol);
  }
  checkEnvironment() {
    return hasConfigurableGlobal("WebSocket");
  }
  setup() {
    const originalWebSocketDescriptor = Object.getOwnPropertyDescriptor(globalThis, "WebSocket");
    const WebSocketProxy = new Proxy(globalThis.WebSocket, { construct: (target, args, newTarget) => {
      const [url, protocols] = args;
      const createConnection = () => {
        return Reflect.construct(target, args, newTarget);
      };
      const socket = new WebSocketOverride(url, protocols);
      const transport = new WebSocketClassTransport(socket);
      queueMicrotask(async () => {
        try {
          const server = new WebSocketServerConnection(socket, transport, createConnection);
          const hasConnectionListeners = this.emitter.listenerCount("connection") > 0;
          await emitAsync(this.emitter, "connection", {
            client: new WebSocketClientConnection(socket, transport),
            server,
            info: { protocols }
          });
          if (hasConnectionListeners) socket[kPassthroughPromise].resolve(false);
          else {
            socket[kPassthroughPromise].resolve(true);
            server.connect();
            server.addEventListener("open", () => {
              socket.dispatchEvent(bindEvent(socket, new Event("open")));
              if (server["realWebSocket"]) socket.protocol = server["realWebSocket"].protocol;
            });
          }
        } catch (error2) {
          if (error2 instanceof Error) {
            socket.dispatchEvent(new Event("error"));
            if (socket.readyState !== WebSocket.CLOSING && socket.readyState !== WebSocket.CLOSED) socket[kClose](1011, error2.message, false);
            console.error(error2);
          }
        }
      });
      return socket;
    } });
    Object.defineProperty(globalThis, "WebSocket", {
      value: WebSocketProxy,
      configurable: true
    });
    this.subscriptions.push(() => {
      Object.defineProperty(globalThis, "WebSocket", originalWebSocketDescriptor);
    });
  }
};

// src/browser/setup-worker.ts
var import_define_network = require("../core/experimental/define-network");
var import_interceptor_source2 = require("../core/experimental/sources/interceptor-source");
var import_compat = require("../core/experimental/compat");
var import_devUtils5 = require("../core/utils/internal/devUtils");

// src/browser/utils/supports.ts
function supportsServiceWorker() {
  return typeof navigator !== "undefined" && "serviceWorker" in navigator && typeof location !== "undefined" && location.protocol !== "file:";
}
function supportsReadableStreamTransfer() {
  try {
    const stream = new ReadableStream({
      start: (controller) => controller.close()
    });
    const message = new MessageChannel();
    message.port1.postMessage(stream, [stream]);
    return true;
  } catch {
    return false;
  }
}

// node_modules/.pnpm/@open-draft+deferred-promise@3.0.0/node_modules/@open-draft/deferred-promise/build/index.mjs
function createDeferredExecutor2() {
  const executor = ((resolve, reject) => {
    executor.state = "pending";
    executor.resolve = (data) => {
      if (executor.state !== "pending") return;
      executor.result = data;
      const onFulfilled = (value) => {
        executor.state = "fulfilled";
        return value;
      };
      return resolve(data instanceof Promise ? data : Promise.resolve(data).then(onFulfilled));
    };
    executor.reject = (reason) => {
      if (executor.state !== "pending") return;
      queueMicrotask(() => {
        executor.state = "rejected";
      });
      return reject(executor.rejectionReason = reason);
    };
  });
  return executor;
}
var DeferredPromise2 = class extends Promise {
  #executor;
  resolve;
  reject;
  constructor(executor = null) {
    const deferredExecutor = createDeferredExecutor2();
    super((originalResolve, originalReject) => {
      deferredExecutor(originalResolve, originalReject);
      executor?.(deferredExecutor.resolve, deferredExecutor.reject);
    });
    this.#executor = deferredExecutor;
    this.resolve = this.#executor.resolve;
    this.reject = this.#executor.reject;
  }
  get state() {
    return this.#executor.state;
  }
  get rejectionReason() {
    return this.#executor.rejectionReason;
  }
  then(onFulfilled, onRejected) {
    return this.#decorate(super.then(onFulfilled, onRejected));
  }
  catch(onRejected) {
    return this.#decorate(super.catch(onRejected));
  }
  finally(onfinally) {
    return this.#decorate(super.finally(onfinally));
  }
  #decorate(promise) {
    return Object.defineProperties(promise, {
      resolve: {
        configurable: true,
        value: this.resolve
      },
      reject: {
        configurable: true,
        value: this.reject
      }
    });
  }
};

// node_modules/.pnpm/@mswjs+interceptors@0.41.3/node_modules/@mswjs/interceptors/lib/browser/getRawRequest-BTaNLFr0.mjs
var IS_PATCHED_MODULE = Symbol("isPatchedModule");
var InterceptorError = class InterceptorError2 extends Error {
  constructor(message) {
    super(message);
    this.name = "InterceptorError";
    Object.setPrototypeOf(this, InterceptorError2.prototype);
  }
};
var RequestController = class RequestController2 {
  static {
    this.PENDING = 0;
  }
  static {
    this.PASSTHROUGH = 1;
  }
  static {
    this.RESPONSE = 2;
  }
  static {
    this.ERROR = 3;
  }
  constructor(request, source) {
    this.request = request;
    this.source = source;
    this.readyState = RequestController2.PENDING;
    this.handled = new DeferredPromise();
  }
  get #handled() {
    return this.handled;
  }
  /**
  * Perform this request as-is.
  */
  async passthrough() {
    invariant.as(InterceptorError, this.readyState === RequestController2.PENDING, 'Failed to passthrough the "%s %s" request: the request has already been handled', this.request.method, this.request.url);
    this.readyState = RequestController2.PASSTHROUGH;
    await this.source.passthrough();
    this.#handled.resolve();
  }
  /**
  * Respond to this request with the given `Response` instance.
  *
  * @example
  * controller.respondWith(new Response())
  * controller.respondWith(Response.json({ id }))
  * controller.respondWith(Response.error())
  */
  respondWith(response) {
    invariant.as(InterceptorError, this.readyState === RequestController2.PENDING, 'Failed to respond to the "%s %s" request with "%d %s": the request has already been handled (%d)', this.request.method, this.request.url, response.status, response.statusText || "OK", this.readyState);
    this.readyState = RequestController2.RESPONSE;
    this.#handled.resolve();
    this.source.respondWith(response);
  }
  /**
  * Error this request with the given reason.
  *
  * @example
  * controller.errorWith()
  * controller.errorWith(new Error('Oops!'))
  * controller.errorWith({ message: 'Oops!'})
  */
  errorWith(reason) {
    invariant.as(InterceptorError, this.readyState === RequestController2.PENDING, 'Failed to error the "%s %s" request with "%s": the request has already been handled (%d)', this.request.method, this.request.url, reason?.toString(), this.readyState);
    this.readyState = RequestController2.ERROR;
    this.source.errorWith(reason);
    this.#handled.resolve();
  }
};
function canParseUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (_error) {
    return false;
  }
}
function getValueBySymbol(symbolName, source) {
  const symbol = Object.getOwnPropertySymbols(source).find((symbol$1) => {
    return symbol$1.description === symbolName;
  });
  if (symbol) return Reflect.get(source, symbol);
}
var FetchResponse = class FetchResponse2 extends Response {
  static {
    this.STATUS_CODES_WITHOUT_BODY = [
      101,
      103,
      204,
      205,
      304
    ];
  }
  static {
    this.STATUS_CODES_WITH_REDIRECT = [
      301,
      302,
      303,
      307,
      308
    ];
  }
  static isConfigurableStatusCode(status) {
    return status >= 200 && status <= 599;
  }
  static isRedirectResponse(status) {
    return FetchResponse2.STATUS_CODES_WITH_REDIRECT.includes(status);
  }
  /**
  * Returns a boolean indicating whether the given response status
  * code represents a response that can have a body.
  */
  static isResponseWithBody(status) {
    return !FetchResponse2.STATUS_CODES_WITHOUT_BODY.includes(status);
  }
  static setUrl(url, response) {
    if (!url || url === "about:" || !canParseUrl(url)) return;
    const state = getValueBySymbol("state", response);
    if (state) state.urlList.push(new URL(url));
    else Object.defineProperty(response, "url", {
      value: url,
      enumerable: true,
      configurable: true,
      writable: false
    });
  }
  /**
  * Parses the given raw HTTP headers into a Fetch API `Headers` instance.
  */
  static parseRawHeaders(rawHeaders) {
    const headers = new Headers();
    for (let line = 0; line < rawHeaders.length; line += 2) headers.append(rawHeaders[line], rawHeaders[line + 1]);
    return headers;
  }
  constructor(body, init = {}) {
    const status = init.status ?? 200;
    const safeStatus = FetchResponse2.isConfigurableStatusCode(status) ? status : 200;
    const finalBody = FetchResponse2.isResponseWithBody(status) ? body : null;
    super(finalBody, {
      status: safeStatus,
      statusText: init.statusText,
      headers: init.headers
    });
    if (status !== safeStatus) {
      const state = getValueBySymbol("state", this);
      if (state) state.status = status;
      else Object.defineProperty(this, "status", {
        value: status,
        enumerable: true,
        configurable: true,
        writable: false
      });
    }
    FetchResponse2.setUrl(init.url, this);
  }
};
var kRawRequest = Symbol("kRawRequest");
function setRawRequest(request, rawRequest) {
  Reflect.set(request, kRawRequest, rawRequest);
}

// node_modules/.pnpm/@mswjs+interceptors@0.41.3/node_modules/@mswjs/interceptors/lib/browser/bufferUtils-BiiO6HZv.mjs
var encoder = new TextEncoder();
function encodeBuffer(text) {
  return encoder.encode(text);
}
function decodeBuffer(buffer, encoding) {
  return new TextDecoder(encoding).decode(buffer);
}
function toArrayBuffer(array) {
  return array.buffer.slice(array.byteOffset, array.byteOffset + array.byteLength);
}

// src/browser/sources/service-worker-source.ts
var import_network_source = require("../core/experimental/sources/network-source");
var import_RequestHandler = require("../core/handlers/RequestHandler");
var import_http_frame = require("../core/experimental/frames/http-frame");
var import_HttpResponse = require("../core/HttpResponse");
var import_toResponseInit = require("../core/utils/toResponseInit");
var import_devUtils3 = require("../core/utils/internal/devUtils");

// node_modules/.pnpm/until-async@3.0.2/node_modules/until-async/lib/index.js
async function until(callback) {
  try {
    return [null, await callback().catch((error2) => {
      throw error2;
    })];
  } catch (error2) {
    return [error2, null];
  }
}

// src/browser/utils/get-worker-instance.ts
var import_devUtils = require("../core/utils/internal/devUtils");

// src/browser/utils/getAbsoluteWorkerUrl.ts
function getAbsoluteWorkerUrl(workerUrl) {
  return new URL(workerUrl, location.href).href;
}

// src/browser/utils/get-worker-by-registration.ts
function getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker) {
  const allStates = [
    registration.active,
    registration.installing,
    registration.waiting
  ];
  const relevantStates = allStates.filter((state) => {
    return state != null;
  });
  const worker = relevantStates.find((worker2) => {
    return findWorker(worker2.scriptURL, absoluteWorkerUrl);
  });
  return worker || null;
}

// src/browser/utils/get-worker-instance.ts
var getWorkerInstance = async (url, options = {}, findWorker) => {
  const absoluteWorkerUrl = getAbsoluteWorkerUrl(url);
  const mockRegistrations = await navigator.serviceWorker.getRegistrations().then(
    (registrations) => registrations.filter(
      (registration) => getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker)
    )
  );
  if (!navigator.serviceWorker.controller && mockRegistrations.length > 0) {
    location.reload();
  }
  const [existingRegistration] = mockRegistrations;
  if (existingRegistration) {
    existingRegistration.update();
    return [
      getWorkerByRegistration(
        existingRegistration,
        absoluteWorkerUrl,
        findWorker
      ),
      existingRegistration
    ];
  }
  const [registrationError, registrationResult] = await until(async () => {
    const registration = await navigator.serviceWorker.register(url, options);
    return [
      // Compare existing worker registration by its worker URL,
      // to prevent irrelevant workers to resolve here (such as Codesandbox worker).
      getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker),
      registration
    ];
  });
  if (registrationError) {
    const isWorkerMissing = registrationError.message.includes("(404)");
    if (isWorkerMissing) {
      const scopeUrl = new URL(options?.scope || "/", location.href);
      throw new Error(
        import_devUtils.devUtils.formatMessage(`Failed to register a Service Worker for scope ('${scopeUrl.href}') with script ('${absoluteWorkerUrl}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`)
      );
    }
    throw new Error(
      import_devUtils.devUtils.formatMessage(
        "Failed to register the Service Worker:\n\n%s",
        registrationError.message
      )
    );
  }
  return registrationResult;
};

// node_modules/.pnpm/rettime@0.11.7/node_modules/rettime/build/lens-list.mjs
var LensList = class {
  #list;
  #lens;
  constructor() {
    this.#list = [];
    this.#lens = /* @__PURE__ */ new Map();
  }
  get [Symbol.iterator]() {
    return this.#list[Symbol.iterator].bind(this.#list);
  }
  entries() {
    return this.#lens.entries();
  }
  /**
  * Return an order-sensitive list of values by the given key.
  */
  get(key) {
    return this.#lens.get(key) || [];
  }
  /**
  * Return an order-sensitive list of all values.
  */
  getAll() {
    return this.#list.map(([, value]) => value);
  }
  /**
  * Append a new value to the given key.
  */
  append(key, value) {
    this.#list.push([key, value]);
    this.#openLens(key, (list) => list.push(value));
  }
  /**
  * Prepend a new value to the given key.
  */
  prepend(key, value) {
    this.#list.unshift([key, value]);
    this.#openLens(key, (list) => list.unshift(value));
  }
  /**
  * Delete the value belonging to the given key.
  */
  delete(key, value) {
    if (this.size === 0) return;
    this.#list = this.#list.filter((item) => item[1] !== value);
    const values = this.#lens.get(key);
    if (values) {
      const index = values.indexOf(value);
      if (index !== -1) values.splice(index, 1);
    }
  }
  /**
  * Delete all values belogning to the given key.
  */
  deleteAll(key) {
    if (this.size === 0) return;
    this.#list = this.#list.filter((item) => item[0] !== key);
    this.#lens.delete(key);
  }
  get size() {
    return this.#list.length;
  }
  clear() {
    if (this.size === 0) return;
    this.#list.length = 0;
    this.#lens.clear();
  }
  #openLens(key, setter) {
    setter(this.#lens.get(key) || this.#lens.set(key, []).get(key));
  }
};

// node_modules/.pnpm/rettime@0.11.7/node_modules/rettime/build/index.mjs
var kDefaultPrevented2 = Symbol("kDefaultPrevented");
var kPropagationStopped = Symbol("kPropagationStopped");
var kImmediatePropagationStopped = Symbol("kImmediatePropagationStopped");
var TypedEvent = class extends MessageEvent {
  /**
  * @note Keep a placeholder property with the return type
  * because the type must be set somewhere in order to be
  * correctly associated and inferred from the event.
  */
  #returnType;
  [kDefaultPrevented2];
  [kPropagationStopped];
  [kImmediatePropagationStopped];
  constructor(...args) {
    super(args[0], args[1]);
    this[kDefaultPrevented2] = false;
  }
  get defaultPrevented() {
    return this[kDefaultPrevented2];
  }
  preventDefault() {
    super.preventDefault();
    this[kDefaultPrevented2] = true;
  }
  stopImmediatePropagation() {
    super.stopImmediatePropagation();
    this[kImmediatePropagationStopped] = true;
  }
};
var Emitter2 = class {
  #listeners;
  #listenerOptions;
  #typelessListeners;
  #hookListeners;
  #hookListenerOptions;
  hooks;
  constructor() {
    this.#listeners = new LensList();
    this.#listenerOptions = /* @__PURE__ */ new WeakMap();
    this.#typelessListeners = /* @__PURE__ */ new WeakSet();
    this.#hookListeners = new LensList();
    this.#hookListenerOptions = /* @__PURE__ */ new WeakMap();
    this.hooks = {
      on: (hook, callback, options) => {
        if (options?.once) {
          const original = callback;
          const wrapper = ((...args) => {
            this.#hookListeners.delete(hook, wrapper);
            return original(...args);
          });
          callback = wrapper;
        }
        this.#hookListeners.append(hook, callback);
        if (options) this.#hookListenerOptions.set(callback, options);
        if (options?.signal) options.signal.addEventListener("abort", () => {
          this.#hookListeners.delete(hook, callback);
        }, { once: true });
      },
      removeListener: (hook, callback) => {
        this.#hookListeners.delete(hook, callback);
      }
    };
  }
  /**
  * Adds a listener for the given event type.
  */
  on(type, listener, options) {
    this.#addListener(type, listener, options);
    return this;
  }
  /**
  * Adds a one-time listener for the given event type.
  */
  once(type, listener, options) {
    return this.on(type, listener, {
      ...options || {},
      once: true
    });
  }
  /**
  * Prepends a listener for the given event type.
  */
  earlyOn(type, listener, options) {
    this.#addListener(type, listener, options, "prepend");
    return this;
  }
  /**
  * Prepends a one-time listener for the given event type.
  */
  earlyOnce(type, listener, options) {
    return this.earlyOn(type, listener, {
      ...options || {},
      once: true
    });
  }
  /**
  * Emits the given typed event.
  *
  * @returns {boolean} Returns `true` if the event had any listeners, `false` otherwise.
  */
  emit(event) {
    if (this.#listeners.size === 0) return false;
    const hasListeners = this.listenerCount(event.type) > 0;
    const proxiedEvent = this.#proxyEvent(event);
    for (const listener of this.#matchListeners(event.type)) {
      if (proxiedEvent.event[kPropagationStopped] != null && proxiedEvent.event[kPropagationStopped] !== this) {
        proxiedEvent.revoke();
        return false;
      }
      if (proxiedEvent.event[kImmediatePropagationStopped]) break;
      this.#callListener(proxiedEvent.event, listener);
    }
    proxiedEvent.revoke();
    return hasListeners;
  }
  /**
  * Emits the given typed event and returns a promise that resolves
  * when all the listeners for that event have settled.
  *
  * @returns {Promise<Array<Emitter.ListenerReturnType>>} A promise that resolves
  * with the return values of all listeners.
  */
  async emitAsPromise(event) {
    if (this.#listeners.size === 0) return [];
    const pendingListeners = [];
    const proxiedEvent = this.#proxyEvent(event);
    for (const listener of this.#matchListeners(event.type)) {
      if (proxiedEvent.event[kPropagationStopped] != null && proxiedEvent.event[kPropagationStopped] !== this) {
        proxiedEvent.revoke();
        return [];
      }
      if (proxiedEvent.event[kImmediatePropagationStopped]) break;
      const returnValue = await Promise.resolve(this.#callListener(proxiedEvent.event, listener));
      if (!this.#isTypelessListener(listener)) pendingListeners.push(returnValue);
    }
    proxiedEvent.revoke();
    return Promise.allSettled(pendingListeners).then((results) => {
      return results.map((result) => result.status === "fulfilled" ? result.value : result.reason);
    });
  }
  /**
  * Emits the given event and returns a generator that yields
  * the result of each listener in the order of their registration.
  * This way, you stop exhausting the listeners once you get the expected value.
  */
  *emitAsGenerator(event) {
    if (this.#listeners.size === 0) return;
    const proxiedEvent = this.#proxyEvent(event);
    for (const listener of this.#matchListeners(event.type)) {
      if (proxiedEvent.event[kPropagationStopped] != null && proxiedEvent.event[kPropagationStopped] !== this) {
        proxiedEvent.revoke();
        return;
      }
      if (proxiedEvent.event[kImmediatePropagationStopped]) break;
      const returnValue = this.#callListener(proxiedEvent.event, listener);
      if (!this.#isTypelessListener(listener)) yield returnValue;
    }
    proxiedEvent.revoke();
  }
  /**
  * Removes a listener for the given event type.
  */
  removeListener(type, listener) {
    const options = this.#listenerOptions.get(listener);
    this.#listeners.delete(type, listener);
    for (const hook of this.#hookListeners.get("removeListener")) hook(type, listener, options);
  }
  /**
  * Removes all listeners for the given event type.
  * If no event type is provided, removes all existing listeners.
  */
  removeAllListeners(type) {
    if (type == null) {
      this.#listeners.clear();
      for (const [hookType, hookListener] of this.#hookListeners) if (!this.#hookListenerOptions.get(hookListener)?.persist) this.#hookListeners.delete(hookType, hookListener);
      return;
    }
    this.#listeners.deleteAll(type);
  }
  /**
  * Returns the list of listeners for the given event type.
  * If no even type is provided, returns all listeners.
  */
  listeners(type) {
    if (type == null) return this.#listeners.getAll();
    return this.#listeners.get(type);
  }
  /**
  * Returns the number of listeners for the given event type.
  * If no even type is provided, returns the total number of listeners.
  */
  listenerCount(type) {
    if (type == null) return this.#listeners.size;
    return this.listeners(type).length;
  }
  #addListener(type, listener, options, insertMode = "append") {
    for (const hook of this.#hookListeners.get("newListener")) hook(type, listener, options);
    if (type === "*") this.#typelessListeners.add(listener);
    if (insertMode === "prepend") this.#listeners.prepend(type, listener);
    else this.#listeners.append(type, listener);
    if (options) {
      this.#listenerOptions.set(listener, options);
      if (options.signal) options.signal.addEventListener("abort", () => {
        this.removeListener(type, listener);
      }, { once: true });
    }
  }
  #proxyEvent(event) {
    const { stopPropagation } = event;
    event.stopPropagation = () => {
      event[kPropagationStopped] = this;
      stopPropagation.call(event);
    };
    return {
      event,
      revoke() {
        event.stopPropagation = stopPropagation;
      }
    };
  }
  #callListener(event, listener) {
    for (const hook of this.#hookListeners.get("beforeEmit")) if (hook(event) === false) return;
    const returnValue = listener.call(this, event);
    const options = this.#listenerOptions.get(listener);
    if (options?.once) {
      const type = this.#isTypelessListener(listener) ? "*" : event.type;
      this.#listeners.delete(type, listener);
      for (const hook of this.#hookListeners.get("removeListener")) hook(type, listener, options);
    }
    return returnValue;
  }
  /**
  * Return a list of all event listeners relevant for the given event type.
  * This includes the explicit event listeners and also typeless event listeners.
  */
  *#matchListeners(type) {
    for (const [key, listener] of this.#listeners) if (key === "*" || key === type) yield listener;
  }
  #isTypelessListener(listener) {
    return this.#typelessListeners.has(listener);
  }
};

// src/browser/utils/workerChannel.ts
var import_isObject = require("../core/utils/internal/isObject");
var SUPPORTS_SERVICE_WORKER = supportsServiceWorker();
var WorkerEvent = class extends TypedEvent {
  #workerEvent;
  constructor(workerEvent) {
    const type = workerEvent.data.type;
    const data = workerEvent.data.payload;
    super(
      // @ts-expect-error Troublesome `TypedEvent` extension.
      type,
      { data }
    );
    this.#workerEvent = workerEvent;
  }
  get ports() {
    return this.#workerEvent.ports;
  }
  /**
   * Reply directly to this event using its `MessagePort`.
   */
  postMessage(type, ...rest) {
    this.#workerEvent.ports[0].postMessage(
      { type, data: rest[0] },
      { transfer: rest[1] }
    );
  }
};
var WorkerChannel = class extends Emitter2 {
  #getWorker;
  #controller;
  constructor(options) {
    super();
    invariant(
      SUPPORTS_SERVICE_WORKER,
      "Failed to open a WorkerChannel: Service Worker is not supported in this environment."
    );
    this.#getWorker = options.getWorker;
    this.#controller = new AbortController();
    navigator.serviceWorker.addEventListener(
      "message",
      async (event) => {
        const worker = await this.#getWorker();
        if (event.source != null && event.source !== worker) {
          return;
        }
        if (event.data && (0, import_isObject.isObject)(event.data) && "type" in event.data) {
          this.emit(new WorkerEvent(event));
        }
      },
      {
        signal: this.#controller.signal
      }
    );
  }
  /**
   * Send data to the Service Worker controlling this client.
   * This triggers the `message` event listener on ServiceWorkerGlobalScope.
   */
  postMessage(type) {
    invariant(
      SUPPORTS_SERVICE_WORKER,
      "Failed to post message on a WorkerChannel: the Service Worker API is unavailable in this environment. This is likely an issue with MSW. Please report it on GitHub: https://github.com/mswjs/msw/issues"
    );
    this.#getWorker().then((worker) => {
      worker.postMessage(type);
    });
  }
  /**
   * Terminal teardown. Removes the `navigator.serviceWorker` message listener
   * and all emitter subscriptions. The channel is not usable afterwards.
   */
  terminate() {
    this.#controller.abort();
    this.removeAllListeners();
  }
};

// src/browser/utils/pruneGetRequestBody.ts
function pruneGetRequestBody(request) {
  if (["HEAD", "GET"].includes(request.method)) {
    return void 0;
  }
  return request.body;
}

// src/browser/utils/deserializeRequest.ts
function deserializeRequest(serializedRequest) {
  return new Request(serializedRequest.url, {
    ...serializedRequest,
    body: pruneGetRequestBody(serializedRequest)
  });
}

// src/browser/utils/validate-worker-scope.ts
var import_devUtils2 = require("../core/utils/internal/devUtils");
function validateWorkerScope(registration) {
  if (!location.href.startsWith(registration.scope)) {
    import_devUtils2.devUtils.warn(
      `Cannot intercept requests on this page because it's outside of the worker's scope ("${registration.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`
    );
  }
}

// src/browser/utils/should-invalidate-worker.ts
function shouldInvalidateWorker(prevOptions, nextOptions) {
  return prevOptions.findWorker !== nextOptions.findWorker || prevOptions.serviceWorker.url !== nextOptions.serviceWorker.url || JSON.stringify(prevOptions.serviceWorker.options) !== JSON.stringify(nextOptions.serviceWorker.options);
}

// src/browser/sources/service-worker-source.ts
var ServiceWorkerSource = class _ServiceWorkerSource extends import_network_source.NetworkSource {
  static #current;
  /**
   * Create a new Service Worker source or reuse an existing one.
   * These sources act as a singleton and only get recreated if the options change.
   */
  static async from(options) {
    if (_ServiceWorkerSource.#current == null) {
      _ServiceWorkerSource.#current = new _ServiceWorkerSource(options);
    } else if (shouldInvalidateWorker(_ServiceWorkerSource.#current.#options, options)) {
      await _ServiceWorkerSource.#current.terminate();
      _ServiceWorkerSource.#current = new _ServiceWorkerSource(options);
    }
    return _ServiceWorkerSource.#current;
  }
  #options;
  #frames;
  #channel;
  #listenerController;
  #clientPromise;
  #keepAliveInterval;
  #stoppedAt;
  workerPromise;
  constructor(options) {
    super();
    invariant(
      supportsServiceWorker(),
      "Failed to use Service Worker as the network source: the Service Worker API is not supported in this environment"
    );
    this.#options = options;
    this.#frames = /* @__PURE__ */ new Map();
    this.workerPromise = new DeferredPromise2();
    this.#channel = new WorkerChannel({
      getWorker: () => this.workerPromise.then(([worker]) => worker)
    });
  }
  async enable() {
    if (this.workerPromise.state === "fulfilled" && typeof this.#stoppedAt == "undefined") {
      import_devUtils3.devUtils.warn(
        'Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.'
      );
      return this.workerPromise.then(([, registration2]) => registration2);
    }
    this.#stoppedAt = void 0;
    this.#channel.removeAllListeners();
    this.#frames.clear();
    this.#listenerController = new AbortController();
    const [worker, registration] = await this.#startWorker();
    if (worker.state !== "activated") {
      const controller = new AbortController();
      const activationPromise = new DeferredPromise2();
      activationPromise.then(() => controller.abort());
      worker.addEventListener(
        "statechange",
        () => {
          if (worker.state === "activated") {
            activationPromise.resolve();
          }
        },
        {
          signal: controller.signal
        }
      );
      await activationPromise;
    }
    this.#channel.postMessage("MOCK_ACTIVATE");
    const clientConfirmationPromise = new DeferredPromise2();
    this.#clientPromise = clientConfirmationPromise;
    this.#channel.once("MOCKING_ENABLED", (event) => {
      clientConfirmationPromise.resolve(event.data.client);
    });
    await clientConfirmationPromise;
    if (!this.#options.quiet) {
      this.#printStartMessage();
    }
    return registration;
  }
  disable() {
    if (typeof this.#stoppedAt !== "undefined") {
      import_devUtils3.devUtils.warn(
        `Found a redundant "worker.stop()" call. Notice that stopping the worker after it has already been stopped has no effect. Consider removing this "worker.stop()" call.`
      );
      return;
    }
    this.#stoppedAt = Date.now();
    this.#listenerController?.abort();
    this.#listenerController = void 0;
    this.#channel.postMessage("CLIENT_CLOSED");
    if (!this.#options.quiet) {
      this.#printStopMessage();
    }
  }
  /**
   * Terminal teardown. Unregisters the Service Worker, tears down the channel,
   * and clears timers. Called when the singleton is being replaced with one
   * that has different options. The instance is not usable afterwards.
   */
  async terminate() {
    if (this.#keepAliveInterval != null) {
      clearInterval(this.#keepAliveInterval);
      this.#keepAliveInterval = void 0;
    }
    this.#frames.clear();
    this.#channel.terminate();
    this.#listenerController?.abort();
    this.#listenerController = void 0;
    if (this.workerPromise.state === "fulfilled") {
      const [, registration] = await this.workerPromise;
      await registration.unregister();
    }
    if (_ServiceWorkerSource.#current === this) {
      _ServiceWorkerSource.#current = void 0;
    }
  }
  async #startWorker() {
    if (this.#keepAliveInterval) {
      clearInterval(this.#keepAliveInterval);
    }
    const workerUrl = this.#options.serviceWorker.url;
    const [worker, registration] = await getWorkerInstance(
      workerUrl,
      this.#options.serviceWorker.options,
      this.#options.findWorker || this.#defaultFindWorker
    );
    if (worker == null) {
      const missingWorkerMessage = this.#options?.findWorker ? import_devUtils3.devUtils.formatMessage(
        `Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
     `,
        workerUrl
      ) : import_devUtils3.devUtils.formatMessage(
        `Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,
        workerUrl,
        location.host
      );
      throw new Error(missingWorkerMessage);
    }
    if (this.workerPromise.state === "pending") {
      this.workerPromise.resolve([worker, registration]);
    } else {
      this.workerPromise = new DeferredPromise2((resolve) => {
        resolve([worker, registration]);
      });
    }
    this.#channel.on("REQUEST", this.#handleRequest.bind(this));
    this.#channel.on("RESPONSE", this.#handleResponse.bind(this));
    window.addEventListener(
      "beforeunload",
      () => {
        if (worker.state !== "redundant") {
          this.#channel.postMessage("CLIENT_CLOSED");
        }
        clearInterval(this.#keepAliveInterval);
        window.postMessage({ type: "msw/worker:stop" });
      },
      {
        signal: this.#listenerController?.signal
      }
    );
    await this.#checkWorkerIntegrity().catch((error2) => {
      import_devUtils3.devUtils.error(
        "Error while checking the worker script integrity. Please report this on GitHub (https://github.com/mswjs/msw/issues) and include the original error below."
      );
      console.error(error2);
    });
    this.#keepAliveInterval = window.setInterval(() => {
      this.#channel.postMessage("KEEPALIVE_REQUEST");
    }, 5e3);
    if (!this.#options.quiet) {
      validateWorkerScope(registration);
    }
    return [worker, registration];
  }
  async #handleRequest(event) {
    if (this.#stoppedAt && event.data.interceptedAt > this.#stoppedAt) {
      return event.postMessage("PASSTHROUGH");
    }
    const request = deserializeRequest(event.data);
    import_RequestHandler.RequestHandler.cache.set(request, request.clone());
    const frame = new ServiceWorkerHttpNetworkFrame({
      event,
      request
    });
    this.#frames.set(event.data.id, frame);
    await this.queue(frame);
  }
  async #handleResponse(event) {
    const { request, response, isMockedResponse } = event.data;
    if (response.type?.includes("opaque")) {
      this.#frames.delete(request.id);
      return;
    }
    const frame = this.#frames.get(request.id);
    this.#frames.delete(request.id);
    if (frame == null) {
      return;
    }
    const fetchRequest = deserializeRequest(request);
    const fetchResponse = response.status === 0 ? Response.error() : new FetchResponse(
      /**
       * Responses may be streams here, but when we create a response object
       * with null-body status codes, like 204, 205, 304 Response will
       * throw when passed a non-null body, so ensure it's null here
       * for those codes
       */
      FetchResponse.isResponseWithBody(response.status) ? response.body : null,
      {
        ...response,
        /**
         * Set response URL if it's not set already.
         * @see https://github.com/mswjs/msw/issues/2030
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Response/url
         */
        url: request.url
      }
    );
    frame.events.emit(
      new import_http_frame.ResponseEvent(
        isMockedResponse ? "response:mocked" : "response:bypass",
        {
          requestId: frame.data.id,
          request: fetchRequest,
          response: fetchResponse,
          isMockedResponse
        }
      )
    );
  }
  #defaultFindWorker = (workerUrl, mockServiceWorkerUrl) => {
    return workerUrl === mockServiceWorkerUrl;
  };
  async #checkWorkerIntegrity() {
    const integrityCheckPromise = new DeferredPromise2();
    this.#channel.postMessage("INTEGRITY_CHECK_REQUEST");
    this.#channel.once("INTEGRITY_CHECK_RESPONSE", (event) => {
      const { checksum, packageVersion } = event.data;
      if (checksum !== "4db4a41e972cec1b64cc569c66952d82") {
        import_devUtils3.devUtils.warn(
          `The currently registered Service Worker has been generated by a different version of MSW (${packageVersion}) and may not be fully compatible with the installed version.

It's recommended you update your worker script by running this command:

  \u2022 npx msw init <PUBLIC_DIR>

You can also automate this process and make the worker script update automatically upon the library installations. Read more: https://mswjs.io/docs/cli/init.`
        );
      }
      integrityCheckPromise.resolve();
    });
    return integrityCheckPromise;
  }
  async #printStartMessage() {
    if (this.workerPromise.state === "rejected") {
      return;
    }
    invariant(
      this.#clientPromise != null,
      "[ServiceWorkerSource] Failed to print a start message: client confirmation not received"
    );
    const client = await this.#clientPromise;
    const [worker, registration] = await this.workerPromise;
    console.groupCollapsed(
      `%c${import_devUtils3.devUtils.formatMessage("Mocking enabled.")}`,
      "color:orangered;font-weight:bold;"
    );
    console.log(
      "%cDocumentation: %chttps://mswjs.io/docs",
      "font-weight:bold",
      "font-weight:normal"
    );
    console.log("Found an issue? https://github.com/mswjs/msw/issues");
    console.log("Worker script URL:", worker.scriptURL);
    console.log("Worker scope:", registration.scope);
    if (client) {
      console.log("Client ID: %s (%s)", client.id, client.frameType);
    }
    console.groupEnd();
  }
  #printStopMessage() {
    console.log(
      `%c${import_devUtils3.devUtils.formatMessage("Mocking disabled.")}`,
      "color:orangered;font-weight:bold;"
    );
  }
};
var ServiceWorkerHttpNetworkFrame = class extends import_http_frame.HttpNetworkFrame {
  #event;
  constructor(options) {
    super({ request: options.request });
    this.#event = options.event;
  }
  passthrough() {
    this.#event.postMessage("PASSTHROUGH");
  }
  respondWith(response) {
    if (response) {
      this.#respondWith(response);
    }
  }
  errorWith(reason) {
    if (reason instanceof Response) {
      return this.respondWith(reason);
    }
    import_devUtils3.devUtils.warn(
      `Uncaught exception in the request handler for "%s %s". This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/http/mocking-responses/error-responses`,
      this.data.request.method,
      this.data.request.url
    );
    const error2 = reason instanceof Error ? reason : new Error(reason?.toString() || "Request failure");
    this.respondWith(
      import_HttpResponse.HttpResponse.json(
        {
          name: error2.name,
          message: error2.message,
          stack: error2.stack
        },
        {
          status: 500,
          statusText: "Request Handler Error"
        }
      )
    );
  }
  async #respondWith(response) {
    let responseBody;
    let transfer;
    const responseInit = (0, import_toResponseInit.toResponseInit)(response);
    if (supportsReadableStreamTransfer()) {
      responseBody = response.body;
      transfer = response.body == null ? void 0 : [response.body];
    } else {
      responseBody = response.body == null ? null : await response.clone().arrayBuffer();
    }
    this.#event.postMessage(
      "MOCK_RESPONSE",
      {
        ...responseInit,
        body: responseBody
      },
      transfer
    );
  }
};

// node_modules/.pnpm/@open-draft+until@2.1.0/node_modules/@open-draft/until/lib/index.mjs
var until2 = async (promise) => {
  try {
    const data = await promise().catch((error2) => {
      throw error2;
    });
    return { error: null, data };
  } catch (error2) {
    return { error: error2, data: null };
  }
};

// node_modules/.pnpm/@mswjs+interceptors@0.41.3/node_modules/@mswjs/interceptors/lib/browser/handleRequest-D7kpTI5U.mjs
function isObject2(value, loose = false) {
  return loose ? Object.prototype.toString.call(value).startsWith("[object ") : Object.prototype.toString.call(value) === "[object Object]";
}
function isPropertyAccessible(obj, key) {
  try {
    obj[key];
    return true;
  } catch {
    return false;
  }
}
function createServerErrorResponse(body) {
  return new Response(JSON.stringify(body instanceof Error ? {
    name: body.name,
    message: body.message,
    stack: body.stack
  } : body), {
    status: 500,
    statusText: "Unhandled Exception",
    headers: { "Content-Type": "application/json" }
  });
}
function isResponseError(response) {
  return response != null && response instanceof Response && isPropertyAccessible(response, "type") && response.type === "error";
}
function isResponseLike(value) {
  return isObject2(value, true) && isPropertyAccessible(value, "status") && isPropertyAccessible(value, "statusText") && isPropertyAccessible(value, "bodyUsed");
}
function isNodeLikeError(error2) {
  if (error2 == null) return false;
  if (!(error2 instanceof Error)) return false;
  return "code" in error2 && "errno" in error2;
}
async function handleRequest(options) {
  const handleResponse = async (response) => {
    if (response instanceof Error) {
      await options.controller.errorWith(response);
      return true;
    }
    if (isResponseError(response)) {
      await options.controller.respondWith(response);
      return true;
    }
    if (isResponseLike(response)) {
      await options.controller.respondWith(response);
      return true;
    }
    if (isObject2(response)) {
      await options.controller.errorWith(response);
      return true;
    }
    return false;
  };
  const handleResponseError = async (error2) => {
    if (error2 instanceof InterceptorError) throw result.error;
    if (isNodeLikeError(error2)) {
      await options.controller.errorWith(error2);
      return true;
    }
    if (error2 instanceof Response) return await handleResponse(error2);
    return false;
  };
  const requestAbortPromise = new DeferredPromise();
  if (options.request.signal) {
    if (options.request.signal.aborted) {
      await options.controller.errorWith(options.request.signal.reason);
      return;
    }
    options.request.signal.addEventListener("abort", () => {
      requestAbortPromise.reject(options.request.signal.reason);
    }, { once: true });
  }
  const result = await until2(async () => {
    const requestListenersPromise = emitAsync(options.emitter, "request", {
      requestId: options.requestId,
      request: options.request,
      controller: options.controller
    });
    await Promise.race([
      requestAbortPromise,
      requestListenersPromise,
      options.controller.handled
    ]);
  });
  if (requestAbortPromise.state === "rejected") {
    await options.controller.errorWith(requestAbortPromise.rejectionReason);
    return;
  }
  if (result.error) {
    if (await handleResponseError(result.error)) return;
    if (options.emitter.listenerCount("unhandledException") > 0) {
      const unhandledExceptionController = new RequestController(options.request, {
        passthrough() {
        },
        async respondWith(response) {
          await handleResponse(response);
        },
        async errorWith(reason) {
          await options.controller.errorWith(reason);
        }
      });
      await emitAsync(options.emitter, "unhandledException", {
        error: result.error,
        request: options.request,
        requestId: options.requestId,
        controller: unhandledExceptionController
      });
      if (unhandledExceptionController.readyState !== RequestController.PENDING) return;
    }
    await options.controller.respondWith(createServerErrorResponse(result.error));
    return;
  }
  if (options.controller.readyState === RequestController.PENDING) return await options.controller.passthrough();
  return options.controller.handled;
}

// node_modules/.pnpm/@mswjs+interceptors@0.41.3/node_modules/@mswjs/interceptors/lib/browser/fetch-DdKEdDOR.mjs
function createNetworkError(cause) {
  return Object.assign(/* @__PURE__ */ new TypeError("Failed to fetch"), { cause });
}
var REQUEST_BODY_HEADERS = [
  "content-encoding",
  "content-language",
  "content-location",
  "content-type",
  "content-length"
];
var kRedirectCount = Symbol("kRedirectCount");
async function followFetchRedirect(request, response) {
  if (response.status !== 303 && request.body != null) return Promise.reject(createNetworkError());
  const requestUrl = new URL(request.url);
  let locationUrl;
  try {
    locationUrl = new URL(response.headers.get("location"), request.url);
  } catch (error2) {
    return Promise.reject(createNetworkError(error2));
  }
  if (!(locationUrl.protocol === "http:" || locationUrl.protocol === "https:")) return Promise.reject(createNetworkError("URL scheme must be a HTTP(S) scheme"));
  if (Reflect.get(request, kRedirectCount) > 20) return Promise.reject(createNetworkError("redirect count exceeded"));
  Object.defineProperty(request, kRedirectCount, { value: (Reflect.get(request, kRedirectCount) || 0) + 1 });
  if (request.mode === "cors" && (locationUrl.username || locationUrl.password) && !sameOrigin(requestUrl, locationUrl)) return Promise.reject(createNetworkError('cross origin not allowed for request mode "cors"'));
  const requestInit = {};
  if ([301, 302].includes(response.status) && request.method === "POST" || response.status === 303 && !["HEAD", "GET"].includes(request.method)) {
    requestInit.method = "GET";
    requestInit.body = null;
    REQUEST_BODY_HEADERS.forEach((headerName) => {
      request.headers.delete(headerName);
    });
  }
  if (!sameOrigin(requestUrl, locationUrl)) {
    request.headers.delete("authorization");
    request.headers.delete("proxy-authorization");
    request.headers.delete("cookie");
    request.headers.delete("host");
  }
  requestInit.headers = request.headers;
  const finalResponse = await fetch(new Request(locationUrl, requestInit));
  Object.defineProperty(finalResponse, "redirected", {
    value: true,
    configurable: true
  });
  return finalResponse;
}
function sameOrigin(left, right) {
  if (left.origin === right.origin && left.origin === "null") return true;
  if (left.protocol === right.protocol && left.hostname === right.hostname && left.port === right.port) return true;
  return false;
}
var BrotliDecompressionStream = class extends TransformStream {
  constructor() {
    console.warn("[Interceptors]: Brotli decompression of response streams is not supported in the browser");
    super({ transform(chunk, controller) {
      controller.enqueue(chunk);
    } });
  }
};
var PipelineStream = class extends TransformStream {
  constructor(transformStreams, ...strategies) {
    super({}, ...strategies);
    const readable = [super.readable, ...transformStreams].reduce((readable$1, transform) => readable$1.pipeThrough(transform));
    Object.defineProperty(this, "readable", { get() {
      return readable;
    } });
  }
};
function parseContentEncoding(contentEncoding) {
  return contentEncoding.toLowerCase().split(",").map((coding) => coding.trim());
}
function createDecompressionStream(contentEncoding) {
  if (contentEncoding === "") return null;
  const codings = parseContentEncoding(contentEncoding);
  if (codings.length === 0) return null;
  return new PipelineStream(codings.reduceRight((transformers, coding) => {
    if (coding === "gzip" || coding === "x-gzip") return transformers.concat(new DecompressionStream("gzip"));
    else if (coding === "deflate") return transformers.concat(new DecompressionStream("deflate"));
    else if (coding === "br") return transformers.concat(new BrotliDecompressionStream());
    else transformers.length = 0;
    return transformers;
  }, []));
}
function decompressResponse(response) {
  if (response.body === null) return null;
  const decompressionStream = createDecompressionStream(response.headers.get("content-encoding") || "");
  if (!decompressionStream) return null;
  response.body.pipeTo(decompressionStream.writable);
  return decompressionStream.readable;
}
var FetchInterceptor = class FetchInterceptor2 extends Interceptor {
  static {
    this.symbol = Symbol("fetch");
  }
  constructor() {
    super(FetchInterceptor2.symbol);
  }
  checkEnvironment() {
    return hasConfigurableGlobal("fetch");
  }
  async setup() {
    const pureFetch = globalThis.fetch;
    invariant(!pureFetch[IS_PATCHED_MODULE], 'Failed to patch the "fetch" module: already patched.');
    globalThis.fetch = async (input, init) => {
      const requestId = createRequestId();
      const resolvedInput = typeof input === "string" && typeof location !== "undefined" && !canParseUrl(input) ? new URL(input, location.href) : input;
      const request = new Request(resolvedInput, init);
      if (input instanceof Request) setRawRequest(request, input);
      const responsePromise = new DeferredPromise();
      const controller = new RequestController(request, {
        passthrough: async () => {
          this.logger.info("request has not been handled, passthrough...");
          const requestCloneForResponseEvent = request.clone();
          const { error: responseError, data: originalResponse } = await until2(() => pureFetch(request));
          if (responseError) return responsePromise.reject(responseError);
          this.logger.info("original fetch performed", originalResponse);
          if (this.emitter.listenerCount("response") > 0) {
            this.logger.info('emitting the "response" event...');
            const responseClone = originalResponse.clone();
            await emitAsync(this.emitter, "response", {
              response: responseClone,
              isMockedResponse: false,
              request: requestCloneForResponseEvent,
              requestId
            });
          }
          responsePromise.resolve(originalResponse);
        },
        respondWith: async (rawResponse) => {
          if (isResponseError(rawResponse)) {
            this.logger.info("request has errored!", { response: rawResponse });
            responsePromise.reject(createNetworkError(rawResponse));
            return;
          }
          this.logger.info("received mocked response!", { rawResponse });
          const decompressedStream = decompressResponse(rawResponse);
          const response = decompressedStream === null ? rawResponse : new FetchResponse(decompressedStream, rawResponse);
          FetchResponse.setUrl(request.url, response);
          if (FetchResponse.isRedirectResponse(response.status)) {
            if (request.redirect === "error") {
              responsePromise.reject(createNetworkError("unexpected redirect"));
              return;
            }
            if (request.redirect === "follow") {
              followFetchRedirect(request, response).then((response$1) => {
                responsePromise.resolve(response$1);
              }, (reason) => {
                responsePromise.reject(reason);
              });
              return;
            }
          }
          if (this.emitter.listenerCount("response") > 0) {
            this.logger.info('emitting the "response" event...');
            await emitAsync(this.emitter, "response", {
              response: response.clone(),
              isMockedResponse: true,
              request,
              requestId
            });
          }
          responsePromise.resolve(response);
        },
        errorWith: (reason) => {
          this.logger.info("request has been aborted!", { reason });
          responsePromise.reject(reason);
        }
      });
      this.logger.info("[%s] %s", request.method, request.url);
      this.logger.info("awaiting for the mocked response...");
      this.logger.info('emitting the "request" event for %s listener(s)...', this.emitter.listenerCount("request"));
      await handleRequest({
        request,
        requestId,
        emitter: this.emitter,
        controller
      });
      return responsePromise;
    };
    Object.defineProperty(globalThis.fetch, IS_PATCHED_MODULE, {
      enumerable: true,
      configurable: true,
      value: true
    });
    this.subscriptions.push(() => {
      Object.defineProperty(globalThis.fetch, IS_PATCHED_MODULE, { value: void 0 });
      globalThis.fetch = pureFetch;
      this.logger.info('restored native "globalThis.fetch"!', globalThis.fetch.name);
    });
  }
};

// node_modules/.pnpm/@mswjs+interceptors@0.41.3/node_modules/@mswjs/interceptors/lib/browser/XMLHttpRequest-BvxZV0WU.mjs
function concatArrayBuffer(left, right) {
  const result = new Uint8Array(left.byteLength + right.byteLength);
  result.set(left, 0);
  result.set(right, left.byteLength);
  return result;
}
var EventPolyfill = class {
  constructor(type, options) {
    this.NONE = 0;
    this.CAPTURING_PHASE = 1;
    this.AT_TARGET = 2;
    this.BUBBLING_PHASE = 3;
    this.type = "";
    this.srcElement = null;
    this.currentTarget = null;
    this.eventPhase = 0;
    this.isTrusted = true;
    this.composed = false;
    this.cancelable = true;
    this.defaultPrevented = false;
    this.bubbles = true;
    this.lengthComputable = true;
    this.loaded = 0;
    this.total = 0;
    this.cancelBubble = false;
    this.returnValue = true;
    this.type = type;
    this.target = options?.target || null;
    this.currentTarget = options?.currentTarget || null;
    this.timeStamp = Date.now();
  }
  composedPath() {
    return [];
  }
  initEvent(type, bubbles, cancelable) {
    this.type = type;
    this.bubbles = !!bubbles;
    this.cancelable = !!cancelable;
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
  stopPropagation() {
  }
  stopImmediatePropagation() {
  }
};
var ProgressEventPolyfill = class extends EventPolyfill {
  constructor(type, init) {
    super(type);
    this.lengthComputable = init?.lengthComputable || false;
    this.composed = init?.composed || false;
    this.loaded = init?.loaded || 0;
    this.total = init?.total || 0;
  }
};
var SUPPORTS_PROGRESS_EVENT = typeof ProgressEvent !== "undefined";
function createEvent(target, type, init) {
  const progressEvents = [
    "error",
    "progress",
    "loadstart",
    "loadend",
    "load",
    "timeout",
    "abort"
  ];
  const ProgressEventClass = SUPPORTS_PROGRESS_EVENT ? ProgressEvent : ProgressEventPolyfill;
  return progressEvents.includes(type) ? new ProgressEventClass(type, {
    lengthComputable: true,
    loaded: init?.loaded || 0,
    total: init?.total || 0
  }) : new EventPolyfill(type, {
    target,
    currentTarget: target
  });
}
function findPropertySource(target, propertyName) {
  if (!(propertyName in target)) return null;
  if (Object.prototype.hasOwnProperty.call(target, propertyName)) return target;
  const prototype = Reflect.getPrototypeOf(target);
  return prototype ? findPropertySource(prototype, propertyName) : null;
}
function createProxy(target, options) {
  return new Proxy(target, optionsToProxyHandler(options));
}
function optionsToProxyHandler(options) {
  const { constructorCall, methodCall, getProperty, setProperty } = options;
  const handler = {};
  if (typeof constructorCall !== "undefined") handler.construct = function(target, args, newTarget) {
    const next = Reflect.construct.bind(null, target, args, newTarget);
    return constructorCall.call(newTarget, args, next);
  };
  handler.set = function(target, propertyName, nextValue) {
    const next = () => {
      const propertySource = findPropertySource(target, propertyName) || target;
      const ownDescriptors = Reflect.getOwnPropertyDescriptor(propertySource, propertyName);
      if (typeof ownDescriptors?.set !== "undefined") {
        ownDescriptors.set.apply(target, [nextValue]);
        return true;
      }
      return Reflect.defineProperty(propertySource, propertyName, {
        writable: true,
        enumerable: true,
        configurable: true,
        value: nextValue
      });
    };
    if (typeof setProperty !== "undefined") return setProperty.call(target, [propertyName, nextValue], next);
    return next();
  };
  handler.get = function(target, propertyName, receiver) {
    const next = () => target[propertyName];
    const value = typeof getProperty !== "undefined" ? getProperty.call(target, [propertyName, receiver], next) : next();
    if (typeof value === "function") return (...args) => {
      const next$1 = value.bind(target, ...args);
      if (typeof methodCall !== "undefined") return methodCall.call(target, [propertyName, args], next$1);
      return next$1();
    };
    return value;
  };
  return handler;
}
function isDomParserSupportedType(type) {
  return [
    "application/xhtml+xml",
    "application/xml",
    "image/svg+xml",
    "text/html",
    "text/xml"
  ].some((supportedType) => {
    return type.startsWith(supportedType);
  });
}
function parseJson(data) {
  try {
    return JSON.parse(data);
  } catch (_) {
    return null;
  }
}
function createResponse(request, body) {
  return new FetchResponse(FetchResponse.isResponseWithBody(request.status) ? body : null, {
    url: request.responseURL,
    status: request.status,
    statusText: request.statusText,
    headers: createHeadersFromXMLHttpRequestHeaders(request.getAllResponseHeaders())
  });
}
function createHeadersFromXMLHttpRequestHeaders(headersString) {
  const headers = new Headers();
  const lines = headersString.split(/[\r\n]+/);
  for (const line of lines) {
    if (line.trim() === "") continue;
    const [name, ...parts] = line.split(": ");
    const value = parts.join(": ");
    headers.append(name, value);
  }
  return headers;
}
async function getBodyByteLength(input) {
  const explicitContentLength = input.headers.get("content-length");
  if (explicitContentLength != null && explicitContentLength !== "") return Number(explicitContentLength);
  return (await input.arrayBuffer()).byteLength;
}
var kIsRequestHandled = Symbol("kIsRequestHandled");
var IS_NODE2 = isNodeProcess();
var kFetchRequest = Symbol("kFetchRequest");
var XMLHttpRequestController = class {
  constructor(initialRequest, logger) {
    this.initialRequest = initialRequest;
    this.logger = logger;
    this.method = "GET";
    this.url = null;
    this[kIsRequestHandled] = false;
    this.events = /* @__PURE__ */ new Map();
    this.uploadEvents = /* @__PURE__ */ new Map();
    this.requestId = createRequestId();
    this.requestHeaders = new Headers();
    this.responseBuffer = new Uint8Array();
    this.request = createProxy(initialRequest, {
      setProperty: ([propertyName, nextValue], invoke) => {
        switch (propertyName) {
          case "ontimeout": {
            const eventName = propertyName.slice(2);
            this.request.addEventListener(eventName, nextValue);
            return invoke();
          }
          default:
            return invoke();
        }
      },
      methodCall: ([methodName, args], invoke) => {
        switch (methodName) {
          case "open": {
            const [method, url] = args;
            if (typeof url === "undefined") {
              this.method = "GET";
              this.url = toAbsoluteUrl(method);
            } else {
              this.method = method;
              this.url = toAbsoluteUrl(url);
            }
            this.logger = this.logger.extend(`${this.method} ${this.url.href}`);
            this.logger.info("open", this.method, this.url.href);
            return invoke();
          }
          case "addEventListener": {
            const [eventName, listener] = args;
            this.registerEvent(eventName, listener);
            this.logger.info("addEventListener", eventName, listener);
            return invoke();
          }
          case "setRequestHeader": {
            const [name, value] = args;
            this.requestHeaders.set(name, value);
            this.logger.info("setRequestHeader", name, value);
            return invoke();
          }
          case "send": {
            const [body] = args;
            this.request.addEventListener("load", () => {
              if (typeof this.onResponse !== "undefined") {
                const fetchResponse = createResponse(
                  this.request,
                  /**
                  * The `response` property is the right way to read
                  * the ambiguous response body, as the request's "responseType" may differ.
                  * @see https://xhr.spec.whatwg.org/#the-response-attribute
                  */
                  this.request.response
                );
                this.onResponse.call(this, {
                  response: fetchResponse,
                  isMockedResponse: this[kIsRequestHandled],
                  request: fetchRequest,
                  requestId: this.requestId
                });
              }
            });
            const requestBody = typeof body === "string" ? encodeBuffer(body) : body;
            const fetchRequest = this.toFetchApiRequest(requestBody);
            this[kFetchRequest] = fetchRequest.clone();
            queueMicrotask(() => {
              (this.onRequest?.call(this, {
                request: fetchRequest,
                requestId: this.requestId
              }) || Promise.resolve()).finally(() => {
                if (!this[kIsRequestHandled]) {
                  this.logger.info("request callback settled but request has not been handled (readystate %d), performing as-is...", this.request.readyState);
                  if (IS_NODE2) this.request.setRequestHeader(INTERNAL_REQUEST_ID_HEADER_NAME, this.requestId);
                  return invoke();
                }
              });
            });
            break;
          }
          default:
            return invoke();
        }
      }
    });
    define(this.request, "upload", createProxy(this.request.upload, {
      setProperty: ([propertyName, nextValue], invoke) => {
        switch (propertyName) {
          case "onloadstart":
          case "onprogress":
          case "onaboart":
          case "onerror":
          case "onload":
          case "ontimeout":
          case "onloadend": {
            const eventName = propertyName.slice(2);
            this.registerUploadEvent(eventName, nextValue);
          }
        }
        return invoke();
      },
      methodCall: ([methodName, args], invoke) => {
        switch (methodName) {
          case "addEventListener": {
            const [eventName, listener] = args;
            this.registerUploadEvent(eventName, listener);
            this.logger.info("upload.addEventListener", eventName, listener);
            return invoke();
          }
        }
      }
    }));
  }
  registerEvent(eventName, listener) {
    const nextEvents = (this.events.get(eventName) || []).concat(listener);
    this.events.set(eventName, nextEvents);
    this.logger.info('registered event "%s"', eventName, listener);
  }
  registerUploadEvent(eventName, listener) {
    const nextEvents = (this.uploadEvents.get(eventName) || []).concat(listener);
    this.uploadEvents.set(eventName, nextEvents);
    this.logger.info('registered upload event "%s"', eventName, listener);
  }
  /**
  * Responds to the current request with the given
  * Fetch API `Response` instance.
  */
  async respondWith(response) {
    this[kIsRequestHandled] = true;
    if (this[kFetchRequest]) {
      const totalRequestBodyLength = await getBodyByteLength(this[kFetchRequest]);
      this.trigger("loadstart", this.request.upload, {
        loaded: 0,
        total: totalRequestBodyLength
      });
      this.trigger("progress", this.request.upload, {
        loaded: totalRequestBodyLength,
        total: totalRequestBodyLength
      });
      this.trigger("load", this.request.upload, {
        loaded: totalRequestBodyLength,
        total: totalRequestBodyLength
      });
      this.trigger("loadend", this.request.upload, {
        loaded: totalRequestBodyLength,
        total: totalRequestBodyLength
      });
    }
    this.logger.info("responding with a mocked response: %d %s", response.status, response.statusText);
    define(this.request, "status", response.status);
    define(this.request, "statusText", response.statusText);
    define(this.request, "responseURL", this.url.href);
    this.request.getResponseHeader = new Proxy(this.request.getResponseHeader, { apply: (_, __, args) => {
      this.logger.info("getResponseHeader", args[0]);
      if (this.request.readyState < this.request.HEADERS_RECEIVED) {
        this.logger.info("headers not received yet, returning null");
        return null;
      }
      const headerValue = response.headers.get(args[0]);
      this.logger.info('resolved response header "%s" to', args[0], headerValue);
      return headerValue;
    } });
    this.request.getAllResponseHeaders = new Proxy(this.request.getAllResponseHeaders, { apply: () => {
      this.logger.info("getAllResponseHeaders");
      if (this.request.readyState < this.request.HEADERS_RECEIVED) {
        this.logger.info("headers not received yet, returning empty string");
        return "";
      }
      const allHeaders = Array.from(response.headers.entries()).map(([headerName, headerValue]) => {
        return `${headerName}: ${headerValue}`;
      }).join("\r\n");
      this.logger.info("resolved all response headers to", allHeaders);
      return allHeaders;
    } });
    Object.defineProperties(this.request, {
      response: {
        enumerable: true,
        configurable: false,
        get: () => this.response
      },
      responseText: {
        enumerable: true,
        configurable: false,
        get: () => this.responseText
      },
      responseXML: {
        enumerable: true,
        configurable: false,
        get: () => this.responseXML
      }
    });
    const totalResponseBodyLength = await getBodyByteLength(response.clone());
    this.logger.info("calculated response body length", totalResponseBodyLength);
    this.trigger("loadstart", this.request, {
      loaded: 0,
      total: totalResponseBodyLength
    });
    this.setReadyState(this.request.HEADERS_RECEIVED);
    this.setReadyState(this.request.LOADING);
    const finalizeResponse = () => {
      this.logger.info("finalizing the mocked response...");
      this.setReadyState(this.request.DONE);
      this.trigger("load", this.request, {
        loaded: this.responseBuffer.byteLength,
        total: totalResponseBodyLength
      });
      this.trigger("loadend", this.request, {
        loaded: this.responseBuffer.byteLength,
        total: totalResponseBodyLength
      });
    };
    if (response.body) {
      this.logger.info("mocked response has body, streaming...");
      const reader = response.body.getReader();
      const readNextResponseBodyChunk = async () => {
        const { value, done } = await reader.read();
        if (done) {
          this.logger.info("response body stream done!");
          finalizeResponse();
          return;
        }
        if (value) {
          this.logger.info("read response body chunk:", value);
          this.responseBuffer = concatArrayBuffer(this.responseBuffer, value);
          this.trigger("progress", this.request, {
            loaded: this.responseBuffer.byteLength,
            total: totalResponseBodyLength
          });
        }
        readNextResponseBodyChunk();
      };
      readNextResponseBodyChunk();
    } else finalizeResponse();
  }
  responseBufferToText() {
    return decodeBuffer(this.responseBuffer);
  }
  get response() {
    this.logger.info("getResponse (responseType: %s)", this.request.responseType);
    if (this.request.readyState !== this.request.DONE) return null;
    switch (this.request.responseType) {
      case "json": {
        const responseJson = parseJson(this.responseBufferToText());
        this.logger.info("resolved response JSON", responseJson);
        return responseJson;
      }
      case "arraybuffer": {
        const arrayBuffer = toArrayBuffer(this.responseBuffer);
        this.logger.info("resolved response ArrayBuffer", arrayBuffer);
        return arrayBuffer;
      }
      case "blob": {
        const mimeType = this.request.getResponseHeader("Content-Type") || "text/plain";
        const responseBlob = new Blob([this.responseBufferToText()], { type: mimeType });
        this.logger.info("resolved response Blob (mime type: %s)", responseBlob, mimeType);
        return responseBlob;
      }
      default: {
        const responseText = this.responseBufferToText();
        this.logger.info('resolving "%s" response type as text', this.request.responseType, responseText);
        return responseText;
      }
    }
  }
  get responseText() {
    invariant(this.request.responseType === "" || this.request.responseType === "text", "InvalidStateError: The object is in invalid state.");
    if (this.request.readyState !== this.request.LOADING && this.request.readyState !== this.request.DONE) return "";
    const responseText = this.responseBufferToText();
    this.logger.info('getResponseText: "%s"', responseText);
    return responseText;
  }
  get responseXML() {
    invariant(this.request.responseType === "" || this.request.responseType === "document", "InvalidStateError: The object is in invalid state.");
    if (this.request.readyState !== this.request.DONE) return null;
    const contentType = this.request.getResponseHeader("Content-Type") || "";
    if (typeof DOMParser === "undefined") {
      console.warn("Cannot retrieve XMLHttpRequest response body as XML: DOMParser is not defined. You are likely using an environment that is not browser or does not polyfill browser globals correctly.");
      return null;
    }
    if (isDomParserSupportedType(contentType)) return new DOMParser().parseFromString(this.responseBufferToText(), contentType);
    return null;
  }
  errorWith(error2) {
    this[kIsRequestHandled] = true;
    this.logger.info("responding with an error");
    this.setReadyState(this.request.DONE);
    this.trigger("error", this.request);
    this.trigger("loadend", this.request);
  }
  /**
  * Transitions this request's `readyState` to the given one.
  */
  setReadyState(nextReadyState) {
    this.logger.info("setReadyState: %d -> %d", this.request.readyState, nextReadyState);
    if (this.request.readyState === nextReadyState) {
      this.logger.info("ready state identical, skipping transition...");
      return;
    }
    define(this.request, "readyState", nextReadyState);
    this.logger.info("set readyState to: %d", nextReadyState);
    if (nextReadyState !== this.request.UNSENT) {
      this.logger.info('triggering "readystatechange" event...');
      this.trigger("readystatechange", this.request);
    }
  }
  /**
  * Triggers given event on the `XMLHttpRequest` instance.
  */
  trigger(eventName, target, options) {
    const callback = target[`on${eventName}`];
    const event = createEvent(target, eventName, options);
    this.logger.info('trigger "%s"', eventName, options || "");
    if (typeof callback === "function") {
      this.logger.info('found a direct "%s" callback, calling...', eventName);
      callback.call(target, event);
    }
    const events = target instanceof XMLHttpRequestUpload ? this.uploadEvents : this.events;
    for (const [registeredEventName, listeners] of events) if (registeredEventName === eventName) {
      this.logger.info('found %d listener(s) for "%s" event, calling...', listeners.length, eventName);
      listeners.forEach((listener) => listener.call(target, event));
    }
  }
  /**
  * Converts this `XMLHttpRequest` instance into a Fetch API `Request` instance.
  */
  toFetchApiRequest(body) {
    this.logger.info("converting request to a Fetch API Request...");
    const resolvedBody = body instanceof Document ? body.documentElement.innerText : body;
    const fetchRequest = new Request(this.url.href, {
      method: this.method,
      headers: this.requestHeaders,
      credentials: this.request.withCredentials ? "include" : "same-origin",
      body: ["GET", "HEAD"].includes(this.method.toUpperCase()) ? null : resolvedBody
    });
    define(fetchRequest, "headers", createProxy(fetchRequest.headers, { methodCall: ([methodName, args], invoke) => {
      switch (methodName) {
        case "append":
        case "set": {
          const [headerName, headerValue] = args;
          this.request.setRequestHeader(headerName, headerValue);
          break;
        }
        case "delete": {
          const [headerName] = args;
          console.warn(`XMLHttpRequest: Cannot remove a "${headerName}" header from the Fetch API representation of the "${fetchRequest.method} ${fetchRequest.url}" request. XMLHttpRequest headers cannot be removed.`);
          break;
        }
      }
      return invoke();
    } }));
    setRawRequest(fetchRequest, this.request);
    this.logger.info("converted request to a Fetch API Request!", fetchRequest);
    return fetchRequest;
  }
};
function toAbsoluteUrl(url) {
  if (typeof location === "undefined") return new URL(url);
  return new URL(url.toString(), location.href);
}
function define(target, property, value) {
  Reflect.defineProperty(target, property, {
    writable: true,
    enumerable: true,
    value
  });
}
function createXMLHttpRequestProxy({ emitter, logger }) {
  return new Proxy(globalThis.XMLHttpRequest, { construct(target, args, newTarget) {
    logger.info("constructed new XMLHttpRequest");
    const originalRequest = Reflect.construct(target, args, newTarget);
    const prototypeDescriptors = Object.getOwnPropertyDescriptors(target.prototype);
    for (const propertyName in prototypeDescriptors) Reflect.defineProperty(originalRequest, propertyName, prototypeDescriptors[propertyName]);
    const xhrRequestController = new XMLHttpRequestController(originalRequest, logger);
    xhrRequestController.onRequest = async function({ request, requestId }) {
      const controller = new RequestController(request, {
        passthrough: () => {
          this.logger.info("no mocked response received, performing request as-is...");
        },
        respondWith: async (response) => {
          if (isResponseError(response)) {
            this.errorWith(/* @__PURE__ */ new TypeError("Network error"));
            return;
          }
          await this.respondWith(response);
        },
        errorWith: (reason) => {
          this.logger.info("request errored!", { error: reason });
          if (reason instanceof Error) this.errorWith(reason);
        }
      });
      this.logger.info("awaiting mocked response...");
      this.logger.info('emitting the "request" event for %s listener(s)...', emitter.listenerCount("request"));
      await handleRequest({
        request,
        requestId,
        controller,
        emitter
      });
    };
    xhrRequestController.onResponse = async function({ response, isMockedResponse, request, requestId }) {
      this.logger.info('emitting the "response" event for %s listener(s)...', emitter.listenerCount("response"));
      emitter.emit("response", {
        response,
        isMockedResponse,
        request,
        requestId
      });
    };
    return xhrRequestController.request;
  } });
}
var XMLHttpRequestInterceptor = class XMLHttpRequestInterceptor2 extends Interceptor {
  static {
    this.interceptorSymbol = Symbol("xhr");
  }
  constructor() {
    super(XMLHttpRequestInterceptor2.interceptorSymbol);
  }
  checkEnvironment() {
    return hasConfigurableGlobal("XMLHttpRequest");
  }
  setup() {
    const logger = this.logger.extend("setup");
    logger.info('patching "XMLHttpRequest" module...');
    const PureXMLHttpRequest = globalThis.XMLHttpRequest;
    invariant(!PureXMLHttpRequest[IS_PATCHED_MODULE], 'Failed to patch the "XMLHttpRequest" module: already patched.');
    globalThis.XMLHttpRequest = createXMLHttpRequestProxy({
      emitter: this.emitter,
      logger: this.logger
    });
    logger.info('native "XMLHttpRequest" module patched!', globalThis.XMLHttpRequest.name);
    Object.defineProperty(globalThis.XMLHttpRequest, IS_PATCHED_MODULE, {
      enumerable: true,
      configurable: true,
      value: true
    });
    this.subscriptions.push(() => {
      Object.defineProperty(globalThis.XMLHttpRequest, IS_PATCHED_MODULE, { value: void 0 });
      globalThis.XMLHttpRequest = PureXMLHttpRequest;
      logger.info('native "XMLHttpRequest" module restored!', globalThis.XMLHttpRequest.name);
    });
  }
};

// src/browser/sources/fallback-http-source.ts
var import_interceptor_source = require("../core/experimental/sources/interceptor-source");
var import_devUtils4 = require("../core/utils/internal/devUtils");
var FallbackHttpSource = class extends import_interceptor_source.InterceptorSource {
  constructor(options) {
    super({
      interceptors: [new XMLHttpRequestInterceptor(), new FetchInterceptor()]
    });
    this.options = options;
  }
  enable() {
    super.enable();
    if (!this.options.quiet) {
      this.#printStartMessage();
    }
  }
  disable() {
    super.disable();
    if (!this.options.quiet) {
      this.#printStopMessage();
    }
  }
  #printStartMessage() {
    console.groupCollapsed(
      `%c${import_devUtils4.devUtils.formatMessage("Mocking enabled (fallback mode).")}`,
      "color:orangered;font-weight:bold;"
    );
    console.log(
      "%cDocumentation: %chttps://mswjs.io/docs",
      "font-weight:bold",
      "font-weight:normal"
    );
    console.log("Found an issue? https://github.com/mswjs/msw/issues");
    console.groupEnd();
  }
  #printStopMessage() {
    console.log(
      `%c${import_devUtils4.devUtils.formatMessage("Mocking disabled.")}`,
      "color:orangered;font-weight:bold;"
    );
  }
};

// src/browser/setup-worker.ts
var DEFAULT_WORKER_URL = "/mockServiceWorker.js";
function setupWorker(...handlers) {
  invariant(
    !isNodeProcess(),
    import_devUtils5.devUtils.formatMessage(
      "Failed to execute `setupWorker` in a non-browser environment"
    )
  );
  const network = (0, import_define_network.defineNetwork)({
    sources: [],
    handlers
  });
  return {
    async start(options) {
      if (options?.waitUntilReady != null) {
        import_devUtils5.devUtils.warn(
          `The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.`
        );
      }
      if (network.readyState === import_define_network.NetworkReadyState.ENABLED) {
        import_devUtils5.devUtils.warn(
          'Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.'
        );
        return;
      }
      const httpSource = supportsServiceWorker() ? await ServiceWorkerSource.from({
        serviceWorker: {
          url: options?.serviceWorker?.url?.toString() || DEFAULT_WORKER_URL,
          options: options?.serviceWorker?.options
        },
        findWorker: options?.findWorker,
        quiet: options?.quiet
      }) : new FallbackHttpSource({
        quiet: options?.quiet
      });
      network.configure({
        sources: [
          httpSource,
          new import_interceptor_source2.InterceptorSource({
            interceptors: [new WebSocketInterceptor()]
          })
        ],
        onUnhandledFrame: (0, import_compat.fromLegacyOnUnhandledRequest)(() => {
          return options?.onUnhandledRequest || "warn";
        }),
        context: {
          quiet: options?.quiet
        }
      });
      await network.enable();
      if (httpSource instanceof ServiceWorkerSource) {
        const [, registration] = await httpSource.workerPromise;
        return registration;
      }
    },
    stop() {
      if (network.readyState === import_define_network.NetworkReadyState.DISABLED) {
        import_devUtils5.devUtils.warn(
          `Found a redundant "worker.stop()" call. Notice that stopping the worker after it has already been stopped has no effect. Consider removing this "worker.stop()" call.`
        );
        return;
      }
      network.disable();
      window.postMessage({ type: "msw/worker:stop" });
    },
    events: network.events,
    use: network.use.bind(network),
    resetHandlers: network.resetHandlers.bind(network),
    restoreHandlers: network.restoreHandlers.bind(network),
    listHandlers: network.listHandlers.bind(network)
  };
}
var SetupWorkerApi = class {
  start;
  stop;
  use;
  resetHandlers;
  restoreHandlers;
  listHandlers;
  events;
  constructor() {
    const worker = setupWorker();
    this.start = worker.start.bind(worker);
    this.stop = worker.stop.bind(worker);
    this.use = worker.use.bind(worker);
    this.resetHandlers = worker.resetHandlers.bind(worker);
    this.restoreHandlers = worker.restoreHandlers.bind(worker);
    this.listHandlers = worker.listHandlers.bind(worker);
    this.events = worker.events;
  }
};
//# sourceMappingURL=index.js.map