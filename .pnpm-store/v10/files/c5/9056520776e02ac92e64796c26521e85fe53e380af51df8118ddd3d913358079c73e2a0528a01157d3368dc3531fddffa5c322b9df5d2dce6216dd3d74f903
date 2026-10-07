import { InstrumentationConfig } from '@opentelemetry/instrumentation';
import type * as api from '@opentelemetry/api';
export interface GraphQLInstrumentationExecutionResponseHook {
    (span: api.Span, data: any): void;
}
export interface GraphQLInstrumentationConfig extends InstrumentationConfig {
    /**
     * When set to true it will not remove attributes values from schema source.
     * By default all values that can be sensitive are removed and replaced
     * with "*"
     *
     * @default false
     */
    allowValues?: boolean;
    /**
     * The maximum depth of fields/resolvers to instrument.
     * When set to 0 it will not instrument fields and resolvers
     *
     * @default undefined
     */
    depth?: number;
    /**
     * Do not create spans for resolvers.
     *
     * @default false
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
     * @default false
     */
    ignoreTrivialResolveSpans?: boolean;
    /**
     * Place all resolve spans under the same parent instead of producing a nested tree structure.
     *
     * @default false
     */
    flatResolveSpans?: boolean;
    /**
     * Whether to merge list items into a single element.
     *
     * @example `users.*.name` instead of `users.0.name`, `users.1.name`
     *
     * @default false
     */
    mergeItems?: boolean;
    /**
     * Hook that allows adding custom span attributes based on the data
     * returned from "execute" GraphQL action.
     *
     * @param data - A GraphQL `ExecutionResult` object. For the exact type definitions, see the following:
     *  - {@linkcode https://github.com/graphql/graphql-js/blob/v14.7.0/src/execution/execute.js#L115 graphql@14}
     *  - {@linkcode https://github.com/graphql/graphql-js/blob/15.x.x/src/execution/execute.d.ts#L31 graphql@15}
     *  - {@linkcode https://github.com/graphql/graphql-js/blob/16.x.x/src/execution/execute.ts#L127 graphql@16}
     *
     * @default undefined
     */
    responseHook?: GraphQLInstrumentationExecutionResponseHook;
}
type RequireSpecificKeys<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
export type GraphQLInstrumentationParsedConfig = RequireSpecificKeys<GraphQLInstrumentationConfig, 'mergeItems' | 'depth' | 'allowValues' | 'ignoreResolveSpans'>;
export {};
//# sourceMappingURL=types.d.ts.map