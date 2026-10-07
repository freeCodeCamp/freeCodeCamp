const api = require('@opentelemetry/api');
const core = require('@sentry/core');
const semanticConventions = require('@opentelemetry/semantic-conventions');
const core$1 = require('@opentelemetry/core');
const debugBuild = require('./debug-build-CQngOfDt.js');
const sdkTraceBase = require('@opentelemetry/sdk-trace-base');

const SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE = "sentry.parentIsRemote";
const SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION = "sentry.graphql.operation";

function getParentSpanId(span) {
  if ("parentSpanId" in span) {
    return span.parentSpanId;
  } else if ("parentSpanContext" in span) {
    return span.parentSpanContext?.spanId;
  }
  return void 0;
}

function spanHasAttributes(span) {
  const castSpan = span;
  return !!castSpan.attributes && typeof castSpan.attributes === "object";
}
function spanHasKind(span) {
  const castSpan = span;
  return typeof castSpan.kind === "number";
}
function spanHasStatus(span) {
  const castSpan = span;
  return !!castSpan.status;
}
function spanHasName(span) {
  const castSpan = span;
  return !!castSpan.name;
}
function spanHasParentId(span) {
  const castSpan = span;
  return !!getParentSpanId(castSpan);
}
function spanHasEvents(span) {
  const castSpan = span;
  return Array.isArray(castSpan.events);
}

function getRequestSpanData(span) {
  if (!spanHasAttributes(span)) {
    return {};
  }
  const maybeUrlAttribute = span.attributes[semanticConventions.ATTR_URL_FULL] || span.attributes[semanticConventions.SEMATTRS_HTTP_URL];
  const data = {
    url: maybeUrlAttribute,
    // eslint-disable-next-line deprecation/deprecation
    "http.method": span.attributes[semanticConventions.ATTR_HTTP_REQUEST_METHOD] || span.attributes[semanticConventions.SEMATTRS_HTTP_METHOD]
  };
  if (!data["http.method"] && data.url) {
    data["http.method"] = "GET";
  }
  try {
    if (typeof maybeUrlAttribute === "string") {
      const url = core.parseUrl(maybeUrlAttribute);
      data.url = core.getSanitizedUrlString(url);
      if (url.search) {
        data["http.query"] = url.search;
      }
      if (url.hash) {
        data["http.fragment"] = url.hash;
      }
    }
  } catch {
  }
  return data;
}

function wrapClientClass(ClientClass) {
  class OpenTelemetryClient extends ClientClass {
    constructor(...args) {
      super(...args);
    }
    /** Get the OTEL tracer. */
    get tracer() {
      if (this._tracer) {
        return this._tracer;
      }
      const name = "@sentry/opentelemetry";
      const version = core.SDK_VERSION;
      const tracer = api.trace.getTracer(name, version);
      this._tracer = tracer;
      return tracer;
    }
    /**
     * @inheritDoc
     */
    async flush(timeout) {
      const provider = this.traceProvider;
      await provider?.forceFlush();
      return super.flush(timeout);
    }
  }
  return OpenTelemetryClient;
}

function getSpanKind(span) {
  if (spanHasKind(span)) {
    return span.kind;
  }
  return api.SpanKind.INTERNAL;
}

const SENTRY_TRACE_HEADER = "sentry-trace";
const SENTRY_BAGGAGE_HEADER = "baggage";
const SENTRY_TRACE_STATE_DSC = "sentry.dsc";
const SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING = "sentry.sampled_not_recording";
const SENTRY_TRACE_STATE_URL = "sentry.url";
const SENTRY_TRACE_STATE_SAMPLE_RAND = "sentry.sample_rand";
const SENTRY_TRACE_STATE_SAMPLE_RATE = "sentry.sample_rate";
const SENTRY_TRACE_STATE_CHILD_IGNORED = "sentry.ignored";
const SENTRY_TRACE_STATE_SEGMENT_IGNORED = "sentry.segment_ignored";
const SENTRY_SCOPES_CONTEXT_KEY = api.createContextKey("sentry_scopes");
const SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY = api.createContextKey("sentry_fork_isolation_scope");
const SENTRY_FORK_SET_SCOPE_CONTEXT_KEY = api.createContextKey("sentry_fork_set_scope");
const SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY = api.createContextKey("sentry_fork_set_isolation_scope");

const SCOPE_CONTEXT_FIELD = "_scopeContext";
function getScopesFromContext(context) {
  return context.getValue(SENTRY_SCOPES_CONTEXT_KEY);
}
function setScopesOnContext(context, scopes) {
  return context.setValue(SENTRY_SCOPES_CONTEXT_KEY, scopes);
}
function setContextOnScope(scope, context) {
  core.addNonEnumerableProperty(scope, SCOPE_CONTEXT_FIELD, core.makeWeakRef(context));
}
function getContextFromScope(scope) {
  return core.derefWeakRef(scope[SCOPE_CONTEXT_FIELD]);
}

function isSentryRequestSpan(span) {
  if (!spanHasAttributes(span)) {
    return false;
  }
  const { attributes } = span;
  const httpUrl = attributes[semanticConventions.SEMATTRS_HTTP_URL] || attributes[semanticConventions.ATTR_URL_FULL];
  if (!httpUrl) {
    return false;
  }
  return core.isSentryRequestUrl(httpUrl.toString(), core.getClient());
}

function getSamplingDecision(spanContext) {
  const { traceFlags, traceState } = spanContext;
  const sampledNotRecording = traceState ? traceState.get(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING) === "1" : false;
  if (traceFlags === api.TraceFlags.SAMPLED) {
    return true;
  }
  if (sampledNotRecording) {
    return false;
  }
  const dscString = traceState ? traceState.get(SENTRY_TRACE_STATE_DSC) : void 0;
  const dsc = dscString ? core.baggageHeaderToDynamicSamplingContext(dscString) : void 0;
  if (dsc?.sampled === "true") {
    return true;
  }
  if (dsc?.sampled === "false") {
    return false;
  }
  return void 0;
}

