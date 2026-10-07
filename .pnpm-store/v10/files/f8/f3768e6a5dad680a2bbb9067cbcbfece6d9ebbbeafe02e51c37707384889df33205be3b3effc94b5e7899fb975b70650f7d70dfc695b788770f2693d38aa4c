import { GenericPoolInstrumentation } from './vendored/instrumentation.js';
import { defineIntegration, spanToJSON, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '@sentry/core';
import { generateInstrumentOnce, instrumentWhenWrapped } from '@sentry/node-core';

const INTEGRATION_NAME = "GenericPool";
const instrumentGenericPool = generateInstrumentOnce(INTEGRATION_NAME, () => new GenericPoolInstrumentation({}));
const _genericPoolIntegration = (() => {
  let instrumentationWrappedCallback;
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      const instrumentation = instrumentGenericPool();
      instrumentationWrappedCallback = instrumentWhenWrapped(instrumentation);
    },
    setup(client) {
      instrumentationWrappedCallback?.(
        () => client.on("spanStart", (span) => {
          const spanJSON = spanToJSON(span);
          const spanDescription = spanJSON.description;
          const isGenericPoolSpan = spanDescription === "generic-pool.aquire" || spanDescription === "generic-pool.acquire";
          if (isGenericPoolSpan) {
            span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.db.otel.generic_pool");
          }
        })
      );
    }
  };
});
const genericPoolIntegration = defineIntegration(_genericPoolIntegration);

export { genericPoolIntegration, instrumentGenericPool };
//# sourceMappingURL=index.js.map
