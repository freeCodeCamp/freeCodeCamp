import type { TSESTree } from '@typescript-eslint/types';
import type { ScopeManager } from '../ScopeManager';
import type { Scope } from './Scope';
import { ScopeBase } from './ScopeBase';
import { ScopeType } from './ScopeType';
export declare class BlockScope extends ScopeBase<ScopeType.block, TSESTree.BlockStatement, Scope> {
    constructor(scopeManager: ScopeManager, upperScope: BlockScope['upper'], block: BlockScope['block']);
}
