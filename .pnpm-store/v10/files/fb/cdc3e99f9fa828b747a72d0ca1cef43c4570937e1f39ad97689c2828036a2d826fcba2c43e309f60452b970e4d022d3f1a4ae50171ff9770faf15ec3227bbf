import type * as api from '@opentelemetry/api';
import type { DocumentNode, ExecutionArgs, ExecutionResult, GraphQLError, GraphQLFieldResolver, GraphQLSchema, GraphQLTypeResolver, Maybe, ParseOptions, PromiseOrValue, Source, TypeInfo, ValidationRule } from './graphql-types';
import { OTEL_GRAPHQL_DATA_SYMBOL, OTEL_PATCHED_SYMBOL } from './symbols';
export type { Maybe } from './graphql-types';
export declare const OPERATION_NOT_SUPPORTED: string;
export type executeFunctionWithObj = (args: ExecutionArgs) => PromiseOrValue<ExecutionResult>;
export type executeArgumentsArray = [
    GraphQLSchema,
    DocumentNode,
    any,
    any,
    Maybe<{
        [key: string]: any;
    }>,
    Maybe<string>,
    Maybe<GraphQLFieldResolver<any, any>>,
    Maybe<GraphQLTypeResolver<any, any>>
];
export type executeFunctionWithArgs = (schema: GraphQLSchema, document: DocumentNode, rootValue?: any, contextValue?: any, variableValues?: Maybe<{
    [key: string]: any;
}>, operationName?: Maybe<string>, fieldResolver?: Maybe<GraphQLFieldResolver<any, any>>, typeResolver?: Maybe<GraphQLTypeResolver<any, any>>) => PromiseOrValue<ExecutionResult>;
export interface OtelExecutionArgs {
    schema: GraphQLSchema;
    document: DocumentNode & ObjectWithGraphQLData;
    rootValue?: any;
    contextValue?: any & ObjectWithGraphQLData;
    variableValues?: Maybe<{
        [key: string]: any;
    }>;
    operationName?: Maybe<string>;
    fieldResolver?: Maybe<GraphQLFieldResolver<any, any> & OtelPatched>;
    typeResolver?: Maybe<GraphQLTypeResolver<any, any>>;
}
export type executeType = executeFunctionWithObj | executeFunctionWithArgs;
export type parseType = (source: string | Source, options?: ParseOptions) => DocumentNode;
export type validateType = (schema: GraphQLSchema, documentAST: DocumentNode, rules?: ReadonlyArray<ValidationRule>, options?: {
    maxErrors?: number;
}, typeInfo?: TypeInfo) => ReadonlyArray<GraphQLError>;
export interface GraphQLField {
    span: api.Span;
}
interface OtelGraphQLData {
    source?: any;
    span: api.Span;
    fields: {
        [key: string]: GraphQLField;
    };
}
export interface ObjectWithGraphQLData {
    [OTEL_GRAPHQL_DATA_SYMBOL]?: OtelGraphQLData;
}
export interface OtelPatched {
    [OTEL_PATCHED_SYMBOL]?: boolean;
}
export interface GraphQLPath {
    prev: GraphQLPath | undefined;
    key: string | number;
    /**
     * optional as it didn't exist yet in ver 14
     */
    typename?: string | undefined;
}
//# sourceMappingURL=internal-types.d.ts.map