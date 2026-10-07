Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('./vendored/instrumentation.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const INTEGRATION_NAME = "Kafka";
const instrumentKafka = nodeCore.generateInstrumentOnce(
  INTEGRATION_NAME,
  () => new instrumentation.KafkaJsInstrumentation({
    consumerHook(span) {
      nodeCore.addOriginToSpan(span, "auto.kafkajs.otel.consumer");
    },
    producerHook(span) {
      nodeCore.addOriginToSpan(span, "auto.kafkajs.otel.producer");
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
const kafkaIntegration = core.defineIntegration(_kafkaIntegration);

exports.instrumentKafka = instrumentKafka;
exports.kafkaIntegration = kafkaIntegration;
//# sourceMappingURL=index.js.map
