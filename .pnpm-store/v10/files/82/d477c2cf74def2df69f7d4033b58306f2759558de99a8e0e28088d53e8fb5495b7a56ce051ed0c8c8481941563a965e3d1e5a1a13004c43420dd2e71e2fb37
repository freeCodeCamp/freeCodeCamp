Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('./vendored/instrumentation.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const INTEGRATION_NAME = "Mysql";
const instrumentMysql = nodeCore.generateInstrumentOnce(INTEGRATION_NAME, () => new instrumentation.MySQLInstrumentation({}));
const _mysqlIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentMysql();
    }
  };
});
const mysqlIntegration = core.defineIntegration(_mysqlIntegration);

exports.instrumentMysql = instrumentMysql;
exports.mysqlIntegration = mysqlIntegration;
//# sourceMappingURL=index.js.map
