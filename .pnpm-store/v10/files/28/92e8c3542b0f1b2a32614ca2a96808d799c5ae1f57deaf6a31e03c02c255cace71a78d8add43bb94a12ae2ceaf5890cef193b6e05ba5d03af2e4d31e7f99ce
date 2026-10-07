/**
 * @fileoverview Rule to disallow specified names in exports
 * @author Milos Djermanovic
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description: "Disallow specified names in exports",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-restricted-exports",
		},

		schema: [
			{
				anyOf: [
					{
						type: "object",
						properties: {
							restrictedNamedExports: {
								type: "array",
								items: {
									type: "string",
								},
								uniqueItems: true,
							},
							restrictedNamedExportsPattern: { type: "string" },
						},
						additionalProperties: false,
					},
					{
						type: "object",
						properties: {
							restrictedNamedExports: {
								type: "array",
								items: {
									type: "string",
									pattern: "^(?!default$)",
								},
								uniqueItems: true,
							},
							restrictedNamedExportsPattern: { type: "string" },
							restrictDefaultExports: {
								type: "object",
								properties: {
									// Allow/Disallow `export default foo; export default 42; export default function foo() {}` format
									direct: {
										type: "boolean",
									},

									// Allow/Disallow `export { foo as default };` declarations
									named: {
										type: "boolean",
									},

									//  Allow/Disallow `export { default } from "mod"; export { default as default } from "mod";` declarations
									defaultFrom: {
										type: "boolean",
									},

									//  Allow/Disallow `export { foo as default } from "mod";` declarations
									namedFrom: {
										type: "boolean",
									},

									//  Allow/Disallow `export * as default from "mod"`; declarations
									namespaceFrom: {
										type: "boolean",
									},
								},
								additionalProperties: false,
							},
						},
						additionalProperties: false,
					},
				],
			},
		],

		messages: {
			restrictedNamed:
				"'{{name}}' is restricted from being used as an exported name.",
			restrictedDefault: "Exporting 'default' is restricted.",
		},
	},

	create(context) {
		const restrictedNames = new Set(
			context.options[0] && context.options[0].restrictedNamedExports,
		);
		const restrictedNamePattern =
			context.options[0] &&
			context.options[0].restrictedNamedExportsPattern;
		const restrictDefaultExports =
			context.options[0] && context.options[0].restrictDefaultExports;
		const sourceCode = context.sourceCode;

		/**
		 * Checks and reports given exported name.
		 * @param {ASTNode} node exported `Identifier` or string `Literal` node to check.
		 * @returns {void}
		 */
		function checkExportedName(node) {
			const name = astUtils.getModuleExportName(node);

			let matchesRestrictedNamePattern = false;

			if (restrictedNamePattern && name !== "default") {
				const patternRegex = new RegExp(restrictedNamePattern, "u");

				matchesRestrictedNamePattern = patternRegex.test(name);
			}

			if (matchesRestrictedNamePattern || restrictedNames.has(name)) {
				context.report({
					node,
					messageId: "restrictedNamed",
					data: { name },
				});
				return;
			}

			if (name === "default") {
				if (node.parent.type === "ExportAllDeclaration") {
					if (
						restrictDefaultExports &&
						restrictDefaultExports.namespaceFrom
					) {
						context.report({
							node,
							messageId: "restrictedDefault",
						});
					}
				} else {
					// ExportSpecifier
					const isSourceSpecified = !!node.parent.parent.source;
					const specifierLocalName = astUtils.getModuleExportName(
						node.parent.local,
					);

					if (
						!isSourceSpecified &&
						restrictDefaultExports &&
						restrictDefaultExports.named
					) {
						context.report({
							node,
							messageId: "restrictedDefault",
						});
						return;
					}

					if (isSourceSpecified && restrictDefaultExports) {
						if (
							(specifierLocalName === "default" &&
								restrictDefaultExports.defaultFrom) ||
							(specifierLocalName !== "default" &&
								restrictDefaultExports.namedFrom)
						) {
							context.report({
								node,
								messageId: "restrictedDefault",
							});
						}
					}
				}
			}
		}

		return {
			ExportAllDeclaration(node) {
				if (node.exported) {
					checkExportedName(node.exported);
				}
			},

			ExportDefaultDeclaration(node) {
				if (restrictDefaultExports && restrictDefaultExports.direct) {
					context.report({
						node,
						messageId: "restrictedDefault",
					});
				}
			},

			ExportNamedDeclaration(node) {
				const declaration = node.declaration;

				if (declaration) {
					if (
						declaration.type === "FunctionDeclaration" ||
						declaration.type === "ClassDeclaration"
					) {
						checkExportedName(declaration.id);
					} else if (declaration.type === "VariableDeclaration") {
						sourceCode
							.getDeclaredVariables(declaration)
							.map(v =>
								v.defs.find(d => d.parent === declaration),
							)
							.map(d => d.name) // Identifier nodes
							.forEach(checkExportedName);
					}
				} else {
					node.specifiers
						.map(s => s.exported)
						.forEach(checkExportedName);
				}
			},
		};
	},
};
