/**
 * @fileoverview A rule to disallow or enforce spaces inside of single line blocks.
 * @author Toru Nagashima
 */

"use strict";

const util = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "disallow or enforce spaces inside of blocks after opening block and before closing block",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/block-spacing"
        },

        fixable: "whitespace",

        schema: [
            { enum: ["always", "never"] }
        ],

        messages: {
            missing: "Requires a space {{location}} '{{token}}'.",
            extra: "Unexpected space(s) {{location}} '{{token}}'."
        }
    },

    create(context) {
        const always = (context.options[0] !== "never"),
            messageId = always ? "missing" : "extra",
            sourceCode = context.getSourceCode();

        /**
         * Gets the open brace token from a given node.
         * @param {ASTNode} node A BlockStatement/SwitchStatement node to get.
         * @returns {Token} The token of the open brace.
         */
        function getOpenBrace(node) {
            if (node.type === "SwitchStatement") {
                if (node.cases.length > 0) {
                    return sourceCode.getTokenBefore(node.cases[0]);
                }
                return sourceCode.getLastToken(node, 1);
            }
            return sourceCode.getFirstToken(node);
        }

        /**
         * Checks whether or not:
         *   - given tokens are on same line.
         *   - there is/isn't a space between given tokens.
         * @param {Token} left A token to check.
         * @param {Token} right The token which is next to `left`.
         * @returns {boolean}
         *    When the option is `"always"`, `true` if there are one or more spaces between given tokens.
         *    When the option is `"never"`, `true` if there are not any spaces between given tokens.
         *    If given tokens are not on same line, it's always `true`.
         */
        function isValid(left, right) {
            return (
                !util.isTokenOnSameLine(left, right) ||
                sourceCode.isSpaceBetweenTokens(left, right) === always
            );
        }

        /**
         * Reports invalid spacing style inside braces.
         * @param {ASTNode} node A BlockStatement/SwitchStatement node to get.
         * @returns {void}
         */
        function checkSpacingInsideBraces(node) {

            // Gets braces and the first/last token of content.
            const openBrace = getOpenBrace(node);
            const closeBrace = sourceCode.getLastToken(node);
            const firstToken = sourceCode.getTokenAfter(openBrace, { includeComments: true });
            const lastToken = sourceCode.getTokenBefore(closeBrace, { includeComments: true });

            // Skip if the node is invalid or empty.
            if (openBrace.type !== "Punctuator" ||
                openBrace.value !== "{" ||
                closeBrace.type !== "Punctuator" ||
                closeBrace.value !== "}" ||
                firstToken === closeBrace
            ) {
                return;
            }

            // Skip line comments for option never
            if (!always && firstToken.type === "Line") {
                return;
            }

            // Check.
            if (!isValid(openBrace, firstToken)) {
                let loc = openBrace.loc;

                if (messageId === "extra") {
                    loc = {
                        start: openBrace.loc.end,
                        end: firstToken.loc.start
                    };
                }

                context.report({
                    node,
                    loc,
                    messageId,
                    data: {
                        location: "after",
                        token: openBrace.value
                    },
                    fix(fixer) {
                        if (always) {
                            return fixer.insertTextBefore(firstToken, " ");
                        }

                        return fixer.removeRange([openBrace.range[1], firstToken.range[0]]);
                    }
                });
            }
            if (!isValid(lastToken, closeBrace)) {
                let loc = closeBrace.loc;

                if (messageId === "extra") {
                    loc = {
                        start: lastToken.loc.end,
                        end: closeBrace.loc.start
                    };
                }
                context.report({
                    node,
                    loc,
                    messageId,
                    data: {
                        location: "before",
                        token: closeBrace.value
                    },
                    fix(fixer) {
                        if (always) {
                            return fixer.insertTextAfter(lastToken, " ");
                        }

                        return fixer.removeRange([lastToken.range[1], closeBrace.range[0]]);
                    }
                });
            }
        }

        return {
            BlockStatement: checkSpacingInsideBraces,
            SwitchStatement: checkSpacingInsideBraces
        };
    }
};
