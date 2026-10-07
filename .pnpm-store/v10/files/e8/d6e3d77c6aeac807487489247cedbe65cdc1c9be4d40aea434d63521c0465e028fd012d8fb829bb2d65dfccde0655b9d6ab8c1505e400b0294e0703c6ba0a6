"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'await-fire-event';
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce promises from `fireEvent` methods to be handled',
            recommendedConfig: {
                dom: false,
                angular: false,
                react: false,
                vue: 'error',
                marko: 'error',
            },
        },
        messages: {
            awaitFireEvent: 'Promise returned from `fireEvent.{{ name }}` must be handled',
            fireEventWrapper: 'Promise returned from `{{ name }}` wrapper over fire event method must be handled',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context, _, helpers) {
        const functionWrappersNames = [];
        function reportUnhandledNode(node, closestCallExpressionNode, messageId = 'awaitFireEvent') {
            if (!(0, node_utils_1.isPromiseHandled)(node)) {
                context.report({
                    node: closestCallExpressionNode.callee,
                    messageId,
                    data: { name: node.name },
                });
            }
        }
        function detectFireEventMethodWrapper(node) {
            const innerFunction = (0, node_utils_1.getInnermostReturningFunction)(context, node);
            if (innerFunction) {
                functionWrappersNames.push((0, node_utils_1.getFunctionName)(innerFunction));
            }
        }
        return {
            'CallExpression Identifier'(node) {
                if (helpers.isFireEventMethod(node)) {
                    detectFireEventMethodWrapper(node);
                    const closestCallExpression = (0, node_utils_1.findClosestCallExpressionNode)(node, true);
                    if (!(closestCallExpression === null || closestCallExpression === void 0 ? void 0 : closestCallExpression.parent)) {
                        return;
                    }
                    const references = (0, node_utils_1.getVariableReferences)(context, closestCallExpression.parent);
                    if (references.length === 0) {
                        reportUnhandledNode(node, closestCallExpression);
                    }
                    else {
                        for (const reference of references) {
                            if (utils_1.ASTUtils.isIdentifier(reference.identifier)) {
                                reportUnhandledNode(reference.identifier, closestCallExpression);
                            }
                        }
                    }
                }
                else if (functionWrappersNames.includes(node.name)) {
                    const closestCallExpression = (0, node_utils_1.findClosestCallExpressionNode)(node, true);
                    if (!closestCallExpression) {
                        return;
                    }
                    reportUnhandledNode(node, closestCallExpression, 'fireEventWrapper');
                }
            },
        };
    },
});
