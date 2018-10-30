/**
 * @fileoverview Rule to flag block statements that do not use the one true brace style
 * @author Ian Christian Myers
 */

"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce consistent brace style for blocks",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [
            {
                enum: ["1tbs", "stroustrup", "allman"]
            },
            {
                type: "object",
                properties: {
                    allowSingleLine: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ],

        fixable: "whitespace"
    },

    create(context) {
        const style = context.options[0] || "1tbs",
            params = context.options[1] || {},
            sourceCode = context.getSourceCode();

        const OPEN_MESSAGE = "Opening curly brace does not appear on the same line as controlling statement.",
            OPEN_MESSAGE_ALLMAN = "Opening curly brace appears on the same line as controlling statement.",
            BODY_MESSAGE = "Statement inside of curly braces should be on next line.",
            CLOSE_MESSAGE = "Closing curly brace does not appear on the same line as the subsequent block.",
            CLOSE_MESSAGE_SINGLE = "Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.",
            CLOSE_MESSAGE_STROUSTRUP_ALLMAN = "Closing curly brace appears on the same line as the subsequent block.";

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
        * Fixes a place where a newline unexpectedly appears
        * @param {Token} firstToken The token before the unexpected newline
        * @param {Token} secondToken The token after the unexpected newline
        * @returns {Function} A fixer function to remove the newlines between the tokens
        */
        function removeNewlineBetween(firstToken, secondToken) {
            const textRange = [firstToken.range[1], secondToken.range[0]];
            const textBetween = sourceCode.text.slice(textRange[0], textRange[1]);
            const NEWLINE_REGEX = astUtils.createGlobalLinebreakMatcher();

            // Don't do a fix if there is a comment between the tokens
            return fixer => fixer.replaceTextRange(textRange, textBetween.trim() ? null : textBetween.replace(NEWLINE_REGEX, ""));
        }

        /**
        * Validates a pair of curly brackets based on the user's config
        * @param {Token} openingCurly The opening curly bracket
        * @param {Token} closingCurly The closing curly bracket
        * @returns {void}
        */
        function validateCurlyPair(openingCurly, closingCurly) {
            const tokenBeforeOpeningCurly = sourceCode.getTokenBefore(openingCurly);
            const tokenAfterOpeningCurly = sourceCode.getTokenAfter(openingCurly);
            const tokenBeforeClosingCurly = sourceCode.getTokenBefore(closingCurly);
            const singleLineException = params.allowSingleLine && astUtils.isTokenOnSameLine(openingCurly, closingCurly);

            if (style !== "allman" && !astUtils.isTokenOnSameLine(tokenBeforeOpeningCurly, openingCurly)) {
                context.report({
                    node: openingCurly,
                    message: OPEN_MESSAGE,
                    fix: removeNewlineBetween(tokenBeforeOpeningCurly, openingCurly)
                });
            }

            if (style === "allman" && astUtils.isTokenOnSameLine(tokenBeforeOpeningCurly, openingCurly) && !singleLineException) {
                context.report({
                    node: openingCurly,
                    message: OPEN_MESSAGE_ALLMAN,
                    fix: fixer => fixer.insertTextBefore(openingCurly, "\n")
                });
            }

            if (astUtils.isTokenOnSameLine(openingCurly, tokenAfterOpeningCurly) && tokenAfterOpeningCurly !== closingCurly && !singleLineException) {
                context.report({
                    node: openingCurly,
                    message: BODY_MESSAGE,
                    fix: fixer => fixer.insertTextAfter(openingCurly, "\n")
                });
            }

            if (tokenBeforeClosingCurly !== openingCurly && !singleLineException && astUtils.isTokenOnSameLine(tokenBeforeClosingCurly, closingCurly)) {
                context.report({
                    node: closingCurly,
                    message: CLOSE_MESSAGE_SINGLE,
                    fix: fixer => fixer.insertTextBefore(closingCurly, "\n")
                });
            }
        }

        /**
        * Validates the location of a token that appears before a keyword (e.g. a newline before `else`)
        * @param {Token} curlyToken The closing curly token. This is assumed to precede a keyword token (such as `else` or `finally`).
        * @returns {void}
        */
        function validateCurlyBeforeKeyword(curlyToken) {
            const keywordToken = sourceCode.getTokenAfter(curlyToken);

            if (style === "1tbs" && !astUtils.isTokenOnSameLine(curlyToken, keywordToken)) {
                context.report({
                    node: curlyToken,
                    message: CLOSE_MESSAGE,
                    fix: removeNewlineBetween(curlyToken, keywordToken)
                });
            }

            if (style !== "1tbs" && astUtils.isTokenOnSameLine(curlyToken, keywordToken)) {
                context.report({
                    node: curlyToken,
                    message: CLOSE_MESSAGE_STROUSTRUP_ALLMAN,
                    fix: fixer => fixer.insertTextAfter(curlyToken, "\n")
                });
            }
        }

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {
            BlockStatement(node) {
                if (!astUtils.STATEMENT_LIST_PARENTS.has(node.parent.type)) {
                    validateCurlyPair(sourceCode.getFirstToken(node), sourceCode.getLastToken(node));
                }
            },
            ClassBody(node) {
                validateCurlyPair(sourceCode.getFirstToken(node), sourceCode.getLastToken(node));
            },
            SwitchStatement(node) {
                const closingCurly = sourceCode.getLastToken(node);
                const openingCurly = sourceCode.getTokenBefore(node.cases.length ? node.cases[0] : closingCurly);

                validateCurlyPair(openingCurly, closingCurly);
            },
            IfStatement(node) {
                if (node.consequent.type === "BlockStatement" && node.alternate) {

                    // Handle the keyword after the `if` block (before `else`)
                    validateCurlyBeforeKeyword(sourceCode.getLastToken(node.consequent));
                }
            },
            TryStatement(node) {

                // Handle the keyword after the `try` block (before `catch` or `finally`)
                validateCurlyBeforeKeyword(sourceCode.getLastToken(node.block));

                if (node.handler && node.finalizer) {

                    // Handle the keyword after the `catch` block (before `finally`)
                    validateCurlyBeforeKeyword(sourceCode.getLastToken(node.handler.body));
                }
            }
        };
    }
};
