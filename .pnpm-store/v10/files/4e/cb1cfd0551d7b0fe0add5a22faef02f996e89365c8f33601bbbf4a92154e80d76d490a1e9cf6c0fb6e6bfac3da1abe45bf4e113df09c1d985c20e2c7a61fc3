import type { TSESTree } from '@typescript-eslint/types';
import type { Reference } from '../referencer/Reference';
import type { ScopeManager } from '../ScopeManager';
import type { Variable } from '../variable';
import type { Scope } from './Scope';
import { ScopeBase } from './ScopeBase';
import { ScopeType } from './ScopeType';
export declare class FunctionScope extends ScopeBase<ScopeType.function, TSESTree.ArrowFunctionExpression | TSESTree.FunctionDeclaration | TSESTree.FunctionExpression | TSESTree.Program | TSESTree.TSDeclareFunction | TSESTree.TSEmptyBodyFunctionExpression, Scope> {
    constructor(scopeManager: ScopeManager, upperScope: FunctionScope['upper'], block: FunctionScope['block'], isMethodDefinition: boolean);
    protected isValidResolution(ref: Reference, variable: Variable): boolean;
}
