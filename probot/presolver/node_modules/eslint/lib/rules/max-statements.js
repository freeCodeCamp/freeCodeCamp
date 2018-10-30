/**
 * @fileoverview A rule to set the maximum number of statements in a function.
 * @author Ian Christian Myers
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
            description: "enforce a maximum number of statements allowed in function blocks",
            category: "Stylistic Issues",
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
            },
            {
                type: "object",
                properties: {
                    ignoreTopLevelFunctions: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        const functionStack = [],
            option = context.options[0],
            ignoreTopLevelFunctions = context.options[1] && context.options[1].ignoreTopLevelFunctions || false,
            topLevelFunctions = [];
        let maxStatements = 10;

        if (typeof option === "object" && option.hasOwnProperty("maximum") && typeof option.maximum === "number") {
            maxStatements = option.maximum;
        }
        if (typeof option === "object" && option.hasOwnProperty("max") && typeof option.max === "number") {
            maxStatements = option.max;
        }
        if (typeof option === "number") {
            maxStatements = option;
        }

        /**
         * Reports a node if it has too many statements
         * @param {ASTNode} node node to evaluate
         * @param {int} count Number of statements in node
         * @param {int} max Maximum number of statements allowed
         * @returns {void}
         * @private
         */
        function reportIfTooManyStatements(node, count, max) {
            if (count > max) {
                const name = lodash.upperFirst(astUtils.getFunctionNameWithKind(node));

                context.report({
                    node,
                    message: "{{name}} has too many statements ({{count}}). Maximum allowed is {{max}}.",
                    data: { name, count, max }
                });
            }
        }

        /**
         * When parsing a new function, store it in our function stack
         * @returns {void}
         * @private
         */
        function startFunction() {
            functionStack.push(0);
        }

        /**
         * Evaluate the node at the end of function
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function endFunction(node) {
            const count = functionStack.pop();

            if (ignoreTopLevelFunctions && functionStack.length === 0) {
                topLevelFunctions.push({ node, count });
            } else {
                reportIfTooManyStatements(node, count, maxStatements);
            }
        }

        /**
         * Increment the count of the functions
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function countStatements(node) {
            functionStack[functionStack.length - 1] += node.body.length;
        }

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {
            FunctionDeclaration: startFunction,
            FunctionExpression: startFunction,
            ArrowFunctionExpression: startFunction,

            BlockStatement: countStatements,

            "FunctionDeclaration:exit": endFunction,
            "FunctionExpression:exit": endFunction,
            "ArrowFunctionExpression:exit": endFunction,

            "Program:exit"() {
                if (topLevelFunctions.length === 1) {
                    return;
                }

                topLevelFunctions.forEach(element => {
                    const count = element.count;
                    const node = element.node;

                    reportIfTooManyStatements(node, count, maxStatements);
                });
            }
        };

    }
};
