"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'no-wait-for-snapshot';
const SNAPSHOT_REGEXP = /^(toMatchSnapshot|toMatchInlineSnapshot)$/;
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'problem',
        docs: {
            description: 'Ensures no snapshot is generated inside of a `waitFor` call',
            recommendedConfig: {
                dom: 'error',
                angular: 'error',
                react: 'error',
                vue: 'error',
                marko: 'error',
            },
        },
        messages: {
            noWaitForSnapshot: "A snapshot can't be generated inside of a `{{ name }}` call",
        },
        schema: [],
    },
    defaultOptions: [],
    create(context, _, helpers) {
        function getClosestAsyncUtil(node) {
            let n = node;
            do {
                const callExpression = (0, node_utils_1.findClosestCallExpressionNode)(n);
                if (!callExpression) {
                    return null;
                }
                if (utils_1.ASTUtils.isIdentifier(callExpression.callee) &&
                    helpers.isAsyncUtil(callExpression.callee)) {
                    return callExpression.callee;
                }
                if ((0, node_utils_1.isMemberExpression)(callExpression.callee) &&
                    utils_1.ASTUtils.isIdentifier(callExpression.callee.property) &&
                    helpers.isAsyncUtil(callExpression.callee.property)) {
                    return callExpression.callee.property;
                }
                if (callExpression.parent) {
                    n = (0, node_utils_1.findClosestCallExpressionNode)(callExpression.parent);
                }
            } while (n !== null);
            return null;
        }
        return {
            [`Identifier[name=${String(SNAPSHOT_REGEXP)}]`](node) {
                const closestAsyncUtil = getClosestAsyncUtil(node);
                if (closestAsyncUtil === null) {
                    return;
                }
                context.report({
                    node,
                    messageId: 'noWaitForSnapshot',
                    data: { name: closestAsyncUtil.name },
                });
            },
        };
    },
});
