/**
 * @fileoverview Rule to flag use of certain node types
 * @author Burak Yigit Kaya
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow specified syntax",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: {
            type: "array",
            items: [{
                oneOf: [
                    {
                        type: "string"
                    },
                    {
                        type: "object",
                        properties: {
                            selector: { type: "string" },
                            message: { type: "string" }
                        },
                        required: ["selector"],
                        additionalProperties: false
                    }
                ]
            }],
            uniqueItems: true,
            minItems: 0
        }
    },

    create(context) {
        return context.options.reduce((result, selectorOrObject) => {
            const isStringFormat = (typeof selectorOrObject === "string");
            const hasCustomMessage = !isStringFormat && Boolean(selectorOrObject.message);

            const selector = isStringFormat ? selectorOrObject : selectorOrObject.selector;
            const message = hasCustomMessage ? selectorOrObject.message : "Using '{{selector}}' is not allowed.";

            return Object.assign(result, {
                [selector](node) {
                    context.report({
                        node,
                        message,
                        data: hasCustomMessage ? {} : { selector }
                    });
                }
            });
        }, {});

    }
};
