Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const resource = require('./resource-DAnCj0wW.js');
const core = require('@sentry/core');
const api = require('@opentelemetry/api');
const node_async_hooks = require('node:async_hooks');
const node_events = require('node:events');
require('@opentelemetry/semantic-conventions');
require('@opentelemetry/core');
require('./debug-build-CQngOfDt.js');
require('@opentelemetry/sdk-trace-base');

const ADD_LISTENER_METHODS = ["addListener", "on", "once", "prependListener", "prependOnceListener"];
class SentryAsyncLocalStorageContextManager {
  constructor() {
    this._asyncLocalStorage = new node_async_hooks.AsyncLocalStorage();
    this._kOtListeners = /* @__PURE__ */ Symbol("OtListeners");
    this._wrapped = false;
    resource.setIsSetup("SentryContextManager");
  }
  active() {
    return this._asyncLocalStorage.getStore() ?? api.ROOT_CONTEXT;
  }
  with(context, fn, thisArg, ...args) {
    const ctx2 = resource.buildContextWithSentryScopes(context, this.active());
    const cb = thisArg == null ? fn : fn.bind(thisArg);
    return this._asyncLocalStorage.run(ctx2, cb, ...args);
  }
  enable() {
    return this;
  }
  disable() {
    this._asyncLocalStorage.disable();
    return this;
  }
  bind(context, target) {
    if (target instanceof node_events.EventEmitter) {
      return this._bindEventEmitter(context, target);
    }
    if (typeof target === "function") {
      return this._bindFunction(context, target);
    }
    return target;
  }
  /**
   * Gets underlying AsyncLocalStorage and symbol to allow lookup of scope.
   * This is Sentry-specific.
   */
  getAsyncLocalStorageLookup() {
    return {
      asyncLocalStorage: this._asyncLocalStorage,
      contextSymbol: resource.SENTRY_SCOPES_CONTEXT_KEY
    };
  }
  _bindFunction(context, target) {
    const managerWith = this.with.bind(this);
    const contextWrapper = function(...args) {
      return managerWith(context, () => target.apply(this, args));
    };
    Object.defineProperty(contextWrapper, "length", {
      enumerable: false,
      configurable: true,
      writable: false,
      value: target.length
    });
    return contextWrapper;
  }
  _bindEventEmitter(context, ee) {
    if (this._getPatchMap(ee) !== void 0) {
      return ee;
    }
    this._createPatchMap(ee);
    for (const methodName of ADD_LISTENER_METHODS) {
      if (ee[methodName] === void 0) continue;
      ee[methodName] = this._patchAddListener(
        ee,
        ee[methodName],
        context
      );
    }
    if (typeof ee.removeListener === "function") {
      ee.removeListener = this._patchRemoveListener(ee, ee.removeListener);
    }
    if (typeof ee.off === "function") {
      ee.off = this._patchRemoveListener(ee, ee.off);
    }
    if (typeof ee.removeAllListeners === "function") {
      ee.removeAllListeners = this._patchRemoveAllListeners(
        ee,
        // oxlint-disable-next-line @typescript-eslint/unbound-method
        ee.removeAllListeners
      );
    }
    return ee;
  }
  _patchRemoveListener(ee, original) {
    const contextManager = this;
    return function(event, listener) {
      const events = contextManager._getPatchMap(ee)?.[event];
      if (events === void 0) {
        return original.call(this, event, listener);
      }
      const patchedListener = events.get(listener);
      return original.call(this, event, patchedListener || listener);
    };
  }
  _patchRemoveAllListeners(ee, original) {
    const contextManager = this;
    return function(event) {
      const map = contextManager._getPatchMap(ee);
      if (map !== void 0) {
        if (arguments.length === 0) {
          contextManager._createPatchMap(ee);
        } else if (event !== void 0 && map[event] !== void 0) {
          delete map[event];
        }
      }
      return original.apply(this, arguments);
    };
  }
  _patchAddListener(ee, original, context) {
    const contextManager = this;
    return function(event, listener) {
      if (contextManager._wrapped) {
        return original.call(this, event, listener);
      }
      let map = contextManager._getPatchMap(ee);
      if (map === void 0) {
        map = contextManager._createPatchMap(ee);
      }
      let listeners = map[event];
      if (listeners === void 0) {
        listeners = /* @__PURE__ */ new WeakMap();
        map[event] = listeners;
      }
      const patchedListener = contextManager.bind(context, listener);
      listeners.set(listener, patchedListener);
      contextManager._wrapped = true;
      try {
        return original.call(this, event, patchedListener);
      } finally {
        contextManager._wrapped = false;
      }
    };
  }
  _createPatchMap(ee) {
    const map = /* @__PURE__ */ Object.create(null);
    ee[this._kOtListeners] = map;
    return map;
  }
  _getPatchMap(ee) {
    return ee[this._kOtListeners];
  }
}

exports.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION = resource.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION;
exports.SentryPropagator = resource.SentryPropagator;
exports.SentrySampler = resource.SentrySampler;
exports.SentrySpanProcessor = resource.SentrySpanProcessor;
exports.continueTrace = resource.continueTrace;
exports.enhanceDscWithOpenTelemetryRootSpanName = resource.enhanceDscWithOpenTelemetryRootSpanName;
exports.getActiveSpan = resource.getActiveSpan;
exports.getRequestSpanData = resource.getRequestSpanData;
exports.getScopesFromContext = resource.getScopesFromContext;
exports.getSentryResource = resource.getSentryResource;
exports.getSpanKind = resource.getSpanKind;
exports.getTraceContextForScope = resource.getTraceContextForScope;
exports.isSentryRequestSpan = resource.isSentryRequestSpan;
exports.openTelemetrySetupCheck = resource.openTelemetrySetupCheck;
exports.setOpenTelemetryContextAsyncContextStrategy = resource.setOpenTelemetryContextAsyncContextStrategy;
exports.setupEventContextTrace = resource.setupEventContextTrace;
exports.spanHasAttributes = resource.spanHasAttributes;
exports.spanHasEvents = resource.spanHasEvents;
exports.spanHasKind = resource.spanHasKind;
exports.spanHasName = resource.spanHasName;
exports.spanHasParentId = resource.spanHasParentId;
exports.spanHasStatus = resource.spanHasStatus;
exports.startInactiveSpan = resource.startInactiveSpan;
exports.startSpan = resource.startSpan;
exports.startSpanManual = resource.startSpanManual;
exports.suppressTracing = resource.suppressTracing;
exports.withActiveSpan = resource.withActiveSpan;
exports.wrapClientClass = resource.wrapClientClass;
exports.wrapContextManagerClass = resource.wrapContextManagerClass;
exports.wrapSamplingDecision = resource.wrapSamplingDecision;
exports.getClient = core.getClient;
exports.getDynamicSamplingContextFromSpan = core.getDynamicSamplingContextFromSpan;
exports.shouldPropagateTraceForUrl = core.shouldPropagateTraceForUrl;
exports.withStreamedSpan = core.withStreamedSpan;
exports.SentryAsyncLocalStorageContextManager = SentryAsyncLocalStorageContextManager;
//# sourceMappingURL=index.js.map
