import { GraphQLSchema, FragmentDefinitionNode, GraphQLObjectType, SelectionSetNode, FieldNode } from 'graphql';
export declare function collectFields(schema: GraphQLSchema, fragments: Record<string, FragmentDefinitionNode>, variableValues: {
    [variable: string]: unknown;
}, runtimeType: GraphQLObjectType, selectionSet: SelectionSetNode, fields?: Map<string, Array<FieldNode>>, visitedFragmentNames?: Set<string>): Map<string, Array<FieldNode>>;
export declare const collectSubFields: (schema: GraphQLSchema, fragments: Record<string, FragmentDefinitionNode>, variableValues: Record<string, any>, type: GraphQLObjectType, fieldNodes: Array<FieldNode>) => Map<string, Array<FieldNode>>;
