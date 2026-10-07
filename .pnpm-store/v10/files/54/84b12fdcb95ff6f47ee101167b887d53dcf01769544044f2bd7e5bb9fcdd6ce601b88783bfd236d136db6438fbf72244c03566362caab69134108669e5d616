Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const instrumentation = require('./instrumentation.js');

const instrumentLangGraph = nodeCore.generateInstrumentOnce(
  core.LANGGRAPH_INTEGRATION_NAME,
  (options) => new instrumentation.SentryLangGraphInstrumentation(options)
);
const _langGraphIntegration = ((options = {}) => {
  return {
    name: core.LANGGRAPH_INTEGRATION_NAME,
    setupOnce() {
      instrumentLangGraph(options);
    }
  };
});
const langGraphIntegration = core.defineIntegration(_langGraphIntegration);

exports.instrumentLangGraph = instrumentLangGraph;
exports.langGraphIntegration = langGraphIntegration;
//# sourceMappingURL=index.js.map
