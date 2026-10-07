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
const getWrappedCode_1 = require("../util/getWrappedCode");
const isMemberAccessLike = (0, util_1.isNodeOfTypes)([
    utils_1.AST_NODE_TYPES.ChainExpression,
    utils_1.AST_NODE_TYPES.Identifier,
    utils_1.AST_NODE_TYPES.MemberExpression,
]);
const isNullLiteralOrUndefinedIdentifier = (node) => (0, util_1.isNullLiteral)(node) || (0, util_1.isUndefinedIdentifier)(node);
const isNodeNullishComparison = (node) => isNullLiteralOrUndefinedIdentifier(node.left) &&
    isNullLiteralOrUndefinedIdentifier(node.right);
exports.default = (0, util_1.createRule)({
    name: 'prefer-nullish-coalescing',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce using the nullish coalescing operator instead of logical assignments or chaining',
            recommended: 'stylistic',
            requiresTypeChecking: true,
        },
        hasSuggestions: true,
        messages: {
            noStrictNullCheck: 'This rule requires the `strictNullChecks` compiler option to be turned on to function correctly.',
            preferNullishOverAssignment: 'Prefer using nullish coalescing operator (`??{{ equals }}`) instead of an assignment expression, as it is simpler to read.',
            preferNullishOverOr: 'Prefer using nullish coalescing operator (`??{{ equals }}`) instead of a logical {{ description }} (`||{{ equals }}`), as it is a safer operator.',
            preferNullishOverTernary: 'Prefer using nullish coalescing operator (`??{{ equals }}`) instead of a ternary expression, as it is simpler to read.',
            suggestNullish: 'Fix to nullish coalescing operator (`??{{ equals }}`).',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: {
                        type: 'boolean',
                        description: 'Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.',
                    },
                    ignoreBooleanCoercion: {
                        type: 'boolean',
                        description: 'Whether to ignore arguments to the `Boolean` constructor',
                    },
                    ignoreConditionalTests: {
                        type: 'boolean',
                        description: 'Whether to ignore cases that are located within a conditional test.',
                    },
                    ignoreIfStatements: {
                        type: 'boolean',
                        description: 'Whether to ignore any if statements that could be simplified by using the nullish coalescing operator.',
                    },
                    ignoreMixedLogicalExpressions: {
                        type: 'boolean',
                        description: 'Whether to ignore any logical or expressions that are part of a mixed logical expression (with `&&`).',
                    },
                    ignorePrimitives: {
                        description: 'Whether to ignore all (`true`) or some (an object with properties) primitive types.',
                        oneOf: [
                            {
                                type: 'object',
                                additionalProperties: false,
                                description: 'Which primitives types may be ignored.',
                                properties: {
                                    bigint: {
                                        type: 'boolean',
                                        description: 'Ignore bigint primitive types.',
                                    },
                                    boolean: {
                                        type: 'boolean',
                                        description: 'Ignore boolean primitive types.',
                                    },
                                    number: {
                                        type: 'boolean',
                                        description: 'Ignore number primitive types.',
                                    },
                                    string: {
                                        type: 'boolean',
                                        description: 'Ignore string primitive types.',
                                    },
                                },
                            },
                            {
                                type: 'boolean',
                                description: 'Ignore all primitive types.',
                                enum: [true],
                            },
                        ],
                    },
                    ignoreTernaryTests: {
                        type: 'boolean',
                        description: 'Whether to ignore any ternary expressions that could be simplified by using the nullish coalescing operator.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
            ignoreBooleanCoercion: false,
            ignoreConditionalTests: true,
            ignoreIfStatements: false,
            ignoreMixedLogicalExpressions: false,
            ignorePrimitives: {
                bigint: false,
                boolean: false,
                number: false,
                string: false,
            },
            ignoreTernaryTests: false,
        },
    ],
    create(context, [{ allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing, ignoreBooleanCoercion, ignoreConditionalTests, ignoreIfStatements, ignoreMixedLogicalExpressions, ignorePrimitives, ignoreTernaryTests, },]) {
        const parserServices = (0, util_1.getParserServices)(context);
        const compilerOptions = parserServices.program.getCompilerOptions();
        const isStrictNullChecks = tsutils.isStrictCompilerOptionEnabled(compilerOptions, 'strictNullChecks');
        if (!isStrictNullChecks &&
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing !== true) {
            context.report({
                loc: {
                    start: { column: 0, line: 0 },
                    end: { column: 0, line: 0 },
                },
                messageId: 'noStrictNullCheck',
            });
        }
        /**
         * Checks whether a type tested for truthiness is eligible for conversion to
         * a nullishness check, taking into account the rule's configuration.
         */
        function isTypeEligibleForPreferNullish(type) {
            if (!(0, util_1.isNullableType)(type)) {
                return false;
            }
            const ignorableFlags = [
                /* eslint-disable @typescript-eslint/no-non-null-assertion */
                (ignorePrimitives === true || ignorePrimitives.bigint) &&
                    ts.TypeFlags.BigIntLike,
                (ignorePrimitives === true || ignorePrimitives.boolean) &&
                    ts.TypeFlags.BooleanLike,
                (ignorePrimitives === true || ignorePrimitives.number) &&
                    ts.TypeFlags.NumberLike,
                (ignorePrimitives === true || ignorePrimitives.string) &&
                    ts.TypeFlags.StringLike,
                /* eslint-enable @typescript-eslint/no-non-null-assertion */
            ]
                .filter((flag) => typeof flag === 'number')
                .reduce((previous, flag) => previous | flag, 0);
            if (ignorableFlags === 0) {
                // any types are eligible for conversion.
                return true;
            }
            // if the type is `any` or `unknown` we can't make any assumptions
            // about the value, so it could be any primitive, even though the flags
            // won't be set.
            //
            // technically, this is true of `void` as well, however, it's a TS error
            // to test `void` for truthiness, so we don't need to bother checking for
            // it in valid code.
            if (tsutils.isTypeFlagSet(type, ts.TypeFlags.Any | ts.TypeFlags.Unknown)) {
                return false;
            }
            if (tsutils
                .typeConstituents(type)
                .some(t => tsutils
                .intersectionConstituents(t)
                .some(t => tsutils.isTypeFlagSet(t, ignorableFlags)))) {
                return false;
            }
            return true;
        }
        /**
         * Determines whether a control flow construct that uses the truthiness of
         * a test expression is eligible for conversion to the nullish coalescing
         * operator, taking into account (both dependent on the rule's configuration):
         * 1. Whether the construct is in a permitted syntactic context
         * 2. Whether the type of the test expression is deemed eligible for
         *    conversion
         *
         * @param node The overall node to be converted (e.g. `a || b` or `a ? a : b`)
         * @param testNode The node being tested (i.e. `a`)
         */
        function isTruthinessCheckEligibleForPreferNullish({ node, testNode, }) {
            if (ignoreConditionalTests === true && (0, util_1.isConditionalTest)(node)) {
                return false;
            }
            if (ignoreBooleanCoercion === true &&
                isBooleanConstructorContext(node, context) &&
                !(node.type === utils_1.AST_NODE_TYPES.ConditionalExpression &&
                    node.parent.type === utils_1.AST_NODE_TYPES.CallExpression)) {
                return false;
            }
            const testType = parserServices.getTypeAtLocation(testNode);
            if (!isTypeEligibleForPreferNullish(testType)) {
                return false;
            }
            return true;
        }
        function checkAndFixWithPreferNullishOverOr(node, description, equals) {
            if (!isTruthinessCheckEligibleForPreferNullish({
                node,
                testNode: node.left,
            })) {
                return;
            }
            if (ignoreMixedLogicalExpressions === true &&
                isMixedLogicalExpression(node)) {
                return;
            }
            const barBarOperator = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(node.left, token => token.type === utils_1.AST_TOKEN_TYPES.Punctuator &&
                token.value === node.operator), util_1.NullThrowsReasons.MissingToken('operator', node.type));
            function* fix(fixer) {
                if ((0, util_1.isLogicalOrOperator)(node.parent)) {
                    // '&&' and '??' operations cannot be mixed without parentheses (e.g. a && b ?? c)
                    if (node.left.type === utils_1.AST_NODE_TYPES.LogicalExpression &&
                        !(0, util_1.isLogicalOrOperator)(node.left.left)) {
                        yield fixer.insertTextBefore(node.left.right, '(');
                    }
                    else {
                        yield fixer.insertTextBefore(node.left, '(');
                    }
                    yield fixer.insertTextAfter(node.right, ')');
                }
                yield fixer.replaceText(barBarOperator, node.operator.replace('||', '??'));
            }
            context.report({
                node: barBarOperator,
                messageId: 'preferNullishOverOr',
                data: { description, equals },
                suggest: [
                    {
                        messageId: 'suggestNullish',
                        data: { equals },
                        fix,
                    },
                ],
            });
        }
        function getNullishCoalescingParams(node, nonNullishNode, nodesInsideTestExpression, operator) {
            let nullishCoalescingLeftNode;
            let hasTruthinessCheck = false;
            let hasNullCheckWithoutTruthinessCheck = false;
            let hasUndefinedCheckWithoutTruthinessCheck = false;
            if (!nodesInsideTestExpression.length) {
                hasTruthinessCheck = true;
                nullishCoalescingLeftNode =
                    node.test.type === utils_1.AST_NODE_TYPES.UnaryExpression
                        ? node.test.argument
                        : node.test;
                if (!areNodesSimilarMemberAccess(nullishCoalescingLeftNode, nonNullishNode)) {
                    return { isFixable: false };
                }
            }
            else {
                // we check that the test only contains null, undefined and the identifier
                for (const testNode of nodesInsideTestExpression) {
                    if ((0, util_1.isNullLiteral)(testNode)) {
                        hasNullCheckWithoutTruthinessCheck = true;
                    }
                    else if ((0, util_1.isUndefinedIdentifier)(testNode)) {
                        hasUndefinedCheckWithoutTruthinessCheck = true;
                    }
                    else if (areNodesSimilarMemberAccess(testNode, nonNullishNode)) {
                        // Only consider the first expression in a multi-part nullish check,
                        // as subsequent expressions might not require all the optional chaining operators.
                        // For example: a?.b?.c !== undefined && a.b.c !== null ? a.b.c : 'foo';
                        // This works because `node.test` is always evaluated first in the loop
                        // and has the same or more necessary optional chaining operators
                        // than `node.alternate` or `node.consequent`.
                        nullishCoalescingLeftNode ??= testNode;
                    }
                    else {
                        return { isFixable: false };
                    }
                }
            }
            if (!nullishCoalescingLeftNode) {
                return { isFixable: false };
            }
            const isFixable = (() => {
                if (hasTruthinessCheck) {
                    return isTruthinessCheckEligibleForPreferNullish({
                        node,
                        testNode: nullishCoalescingLeftNode,
                    });
                }
                // it is fixable if we check for both null and undefined, or not if neither
                if (hasUndefinedCheckWithoutTruthinessCheck ===
                    hasNullCheckWithoutTruthinessCheck) {
                    return hasUndefinedCheckWithoutTruthinessCheck;
                }
                // it is fixable if we loosely check for either null or undefined
                if (['==', '!='].includes(operator)) {
                    return true;
                }
                const type = parserServices.getTypeAtLocation(nullishCoalescingLeftNode);
                const flags = (0, util_1.getTypeFlags)(type);
                if (flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown)) {
                    return false;
                }
                const hasNullType = (flags & ts.TypeFlags.Null) !== 0;
                // it is fixable if we check for undefined and the type is not nullable
                if (hasUndefinedCheckWithoutTruthinessCheck && !hasNullType) {
                    return true;
                }
                const hasUndefinedType = (flags & ts.TypeFlags.Undefined) !== 0;
                // it is fixable if we check for null and the type can't be undefined
                return hasNullCheckWithoutTruthinessCheck && !hasUndefinedType;
            })();
            return isFixable
                ? { isFixable: true, nullishCoalescingLeftNode }
                : { isFixable: false };
        }
        return {
            'AssignmentExpression[operator = "||="]'(node) {
                checkAndFixWithPreferNullishOverOr(node, 'assignment', '=');
            },
            ConditionalExpression(node) {
                if (ignoreTernaryTests) {
                    return;
                }
                const { nodesInsideTestExpression, operator } = getOperatorAndNodesInsideTestExpression(node);
                if (operator == null) {
                    return;
                }
                const { nonNullishBranch, nullishBranch } = getBranchNodes(node, operator);
                const nullishCoalescingParams = getNullishCoalescingParams(node, nonNullishBranch, nodesInsideTestExpression, operator);
                if (nullishCoalescingParams.isFixable) {
                    context.report({
                        node,
                        messageId: 'preferNullishOverTernary',
                        // TODO: also account for = in the ternary clause
                        data: { equals: '' },
                        suggest: [
                            {
                                messageId: 'suggestNullish',
                                data: { equals: '' },
                                fix(fixer) {
                                    const nullishBranchText = (0, util_1.getTextWithParentheses)(context.sourceCode, nullishBranch);
                                    const rightOperandReplacement = (0, util_1.isParenthesized)(nullishBranch, context.sourceCode)
                                        ? nullishBranchText
                                        : (0, getWrappedCode_1.getWrappedCode)(nullishBranchText, (0, util_1.getOperatorPrecedenceForNode)(nullishBranch), util_1.OperatorPrecedence.Coalesce);
                                    return fixer.replaceText(node, `${(0, util_1.getTextWithParentheses)(context.sourceCode, nullishCoalescingParams.nullishCoalescingLeftNode)} ?? ${rightOperandReplacement}`);
                                },
                            },
                        ],
                    });
                }
            },
            IfStatement(node) {
                if (ignoreIfStatements || node.alternate != null) {
                    return;
                }
                let assignmentExpression;
                if (node.consequent.type === utils_1.AST_NODE_TYPES.BlockStatement &&
                    node.consequent.body.length === 1 &&
                    node.consequent.body[0].type === utils_1.AST_NODE_TYPES.ExpressionStatement) {
                    assignmentExpression = node.consequent.body[0].expression;
                }
                else if (node.consequent.type === utils_1.AST_NODE_TYPES.ExpressionStatement) {
                    assignmentExpression = node.consequent.expression;
                }
                if (assignmentExpression?.type !== utils_1.AST_NODE_TYPES.AssignmentExpression ||
                    !isMemberAccessLike(assignmentExpression.left)) {
                    return;
                }
                const nullishCoalescingLeftNode = assignmentExpression.left;
                const nullishCoalescingRightNode = assignmentExpression.right;
                const { nodesInsideTestExpression, operator } = getOperatorAndNodesInsideTestExpression(node);
                if (operator == null || !['!', '==', '==='].includes(operator)) {
                    return;
                }
                const nullishCoalescingParams = getNullishCoalescingParams(node, nullishCoalescingLeftNode, nodesInsideTestExpression, operator);
                if (nullishCoalescingParams.isFixable) {
                    // Handle comments
                    const isConsequentNodeBlockStatement = node.consequent.type === utils_1.AST_NODE_TYPES.BlockStatement;
                    const commentsBefore = formatComments(context.sourceCode.getCommentsBefore(assignmentExpression), isConsequentNodeBlockStatement ? '\n' : ' ');
                    const commentsAfter = isConsequentNodeBlockStatement
                        ? formatComments(context.sourceCode.getCommentsAfter(assignmentExpression.parent), '\n')
                        : '';
                    context.report({
                        node,
                        messageId: 'preferNullishOverAssignment',
                        data: { equals: '=' },
                        suggest: [
                            {
                                messageId: 'suggestNullish',
                                data: { equals: '=' },
                                fix(fixer) {
                                    const fixes = [];
                                    if (commentsBefore) {
                                        fixes.push(fixer.insertTextBefore(node, commentsBefore));
                                    }
                                    fixes.push(fixer.replaceText(node, `${(0, util_1.getTextWithParentheses)(context.sourceCode, nullishCoalescingLeftNode)} ??= ${(0, util_1.getTextWithParentheses)(context.sourceCode, nullishCoalescingRightNode)};`));
                                    if (commentsAfter) {
                                        fixes.push(fixer.insertTextAfter(node, ` ${commentsAfter.slice(0, -1)}`));
                                    }
                                    return fixes;
                                },
                            },
                        ],
                    });
                }
            },
            'LogicalExpression[operator = "||"]'(node) {
                checkAndFixWithPreferNullishOverOr(node, 'or', '');
            },
        };
    },
});
function isBooleanConstructorContext(node, context) {
    const parent = node.parent;
    if (parent == null) {
        return false;
    }
    if (parent.type === utils_1.AST_NODE_TYPES.LogicalExpression) {
        return isBooleanConstructorContext(parent, context);
    }
    if (parent.type === utils_1.AST_NODE_TYPES.ConditionalExpression &&
        (parent.consequent === node || parent.alternate === node)) {
        return isBooleanConstructorContext(parent, context);
    }
    if (parent.type === utils_1.AST_NODE_TYPES.SequenceExpression &&
        parent.expressions.at(-1) === node) {
        return isBooleanConstructorContext(parent, context);
    }
    return isBuiltInBooleanCall(parent, context);
}
function isBuiltInBooleanCall(node, context) {
    if (node.type === utils_1.AST_NODE_TYPES.CallExpression &&
        node.callee.type === utils_1.AST_NODE_TYPES.Identifier &&
        // eslint-disable-next-line @typescript-eslint/internal/prefer-ast-types-enum
        node.callee.name === 'Boolean' &&
        node.arguments[0]) {
        const scope = context.sourceCode.getScope(node);
        const variable = utils_1.ASTUtils.findVariable(scope, node.callee);
        return variable == null || variable.defs.length === 0;
    }
    return false;
}
function isMixedLogicalExpression(node) {
    const seen = new Set();
    const queue = [node.parent, node.left, node.right];
    for (const current of queue) {
        if (seen.has(current)) {
            continue;
        }
        seen.add(current);
        if (current.type === utils_1.AST_NODE_TYPES.LogicalExpression) {
            if (current.operator === '&&') {
                return true;
            }
            if (['||', '||='].includes(current.operator)) {
                // check the pieces of the node to catch cases like `a || b || c && d`
                queue.push(current.parent, current.left, current.right);
            }
        }
    }
    return false;
}
/**
 * Checks if two TSESTree nodes have the same member access sequence,
 * regardless of optional chaining differences.
 *
 * Note: This does not imply that the nodes are runtime-equivalent.
 *
 * Example: `a.b.c`, `a?.b.c`, `a.b?.c`, `(a?.b).c`, `(a.b)?.c` are considered similar.
 *
 * @param a First TSESTree node.
 * @param b Second TSESTree node.
 * @returns `true` if the nodes access members in the same order; otherwise, `false`.
 */
