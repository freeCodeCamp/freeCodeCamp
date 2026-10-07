import type { TSESTree } from '@typescript-eslint/types';
import type { ScopeManager } from '../ScopeManager';
import type { Scope } from './Scope';
import { ScopeBase } from './ScopeBase';
import { ScopeType } from './ScopeType';
export declare class WithScope extends ScopeBase<ScopeType.with, TSESTree.WithStatement, Scope> {
    constructor(scopeManager: ScopeManager, upperScope: WithScope['upper'], block: WithScope['block']);
    close(scopeManager: ScopeManager): Scope | null;
}
