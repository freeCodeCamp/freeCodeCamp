/**
 * @fileoverview Rule to enforce location of semicolons.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const SELECTOR = `:matches(${
    [
        "BreakStatement", "ContinueStatement", "DebuggerStatement",
        "DoWhileStatement", "ExportAllDeclaration",
        "ExportDefaultDeclaration", "ExportNamedDeclaration",
        "ExpressionStatement", "ImportDeclaration", "ReturnStatement",
        "ThrowStatement", "VariableDeclaration"
    ].join(",")
})`;

/**
 * Get the child node list of a given node.
 * This returns `Program#body`, `BlockStatement#body`, or `SwitchCase#consequent`.
 * This is used to check whether a node is the first/last child.
 * @param {Node} node A node to get child node list.
 * @returns {Node[]|null} The child node list.
 */
function getChildren(node) {
    const t = node.type;

    if (t === "BlockStatement" || t === "Program") {
        return node.body;
    }
    if (t === "SwitchCase") {
        return node.consequent;
    }
    return null;
}

/**
 * Check whether a given node is the last statement in the parent block.
 * @param {Node} node A node to check.
 * @returns {boolean} `true` if the node is the last statement in the parent block.
 */
function isLastChild(node) {
    const t = node.parent.type;

    if (t === "IfStatement" && node.parent.consequent === node && node.parent.alternate) { // before `else` keyword.
        return true;
    }
    if (t === "DoWhileStatement") { // before `while` keyword.
        return true;
    }
    const nodeList = getChildren(node.parent);

    return nodeList !== null && nodeList[nodeList.length - 1] === node; // before `}` or etc.
}

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "enforce location of semicolons",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/semi-style"
        },

        schema: [{ enum: ["last", "first"] }],
        fixable: "whitespace",

        messages: {
            expectedSemiColon: "Expected this semicolon to be at {{pos}}."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        const option = context.options[0] || "last";

        /**
         * Check the given semicolon token.
         * @param {Token} semiToken The semicolon token to check.
         * @param {"first"|"last"} expected The expected location to check.
         * @returns {void}
         */
        function check(semiToken, expected) {
            const prevToken = sourceCode.getTokenBefore(semiToken);
            const nextToken = sourceCode.getTokenAfter(semiToken);
            const prevIsSameLine = !prevToken || astUtils.isTokenOnSameLine(prevToken, semiToken);
            const nextIsSameLine = !nextToken || astUtils.isTokenOnSameLine(semiToken, nextToken);

            if ((expected === "last" && !prevIsSameLine) || (expected === "first" && !nextIsSameLine)) {
                context.report({
                    loc: semiToken.loc,
                    messageId: "expectedSemiColon",
                    data: {
                        pos: (expected === "last")
                            ? "the end of the previous line"
                            : "the beginning of the next line"
                    },
                    fix(fixer) {
                        if (prevToken && nextToken && sourceCode.commentsExistBetween(prevToken, nextToken)) {
                            return null;
                        }

                        const start = prevToken ? prevToken.range[1] : semiToken.range[0];
                        const end = nextToken ? nextToken.range[0] : semiToken.range[1];
                        const text = (expected === "last") ? ";\n" : "\n;";

                        return fixer.replaceTextRange([start, end], text);
                    }
                });
            }
        }

        return {
            [SELECTOR](node) {
                if (option === "first" && isLastChild(node)) {
                    return;
                }

                const lastToken = sourceCode.getLastToken(node);

                if (astUtils.isSemicolonToken(lastToken)) {
                    check(lastToken, option);
                }
            },

            ForStatement(node) {
                const firstSemi = node.init && sourceCode.getTokenAfter(node.init, astUtils.isSemicolonToken);
                const secondSemi = node.test && sourceCode.getTokenAfter(node.test, astUtils.isSemicolonToken);

                if (firstSemi) {
                    check(firstSemi, "last");
                }
                if (secondSemi) {
                    check(secondSemi, "last");
                }
            }
        };
    }
};
