"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImplicitLibVariable = void 0;
const ESLintScopeVariable_1 = require("./ESLintScopeVariable");
/**
 * An variable implicitly defined by the TS Lib
 */
class ImplicitLibVariable extends ESLintScopeVariable_1.ESLintScopeVariable {
    constructor(scope, name, { isTypeVariable, isValueVariable, writeable, eslintImplicitGlobalSetting, }) {
        super(name, scope);
        this.isTypeVariable = isTypeVariable !== null && isTypeVariable !== void 0 ? isTypeVariable : false;
        this.isValueVariable = isValueVariable !== null && isValueVariable !== void 0 ? isValueVariable : false;
        this.writeable = writeable !== null && writeable !== void 0 ? writeable : false;
        this.eslintImplicitGlobalSetting =
            eslintImplicitGlobalSetting !== null && eslintImplicitGlobalSetting !== void 0 ? eslintImplicitGlobalSetting : 'readonly';
    }
}
exports.ImplicitLibVariable = ImplicitLibVariable;
//# sourceMappingURL=ImplicitLibVariable.js.map