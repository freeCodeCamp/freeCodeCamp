import { getGlobalScope } from '../currentScopes.js';
import { getDynamicSamplingContextFromSpan } from '../tracing/dynamicSamplingContext.js';
import { merge } from './merge.js';
import { spanToTraceContext, getRootSpan, spanToJSON } from './spanUtils.js';

function applyScopeDataToEvent(event, data) {
  const { fingerprint, span, breadcrumbs, sdkProcessingMetadata } = data;
  applyDataToEvent(event, data);
  if (span) {
    applySpanToEvent(event, span);
  }
  applyFingerprintToEvent(event, fingerprint);
  applyBreadcrumbsToEvent(event, breadcrumbs);
  applySdkMetadataToEvent(event, sdkProcessingMetadata);
}
function mergeScopeData(data, mergeData) {
  const {
    extra,
    tags,
    attributes,
    user,
    contexts,
    level,
    sdkProcessingMetadata,
    breadcrumbs,
    fingerprint,
    eventProcessors,
    attachments,
    propagationContext,
    transactionName,
    span
  } = mergeData;
  mergeAndOverwriteScopeData(data, "extra", extra);
  mergeAndOverwriteScopeData(data, "tags", tags);
  mergeAndOverwriteScopeData(data, "attributes", attributes);
  mergeAndOverwriteScopeData(data, "user", user);
  mergeAndOverwriteScopeData(data, "contexts", contexts);
  data.sdkProcessingMetadata = merge(data.sdkProcessingMetadata, sdkProcessingMetadata, 2);
  if (level) {
    data.level = level;
  }
  if (transactionName) {
    data.transactionName = transactionName;
  }
  if (span) {
    data.span = span;
  }
  if (breadcrumbs.length) {
    data.breadcrumbs = [...data.breadcrumbs, ...breadcrumbs];
  }
  if (fingerprint.length) {
    data.fingerprint = [...data.fingerprint, ...fingerprint];
  }
  if (eventProcessors.length) {
    data.eventProcessors = [...data.eventProcessors, ...eventProcessors];
  }
  if (attachments.length) {
    data.attachments = [...data.attachments, ...attachments];
  }
  data.propagationContext = { ...data.propagationContext, ...propagationContext };
}
function mergeAndOverwriteScopeData(data, prop, mergeVal) {
  data[prop] = merge(data[prop], mergeVal, 1);
}
function getCombinedScopeData(isolationScope, currentScope) {
  const scopeData = getGlobalScope().getScopeData();
  isolationScope && mergeScopeData(scopeData, isolationScope.getScopeData());
  currentScope && mergeScopeData(scopeData, currentScope.getScopeData());
  return scopeData;
}
function applyDataToEvent(event, data) {
  const { extra, tags, user, contexts, level, transactionName } = data;
  if (Object.keys(extra).length) {
    event.extra = { ...extra, ...event.extra };
  }
  if (Object.keys(tags).length) {
    event.tags = { ...tags, ...event.tags };
  }
  if (Object.keys(user).length) {
    event.user = { ...user, ...event.user };
  }
  if (Object.keys(contexts).length) {
    event.contexts = { ...contexts, ...event.contexts };
  }
  if (level) {
    event.level = level;
  }
  if (transactionName && event.type !== "transaction") {
    event.transaction = transactionName;
  }
}
function applyBreadcrumbsToEvent(event, breadcrumbs) {
  const mergedBreadcrumbs = [...event.breadcrumbs || [], ...breadcrumbs];
  event.breadcrumbs = mergedBreadcrumbs.length ? mergedBreadcrumbs : void 0;
}
function applySdkMetadataToEvent(event, sdkProcessingMetadata) {
  event.sdkProcessingMetadata = {
    ...event.sdkProcessingMetadata,
    ...sdkProcessingMetadata
  };
}
function applySpanToEvent(event, span) {
  event.contexts = {
    trace: spanToTraceContext(span),
    ...event.contexts
  };
  event.sdkProcessingMetadata = {
    dynamicSamplingContext: getDynamicSamplingContextFromSpan(span),
    ...event.sdkProcessingMetadata
  };
  const rootSpan = getRootSpan(span);
  const transactionName = spanToJSON(rootSpan).description;
  if (transactionName && !event.transaction && event.type === "transaction") {
    event.transaction = transactionName;
  }
}
function applyFingerprintToEvent(event, fingerprint) {
  event.fingerprint = event.fingerprint ? Array.isArray(event.fingerprint) ? event.fingerprint : [event.fingerprint] : [];
  if (fingerprint) {
    event.fingerprint = event.fingerprint.concat(fingerprint);
  }
  if (!event.fingerprint.length) {
    delete event.fingerprint;
  }
}

export { applyScopeDataToEvent, getCombinedScopeData, mergeAndOverwriteScopeData, mergeScopeData };
//# sourceMappingURL=scopeData.js.map
