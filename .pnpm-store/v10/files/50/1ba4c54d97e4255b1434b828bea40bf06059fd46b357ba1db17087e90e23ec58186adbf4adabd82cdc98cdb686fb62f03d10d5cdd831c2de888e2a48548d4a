import { PgInstrumentation } from './vendored/instrumentation.js';
import { defineIntegration } from '@sentry/core';
import { generateInstrumentOnce, addOriginToSpan } from '@sentry/node-core';

const INTEGRATION_NAME = "Postgres";
const instrumentPostgres = generateInstrumentOnce(
  INTEGRATION_NAME,
  PgInstrumentation,
  (options) => ({
    requireParentSpan: true,
    requestHook(span) {
      addOriginToSpan(span, "auto.db.otel.postgres");
    },
    ignoreConnectSpans: options?.ignoreConnectSpans ?? false
  })
);
const _postgresIntegration = ((options) => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentPostgres(options);
    }
  };
});
const postgresIntegration = defineIntegration(_postgresIntegration);

export { instrumentPostgres, postgresIntegration };
//# sourceMappingURL=index.js.map
