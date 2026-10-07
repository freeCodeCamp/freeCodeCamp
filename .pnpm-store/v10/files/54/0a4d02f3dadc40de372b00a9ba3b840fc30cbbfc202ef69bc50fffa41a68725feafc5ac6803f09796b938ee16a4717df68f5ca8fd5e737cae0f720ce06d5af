import { PgInstrumentation } from './vendored/instrumentation';
interface PostgresIntegrationOptions {
    ignoreConnectSpans?: boolean;
}
export declare const instrumentPostgres: ((options: PostgresIntegrationOptions | undefined) => PgInstrumentation) & {
    id: string;
};
/**
 * Adds Sentry tracing instrumentation for the [pg](https://www.npmjs.com/package/pg) library.
 *
 * For more information, see the [`postgresIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/postgres/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.postgresIntegration()],
 * });
 * ```
 */
export declare const postgresIntegration: (options?: PostgresIntegrationOptions | undefined) => import("@sentry/core").Integration;
export {};
//# sourceMappingURL=index.d.ts.map