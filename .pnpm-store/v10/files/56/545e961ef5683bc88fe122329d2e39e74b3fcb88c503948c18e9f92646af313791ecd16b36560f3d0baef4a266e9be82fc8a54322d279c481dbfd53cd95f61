import { LANGCHAIN_INTEGRATION_NAME, defineIntegration } from '@sentry/core';
import { generateInstrumentOnce } from '@sentry/node-core';
import { SentryLangChainInstrumentation } from './instrumentation.js';

const instrumentLangChain = generateInstrumentOnce(
  LANGCHAIN_INTEGRATION_NAME,
  (options) => new SentryLangChainInstrumentation(options)
);
const _langChainIntegration = ((options = {}) => {
  return {
    name: LANGCHAIN_INTEGRATION_NAME,
    setupOnce() {
      instrumentLangChain(options);
    }
  };
});
const langChainIntegration = defineIntegration(_langChainIntegration);

export { instrumentLangChain, langChainIntegration };
//# sourceMappingURL=index.js.map
