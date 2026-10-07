"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ScopeBase_declaredVariables, _ScopeBase_dynamic, _ScopeBase_staticCloseRef, _ScopeBase_dynamicCloseRef, _ScopeBase_globalCloseRef;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScopeBase = void 0;
const types_1 = require("@typescript-eslint/types");
const assert_1 = require("../assert");
const definition_1 = require("../definition");
const ID_1 = require("../ID");
const Reference_1 = require("../referencer/Reference");
const variable_1 = require("../variable");
const ScopeType_1 = require("./ScopeType");
/**
 * Test if scope is strict
 */
function isStrictScope(scope, block, isMethodDefinition) {
    var _a;
    let body;
    // When upper scope is exists and strict, inner scope is also strict.
    if ((_a = scope.upper) === null || _a === void 0 ? void 0 : _a.isStrict) {
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
        if (stmt.type !== types_1.AST_NODE_TYPES.ExpressionStatement) {
            break;
        }
        if (stmt.directive === 'use strict') {
            return true;
        }
        const expr = stmt.expression;
        if (expr.type !== types_1.AST_NODE_TYPES.Literal) {
            break;
        }
        if (expr.raw === '"use strict"' || expr.raw === "'use strict'") {
            return true;
        }
        if (expr.value === 'use strict') {
            return true;
        }
    }
    return false;
}
/**
 * Register scope
 */
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
    constructor(scopeManager, type, upperScope, block, isMethodDefinition) {
        /**
         * A unique ID for this instance - primarily used to help debugging and testing
         */
        this.$id = generator();
        /**
         * The array of child scopes. This does not include grandchild scopes.
         * @public
         */
        this.childScopes = [];
        /**
         * A map of the variables for each node in this scope.
         * This is map is a pointer to the one in the parent ScopeManager instance
         */
        _ScopeBase_declaredVariables.set(this, void 0);
        /**
         * Generally, through the lexical scoping of JS you can always know which variable an identifier in the source code
         * refers to. There are a few exceptions to this rule. With `global` and `with` scopes you can only decide at runtime
         * which variable a reference refers to.
         * All those scopes are considered "dynamic".
         */
        _ScopeBase_dynamic.set(this, void 0);
        /**
         * Whether this scope is created by a FunctionExpression.
         * @public
         */
        this.functionExpressionScope = false;
        /**
         * List of {@link Reference}s that are left to be resolved (i.e. which
         * need to be linked to the variable they refer to).
         */
        this.leftToResolve = [];
        /**
         * Any variable {@link Reference} found in this scope.
         * This includes occurrences of local variables as well as variables from parent scopes (including the global scope).
         * For local variables this also includes defining occurrences (like in a 'var' statement).
         * In a 'function' scope this does not include the occurrences of the formal parameter in the parameter list.
         * @public
         */
        this.references = [];
        /**
         * The map from variable names to variable objects.
         * @public
         */
        this.set = new Map();
        /**
         * The {@link Reference}s that are not resolved with this scope.
         * @public
         */
        this.through = [];
        /**
         * The scoped {@link Variable}s of this scope.
         * In the case of a 'function' scope this includes the automatic argument `arguments` as its first element, as well
         * as all further formal arguments.
         * This does not include variables which are defined in child scopes.
         * @public
         */
        this.variables = [];
        _ScopeBase_staticCloseRef.set(this, (ref) => {
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
        });
        _ScopeBase_dynamicCloseRef.set(this, (ref) => {
            // notify all names are through to global
            let current = this;
            do {
                current.through.push(ref);
                current = current.upper;
            } while (current);
        });
        _ScopeBase_globalCloseRef.set(this, (ref, scopeManager) => {
            // let/const/class declarations should be resolved statically.
            // others should be resolved dynamically.
            if (this.shouldStaticallyCloseForGlobal(ref, scopeManager)) {
                __classPrivateFieldGet(this, _ScopeBase_staticCloseRef, "f").call(this, ref);
            }
            else {
                __classPrivateFieldGet(this, _ScopeBase_dynamicCloseRef, "f").call(this, ref);
            }
        });
        const upperScopeAsScopeBase = upperScope;
        this.type = type;
        __classPrivateFieldSet(this, _ScopeBase_dynamic, this.type === ScopeType_1.ScopeType.global || this.type === ScopeType_1.ScopeType.with, "f");
        this.block = block;
        this.variableScope = this.isVariableScope()
            ? this
            : upperScopeAsScopeBase.variableScope;
        this.upper = upperScope;
        /**
         * Whether 'use strict' is in effect in this scope.
         * @member {boolean} Scope#isStrict
         */
        this.isStrict = isStrictScope(this, block, isMethodDefinition);
        if (upperScopeAsScopeBase) {
            // this is guaranteed to be correct at runtime
            upperScopeAsScopeBase.childScopes.push(this);
        }
        __classPrivateFieldSet(this, _ScopeBase_declaredVariables, scopeManager.declaredVariables, "f");
        registerScope(scopeManager, this);
    }
    isVariableScope() {
        return VARIABLE_SCOPE_TYPES.has(this.type);
    }
    shouldStaticallyClose() {
        return !__classPrivateFieldGet(this, _ScopeBase_dynamic, "f");
    }
    shouldStaticallyCloseForGlobal(ref, scopeManager) {
        // On global scope, let/const/class declarations should be resolved statically.
        const name = ref.identifier.name;
        const variable = this.set.get(name);
        if (!variable) {
            return false;
        }
        // variable exists on the scope
        // in module mode, we can statically resolve everything, regardless of its decl type
        if (scopeManager.isModule()) {
            return true;
        }
        // in script mode, only certain cases should be statically resolved
        // Example:
        // a `var` decl is ignored by the runtime if it clashes with a global name
        // this means that we should not resolve the reference to the variable
        const defs = variable.defs;
        return (defs.length > 0 &&
            defs.every(def => {
                var _a;
                if (def.type === definition_1.DefinitionType.Variable &&
                    ((_a = def.parent) === null || _a === void 0 ? void 0 : _a.type) === types_1.AST_NODE_TYPES.VariableDeclaration &&
                    def.parent.kind === 'var') {
                    return false;
                }
                return true;
            }));
    }
    close(scopeManager) {
        let closeRef;
        if (this.shouldStaticallyClose()) {
            closeRef = __classPrivateFieldGet(this, _ScopeBase_staticCloseRef, "f");
        }
        else if (this.type !== 'global') {
            closeRef = __classPrivateFieldGet(this, _ScopeBase_dynamicCloseRef, "f");
        }
        else {
            closeRef = __classPrivateFieldGet(this, _ScopeBase_globalCloseRef, "f");
        }
        // Try Resolving all references in this scope.
        (0, assert_1.assert)(this.leftToResolve);
        this.leftToResolve.forEach(ref => closeRef(ref, scopeManager));
        this.leftToResolve = null;
        return this.upper;
    }
    /**
     * To override by function scopes.
     * References in default parameters isn't resolved to variables which are in their function body.
     */
    isValidResolution(_ref, _variable) {
        return true;
    }
    delegateToUpperScope(ref) {
        const upper = this.upper;
        if (upper === null || upper === void 0 ? void 0 : upper.leftToResolve) {
            upper.leftToResolve.push(ref);
        }
        this.through.push(ref);
    }
    addDeclaredVariablesOfNode(variable, node) {
        if (node == null) {
            return;
        }
        let variables = __classPrivateFieldGet(this, _ScopeBase_declaredVariables, "f").get(node);
        if (variables == null) {
            variables = [];
            __classPrivateFieldGet(this, _ScopeBase_declaredVariables, "f").set(node, variables);
        }
        if (!variables.includes(variable)) {
            variables.push(variable);
        }
    }
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
    defineIdentifier(node, def) {
        this.defineVariable(node.name, this.set, this.variables, node, def);
    }
    defineLiteralIdentifier(node, def) {
        this.defineVariable(node.value, this.set, this.variables, null, def);
    }
    referenceValue(node, assign = Reference_1.ReferenceFlag.Read, writeExpr, maybeImplicitGlobal, init = false) {
        var _a;
        const ref = new Reference_1.Reference(node, this, assign, writeExpr, maybeImplicitGlobal, init, Reference_1.ReferenceTypeFlag.Value);
        this.references.push(ref);
        (_a = this.leftToResolve) === null || _a === void 0 ? void 0 : _a.push(ref);
    }
    referenceType(node) {
        var _a;
        const ref = new Reference_1.Reference(node, this, Reference_1.ReferenceFlag.Read, null, null, false, Reference_1.ReferenceTypeFlag.Type);
        this.references.push(ref);
        (_a = this.leftToResolve) === null || _a === void 0 ? void 0 : _a.push(ref);
    }
    referenceDualValueType(node) {
        var _a;
        const ref = new Reference_1.Reference(node, this, Reference_1.ReferenceFlag.Read, null, null, false, Reference_1.ReferenceTypeFlag.Type | Reference_1.ReferenceTypeFlag.Value);
        this.references.push(ref);
        (_a = this.leftToResolve) === null || _a === void 0 ? void 0 : _a.push(ref);
    }
}
exports.ScopeBase = ScopeBase;
_ScopeBase_declaredVariables = new WeakMap(), _ScopeBase_dynamic = new WeakMap(), _ScopeBase_staticCloseRef = new WeakMap(), _ScopeBase_dynamicCloseRef = new WeakMap(), _ScopeBase_globalCloseRef = new WeakMap();
//# sourceMappingURL=ScopeBase.js.map