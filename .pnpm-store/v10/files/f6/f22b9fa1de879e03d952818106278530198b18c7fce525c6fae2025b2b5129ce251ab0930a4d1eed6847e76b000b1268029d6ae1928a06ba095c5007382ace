/**
 * @fileoverview require default case in switch statements
 * @author Aliaksei Shytkin
 */
"use strict";

const DEFAULT_COMMENT_PATTERN = /^no default$/iu;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "require `default` cases in `switch` statements",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/default-case"
        },

        schema: [{
            type: "object",
            properties: {
                commentPattern: {
                    type: "string"
                }
            },
            additionalProperties: false
        }],

        messages: {
            missingDefaultCase: "Expected a default case."
        }
    },

    create(context) {
        const options = context.options[0] || {};
        const commentPattern = options.commentPattern
            ? new RegExp(options.commentPattern, "u")
            : DEFAULT_COMMENT_PATTERN;

        const sourceCode = context.getSourceCode();

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Shortcut to get last element of array
         * @param  {*[]} collection Array
         * @returns {*} Last element
         */
        function last(collection) {
            return collection[collection.length - 1];
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {

            SwitchStatement(node) {

                if (!node.cases.length) {

                    /*
                     * skip check of empty switch because there is no easy way
                     * to extract comments inside it now
                     */
                    return;
                }

                const hasDefault = node.cases.some(v => v.test === null);

                if (!hasDefault) {

                    let comment;

                    const lastCase = last(node.cases);
                    const comments = sourceCode.getCommentsAfter(lastCase);

                    if (comments.length) {
                        comment = last(comments);
                    }

                    if (!comment || !commentPattern.test(comment.value.trim())) {
                        context.report({ node, messageId: "missingDefaultCase" });
                    }
                }
            }
        };
    }
};
