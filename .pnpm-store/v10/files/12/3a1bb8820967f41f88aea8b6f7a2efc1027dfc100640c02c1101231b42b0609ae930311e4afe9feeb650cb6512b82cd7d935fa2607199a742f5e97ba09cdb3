import type { TSESTree } from '@typescript-eslint/types';
import type { ScopeManager } from '../ScopeManager';
import type { ImplicitLibVariableOptions } from '../variable';
import type { Scope } from './Scope';
import { ScopeBase } from './ScopeBase';
import { ScopeType } from './ScopeType';
export declare class GlobalScope extends ScopeBase<ScopeType.global, TSESTree.Program, 
/**
 * The global scope has no parent.
 */
null> {
    private readonly implicit;
    constructor(scopeManager: ScopeManager, block: GlobalScope['block']);
    addVariables(names: string[]): void;
    close(scopeManager: ScopeManager): Scope | null;
    defineImplicitVariable(name: string, options: ImplicitLibVariableOptions): void;
}
