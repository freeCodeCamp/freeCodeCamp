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
        docs: {
            description: "disallow synchronous methods",
            category: "Node.js and CommonJS",
            recommended: false
        },

        schema: []
    },

    create(context) {

        return {

            "MemberExpression[property.name=/.*Sync$/]"(node) {
                context.report({
                    node,
                    message: "Unexpected sync method: '{{propertyName}}'.",
                    data: {
                        propertyName: node.property.name
                    }
                });
            }
        };

    }
};
