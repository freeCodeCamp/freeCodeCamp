/**
 * @fileoverview Enforce newlines between operands of ternary expressions
 * @author Kai Cataldo
 */

"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce newlines between operands of ternary expressions",
            category: "Stylistic Issues",
            recommended: false
        },
        schema: [
            {
                enum: ["always", "never"]
            }
        ]
    },

    create(context) {
        const multiline = context.options[0] !== "never";

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Tests whether node is preceded by supplied tokens
         * @param {ASTNode} node - node to check
         * @param {ASTNode} parentNode - parent of node to report
         * @param {boolean} expected - whether newline was expected or not
         * @returns {void}
         * @private
         */
        function reportError(node, parentNode, expected) {
            context.report({
                node,
                message: "{{expected}} newline between {{typeOfError}} of ternary expression.",
                data: {
                    expected: expected ? "Expected" : "Unexpected",
                    typeOfError: node === parentNode.test ? "test and consequent" : "consequent and alternate"
                }
            });
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            ConditionalExpression(node) {
                const areTestAndConsequentOnSameLine = astUtils.isTokenOnSameLine(node.test, node.consequent);
                const areConsequentAndAlternateOnSameLine = astUtils.isTokenOnSameLine(node.consequent, node.alternate);

                if (!multiline) {
                    if (!areTestAndConsequentOnSameLine) {
                        reportError(node.test, node, false);
                    }

                    if (!areConsequentAndAlternateOnSameLine) {
                        reportError(node.consequent, node, false);
                    }
                } else {
                    if (areTestAndConsequentOnSameLine) {
                        reportError(node.test, node, true);
                    }

                    if (areConsequentAndAlternateOnSameLine) {
                        reportError(node.consequent, node, true);
                    }
                }
            }
        };
    }
};
