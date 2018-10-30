/**
 * @fileoverview Rule to flag use constant conditions
 * @author Christian Schulz <http://rndm.de>
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow constant expressions in conditions",
            category: "Possible Errors",
            recommended: true
        },

        schema: [
            {
                type: "object",
                properties: {
                    checkLoops: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }

        ]
    },

    create(context) {
        const options = context.options[0] || {},
            checkLoops = options.checkLoops !== false;

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------


        /**
         * Checks if a branch node of LogicalExpression short circuits the whole condition
         * @param {ASTNode} node The branch of main condition which needs to be checked
         * @param {string} operator The operator of the main LogicalExpression.
         * @returns {boolean} true when condition short circuits whole condition
         */
        function isLogicalIdentity(node, operator) {
            switch (node.type) {
                case "Literal":
                    return (operator === "||" && node.value === true) ||
                           (operator === "&&" && node.value === false);

                case "UnaryExpression":
                    return (operator === "&&" && node.operator === "void");

                case "LogicalExpression":
                    return isLogicalIdentity(node.left, node.operator) ||
                             isLogicalIdentity(node.right, node.operator);

                // no default
            }
            return false;
        }

        /**
         * Checks if a node has a constant truthiness value.
         * @param {ASTNode} node The AST node to check.
         * @param {boolean} inBooleanPosition `false` if checking branch of a condition.
         *  `true` in all other cases
         * @returns {Bool} true when node's truthiness is constant
         * @private
         */
        function isConstant(node, inBooleanPosition) {
            switch (node.type) {
                case "Literal":
                case "ArrowFunctionExpression":
                case "FunctionExpression":
                case "ObjectExpression":
                case "ArrayExpression":
                    return true;

                case "UnaryExpression":
                    if (node.operator === "void") {
                        return true;
                    }

                    return (node.operator === "typeof" && inBooleanPosition) ||
                        isConstant(node.argument, true);

                case "BinaryExpression":
                    return isConstant(node.left, false) &&
                            isConstant(node.right, false) &&
                            node.operator !== "in";

                case "LogicalExpression": {
                    const isLeftConstant = isConstant(node.left, inBooleanPosition);
                    const isRightConstant = isConstant(node.right, inBooleanPosition);
                    const isLeftShortCircuit = (isLeftConstant && isLogicalIdentity(node.left, node.operator));
                    const isRightShortCircuit = (isRightConstant && isLogicalIdentity(node.right, node.operator));

                    return (isLeftConstant && isRightConstant) || isLeftShortCircuit || isRightShortCircuit;
                }

                case "AssignmentExpression":
                    return (node.operator === "=") && isConstant(node.right, inBooleanPosition);

                case "SequenceExpression":
                    return isConstant(node.expressions[node.expressions.length - 1], inBooleanPosition);

                // no default
            }
            return false;
        }

        /**
         * Reports when the given node contains a constant condition.
         * @param {ASTNode} node The AST node to check.
         * @returns {void}
         * @private
         */
        function checkConstantCondition(node) {
            if (node.test && isConstant(node.test, true)) {
                context.report({ node, message: "Unexpected constant condition." });
            }
        }

        /**
         * Checks node when checkLoops option is enabled
         * @param {ASTNode} node The AST node to check.
         * @returns {void}
         * @private
         */
        function checkLoop(node) {
            if (checkLoops) {
                checkConstantCondition(node);
            }
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            ConditionalExpression: checkConstantCondition,
            IfStatement: checkConstantCondition,
            WhileStatement: checkLoop,
            DoWhileStatement: checkLoop,
            ForStatement: checkLoop
        };

    }
};
