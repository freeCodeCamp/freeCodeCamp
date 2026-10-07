import { Context, Span, SpanOptions } from '@opentelemetry/api';
export type SpanCallback<R> = (span?: Span, context?: Context) => R;
export interface ExtendedSpanOptions extends SpanOptions {
    /** The name of the span */
    name: string;
    internal?: boolean;
    /** Whether it propagates context (?=true) */
    active?: boolean;
    /** The context to append the span to */
    context?: Context;
}
export type EngineSpanId = string;
export type HrTime = [
    number,
    number
];
export type EngineSpanKind = 'client' | 'internal';
export type EngineSpan = {
    id: EngineSpanId;
    parentId: string | null;
    name: string;
    startTime: HrTime;
    endTime: HrTime;
    kind: EngineSpanKind;
    attributes?: Record<string, unknown>;
    links?: EngineSpanId[];
};
export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'query';
export interface EngineTraceEvent {
    spanId: EngineSpanId;
    target?: string;
    level: LogLevel;
    timestamp: HrTime;
    attributes: Record<string, unknown> & {
        message?: string;
        query?: string;
        duration_ms?: number;
        params?: string;
    };
}
export interface EngineTrace {
    spans: EngineSpan[];
    events: EngineTraceEvent[];
}
export interface TracingHelper {
    isEnabled(): boolean;
    getTraceParent(context?: Context): string;
    dispatchEngineSpans(spans: EngineSpan[]): void;
    getActiveContext(): Context | undefined;
    runInChildSpan<R>(nameOrOptions: string | ExtendedSpanOptions, callback: SpanCallback<R>): R;
}
export interface PrismaInstrumentationGlobalValue {
    helper?: TracingHelper;
}
//# sourceMappingURL=types.d.ts.map
