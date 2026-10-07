/**
 * @fileoverview Rule to flag use constant conditions
 * @author Christian Schulz <http://rndm.de>
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow constant expressions in conditions",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-constant-condition"
        },

        schema: [
            {
                type: "object",
                properties: {
                    checkLoops: {
                        type: "boolean",
                        default: true
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            unexpected: "Unexpected constant condition."
        }
    },

    create(context) {
        const options = context.options[0] || {},
            checkLoops = options.checkLoops !== false,
            loopSetStack = [];

        let loopsInCurrentScope = new Set();

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Returns literal's value converted to the Boolean type
         * @param {ASTNode} node any `Literal` node
         * @returns {boolean | null} `true` when node is truthy, `false` when node is falsy,
         *  `null` when it cannot be determined.
         */
        function getBooleanValue(node) {
            if (node.value === null) {

                /*
                 * it might be a null literal or bigint/regex literal in unsupported environments .
                 * https://github.com/estree/estree/blob/14df8a024956ea289bd55b9c2226a1d5b8a473ee/es5.md#regexpliteral
                 * https://github.com/estree/estree/blob/14df8a024956ea289bd55b9c2226a1d5b8a473ee/es2020.md#bigintliteral
                 */

                if (node.raw === "null") {
                    return false;
                }

                // regex is always truthy
                if (typeof node.regex === "object") {
                    return true;
                }

                return null;
            }

            return !!node.value;
        }

        /**
         * Checks if a branch node of LogicalExpression short circuits the whole condition
         * @param {ASTNode} node The branch of main condition which needs to be checked
         * @param {string} operator The operator of the main LogicalExpression.
         * @returns {boolean} true when condition short circuits whole condition
         */
        function isLogicalIdentity(node, operator) {
            switch (node.type) {
                case "Literal":
                    return (operator === "||" && getBooleanValue(node) === true) ||
                           (operator === "&&" && getBooleanValue(node) === false);

                case "UnaryExpression":
                    return (operator === "&&" && node.operator === "void");

                case "LogicalExpression":

                    /*
                     * handles `a && false || b`
                     * `false` is an identity element of `&&` but not `||`
                     */
                    return operator === node.operator &&
                             (
                                 isLogicalIdentity(node.left, operator) ||
                                 isLogicalIdentity(node.right, operator)
                             );

                case "AssignmentExpression":
                    return ["||=", "&&="].includes(node.operator) &&
                        operator === node.operator.slice(0, -1) &&
                        isLogicalIdentity(node.right, operator);

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

            // node.elements can return null values in the case of sparse arrays ex. [,]
            if (!node) {
                return true;
            }
            switch (node.type) {
                case "Literal":
                case "ArrowFunctionExpression":
                case "FunctionExpression":
                case "ObjectExpression":
                    return true;
                case "TemplateLiteral":
                    return (inBooleanPosition && node.quasis.some(quasi => quasi.value.cooked.length)) ||
                        node.expressions.every(exp => isConstant(exp, inBooleanPosition));

                case "ArrayExpression": {
                    if (node.parent.type === "BinaryExpression" && node.parent.operator === "+") {
                        return node.elements.every(element => isConstant(element, false));
                    }
                    return true;
                }

                case "UnaryExpression":
                    if (
                        node.operator === "void" ||
                        node.operator === "typeof" && inBooleanPosition
                    ) {
                        return true;
                    }

                    if (node.operator === "!") {
                        return isConstant(node.argument, true);
                    }

                    return isConstant(node.argument, false);

                case "BinaryExpression":
                    return isConstant(node.left, false) &&
                            isConstant(node.right, false) &&
                            node.operator !== "in";

                case "LogicalExpression": {
                    const isLeftConstant = isConstant(node.left, inBooleanPosition);
                    const isRightConstant = isConstant(node.right, inBooleanPosition);
                    const isLeftShortCircuit = (isLeftConstant && isLogicalIdentity(node.left, node.operator));
                    const isRightShortCircuit = (inBooleanPosition && isRightConstant && isLogicalIdentity(node.right, node.operator));

                    return (isLeftConstant && isRightConstant) ||
                        isLeftShortCircuit ||
                        isRightShortCircuit;
                }

                case "AssignmentExpression":
                    if (node.operator === "=") {
                        return isConstant(node.right, inBooleanPosition);
                    }

                    if (["||=", "&&="].includes(node.operator) && inBooleanPosition) {
                        return isLogicalIdentity(node.right, node.operator.slice(0, -1));
                    }

                    return false;

                case "SequenceExpression":
                    return isConstant(node.expressions[node.expressions.length - 1], inBooleanPosition);

                // no default
            }
            return false;
        }

        /**
         * Tracks when the given node contains a constant condition.
         * @param {ASTNode} node The AST node to check.
         * @returns {void}
         * @private
         */
        function trackConstantConditionLoop(node) {
            if (node.test && isConstant(node.test, true)) {
                loopsInCurrentScope.add(node);
            }
        }

        /**
         * Reports when the set contains the given constant condition node
         * @param {ASTNode} node The AST node to check.
         * @returns {void}
         * @private
         */
        function checkConstantConditionLoopInSet(node) {
            if (loopsInCurrentScope.has(node)) {
                loopsInCurrentScope.delete(node);
                context.report({ node: node.test, messageId: "unexpected" });
            }
        }

        /**
         * Reports when the given node contains a constant condition.
         * @param {ASTNode} node The AST node to check.
         * @returns {void}
         * @private
         */
        function reportIfConstant(node) {
            if (node.test && isConstant(node.test, true)) {
                context.report({ node: node.test, messageId: "unexpected" });
            }
        }

        /**
         * Stores current set of constant loops in loopSetStack temporarily
         * and uses a new set to track constant loops
         * @returns {void}
         * @private
         */
        function enterFunction() {
            loopSetStack.push(loopsInCurrentScope);
            loopsInCurrentScope = new Set();
        }

        /**
         * Reports when the set still contains stored constant conditions
         * @returns {void}
         * @private
         */
        function exitFunction() {
            loopsInCurrentScope = loopSetStack.pop();
        }

        /**
         * Checks node when checkLoops option is enabled
         * @param {ASTNode} node The AST node to check.
         * @returns {void}
         * @private
         */
        function checkLoop(node) {
            if (checkLoops) {
                trackConstantConditionLoop(node);
            }
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            ConditionalExpression: reportIfConstant,
            IfStatement: reportIfConstant,
            WhileStatement: checkLoop,
            "WhileStatement:exit": checkConstantConditionLoopInSet,
            DoWhileStatement: checkLoop,
            "DoWhileStatement:exit": checkConstantConditionLoopInSet,
            ForStatement: checkLoop,
            "ForStatement > .test": node => checkLoop(node.parent),
            "ForStatement:exit": checkConstantConditionLoopInSet,
            FunctionDeclaration: enterFunction,
            "FunctionDeclaration:exit": exitFunction,
            FunctionExpression: enterFunction,
            "FunctionExpression:exit": exitFunction,
            YieldExpression: () => loopsInCurrentScope.clear()
        };

    }
};
