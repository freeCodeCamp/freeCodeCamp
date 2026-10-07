import { subscribe } from 'node:diagnostics_channel';
import { getHttpServerSubscriptions, HTTP_ON_SERVER_REQUEST, getHttpClientSubscriptions, getRequestOptions, HTTP_ON_CLIENT_REQUEST, getCurrentScope, SUPPRESS_TRACING_KEY, getRequestUrlFromClientRequest, addOutgoingRequestBreadcrumb } from '@sentry/core';
import { errorMonitor } from 'node:events';
import { NODE_VERSION } from '../../nodeVersion.js';

const INTEGRATION_NAME = "Http";
const FULLY_SUPPORTS_HTTP_DIAGNOSTICS_CHANNEL = NODE_VERSION.major === 22 && NODE_VERSION.minor >= 12 || NODE_VERSION.major === 23 && NODE_VERSION.minor >= 2 || NODE_VERSION.major >= 24;
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
    errorMonitor
  };
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      const { [HTTP_ON_SERVER_REQUEST]: onHttpServerRequestStart } = getHttpServerSubscriptions(_options);
      const { ignoreOutgoingRequests } = _options;
      const { [HTTP_ON_CLIENT_REQUEST]: onHttpClientRequestCreated } = getHttpClientSubscriptions({
        breadcrumbs: _options.breadcrumbs,
        propagateTrace: _options.tracePropagation,
        ignoreOutgoingRequests: ignoreOutgoingRequests ? (url, request) => ignoreOutgoingRequests(url, getRequestOptions(request)) : void 0,
        // No spans in light mode
        // means we don't have pass modules to detect OTel double-wrap
        spans: false,
        errorMonitor
      });
      subscribe(HTTP_ON_SERVER_REQUEST, onHttpServerRequestStart);
      subscribe(HTTP_ON_CLIENT_REQUEST, onHttpClientRequestCreated);
      if (_options.breadcrumbs && !FULLY_SUPPORTS_HTTP_DIAGNOSTICS_CHANNEL) {
        subscribe("http.client.request.start", (data) => {
          const { request } = data;
          request.on(errorMonitor, () => onOutgoingResponseFinish(request, void 0, _options));
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
  if (getCurrentScope().getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY]) {
    return;
  }
  const { ignoreOutgoingRequests } = options;
  if (ignoreOutgoingRequests) {
    const url = getRequestUrlFromClientRequest(request);
    if (ignoreOutgoingRequests(url, getRequestOptions(request))) {
      return;
    }
  }
  addOutgoingRequestBreadcrumb(request, response);
}
const httpIntegration = _httpIntegration;

export { httpIntegration };
//# sourceMappingURL=httpIntegration.js.map
