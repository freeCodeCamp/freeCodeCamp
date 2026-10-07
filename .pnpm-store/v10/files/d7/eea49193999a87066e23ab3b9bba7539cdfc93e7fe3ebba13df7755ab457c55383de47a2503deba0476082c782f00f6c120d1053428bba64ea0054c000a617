import { trace, context, SpanKind } from '@opentelemetry/api';

const showAllTraces = process.env.PRISMA_SHOW_ALL_TRACES === "true";
const nonSampledTraceParent = `00-10-10-00`;
function engineSpanKindToOtelSpanKind(engineSpanKind) {
  switch (engineSpanKind) {
    case "client":
      return SpanKind.CLIENT;
    case "internal":
    default:
      return SpanKind.INTERNAL;
  }
}
class ActiveTracingHelper {
  constructor({ tracerProvider, ignoreSpanTypes }) {
    this.tracerProvider = tracerProvider;
    this.ignoreSpanTypes = ignoreSpanTypes;
  }
  isEnabled() {
    return true;
  }
  getTraceParent(context$1) {
    const span = trace.getSpanContext(context$1 ?? context.active());
    if (span) {
      return `00-${span.traceId}-${span.spanId}-0${span.traceFlags}`;
    }
    return nonSampledTraceParent;
  }
  dispatchEngineSpans(spans) {
    const tracer = this.tracerProvider.getTracer("prisma");
    const linkIds = /* @__PURE__ */ new Map();
    const roots = spans.filter((span) => span.parentId === null);
    for (const root of roots) {
      dispatchEngineSpan(tracer, root, spans, linkIds, this.ignoreSpanTypes);
    }
  }
  getActiveContext() {
    return context.active();
  }
  runInChildSpan(options, callback) {
    if (typeof options === "string") {
      options = { name: options };
    }
    if (options.internal && !showAllTraces) {
      return callback();
    }
    const tracer = this.tracerProvider.getTracer("prisma");
    const context = options.context ?? this.getActiveContext();
    const name = `prisma:client:${options.name}`;
    if (shouldIgnoreSpan(name, this.ignoreSpanTypes)) {
      return callback();
    }
    if (options.active === false) {
      const span = tracer.startSpan(name, options, context);
      return endSpan(span, callback(span, context));
    }
    return tracer.startActiveSpan(name, options, (span) => endSpan(span, callback(span, context)));
  }
}
function dispatchEngineSpan(tracer, engineSpan, allSpans, linkIds, ignoreSpanTypes) {
  if (shouldIgnoreSpan(engineSpan.name, ignoreSpanTypes)) return;
  const spanOptions = {
    attributes: engineSpan.attributes,
    kind: engineSpanKindToOtelSpanKind(engineSpan.kind),
    startTime: engineSpan.startTime
  };
  tracer.startActiveSpan(engineSpan.name, spanOptions, (span) => {
    linkIds.set(engineSpan.id, span.spanContext().spanId);
    if (engineSpan.links) {
      span.addLinks(
        engineSpan.links.flatMap((link) => {
          const linkedId = linkIds.get(link);
          if (!linkedId) {
            return [];
          }
          return {
            context: {
              spanId: linkedId,
              traceId: span.spanContext().traceId,
              traceFlags: span.spanContext().traceFlags
            }
          };
        })
      );
    }
    const children = allSpans.filter((s) => s.parentId === engineSpan.id);
    for (const child of children) {
      dispatchEngineSpan(tracer, child, allSpans, linkIds, ignoreSpanTypes);
    }
    span.end(engineSpan.endTime);
  });
}
function endSpan(span, result) {
  if (isPromiseLike(result)) {
    return result.then(
      (value) => {
        span.end();
        return value;
      },
      (reason) => {
        span.end();
        throw reason;
      }
    );
  }
  span.end();
  return result;
}
function isPromiseLike(value) {
  return value != null && typeof value["then"] === "function";
}
function shouldIgnoreSpan(spanName, ignoreSpanTypes) {
  return ignoreSpanTypes.some((pattern) => typeof pattern === "string" ? pattern === spanName : pattern.test(spanName));
}

export { ActiveTracingHelper };
//# sourceMappingURL=active-tracing-helper.js.map
