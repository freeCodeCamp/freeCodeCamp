Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const diagnosticsChannel = require('node:diagnostics_channel');
const core = require('@sentry/core');
const outgoingFetchRequest = require('../../utils/outgoingFetchRequest.js');

const INTEGRATION_NAME = "NodeFetch";
const _nativeNodeFetchIntegration = ((options = {}) => {
  const _options = {
    breadcrumbs: options.breadcrumbs ?? true,
    tracePropagation: options.tracePropagation ?? true,
    ignoreOutgoingRequests: options.ignoreOutgoingRequests
  };
  const propagationDecisionMap = new core.LRUMap(100);
  const ignoreOutgoingRequestsMap = /* @__PURE__ */ new WeakMap();
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      const onRequestCreated = ((_data) => {
        const data = _data;
        onUndiciRequestCreated(data.request, _options, propagationDecisionMap, ignoreOutgoingRequestsMap);
      });
      const onResponseHeaders = ((_data) => {
        const data = _data;
        onUndiciResponseHeaders(data.request, data.response, _options, ignoreOutgoingRequestsMap);
      });
      diagnosticsChannel.subscribe("undici:request:create", onRequestCreated);
      diagnosticsChannel.subscribe("undici:request:headers", onResponseHeaders);
    }
  };
});
const nativeNodeFetchIntegration = _nativeNodeFetchIntegration;
function onUndiciRequestCreated(request, options, propagationDecisionMap, ignoreOutgoingRequestsMap) {
  const shouldIgnore = shouldIgnoreRequest(request, options);
  ignoreOutgoingRequestsMap.set(request, shouldIgnore);
  if (shouldIgnore) {
    return;
  }
  if (options.tracePropagation) {
    outgoingFetchRequest.addTracePropagationHeadersToFetchRequest(request, propagationDecisionMap);
  }
}
function onUndiciResponseHeaders(request, response, options, ignoreOutgoingRequestsMap) {
  if (!options.breadcrumbs) {
    return;
  }
  const shouldIgnore = ignoreOutgoingRequestsMap.get(request);
  if (shouldIgnore) {
    return;
  }
  outgoingFetchRequest.addFetchRequestBreadcrumb(request, response);
}
function shouldIgnoreRequest(request, options) {
  if (core.getCurrentScope().getScopeData().sdkProcessingMetadata.__SENTRY_SUPPRESS_TRACING__) {
    return true;
  }
  const { ignoreOutgoingRequests } = options;
  if (!ignoreOutgoingRequests) {
    return false;
  }
  const url = outgoingFetchRequest.getAbsoluteUrl(request.origin, request.path);
  return ignoreOutgoingRequests(url);
}

exports.nativeNodeFetchIntegration = nativeNodeFetchIntegration;
//# sourceMappingURL=nativeNodeFetchIntegration.js.map
