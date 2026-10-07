import type { TSESTree } from '@typescript-eslint/types';
import type { Definition } from '../definition';
import type { ReferenceImplicitGlobal } from '../referencer/Reference';
import { Reference, ReferenceFlag } from '../referencer/Reference';
import type { ScopeManager } from '../ScopeManager';
import { Variable } from '../variable';
import type { FunctionScope } from './FunctionScope';
import type { GlobalScope } from './GlobalScope';
import type { ModuleScope } from './ModuleScope';
import type { Scope } from './Scope';
import { ScopeType } from './ScopeType';
import type { TSModuleScope } from './TSModuleScope';
type VariableScope = GlobalScope | FunctionScope | ModuleScope | TSModuleScope;
declare abstract class ScopeBase<TType extends ScopeType, TBlock extends TSESTree.Node, TUpper extends Scope | null> {
    #private;
    /**
     * A unique ID for this instance - primarily used to help debugging and testing
     */
    readonly $id: number;
    /**
     * The AST node which created this scope.
     * @public
     */
    readonly block: TBlock;
    /**
     * The array of child scopes. This does not include grandchild scopes.
     * @public
     */
    readonly childScopes: Scope[];
    /**
     * Whether this scope is created by a FunctionExpression.
     * @public
     */
    readonly functionExpressionScope: boolean;
    /**
     * Whether 'use strict' is in effect in this scope.
     * @public
     */
    isStrict: boolean;
    /**
     * List of {@link Reference}s that are left to be resolved (i.e. which
     * need to be linked to the variable they refer to).
     */
    protected leftToResolve: Reference[] | null;
    /**
     * Any variable {@link Reference} found in this scope.
     * This includes occurrences of local variables as well as variables from parent scopes (including the global scope).
     * For local variables this also includes defining occurrences (like in a 'var' statement).
     * In a 'function' scope this does not include the occurrences of the formal parameter in the parameter list.
     * @public
     */
    readonly references: Reference[];
    /**
     * The map from variable names to variable objects.
     * @public
     */
    readonly set: Map<string, Variable>;
    /**
     * The {@link Reference}s that are not resolved with this scope.
     * @public
     */
    readonly through: Reference[];
    /**
     * The type of scope
     * @public
     */
    readonly type: TType;
    /**
     * Reference to the parent {@link Scope}.
     * @public
     */
    readonly upper: TUpper;
    /**
     * The scoped {@link Variable}s of this scope.
     * In the case of a 'function' scope this includes the automatic argument `arguments` as its first element, as well
     * as all further formal arguments.
     * This does not include variables which are defined in child scopes.
     * @public
     */
    readonly variables: Variable[];
    /**
     * For scopes that can contain variable declarations, this is a self-reference.
     * For other scope types this is the *variableScope* value of the parent scope.
     * @public
     */
    readonly variableScope: VariableScope;
    constructor(scopeManager: ScopeManager, type: TType, upperScope: TUpper, block: TBlock, isMethodDefinition: boolean);
    private isVariableScope;
    shouldStaticallyClose(): boolean;
    private shouldStaticallyCloseForGlobal;
    close(scopeManager: ScopeManager): Scope | null;
    /**
     * To override by function scopes.
     * References in default parameters isn't resolved to variables which are in their function body.
     */
    protected isValidResolution(_ref: Reference, _variable: Variable): boolean;
    protected delegateToUpperScope(ref: Reference): void;
    private addDeclaredVariablesOfNode;
    protected defineVariable(nameOrVariable: string | Variable, set: Map<string, Variable>, variables: Variable[], node: TSESTree.Identifier | null, def: Definition | null): void;
    defineIdentifier(node: TSESTree.Identifier, def: Definition): void;
    defineLiteralIdentifier(node: TSESTree.StringLiteral, def: Definition): void;
    referenceValue(node: TSESTree.Identifier | TSESTree.JSXIdentifier, assign?: ReferenceFlag, writeExpr?: TSESTree.Expression | null, maybeImplicitGlobal?: ReferenceImplicitGlobal | null, init?: boolean): void;
    referenceType(node: TSESTree.Identifier): void;
    referenceDualValueType(node: TSESTree.Identifier): void;
}
export { ScopeBase };
//# sourceMappingURL=ScopeBase.d.ts.map