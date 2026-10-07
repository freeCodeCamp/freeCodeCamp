"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalScope = void 0;
const types_1 = require("@typescript-eslint/types");
const assert_1 = require("../assert");
const ImplicitGlobalVariableDefinition_1 = require("../definition/ImplicitGlobalVariableDefinition");
const variable_1 = require("../variable");
const ScopeBase_1 = require("./ScopeBase");
const ScopeType_1 = require("./ScopeType");
class GlobalScope extends ScopeBase_1.ScopeBase {
    // note this is accessed in used in the legacy eslint-scope tests, so it can't be true private
    implicit;
    constructor(scopeManager, block) {
        super(scopeManager, ScopeType_1.ScopeType.global, null, block, false);
        this.implicit = {
            leftToBeResolved: [],
            set: new Map(),
            variables: [],
        };
    }
    addVariables(names) {
        for (const name of names) {
            this.defineVariable(name, this.set, this.variables, null, null);
            this.implicit.set.delete(name);
        }
        const nameSet = new Set(names);
        for (const reference of this.through) {
            if (nameSet.has(reference.identifier.name)) {
                const variable = this.set.get(reference.identifier.name);
                (0, assert_1.assert)(variable, `Expected variable with name "${reference.identifier.name}" to be specified.`);
                reference.resolved = variable;
                variable.references.push(reference);
            }
        }
        this.through = this.through.filter(reference => !nameSet.has(reference.identifier.name));
        this.implicit.variables = this.implicit.variables.filter(variable => !nameSet.has(variable.name));
        this.implicit.leftToBeResolved = this.implicit.leftToBeResolved.filter(reference => !nameSet.has(reference.identifier.name));
    }
    close(scopeManager) {
        (0, assert_1.assert)(this.leftToResolve);
        for (const ref of this.leftToResolve) {
            if (ref.maybeImplicitGlobal && !this.set.has(ref.identifier.name)) {
                // create an implicit global variable from assignment expression
                const info = ref.maybeImplicitGlobal;
                const node = info.pattern;
                if (node.type === types_1.AST_NODE_TYPES.Identifier) {
                    this.defineVariable(node.name, this.implicit.set, this.implicit.variables, node, new ImplicitGlobalVariableDefinition_1.ImplicitGlobalVariableDefinition(info.pattern, info.node));
                }
            }
        }
        this.implicit.leftToBeResolved = this.leftToResolve;
        super.close(scopeManager);
        this.implicit.leftToBeResolved = [...this.through];
        return null;
    }
    defineImplicitVariable(name, options) {
        this.defineVariable(new variable_1.ImplicitLibVariable(this, name, options), this.set, this.variables, null, null);
    }
}
exports.GlobalScope = GlobalScope;
