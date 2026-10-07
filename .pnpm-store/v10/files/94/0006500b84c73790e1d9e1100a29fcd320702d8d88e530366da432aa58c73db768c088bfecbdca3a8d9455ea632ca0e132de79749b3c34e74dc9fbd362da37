/**
 * @fileoverview Rule to flag use of an lexical declarations inside a case clause
 * @author Erik Arvidsson
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description: "Disallow lexical declarations in case clauses",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-case-declarations",
		},

		hasSuggestions: true,

		schema: [],

		messages: {
			addBrackets: "Add {} brackets around the case block.",
			unexpected: "Unexpected lexical declaration in case block.",
		},
	},

	create(context) {
		/**
		 * Checks whether or not a node is a lexical declaration.
		 * @param {ASTNode} node A direct child statement of a switch case.
		 * @returns {boolean} Whether or not the node is a lexical declaration.
		 */
		function isLexicalDeclaration(node) {
			switch (node.type) {
				case "FunctionDeclaration":
				case "ClassDeclaration":
					return true;
				case "VariableDeclaration":
					return node.kind !== "var";
				default:
					return false;
			}
		}

		return {
			SwitchCase(node) {
				for (let i = 0; i < node.consequent.length; i++) {
					const statement = node.consequent[i];

					if (isLexicalDeclaration(statement)) {
						context.report({
							node: statement,
							messageId: "unexpected",
							suggest: [
								{
									messageId: "addBrackets",
									fix: fixer => [
										fixer.insertTextBefore(
											node.consequent[0],
											"{ ",
										),
										fixer.insertTextAfter(
											node.consequent.at(-1),
											" }",
										),
									],
								},
							],
						});
					}
				}
			},
		};
	},
};
