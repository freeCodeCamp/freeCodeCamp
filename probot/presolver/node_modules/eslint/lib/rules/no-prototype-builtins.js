/**
 * @fileoverview Rule to disallow use of Object.prototype builtins on objects
 * @author Andrew Levine
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow calling some `Object.prototype` methods directly on objects",
            category: "Possible Errors",
            recommended: false
        },

        schema: []
    },

    create(context) {
        const DISALLOWED_PROPS = [
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable"
        ];

        /**
         * Reports if a disallowed property is used in a CallExpression
         * @param {ASTNode} node The CallExpression node.
         * @returns {void}
         */
        function disallowBuiltIns(node) {
            if (node.callee.type !== "MemberExpression" || node.callee.computed) {
                return;
            }
            const propName = node.callee.property.name;

            if (DISALLOWED_PROPS.indexOf(propName) > -1) {
                context.report({
                    message: "Do not access Object.prototype method '{{prop}}' from target object.",
                    loc: node.callee.property.loc.start,
                    data: { prop: propName },
                    node
                });
            }
        }

        return {
            CallExpression: disallowBuiltIns
        };
    }
};
