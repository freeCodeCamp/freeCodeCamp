import type { QueryResult, QueryArrayResult } from './pg-types';
import type * as api from '@opentelemetry/api';
import { InstrumentationConfig } from '@opentelemetry/instrumentation';
export interface PgResponseHookInformation {
    data: QueryResult | QueryArrayResult;
}
export interface PgInstrumentationExecutionResponseHook {
    (span: api.Span, responseInfo: PgResponseHookInformation): void;
}
export interface PgRequestHookInformation {
    query: {
        text: string;
        name?: string;
        values?: unknown[];
    };
    connection: {
        database?: string;
        host?: string;
        port?: number;
        user?: string;
    };
}
export interface PgInstrumentationExecutionRequestHook {
    (span: api.Span, queryInfo: PgRequestHookInformation): void;
}
export interface PgInstrumentationConfig extends InstrumentationConfig {
    /**
     * If true, an attribute containing the query's parameters will be attached
     * the spans generated to represent the query.
     */
    enhancedDatabaseReporting?: boolean;
    /**
     * Hook that allows adding custom span attributes or updating the
     * span's name based on the data about the query to execute.
     *
     * @default undefined
     */
    requestHook?: PgInstrumentationExecutionRequestHook;
    /**
     * Hook that allows adding custom span attributes based on the data
     * returned from "query" Pg actions.
     *
     * @default undefined
     */
    responseHook?: PgInstrumentationExecutionResponseHook;
    /**
     * If true, requires a parent span to create new spans.
     *
     * @default false
     */
    requireParentSpan?: boolean;
    /**
     * If true, queries are modified to also include a comment with
     * the tracing context, following the {@link https://github.com/open-telemetry/opentelemetry-sqlcommenter sqlcommenter} format
     */
    addSqlCommenterCommentToQueries?: boolean;
    /**
     * If true, `pg.connect` and `pg-pool.connect` spans will not be created.
     * Query spans and pool metrics are still recorded.
     *
     * @default false
     */
    ignoreConnectSpans?: boolean;
}
//# sourceMappingURL=types.d.ts.map