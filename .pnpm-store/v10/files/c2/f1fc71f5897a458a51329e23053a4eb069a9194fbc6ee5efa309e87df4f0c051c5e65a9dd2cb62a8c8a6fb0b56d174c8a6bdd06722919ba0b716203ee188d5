import { context, trace, SpanStatusCode } from '@opentelemetry/api';
import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { isThenable } from '@sentry/core';
import { AttributeNames, HonoTypes } from './constants.js';

const PACKAGE_NAME = "@sentry/instrumentation-hono";
const PACKAGE_VERSION = "0.0.1";
class HonoInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, PACKAGE_VERSION, config);
  }
  /**
   * Initialize the instrumentation.
   */
  init() {
    return [
      new InstrumentationNodeModuleDefinition("hono", [">=4.0.0 <5"], (moduleExports) => this._patch(moduleExports))
    ];
  }
  /**
   * Patches the module exports to instrument Hono.
   */
  _patch(moduleExports) {
    const instrumentation = this;
    class WrappedHono extends moduleExports.Hono {
      constructor(...args) {
        super(...args);
        instrumentation._wrap(this, "get", instrumentation._patchHandler());
        instrumentation._wrap(this, "post", instrumentation._patchHandler());
        instrumentation._wrap(this, "put", instrumentation._patchHandler());
        instrumentation._wrap(this, "delete", instrumentation._patchHandler());
        instrumentation._wrap(this, "options", instrumentation._patchHandler());
        instrumentation._wrap(this, "patch", instrumentation._patchHandler());
        instrumentation._wrap(this, "all", instrumentation._patchHandler());
        instrumentation._wrap(this, "on", instrumentation._patchOnHandler());
        instrumentation._wrap(this, "use", instrumentation._patchMiddlewareHandler());
      }
    }
    try {
      moduleExports.Hono = WrappedHono;
    } catch {
      return { ...moduleExports, Hono: WrappedHono };
    }
    return moduleExports;
  }
  /**
   * Patches the route handler to instrument it.
   */
  _patchHandler() {
    const instrumentation = this;
    return function(original) {
      return function wrappedHandler(...args) {
        if (typeof args[0] === "string") {
          const path = args[0];
          if (args.length === 1) {
            return original.apply(this, [path]);
          }
          const handlers = args.slice(1);
          return original.apply(this, [
            path,
            ...handlers.map((handler) => instrumentation._wrapHandler(handler))
          ]);
        }
        return original.apply(
          this,
          args.map((handler) => instrumentation._wrapHandler(handler))
        );
      };
    };
  }
  /**
   * Patches the 'on' handler to instrument it.
   */
  _patchOnHandler() {
    const instrumentation = this;
    return function(original) {
      return function wrappedHandler(...args) {
        const handlers = args.slice(2);
        return original.apply(this, [
          ...args.slice(0, 2),
          ...handlers.map((handler) => instrumentation._wrapHandler(handler))
        ]);
      };
    };
  }
  /**
   * Patches the middleware handler to instrument it.
   */
  _patchMiddlewareHandler() {
    const instrumentation = this;
    return function(original) {
      return function wrappedHandler(...args) {
        if (typeof args[0] === "string") {
          const path = args[0];
          if (args.length === 1) {
            return original.apply(this, [path]);
          }
          const handlers = args.slice(1);
          return original.apply(this, [
            path,
            ...handlers.map((handler) => instrumentation._wrapHandler(handler))
          ]);
        }
        return original.apply(
          this,
          args.map((handler) => instrumentation._wrapHandler(handler))
        );
      };
    };
  }
  /**
   * Wraps a handler or middleware handler to apply instrumentation.
   */
  _wrapHandler(handler) {
    const instrumentation = this;
    return function(c, next) {
      if (!instrumentation.isEnabled()) {
        return handler.apply(this, [c, next]);
      }
      const path = c.req.path;
      const span = instrumentation.tracer.startSpan(path);
      return context.with(trace.setSpan(context.active(), span), () => {
        return instrumentation._safeExecute(
          () => {
            const result = handler.apply(this, [c, next]);
            if (isThenable(result)) {
              return result.then((result2) => {
                const type = instrumentation._determineHandlerType(result2);
                span.setAttributes({
                  [AttributeNames.HONO_TYPE]: type,
                  [AttributeNames.HONO_NAME]: type === HonoTypes.REQUEST_HANDLER ? path : handler.name || "anonymous"
                });
                instrumentation.getConfig().responseHook?.(span);
                return result2;
              });
            } else {
              const type = instrumentation._determineHandlerType(result);
              span.setAttributes({
                [AttributeNames.HONO_TYPE]: type,
                [AttributeNames.HONO_NAME]: type === HonoTypes.REQUEST_HANDLER ? path : handler.name || "anonymous"
              });
              instrumentation.getConfig().responseHook?.(span);
              return result;
            }
          },
          () => span.end(),
          (error) => {
            instrumentation._handleError(span, error);
            span.end();
          }
        );
      });
    };
  }
  /**
   * Safely executes a function and handles errors.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _safeExecute(execute, onSuccess, onFailure) {
    try {
      const result = execute();
      if (isThenable(result)) {
        result.then(
          () => onSuccess(),
          (error) => onFailure(error)
        );
      } else {
        onSuccess();
      }
      return result;
    } catch (error) {
      onFailure(error);
      throw error;
    }
  }
  /**
   * Determines the handler type based on the result.
   * @param result
   * @private
   */
  _determineHandlerType(result) {
    return result === void 0 ? HonoTypes.MIDDLEWARE : HonoTypes.REQUEST_HANDLER;
  }
  /**
   * Handles errors by setting the span status and recording the exception.
   */
  _handleError(span, error) {
    if (error instanceof Error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message
      });
      span.recordException(error);
    }
  }
}

export { HonoInstrumentation };
//# sourceMappingURL=instrumentation.js.map
