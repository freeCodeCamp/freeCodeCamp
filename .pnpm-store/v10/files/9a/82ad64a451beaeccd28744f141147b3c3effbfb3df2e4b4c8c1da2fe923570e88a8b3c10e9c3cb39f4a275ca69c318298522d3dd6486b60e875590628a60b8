"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-useless-constructor');
/**
 * Check if method with accessibility is not useless
 */
function checkAccessibility(node) {
    switch (node.accessibility) {
        case 'protected':
        case 'private':
            return false;
        case 'public':
            if (node.parent.parent.superClass) {
                return false;
            }
            break;
    }
    return true;
}
/**
 * Check if method is not useless due to typescript parameter properties and decorators
 */
function checkParams(node) {
    return !node.value.params.some(param => param.type === utils_1.AST_NODE_TYPES.TSParameterProperty ||
        param.decorators.length);
}
exports.default = (0, util_1.createRule)({
    name: 'no-useless-constructor',
    meta: {
        type: 'problem',
        // defaultOptions, -- base rule does not use defaultOptions
        docs: {
            description: 'Disallow unnecessary constructors',
            extendsBaseRule: true,
            recommended: 'strict',
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        messages: baseRule.meta.messages,
        schema: baseRule.meta.schema,
    },
    defaultOptions: [],
    create(context) {
        const rules = baseRule.create(context);
        return {
            MethodDefinition(node) {
                if (node.value.type === utils_1.AST_NODE_TYPES.FunctionExpression &&
                    checkAccessibility(node) &&
                    checkParams(node)) {
                    rules.MethodDefinition(node);
                }
            },
        };
    },
});
//# sourceMappingURL=no-useless-constructor.js.map