import { OPENAI_INTEGRATION_NAME, defineIntegration } from '@sentry/core';
import { generateInstrumentOnce } from '@sentry/node-core';
import { SentryOpenAiInstrumentation } from './instrumentation.js';

const instrumentOpenAi = generateInstrumentOnce(
  OPENAI_INTEGRATION_NAME,
  (options) => new SentryOpenAiInstrumentation(options)
);
const _openAiIntegration = ((options = {}) => {
  return {
    name: OPENAI_INTEGRATION_NAME,
    setupOnce() {
      instrumentOpenAi(options);
    }
  };
});
const openAIIntegration = defineIntegration(_openAiIntegration);

export { instrumentOpenAi, openAIIntegration };
//# sourceMappingURL=index.js.map
