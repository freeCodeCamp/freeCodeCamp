/**
 * @fileoverview Rule to flag non-camelcased identifiers
 * @author Nicholas C. Zakas
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

		defaultOptions: [
			{
				allow: [],
				ignoreDestructuring: false,
				ignoreGlobals: false,
				ignoreImports: false,
				properties: "always",
			},
		],

		docs: {
			description: "Enforce camelcase naming convention",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/camelcase",
		},

		schema: [
			{
				type: "object",
				properties: {
					ignoreDestructuring: {
						type: "boolean",
					},
					ignoreImports: {
						type: "boolean",
					},
					ignoreGlobals: {
						type: "boolean",
					},
					properties: {
						enum: ["always", "never"],
					},
					allow: {
						type: "array",
						items: {
							type: "string",
						},
						minItems: 0,
						uniqueItems: true,
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			notCamelCase: "Identifier '{{name}}' is not in camel case.",
			notCamelCasePrivate: "#{{name}} is not in camel case.",
		},
	},

	create(context) {
		const [
			{
				allow,
				ignoreDestructuring,
				ignoreGlobals,
				ignoreImports,
				properties,
			},
		] = context.options;
		const sourceCode = context.sourceCode;

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		// contains reported nodes to avoid reporting twice on destructuring with shorthand notation
		const reported = new Set();

		/**
		 * Checks if a string contains an underscore and isn't all upper-case
		 * @param {string} name The string to check.
		 * @returns {boolean} if the string is underscored
		 * @private
		 */
		function isUnderscored(name) {
			const nameBody = name.replace(/^_+|_+$/gu, "");

			// if there's an underscore, it might be A_CONSTANT, which is okay
			return (
				nameBody.includes("_") && nameBody !== nameBody.toUpperCase()
			);
		}

		/**
		 * Checks if a string match the ignore list
		 * @param {string} name The string to check.
		 * @returns {boolean} if the string is ignored
		 * @private
		 */
		function isAllowed(name) {
			return allow.some(
				entry => name === entry || name.match(new RegExp(entry, "u")),
			);
		}

		/**
		 * Checks if a given name is good or not.
		 * @param {string} name The name to check.
		 * @returns {boolean} `true` if the name is good.
		 * @private
		 */
		function isGoodName(name) {
			return !isUnderscored(name) || isAllowed(name);
		}

		/**
		 * Checks if a given identifier reference or member expression is an assignment
		 * target.
		 * @param {ASTNode} node The node to check.
		 * @returns {boolean} `true` if the node is an assignment target.
		 */
		function isAssignmentTarget(node) {
			const parent = node.parent;

			switch (parent.type) {
				case "AssignmentExpression":
				case "AssignmentPattern":
					return parent.left === node;

				case "Property":
					return (
						parent.parent.type === "ObjectPattern" &&
						parent.value === node
					);
				case "ArrayPattern":
				case "RestElement":
					return true;

				default:
					return false;
			}
		}

		/**
		 * Checks if a given binding identifier uses the original name as-is.
		 * - If it's in object destructuring or object expression, the original name is its property name.
		 * - If it's in import declaration, the original name is its exported name.
		 * @param {ASTNode} node The `Identifier` node to check.
		 * @returns {boolean} `true` if the identifier uses the original name as-is.
		 */
		function equalsToOriginalName(node) {
			const localName = node.name;
			const valueNode =
				node.parent.type === "AssignmentPattern" ? node.parent : node;
			const parent = valueNode.parent;

			switch (parent.type) {
				case "Property":
					return (
						(parent.parent.type === "ObjectPattern" ||
							parent.parent.type === "ObjectExpression") &&
						parent.value === valueNode &&
						!parent.computed &&
						parent.key.type === "Identifier" &&
						parent.key.name === localName
					);

				case "ImportSpecifier":
					return (
						parent.local === node &&
						astUtils.getModuleExportName(parent.imported) ===
							localName
					);

				default:
					return false;
			}
		}

		/**
		 * Reports an AST node as a rule violation.
		 * @param {ASTNode} node The node to report.
		 * @returns {void}
		 * @private
		 */
		function report(node) {
			if (reported.has(node.range[0])) {
				return;
			}
			reported.add(node.range[0]);

			// Report it.
			context.report({
				node,
				messageId:
					node.type === "PrivateIdentifier"
						? "notCamelCasePrivate"
						: "notCamelCase",
				data: { name: node.name },
			});
		}

		/**
		 * Reports an identifier reference or a binding identifier.
		 * @param {ASTNode} node The `Identifier` node to report.
		 * @returns {void}
		 */
		function reportReferenceId(node) {
			/*
			 * For backward compatibility, if it's in callings then ignore it.
			 * Not sure why it is.
			 */
			if (
				node.parent.type === "CallExpression" ||
				node.parent.type === "NewExpression"
			) {
				return;
			}

			/*
			 * For backward compatibility, if it's a default value of
			 * destructuring/parameters then ignore it.
			 * Not sure why it is.
			 */
			if (
				node.parent.type === "AssignmentPattern" &&
				node.parent.right === node
			) {
				return;
			}

			/*
			 * The `ignoreDestructuring` flag skips the identifiers that uses
			 * the property name as-is.
			 */
			if (ignoreDestructuring && equalsToOriginalName(node)) {
				return;
			}

			/*
			 * Import attribute keys are always ignored
			 */
			if (astUtils.isImportAttributeKey(node)) {
				return;
			}

			report(node);
		}

		return {
			// Report camelcase of global variable references ------------------
			Program(node) {
				const scope = sourceCode.getScope(node);

				if (!ignoreGlobals) {
					// Defined globals in config files or directive comments.
					for (const variable of scope.variables) {
						if (
							variable.identifiers.length > 0 ||
							isGoodName(variable.name)
						) {
							continue;
						}
						for (const reference of variable.references) {
							/*
							 * For backward compatibility, this rule reports read-only
							 * references as well.
							 */
							reportReferenceId(reference.identifier);
						}
					}
				}

				// Undefined globals.
				for (const reference of scope.through) {
					const id = reference.identifier;

					if (
						isGoodName(id.name) ||
						astUtils.isImportAttributeKey(id)
					) {
						continue;
					}

					/*
					 * For backward compatibility, this rule reports read-only
					 * references as well.
					 */
					reportReferenceId(id);
				}
			},

			// Report camelcase of declared variables --------------------------
			[[
				"VariableDeclaration",
				"FunctionDeclaration",
				"FunctionExpression",
				"ArrowFunctionExpression",
				"ClassDeclaration",
				"ClassExpression",
				"CatchClause",
			]](node) {
				for (const variable of sourceCode.getDeclaredVariables(node)) {
					if (isGoodName(variable.name)) {
						continue;
					}
					const id = variable.identifiers[0];

					// Report declaration.
					if (!(ignoreDestructuring && equalsToOriginalName(id))) {
						report(id);
					}

					/*
					 * For backward compatibility, report references as well.
					 * It looks unnecessary because declarations are reported.
					 */
					for (const reference of variable.references) {
						if (reference.init) {
							continue; // Skip the write references of initializers.
						}
						reportReferenceId(reference.identifier);
					}
				}
			},

			// Report camelcase in properties ----------------------------------
			[[
				"ObjectExpression > Property[computed!=true] > Identifier.key",
				"MethodDefinition[computed!=true] > Identifier.key",
				"PropertyDefinition[computed!=true] > Identifier.key",
				"MethodDefinition > PrivateIdentifier.key",
				"PropertyDefinition > PrivateIdentifier.key",
			]](node) {
				if (
					properties === "never" ||
					astUtils.isImportAttributeKey(node) ||
					isGoodName(node.name)
				) {
					return;
				}
				report(node);
			},
			"MemberExpression[computed!=true] > Identifier.property"(node) {
				if (
					properties === "never" ||
					!isAssignmentTarget(node.parent) || // ← ignore read-only references.
					isGoodName(node.name)
				) {
					return;
				}
				report(node);
			},

			// Report camelcase in import --------------------------------------
			ImportDeclaration(node) {
				for (const variable of sourceCode.getDeclaredVariables(node)) {
					if (isGoodName(variable.name)) {
						continue;
					}
					const id = variable.identifiers[0];

					// Report declaration.
					if (!(ignoreImports && equalsToOriginalName(id))) {
						report(id);
					}

					/*
					 * For backward compatibility, report references as well.
					 * It looks unnecessary because declarations are reported.
					 */
					for (const reference of variable.references) {
						reportReferenceId(reference.identifier);
					}
				}
			},

			// Report camelcase in re-export -----------------------------------
			[[
				"ExportAllDeclaration > Identifier.exported",
				"ExportSpecifier > Identifier.exported",
			]](node) {
				if (isGoodName(node.name)) {
					return;
				}
				report(node);
			},

			// Report camelcase in labels --------------------------------------
			[[
				"LabeledStatement > Identifier.label",

				/*
				 * For backward compatibility, report references as well.
				 * It looks unnecessary because declarations are reported.
				 */
				"BreakStatement > Identifier.label",
				"ContinueStatement > Identifier.label",
			]](node) {
				if (isGoodName(node.name)) {
					return;
				}
				report(node);
			},
		};
	},
};
