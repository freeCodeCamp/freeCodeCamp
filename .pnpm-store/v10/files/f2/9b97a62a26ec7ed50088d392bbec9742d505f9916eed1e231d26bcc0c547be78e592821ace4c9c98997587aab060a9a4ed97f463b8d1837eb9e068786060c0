import { KnexInstrumentation } from './vendored/instrumentation.js';
import { defineIntegration, spanToJSON, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '@sentry/core';
import { generateInstrumentOnce, instrumentWhenWrapped } from '@sentry/node-core';

const INTEGRATION_NAME = "Knex";
const instrumentKnex = generateInstrumentOnce(
  INTEGRATION_NAME,
  () => new KnexInstrumentation({ requireParentSpan: true })
);
const _knexIntegration = (() => {
  let instrumentationWrappedCallback;
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      const instrumentation = instrumentKnex();
      instrumentationWrappedCallback = instrumentWhenWrapped(instrumentation);
    },
    setup(client) {
      instrumentationWrappedCallback?.(
        () => client.on("spanStart", (span) => {
          const { data } = spanToJSON(span);
          if ("knex.version" in data) {
            span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.db.otel.knex");
          }
        })
      );
    }
  };
});
const knexIntegration = defineIntegration(_knexIntegration);

export { instrumentKnex, knexIntegration };
//# sourceMappingURL=index.js.map
