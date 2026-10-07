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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-unnecessary-boolean-literal-compare',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow unnecessary equality comparisons against boolean literals',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            comparingNullableToFalse: 'This expression unnecessarily compares a nullable boolean value to false instead of using the ?? operator to provide a default.',
            comparingNullableToTrueDirect: 'This expression unnecessarily compares a nullable boolean value to true instead of using it directly.',
            comparingNullableToTrueNegated: 'This expression unnecessarily compares a nullable boolean value to true instead of negating it.',
            direct: 'This expression unnecessarily compares a boolean value to a boolean instead of using it directly.',
            negated: 'This expression unnecessarily compares a boolean value to a boolean instead of negating it.',
            noStrictNullCheck: 'This rule requires the `strictNullChecks` compiler option to be turned on to function correctly.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowComparingNullableBooleansToFalse: {
                        type: 'boolean',
                        description: 'Whether to allow comparisons between nullable boolean variables and `false`.',
                    },
                    allowComparingNullableBooleansToTrue: {
                        type: 'boolean',
                        description: 'Whether to allow comparisons between nullable boolean variables and `true`.',
                    },
                    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: {
                        type: 'boolean',
                        description: 'Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowComparingNullableBooleansToFalse: true,
            allowComparingNullableBooleansToTrue: true,
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        },
    ],
    create(context, [options]) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        const compilerOptions = services.program.getCompilerOptions();
        const isStrictNullChecks = tsutils.isStrictCompilerOptionEnabled(compilerOptions, 'strictNullChecks');
        if (!isStrictNullChecks &&
            options.allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing !== true) {
            context.report({
                loc: {
                    start: { column: 0, line: 0 },
                    end: { column: 0, line: 0 },
                },
                messageId: 'noStrictNullCheck',
            });
        }
        function getBooleanComparison(node) {
            const comparison = deconstructComparison(node);
            if (!comparison) {
                return undefined;
            }
            const { constraintType, isTypeParameter } = (0, util_1.getConstraintInfo)(checker, services.getTypeAtLocation(comparison.expression));
            if (isTypeParameter && constraintType == null) {
                return undefined;
            }
            if (isBooleanType(constraintType)) {
                return {
                    ...comparison,
                    expressionIsNullableBoolean: false,
                };
            }
            if (isNullableBoolean(constraintType)) {
                return {
                    ...comparison,
                    expressionIsNullableBoolean: true,
                };
            }
            return undefined;
        }
        function isBooleanType(expressionType) {
            return tsutils.isTypeFlagSet(expressionType, ts.TypeFlags.Boolean | ts.TypeFlags.BooleanLiteral);
        }
        /**
         * checks if the expressionType is a union that
         *   1) contains at least one nullish type (null or undefined)
         *   2) contains at least once boolean type (true or false or boolean)
         *   3) does not contain any types besides nullish and boolean types
         */
        function isNullableBoolean(expressionType) {
            if (!expressionType.isUnion()) {
                return false;
            }
            const { types } = expressionType;
            const nonNullishTypes = types.filter(type => !tsutils.isTypeFlagSet(type, ts.TypeFlags.Undefined | ts.TypeFlags.Null));
            const hasNonNullishType = nonNullishTypes.length > 0;
            if (!hasNonNullishType) {
                return false;
            }
            const hasNullableType = nonNullishTypes.length < types.length;
            if (!hasNullableType) {
                return false;
            }
            const allNonNullishTypesAreBoolean = nonNullishTypes.every(isBooleanType);
            if (!allNonNullishTypesAreBoolean) {
                return false;
            }
            return true;
        }
        function deconstructComparison(node) {
            const comparisonType = getEqualsKind(node.operator);
            if (!comparisonType) {
                return undefined;
            }
            for (const [against, expression] of [
                [node.right, node.left],
                [node.left, node.right],
            ]) {
                if (against.type !== utils_1.AST_NODE_TYPES.Literal ||
                    typeof against.value !== 'boolean') {
                    continue;
                }
                const booleanLiteral = against.value ? 'true' : 'false';
                const negated = !comparisonType.isPositive;
                return {
                    booleanLiteral,
                    expression,
                    negated,
                };
            }
            return undefined;
        }
        function nodeIsUnaryNegation(node) {
            return (node.type === utils_1.AST_NODE_TYPES.UnaryExpression && node.operator === '!');
        }
        return {
            BinaryExpression(node) {
                const comparison = getBooleanComparison(node);
                if (comparison == null) {
                    return;
                }
                if (comparison.expressionIsNullableBoolean) {
                    if (comparison.booleanLiteral === 'true' &&
                        options.allowComparingNullableBooleansToTrue) {
                        return;
                    }
                    if (comparison.booleanLiteral === 'false' &&
                        options.allowComparingNullableBooleansToFalse) {
                        return;
                    }
                }
                context.report({
                    node,
                    messageId: comparison.expressionIsNullableBoolean
                        ? comparison.booleanLiteral === 'true'
                            ? comparison.negated
                                ? 'comparingNullableToTrueNegated'
                                : 'comparingNullableToTrueDirect'
                            : 'comparingNullableToFalse'
                        : comparison.negated
                            ? 'negated'
                            : 'direct',
                    fix(fixer) {
                        const isWrappedInUnaryNegation = nodeIsUnaryNegation(node.parent);
                        const mutatedNode = isWrappedInUnaryNegation ? node.parent : node;
                        // Whether the truth table of the overall expression being replaced
                        // is negated, _ignoring the nullish cases_.
                        const isOverallNegated = booleanXor(isWrappedInUnaryNegation, comparison.negated, comparison.booleanLiteral === 'false');
                        // we'll build up the replacement text from the compared expression outwards.
                        let replacementText = context.sourceCode.getText(comparison.expression);
                        let mayNeedParentheses = !(0, util_1.isStrongPrecedenceNode)(comparison.expression);
                        const fixWouldReturnExpressionDirectly = !isOverallNegated && comparison.expressionIsNullableBoolean;
                        if (fixWouldReturnExpressionDirectly &&
                            !(0, util_1.isConditionalTest)(mutatedNode)) {
                            if (mayNeedParentheses) {
                                replacementText = parenthesize(replacementText);
                            }
                            replacementText = `${replacementText} ?? false`;
                            mayNeedParentheses = true;
                        }
                        else {
                            // In maybeNullish === false, nullish values have the same truth table
                            // as `true`.
                            if (comparison.expressionIsNullableBoolean &&
                                comparison.booleanLiteral === 'false') {
                                if (mayNeedParentheses) {
                                    replacementText = parenthesize(replacementText);
                                }
                                replacementText = `${replacementText} ?? true`;
                                mayNeedParentheses = true;
                            }
                            if (isOverallNegated) {
                                if (mayNeedParentheses) {
                                    replacementText = parenthesize(replacementText);
                                }
                                replacementText = `!${replacementText}`;
                                mayNeedParentheses = false;
                            }
                        }
                        if (mayNeedParentheses && (0, util_1.isWeakPrecedenceParent)(mutatedNode)) {
                            replacementText = parenthesize(replacementText);
                        }
                        return fixer.replaceText(mutatedNode, replacementText);
                    },
                });
            },
        };
    },
});
function getEqualsKind(operator) {
    switch (operator) {
        case '!=':
            return {
                isPositive: false,
                isStrict: false,
            };
        case '!==':
            return {
                isPositive: false,
                isStrict: true,
            };
        case '==':
            return {
                isPositive: true,
                isStrict: false,
            };
        case '===':
            return {
                isPositive: true,
                isStrict: true,
            };
        default:
            return undefined;
    }
}
function booleanXor(arg0, ...args) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion
    return args.reduce((acc, curr) => acc !== Boolean(curr), Boolean(arg0));
}
function parenthesize(text) {
    return `(${text})`;
}
//# sourceMappingURL=no-unnecessary-boolean-literal-compare.js.map