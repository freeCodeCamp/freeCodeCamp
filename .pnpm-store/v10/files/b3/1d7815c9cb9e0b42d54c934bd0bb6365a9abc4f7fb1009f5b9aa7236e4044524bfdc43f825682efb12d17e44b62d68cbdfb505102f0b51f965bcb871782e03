/**
 * @fileoverview Rule to flag usage of __proto__ property
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { getStaticPropertyName } = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow the use of the `__proto__` property",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-proto"
        },

        schema: [],

        messages: {
            unexpectedProto: "The '__proto__' property is deprecated."
        }
    },

    create(context) {

        return {

            MemberExpression(node) {
                if (getStaticPropertyName(node) === "__proto__") {
                    context.report({ node, messageId: "unexpectedProto" });
                }
            }
        };

    }
};
