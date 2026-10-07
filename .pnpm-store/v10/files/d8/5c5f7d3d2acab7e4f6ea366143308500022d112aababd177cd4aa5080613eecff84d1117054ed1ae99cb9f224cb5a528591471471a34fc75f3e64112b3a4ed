import { DirectiveDefinitionNode, SchemaDefinitionNode, SchemaExtensionNode } from 'graphql';
import { Config } from './merge-typedefs.cjs';
export declare const DEFAULT_OPERATION_TYPE_NAME_MAP: {
    readonly query: "Query";
    readonly mutation: "Mutation";
    readonly subscription: "Subscription";
};
export declare function mergeSchemaDefs(node: SchemaDefinitionNode | SchemaExtensionNode, existingNode: SchemaDefinitionNode | SchemaExtensionNode, config?: Config, directives?: Record<string, DirectiveDefinitionNode>): SchemaDefinitionNode | SchemaExtensionNode;
