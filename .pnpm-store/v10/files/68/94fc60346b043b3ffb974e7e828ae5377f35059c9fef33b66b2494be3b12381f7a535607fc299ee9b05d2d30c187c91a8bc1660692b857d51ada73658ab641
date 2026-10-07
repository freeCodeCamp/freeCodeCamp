import { KafkaJsInstrumentation } from './vendored/instrumentation.js';
import { defineIntegration } from '@sentry/core';
import { generateInstrumentOnce, addOriginToSpan } from '@sentry/node-core';

const INTEGRATION_NAME = "Kafka";
const instrumentKafka = generateInstrumentOnce(
  INTEGRATION_NAME,
  () => new KafkaJsInstrumentation({
    consumerHook(span) {
      addOriginToSpan(span, "auto.kafkajs.otel.consumer");
    },
    producerHook(span) {
      addOriginToSpan(span, "auto.kafkajs.otel.producer");
    }
  })
);
const _kafkaIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentKafka();
    }
  };
});
const kafkaIntegration = defineIntegration(_kafkaIntegration);

export { instrumentKafka, kafkaIntegration };
//# sourceMappingURL=index.js.map
