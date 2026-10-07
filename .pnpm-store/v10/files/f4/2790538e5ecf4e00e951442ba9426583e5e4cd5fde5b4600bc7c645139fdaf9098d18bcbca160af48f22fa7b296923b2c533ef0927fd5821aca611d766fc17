import { GraphQLSchema, GraphQLNamedType, GraphQLField, GraphQLInputField, GraphQLFieldConfig, GraphQLInputFieldConfig, GraphQLSchemaConfig, GraphQLObjectTypeConfig, GraphQLInterfaceTypeConfig, GraphQLUnionTypeConfig, GraphQLScalarTypeConfig, GraphQLEnumTypeConfig, GraphQLInputObjectTypeConfig, GraphQLEnumValue, GraphQLEnumValueConfig } from 'graphql';
export interface DirectiveAnnotation {
    name: string;
    args?: Record<string, any>;
}
declare type DirectableGraphQLObject = GraphQLSchema | GraphQLSchemaConfig | GraphQLNamedType | GraphQLObjectTypeConfig<any, any> | GraphQLInterfaceTypeConfig<any, any> | GraphQLUnionTypeConfig<any, any> | GraphQLScalarTypeConfig<any, any> | GraphQLEnumTypeConfig | GraphQLEnumValue | GraphQLEnumValueConfig | GraphQLInputObjectTypeConfig | GraphQLField<any, any> | GraphQLInputField | GraphQLFieldConfig<any, any> | GraphQLInputFieldConfig;
export declare function getDirectivesInExtensions(node: DirectableGraphQLObject, pathToDirectivesInExtensions?: string[]): Array<DirectiveAnnotation>;
export declare function getDirectiveInExtensions(node: DirectableGraphQLObject, directiveName: string, pathToDirectivesInExtensions?: string[]): Array<Record<string, any>> | undefined;
export declare function getDirectives(schema: GraphQLSchema, node: DirectableGraphQLObject, pathToDirectivesInExtensions?: string[]): Array<DirectiveAnnotation>;
export declare function getDirective(schema: GraphQLSchema, node: DirectableGraphQLObject, directiveName: string, pathToDirectivesInExtensions?: string[]): Array<Record<string, any>> | undefined;
export {};
