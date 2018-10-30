/**
 * @fileoverview Rule to enforce that all class methods use 'this'.
 * @author Patrick Williams
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce that class methods utilize `this`",
            category: "Best Practices",
            recommended: false
        },
        schema: [{
            type: "object",
            properties: {
                exceptMethods: {
                    type: "array",
                    items: {
                        type: "string"
                    }
                }
            },
            additionalProperties: false
        }]
    },
    create(context) {
        const config = context.options[0] ? Object.assign({}, context.options[0]) : {};
        const exceptMethods = new Set(config.exceptMethods || []);

        const stack = [];

        /**
         * Initializes the current context to false and pushes it onto the stack.
         * These booleans represent whether 'this' has been used in the context.
         * @returns {void}
         * @private
         */
        function enterFunction() {
            stack.push(false);
        }

        /**
         * Check if the node is an instance method
         * @param {ASTNode} node - node to check
         * @returns {boolean} True if its an instance method
         * @private
         */
        function isInstanceMethod(node) {
            return !node.static && node.kind !== "constructor" && node.type === "MethodDefinition";
        }

        /**
         * Check if the node is an instance method not excluded by config
         * @param {ASTNode} node - node to check
         * @returns {boolean} True if it is an instance method, and not excluded by config
         * @private
         */
        function isIncludedInstanceMethod(node) {
            return isInstanceMethod(node) && !exceptMethods.has(node.key.name);
        }

        /**
         * Checks if we are leaving a function that is a method, and reports if 'this' has not been used.
         * Static methods and the constructor are exempt.
         * Then pops the context off the stack.
         * @param {ASTNode} node - A function node that was entered.
         * @returns {void}
         * @private
         */
        function exitFunction(node) {
            const methodUsesThis = stack.pop();

            if (isIncludedInstanceMethod(node.parent) && !methodUsesThis) {
                context.report({
                    node,
                    message: "Expected 'this' to be used by class method '{{classMethod}}'.",
                    data: {
                        classMethod: node.parent.key.name
                    }
                });
            }
        }

        /**
         * Mark the current context as having used 'this'.
         * @returns {void}
         * @private
         */
        function markThisUsed() {
            if (stack.length) {
                stack[stack.length - 1] = true;
            }
        }

        return {
            FunctionDeclaration: enterFunction,
            "FunctionDeclaration:exit": exitFunction,
            FunctionExpression: enterFunction,
            "FunctionExpression:exit": exitFunction,
            ThisExpression: markThisUsed,
            Super: markThisUsed
        };
    }
};
