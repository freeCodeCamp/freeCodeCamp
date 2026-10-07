import { GOOGLE_GENAI_INTEGRATION_NAME, defineIntegration } from '@sentry/core';
import { generateInstrumentOnce } from '@sentry/node-core';
import { SentryGoogleGenAiInstrumentation } from './instrumentation.js';

const instrumentGoogleGenAI = generateInstrumentOnce(
  GOOGLE_GENAI_INTEGRATION_NAME,
  (options) => new SentryGoogleGenAiInstrumentation(options)
);
const _googleGenAIIntegration = ((options = {}) => {
  return {
    name: GOOGLE_GENAI_INTEGRATION_NAME,
    setupOnce() {
      instrumentGoogleGenAI(options);
    }
  };
});
const googleGenAIIntegration = defineIntegration(_googleGenAIIntegration);

export { googleGenAIIntegration, instrumentGoogleGenAI };
//# sourceMappingURL=index.js.map
