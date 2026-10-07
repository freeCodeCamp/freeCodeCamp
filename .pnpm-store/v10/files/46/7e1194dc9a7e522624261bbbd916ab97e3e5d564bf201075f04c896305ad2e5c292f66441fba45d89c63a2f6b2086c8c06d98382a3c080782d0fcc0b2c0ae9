Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('./vendored/instrumentation.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const INTEGRATION_NAME = "LruMemoizer";
const instrumentLruMemoizer = nodeCore.generateInstrumentOnce(INTEGRATION_NAME, () => new instrumentation.LruMemoizerInstrumentation());
const _lruMemoizerIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentLruMemoizer();
    }
  };
});
const lruMemoizerIntegration = core.defineIntegration(_lruMemoizerIntegration);

exports.instrumentLruMemoizer = instrumentLruMemoizer;
exports.lruMemoizerIntegration = lruMemoizerIntegration;
//# sourceMappingURL=index.js.map
