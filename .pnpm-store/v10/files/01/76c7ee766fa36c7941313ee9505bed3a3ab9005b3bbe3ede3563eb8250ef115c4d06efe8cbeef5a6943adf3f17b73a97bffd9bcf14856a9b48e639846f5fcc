/**
 * @fileoverview Rule that warns about used warning comments
 * @author Alexander Schmidt <https://github.com/lxanders>
 */

"use strict";

const escapeRegExp = require("escape-string-regexp");
const astUtils = require("./utils/ast-utils");

const CHAR_LIMIT = 40;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow specified warning terms in comments",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-warning-comments"
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
        ],

        messages: {
            unexpectedComment: "Unexpected '{{matchedTerm}}' comment: '{{comment}}'."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode(),
            configuration = context.options[0] || {},
            warningTerms = configuration.terms || ["todo", "fixme", "xxx"],
            location = configuration.location || "start",
            selfConfigRegEx = /\bno-warning-comments\b/u;

        /**
         * Convert a warning term into a RegExp which will match a comment containing that whole word in the specified
         * location ("start" or "anywhere"). If the term starts or ends with non word characters, then the match will not
         * require word boundaries on that side.
         * @param {string} term A term to convert to a RegExp
         * @returns {RegExp} The term converted to a RegExp
         */
        function convertToRegExp(term) {
            const escaped = escapeRegExp(term);
            const wordBoundary = "\\b";
            const eitherOrWordBoundary = `|${wordBoundary}`;
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
            const suffix = /\w$/u.test(term) ? "\\b" : "";

            if (location === "start") {

                /*
                 * When matching at the start, ignore leading whitespace, and
                 * there's no need to worry about word boundaries.
                 */
                prefix = "^\\s*";
            } else if (/^\w/u.test(term)) {
                prefix = wordBoundary;
            } else {
                prefix = "";
            }

            if (location === "start") {

                /*
                 * For location "start" the regex should be
                 * ^\s*TERM\b.  This checks the word boundary
                 * at the beginning of the comment.
                 */
                return new RegExp(prefix + escaped + suffix, "iu");
            }

            /*
             * For location "anywhere" the regex should be
             * \bTERM\b|\bTERM\b, this checks the entire comment
             * for the term.
             */
            return new RegExp(
                prefix +
                    escaped +
                    suffix +
                    eitherOrWordBoundary +
                    term +
                    wordBoundary,
                "iu"
            );
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
            const comment = node.value;

            if (
                astUtils.isDirectiveComment(node) &&
                selfConfigRegEx.test(comment)
            ) {
                return;
            }

            const matches = commentContainsWarningTerm(comment);

            matches.forEach(matchedTerm => {
                let commentToDisplay = "";
                let truncated = false;

                for (const c of comment.trim().split(/\s+/u)) {
                    const tmp = commentToDisplay ? `${commentToDisplay} ${c}` : c;

                    if (tmp.length <= CHAR_LIMIT) {
                        commentToDisplay = tmp;
                    } else {
                        truncated = true;
                        break;
                    }
                }

                context.report({
                    node,
                    messageId: "unexpectedComment",
                    data: {
                        matchedTerm,
                        comment: `${commentToDisplay}${
                            truncated ? "..." : ""
                        }`
                    }
                });
            });
        }

        return {
            Program() {
                const comments = sourceCode.getAllComments();

                comments
                    .filter(token => token.type !== "Shebang")
                    .forEach(checkComment);
            }
        };
    }
};
