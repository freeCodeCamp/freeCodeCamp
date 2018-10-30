/**
 * @fileoverview Rule to flag use of a leading/trailing decimal point in a numeric literal
 * @author James Allardice
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow leading or trailing decimal points in numeric literals",
            category: "Best Practices",
            recommended: false
        },

        schema: [],

        fixable: "code"
    },

    create(context) {

        return {
            Literal(node) {

                if (typeof node.value === "number") {
                    if (node.raw.indexOf(".") === 0) {
                        context.report({
                            node,
                            message: "A leading decimal point can be confused with a dot.",
                            fix: fixer => fixer.insertTextBefore(node, "0")
                        });
                    }
                    if (node.raw.indexOf(".") === node.raw.length - 1) {
                        context.report({
                            node,
                            message: "A trailing decimal point can be confused with a dot.",
                            fix: fixer => fixer.insertTextAfter(node, "0")
                        });
                    }
                }
            }
        };

    }
};
