/**
 * @fileoverview Rule to flag use of function declaration identifiers as variables.
 * @author Ian Christian Myers
 */

"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description: "Disallow reassigning `function` declarations",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-func-assign",
		},

		schema: [],

		messages: {
			isAFunction: "'{{name}}' is a function.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		/**
		 * Reports a reference if is non initializer and writable.
		 * @param {References} references Collection of reference to check.
		 * @returns {void}
		 */
		function checkReference(references) {
			astUtils.getModifyingReferences(references).forEach(reference => {
				context.report({
					node: reference.identifier,
					messageId: "isAFunction",
					data: {
						name: reference.identifier.name,
					},
				});
			});
		}

		/**
		 * Finds and reports references that are non initializer and writable.
		 * @param {Variable} variable A variable to check.
		 * @returns {void}
		 */
		function checkVariable(variable) {
			if (variable.defs[0].type === "FunctionName") {
				checkReference(variable.references);
			}
		}

		/**
		 * Checks parameters of a given function node.
		 * @param {ASTNode} node A function node to check.
		 * @returns {void}
		 */
		function checkForFunction(node) {
			sourceCode.getDeclaredVariables(node).forEach(checkVariable);
		}

		return {
			FunctionDeclaration: checkForFunction,
			FunctionExpression: checkForFunction,
		};
	},
};
