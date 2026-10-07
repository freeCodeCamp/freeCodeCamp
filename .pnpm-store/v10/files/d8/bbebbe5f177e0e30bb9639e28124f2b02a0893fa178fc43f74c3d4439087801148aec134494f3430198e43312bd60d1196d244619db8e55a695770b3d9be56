import { Config } from './merge-typedefs.js';
import { DefinitionNode, DirectiveDefinitionNode, SchemaDefinitionNode, SchemaExtensionNode } from 'graphql';
import { NamedDefinitionNode } from '@graphql-tools/utils';
export declare const schemaDefSymbol = "SCHEMA_DEF_SYMBOL";
export type MergedResultMap = Record<string, NamedDefinitionNode> & {
    [schemaDefSymbol]: SchemaDefinitionNode | SchemaExtensionNode;
};
export declare function isNamedDefinitionNode(definitionNode: DefinitionNode): definitionNode is NamedDefinitionNode;
export declare function mergeGraphQLNodes(nodes: ReadonlyArray<DefinitionNode>, config?: Config, directives?: Record<string, DirectiveDefinitionNode>): MergedResultMap;
