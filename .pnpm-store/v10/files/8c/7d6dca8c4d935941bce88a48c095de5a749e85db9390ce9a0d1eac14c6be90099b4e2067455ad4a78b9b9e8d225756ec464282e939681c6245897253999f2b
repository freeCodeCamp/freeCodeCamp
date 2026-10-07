Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const undici = require('./vendored/undici.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const INTEGRATION_NAME = "NodeFetch";
const instrumentOtelNodeFetch = nodeCore.generateInstrumentOnce(
  INTEGRATION_NAME,
  undici.UndiciInstrumentation,
  (options) => {
    return _getConfigWithDefaults(options);
  }
);
const instrumentSentryNodeFetch = nodeCore.generateInstrumentOnce(
  `${INTEGRATION_NAME}.sentry`,
  nodeCore.SentryNodeFetchInstrumentation,
  (options) => {
    return options;
  }
);
const _nativeNodeFetchIntegration = ((options = {}) => {
  return {
    name: "NodeFetch",
    setupOnce() {
      const instrumentSpans = _shouldInstrumentSpans(options, core.getClient()?.getOptions());
      if (instrumentSpans) {
        instrumentOtelNodeFetch(options);
      }
      instrumentSentryNodeFetch(options);
    }
  };
});
const nativeNodeFetchIntegration = core.defineIntegration(_nativeNodeFetchIntegration);
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
  return typeof options.spans === "boolean" ? options.spans : !clientOptions.skipOpenTelemetrySetup && core.hasSpansEnabled(clientOptions);
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
        const sanitizedUrl = core.stripDataUrlContent(url);
        return {
          [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.node_fetch",
          "http.url": sanitizedUrl,
          [core.SEMANTIC_ATTRIBUTE_URL_FULL]: sanitizedUrl,
          [core.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: `${request.method || "GET"} ${sanitizedUrl}`
        };
      }
      return {
        [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.node_fetch"
      };
    },
    requestHook: options.requestHook,
    responseHook: options.responseHook,
    headersToSpanAttributes: options.headersToSpanAttributes
  };
  return instrumentationConfig;
}

exports._getConfigWithDefaults = _getConfigWithDefaults;
exports.nativeNodeFetchIntegration = nativeNodeFetchIntegration;
//# sourceMappingURL=index.js.map
