import { DocumentNode, GraphQLFieldResolver, GraphQLObjectType, Location, Maybe } from './graphql-types';
import * as api from '@opentelemetry/api';
import { ObjectWithGraphQLData, OtelPatched } from './internal-types';
import { GraphQLInstrumentationParsedConfig } from './types';
export declare const isPromise: (value: any) => value is Promise<unknown>;
export declare function addInputVariableAttributes(span: api.Span, variableValues: {
    [key: string]: any;
}): void;
export declare function addSpanSource(span: api.Span, loc?: Location, allowValues?: boolean, start?: number, end?: number): void;
export declare function endSpan(span: api.Span, error?: Error): void;
export declare function getOperation(document: DocumentNode, operationName?: Maybe<string>): DefinitionNodeLike | undefined;
type DefinitionNodeLike = DocumentNode['definitions'][number];
export declare function getSourceFromLocation(loc?: Location, allowValues?: boolean, inputStart?: number, inputEnd?: number): string;
export declare function wrapFields(type: Maybe<GraphQLObjectType & OtelPatched>, tracer: api.Tracer, getConfig: () => GraphQLInstrumentationParsedConfig): void;
export declare function wrapFieldResolver<TSource = any, TContext = any, TArgs = any>(tracer: api.Tracer, getConfig: () => GraphQLInstrumentationParsedConfig, fieldResolver: Maybe<GraphQLFieldResolver<TSource, TContext, TArgs> & OtelPatched>, isDefaultResolver?: boolean): GraphQLFieldResolver<TSource, TContext & ObjectWithGraphQLData, TArgs> & OtelPatched;
export {};
//# sourceMappingURL=utils.d.ts.map
