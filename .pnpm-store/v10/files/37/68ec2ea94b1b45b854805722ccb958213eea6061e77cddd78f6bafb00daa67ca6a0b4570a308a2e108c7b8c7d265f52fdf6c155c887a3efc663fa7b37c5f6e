import { DataloaderInstrumentation } from './vendored/instrumentation.js';
import { defineIntegration, spanToJSON, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SEMANTIC_ATTRIBUTE_SENTRY_OP } from '@sentry/core';
import { generateInstrumentOnce, instrumentWhenWrapped } from '@sentry/node-core';

const INTEGRATION_NAME = "Dataloader";
const instrumentDataloader = generateInstrumentOnce(
  INTEGRATION_NAME,
  () => new DataloaderInstrumentation({
    requireParentSpan: true
  })
);
const _dataloaderIntegration = (() => {
  let instrumentationWrappedCallback;
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      const instrumentation = instrumentDataloader();
      instrumentationWrappedCallback = instrumentWhenWrapped(instrumentation);
    },
    setup(client) {
      instrumentationWrappedCallback?.(() => {
        client.on("spanStart", (span) => {
          const spanJSON = spanToJSON(span);
          if (spanJSON.description?.startsWith("dataloader")) {
            span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.db.otel.dataloader");
          }
          if (spanJSON.description === "dataloader.load" || spanJSON.description === "dataloader.loadMany" || spanJSON.description === "dataloader.batch") {
            span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_OP, "cache.get");
          }
        });
      });
    }
  };
});
const dataloaderIntegration = defineIntegration(_dataloaderIntegration);

export { dataloaderIntegration, instrumentDataloader };
//# sourceMappingURL=index.js.map
