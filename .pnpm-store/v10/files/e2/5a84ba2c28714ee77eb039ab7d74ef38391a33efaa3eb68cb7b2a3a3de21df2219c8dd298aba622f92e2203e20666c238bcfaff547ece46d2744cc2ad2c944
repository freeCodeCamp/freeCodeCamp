Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('./vendored/instrumentation.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const INTEGRATION_NAME = "GenericPool";
const instrumentGenericPool = nodeCore.generateInstrumentOnce(INTEGRATION_NAME, () => new instrumentation.GenericPoolInstrumentation({}));
const _genericPoolIntegration = (() => {
  let instrumentationWrappedCallback;
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      const instrumentation = instrumentGenericPool();
      instrumentationWrappedCallback = nodeCore.instrumentWhenWrapped(instrumentation);
    },
    setup(client) {
      instrumentationWrappedCallback?.(
        () => client.on("spanStart", (span) => {
          const spanJSON = core.spanToJSON(span);
          const spanDescription = spanJSON.description;
          const isGenericPoolSpan = spanDescription === "generic-pool.aquire" || spanDescription === "generic-pool.acquire";
          if (isGenericPoolSpan) {
            span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.db.otel.generic_pool");
          }
        })
      );
    }
  };
});
const genericPoolIntegration = core.defineIntegration(_genericPoolIntegration);

exports.genericPoolIntegration = genericPoolIntegration;
exports.instrumentGenericPool = instrumentGenericPool;
//# sourceMappingURL=index.js.map
