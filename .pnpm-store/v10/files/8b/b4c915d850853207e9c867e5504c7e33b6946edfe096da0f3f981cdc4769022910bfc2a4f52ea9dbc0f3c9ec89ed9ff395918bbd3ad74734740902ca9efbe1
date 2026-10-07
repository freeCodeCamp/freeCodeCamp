/**
 * @fileoverview Rule to flag references to undeclared variables.
 * @author Mark Macdonald
 */
"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks if the given node is the argument of a typeof operator.
 * @param {ASTNode} node The AST node being checked.
 * @returns {boolean} Whether or not the node is the argument of a typeof operator.
 */
function hasTypeOfOperator(node) {
	const parent = node.parent;

	return parent.type === "UnaryExpression" && parent.operator === "typeof";
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		defaultOptions: [
			{
				typeof: false,
			},
		],

		docs: {
			description:
				"Disallow the use of undeclared variables unless mentioned in `/*global */` comments",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-undef",
		},

		schema: [
			{
				type: "object",
				properties: {
					typeof: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],
		messages: {
			undef: "'{{name}}' is not defined.",
		},
	},

	create(context) {
		const [{ typeof: considerTypeOf }] = context.options;
		const sourceCode = context.sourceCode;

		return {
			"Program:exit"(node) {
				const globalScope = sourceCode.getScope(node);

				globalScope.through.forEach(ref => {
					const identifier = ref.identifier;

					if (!considerTypeOf && hasTypeOfOperator(identifier)) {
						return;
					}

					context.report({
						node: identifier,
						messageId: "undef",
						data: identifier,
					});
				});
			},
		};
	},
};
