import { addOutgoingRequestBreadcrumb } from './add-outgoing-request-breadcrumb.js';
import { DEBUG_BUILD } from '../../debug-build.js';
import { debug } from '../../utils/debug-logger.js';
import { getCurrentScope, getClient } from '../../currentScopes.js';
import { getSpanStatusFromHttpCode, SPAN_STATUS_ERROR, SPAN_STATUS_UNSET } from '../../tracing/spanstatus.js';
import { hasSpansEnabled } from '../../utils/hasSpansEnabled.js';
import { SUPPRESS_TRACING_KEY, startInactiveSpan, withActiveSpan } from '../../tracing/trace.js';
import { LRUMap } from '../../utils/lru.js';
import { getOutgoingRequestSpanData, setIncomingResponseSpanData } from './get-outgoing-span-data.js';
import { getRequestUrlFromClientRequest } from './get-request-url.js';
import { injectTracePropagationHeaders } from './inject-trace-propagation-headers.js';
import { HTTP_ON_CLIENT_REQUEST, LOG_PREFIX } from './constants.js';
import { doubleWrapWarning } from './double-wrap-warning.js';

function getHttpClientSubscriptions(options) {
  const propagationDecisionMap = new LRUMap(100);
  const getConfig = () => getClient()?.getOptions();
  const onHttpClientRequestCreated = (data) => {
    if (getCurrentScope().getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY] === true) {
      return;
    }
    const clientOptions = getConfig();
    const {
      errorMonitor = "error",
      spans: createSpans = clientOptions ? hasSpansEnabled(clientOptions) : true,
      propagateTrace = false,
      breadcrumbs = true,
      http,
      https,
      suppressOtelWarning = false
    } = options;
    const { request } = data;
    if (options.ignoreOutgoingRequests?.(getRequestUrlFromClientRequest(request), request)) {
      return;
    }
    let addedBreadcrumbs = false;
    function addBreadcrumbs(request2, response) {
      if (!addedBreadcrumbs) {
        addedBreadcrumbs = true;
        addOutgoingRequestBreadcrumb(request2, response);
      }
    }
    function breadcrumbsOnly(request2) {
      request2.on(errorMonitor, () => addBreadcrumbs(request2, void 0));
      request2.prependListener("response", (response) => {
        if (request2.listenerCount("response") <= 1) {
          response.resume();
        }
        response.on("end", () => addBreadcrumbs(request2, response));
        response.on(errorMonitor, () => addBreadcrumbs(request2, response));
      });
    }
    if (!createSpans) {
      if (breadcrumbs) {
        breadcrumbsOnly(request);
      }
      if (propagateTrace) {
        injectTracePropagationHeaders(request, propagationDecisionMap);
      }
      return;
    }
    if (!suppressOtelWarning) {
      if (http) doubleWrapWarning(http);
      if (https) doubleWrapWarning(https);
    }
    const span = startInactiveSpan(getOutgoingRequestSpanData(request));
    options.outgoingRequestHook?.(span, request);
    if (propagateTrace) {
      if (span.isRecording()) {
        withActiveSpan(span, () => {
          injectTracePropagationHeaders(request, propagationDecisionMap);
        });
      } else {
        injectTracePropagationHeaders(request, propagationDecisionMap);
      }
    }
    let spanEnded = false;
    function endSpan(status) {
      if (!spanEnded) {
        spanEnded = true;
        span.setStatus(status);
        span.end();
      }
    }
    const requestOnClose = () => endSpan({ code: SPAN_STATUS_UNSET });
    request.on("close", requestOnClose);
    request.on(errorMonitor, (error) => {
      DEBUG_BUILD && debug.log(LOG_PREFIX, "outgoingRequest on request error()", error);
      if (breadcrumbs) {
        addBreadcrumbs(request, void 0);
      }
      endSpan({ code: SPAN_STATUS_ERROR });
    });
    request.prependListener("response", (response) => {
      request.removeListener("close", requestOnClose);
      if (request.listenerCount("response") <= 1) {
        response.resume();
      }
      setIncomingResponseSpanData(response, span);
      options.outgoingResponseHook?.(span, response);
      let finished = false;
      function finishWithResponse(error) {
        if (!finished) {
          finished = true;
          if (error) {
            DEBUG_BUILD && debug.log(LOG_PREFIX, "outgoingRequest on response error()", error);
          }
          if (breadcrumbs) {
            addBreadcrumbs(request, response);
          }
          const aborted = response.aborted && !response.complete;
          const status = error || typeof response.statusCode !== "number" || aborted ? { code: SPAN_STATUS_ERROR } : getSpanStatusFromHttpCode(response.statusCode);
          options.applyCustomAttributesOnSpan?.(span, request, response);
          endSpan(status);
        }
      }
      response.on("end", () => finishWithResponse());
      response.on(errorMonitor, finishWithResponse);
    });
  };
  return {
    [HTTP_ON_CLIENT_REQUEST]: onHttpClientRequestCreated
  };
}

export { getHttpClientSubscriptions };
//# sourceMappingURL=client-subscriptions.js.map
