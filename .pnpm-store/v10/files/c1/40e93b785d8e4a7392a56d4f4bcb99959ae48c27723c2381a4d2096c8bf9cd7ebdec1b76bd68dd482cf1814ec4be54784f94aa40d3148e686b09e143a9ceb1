/**
 * @fileoverview Rule to disallow assignments to native objects or read-only global variables
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [{ exceptions: [] }],

		docs: {
			description:
				"Disallow assignments to native objects or read-only global variables",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-global-assign",
		},

		schema: [
			{
				type: "object",
				properties: {
					exceptions: {
						type: "array",
						items: { type: "string" },
						uniqueItems: true,
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			globalShouldNotBeModified:
				"Read-only global '{{name}}' should not be modified.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;
		const [{ exceptions }] = context.options;

		/**
		 * Reports write references.
		 * @param {Reference} reference A reference to check.
		 * @param {number} index The index of the reference in the references.
		 * @param {Reference[]} references The array that the reference belongs to.
		 * @returns {void}
		 */
		function checkReference(reference, index, references) {
			const identifier = reference.identifier;

			if (
				reference.init === false &&
				reference.isWrite() &&
				/*
				 * Destructuring assignments can have multiple default value,
				 * so possibly there are multiple writeable references for the same identifier.
				 */
				(index === 0 || references[index - 1].identifier !== identifier)
			) {
				context.report({
					node: identifier,
					messageId: "globalShouldNotBeModified",
					data: {
						name: identifier.name,
					},
				});
			}
		}

		/**
		 * Reports write references if a given variable is read-only builtin.
		 * @param {Variable} variable A variable to check.
		 * @returns {void}
		 */
		function checkVariable(variable) {
			if (
				variable.writeable === false &&
				!exceptions.includes(variable.name)
			) {
				variable.references.forEach(checkReference);
			}
		}

		return {
			Program(node) {
				const globalScope = sourceCode.getScope(node);

				globalScope.variables.forEach(checkVariable);
			},
		};
	},
};
