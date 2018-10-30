/**
 * @fileoverview Rule that warns about used warning comments
 * @author Alexander Schmidt <https://github.com/lxanders>
 */

"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow specified warning terms in comments",
            category: "Best Practices",
            recommended: false
        },

        schema: [
            {
                type: "object",
                properties: {
                    terms: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    location: {
                        enum: ["start", "anywhere"]
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {

        const configuration = context.options[0] || {},
            warningTerms = configuration.terms || ["todo", "fixme", "xxx"],
            location = configuration.location || "start",
            selfConfigRegEx = /\bno-warning-comments\b/;

        /**
         * Convert a warning term into a RegExp which will match a comment containing that whole word in the specified
         * location ("start" or "anywhere"). If the term starts or ends with non word characters, then the match will not
         * require word boundaries on that side.
         *
         * @param {string} term A term to convert to a RegExp
         * @returns {RegExp} The term converted to a RegExp
         */
        function convertToRegExp(term) {
            const escaped = term.replace(/[-/\\$^*+?.()|[\]{}]/g, "\\$&");
            let prefix;

            /*
             * If the term ends in a word character (a-z0-9_), ensure a word
             * boundary at the end, so that substrings do not get falsely
             * matched. eg "todo" in a string such as "mastodon".
             * If the term ends in a non-word character, then \b won't match on
             * the boundary to the next non-word character, which would likely
             * be a space. For example `/\bFIX!\b/.test('FIX! blah') === false`.
             * In these cases, use no bounding match. Same applies for the
             * prefix, handled below.
             */
            const suffix = /\w$/.test(term) ? "\\b" : "";

            if (location === "start") {

                /*
                 * When matching at the start, ignore leading whitespace, and
                 * there's no need to worry about word boundaries.
                 */
                prefix = "^\\s*";
            } else if (/^\w/.test(term)) {
                prefix = "\\b";
            } else {
                prefix = "";
            }

            return new RegExp(prefix + escaped + suffix, "i");
        }

        const warningRegExps = warningTerms.map(convertToRegExp);

        /**
         * Checks the specified comment for matches of the configured warning terms and returns the matches.
         * @param {string} comment The comment which is checked.
         * @returns {Array} All matched warning terms for this comment.
         */
        function commentContainsWarningTerm(comment) {
            const matches = [];

            warningRegExps.forEach((regex, index) => {
                if (regex.test(comment)) {
                    matches.push(warningTerms[index]);
                }
            });

            return matches;
        }

        /**
         * Checks the specified node for matching warning comments and reports them.
         * @param {ASTNode} node The AST node being checked.
         * @returns {void} undefined.
         */
        function checkComment(node) {
            if (astUtils.isDirectiveComment(node) && selfConfigRegEx.test(node.value)) {
                return;
            }

            const matches = commentContainsWarningTerm(node.value);

            matches.forEach(matchedTerm => {
                context.report({
                    node,
                    message: "Unexpected '{{matchedTerm}}' comment.",
                    data: {
                        matchedTerm
                    }
                });
            });
        }

        return {
            BlockComment: checkComment,
            LineComment: checkComment
        };
    }
};
