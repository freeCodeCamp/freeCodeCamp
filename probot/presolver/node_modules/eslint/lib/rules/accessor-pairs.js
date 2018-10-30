/**
 * @fileoverview Rule to flag wrapping non-iife in parens
 * @author Gyandeep Singh
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a given node is an `Identifier` node which was named a given name.
 * @param {ASTNode} node - A node to check.
 * @param {string} name - An expected name of the node.
 * @returns {boolean} `true` if the node is an `Identifier` node which was named as expected.
 */
function isIdentifier(node, name) {
    return node.type === "Identifier" && node.name === name;
}

/**
 * Checks whether or not a given node is an argument of a specified method call.
 * @param {ASTNode} node - A node to check.
 * @param {number} index - An expected index of the node in arguments.
 * @param {string} object - An expected name of the object of the method.
 * @param {string} property - An expected name of the method.
 * @returns {boolean} `true` if the node is an argument of the specified method call.
 */
function isArgumentOfMethodCall(node, index, object, property) {
    const parent = node.parent;

    return (
        parent.type === "CallExpression" &&
        parent.callee.type === "MemberExpression" &&
        parent.callee.computed === false &&
        isIdentifier(parent.callee.object, object) &&
        isIdentifier(parent.callee.property, property) &&
        parent.arguments[index] === node
    );
}

/**
 * Checks whether or not a given node is a property descriptor.
 * @param {ASTNode} node - A node to check.
 * @returns {boolean} `true` if the node is a property descriptor.
 */
function isPropertyDescriptor(node) {

    // Object.defineProperty(obj, "foo", {set: ...})
    if (isArgumentOfMethodCall(node, 2, "Object", "defineProperty") ||
        isArgumentOfMethodCall(node, 2, "Reflect", "defineProperty")
    ) {
        return true;
    }

    /*
     * Object.defineProperties(obj, {foo: {set: ...}})
     * Object.create(proto, {foo: {set: ...}})
     */
    node = node.parent.parent;

    return node.type === "ObjectExpression" && (
        isArgumentOfMethodCall(node, 1, "Object", "create") ||
        isArgumentOfMethodCall(node, 1, "Object", "defineProperties")
    );
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce getter and setter pairs in objects",
            category: "Best Practices",
            recommended: false
        },
        schema: [{
            type: "object",
            properties: {
                getWithoutSet: {
                    type: "boolean"
                },
                setWithoutGet: {
                    type: "boolean"
                }
            },
            additionalProperties: false
        }]
    },
    create(context) {
        const config = context.options[0] || {};
        const checkGetWithoutSet = config.getWithoutSet === true;
        const checkSetWithoutGet = config.setWithoutGet !== false;

        /**
         * Checks a object expression to see if it has setter and getter both present or none.
         * @param {ASTNode} node The node to check.
         * @returns {void}
         * @private
         */
        function checkLonelySetGet(node) {
            let isSetPresent = false;
            let isGetPresent = false;
            const isDescriptor = isPropertyDescriptor(node);

            for (let i = 0, end = node.properties.length; i < end; i++) {
                const property = node.properties[i];

                let propToCheck = "";

                if (property.kind === "init") {
                    if (isDescriptor && !property.computed) {
                        propToCheck = property.key.name;
                    }
                } else {
                    propToCheck = property.kind;
                }

                switch (propToCheck) {
                    case "set":
                        isSetPresent = true;
                        break;

                    case "get":
                        isGetPresent = true;
                        break;

                    default:

                        // Do nothing
                }

                if (isSetPresent && isGetPresent) {
                    break;
                }
            }

            if (checkSetWithoutGet && isSetPresent && !isGetPresent) {
                context.report({ node, message: "Getter is not present." });
            } else if (checkGetWithoutSet && isGetPresent && !isSetPresent) {
                context.report({ node, message: "Setter is not present." });
            }
        }

        return {
            ObjectExpression(node) {
                if (checkSetWithoutGet || checkGetWithoutSet) {
                    checkLonelySetGet(node);
                }
            }
        };
    }
};
