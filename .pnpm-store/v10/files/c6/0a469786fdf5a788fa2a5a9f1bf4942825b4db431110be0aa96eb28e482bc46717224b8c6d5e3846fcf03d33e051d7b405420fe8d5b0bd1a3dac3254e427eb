Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const dc = require('node:diagnostics_channel');
const instrumentation$1 = require('./vendored/instrumentation.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const debugBuild = require('../../../debug-build.js');
const instrumentation = require('./v3/instrumentation.js');

const INTEGRATION_NAME = "Fastify";
const instrumentFastifyV3 = nodeCore.generateInstrumentOnce(
  `${INTEGRATION_NAME}.v3`,
  () => new instrumentation.FastifyInstrumentationV3()
);
function getFastifyIntegration() {
  const client = core.getClient();
  if (!client) {
    return void 0;
  } else {
    return client.getIntegrationByName(INTEGRATION_NAME);
  }
}
function handleFastifyError(error, request, reply, handlerOrigin) {
  const shouldHandleError = getFastifyIntegration()?.getShouldHandleError() || defaultShouldHandleError;
  if (handlerOrigin === "diagnostics-channel") {
    this.diagnosticsChannelExists = true;
  }
  if (this.diagnosticsChannelExists && handlerOrigin === "onError-hook") {
    debugBuild.DEBUG_BUILD && core.debug.warn(
      "Fastify error handler was already registered via diagnostics channel.",
      "You can safely remove `setupFastifyErrorHandler` call and set `shouldHandleError` on the integration options."
    );
    return;
  }
  if (shouldHandleError(error, request, reply)) {
    core.captureException(error, { mechanism: { handled: false, type: "auto.function.fastify" } });
  }
}
const instrumentFastify = nodeCore.generateInstrumentOnce(`${INTEGRATION_NAME}.v5`, () => {
  const fastifyOtelInstrumentationInstance = new instrumentation$1.FastifyOtelInstrumentation();
  const plugin = fastifyOtelInstrumentationInstance.plugin();
  dc.subscribe("fastify.initialization", (message) => {
    const fastifyInstance = message.fastify;
    fastifyInstance?.register(plugin).after((err) => {
      if (err) {
        debugBuild.DEBUG_BUILD && core.debug.error("Failed to setup Fastify instrumentation", err);
      } else {
        instrumentClient();
        if (fastifyInstance) {
          instrumentOnRequest(fastifyInstance);
        }
      }
    });
  });
  dc.subscribe("tracing:fastify.request.handler:error", (message) => {
    const { error, request, reply } = message;
    handleFastifyError.call(handleFastifyError, error, request, reply, "diagnostics-channel");
  });
  return fastifyOtelInstrumentationInstance;
});
const _fastifyIntegration = (({ shouldHandleError }) => {
  let _shouldHandleError;
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      _shouldHandleError = shouldHandleError || defaultShouldHandleError;
      instrumentFastifyV3();
      instrumentFastify();
    },
    getShouldHandleError() {
      return _shouldHandleError;
    },
    setShouldHandleError(fn) {
      _shouldHandleError = fn;
    }
  };
});
const fastifyIntegration = core.defineIntegration(
  (options = {}) => _fastifyIntegration(options)
);
function defaultShouldHandleError(_error, _request, reply) {
  const statusCode = reply.statusCode;
  return statusCode >= 500 || statusCode <= 299;
}
function setupFastifyErrorHandler(fastify, options) {
  if (options?.shouldHandleError) {
    getFastifyIntegration()?.setShouldHandleError(options.shouldHandleError);
  }
  const plugin = Object.assign(
    function(fastify2, _options, done) {
      fastify2.addHook("onError", async (request, reply, error) => {
        handleFastifyError.call(handleFastifyError, error, request, reply, "onError-hook");
      });
      done();
    },
    {
      [/* @__PURE__ */ Symbol.for("skip-override")]: true,
      [/* @__PURE__ */ Symbol.for("fastify.display-name")]: "sentry-fastify-error-handler"
    }
  );
  fastify.register(plugin);
}
function addFastifySpanAttributes(span) {
  const spanJSON = core.spanToJSON(span);
  const spanName = spanJSON.description;
  const attributes = spanJSON.data;
  const type = attributes["fastify.type"];
  const isHook = type === "hook";
  const isHandler = type === spanName?.startsWith("handler -");
  const isRequestHandler = spanName === "request" || type === "request-handler";
  if (attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] || !isHandler && !isRequestHandler && !isHook) {
    return;
  }
  const opPrefix = isHook ? "hook" : isHandler ? "middleware" : isRequestHandler ? "request_handler" : "<unknown>";
  span.setAttributes({
    [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.fastify",
    [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${opPrefix}.fastify`
  });
  const attrName = attributes["fastify.name"] || attributes["plugin.name"] || attributes["hook.name"];
  if (typeof attrName === "string") {
    const updatedName = attrName.replace(/^fastify -> /, "").replace(/^@fastify\/otel -> /, "").replace(/^@sentry\/instrumentation-fastify -> /, "");
    span.updateName(updatedName);
  }
}
function instrumentClient() {
  const client = core.getClient();
  if (client) {
    client.on("spanStart", (span) => {
      addFastifySpanAttributes(span);
    });
  }
}
function instrumentOnRequest(fastify) {
  fastify.addHook("onRequest", async (request, _reply) => {
    if (request.opentelemetry) {
      const { span } = request.opentelemetry();
      if (span) {
        addFastifySpanAttributes(span);
      }
    }
    const routeName = request.routeOptions?.url;
    const method = request.method || "GET";
    core.getIsolationScope().setTransactionName(`${method} ${routeName}`);
  });
}

exports.fastifyIntegration = fastifyIntegration;
exports.instrumentFastify = instrumentFastify;
exports.instrumentFastifyV3 = instrumentFastifyV3;
exports.setupFastifyErrorHandler = setupFastifyErrorHandler;
//# sourceMappingURL=index.js.map
