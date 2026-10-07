Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const core = require('@opentelemetry/core');
const instrumentation = require('@opentelemetry/instrumentation');
const semanticConventions = require('@opentelemetry/semantic-conventions');
const core$1 = require('@sentry/core');
const AttributeNames = require('./enums/AttributeNames.js');
const utils = require('./utils.js');

const PACKAGE_VERSION = "0.1.0";
const PACKAGE_NAME = "@sentry/instrumentation-fastify-v3";
const ANONYMOUS_NAME = "anonymous";
const hooksNamesToWrap = /* @__PURE__ */ new Set([
  "onTimeout",
  "onRequest",
  "preParsing",
  "preValidation",
  "preSerialization",
  "preHandler",
  "onSend",
  "onResponse",
  "onError"
]);
class FastifyInstrumentationV3 extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, PACKAGE_VERSION, config);
  }
  init() {
    return [
      new instrumentation.InstrumentationNodeModuleDefinition("fastify", [">=3.0.0 <4"], (moduleExports) => {
        return this._patchConstructor(moduleExports);
      })
    ];
  }
  _hookOnRequest() {
    const instrumentation = this;
    return function onRequest(request, reply, done) {
      if (!instrumentation.isEnabled()) {
        return done();
      }
      instrumentation._wrap(reply, "send", instrumentation._patchSend());
      const anyRequest = request;
      const rpcMetadata = core.getRPCMetadata(api.context.active());
      const routeName = anyRequest.routeOptions ? anyRequest.routeOptions.url : request.routerPath;
      if (routeName && rpcMetadata?.type === core.RPCType.HTTP) {
        rpcMetadata.route = routeName;
      }
      const method = request.method || "GET";
      core$1.getIsolationScope().setTransactionName(`${method} ${routeName}`);
      done();
    };
  }
  _wrapHandler(pluginName, hookName, original, syncFunctionWithDone) {
    const instrumentation = this;
    this._diag.debug("Patching fastify route.handler function");
    return function(...args) {
      if (!instrumentation.isEnabled()) {
        return original.apply(this, args);
      }
      const name = original.name || pluginName || ANONYMOUS_NAME;
      const spanName = `${AttributeNames.FastifyNames.MIDDLEWARE} - ${name}`;
      const reply = args[1];
      const span = utils.startSpan(reply, instrumentation.tracer, spanName, {
        [AttributeNames.AttributeNames.FASTIFY_TYPE]: AttributeNames.FastifyTypes.MIDDLEWARE,
        [AttributeNames.AttributeNames.PLUGIN_NAME]: pluginName,
        [AttributeNames.AttributeNames.HOOK_NAME]: hookName
      });
      const origDone = syncFunctionWithDone && args[args.length - 1];
      if (origDone) {
        args[args.length - 1] = function(...doneArgs) {
          utils.endSpan(reply);
          origDone.apply(this, doneArgs);
        };
      }
      return api.context.with(api.trace.setSpan(api.context.active(), span), () => {
        return utils.safeExecuteInTheMiddleMaybePromise(
          () => {
            return original.apply(this, args);
          },
          (err) => {
            if (err instanceof Error) {
              span.setStatus({
                code: api.SpanStatusCode.ERROR,
                message: err.message
              });
              span.recordException(err);
            }
            if (!syncFunctionWithDone) {
              utils.endSpan(reply);
            }
          }
        );
      });
    };
  }
  _wrapAddHook() {
    const instrumentation = this;
    this._diag.debug("Patching fastify server.addHook function");
    return function(original) {
      return function wrappedAddHook(...args) {
        const name = args[0];
        const handler = args[1];
        const pluginName = this.pluginName;
        if (!hooksNamesToWrap.has(name)) {
          return original.apply(this, args);
        }
        const syncFunctionWithDone = typeof args[args.length - 1] === "function" && handler.constructor.name !== "AsyncFunction";
        return original.apply(this, [
          name,
          instrumentation._wrapHandler(pluginName, name, handler, syncFunctionWithDone)
        ]);
      };
    };
  }
  _patchConstructor(moduleExports) {
    const instrumentation = this;
    function fastify(...args) {
      const app = moduleExports.fastify.apply(this, args);
      app.addHook("onRequest", instrumentation._hookOnRequest());
      app.addHook("preHandler", instrumentation._hookPreHandler());
      instrumentClient();
      instrumentation._wrap(app, "addHook", instrumentation._wrapAddHook());
      return app;
    }
    if (moduleExports.errorCodes !== void 0) {
      fastify.errorCodes = moduleExports.errorCodes;
    }
    fastify.fastify = fastify;
    fastify.default = fastify;
    return fastify;
  }
  _patchSend() {
    const instrumentation$1 = this;
    this._diag.debug("Patching fastify reply.send function");
    return function patchSend(original) {
      return function send(...args) {
        const maybeError = args[0];
        if (!instrumentation$1.isEnabled()) {
          return original.apply(this, args);
        }
        return instrumentation.safeExecuteInTheMiddle(
          () => {
            return original.apply(this, args);
          },
          (err) => {
            if (!err && maybeError instanceof Error) {
              err = maybeError;
            }
            utils.endSpan(this, err);
          }
        );
      };
    };
  }
  _hookPreHandler() {
    const instrumentation$1 = this;
    this._diag.debug("Patching fastify preHandler function");
    return function preHandler(request, reply, done) {
      if (!instrumentation$1.isEnabled()) {
        return done();
      }
      const anyRequest = request;
      const handler = anyRequest.routeOptions?.handler || anyRequest.context?.handler;
      const handlerName = handler?.name.startsWith("bound ") ? handler.name.substring(6) : handler?.name;
      const spanName = `${AttributeNames.FastifyNames.REQUEST_HANDLER} - ${handlerName || this.pluginName || ANONYMOUS_NAME}`;
      const spanAttributes = {
        [AttributeNames.AttributeNames.PLUGIN_NAME]: this.pluginName,
        [AttributeNames.AttributeNames.FASTIFY_TYPE]: AttributeNames.FastifyTypes.REQUEST_HANDLER,
        // eslint-disable-next-line deprecation/deprecation
        [semanticConventions.SEMATTRS_HTTP_ROUTE]: anyRequest.routeOptions ? anyRequest.routeOptions.url : request.routerPath
      };
      if (handlerName) {
        spanAttributes[AttributeNames.AttributeNames.FASTIFY_NAME] = handlerName;
      }
      const span = utils.startSpan(reply, instrumentation$1.tracer, spanName, spanAttributes);
      addFastifyV3SpanAttributes(span);
      const { requestHook } = instrumentation$1.getConfig();
      if (requestHook) {
        instrumentation.safeExecuteInTheMiddle(
          () => requestHook(span, { request }),
          (e) => {
            if (e) {
              instrumentation$1._diag.error("request hook failed", e);
            }
          },
          true
        );
      }
      return api.context.with(api.trace.setSpan(api.context.active(), span), () => {
        done();
      });
    };
  }
}
function instrumentClient() {
  const client = core$1.getClient();
  if (client) {
    client.on("spanStart", (span) => {
      addFastifyV3SpanAttributes(span);
    });
  }
}
function addFastifyV3SpanAttributes(span) {
  const attributes = core$1.spanToJSON(span).data;
  const type = attributes["fastify.type"];
  if (attributes[core$1.SEMANTIC_ATTRIBUTE_SENTRY_OP] || !type) {
    return;
  }
  span.setAttributes({
    [core$1.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.fastify",
    [core$1.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${type}.fastify`
  });
  const name = attributes["fastify.name"] || attributes["plugin.name"] || attributes["hook.name"];
  if (typeof name === "string") {
    const updatedName = name.replace(/^fastify -> /, "").replace(/^@fastify\/otel -> /, "");
    span.updateName(updatedName);
  }
}

exports.FastifyInstrumentationV3 = FastifyInstrumentationV3;
//# sourceMappingURL=instrumentation.js.map
