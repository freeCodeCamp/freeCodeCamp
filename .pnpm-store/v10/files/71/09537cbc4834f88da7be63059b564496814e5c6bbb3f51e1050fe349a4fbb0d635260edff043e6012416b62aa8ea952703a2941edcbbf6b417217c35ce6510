import { s as setIsSetup, e as buildContextWithSentryScopes, a as SENTRY_SCOPES_CONTEXT_KEY } from './resource--8DgFma7.js';
export { S as SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, b as SentryPropagator, c as SentrySampler, d as SentrySpanProcessor, f as continueTrace, g as enhanceDscWithOpenTelemetryRootSpanName, h as getActiveSpan, i as getRequestSpanData, j as getScopesFromContext, k as getSentryResource, l as getSpanKind, m as getTraceContextForScope, n as isSentryRequestSpan, o as openTelemetrySetupCheck, p as setOpenTelemetryContextAsyncContextStrategy, q as setupEventContextTrace, r as spanHasAttributes, t as spanHasEvents, u as spanHasKind, v as spanHasName, w as spanHasParentId, x as spanHasStatus, y as startInactiveSpan, z as startSpan, A as startSpanManual, B as suppressTracing, C as withActiveSpan, D as wrapClientClass, E as wrapContextManagerClass, F as wrapSamplingDecision } from './resource--8DgFma7.js';
export { getClient, getDynamicSamplingContextFromSpan, shouldPropagateTraceForUrl, withStreamedSpan } from '@sentry/core';
import { ROOT_CONTEXT } from '@opentelemetry/api';
import { AsyncLocalStorage } from 'node:async_hooks';
import { EventEmitter } from 'node:events';
import '@opentelemetry/semantic-conventions';
import '@opentelemetry/core';
import './debug-build-B98wrZ1j.js';
import '@opentelemetry/sdk-trace-base';

const ADD_LISTENER_METHODS = ["addListener", "on", "once", "prependListener", "prependOnceListener"];
class SentryAsyncLocalStorageContextManager {
  constructor() {
    this._asyncLocalStorage = new AsyncLocalStorage();
    this._kOtListeners = /* @__PURE__ */ Symbol("OtListeners");
    this._wrapped = false;
    setIsSetup("SentryContextManager");
  }
  active() {
    return this._asyncLocalStorage.getStore() ?? ROOT_CONTEXT;
  }
  with(context, fn, thisArg, ...args) {
    const ctx2 = buildContextWithSentryScopes(context, this.active());
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
    if (target instanceof EventEmitter) {
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
      contextSymbol: SENTRY_SCOPES_CONTEXT_KEY
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

export { SentryAsyncLocalStorageContextManager };
//# sourceMappingURL=index.js.map
