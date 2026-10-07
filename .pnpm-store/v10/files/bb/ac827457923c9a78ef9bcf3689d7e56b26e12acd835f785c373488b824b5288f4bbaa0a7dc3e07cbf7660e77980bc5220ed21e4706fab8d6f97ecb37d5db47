import { GraphQLSchema, FragmentDefinitionNode, GraphQLObjectType, SelectionSetNode, FieldNode, FragmentSpreadNode, InlineFragmentNode } from 'graphql';
export interface PatchFields {
    label: string | undefined;
    fields: Map<string, Array<FieldNode>>;
}
export interface FieldsAndPatches {
    fields: Map<string, Array<FieldNode>>;
    patches: Array<PatchFields>;
}
/**
 * Given a selectionSet, collects all of the fields and returns them.
 *
 * CollectFields requires the "runtime type" of an object. For a field that
 * returns an Interface or Union type, the "runtime type" will be the actual
 * object type returned by that field.
 *
 */
export declare function collectFields<TVariables = any>(schema: GraphQLSchema, fragments: Record<string, FragmentDefinitionNode>, variableValues: TVariables, runtimeType: GraphQLObjectType, selectionSet: SelectionSetNode): FieldsAndPatches;
/**
 * Determines if a field should be included based on the `@include` and `@skip`
 * directives, where `@skip` has higher precedence than `@include`.
 */
export declare function shouldIncludeNode(variableValues: any, node: FragmentSpreadNode | FieldNode | InlineFragmentNode): boolean;
/**
 * Determines if a fragment is applicable to the given type.
 */
export declare function doesFragmentConditionMatch(schema: GraphQLSchema, fragment: FragmentDefinitionNode | InlineFragmentNode, type: GraphQLObjectType): boolean;
/**
 * Implements the logic to compute the key of a given field's entry
 */
export declare function getFieldEntryKey(node: FieldNode): string;
/**
 * Returns an object containing the `@defer` arguments if a field should be
 * deferred based on the experimental flag, defer directive present and
 * not disabled by the "if" argument.
 */
export declare function getDeferValues(variableValues: any, node: FragmentSpreadNode | InlineFragmentNode): undefined | {
    label: string | undefined;
};
/**
 * Given an array of field nodes, collects all of the subfields of the passed
 * in fields, and returns them at the end.
 *
 * CollectSubFields requires the "return type" of an object. For a field that
 * returns an Interface or Union type, the "return type" will be the actual
 * object type returned by that field.
 *
 */
export declare const collectSubFields: (schema: GraphQLSchema, fragments: Record<string, FragmentDefinitionNode>, variableValues: {
    [variable: string]: unknown;
}, returnType: GraphQLObjectType, fieldNodes: Array<FieldNode>) => FieldsAndPatches;
