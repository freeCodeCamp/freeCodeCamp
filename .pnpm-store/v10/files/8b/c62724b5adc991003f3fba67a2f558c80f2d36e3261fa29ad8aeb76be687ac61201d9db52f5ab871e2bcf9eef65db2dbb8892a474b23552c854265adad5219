import { UndiciInstrumentation } from './vendored/undici.js';
import { defineIntegration, stripDataUrlContent, SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME, SEMANTIC_ATTRIBUTE_URL_FULL, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, getClient, hasSpansEnabled } from '@sentry/core';
import { generateInstrumentOnce, SentryNodeFetchInstrumentation } from '@sentry/node-core';

const INTEGRATION_NAME = "NodeFetch";
const instrumentOtelNodeFetch = generateInstrumentOnce(
  INTEGRATION_NAME,
  UndiciInstrumentation,
  (options) => {
    return _getConfigWithDefaults(options);
  }
);
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
      const instrumentSpans = _shouldInstrumentSpans(options, getClient()?.getOptions());
      if (instrumentSpans) {
        instrumentOtelNodeFetch(options);
      }
      instrumentSentryNodeFetch(options);
    }
  };
});
const nativeNodeFetchIntegration = defineIntegration(_nativeNodeFetchIntegration);
function getAbsoluteUrl(origin, path = "/") {
  const url = `${origin}`;
  if (url.endsWith("/") && path.startsWith("/")) {
    return `${url}${path.slice(1)}`;
  }
  if (!url.endsWith("/") && !path.startsWith("/")) {
    return `${url}/${path}`;
  }
  return `${url}${path}`;
}
function _shouldInstrumentSpans(options, clientOptions = {}) {
  return typeof options.spans === "boolean" ? options.spans : !clientOptions.skipOpenTelemetrySetup && hasSpansEnabled(clientOptions);
}
function _getConfigWithDefaults(options = {}) {
  const instrumentationConfig = {
    requireParentforSpans: false,
    ignoreRequestHook: (request) => {
      const url = getAbsoluteUrl(request.origin, request.path);
      const _ignoreOutgoingRequests = options.ignoreOutgoingRequests;
      const shouldIgnore = _ignoreOutgoingRequests && url && _ignoreOutgoingRequests(url);
      return !!shouldIgnore;
    },
    startSpanHook: (request) => {
      const url = getAbsoluteUrl(request.origin, request.path);
      if (url.startsWith("data:")) {
        const sanitizedUrl = stripDataUrlContent(url);
        return {
          [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.node_fetch",
          "http.url": sanitizedUrl,
          [SEMANTIC_ATTRIBUTE_URL_FULL]: sanitizedUrl,
          [SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: `${request.method || "GET"} ${sanitizedUrl}`
        };
      }
      return {
        [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.node_fetch"
      };
    },
    requestHook: options.requestHook,
    responseHook: options.responseHook,
    headersToSpanAttributes: options.headersToSpanAttributes
  };
  return instrumentationConfig;
}

export { _getConfigWithDefaults, nativeNodeFetchIntegration };
//# sourceMappingURL=index.js.map
