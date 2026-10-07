"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'prefer-query-matchers';
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        docs: {
            description: 'Ensure the configured `get*`/`query*` query is used with the corresponding matchers',
            recommendedConfig: {
                dom: false,
                angular: false,
                react: false,
                vue: false,
                marko: false,
            },
        },
        messages: {
            wrongQueryForMatcher: 'Use `{{ query }}By*` queries for {{ matcher }}',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    validEntries: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                query: {
                                    type: 'string',
                                    enum: ['get', 'query'],
                                },
                                matcher: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
        ],
        type: 'suggestion',
    },
    defaultOptions: [
        {
            validEntries: [],
        },
    ],
    create(context, [{ validEntries }], helpers) {
        return {
            'CallExpression Identifier'(node) {
                const expectCallNode = (0, node_utils_1.findClosestCallNode)(node, 'expect');
                if (!expectCallNode || !(0, node_utils_1.isMemberExpression)(expectCallNode.parent)) {
                    return;
                }
                if (!helpers.isSyncQuery(node)) {
                    return;
                }
                const isGetBy = helpers.isGetQueryVariant(node);
                const expectStatement = expectCallNode.parent;
                for (const entry of validEntries) {
                    const { query, matcher } = entry;
                    const isMatchingAssertForThisEntry = helpers.isMatchingAssert(expectStatement, matcher);
                    if (!isMatchingAssertForThisEntry) {
                        continue;
                    }
                    const actualQuery = isGetBy ? 'get' : 'query';
                    if (query !== actualQuery) {
                        context.report({
                            node,
                            messageId: 'wrongQueryForMatcher',
                            data: { query, matcher },
                        });
                    }
                }
            },
        };
    },
});
