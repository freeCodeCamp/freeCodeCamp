Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const instrumentation = require('./instrumentation.js');

const instrumentGoogleGenAI = nodeCore.generateInstrumentOnce(
  core.GOOGLE_GENAI_INTEGRATION_NAME,
  (options) => new instrumentation.SentryGoogleGenAiInstrumentation(options)
);
const _googleGenAIIntegration = ((options = {}) => {
  return {
    name: core.GOOGLE_GENAI_INTEGRATION_NAME,
    setupOnce() {
      instrumentGoogleGenAI(options);
    }
  };
});
const googleGenAIIntegration = core.defineIntegration(_googleGenAIIntegration);

exports.googleGenAIIntegration = googleGenAIIntegration;
exports.instrumentGoogleGenAI = instrumentGoogleGenAI;
//# sourceMappingURL=index.js.map
