/**
 * @fileoverview Rule to disallow use of Object.prototype builtins on objects
 * @author Andrew Levine
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow calling some `Object.prototype` methods directly on objects",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-prototype-builtins"
        },

        schema: [],

        messages: {
            prototypeBuildIn: "Do not access Object.prototype method '{{prop}}' from target object."
        }
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

            const callee = astUtils.skipChainExpression(node.callee);

            if (callee.type !== "MemberExpression") {
                return;
            }

            const propName = astUtils.getStaticPropertyName(callee);

            if (propName !== null && DISALLOWED_PROPS.indexOf(propName) > -1) {
                context.report({
                    messageId: "prototypeBuildIn",
                    loc: callee.property.loc,
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
