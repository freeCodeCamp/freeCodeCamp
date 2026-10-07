import { subscribe } from 'node:diagnostics_channel';
import { context, trace } from '@opentelemetry/api';
import { isTracingSuppressed } from '@opentelemetry/core';
import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { SDK_VERSION, getHttpClientSubscriptions, HTTP_ON_CLIENT_REQUEST, getRequestOptions, patchHttpModuleClient } from '@sentry/core';
import { INSTRUMENTATION_NAME } from './constants.js';
import { NODE_VERSION } from '../../nodeVersion.js';
import { errorMonitor } from 'node:events';
import * as http from 'node:http';
import * as https from 'node:https';

const FULLY_SUPPORTS_HTTP_DIAGNOSTICS_CHANNEL = NODE_VERSION.major === 22 && NODE_VERSION.minor >= 12 || NODE_VERSION.major === 23 && NODE_VERSION.minor >= 2 || NODE_VERSION.major >= 24;
class SentryHttpInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(INSTRUMENTATION_NAME, SDK_VERSION, config);
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
        return isTracingSuppressed(context.active()) || !!options.ignoreOutgoingRequests?.(url, getRequestOptions(request));
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
            const parentContext = context.active();
            const requestContext = trace.setSpan(parentContext, span);
            return context.with(requestContext, () => {
              return target.apply(thisArg, args);
            });
          }
        });
        request.once = newOnce;
      },
      outgoingResponseHook(span, response) {
        options.outgoingResponseHook?.(span, response);
        context.bind(context.active(), response);
      },
      errorMonitor,
      // Pass these in to detect OTel double-wrapping if we're enabling spans
      http,
      https
    };
    const { [HTTP_ON_CLIENT_REQUEST]: onHttpClientRequestCreated } = FULLY_SUPPORTS_HTTP_DIAGNOSTICS_CHANNEL ? getHttpClientSubscriptions(patchOptions) : {};
    let hasRegisteredHandlers = false;
    const sub = onHttpClientRequestCreated ? (moduleExports) => {
      if (!hasRegisteredHandlers && onHttpClientRequestCreated) {
        hasRegisteredHandlers = true;
        subscribe(HTTP_ON_CLIENT_REQUEST, onHttpClientRequestCreated);
      }
      return moduleExports;
    } : void 0;
    const wrapHttp = sub ?? ((moduleExports) => patchHttpModuleClient(moduleExports, patchOptions));
    const wrapHttps = sub ?? ((moduleExports) => patchHttpModuleClient(moduleExports, patchOptions));
    return [
      new InstrumentationNodeModuleDefinition("http", ["*"], wrapHttp),
      new InstrumentationNodeModuleDefinition("https", ["*"], wrapHttps)
    ];
  }
}

export { SentryHttpInstrumentation };
//# sourceMappingURL=SentryHttpInstrumentation.js.map