function inferSpanData(spanName, attributes, kind) {
  const httpMethod = attributes[semanticConventions.ATTR_HTTP_REQUEST_METHOD] || attributes[semanticConventions.SEMATTRS_HTTP_METHOD];
  if (httpMethod) {
    return descriptionForHttpMethod({ attributes, name: spanName, kind }, httpMethod);
  }
  const dbSystem = attributes[semanticConventions.ATTR_DB_SYSTEM_NAME] || attributes[semanticConventions.SEMATTRS_DB_SYSTEM];
  const opIsCache = typeof attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] === "string" && attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP].startsWith("cache.");
  if (dbSystem && !opIsCache) {
    return descriptionForDbSystem({ attributes, name: spanName });
  }
  const customSourceOrRoute = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === "custom" ? "custom" : "route";
  const rpcService = attributes[semanticConventions.SEMATTRS_RPC_SERVICE];
  if (rpcService) {
    return {
      ...getUserUpdatedNameAndSource(spanName, attributes, "route"),
      op: "rpc"
    };
  }
  const messagingSystem = attributes[semanticConventions.SEMATTRS_MESSAGING_SYSTEM];
  if (messagingSystem) {
    return {
      ...getUserUpdatedNameAndSource(spanName, attributes, customSourceOrRoute),
      op: "message"
    };
  }
  const faasTrigger = attributes[semanticConventions.SEMATTRS_FAAS_TRIGGER];
  if (faasTrigger) {
    return {
      ...getUserUpdatedNameAndSource(spanName, attributes, customSourceOrRoute),
      op: faasTrigger.toString()
    };
  }
  return { op: void 0, description: spanName, source: "custom" };
}
function parseSpanDescription(span) {
  const attributes = spanHasAttributes(span) ? span.attributes : {};
  const name = spanHasName(span) ? span.name : "<unknown>";
  const kind = getSpanKind(span);
  return inferSpanData(name, attributes, kind);
}
function descriptionForDbSystem({ attributes, name }) {
  const userDefinedName = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
  if (typeof userDefinedName === "string") {
    return {
      op: "db",
      description: userDefinedName,
      source: attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] || "custom"
    };
  }
  if (attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === "custom") {
    return { op: "db", description: name, source: "custom" };
  }
  const statement = attributes[semanticConventions.SEMATTRS_DB_STATEMENT];
  const description = statement ? statement.toString() : name;
  return { op: "db", description, source: "task" };
}
function descriptionForHttpMethod({ name, kind, attributes }, httpMethod) {
  const opParts = ["http"];
  switch (kind) {
    case api.SpanKind.CLIENT:
      opParts.push("client");
      break;
    case api.SpanKind.SERVER:
      opParts.push("server");
      break;
  }
  if (attributes["sentry.http.prefetch"]) {
    opParts.push("prefetch");
  }
  const { urlPath, url, query, fragment, hasRoute } = getSanitizedUrl(attributes, kind);
  if (!urlPath) {
    return { ...getUserUpdatedNameAndSource(name, attributes), op: opParts.join(".") };
  }
  const graphqlOperationsAttribute = attributes[SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION];
  const baseDescription = `${httpMethod} ${urlPath}`;
  const inferredDescription = graphqlOperationsAttribute ? `${baseDescription} (${getGraphqlOperationNamesFromAttribute(graphqlOperationsAttribute)})` : baseDescription;
  const inferredSource = hasRoute || urlPath === "/" ? "route" : "url";
  const data = {};
  if (url) {
    data.url = url;
  }
  if (query) {
    data["http.query"] = query;
  }
  if (fragment) {
    data["http.fragment"] = fragment;
  }
  const isClientOrServerKind = kind === api.SpanKind.CLIENT || kind === api.SpanKind.SERVER;
  const origin = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] || "manual";
  const isManualSpan = !`${origin}`.startsWith("auto");
  const alreadyHasCustomSource = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === "custom";
  const customSpanName = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
  const useInferredDescription = !alreadyHasCustomSource && customSpanName == null && (isClientOrServerKind || !isManualSpan);
  const { description, source } = useInferredDescription ? { description: inferredDescription, source: inferredSource } : getUserUpdatedNameAndSource(name, attributes);
  return {
    op: opParts.join("."),
    description,
    source,
    data
  };
}
function getGraphqlOperationNamesFromAttribute(attr) {
  if (Array.isArray(attr)) {
    const sorted = attr.slice().sort();
    if (sorted.length <= 5) {
      return sorted.join(", ");
    } else {
      return `${sorted.slice(0, 5).join(", ")}, +${sorted.length - 5}`;
    }
  }
  return `${attr}`;
}
function getSanitizedUrl(attributes, kind) {
  const httpTarget = attributes[semanticConventions.SEMATTRS_HTTP_TARGET];
  const httpUrl = attributes[semanticConventions.SEMATTRS_HTTP_URL] || attributes[semanticConventions.ATTR_URL_FULL];
  const httpRoute = attributes[semanticConventions.ATTR_HTTP_ROUTE];
  const parsedUrl = typeof httpUrl === "string" ? core.parseUrl(httpUrl) : void 0;
  const url = parsedUrl ? core.getSanitizedUrlString(parsedUrl) : void 0;
  const query = parsedUrl?.search || void 0;
  const fragment = parsedUrl?.hash || void 0;
  if (typeof httpRoute === "string") {
    return { urlPath: httpRoute, url, query, fragment, hasRoute: true };
  }
  if (kind === api.SpanKind.SERVER && typeof httpTarget === "string") {
    return { urlPath: core.stripUrlQueryAndFragment(httpTarget), url, query, fragment, hasRoute: false };
  }
  if (parsedUrl) {
    return { urlPath: url, url, query, fragment, hasRoute: false };
  }
  if (typeof httpTarget === "string") {
    return { urlPath: core.stripUrlQueryAndFragment(httpTarget), url, query, fragment, hasRoute: false };
  }
  return { urlPath: void 0, url, query, fragment, hasRoute: false };
}
function getUserUpdatedNameAndSource(originalName, attributes, fallbackSource = "custom") {
  const source = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] || fallbackSource;
  const description = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
  if (description && typeof description === "string") {
    return {
      description,
      source
    };
  }
  return { description: originalName, source };
}

function enhanceDscWithOpenTelemetryRootSpanName(client) {
  client.on("createDsc", (dsc, rootSpan) => {
    if (!rootSpan) {
      return;
    }
    const jsonSpan = core.spanToJSON(rootSpan);
    const attributes = jsonSpan.data;
    const source = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    const { description } = spanHasName(rootSpan) ? parseSpanDescription(rootSpan) : { description: void 0 };
    if (source !== "url" && description) {
      dsc.transaction = description;
    }
    if (core.hasSpansEnabled()) {
      const sampled = getSamplingDecision(rootSpan.spanContext());
      dsc.sampled = sampled == void 0 ? void 0 : String(sampled);
    }
  });
}

function getActiveSpan() {
  return api.trace.getActiveSpan();
}

function makeTraceState({
  dsc,
  sampled
}) {
  const dscString = dsc ? core.dynamicSamplingContextToSentryBaggageHeader(dsc) : void 0;
  const traceStateBase = new core$1.TraceState();
  const traceStateWithDsc = dscString ? traceStateBase.set(SENTRY_TRACE_STATE_DSC, dscString) : traceStateBase;
  return sampled === false ? traceStateWithDsc.set(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING, "1") : traceStateWithDsc;
}

const setupElements = /* @__PURE__ */ new Set();
function openTelemetrySetupCheck() {
  return Array.from(setupElements);
}
function setIsSetup(element) {
  setupElements.add(element);
}

