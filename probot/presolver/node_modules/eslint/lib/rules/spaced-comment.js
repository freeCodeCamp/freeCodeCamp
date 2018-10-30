/**
 * @fileoverview Source code for spaced-comments rule
 * @author Gyandeep Singh
 */
"use strict";

const lodash = require("lodash");
const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Escapes the control characters of a given string.
 * @param {string} s - A string to escape.
 * @returns {string} An escaped string.
 */
function escape(s) {
    const isOneChar = s.length === 1;

    s = lodash.escapeRegExp(s);
    return isOneChar ? s : `(?:${s})`;
}

/**
 * Escapes the control characters of a given string.
 * And adds a repeat flag.
 * @param {string} s - A string to escape.
 * @returns {string} An escaped string.
 */
function escapeAndRepeat(s) {
    return `${escape(s)}+`;
}

/**
 * Parses `markers` option.
 * If markers don't include `"*"`, this adds `"*"` to allow JSDoc comments.
 * @param {string[]} [markers] - A marker list.
 * @returns {string[]} A marker list.
 */
function parseMarkersOption(markers) {
    markers = markers ? markers.slice(0) : [];

    // `*` is a marker for JSDoc comments.
    if (markers.indexOf("*") === -1) {
        markers.push("*");
    }

    return markers;
}

/**
 * Creates string pattern for exceptions.
 * Generated pattern:
 *
 * 1. A space or an exception pattern sequence.
 *
 * @param {string[]} exceptions - An exception pattern list.
 * @returns {string} A regular expression string for exceptions.
 */
function createExceptionsPattern(exceptions) {
    let pattern = "";

    /*
     * A space or an exception pattern sequence.
     * []                 ==> "\s"
     * ["-"]              ==> "(?:\s|\-+$)"
     * ["-", "="]         ==> "(?:\s|(?:\-+|=+)$)"
     * ["-", "=", "--=="] ==> "(?:\s|(?:\-+|=+|(?:\-\-==)+)$)" ==> https://jex.im/regulex/#!embed=false&flags=&re=(%3F%3A%5Cs%7C(%3F%3A%5C-%2B%7C%3D%2B%7C(%3F%3A%5C-%5C-%3D%3D)%2B)%24)
     */
    if (exceptions.length === 0) {

        // a space.
        pattern += "\\s";
    } else {

        // a space or...
        pattern += "(?:\\s|";

        if (exceptions.length === 1) {

            // a sequence of the exception pattern.
            pattern += escapeAndRepeat(exceptions[0]);
        } else {

            // a sequence of one of the exception patterns.
            pattern += "(?:";
            pattern += exceptions.map(escapeAndRepeat).join("|");
            pattern += ")";
        }
        pattern += `(?:$|[${Array.from(astUtils.LINEBREAKS).join("")}]))`;
    }

    return pattern;
}

/**
 * Creates RegExp object for `always` mode.
 * Generated pattern for beginning of comment:
 *
 * 1. First, a marker or nothing.
 * 2. Next, a space or an exception pattern sequence.
 *
 * @param {string[]} markers - A marker list.
 * @param {string[]} exceptions - An exception pattern list.
 * @returns {RegExp} A RegExp object for the beginning of a comment in `always` mode.
 */
function createAlwaysStylePattern(markers, exceptions) {
    let pattern = "^";

    /*
     * A marker or nothing.
     * ["*"]            ==> "\*?"
     * ["*", "!"]       ==> "(?:\*|!)?"
     * ["*", "/", "!<"] ==> "(?:\*|\/|(?:!<))?" ==> https://jex.im/regulex/#!embed=false&flags=&re=(%3F%3A%5C*%7C%5C%2F%7C(%3F%3A!%3C))%3F
     */
    if (markers.length === 1) {

        // the marker.
        pattern += escape(markers[0]);
    } else {

        // one of markers.
        pattern += "(?:";
        pattern += markers.map(escape).join("|");
        pattern += ")";
    }

    pattern += "?"; // or nothing.
    pattern += createExceptionsPattern(exceptions);

    return new RegExp(pattern);
}

/**
 * Creates RegExp object for `never` mode.
 * Generated pattern for beginning of comment:
 *
 * 1. First, a marker or nothing (captured).
 * 2. Next, a space or a tab.
 *
 * @param {string[]} markers - A marker list.
 * @returns {RegExp} A RegExp object for `never` mode.
 */
