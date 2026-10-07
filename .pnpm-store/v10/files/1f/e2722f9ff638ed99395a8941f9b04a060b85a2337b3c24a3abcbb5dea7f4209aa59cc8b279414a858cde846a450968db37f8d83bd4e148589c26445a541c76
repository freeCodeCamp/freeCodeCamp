"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionExpressionNameScope = void 0;
const definition_1 = require("../definition");
const ScopeBase_1 = require("./ScopeBase");
const ScopeType_1 = require("./ScopeType");
class FunctionExpressionNameScope extends ScopeBase_1.ScopeBase {
    functionExpressionScope;
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.functionExpressionName, upperScope, block, false);
        if (block.id) {
            this.defineIdentifier(block.id, new definition_1.FunctionNameDefinition(block.id, block));
        }
        this.functionExpressionScope = true;
    }
}
exports.FunctionExpressionNameScope = FunctionExpressionNameScope;
//# sourceMappingURL=FunctionExpressionNameScope.js.map