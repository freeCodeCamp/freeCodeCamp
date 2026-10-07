import { ConnectInstrumentation } from './vendored/instrumentation.js';
import { defineIntegration, getClient, captureException, spanToJSON, SEMANTIC_ATTRIBUTE_SENTRY_OP, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '@sentry/core';
import { generateInstrumentOnce, ensureIsWrapped } from '@sentry/node-core';

const INTEGRATION_NAME = "Connect";
const instrumentConnect = generateInstrumentOnce(INTEGRATION_NAME, () => new ConnectInstrumentation());
const _connectIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentConnect();
    }
  };
});
const connectIntegration = defineIntegration(_connectIntegration);
function connectErrorMiddleware(err, req, res, next) {
  captureException(err, {
    mechanism: {
      handled: false,
      type: "auto.middleware.connect"
    }
  });
  next(err);
}
const setupConnectErrorHandler = (app) => {
  app.use(connectErrorMiddleware);
  const client = getClient();
  if (client) {
    client.on("spanStart", (span) => {
      addConnectSpanAttributes(span);
    });
  }
  ensureIsWrapped(app.use, "connect");
};
function addConnectSpanAttributes(span) {
  const attributes = spanToJSON(span).data;
  const type = attributes["connect.type"];
  if (attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP] || !type) {
    return;
  }
  span.setAttributes({
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.connect",
    [SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${type}.connect`
  });
  const name = attributes["connect.name"];
  if (typeof name === "string") {
    span.updateName(name);
  }
}

export { connectIntegration, instrumentConnect, setupConnectErrorHandler };
//# sourceMappingURL=index.js.map
