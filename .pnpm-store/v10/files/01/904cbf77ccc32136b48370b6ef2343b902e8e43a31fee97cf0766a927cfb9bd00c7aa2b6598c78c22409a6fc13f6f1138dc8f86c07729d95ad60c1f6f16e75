Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const instrumentation = require('./instrumentation.js');

const instrumentAnthropicAi = nodeCore.generateInstrumentOnce(
  core.ANTHROPIC_AI_INTEGRATION_NAME,
  (options) => new instrumentation.SentryAnthropicAiInstrumentation(options)
);
const _anthropicAIIntegration = ((options = {}) => {
  return {
    name: core.ANTHROPIC_AI_INTEGRATION_NAME,
    options,
    setupOnce() {
      instrumentAnthropicAi(options);
    }
  };
});
const anthropicAIIntegration = core.defineIntegration(_anthropicAIIntegration);

exports.anthropicAIIntegration = anthropicAIIntegration;
exports.instrumentAnthropicAi = instrumentAnthropicAi;
//# sourceMappingURL=index.js.map
