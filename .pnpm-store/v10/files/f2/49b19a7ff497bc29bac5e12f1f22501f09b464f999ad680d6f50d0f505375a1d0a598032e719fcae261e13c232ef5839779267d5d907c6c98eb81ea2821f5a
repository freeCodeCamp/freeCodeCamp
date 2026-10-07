Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const diagnosticsChannel = require('node:diagnostics_channel');
const api = require('@opentelemetry/api');
const core$1 = require('@opentelemetry/core');
const instrumentation = require('@opentelemetry/instrumentation');
const core = require('@sentry/core');
const constants = require('./constants.js');
const nodeVersion = require('../../nodeVersion.js');
const node_events = require('node:events');
const http = require('node:http');
const https = require('node:https');

const FULLY_SUPPORTS_HTTP_DIAGNOSTICS_CHANNEL = nodeVersion.NODE_VERSION.major === 22 && nodeVersion.NODE_VERSION.minor >= 12 || nodeVersion.NODE_VERSION.major === 23 && nodeVersion.NODE_VERSION.minor >= 2 || nodeVersion.NODE_VERSION.major >= 24;
class SentryHttpInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(constants.INSTRUMENTATION_NAME, core.SDK_VERSION, config);
  }
  /** @inheritdoc */
  init() {
    const { outgoingRequestApplyCustomAttributes: applyCustomAttributesOnSpan, ...options } = this.getConfig();
    const patchOptions = {
      propagateTrace: options.propagateTraceInOutgoingRequests,
      applyCustomAttributesOnSpan,
      ...options,
      spans: options.createSpansForOutgoingRequests && (options.spans ?? true),
      ignoreOutgoingRequests(url, request) {
        return core$1.isTracingSuppressed(api.context.active()) || !!options.ignoreOutgoingRequests?.(url, core.getRequestOptions(request));
      },
      outgoingRequestHook(span, request) {
        options.outgoingRequestHook?.(span, request);
        const originalOnce = request.once;
        const newOnce = new Proxy(originalOnce, {
          apply(target, thisArg, args) {
            const [event] = args;
            if (event !== "response") {
              return target.apply(thisArg, args);
            }
            const parentContext = api.context.active();
            const requestContext = api.trace.setSpan(parentContext, span);
            return api.context.with(requestContext, () => {
              return target.apply(thisArg, args);
            });
          }
        });
        request.once = newOnce;
      },
      outgoingResponseHook(span, response) {
        options.outgoingResponseHook?.(span, response);
        api.context.bind(api.context.active(), response);
      },
      errorMonitor: node_events.errorMonitor,
      // Pass these in to detect OTel double-wrapping if we're enabling spans
      http,
      https
    };
    const { [core.HTTP_ON_CLIENT_REQUEST]: onHttpClientRequestCreated } = FULLY_SUPPORTS_HTTP_DIAGNOSTICS_CHANNEL ? core.getHttpClientSubscriptions(patchOptions) : {};
    let hasRegisteredHandlers = false;
    const sub = onHttpClientRequestCreated ? (moduleExports) => {
      if (!hasRegisteredHandlers && onHttpClientRequestCreated) {
        hasRegisteredHandlers = true;
        diagnosticsChannel.subscribe(core.HTTP_ON_CLIENT_REQUEST, onHttpClientRequestCreated);
      }
      return moduleExports;
    } : void 0;
    const wrapHttp = sub ?? ((moduleExports) => core.patchHttpModuleClient(moduleExports, patchOptions));
    const wrapHttps = sub ?? ((moduleExports) => core.patchHttpModuleClient(moduleExports, patchOptions));
    return [
      new instrumentation.InstrumentationNodeModuleDefinition("http", ["*"], wrapHttp),
      new instrumentation.InstrumentationNodeModuleDefinition("https", ["*"], wrapHttps)
    ];
  }
}

exports.SentryHttpInstrumentation = SentryHttpInstrumentation;
//# sourceMappingURL=SentryHttpInstrumentation.js.map
