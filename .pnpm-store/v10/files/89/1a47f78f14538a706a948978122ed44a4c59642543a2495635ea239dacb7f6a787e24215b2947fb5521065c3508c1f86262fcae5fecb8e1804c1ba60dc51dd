/**
 * @fileoverview Disallows or enforces spaces inside computed properties.
 * @author Jamund Ferguson
 */
"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "enforce consistent spacing inside computed property brackets",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/computed-property-spacing"
        },

        fixable: "whitespace",

        schema: [
            {
                enum: ["always", "never"]
            },
            {
                type: "object",
                properties: {
                    enforceForClassMembers: {
                        type: "boolean",
                        default: true
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            unexpectedSpaceBefore: "There should be no space before '{{tokenValue}}'.",
            unexpectedSpaceAfter: "There should be no space after '{{tokenValue}}'.",

            missingSpaceBefore: "A space is required before '{{tokenValue}}'.",
            missingSpaceAfter: "A space is required after '{{tokenValue}}'."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        const propertyNameMustBeSpaced = context.options[0] === "always"; // default is "never"
        const enforceForClassMembers = !context.options[1] || context.options[1].enforceForClassMembers;

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Reports that there shouldn't be a space after the first token
         * @param {ASTNode} node The node to report in the event of an error.
         * @param {Token} token The token to use for the report.
         * @param {Token} tokenAfter The token after `token`.
         * @returns {void}
         */
        function reportNoBeginningSpace(node, token, tokenAfter) {
            context.report({
                node,
                loc: { start: token.loc.end, end: tokenAfter.loc.start },
                messageId: "unexpectedSpaceAfter",
                data: {
                    tokenValue: token.value
                },
                fix(fixer) {
                    return fixer.removeRange([token.range[1], tokenAfter.range[0]]);
                }
            });
        }

        /**
         * Reports that there shouldn't be a space before the last token
         * @param {ASTNode} node The node to report in the event of an error.
         * @param {Token} token The token to use for the report.
         * @param {Token} tokenBefore The token before `token`.
         * @returns {void}
         */
        function reportNoEndingSpace(node, token, tokenBefore) {
            context.report({
                node,
                loc: { start: tokenBefore.loc.end, end: token.loc.start },
                messageId: "unexpectedSpaceBefore",
                data: {
                    tokenValue: token.value
                },
                fix(fixer) {
                    return fixer.removeRange([tokenBefore.range[1], token.range[0]]);
                }
            });
        }

        /**
         * Reports that there should be a space after the first token
         * @param {ASTNode} node The node to report in the event of an error.
         * @param {Token} token The token to use for the report.
         * @returns {void}
         */
        function reportRequiredBeginningSpace(node, token) {
            context.report({
                node,
                loc: token.loc,
                messageId: "missingSpaceAfter",
                data: {
                    tokenValue: token.value
                },
                fix(fixer) {
                    return fixer.insertTextAfter(token, " ");
                }
            });
        }

        /**
         * Reports that there should be a space before the last token
         * @param {ASTNode} node The node to report in the event of an error.
         * @param {Token} token The token to use for the report.
         * @returns {void}
         */
        function reportRequiredEndingSpace(node, token) {
            context.report({
                node,
                loc: token.loc,
                messageId: "missingSpaceBefore",
                data: {
                    tokenValue: token.value
                },
                fix(fixer) {
                    return fixer.insertTextBefore(token, " ");
                }
            });
        }

        /**
         * Returns a function that checks the spacing of a node on the property name
         * that was passed in.
         * @param {string} propertyName The property on the node to check for spacing
         * @returns {Function} A function that will check spacing on a node
         */
        function checkSpacing(propertyName) {
            return function(node) {
                if (!node.computed) {
                    return;
                }

                const property = node[propertyName];

                const before = sourceCode.getTokenBefore(property, astUtils.isOpeningBracketToken),
                    first = sourceCode.getTokenAfter(before, { includeComments: true }),
                    after = sourceCode.getTokenAfter(property, astUtils.isClosingBracketToken),
                    last = sourceCode.getTokenBefore(after, { includeComments: true });

                if (astUtils.isTokenOnSameLine(before, first)) {
                    if (propertyNameMustBeSpaced) {
                        if (!sourceCode.isSpaceBetweenTokens(before, first) && astUtils.isTokenOnSameLine(before, first)) {
                            reportRequiredBeginningSpace(node, before);
                        }
                    } else {
                        if (sourceCode.isSpaceBetweenTokens(before, first)) {
                            reportNoBeginningSpace(node, before, first);
                        }
                    }
                }

                if (astUtils.isTokenOnSameLine(last, after)) {
                    if (propertyNameMustBeSpaced) {
                        if (!sourceCode.isSpaceBetweenTokens(last, after) && astUtils.isTokenOnSameLine(last, after)) {
                            reportRequiredEndingSpace(node, after);
                        }
                    } else {
                        if (sourceCode.isSpaceBetweenTokens(last, after)) {
                            reportNoEndingSpace(node, after, last);
                        }
                    }
                }
            };
        }


        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        const listeners = {
            Property: checkSpacing("key"),
            MemberExpression: checkSpacing("property")
        };

        if (enforceForClassMembers) {
            listeners.MethodDefinition = checkSpacing("key");
        }

        return listeners;

    }
};
