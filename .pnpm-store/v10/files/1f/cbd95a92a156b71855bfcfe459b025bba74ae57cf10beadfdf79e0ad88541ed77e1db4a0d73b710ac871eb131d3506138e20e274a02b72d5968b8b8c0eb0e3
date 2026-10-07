"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScopeManager = void 0;
const assert_1 = require("./assert");
const scope_1 = require("./scope");
const ClassFieldInitializerScope_1 = require("./scope/ClassFieldInitializerScope");
const ClassStaticBlockScope_1 = require("./scope/ClassStaticBlockScope");
/**
 * @see https://eslint.org/docs/latest/developer-guide/scope-manager-interface#scopemanager-interface
 */
class ScopeManager {
    #options;
    currentScope;
    declaredVariables;
    /**
     * The root scope
     */
    globalScope;
    nodeToScope;
    /**
     * All scopes
     * @public
     */
    scopes;
    constructor(options) {
        this.scopes = [];
        this.globalScope = null;
        this.nodeToScope = new WeakMap();
        this.currentScope = null;
        this.#options = options;
        this.declaredVariables = new WeakMap();
    }
    isES6() {
        return true;
    }
    isGlobalReturn() {
        return this.#options.globalReturn === true;
    }
    isImpliedStrict() {
        return this.#options.impliedStrict === true;
    }
    isModule() {
        return this.#options.sourceType === 'module';
    }
    isStrictModeSupported() {
        return true;
    }
    get variables() {
        const variables = new Set();
        function recurse(scope) {
            scope.variables.forEach(v => variables.add(v));
            scope.childScopes.forEach(recurse);
        }
        this.scopes.forEach(recurse);
        return [...variables].sort((a, b) => a.$id - b.$id);
    }
    /**
     * Get the variables that a given AST node defines. The gotten variables' `def[].node`/`def[].parent` property is the node.
     * If the node does not define any variable, this returns an empty array.
     * @param node An AST node to get their variables.
     */
    getDeclaredVariables(node) {
        return this.declaredVariables.get(node) ?? [];
    }
    /**
     * Get the scope of a given AST node. The gotten scope's `block` property is the node.
     * This method never returns `function-expression-name` scope. If the node does not have their scope, this returns `null`.
     *
     * @param node An AST node to get their scope.
     * @param inner If the node has multiple scopes, this returns the outermost scope normally.
     *                If `inner` is `true` then this returns the innermost scope.
     */
    acquire(node, inner = false) {
        function predicate(testScope) {
            if (testScope.type === scope_1.ScopeType.function &&
                testScope.functionExpressionScope) {
                return false;
            }
            return true;
        }
        const scopes = this.nodeToScope.get(node);
        if (!scopes || scopes.length === 0) {
            return null;
        }
        // Heuristic selection from all scopes.
        // If you would like to get all scopes, please use ScopeManager#acquireAll.
        if (scopes.length === 1) {
            return scopes[0];
        }
        if (inner) {
            for (let i = scopes.length - 1; i >= 0; --i) {
                const scope = scopes[i];
                if (predicate(scope)) {
                    return scope;
                }
            }
            return null;
        }
        return scopes.find(predicate) ?? null;
    }
    /**
     * Adds dynamically created globals to the global scope and resolve their references.
     * This method is called by ESLint.
     * @param names Names of the globals to create
     */
    addGlobals(names) {
        this.globalScope?.addVariables(names);
    }
    nestBlockScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.BlockScope(this, this.currentScope, node));
    }
    nestCatchScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.CatchScope(this, this.currentScope, node));
    }
    nestClassFieldInitializerScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new ClassFieldInitializerScope_1.ClassFieldInitializerScope(this, this.currentScope, node));
    }
    nestClassScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ClassScope(this, this.currentScope, node));
    }
    nestClassStaticBlockScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new ClassStaticBlockScope_1.ClassStaticBlockScope(this, this.currentScope, node));
    }
    nestConditionalTypeScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ConditionalTypeScope(this, this.currentScope, node));
    }
    nestForScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ForScope(this, this.currentScope, node));
    }
    nestFunctionExpressionNameScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionExpressionNameScope(this, this.currentScope, node));
    }
    nestFunctionScope(node, isMethodDefinition) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionScope(this, this.currentScope, node, isMethodDefinition));
    }
    nestFunctionTypeScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionTypeScope(this, this.currentScope, node));
    }
    nestGlobalScope(node) {
        return this.nestScope(new scope_1.GlobalScope(this, node));
    }
    nestMappedTypeScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.MappedTypeScope(this, this.currentScope, node));
    }
    nestModuleScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ModuleScope(this, this.currentScope, node));
    }
    nestSwitchScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.SwitchScope(this, this.currentScope, node));
    }
    nestTSEnumScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TSEnumScope(this, this.currentScope, node));
    }
    nestTSModuleScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TSModuleScope(this, this.currentScope, node));
    }
    nestTypeScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TypeScope(this, this.currentScope, node));
    }
    nestWithScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.WithScope(this, this.currentScope, node));
    }
    nestScope(scope) {
        if (scope instanceof scope_1.GlobalScope) {
            (0, assert_1.assert)(this.currentScope == null);
            this.globalScope = scope;
        }
        this.currentScope = scope;
        return scope;
    }
}
exports.ScopeManager = ScopeManager;
