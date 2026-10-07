import { MongoDBInstrumentation } from './vendored/instrumentation';
export declare const instrumentMongo: ((options?: unknown) => MongoDBInstrumentation) & {
    id: string;
};
/**
 * Replaces values in document with '?', hiding PII and helping grouping.
 */
export declare function _defaultDbStatementSerializer(commandObj: Record<string, unknown>): string;
/**
 * Adds Sentry tracing instrumentation for the [mongodb](https://www.npmjs.com/package/mongodb) library.
 *
 * For more information, see the [`mongoIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/mongo/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.mongoIntegration()],
 * });
 * ```
 */
export declare const mongoIntegration: () => import("@sentry/core").Integration;
//# sourceMappingURL=index.d.ts.map