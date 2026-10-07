/**
 * @fileoverview Counts the cyclomatic complexity of each function of the script. See http://en.wikipedia.org/wiki/Cyclomatic_complexity.
 * Counts the number of if, conditional, for, while, try, switch/case,
 * @author Patrick Brosset
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");
const { upperCaseFirst } = require("../shared/string-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "enforce a maximum cyclomatic complexity allowed in a program",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/complexity"
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
        ],

        messages: {
            complex: "{{name}} has a complexity of {{complexity}}. Maximum allowed is {{max}}."
        }
    },

    create(context) {
        const option = context.options[0];
        let THRESHOLD = 20;

        if (
            typeof option === "object" &&
            (Object.prototype.hasOwnProperty.call(option, "maximum") || Object.prototype.hasOwnProperty.call(option, "max"))
        ) {
            THRESHOLD = option.maximum || option.max;
        } else if (typeof option === "number") {
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
            const name = upperCaseFirst(astUtils.getFunctionNameWithKind(node));
            const complexity = fns.pop();

            if (complexity > THRESHOLD) {
                context.report({
                    node,
                    messageId: "complex",
                    data: { name, complexity, max: THRESHOLD }
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
                increaseComplexity();
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
            LogicalExpression: increaseComplexity,
            ForStatement: increaseComplexity,
            ForInStatement: increaseComplexity,
            ForOfStatement: increaseComplexity,
            IfStatement: increaseComplexity,
            SwitchCase: increaseSwitchComplexity,
            WhileStatement: increaseComplexity,
            DoWhileStatement: increaseComplexity,

            AssignmentExpression(node) {
                if (astUtils.isLogicalAssignmentOperator(node.operator)) {
                    increaseComplexity();
                }
            }
        };

    }
};
