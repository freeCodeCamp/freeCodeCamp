/**
 * @fileoverview Rule to check that spaced function application
 * @author Matt DuVall <http://www.mattduvall.com>
 * @deprecated in ESLint v3.3.0
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow spacing between function identifiers and their applications (deprecated)",
            category: "Stylistic Issues",
            recommended: false,
            replacedBy: ["func-call-spacing"]
        },

        deprecated: true,

        fixable: "whitespace",
        schema: []
    },

    create(context) {

        const sourceCode = context.getSourceCode();

        /**
         * Check if open space is present in a function name
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function detectOpenSpaces(node) {
            const lastCalleeToken = sourceCode.getLastToken(node.callee);
            let prevToken = lastCalleeToken,
                parenToken = sourceCode.getTokenAfter(lastCalleeToken);

            // advances to an open parenthesis.
            while (
                parenToken &&
                parenToken.range[1] < node.range[1] &&
                parenToken.value !== "("
            ) {
                prevToken = parenToken;
                parenToken = sourceCode.getTokenAfter(parenToken);
            }

            // look for a space between the callee and the open paren
            if (parenToken &&
                parenToken.range[1] < node.range[1] &&
                sourceCode.isSpaceBetweenTokens(prevToken, parenToken)
            ) {
                context.report({
                    node,
                    loc: lastCalleeToken.loc.start,
                    message: "Unexpected space between function name and paren.",
                    fix(fixer) {
                        return fixer.removeRange([prevToken.range[1], parenToken.range[0]]);
                    }
                });
            }
        }

        return {
            CallExpression: detectOpenSpaces,
            NewExpression: detectOpenSpaces
        };

    }
};
