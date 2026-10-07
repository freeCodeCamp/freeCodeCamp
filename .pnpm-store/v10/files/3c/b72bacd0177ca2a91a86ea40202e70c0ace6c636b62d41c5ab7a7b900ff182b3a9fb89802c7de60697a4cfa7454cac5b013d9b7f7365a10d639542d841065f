Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const instrument = require('../../otel/instrument.js');
const SentryNodeFetchInstrumentation = require('./SentryNodeFetchInstrumentation.js');

const INTEGRATION_NAME = "NodeFetch";
const instrumentSentryNodeFetch = instrument.generateInstrumentOnce(
  `${INTEGRATION_NAME}.sentry`,
  SentryNodeFetchInstrumentation.SentryNodeFetchInstrumentation,
  (options) => {
    return options;
  }
);
const _nativeNodeFetchIntegration = ((options = {}) => {
  return {
    name: "NodeFetch",
    setupOnce() {
      instrumentSentryNodeFetch(options);
    }
  };
});
const nativeNodeFetchIntegration = core.defineIntegration(_nativeNodeFetchIntegration);

exports.nativeNodeFetchIntegration = nativeNodeFetchIntegration;
//# sourceMappingURL=index.js.map
