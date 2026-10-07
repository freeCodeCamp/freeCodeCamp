/**
 * @fileoverview Ensure handling of errors when we know they exist.
 * @author Jamund Ferguson
 * @deprecated in ESLint v7.0.0
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		deprecated: {
			message: "Node.js rules were moved out of ESLint core.",
			url: "https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules",
			deprecatedSince: "7.0.0",
			availableUntil: "11.0.0",
			replacedBy: [
				{
					message:
						"eslint-plugin-n now maintains deprecated Node.js-related rules.",
					plugin: {
						name: "eslint-plugin-n",
						url: "https://github.com/eslint-community/eslint-plugin-n",
					},
					rule: {
						name: "handle-callback-err",
						url: "https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/handle-callback-err.md",
					},
				},
			],
		},

		type: "suggestion",

		docs: {
			description: "Require error handling in callbacks",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/handle-callback-err",
		},

		schema: [
			{
				type: "string",
			},
		],
		messages: {
			expected: "Expected error to be handled.",
		},
	},

	create(context) {
		const errorArgument = context.options[0] || "err";
		const sourceCode = context.sourceCode;

		/**
		 * Checks if the given argument should be interpreted as a regexp pattern.
		 * @param {string} stringToCheck The string which should be checked.
		 * @returns {boolean} Whether or not the string should be interpreted as a pattern.
		 */
		function isPattern(stringToCheck) {
			const firstChar = stringToCheck[0];

			return firstChar === "^";
		}

		/**
		 * Checks if the given name matches the configured error argument.
		 * @param {string} name The name which should be compared.
		 * @returns {boolean} Whether or not the given name matches the configured error variable name.
		 */
		function matchesConfiguredErrorName(name) {
			if (isPattern(errorArgument)) {
				const regexp = new RegExp(errorArgument, "u");

				return regexp.test(name);
			}
			return name === errorArgument;
		}

		/**
		 * Get the parameters of a given function scope.
		 * @param {Object} scope The function scope.
		 * @returns {Array} All parameters of the given scope.
		 */
		function getParameters(scope) {
			return scope.variables.filter(
				variable =>
					variable.defs[0] && variable.defs[0].type === "Parameter",
			);
		}

		/**
		 * Check to see if we're handling the error object properly.
		 * @param {ASTNode} node The AST node to check.
		 * @returns {void}
		 */
		function checkForError(node) {
			const scope = sourceCode.getScope(node),
				parameters = getParameters(scope),
				firstParameter = parameters[0];

			if (
				firstParameter &&
				matchesConfiguredErrorName(firstParameter.name)
			) {
				if (firstParameter.references.length === 0) {
					context.report({ node, messageId: "expected" });
				}
			}
		}

		return {
			FunctionDeclaration: checkForError,
			FunctionExpression: checkForError,
			ArrowFunctionExpression: checkForError,
		};
	},
};
