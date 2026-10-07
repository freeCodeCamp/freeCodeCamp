"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'no-promise-in-fire-event';
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow the use of promises passed to a `fireEvent` method',
            recommendedConfig: {
                dom: 'error',
                angular: 'error',
                react: 'error',
                vue: 'error',
                marko: 'error',
            },
        },
        messages: {
            noPromiseInFireEvent: "A promise shouldn't be passed to a `fireEvent` method, instead pass the DOM element",
        },
        schema: [],
    },
    defaultOptions: [],
    create(context, _, helpers) {
        function checkSuspiciousNode(node, originalNode) {
            if (utils_1.ASTUtils.isAwaitExpression(node)) {
                return;
            }
            if ((0, node_utils_1.isNewExpression)(node)) {
                if ((0, node_utils_1.isPromiseIdentifier)(node.callee)) {
                    context.report({
                        node: originalNode !== null && originalNode !== void 0 ? originalNode : node,
                        messageId: 'noPromiseInFireEvent',
                    });
                    return;
                }
            }
            if ((0, node_utils_1.isCallExpression)(node)) {
                const domElementIdentifier = (0, node_utils_1.getDeepestIdentifierNode)(node);
                if (!domElementIdentifier) {
                    return;
                }
                if (helpers.isAsyncQuery(domElementIdentifier) ||
                    (0, node_utils_1.isPromiseIdentifier)(domElementIdentifier)) {
                    context.report({
                        node: originalNode !== null && originalNode !== void 0 ? originalNode : node,
                        messageId: 'noPromiseInFireEvent',
                    });
                    return;
                }
            }
            if (utils_1.ASTUtils.isIdentifier(node)) {
                const nodeVariable = utils_1.ASTUtils.findVariable(context.getScope(), node.name);
                if (!nodeVariable) {
                    return;
                }
                for (const definition of nodeVariable.defs) {
                    const variableDeclarator = definition.node;
                    if (variableDeclarator.init) {
                        checkSuspiciousNode(variableDeclarator.init, node);
                    }
                }
            }
        }
        return {
            'CallExpression Identifier'(node) {
                if (!helpers.isFireEventMethod(node)) {
                    return;
                }
                const closestCallExpression = (0, node_utils_1.findClosestCallExpressionNode)(node, true);
                if (!closestCallExpression) {
                    return;
                }
                const domElementArgument = closestCallExpression.arguments[0];
                checkSuspiciousNode(domElementArgument);
            },
        };
    },
});
