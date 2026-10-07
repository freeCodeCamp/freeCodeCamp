import type { Context, Span, SpanOptions } from '@opentelemetry/api';
type V5SpanCallback<R> = (span?: Span, context?: Context) => R;
type V5ExtendedSpanOptions = SpanOptions & {
    name: string;
    internal?: boolean;
    middleware?: boolean;
    active?: boolean;
    context?: Context;
};
type EngineSpanEvent = {
    span: boolean;
    spans: V5EngineSpan[];
};
type V5EngineSpanKind = 'client' | 'internal';
type V5EngineSpan = {
    span: boolean;
    name: string;
    trace_id: string;
    span_id: string;
    parent_span_id: string;
    start_time: [number, number];
    end_time: [number, number];
    attributes?: Record<string, string>;
    links?: {
        trace_id: string;
        span_id: string;
    }[];
    kind: V5EngineSpanKind;
};
export interface PrismaV5TracingHelper {
    isEnabled(): boolean;
    getTraceParent(context?: Context): string;
    createEngineSpan(engineSpanEvent: EngineSpanEvent): void;
    getActiveContext(): Context | undefined;
    runInChildSpan<R>(nameOrOptions: string | V5ExtendedSpanOptions, callback: V5SpanCallback<R>): R;
}
export {};
//# sourceMappingURL=v5-tracing-helper.d.ts.map