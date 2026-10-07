import type { TSESTree } from '@typescript-eslint/types';
import type { Scope } from './scope';
import { BlockScope, CatchScope, ClassScope, ConditionalTypeScope, ForScope, FunctionExpressionNameScope, FunctionScope, FunctionTypeScope, GlobalScope, MappedTypeScope, ModuleScope, SwitchScope, TSEnumScope, TSModuleScope, TypeScope, WithScope } from './scope';
import { ClassFieldInitializerScope } from './scope/ClassFieldInitializerScope';
import { ClassStaticBlockScope } from './scope/ClassStaticBlockScope';
import type { Variable } from './variable';
interface ScopeManagerOptions {
    globalReturn?: boolean;
    sourceType?: 'module' | 'script';
    impliedStrict?: boolean;
    ecmaVersion?: number;
}
declare class ScopeManager {
    #private;
    currentScope: Scope | null;
    readonly declaredVariables: WeakMap<TSESTree.Node, Variable[]>;
    /**
     * The root scope
     * @public
     */
    globalScope: GlobalScope | null;
    readonly nodeToScope: WeakMap<TSESTree.Node, Scope[]>;
    /**
     * All scopes
     * @public
     */
    readonly scopes: Scope[];
    get variables(): Variable[];
    constructor(options: ScopeManagerOptions);
    isGlobalReturn(): boolean;
    isModule(): boolean;
    isImpliedStrict(): boolean;
    isStrictModeSupported(): boolean;
    isES6(): boolean;
    /**
     * Get the variables that a given AST node defines. The gotten variables' `def[].node`/`def[].parent` property is the node.
     * If the node does not define any variable, this returns an empty array.
     * @param node An AST node to get their variables.
     * @public
     */
    getDeclaredVariables(node: TSESTree.Node): Variable[];
    /**
     * Get the scope of a given AST node. The gotten scope's `block` property is the node.
     * This method never returns `function-expression-name` scope. If the node does not have their scope, this returns `null`.
     *
     * @param node An AST node to get their scope.
     * @param inner If the node has multiple scopes, this returns the outermost scope normally.
     *                If `inner` is `true` then this returns the innermost scope.
     * @public
     */
    acquire(node: TSESTree.Node, inner?: boolean): Scope | null;
    protected nestScope<T extends Scope>(scope: T): T;
    nestBlockScope(node: BlockScope['block']): BlockScope;
    nestCatchScope(node: CatchScope['block']): CatchScope;
    nestClassScope(node: ClassScope['block']): ClassScope;
    nestClassFieldInitializerScope(node: ClassFieldInitializerScope['block']): ClassFieldInitializerScope;
    nestClassStaticBlockScope(node: ClassStaticBlockScope['block']): ClassStaticBlockScope;
    nestConditionalTypeScope(node: ConditionalTypeScope['block']): ConditionalTypeScope;
    nestForScope(node: ForScope['block']): ForScope;
    nestFunctionExpressionNameScope(node: FunctionExpressionNameScope['block']): FunctionExpressionNameScope;
    nestFunctionScope(node: FunctionScope['block'], isMethodDefinition: boolean): FunctionScope;
    nestFunctionTypeScope(node: FunctionTypeScope['block']): FunctionTypeScope;
    nestGlobalScope(node: GlobalScope['block']): GlobalScope;
    nestMappedTypeScope(node: MappedTypeScope['block']): MappedTypeScope;
    nestModuleScope(node: ModuleScope['block']): ModuleScope;
    nestSwitchScope(node: SwitchScope['block']): SwitchScope;
    nestTSEnumScope(node: TSEnumScope['block']): TSEnumScope;
    nestTSModuleScope(node: TSModuleScope['block']): TSModuleScope;
    nestTypeScope(node: TypeScope['block']): TypeScope;
    nestWithScope(node: WithScope['block']): WithScope;
}
export { ScopeManager };
//# sourceMappingURL=ScopeManager.d.ts.map