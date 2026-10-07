import type { InstrumentationConfig } from '@opentelemetry/instrumentation';
import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import type { Span } from '@sentry/core';
type PostgresConnectionContext = {
    ATTR_DB_NAMESPACE?: string;
    ATTR_SERVER_ADDRESS?: string;
    ATTR_SERVER_PORT?: string;
};
type PostgresJsInstrumentationConfig = InstrumentationConfig & {
    /**
     * Whether to require a parent span for the instrumentation.
     * If set to true, the instrumentation will only create spans if there is a parent span
     * available in the current scope.
     * @default true
     */
    requireParentSpan?: boolean;
    /**
     * Hook to modify the span before it is started.
     * This can be used to set additional attributes or modify the span in any way.
     */
    requestHook?: (span: Span, sanitizedSqlQuery: string, postgresConnectionContext?: PostgresConnectionContext) => void;
};
export declare const instrumentPostgresJs: ((options?: PostgresJsInstrumentationConfig | undefined) => PostgresJsInstrumentation) & {
    id: string;
};
/**
 * Instrumentation for the [postgres](https://www.npmjs.com/package/postgres) library.
 * This instrumentation captures postgresjs queries and their attributes.
 *
 * Uses internal Sentry patching patterns to support both CommonJS and ESM environments.
 */
export declare class PostgresJsInstrumentation extends InstrumentationBase<PostgresJsInstrumentationConfig> {
    constructor(config: PostgresJsInstrumentationConfig);
    /**
     * Initializes the instrumentation by patching the postgres module.
     * Uses two complementary approaches:
     * 1. Main function wrapper: instruments sql instances created AFTER instrumentation is set up (CJS + ESM)
     * 2. Query.prototype patch: fallback for sql instances created BEFORE instrumentation (CJS only)
     */
    init(): InstrumentationNodeModuleDefinition;
    /**
     * Patches the postgres module by wrapping the main export function.
     * This intercepts the creation of sql instances and instruments them.
     */
    private _patchPostgres;
    /**
     * Determines whether a span should be created based on the current context.
     * If `requireParentSpan` is set to true in the configuration, a span will
     * only be created if there is a parent span available.
     */
    private _shouldCreateSpans;
    /**
     * Extracts DB operation name from SQL query and sets it on the span.
     */
    private _setOperationName;
    /**
     * Reconstructs the full SQL query from template strings with PostgreSQL placeholders.
     *
     * For sql`SELECT * FROM users WHERE id = ${123} AND name = ${'foo'}`:
     *   strings = ["SELECT * FROM users WHERE id = ", " AND name = ", ""]
     *   returns: "SELECT * FROM users WHERE id = $1 AND name = $2"
     */
    private _reconstructQuery;
    /**
     * Sanitize SQL query as per the OTEL semantic conventions
     * https://opentelemetry.io/docs/specs/semconv/database/database-spans/#sanitization-of-dbquerytext
     *
     * PostgreSQL $n placeholders are preserved per OTEL spec - they're parameterized queries,
     * not sensitive literals. Only actual values (strings, numbers, booleans) are sanitized.
     */
    private _sanitizeSqlQuery;
    /**
     * Fallback patch for Query.prototype.handle to instrument queries from pre-existing sql instances.
     * This catches queries from sql instances created BEFORE Sentry was initialized (CJS only).
     *
     * Note: Queries from pre-existing instances won't have connection context (database, host, port)
     * because the sql instance wasn't created through our instrumented wrapper.
     */
    private _patchQueryPrototype;
    /**
     * Restores the original Query.prototype.handle method.
     */
    private _unpatchQueryPrototype;
}
/**
 * Adds Sentry tracing instrumentation for the [postgres](https://www.npmjs.com/package/postgres) library.
 *
 * For more information, see the [`postgresIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/postgres/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.postgresJsIntegration()],
 * });
 * ```
 */
export declare const postgresJsIntegration: (options?: PostgresJsInstrumentationConfig | undefined) => import("@sentry/core").Integration;
export {};
//# sourceMappingURL=postgresjs.d.ts.map