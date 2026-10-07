import type { TSESTree } from '@typescript-eslint/types';
import { DefinitionBase } from './DefinitionBase';
import { DefinitionType } from './DefinitionType';
export declare class FunctionNameDefinition extends DefinitionBase<DefinitionType.FunctionName, TSESTree.FunctionDeclaration | TSESTree.FunctionExpression | TSESTree.TSDeclareFunction | TSESTree.TSEmptyBodyFunctionExpression, null, TSESTree.Identifier> {
    readonly isTypeDefinition = false;
    readonly isVariableDefinition = true;
    constructor(name: TSESTree.Identifier, node: FunctionNameDefinition['node']);
}
