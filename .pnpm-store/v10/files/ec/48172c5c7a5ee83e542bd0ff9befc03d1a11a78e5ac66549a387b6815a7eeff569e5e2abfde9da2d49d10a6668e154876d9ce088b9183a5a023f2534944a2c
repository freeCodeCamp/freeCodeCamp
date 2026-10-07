/**
 * @fileoverview Rule to check for properties whose identifier ends with the string Sync
 * @author Matt DuVall<http://mattduvall.com/>
 */

/* jshint node:true */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        deprecated: true,

        replacedBy: [],

        type: "suggestion",

        docs: {
            description: "disallow synchronous methods",
            category: "Node.js and CommonJS",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-sync"
        },

        schema: [
            {
                type: "object",
                properties: {
                    allowAtRootLevel: {
                        type: "boolean",
                        default: false
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            noSync: "Unexpected sync method: '{{propertyName}}'."
        }
    },

    create(context) {
        const selector = context.options[0] && context.options[0].allowAtRootLevel
            ? ":function MemberExpression[property.name=/.*Sync$/]"
            : "MemberExpression[property.name=/.*Sync$/]";

        return {
            [selector](node) {
                context.report({
                    node,
                    messageId: "noSync",
                    data: {
                        propertyName: node.property.name
                    }
                });
            }
        };

    }
};
