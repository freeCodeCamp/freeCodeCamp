import { MySQL2Instrumentation } from './vendored/instrumentation.js';
import { defineIntegration } from '@sentry/core';
import { generateInstrumentOnce, addOriginToSpan } from '@sentry/node-core';

const INTEGRATION_NAME = "Mysql2";
const instrumentMysql2 = generateInstrumentOnce(
  INTEGRATION_NAME,
  () => new MySQL2Instrumentation({
    responseHook(span) {
      addOriginToSpan(span, "auto.db.otel.mysql2");
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
const mysql2Integration = defineIntegration(_mysql2Integration);

export { instrumentMysql2, mysql2Integration };
//# sourceMappingURL=index.js.map