class SentryPropagator extends core$1.W3CBaggagePropagator {
  constructor() {
    super();
    setIsSetup("SentryPropagator");
    this._urlMatchesTargetsMap = new core.LRUMap(100);
  }
  /**
   * @inheritDoc
   */
  inject(context2, carrier, setter) {
    if (core$1.isTracingSuppressed(context2)) {
      debugBuild.DEBUG_BUILD && core.debug.log("[Tracing] Not injecting trace data for url because tracing is suppressed.");
      return;
    }
    const activeSpan = api.trace.getSpan(context2);
    const url = activeSpan && getCurrentURL(activeSpan);
    const { tracePropagationTargets, propagateTraceparent } = core.getClient()?.getOptions() || {};
    if (!core.shouldPropagateTraceForUrl(url, tracePropagationTargets, this._urlMatchesTargetsMap)) {
      debugBuild.DEBUG_BUILD && core.debug.log("[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:", url);
      return;
    }
    const existingBaggageHeader = getExistingBaggage(carrier);
    const existingSentryTraceHeader = getExistingSentryTrace(carrier);
    let baggage = api.propagation.getBaggage(context2) || api.propagation.createBaggage({});
    const { dynamicSamplingContext, traceId, spanId, sampled } = getInjectionData(context2);
    if (existingBaggageHeader) {
      const baggageEntries = core.parseBaggageHeader(existingBaggageHeader);
      if (baggageEntries) {
        Object.entries(baggageEntries).forEach(([key, value]) => {
          if (!existingSentryTraceHeader && key.startsWith(core.SENTRY_BAGGAGE_KEY_PREFIX)) {
            return;
          }
          baggage = baggage.setEntry(key, { value });
        });
      }
    }
    if (!existingSentryTraceHeader && dynamicSamplingContext) {
      baggage = Object.entries(dynamicSamplingContext).reduce((b, [dscKey, dscValue]) => {
        if (dscValue) {
          return b.setEntry(`${core.SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`, { value: dscValue });
        }
        return b;
      }, baggage);
    }
    if (!existingSentryTraceHeader && traceId && traceId !== api.INVALID_TRACEID) {
      setter.set(carrier, SENTRY_TRACE_HEADER, core.generateSentryTraceHeader(traceId, spanId, sampled));
      if (propagateTraceparent) {
        setter.set(carrier, "traceparent", core.generateTraceparentHeader(traceId, spanId, sampled));
      }
    }
    super.inject(api.propagation.setBaggage(context2, baggage), carrier, setter);
  }
  /**
   * @inheritDoc
   */
  extract(context2, carrier, getter) {
    const maybeSentryTraceHeader = getter.get(carrier, SENTRY_TRACE_HEADER);
    const baggage = getter.get(carrier, SENTRY_BAGGAGE_HEADER);
    const sentryTrace = maybeSentryTraceHeader ? Array.isArray(maybeSentryTraceHeader) ? maybeSentryTraceHeader[0] : maybeSentryTraceHeader : void 0;
    return ensureScopesOnContext(getContextWithRemoteActiveSpan(context2, { sentryTrace, baggage }));
  }
  /**
   * @inheritDoc
   */
  fields() {
    return [SENTRY_TRACE_HEADER, SENTRY_BAGGAGE_HEADER, "traceparent"];
  }
}
function getInjectionData(context2, options = {}) {
  const span = api.trace.getSpan(context2);
  if (span?.spanContext().isRemote) {
    const spanContext = span.spanContext();
    const dynamicSamplingContext2 = core.getDynamicSamplingContextFromSpan(span);
    return {
      dynamicSamplingContext: dynamicSamplingContext2,
      traceId: spanContext.traceId,
      spanId: void 0,
      sampled: getSamplingDecision(spanContext)
      // TODO: Do we need to change something here?
    };
  }
  if (span) {
    const spanContext = span.spanContext();
    const dynamicSamplingContext2 = core.getDynamicSamplingContextFromSpan(span);
    return {
      dynamicSamplingContext: dynamicSamplingContext2,
      traceId: spanContext.traceId,
      spanId: spanContext.spanId,
      sampled: getSamplingDecision(spanContext)
      // TODO: Do we need to change something here?
    };
  }
  const scope = options.scope || getScopesFromContext(context2)?.scope || core.getCurrentScope();
  const client = options.client || core.getClient();
  const propagationContext = scope.getPropagationContext();
  const dynamicSamplingContext = client ? core.getDynamicSamplingContextFromScope(client, scope) : void 0;
  return {
    dynamicSamplingContext,
    traceId: propagationContext.traceId,
    spanId: propagationContext.propagationSpanId,
    sampled: propagationContext.sampled
  };
}
function getContextWithRemoteActiveSpan(ctx, { sentryTrace, baggage }) {
  const propagationContext = core.propagationContextFromHeaders(sentryTrace, baggage);
  const { traceId, parentSpanId, sampled, dsc } = propagationContext;
  const client = core.getClient();
  const incomingDsc = core.baggageHeaderToDynamicSamplingContext(baggage);
  if (!parentSpanId || client && !core.shouldContinueTrace(client, incomingDsc?.org_id)) {
    return ctx;
  }
  const spanContext = generateRemoteSpanContext({
    traceId,
    spanId: parentSpanId,
    sampled,
    dsc
  });
  return api.trace.setSpanContext(ctx, spanContext);
}
function continueTraceAsRemoteSpan(ctx, options, callback) {
  const ctxWithSpanContext = ensureScopesOnContext(getContextWithRemoteActiveSpan(ctx, options));
  return api.context.with(ctxWithSpanContext, callback);
}
function ensureScopesOnContext(ctx) {
  const scopes = getScopesFromContext(ctx);
  const newScopes = {
    // If we have no scope here, this is most likely either the root context or a context manually derived from it
    // In this case, we want to fork the current scope, to ensure we do not pollute the root scope
    scope: scopes ? scopes.scope : core.getCurrentScope().clone(),
    isolationScope: scopes ? scopes.isolationScope : core.getIsolationScope()
  };
  return setScopesOnContext(ctx, newScopes);
}
function getExistingBaggage(carrier) {
  try {
    const baggage = carrier[SENTRY_BAGGAGE_HEADER];
    return Array.isArray(baggage) ? baggage.join(",") : baggage;
  } catch {
    return void 0;
  }
}
function getExistingSentryTrace(carrier) {
  try {
    return carrier[SENTRY_TRACE_HEADER];
  } catch {
    return void 0;
  }
}
function getCurrentURL(span) {
  const spanData = core.spanToJSON(span).data;
  const urlAttribute = spanData[semanticConventions.SEMATTRS_HTTP_URL] || spanData[semanticConventions.ATTR_URL_FULL];
  if (typeof urlAttribute === "string") {
    return urlAttribute;
  }
  const urlTraceState = span.spanContext().traceState?.get(SENTRY_TRACE_STATE_URL);
  if (urlTraceState) {
    return urlTraceState;
  }
  return void 0;
}
function generateRemoteSpanContext({
  spanId,
  traceId,
  sampled,
  dsc
}) {
  const traceState = makeTraceState({
    dsc,
    sampled
  });
  const spanContext = {
    traceId,
    spanId,
    isRemote: true,
    traceFlags: sampled ? api.TraceFlags.SAMPLED : api.TraceFlags.NONE,
    traceState
  };
  return spanContext;
}

