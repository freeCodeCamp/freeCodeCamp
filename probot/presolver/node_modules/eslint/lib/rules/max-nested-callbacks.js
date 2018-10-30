/**
 * @fileoverview Rule to enforce a maximum number of nested callbacks.
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce a maximum depth that callbacks can be nested",
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

        //--------------------------------------------------------------------------
        // Constants
        //--------------------------------------------------------------------------
        const option = context.options[0];
        let THRESHOLD = 10;

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

        const callbackStack = [];

        /**
         * Checks a given function node for too many callbacks.
         * @param {ASTNode} node The node to check.
         * @returns {void}
         * @private
         */
        function checkFunction(node) {
            const parent = node.parent;

            if (parent.type === "CallExpression") {
                callbackStack.push(node);
            }

            if (callbackStack.length > THRESHOLD) {
                const opts = { num: callbackStack.length, max: THRESHOLD };

                context.report({ node, message: "Too many nested callbacks ({{num}}). Maximum allowed is {{max}}.", data: opts });
            }
        }

        /**
         * Pops the call stack.
         * @returns {void}
         * @private
         */
        function popStack() {
            callbackStack.pop();
        }

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {
            ArrowFunctionExpression: checkFunction,
            "ArrowFunctionExpression:exit": popStack,

            FunctionExpression: checkFunction,
            "FunctionExpression:exit": popStack
        };

    }
};
