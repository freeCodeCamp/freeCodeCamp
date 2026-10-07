Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');

const SENTRY_TRACE_HEADER = "sentry-trace";
const SENTRY_BAGGAGE_HEADER = "baggage";
const W3C_TRACEPARENT_HEADER = "traceparent";
function addTracePropagationHeadersToFetchRequest(request, propagationDecisionMap) {
  const url = getAbsoluteUrl(request.origin, request.path);
  const { tracePropagationTargets, propagateTraceparent } = core.getClient()?.getOptions() || {};
  const addedHeaders = core.shouldPropagateTraceForUrl(url, tracePropagationTargets, propagationDecisionMap) ? core.getTraceData({ propagateTraceparent }) : void 0;
  if (!addedHeaders) {
    return;
  }
  const { "sentry-trace": sentryTrace, baggage, traceparent } = addedHeaders;
  const requestHeaders = Array.isArray(request.headers) ? normalizeUndiciHeaderPairs(request.headers) : stringToArrayHeaders(request.headers);
  _deduplicateArrayHeader(requestHeaders, SENTRY_TRACE_HEADER);
  _deduplicateArrayHeader(requestHeaders, SENTRY_BAGGAGE_HEADER);
  if (propagateTraceparent) {
    _deduplicateArrayHeader(requestHeaders, W3C_TRACEPARENT_HEADER);
  }
  const hasExistingSentryTraceHeader = _findExistingHeaderIndex(requestHeaders, SENTRY_TRACE_HEADER) !== -1;
  if (!hasExistingSentryTraceHeader) {
    if (sentryTrace) {
      requestHeaders.push(SENTRY_TRACE_HEADER, sentryTrace);
    }
    if (traceparent && _findExistingHeaderIndex(requestHeaders, "traceparent") === -1) {
      requestHeaders.push("traceparent", traceparent);
    }
    const existingBaggageIndex = _findExistingHeaderIndex(requestHeaders, SENTRY_BAGGAGE_HEADER);
    if (baggage && existingBaggageIndex === -1) {
      requestHeaders.push(SENTRY_BAGGAGE_HEADER, baggage);
    } else if (baggage) {
      const existingBaggageValue = requestHeaders[existingBaggageIndex + 1];
      const merged = core.mergeBaggageHeaders(existingBaggageValue, baggage);
      if (merged) {
        requestHeaders[existingBaggageIndex + 1] = merged;
      }
    }
  }
  if (Array.isArray(request.headers)) {
    request.headers.splice(0, request.headers.length, ...requestHeaders);
  } else {
    request.headers = arrayToStringHeaders(requestHeaders);
  }
}
function normalizeUndiciHeaderPairs(headers) {
  const out = [];
  for (let i = 0; i < headers.length; i++) {
    const entry = headers[i];
    if (i % 2 === 0) {
      out.push(typeof entry === "string" ? entry : String(entry));
    } else {
      out.push(Array.isArray(entry) ? entry.join(", ") : entry ?? "");
    }
  }
  return out;
}
function stringToArrayHeaders(requestHeaders) {
  const headersArray = requestHeaders.split("\r\n");
  const headers = [];
  for (const header of headersArray) {
    try {
      const colonIndex = header.indexOf(":");
      if (colonIndex === -1) {
        continue;
      }
      const key = header.slice(0, colonIndex).trim();
      const value = header.slice(colonIndex + 1).trim();
      if (key) {
        headers.push(key, value);
      }
    } catch {
      core.debug.warn(`Failed to convert string request header to array header: ${header}`);
    }
  }
  return headers;
}
function arrayToStringHeaders(headers) {
  const headerPairs = [];
  for (let i = 0; i < headers.length; i += 2) {
    const key = headers[i];
    const value = headers[i + 1];
    if (!key || value == null) {
      continue;
    }
    headerPairs.push(`${key}: ${value}`);
  }
  if (!headerPairs.length) {
    return "";
  }
  return headerPairs.join("\r\n").concat("\r\n");
}
function _deduplicateArrayHeader(headers, headerName) {
  let firstIndex = -1;
  for (let i = 0; i < headers.length; i += 2) {
    if (headers[i] !== headerName) {
      continue;
    }
    if (firstIndex === -1) {
      firstIndex = i;
      continue;
    }
    const firstHeaderValue = headers[firstIndex + 1];
    if (headerName === SENTRY_BAGGAGE_HEADER && firstHeaderValue) {
      const merged = core.mergeBaggageHeaders(headers[i + 1], firstHeaderValue);
      if (merged) {
        headers[firstIndex + 1] = merged;
      }
    }
    headers.splice(i, 2);
    i -= 2;
  }
}
function _findExistingHeaderIndex(headers, name) {
  return headers.findIndex((header, i) => i % 2 === 0 && header === name);
}
function addFetchRequestBreadcrumb(request, response) {
  const data = getBreadcrumbData(request);
  const statusCode = response.statusCode;
  const level = core.getBreadcrumbLogLevelFromHttpStatusCode(statusCode);
  core.addBreadcrumb(
    {
      category: "http",
      data: {
        status_code: statusCode,
        ...data
      },
      type: "http",
      level
    },
    {
      event: "response",
      request,
      response
    }
  );
}
function getBreadcrumbData(request) {
  try {
    const url = getAbsoluteUrl(request.origin, request.path);
    const parsedUrl = core.parseUrl(url);
    const data = {
      url: core.getSanitizedUrlString(parsedUrl),
      "http.method": request.method || "GET"
    };
    if (parsedUrl.search) {
      data["http.query"] = parsedUrl.search;
    }
    if (parsedUrl.hash) {
      data["http.fragment"] = parsedUrl.hash;
    }
    return data;
  } catch {
    return {};
  }
}
function getAbsoluteUrl(origin, path = "/") {
  try {
    const url = new URL(path, origin);
    return url.toString();
  } catch {
    const url = `${origin}`;
    if (url.endsWith("/") && path.startsWith("/")) {
      return `${url}${path.slice(1)}`;
    }
    if (!url.endsWith("/") && !path.startsWith("/")) {
      return `${url}/${path}`;
    }
    return `${url}${path}`;
  }
}

exports.addFetchRequestBreadcrumb = addFetchRequestBreadcrumb;
exports.addTracePropagationHeadersToFetchRequest = addTracePropagationHeadersToFetchRequest;
exports.getAbsoluteUrl = getAbsoluteUrl;
//# sourceMappingURL=outgoingFetchRequest.js.map
