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
var _CaseValidator_expression, _CaseValidator_ignorePatterns, _CaseValidator_recommendationBuilder;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCaseValidator = exports.CaseValidator = void 0;
const preset_rules_1 = require("./preset-rules");
class CaseValidator {
    constructor(expression, ignorePatterns, recommendationBuilder = () => {
        throw new Error('Not implemented');
    }) {
        _CaseValidator_expression.set(this, void 0);
        _CaseValidator_ignorePatterns.set(this, void 0);
        _CaseValidator_recommendationBuilder.set(this, void 0);
        __classPrivateFieldSet(this, _CaseValidator_expression, expression, "f");
        __classPrivateFieldSet(this, _CaseValidator_ignorePatterns, ignorePatterns, "f");
        __classPrivateFieldSet(this, _CaseValidator_recommendationBuilder, recommendationBuilder, "f");
    }
    getRecommendedName(name) {
        const recommendedName = __classPrivateFieldGet(this, _CaseValidator_recommendationBuilder, "f").call(this, name);
        if (__classPrivateFieldGet(this, _CaseValidator_expression, "f").test(recommendedName))
            return recommendedName;
        throw new Error('Failed to build recommendation.');
    }
    validate(name) {
        if (__classPrivateFieldGet(this, _CaseValidator_ignorePatterns, "f").some(re => re.test(name)))
            return true;
        return __classPrivateFieldGet(this, _CaseValidator_expression, "f").test(name);
    }
}
exports.CaseValidator = CaseValidator;
_CaseValidator_expression = new WeakMap(), _CaseValidator_ignorePatterns = new WeakMap(), _CaseValidator_recommendationBuilder = new WeakMap();
const getCaseValidator = (ruleName, ignorePattern = []) => {
    const { expression, recommendationBuilder } = (0, preset_rules_1.getRule)(ruleName);
    return new CaseValidator(expression, ignorePattern.map(pattern => new RegExp(`^${pattern}$`)), recommendationBuilder);
};
exports.getCaseValidator = getCaseValidator;
