/**
 * @fileoverview Rule to disallow uses of await inside of loops.
 * @author Nat Mote (nmote)
 */
"use strict";

/**
 * Check whether it should stop traversing ancestors at the given node.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} `true` if it should stop traversing.
 */
function isBoundary(node) {
    const t = node.type;

    return (
        t === "FunctionDeclaration" ||
        t === "FunctionExpression" ||
        t === "ArrowFunctionExpression" ||

        /*
         * Don't report the await expressions on for-await-of loop since it's
         * asynchronous iteration intentionally.
         */
        (t === "ForOfStatement" && node.await === true)
    );
}

/**
 * Check whether the given node is in loop.
 * @param {ASTNode} node A node to check.
 * @param {ASTNode} parent A parent node to check.
 * @returns {boolean} `true` if the node is in loop.
 */
function isLooped(node, parent) {
    switch (parent.type) {
        case "ForStatement":
            return (
                node === parent.test ||
                node === parent.update ||
                node === parent.body
            );

        case "ForOfStatement":
        case "ForInStatement":
            return node === parent.body;

        case "WhileStatement":
        case "DoWhileStatement":
            return node === parent.test || node === parent.body;

        default:
            return false;
    }
}

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow `await` inside of loops",
            category: "Possible Errors",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-await-in-loop"
        },

        schema: [],

        messages: {
            unexpectedAwait: "Unexpected `await` inside a loop."
        }
    },
    create(context) {

        /**
         * Validate an await expression.
         * @param {ASTNode} awaitNode An AwaitExpression or ForOfStatement node to validate.
         * @returns {void}
         */
        function validate(awaitNode) {
            if (awaitNode.type === "ForOfStatement" && !awaitNode.await) {
                return;
            }

            let node = awaitNode;
            let parent = node.parent;

            while (parent && !isBoundary(parent)) {
                if (isLooped(node, parent)) {
                    context.report({
                        node: awaitNode,
                        messageId: "unexpectedAwait"
                    });
                    return;
                }
                node = parent;
                parent = parent.parent;
            }
        }

        return {
            AwaitExpression: validate,
            ForOfStatement: validate
        };
    }
};
