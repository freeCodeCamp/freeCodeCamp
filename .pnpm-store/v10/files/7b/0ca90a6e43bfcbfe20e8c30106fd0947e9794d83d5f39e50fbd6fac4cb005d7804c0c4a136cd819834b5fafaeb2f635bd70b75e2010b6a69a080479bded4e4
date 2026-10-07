import { defineIntegration } from '@sentry/core';
import { generateInstrumentOnce } from '../../otel/instrument.js';
import { httpServerIntegration } from './httpServerIntegration.js';
import { httpServerSpansIntegration } from './httpServerSpansIntegration.js';
import { SentryHttpInstrumentation } from './SentryHttpInstrumentation.js';

const INTEGRATION_NAME = "Http";
const instrumentSentryHttp = generateInstrumentOnce(
  `${INTEGRATION_NAME}.sentry`,
  (options) => {
    return new SentryHttpInstrumentation(options);
  }
);
const httpIntegration = defineIntegration((options = {}) => {
  const serverOptions = {
    sessions: options.trackIncomingRequestsAsSessions,
    sessionFlushingDelayMS: options.sessionFlushingDelayMS,
    ignoreRequestBody: options.ignoreIncomingRequestBody,
    maxRequestBodySize: options.maxIncomingRequestBodySize
  };
  const serverSpansOptions = {
    ignoreIncomingRequests: options.ignoreIncomingRequests,
    ignoreStaticAssets: options.ignoreStaticAssets,
    ignoreStatusCodes: options.dropSpansForIncomingRequestStatusCodes
  };
  const httpInstrumentationOptions = {
    breadcrumbs: options.breadcrumbs,
    propagateTraceInOutgoingRequests: options.tracePropagation ?? true,
    ignoreOutgoingRequests: options.ignoreOutgoingRequests
  };
  const server = httpServerIntegration(serverOptions);
  const serverSpans = httpServerSpansIntegration(serverSpansOptions);
  const spans = options.spans ?? false;
  const disableIncomingRequestSpans = options.disableIncomingRequestSpans ?? false;
  const enabledServerSpans = spans && !disableIncomingRequestSpans;
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      if (enabledServerSpans) {
        serverSpans.setup(client);
      }
    },
    setupOnce() {
      server.setupOnce();
      instrumentSentryHttp(httpInstrumentationOptions);
    },
    processEvent(event) {
      return serverSpans.processEvent(event);
    }
  };
});

export { httpIntegration, instrumentSentryHttp };
//# sourceMappingURL=index.js.map
