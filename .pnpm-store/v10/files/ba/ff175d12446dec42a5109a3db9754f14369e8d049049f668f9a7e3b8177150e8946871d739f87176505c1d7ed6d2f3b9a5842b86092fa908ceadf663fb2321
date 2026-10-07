import { defineIntegration } from '@sentry/core';
import { generateInstrumentOnce } from '../../otel/instrument.js';
import { SentryNodeFetchInstrumentation } from './SentryNodeFetchInstrumentation.js';

const INTEGRATION_NAME = "NodeFetch";
const instrumentSentryNodeFetch = generateInstrumentOnce(
  `${INTEGRATION_NAME}.sentry`,
  SentryNodeFetchInstrumentation,
  (options) => {
    return options;
  }
);
const _nativeNodeFetchIntegration = ((options = {}) => {
  return {
    name: "NodeFetch",
    setupOnce() {
      instrumentSentryNodeFetch(options);
    }
  };
});
const nativeNodeFetchIntegration = defineIntegration(_nativeNodeFetchIntegration);

export { nativeNodeFetchIntegration };
//# sourceMappingURL=index.js.map
