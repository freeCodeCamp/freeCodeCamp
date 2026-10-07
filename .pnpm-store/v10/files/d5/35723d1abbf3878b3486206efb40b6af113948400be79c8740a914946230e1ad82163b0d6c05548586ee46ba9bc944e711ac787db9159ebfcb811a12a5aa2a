import * as dc from 'node:diagnostics_channel';
import { FastifyOtelInstrumentation } from './vendored/instrumentation.js';
import { debug, defineIntegration, getClient, getIsolationScope, captureException, spanToJSON, SEMANTIC_ATTRIBUTE_SENTRY_OP, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '@sentry/core';
import { generateInstrumentOnce } from '@sentry/node-core';
import { DEBUG_BUILD } from '../../../debug-build.js';
import { FastifyInstrumentationV3 } from './v3/instrumentation.js';

const INTEGRATION_NAME = "Fastify";
const instrumentFastifyV3 = generateInstrumentOnce(
  `${INTEGRATION_NAME}.v3`,
  () => new FastifyInstrumentationV3()
);
function getFastifyIntegration() {
  const client = getClient();
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
    DEBUG_BUILD && debug.warn(
      "Fastify error handler was already registered via diagnostics channel.",
      "You can safely remove `setupFastifyErrorHandler` call and set `shouldHandleError` on the integration options."
    );
    return;
  }
  if (shouldHandleError(error, request, reply)) {
    captureException(error, { mechanism: { handled: false, type: "auto.function.fastify" } });
  }
}
const instrumentFastify = generateInstrumentOnce(`${INTEGRATION_NAME}.v5`, () => {
  const fastifyOtelInstrumentationInstance = new FastifyOtelInstrumentation();
  const plugin = fastifyOtelInstrumentationInstance.plugin();
  dc.subscribe("fastify.initialization", (message) => {
    const fastifyInstance = message.fastify;
    fastifyInstance?.register(plugin).after((err) => {
      if (err) {
        DEBUG_BUILD && debug.error("Failed to setup Fastify instrumentation", err);
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
const fastifyIntegration = defineIntegration(
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
  const spanJSON = spanToJSON(span);
  const spanName = spanJSON.description;
  const attributes = spanJSON.data;
  const type = attributes["fastify.type"];
  const isHook = type === "hook";
  const isHandler = type === spanName?.startsWith("handler -");
  const isRequestHandler = spanName === "request" || type === "request-handler";
  if (attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP] || !isHandler && !isRequestHandler && !isHook) {
    return;
  }
  const opPrefix = isHook ? "hook" : isHandler ? "middleware" : isRequestHandler ? "request_handler" : "<unknown>";
  span.setAttributes({
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.fastify",
    [SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${opPrefix}.fastify`
  });
  const attrName = attributes["fastify.name"] || attributes["plugin.name"] || attributes["hook.name"];
  if (typeof attrName === "string") {
    const updatedName = attrName.replace(/^fastify -> /, "").replace(/^@fastify\/otel -> /, "").replace(/^@sentry\/instrumentation-fastify -> /, "");
    span.updateName(updatedName);
  }
}
function instrumentClient() {
  const client = getClient();
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
    getIsolationScope().setTransactionName(`${method} ${routeName}`);
  });
}

export { fastifyIntegration, instrumentFastify, instrumentFastifyV3, setupFastifyErrorHandler };
//# sourceMappingURL=index.js.map
