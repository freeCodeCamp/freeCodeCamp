/**
 * @fileoverview Rule to disallow duplicate conditions in if-else-if chains
 * @author Milos Djermanovic
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Determines whether the first given array is a subset of the second given array.
 * @param {Function} comparator A function to compare two elements, should return `true` if they are equal.
 * @param {Array} arrA The array to compare from.
 * @param {Array} arrB The array to compare against.
 * @returns {boolean} `true` if the array `arrA` is a subset of the array `arrB`.
 */
function isSubsetByComparator(comparator, arrA, arrB) {
    return arrA.every(a => arrB.some(b => comparator(a, b)));
}

/**
 * Splits the given node by the given logical operator.
 * @param {string} operator Logical operator `||` or `&&`.
 * @param {ASTNode} node The node to split.
 * @returns {ASTNode[]} Array of conditions that makes the node when joined by the operator.
 */
function splitByLogicalOperator(operator, node) {
    if (node.type === "LogicalExpression" && node.operator === operator) {
        return [...splitByLogicalOperator(operator, node.left), ...splitByLogicalOperator(operator, node.right)];
    }
    return [node];
}

const splitByOr = splitByLogicalOperator.bind(null, "||");
const splitByAnd = splitByLogicalOperator.bind(null, "&&");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow duplicate conditions in if-else-if chains",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-dupe-else-if"
        },

        schema: [],

        messages: {
            unexpected: "This branch can never execute. Its condition is a duplicate or covered by previous conditions in the if-else-if chain."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        /**
         * Determines whether the two given nodes are considered to be equal. In particular, given that the nodes
         * represent expressions in a boolean context, `||` and `&&` can be considered as commutative operators.
         * @param {ASTNode} a First node.
         * @param {ASTNode} b Second node.
         * @returns {boolean} `true` if the nodes are considered to be equal.
         */
        function equal(a, b) {
            if (a.type !== b.type) {
                return false;
            }

            if (
                a.type === "LogicalExpression" &&
                (a.operator === "||" || a.operator === "&&") &&
                a.operator === b.operator
            ) {
                return equal(a.left, b.left) && equal(a.right, b.right) ||
                    equal(a.left, b.right) && equal(a.right, b.left);
            }

            return astUtils.equalTokens(a, b, sourceCode);
        }

        const isSubset = isSubsetByComparator.bind(null, equal);

        return {
            IfStatement(node) {
                const test = node.test,
                    conditionsToCheck = test.type === "LogicalExpression" && test.operator === "&&"
                        ? [test, ...splitByAnd(test)]
                        : [test];
                let current = node,
                    listToCheck = conditionsToCheck.map(c => splitByOr(c).map(splitByAnd));

                while (current.parent && current.parent.type === "IfStatement" && current.parent.alternate === current) {
                    current = current.parent;

                    const currentOrOperands = splitByOr(current.test).map(splitByAnd);

                    listToCheck = listToCheck.map(orOperands => orOperands.filter(
                        orOperand => !currentOrOperands.some(currentOrOperand => isSubset(currentOrOperand, orOperand))
                    ));

                    if (listToCheck.some(orOperands => orOperands.length === 0)) {
                        context.report({ node: test, messageId: "unexpected" });
                        break;
                    }
                }
            }
        };
    }
};
