/**
 * @fileoverview Rule to flag variables that are never assigned
 * @author Jacob Bandes-Storch <https://github.com/jtbandes>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",
		dialects: ["typescript", "javascript"],
		language: "javascript",

		docs: {
			description:
				"Disallow `let` or `var` variables that are read but never assigned",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-unassigned-vars",
		},

		schema: [],
		messages: {
			unassigned:
				"'{{name}}' is always 'undefined' because it's never assigned.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;
		let insideDeclareModule = false;

		return {
			"TSModuleDeclaration[declare=true]"() {
				insideDeclareModule = true;
			},
			"TSModuleDeclaration[declare=true]:exit"() {
				insideDeclareModule = false;
			},
			VariableDeclarator(node) {
				/** @type {import('estree').VariableDeclaration} */
				const declaration = node.parent;
				const shouldSkip =
					node.init ||
					node.id.type !== "Identifier" ||
					declaration.kind === "const" ||
					declaration.declare ||
					insideDeclareModule;
				if (shouldSkip) {
					return;
				}
				const [variable] = sourceCode.getDeclaredVariables(node);
				if (!variable) {
					return;
				}
				let hasRead = false;
				for (const reference of variable.references) {
					if (reference.isWrite()) {
						return;
					}
					if (reference.isRead()) {
						hasRead = true;
					}
				}
				if (!hasRead) {
					// Variables that are never read should be flagged by no-unused-vars instead
					return;
				}
				context.report({
					node,
					messageId: "unassigned",
					data: { name: node.id.name },
				});
			},
		};
	},
};
