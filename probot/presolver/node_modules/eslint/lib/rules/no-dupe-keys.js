/**
 * @fileoverview Rule to flag use of duplicate keys in an object.
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const GET_KIND = /^(?:init|get)$/;
const SET_KIND = /^(?:init|set)$/;

/**
 * The class which stores properties' information of an object.
 */
class ObjectInfo {

    /**
     * @param {ObjectInfo|null} upper - The information of the outer object.
     * @param {ASTNode} node - The ObjectExpression node of this information.
     */
    constructor(upper, node) {
        this.upper = upper;
        this.node = node;
        this.properties = new Map();
    }

    /**
     * Gets the information of the given Property node.
     * @param {ASTNode} node - The Property node to get.
     * @returns {{get: boolean, set: boolean}} The information of the property.
     */
    getPropertyInfo(node) {
        const name = astUtils.getStaticPropertyName(node);

        if (!this.properties.has(name)) {
            this.properties.set(name, { get: false, set: false });
        }
        return this.properties.get(name);
    }

    /**
     * Checks whether the given property has been defined already or not.
     * @param {ASTNode} node - The Property node to check.
     * @returns {boolean} `true` if the property has been defined.
     */
    isPropertyDefined(node) {
        const entry = this.getPropertyInfo(node);

        return (
            (GET_KIND.test(node.kind) && entry.get) ||
            (SET_KIND.test(node.kind) && entry.set)
        );
    }

    /**
     * Defines the given property.
     * @param {ASTNode} node - The Property node to define.
     * @returns {void}
     */
    defineProperty(node) {
        const entry = this.getPropertyInfo(node);

        if (GET_KIND.test(node.kind)) {
            entry.get = true;
        }
        if (SET_KIND.test(node.kind)) {
            entry.set = true;
        }
    }
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow duplicate keys in object literals",
            category: "Possible Errors",
            recommended: true
        },

        schema: []
    },

    create(context) {
        let info = null;

        return {
            ObjectExpression(node) {
                info = new ObjectInfo(info, node);
            },
            "ObjectExpression:exit"() {
                info = info.upper;
            },

            Property(node) {
                const name = astUtils.getStaticPropertyName(node);

                // Skip destructuring.
                if (node.parent.type !== "ObjectExpression") {
                    return;
                }

                // Skip if the name is not static.
                if (!name) {
                    return;
                }

                // Reports if the name is defined already.
                if (info.isPropertyDefined(node)) {
                    context.report({
                        node: info.node,
                        loc: node.key.loc,
                        message: "Duplicate key '{{name}}'.",
                        data: { name }
                    });
                }

                // Update info.
                info.defineProperty(node);
            }
        };
    }
};
