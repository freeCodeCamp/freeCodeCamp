"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-loss-of-precision');
exports.default = (0, util_1.createRule)({
    name: 'no-loss-of-precision',
    meta: {
        type: 'problem',
        // defaultOptions, -- base rule does not use defaultOptions
        deprecated: {
            deprecatedSince: '8.0.0',
            replacedBy: [
                {
                    rule: {
                        name: 'no-loss-of-precision',
                        url: 'https://eslint.org/docs/latest/rules/no-loss-of-precision',
                    },
                },
            ],
            url: 'https://github.com/typescript-eslint/typescript-eslint/pull/8832',
        },
        docs: {
            description: 'Disallow literal numbers that lose precision',
            extendsBaseRule: true,
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        messages: baseRule.meta.messages,
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        return baseRule.create(context);
    },
});
//# sourceMappingURL=no-loss-of-precision.js.map