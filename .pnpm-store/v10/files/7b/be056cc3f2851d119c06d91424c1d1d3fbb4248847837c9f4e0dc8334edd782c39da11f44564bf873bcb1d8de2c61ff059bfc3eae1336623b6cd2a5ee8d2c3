/**
 * @fileoverview Rule that warns when identifier names are shorter or longer
 * than the values provided in configuration.
 * @author Burak Yigit Kaya aka BYK
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { getGraphemeCount } = require("../shared/string-utils");
const {
	getModuleExportName,
	isImportAttributeKey,
} = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [
			{
				exceptionPatterns: [],
				exceptions: [],
				min: 2,
				properties: "always",
			},
		],

		docs: {
			description: "Enforce minimum and maximum identifier lengths",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/id-length",
		},

		schema: [
			{
				type: "object",
				properties: {
					min: {
						type: "integer",
					},
					max: {
						type: "integer",
					},
					exceptions: {
						type: "array",
						uniqueItems: true,
						items: {
							type: "string",
						},
					},
					exceptionPatterns: {
						type: "array",
						uniqueItems: true,
						items: {
							type: "string",
						},
					},
					properties: {
						enum: ["always", "never"],
					},
				},
				additionalProperties: false,
			},
		],
		messages: {
			tooShort: "Identifier name '{{name}}' is too short (< {{min}}).",
			tooShortPrivate:
				"Identifier name '#{{name}}' is too short (< {{min}}).",
			tooLong: "Identifier name '{{name}}' is too long (> {{max}}).",
			tooLongPrivate:
				"Identifier name #'{{name}}' is too long (> {{max}}).",
		},
	},

	create(context) {
		const [options] = context.options;
		const { max: maxLength = Infinity, min: minLength } = options;
		const properties = options.properties !== "never";
		const exceptions = new Set(options.exceptions);
		const exceptionPatterns = options.exceptionPatterns.map(
			pattern => new RegExp(pattern, "u"),
		);
		const reportedNodes = new Set();

		/**
		 * Checks if a string matches the provided exception patterns
		 * @param {string} name The string to check.
		 * @returns {boolean} if the string is a match
		 * @private
		 */
		function matchesExceptionPattern(name) {
			return exceptionPatterns.some(pattern => pattern.test(name));
		}

		const SUPPORTED_EXPRESSIONS = {
			MemberExpression:
				properties &&
				function (parent) {
					return (
						!parent.computed &&
						// regular property assignment
						((parent.parent.left === parent &&
							parent.parent.type === "AssignmentExpression") ||
							// or the last identifier in an ObjectPattern destructuring
							(parent.parent.type === "Property" &&
								parent.parent.value === parent &&
								parent.parent.parent.type === "ObjectPattern" &&
								parent.parent.parent.parent.left ===
									parent.parent.parent))
					);
				},
			AssignmentPattern(parent, node) {
				return parent.left === node;
			},
			VariableDeclarator(parent, node) {
				return parent.id === node;
			},
			Property(parent, node) {
				if (parent.parent.type === "ObjectPattern") {
					const isKeyAndValueSame =
						parent.value.name === parent.key.name;

					return (
						(!isKeyAndValueSame && parent.value === node) ||
						(isKeyAndValueSame && parent.key === node && properties)
					);
				}
				return (
					properties &&
					!isImportAttributeKey(node) &&
					!parent.computed &&
					parent.key.name === node.name
				);
			},
			ImportSpecifier(parent, node) {
				return (
					parent.local === node &&
					getModuleExportName(parent.imported) !==
						getModuleExportName(parent.local)
				);
			},
			ImportDefaultSpecifier: true,
			ImportNamespaceSpecifier: true,
			RestElement: true,
			FunctionExpression: true,
			ArrowFunctionExpression: true,
			ClassDeclaration: true,
			FunctionDeclaration: true,
			MethodDefinition: true,
			PropertyDefinition: true,
			CatchClause: true,
			ArrayPattern: true,
		};

		return {
			[["Identifier", "PrivateIdentifier"]](node) {
				const name = node.name;
				const parent = node.parent;

				const nameLength = getGraphemeCount(name);

				const isShort = nameLength < minLength;
				const isLong = nameLength > maxLength;

				if (
					!(isShort || isLong) ||
					exceptions.has(name) ||
					matchesExceptionPattern(name)
				) {
					return; // Nothing to report
				}

				const isValidExpression = SUPPORTED_EXPRESSIONS[parent.type];

				/*
				 * We used the range instead of the node because it's possible
				 * for the same identifier to be represented by two different
				 * nodes, with the most clear example being shorthand properties:
				 * { foo }
				 * In this case, "foo" is represented by one node for the name
				 * and one for the value. The only way to know they are the same
				 * is to look at the range.
				 */
				if (
					isValidExpression &&
					!reportedNodes.has(node.range.toString()) &&
					(isValidExpression === true ||
						isValidExpression(parent, node))
				) {
					reportedNodes.add(node.range.toString());

					let messageId = isShort ? "tooShort" : "tooLong";

					if (node.type === "PrivateIdentifier") {
						messageId += "Private";
					}

					context.report({
						node,
						messageId,
						data: { name, min: minLength, max: maxLength },
					});
				}
			},
		};
	},
};
