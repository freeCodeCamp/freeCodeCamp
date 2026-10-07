import * as dc from 'node:diagnostics_channel';
import { diag, propagation, context, trace, SpanStatusCode } from '@opentelemetry/api';
import { getRPCMetadata, RPCType } from '@opentelemetry/core';
import { ATTR_HTTP_ROUTE, ATTR_URL_PATH, ATTR_HTTP_REQUEST_METHOD, ATTR_HTTP_RESPONSE_STATUS_CODE } from '@opentelemetry/semantic-conventions';
import { InstrumentationBase } from '@opentelemetry/instrumentation';
import { SDK_VERSION } from '@sentry/core';

var _a, _b;
const PACKAGE_VERSION = SDK_VERSION;
const PACKAGE_NAME = "@sentry/instrumentation-fastify";
const SUPPORTED_VERSIONS = ">=4.0.0 <6";
const FASTIFY_HOOKS = [
  "onRequest",
  "preParsing",
  "preValidation",
  "preHandler",
  "preSerialization",
  "onSend",
  "onResponse",
  "onError"
];
const ATTRIBUTE_NAMES = {
  HOOK_NAME: "hook.name",
  FASTIFY_TYPE: "fastify.type",
  HOOK_CALLBACK_NAME: "hook.callback.name",
  ROOT: "fastify.root"
};
const HOOK_TYPES = {
  ROUTE: "route-hook",
  INSTANCE: "hook",
  HANDLER: "request-handler"
};
const ANONYMOUS_FUNCTION_NAME = "anonymous";
const kInstrumentation = /* @__PURE__ */ Symbol("fastify otel instance");
const kRequestSpan = /* @__PURE__ */ Symbol("fastify otel request spans");
const kRequestContext = /* @__PURE__ */ Symbol("fastify otel request context");
const kAddHookOriginal = /* @__PURE__ */ Symbol("fastify otel addhook original");
const kSetNotFoundOriginal = /* @__PURE__ */ Symbol("fastify otel setnotfound original");
const kRecordExceptions = /* @__PURE__ */ Symbol("fastify otel record exceptions");
class FastifyOtelInstrumentation extends (_b = InstrumentationBase, _a = kRecordExceptions, _b) {
  constructor(config = {}) {
    super(PACKAGE_NAME, PACKAGE_VERSION, config);
    this._otelLogger = null;
    this._requestHook = null;
    this._lifecycleHook = null;
    this._handleInitialization = void 0;
    this[_a] = true;
    this._otelLogger = diag.createComponentLogger({ namespace: PACKAGE_NAME });
    this[kRecordExceptions] = true;
    if (config?.recordExceptions != null) {
      if (typeof config.recordExceptions !== "boolean") {
        throw new TypeError("recordExceptions must be a boolean");
      }
      this[kRecordExceptions] = config.recordExceptions;
    }
    if (typeof config?.requestHook === "function") {
      this._requestHook = config.requestHook;
    }
    if (typeof config?.lifecycleHook === "function") {
      this._lifecycleHook = config.lifecycleHook;
    }
  }
  enable() {
    if (this._handleInitialization === void 0 && this.getConfig().registerOnInitialization) {
      this._handleInitialization = (message) => {
        this.plugin()(message.fastify, void 0, () => {
        });
        const emptyPlugin = (_, __, done) => {
          done();
        };
        emptyPlugin[/* @__PURE__ */ Symbol.for("skip-override")] = true;
        emptyPlugin[/* @__PURE__ */ Symbol.for("fastify.display-name")] = PACKAGE_NAME;
        message.fastify.register(emptyPlugin);
      };
      dc.subscribe("fastify.initialization", this._handleInitialization);
    }
    return super.enable();
  }
  disable() {
    if (this._handleInitialization) {
      dc.unsubscribe("fastify.initialization", this._handleInitialization);
      this._handleInitialization = void 0;
    }
    return super.disable();
  }
  init() {
    return [];
  }
  plugin() {
    const instrumentation = this;
    const pluginAny = FastifyInstrumentationPlugin;
    pluginAny[/* @__PURE__ */ Symbol.for("skip-override")] = true;
    pluginAny[/* @__PURE__ */ Symbol.for("fastify.display-name")] = PACKAGE_NAME;
    pluginAny[/* @__PURE__ */ Symbol.for("plugin-meta")] = {
      fastify: SUPPORTED_VERSIONS,
      name: PACKAGE_NAME
    };
    return FastifyInstrumentationPlugin;
    function FastifyInstrumentationPlugin(instance, _opts, done) {
      instance.decorate(kInstrumentation, instrumentation);
      instance.decorate(kAddHookOriginal, instance.addHook);
      instance.decorate(kSetNotFoundOriginal, instance.setNotFoundHandler);
      instance.decorateRequest("opentelemetry", function opentelemetry() {
        const ctx = this[kRequestContext];
        const span = this[kRequestSpan];
        return {
          enabled: this.routeOptions.config?.otel !== false,
          span,
          tracer: instrumentation.tracer,
          context: ctx,
          inject: (carrier, setter) => {
            return propagation.inject(ctx, carrier, setter);
          },
          extract: (carrier, getter) => {
            return propagation.extract(ctx, carrier, getter);
          }
        };
      });
      instance.decorateRequest(kRequestSpan, null);
      instance.decorateRequest(kRequestContext, null);
      instance.addHook("onRoute", function otelWireRoute(routeOptions) {
        if (routeOptions.config?.otel === false) {
          instrumentation._otelLogger.debug(
            `Ignoring route instrumentation ${routeOptions.method} ${routeOptions.url} because it is disabled`
          );
          return;
        }
        for (const hook of FASTIFY_HOOKS) {
          if (routeOptions[hook] != null) {
            const handlerLike = routeOptions[hook];
            if (typeof handlerLike === "function") {
              routeOptions[hook] = handlerWrapper(handlerLike, hook, {
                [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - route -> ${hook}`,
                [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.ROUTE,
                [ATTR_HTTP_ROUTE]: routeOptions.url,
                [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: handlerLike.name?.length > 0 ? handlerLike.name : ANONYMOUS_FUNCTION_NAME
              });
            } else if (Array.isArray(handlerLike)) {
              const wrappedHandlers = [];
              for (const handler of handlerLike) {
                wrappedHandlers.push(
                  handlerWrapper(handler, hook, {
                    [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - route -> ${hook}`,
                    [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.ROUTE,
                    [ATTR_HTTP_ROUTE]: routeOptions.url,
                    [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: handler.name?.length > 0 ? handler.name : ANONYMOUS_FUNCTION_NAME
                  })
                );
              }
              routeOptions[hook] = wrappedHandlers;
            }
          }
        }
        if (routeOptions.onSend != null) {
          routeOptions.onSend = Array.isArray(routeOptions.onSend) ? [...routeOptions.onSend, finalizeResponseSpanHook] : [routeOptions.onSend, finalizeResponseSpanHook];
        } else {
          routeOptions.onSend = finalizeResponseSpanHook;
        }
        if (routeOptions.onError != null) {
          routeOptions.onError = Array.isArray(routeOptions.onError) ? [...routeOptions.onError, recordErrorInSpanHook] : [routeOptions.onError, recordErrorInSpanHook];
        } else {
          routeOptions.onError = recordErrorInSpanHook;
        }
        routeOptions.handler = handlerWrapper(routeOptions.handler, "handler", {
          [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - route-handler`,
          [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.HANDLER,
          [ATTR_HTTP_ROUTE]: routeOptions.url,
          [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: routeOptions.handler.name.length > 0 ? routeOptions.handler.name : ANONYMOUS_FUNCTION_NAME
        });
      });
      instance.addHook(
        "onRequest",
        function startRequestSpanHook(request, _reply, hookDone) {
          if (this[kInstrumentation].isEnabled() === false || request.routeOptions.config?.otel === false) {
            return hookDone();
          }
          let ctx = context.active();
          if (trace.getSpan(ctx) == null) {
            ctx = propagation.extract(ctx, request.headers);
          }
          const rpcMetadata = getRPCMetadata(ctx);
          if (request.routeOptions.url != null && rpcMetadata?.type === RPCType.HTTP) {
            rpcMetadata.route = request.routeOptions.url;
          }
          const attributes = {
            [ATTRIBUTE_NAMES.ROOT]: PACKAGE_NAME,
            [ATTR_HTTP_REQUEST_METHOD]: request.method,
            [ATTR_URL_PATH]: request.url
          };
          if (request.routeOptions.url != null) {
            attributes[ATTR_HTTP_ROUTE] = request.routeOptions.url;
          }
          const span = this[kInstrumentation].tracer.startSpan("request", { attributes }, ctx);
          try {
            this[kInstrumentation]._requestHook?.(span, request);
          } catch (err) {
            this[kInstrumentation]._otelLogger.error({ err }, "requestHook threw");
          }
          request[kRequestContext] = trace.setSpan(ctx, span);
          request[kRequestSpan] = span;
          context.with(request[kRequestContext], () => {
            hookDone();
          });
        }
      );
      instance.addHook("onResponse", function finalizeNotFoundSpanHook(request, reply, hookDone) {
        const span = request[kRequestSpan];
        if (span != null) {
          span.setAttributes({
            [ATTR_HTTP_RESPONSE_STATUS_CODE]: reply.statusCode
          });
          span.end();
        }
        request[kRequestSpan] = null;
        hookDone();
      });
      instance.addHook = addHookPatched;
      instance.setNotFoundHandler = setNotFoundHandlerPatched;
      done();
      function finalizeResponseSpanHook(request, reply, payload, hookDone) {
        const span = request[kRequestSpan];
        if (span != null) {
          if (reply.statusCode >= 500) {
            span.setStatus({ code: SpanStatusCode.ERROR });
          }
          span.setAttributes({
            [ATTR_HTTP_RESPONSE_STATUS_CODE]: reply.statusCode
          });
          span.end();
        }
        request[kRequestSpan] = null;
        hookDone(null, payload);
      }
      function recordErrorInSpanHook(request, _reply, error, hookDone) {
        const span = request[kRequestSpan];
        if (span != null) {
          span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error.message
          });
          if (instrumentation[kRecordExceptions] !== false) {
            span.recordException(error);
          }
        }
        hookDone();
      }
      function addHookPatched(name, hook) {
        const addHookOriginal = this[kAddHookOriginal];
        if (FASTIFY_HOOKS.includes(name)) {
          return addHookOriginal.call(
            this,
            name,
            handlerWrapper(hook, name, {
              [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - ${name}`,
              [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.INSTANCE,
              [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: hook.name?.length > 0 ? hook.name : ANONYMOUS_FUNCTION_NAME
            })
          );
        } else {
          return addHookOriginal.call(this, name, hook);
        }
      }
      function setNotFoundHandlerPatched(hooks, handler) {
        const setNotFoundHandlerOriginal = this[kSetNotFoundOriginal];
        if (typeof hooks === "function") {
          handler = handlerWrapper(hooks, "notFoundHandler", {
            [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - not-found-handler`,
            [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.INSTANCE,
            [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: hooks.name?.length > 0 ? hooks.name : ANONYMOUS_FUNCTION_NAME
          });
          setNotFoundHandlerOriginal.call(this, handler);
        } else {
          if (hooks.preValidation != null) {
            hooks.preValidation = handlerWrapper(hooks.preValidation, "notFoundHandler - preValidation", {
              [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - not-found-handler - preValidation`,
              [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.INSTANCE,
              [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: hooks.preValidation.name?.length > 0 ? hooks.preValidation.name : ANONYMOUS_FUNCTION_NAME
            });
          }
          if (hooks.preHandler != null) {
            hooks.preHandler = handlerWrapper(hooks.preHandler, "notFoundHandler - preHandler", {
              [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - not-found-handler - preHandler`,
              [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.INSTANCE,
              [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: hooks.preHandler.name?.length > 0 ? hooks.preHandler.name : ANONYMOUS_FUNCTION_NAME
            });
          }
          handler = handlerWrapper(handler, "notFoundHandler", {
            [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - not-found-handler`,
            [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.INSTANCE,
            [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: handler.name?.length > 0 ? handler.name : ANONYMOUS_FUNCTION_NAME
          });
          setNotFoundHandlerOriginal.call(this, hooks, handler);
        }
      }
      function getRequestFromArgs(args) {
        for (const arg of args) {
          if (arg?.routeOptions && arg.url && arg.method) {
            return arg;
          }
        }
        return null;
      }
      function handlerWrapper(handler, hookName, spanAttributes = {}) {
        return function handlerWrapped(...args) {
          const instrumentation2 = this[kInstrumentation];
          const request = getRequestFromArgs(args);
          if (request === null) {
            instrumentation2._otelLogger.debug(
              `Ignoring route instrumentation because ${hookName} was called without a Fastify request argument`
            );
            return handler.call(this, ...args);
          }
          if (instrumentation2.isEnabled() === false || request.routeOptions.config?.otel === false) {
            instrumentation2._otelLogger.debug(
              `Ignoring route instrumentation ${request.routeOptions.method} ${request.routeOptions.url} because it is disabled`
            );
            return handler.call(this, ...args);
          }
          const ctx = request[kRequestContext] ?? context.active();
          const handlerName = handler.name?.length > 0 ? handler.name : this.pluginName ?? ANONYMOUS_FUNCTION_NAME;
          const span = instrumentation2.tracer.startSpan(
            `${hookName} - ${handlerName}`,
            {
              attributes: spanAttributes
            },
            ctx
          );
          if (instrumentation2._lifecycleHook != null) {
            try {
              instrumentation2._lifecycleHook(span, {
                hookName,
                request,
                handler: handlerName
              });
            } catch (err) {
              instrumentation2._otelLogger.error({ err }, "Execution of lifecycleHook failed");
            }
          }
          return context.with(
            trace.setSpan(ctx, span),
            function() {
              try {
                const res = handler.call(this, ...args);
                if (typeof res?.then === "function") {
                  return res.then(
                    (result) => {
                      span.end();
                      return result;
                    },
                    (error) => {
                      span.setStatus({
                        code: SpanStatusCode.ERROR,
                        message: error.message
                      });
                      if (instrumentation2[kRecordExceptions] !== false) {
                        span.recordException(error);
                      }
                      span.end();
                      return Promise.reject(error);
                    }
                  );
                }
                span.end();
                return res;
              } catch (error) {
                span.setStatus({
                  code: SpanStatusCode.ERROR,
                  message: error.message
                });
                if (instrumentation2[kRecordExceptions] !== false) {
                  span.recordException(error);
                }
                span.end();
                throw error;
              }
            },
            this
          );
        };
      }
    }
  }
}

export { FastifyOtelInstrumentation };
//# sourceMappingURL=instrumentation.js.map
