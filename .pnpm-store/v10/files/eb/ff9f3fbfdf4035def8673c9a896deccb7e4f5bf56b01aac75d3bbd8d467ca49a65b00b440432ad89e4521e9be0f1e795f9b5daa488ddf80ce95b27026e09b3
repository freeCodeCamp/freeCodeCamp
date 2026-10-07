/**
 * @fileoverview Rule to require object keys to be sorted
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils"),
	naturalCompare = require("natural-compare");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Gets the property name of the given `Property` node.
 *
 * - If the property's key is an `Identifier` node, this returns the key's name
 *   whether it's a computed property or not.
 * - If the property has a static name, this returns the static name.
 * - Otherwise, this returns null.
 * @param {ASTNode} node The `Property` node to get.
 * @returns {string|null} The property name or null.
 * @private
 */
function getPropertyName(node) {
	const staticName = astUtils.getStaticPropertyName(node);

	if (staticName !== null) {
		return staticName;
	}

	return node.key.name || null;
}

/**
 * Functions which check that the given 2 names are in specific order.
 *
 * Postfix `I` is meant insensitive.
 * Postfix `N` is meant natural.
 * @private
 */
const isValidOrders = {
	asc(a, b) {
		return a <= b;
	},
	ascI(a, b) {
		return a.toLowerCase() <= b.toLowerCase();
	},
	ascN(a, b) {
		return naturalCompare(a, b) <= 0;
	},
	ascIN(a, b) {
		return naturalCompare(a.toLowerCase(), b.toLowerCase()) <= 0;
	},
	desc(a, b) {
		return isValidOrders.asc(b, a);
	},
	descI(a, b) {
		return isValidOrders.ascI(b, a);
	},
	descN(a, b) {
		return isValidOrders.ascN(b, a);
	},
	descIN(a, b) {
		return isValidOrders.ascIN(b, a);
	},
};

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [
			"asc",
			{
				allowLineSeparatedGroups: false,
				caseSensitive: true,
				ignoreComputedKeys: false,
				minKeys: 2,
				natural: false,
			},
		],

		docs: {
			description: "Require object keys to be sorted",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/sort-keys",
		},

		schema: [
			{
				enum: ["asc", "desc"],
			},
			{
				type: "object",
				properties: {
					caseSensitive: {
						type: "boolean",
					},
					natural: {
						type: "boolean",
					},
					minKeys: {
						type: "integer",
						minimum: 2,
					},
					allowLineSeparatedGroups: {
						type: "boolean",
					},
					ignoreComputedKeys: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			sortKeys:
				"Expected object keys to be in {{natural}}{{insensitive}}{{order}}ending order. '{{thisName}}' should be before '{{prevName}}'.",
		},
	},

	create(context) {
		const [
			order,
			{
				caseSensitive,
				natural,
				minKeys,
				allowLineSeparatedGroups,
				ignoreComputedKeys,
			},
		] = context.options;
		const insensitive = !caseSensitive;
		const isValidOrder =
			isValidOrders[
				order + (insensitive ? "I" : "") + (natural ? "N" : "")
			];

		// The stack to save the previous property's name for each object literals.
		let stack = null;
		const sourceCode = context.sourceCode;

		return {
			ObjectExpression(node) {
				stack = {
					upper: stack,
					prevNode: null,
					prevBlankLine: false,
					prevName: null,
					numKeys: node.properties.length,
				};
			},

			"ObjectExpression:exit"() {
				stack = stack.upper;
			},

			SpreadElement(node) {
				if (node.parent.type === "ObjectExpression") {
					stack.prevName = null;
				}
			},

			Property(node) {
				if (node.parent.type === "ObjectPattern") {
					return;
				}

				if (ignoreComputedKeys && node.computed) {
					stack.prevName = null; // reset sort
					return;
				}

				const prevName = stack.prevName;
				const numKeys = stack.numKeys;
				const thisName = getPropertyName(node);

				// Get tokens between current node and previous node
				const tokens =
					stack.prevNode &&
					sourceCode.getTokensBetween(stack.prevNode, node, {
						includeComments: true,
					});

				let isBlankLineBetweenNodes = stack.prevBlankLine;

				if (tokens) {
					// check blank line between tokens
					tokens.forEach((token, index) => {
						const previousToken = tokens[index - 1];

						if (
							previousToken &&
							token.loc.start.line - previousToken.loc.end.line >
								1
						) {
							isBlankLineBetweenNodes = true;
						}
					});

					// check blank line between the current node and the last token
					if (
						!isBlankLineBetweenNodes &&
						node.loc.start.line - tokens.at(-1).loc.end.line > 1
					) {
						isBlankLineBetweenNodes = true;
					}

					// check blank line between the first token and the previous node
					if (
						!isBlankLineBetweenNodes &&
						tokens[0].loc.start.line - stack.prevNode.loc.end.line >
							1
					) {
						isBlankLineBetweenNodes = true;
					}
				}

				stack.prevNode = node;

				if (thisName !== null) {
					stack.prevName = thisName;
				}

				if (allowLineSeparatedGroups && isBlankLineBetweenNodes) {
					stack.prevBlankLine = thisName === null;
					return;
				}

				if (
					prevName === null ||
					thisName === null ||
					numKeys < minKeys
				) {
					return;
				}

				if (!isValidOrder(prevName, thisName)) {
					context.report({
						node,
						loc: node.key.loc,
						messageId: "sortKeys",
						data: {
							thisName,
							prevName,
							order,
							insensitive: insensitive ? "insensitive " : "",
							natural: natural ? "natural " : "",
						},
					});
				}
			},
		};
	},
};
