import { LANGGRAPH_INTEGRATION_NAME, defineIntegration } from '@sentry/core';
import { generateInstrumentOnce } from '@sentry/node-core';
import { SentryLangGraphInstrumentation } from './instrumentation.js';

const instrumentLangGraph = generateInstrumentOnce(
  LANGGRAPH_INTEGRATION_NAME,
  (options) => new SentryLangGraphInstrumentation(options)
);
const _langGraphIntegration = ((options = {}) => {
  return {
    name: LANGGRAPH_INTEGRATION_NAME,
    setupOnce() {
      instrumentLangGraph(options);
    }
  };
});
const langGraphIntegration = defineIntegration(_langGraphIntegration);

export { instrumentLangGraph, langGraphIntegration };
//# sourceMappingURL=index.js.map
