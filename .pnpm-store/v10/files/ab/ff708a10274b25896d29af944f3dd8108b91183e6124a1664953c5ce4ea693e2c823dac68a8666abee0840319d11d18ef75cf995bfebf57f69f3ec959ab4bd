"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-extra-non-null-assertion',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow extra non-null assertions',
            recommended: 'recommended',
        },
        fixable: 'code',
        messages: {
            noExtraNonNullAssertion: 'Forbidden extra non-null assertion.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function checkExtraNonNullAssertion(node) {
            context.report({
                node,
                messageId: 'noExtraNonNullAssertion',
                fix(fixer) {
                    return fixer.removeRange([node.range[1] - 1, node.range[1]]);
                },
            });
        }
        return {
            'CallExpression[optional = true] > TSNonNullExpression.callee': checkExtraNonNullAssertion,
            'MemberExpression[optional = true] > TSNonNullExpression.object': checkExtraNonNullAssertion,
            'TSNonNullExpression > TSNonNullExpression': checkExtraNonNullAssertion,
        };
    },
});
//# sourceMappingURL=no-extra-non-null-assertion.js.map