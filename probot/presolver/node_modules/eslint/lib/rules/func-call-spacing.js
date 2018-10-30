/**
 * @fileoverview Rule to control spacing within function calls
 * @author Matt DuVall <http://www.mattduvall.com>
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
            description: "require or disallow spacing between function identifiers and their invocations",
            category: "Stylistic Issues",
            recommended: false
        },

        fixable: "whitespace",
        schema: {
            anyOf: [
                {
                    type: "array",
                    items: [
                        {
                            enum: ["never"]
                        }
                    ],
                    minItems: 0,
                    maxItems: 1
                },
                {
                    type: "array",
                    items: [
                        {
                            enum: ["always"]
                        },
                        {
                            type: "object",
                            properties: {
                                allowNewlines: {
                                    type: "boolean"
                                }
                            },
                            additionalProperties: false
                        }
                    ],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        }
    },

    create(context) {

        const never = context.options[0] !== "always";
        const allowNewlines = !never && context.options[1] && context.options[1].allowNewlines;
        const sourceCode = context.getSourceCode();
        const text = sourceCode.getText();

        /**
         * Check if open space is present in a function name
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function checkSpacing(node) {
            const lastToken = sourceCode.getLastToken(node);
            const lastCalleeToken = sourceCode.getLastToken(node.callee);
            const parenToken = sourceCode.getFirstTokenBetween(lastCalleeToken, lastToken, astUtils.isOpeningParenToken);
            const prevToken = parenToken && sourceCode.getTokenBefore(parenToken);

            // Parens in NewExpression are optional
            if (!(parenToken && parenToken.range[1] < node.range[1])) {
                return;
            }

            const textBetweenTokens = text.slice(prevToken.range[1], parenToken.range[0]).replace(/\/\*.*?\*\//g, "");
            const hasWhitespace = /\s/.test(textBetweenTokens);
            const hasNewline = hasWhitespace && astUtils.LINEBREAK_MATCHER.test(textBetweenTokens);

            /*
             * never allowNewlines hasWhitespace hasNewline message
             * F     F             F             F          Missing space between function name and paren.
             * F     F             F             T          (Invalid `!hasWhitespace && hasNewline`)
             * F     F             T             T          Unexpected newline between function name and paren.
             * F     F             T             F          (OK)
             * F     T             T             F          (OK)
             * F     T             T             T          (OK)
             * F     T             F             T          (Invalid `!hasWhitespace && hasNewline`)
             * F     T             F             F          Missing space between function name and paren.
             * T     T             F             F          (Invalid `never && allowNewlines`)
             * T     T             F             T          (Invalid `!hasWhitespace && hasNewline`)
             * T     T             T             T          (Invalid `never && allowNewlines`)
             * T     T             T             F          (Invalid `never && allowNewlines`)
             * T     F             T             F          Unexpected space between function name and paren.
             * T     F             T             T          Unexpected space between function name and paren.
             * T     F             F             T          (Invalid `!hasWhitespace && hasNewline`)
             * T     F             F             F          (OK)
             *
             * T                   T                        Unexpected space between function name and paren.
             * F                   F                        Missing space between function name and paren.
             * F     F                           T          Unexpected newline between function name and paren.
             */

            if (never && hasWhitespace) {
                context.report({
                    node,
                    loc: lastCalleeToken.loc.start,
                    message: "Unexpected space between function name and paren.",
                    fix(fixer) {

                        // Only autofix if there is no newline
                        // https://github.com/eslint/eslint/issues/7787
                        if (!hasNewline) {
                            return fixer.removeRange([prevToken.range[1], parenToken.range[0]]);
                        }

                        return null;
                    }
                });
            } else if (!never && !hasWhitespace) {
                context.report({
                    node,
                    loc: lastCalleeToken.loc.start,
                    message: "Missing space between function name and paren.",
                    fix(fixer) {
                        return fixer.insertTextBefore(parenToken, " ");
                    }
                });
            } else if (!never && !allowNewlines && hasNewline) {
                context.report({
                    node,
                    loc: lastCalleeToken.loc.start,
                    message: "Unexpected newline between function name and paren.",
                    fix(fixer) {
                        return fixer.replaceTextRange([prevToken.range[1], parenToken.range[0]], " ");
                    }
                });
            }
        }

        return {
            CallExpression: checkSpacing,
            NewExpression: checkSpacing
        };

    }
};
