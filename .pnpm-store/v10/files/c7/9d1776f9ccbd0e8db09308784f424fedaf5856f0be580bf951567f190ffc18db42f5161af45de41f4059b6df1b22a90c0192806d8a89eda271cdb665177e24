import { getClient } from '../../currentScopes.js';
import { DEBUG_BUILD } from '../../debug-build.js';
import { debug } from '../../utils/debug-logger.js';
import { isError } from '../../utils/is.js';
import { getTraceData } from '../../utils/traceData.js';
import { shouldPropagateTraceForUrl } from '../../utils/tracePropagationTargets.js';
import { LOG_PREFIX } from './constants.js';
import { getRequestUrlFromClientRequest } from './get-request-url.js';
import { mergeBaggageHeaders } from '../../utils/baggage.js';

function injectTracePropagationHeaders(request, propagationDecisionMap) {
  const url = getRequestUrlFromClientRequest(request);
  const clientOptions = getClient()?.getOptions();
  const { tracePropagationTargets, propagateTraceparent } = clientOptions ?? {};
  if (!shouldPropagateTraceForUrl(url, tracePropagationTargets, propagationDecisionMap)) {
    return;
  }
  const hasExistingSentryTraceHeader = !!request.getHeader("sentry-trace");
  if (hasExistingSentryTraceHeader) {
    return;
  }
  const traceData = getTraceData({ propagateTraceparent });
  if (!traceData) return;
  const { "sentry-trace": sentryTrace, baggage, traceparent } = traceData;
  if (sentryTrace) {
    try {
      request.setHeader("sentry-trace", sentryTrace);
      DEBUG_BUILD && debug.log(LOG_PREFIX, "Added sentry-trace header");
    } catch (e) {
      DEBUG_BUILD && debug.error(LOG_PREFIX, "Failed to set sentry-trace header:", isError(e) ? e.message : "Unknown error");
    }
  }
  if (traceparent && !request.getHeader("traceparent")) {
    try {
      request.setHeader("traceparent", traceparent);
      DEBUG_BUILD && debug.log(LOG_PREFIX, "Added traceparent header");
    } catch (e) {
      DEBUG_BUILD && debug.error(LOG_PREFIX, "Failed to set traceparent header:", isError(e) ? e.message : "Unknown error");
    }
  }
  if (baggage) {
    const merged = mergeBaggageHeaders(request.getHeader("baggage"), baggage);
    if (merged) {
      try {
        request.setHeader("baggage", merged);
        DEBUG_BUILD && debug.log(LOG_PREFIX, "Added baggage header");
      } catch (e) {
        DEBUG_BUILD && debug.error(LOG_PREFIX, "Failed to set baggage header:", isError(e) ? e.message : "Unknown error");
      }
    }
  }
}

export { injectTracePropagationHeaders };
//# sourceMappingURL=inject-trace-propagation-headers.js.map
