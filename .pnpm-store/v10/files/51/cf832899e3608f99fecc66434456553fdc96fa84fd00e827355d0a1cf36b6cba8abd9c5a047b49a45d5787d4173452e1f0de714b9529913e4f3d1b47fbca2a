/**
 * @fileoverview Rule to enforce spacing around embedded expressions of template strings
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "require or disallow spacing around embedded expressions of template strings",
            category: "ECMAScript 6",
            recommended: false,
            url: "https://eslint.org/docs/rules/template-curly-spacing"
        },

        fixable: "whitespace",

        schema: [
            { enum: ["always", "never"] }
        ],
        messages: {
            expectedBefore: "Expected space(s) before '}'.",
            expectedAfter: "Expected space(s) after '${'.",
            unexpectedBefore: "Unexpected space(s) before '}'.",
            unexpectedAfter: "Unexpected space(s) after '${'."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        const always = context.options[0] === "always";

        /**
         * Checks spacing before `}` of a given token.
         * @param {Token} token A token to check. This is a Template token.
         * @returns {void}
         */
        function checkSpacingBefore(token) {
            if (!token.value.startsWith("}")) {
                return; // starts with a backtick, this is the first template element in the template literal
            }

            const prevToken = sourceCode.getTokenBefore(token, { includeComments: true }),
                hasSpace = sourceCode.isSpaceBetween(prevToken, token);

            if (!astUtils.isTokenOnSameLine(prevToken, token)) {
                return;
            }

            if (always && !hasSpace) {
                context.report({
                    loc: {
                        start: token.loc.start,
                        end: {
                            line: token.loc.start.line,
                            column: token.loc.start.column + 1
                        }
                    },
                    messageId: "expectedBefore",
                    fix: fixer => fixer.insertTextBefore(token, " ")
                });
            }

            if (!always && hasSpace) {
                context.report({
                    loc: {
                        start: prevToken.loc.end,
                        end: token.loc.start
                    },
                    messageId: "unexpectedBefore",
                    fix: fixer => fixer.removeRange([prevToken.range[1], token.range[0]])
                });
            }
        }

        /**
         * Checks spacing after `${` of a given token.
         * @param {Token} token A token to check. This is a Template token.
         * @returns {void}
         */
        function checkSpacingAfter(token) {
            if (!token.value.endsWith("${")) {
                return; // ends with a backtick, this is the last template element in the template literal
            }

            const nextToken = sourceCode.getTokenAfter(token, { includeComments: true }),
                hasSpace = sourceCode.isSpaceBetween(token, nextToken);

            if (!astUtils.isTokenOnSameLine(token, nextToken)) {
                return;
            }

            if (always && !hasSpace) {
                context.report({
                    loc: {
                        start: {
                            line: token.loc.end.line,
                            column: token.loc.end.column - 2
                        },
                        end: token.loc.end
                    },
                    messageId: "expectedAfter",
                    fix: fixer => fixer.insertTextAfter(token, " ")
                });
            }

            if (!always && hasSpace) {
                context.report({
                    loc: {
                        start: token.loc.end,
                        end: nextToken.loc.start
                    },
                    messageId: "unexpectedAfter",
                    fix: fixer => fixer.removeRange([token.range[1], nextToken.range[0]])
                });
            }
        }

        return {
            TemplateElement(node) {
                const token = sourceCode.getFirstToken(node);

                checkSpacingBefore(token);
                checkSpacingAfter(token);
            }
        };
    }
};
