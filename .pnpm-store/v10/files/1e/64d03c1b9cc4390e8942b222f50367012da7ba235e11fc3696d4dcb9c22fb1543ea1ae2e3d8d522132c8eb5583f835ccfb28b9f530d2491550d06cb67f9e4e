"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-dupe-class-members');
exports.default = (0, util_1.createRule)({
    name: 'no-dupe-class-members',
    meta: {
        type: 'problem',
        // defaultOptions, -- base rule does not use defaultOptions
        docs: {
            description: 'Disallow duplicate class members',
            extendsBaseRule: true,
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        messages: baseRule.meta.messages,
        schema: baseRule.meta.schema,
    },
    defaultOptions: [],
    create(context) {
        const rules = baseRule.create(context);
        function wrapMemberDefinitionListener(coreListener) {
            return (node) => {
                if (node.computed) {
                    return;
                }
                if (node.value?.type === utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression) {
                    return;
                }
                return coreListener(node);
            };
        }
        return {
            ...rules,
            'MethodDefinition, PropertyDefinition': wrapMemberDefinitionListener(rules['MethodDefinition, PropertyDefinition']),
        };
    },
});
//# sourceMappingURL=no-dupe-class-members.js.map