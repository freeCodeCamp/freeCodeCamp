Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const diagnosticsChannel = require('node:diagnostics_channel');
const api = require('@opentelemetry/api');
const core = require('@sentry/core');
const debugBuild = require('../../debug-build.js');

const HTTP_SERVER_INSTRUMENTED_KEY = api.createContextKey("sentry_http_server_instrumented");
const INTEGRATION_NAME = "Http.Server";
function addStartSpanCallback(request, callback) {
  core.addNonEnumerableProperty(request, "_startSpanCallback", new WeakRef(callback));
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
      const client = core.getClient();
      if (!client) return next();
      if (api.context.active().getValue(HTTP_SERVER_INSTRUMENTED_KEY)) {
        return next();
      }
      const ctx = api.propagation.extract(api.context.active(), normalizedRequest.headers).setValue(HTTP_SERVER_INSTRUMENTED_KEY, true);
      api.context.with(ctx, () => {
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
      const { [core.HTTP_ON_SERVER_REQUEST]: onHttpServerRequestStart } = core.getHttpServerSubscriptions(_options);
      diagnosticsChannel.subscribe(core.HTTP_ON_SERVER_REQUEST, onHttpServerRequestStart);
    },
    afterAllSetup(client) {
      if (debugBuild.DEBUG_BUILD && client.getIntegrationByName("Http")) {
        core.debug.warn(
          "It seems that you have manually added `httpServerIntegration` while `httpIntegration` is also present. Make sure to remove `httpServerIntegration` when adding `httpIntegration`."
        );
      }
    }
  };
});
const httpServerIntegration = _httpServerIntegration;

exports.recordRequestSession = core.recordRequestSession;
exports.addStartSpanCallback = addStartSpanCallback;
exports.httpServerIntegration = httpServerIntegration;
//# sourceMappingURL=httpServerIntegration.js.map
