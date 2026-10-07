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
const tsutils = __importStar(require("tsutils"));
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'prefer-nullish-coalescing',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce using the nullish coalescing operator instead of logical chaining',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        hasSuggestions: true,
        messages: {
            preferNullishOverOr: 'Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.',
            preferNullishOverTernary: 'Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.',
            suggestNullish: 'Fix to nullish coalescing operator (`??`).',
            noStrictNullCheck: 'This rule requires the `strictNullChecks` compiler option to be turned on to function correctly.',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: {
                        type: 'boolean',
                    },
                    ignoreConditionalTests: {
                        type: 'boolean',
                    },
                    ignoreMixedLogicalExpressions: {
                        type: 'boolean',
                    },
                    ignorePrimitives: {
                        type: 'object',
                        properties: {
                            bigint: { type: 'boolean' },
                            boolean: { type: 'boolean' },
                            number: { type: 'boolean' },
                            string: { type: 'boolean' },
                        },
                    },
                    ignoreTernaryTests: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    defaultOptions: [
        {
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
            ignoreConditionalTests: true,
            ignoreTernaryTests: true,
            ignoreMixedLogicalExpressions: true,
            ignorePrimitives: {
                bigint: false,
                boolean: false,
                number: false,
                string: false,
            },
        },
    ],
    create(context, [{ allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing, ignoreConditionalTests, ignoreMixedLogicalExpressions, ignorePrimitives, ignoreTernaryTests, },]) {
        const parserServices = util.getParserServices(context);
        const compilerOptions = parserServices.program.getCompilerOptions();
        const sourceCode = context.getSourceCode();
        const checker = parserServices.program.getTypeChecker();
        const isStrictNullChecks = tsutils.isStrictCompilerOptionEnabled(compilerOptions, 'strictNullChecks');
        if (!isStrictNullChecks &&
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing !== true) {
            context.report({
                loc: {
                    start: { line: 0, column: 0 },
                    end: { line: 0, column: 0 },
                },
                messageId: 'noStrictNullCheck',
            });
        }
        return {
            ConditionalExpression(node) {
                if (ignoreTernaryTests) {
                    return;
                }
                let operator;
                let nodesInsideTestExpression = [];
                if (node.test.type === utils_1.AST_NODE_TYPES.BinaryExpression) {
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
                    nodesInsideTestExpression = [
                        node.test.left.left,
                        node.test.left.right,
                        node.test.right.left,
                        node.test.right.right,
                    ];
                    if (node.test.operator === '||') {
                        if (node.test.left.operator === '===' &&
                            node.test.right.operator === '===') {
                            operator = '===';
                        }
                        else if (((node.test.left.operator === '===' ||
                            node.test.right.operator === '===') &&
                            (node.test.left.operator === '==' ||
                                node.test.right.operator === '==')) ||
                            (node.test.left.operator === '==' &&
                                node.test.right.operator === '==')) {
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
                            (node.test.left.operator === '!=' &&
                                node.test.right.operator === '!=')) {
                            operator = '!=';
                        }
                    }
                }
                if (!operator) {
                    return;
                }
                let identifier;
                let hasUndefinedCheck = false;
                let hasNullCheck = false;
                // we check that the test only contains null, undefined and the identifier
                for (const testNode of nodesInsideTestExpression) {
                    if (util.isNullLiteral(testNode)) {
                        hasNullCheck = true;
                    }
                    else if (util.isUndefinedIdentifier(testNode)) {
                        hasUndefinedCheck = true;
                    }
                    else if ((operator === '!==' || operator === '!=') &&
                        util.isNodeEqual(testNode, node.consequent)) {
                        identifier = testNode;
                    }
                    else if ((operator === '===' || operator === '==') &&
                        util.isNodeEqual(testNode, node.alternate)) {
                        identifier = testNode;
                    }
                    else {
                        return;
                    }
                }
                if (!identifier) {
                    return;
                }
                const isFixable = (() => {
                    // it is fixable if we check for both null and undefined, or not if neither
                    if (hasUndefinedCheck === hasNullCheck) {
                        return hasUndefinedCheck;
                    }
                    // it is fixable if we loosely check for either null or undefined
                    if (operator === '==' || operator === '!=') {
                        return true;
                    }
                    const tsNode = parserServices.esTreeNodeToTSNodeMap.get(identifier);
                    const type = checker.getTypeAtLocation(tsNode);
                    const flags = util.getTypeFlags(type);
                    if (flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown)) {
                        return false;
                    }
                    const hasNullType = (flags & ts.TypeFlags.Null) !== 0;
                    // it is fixable if we check for undefined and the type is not nullable
                    if (hasUndefinedCheck && !hasNullType) {
                        return true;
                    }
                    const hasUndefinedType = (flags & ts.TypeFlags.Undefined) !== 0;
                    // it is fixable if we check for null and the type can't be undefined
                    return hasNullCheck && !hasUndefinedType;
                })();
                if (isFixable) {
                    context.report({
                        node,
                        messageId: 'preferNullishOverTernary',
                        suggest: [
                            {
                                messageId: 'suggestNullish',
                                fix(fixer) {
                                    const [left, right] = operator === '===' || operator === '=='
                                        ? [node.alternate, node.consequent]
                                        : [node.consequent, node.alternate];
                                    return fixer.replaceText(node, `${sourceCode.text.slice(left.range[0], left.range[1])} ?? ${sourceCode.text.slice(right.range[0], right.range[1])}`);
                                },
                            },
                        ],
                    });
                }
            },
            'LogicalExpression[operator = "||"]'(node) {
                const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node);
                const type = checker.getTypeAtLocation(tsNode.left);
                const isNullish = util.isNullableType(type, { allowUndefined: true });
                if (!isNullish) {
                    return;
                }
                if (ignoreConditionalTests === true && isConditionalTest(node)) {
                    return;
                }
                const isMixedLogical = isMixedLogicalExpression(node);
                if (ignoreMixedLogicalExpressions === true && isMixedLogical) {
                    return;
                }
                const ignorableFlags = [
                    ignorePrimitives.bigint && ts.TypeFlags.BigInt,
                    ignorePrimitives.boolean && ts.TypeFlags.BooleanLiteral,
                    ignorePrimitives.number && ts.TypeFlags.Number,
                    ignorePrimitives.string && ts.TypeFlags.String,
                ]
                    .filter((flag) => flag !== undefined)
                    .reduce((previous, flag) => previous | flag, 0);
                if (type.types.some(t => tsutils.isTypeFlagSet(t, ignorableFlags))) {
                    return;
                }
                const barBarOperator = util.nullThrows(sourceCode.getTokenAfter(node.left, token => token.type === utils_1.AST_TOKEN_TYPES.Punctuator &&
                    token.value === node.operator), util.NullThrowsReasons.MissingToken('operator', node.type));
                function* fix(fixer) {
                    if (node.parent && util.isLogicalOrOperator(node.parent)) {
                        // '&&' and '??' operations cannot be mixed without parentheses (e.g. a && b ?? c)
                        if (node.left.type === utils_1.AST_NODE_TYPES.LogicalExpression &&
                            !util.isLogicalOrOperator(node.left.left)) {
                            yield fixer.insertTextBefore(node.left.right, '(');
                        }
                        else {
                            yield fixer.insertTextBefore(node.left, '(');
                        }
                        yield fixer.insertTextAfter(node.right, ')');
                    }
                    yield fixer.replaceText(barBarOperator, '??');
                }
                context.report({
                    node: barBarOperator,
                    messageId: 'preferNullishOverOr',
                    suggest: [
                        {
                            messageId: 'suggestNullish',
                            fix,
                        },
                    ],
                });
            },
        };
    },
});
function isConditionalTest(node) {
    const parents = new Set([node]);
    let current = node.parent;
    while (current) {
        parents.add(current);
        if ((current.type === utils_1.AST_NODE_TYPES.ConditionalExpression ||
            current.type === utils_1.AST_NODE_TYPES.DoWhileStatement ||
            current.type === utils_1.AST_NODE_TYPES.IfStatement ||
            current.type === utils_1.AST_NODE_TYPES.ForStatement ||
            current.type === utils_1.AST_NODE_TYPES.WhileStatement) &&
            parents.has(current.test)) {
            return true;
        }
        if ([
            utils_1.AST_NODE_TYPES.ArrowFunctionExpression,
            utils_1.AST_NODE_TYPES.FunctionExpression,
        ].includes(current.type)) {
            /**
             * This is a weird situation like:
             * `if (() => a || b) {}`
             * `if (function () { return a || b }) {}`
             */
            return false;
        }
        current = current.parent;
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
        if (current && current.type === utils_1.AST_NODE_TYPES.LogicalExpression) {
            if (current.operator === '&&') {
                return true;
            }
            else if (current.operator === '||') {
                // check the pieces of the node to catch cases like `a || b || c && d`
                queue.push(current.parent, current.left, current.right);
            }
        }
    }
    return false;
}
//# sourceMappingURL=prefer-nullish-coalescing.js.map