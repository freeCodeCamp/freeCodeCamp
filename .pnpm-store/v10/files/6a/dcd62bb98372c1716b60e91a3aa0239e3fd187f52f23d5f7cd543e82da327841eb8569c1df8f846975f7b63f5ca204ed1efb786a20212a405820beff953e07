Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const instrument = require('../../otel/instrument.js');
const httpServerIntegration = require('./httpServerIntegration.js');
const httpServerSpansIntegration = require('./httpServerSpansIntegration.js');
const SentryHttpInstrumentation = require('./SentryHttpInstrumentation.js');

const INTEGRATION_NAME = "Http";
const instrumentSentryHttp = instrument.generateInstrumentOnce(
  `${INTEGRATION_NAME}.sentry`,
  (options) => {
    return new SentryHttpInstrumentation.SentryHttpInstrumentation(options);
  }
);
const httpIntegration = core.defineIntegration((options = {}) => {
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
  const server = httpServerIntegration.httpServerIntegration(serverOptions);
  const serverSpans = httpServerSpansIntegration.httpServerSpansIntegration(serverSpansOptions);
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

exports.httpIntegration = httpIntegration;
exports.instrumentSentryHttp = instrumentSentryHttp;
//# sourceMappingURL=index.js.map
