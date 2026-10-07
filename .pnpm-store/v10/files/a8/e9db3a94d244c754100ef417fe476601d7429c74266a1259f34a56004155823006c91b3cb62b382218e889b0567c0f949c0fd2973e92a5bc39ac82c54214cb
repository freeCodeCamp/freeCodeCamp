Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('./vendored/instrumentation.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const INTEGRATION_NAME = "Mongo";
const instrumentMongo = nodeCore.generateInstrumentOnce(
  INTEGRATION_NAME,
  () => new instrumentation.MongoDBInstrumentation({
    dbStatementSerializer: _defaultDbStatementSerializer,
    responseHook(span) {
      nodeCore.addOriginToSpan(span, "auto.db.otel.mongo");
    }
  })
);
function _defaultDbStatementSerializer(commandObj) {
  const resultObj = _scrubStatement(commandObj);
  return JSON.stringify(resultObj);
}
function _scrubStatement(value) {
  if (Array.isArray(value)) {
    return value.map((element) => _scrubStatement(element));
  }
  if (isCommandObj(value)) {
    const initial = {};
    return Object.entries(value).map(([key, element]) => [key, _scrubStatement(element)]).reduce((prev, current) => {
      if (isCommandEntry(current)) {
        prev[current[0]] = current[1];
      }
      return prev;
    }, initial);
  }
  return "?";
}
function isCommandObj(value) {
  return typeof value === "object" && value !== null && !isBuffer(value);
}
function isBuffer(value) {
  let isBuffer2 = false;
  if (typeof Buffer !== "undefined") {
    isBuffer2 = Buffer.isBuffer(value);
  }
  return isBuffer2;
}
function isCommandEntry(value) {
  return Array.isArray(value);
}
const _mongoIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentMongo();
    }
  };
});
const mongoIntegration = core.defineIntegration(_mongoIntegration);

exports._defaultDbStatementSerializer = _defaultDbStatementSerializer;
exports.instrumentMongo = instrumentMongo;
exports.mongoIntegration = mongoIntegration;
//# sourceMappingURL=index.js.map
