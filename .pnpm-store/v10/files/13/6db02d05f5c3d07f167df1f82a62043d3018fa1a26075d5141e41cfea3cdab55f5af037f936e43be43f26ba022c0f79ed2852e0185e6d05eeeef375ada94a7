import { LruMemoizerInstrumentation } from './vendored/instrumentation.js';
import { defineIntegration } from '@sentry/core';
import { generateInstrumentOnce } from '@sentry/node-core';

const INTEGRATION_NAME = "LruMemoizer";
const instrumentLruMemoizer = generateInstrumentOnce(INTEGRATION_NAME, () => new LruMemoizerInstrumentation());
const _lruMemoizerIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentLruMemoizer();
    }
  };
});
const lruMemoizerIntegration = defineIntegration(_lruMemoizerIntegration);

export { instrumentLruMemoizer, lruMemoizerIntegration };
//# sourceMappingURL=index.js.map
