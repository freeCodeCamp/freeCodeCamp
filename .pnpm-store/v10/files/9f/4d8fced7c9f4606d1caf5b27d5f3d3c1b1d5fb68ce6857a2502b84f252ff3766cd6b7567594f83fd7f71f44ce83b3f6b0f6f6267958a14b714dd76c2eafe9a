Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const core$1 = require('@opentelemetry/core');
const instrumentation = require('@opentelemetry/instrumentation');
const core = require('@sentry/core');
const constants = require('./constants.js');
const util = require('util');
const utils = require('./utils.js');

const PACKAGE_NAME = "@sentry/instrumentation-fs";
function patchedFunctionWithOriginalProperties(patchedFunction, original) {
  return Object.assign(patchedFunction, original);
}
class FsInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, core.SDK_VERSION, config);
  }
  init() {
    return [
      new instrumentation.InstrumentationNodeModuleDefinition(
        "fs",
        ["*"],
        (fs) => {
          for (const fName of constants.SYNC_FUNCTIONS) {
            const { objectToPatch, functionNameToPatch } = utils.indexFs(fs, fName);
            if (instrumentation.isWrapped(objectToPatch[functionNameToPatch])) {
              this._unwrap(objectToPatch, functionNameToPatch);
            }
            this._wrap(objectToPatch, functionNameToPatch, this._patchSyncFunction.bind(this, fName));
          }
          for (const fName of constants.CALLBACK_FUNCTIONS) {
            const { objectToPatch, functionNameToPatch } = utils.indexFs(fs, fName);
            if (instrumentation.isWrapped(objectToPatch[functionNameToPatch])) {
              this._unwrap(objectToPatch, functionNameToPatch);
            }
            if (fName === "exists") {
              this._wrap(
                objectToPatch,
                functionNameToPatch,
                this._patchExistsCallbackFunction.bind(this, fName)
              );
              continue;
            }
            this._wrap(objectToPatch, functionNameToPatch, this._patchCallbackFunction.bind(this, fName));
          }
          for (const fName of constants.PROMISE_FUNCTIONS) {
            if (instrumentation.isWrapped(fs.promises[fName])) {
              this._unwrap(fs.promises, fName);
            }
            this._wrap(fs.promises, fName, this._patchPromiseFunction.bind(this, fName));
          }
          return fs;
        },
        (fs) => {
          if (fs === void 0) return;
          for (const fName of constants.SYNC_FUNCTIONS) {
            const { objectToPatch, functionNameToPatch } = utils.indexFs(fs, fName);
            if (instrumentation.isWrapped(objectToPatch[functionNameToPatch])) {
              this._unwrap(objectToPatch, functionNameToPatch);
            }
          }
          for (const fName of constants.CALLBACK_FUNCTIONS) {
            const { objectToPatch, functionNameToPatch } = utils.indexFs(fs, fName);
            if (instrumentation.isWrapped(objectToPatch[functionNameToPatch])) {
              this._unwrap(objectToPatch, functionNameToPatch);
            }
          }
          for (const fName of constants.PROMISE_FUNCTIONS) {
            if (instrumentation.isWrapped(fs.promises[fName])) {
              this._unwrap(fs.promises, fName);
            }
          }
        }
      ),
      new instrumentation.InstrumentationNodeModuleDefinition(
        "fs/promises",
        ["*"],
        (fsPromises) => {
          for (const fName of constants.PROMISE_FUNCTIONS) {
            if (instrumentation.isWrapped(fsPromises[fName])) {
              this._unwrap(fsPromises, fName);
            }
            this._wrap(fsPromises, fName, this._patchPromiseFunction.bind(this, fName));
          }
          return fsPromises;
        },
        (fsPromises) => {
          if (fsPromises === void 0) return;
          for (const fName of constants.PROMISE_FUNCTIONS) {
            if (instrumentation.isWrapped(fsPromises[fName])) {
              this._unwrap(fsPromises, fName);
            }
          }
        }
      )
    ];
  }
  _patchSyncFunction(functionName, original) {
    const instrumentation = this;
    const patchedFunction = function(...args) {
      const activeContext = api.context.active();
      if (!instrumentation._shouldTrace(activeContext)) {
        return original.apply(this, args);
      }
      if (instrumentation._runCreateHook(functionName, {
        args
      }) === false) {
        return api.context.with(core$1.suppressTracing(activeContext), original, this, ...args);
      }
      const span = instrumentation.tracer.startSpan(`fs ${functionName}`);
      try {
        const res = api.context.with(core$1.suppressTracing(api.trace.setSpan(activeContext, span)), original, this, ...args);
        instrumentation._runEndHook(functionName, { args, span });
        return res;
      } catch (error) {
        span.recordException(error);
        span.setStatus({
          message: error.message,
          code: api.SpanStatusCode.ERROR
        });
        instrumentation._runEndHook(functionName, { args, span, error });
        throw error;
      } finally {
        span.end();
      }
    };
    return patchedFunctionWithOriginalProperties(patchedFunction, original);
  }
  _patchCallbackFunction(functionName, original) {
    const instrumentation = this;
    const patchedFunction = function(...args) {
      const activeContext = api.context.active();
      if (!instrumentation._shouldTrace(activeContext)) {
        return original.apply(this, args);
      }
      if (instrumentation._runCreateHook(functionName, {
        args
      }) === false) {
        return api.context.with(core$1.suppressTracing(activeContext), original, this, ...args);
      }
      const lastIdx = args.length - 1;
      const cb = args[lastIdx];
      if (typeof cb === "function") {
        const span = instrumentation.tracer.startSpan(`fs ${functionName}`);
        args[lastIdx] = api.context.bind(activeContext, function(error) {
          if (error) {
            span.recordException(error);
            span.setStatus({
              message: error.message,
              code: api.SpanStatusCode.ERROR
            });
          }
          instrumentation._runEndHook(functionName, {
            args,
            span,
            error
          });
          span.end();
          return cb.apply(this, arguments);
        });
        try {
          return api.context.with(core$1.suppressTracing(api.trace.setSpan(activeContext, span)), original, this, ...args);
        } catch (error) {
          span.recordException(error);
          span.setStatus({
            message: error.message,
            code: api.SpanStatusCode.ERROR
          });
          instrumentation._runEndHook(functionName, {
            args,
            span,
            error
          });
          span.end();
          throw error;
        }
      } else {
        return original.apply(this, args);
      }
    };
    return patchedFunctionWithOriginalProperties(patchedFunction, original);
  }
  _patchExistsCallbackFunction(functionName, original) {
    const instrumentation = this;
    const patchedFunction = function(...args) {
      const activeContext = api.context.active();
      if (!instrumentation._shouldTrace(activeContext)) {
        return original.apply(this, args);
      }
      if (instrumentation._runCreateHook(functionName, {
        args
      }) === false) {
        return api.context.with(core$1.suppressTracing(activeContext), original, this, ...args);
      }
      const lastIdx = args.length - 1;
      const cb = args[lastIdx];
      if (typeof cb === "function") {
        const span = instrumentation.tracer.startSpan(`fs ${functionName}`);
        args[lastIdx] = api.context.bind(activeContext, function() {
          instrumentation._runEndHook(functionName, {
            args,
            span
          });
          span.end();
          return cb.apply(this, arguments);
        });
        try {
          return api.context.with(core$1.suppressTracing(api.trace.setSpan(activeContext, span)), original, this, ...args);
        } catch (error) {
          span.recordException(error);
          span.setStatus({
            message: error.message,
            code: api.SpanStatusCode.ERROR
          });
          instrumentation._runEndHook(functionName, {
            args,
            span,
            error
          });
          span.end();
          throw error;
        }
      } else {
        return original.apply(this, args);
      }
    };
    const functionWithOriginalProperties = patchedFunctionWithOriginalProperties(patchedFunction, original);
    const promisified = function(path) {
      return new Promise((resolve) => functionWithOriginalProperties(path, resolve));
    };
    Object.defineProperty(promisified, "name", { value: functionName });
    Object.defineProperty(functionWithOriginalProperties, util.promisify.custom, {
      value: promisified
    });
    return functionWithOriginalProperties;
  }
  _patchPromiseFunction(functionName, original) {
    const instrumentation = this;
    const patchedFunction = async function(...args) {
      const activeContext = api.context.active();
      if (!instrumentation._shouldTrace(activeContext)) {
        return original.apply(this, args);
      }
      if (instrumentation._runCreateHook(functionName, {
        args
      }) === false) {
        return api.context.with(core$1.suppressTracing(activeContext), original, this, ...args);
      }
      const span = instrumentation.tracer.startSpan(`fs ${functionName}`);
      try {
        const res = await api.context.with(
          core$1.suppressTracing(api.trace.setSpan(activeContext, span)),
          original,
          this,
          ...args
        );
        instrumentation._runEndHook(functionName, { args, span });
        return res;
      } catch (error) {
        span.recordException(error);
        span.setStatus({
          message: error.message,
          code: api.SpanStatusCode.ERROR
        });
        instrumentation._runEndHook(functionName, { args, span, error });
        throw error;
      } finally {
        span.end();
      }
    };
    return patchedFunctionWithOriginalProperties(patchedFunction, original);
  }
  _runCreateHook(...args) {
    const { createHook } = this.getConfig();
    if (typeof createHook === "function") {
      try {
        return createHook(...args);
      } catch (e) {
        this._diag.error("caught createHook error", e);
      }
    }
    return true;
  }
  _runEndHook(...args) {
    const { endHook } = this.getConfig();
    if (typeof endHook === "function") {
      try {
        endHook(...args);
      } catch (e) {
        this._diag.error("caught endHook error", e);
      }
    }
  }
  _shouldTrace(context) {
    if (core$1.isTracingSuppressed(context)) {
      return false;
    }
    const { requireParentSpan } = this.getConfig();
    if (requireParentSpan) {
      const parentSpan = api.trace.getSpan(context);
      if (parentSpan == null) {
        return false;
      }
    }
    return true;
  }
}

exports.FsInstrumentation = FsInstrumentation;
//# sourceMappingURL=instrumentation.js.map
