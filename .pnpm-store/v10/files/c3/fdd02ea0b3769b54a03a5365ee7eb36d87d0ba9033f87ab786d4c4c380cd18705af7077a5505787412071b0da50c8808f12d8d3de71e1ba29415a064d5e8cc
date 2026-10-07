import type { TSESTree } from '@typescript-eslint/types';
import { DefinitionBase } from './DefinitionBase';
import { DefinitionType } from './DefinitionType';
export declare class ClassNameDefinition extends DefinitionBase<DefinitionType.ClassName, TSESTree.ClassDeclaration | TSESTree.ClassExpression, null, TSESTree.Identifier> {
    readonly isTypeDefinition = true;
    readonly isVariableDefinition = true;
    constructor(name: TSESTree.Identifier, node: ClassNameDefinition['node']);
}
