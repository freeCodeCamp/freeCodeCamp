/**
 * @fileoverview Rule to flag use of implied eval via setTimeout and setInterval
 * @author James Allardice
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow the use of `eval()`-like methods",
            category: "Best Practices",
            recommended: false
        },

        schema: []
    },

    create(context) {
        const CALLEE_RE = /^(setTimeout|setInterval|execScript)$/;

        /*
         * Figures out if we should inspect a given binary expression. Is a stack
         * of stacks, where the first element in each substack is a CallExpression.
         */
        const impliedEvalAncestorsStack = [];

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Get the last element of an array, without modifying arr, like pop(), but non-destructive.
         * @param {array} arr What to inspect
         * @returns {*} The last element of arr
         * @private
         */
        function last(arr) {
            return arr ? arr[arr.length - 1] : null;
        }

        /**
         * Checks if the given MemberExpression node is a potentially implied eval identifier on window.
         * @param {ASTNode} node The MemberExpression node to check.
         * @returns {boolean} Whether or not the given node is potentially an implied eval.
         * @private
         */
        function isImpliedEvalMemberExpression(node) {
            const object = node.object,
                property = node.property,
                hasImpliedEvalName = CALLEE_RE.test(property.name) || CALLEE_RE.test(property.value);

            return object.name === "window" && hasImpliedEvalName;
        }

        /**
         * Determines if a node represents a call to a potentially implied eval.
         *
         * This checks the callee name and that there's an argument, but not the type of the argument.
         *
         * @param {ASTNode} node The CallExpression to check.
         * @returns {boolean} True if the node matches, false if not.
         * @private
         */
        function isImpliedEvalCallExpression(node) {
            const isMemberExpression = (node.callee.type === "MemberExpression"),
                isIdentifier = (node.callee.type === "Identifier"),
                isImpliedEvalCallee =
                    (isIdentifier && CALLEE_RE.test(node.callee.name)) ||
                    (isMemberExpression && isImpliedEvalMemberExpression(node.callee));

            return isImpliedEvalCallee && node.arguments.length;
        }

        /**
         * Checks that the parent is a direct descendent of an potential implied eval CallExpression, and if the parent is a CallExpression, that we're the first argument.
         * @param {ASTNode} node The node to inspect the parent of.
         * @returns {boolean} Was the parent a direct descendent, and is the child therefore potentially part of a dangerous argument?
         * @private
         */
        function hasImpliedEvalParent(node) {

            // make sure our parent is marked
            return node.parent === last(last(impliedEvalAncestorsStack)) &&

                // if our parent is a CallExpression, make sure we're the first argument
                (node.parent.type !== "CallExpression" || node === node.parent.arguments[0]);
        }

        /**
         * Checks if our parent is marked as part of an implied eval argument. If
         * so, collapses the top of impliedEvalAncestorsStack and reports on the
         * original CallExpression.
         * @param {ASTNode} node The CallExpression to check.
         * @returns {boolean} True if the node matches, false if not.
         * @private
         */
        function checkString(node) {
            if (hasImpliedEvalParent(node)) {

                // remove the entire substack, to avoid duplicate reports
                const substack = impliedEvalAncestorsStack.pop();

                context.report({ node: substack[0], message: "Implied eval. Consider passing a function instead of a string." });
            }
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            CallExpression(node) {
                if (isImpliedEvalCallExpression(node)) {

                    // call expressions create a new substack
                    impliedEvalAncestorsStack.push([node]);
                }
            },

            "CallExpression:exit"(node) {
                if (node === last(last(impliedEvalAncestorsStack))) {

                    /* Destroys the entire sub-stack, rather than just using
                     * last(impliedEvalAncestorsStack).pop(), as a CallExpression is
                     * always the bottom of a impliedEvalAncestorsStack substack.
                     */
                    impliedEvalAncestorsStack.pop();
                }
            },

            BinaryExpression(node) {
                if (node.operator === "+" && hasImpliedEvalParent(node)) {
                    last(impliedEvalAncestorsStack).push(node);
                }
            },

            "BinaryExpression:exit"(node) {
                if (node === last(last(impliedEvalAncestorsStack))) {
                    last(impliedEvalAncestorsStack).pop();
                }
            },

            Literal(node) {
                if (typeof node.value === "string") {
                    checkString(node);
                }
            },

            TemplateLiteral(node) {
                checkString(node);
            }
        };

    }
};
