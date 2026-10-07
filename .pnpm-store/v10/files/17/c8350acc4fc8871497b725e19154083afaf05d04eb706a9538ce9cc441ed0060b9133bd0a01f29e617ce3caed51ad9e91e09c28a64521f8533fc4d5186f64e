import type { TSESTree } from '@typescript-eslint/types';
import type { ScopeManager } from '../ScopeManager';
import type { Scope } from './Scope';
import { ScopeBase } from './ScopeBase';
import { ScopeType } from './ScopeType';
export declare class FunctionExpressionNameScope extends ScopeBase<ScopeType.functionExpressionName, TSESTree.FunctionExpression, Scope> {
    readonly functionExpressionScope: true;
    constructor(scopeManager: ScopeManager, upperScope: FunctionExpressionNameScope['upper'], block: FunctionExpressionNameScope['block']);
}