function createNeverStylePattern(markers) {
    const pattern = `^(${markers.map(escape).join("|")})?[ \t]+`;

    return new RegExp(pattern);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce consistent spacing after the `//` or `/*` in a comment",
            category: "Stylistic Issues",
            recommended: false
        },

        fixable: "whitespace",

        schema: [
            {
                enum: ["always", "never"]
            },
            {
                type: "object",
                properties: {
                    exceptions: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    markers: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    line: {
                        type: "object",
                        properties: {
                            exceptions: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            },
                            markers: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            }
                        },
                        additionalProperties: false
                    },
                    block: {
                        type: "object",
                        properties: {
                            exceptions: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            },
                            markers: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            },
                            balanced: {
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

        // Unless the first option is never, require a space
        const requireSpace = context.options[0] !== "never";

        /*
         * Parse the second options.
         * If markers don't include `"*"`, it's added automatically for JSDoc
         * comments.
         */
        const config = context.options[1] || {};
        const balanced = config.block && config.block.balanced;

        const styleRules = ["block", "line"].reduce((rule, type) => {
            const markers = parseMarkersOption(config[type] && config[type].markers || config.markers);
            const exceptions = config[type] && config[type].exceptions || config.exceptions || [];
            const endNeverPattern = "[ \t]+$";

            // Create RegExp object for valid patterns.
            rule[type] = {
                beginRegex: requireSpace ? createAlwaysStylePattern(markers, exceptions) : createNeverStylePattern(markers),
                endRegex: balanced && requireSpace ? new RegExp(`${createExceptionsPattern(exceptions)}$`) : new RegExp(endNeverPattern),
                hasExceptions: exceptions.length > 0,
                markers: new RegExp(`^(${markers.map(escape).join("|")})`)
            };

            return rule;
        }, {});

        /**
         * Reports a beginning spacing error with an appropriate message.
         * @param {ASTNode} node - A comment node to check.
         * @param {string} message - An error message to report.
         * @param {Array} match - An array of match results for markers.
         * @param {string} refChar - Character used for reference in the error message.
         * @returns {void}
         */
        function reportBegin(node, message, match, refChar) {
            const type = node.type.toLowerCase(),
                commentIdentifier = type === "block" ? "/*" : "//";

            context.report({
                node,
                fix(fixer) {
                    const start = node.range[0];
                    let end = start + 2;

                    if (requireSpace) {
                        if (match) {
                            end += match[0].length;
                        }
                        return fixer.insertTextAfterRange([start, end], " ");
                    }
                    end += match[0].length;
                    return fixer.replaceTextRange([start, end], commentIdentifier + (match[1] ? match[1] : ""));

                },
                message,
                data: { refChar }
            });
        }

        /**
         * Reports an ending spacing error with an appropriate message.
         * @param {ASTNode} node - A comment node to check.
         * @param {string} message - An error message to report.
         * @param {string} match - An array of the matched whitespace characters.
         * @returns {void}
         */
        function reportEnd(node, message, match) {
            context.report({
                node,
                fix(fixer) {
                    if (requireSpace) {
                        return fixer.insertTextAfterRange([node.start, node.end - 2], " ");
                    }
                    const end = node.end - 2,
                        start = end - match[0].length;

                    return fixer.replaceTextRange([start, end], "");

                },
                message
            });
        }

        /**
         * Reports a given comment if it's invalid.
         * @param {ASTNode} node - a comment node to check.
         * @returns {void}
         */
        function checkCommentForSpace(node) {
            const type = node.type.toLowerCase(),
                rule = styleRules[type],
                commentIdentifier = type === "block" ? "/*" : "//";

            // Ignores empty comments.
            if (node.value.length === 0) {
                return;
            }

            const beginMatch = rule.beginRegex.exec(node.value);
            const endMatch = rule.endRegex.exec(node.value);

            // Checks.
            if (requireSpace) {
                if (!beginMatch) {
                    const hasMarker = rule.markers.exec(node.value);
                    const marker = hasMarker ? commentIdentifier + hasMarker[0] : commentIdentifier;

                    if (rule.hasExceptions) {
                        reportBegin(node, "Expected exception block, space or tab after '{{refChar}}' in comment.", hasMarker, marker);
                    } else {
                        reportBegin(node, "Expected space or tab after '{{refChar}}' in comment.", hasMarker, marker);
                    }
                }

                if (balanced && type === "block" && !endMatch) {
                    reportEnd(node, "Expected space or tab before '*/' in comment.");
                }
            } else {
                if (beginMatch) {
                    if (!beginMatch[1]) {
                        reportBegin(node, "Unexpected space or tab after '{{refChar}}' in comment.", beginMatch, commentIdentifier);
                    } else {
                        reportBegin(node, "Unexpected space or tab after marker ({{refChar}}) in comment.", beginMatch, beginMatch[1]);
                    }
                }

                if (balanced && type === "block" && endMatch) {
                    reportEnd(node, "Unexpected space or tab before '*/' in comment.", endMatch);
                }
            }
        }

        return {

            LineComment: checkCommentForSpace,
            BlockComment: checkCommentForSpace

        };
    }
};
