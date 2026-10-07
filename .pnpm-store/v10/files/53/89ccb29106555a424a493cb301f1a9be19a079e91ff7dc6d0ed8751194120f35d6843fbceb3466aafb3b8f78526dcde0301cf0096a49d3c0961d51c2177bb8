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
    constructor(scopeManager, block) {
        super(scopeManager, ScopeType_1.ScopeType.global, null, block, false);
        this.implicit = {
            set: new Map(),
            variables: [],
            leftToBeResolved: [],
        };
    }
    defineImplicitVariable(name, options) {
        this.defineVariable(new variable_1.ImplicitLibVariable(this, name, options), this.set, this.variables, null, null);
    }
    close(scopeManager) {
        (0, assert_1.assert)(this.leftToResolve);
        for (const ref of this.leftToResolve) {
            if (ref.maybeImplicitGlobal && !this.set.has(ref.identifier.name)) {
                // create an implicit global variable from assignment expression
                const info = ref.maybeImplicitGlobal;
                const node = info.pattern;
                if (node && node.type === types_1.AST_NODE_TYPES.Identifier) {
                    this.defineVariable(node.name, this.implicit.set, this.implicit.variables, node, new ImplicitGlobalVariableDefinition_1.ImplicitGlobalVariableDefinition(info.pattern, info.node));
                }
            }
        }
        this.implicit.leftToBeResolved = this.leftToResolve;
        return super.close(scopeManager);
    }
}
exports.GlobalScope = GlobalScope;
//# sourceMappingURL=GlobalScope.js.map