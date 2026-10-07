"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImplicitLibVariable = void 0;
const ESLintScopeVariable_1 = require("./ESLintScopeVariable");
/**
 * An variable implicitly defined by the TS Lib
 */
class ImplicitLibVariable extends ESLintScopeVariable_1.ESLintScopeVariable {
    /**
     * `true` if the variable is valid in a type context, false otherwise
     */
    isTypeVariable;
    /**
     * `true` if the variable is valid in a value context, false otherwise
     */
    isValueVariable;
    constructor(scope, name, { eslintImplicitGlobalSetting, isTypeVariable, isValueVariable, writeable, }) {
        super(name, scope);
        this.isTypeVariable = isTypeVariable ?? false;
        this.isValueVariable = isValueVariable ?? false;
        this.writeable = writeable ?? false;
        this.eslintImplicitGlobalSetting =
            eslintImplicitGlobalSetting ?? 'readonly';
    }
}
exports.ImplicitLibVariable = ImplicitLibVariable;
//# sourceMappingURL=ImplicitLibVariable.js.map