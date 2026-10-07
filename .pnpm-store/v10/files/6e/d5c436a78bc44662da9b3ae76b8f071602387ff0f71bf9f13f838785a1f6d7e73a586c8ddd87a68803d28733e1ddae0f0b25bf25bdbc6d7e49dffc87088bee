import { GraphQLInstrumentation } from './vendored/instrumentation';
interface GraphqlOptions {
    /**
     * Do not create spans for resolvers.
     *
     * Defaults to true.
     */
    ignoreResolveSpans?: boolean;
    /**
     * Don't create spans for the execution of the default resolver on object properties.
     *
     * When a resolver function is not defined on the schema for a field, graphql will
     * use the default resolver which just looks for a property with that name on the object.
     * If the property is not a function, it's not very interesting to trace.
     * This option can reduce noise and number of spans created.
     *
     * Defaults to true.
     */
    ignoreTrivialResolveSpans?: boolean;
    /**
     * If this is enabled, a http.server root span containing this span will automatically be renamed to include the operation name.
     * Set this to `false` if you do not want this behavior, and want to keep the default http.server span name.
     *
     * Defaults to true.
     */
    useOperationNameForRootSpan?: boolean;
}
export declare const instrumentGraphql: ((options: GraphqlOptions) => GraphQLInstrumentation) & {
    id: string;
};
/**
 * Adds Sentry tracing instrumentation for the [graphql](https://www.npmjs.com/package/graphql) library.
 *
 * For more information, see the [`graphqlIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/graphql/).
 *
 * @param {GraphqlOptions} options Configuration options for the GraphQL integration.
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.graphqlIntegration()],
 * });
 */
export declare const graphqlIntegration: (options?: GraphqlOptions | undefined) => import("@sentry/core").Integration;
export {};
//# sourceMappingURL=index.d.ts.map