function _startSpan(options, callback, autoEnd) {
  const tracer = getTracer();
  const { name, parentSpan: customParentSpan } = options;
  const wrapper = getActiveSpanWrapper(customParentSpan);
  return wrapper(() => {
    const activeCtx = getContext(options.scope, options.forceTransaction);
    const missingRequiredParent = options.onlyIfParent && !api.trace.getSpan(activeCtx);
    const ctx = missingRequiredParent ? core$1.suppressTracing(activeCtx) : activeCtx;
    if (missingRequiredParent) {
      core.getClient()?.recordDroppedEvent("no_parent_span", "span");
    }
    const spanOptions = getSpanOptions(options);
    if (!core.hasSpansEnabled()) {
      const suppressedCtx = core$1.isTracingSuppressed(ctx) ? ctx : core$1.suppressTracing(ctx);
      return api.context.with(suppressedCtx, () => {
        return tracer.startActiveSpan(name, spanOptions, suppressedCtx, (span) => {
          patchSpanEnd(span);
          return api.context.with(activeCtx, () => {
            return core.handleCallbackErrors(
              () => callback(span),
              () => {
                if (core.spanToJSON(span).status === void 0) {
                  span.setStatus({ code: api.SpanStatusCode.ERROR });
                }
              },
              autoEnd ? () => span.end() : void 0
            );
          });
        });
      });
    }
    return tracer.startActiveSpan(name, spanOptions, ctx, (span) => {
      patchSpanEnd(span);
      return core.handleCallbackErrors(
        () => callback(span),
        () => {
          if (core.spanToJSON(span).status === void 0) {
            span.setStatus({ code: api.SpanStatusCode.ERROR });
          }
        },
        autoEnd ? () => span.end() : void 0
      );
    });
  });
}
function startSpan(options, callback) {
  return _startSpan(options, callback, true);
}
function startSpanManual(options, callback) {
  return _startSpan(options, (span) => callback(span, () => span.end()), false);
}
function startInactiveSpan(options) {
  const tracer = getTracer();
  const { name, parentSpan: customParentSpan } = options;
  const wrapper = getActiveSpanWrapper(customParentSpan);
  return wrapper(() => {
    const activeCtx = getContext(options.scope, options.forceTransaction);
    const missingRequiredParent = options.onlyIfParent && !api.trace.getSpan(activeCtx);
    let ctx = missingRequiredParent ? core$1.suppressTracing(activeCtx) : activeCtx;
    if (missingRequiredParent) {
      core.getClient()?.recordDroppedEvent("no_parent_span", "span");
    }
    const spanOptions = getSpanOptions(options);
    if (!core.hasSpansEnabled()) {
      ctx = core$1.isTracingSuppressed(ctx) ? ctx : core$1.suppressTracing(ctx);
    }
    const span = tracer.startSpan(name, spanOptions, ctx);
    patchSpanEnd(span);
    return span;
  });
}
function withActiveSpan(span, callback) {
  const newContextWithActiveSpan = span ? api.trace.setSpan(api.context.active(), span) : api.trace.deleteSpan(api.context.active());
  return api.context.with(newContextWithActiveSpan, () => callback(core.getCurrentScope()));
}
function getTracer() {
  const client = core.getClient();
  return client?.tracer || api.trace.getTracer("@sentry/opentelemetry", core.SDK_VERSION);
}
function getSpanOptions(options) {
  const { startTime, attributes, kind, op, links } = options;
  const fixedStartTime = typeof startTime === "number" ? ensureTimestampInMilliseconds(startTime) : startTime;
  return {
    attributes: op ? {
      [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
      ...attributes
    } : attributes,
    kind,
    links,
    startTime: fixedStartTime
  };
}
function ensureTimestampInMilliseconds(timestamp) {
  const isMs = timestamp < 9999999999;
  return isMs ? timestamp * 1e3 : timestamp;
}
function patchSpanEnd(span) {
  const originalEnd = span.end.bind(span);
  span.end = (endTime) => {
    return originalEnd(typeof endTime === "number" ? ensureTimestampInMilliseconds(endTime) : endTime);
  };
}
function getContext(scope, forceTransaction) {
  const ctx = getContextForScope(scope);
  const parentSpan = api.trace.getSpan(ctx);
  if (!parentSpan) {
    return ctx;
  }
  if (!forceTransaction) {
    return ctx;
  }
  const ctxWithoutSpan = api.trace.deleteSpan(ctx);
  const { spanId, traceId } = parentSpan.spanContext();
  const sampled = getSamplingDecision(parentSpan.spanContext());
  const rootSpan = core.getRootSpan(parentSpan);
  const dsc = core.getDynamicSamplingContextFromSpan(rootSpan);
  const traceState = makeTraceState({
    dsc,
    sampled
  });
  const spanOptions = {
    traceId,
    spanId,
    isRemote: true,
    traceFlags: sampled ? api.TraceFlags.SAMPLED : api.TraceFlags.NONE,
    traceState
  };
  const ctxWithSpanContext = api.trace.setSpanContext(ctxWithoutSpan, spanOptions);
  return ctxWithSpanContext;
}
function getContextForScope(scope) {
  if (scope) {
    const ctx = getContextFromScope(scope);
    if (ctx) {
      return ctx;
    }
  }
  return api.context.active();
}
function continueTrace(options, callback) {
  return continueTraceAsRemoteSpan(api.context.active(), options, callback);
}
function startNewTrace(callback) {
  const traceId = core.generateTraceId();
  const spanId = core.generateSpanId();
  const spanContext = {
    traceId,
    spanId,
    isRemote: true,
    traceFlags: api.TraceFlags.NONE
  };
  const ctxWithTrace = api.trace.setSpanContext(api.context.active(), spanContext);
  return api.context.with(ctxWithTrace, () => {
    core.getCurrentScope().setPropagationContext({
      traceId,
      sampleRand: core._INTERNAL_safeMathRandom()
    });
    return callback();
  });
}
function getTraceContextForScope(client, scope) {
  const ctx = getContextFromScope(scope);
  const span = ctx && api.trace.getSpan(ctx);
  const traceContext = span ? core.spanToTraceContext(span) : core.getTraceContextFromScope(scope);
  const dynamicSamplingContext = span ? core.getDynamicSamplingContextFromSpan(span) : core.getDynamicSamplingContextFromScope(client, scope);
  return [dynamicSamplingContext, traceContext];
}
function getActiveSpanWrapper(parentSpan) {
  return parentSpan !== void 0 ? (callback) => {
    return withActiveSpan(parentSpan, callback);
  } : (callback) => callback();
}

function suppressTracing(callback) {
  const ctx = core$1.suppressTracing(api.context.active());
  return api.context.with(ctx, callback);
}

function setupEventContextTrace(client) {
  client.on("preprocessEvent", (event) => {
    const span = getActiveSpan();
    if (!span || event.type === "transaction") {
      return;
    }
    event.contexts = {
      trace: core.spanToTraceContext(span),
      ...event.contexts
    };
    const rootSpan = core.getRootSpan(span);
    event.sdkProcessingMetadata = {
      dynamicSamplingContext: core.getDynamicSamplingContextFromSpan(rootSpan),
      ...event.sdkProcessingMetadata
    };
    return event;
  });
}

function getTraceData({
  span,
  scope,
  client,
  propagateTraceparent
} = {}) {
  let ctx = (scope && getContextFromScope(scope)) ?? api.context.active();
  if (span) {
    const { scope: scope2 } = core.getCapturedScopesOnSpan(span);
    ctx = scope2 && getContextFromScope(scope2) || api.trace.setSpan(api.context.active(), span);
  }
  const { traceId, spanId, sampled, dynamicSamplingContext } = getInjectionData(ctx, { scope, client });
  const traceData = {
    "sentry-trace": core.generateSentryTraceHeader(traceId, spanId, sampled),
    baggage: core.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext)
  };
  if (propagateTraceparent) {
    traceData.traceparent = core.generateTraceparentHeader(traceId, spanId, sampled);
  }
  return traceData;
}

function setOpenTelemetryContextAsyncContextStrategy() {
  function getScopes() {
    const ctx = api.context.active();
    const scopes = getScopesFromContext(ctx);
    if (scopes) {
      return scopes;
    }
    return {
      scope: core.getDefaultCurrentScope(),
      isolationScope: core.getDefaultIsolationScope()
    };
  }
  function withScope(callback) {
    const ctx = api.context.active();
    return api.context.with(ctx, () => {
      return callback(getCurrentScope());
    });
  }
  function withSetScope(scope, callback) {
    const ctx = getContextFromScope(scope) || api.context.active();
    return api.context.with(ctx.setValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY, scope), () => {
      return callback(scope);
    });
  }
  function withIsolationScope(callback) {
    const ctx = api.context.active();
    return api.context.with(ctx.setValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY, true), () => {
      return callback(getIsolationScope());
    });
  }
  function withSetIsolationScope(isolationScope, callback) {
    const ctx = api.context.active();
    return api.context.with(ctx.setValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY, isolationScope), () => {
      return callback(getIsolationScope());
    });
  }
  function getCurrentScope() {
    return getScopes().scope;
  }
  function getIsolationScope() {
    return getScopes().isolationScope;
  }
  core.setAsyncContextStrategy({
    withScope,
    withSetScope,
    withSetIsolationScope,
    withIsolationScope,
    getCurrentScope,
    getIsolationScope,
    startSpan,
    startSpanManual,
    startInactiveSpan,
    getActiveSpan,
    suppressTracing,
    getTraceData,
    continueTrace,
    startNewTrace,
    // The types here don't fully align, because our own `Span` type is narrower
    // than the OTEL one - but this is OK for here, as we now we'll only have OTEL spans passed around
    withActiveSpan
  });
}

function buildContextWithSentryScopes(context, activeContext) {
  const span = api.trace.getSpan(context);
  let effectiveContext;
  if (span?.spanContext().traceState?.get(SENTRY_TRACE_STATE_CHILD_IGNORED) === "1") {
    const contextWithoutSpan = api.trace.deleteSpan(context);
    const parentSpan = api.trace.getSpan(activeContext);
    effectiveContext = parentSpan ? api.trace.setSpan(contextWithoutSpan, parentSpan) : contextWithoutSpan;
  } else {
    effectiveContext = context;
  }
  const currentScopes = getScopesFromContext(effectiveContext);
  const currentScope = currentScopes?.scope || core.getCurrentScope();
  const currentIsolationScope = currentScopes?.isolationScope || core.getIsolationScope();
  const shouldForkIsolationScope = effectiveContext.getValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY) === true;
  const scope = effectiveContext.getValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY);
  const isolationScope = effectiveContext.getValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY);
  const newCurrentScope = scope || currentScope.clone();
  const newIsolationScope = isolationScope || (shouldForkIsolationScope ? currentIsolationScope.clone() : currentIsolationScope);
  const scopes = { scope: newCurrentScope, isolationScope: newIsolationScope };
  const ctx1 = setScopesOnContext(effectiveContext, scopes);
  const ctx2 = ctx1.deleteValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY).deleteValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY).deleteValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY);
  setContextOnScope(newCurrentScope, ctx2);
  return ctx2;
}

