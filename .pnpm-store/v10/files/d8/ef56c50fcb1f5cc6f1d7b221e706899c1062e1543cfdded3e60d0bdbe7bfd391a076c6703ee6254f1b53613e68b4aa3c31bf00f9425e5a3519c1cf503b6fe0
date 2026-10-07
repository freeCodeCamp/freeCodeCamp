Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('./vendored/instrumentation.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const INTEGRATION_NAME = "Postgres";
const instrumentPostgres = nodeCore.generateInstrumentOnce(
  INTEGRATION_NAME,
  instrumentation.PgInstrumentation,
  (options) => ({
    requireParentSpan: true,
    requestHook(span) {
      nodeCore.addOriginToSpan(span, "auto.db.otel.postgres");
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
const postgresIntegration = core.defineIntegration(_postgresIntegration);

exports.instrumentPostgres = instrumentPostgres;
exports.postgresIntegration = postgresIntegration;
//# sourceMappingURL=index.js.map
