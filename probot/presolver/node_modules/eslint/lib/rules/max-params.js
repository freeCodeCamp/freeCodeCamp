/**
 * @fileoverview Rule to flag when a function has too many parameters
 * @author Ilya Volodin
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
            description: "enforce a maximum number of parameters in function definitions",
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
            }
        ]
    },

    create(context) {

        const option = context.options[0];
        let numParams = 3;

        if (typeof option === "object" && option.hasOwnProperty("maximum") && typeof option.maximum === "number") {
            numParams = option.maximum;
        }
        if (typeof option === "object" && option.hasOwnProperty("max") && typeof option.max === "number") {
            numParams = option.max;
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
                    node,
                    message: "{{name}} has too many parameters ({{count}}). Maximum allowed is {{max}}.",
                    data: {
                        name: lodash.upperFirst(astUtils.getFunctionNameWithKind(node)),
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
