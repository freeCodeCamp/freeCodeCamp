import type { SourceType, TSESTree } from '@typescript-eslint/types';
import type { Scope } from './scope';
import type { Variable } from './variable';
import { BlockScope, CatchScope, ClassScope, ConditionalTypeScope, ForScope, FunctionExpressionNameScope, FunctionScope, FunctionTypeScope, GlobalScope, MappedTypeScope, ModuleScope, SwitchScope, TSEnumScope, TSModuleScope, TypeScope, WithScope } from './scope';
import { ClassFieldInitializerScope } from './scope/ClassFieldInitializerScope';
import { ClassStaticBlockScope } from './scope/ClassStaticBlockScope';
interface ScopeManagerOptions {
    globalReturn?: boolean;
    impliedStrict?: boolean;
    sourceType?: SourceType;
}
/**
 * @see https://eslint.org/docs/latest/developer-guide/scope-manager-interface#scopemanager-interface
 */
export declare class ScopeManager {
    #private;
    currentScope: Scope | null;
    readonly declaredVariables: WeakMap<TSESTree.Node, Variable[]>;
    /**
     * The root scope
     */
    globalScope: GlobalScope | null;
    readonly nodeToScope: WeakMap<TSESTree.Node, Scope[]>;
    /**
     * All scopes
     * @public
     */
    readonly scopes: Scope[];
    constructor(options: ScopeManagerOptions);
    isES6(): boolean;
    isGlobalReturn(): boolean;
    isImpliedStrict(): boolean;
    isModule(): boolean;
    isStrictModeSupported(): boolean;
    get variables(): Variable[];
    /**
     * Get the variables that a given AST node defines. The gotten variables' `def[].node`/`def[].parent` property is the node.
     * If the node does not define any variable, this returns an empty array.
     * @param node An AST node to get their variables.
     */
    getDeclaredVariables(node: TSESTree.Node): Variable[];
    /**
     * Get the scope of a given AST node. The gotten scope's `block` property is the node.
     * This method never returns `function-expression-name` scope. If the node does not have their scope, this returns `null`.
     *
     * @param node An AST node to get their scope.
     * @param inner If the node has multiple scopes, this returns the outermost scope normally.
     *                If `inner` is `true` then this returns the innermost scope.
     */
    acquire(node: TSESTree.Node, inner?: boolean): Scope | null;
    /**
     * Adds dynamically created globals to the global scope and resolve their references.
     * This method is called by ESLint.
     * @param names Names of the globals to create
     */
    addGlobals(names: string[]): void;
    nestBlockScope(node: BlockScope['block']): BlockScope;
    nestCatchScope(node: CatchScope['block']): CatchScope;
    nestClassFieldInitializerScope(node: ClassFieldInitializerScope['block']): ClassFieldInitializerScope;
    nestClassScope(node: ClassScope['block']): ClassScope;
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
    protected nestScope<T extends Scope>(scope: T): T;
}
export {};
