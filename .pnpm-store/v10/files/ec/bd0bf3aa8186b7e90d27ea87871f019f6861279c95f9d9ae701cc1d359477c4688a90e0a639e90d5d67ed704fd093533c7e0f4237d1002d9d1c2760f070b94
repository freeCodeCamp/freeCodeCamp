import { MySQLInstrumentation } from './vendored/instrumentation.js';
import { defineIntegration } from '@sentry/core';
import { generateInstrumentOnce } from '@sentry/node-core';

const INTEGRATION_NAME = "Mysql";
const instrumentMysql = generateInstrumentOnce(INTEGRATION_NAME, () => new MySQLInstrumentation({}));
const _mysqlIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentMysql();
    }
  };
});
const mysqlIntegration = defineIntegration(_mysqlIntegration);

export { instrumentMysql, mysqlIntegration };
//# sourceMappingURL=index.js.map
