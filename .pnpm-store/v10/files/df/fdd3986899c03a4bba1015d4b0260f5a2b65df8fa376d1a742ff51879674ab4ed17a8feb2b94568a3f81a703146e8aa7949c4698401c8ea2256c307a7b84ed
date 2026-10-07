import { defineIntegration, hasSpansEnabled, getRequestUrlFromClientRequest, stripDataUrlContent, SEMANTIC_ATTRIBUTE_URL_FULL } from '@sentry/core';
import { generateInstrumentOnce, SentryHttpInstrumentation, httpServerIntegration, httpServerSpansIntegration } from '@sentry/node-core';

const INTEGRATION_NAME = "Http";
const instrumentSentryHttp = generateInstrumentOnce(
  `${INTEGRATION_NAME}.sentry`,
  (options) => {
    return new SentryHttpInstrumentation(options);
  }
);
const httpIntegration = defineIntegration((options = {}) => {
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
  const server = httpServerIntegration(serverOptions);
  const serverSpans = httpServerSpansIntegration(serverSpansOptions);
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      const clientOptions = client.getOptions();
      if (enableServerSpans && hasSpansEnabled(clientOptions)) {
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
          const url = getRequestUrlFromClientRequest(request);
          if (url.startsWith("data:")) {
            const sanitizedUrl = stripDataUrlContent(url);
            span.setAttribute("http.url", sanitizedUrl);
            span.setAttribute(SEMANTIC_ATTRIBUTE_URL_FULL, sanitizedUrl);
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

export { httpIntegration, instrumentSentryHttp };
//# sourceMappingURL=http.js.map
