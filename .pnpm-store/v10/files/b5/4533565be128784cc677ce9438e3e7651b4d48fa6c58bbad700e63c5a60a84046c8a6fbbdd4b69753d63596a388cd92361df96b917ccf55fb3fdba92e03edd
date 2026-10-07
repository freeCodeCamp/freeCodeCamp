Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const instrumentation = require('./vendored/instrumentation.js');

const INTEGRATION_NAME = "Prisma";
function isPrismaV6TracingHelper(helper) {
  return !!helper && typeof helper === "object" && "dispatchEngineSpans" in helper;
}
function getPrismaTracingHelper() {
  const prismaInstrumentationObject = globalThis.PRISMA_INSTRUMENTATION;
  const prismaTracingHelper = prismaInstrumentationObject && typeof prismaInstrumentationObject === "object" && "helper" in prismaInstrumentationObject ? prismaInstrumentationObject.helper : void 0;
  return prismaTracingHelper;
}
class SentryPrismaInteropInstrumentation extends instrumentation.PrismaInstrumentation {
  constructor(options) {
    super(options?.instrumentationConfig);
  }
  enable() {
    super.enable();
    const prismaTracingHelper = getPrismaTracingHelper();
    if (isPrismaV6TracingHelper(prismaTracingHelper)) {
      prismaTracingHelper.createEngineSpan = (engineSpanEvent) => {
        const tracer = api.trace.getTracer("prismaV5Compatibility");
        const initialIdGenerator = tracer._idGenerator;
        if (!initialIdGenerator) {
          core.consoleSandbox(() => {
            console.warn(
              "[Sentry] Could not find _idGenerator on tracer, skipping Prisma v5 compatibility - some Prisma spans may be missing!"
            );
          });
          return;
        }
        try {
          engineSpanEvent.spans.forEach((engineSpan) => {
            const kind = engineSpanKindToOTELSpanKind(engineSpan.kind);
            const parentSpanId = engineSpan.parent_span_id;
            const spanId = engineSpan.span_id;
            const traceId = engineSpan.trace_id;
            const links = engineSpan.links?.map((link) => {
              return {
                context: {
                  traceId: link.trace_id,
                  spanId: link.span_id,
                  traceFlags: api.TraceFlags.SAMPLED
                }
              };
            });
            const ctx = api.trace.setSpanContext(api.context.active(), {
              traceId,
              spanId: parentSpanId,
              traceFlags: api.TraceFlags.SAMPLED
            });
            api.context.with(ctx, () => {
              const temporaryIdGenerator = {
                generateTraceId: () => {
                  return traceId;
                },
                generateSpanId: () => {
                  return spanId;
                }
              };
              tracer._idGenerator = temporaryIdGenerator;
              const span = tracer.startSpan(engineSpan.name, {
                kind,
                links,
                startTime: engineSpan.start_time,
                attributes: engineSpan.attributes
              });
              span.end(engineSpan.end_time);
              tracer._idGenerator = initialIdGenerator;
            });
          });
        } finally {
          tracer._idGenerator = initialIdGenerator;
        }
      };
    }
  }
}
function engineSpanKindToOTELSpanKind(engineSpanKind) {
  switch (engineSpanKind) {
    case "client":
      return api.SpanKind.CLIENT;
    case "internal":
    default:
      return api.SpanKind.INTERNAL;
  }
}
const instrumentPrisma = nodeCore.generateInstrumentOnce(INTEGRATION_NAME, (options) => {
  return new SentryPrismaInteropInstrumentation(options);
});
const prismaIntegration = core.defineIntegration((options) => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentPrisma(options);
    },
    setup(client) {
      if (!getPrismaTracingHelper()) {
        return;
      }
      client.on("spanStart", (span) => {
        const spanJSON = core.spanToJSON(span);
        if (spanJSON.description?.startsWith("prisma:")) {
          span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.db.otel.prisma");
        }
        if ((spanJSON.description === "prisma:engine:db_query" || spanJSON.description === "prisma:client:db_query") && spanJSON.data["db.query.text"]) {
          span.updateName(spanJSON.data["db.query.text"]);
        }
        if (spanJSON.description === "prisma:engine:db_query" && !spanJSON.data["db.system"]) {
          span.setAttribute("db.system", "prisma");
        }
      });
    }
  };
});

exports.instrumentPrisma = instrumentPrisma;
exports.prismaIntegration = prismaIntegration;
//# sourceMappingURL=index.js.map
