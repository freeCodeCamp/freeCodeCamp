/**
 * @fileoverview Rule to flag use of duplicate keys in an object.
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const GET_KIND = /^(?:init|get)$/u;
const SET_KIND = /^(?:init|set)$/u;

/**
 * The class which stores properties' information of an object.
 */
class ObjectInfo {
	/**
	 * @param {ObjectInfo|null} upper The information of the outer object.
	 * @param {ASTNode} node The ObjectExpression node of this information.
	 */
	constructor(upper, node) {
		this.upper = upper;
		this.node = node;
		this.properties = new Map();
	}

	/**
	 * Gets the information of the given Property node.
	 * @param {ASTNode} node The Property node to get.
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
	 * @param {ASTNode} node The Property node to check.
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
	 * @param {ASTNode} node The Property node to define.
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

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description: "Disallow duplicate keys in object literals",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-dupe-keys",
		},

		schema: [],

		messages: {
			unexpected: "Duplicate key '{{name}}'.",
		},
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
				if (name === null) {
					return;
				}

				/*
				 * Skip if the property node is a proto setter.
				 * Proto setter is a special syntax that sets
				 * object's prototype instead of creating a property.
				 * It can be in one of the following forms:
				 *
				 *    __proto__: <expression>
				 *    '__proto__': <expression>
				 *    "__proto__": <expression>
				 *
				 * Duplicate proto setters produce parsing errors,
				 * so we can just skip them to not interfere with
				 * regular properties named "__proto__".
				 */
				if (
					name === "__proto__" &&
					node.kind === "init" &&
					!node.computed &&
					!node.shorthand &&
					!node.method
				) {
					return;
				}

				// Reports if the name is defined already.
				if (info.isPropertyDefined(node)) {
					context.report({
						node: info.node,
						loc: node.key.loc,
						messageId: "unexpected",
						data: { name },
					});
				}

				// Update info.
				info.defineProperty(node);
			},
		};
	},
};
