import { ATTR_HTTP_ROUTE, ATTR_HTTP_REQUEST_METHOD } from '@opentelemetry/semantic-conventions';
import { defineIntegration, spanToJSON, SEMANTIC_ATTRIBUTE_SENTRY_OP, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, getIsolationScope, getDefaultIsolationScope, debug, httpRequestToRequestData, captureException } from '@sentry/core';
import { generateInstrumentOnce, ensureIsWrapped } from '@sentry/node-core';
import { DEBUG_BUILD } from '../../../debug-build.js';
import { AttributeNames } from './constants.js';
import { HonoInstrumentation } from './instrumentation.js';

const INTEGRATION_NAME = "Hono";
function addHonoSpanAttributes(span) {
  const attributes = spanToJSON(span).data;
  const type = attributes[AttributeNames.HONO_TYPE];
  if (attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP] || !type) {
    return;
  }
  span.setAttributes({
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.hono",
    [SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${type}.hono`
  });
  const name = attributes[AttributeNames.HONO_NAME];
  if (typeof name === "string") {
    span.updateName(name);
  }
  if (getIsolationScope() === getDefaultIsolationScope()) {
    DEBUG_BUILD && debug.warn("Isolation scope is default isolation scope - skipping setting transactionName");
    return;
  }
  const route = attributes[ATTR_HTTP_ROUTE];
  const method = attributes[ATTR_HTTP_REQUEST_METHOD];
  if (typeof route === "string" && typeof method === "string") {
    getIsolationScope().setTransactionName(`${method} ${route}`);
  }
}
const instrumentHono = generateInstrumentOnce(
  INTEGRATION_NAME,
  () => new HonoInstrumentation({
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
const honoIntegration = defineIntegration(_honoIntegration);
function honoRequestHandler() {
  return async function sentryRequestMiddleware(context, next) {
    const normalizedRequest = httpRequestToRequestData(context.req);
    getIsolationScope().setSDKProcessingMetadata({ normalizedRequest });
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
      context.res.sentry = captureException(context.error, {
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
  ensureIsWrapped(app.use, "hono");
}

export { honoIntegration, instrumentHono, setupHonoErrorHandler };
//# sourceMappingURL=index.js.map
