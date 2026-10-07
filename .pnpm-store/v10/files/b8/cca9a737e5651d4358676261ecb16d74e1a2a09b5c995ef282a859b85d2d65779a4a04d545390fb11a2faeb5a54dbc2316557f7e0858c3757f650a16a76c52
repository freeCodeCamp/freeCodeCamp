import { DEBUG_BUILD } from '../debug-build.js';
import { debug } from './debug-logger.js';
import { defaultPiiToCollectionOptions } from './data-collection/defaultPiiToCollectionOptions.js';
import { SENSITIVE_COOKIE_NAME_SNIPPETS, FILTERED_VALUE } from './data-collection/filtering-snippets.js';
import { filterKeyValueData } from './data-collection/filterKeyValueData.js';
import { safeUnref } from './timer.js';

const MAX_BODY_BYTE_LENGTH = 1024 * 1024;
const TEXT_CONTENT_TYPES = [
  "text/",
  "application/json",
  "application/x-www-form-urlencoded",
  "application/xml",
  "application/graphql"
];
function getMaxBodyByteLength(maxRequestBodySize) {
  if (maxRequestBodySize === "small") return 1e3;
  if (maxRequestBodySize === "medium") return 1e4;
  return MAX_BODY_BYTE_LENGTH;
}
function winterCGHeadersToDict(winterCGHeaders) {
  const headers = {};
  try {
    winterCGHeaders.forEach((value, key) => {
      if (typeof value === "string") {
        headers[key] = value;
      }
    });
  } catch {
  }
  return headers;
}
function headersToDict(reqHeaders) {
  const headers = /* @__PURE__ */ Object.create(null);
  try {
    Object.entries(reqHeaders).forEach(([key, value]) => {
      if (typeof value === "string") {
        headers[key] = value;
      } else if (typeof value === "number") {
        headers[key] = String(value);
      }
    });
  } catch {
  }
  return headers;
}
function winterCGRequestToRequestData(req) {
  const headers = winterCGHeadersToDict(req.headers);
  return {
    method: req.method,
    url: req.url,
    query_string: extractQueryParamsFromUrl(req.url),
    headers
    // TODO: Can we extract body data from the request?
  };
}
function isTextualContentType(contentType) {
  if (!contentType) {
    return false;
  }
  const lowerContentType = contentType.toLowerCase();
  return TEXT_CONTENT_TYPES.some((type) => lowerContentType.includes(type));
}
async function captureBodyFromWinterCGRequest(request, isolationScope, maxRequestBodySize) {
  try {
    const contentType = request.headers.get("content-type");
    if (!isTextualContentType(contentType)) {
      DEBUG_BUILD && debug.log("Skipping body capture for non-textual content type:", contentType);
      return;
    }
    if (!request.body) {
      return;
    }
    const contentLength = request.headers.get("content-length");
    const maxBodySize = getMaxBodyByteLength(maxRequestBodySize);
    if (contentLength) {
      const length = parseInt(contentLength, 10);
      if (!isNaN(length) && length > MAX_BODY_BYTE_LENGTH) {
        DEBUG_BUILD && debug.log("Skipping body capture: body too large", length);
        return;
      }
    }
    const clonedRequest = request.clone();
    const bodyPromise = clonedRequest.text();
    const timeoutPromise = new Promise((resolve) => {
      safeUnref(setTimeout(() => resolve(null), 2e3));
    });
    const body = await Promise.race([bodyPromise, timeoutPromise]);
    if (body === null) {
      DEBUG_BUILD && debug.log("Timeout reading request body");
      return;
    }
    if (!body) {
      return;
    }
    const encoder = new TextEncoder();
    const bytes = encoder.encode(body);
    const bodyByteLength = bytes.length;
    let truncatedBody;
    if (bodyByteLength > maxBodySize) {
      const decoder = new TextDecoder();
      truncatedBody = `${decoder.decode(bytes.slice(0, maxBodySize - 3))}...`;
    } else {
      truncatedBody = body;
    }
    isolationScope.setSDKProcessingMetadata({ normalizedRequest: { data: truncatedBody } });
    DEBUG_BUILD && debug.log("Captured request body:", bodyByteLength, "bytes");
  } catch (error) {
    DEBUG_BUILD && debug.error("Error capturing request body:", error);
  }
}
function httpRequestToRequestData(request) {
  const headers = request.headers || {};
  const forwardedHost = typeof headers["x-forwarded-host"] === "string" ? headers["x-forwarded-host"] : void 0;
  const host = forwardedHost || (typeof headers.host === "string" ? headers.host : void 0);
  const forwardedProto = typeof headers["x-forwarded-proto"] === "string" ? headers["x-forwarded-proto"] : void 0;
  const protocol = forwardedProto || request.protocol || (request.socket?.encrypted ? "https" : "http");
  const url = request.url || "";
  const absoluteUrl = getAbsoluteUrl({
    url,
    host,
    protocol
  });
  const data = request.body || void 0;
  const cookies = request.cookies;
  return {
    url: absoluteUrl,
    method: request.method,
    query_string: extractQueryParamsFromUrl(url),
    headers: headersToDict(headers),
    cookies,
    data
  };
}
function getAbsoluteUrl({
  url,
  protocol,
  host
}) {
  if (url?.startsWith("http")) {
    return url;
  }
  if (url && host) {
    return `${protocol}://${host}${url}`;
  }
  return void 0;
}
function httpHeadersToSpanAttributes(headers, dataCollection = false, lifecycle = "request") {
  const resolvedDataCollection = typeof dataCollection === "boolean" ? defaultPiiToCollectionOptions(dataCollection) : dataCollection;
  const headerBehavior = lifecycle === "request" ? resolvedDataCollection.httpHeaders.request : resolvedDataCollection.httpHeaders.response;
  const cookieBehavior = resolvedDataCollection.cookies;
  const prefix = `http.${lifecycle}.header.`;
  const spanAttributes = {};
  try {
    const regularHeaders = {};
    for (const [key, value] of Object.entries(headers)) {
      if (value == null) {
        continue;
      }
      const lowerKey = key.toLowerCase();
      const isCookieHeader = lowerKey === "cookie" || lowerKey === "set-cookie";
      if (isCookieHeader) {
        if (cookieBehavior === false) {
          continue;
        }
        if (typeof value === "string" && value !== "") {
          const parsed = parseCookieHeader(value, lowerKey === "set-cookie");
          const filtered = filterKeyValueData(parsed, cookieBehavior, SENSITIVE_COOKIE_NAME_SNIPPETS);
          for (const [cookieKey, cookieValue] of Object.entries(filtered)) {
            spanAttributes[`${prefix}${normalizeAttributeKey(lowerKey)}.${normalizeAttributeKey(cookieKey)}`] = cookieValue;
          }
        } else {
          spanAttributes[`${prefix}${normalizeAttributeKey(lowerKey)}`] = FILTERED_VALUE;
        }
      } else {
        if (headerBehavior === false) {
          continue;
        }
        if (Array.isArray(value)) {
          regularHeaders[lowerKey] = value.map((v) => v != null ? String(v) : v).join(";");
        } else if (typeof value === "string") {
          regularHeaders[lowerKey] = value;
        }
      }
    }
    if (headerBehavior !== false) {
      const filtered = filterKeyValueData(regularHeaders, headerBehavior);
      for (const [headerKey, headerValue] of Object.entries(filtered)) {
        spanAttributes[`${prefix}${normalizeAttributeKey(headerKey)}`] = headerValue;
      }
    }
  } catch {
  }
  return spanAttributes;
}
function normalizeAttributeKey(key) {
  return key.replace(/-/g, "_");
}
function parseCookieHeader(value, isSetCookie) {
  const semicolonIndex = value.indexOf(";");
  const cookieString = isSetCookie && semicolonIndex !== -1 ? value.substring(0, semicolonIndex) : value;
  const cookies = isSetCookie ? [cookieString] : cookieString.split("; ");
  const result = {};
  for (const cookie of cookies) {
    const equalSignIndex = cookie.indexOf("=");
    const cookieKey = (equalSignIndex !== -1 ? cookie.substring(0, equalSignIndex) : cookie).toLowerCase();
    const cookieValue = equalSignIndex !== -1 ? cookie.substring(equalSignIndex + 1) : "";
    result[cookieKey] = cookieValue;
  }
  return result;
}
function extractQueryParamsFromUrl(url) {
  if (!url) {
    return;
  }
  try {
    const queryParams = new URL(url, "http://s.io").search.slice(1);
    return queryParams.length ? queryParams : void 0;
  } catch {
    return void 0;
  }
}

export { MAX_BODY_BYTE_LENGTH, captureBodyFromWinterCGRequest, extractQueryParamsFromUrl, getMaxBodyByteLength, headersToDict, httpHeadersToSpanAttributes, httpRequestToRequestData, winterCGHeadersToDict, winterCGRequestToRequestData };
//# sourceMappingURL=request.js.map
