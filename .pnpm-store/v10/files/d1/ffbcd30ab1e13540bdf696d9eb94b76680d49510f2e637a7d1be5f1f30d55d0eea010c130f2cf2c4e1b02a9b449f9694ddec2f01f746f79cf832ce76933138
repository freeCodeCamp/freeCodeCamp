"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'no-wait-for-multiple-assertions';
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow the use of multiple `expect` calls inside `waitFor`',
            recommendedConfig: {
                dom: 'error',
                angular: 'error',
                react: 'error',
                vue: 'error',
                marko: 'error',
            },
        },
        messages: {
            noWaitForMultipleAssertion: 'Avoid using multiple assertions within `waitFor` callback',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context, _, helpers) {
        function getExpectNodes(body) {
            return body.filter((node) => {
                if (!(0, node_utils_1.isExpressionStatement)(node)) {
                    return false;
                }
                const expressionIdentifier = (0, node_utils_1.getPropertyIdentifierNode)(node);
                if (!expressionIdentifier) {
                    return false;
                }
                return expressionIdentifier.name === 'expect';
            });
        }
        function reportMultipleAssertion(node) {
            if (!node.parent) {
                return;
            }
            const callExpressionNode = node.parent.parent;
            const callExpressionIdentifier = (0, node_utils_1.getPropertyIdentifierNode)(callExpressionNode);
            if (!callExpressionIdentifier) {
                return;
            }
            if (!helpers.isAsyncUtil(callExpressionIdentifier, ['waitFor'])) {
                return;
            }
            const expectNodes = getExpectNodes(node.body);
            if (expectNodes.length <= 1) {
                return;
            }
            for (let i = 0; i < expectNodes.length; i++) {
                if (i !== 0) {
                    context.report({
                        node: expectNodes[i],
                        messageId: 'noWaitForMultipleAssertion',
                    });
                }
            }
        }
        return {
            'CallExpression > ArrowFunctionExpression > BlockStatement': reportMultipleAssertion,
            'CallExpression > FunctionExpression > BlockStatement': reportMultipleAssertion,
        };
    },
});
