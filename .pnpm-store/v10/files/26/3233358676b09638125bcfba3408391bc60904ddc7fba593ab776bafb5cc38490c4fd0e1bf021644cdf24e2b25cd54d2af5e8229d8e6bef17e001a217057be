import { subscribe } from 'node:diagnostics_channel';
import { LRUMap, getCurrentScope } from '@sentry/core';
import { addTracePropagationHeadersToFetchRequest, addFetchRequestBreadcrumb, getAbsoluteUrl } from '../../utils/outgoingFetchRequest.js';

const INTEGRATION_NAME = "NodeFetch";
const _nativeNodeFetchIntegration = ((options = {}) => {
  const _options = {
    breadcrumbs: options.breadcrumbs ?? true,
    tracePropagation: options.tracePropagation ?? true,
    ignoreOutgoingRequests: options.ignoreOutgoingRequests
  };
  const propagationDecisionMap = new LRUMap(100);
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
      subscribe("undici:request:create", onRequestCreated);
      subscribe("undici:request:headers", onResponseHeaders);
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
    addTracePropagationHeadersToFetchRequest(request, propagationDecisionMap);
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
  addFetchRequestBreadcrumb(request, response);
}
function shouldIgnoreRequest(request, options) {
  if (getCurrentScope().getScopeData().sdkProcessingMetadata.__SENTRY_SUPPRESS_TRACING__) {
    return true;
  }
  const { ignoreOutgoingRequests } = options;
  if (!ignoreOutgoingRequests) {
    return false;
  }
  const url = getAbsoluteUrl(request.origin, request.path);
  return ignoreOutgoingRequests(url);
}

export { nativeNodeFetchIntegration };
//# sourceMappingURL=nativeNodeFetchIntegration.js.map
