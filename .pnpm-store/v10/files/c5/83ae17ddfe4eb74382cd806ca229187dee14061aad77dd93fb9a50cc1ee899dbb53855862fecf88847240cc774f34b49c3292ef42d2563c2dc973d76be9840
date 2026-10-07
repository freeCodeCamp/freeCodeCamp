import { Context, TracerProvider } from '@opentelemetry/api';
import type { EngineSpan, ExtendedSpanOptions, SpanCallback, TracingHelper } from './types';
type Options = {
    tracerProvider: TracerProvider;
    ignoreSpanTypes: (string | RegExp)[];
};
export declare class ActiveTracingHelper implements TracingHelper {
    private tracerProvider;
    private ignoreSpanTypes;
    constructor({ tracerProvider, ignoreSpanTypes }: Options);
    isEnabled(): boolean;
    getTraceParent(context?: Context | undefined): string;
    dispatchEngineSpans(spans: EngineSpan[]): void;
    getActiveContext(): Context | undefined;
    runInChildSpan<R>(options: string | ExtendedSpanOptions, callback: SpanCallback<R>): R;
}
export {};
//# sourceMappingURL=active-tracing-helper.d.ts.map