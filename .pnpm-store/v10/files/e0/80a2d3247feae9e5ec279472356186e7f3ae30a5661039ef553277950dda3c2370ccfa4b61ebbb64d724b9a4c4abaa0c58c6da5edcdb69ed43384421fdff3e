"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const analyzeChain_1 = require("./prefer-optional-chain-utils/analyzeChain");
const checkNullishAndReport_1 = require("./prefer-optional-chain-utils/checkNullishAndReport");
const gatherLogicalOperands_1 = require("./prefer-optional-chain-utils/gatherLogicalOperands");
exports.default = (0, util_1.createRule)({
    name: 'prefer-optional-chain',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects',
            recommended: 'stylistic',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            optionalChainSuggest: 'Change to an optional chain.',
            preferOptionalChain: "Prefer using an optional chain expression instead, as it's more concise and easier to read.",
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: {
                        type: 'boolean',
                        description: 'Allow autofixers that will change the return type of the expression. This option is considered unsafe as it may break the build.',
                    },
                    checkAny: {
                        type: 'boolean',
                        description: 'Check operands that are typed as `any` when inspecting "loose boolean" operands.',
                    },
                    checkBigInt: {
                        type: 'boolean',
                        description: 'Check operands that are typed as `bigint` when inspecting "loose boolean" operands.',
                    },
                    checkBoolean: {
                        type: 'boolean',
                        description: 'Check operands that are typed as `boolean` when inspecting "loose boolean" operands.',
                    },
                    checkNumber: {
                        type: 'boolean',
                        description: 'Check operands that are typed as `number` when inspecting "loose boolean" operands.',
                    },
                    checkString: {
                        type: 'boolean',
                        description: 'Check operands that are typed as `string` when inspecting "loose boolean" operands.',
                    },
                    checkUnknown: {
                        type: 'boolean',
                        description: 'Check operands that are typed as `unknown` when inspecting "loose boolean" operands.',
                    },
                    requireNullish: {
                        type: 'boolean',
                        description: 'Skip operands that are not typed with `null` and/or `undefined` when inspecting "loose boolean" operands.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: false,
            checkAny: true,
            checkBigInt: true,
            checkBoolean: true,
            checkNumber: true,
            checkString: true,
            checkUnknown: true,
            requireNullish: false,
        },
    ],
    create(context, [options]) {
        const parserServices = (0, util_1.getParserServices)(context);
        const seenLogicals = new Set();
        return {
            'LogicalExpression[operator!="??"]'(node) {
                if (seenLogicals.has(node)) {
                    return;
                }
                const { newlySeenLogicals, operands } = (0, gatherLogicalOperands_1.gatherLogicalOperands)(node, parserServices, context.sourceCode, options);
                for (const logical of newlySeenLogicals) {
                    seenLogicals.add(logical);
                }
                let currentChain = [];
                for (const operand of operands) {
                    if (operand.type === gatherLogicalOperands_1.OperandValidity.Invalid) {
                        (0, analyzeChain_1.analyzeChain)(context, parserServices, options, node, node.operator, currentChain);
                        currentChain = [];
                    }
                    else if (operand.type === gatherLogicalOperands_1.OperandValidity.Last) {
                        (0, analyzeChain_1.analyzeChain)(context, parserServices, options, node, node.operator, currentChain, operand);
                        currentChain = [];
                    }
                    else {
                        currentChain.push(operand);
                    }
                }
                // make sure to check whatever's left
                if (currentChain.length > 0) {
                    (0, analyzeChain_1.analyzeChain)(context, parserServices, options, node, node.operator, currentChain);
                }
            },
            // specific handling for `(foo ?? {}).bar` / `(foo || {}).bar`
            'LogicalExpression[operator="||"], LogicalExpression[operator="??"]'(node) {
                const leftNode = node.left;
                const rightNode = node.right;
                const parentNode = node.parent;
                const isRightNodeAnEmptyObjectLiteral = rightNode.type === utils_1.AST_NODE_TYPES.ObjectExpression &&
                    rightNode.properties.length === 0;
                if (!isRightNodeAnEmptyObjectLiteral ||
                    parentNode.type !== utils_1.AST_NODE_TYPES.MemberExpression ||
                    parentNode.optional) {
                    return;
                }
                seenLogicals.add(node);
                function isLeftSideLowerPrecedence() {
                    const logicalTsNode = parserServices.esTreeNodeToTSNodeMap.get(node);
                    const leftTsNode = parserServices.esTreeNodeToTSNodeMap.get(leftNode);
                    const leftPrecedence = (0, util_1.getOperatorPrecedence)(leftTsNode.kind, logicalTsNode.operatorToken.kind);
                    return leftPrecedence < util_1.OperatorPrecedence.LeftHandSide;
                }
                (0, checkNullishAndReport_1.checkNullishAndReport)(context, parserServices, options, [leftNode], {
                    node: parentNode,
                    messageId: 'preferOptionalChain',
                    suggest: [
                        {
                            messageId: 'optionalChainSuggest',
                            fix: (fixer) => {
                                const leftNodeText = context.sourceCode.getText(leftNode);
                                // Any node that is made of an operator with higher or equal precedence,
                                const maybeWrappedLeftNode = isLeftSideLowerPrecedence()
                                    ? `(${leftNodeText})`
                                    : leftNodeText;
                                const propertyToBeOptionalText = context.sourceCode.getText(parentNode.property);
                                const maybeWrappedProperty = parentNode.computed
                                    ? `[${propertyToBeOptionalText}]`
                                    : propertyToBeOptionalText;
                                return fixer.replaceTextRange(parentNode.range, `${maybeWrappedLeftNode}?.${maybeWrappedProperty}`);
                            },
                        },
                    ],
                });
            },
        };
    },
});
//# sourceMappingURL=prefer-optional-chain.js.map