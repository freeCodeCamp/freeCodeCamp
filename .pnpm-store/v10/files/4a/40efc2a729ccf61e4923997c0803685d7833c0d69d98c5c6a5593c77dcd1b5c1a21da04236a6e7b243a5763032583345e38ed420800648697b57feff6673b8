Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const semanticAttributes = require('../../semanticAttributes.js');
const scopeData = require('../../utils/scopeData.js');
const url = require('../../utils/url.js');
const spanUtils = require('../../utils/spanUtils.js');
const utils = require('../utils.js');
const beforeSendSpan = require('./beforeSendSpan.js');
const scopeContextAttributes = require('./scopeContextAttributes.js');

function captureSpan(span, client) {
  const spanJSON = spanUtils.spanToStreamedSpanJSON(span);
  const segmentSpan = spanUtils.INTERNAL_getSegmentSpan(span);
  const serializedSegmentSpan = spanUtils.spanToStreamedSpanJSON(segmentSpan);
  const { isolationScope: spanIsolationScope, scope: spanScope } = utils.getCapturedScopesOnSpan(span);
  const finalScopeData = scopeData.getCombinedScopeData(spanIsolationScope, spanScope);
  applyCommonSpanAttributes(spanJSON, serializedSegmentSpan, client, finalScopeData);
  const spanKind = span.kind;
  inferSpanDataFromOtelAttributes(spanJSON, spanKind);
  if (spanJSON.is_segment) {
    applyScopeToSegmentSpan(spanJSON, finalScopeData);
    applySdkMetadataToSegmentSpan(spanJSON, client);
    client.emit("processSegmentSpan", spanJSON);
  }
  client.emit("processSpan", spanJSON);
  const { beforeSendSpan: beforeSendSpan$1 } = client.getOptions();
  const processedSpan = beforeSendSpan$1 && beforeSendSpan.isStreamedBeforeSendSpanCallback(beforeSendSpan$1) ? applyBeforeSendSpanCallback(spanJSON, beforeSendSpan$1) : spanJSON;
  const spanNameSource = processedSpan.attributes?.[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
  if (spanNameSource) {
    safeSetSpanJSONAttributes(processedSpan, {
      // Purposefully not using a constant defined here like in other attributes:
      // This will be the name for SEMANTIC_ATTRIBUTE_SENTRY_SOURCE in v11
      "sentry.span.source": spanNameSource
    });
  }
  return {
    ...spanUtils.streamedSpanJsonToSerializedSpan(processedSpan),
    _segmentSpan: segmentSpan
  };
}
function applyScopeToSegmentSpan(segmentSpanJSON, scopeData) {
  const contextAttributes = scopeContextAttributes.scopeContextsToSpanAttributes(scopeData.contexts);
  safeSetSpanJSONAttributes(segmentSpanJSON, contextAttributes);
}
function safeSetSpanJSONAttributes(spanJSON, newAttributes) {
  const originalAttributes = spanJSON.attributes ?? (spanJSON.attributes = {});
  Object.entries(newAttributes).forEach(([key, value]) => {
    if (value != null && !(key in originalAttributes)) {
      originalAttributes[key] = value;
    }
  });
}
function applySdkMetadataToSegmentSpan(segmentSpanJSON, client) {
  const integrationNames = client.getIntegrationNames();
  if (!integrationNames.length) return;
  safeSetSpanJSONAttributes(segmentSpanJSON, {
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SDK_INTEGRATIONS]: integrationNames
  });
}
function applyCommonSpanAttributes(spanJSON, serializedSegmentSpan, client, scopeData) {
  const sdk = client.getSdkMetadata();
  const { release, environment } = client.getOptions();
  safeSetSpanJSONAttributes(spanJSON, {
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_RELEASE]: release,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT]: environment,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_NAME]: serializedSegmentSpan.name,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_ID]: serializedSegmentSpan.span_id,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SDK_NAME]: sdk?.sdk?.name,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SDK_VERSION]: sdk?.sdk?.version,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_USER_ID]: scopeData.user?.id,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_USER_EMAIL]: scopeData.user?.email,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS]: scopeData.user?.ip_address,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_USER_USERNAME]: scopeData.user?.username,
    ...scopeData.attributes
  });
}
function applyBeforeSendSpanCallback(span, beforeSendSpan) {
  const modifedSpan = beforeSendSpan(span);
  if (!modifedSpan) {
    spanUtils.showSpanDropWarning();
    return span;
  }
  return modifedSpan;
}
const SPAN_KIND_SERVER = 1;
const SPAN_KIND_CLIENT = 2;
function inferSpanDataFromOtelAttributes(spanJSON, spanKind) {
  const attributes = spanJSON.attributes;
  if (!attributes) {
    return;
  }
  const httpMethod = attributes["http.request.method"] || attributes["http.method"];
  if (httpMethod) {
    inferHttpSpanData(spanJSON, attributes, spanKind, httpMethod);
    return;
  }
  const dbSystem = attributes["db.system.name"] || attributes["db.system"];
  const opIsCache = typeof attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP] === "string" && `${attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]}`.startsWith("cache.");
  if (dbSystem && !opIsCache) {
    inferDbSpanData(spanJSON, attributes);
    return;
  }
  if (attributes["rpc.service"]) {
    safeSetSpanJSONAttributes(spanJSON, { [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "rpc" });
    return;
  }
  if (attributes["messaging.system"]) {
    safeSetSpanJSONAttributes(spanJSON, { [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "message" });
    return;
  }
  const faasTrigger = attributes["faas.trigger"];
  if (faasTrigger) {
    safeSetSpanJSONAttributes(spanJSON, { [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${faasTrigger}` });
  }
}
function inferHttpSpanData(spanJSON, attributes, spanKind, httpMethod) {
  const opParts = ["http"];
  if (spanKind === SPAN_KIND_CLIENT) {
    opParts.push("client");
  } else if (spanKind === SPAN_KIND_SERVER) {
    opParts.push("server");
  }
  if (attributes["sentry.http.prefetch"]) {
    opParts.push("prefetch");
  }
  safeSetSpanJSONAttributes(spanJSON, { [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: opParts.join(".") });
  const customName = attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
  if (typeof customName === "string") {
    spanJSON.name = customName;
    return;
  }
  if (attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === "custom") {
    return;
  }
  const httpRoute = attributes["http.route"];
  if (typeof httpRoute === "string") {
    spanJSON.name = `${httpMethod} ${httpRoute}`;
    safeSetSpanJSONAttributes(spanJSON, { [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route" });
  } else {
    if (spanKind === SPAN_KIND_CLIENT || spanKind === SPAN_KIND_SERVER) {
      const urlPath = getUrlPath(attributes, spanKind);
      if (urlPath) {
        spanJSON.name = `${httpMethod} ${urlPath}`;
      }
    }
    safeSetSpanJSONAttributes(spanJSON, { [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url" });
  }
}
function getUrlPath(attributes, spanKind) {
  const httpUrl = attributes["http.url"] || attributes["url.full"];
  const httpTarget = attributes["http.target"];
  const parsedUrl = typeof httpUrl === "string" ? url.parseUrl(httpUrl) : void 0;
  const sanitizedUrl = parsedUrl ? url.getSanitizedUrlString(parsedUrl) : void 0;
  if (spanKind === SPAN_KIND_SERVER && typeof httpTarget === "string") {
    return url.stripUrlQueryAndFragment(httpTarget);
  }
  if (sanitizedUrl) {
    return sanitizedUrl;
  }
  if (typeof httpTarget === "string") {
    return url.stripUrlQueryAndFragment(httpTarget);
  }
  return void 0;
}
function inferDbSpanData(spanJSON, attributes) {
  safeSetSpanJSONAttributes(spanJSON, { [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db" });
  const customName = attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
  if (typeof customName === "string") {
    spanJSON.name = customName;
    return;
  }
  if (attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === "custom") {
    return;
  }
  const statement = attributes["db.statement"];
  if (statement) {
    spanJSON.name = `${statement}`;
    safeSetSpanJSONAttributes(spanJSON, { [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "task" });
  }
}

exports.applyBeforeSendSpanCallback = applyBeforeSendSpanCallback;
exports.captureSpan = captureSpan;
exports.inferSpanDataFromOtelAttributes = inferSpanDataFromOtelAttributes;
exports.safeSetSpanJSONAttributes = safeSetSpanJSONAttributes;
//# sourceMappingURL=captureSpan.js.map
