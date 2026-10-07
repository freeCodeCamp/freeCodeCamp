/**
 * @fileoverview Rule to enforce line breaks between arguments of a function call
 * @author Alexey Gonchar <https://github.com/finico>
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "enforce line breaks between arguments of a function call",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/function-call-argument-newline"
        },

        fixable: "whitespace",

        schema: [
            {
                enum: ["always", "never", "consistent"]
            }
        ],

        messages: {
            unexpectedLineBreak: "There should be no line break here.",
            missingLineBreak: "There should be a line break after this argument."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        const checkers = {
            unexpected: {
                messageId: "unexpectedLineBreak",
                check: (prevToken, currentToken) => prevToken.loc.end.line !== currentToken.loc.start.line,
                createFix: (token, tokenBefore) => fixer =>
                    fixer.replaceTextRange([tokenBefore.range[1], token.range[0]], " ")
            },
            missing: {
                messageId: "missingLineBreak",
                check: (prevToken, currentToken) => prevToken.loc.end.line === currentToken.loc.start.line,
                createFix: (token, tokenBefore) => fixer =>
                    fixer.replaceTextRange([tokenBefore.range[1], token.range[0]], "\n")
            }
        };

        /**
         * Check all arguments for line breaks in the CallExpression
         * @param {CallExpression} node node to evaluate
         * @param {{ messageId: string, check: Function }} checker selected checker
         * @returns {void}
         * @private
         */
        function checkArguments(node, checker) {
            for (let i = 1; i < node.arguments.length; i++) {
                const prevArgToken = sourceCode.getLastToken(node.arguments[i - 1]);
                const currentArgToken = sourceCode.getFirstToken(node.arguments[i]);

                if (checker.check(prevArgToken, currentArgToken)) {
                    const tokenBefore = sourceCode.getTokenBefore(
                        currentArgToken,
                        { includeComments: true }
                    );

                    const hasLineCommentBefore = tokenBefore.type === "Line";

                    context.report({
                        node,
                        loc: {
                            start: tokenBefore.loc.end,
                            end: currentArgToken.loc.start
                        },
                        messageId: checker.messageId,
                        fix: hasLineCommentBefore ? null : checker.createFix(currentArgToken, tokenBefore)
                    });
                }
            }
        }

        /**
         * Check if open space is present in a function name
         * @param {CallExpression} node node to evaluate
         * @returns {void}
         * @private
         */
        function check(node) {
            if (node.arguments.length < 2) {
                return;
            }

            const option = context.options[0] || "always";

            if (option === "never") {
                checkArguments(node, checkers.unexpected);
            } else if (option === "always") {
                checkArguments(node, checkers.missing);
            } else if (option === "consistent") {
                const firstArgToken = sourceCode.getLastToken(node.arguments[0]);
                const secondArgToken = sourceCode.getFirstToken(node.arguments[1]);

                if (firstArgToken.loc.end.line === secondArgToken.loc.start.line) {
                    checkArguments(node, checkers.unexpected);
                } else {
                    checkArguments(node, checkers.missing);
                }
            }
        }

        return {
            CallExpression: check,
            NewExpression: check
        };
    }
};
