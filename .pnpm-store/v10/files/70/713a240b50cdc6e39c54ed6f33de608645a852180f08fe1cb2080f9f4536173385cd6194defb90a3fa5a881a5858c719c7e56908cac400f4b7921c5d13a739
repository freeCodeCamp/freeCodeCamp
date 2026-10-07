Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('../../currentScopes.js');
const debugBuild = require('../../debug-build.js');
const debugLogger = require('../../utils/debug-logger.js');
const is = require('../../utils/is.js');
const traceData = require('../../utils/traceData.js');
const tracePropagationTargets = require('../../utils/tracePropagationTargets.js');
const constants = require('./constants.js');
const getRequestUrl = require('./get-request-url.js');
const baggage = require('../../utils/baggage.js');

function injectTracePropagationHeaders(request, propagationDecisionMap) {
  const url = getRequestUrl.getRequestUrlFromClientRequest(request);
  const clientOptions = currentScopes.getClient()?.getOptions();
  const { tracePropagationTargets: tracePropagationTargets$1, propagateTraceparent } = clientOptions ?? {};
  if (!tracePropagationTargets.shouldPropagateTraceForUrl(url, tracePropagationTargets$1, propagationDecisionMap)) {
    return;
  }
  const hasExistingSentryTraceHeader = !!request.getHeader("sentry-trace");
  if (hasExistingSentryTraceHeader) {
    return;
  }
  const traceData$1 = traceData.getTraceData({ propagateTraceparent });
  if (!traceData$1) return;
  const { "sentry-trace": sentryTrace, baggage: baggage$1, traceparent } = traceData$1;
  if (sentryTrace) {
    try {
      request.setHeader("sentry-trace", sentryTrace);
      debugBuild.DEBUG_BUILD && debugLogger.debug.log(constants.LOG_PREFIX, "Added sentry-trace header");
    } catch (e) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.error(constants.LOG_PREFIX, "Failed to set sentry-trace header:", is.isError(e) ? e.message : "Unknown error");
    }
  }
  if (traceparent && !request.getHeader("traceparent")) {
    try {
      request.setHeader("traceparent", traceparent);
      debugBuild.DEBUG_BUILD && debugLogger.debug.log(constants.LOG_PREFIX, "Added traceparent header");
    } catch (e) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.error(constants.LOG_PREFIX, "Failed to set traceparent header:", is.isError(e) ? e.message : "Unknown error");
    }
  }
  if (baggage$1) {
    const merged = baggage.mergeBaggageHeaders(request.getHeader("baggage"), baggage$1);
    if (merged) {
      try {
        request.setHeader("baggage", merged);
        debugBuild.DEBUG_BUILD && debugLogger.debug.log(constants.LOG_PREFIX, "Added baggage header");
      } catch (e) {
        debugBuild.DEBUG_BUILD && debugLogger.debug.error(constants.LOG_PREFIX, "Failed to set baggage header:", is.isError(e) ? e.message : "Unknown error");
      }
    }
  }
}

exports.injectTracePropagationHeaders = injectTracePropagationHeaders;
//# sourceMappingURL=inject-trace-propagation-headers.js.map
