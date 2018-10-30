/**
 * @fileoverview Disallow use of multiple spaces.
 * @author Nicholas C. Zakas
 */

"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow multiple spaces",
            category: "Best Practices",
            recommended: false
        },

        fixable: "whitespace",

        schema: [
            {
                type: "object",
                properties: {
                    exceptions: {
                        type: "object",
                        patternProperties: {
                            "^([A-Z][a-z]*)+$": {
                                type: "boolean"
                            }
                        },
                        additionalProperties: false
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {

        // the index of the last comment that was checked
        const exceptions = { Property: true },
            options = context.options[0];
        let hasExceptions = true,
            lastCommentIndex = 0;

        if (options && options.exceptions) {
            Object.keys(options.exceptions).forEach(key => {
                if (options.exceptions[key]) {
                    exceptions[key] = true;
                } else {
                    delete exceptions[key];
                }
            });
            hasExceptions = Object.keys(exceptions).length > 0;
        }

        /**
         * Determines if a given source index is in a comment or not by checking
         * the index against the comment range. Since the check goes straight
         * through the file, once an index is passed a certain comment, we can
         * go to the next comment to check that.
         * @param {int} index The source index to check.
         * @param {ASTNode[]} comments An array of comment nodes.
         * @returns {boolean} True if the index is within a comment, false if not.
         * @private
         */
        function isIndexInComment(index, comments) {
            while (lastCommentIndex < comments.length) {
                const comment = comments[lastCommentIndex];

                if (comment.range[0] <= index && index < comment.range[1]) {
                    return true;
                } else if (index > comment.range[1]) {
                    lastCommentIndex++;
                } else {
                    break;
                }
            }

            return false;
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            Program() {

                const sourceCode = context.getSourceCode(),
                    source = sourceCode.getText(),
                    allComments = sourceCode.getAllComments(),
                    JOINED_LINEBEAKS = Array.from(astUtils.LINEBREAKS).join(""),
                    pattern = new RegExp(String.raw`[^ \t${JOINED_LINEBEAKS}].? {2,}`, "g");  // note: repeating space
                let parent;


                /**
                 * Creates a fix function that removes the multiple spaces between the two tokens
                 * @param {RuleFixer} leftToken left token
                 * @param {RuleFixer} rightToken right token
                 * @returns {Function} fix function
                 * @private
                 */
                function createFix(leftToken, rightToken) {
                    return function(fixer) {
                        return fixer.replaceTextRange([leftToken.range[1], rightToken.range[0]], " ");
                    };
                }

                while (pattern.test(source)) {

                    // do not flag anything inside of comments
                    if (!isIndexInComment(pattern.lastIndex, allComments)) {

                        const token = sourceCode.getTokenByRangeStart(pattern.lastIndex);

                        if (token) {
                            const previousToken = sourceCode.getTokenBefore(token);

                            if (hasExceptions) {
                                parent = sourceCode.getNodeByRangeIndex(pattern.lastIndex - 1);
                            }

                            if (!parent || !exceptions[parent.type]) {
                                context.report({
                                    node: token,
                                    loc: token.loc.start,
                                    message: "Multiple spaces found before '{{value}}'.",
                                    data: { value: token.value },
                                    fix: createFix(previousToken, token)
                                });
                            }
                        }

                    }
                }
            }
        };

    }
};
