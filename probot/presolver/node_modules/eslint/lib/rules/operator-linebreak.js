/**
 * @fileoverview Operator linebreak - enforces operator linebreak style of two types: after and before
 * @author Benoît Zugmeyer
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce consistent linebreak style for operators",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [
            {
                enum: ["after", "before", "none", null]
            },
            {
                type: "object",
                properties: {
                    overrides: {
                        type: "object",
                        properties: {
                            anyOf: {
                                type: "string",
                                enum: ["after", "before", "none", "ignore"]
                            }
                        }
                    }
                },
                additionalProperties: false
            }
        ],

        fixable: "code"
    },

    create(context) {

        const usedDefaultGlobal = !context.options[0];
        const globalStyle = context.options[0] || "after";
        const options = context.options[1] || {};
        const styleOverrides = options.overrides ? Object.assign({}, options.overrides) : {};

        if (usedDefaultGlobal && !styleOverrides["?"]) {
            styleOverrides["?"] = "before";
        }

        if (usedDefaultGlobal && !styleOverrides[":"]) {
            styleOverrides[":"] = "before";
        }

        const sourceCode = context.getSourceCode();

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
        * Gets a fixer function to fix rule issues
        * @param {Token} operatorToken The operator token of an expression
        * @param {string} desiredStyle The style for the rule. One of 'before', 'after', 'none'
        * @returns {Function} A fixer function
        */
        function getFixer(operatorToken, desiredStyle) {
            return fixer => {
                const tokenBefore = sourceCode.getTokenBefore(operatorToken);
                const tokenAfter = sourceCode.getTokenAfter(operatorToken);
                const textBefore = sourceCode.text.slice(tokenBefore.range[1], operatorToken.range[0]);
                const textAfter = sourceCode.text.slice(operatorToken.range[1], tokenAfter.range[0]);
                const hasLinebreakBefore = !astUtils.isTokenOnSameLine(tokenBefore, operatorToken);
                const hasLinebreakAfter = !astUtils.isTokenOnSameLine(operatorToken, tokenAfter);
                let newTextBefore, newTextAfter;

                if (hasLinebreakBefore !== hasLinebreakAfter && desiredStyle !== "none") {

                    // If there is a comment before and after the operator, don't do a fix.
                    if (sourceCode.getTokenBefore(operatorToken, { includeComments: true }) !== tokenBefore && sourceCode.getTokenAfter(operatorToken, { includeComments: true }) !== tokenAfter) {
                        return null;
                    }

                    /*
                     * If there is only one linebreak and it's on the wrong side of the operator, swap the text before and after the operator.
                     * foo &&
                     *           bar
                     * would get fixed to
                     * foo
                     *        && bar
                     */
                    newTextBefore = textAfter;
                    newTextAfter = textBefore;
                } else {
                    const LINEBREAK_REGEX = astUtils.createGlobalLinebreakMatcher();

                    // Otherwise, if no linebreak is desired and no comments interfere, replace the linebreaks with empty strings.
                    newTextBefore = desiredStyle === "before" || textBefore.trim() ? textBefore : textBefore.replace(LINEBREAK_REGEX, "");
                    newTextAfter = desiredStyle === "after" || textAfter.trim() ? textAfter : textAfter.replace(LINEBREAK_REGEX, "");

                    // If there was no change (due to interfering comments), don't output a fix.
                    if (newTextBefore === textBefore && newTextAfter === textAfter) {
                        return null;
                    }
                }

                if (newTextAfter === "" && tokenAfter.type === "Punctuator" && "+-".includes(operatorToken.value) && tokenAfter.value === operatorToken.value) {

                    // To avoid accidentally creating a ++ or -- operator, insert a space if the operator is a +/- and the following token is a unary +/-.
                    newTextAfter += " ";
                }

                return fixer.replaceTextRange([tokenBefore.range[1], tokenAfter.range[0]], newTextBefore + operatorToken.value + newTextAfter);
            };
        }

        /**
         * Checks the operator placement
         * @param {ASTNode} node The node to check
         * @param {ASTNode} leftSide The node that comes before the operator in `node`
         * @private
         * @returns {void}
         */
        function validateNode(node, leftSide) {

            // When the left part of a binary expression is a single expression wrapped in
            // parentheses (ex: `(a) + b`), leftToken will be the last token of the expression
            // and operatorToken will be the closing parenthesis.
            // The leftToken should be the last closing parenthesis, and the operatorToken
            // should be the token right after that.
            const operatorToken = sourceCode.getTokenAfter(leftSide, astUtils.isNotClosingParenToken);
            const leftToken = sourceCode.getTokenBefore(operatorToken);
            const rightToken = sourceCode.getTokenAfter(operatorToken);
            const operator = operatorToken.value;
            const operatorStyleOverride = styleOverrides[operator];
            const style = operatorStyleOverride || globalStyle;
            const fix = getFixer(operatorToken, style);

            // if single line
            if (astUtils.isTokenOnSameLine(leftToken, operatorToken) &&
                    astUtils.isTokenOnSameLine(operatorToken, rightToken)) {

                // do nothing.

            } else if (operatorStyleOverride !== "ignore" && !astUtils.isTokenOnSameLine(leftToken, operatorToken) &&
                    !astUtils.isTokenOnSameLine(operatorToken, rightToken)) {

                // lone operator
                context.report({
                    node,
                    loc: {
                        line: operatorToken.loc.end.line,
                        column: operatorToken.loc.end.column
                    },
                    message: "Bad line breaking before and after '{{operator}}'.",
                    data: {
                        operator
                    },
                    fix
                });

            } else if (style === "before" && astUtils.isTokenOnSameLine(leftToken, operatorToken)) {

                context.report({
                    node,
                    loc: {
                        line: operatorToken.loc.end.line,
                        column: operatorToken.loc.end.column
                    },
                    message: "'{{operator}}' should be placed at the beginning of the line.",
                    data: {
                        operator
                    },
                    fix
                });

            } else if (style === "after" && astUtils.isTokenOnSameLine(operatorToken, rightToken)) {

                context.report({
                    node,
                    loc: {
                        line: operatorToken.loc.end.line,
                        column: operatorToken.loc.end.column
                    },
                    message: "'{{operator}}' should be placed at the end of the line.",
                    data: {
                        operator
                    },
                    fix
                });

            } else if (style === "none") {

                context.report({
                    node,
                    loc: {
                        line: operatorToken.loc.end.line,
                        column: operatorToken.loc.end.column
                    },
                    message: "There should be no line break before or after '{{operator}}'.",
                    data: {
                        operator
                    },
                    fix
                });

            }
        }

        /**
         * Validates a binary expression using `validateNode`
         * @param {BinaryExpression|LogicalExpression|AssignmentExpression} node node to be validated
         * @returns {void}
         */
        function validateBinaryExpression(node) {
            validateNode(node, node.left);
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            BinaryExpression: validateBinaryExpression,
            LogicalExpression: validateBinaryExpression,
            AssignmentExpression: validateBinaryExpression,
            VariableDeclarator(node) {
                if (node.init) {
                    validateNode(node, node.id);
                }
            },
            ConditionalExpression(node) {
                validateNode(node, node.test);
                validateNode(node, node.consequent);
            }
        };
    }
};
