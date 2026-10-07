/**
 * @fileoverview Rule to forbid or enforce dangling commas.
 * @author Ian Christian Myers
 * @deprecated in ESLint v8.53.0
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const DEFAULT_OPTIONS = Object.freeze({
	arrays: "never",
	objects: "never",
	imports: "never",
	exports: "never",
	functions: "never",
});

/**
 * Checks whether or not a trailing comma is allowed in a given node.
 * If the `lastItem` is `RestElement` or `RestProperty`, it disallows trailing commas.
 * @param {ASTNode} lastItem The node of the last element in the given node.
 * @returns {boolean} `true` if a trailing comma is allowed.
 */
function isTrailingCommaAllowed(lastItem) {
	return !(
		lastItem.type === "RestElement" ||
		lastItem.type === "RestProperty" ||
		lastItem.type === "ExperimentalRestProperty"
	);
}

/**
 * Normalize option value.
 * @param {string|Object|undefined} optionValue The 1st option value to normalize.
 * @param {number} ecmaVersion The normalized ECMAScript version.
 * @returns {Object} The normalized option value.
 */
function normalizeOptions(optionValue, ecmaVersion) {
	if (typeof optionValue === "string") {
		return {
			arrays: optionValue,
			objects: optionValue,
			imports: optionValue,
			exports: optionValue,
			functions: ecmaVersion < 2017 ? "ignore" : optionValue,
		};
	}
	if (typeof optionValue === "object" && optionValue !== null) {
		return {
			arrays: optionValue.arrays || DEFAULT_OPTIONS.arrays,
			objects: optionValue.objects || DEFAULT_OPTIONS.objects,
			imports: optionValue.imports || DEFAULT_OPTIONS.imports,
			exports: optionValue.exports || DEFAULT_OPTIONS.exports,
			functions: optionValue.functions || DEFAULT_OPTIONS.functions,
		};
	}

	return DEFAULT_OPTIONS;
}

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
						name: "comma-dangle",
						url: "https://eslint.style/rules/comma-dangle",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Require or disallow trailing commas",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/comma-dangle",
		},

		fixable: "code",

		schema: {
			definitions: {
				value: {
					enum: [
						"always-multiline",
						"always",
						"never",
						"only-multiline",
					],
				},
				valueWithIgnore: {
					enum: [
						"always-multiline",
						"always",
						"ignore",
						"never",
						"only-multiline",
					],
				},
			},
			type: "array",
			items: [
				{
					oneOf: [
						{
							$ref: "#/definitions/value",
						},
						{
							type: "object",
							properties: {
								arrays: {
									$ref: "#/definitions/valueWithIgnore",
								},
								objects: {
									$ref: "#/definitions/valueWithIgnore",
								},
								imports: {
									$ref: "#/definitions/valueWithIgnore",
								},
								exports: {
									$ref: "#/definitions/valueWithIgnore",
								},
								functions: {
									$ref: "#/definitions/valueWithIgnore",
								},
							},
							additionalProperties: false,
						},
					],
				},
			],
			additionalItems: false,
		},

		messages: {
			unexpected: "Unexpected trailing comma.",
			missing: "Missing trailing comma.",
		},
	},

	create(context) {
		const options = normalizeOptions(
			context.options[0],
			context.languageOptions.ecmaVersion,
		);

		const sourceCode = context.sourceCode;

		/**
		 * Gets the last item of the given node.
		 * @param {ASTNode} node The node to get.
		 * @returns {ASTNode|null} The last node or null.
		 */
		function getLastItem(node) {
			/**
			 * Returns the last element of an array
			 * @param {any[]} array The input array
			 * @returns {any} The last element
			 */
			function last(array) {
				return array.at(-1);
			}

			switch (node.type) {
				case "ObjectExpression":
				case "ObjectPattern":
					return last(node.properties);
				case "ArrayExpression":
				case "ArrayPattern":
					return last(node.elements);
				case "ImportDeclaration":
				case "ExportNamedDeclaration":
					return last(node.specifiers);
				case "FunctionDeclaration":
				case "FunctionExpression":
				case "ArrowFunctionExpression":
					return last(node.params);
				case "CallExpression":
				case "NewExpression":
					return last(node.arguments);
				default:
					return null;
			}
		}

		/**
		 * Gets the trailing comma token of the given node.
		 * If the trailing comma does not exist, this returns the token which is
		 * the insertion point of the trailing comma token.
		 * @param {ASTNode} node The node to get.
		 * @param {ASTNode} lastItem The last item of the node.
		 * @returns {Token} The trailing comma token or the insertion point.
		 */
		function getTrailingToken(node, lastItem) {
			switch (node.type) {
				case "ObjectExpression":
				case "ArrayExpression":
				case "CallExpression":
				case "NewExpression":
					return sourceCode.getLastToken(node, 1);
				default: {
					const nextToken = sourceCode.getTokenAfter(lastItem);

					if (astUtils.isCommaToken(nextToken)) {
						return nextToken;
					}
					return sourceCode.getLastToken(lastItem);
				}
			}
		}

		/**
		 * Checks whether or not a given node is multiline.
		 * This rule handles a given node as multiline when the closing parenthesis
		 * and the last element are not on the same line.
		 * @param {ASTNode} node A node to check.
		 * @returns {boolean} `true` if the node is multiline.
		 */
		function isMultiline(node) {
			const lastItem = getLastItem(node);

			if (!lastItem) {
				return false;
			}

			const penultimateToken = getTrailingToken(node, lastItem);
			const lastToken = sourceCode.getTokenAfter(penultimateToken);

			return lastToken.loc.end.line !== penultimateToken.loc.end.line;
		}

		/**
		 * Reports a trailing comma if it exists.
		 * @param {ASTNode} node A node to check. Its type is one of
		 *   ObjectExpression, ObjectPattern, ArrayExpression, ArrayPattern,
		 *   ImportDeclaration, and ExportNamedDeclaration.
		 * @returns {void}
		 */
		function forbidTrailingComma(node) {
			const lastItem = getLastItem(node);

			if (
				!lastItem ||
				(node.type === "ImportDeclaration" &&
					lastItem.type !== "ImportSpecifier")
			) {
				return;
			}

			const trailingToken = getTrailingToken(node, lastItem);

			if (astUtils.isCommaToken(trailingToken)) {
				context.report({
					node: lastItem,
					loc: trailingToken.loc,
					messageId: "unexpected",
					*fix(fixer) {
						yield fixer.remove(trailingToken);

						/*
						 * Extend the range of the fix to include surrounding tokens to ensure
						 * that the element after which the comma is removed stays _last_.
						 * This intentionally makes conflicts in fix ranges with rules that may be
						 * adding or removing elements in the same autofix pass.
						 * https://github.com/eslint/eslint/issues/15660
						 */
						yield fixer.insertTextBefore(
							sourceCode.getTokenBefore(trailingToken),
							"",
						);
						yield fixer.insertTextAfter(
							sourceCode.getTokenAfter(trailingToken),
							"",
						);
					},
				});
			}
		}

		/**
		 * Reports the last element of a given node if it does not have a trailing
		 * comma.
		 *
		 * If a given node is `ArrayPattern` which has `RestElement`, the trailing
		 * comma is disallowed, so report if it exists.
		 * @param {ASTNode} node A node to check. Its type is one of
		 *   ObjectExpression, ObjectPattern, ArrayExpression, ArrayPattern,
		 *   ImportDeclaration, and ExportNamedDeclaration.
		 * @returns {void}
		 */
		function forceTrailingComma(node) {
			const lastItem = getLastItem(node);

			if (
				!lastItem ||
				(node.type === "ImportDeclaration" &&
					lastItem.type !== "ImportSpecifier")
			) {
				return;
			}
			if (!isTrailingCommaAllowed(lastItem)) {
				forbidTrailingComma(node);
				return;
			}

			const trailingToken = getTrailingToken(node, lastItem);

			if (trailingToken.value !== ",") {
				context.report({
					node: lastItem,
					loc: {
						start: trailingToken.loc.end,
						end: astUtils.getNextLocation(
							sourceCode,
							trailingToken.loc.end,
						),
					},
					messageId: "missing",
					*fix(fixer) {
						yield fixer.insertTextAfter(trailingToken, ",");

						/*
						 * Extend the range of the fix to include surrounding tokens to ensure
						 * that the element after which the comma is inserted stays _last_.
						 * This intentionally makes conflicts in fix ranges with rules that may be
						 * adding or removing elements in the same autofix pass.
						 * https://github.com/eslint/eslint/issues/15660
						 */
						yield fixer.insertTextBefore(trailingToken, "");
						yield fixer.insertTextAfter(
							sourceCode.getTokenAfter(trailingToken),
							"",
						);
					},
				});
			}
		}

		/**
		 * If a given node is multiline, reports the last element of a given node
		 * when it does not have a trailing comma.
		 * Otherwise, reports a trailing comma if it exists.
		 * @param {ASTNode} node A node to check. Its type is one of
		 *   ObjectExpression, ObjectPattern, ArrayExpression, ArrayPattern,
		 *   ImportDeclaration, and ExportNamedDeclaration.
		 * @returns {void}
		 */
		function forceTrailingCommaIfMultiline(node) {
			if (isMultiline(node)) {
				forceTrailingComma(node);
			} else {
				forbidTrailingComma(node);
			}
		}

		/**
		 * Only if a given node is not multiline, reports the last element of a given node
		 * when it does not have a trailing comma.
		 * Otherwise, reports a trailing comma if it exists.
		 * @param {ASTNode} node A node to check. Its type is one of
		 *   ObjectExpression, ObjectPattern, ArrayExpression, ArrayPattern,
		 *   ImportDeclaration, and ExportNamedDeclaration.
		 * @returns {void}
		 */
		function allowTrailingCommaIfMultiline(node) {
			if (!isMultiline(node)) {
				forbidTrailingComma(node);
			}
		}

		const predicate = {
			always: forceTrailingComma,
			"always-multiline": forceTrailingCommaIfMultiline,
			"only-multiline": allowTrailingCommaIfMultiline,
			never: forbidTrailingComma,
			ignore() {},
		};

		return {
			ObjectExpression: predicate[options.objects],
			ObjectPattern: predicate[options.objects],

			ArrayExpression: predicate[options.arrays],
			ArrayPattern: predicate[options.arrays],

			ImportDeclaration: predicate[options.imports],

			ExportNamedDeclaration: predicate[options.exports],

			FunctionDeclaration: predicate[options.functions],
			FunctionExpression: predicate[options.functions],
			ArrowFunctionExpression: predicate[options.functions],
			CallExpression: predicate[options.functions],
			NewExpression: predicate[options.functions],
		};
	},
};
