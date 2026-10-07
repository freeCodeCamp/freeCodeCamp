import { InstrumentationConfig } from '@opentelemetry/instrumentation';
export interface TediousInstrumentationConfig extends InstrumentationConfig {
    /**
     * If true, injects the current DB span's W3C traceparent into SQL Server
     * session state via `SET CONTEXT_INFO @opentelemetry_traceparent` (varbinary).
     * Off by default to avoid the extra round-trip per request.
     */
    enableTraceContextPropagation?: boolean;
}
//# sourceMappingURL=types.d.ts.map