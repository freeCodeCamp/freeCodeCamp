/**
 * @fileoverview Rule to flag unnecessary double negation in Boolean contexts
 * @author Brandon Mills
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow unnecessary boolean casts",
            category: "Possible Errors",
            recommended: true
        },

        schema: [],

        fixable: "code"
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        // Node types which have a test which will coerce values to booleans.
        const BOOLEAN_NODE_TYPES = [
            "IfStatement",
            "DoWhileStatement",
            "WhileStatement",
            "ConditionalExpression",
            "ForStatement"
        ];

        /**
         * Check if a node is in a context where its value would be coerced to a boolean at runtime.
         *
         * @param {Object} node The node
         * @param {Object} parent Its parent
         * @returns {boolean} If it is in a boolean context
         */
        function isInBooleanContext(node, parent) {
            return (
                (BOOLEAN_NODE_TYPES.indexOf(parent.type) !== -1 &&
                    node === parent.test) ||

                // !<bool>
                (parent.type === "UnaryExpression" &&
                    parent.operator === "!")
            );
        }


        return {
            UnaryExpression(node) {
                const ancestors = context.getAncestors(),
                    parent = ancestors.pop(),
                    grandparent = ancestors.pop();

                // Exit early if it's guaranteed not to match
                if (node.operator !== "!" ||
                        parent.type !== "UnaryExpression" ||
                        parent.operator !== "!") {
                    return;
                }

                if (isInBooleanContext(parent, grandparent) ||

                    // Boolean(<bool>) and new Boolean(<bool>)
                    ((grandparent.type === "CallExpression" || grandparent.type === "NewExpression") &&
                        grandparent.callee.type === "Identifier" &&
                        grandparent.callee.name === "Boolean")
                ) {
                    context.report({
                        node,
                        message: "Redundant double negation.",
                        fix: fixer => fixer.replaceText(parent, sourceCode.getText(node.argument))
                    });
                }
            },
            CallExpression(node) {
                const parent = node.parent;

                if (node.callee.type !== "Identifier" || node.callee.name !== "Boolean") {
                    return;
                }

                if (isInBooleanContext(node, parent)) {
                    context.report({
                        node,
                        message: "Redundant Boolean call.",
                        fix: fixer => {
                            if (!node.arguments.length) {
                                return fixer.replaceText(parent, "true");
                            }

                            if (node.arguments.length > 1 || node.arguments[0].type === "SpreadElement") {
                                return null;
                            }

                            const argument = node.arguments[0];

                            if (astUtils.getPrecedence(argument) < astUtils.getPrecedence(node.parent)) {
                                return fixer.replaceText(node, `(${sourceCode.getText(argument)})`);
                            }
                            return fixer.replaceText(node, sourceCode.getText(argument));
                        }
                    });
                }
            }
        };

    }
};
