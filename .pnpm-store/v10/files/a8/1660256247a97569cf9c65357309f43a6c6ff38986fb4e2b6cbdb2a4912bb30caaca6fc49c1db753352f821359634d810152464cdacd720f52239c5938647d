"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'no-wait-for-side-effects';
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow the use of side effects in `waitFor`',
            recommendedConfig: {
                dom: 'error',
                angular: 'error',
                react: 'error',
                vue: 'error',
                marko: 'error',
            },
        },
        messages: {
            noSideEffectsWaitFor: 'Avoid using side effects within `waitFor` callback',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context, _, helpers) {
        function isCallerWaitFor(node) {
            if (!node.parent) {
                return false;
            }
            const callExpressionNode = node.parent.parent;
            const callExpressionIdentifier = (0, node_utils_1.getPropertyIdentifierNode)(callExpressionNode);
            return (!!callExpressionIdentifier &&
                helpers.isAsyncUtil(callExpressionIdentifier, ['waitFor']));
        }
        function isCallerThen(node) {
            if (!node.parent) {
                return false;
            }
            const callExpressionNode = node.parent.parent;
            return (0, node_utils_1.hasThenProperty)(callExpressionNode.callee);
        }
        function isRenderInVariableDeclaration(node) {
            return ((0, node_utils_1.isVariableDeclaration)(node) &&
                node.declarations.some(helpers.isRenderVariableDeclarator));
        }
        function isRenderInExpressionStatement(node) {
            if (!(0, node_utils_1.isExpressionStatement)(node) ||
                !(0, node_utils_1.isAssignmentExpression)(node.expression)) {
                return false;
            }
            const expressionIdentifier = (0, node_utils_1.getPropertyIdentifierNode)(node.expression.right);
            if (!expressionIdentifier) {
                return false;
            }
            return helpers.isRenderUtil(expressionIdentifier);
        }
        function isRenderInAssignmentExpression(node) {
            if (!(0, node_utils_1.isAssignmentExpression)(node)) {
                return false;
            }
            const expressionIdentifier = (0, node_utils_1.getPropertyIdentifierNode)(node.right);
            if (!expressionIdentifier) {
                return false;
            }
            return helpers.isRenderUtil(expressionIdentifier);
        }
        function isRenderInSequenceAssignment(node) {
            if (!(0, node_utils_1.isSequenceExpression)(node)) {
                return false;
            }
            return node.expressions.some(isRenderInAssignmentExpression);
        }
        function isSideEffectInVariableDeclaration(node) {
            return node.declarations.some((declaration) => {
                if ((0, node_utils_1.isCallExpression)(declaration.init)) {
                    const test = (0, node_utils_1.getPropertyIdentifierNode)(declaration.init);
                    if (!test) {
                        return false;
                    }
                    return (helpers.isFireEventUtil(test) ||
                        helpers.isUserEventUtil(test) ||
                        helpers.isRenderUtil(test));
                }
                return false;
            });
            return false;
        }
        function getSideEffectNodes(body) {
            return body.filter((node) => {
                if (!(0, node_utils_1.isExpressionStatement)(node) && !(0, node_utils_1.isVariableDeclaration)(node)) {
                    return false;
                }
                if (isRenderInVariableDeclaration(node) ||
                    isRenderInExpressionStatement(node)) {
                    return true;
                }
                if ((0, node_utils_1.isVariableDeclaration)(node) &&
                    isSideEffectInVariableDeclaration(node)) {
                    return true;
                }
                const expressionIdentifier = (0, node_utils_1.getPropertyIdentifierNode)(node);
                if (!expressionIdentifier) {
                    return false;
                }
                return (helpers.isFireEventUtil(expressionIdentifier) ||
                    helpers.isUserEventUtil(expressionIdentifier) ||
                    helpers.isRenderUtil(expressionIdentifier));
            });
        }
        function reportSideEffects(node) {
            if (!isCallerWaitFor(node)) {
                return;
            }
            if (isCallerThen(node)) {
                return;
            }
            getSideEffectNodes(node.body).forEach((sideEffectNode) => context.report({
                node: sideEffectNode,
                messageId: 'noSideEffectsWaitFor',
            }));
        }
        function reportImplicitReturnSideEffect(node) {
            if (!isCallerWaitFor(node)) {
                return;
            }
            const expressionIdentifier = (0, node_utils_1.isCallExpression)(node)
                ? (0, node_utils_1.getPropertyIdentifierNode)(node.callee)
                : null;
            if (!expressionIdentifier &&
                !isRenderInAssignmentExpression(node) &&
                !isRenderInSequenceAssignment(node)) {
                return;
            }
            if (expressionIdentifier &&
                !helpers.isFireEventUtil(expressionIdentifier) &&
                !helpers.isUserEventUtil(expressionIdentifier) &&
                !helpers.isRenderUtil(expressionIdentifier)) {
                return;
            }
            context.report({
                node,
                messageId: 'noSideEffectsWaitFor',
            });
        }
        return {
            'CallExpression > ArrowFunctionExpression > BlockStatement': reportSideEffects,
            'CallExpression > ArrowFunctionExpression > CallExpression': reportImplicitReturnSideEffect,
            'CallExpression > ArrowFunctionExpression > AssignmentExpression': reportImplicitReturnSideEffect,
            'CallExpression > ArrowFunctionExpression > SequenceExpression': reportImplicitReturnSideEffect,
            'CallExpression > FunctionExpression > BlockStatement': reportSideEffects,
        };
    },
});
