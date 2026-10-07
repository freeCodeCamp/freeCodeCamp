/**
 * @fileoverview Rule to flag use of arguments.callee and arguments.caller.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow the use of `arguments.caller` or `arguments.callee`",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-caller"
        },

        schema: [],

        messages: {
            unexpected: "Avoid arguments.{{prop}}."
        }
    },

    create(context) {

        return {

            MemberExpression(node) {
                const objectName = node.object.name,
                    propertyName = node.property.name;

                if (objectName === "arguments" && !node.computed && propertyName && propertyName.match(/^calle[er]$/u)) {
                    context.report({ node, messageId: "unexpected", data: { prop: propertyName } });
                }

            }
        };

    }
};