function wrapContextManagerClass(ContextManagerClass) {
  class SentryContextManager extends ContextManagerClass {
    constructor(...args) {
      super(...args);
      setIsSetup("SentryContextManager");
    }
    /**
     * Overwrite with() of the original AsyncLocalStorageContextManager
     * to ensure we also create new scopes per context.
     */
    with(context, fn, thisArg, ...args) {
      const ctx2 = buildContextWithSentryScopes(context, this.active());
      return super.with(ctx2, fn, thisArg, ...args);
    }
    /**
     * Gets underlying AsyncLocalStorage and symbol to allow lookup of scope.
     */
    getAsyncLocalStorageLookup() {
      return {
        // @ts-expect-error This is on the base class, but not part of the interface
        asyncLocalStorage: this._asyncLocalStorage,
        contextSymbol: SENTRY_SCOPES_CONTEXT_KEY
      };
    }
  }
  return SentryContextManager;
}

function groupSpansWithParents(spans) {
  const nodeMap = /* @__PURE__ */ new Map();
  for (const span of spans) {
    createOrUpdateSpanNodeAndRefs(nodeMap, span);
  }
  return Array.from(nodeMap, function([_id, spanNode]) {
    return spanNode;
  });
}
function getLocalParentId(span) {
  const parentIsRemote = span.attributes[SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE] === true;
  return !parentIsRemote ? getParentSpanId(span) : void 0;
}
function createOrUpdateSpanNodeAndRefs(nodeMap, span) {
  const id = span.spanContext().spanId;
  const parentId = getLocalParentId(span);
  if (!parentId) {
    createOrUpdateNode(nodeMap, { id, span, children: [] });
    return;
  }
  const parentNode = createOrGetParentNode(nodeMap, parentId);
  const node = createOrUpdateNode(nodeMap, { id, span, parentNode, children: [] });
  parentNode.children.push(node);
}
function createOrGetParentNode(nodeMap, id) {
  const existing = nodeMap.get(id);
  if (existing) {
    return existing;
  }
  return createOrUpdateNode(nodeMap, { id, children: [] });
}
function createOrUpdateNode(nodeMap, spanNode) {
  const existing = nodeMap.get(spanNode.id);
  if (existing?.span) {
    return existing;
  }
  if (existing && !existing.span) {
    existing.span = spanNode.span;
    existing.parentNode = spanNode.parentNode;
    return existing;
  }
  nodeMap.set(spanNode.id, spanNode);
  return spanNode;
}

const canonicalGrpcErrorCodesMap = {
  "1": "cancelled",
  "2": "unknown_error",
  "3": "invalid_argument",
  "4": "deadline_exceeded",
  "5": "not_found",
  "6": "already_exists",
  "7": "permission_denied",
  "8": "resource_exhausted",
  "9": "failed_precondition",
  "10": "aborted",
  "11": "out_of_range",
  "12": "unimplemented",
  "13": "internal_error",
  "14": "unavailable",
  "15": "data_loss",
  "16": "unauthenticated"
};
const isStatusErrorMessageValid = (message) => {
  return Object.values(canonicalGrpcErrorCodesMap).includes(message);
};
function mapStatus(span) {
  const attributes = spanHasAttributes(span) ? span.attributes : {};
  const status = spanHasStatus(span) ? span.status : void 0;
  if (status) {
    if (status.code === api.SpanStatusCode.OK) {
      return { code: core.SPAN_STATUS_OK };
    } else if (status.code === api.SpanStatusCode.ERROR) {
      if (typeof status.message === "undefined") {
        const inferredStatus2 = inferStatusFromAttributes(attributes);
        if (inferredStatus2) {
          return inferredStatus2;
        }
      }
      if (status.message && isStatusErrorMessageValid(status.message)) {
        return { code: core.SPAN_STATUS_ERROR, message: status.message };
      } else {
        return { code: core.SPAN_STATUS_ERROR, message: "internal_error" };
      }
    }
  }
  const inferredStatus = inferStatusFromAttributes(attributes);
  if (inferredStatus) {
    return inferredStatus;
  }
  if (status?.code === api.SpanStatusCode.UNSET) {
    return { code: core.SPAN_STATUS_OK };
  } else {
    return { code: core.SPAN_STATUS_ERROR, message: "unknown_error" };
  }
}
function inferStatusFromAttributes(attributes) {
  const httpCodeAttribute = attributes[semanticConventions.ATTR_HTTP_RESPONSE_STATUS_CODE] || attributes[semanticConventions.SEMATTRS_HTTP_STATUS_CODE];
  const grpcCodeAttribute = attributes[semanticConventions.SEMATTRS_RPC_GRPC_STATUS_CODE];
  const numberHttpCode = typeof httpCodeAttribute === "number" ? httpCodeAttribute : typeof httpCodeAttribute === "string" ? parseInt(httpCodeAttribute) : void 0;
  if (typeof numberHttpCode === "number") {
    return core.getSpanStatusFromHttpCode(numberHttpCode);
  }
  if (typeof grpcCodeAttribute === "string") {
    return { code: core.SPAN_STATUS_ERROR, message: canonicalGrpcErrorCodesMap[grpcCodeAttribute] || "unknown_error" };
  }
  return void 0;
}

