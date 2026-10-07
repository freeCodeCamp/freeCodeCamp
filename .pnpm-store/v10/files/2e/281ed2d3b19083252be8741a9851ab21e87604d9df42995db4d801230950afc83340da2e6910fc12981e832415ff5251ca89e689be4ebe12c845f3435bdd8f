import type { TSESTree } from '@typescript-eslint/types';
import type { ScopeManager } from '../ScopeManager';
import type { Scope } from './Scope';
import { ScopeBase } from './ScopeBase';
import { ScopeType } from './ScopeType';
export declare class TypeScope extends ScopeBase<ScopeType.type, TSESTree.TSInterfaceDeclaration | TSESTree.TSTypeAliasDeclaration, Scope> {
    constructor(scopeManager: ScopeManager, upperScope: TypeScope['upper'], block: TypeScope['block']);
}
