"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'await-async-utils';
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce promises from async utils to be awaited properly',
            recommendedConfig: {
                dom: 'error',
                angular: 'error',
                react: 'error',
                vue: 'error',
                marko: 'error',
            },
        },
        messages: {
            awaitAsyncUtil: 'Promise returned from `{{ name }}` must be handled',
            asyncUtilWrapper: 'Promise returned from {{ name }} wrapper over async util must be handled',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context, _, helpers) {
        const functionWrappersNames = [];
        function detectAsyncUtilWrapper(node) {
            const innerFunction = (0, node_utils_1.getInnermostReturningFunction)(context, node);
            if (!innerFunction) {
                return;
            }
            const functionName = (0, node_utils_1.getFunctionName)(innerFunction);
            if (functionName.length === 0) {
                return;
            }
            functionWrappersNames.push(functionName);
        }
        function detectDestructuredAsyncUtilWrapperAliases(node) {
            for (const property of node.properties) {
                if (!(0, node_utils_1.isProperty)(property)) {
                    continue;
                }
                if (!utils_1.ASTUtils.isIdentifier(property.key) ||
                    !utils_1.ASTUtils.isIdentifier(property.value)) {
                    continue;
                }
                if (functionWrappersNames.includes(property.key.name)) {
                    const isDestructuredAsyncWrapperPropertyRenamed = property.key.name !== property.value.name;
                    if (isDestructuredAsyncWrapperPropertyRenamed) {
                        functionWrappersNames.push(property.value.name);
                    }
                }
            }
        }
        const getMessageId = (node) => {
            if (helpers.isAsyncUtil(node)) {
                return 'awaitAsyncUtil';
            }
            return 'asyncUtilWrapper';
        };
        return {
            VariableDeclarator(node) {
                var _a, _b;
                if ((0, node_utils_1.isObjectPattern)(node.id)) {
                    detectDestructuredAsyncUtilWrapperAliases(node.id);
                    return;
                }
                const isAssigningKnownAsyncFunctionWrapper = utils_1.ASTUtils.isIdentifier(node.id) &&
                    node.init !== null &&
                    functionWrappersNames.includes((_b = (_a = (0, node_utils_1.getDeepestIdentifierNode)(node.init)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '');
                if (isAssigningKnownAsyncFunctionWrapper) {
                    functionWrappersNames.push(node.id.name);
                }
            },
            'CallExpression Identifier'(node) {
                const isAsyncUtilOrKnownAliasAroundIt = helpers.isAsyncUtil(node) ||
                    functionWrappersNames.includes(node.name);
                if (!isAsyncUtilOrKnownAliasAroundIt) {
                    return;
                }
                if (helpers.isAsyncUtil(node)) {
                    detectAsyncUtilWrapper(node);
                }
                const closestCallExpression = (0, node_utils_1.findClosestCallExpressionNode)(node, true);
                if (!(closestCallExpression === null || closestCallExpression === void 0 ? void 0 : closestCallExpression.parent)) {
                    return;
                }
                const references = (0, node_utils_1.getVariableReferences)(context, closestCallExpression.parent);
                if (references.length === 0) {
                    if (!(0, node_utils_1.isPromiseHandled)(node)) {
                        context.report({
                            node,
                            messageId: getMessageId(node),
                            data: {
                                name: node.name,
                            },
                        });
                    }
                }
                else {
                    for (const reference of references) {
                        const referenceNode = reference.identifier;
                        if (!(0, node_utils_1.isPromiseHandled)(referenceNode)) {
                            context.report({
                                node,
                                messageId: getMessageId(node),
                                data: {
                                    name: node.name,
                                },
                            });
                            return;
                        }
                    }
                }
            },
        };
    },
});
