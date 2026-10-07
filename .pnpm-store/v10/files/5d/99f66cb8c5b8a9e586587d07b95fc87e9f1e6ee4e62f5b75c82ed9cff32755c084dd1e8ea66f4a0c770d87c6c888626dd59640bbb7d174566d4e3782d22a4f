/**
 * @fileoverview A rule to disallow modifying variables that are declared using `const`
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const CONSTANT_BINDINGS = new Set(["const", "using", "await using"]);

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description:
				"Disallow reassigning `const`, `using`, and `await using` variables",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-const-assign",
		},

		schema: [],

		messages: {
			const: "'{{name}}' is constant.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		/**
		 * Finds and reports references that are non initializer and writable.
		 * @param {Variable} variable A variable to check.
		 * @returns {void}
		 */
		function checkVariable(variable) {
			astUtils
				.getModifyingReferences(variable.references)
				.forEach(reference => {
					context.report({
						node: reference.identifier,
						messageId: "const",
						data: { name: reference.identifier.name },
					});
				});
		}

		return {
			VariableDeclaration(node) {
				if (CONSTANT_BINDINGS.has(node.kind)) {
					sourceCode
						.getDeclaredVariables(node)
						.forEach(checkVariable);
				}
			},
		};
	},
};
