Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const addOutgoingRequestBreadcrumb = require('./add-outgoing-request-breadcrumb.js');
const debugBuild = require('../../debug-build.js');
const debugLogger = require('../../utils/debug-logger.js');
const currentScopes = require('../../currentScopes.js');
const spanstatus = require('../../tracing/spanstatus.js');
const hasSpansEnabled = require('../../utils/hasSpansEnabled.js');
const trace = require('../../tracing/trace.js');
const lru = require('../../utils/lru.js');
const getOutgoingSpanData = require('./get-outgoing-span-data.js');
const getRequestUrl = require('./get-request-url.js');
const injectTracePropagationHeaders = require('./inject-trace-propagation-headers.js');
const constants = require('./constants.js');
const doubleWrapWarning = require('./double-wrap-warning.js');

function getHttpClientSubscriptions(options) {
  const propagationDecisionMap = new lru.LRUMap(100);
  const getConfig = () => currentScopes.getClient()?.getOptions();
  const onHttpClientRequestCreated = (data) => {
    if (currentScopes.getCurrentScope().getScopeData().sdkProcessingMetadata[trace.SUPPRESS_TRACING_KEY] === true) {
      return;
    }
    const clientOptions = getConfig();
    const {
      errorMonitor = "error",
      spans: createSpans = clientOptions ? hasSpansEnabled.hasSpansEnabled(clientOptions) : true,
      propagateTrace = false,
      breadcrumbs = true,
      http,
      https,
      suppressOtelWarning = false
    } = options;
    const { request } = data;
    if (options.ignoreOutgoingRequests?.(getRequestUrl.getRequestUrlFromClientRequest(request), request)) {
      return;
    }
    let addedBreadcrumbs = false;
    function addBreadcrumbs(request2, response) {
      if (!addedBreadcrumbs) {
        addedBreadcrumbs = true;
        addOutgoingRequestBreadcrumb.addOutgoingRequestBreadcrumb(request2, response);
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
        injectTracePropagationHeaders.injectTracePropagationHeaders(request, propagationDecisionMap);
      }
      return;
    }
    if (!suppressOtelWarning) {
      if (http) doubleWrapWarning.doubleWrapWarning(http);
      if (https) doubleWrapWarning.doubleWrapWarning(https);
    }
    const span = trace.startInactiveSpan(getOutgoingSpanData.getOutgoingRequestSpanData(request));
    options.outgoingRequestHook?.(span, request);
    if (propagateTrace) {
      if (span.isRecording()) {
        trace.withActiveSpan(span, () => {
          injectTracePropagationHeaders.injectTracePropagationHeaders(request, propagationDecisionMap);
        });
      } else {
        injectTracePropagationHeaders.injectTracePropagationHeaders(request, propagationDecisionMap);
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
    const requestOnClose = () => endSpan({ code: spanstatus.SPAN_STATUS_UNSET });
    request.on("close", requestOnClose);
    request.on(errorMonitor, (error) => {
      debugBuild.DEBUG_BUILD && debugLogger.debug.log(constants.LOG_PREFIX, "outgoingRequest on request error()", error);
      if (breadcrumbs) {
        addBreadcrumbs(request, void 0);
      }
      endSpan({ code: spanstatus.SPAN_STATUS_ERROR });
    });
    request.prependListener("response", (response) => {
      request.removeListener("close", requestOnClose);
      if (request.listenerCount("response") <= 1) {
        response.resume();
      }
      getOutgoingSpanData.setIncomingResponseSpanData(response, span);
      options.outgoingResponseHook?.(span, response);
      let finished = false;
      function finishWithResponse(error) {
        if (!finished) {
          finished = true;
          if (error) {
            debugBuild.DEBUG_BUILD && debugLogger.debug.log(constants.LOG_PREFIX, "outgoingRequest on response error()", error);
          }
          if (breadcrumbs) {
            addBreadcrumbs(request, response);
          }
          const aborted = response.aborted && !response.complete;
          const status = error || typeof response.statusCode !== "number" || aborted ? { code: spanstatus.SPAN_STATUS_ERROR } : spanstatus.getSpanStatusFromHttpCode(response.statusCode);
          options.applyCustomAttributesOnSpan?.(span, request, response);
          endSpan(status);
        }
      }
      response.on("end", () => finishWithResponse());
      response.on(errorMonitor, finishWithResponse);
    });
  };
  return {
    [constants.HTTP_ON_CLIENT_REQUEST]: onHttpClientRequestCreated
  };
}

exports.getHttpClientSubscriptions = getHttpClientSubscriptions;
//# sourceMappingURL=client-subscriptions.js.map
