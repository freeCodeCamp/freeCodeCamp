Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const amqplib = require('./vendored/amqplib.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const INTEGRATION_NAME = "Amqplib";
const config = {
  consumeEndHook: (span) => {
    nodeCore.addOriginToSpan(span, "auto.amqplib.otel.consumer");
  },
  publishHook: (span) => {
    nodeCore.addOriginToSpan(span, "auto.amqplib.otel.publisher");
  }
};
const instrumentAmqplib = nodeCore.generateInstrumentOnce(INTEGRATION_NAME, () => new amqplib.AmqplibInstrumentation(config));
const _amqplibIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentAmqplib();
    }
  };
});
const amqplibIntegration = core.defineIntegration(_amqplibIntegration);

exports.amqplibIntegration = amqplibIntegration;
exports.instrumentAmqplib = instrumentAmqplib;
//# sourceMappingURL=index.js.map
