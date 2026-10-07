import { ANTHROPIC_AI_INTEGRATION_NAME, defineIntegration } from '@sentry/core';
import { generateInstrumentOnce } from '@sentry/node-core';
import { SentryAnthropicAiInstrumentation } from './instrumentation.js';

const instrumentAnthropicAi = generateInstrumentOnce(
  ANTHROPIC_AI_INTEGRATION_NAME,
  (options) => new SentryAnthropicAiInstrumentation(options)
);
const _anthropicAIIntegration = ((options = {}) => {
  return {
    name: ANTHROPIC_AI_INTEGRATION_NAME,
    options,
    setupOnce() {
      instrumentAnthropicAi(options);
    }
  };
});
const anthropicAIIntegration = defineIntegration(_anthropicAIIntegration);

export { anthropicAIIntegration, instrumentAnthropicAi };
//# sourceMappingURL=index.js.map
