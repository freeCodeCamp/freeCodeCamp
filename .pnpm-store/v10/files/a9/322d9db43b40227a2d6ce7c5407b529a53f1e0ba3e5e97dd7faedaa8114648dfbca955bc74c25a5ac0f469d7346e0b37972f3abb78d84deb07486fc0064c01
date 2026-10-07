"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScopeBase = void 0;
const types_1 = require("@typescript-eslint/types");
const assert_1 = require("../assert");
const ID_1 = require("../ID");
const Reference_1 = require("../referencer/Reference");
const variable_1 = require("../variable");
const ScopeType_1 = require("./ScopeType");
/**
 * Test if scope is strict
 */
function isStrictScope(scope, block, isMethodDefinition) {
    let body;
    // When upper scope is exists and strict, inner scope is also strict.
    if (scope.upper?.isStrict) {
        return true;
    }
    if (isMethodDefinition) {
        return true;
    }
    if (scope.type === ScopeType_1.ScopeType.class ||
        scope.type === ScopeType_1.ScopeType.conditionalType ||
        scope.type === ScopeType_1.ScopeType.functionType ||
        scope.type === ScopeType_1.ScopeType.mappedType ||
        scope.type === ScopeType_1.ScopeType.module ||
        scope.type === ScopeType_1.ScopeType.tsEnum ||
        scope.type === ScopeType_1.ScopeType.tsModule ||
        scope.type === ScopeType_1.ScopeType.type) {
        return true;
    }
    if (scope.type === ScopeType_1.ScopeType.block || scope.type === ScopeType_1.ScopeType.switch) {
        return false;
    }
    if (scope.type === ScopeType_1.ScopeType.function) {
        const functionBody = block;
        switch (functionBody.type) {
            case types_1.AST_NODE_TYPES.ArrowFunctionExpression:
                if (functionBody.body.type !== types_1.AST_NODE_TYPES.BlockStatement) {
                    return false;
                }
                body = functionBody.body;
                break;
            case types_1.AST_NODE_TYPES.Program:
                body = functionBody;
                break;
            default:
                body = functionBody.body;
        }
        if (!body) {
            return false;
        }
    }
    else if (scope.type === ScopeType_1.ScopeType.global) {
        body = block;
    }
    else {
        return false;
    }
    // Search 'use strict' directive.
    for (const stmt of body.body) {
        if (stmt.type !== types_1.AST_NODE_TYPES.ExpressionStatement ||
            stmt.directive == null) {
            break;
        }
        if (stmt.directive === 'use strict') {
            return true;
        }
    }
    return false;
}
function registerScope(scopeManager, scope) {
    scopeManager.scopes.push(scope);
    const scopes = scopeManager.nodeToScope.get(scope.block);
    if (scopes) {
        scopes.push(scope);
    }
    else {
        scopeManager.nodeToScope.set(scope.block, [scope]);
    }
}
const generator = (0, ID_1.createIdGenerator)();
const VARIABLE_SCOPE_TYPES = new Set([
    ScopeType_1.ScopeType.classFieldInitializer,
    ScopeType_1.ScopeType.classStaticBlock,
    ScopeType_1.ScopeType.function,
    ScopeType_1.ScopeType.global,
    ScopeType_1.ScopeType.module,
    ScopeType_1.ScopeType.tsModule,
]);
class ScopeBase {
    /**
     * A unique ID for this instance - primarily used to help debugging and testing
     */
    $id = generator();
    /**
     * The AST node which created this scope.
     * @public
     */
    block;
    /**
     * The array of child scopes. This does not include grandchild scopes.
     * @public
     */
    childScopes = [];
    /**
     * A map of the variables for each node in this scope.
     * This is map is a pointer to the one in the parent ScopeManager instance
     */
    #declaredVariables;
    /**
     * Generally, through the lexical scoping of JS you can always know which variable an identifier in the source code
     * refers to. There are a few exceptions to this rule. With `global` and `with` scopes you can only decide at runtime
     * which variable a reference refers to.
     * All those scopes are considered "dynamic".
     */
    #dynamic;
    /**
     * Whether this scope is created by a FunctionExpression.
     * @public
     */
    functionExpressionScope = false;
    /**
     * Whether 'use strict' is in effect in this scope.
     * @public
     */
    isStrict;
    /**
     * List of {@link Reference}s that are left to be resolved (i.e. which
     * need to be linked to the variable they refer to).
     */
    leftToResolve = [];
    /**
     * Any variable {@link Reference} found in this scope.
     * This includes occurrences of local variables as well as variables from parent scopes (including the global scope).
     * For local variables this also includes defining occurrences (like in a 'var' statement).
     * In a 'function' scope this does not include the occurrences of the formal parameter in the parameter list.
     * @public
     */
    references = [];
    /**
     * The map from variable names to variable objects.
     * @public
     */
    set = new Map();
    /**
     * The {@link Reference}s that are not resolved with this scope.
     * @public
     */
    through = [];
    type;
    /**
     * Reference to the parent {@link Scope}.
     * @public
     */
    upper;
    /**
     * The scoped {@link Variable}s of this scope.
     * In the case of a 'function' scope this includes the automatic argument `arguments` as its first element, as well
     * as all further formal arguments.
     * This does not include variables which are defined in child scopes.
     * @public
     */
    variables = [];
    /**
     * For scopes that can contain variable declarations, this is a self-reference.
     * For other scope types this is the *variableScope* value of the parent scope.
     * @public
     */
    #dynamicCloseRef = (ref) => {
        // notify all names are through to global
        let current = this;
        do {
            /* eslint-disable @typescript-eslint/no-non-null-assertion */
            current.through.push(ref);
            current = current.upper;
            /* eslint-enable @typescript-eslint/no-non-null-assertion */
        } while (current);
    };
    #staticCloseRef = (ref) => {
        const resolve = () => {
            const name = ref.identifier.name;
            const variable = this.set.get(name);
            if (!variable) {
                return false;
            }
            if (!this.isValidResolution(ref, variable)) {
                return false;
            }
            // make sure we don't match a type reference to a value variable
            const isValidTypeReference = ref.isTypeReference && variable.isTypeVariable;
            const isValidValueReference = ref.isValueReference && variable.isValueVariable;
            if (!isValidTypeReference && !isValidValueReference) {
                return false;
            }
            variable.references.push(ref);
            ref.resolved = variable;
            return true;
        };
        if (!resolve()) {
            this.delegateToUpperScope(ref);
        }
    };
    variableScope;
    constructor(scopeManager, type, upperScope, block, isMethodDefinition) {
        const upperScopeAsScopeBase = upperScope;
        this.type = type;
        this.#dynamic =
            this.type === ScopeType_1.ScopeType.global || this.type === ScopeType_1.ScopeType.with;
        this.block = block;
        this.variableScope = this.isVariableScope()
            ? this
            : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                upperScopeAsScopeBase.variableScope;
        this.upper = upperScope;
        /**
         * Whether 'use strict' is in effect in this scope.
         * @member {boolean} Scope#isStrict
         */
        this.isStrict = isStrictScope(this, block, isMethodDefinition);
        // this is guaranteed to be correct at runtime
        upperScopeAsScopeBase?.childScopes.push(this);
        this.#declaredVariables = scopeManager.declaredVariables;
        registerScope(scopeManager, this);
    }
    isVariableScope() {
        return VARIABLE_SCOPE_TYPES.has(this.type);
    }
    close(_scopeManager) {
        const closeRef = this.shouldStaticallyClose()
            ? this.#staticCloseRef
            : this.#dynamicCloseRef;
        // Try Resolving all references in this scope.
        (0, assert_1.assert)(this.leftToResolve);
        this.leftToResolve.forEach(ref => closeRef(ref));
        this.leftToResolve = null;
        return this.upper;
    }
    shouldStaticallyClose() {
        return !this.#dynamic || this.type === 'global';
    }
    /**
     * To override by function scopes.
     * References in default parameters isn't resolved to variables which are in their function body.
     */
    defineVariable(nameOrVariable, set, variables, node, def) {
        const name = typeof nameOrVariable === 'string' ? nameOrVariable : nameOrVariable.name;
        let variable = set.get(name);
        if (!variable) {
            variable =
                typeof nameOrVariable === 'string'
                    ? new variable_1.Variable(name, this)
                    : nameOrVariable;
            set.set(name, variable);
            variables.push(variable);
        }
        if (def) {
            variable.defs.push(def);
            this.addDeclaredVariablesOfNode(variable, def.node);
            this.addDeclaredVariablesOfNode(variable, def.parent);
        }
        if (node) {
            variable.identifiers.push(node);
        }
    }
    delegateToUpperScope(ref) {
        this.upper?.leftToResolve?.push(ref);
        this.through.push(ref);
    }
    isValidResolution(_ref, _variable) {
        return true;
    }
    addDeclaredVariablesOfNode(variable, node) {
        if (node == null) {
            return;
        }
        let variables = this.#declaredVariables.get(node);
        if (variables == null) {
            variables = [];
            this.#declaredVariables.set(node, variables);
        }
        if (!variables.includes(variable)) {
            variables.push(variable);
        }
    }
    defineIdentifier(node, def) {
        this.defineVariable(node.name, this.set, this.variables, node, def);
    }
    defineLiteralIdentifier(node, def) {
        this.defineVariable(node.value, this.set, this.variables, null, def);
    }
    referenceDualValueType(node) {
        const ref = new Reference_1.Reference(node, this, Reference_1.ReferenceFlag.Read, null, null, false, Reference_1.ReferenceTypeFlag.Type | Reference_1.ReferenceTypeFlag.Value);
        this.references.push(ref);
        this.leftToResolve?.push(ref);
    }
    referenceType(node) {
        const ref = new Reference_1.Reference(node, this, Reference_1.ReferenceFlag.Read, null, null, false, Reference_1.ReferenceTypeFlag.Type);
        this.references.push(ref);
        this.leftToResolve?.push(ref);
    }
    referenceValue(node, assign = Reference_1.ReferenceFlag.Read, writeExpr, maybeImplicitGlobal, init = false) {
        const ref = new Reference_1.Reference(node, this, assign, writeExpr, maybeImplicitGlobal, init, Reference_1.ReferenceTypeFlag.Value);
        this.references.push(ref);
        this.leftToResolve?.push(ref);
    }
}
exports.ScopeBase = ScopeBase;
