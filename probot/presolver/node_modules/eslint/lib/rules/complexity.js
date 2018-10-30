/**
 * @fileoverview Counts the cyclomatic complexity of each function of the script. See http://en.wikipedia.org/wiki/Cyclomatic_complexity.
 * Counts the number of if, conditional, for, whilte, try, switch/case,
 * @author Patrick Brosset
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const lodash = require("lodash");

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce a maximum cyclomatic complexity allowed in a program",
            category: "Best Practices",
            recommended: false
        },

        schema: [
            {
                oneOf: [
                    {
                        type: "integer",
                        minimum: 0
                    },
                    {
                        type: "object",
                        properties: {
                            maximum: {
                                type: "integer",
                                minimum: 0
                            },
                            max: {
                                type: "integer",
                                minimum: 0
                            }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ]
    },

    create(context) {
        const option = context.options[0];
        let THRESHOLD = 20;

        if (typeof option === "object" && option.hasOwnProperty("maximum") && typeof option.maximum === "number") {
            THRESHOLD = option.maximum;
        }
        if (typeof option === "object" && option.hasOwnProperty("max") && typeof option.max === "number") {
            THRESHOLD = option.max;
        }
        if (typeof option === "number") {
            THRESHOLD = option;
        }

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        // Using a stack to store complexity (handling nested functions)
        const fns = [];

        /**
         * When parsing a new function, store it in our function stack
         * @returns {void}
         * @private
         */
        function startFunction() {
            fns.push(1);
        }

        /**
         * Evaluate the node at the end of function
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function endFunction(node) {
            const name = lodash.upperFirst(astUtils.getFunctionNameWithKind(node));
            const complexity = fns.pop();

            if (complexity > THRESHOLD) {
                context.report({
                    node,
                    message: "{{name}} has a complexity of {{complexity}}.",
                    data: { name, complexity }
                });
            }
        }

        /**
         * Increase the complexity of the function in context
         * @returns {void}
         * @private
         */
        function increaseComplexity() {
            if (fns.length) {
                fns[fns.length - 1]++;
            }
        }

        /**
         * Increase the switch complexity in context
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function increaseSwitchComplexity(node) {

            // Avoiding `default`
            if (node.test) {
                increaseComplexity(node);
            }
        }

        /**
         * Increase the logical path complexity in context
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function increaseLogicalComplexity(node) {

            // Avoiding &&
            if (node.operator === "||") {
                increaseComplexity(node);
            }
        }

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {
            FunctionDeclaration: startFunction,
            FunctionExpression: startFunction,
            ArrowFunctionExpression: startFunction,
            "FunctionDeclaration:exit": endFunction,
            "FunctionExpression:exit": endFunction,
            "ArrowFunctionExpression:exit": endFunction,

            CatchClause: increaseComplexity,
            ConditionalExpression: increaseComplexity,
            LogicalExpression: increaseLogicalComplexity,
            ForStatement: increaseComplexity,
            ForInStatement: increaseComplexity,
            ForOfStatement: increaseComplexity,
            IfStatement: increaseComplexity,
            SwitchCase: increaseSwitchComplexity,
            WhileStatement: increaseComplexity,
            DoWhileStatement: increaseComplexity
        };

    }
};
