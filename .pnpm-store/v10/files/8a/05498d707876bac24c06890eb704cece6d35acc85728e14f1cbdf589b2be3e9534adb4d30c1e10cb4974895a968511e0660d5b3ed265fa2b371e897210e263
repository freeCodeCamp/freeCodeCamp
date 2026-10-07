"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-non-null-asserted-optional-chain',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow non-null assertions after an optional chain expression',
            recommended: 'recommended',
        },
        hasSuggestions: true,
        messages: {
            noNonNullOptionalChain: 'Optional chain expressions can return undefined by design - using a non-null assertion is unsafe and wrong.',
            suggestRemovingNonNull: 'You should remove the non-null assertion.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        return {
            // non-nulling a wrapped chain will scrub all nulls introduced by the chain
            // (x?.y)!
            // (x?.())!
            'TSNonNullExpression > ChainExpression'(node) {
                // selector guarantees this assertion
                const parent = node.parent;
                context.report({
                    node,
                    messageId: 'noNonNullOptionalChain',
                    // use a suggestion instead of a fixer, because this can obviously break type checks
                    suggest: [
                        {
                            messageId: 'suggestRemovingNonNull',
                            fix(fixer) {
                                return fixer.removeRange([
                                    parent.range[1] - 1,
                                    parent.range[1],
                                ]);
                            },
                        },
                    ],
                });
            },
            // non-nulling at the end of a chain will scrub all nulls introduced by the chain
            // x?.y!
            // x?.()!
            'ChainExpression > TSNonNullExpression'(node) {
                context.report({
                    node,
                    messageId: 'noNonNullOptionalChain',
                    // use a suggestion instead of a fixer, because this can obviously break type checks
                    suggest: [
                        {
                            messageId: 'suggestRemovingNonNull',
                            fix(fixer) {
                                return fixer.removeRange([node.range[1] - 1, node.range[1]]);
                            },
                        },
                    ],
                });
            },
        };
    },
});
//# sourceMappingURL=no-non-null-asserted-optional-chain.js.map