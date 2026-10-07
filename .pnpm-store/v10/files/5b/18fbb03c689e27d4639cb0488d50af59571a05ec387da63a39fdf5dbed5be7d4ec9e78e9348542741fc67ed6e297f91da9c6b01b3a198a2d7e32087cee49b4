/**
 * @fileoverview Rule to check spacing between template tags and their literals
 * @author Jonathan Wilsson
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "require or disallow spacing between template tags and their literals",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/template-tag-spacing"
        },

        fixable: "whitespace",

        schema: [
            { enum: ["always", "never"] }
        ],
        messages: {
            unexpected: "Unexpected space between template tag and template literal.",
            missing: "Missing space between template tag and template literal."
        }
    },

    create(context) {
        const never = context.options[0] !== "always";
        const sourceCode = context.getSourceCode();

        /**
         * Check if a space is present between a template tag and its literal
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function checkSpacing(node) {
            const tagToken = sourceCode.getTokenBefore(node.quasi);
            const literalToken = sourceCode.getFirstToken(node.quasi);
            const hasWhitespace = sourceCode.isSpaceBetweenTokens(tagToken, literalToken);

            if (never && hasWhitespace) {
                context.report({
                    node,
                    loc: {
                        start: tagToken.loc.end,
                        end: literalToken.loc.start
                    },
                    messageId: "unexpected",
                    fix(fixer) {
                        const comments = sourceCode.getCommentsBefore(node.quasi);

                        // Don't fix anything if there's a single line comment after the template tag
                        if (comments.some(comment => comment.type === "Line")) {
                            return null;
                        }

                        return fixer.replaceTextRange(
                            [tagToken.range[1], literalToken.range[0]],
                            comments.reduce((text, comment) => text + sourceCode.getText(comment), "")
                        );
                    }
                });
            } else if (!never && !hasWhitespace) {
                context.report({
                    node,
                    loc: {
                        start: node.loc.start,
                        end: literalToken.loc.start
                    },
                    messageId: "missing",
                    fix(fixer) {
                        return fixer.insertTextAfter(tagToken, " ");
                    }
                });
            }
        }

        return {
            TaggedTemplateExpression: checkSpacing
        };
    }
};
