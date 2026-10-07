/**
 * @fileoverview Rule to disallow useless backreferences in regular expressions
 * @author Milos Djermanovic
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { CALL, CONSTRUCT, ReferenceTracker, getStringIfConstant } = require("eslint-utils");
const { RegExpParser, visitRegExpAST } = require("regexpp");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const parser = new RegExpParser();

/**
 * Finds the path from the given `regexpp` AST node to the root node.
 * @param {regexpp.Node} node Node.
 * @returns {regexpp.Node[]} Array that starts with the given node and ends with the root node.
 */
function getPathToRoot(node) {
    const path = [];
    let current = node;

    do {
        path.push(current);
        current = current.parent;
    } while (current);

    return path;
}

/**
 * Determines whether the given `regexpp` AST node is a lookaround node.
 * @param {regexpp.Node} node Node.
 * @returns {boolean} `true` if it is a lookaround node.
 */
function isLookaround(node) {
    return node.type === "Assertion" &&
        (node.kind === "lookahead" || node.kind === "lookbehind");
}

/**
 * Determines whether the given `regexpp` AST node is a negative lookaround node.
 * @param {regexpp.Node} node Node.
 * @returns {boolean} `true` if it is a negative lookaround node.
 */
function isNegativeLookaround(node) {
    return isLookaround(node) && node.negate;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow useless backreferences in regular expressions",
            category: "Possible Errors",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-useless-backreference"
        },

        schema: [],

        messages: {
            nested: "Backreference '{{ bref }}' will be ignored. It references group '{{ group }}' from within that group.",
            forward: "Backreference '{{ bref }}' will be ignored. It references group '{{ group }}' which appears later in the pattern.",
            backward: "Backreference '{{ bref }}' will be ignored. It references group '{{ group }}' which appears before in the same lookbehind.",
            disjunctive: "Backreference '{{ bref }}' will be ignored. It references group '{{ group }}' which is in another alternative.",
            intoNegativeLookaround: "Backreference '{{ bref }}' will be ignored. It references group '{{ group }}' which is in a negative lookaround."
        }
    },

    create(context) {

        /**
         * Checks and reports useless backreferences in the given regular expression.
         * @param {ASTNode} node Node that represents regular expression. A regex literal or RegExp constructor call.
         * @param {string} pattern Regular expression pattern.
         * @param {string} flags Regular expression flags.
         * @returns {void}
         */
        function checkRegex(node, pattern, flags) {
            let regExpAST;

            try {
                regExpAST = parser.parsePattern(pattern, 0, pattern.length, flags.includes("u"));
            } catch {

                // Ignore regular expressions with syntax errors
                return;
            }

            visitRegExpAST(regExpAST, {
                onBackreferenceEnter(bref) {
                    const group = bref.resolved,
                        brefPath = getPathToRoot(bref),
                        groupPath = getPathToRoot(group);
                    let messageId = null;

                    if (brefPath.includes(group)) {

                        // group is bref's ancestor => bref is nested ('nested reference') => group hasn't matched yet when bref starts to match.
                        messageId = "nested";
                    } else {

                        // Start from the root to find the lowest common ancestor.
                        let i = brefPath.length - 1,
                            j = groupPath.length - 1;

                        do {
                            i--;
                            j--;
                        } while (brefPath[i] === groupPath[j]);

                        const indexOfLowestCommonAncestor = j + 1,
                            groupCut = groupPath.slice(0, indexOfLowestCommonAncestor),
                            commonPath = groupPath.slice(indexOfLowestCommonAncestor),
                            lowestCommonLookaround = commonPath.find(isLookaround),
                            isMatchingBackward = lowestCommonLookaround && lowestCommonLookaround.kind === "lookbehind";

                        if (!isMatchingBackward && bref.end <= group.start) {

                            // bref is left, group is right ('forward reference') => group hasn't matched yet when bref starts to match.
                            messageId = "forward";
                        } else if (isMatchingBackward && group.end <= bref.start) {

                            // the opposite of the previous when the regex is matching backward in a lookbehind context.
                            messageId = "backward";
                        } else if (groupCut[groupCut.length - 1].type === "Alternative") {

                            // group's and bref's ancestor nodes below the lowest common ancestor are sibling alternatives => they're disjunctive.
                            messageId = "disjunctive";
                        } else if (groupCut.some(isNegativeLookaround)) {

                            // group is in a negative lookaround which isn't bref's ancestor => group has already failed when bref starts to match.
                            messageId = "intoNegativeLookaround";
                        }
                    }

                    if (messageId) {
                        context.report({
                            node,
                            messageId,
                            data: {
                                bref: bref.raw,
                                group: group.raw
                            }
                        });
                    }
                }
            });
        }

        return {
            "Literal[regex]"(node) {
                const { pattern, flags } = node.regex;

                checkRegex(node, pattern, flags);
            },
            Program() {
                const scope = context.getScope(),
                    tracker = new ReferenceTracker(scope),
                    traceMap = {
                        RegExp: {
                            [CALL]: true,
                            [CONSTRUCT]: true
                        }
                    };

                for (const { node } of tracker.iterateGlobalReferences(traceMap)) {
                    const [patternNode, flagsNode] = node.arguments,
                        pattern = getStringIfConstant(patternNode, scope),
                        flags = getStringIfConstant(flagsNode, scope);

                    if (typeof pattern === "string") {
                        checkRegex(node, pattern, flags || "");
                    }
                }
            }
        };
    }
};
