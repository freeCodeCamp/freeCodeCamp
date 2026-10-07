import type { TSESTree } from '@typescript-eslint/types';
import type { ScopeManager } from '../ScopeManager';
import type { Scope } from './Scope';
import { ScopeBase } from './ScopeBase';
import { ScopeType } from './ScopeType';
export declare class FunctionTypeScope extends ScopeBase<ScopeType.functionType, TSESTree.TSCallSignatureDeclaration | TSESTree.TSConstructorType | TSESTree.TSConstructSignatureDeclaration | TSESTree.TSFunctionType | TSESTree.TSMethodSignature, Scope> {
    constructor(scopeManager: ScopeManager, upperScope: FunctionTypeScope['upper'], block: FunctionTypeScope['block']);
}
