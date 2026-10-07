Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const instrumentation = require('./instrumentation.js');

const instrumentLangChain = nodeCore.generateInstrumentOnce(
  core.LANGCHAIN_INTEGRATION_NAME,
  (options) => new instrumentation.SentryLangChainInstrumentation(options)
);
const _langChainIntegration = ((options = {}) => {
  return {
    name: core.LANGCHAIN_INTEGRATION_NAME,
    setupOnce() {
      instrumentLangChain(options);
    }
  };
});
const langChainIntegration = core.defineIntegration(_langChainIntegration);

exports.instrumentLangChain = instrumentLangChain;
exports.langChainIntegration = langChainIntegration;
//# sourceMappingURL=index.js.map
