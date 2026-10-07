"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionScope = void 0;
const types_1 = require("@typescript-eslint/types");
const ScopeBase_1 = require("./ScopeBase");
const ScopeType_1 = require("./ScopeType");
class FunctionScope extends ScopeBase_1.ScopeBase {
    constructor(scopeManager, upperScope, block, isMethodDefinition) {
        super(scopeManager, ScopeType_1.ScopeType.function, upperScope, block, isMethodDefinition);
        // section 9.2.13, FunctionDeclarationInstantiation.
        // NOTE Arrow functions never have an arguments objects.
        if (this.block.type !== types_1.AST_NODE_TYPES.ArrowFunctionExpression) {
            this.defineVariable('arguments', this.set, this.variables, null, null);
        }
    }
    // References in default parameters isn't resolved to variables which are in their function body.
    //     const x = 1
    //     function f(a = x) { // This `x` is resolved to the `x` in the outer scope.
    //         const x = 2
    //         console.log(a)
    //     }
    isValidResolution(ref, variable) {
        var _a, _b;
        // If `options.globalReturn` is true, `this.block` becomes a Program node.
        if (this.block.type === types_1.AST_NODE_TYPES.Program) {
            return true;
        }
        const bodyStart = (_b = (_a = this.block.body) === null || _a === void 0 ? void 0 : _a.range[0]) !== null && _b !== void 0 ? _b : -1;
        // It's invalid resolution in the following case:
        return !((variable.scope === this &&
            ref.identifier.range[0] < bodyStart && // the reference is in the parameter part.
            variable.defs.every(d => d.name.range[0] >= bodyStart)) // the variable is in the body.
        );
    }
}
exports.FunctionScope = FunctionScope;
//# sourceMappingURL=FunctionScope.js.map