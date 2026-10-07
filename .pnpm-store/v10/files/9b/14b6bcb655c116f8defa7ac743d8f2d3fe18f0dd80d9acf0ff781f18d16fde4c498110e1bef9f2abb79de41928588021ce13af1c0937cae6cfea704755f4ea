"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
const utils_2 = require("../utils");
exports.RULE_NAME = 'prefer-explicit-assert';
const isAtTopLevel = (node) => {
    var _a, _b, _c;
    return (!!((_a = node.parent) === null || _a === void 0 ? void 0 : _a.parent) &&
        node.parent.parent.type === 'ExpressionStatement') ||
        (((_c = (_b = node.parent) === null || _b === void 0 ? void 0 : _b.parent) === null || _c === void 0 ? void 0 : _c.type) === 'AwaitExpression' &&
            !!node.parent.parent.parent &&
            node.parent.parent.parent.type === 'ExpressionStatement');
};
const isVariableDeclaration = (node) => {
    if ((0, node_utils_1.isCallExpression)(node.parent) &&
        utils_1.ASTUtils.isAwaitExpression(node.parent.parent) &&
        utils_1.ASTUtils.isVariableDeclarator(node.parent.parent.parent)) {
        return true;
    }
    if ((0, node_utils_1.isCallExpression)(node.parent) &&
        utils_1.ASTUtils.isVariableDeclarator(node.parent.parent)) {
        return true;
    }
    if ((0, node_utils_1.isMemberExpression)(node.parent) &&
        (0, node_utils_1.isCallExpression)(node.parent.parent) &&
        utils_1.ASTUtils.isAwaitExpression(node.parent.parent.parent) &&
        utils_1.ASTUtils.isVariableDeclarator(node.parent.parent.parent.parent)) {
        return true;
    }
    if ((0, node_utils_1.isMemberExpression)(node.parent) &&
        (0, node_utils_1.isCallExpression)(node.parent.parent) &&
        utils_1.ASTUtils.isVariableDeclarator(node.parent.parent.parent)) {
        return true;
    }
    return false;
};
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Suggest using explicit assertions rather than standalone queries',
            recommendedConfig: {
                dom: false,
                angular: false,
                react: false,
                vue: false,
                marko: false,
            },
        },
        messages: {
            preferExplicitAssert: 'Wrap stand-alone `{{queryType}}` query with `expect` function for better explicit assertion',
            preferExplicitAssertAssertion: '`getBy*` queries must be asserted with `{{assertion}}`',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    assertion: {
                        type: 'string',
                        enum: utils_2.PRESENCE_MATCHERS,
                    },
                    includeFindQueries: { type: 'boolean' },
                },
            },
        ],
    },
    defaultOptions: [{ includeFindQueries: true }],
    create(context, [options], helpers) {
        const { assertion, includeFindQueries } = options;
        const getQueryCalls = [];
        const findQueryCalls = [];
        return {
            'CallExpression Identifier'(node) {
                if (helpers.isGetQueryVariant(node)) {
                    getQueryCalls.push(node);
                }
                if (helpers.isFindQueryVariant(node)) {
                    findQueryCalls.push(node);
                }
            },
            'Program:exit'() {
                if (includeFindQueries) {
                    findQueryCalls.forEach((queryCall) => {
                        const memberExpression = (0, node_utils_1.isMemberExpression)(queryCall.parent)
                            ? queryCall.parent
                            : queryCall;
                        if (isVariableDeclaration(queryCall) ||
                            !isAtTopLevel(memberExpression)) {
                            return;
                        }
                        context.report({
                            node: queryCall,
                            messageId: 'preferExplicitAssert',
                            data: {
                                queryType: 'findBy*',
                            },
                        });
                    });
                }
                getQueryCalls.forEach((queryCall) => {
                    const node = (0, node_utils_1.isMemberExpression)(queryCall.parent)
                        ? queryCall.parent
                        : queryCall;
                    if (isAtTopLevel(node)) {
                        context.report({
                            node: queryCall,
                            messageId: 'preferExplicitAssert',
                            data: {
                                queryType: 'getBy*',
                            },
                        });
                    }
                    if (assertion) {
                        const expectCallNode = (0, node_utils_1.findClosestCallNode)(node, 'expect');
                        if (!expectCallNode)
                            return;
                        const expectStatement = expectCallNode.parent;
                        if (!(0, node_utils_1.isMemberExpression)(expectStatement)) {
                            return;
                        }
                        const property = expectStatement.property;
                        if (!utils_1.ASTUtils.isIdentifier(property)) {
                            return;
                        }
                        let matcher = property.name;
                        let isNegatedMatcher = false;
                        if (matcher === 'not' &&
                            (0, node_utils_1.isMemberExpression)(expectStatement.parent) &&
                            utils_1.ASTUtils.isIdentifier(expectStatement.parent.property)) {
                            isNegatedMatcher = true;
                            matcher = expectStatement.parent.property.name;
                        }
                        const shouldEnforceAssertion = (!isNegatedMatcher && utils_2.PRESENCE_MATCHERS.includes(matcher)) ||
                            (isNegatedMatcher && utils_2.ABSENCE_MATCHERS.includes(matcher));
                        if (shouldEnforceAssertion && matcher !== assertion) {
                            context.report({
                                node: property,
                                messageId: 'preferExplicitAssertAssertion',
                                data: {
                                    assertion,
                                },
                            });
                        }
                    }
                });
            },
        };
    },
});
