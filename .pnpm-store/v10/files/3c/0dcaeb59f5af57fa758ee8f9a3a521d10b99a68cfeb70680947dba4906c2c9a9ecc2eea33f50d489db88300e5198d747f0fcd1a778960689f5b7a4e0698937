import { subscribe } from 'node:diagnostics_channel';
import { createContextKey, context, propagation } from '@opentelemetry/api';
import { debug, getHttpServerSubscriptions, HTTP_ON_SERVER_REQUEST, getClient, addNonEnumerableProperty } from '@sentry/core';
export { recordRequestSession } from '@sentry/core';
import { DEBUG_BUILD } from '../../debug-build.js';

const HTTP_SERVER_INSTRUMENTED_KEY = createContextKey("sentry_http_server_instrumented");
const INTEGRATION_NAME = "Http.Server";
function addStartSpanCallback(request, callback) {
  addNonEnumerableProperty(request, "_startSpanCallback", new WeakRef(callback));
}
const _httpServerIntegration = ((options = {}) => {
  const _options = {
    sessions: options.sessions ?? true,
    sessionFlushingDelayMS: options.sessionFlushingDelayMS ?? 6e4,
    maxRequestBodySize: options.maxRequestBodySize ?? "medium",
    // Server spans are created by `httpServerSpansIntegration` via the
    // `httpServerRequest` client event + `_startSpanCallback`, not by the
    // core subscription helper. Explicitly opt out so the helper does not
    // double-create spans when the client has tracing enabled.
    spans: false,
    // Cast: core uses HttpIncomingMessage; node consumers pass
    // RequestOptions-typed callbacks.
    // The two are structurally compatible for the fields the callback reads
    // (url, method, headers).
    ignoreRequestBody: options.ignoreRequestBody,
    /**
     * Hook called by core's `instrumentServer` to wrap the upstream
     * `emit('request')` call.
     *
     * We use it to extract OTel context from request headers and re-enter
     * the OTel context before the framework sees the request, so subsequent
     * spans (eg from `httpServerSpansIntegration`) attach to the right trace.
     */
    wrapServerEmitRequest(request, response, normalizedRequest, next) {
      const client = getClient();
      if (!client) return next();
      if (context.active().getValue(HTTP_SERVER_INSTRUMENTED_KEY)) {
        return next();
      }
      const ctx = propagation.extract(context.active(), normalizedRequest.headers).setValue(HTTP_SERVER_INSTRUMENTED_KEY, true);
      context.with(ctx, () => {
        client.emit("httpServerRequest", request, response, normalizedRequest);
        const callback = request._startSpanCallback?.deref();
        if (callback) {
          callback(() => {
            next();
            return true;
          });
        } else {
          next();
        }
      });
    }
  };
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      const { [HTTP_ON_SERVER_REQUEST]: onHttpServerRequestStart } = getHttpServerSubscriptions(_options);
      subscribe(HTTP_ON_SERVER_REQUEST, onHttpServerRequestStart);
    },
    afterAllSetup(client) {
      if (DEBUG_BUILD && client.getIntegrationByName("Http")) {
        debug.warn(
          "It seems that you have manually added `httpServerIntegration` while `httpIntegration` is also present. Make sure to remove `httpServerIntegration` when adding `httpIntegration`."
        );
      }
    }
  };
});
const httpServerIntegration = _httpServerIntegration;

export { addStartSpanCallback, httpServerIntegration };
//# sourceMappingURL=httpServerIntegration.js.map
