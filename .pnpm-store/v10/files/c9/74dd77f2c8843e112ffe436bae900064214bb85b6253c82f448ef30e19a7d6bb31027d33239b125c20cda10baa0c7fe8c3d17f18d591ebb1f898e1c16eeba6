import { MongooseInstrumentation } from './vendored/mongoose.js';
import { defineIntegration } from '@sentry/core';
import { generateInstrumentOnce, addOriginToSpan } from '@sentry/node-core';

const INTEGRATION_NAME = "Mongoose";
const instrumentMongoose = generateInstrumentOnce(
  INTEGRATION_NAME,
  () => new MongooseInstrumentation({
    responseHook(span) {
      addOriginToSpan(span, "auto.db.otel.mongoose");
    }
  })
);
const _mongooseIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentMongoose();
    }
  };
});
const mongooseIntegration = defineIntegration(_mongooseIntegration);

export { instrumentMongoose, mongooseIntegration };
//# sourceMappingURL=index.js.map
