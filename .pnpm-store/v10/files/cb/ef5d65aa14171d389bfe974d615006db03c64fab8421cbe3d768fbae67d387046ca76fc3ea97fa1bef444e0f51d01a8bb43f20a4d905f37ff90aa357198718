/**
 * @fileoverview Rule to disallow certain object properties
 * @author Will Klein & Eli White
 */

"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description: "Disallow certain properties on certain objects",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-restricted-properties",
		},

		schema: {
			type: "array",
			items: {
				type: "object",
				properties: {
					object: {
						type: "string",
					},
					property: {
						type: "string",
					},
					allowObjects: {
						type: "array",
						items: {
							type: "string",
						},
						uniqueItems: true,
					},
					allowProperties: {
						type: "array",
						items: {
							type: "string",
						},
						uniqueItems: true,
					},
					message: {
						type: "string",
					},
				},
				anyOf: [
					{
						required: ["object"],
					},
					{
						required: ["property"],
					},
				],
				not: {
					anyOf: [
						{ required: ["allowObjects", "object"] },
						{ required: ["allowProperties", "property"] },
					],
				},
				additionalProperties: false,
			},
			uniqueItems: true,
		},

		messages: {
			restrictedObjectProperty:
				// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
				"'{{objectName}}.{{propertyName}}' is restricted from being used.{{allowedPropertiesMessage}}{{message}}",
			restrictedProperty:
				// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
				"'{{propertyName}}' is restricted from being used.{{allowedObjectsMessage}}{{message}}",
		},
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
				globallyRestrictedProperties.set(propertyName, {
					allowObjects: option.allowObjects,
					message: option.message,
				});
			} else if (typeof propertyName === "undefined") {
				globallyRestrictedObjects.set(objectName, {
					allowProperties: option.allowProperties,
					message: option.message,
				});
			} else {
				if (!restrictedProperties.has(objectName)) {
					restrictedProperties.set(objectName, new Map());
				}

				restrictedProperties.get(objectName).set(propertyName, {
					message: option.message,
				});
			}
		});

		/**
		 * Checks if a name is in the allowed list.
		 * @param {string} name The name to check
		 * @param {string[]} [allowedList] The list of allowed names
		 * @returns {boolean} True if the name is allowed, false otherwise
		 */
		function isAllowed(name, allowedList) {
			if (!allowedList) {
				return false;
			}

			return allowedList.includes(name);
		}

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
			const matchedObjectProperty = matchedObject
				? matchedObject.get(propertyName)
				: globallyRestrictedObjects.get(objectName);
			const globalMatchedProperty =
				globallyRestrictedProperties.get(propertyName);

			if (
				matchedObjectProperty &&
				!isAllowed(propertyName, matchedObjectProperty.allowProperties)
			) {
				const message = matchedObjectProperty.message
					? ` ${matchedObjectProperty.message}`
					: "";
				const allowedPropertiesMessage =
					matchedObjectProperty.allowProperties
						? ` Only these properties are allowed: ${matchedObjectProperty.allowProperties.join(", ")}.`
						: "";

				context.report({
					node,
					messageId: "restrictedObjectProperty",
					data: {
						objectName,
						propertyName,
						message,
						allowedPropertiesMessage,
					},
				});
			} else if (
				globalMatchedProperty &&
				!isAllowed(objectName, globalMatchedProperty.allowObjects)
			) {
				const message = globalMatchedProperty.message
					? ` ${globalMatchedProperty.message}`
					: "";
				const allowedObjectsMessage = globalMatchedProperty.allowObjects
					? ` Property '${propertyName}' is only allowed on these objects: ${globalMatchedProperty.allowObjects.join(", ")}.`
					: "";

				context.report({
					node,
					messageId: "restrictedProperty",
					data: {
						propertyName,
						message,
						allowedObjectsMessage,
					},
				});
			}
		}

		return {
			MemberExpression(node) {
				checkPropertyAccess(
					node,
					node.object && node.object.name,
					astUtils.getStaticPropertyName(node),
				);
			},
			ObjectPattern(node) {
				let objectName = null;

				if (node.parent.type === "VariableDeclarator") {
					if (
						node.parent.init &&
						node.parent.init.type === "Identifier"
					) {
						objectName = node.parent.init.name;
					}
				} else if (
					node.parent.type === "AssignmentExpression" ||
					node.parent.type === "AssignmentPattern"
				) {
					if (node.parent.right.type === "Identifier") {
						objectName = node.parent.right.name;
					}
				}

				node.properties.forEach(property => {
					checkPropertyAccess(
						node,
						objectName,
						astUtils.getStaticPropertyName(property),
					);
				});
			},
		};
	},
};
