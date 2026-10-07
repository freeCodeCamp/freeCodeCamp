import { Config } from './merge-typedefs.js';
import { FieldDefinitionNode, InputValueDefinitionNode, NameNode, DirectiveDefinitionNode } from 'graphql';
type FieldDefNode = FieldDefinitionNode | InputValueDefinitionNode;
type NamedDefNode = {
    name: NameNode;
};
export type OnFieldTypeConflict = (existingField: FieldDefNode, otherField: FieldDefNode, type: NamedDefNode, ignoreNullability: boolean | undefined) => FieldDefNode;
export declare function mergeFields<T extends FieldDefNode>(type: {
    name: NameNode;
}, f1: ReadonlyArray<T> | undefined, f2: ReadonlyArray<T> | undefined, config?: Config, directives?: Record<string, DirectiveDefinitionNode>): T[];
export {};
