/**
 * @fileoverview A rule to set the maximum depth block can be nested in a function.
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "enforce a maximum depth that blocks can be nested",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/max-depth"
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
            tooDeeply: "Blocks are nested too deeply ({{depth}}). Maximum allowed is {{maxDepth}}."
        }
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        const functionStack = [],
            option = context.options[0];
        let maxDepth = 4;

        if (
            typeof option === "object" &&
            (Object.prototype.hasOwnProperty.call(option, "maximum") || Object.prototype.hasOwnProperty.call(option, "max"))
        ) {
            maxDepth = option.maximum || option.max;
        }
        if (typeof option === "number") {
            maxDepth = option;
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
         * When parsing is done then pop out the reference
         * @returns {void}
         * @private
         */
        function endFunction() {
            functionStack.pop();
        }

        /**
         * Save the block and Evaluate the node
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function pushBlock(node) {
            const len = ++functionStack[functionStack.length - 1];

            if (len > maxDepth) {
                context.report({ node, messageId: "tooDeeply", data: { depth: len, maxDepth } });
            }
        }

        /**
         * Pop the saved block
         * @returns {void}
         * @private
         */
        function popBlock() {
            functionStack[functionStack.length - 1]--;
        }

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {
            Program: startFunction,
            FunctionDeclaration: startFunction,
            FunctionExpression: startFunction,
            ArrowFunctionExpression: startFunction,

            IfStatement(node) {
                if (node.parent.type !== "IfStatement") {
                    pushBlock(node);
                }
            },
            SwitchStatement: pushBlock,
            TryStatement: pushBlock,
            DoWhileStatement: pushBlock,
            WhileStatement: pushBlock,
            WithStatement: pushBlock,
            ForStatement: pushBlock,
            ForInStatement: pushBlock,
            ForOfStatement: pushBlock,

            "IfStatement:exit": popBlock,
            "SwitchStatement:exit": popBlock,
            "TryStatement:exit": popBlock,
            "DoWhileStatement:exit": popBlock,
            "WhileStatement:exit": popBlock,
            "WithStatement:exit": popBlock,
            "ForStatement:exit": popBlock,
            "ForInStatement:exit": popBlock,
            "ForOfStatement:exit": popBlock,

            "FunctionDeclaration:exit": endFunction,
            "FunctionExpression:exit": endFunction,
            "ArrowFunctionExpression:exit": endFunction,
            "Program:exit": endFunction
        };

    }
};
