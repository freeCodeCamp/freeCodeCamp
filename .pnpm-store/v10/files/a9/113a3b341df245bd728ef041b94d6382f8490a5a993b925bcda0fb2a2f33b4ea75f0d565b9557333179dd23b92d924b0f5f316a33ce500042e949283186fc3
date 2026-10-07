import { isSpanContextValid, wrapSpanContext } from '../trace/spancontext-utils';
import type { Tracer } from '../trace/tracer';
import type { TracerProvider } from '../trace/tracer_provider';
import { deleteSpan, getActiveSpan, getSpan, getSpanContext, setSpan, setSpanContext } from '../trace/context-utils';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 *
 * @since 1.0.0
 */
export declare class TraceAPI {
    private static _instance?;
    private _proxyTracerProvider;
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    private constructor();
    /** Get the singleton instance of the Trace API */
    static getInstance(): TraceAPI;
    /**
     * Set the current global tracer.
     *
     * @returns true if the tracer provider was successfully registered, else false
     */
    setGlobalTracerProvider(provider: TracerProvider): boolean;
    /**
     * Returns the global tracer provider.
     */
    getTracerProvider(): TracerProvider;
    /**
     * Returns a tracer from the global tracer provider.
     */
    getTracer(name: string, version?: string): Tracer;
    /** Remove the global tracer provider */
    disable(): void;
    wrapSpanContext: typeof wrapSpanContext;
    isSpanContextValid: typeof isSpanContextValid;
    deleteSpan: typeof deleteSpan;
    getSpan: typeof getSpan;
    getActiveSpan: typeof getActiveSpan;
    getSpanContext: typeof getSpanContext;
    setSpan: typeof setSpan;
    setSpanContext: typeof setSpanContext;
}
//# sourceMappingURL=trace.d.ts.map