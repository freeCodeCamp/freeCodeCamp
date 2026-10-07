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
const tsutils_1 = require("tsutils");
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
/*
The AST is always constructed such the first element is always the deepest element.
I.e. for this code: `foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz`
The AST will look like this:
{
  left: {
    left: {
      left: foo
      right: foo.bar
    }
    right: foo.bar.baz
  }
  right: foo.bar.baz.buzz
}
*/
exports.default = util.createRule({
    name: 'prefer-optional-chain',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects',
            recommended: 'strict',
        },
        hasSuggestions: true,
        messages: {
            preferOptionalChain: "Prefer using an optional chain expression instead, as it's more concise and easier to read.",
            optionalChainSuggest: 'Change to an optional chain.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const sourceCode = context.getSourceCode();
        const parserServices = util.getParserServices(context, true);
        return {
            'LogicalExpression[operator="||"], LogicalExpression[operator="??"]'(node) {
                const leftNode = node.left;
                const rightNode = node.right;
                const parentNode = node.parent;
                const isRightNodeAnEmptyObjectLiteral = rightNode.type === utils_1.AST_NODE_TYPES.ObjectExpression &&
                    rightNode.properties.length === 0;
                if (!isRightNodeAnEmptyObjectLiteral ||
                    !parentNode ||
                    parentNode.type !== utils_1.AST_NODE_TYPES.MemberExpression ||
                    parentNode.optional) {
                    return;
                }
                function isLeftSideLowerPrecedence() {
                    const logicalTsNode = parserServices.esTreeNodeToTSNodeMap.get(node);
                    const leftTsNode = parserServices.esTreeNodeToTSNodeMap.get(leftNode);
                    const operator = (0, tsutils_1.isBinaryExpression)(logicalTsNode)
                        ? logicalTsNode.operatorToken.kind
                        : ts.SyntaxKind.Unknown;
                    const leftPrecedence = util.getOperatorPrecedence(leftTsNode.kind, operator);
                    return leftPrecedence < util.OperatorPrecedence.LeftHandSide;
                }
                context.report({
                    node: parentNode,
                    messageId: 'optionalChainSuggest',
                    suggest: [
                        {
                            messageId: 'optionalChainSuggest',
                            fix: (fixer) => {
                                const leftNodeText = sourceCode.getText(leftNode);
                                // Any node that is made of an operator with higher or equal precedence,
                                const maybeWrappedLeftNode = isLeftSideLowerPrecedence()
                                    ? `(${leftNodeText})`
                                    : leftNodeText;
                                const propertyToBeOptionalText = sourceCode.getText(parentNode.property);
                                const maybeWrappedProperty = parentNode.computed
                                    ? `[${propertyToBeOptionalText}]`
                                    : propertyToBeOptionalText;
                                return fixer.replaceTextRange(parentNode.range, `${maybeWrappedLeftNode}?.${maybeWrappedProperty}`);
                            },
                        },
                    ],
                });
            },
            [[
                'LogicalExpression[operator="||"] > UnaryExpression[operator="!"] > Identifier',
                'LogicalExpression[operator="||"] > UnaryExpression[operator="!"] > MemberExpression',
                'LogicalExpression[operator="||"] > UnaryExpression[operator="!"] > ChainExpression > MemberExpression',
                'LogicalExpression[operator="||"] > UnaryExpression[operator="!"] > MetaProperty',
            ].join(',')](initialIdentifierOrNotEqualsExpr) {
                // selector guarantees this cast
                const initialExpression = (initialIdentifierOrNotEqualsExpr.parent.type ===
                    utils_1.AST_NODE_TYPES.ChainExpression
                    ? initialIdentifierOrNotEqualsExpr.parent.parent
                    : initialIdentifierOrNotEqualsExpr.parent).parent;
                if (initialExpression.left.type !== utils_1.AST_NODE_TYPES.UnaryExpression ||
                    initialExpression.left.argument !== initialIdentifierOrNotEqualsExpr) {
                    // the node(identifier or member expression) is not the deepest left node
                    return;
                }
                // walk up the tree to figure out how many logical expressions we can include
                let previous = initialExpression;
                let current = initialExpression;
                let previousLeftText = getText(initialIdentifierOrNotEqualsExpr);
                let optionallyChainedCode = previousLeftText;
                let expressionCount = 1;
                while (current.type === utils_1.AST_NODE_TYPES.LogicalExpression) {
                    if (current.right.type !== utils_1.AST_NODE_TYPES.UnaryExpression ||
                        !isValidChainTarget(current.right.argument, 
                        // only allow unary '!' with identifiers for the first chain - !foo || !foo()
                        expressionCount === 1)) {
                        break;
                    }
                    const { rightText, shouldBreak } = breakIfInvalid({
                        rightNode: current.right.argument,
                        previousLeftText,
                    });
                    if (shouldBreak) {
                        break;
                    }
                    let invalidOptionallyChainedPrivateProperty;
                    ({
                        invalidOptionallyChainedPrivateProperty,
                        expressionCount,
                        previousLeftText,
                        optionallyChainedCode,
                        previous,
                        current,
                    } = normalizeRepeatingPatterns(rightText, expressionCount, previousLeftText, optionallyChainedCode, previous, current));
                    if (invalidOptionallyChainedPrivateProperty) {
                        return;
                    }
                }
                reportIfMoreThanOne({
                    expressionCount,
                    previous,
                    optionallyChainedCode,
                    sourceCode,
                    context,
                    shouldHandleChainedAnds: false,
                });
            },
            [[
                'LogicalExpression[operator="&&"] > Identifier',
                'LogicalExpression[operator="&&"] > MemberExpression',
                'LogicalExpression[operator="&&"] > ChainExpression > MemberExpression',
                'LogicalExpression[operator="&&"] > MetaProperty',
                'LogicalExpression[operator="&&"] > BinaryExpression[operator="!=="]',
                'LogicalExpression[operator="&&"] > BinaryExpression[operator="!="]',
            ].join(',')](initialIdentifierOrNotEqualsExpr) {
                var _a;
                // selector guarantees this cast
                const initialExpression = (((_a = initialIdentifierOrNotEqualsExpr.parent) === null || _a === void 0 ? void 0 : _a.type) ===
                    utils_1.AST_NODE_TYPES.ChainExpression
                    ? initialIdentifierOrNotEqualsExpr.parent.parent
                    : initialIdentifierOrNotEqualsExpr.parent);
                if (initialExpression.left !== initialIdentifierOrNotEqualsExpr) {
                    // the node(identifier or member expression) is not the deepest left node
                    return;
                }
                if (!isValidChainTarget(initialIdentifierOrNotEqualsExpr, true)) {
                    return;
                }
                // walk up the tree to figure out how many logical expressions we can include
                let previous = initialExpression;
                let current = initialExpression;
                let previousLeftText = getText(initialIdentifierOrNotEqualsExpr);
                let optionallyChainedCode = previousLeftText;
                let expressionCount = 1;
                while (current.type === utils_1.AST_NODE_TYPES.LogicalExpression) {
                    if (!isValidChainTarget(current.right, 
                    // only allow identifiers for the first chain - foo && foo()
                    expressionCount === 1)) {
                        break;
                    }
                    const { rightText, shouldBreak } = breakIfInvalid({
                        rightNode: current.right,
                        previousLeftText,
                    });
                    if (shouldBreak) {
                        break;
                    }
                    let invalidOptionallyChainedPrivateProperty;
                    ({
                        invalidOptionallyChainedPrivateProperty,
                        expressionCount,
                        previousLeftText,
                        optionallyChainedCode,
                        previous,
                        current,
                    } = normalizeRepeatingPatterns(rightText, expressionCount, previousLeftText, optionallyChainedCode, previous, current));
                    if (invalidOptionallyChainedPrivateProperty) {
                        return;
                    }
                }
                reportIfMoreThanOne({
                    expressionCount,
                    previous,
                    optionallyChainedCode,
                    sourceCode,
                    context,
                    shouldHandleChainedAnds: true,
                });
            },
        };
        function breakIfInvalid({ previousLeftText, rightNode, }) {
            let shouldBreak = false;
            const rightText = getText(rightNode);
            // can't just use startsWith because of cases like foo && fooBar.baz;
            const matchRegex = new RegExp(`^${
            // escape regex characters
            previousLeftText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^a-zA-Z0-9_$]`);
            if (!matchRegex.test(rightText) &&
                // handle redundant cases like foo.bar && foo.bar
                previousLeftText !== rightText) {
                shouldBreak = true;
            }
            return { shouldBreak, leftText: previousLeftText, rightText };
        }
        function getText(node) {
            if (node.type === utils_1.AST_NODE_TYPES.BinaryExpression) {
                return getText(
                // isValidChainTarget ensures this is type safe
                node.left);
            }
            if (node.type === utils_1.AST_NODE_TYPES.CallExpression) {
                const calleeText = getText(
                // isValidChainTarget ensures this is type safe
                node.callee);
                // ensure that the call arguments are left untouched, or else we can break cases that _need_ whitespace:
                // - JSX: <Foo Needs Space Between Attrs />
                // - Unary Operators: typeof foo, await bar, delete baz
                const closingParenToken = util.nullThrows(sourceCode.getLastToken(node), util.NullThrowsReasons.MissingToken('closing parenthesis', node.type));
                const openingParenToken = util.nullThrows(sourceCode.getFirstTokenBetween(node.callee, closingParenToken, util.isOpeningParenToken), util.NullThrowsReasons.MissingToken('opening parenthesis', node.type));
                const argumentsText = sourceCode.text.substring(openingParenToken.range[0], closingParenToken.range[1]);
                return `${calleeText}${argumentsText}`;
            }
            if (node.type === utils_1.AST_NODE_TYPES.Identifier ||
                node.type === utils_1.AST_NODE_TYPES.PrivateIdentifier) {
                return node.name;
            }
            if (node.type === utils_1.AST_NODE_TYPES.MetaProperty) {
                return `${node.meta.name}.${node.property.name}`;
            }
            if (node.type === utils_1.AST_NODE_TYPES.ThisExpression) {
                return 'this';
            }
            if (node.type === utils_1.AST_NODE_TYPES.ChainExpression) {
                /* istanbul ignore if */ if (node.expression.type === utils_1.AST_NODE_TYPES.TSNonNullExpression) {
                    // this shouldn't happen
                    return '';
                }
                return getText(node.expression);
            }
            if (node.object.type === utils_1.AST_NODE_TYPES.TSNonNullExpression) {
                // Not supported mixing with TSNonNullExpression
                return '';
            }
            return getMemberExpressionText(node);
        }
        /**
         * Gets a normalized representation of the given MemberExpression
         */
        function getMemberExpressionText(node) {
            let objectText;
            // cases should match the list in ALLOWED_MEMBER_OBJECT_TYPES
            switch (node.object.type) {
                case utils_1.AST_NODE_TYPES.MemberExpression:
                    objectText = getMemberExpressionText(node.object);
                    break;
                case utils_1.AST_NODE_TYPES.CallExpression:
                case utils_1.AST_NODE_TYPES.Identifier:
                case utils_1.AST_NODE_TYPES.MetaProperty:
                case utils_1.AST_NODE_TYPES.ThisExpression:
                    objectText = getText(node.object);
                    break;
                /* istanbul ignore next */
                default:
                    return '';
            }
            let propertyText;
            if (node.computed) {
                // cases should match the list in ALLOWED_COMPUTED_PROP_TYPES
                switch (node.property.type) {
                    case utils_1.AST_NODE_TYPES.Identifier:
                        propertyText = getText(node.property);
                        break;
                    case utils_1.AST_NODE_TYPES.Literal:
                    case utils_1.AST_NODE_TYPES.TemplateLiteral:
                    case utils_1.AST_NODE_TYPES.BinaryExpression:
                        propertyText = sourceCode.getText(node.property);
                        break;
                    case utils_1.AST_NODE_TYPES.MemberExpression:
                        propertyText = getMemberExpressionText(node.property);
                        break;
                    /* istanbul ignore next */
                    default:
                        return '';
                }
                return `${objectText}${node.optional ? '?.' : ''}[${propertyText}]`;
            }
            else {
                // cases should match the list in ALLOWED_NON_COMPUTED_PROP_TYPES
                switch (node.property.type) {
                    case utils_1.AST_NODE_TYPES.Identifier:
                        propertyText = getText(node.property);
                        break;
                    case utils_1.AST_NODE_TYPES.PrivateIdentifier:
                        propertyText = '#' + getText(node.property);
                        break;
                    default:
                        propertyText = sourceCode.getText(node.property);
                }
                return `${objectText}${node.optional ? '?.' : '.'}${propertyText}`;
            }
        }
    },
});
const ALLOWED_MEMBER_OBJECT_TYPES = new Set([
    utils_1.AST_NODE_TYPES.CallExpression,
    utils_1.AST_NODE_TYPES.Identifier,
    utils_1.AST_NODE_TYPES.MemberExpression,
    utils_1.AST_NODE_TYPES.ThisExpression,
    utils_1.AST_NODE_TYPES.MetaProperty,
]);
const ALLOWED_COMPUTED_PROP_TYPES = new Set([
    utils_1.AST_NODE_TYPES.Identifier,
    utils_1.AST_NODE_TYPES.Literal,
    utils_1.AST_NODE_TYPES.MemberExpression,
    utils_1.AST_NODE_TYPES.TemplateLiteral,
]);
const ALLOWED_NON_COMPUTED_PROP_TYPES = new Set([
    utils_1.AST_NODE_TYPES.Identifier,
    utils_1.AST_NODE_TYPES.PrivateIdentifier,
]);
function reportIfMoreThanOne({ expressionCount, previous, optionallyChainedCode, sourceCode, context, shouldHandleChainedAnds, }) {
    if (expressionCount > 1) {
        if (shouldHandleChainedAnds &&
            previous.right.type === utils_1.AST_NODE_TYPES.BinaryExpression) {
            let operator = previous.right.operator;
            if (previous.right.operator === '!==' &&
                // TODO(#4820): Use the type checker to know whether this is `null`
                previous.right.right.type === utils_1.AST_NODE_TYPES.Literal &&
                previous.right.right.raw === 'null') {
                // case like foo !== null && foo.bar !== null
                operator = '!=';
            }
            // case like foo && foo.bar !== someValue
            optionallyChainedCode += ` ${operator} ${sourceCode.getText(previous.right.right)}`;
        }
        context.report({
            node: previous,
            messageId: 'preferOptionalChain',
            suggest: [
                {
                    messageId: 'optionalChainSuggest',
                    fix: (fixer) => [
                        fixer.replaceText(previous, `${shouldHandleChainedAnds ? '' : '!'}${optionallyChainedCode}`),
                    ],
                },
            ],
        });
    }
}
function normalizeRepeatingPatterns(rightText, expressionCount, previousLeftText, optionallyChainedCode, previous, current) {
    const leftText = previousLeftText;
    let invalidOptionallyChainedPrivateProperty = false;
    // omit weird doubled up expression that make no sense like foo.bar && foo.bar
    if (rightText !== previousLeftText) {
        expressionCount += 1;
        previousLeftText = rightText;
        /*
        Diff the left and right text to construct the fix string
        There are the following cases:
    
        1)
        rightText === 'foo.bar.baz.buzz'
        leftText === 'foo.bar.baz'
        diff === '.buzz'
    
        2)
        rightText === 'foo.bar.baz.buzz()'
        leftText === 'foo.bar.baz'
        diff === '.buzz()'
    
        3)
        rightText === 'foo.bar.baz.buzz()'
        leftText === 'foo.bar.baz.buzz'
        diff === '()'
    
        4)
        rightText === 'foo.bar.baz[buzz]'
        leftText === 'foo.bar.baz'
        diff === '[buzz]'
    
        5)
        rightText === 'foo.bar.baz?.buzz'
        leftText === 'foo.bar.baz'
        diff === '?.buzz'
        */
        const diff = rightText.replace(leftText, '');
        if (diff.startsWith('.#')) {
            // Do not handle direct optional chaining on private properties because of a typescript bug (https://github.com/microsoft/TypeScript/issues/42734)
            // We still allow in computed properties
            invalidOptionallyChainedPrivateProperty = true;
        }
        if (diff.startsWith('?')) {
            // item was "pre optional chained"
            optionallyChainedCode += diff;
        }
        else {
            const needsDot = diff.startsWith('(') || diff.startsWith('[');
            optionallyChainedCode += `?${needsDot ? '.' : ''}${diff}`;
        }
    }
    previous = current;
    current = util.nullThrows(current.parent, util.NullThrowsReasons.MissingParent);
    return {
        invalidOptionallyChainedPrivateProperty,
        expressionCount,
        previousLeftText,
        optionallyChainedCode,
        previous,
        current,
    };
}
function isValidChainTarget(node, allowIdentifier) {
    if (node.type === utils_1.AST_NODE_TYPES.ChainExpression) {
        return isValidChainTarget(node.expression, allowIdentifier);
    }
    if (node.type === utils_1.AST_NODE_TYPES.MemberExpression) {
        const isObjectValid = ALLOWED_MEMBER_OBJECT_TYPES.has(node.object.type) &&
            // make sure to validate the expression is of our expected structure
            isValidChainTarget(node.object, true);
        const isPropertyValid = node.computed
            ? ALLOWED_COMPUTED_PROP_TYPES.has(node.property.type) &&
                // make sure to validate the member expression is of our expected structure
                (node.property.type === utils_1.AST_NODE_TYPES.MemberExpression
                    ? isValidChainTarget(node.property, allowIdentifier)
                    : true)
            : ALLOWED_NON_COMPUTED_PROP_TYPES.has(node.property.type);
        return isObjectValid && isPropertyValid;
    }
    if (node.type === utils_1.AST_NODE_TYPES.CallExpression) {
        return isValidChainTarget(node.callee, allowIdentifier);
    }
    if (allowIdentifier &&
        (node.type === utils_1.AST_NODE_TYPES.Identifier ||
            node.type === utils_1.AST_NODE_TYPES.ThisExpression ||
            node.type === utils_1.AST_NODE_TYPES.MetaProperty)) {
        return true;
    }
    /*
    special case for the following, where we only want the left
    - foo !== null
    - foo != null
    - foo !== undefined
    - foo != undefined
    */
    return (node.type === utils_1.AST_NODE_TYPES.BinaryExpression &&
        ['!==', '!='].includes(node.operator) &&
        isValidChainTarget(node.left, allowIdentifier) &&
        (util.isUndefinedIdentifier(node.right) || util.isNullLiteral(node.right)));
}
//# sourceMappingURL=prefer-optional-chain.js.map