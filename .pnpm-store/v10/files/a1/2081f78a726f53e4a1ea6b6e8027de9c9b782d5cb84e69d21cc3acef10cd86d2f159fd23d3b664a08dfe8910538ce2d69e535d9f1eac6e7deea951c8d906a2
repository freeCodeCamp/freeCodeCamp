Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const instrumentation = require('./instrumentation.js');

const instrumentOpenAi = nodeCore.generateInstrumentOnce(
  core.OPENAI_INTEGRATION_NAME,
  (options) => new instrumentation.SentryOpenAiInstrumentation(options)
);
const _openAiIntegration = ((options = {}) => {
  return {
    name: core.OPENAI_INTEGRATION_NAME,
    setupOnce() {
      instrumentOpenAi(options);
    }
  };
});
const openAIIntegration = core.defineIntegration(_openAiIntegration);

exports.instrumentOpenAi = instrumentOpenAi;
exports.openAIIntegration = openAIIntegration;
//# sourceMappingURL=index.js.map
