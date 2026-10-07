import type { TSESTree } from '@typescript-eslint/types';
import { DefinitionBase } from './DefinitionBase';
import { DefinitionType } from './DefinitionType';
export declare class TypeDefinition extends DefinitionBase<DefinitionType.Type, TSESTree.TSInterfaceDeclaration | TSESTree.TSMappedType | TSESTree.TSTypeAliasDeclaration | TSESTree.TSTypeParameter, null, TSESTree.Identifier> {
    readonly isTypeDefinition = true;
    readonly isVariableDefinition = false;
    constructor(name: TSESTree.Identifier, node: TypeDefinition['node']);
}
