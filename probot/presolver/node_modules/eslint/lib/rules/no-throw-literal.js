/**
 * @fileoverview Rule to restrict what can be thrown as an exception.
 * @author Dieter Oberkofler
 */

"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow throwing literals as exceptions",
            category: "Best Practices",
            recommended: false
        },

        schema: []
    },

    create(context) {

        return {

            ThrowStatement(node) {
                if (!astUtils.couldBeError(node.argument)) {
                    context.report({ node, message: "Expected an object to be thrown." });
                } else if (node.argument.type === "Identifier") {
                    if (node.argument.name === "undefined") {
                        context.report({ node, message: "Do not throw undefined." });
                    }
                }

            }

        };

    }
};
