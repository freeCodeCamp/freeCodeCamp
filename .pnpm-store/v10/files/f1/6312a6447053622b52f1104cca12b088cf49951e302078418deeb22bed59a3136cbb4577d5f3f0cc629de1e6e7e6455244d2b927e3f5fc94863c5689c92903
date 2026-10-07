/**
 * @fileoverview Rule to flag when a function has too many parameters
 * @author Ilya Volodin
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
            description: "enforce a maximum number of parameters in function definitions",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/max-params"
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
            exceed: "{{name}} has too many parameters ({{count}}). Maximum allowed is {{max}}."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        const option = context.options[0];
        let numParams = 3;

        if (
            typeof option === "object" &&
            (Object.prototype.hasOwnProperty.call(option, "maximum") || Object.prototype.hasOwnProperty.call(option, "max"))
        ) {
            numParams = option.maximum || option.max;
        }
        if (typeof option === "number") {
            numParams = option;
        }

        /**
         * Checks a function to see if it has too many parameters.
         * @param {ASTNode} node The node to check.
         * @returns {void}
         * @private
         */
        function checkFunction(node) {
            if (node.params.length > numParams) {
                context.report({
                    loc: astUtils.getFunctionHeadLoc(node, sourceCode),
                    node,
                    messageId: "exceed",
                    data: {
                        name: upperCaseFirst(astUtils.getFunctionNameWithKind(node)),
                        count: node.params.length,
                        max: numParams
                    }
                });
            }
        }

        return {
            FunctionDeclaration: checkFunction,
            ArrowFunctionExpression: checkFunction,
            FunctionExpression: checkFunction
        };

    }
};
