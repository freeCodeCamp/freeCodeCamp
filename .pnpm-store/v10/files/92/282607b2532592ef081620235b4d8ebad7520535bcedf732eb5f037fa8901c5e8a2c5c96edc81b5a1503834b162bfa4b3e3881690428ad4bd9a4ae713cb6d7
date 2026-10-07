Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const INTEGRATION_NAME = "Http";
const instrumentSentryHttp = nodeCore.generateInstrumentOnce(
  `${INTEGRATION_NAME}.sentry`,
  (options) => {
    return new nodeCore.SentryHttpInstrumentation(options);
  }
);
const httpIntegration = core.defineIntegration((options = {}) => {
  const spans = options.spans ?? true;
  const disableIncomingRequestSpans = options.disableIncomingRequestSpans;
  const enableServerSpans = spans && !disableIncomingRequestSpans;
  const serverOptions = {
    sessions: options.trackIncomingRequestsAsSessions,
    sessionFlushingDelayMS: options.sessionFlushingDelayMS,
    ignoreRequestBody: options.ignoreIncomingRequestBody,
    maxRequestBodySize: options.maxIncomingRequestBodySize
  };
  const serverSpansOptions = {
    ignoreIncomingRequests: options.ignoreIncomingRequests,
    ignoreStaticAssets: options.ignoreStaticAssets,
    ignoreStatusCodes: options.dropSpansForIncomingRequestStatusCodes,
    instrumentation: options.instrumentation,
    onSpanCreated: options.incomingRequestSpanHook
  };
  const server = nodeCore.httpServerIntegration(serverOptions);
  const serverSpans = nodeCore.httpServerSpansIntegration(serverSpansOptions);
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      const clientOptions = client.getOptions();
      if (enableServerSpans && core.hasSpansEnabled(clientOptions)) {
        serverSpans.setup(client);
      }
    },
    setupOnce() {
      server.setupOnce();
      const sentryHttpInstrumentationOptions = {
        breadcrumbs: options.breadcrumbs,
        spans,
        propagateTraceInOutgoingRequests: options.tracePropagation ?? true,
        createSpansForOutgoingRequests: spans,
        ignoreOutgoingRequests: options.ignoreOutgoingRequests,
        outgoingRequestHook: (span, request) => {
          const url = core.getRequestUrlFromClientRequest(request);
          if (url.startsWith("data:")) {
            const sanitizedUrl = core.stripDataUrlContent(url);
            span.setAttribute("http.url", sanitizedUrl);
            span.setAttribute(core.SEMANTIC_ATTRIBUTE_URL_FULL, sanitizedUrl);
            span.updateName(`${request.method || "GET"} ${sanitizedUrl}`);
          }
          options.instrumentation?.requestHook?.(span, request);
        },
        outgoingResponseHook: options.instrumentation?.responseHook,
        outgoingRequestApplyCustomAttributes: options.instrumentation?.applyCustomAttributesOnSpan
      };
      instrumentSentryHttp(sentryHttpInstrumentationOptions);
    },
    processEvent(event) {
      return serverSpans.processEvent(event);
    }
  };
});

exports.httpIntegration = httpIntegration;
exports.instrumentSentryHttp = instrumentSentryHttp;
//# sourceMappingURL=http.js.map
