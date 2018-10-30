/**
 * @fileoverview Rule to require object keys to be sorted
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils"),
    naturalCompare = require("natural-compare");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Gets the property name of the given `Property` node.
 *
 * - If the property's key is an `Identifier` node, this returns the key's name
 *   whether it's a computed property or not.
 * - If the property has a static name, this returns the static name.
 * - Otherwise, this returns null.
 *
 * @param {ASTNode} node - The `Property` node to get.
 * @returns {string|null} The property name or null.
 * @private
 */
function getPropertyName(node) {
    return astUtils.getStaticPropertyName(node) || node.key.name || null;
}

/**
 * Functions which check that the given 2 names are in specific order.
 *
 * Postfix `I` is meant insensitive.
 * Postfix `N` is meant natual.
 *
 * @private
 */
const isValidOrders = {
    asc(a, b) {
        return a <= b;
    },
    ascI(a, b) {
        return a.toLowerCase() <= b.toLowerCase();
    },
    ascN(a, b) {
        return naturalCompare(a, b) <= 0;
    },
    ascIN(a, b) {
        return naturalCompare(a.toLowerCase(), b.toLowerCase()) <= 0;
    },
    desc(a, b) {
        return isValidOrders.asc(b, a);
    },
    descI(a, b) {
        return isValidOrders.ascI(b, a);
    },
    descN(a, b) {
        return isValidOrders.ascN(b, a);
    },
    descIN(a, b) {
        return isValidOrders.ascIN(b, a);
    }
};

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require object keys to be sorted",
            category: "Stylistic Issues",
            recommended: false
        },
        schema: [
            {
                enum: ["asc", "desc"]
            },
            {
                type: "object",
                properties: {
                    caseSensitive: {
                        type: "boolean"
                    },
                    natural: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {

        // Parse options.
        const order = context.options[0] || "asc";
        const options = context.options[1];
        const insensitive = (options && options.caseSensitive) === false;
        const natual = Boolean(options && options.natural);
        const isValidOrder = isValidOrders[
            order + (insensitive ? "I" : "") + (natual ? "N" : "")
        ];

        // The stack to save the previous property's name for each object literals.
        let stack = null;

        return {
            ObjectExpression() {
                stack = {
                    upper: stack,
                    prevName: null
                };
            },

            "ObjectExpression:exit"() {
                stack = stack.upper;
            },

            Property(node) {
                if (node.parent.type === "ObjectPattern") {
                    return;
                }

                const prevName = stack.prevName;
                const thisName = getPropertyName(node);

                stack.prevName = thisName || prevName;

                if (!prevName || !thisName) {
                    return;
                }

                if (!isValidOrder(prevName, thisName)) {
                    context.report({
                        node,
                        loc: node.key.loc,
                        message: "Expected object keys to be in {{natual}}{{insensitive}}{{order}}ending order. '{{thisName}}' should be before '{{prevName}}'.",
                        data: {
                            thisName,
                            prevName,
                            order,
                            insensitive: insensitive ? "insensitive " : "",
                            natual: natual ? "natural " : ""
                        }
                    });
                }
            }
        };
    }
};
