import { AmqplibInstrumentation } from './vendored/amqplib.js';
import { defineIntegration } from '@sentry/core';
import { generateInstrumentOnce, addOriginToSpan } from '@sentry/node-core';

const INTEGRATION_NAME = "Amqplib";
const config = {
  consumeEndHook: (span) => {
    addOriginToSpan(span, "auto.amqplib.otel.consumer");
  },
  publishHook: (span) => {
    addOriginToSpan(span, "auto.amqplib.otel.publisher");
  }
};
const instrumentAmqplib = generateInstrumentOnce(INTEGRATION_NAME, () => new AmqplibInstrumentation(config));
const _amqplibIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentAmqplib();
    }
  };
});
const amqplibIntegration = defineIntegration(_amqplibIntegration);

export { amqplibIntegration, instrumentAmqplib };
//# sourceMappingURL=index.js.map