function areNodesSimilarMemberAccess(a, b) {
    if (a.type === utils_1.AST_NODE_TYPES.MemberExpression &&
        b.type === utils_1.AST_NODE_TYPES.MemberExpression) {
        if (!areNodesSimilarMemberAccess(a.object, b.object)) {
            return false;
        }
        if (a.computed === b.computed) {
            return (0, util_1.isNodeEqual)(a.property, b.property);
        }
        if (a.property.type === utils_1.AST_NODE_TYPES.Literal &&
            b.property.type === utils_1.AST_NODE_TYPES.Identifier) {
            return a.property.value === b.property.name;
        }
        if (a.property.type === utils_1.AST_NODE_TYPES.Identifier &&
            b.property.type === utils_1.AST_NODE_TYPES.Literal) {
            return a.property.name === b.property.value;
        }
        return false;
    }
    if (a.type === utils_1.AST_NODE_TYPES.ChainExpression ||
        b.type === utils_1.AST_NODE_TYPES.ChainExpression) {
        return areNodesSimilarMemberAccess((0, util_1.skipChainExpression)(a), (0, util_1.skipChainExpression)(b));
    }
    return (0, util_1.isNodeEqual)(a, b);
}
/**
 * Returns the branch nodes of a conditional expression:
 * - the "nonNullish branch" is the branch when test node is not nullish
 * - the "nullish branch" is the branch when test node is nullish
 */
