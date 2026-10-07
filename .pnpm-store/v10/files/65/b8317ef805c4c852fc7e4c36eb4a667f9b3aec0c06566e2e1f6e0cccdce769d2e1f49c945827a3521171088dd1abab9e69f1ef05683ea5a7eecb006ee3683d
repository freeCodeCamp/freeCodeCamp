export type PromiseOrValue<T> = T | Promise<T>;
export type Maybe<T> = null | undefined | T;
export interface Location {
    start: number;
    end: number;
    startToken: Token;
    source: Source;
    [key: string]: any;
}
export interface Token {
    kind: string;
    start: number;
    end: number;
    line: number;
    column: number;
    value: string;
    prev: Token | null;
    next: Token | null;
    [key: string]: any;
}
export interface Source {
    body: string;
    name: string;
    locationOffset: Location;
    [key: string]: any;
}
export interface DocumentNode {
    kind: string;
    definitions: ReadonlyArray<DefinitionNode>;
    loc?: Location;
    [key: string]: any;
}
export interface DefinitionNode {
    kind: string;
    loc?: Location;
    [key: string]: any;
}
export interface OperationDefinitionNode extends DefinitionNode {
    operation: string;
    name?: {
        kind: string;
        value: string;
        loc?: Location;
    };
    [key: string]: any;
}
export interface ParseOptions {
    noLocation?: boolean;
    [key: string]: any;
}
export interface ExecutionArgs {
    schema: GraphQLSchema;
    document: DocumentNode;
    rootValue?: any;
    contextValue?: any;
    variableValues?: Maybe<{
        [key: string]: any;
    }>;
    operationName?: Maybe<string>;
    fieldResolver?: Maybe<GraphQLFieldResolver<any, any>>;
    typeResolver?: Maybe<GraphQLTypeResolver<any, any>>;
    [key: string]: any;
}
export interface ExecutionResult {
    errors?: ReadonlyArray<GraphQLError>;
    data?: Record<string, any> | null;
    [key: string]: any;
}
export interface GraphQLError {
    message: string;
    locations?: ReadonlyArray<{
        line: number;
        column: number;
    }>;
    path?: ReadonlyArray<string | number>;
    [key: string]: any;
}
export interface GraphQLSchema {
    getQueryType(): GraphQLObjectType | undefined | null;
    getMutationType(): GraphQLObjectType | undefined | null;
    [key: string]: any;
}
export interface GraphQLObjectType {
    name: string;
    getFields(): {
        [key: string]: GraphQLField;
    };
    [key: string]: any;
}
export interface GraphQLField {
    name: string;
    type: GraphQLOutputType;
    resolve?: GraphQLFieldResolver<any, any>;
    [key: string]: any;
}
export type GraphQLOutputType = GraphQLNamedOutputType | GraphQLWrappingType;
interface GraphQLNamedOutputType {
    name: string;
    [key: string]: any;
}
interface GraphQLWrappingType {
    ofType: GraphQLOutputType;
    [key: string]: any;
}
export interface GraphQLUnionType {
    name: string;
    getTypes(): ReadonlyArray<GraphQLObjectType>;
    [key: string]: any;
}
export type GraphQLType = GraphQLOutputType | GraphQLUnionType;
export type GraphQLFieldResolver<TSource, TContext, TArgs = any> = (source: TSource, args: TArgs, context: TContext, info: GraphQLResolveInfo) => any;
export type GraphQLTypeResolver<TSource, TContext> = (value: TSource, context: TContext, info: GraphQLResolveInfo, abstractType: any) => any;
export interface GraphQLResolveInfo {
    fieldName: string;
    fieldNodes: ReadonlyArray<{
        kind: string;
        loc?: Location;
        [key: string]: any;
    }>;
    returnType: {
        toString(): string;
        [key: string]: any;
    };
    parentType: {
        name: string;
        [key: string]: any;
    };
    path: any;
    [key: string]: any;
}
export type ValidationRule = any;
export interface TypeInfo {
    [key: string]: any;
}
export {};
//# sourceMappingURL=graphql-types.d.ts.map
