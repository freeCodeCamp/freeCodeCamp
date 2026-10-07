import { MongoDBInstrumentation } from './vendored/instrumentation.js';
import { defineIntegration } from '@sentry/core';
import { generateInstrumentOnce, addOriginToSpan } from '@sentry/node-core';

const INTEGRATION_NAME = "Mongo";
const instrumentMongo = generateInstrumentOnce(
  INTEGRATION_NAME,
  () => new MongoDBInstrumentation({
    dbStatementSerializer: _defaultDbStatementSerializer,
    responseHook(span) {
      addOriginToSpan(span, "auto.db.otel.mongo");
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
const mongoIntegration = defineIntegration(_mongoIntegration);

export { _defaultDbStatementSerializer, instrumentMongo, mongoIntegration };
//# sourceMappingURL=index.js.map
