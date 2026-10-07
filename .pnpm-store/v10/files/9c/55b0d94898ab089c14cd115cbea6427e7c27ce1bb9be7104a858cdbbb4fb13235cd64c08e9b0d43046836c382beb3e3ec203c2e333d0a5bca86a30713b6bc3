/**
 * @fileoverview Rule to flag fall-through cases in switch statements.
 * @author Matt DuVall <http://mattduvall.com/>
 */
"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const DEFAULT_FALLTHROUGH_COMMENT = /falls?\s?through/iu;

/**
 * Checks whether or not a given case has a fallthrough comment.
 * @param {ASTNode} caseWhichFallsThrough SwitchCase node which falls through.
 * @param {ASTNode} subsequentCase The case after caseWhichFallsThrough.
 * @param {RuleContext} context A rule context which stores comments.
 * @param {RegExp} fallthroughCommentPattern A pattern to match comment to.
 * @returns {boolean} `true` if the case has a valid fallthrough comment.
 */
function hasFallthroughComment(caseWhichFallsThrough, subsequentCase, context, fallthroughCommentPattern) {
    const sourceCode = context.getSourceCode();

    if (caseWhichFallsThrough.consequent.length === 1 && caseWhichFallsThrough.consequent[0].type === "BlockStatement") {
        const trailingCloseBrace = sourceCode.getLastToken(caseWhichFallsThrough.consequent[0]);
        const commentInBlock = sourceCode.getCommentsBefore(trailingCloseBrace).pop();

        if (commentInBlock && fallthroughCommentPattern.test(commentInBlock.value)) {
            return true;
        }
    }

    const comment = sourceCode.getCommentsBefore(subsequentCase).pop();

    return Boolean(comment && fallthroughCommentPattern.test(comment.value));
}

/**
 * Checks whether or not a given code path segment is reachable.
 * @param {CodePathSegment} segment A CodePathSegment to check.
 * @returns {boolean} `true` if the segment is reachable.
 */
function isReachable(segment) {
    return segment.reachable;
}

/**
 * Checks whether a node and a token are separated by blank lines
 * @param {ASTNode} node The node to check
 * @param {Token} token The token to compare against
 * @returns {boolean} `true` if there are blank lines between node and token
 */
function hasBlankLinesBetween(node, token) {
    return token.loc.start.line > node.loc.end.line + 1;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow fallthrough of `case` statements",
            category: "Best Practices",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-fallthrough"
        },

        schema: [
            {
                type: "object",
                properties: {
                    commentPattern: {
                        type: "string",
                        default: ""
                    }
                },
                additionalProperties: false
            }
        ],
        messages: {
            case: "Expected a 'break' statement before 'case'.",
            default: "Expected a 'break' statement before 'default'."
        }
    },

    create(context) {
        const options = context.options[0] || {};
        let currentCodePath = null;
        const sourceCode = context.getSourceCode();

        /*
         * We need to use leading comments of the next SwitchCase node because
         * trailing comments is wrong if semicolons are omitted.
         */
        let fallthroughCase = null;
        let fallthroughCommentPattern = null;

        if (options.commentPattern) {
            fallthroughCommentPattern = new RegExp(options.commentPattern, "u");
        } else {
            fallthroughCommentPattern = DEFAULT_FALLTHROUGH_COMMENT;
        }

        return {
            onCodePathStart(codePath) {
                currentCodePath = codePath;
            },
            onCodePathEnd() {
                currentCodePath = currentCodePath.upper;
            },

            SwitchCase(node) {

                /*
                 * Checks whether or not there is a fallthrough comment.
                 * And reports the previous fallthrough node if that does not exist.
                 */
                if (fallthroughCase && !hasFallthroughComment(fallthroughCase, node, context, fallthroughCommentPattern)) {
                    context.report({
                        messageId: node.test ? "case" : "default",
                        node
                    });
                }
                fallthroughCase = null;
            },

            "SwitchCase:exit"(node) {
                const nextToken = sourceCode.getTokenAfter(node);

                /*
                 * `reachable` meant fall through because statements preceded by
                 * `break`, `return`, or `throw` are unreachable.
                 * And allows empty cases and the last case.
                 */
                if (currentCodePath.currentSegments.some(isReachable) &&
                    (node.consequent.length > 0 || hasBlankLinesBetween(node, nextToken)) &&
                    node.parent.cases[node.parent.cases.length - 1] !== node) {
                    fallthroughCase = node;
                }
            }
        };
    }
};
