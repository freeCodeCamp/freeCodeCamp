"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const semver = __importStar(require("semver"));
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
const is3dot9 = semver.satisfies(ts.version, `>= 3.9.0 || >= 3.9.1-rc || >= 3.9.0-beta`, {
    includePrerelease: true,
});
exports.default = util.createRule({
    name: 'no-non-null-asserted-optional-chain',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow non-null assertions after an optional chain expression',
            recommended: 'error',
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
        // TS3.9 made a breaking change to how non-null works with optional chains.
        // Pre-3.9,  `x?.y!.z` means `(x?.y).z` - i.e. it essentially scrubbed the optionality from the chain
        // Post-3.9, `x?.y!.z` means `x?.y!.z`  - i.e. it just asserts that the property `y` is non-null, not the result of `x?.y`.
        // This means that for > 3.9, x?.y!.z is valid!
        //
        // NOTE: these cases are still invalid for 3.9:
        // - x?.y.z!
        // - (x?.y)!.z
        const baseSelectors = {
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
        if (is3dot9) {
            return baseSelectors;
        }
        return Object.assign(Object.assign({}, baseSelectors), { [[
                // > :not(ChainExpression) because that case is handled by a previous selector
                'MemberExpression > TSNonNullExpression.object > :not(ChainExpression)',
                'CallExpression > TSNonNullExpression.callee > :not(ChainExpression)',
            ].join(', ')](child) {
                // selector guarantees this assertion
                const node = child.parent;
                let current = child;
                while (current) {
                    switch (current.type) {
                        case utils_1.AST_NODE_TYPES.MemberExpression:
                            if (current.optional) {
                                // found an optional chain! stop traversing
                                break;
                            }
                            current = current.object;
                            continue;
                        case utils_1.AST_NODE_TYPES.CallExpression:
                            if (current.optional) {
                                // found an optional chain! stop traversing
                                break;
                            }
                            current = current.callee;
                            continue;
                        default:
                            // something that's not a ChainElement, which means this is not an optional chain we want to check
                            return;
                    }
                }
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
            } });
    },
});
//# sourceMappingURL=no-non-null-asserted-optional-chain.js.map