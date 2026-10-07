Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('./currentScopes.js');
const semanticAttributes = require('./semanticAttributes.js');
const spanUtils = require('./utils/spanUtils.js');
const spanstatus = require('./tracing/spanstatus.js');
const is = require('./utils/is.js');
const hasSpansEnabled = require('./utils/hasSpansEnabled.js');
const baggage = require('./utils/baggage.js');
const sentryNonRecordingSpan = require('./tracing/sentryNonRecordingSpan.js');
const hasSpanStreamingEnabled = require('./tracing/spans/hasSpanStreamingEnabled.js');
const trace = require('./tracing/trace.js');
const url = require('./utils/url.js');
const traceData = require('./utils/traceData.js');

function instrumentFetchRequest(handlerData, shouldCreateSpan, shouldAttachHeaders, spans, spanOriginOrOptions) {
  if (!handlerData.fetchData) {
    return void 0;
  }
  const { method, url } = handlerData.fetchData;
  const shouldCreateSpanResult = hasSpansEnabled.hasSpansEnabled() && shouldCreateSpan(url);
  if (handlerData.endTimestamp) {
    const spanId = handlerData.fetchData.__span;
    if (!spanId) return;
    const span2 = spans[spanId];
    if (span2) {
      if (shouldCreateSpanResult) {
        endSpan(span2, handlerData);
        _callOnRequestSpanEnd(span2, handlerData, spanOriginOrOptions);
      }
      delete spans[spanId];
    }
    return void 0;
  }
  const { spanOrigin = "auto.http.browser", propagateTraceparent = false } = typeof spanOriginOrOptions === "object" ? spanOriginOrOptions : { spanOrigin: spanOriginOrOptions };
  const client = currentScopes.getClient();
  const hasParent = !!spanUtils.getActiveSpan();
  const shouldEmitSpan = hasParent || !!client && hasSpanStreamingEnabled.hasSpanStreamingEnabled(client);
  const span = shouldCreateSpanResult && shouldEmitSpan ? trace.startInactiveSpan(getSpanStartOptions(url, method, spanOrigin)) : new sentryNonRecordingSpan.SentryNonRecordingSpan();
  if (shouldCreateSpanResult && !shouldEmitSpan) {
    client?.recordDroppedEvent("no_parent_span", "span");
  }
  handlerData.fetchData.__span = span.spanContext().spanId;
  spans[span.spanContext().spanId] = span;
  if (shouldAttachHeaders(handlerData.fetchData.url)) {
    const request = handlerData.args[0];
    const options = { ...handlerData.args[1] || {} };
    const headers = _INTERNAL_getTracingHeadersForFetchRequest(
      request,
      options,
      // If performance is disabled (TWP) or there's no active root span (pageload/navigation/interaction),
      // we do not want to use the span as base for the trace headers,
      // which means that the headers will be generated from the scope and the sampling decision is deferred
      hasSpansEnabled.hasSpansEnabled() && shouldEmitSpan ? span : void 0,
      propagateTraceparent
    );
    if (headers) {
      handlerData.args[1] = options;
      options.headers = headers;
    }
  }
  if (client) {
    const fetchHint = {
      input: handlerData.args,
      response: handlerData.response,
      startTimestamp: handlerData.startTimestamp,
      endTimestamp: handlerData.endTimestamp
    };
    client.emit("beforeOutgoingRequestSpan", span, fetchHint);
  }
  return span;
}
function _callOnRequestSpanEnd(span, handlerData, spanOriginOrOptions) {
  const onRequestSpanEnd = typeof spanOriginOrOptions === "object" && spanOriginOrOptions !== null ? spanOriginOrOptions.onRequestSpanEnd : void 0;
  onRequestSpanEnd?.(span, {
    headers: handlerData.response?.headers,
    error: handlerData.error
  });
}
function _INTERNAL_getTracingHeadersForFetchRequest(request, fetchOptionsObj, span, propagateTraceparent) {
  const traceHeaders = traceData.getTraceData({ span, propagateTraceparent });
  const sentryTrace = traceHeaders["sentry-trace"];
  const baggage = traceHeaders.baggage;
  const traceparent = traceHeaders.traceparent;
  if (!sentryTrace) {
    return void 0;
  }
  const originalHeaders = fetchOptionsObj.headers || (is.isRequest(request) ? request.headers : void 0);
  if (!originalHeaders) {
    return { ...traceHeaders };
  } else if (isHeaders(originalHeaders)) {
    const newHeaders = new Headers(originalHeaders);
    if (!newHeaders.get("sentry-trace")) {
      newHeaders.set("sentry-trace", sentryTrace);
    }
    if (propagateTraceparent && traceparent && !newHeaders.get("traceparent")) {
      newHeaders.set("traceparent", traceparent);
    }
    if (baggage) {
      const prevBaggageHeader = newHeaders.get("baggage");
      if (!prevBaggageHeader) {
        newHeaders.set("baggage", baggage);
      } else if (!baggageHeaderHasSentryBaggageValues(prevBaggageHeader)) {
        newHeaders.set("baggage", `${prevBaggageHeader},${baggage}`);
      }
    }
    return newHeaders;
  } else if (isHeadersInitTupleArray(originalHeaders)) {
    const newHeaders = [...originalHeaders];
    if (!newHeaders.find((header) => header[0] === "sentry-trace")) {
      newHeaders.push(["sentry-trace", sentryTrace]);
    }
    if (propagateTraceparent && traceparent && !newHeaders.find((header) => header[0] === "traceparent")) {
      newHeaders.push(["traceparent", traceparent]);
    }
    const prevBaggageHeaderWithSentryValues = originalHeaders.find(
      (header) => header[0] === "baggage" && typeof header[1] === "string" && baggageHeaderHasSentryBaggageValues(header[1])
    );
    if (baggage && !prevBaggageHeaderWithSentryValues) {
      newHeaders.push(["baggage", baggage]);
    }
    return newHeaders;
  } else {
    const existingSentryTraceHeader = "sentry-trace" in originalHeaders ? originalHeaders["sentry-trace"] : void 0;
    const existingTraceparentHeader = "traceparent" in originalHeaders ? originalHeaders.traceparent : void 0;
    const existingBaggageHeader = "baggage" in originalHeaders ? originalHeaders.baggage : void 0;
    const newBaggageHeaders = existingBaggageHeader ? Array.isArray(existingBaggageHeader) ? [...existingBaggageHeader] : [existingBaggageHeader] : [];
    const prevBaggageHeaderWithSentryValues = existingBaggageHeader && (Array.isArray(existingBaggageHeader) ? existingBaggageHeader.find((headerItem) => baggageHeaderHasSentryBaggageValues(headerItem)) : baggageHeaderHasSentryBaggageValues(existingBaggageHeader));
    if (baggage && !prevBaggageHeaderWithSentryValues) {
      newBaggageHeaders.push(baggage);
    }
    const newHeaders = Object.assign({}, originalHeaders, {
      "sentry-trace": existingSentryTraceHeader ?? sentryTrace,
      baggage: newBaggageHeaders.length > 0 ? newBaggageHeaders.join(",") : void 0
    });
    if (propagateTraceparent && traceparent && !existingTraceparentHeader) {
      newHeaders.traceparent = traceparent;
    }
    return newHeaders;
  }
}
function endSpan(span, handlerData) {
  if (handlerData.response) {
    spanstatus.setHttpStatus(span, handlerData.response.status);
    const contentLength = handlerData.response?.headers?.get("content-length");
    if (contentLength) {
      const contentLengthNum = parseInt(contentLength);
      if (contentLengthNum > 0) {
        span.setAttribute("http.response_content_length", contentLengthNum);
      }
    }
  } else if (handlerData.error) {
    span.setStatus({ code: spanstatus.SPAN_STATUS_ERROR, message: "internal_error" });
  }
  span.end();
}
function baggageHeaderHasSentryBaggageValues(baggageHeader) {
  if (typeof baggageHeader !== "string") {
    return false;
  }
  return baggageHeader.split(",").some((baggageEntry) => baggageEntry.trim().startsWith(baggage.SENTRY_BAGGAGE_KEY_PREFIX));
}
function isHeaders(headers) {
  return typeof Headers !== "undefined" && is.isInstanceOf(headers, Headers);
}
function isHeadersInitTupleArray(headers) {
  if (!Array.isArray(headers)) {
    return false;
  }
  return headers.every(
    (item) => Array.isArray(item) && item.length === 2 && typeof item[0] === "string"
  );
}
function getSpanStartOptions(url$1, method, spanOrigin) {
  if (url$1.startsWith("data:")) {
    const sanitizedUrl2 = url.stripDataUrlContent(url$1);
    return {
      name: `${method} ${sanitizedUrl2}`,
      attributes: getFetchSpanAttributes(url$1, void 0, method, spanOrigin)
    };
  }
  const parsedUrl = url.parseStringToURLObject(url$1);
  const sanitizedUrl = parsedUrl ? url.getSanitizedUrlStringFromUrlObject(parsedUrl) : url$1;
  return {
    name: `${method} ${sanitizedUrl}`,
    attributes: getFetchSpanAttributes(url$1, parsedUrl, method, spanOrigin)
  };
}
function getFetchSpanAttributes(url$1, parsedUrl, method, spanOrigin) {
  const attributes = {
    url: url.stripDataUrlContent(url$1),
    type: "fetch",
    "http.method": method,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: spanOrigin,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client"
  };
  if (parsedUrl) {
    if (!url.isURLObjectRelative(parsedUrl)) {
      attributes["http.url"] = url.stripDataUrlContent(parsedUrl.href);
      attributes["server.address"] = parsedUrl.host;
    }
    if (parsedUrl.search) {
      attributes["http.query"] = parsedUrl.search;
    }
    if (parsedUrl.hash) {
      attributes["http.fragment"] = parsedUrl.hash;
    }
  }
  return attributes;
}

exports._INTERNAL_getTracingHeadersForFetchRequest = _INTERNAL_getTracingHeadersForFetchRequest;
exports._callOnRequestSpanEnd = _callOnRequestSpanEnd;
exports.instrumentFetchRequest = instrumentFetchRequest;
//# sourceMappingURL=fetch.js.map
