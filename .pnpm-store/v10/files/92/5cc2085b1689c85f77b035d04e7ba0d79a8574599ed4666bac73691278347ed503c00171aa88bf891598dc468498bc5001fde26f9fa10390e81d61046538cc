import { EcmaVersion } from '../ts-eslint';
import { TSESTree } from '../ts-estree';
import { Scope } from './Scope';
import { Variable } from './Variable';
interface ScopeManagerOptions {
    directive?: boolean;
    optimistic?: boolean;
    ignoreEval?: boolean;
    nodejsScope?: boolean;
    sourceType?: 'module' | 'script';
    impliedStrict?: boolean;
    ecmaVersion?: EcmaVersion;
}
interface ScopeManager {
    __options: ScopeManagerOptions;
    __currentScope: Scope;
    __nodeToScope: WeakMap<TSESTree.Node, Scope[]>;
    __declaredVariables: WeakMap<TSESTree.Node, Variable[]>;
    scopes: Scope[];
    globalScope: Scope;
    __useDirective(): boolean;
    __isOptimistic(): boolean;
    __ignoreEval(): boolean;
    __isNodejsScope(): boolean;
    isModule(): boolean;
    isImpliedStrict(): boolean;
    isStrictModeSupported(): boolean;
    __get(node: TSESTree.Node): Scope | undefined;
    getDeclaredVariables(node: TSESTree.Node): Variable[];
    acquire(node: TSESTree.Node, inner?: boolean): Scope | null;
    acquireAll(node: TSESTree.Node): Scope | null;
    release(node: TSESTree.Node, inner?: boolean): Scope | null;
    attach(): void;
    detach(): void;
    __nestScope<T extends Scope>(scope: T): T;
    __nestGlobalScope(node: TSESTree.Node): Scope;
    __nestBlockScope(node: TSESTree.Node): Scope;
    __nestFunctionScope(node: TSESTree.Node, isMethodDefinition: boolean): Scope;
    __nestForScope(node: TSESTree.Node): Scope;
    __nestCatchScope(node: TSESTree.Node): Scope;
    __nestWithScope(node: TSESTree.Node): Scope;
    __nestClassScope(node: TSESTree.Node): Scope;
    __nestSwitchScope(node: TSESTree.Node): Scope;
    __nestModuleScope(node: TSESTree.Node): Scope;
    __nestFunctionExpressionNameScope(node: TSESTree.Node): Scope;
    __isES6(): boolean;
}
declare const ScopeManager: new (options: ScopeManagerOptions) => ScopeManager;
export { ScopeManager, ScopeManagerOptions };
//# sourceMappingURL=ScopeManager.d.ts.map
