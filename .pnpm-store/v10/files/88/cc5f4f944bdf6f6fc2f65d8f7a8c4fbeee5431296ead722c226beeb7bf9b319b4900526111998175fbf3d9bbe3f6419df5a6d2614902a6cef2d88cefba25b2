"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getESLintCoreRule = void 0;
exports.maybeGetESLintCoreRule = maybeGetESLintCoreRule;
const utils_1 = require("@typescript-eslint/utils");
const use_at_your_own_risk_1 = require("eslint/use-at-your-own-risk");
const getESLintCoreRule = (ruleId) => utils_1.ESLintUtils.nullThrows(use_at_your_own_risk_1.builtinRules.get(ruleId), `ESLint's core rule '${ruleId}' not found.`);
exports.getESLintCoreRule = getESLintCoreRule;
function maybeGetESLintCoreRule(ruleId) {
    try {
        return (0, exports.getESLintCoreRule)(ruleId);
    }
    catch {
        return null;
    }
}
//# sourceMappingURL=getESLintCoreRule.js.map