import { Span } from '../types/span';
type PostgresConnectionContext = {
    ATTR_DB_NAMESPACE?: string;
    ATTR_SERVER_ADDRESS?: string;
    ATTR_SERVER_PORT?: string;
};
interface PostgresJsSqlInstrumentationOptions {
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
}
/**
 * Instruments a postgres.js `sql` instance with Sentry tracing.
 *
 * This is a portable instrumentation function that works in any environment
 * (Node.js, Cloudflare Workers, etc.) without depending on OpenTelemetry.
 *
 * @example
 * ```javascript
 * import postgres from 'postgres';
 * import * as Sentry from '@sentry/cloudflare'; // or '@sentry/deno'
 *
 * const sql = Sentry.instrumentPostgresJsSql(
 *   postgres({ host: 'localhost', database: 'mydb' })
 * );
 *
 * // All queries now create Sentry spans
 * await sql`SELECT * FROM users WHERE id = ${userId}`;
 * ```
 */
export declare function instrumentPostgresJsSql<T>(sql: T, options?: PostgresJsSqlInstrumentationOptions): T;
/**
 * Reconstructs the full SQL query from template strings with PostgreSQL placeholders.
 *
 * For sql`SELECT * FROM users WHERE id = ${123} AND name = ${'foo'}`:
 *   strings = ["SELECT * FROM users WHERE id = ", " AND name = ", ""]
 *   returns: "SELECT * FROM users WHERE id = $1 AND name = $2"
 *
 * @internal Exported for testing only
 */
export declare function _reconstructQuery(strings: string[] | undefined): string | undefined;
/**
 * Sanitize SQL query as per the OTEL semantic conventions
 * https://opentelemetry.io/docs/specs/semconv/database/database-spans/#sanitization-of-dbquerytext
 *
 * PostgreSQL $n placeholders are preserved per OTEL spec - they're parameterized queries,
 * not sensitive literals. Only actual values (strings, numbers, booleans) are sanitized.
 *
 * @internal Exported for testing only
 */
export declare function _sanitizeSqlQuery(sqlQuery: string | undefined): string;
export {};
//# sourceMappingURL=postgresjs.d.ts.map
