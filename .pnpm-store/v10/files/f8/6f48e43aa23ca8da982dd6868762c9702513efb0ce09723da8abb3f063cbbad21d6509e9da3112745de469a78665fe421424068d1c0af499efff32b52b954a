"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'prefer-query-by-disappearance';
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'problem',
        docs: {
            description: 'Suggest using `queryBy*` queries when waiting for disappearance',
            recommendedConfig: {
                dom: 'error',
                angular: 'error',
                react: 'error',
                vue: 'error',
                marko: 'error',
            },
        },
        messages: {
            preferQueryByDisappearance: 'Prefer using queryBy* when waiting for disappearance',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context, _, helpers) {
        function isWaitForElementToBeRemoved(node) {
            const identifierNode = (0, node_utils_1.getPropertyIdentifierNode)(node);
            if (!identifierNode) {
                return false;
            }
            return helpers.isAsyncUtil(identifierNode, ['waitForElementToBeRemoved']);
        }
        function reportExpression(node) {
            const argumentProperty = (0, node_utils_1.isMemberExpression)(node)
                ? (0, node_utils_1.getPropertyIdentifierNode)(node.property)
                : (0, node_utils_1.getPropertyIdentifierNode)(node);
            if (!argumentProperty) {
                return false;
            }
            if (helpers.isGetQueryVariant(argumentProperty) ||
                helpers.isFindQueryVariant(argumentProperty)) {
                context.report({
                    node: argumentProperty,
                    messageId: 'preferQueryByDisappearance',
                });
                return true;
            }
            return false;
        }
        function checkNonCallbackViolation(node) {
            if (!(0, node_utils_1.isCallExpression)(node)) {
                return false;
            }
            if (!(0, node_utils_1.isMemberExpression)(node.callee) &&
                !(0, node_utils_1.getPropertyIdentifierNode)(node.callee)) {
                return false;
            }
            return reportExpression(node.callee);
        }
        function isReturnViolation(node) {
            if (!(0, node_utils_1.isReturnStatement)(node) || !(0, node_utils_1.isCallExpression)(node.argument)) {
                return false;
            }
            return reportExpression(node.argument.callee);
        }
        function isNonReturnViolation(node) {
            if (!(0, node_utils_1.isExpressionStatement)(node) || !(0, node_utils_1.isCallExpression)(node.expression)) {
                return false;
            }
            if (!(0, node_utils_1.isMemberExpression)(node.expression.callee) &&
                !(0, node_utils_1.getPropertyIdentifierNode)(node.expression.callee)) {
                return false;
            }
            return reportExpression(node.expression.callee);
        }
        function isStatementViolation(statement) {
            return isReturnViolation(statement) || isNonReturnViolation(statement);
        }
        function checkFunctionExpressionViolation(node) {
            if (!(0, node_utils_1.isFunctionExpression)(node)) {
                return false;
            }
            return node.body.body.some((statement) => isStatementViolation(statement));
        }
        function isArrowFunctionBodyViolation(node) {
            if (!(0, node_utils_1.isArrowFunctionExpression)(node) || !(0, node_utils_1.isBlockStatement)(node.body)) {
                return false;
            }
            return node.body.body.some((statement) => isStatementViolation(statement));
        }
        function isArrowFunctionImplicitReturnViolation(node) {
            if (!(0, node_utils_1.isArrowFunctionExpression)(node) || !(0, node_utils_1.isCallExpression)(node.body)) {
                return false;
            }
            if (!(0, node_utils_1.isMemberExpression)(node.body.callee) &&
                !(0, node_utils_1.getPropertyIdentifierNode)(node.body.callee)) {
                return false;
            }
            return reportExpression(node.body.callee);
        }
        function checkArrowFunctionViolation(node) {
            return (isArrowFunctionBodyViolation(node) ||
                isArrowFunctionImplicitReturnViolation(node));
        }
        function check(node) {
            if (!isWaitForElementToBeRemoved(node)) {
                return;
            }
            const argumentNode = node.arguments[0];
            checkNonCallbackViolation(argumentNode);
            checkArrowFunctionViolation(argumentNode);
            checkFunctionExpressionViolation(argumentNode);
        }
        return {
            CallExpression: check,
        };
    },
});
