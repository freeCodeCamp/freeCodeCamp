Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('./vendored/instrumentation.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const INTEGRATION_NAME = "Connect";
const instrumentConnect = nodeCore.generateInstrumentOnce(INTEGRATION_NAME, () => new instrumentation.ConnectInstrumentation());
const _connectIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentConnect();
    }
  };
});
const connectIntegration = core.defineIntegration(_connectIntegration);
function connectErrorMiddleware(err, req, res, next) {
  core.captureException(err, {
    mechanism: {
      handled: false,
      type: "auto.middleware.connect"
    }
  });
  next(err);
}
const setupConnectErrorHandler = (app) => {
  app.use(connectErrorMiddleware);
  const client = core.getClient();
  if (client) {
    client.on("spanStart", (span) => {
      addConnectSpanAttributes(span);
    });
  }
  nodeCore.ensureIsWrapped(app.use, "connect");
};
function addConnectSpanAttributes(span) {
  const attributes = core.spanToJSON(span).data;
  const type = attributes["connect.type"];
  if (attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] || !type) {
    return;
  }
  span.setAttributes({
    [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.connect",
    [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${type}.connect`
  });
  const name = attributes["connect.name"];
  if (typeof name === "string") {
    span.updateName(name);
  }
}

exports.connectIntegration = connectIntegration;
exports.instrumentConnect = instrumentConnect;
exports.setupConnectErrorHandler = setupConnectErrorHandler;
//# sourceMappingURL=index.js.map
