Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const diagnosticsChannel = require('node:diagnostics_channel');
const core = require('@sentry/core');
const node_events = require('node:events');
const nodeVersion = require('../../nodeVersion.js');

const INTEGRATION_NAME = "Http";
const FULLY_SUPPORTS_HTTP_DIAGNOSTICS_CHANNEL = nodeVersion.NODE_VERSION.major === 22 && nodeVersion.NODE_VERSION.minor >= 12 || nodeVersion.NODE_VERSION.major === 23 && nodeVersion.NODE_VERSION.minor >= 2 || nodeVersion.NODE_VERSION.major >= 24;
const _httpIntegration = ((options = {}) => {
  const _options = {
    ...options,
    sessions: false,
    maxRequestBodySize: options.maxRequestBodySize ?? "medium",
    ignoreRequestBody: options.ignoreRequestBody,
    breadcrumbs: options.breadcrumbs ?? true,
    tracePropagation: options.tracePropagation ?? true,
    ignoreOutgoingRequests: options.ignoreOutgoingRequests,
    // no spans created in light mode
    spans: false,
    errorMonitor: node_events.errorMonitor
  };
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      const { [core.HTTP_ON_SERVER_REQUEST]: onHttpServerRequestStart } = core.getHttpServerSubscriptions(_options);
      const { ignoreOutgoingRequests } = _options;
      const { [core.HTTP_ON_CLIENT_REQUEST]: onHttpClientRequestCreated } = core.getHttpClientSubscriptions({
        breadcrumbs: _options.breadcrumbs,
        propagateTrace: _options.tracePropagation,
        ignoreOutgoingRequests: ignoreOutgoingRequests ? (url, request) => ignoreOutgoingRequests(url, core.getRequestOptions(request)) : void 0,
        // No spans in light mode
        // means we don't have pass modules to detect OTel double-wrap
        spans: false,
        errorMonitor: node_events.errorMonitor
      });
      diagnosticsChannel.subscribe(core.HTTP_ON_SERVER_REQUEST, onHttpServerRequestStart);
      diagnosticsChannel.subscribe(core.HTTP_ON_CLIENT_REQUEST, onHttpClientRequestCreated);
      if (_options.breadcrumbs && !FULLY_SUPPORTS_HTTP_DIAGNOSTICS_CHANNEL) {
        diagnosticsChannel.subscribe("http.client.request.start", (data) => {
          const { request } = data;
          request.on(node_events.errorMonitor, () => onOutgoingResponseFinish(request, void 0, _options));
          request.prependListener("response", (response) => {
            if (request.listenerCount("response") <= 1) {
              response.resume();
            }
            onOutgoingResponseFinish(request, response, _options);
          });
        });
      }
    }
  };
});
function onOutgoingResponseFinish(request, response, options) {
  if (!options.breadcrumbs) {
    return;
  }
  if (core.getCurrentScope().getScopeData().sdkProcessingMetadata[core.SUPPRESS_TRACING_KEY]) {
    return;
  }
  const { ignoreOutgoingRequests } = options;
  if (ignoreOutgoingRequests) {
    const url = core.getRequestUrlFromClientRequest(request);
    if (ignoreOutgoingRequests(url, core.getRequestOptions(request))) {
      return;
    }
  }
  core.addOutgoingRequestBreadcrumb(request, response);
}
const httpIntegration = _httpIntegration;

exports.httpIntegration = httpIntegration;
//# sourceMappingURL=httpIntegration.js.map
