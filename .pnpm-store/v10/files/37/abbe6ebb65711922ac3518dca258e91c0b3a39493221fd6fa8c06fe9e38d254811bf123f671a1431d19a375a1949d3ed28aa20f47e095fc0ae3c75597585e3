/**
 * @fileoverview Rule to disallow certain object properties
 * @author Will Klein & Eli White
 */

"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow certain properties on certain objects",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-restricted-properties"
        },

        schema: {
            type: "array",
            items: {
                anyOf: [ // `object` and `property` are both optional, but at least one of them must be provided.
                    {
                        type: "object",
                        properties: {
                            object: {
                                type: "string"
                            },
                            property: {
                                type: "string"
                            },
                            message: {
                                type: "string"
                            }
                        },
                        additionalProperties: false,
                        required: ["object"]
                    },
                    {
                        type: "object",
                        properties: {
                            object: {
                                type: "string"
                            },
                            property: {
                                type: "string"
                            },
                            message: {
                                type: "string"
                            }
                        },
                        additionalProperties: false,
                        required: ["property"]
                    }
                ]
            },
            uniqueItems: true
        },

        messages: {
            // eslint-disable-next-line eslint-plugin/report-message-format
            restrictedObjectProperty: "'{{objectName}}.{{propertyName}}' is restricted from being used.{{message}}",
            // eslint-disable-next-line eslint-plugin/report-message-format
            restrictedProperty: "'{{propertyName}}' is restricted from being used.{{message}}"
        }
    },

    create(context) {
        const restrictedCalls = context.options;

        if (restrictedCalls.length === 0) {
            return {};
        }

        const restrictedProperties = new Map();
        const globallyRestrictedObjects = new Map();
        const globallyRestrictedProperties = new Map();

        restrictedCalls.forEach(option => {
            const objectName = option.object;
            const propertyName = option.property;

            if (typeof objectName === "undefined") {
                globallyRestrictedProperties.set(propertyName, { message: option.message });
            } else if (typeof propertyName === "undefined") {
                globallyRestrictedObjects.set(objectName, { message: option.message });
            } else {
                if (!restrictedProperties.has(objectName)) {
                    restrictedProperties.set(objectName, new Map());
                }

                restrictedProperties.get(objectName).set(propertyName, {
                    message: option.message
                });
            }
        });

        /**
         * Checks to see whether a property access is restricted, and reports it if so.
         * @param {ASTNode} node The node to report
         * @param {string} objectName The name of the object
         * @param {string} propertyName The name of the property
         * @returns {undefined}
         */
        function checkPropertyAccess(node, objectName, propertyName) {
            if (propertyName === null) {
                return;
            }
            const matchedObject = restrictedProperties.get(objectName);
            const matchedObjectProperty = matchedObject ? matchedObject.get(propertyName) : globallyRestrictedObjects.get(objectName);
            const globalMatchedProperty = globallyRestrictedProperties.get(propertyName);

            if (matchedObjectProperty) {
                const message = matchedObjectProperty.message ? ` ${matchedObjectProperty.message}` : "";

                context.report({
                    node,
                    messageId: "restrictedObjectProperty",
                    data: {
                        objectName,
                        propertyName,
                        message
                    }
                });
            } else if (globalMatchedProperty) {
                const message = globalMatchedProperty.message ? ` ${globalMatchedProperty.message}` : "";

                context.report({
                    node,
                    messageId: "restrictedProperty",
                    data: {
                        propertyName,
                        message
                    }
                });
            }
        }

        /**
         * Checks property accesses in a destructuring assignment expression, e.g. `var foo; ({foo} = bar);`
         * @param {ASTNode} node An AssignmentExpression or AssignmentPattern node
         * @returns {undefined}
         */
        function checkDestructuringAssignment(node) {
            if (node.right.type === "Identifier") {
                const objectName = node.right.name;

                if (node.left.type === "ObjectPattern") {
                    node.left.properties.forEach(property => {
                        checkPropertyAccess(node.left, objectName, astUtils.getStaticPropertyName(property));
                    });
                }
            }
        }

        return {
            MemberExpression(node) {
                checkPropertyAccess(node, node.object && node.object.name, astUtils.getStaticPropertyName(node));
            },
            VariableDeclarator(node) {
                if (node.init && node.init.type === "Identifier") {
                    const objectName = node.init.name;

                    if (node.id.type === "ObjectPattern") {
                        node.id.properties.forEach(property => {
                            checkPropertyAccess(node.id, objectName, astUtils.getStaticPropertyName(property));
                        });
                    }
                }
            },
            AssignmentExpression: checkDestructuringAssignment,
            AssignmentPattern: checkDestructuringAssignment
        };
    }
};
