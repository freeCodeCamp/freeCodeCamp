import { HapiInstrumentation } from './vendored/instrumentation.js';
import { defineIntegration, SDK_VERSION, getClient, getIsolationScope, getDefaultIsolationScope, debug, spanToJSON, SEMANTIC_ATTRIBUTE_SENTRY_OP, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, captureException } from '@sentry/core';
import { generateInstrumentOnce, ensureIsWrapped } from '@sentry/node-core';
import { DEBUG_BUILD } from '../../../debug-build.js';

const INTEGRATION_NAME = "Hapi";
const instrumentHapi = generateInstrumentOnce(INTEGRATION_NAME, () => new HapiInstrumentation());
const _hapiIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentHapi();
    }
  };
});
const hapiIntegration = defineIntegration(_hapiIntegration);
function isErrorEvent(event) {
  return !!(event && typeof event === "object" && "error" in event && event.error);
}
function sendErrorToSentry(errorData) {
  captureException(errorData, {
    mechanism: {
      type: "auto.function.hapi",
      handled: false
    }
  });
}
const hapiErrorPlugin = {
  name: "SentryHapiErrorPlugin",
  version: SDK_VERSION,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: async function(serverArg) {
    const server = serverArg;
    server.events.on({ name: "request", channels: ["error"] }, (request, event) => {
      if (getIsolationScope() !== getDefaultIsolationScope()) {
        const route = request.route;
        if (route.path) {
          getIsolationScope().setTransactionName(`${route.method.toUpperCase()} ${route.path}`);
        }
      } else {
        DEBUG_BUILD && debug.warn("Isolation scope is still the default isolation scope - skipping setting transactionName");
      }
      if (isErrorEvent(event)) {
        sendErrorToSentry(event.error);
      }
    });
  }
};
async function setupHapiErrorHandler(server) {
  await server.register(hapiErrorPlugin);
  const client = getClient();
  if (client) {
    client.on("spanStart", (span) => {
      addHapiSpanAttributes(span);
    });
  }
  ensureIsWrapped(server.register, "hapi");
}
function addHapiSpanAttributes(span) {
  const attributes = spanToJSON(span).data;
  const type = attributes["hapi.type"];
  if (attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP] || !type) {
    return;
  }
  span.setAttributes({
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.hapi",
    [SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${type}.hapi`
  });
}

export { hapiErrorPlugin, hapiIntegration, instrumentHapi, setupHapiErrorHandler };
//# sourceMappingURL=index.js.map
