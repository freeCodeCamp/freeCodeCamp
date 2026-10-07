Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const semanticConventions = require('@opentelemetry/semantic-conventions');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const debugBuild = require('../../../debug-build.js');
const constants = require('./constants.js');
const instrumentation = require('./instrumentation.js');

const INTEGRATION_NAME = "Hono";
function addHonoSpanAttributes(span) {
  const attributes = core.spanToJSON(span).data;
  const type = attributes[constants.AttributeNames.HONO_TYPE];
  if (attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] || !type) {
    return;
  }
  span.setAttributes({
    [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.hono",
    [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${type}.hono`
  });
  const name = attributes[constants.AttributeNames.HONO_NAME];
  if (typeof name === "string") {
    span.updateName(name);
  }
  if (core.getIsolationScope() === core.getDefaultIsolationScope()) {
    debugBuild.DEBUG_BUILD && core.debug.warn("Isolation scope is default isolation scope - skipping setting transactionName");
    return;
  }
  const route = attributes[semanticConventions.ATTR_HTTP_ROUTE];
  const method = attributes[semanticConventions.ATTR_HTTP_REQUEST_METHOD];
  if (typeof route === "string" && typeof method === "string") {
    core.getIsolationScope().setTransactionName(`${method} ${route}`);
  }
}
const instrumentHono = nodeCore.generateInstrumentOnce(
  INTEGRATION_NAME,
  () => new instrumentation.HonoInstrumentation({
    responseHook: (span) => {
      addHonoSpanAttributes(span);
    }
  })
);
const _honoIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentHono();
    }
  };
});
const honoIntegration = core.defineIntegration(_honoIntegration);
function honoRequestHandler() {
  return async function sentryRequestMiddleware(context, next) {
    const normalizedRequest = core.httpRequestToRequestData(context.req);
    core.getIsolationScope().setSDKProcessingMetadata({ normalizedRequest });
    await next();
  };
}
function defaultShouldHandleError(context) {
  const statusCode = context.res.status;
  return statusCode >= 500;
}
function honoErrorHandler(options) {
  return async function sentryErrorMiddleware(context, next) {
    await next();
    const shouldHandleError = options?.shouldHandleError || defaultShouldHandleError;
    if (shouldHandleError(context)) {
      context.res.sentry = core.captureException(context.error, {
        mechanism: {
          type: "auto.middleware.hono",
          handled: false
        }
      });
    }
  };
}
function setupHonoErrorHandler(app, options) {
  app.use(honoRequestHandler());
  app.use(honoErrorHandler(options));
  nodeCore.ensureIsWrapped(app.use, "hono");
}

exports.honoIntegration = honoIntegration;
exports.instrumentHono = instrumentHono;
exports.setupHonoErrorHandler = setupHonoErrorHandler;
//# sourceMappingURL=index.js.map
