/**
 * @fileoverview Rule to disallow Math.pow in favor of the ** operator
 * @author Milos Djermanovic
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");
const { CALL, ReferenceTracker } = require("eslint-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const PRECEDENCE_OF_EXPONENTIATION_EXPR = astUtils.getPrecedence({ type: "BinaryExpression", operator: "**" });

/**
 * Determines whether the given node needs parens if used as the base in an exponentiation binary expression.
 * @param {ASTNode} base The node to check.
 * @returns {boolean} `true` if the node needs to be parenthesised.
 */
function doesBaseNeedParens(base) {
    return (

        // '**' is right-associative, parens are needed when Math.pow(a ** b, c) is converted to (a ** b) ** c
        astUtils.getPrecedence(base) <= PRECEDENCE_OF_EXPONENTIATION_EXPR ||

        // An unary operator cannot be used immediately before an exponentiation expression
        base.type === "AwaitExpression" ||
        base.type === "UnaryExpression"
    );
}

/**
 * Determines whether the given node needs parens if used as the exponent in an exponentiation binary expression.
 * @param {ASTNode} exponent The node to check.
 * @returns {boolean} `true` if the node needs to be parenthesised.
 */
function doesExponentNeedParens(exponent) {

    // '**' is right-associative, there is no need for parens when Math.pow(a, b ** c) is converted to a ** b ** c
    return astUtils.getPrecedence(exponent) < PRECEDENCE_OF_EXPONENTIATION_EXPR;
}

/**
 * Determines whether an exponentiation binary expression at the place of the given node would need parens.
 * @param {ASTNode} node A node that would be replaced by an exponentiation binary expression.
 * @param {SourceCode} sourceCode A SourceCode object.
 * @returns {boolean} `true` if the expression needs to be parenthesised.
 */
function doesExponentiationExpressionNeedParens(node, sourceCode) {
    const parent = node.parent.type === "ChainExpression" ? node.parent.parent : node.parent;

    const needsParens = (
        parent.type === "ClassDeclaration" ||
        (
            parent.type.endsWith("Expression") &&
            astUtils.getPrecedence(parent) >= PRECEDENCE_OF_EXPONENTIATION_EXPR &&
            !(parent.type === "BinaryExpression" && parent.operator === "**" && parent.right === node) &&
            !((parent.type === "CallExpression" || parent.type === "NewExpression") && parent.arguments.includes(node)) &&
            !(parent.type === "MemberExpression" && parent.computed && parent.property === node) &&
            !(parent.type === "ArrayExpression")
        )
    );

    return needsParens && !astUtils.isParenthesised(sourceCode, node);
}

/**
 * Optionally parenthesizes given text.
 * @param {string} text The text to parenthesize.
 * @param {boolean} shouldParenthesize If `true`, the text will be parenthesised.
 * @returns {string} parenthesised or unchanged text.
 */
function parenthesizeIfShould(text, shouldParenthesize) {
    return shouldParenthesize ? `(${text})` : text;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow the use of `Math.pow` in favor of the `**` operator",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/prefer-exponentiation-operator"
        },

        schema: [],
        fixable: "code",

        messages: {
            useExponentiation: "Use the '**' operator instead of 'Math.pow'."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        /**
         * Reports the given node.
         * @param {ASTNode} node 'Math.pow()' node to report.
         * @returns {void}
         */
        function report(node) {
            context.report({
                node,
                messageId: "useExponentiation",
                fix(fixer) {
                    if (
                        node.arguments.length !== 2 ||
                        node.arguments.some(arg => arg.type === "SpreadElement") ||
                        sourceCode.getCommentsInside(node).length > 0
                    ) {
                        return null;
                    }

                    const base = node.arguments[0],
                        exponent = node.arguments[1],
                        baseText = sourceCode.getText(base),
                        exponentText = sourceCode.getText(exponent),
                        shouldParenthesizeBase = doesBaseNeedParens(base),
                        shouldParenthesizeExponent = doesExponentNeedParens(exponent),
                        shouldParenthesizeAll = doesExponentiationExpressionNeedParens(node, sourceCode);

                    let prefix = "",
                        suffix = "";

                    if (!shouldParenthesizeAll) {
                        if (!shouldParenthesizeBase) {
                            const firstReplacementToken = sourceCode.getFirstToken(base),
                                tokenBefore = sourceCode.getTokenBefore(node);

                            if (
                                tokenBefore &&
                                tokenBefore.range[1] === node.range[0] &&
                                !astUtils.canTokensBeAdjacent(tokenBefore, firstReplacementToken)
                            ) {
                                prefix = " "; // a+Math.pow(++b, c) -> a+ ++b**c
                            }
                        }
                        if (!shouldParenthesizeExponent) {
                            const lastReplacementToken = sourceCode.getLastToken(exponent),
                                tokenAfter = sourceCode.getTokenAfter(node);

                            if (
                                tokenAfter &&
                                node.range[1] === tokenAfter.range[0] &&
                                !astUtils.canTokensBeAdjacent(lastReplacementToken, tokenAfter)
                            ) {
                                suffix = " "; // Math.pow(a, b)in c -> a**b in c
                            }
                        }
                    }

                    const baseReplacement = parenthesizeIfShould(baseText, shouldParenthesizeBase),
                        exponentReplacement = parenthesizeIfShould(exponentText, shouldParenthesizeExponent),
                        replacement = parenthesizeIfShould(`${baseReplacement}**${exponentReplacement}`, shouldParenthesizeAll);

                    return fixer.replaceText(node, `${prefix}${replacement}${suffix}`);
                }
            });
        }

        return {
            Program() {
                const scope = context.getScope();
                const tracker = new ReferenceTracker(scope);
                const trackMap = {
                    Math: {
                        pow: { [CALL]: true }
                    }
                };

                for (const { node } of tracker.iterateGlobalReferences(trackMap)) {
                    report(node);
                }
            }
        };
    }
};
