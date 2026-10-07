"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithScope = void 0;
const assert_1 = require("../assert");
const ScopeBase_1 = require("./ScopeBase");
const ScopeType_1 = require("./ScopeType");
class WithScope extends ScopeBase_1.ScopeBase {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.with, upperScope, block, false);
    }
    close(scopeManager) {
        if (this.shouldStaticallyClose()) {
            return super.close(scopeManager);
        }
        (0, assert_1.assert)(this.leftToResolve);
        this.leftToResolve.forEach(ref => this.delegateToUpperScope(ref));
        this.leftToResolve = null;
        return this.upper;
    }
}
exports.WithScope = WithScope;
