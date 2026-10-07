Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('./vendored/instrumentation.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const INTEGRATION_NAME = "Dataloader";
const instrumentDataloader = nodeCore.generateInstrumentOnce(
  INTEGRATION_NAME,
  () => new instrumentation.DataloaderInstrumentation({
    requireParentSpan: true
  })
);
const _dataloaderIntegration = (() => {
  let instrumentationWrappedCallback;
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      const instrumentation = instrumentDataloader();
      instrumentationWrappedCallback = nodeCore.instrumentWhenWrapped(instrumentation);
    },
    setup(client) {
      instrumentationWrappedCallback?.(() => {
        client.on("spanStart", (span) => {
          const spanJSON = core.spanToJSON(span);
          if (spanJSON.description?.startsWith("dataloader")) {
            span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.db.otel.dataloader");
          }
          if (spanJSON.description === "dataloader.load" || spanJSON.description === "dataloader.loadMany" || spanJSON.description === "dataloader.batch") {
            span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, "cache.get");
          }
        });
      });
    }
  };
});
const dataloaderIntegration = core.defineIntegration(_dataloaderIntegration);

exports.dataloaderIntegration = dataloaderIntegration;
exports.instrumentDataloader = instrumentDataloader;
//# sourceMappingURL=index.js.map