function getBranchNodes(node, operator) {
    if (['', '!=', '!=='].includes(operator)) {
        return { nonNullishBranch: node.consequent, nullishBranch: node.alternate };
    }
    return { nonNullishBranch: node.alternate, nullishBranch: node.consequent };
}
function getOperatorAndNodesInsideTestExpression(node) {
    let operator = null;
    let nodesInsideTestExpression = [];
    if (isMemberAccessLike(node.test) ||
        node.test.type === utils_1.AST_NODE_TYPES.UnaryExpression) {
        operator = getNonBinaryNodeOperator(node.test);
    }
    else if (node.test.type === utils_1.AST_NODE_TYPES.BinaryExpression) {
        nodesInsideTestExpression = [node.test.left, node.test.right];
        if (node.test.operator === '==' ||
            node.test.operator === '!=' ||
            node.test.operator === '===' ||
            node.test.operator === '!==') {
            operator = node.test.operator;
        }
    }
    else if (node.test.type === utils_1.AST_NODE_TYPES.LogicalExpression &&
        node.test.left.type === utils_1.AST_NODE_TYPES.BinaryExpression &&
        node.test.right.type === utils_1.AST_NODE_TYPES.BinaryExpression) {
        if (isNodeNullishComparison(node.test.left) ||
            isNodeNullishComparison(node.test.right)) {
            return { nodesInsideTestExpression, operator };
        }
        nodesInsideTestExpression = [
            node.test.left.left,
            node.test.left.right,
            node.test.right.left,
            node.test.right.right,
        ];
        if (['||', '||='].includes(node.test.operator)) {
            if (node.test.left.operator === '===' &&
                node.test.right.operator === '===') {
                operator = '===';
            }
            else if (((node.test.left.operator === '===' ||
                node.test.right.operator === '===') &&
                (node.test.left.operator === '==' ||
                    node.test.right.operator === '==')) ||
                (node.test.left.operator === '==' && node.test.right.operator === '==')) {
                operator = '==';
            }
        }
        else if (node.test.operator === '&&') {
            if (node.test.left.operator === '!==' &&
                node.test.right.operator === '!==') {
                operator = '!==';
            }
            else if (((node.test.left.operator === '!==' ||
                node.test.right.operator === '!==') &&
                (node.test.left.operator === '!=' ||
                    node.test.right.operator === '!=')) ||
                (node.test.left.operator === '!=' && node.test.right.operator === '!=')) {
                operator = '!=';
            }
        }
    }
    return { nodesInsideTestExpression, operator };
}
function getNonBinaryNodeOperator(node) {
    if (node.type !== utils_1.AST_NODE_TYPES.UnaryExpression) {
        return '';
    }
    if (isMemberAccessLike(node.argument) && node.operator === '!') {
        return '!';
    }
    return null;
}
function formatComments(comments, separator) {
    return comments
        .map(({ type, value }) => type === utils_1.AST_TOKEN_TYPES.Line
        ? `//${value}${separator}`
        : `/*${value}*/${separator}`)
        .join('');
}
//# sourceMappingURL=prefer-nullish-coalescing.js.map