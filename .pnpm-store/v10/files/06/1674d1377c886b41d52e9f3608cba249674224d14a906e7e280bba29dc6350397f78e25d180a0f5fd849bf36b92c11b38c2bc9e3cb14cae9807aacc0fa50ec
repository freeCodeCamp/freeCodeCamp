Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('./vendored/instrumentation.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const INTEGRATION_NAME = "Knex";
const instrumentKnex = nodeCore.generateInstrumentOnce(
  INTEGRATION_NAME,
  () => new instrumentation.KnexInstrumentation({ requireParentSpan: true })
);
const _knexIntegration = (() => {
  let instrumentationWrappedCallback;
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      const instrumentation = instrumentKnex();
      instrumentationWrappedCallback = nodeCore.instrumentWhenWrapped(instrumentation);
    },
    setup(client) {
      instrumentationWrappedCallback?.(
        () => client.on("spanStart", (span) => {
          const { data } = core.spanToJSON(span);
          if ("knex.version" in data) {
            span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.db.otel.knex");
          }
        })
      );
    }
  };
});
const knexIntegration = core.defineIntegration(_knexIntegration);

exports.instrumentKnex = instrumentKnex;
exports.knexIntegration = knexIntegration;
//# sourceMappingURL=index.js.map
