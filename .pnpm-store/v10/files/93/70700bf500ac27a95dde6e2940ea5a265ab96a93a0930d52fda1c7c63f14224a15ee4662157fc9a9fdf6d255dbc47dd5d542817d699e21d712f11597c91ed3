Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('./vendored/instrumentation.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const INTEGRATION_NAME = "Mysql2";
const instrumentMysql2 = nodeCore.generateInstrumentOnce(
  INTEGRATION_NAME,
  () => new instrumentation.MySQL2Instrumentation({
    responseHook(span) {
      nodeCore.addOriginToSpan(span, "auto.db.otel.mysql2");
    }
  })
);
const _mysql2Integration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentMysql2();
    }
  };
});
const mysql2Integration = core.defineIntegration(_mysql2Integration);

exports.instrumentMysql2 = instrumentMysql2;
exports.mysql2Integration = mysql2Integration;
//# sourceMappingURL=index.js.map
