import { getIsolationScope } from '../currentScopes.js';
import { defineIntegration } from '../integration.js';
import { SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS } from '../semanticAttributes.js';
import { parseCookie } from '../utils/cookie.js';
import { httpHeadersToSpanAttributes } from '../utils/request.js';
import { getClientIPAddress, ipHeaderNames } from '../vendor/getIpAddress.js';
import { safeSetSpanJSONAttributes } from '../tracing/spans/captureSpan.js';

const INTEGRATION_NAME = "RequestData";
const _requestDataIntegration = ((options = {}) => {
  function resolveIncludeAndDataCollection(client) {
    const dc = client.getDataCollectionOptions();
    const dataCollection = {
      ...dc,
      ...options.include?.cookies === true && dc.cookies === false && { cookies: true },
      ...options.include?.headers === true && dc.httpHeaders.request === false && {
        httpHeaders: { ...dc.httpHeaders, request: true }
      }
    };
    return {
      dataCollection,
      include: {
        cookies: dataCollection.cookies !== false,
        // Always attach body data that's already on the scope — dataCollection.httpBodies gates write-time, not read-time
        data: true,
        headers: dataCollection.httpHeaders.request !== false,
        ip: dataCollection.userInfo,
        query_string: dataCollection.queryParams !== false,
        // No dataCollection equivalent — URL is always included
        url: true,
        ...options.include
      }
    };
  }
  return {
    name: INTEGRATION_NAME,
    processEvent(event, _hint, client) {
      const { sdkProcessingMetadata = {} } = event;
      const { normalizedRequest, ipAddress } = sdkProcessingMetadata;
      const { include } = resolveIncludeAndDataCollection(client);
      if (normalizedRequest) {
        addNormalizedRequestDataToEvent(event, normalizedRequest, { ipAddress }, include);
      }
      return event;
    },
    processSegmentSpan(span, client) {
      const { sdkProcessingMetadata = {} } = getIsolationScope().getScopeData();
      const { normalizedRequest, ipAddress } = sdkProcessingMetadata;
      if (!normalizedRequest) {
        return;
      }
      const { include, dataCollection } = resolveIncludeAndDataCollection(client);
      addNormalizedRequestDataToSpan(span, normalizedRequest, ipAddress, include, dataCollection);
    }
  };
});
const requestDataIntegration = defineIntegration(_requestDataIntegration);
function addNormalizedRequestDataToEvent(event, req, additionalData, include) {
  event.request = {
    ...event.request,
    ...extractNormalizedRequestData(req, include)
  };
  if (include.ip) {
    const ip = req.headers && getClientIPAddress(req.headers) || additionalData.ipAddress;
    if (ip) {
      event.user = {
        ...event.user,
        ip_address: ip
      };
    }
  }
}
function addNormalizedRequestDataToSpan(span, normalizedRequest, ipAddress, include, dataCollection) {
  const requestData = extractNormalizedRequestData(normalizedRequest, include);
  const attributes = {};
  if (requestData.url) {
    attributes["url.full"] = requestData.url;
  }
  if (requestData.method) {
    attributes["http.request.method"] = requestData.method;
  }
  if (requestData.query_string) {
    attributes["url.query"] = normalizeQueryString(requestData.query_string);
  }
  safeSetSpanJSONAttributes(span, attributes);
  if (requestData.cookies && Object.keys(requestData.cookies).length > 0) {
    const cookieString = Object.entries(requestData.cookies).map(([name, value]) => `${name}=${value}`).join("; ");
    const cookieAttributes = httpHeadersToSpanAttributes({ cookie: cookieString }, dataCollection, "request");
    safeSetSpanJSONAttributes(span, cookieAttributes);
  }
  if (requestData.headers) {
    const headerAttributes = httpHeadersToSpanAttributes(requestData.headers, dataCollection, "request");
    safeSetSpanJSONAttributes(span, headerAttributes);
  }
  if (requestData.data != null) {
    const serialized = typeof requestData.data === "string" ? requestData.data : JSON.stringify(requestData.data);
    if (serialized) {
      safeSetSpanJSONAttributes(span, { "http.request.body.data": serialized });
    }
  }
  if (include.ip) {
    const ip = normalizedRequest.headers && getClientIPAddress(normalizedRequest.headers) || ipAddress || void 0;
    if (ip) {
      safeSetSpanJSONAttributes(span, { [SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS]: ip });
    }
  }
}
function extractNormalizedRequestData(normalizedRequest, include) {
  const requestData = {};
  const headers = { ...normalizedRequest.headers };
  if (include.headers) {
    requestData.headers = headers;
    if (!include.cookies) {
      delete headers.cookie;
    }
    if (!include.ip) {
      const ipHeaderNamesLower = new Set(ipHeaderNames.map((name) => name.toLowerCase()));
      for (const key of Object.keys(headers)) {
        if (ipHeaderNamesLower.has(key.toLowerCase())) {
          delete headers[key];
        }
      }
    }
  }
  requestData.method = normalizedRequest.method;
  if (include.url) {
    requestData.url = normalizedRequest.url;
  }
  if (include.cookies) {
    const cookies = normalizedRequest.cookies || (headers?.cookie ? parseCookie(headers.cookie) : void 0);
    requestData.cookies = cookies || {};
  }
  if (include.query_string) {
    requestData.query_string = normalizedRequest.query_string;
  }
  if (include.data) {
    requestData.data = normalizedRequest.data;
  }
  return requestData;
}
function normalizeQueryString(queryString) {
  if (typeof queryString === "string") {
    return queryString || void 0;
  }
  const pairs = Array.isArray(queryString) ? queryString : Object.entries(queryString);
  const result = pairs.map(([key, value]) => `${key}=${value}`).join("&");
  return result || void 0;
}

export { requestDataIntegration };
//# sourceMappingURL=requestdata.js.map
