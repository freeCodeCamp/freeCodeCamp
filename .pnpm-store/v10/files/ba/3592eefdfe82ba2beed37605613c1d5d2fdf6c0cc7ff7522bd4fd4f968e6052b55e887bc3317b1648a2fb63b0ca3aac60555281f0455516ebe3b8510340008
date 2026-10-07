import { TSESTree } from '../ts-estree';
import { Definition } from './Definition';
import { Reference, ReferenceFlag } from './Reference';
import { ScopeManager } from './ScopeManager';
import { Variable } from './Variable';
type ScopeType = 'block' | 'catch' | 'class' | 'for' | 'function' | 'function-expression-name' | 'global' | 'module' | 'switch' | 'with' | 'TDZ' | 'enum' | 'empty-function';
interface Scope {
    type: ScopeType;
    isStrict: boolean;
    upper: Scope | null;
    childScopes: Scope[];
    variableScope: Scope;
    block: TSESTree.Node;
    variables: Variable[];
    set: Map<string, Variable>;
    references: Reference[];
    through: Reference[];
    thisFound?: boolean;
    taints: Map<string, boolean>;
    functionExpressionScope: boolean;
    __left: Reference[];
    __shouldStaticallyClose(scopeManager: ScopeManager): boolean;
    __shouldStaticallyCloseForGlobal(ref: any): boolean;
    __staticCloseRef(ref: any): void;
    __dynamicCloseRef(ref: any): void;
    __globalCloseRef(ref: any): void;
    __close(scopeManager: ScopeManager): Scope;
    __isValidResolution(ref: any, variable: any): variable is Variable;
    __resolve(ref: Reference): boolean;
    __delegateToUpperScope(ref: any): void;
    __addDeclaredVariablesOfNode(variable: any, node: TSESTree.Node): void;
    __defineGeneric(name: string, set: Map<string, Variable>, variables: Variable[], node: TSESTree.Identifier, def: Definition): void;
    __define(node: TSESTree.Node, def: Definition): void;
    __referencing(node: TSESTree.Node, assign?: ReferenceFlag, writeExpr?: TSESTree.Node, maybeImplicitGlobal?: any, partial?: any, init?: any): void;
    __detectEval(): void;
    __detectThis(): void;
    __isClosed(): boolean;
    /**
     * returns resolved {Reference}
     * @method Scope#resolve
     * @param {Espree.Identifier} ident - identifier to be resolved.
     * @returns {Reference} reference
     */
    resolve(ident: TSESTree.Node): Reference;
    /**
     * returns this scope is static
     * @method Scope#isStatic
     * @returns {boolean} static
     */
    isStatic(): boolean;
    /**
     * returns this scope has materialized arguments
     * @method Scope#isArgumentsMaterialized
     * @returns {boolean} arguments materialized
     */
    isArgumentsMaterialized(): boolean;
    /**
     * returns this scope has materialized `this` reference
     * @method Scope#isThisMaterialized
     * @returns {boolean} this materialized
     */
    isThisMaterialized(): boolean;
    isUsedName(name: any): boolean;
}
interface ScopeConstructor {
    new (scopeManager: ScopeManager, type: ScopeType, upperScope: Scope | null, block: TSESTree.Node | null, isMethodDefinition: boolean): Scope;
}
declare const Scope: ScopeConstructor;
interface ScopeChildConstructorWithUpperScope<T> {
    new (scopeManager: ScopeManager, upperScope: Scope, block: TSESTree.Node | null): T;
}
interface GlobalScope extends Scope {
}
declare const GlobalScope: ScopeConstructor & (new (scopeManager: ScopeManager, block: TSESTree.Node | null) => GlobalScope);
interface ModuleScope extends Scope {
}
declare const ModuleScope: ScopeConstructor & ScopeChildConstructorWithUpperScope<ModuleScope>;
interface FunctionExpressionNameScope extends Scope {
}
declare const FunctionExpressionNameScope: ScopeConstructor & ScopeChildConstructorWithUpperScope<FunctionExpressionNameScope>;
interface CatchScope extends Scope {
}
declare const CatchScope: ScopeConstructor & ScopeChildConstructorWithUpperScope<CatchScope>;
interface WithScope extends Scope {
}
declare const WithScope: ScopeConstructor & ScopeChildConstructorWithUpperScope<WithScope>;
interface BlockScope extends Scope {
}
declare const BlockScope: ScopeConstructor & ScopeChildConstructorWithUpperScope<BlockScope>;
interface SwitchScope extends Scope {
}
declare const SwitchScope: ScopeConstructor & ScopeChildConstructorWithUpperScope<SwitchScope>;
interface FunctionScope extends Scope {
}
declare const FunctionScope: ScopeConstructor & (new (scopeManager: ScopeManager, upperScope: Scope, block: TSESTree.Node | null, isMethodDefinition: boolean) => FunctionScope);
interface ForScope extends Scope {
}
declare const ForScope: ScopeConstructor & ScopeChildConstructorWithUpperScope<ForScope>;
interface ClassScope extends Scope {
}
declare const ClassScope: ScopeConstructor & ScopeChildConstructorWithUpperScope<ClassScope>;
export { ScopeType, Scope, GlobalScope, ModuleScope, FunctionExpressionNameScope, CatchScope, WithScope, BlockScope, SwitchScope, FunctionScope, ForScope, ClassScope, };
//# sourceMappingURL=Scope.d.ts.map