const MAX_SPAN_COUNT = 1e3;
const DEFAULT_TIMEOUT = 300;
class SentrySpanExporter {
  constructor(options) {
    this._finishedSpanBucketSize = options?.timeout || DEFAULT_TIMEOUT;
    this._finishedSpanBuckets = new Array(this._finishedSpanBucketSize).fill(void 0);
    this._lastCleanupTimestampInS = Math.floor(core._INTERNAL_safeDateNow() / 1e3);
    this._spansToBucketEntry = /* @__PURE__ */ new WeakMap();
    this._sentSpans = /* @__PURE__ */ new Map();
    this._debouncedFlush = core.debounce(this.flush.bind(this), 1, { maxWait: 100 });
  }
  /**
   * Export a single span.
   * This is called by the span processor whenever a span is ended.
   */
  export(span) {
    const currentTimestampInS = Math.floor(core._INTERNAL_safeDateNow() / 1e3);
    if (this._lastCleanupTimestampInS !== currentTimestampInS) {
      let droppedSpanCount = 0;
      this._finishedSpanBuckets.forEach((bucket, i) => {
        if (bucket && bucket.timestampInS <= currentTimestampInS - this._finishedSpanBucketSize) {
          droppedSpanCount += bucket.spans.size;
          this._finishedSpanBuckets[i] = void 0;
        }
      });
      if (droppedSpanCount > 0) {
        debugBuild.DEBUG_BUILD && core.debug.log(
          `SpanExporter dropped ${droppedSpanCount} spans because they were pending for more than ${this._finishedSpanBucketSize} seconds.`
        );
      }
      this._lastCleanupTimestampInS = currentTimestampInS;
    }
    const currentBucketIndex = currentTimestampInS % this._finishedSpanBucketSize;
    const currentBucket = this._finishedSpanBuckets[currentBucketIndex] || {
      timestampInS: currentTimestampInS,
      spans: /* @__PURE__ */ new Set()
    };
    this._finishedSpanBuckets[currentBucketIndex] = currentBucket;
    currentBucket.spans.add(span);
    this._spansToBucketEntry.set(span, currentBucket);
    const localParentId = getLocalParentId(span);
    if (!localParentId || this._sentSpans.has(localParentId)) {
      this._debouncedFlush();
    }
  }
  /**
   * Try to flush any pending spans immediately.
   * This is called internally by the exporter (via _debouncedFlush),
   * but can also be triggered externally if we force-flush.
   */
  flush() {
    const finishedSpans = this._finishedSpanBuckets.flatMap((bucket) => bucket ? Array.from(bucket.spans) : []);
    this._flushSentSpanCache();
    const sentSpans = this._maybeSend(finishedSpans);
    const sentSpanCount = sentSpans.size;
    const remainingOpenSpanCount = finishedSpans.length - sentSpanCount;
    debugBuild.DEBUG_BUILD && core.debug.log(
      `SpanExporter exported ${sentSpanCount} spans, ${remainingOpenSpanCount} spans are waiting for their parent spans to finish`
    );
    const expirationDate = core._INTERNAL_safeDateNow() + DEFAULT_TIMEOUT * 1e3;
    for (const span of sentSpans) {
      this._sentSpans.set(span.spanContext().spanId, expirationDate);
      const bucketEntry = this._spansToBucketEntry.get(span);
      if (bucketEntry) {
        bucketEntry.spans.delete(span);
      }
    }
    this._debouncedFlush.cancel();
  }
  /**
   * Clear the exporter.
   * This is called when the span processor is shut down.
   */
  clear() {
    this._finishedSpanBuckets = this._finishedSpanBuckets.fill(void 0);
    this._sentSpans.clear();
    this._debouncedFlush.cancel();
  }
  /**
   * Send the given spans, but only if they are part of a finished transaction.
   *
   * Returns the sent spans.
   * Spans remain unsent when their parent span is not yet finished.
   * This will happen regularly, as child spans are generally finished before their parents.
   * But it _could_ also happen because, for whatever reason, a parent span was lost.
   * In this case, we'll eventually need to clean this up.
   */
  _maybeSend(spans) {
    const grouped = groupSpansWithParents(spans);
    const sentSpans = /* @__PURE__ */ new Set();
    const rootNodes = this._getCompletedRootNodes(grouped);
    for (const root of rootNodes) {
      const span = root.span;
      sentSpans.add(span);
      const transactionEvent = createTransactionForOtelSpan(span);
      if (root.parentNode && this._sentSpans.has(root.parentNode.id)) {
        const traceData = transactionEvent.contexts?.trace?.data;
        if (traceData) {
          traceData["sentry.parent_span_already_sent"] = true;
        }
      }
      const spans2 = transactionEvent.spans || [];
      let hasGenAiSpans = false;
      for (const child of root.children) {
        if (createAndFinishSpanForOtelSpan(child, spans2, sentSpans)) {
          hasGenAiSpans = true;
        }
      }
      transactionEvent.spans = spans2.length > MAX_SPAN_COUNT ? spans2.sort((a, b) => a.start_timestamp - b.start_timestamp).slice(0, MAX_SPAN_COUNT) : spans2;
      if (hasGenAiSpans) {
        transactionEvent.sdkProcessingMetadata = {
          ...transactionEvent.sdkProcessingMetadata,
          hasGenAiSpans: true
        };
      }
      const measurements = core.timedEventsToMeasurements(span.events);
      if (measurements) {
        transactionEvent.measurements = measurements;
      }
      core.captureEvent(transactionEvent);
    }
    return sentSpans;
  }
  /** Remove "expired" span id entries from the _sentSpans cache. */
  _flushSentSpanCache() {
    const currentTimestamp = core._INTERNAL_safeDateNow();
    for (const [spanId, expirationTime] of this._sentSpans.entries()) {
      if (expirationTime <= currentTimestamp) {
        this._sentSpans.delete(spanId);
      }
    }
  }
  /** Check if a node is a completed root node or a node whose parent has already been sent */
  _nodeIsCompletedRootNodeOrHasSentParent(node) {
    return !!node.span && (!node.parentNode || this._sentSpans.has(node.parentNode.id));
  }
  /** Get all completed root nodes from a list of nodes */
  _getCompletedRootNodes(nodes) {
    return nodes.filter((node) => this._nodeIsCompletedRootNodeOrHasSentParent(node));
  }
}
function parseSpan(span) {
  const attributes = span.attributes;
  const origin = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
  const op = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP];
  const source = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
  return { origin, op, source };
}
function createTransactionForOtelSpan(span) {
  const { op, description, data, origin = "manual", source } = getSpanData(span);
  const capturedSpanScopes = core.getCapturedScopesOnSpan(span);
  const sampleRate = span.attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
  const attributes = {
    [core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: source,
    [core.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: sampleRate,
    [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
    [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: origin,
    ...data,
    ...removeSentryAttributes(span.attributes)
  };
  const { links } = span;
  const { traceId: trace_id, spanId: span_id } = span.spanContext();
  const parent_span_id = getParentSpanId(span);
  const status = mapStatus(span);
  const traceContext = {
    parent_span_id,
    span_id,
    trace_id,
    data: attributes,
    origin,
    op,
    status: core.getStatusMessage(status),
    // As per protocol, span status is allowed to be undefined
    links: core.convertSpanLinksForEnvelope(links)
  };
  const statusCode = attributes[semanticConventions.ATTR_HTTP_RESPONSE_STATUS_CODE];
  const responseContext = typeof statusCode === "number" ? { response: { status_code: statusCode } } : void 0;
  const transactionEvent = {
    contexts: {
      trace: traceContext,
      otel: {
        resource: span.resource.attributes
      },
      ...responseContext
    },
    spans: [],
    start_timestamp: core.spanTimeInputToSeconds(span.startTime),
    timestamp: core.spanTimeInputToSeconds(span.endTime),
    transaction: description,
    type: "transaction",
    sdkProcessingMetadata: {
      capturedSpanScope: capturedSpanScopes.scope,
      capturedSpanIsolationScope: capturedSpanScopes.isolationScope,
      sampleRate,
      dynamicSamplingContext: core.getDynamicSamplingContextFromSpan(span)
    },
    ...source && {
      transaction_info: {
        source
      }
    }
  };
  return transactionEvent;
}
function createAndFinishSpanForOtelSpan(node, spans, sentSpans) {
  const span = node.span;
  if (span) {
    sentSpans.add(span);
  }
  const shouldDrop = !span;
  if (shouldDrop) {
    let hasGenAiSpans2 = false;
    node.children.forEach((child) => {
      if (createAndFinishSpanForOtelSpan(child, spans, sentSpans)) {
        hasGenAiSpans2 = true;
      }
    });
    return hasGenAiSpans2;
  }
  const span_id = span.spanContext().spanId;
  const trace_id = span.spanContext().traceId;
  const parentSpanId = getParentSpanId(span);
  const { attributes, startTime, endTime, links } = span;
  const { op, description, data, origin = "manual" } = getSpanData(span);
  const allData = {
    [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: origin,
    [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
    ...removeSentryAttributes(attributes),
    ...data
  };
  const status = mapStatus(span);
  const spanJSON = {
    span_id,
    trace_id,
    data: allData,
    description,
    parent_span_id: parentSpanId,
    start_timestamp: core.spanTimeInputToSeconds(startTime),
    // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
    timestamp: core.spanTimeInputToSeconds(endTime) || void 0,
    status: core.getStatusMessage(status),
    // As per protocol, span status is allowed to be undefined
    op,
    origin,
    measurements: core.timedEventsToMeasurements(span.events),
    links: core.convertSpanLinksForEnvelope(links)
  };
  spans.push(spanJSON);
  let hasGenAiSpans = !!op?.startsWith("gen_ai.");
  node.children.forEach((child) => {
    if (createAndFinishSpanForOtelSpan(child, spans, sentSpans)) {
      hasGenAiSpans = true;
    }
  });
  return hasGenAiSpans;
}
function getSpanData(span) {
  const { op: definedOp, source: definedSource, origin } = parseSpan(span);
  const { op: inferredOp, description, source: inferredSource, data: inferredData } = parseSpanDescription(span);
  const op = definedOp || inferredOp;
  const source = definedSource || inferredSource;
  const data = { ...inferredData, ...getData(span) };
  return {
    op,
    description,
    source,
    origin,
    data
  };
}
function removeSentryAttributes(data) {
  const cleanedData = { ...data };
  delete cleanedData[core.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
  delete cleanedData[SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE];
  delete cleanedData[core.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
  return cleanedData;
}
function getData(span) {
  const attributes = span.attributes;
  const data = {};
  if (span.kind !== api.SpanKind.INTERNAL) {
    data["otel.kind"] = api.SpanKind[span.kind];
  }
  const maybeHttpStatusCodeAttribute = attributes[semanticConventions.SEMATTRS_HTTP_STATUS_CODE];
  if (maybeHttpStatusCodeAttribute) {
    data[semanticConventions.ATTR_HTTP_RESPONSE_STATUS_CODE] = maybeHttpStatusCodeAttribute;
  }
  const requestData = getRequestSpanData(span);
  if (requestData.url) {
    data.url = requestData.url;
  }
  if (requestData["http.query"]) {
    data["http.query"] = requestData["http.query"].slice(1);
  }
  if (requestData["http.fragment"]) {
    data["http.fragment"] = requestData["http.fragment"].slice(1);
  }
  return data;
}

class SentrySpanProcessor {
  constructor(options) {
    setIsSetup("SentrySpanProcessor");
    this._exporter = new SentrySpanExporter(options);
  }
  /**
   * @inheritDoc
   */
  async forceFlush() {
    this._exporter.flush();
  }
  /**
   * @inheritDoc
   */
  async shutdown() {
    this._exporter.clear();
  }
  /**
   * @inheritDoc
   */
  onStart(span, parentContext) {
    const parentSpan = api.trace.getSpan(parentContext);
    let scopes = getScopesFromContext(parentContext);
    if (parentSpan && !parentSpan.spanContext().isRemote) {
      core.addChildSpanToSpan(parentSpan, span);
    }
    if (parentSpan?.spanContext().isRemote) {
      span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE, true);
    }
    if (parentContext === api.ROOT_CONTEXT) {
      scopes = {
        scope: core.getDefaultCurrentScope(),
        isolationScope: core.getDefaultIsolationScope()
      };
    }
    if (scopes) {
      core.setCapturedScopesOnSpan(span, scopes.scope, scopes.isolationScope);
    }
    core.logSpanStart(span);
    const client = core.getClient();
    client?.emit("spanStart", span);
  }
  /** @inheritDoc */
  onEnd(span) {
    core.logSpanEnd(span);
    const client = core.getClient();
    client?.emit("spanEnd", span);
    if (client && core.hasSpanStreamingEnabled(client)) {
      client.emit("afterSpanEnd", span);
    } else {
      this._exporter.export(span);
    }
  }
}

class SentrySampler {
  constructor(client) {
    this._client = client;
    this._isSpanStreaming = core.hasSpanStreamingEnabled(client);
    setIsSetup("SentrySampler");
  }
  /** @inheritDoc */
  shouldSample(context, traceId, spanName, spanKind, spanAttributes, _links) {
    const options = this._client.getOptions();
    const { ignoreSpans } = options;
    const parentSpan = getValidSpan(context);
    const parentContext = parentSpan?.spanContext();
    if (!core.hasSpansEnabled(options)) {
      return wrapSamplingDecision({ decision: void 0, context, spanAttributes });
    }
    const maybeSpanHttpMethod = spanAttributes[semanticConventions.SEMATTRS_HTTP_METHOD] || spanAttributes[semanticConventions.ATTR_HTTP_REQUEST_METHOD];
    if (spanKind === api.SpanKind.CLIENT && maybeSpanHttpMethod && (!parentSpan || parentContext?.isRemote)) {
      if (!this._isSpanStreaming) {
        this._client.recordDroppedEvent("no_parent_span", "span");
        return wrapSamplingDecision({ decision: void 0, context, spanAttributes });
      }
    }
    const parentSampled = parentSpan ? getParentSampled(parentSpan, traceId, spanName) : void 0;
    const isRootSpan = !parentSpan || parentContext?.isRemote;
    if (!isRootSpan) {
      if (this._isSpanStreaming) {
        if (parentSampled) {
          if (ignoreSpans?.length) {
            const { description: inferredChildName, op: childOp } = inferSpanData(spanName, spanAttributes, spanKind);
            if (core.shouldIgnoreSpan(
              {
                description: inferredChildName,
                op: spanAttributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] ?? childOp,
                attributes: spanAttributes
              },
              ignoreSpans
            )) {
              this._client.recordDroppedEvent("ignored", "span");
              return wrapSamplingDecision({
                decision: sdkTraceBase.SamplingDecision.NOT_RECORD,
                context,
                spanAttributes,
                ignoredChildSpan: true
              });
            }
          }
        }
        if (!parentSampled) {
          const parentSegmentIgnored = parentContext?.traceState?.get(SENTRY_TRACE_STATE_SEGMENT_IGNORED) === "1";
          this._client.recordDroppedEvent(parentSegmentIgnored ? "ignored" : "sample_rate", "span");
        }
      }
      return wrapSamplingDecision({
        decision: parentSampled ? sdkTraceBase.SamplingDecision.RECORD_AND_SAMPLED : sdkTraceBase.SamplingDecision.NOT_RECORD,
        context,
        spanAttributes
      });
    }
    const {
      description: inferredSpanName,
      data: inferredAttributes,
      op
    } = inferSpanData(spanName, spanAttributes, spanKind);
    const mergedAttributes = {
      ...inferredAttributes,
      ...spanAttributes
    };
    if (op) {
      mergedAttributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] = op;
    }
    if (this._isSpanStreaming && ignoreSpans?.length && core.shouldIgnoreSpan(
      {
        description: inferredSpanName,
        op: mergedAttributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] ?? op,
        attributes: mergedAttributes
      },
      ignoreSpans
    )) {
      this._client.recordDroppedEvent("ignored", "span");
      return wrapSamplingDecision({
        decision: sdkTraceBase.SamplingDecision.NOT_RECORD,
        context,
        spanAttributes,
        ignoredSegmentSpan: true
      });
    }
    const mutableSamplingDecision = { decision: true };
    this._client.emit(
      "beforeSampling",
      {
        spanAttributes: mergedAttributes,
        spanName: inferredSpanName,
        parentSampled,
        parentContext
      },
      mutableSamplingDecision
    );
    if (!mutableSamplingDecision.decision) {
      return wrapSamplingDecision({ decision: void 0, context, spanAttributes });
    }
    const { isolationScope } = getScopesFromContext(context) ?? {};
    const dscString = parentContext?.traceState ? parentContext.traceState.get(SENTRY_TRACE_STATE_DSC) : void 0;
    const dsc = dscString ? core.baggageHeaderToDynamicSamplingContext(dscString) : void 0;
    const sampleRand = core.parseSampleRate(dsc?.sample_rand) ?? core._INTERNAL_safeMathRandom();
    const [sampled, sampleRate, localSampleRateWasApplied] = core.sampleSpan(
      options,
      {
        name: inferredSpanName,
        attributes: mergedAttributes,
        normalizedRequest: isolationScope?.getScopeData().sdkProcessingMetadata.normalizedRequest,
        parentSampled,
        parentSampleRate: core.parseSampleRate(dsc?.sample_rate)
      },
      sampleRand
    );
    const method = `${maybeSpanHttpMethod}`.toUpperCase();
    if (method === "OPTIONS" || method === "HEAD") {
      debugBuild.DEBUG_BUILD && core.debug.log(`[Tracing] Not sampling span because HTTP method is '${method}' for ${spanName}`);
      return wrapSamplingDecision({
        decision: sdkTraceBase.SamplingDecision.NOT_RECORD,
        context,
        spanAttributes,
        sampleRand,
        downstreamTraceSampleRate: 0
        // we don't want to sample anything in the downstream trace either
      });
    }
    if (!sampled && // We check for `parentSampled === undefined` because we only want to record client reports for spans that are trace roots (ie. when there was incoming trace)
    parentSampled === void 0) {
      debugBuild.DEBUG_BUILD && core.debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled.");
      this._client.recordDroppedEvent("sample_rate", this._isSpanStreaming ? "span" : "transaction");
    }
    return {
      ...wrapSamplingDecision({
        decision: sampled ? sdkTraceBase.SamplingDecision.RECORD_AND_SAMPLED : sdkTraceBase.SamplingDecision.NOT_RECORD,
        context,
        spanAttributes,
        sampleRand,
        downstreamTraceSampleRate: localSampleRateWasApplied ? sampleRate : void 0
      }),
      attributes: {
        // We set the sample rate on the span when a local sample rate was applied to better understand how traces were sampled in Sentry
        [core.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: localSampleRateWasApplied ? sampleRate : void 0
      }
    };
  }
  /** Returns the sampler name or short description with the configuration. */
  toString() {
    return "SentrySampler";
  }
}
function getParentSampled(parentSpan, traceId, spanName) {
  const parentContext = parentSpan.spanContext();
  if (api.isSpanContextValid(parentContext) && parentContext.traceId === traceId) {
    if (parentContext.isRemote) {
      const parentSampled2 = getSamplingDecision(parentSpan.spanContext());
      debugBuild.DEBUG_BUILD && core.debug.log(`[Tracing] Inheriting remote parent's sampled decision for ${spanName}: ${parentSampled2}`);
      return parentSampled2;
    }
    const parentSampled = getSamplingDecision(parentContext);
    debugBuild.DEBUG_BUILD && core.debug.log(`[Tracing] Inheriting parent's sampled decision for ${spanName}: ${parentSampled}`);
    return parentSampled;
  }
  return void 0;
}
function wrapSamplingDecision({
  decision,
  context,
  spanAttributes,
  sampleRand,
  downstreamTraceSampleRate,
  ignoredChildSpan,
  ignoredSegmentSpan
}) {
  let traceState = getBaseTraceState(context, spanAttributes);
  if (downstreamTraceSampleRate !== void 0) {
    traceState = traceState.set(SENTRY_TRACE_STATE_SAMPLE_RATE, `${downstreamTraceSampleRate}`);
  }
  if (sampleRand !== void 0) {
    traceState = traceState.set(SENTRY_TRACE_STATE_SAMPLE_RAND, `${sampleRand}`);
  }
  if (ignoredChildSpan) {
    traceState = traceState.set(SENTRY_TRACE_STATE_CHILD_IGNORED, "1");
  }
  if (ignoredSegmentSpan) {
    traceState = traceState.set(SENTRY_TRACE_STATE_SEGMENT_IGNORED, "1");
  }
  if (decision == void 0) {
    return { decision: sdkTraceBase.SamplingDecision.NOT_RECORD, traceState };
  }
  if (decision === sdkTraceBase.SamplingDecision.NOT_RECORD) {
    return { decision, traceState: traceState.set(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING, "1") };
  }
  return { decision, traceState };
}
function getBaseTraceState(context, spanAttributes) {
  const parentSpan = api.trace.getSpan(context);
  const parentContext = parentSpan?.spanContext();
  let traceState = parentContext?.traceState || new core$1.TraceState();
  const url = spanAttributes[semanticConventions.SEMATTRS_HTTP_URL] || spanAttributes[semanticConventions.ATTR_URL_FULL];
  if (url && typeof url === "string") {
    traceState = traceState.set(SENTRY_TRACE_STATE_URL, url);
  }
  return traceState;
}
function getValidSpan(context) {
  const span = api.trace.getSpan(context);
  return span && api.isSpanContextValid(span.spanContext()) ? span : void 0;
}

class SentryResource {
  constructor(attributes) {
    this._attributes = attributes;
  }
  get attributes() {
    return this._attributes;
  }
  merge(other) {
    if (!other) {
      return this;
    }
    return new SentryResource({ ...this._attributes, ...other.attributes });
  }
  getRawAttributes() {
    return Object.entries(this._attributes);
  }
}
function parseOtelResourceAttributes(raw) {
  if (!raw) {
    return {};
  }
  const result = {};
  for (const pair of raw.split(",")) {
    const eq = pair.indexOf("=");
    if (eq === -1) {
      continue;
    }
    const key = pair.substring(0, eq).trim();
    const value = pair.substring(eq + 1).trim();
    if (key) {
      try {
        result[key] = decodeURIComponent(value);
      } catch {
        result[key] = value;
      }
    }
  }
  return result;
}
function getSentryResource(serviceNameFallback) {
  const env = typeof process !== "undefined" ? process.env : {};
  const otelServiceName = env.OTEL_SERVICE_NAME;
  const otelResourceAttrs = parseOtelResourceAttributes(env.OTEL_RESOURCE_ATTRIBUTES);
  return new SentryResource({
    // Lowest priority: Sentry defaults
    // eslint-disable-next-line deprecation/deprecation
    [semanticConventions.SEMRESATTRS_SERVICE_NAMESPACE]: "sentry",
    [semanticConventions.ATTR_SERVICE_NAME]: serviceNameFallback,
    // OTEL_RESOURCE_ATTRIBUTES overrides defaults (including service.name and service.namespace)
    ...otelResourceAttrs,
    // OTEL_SERVICE_NAME explicitly overrides service.name
    ...otelServiceName ? { [semanticConventions.ATTR_SERVICE_NAME]: otelServiceName } : {},
    // Highest priority: Sentry SDK telemetry attrs (cannot be overridden by env vars)
    [semanticConventions.ATTR_SERVICE_VERSION]: core.SDK_VERSION,
    [semanticConventions.ATTR_TELEMETRY_SDK_LANGUAGE]: core$1.SDK_INFO[semanticConventions.ATTR_TELEMETRY_SDK_LANGUAGE],
    [semanticConventions.ATTR_TELEMETRY_SDK_NAME]: core$1.SDK_INFO[semanticConventions.ATTR_TELEMETRY_SDK_NAME],
    [semanticConventions.ATTR_TELEMETRY_SDK_VERSION]: core$1.SDK_INFO[semanticConventions.ATTR_TELEMETRY_SDK_VERSION]
  });
}

exports.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION = SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION;
exports.SENTRY_SCOPES_CONTEXT_KEY = SENTRY_SCOPES_CONTEXT_KEY;
exports.SentryPropagator = SentryPropagator;
exports.SentrySampler = SentrySampler;
exports.SentrySpanProcessor = SentrySpanProcessor;
exports.buildContextWithSentryScopes = buildContextWithSentryScopes;
exports.continueTrace = continueTrace;
exports.enhanceDscWithOpenTelemetryRootSpanName = enhanceDscWithOpenTelemetryRootSpanName;
exports.getActiveSpan = getActiveSpan;
exports.getRequestSpanData = getRequestSpanData;
exports.getScopesFromContext = getScopesFromContext;
exports.getSentryResource = getSentryResource;
exports.getSpanKind = getSpanKind;
exports.getTraceContextForScope = getTraceContextForScope;
exports.isSentryRequestSpan = isSentryRequestSpan;
exports.openTelemetrySetupCheck = openTelemetrySetupCheck;
exports.setIsSetup = setIsSetup;
exports.setOpenTelemetryContextAsyncContextStrategy = setOpenTelemetryContextAsyncContextStrategy;
exports.setupEventContextTrace = setupEventContextTrace;
exports.spanHasAttributes = spanHasAttributes;
exports.spanHasEvents = spanHasEvents;
exports.spanHasKind = spanHasKind;
exports.spanHasName = spanHasName;
exports.spanHasParentId = spanHasParentId;
exports.spanHasStatus = spanHasStatus;
exports.startInactiveSpan = startInactiveSpan;
exports.startSpan = startSpan;
exports.startSpanManual = startSpanManual;
exports.suppressTracing = suppressTracing;
exports.withActiveSpan = withActiveSpan;
exports.wrapClientClass = wrapClientClass;
exports.wrapContextManagerClass = wrapContextManagerClass;
exports.wrapSamplingDecision = wrapSamplingDecision;
//# sourceMappingURL=resource-DAnCj0wW.js.map
