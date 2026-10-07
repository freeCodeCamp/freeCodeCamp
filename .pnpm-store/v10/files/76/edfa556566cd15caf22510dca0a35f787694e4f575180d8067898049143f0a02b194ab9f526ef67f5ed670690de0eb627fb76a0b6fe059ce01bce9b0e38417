import type { TSESTree } from '@typescript-eslint/types';
import { DefinitionBase } from './DefinitionBase';
import { DefinitionType } from './DefinitionType';
export declare class VariableDefinition extends DefinitionBase<DefinitionType.Variable, TSESTree.VariableDeclarator, TSESTree.VariableDeclaration, TSESTree.Identifier> {
    readonly isTypeDefinition = false;
    readonly isVariableDefinition = true;
    constructor(name: TSESTree.Identifier, node: VariableDefinition['node'], decl: TSESTree.VariableDeclaration);
}
