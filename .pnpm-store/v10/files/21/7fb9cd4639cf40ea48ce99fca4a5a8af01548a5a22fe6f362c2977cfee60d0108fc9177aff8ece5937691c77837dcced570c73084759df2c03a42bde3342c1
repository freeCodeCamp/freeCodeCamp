/**
 * @fileoverview enforce "for" loop update clause moving the counter in the right direction.(for-direction)
 * @author Aladdin-ADD<hh_2013@foxmail.com>
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "enforce \"for\" loop update clause moving the counter in the right direction.",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/for-direction"
        },

        fixable: null,
        schema: [],

        messages: {
            incorrectDirection: "The update clause in this loop moves the variable in the wrong direction."
        }
    },

    create(context) {

        /**
         * report an error.
         * @param {ASTNode} node the node to report.
         * @returns {void}
         */
        function report(node) {
            context.report({
                node,
                messageId: "incorrectDirection"
            });
        }

        /**
         * check the right side of the assignment
         * @param {ASTNode} update UpdateExpression to check
         * @param {int} dir expected direction that could either be turned around or invalidated
         * @returns {int} return dir, the negated dir or zero if it's not clear for identifiers
         */
        function getRightDirection(update, dir) {
            if (update.right.type === "UnaryExpression") {
                if (update.right.operator === "-") {
                    return -dir;
                }
            } else if (update.right.type === "Identifier") {
                return 0;
            }
            return dir;
        }

        /**
         * check UpdateExpression add/sub the counter
         * @param {ASTNode} update UpdateExpression to check
         * @param {string} counter variable name to check
         * @returns {int} if add return 1, if sub return -1, if nochange, return 0
         */
        function getUpdateDirection(update, counter) {
            if (update.argument.type === "Identifier" && update.argument.name === counter) {
                if (update.operator === "++") {
                    return 1;
                }
                if (update.operator === "--") {
                    return -1;
                }
            }
            return 0;
        }

        /**
         * check AssignmentExpression add/sub the counter
         * @param {ASTNode} update AssignmentExpression to check
         * @param {string} counter variable name to check
         * @returns {int} if add return 1, if sub return -1, if nochange, return 0
         */
        function getAssignmentDirection(update, counter) {
            if (update.left.name === counter) {
                if (update.operator === "+=") {
                    return getRightDirection(update, 1);
                }
                if (update.operator === "-=") {
                    return getRightDirection(update, -1);
                }
            }
            return 0;
        }
        return {
            ForStatement(node) {

                if (node.test && node.test.type === "BinaryExpression" && node.test.left.type === "Identifier" && node.update) {
                    const counter = node.test.left.name;
                    const operator = node.test.operator;
                    const update = node.update;

                    let wrongDirection;

                    if (operator === "<" || operator === "<=") {
                        wrongDirection = -1;
                    } else if (operator === ">" || operator === ">=") {
                        wrongDirection = 1;
                    } else {
                        return;
                    }

                    if (update.type === "UpdateExpression") {
                        if (getUpdateDirection(update, counter) === wrongDirection) {
                            report(node);
                        }
                    } else if (update.type === "AssignmentExpression" && getAssignmentDirection(update, counter) === wrongDirection) {
                        report(node);
                    }
                }
            }
        };
    }
};
