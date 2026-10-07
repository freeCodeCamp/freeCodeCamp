/**
 * @fileoverview Rule to check multiple var declarations per line
 * @author Alberto Rodríguez
 * @deprecated in ESLint v8.53.0
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		deprecated: {
			message: "Formatting rules are being moved out of ESLint core.",
			url: "https://eslint.org/blog/2023/10/deprecating-formatting-rules/",
			deprecatedSince: "8.53.0",
			availableUntil: "11.0.0",
			replacedBy: [
				{
					message:
						"ESLint Stylistic now maintains deprecated stylistic core rules.",
					url: "https://eslint.style/guide/migration",
					plugin: {
						name: "@stylistic/eslint-plugin",
						url: "https://eslint.style",
					},
					rule: {
						name: "one-var-declaration-per-line",
						url: "https://eslint.style/rules/one-var-declaration-per-line",
					},
				},
			],
		},
		type: "suggestion",

		docs: {
			description:
				"Require or disallow newlines around variable declarations",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/one-var-declaration-per-line",
		},

		schema: [
			{
				enum: ["always", "initializations"],
			},
		],

		fixable: "whitespace",

		messages: {
			expectVarOnNewline:
				"Expected variable declaration to be on a new line.",
		},
	},

	create(context) {
		const always = context.options[0] === "always";

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		/**
		 * Determine if provided keyword is a variant of for specifiers
		 * @private
		 * @param {string} keyword keyword to test
		 * @returns {boolean} True if `keyword` is a variant of for specifier
		 */
		function isForTypeSpecifier(keyword) {
			return (
				keyword === "ForStatement" ||
				keyword === "ForInStatement" ||
				keyword === "ForOfStatement"
			);
		}

		/**
		 * Checks newlines around variable declarations.
		 * @private
		 * @param {ASTNode} node `VariableDeclaration` node to test
		 * @returns {void}
		 */
		function checkForNewLine(node) {
			if (isForTypeSpecifier(node.parent.type)) {
				return;
			}

			const declarations = node.declarations;
			let prev;

			declarations.forEach(current => {
				if (prev && prev.loc.end.line === current.loc.start.line) {
					if (always || prev.init || current.init) {
						context.report({
							node,
							messageId: "expectVarOnNewline",
							loc: current.loc,
							fix: fixer => fixer.insertTextBefore(current, "\n"),
						});
					}
				}
				prev = current;
			});
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			VariableDeclaration: checkForNewLine,
		};
	},
};
