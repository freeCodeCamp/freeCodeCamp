/**
 * @fileoverview Rule to flag statements that use magic numbers (adapted from https://github.com/danielstjules/buddy.js)
 * @author Vincent Lemeunier
 */

"use strict";

const astUtils = require("./utils/ast-utils");

// Maximum array length by the ECMAScript Specification.
const MAX_ARRAY_LENGTH = 2 ** 32 - 1;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * Convert the value to bigint if it's a string. Otherwise return the value as-is.
 * @param {bigint|number|string} x The value to normalize.
 * @returns {bigint|number} The normalized value.
 */
function normalizeIgnoreValue(x) {
	if (typeof x === "string") {
		return BigInt(x.slice(0, -1));
	}
	return x;
}

/**
 * Checks if the node parent is a TypeScript enum member
 * @param {ASTNode} node The node to be validated
 * @returns {boolean} True if the node parent is a TypeScript enum member
 */
function isParentTSEnumDeclaration(node) {
	return node.parent.type === "TSEnumMember";
}

/**
 * Checks if the node is a valid TypeScript numeric literal type.
 * @param {ASTNode} node The node to be validated
 * @returns {boolean} True if the node is a TypeScript numeric literal type
 */
function isTSNumericLiteralType(node) {
	let ancestor = node.parent;

	// Go up while we're part of a type union
	while (ancestor.parent.type === "TSUnionType") {
		ancestor = ancestor.parent;
	}

	// Check if the final ancestor is in a type alias declaration
	return ancestor.parent.type === "TSTypeAliasDeclaration";
}

/**
 * Checks if the node parent is a readonly class property
 * @param {ASTNode} node The node to be validated
 * @returns {boolean} True if the node parent is a readonly class property
 */
function isParentTSReadonlyPropertyDefinition(node) {
	if (node.parent?.type === "PropertyDefinition" && node.parent.readonly) {
		return true;
	}

	return false;
}

/**
 * Checks if the node is part of a type indexed access (eg. Foo[4])
 * @param {ASTNode} node The node to be validated
 * @returns {boolean} True if the node is part of an indexed access
 */
function isAncestorTSIndexedAccessType(node) {
	let ancestor = node.parent;

	/*
	 * Go up another level while we're part of a type union (eg. 1 | 2) or
	 * intersection (eg. 1 & 2)
	 */
	while (
		ancestor.parent.type === "TSUnionType" ||
		ancestor.parent.type === "TSIntersectionType"
	) {
		ancestor = ancestor.parent;
	}

	return ancestor.parent.type === "TSIndexedAccessType";
}

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",
		dialects: ["typescript", "javascript"],
		language: "javascript",

		docs: {
			description: "Disallow magic numbers",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/no-magic-numbers",
		},

		schema: [
			{
				type: "object",
				properties: {
					detectObjects: {
						type: "boolean",
						default: false,
					},
					enforceConst: {
						type: "boolean",
						default: false,
					},
					ignore: {
						type: "array",
						items: {
							anyOf: [
								{ type: "number" },
								{
									type: "string",
									pattern: "^[+-]?(?:0|[1-9][0-9]*)n$",
								},
							],
						},
						uniqueItems: true,
					},
					ignoreArrayIndexes: {
						type: "boolean",
						default: false,
					},
					ignoreDefaultValues: {
						type: "boolean",
						default: false,
					},
					ignoreClassFieldInitialValues: {
						type: "boolean",
						default: false,
					},
					ignoreEnums: {
						type: "boolean",
						default: false,
					},
					ignoreNumericLiteralTypes: {
						type: "boolean",
						default: false,
					},
					ignoreReadonlyClassProperties: {
						type: "boolean",
						default: false,
					},
					ignoreTypeIndexes: {
						type: "boolean",
						default: false,
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			useConst: "Number constants declarations must use 'const'.",
			noMagic: "No magic number: {{raw}}.",
		},
	},

	create(context) {
		const config = context.options[0] || {},
			detectObjects = !!config.detectObjects,
			enforceConst = !!config.enforceConst,
			ignore = new Set((config.ignore || []).map(normalizeIgnoreValue)),
			ignoreArrayIndexes = !!config.ignoreArrayIndexes,
			ignoreDefaultValues = !!config.ignoreDefaultValues,
			ignoreClassFieldInitialValues =
				!!config.ignoreClassFieldInitialValues,
			ignoreEnums = !!config.ignoreEnums,
			ignoreNumericLiteralTypes = !!config.ignoreNumericLiteralTypes,
			ignoreReadonlyClassProperties =
				!!config.ignoreReadonlyClassProperties,
			ignoreTypeIndexes = !!config.ignoreTypeIndexes;

		const okTypes = detectObjects
			? []
			: ["ObjectExpression", "Property", "AssignmentExpression"];

		/**
		 * Returns whether the rule is configured to ignore the given value
		 * @param {bigint|number} value The value to check
		 * @returns {boolean} true if the value is ignored
		 */
		function isIgnoredValue(value) {
			return ignore.has(value);
		}

		/**
		 * Returns whether the number is a default value assignment.
		 * @param {ASTNode} fullNumberNode `Literal` or `UnaryExpression` full number node
		 * @returns {boolean} true if the number is a default value
		 */
		function isDefaultValue(fullNumberNode) {
			const parent = fullNumberNode.parent;

			return (
				parent.type === "AssignmentPattern" &&
				parent.right === fullNumberNode
			);
		}

		/**
		 * Returns whether the number is the initial value of a class field.
		 * @param {ASTNode} fullNumberNode `Literal` or `UnaryExpression` full number node
		 * @returns {boolean} true if the number is the initial value of a class field.
		 */
		function isClassFieldInitialValue(fullNumberNode) {
			const parent = fullNumberNode.parent;

			return (
				parent.type === "PropertyDefinition" &&
				parent.value === fullNumberNode
			);
		}

		/**
		 * Returns whether the given node is used as a radix within parseInt() or Number.parseInt()
		 * @param {ASTNode} fullNumberNode `Literal` or `UnaryExpression` full number node
		 * @returns {boolean} true if the node is radix
		 */
		function isParseIntRadix(fullNumberNode) {
			const parent = fullNumberNode.parent;

			return (
				parent.type === "CallExpression" &&
				fullNumberNode === parent.arguments[1] &&
				(astUtils.isSpecificId(parent.callee, "parseInt") ||
					astUtils.isSpecificMemberAccess(
						parent.callee,
						"Number",
						"parseInt",
					))
			);
		}

		/**
		 * Returns whether the given node is a direct child of a JSX node.
		 * In particular, it aims to detect numbers used as prop values in JSX tags.
		 * Example: <input maxLength={10} />
		 * @param {ASTNode} fullNumberNode `Literal` or `UnaryExpression` full number node
		 * @returns {boolean} true if the node is a JSX number
		 */
		function isJSXNumber(fullNumberNode) {
			return fullNumberNode.parent.type.indexOf("JSX") === 0;
		}

		/**
		 * Returns whether the given node is used as an array index.
		 * Value must coerce to a valid array index name: "0", "1", "2" ... "4294967294".
		 *
		 * All other values, like "-1", "2.5", or "4294967295", are just "normal" object properties,
		 * which can be created and accessed on an array in addition to the array index properties,
		 * but they don't affect array's length and are not considered by methods such as .map(), .forEach() etc.
		 *
		 * The maximum array length by the specification is 2 ** 32 - 1 = 4294967295,
		 * thus the maximum valid index is 2 ** 32 - 2 = 4294967294.
		 *
		 * All notations are allowed, as long as the value coerces to one of "0", "1", "2" ... "4294967294".
		 *
		 * Valid examples:
		 * a[0], a[1], a[1.2e1], a[0xAB], a[0n], a[1n]
		 * a[-0] (same as a[0] because -0 coerces to "0")
		 * a[-0n] (-0n evaluates to 0n)
		 *
		 * Invalid examples:
		 * a[-1], a[-0xAB], a[-1n], a[2.5], a[1.23e1], a[12e-1]
		 * a[4294967295] (above the max index, it's an access to a regular property a["4294967295"])
		 * a[999999999999999999999] (even if it wasn't above the max index, it would be a["1e+21"])
		 * a[1e310] (same as a["Infinity"])
		 * @param {ASTNode} fullNumberNode `Literal` or `UnaryExpression` full number node
		 * @param {bigint|number} value Value expressed by the fullNumberNode
		 * @returns {boolean} true if the node is a valid array index
		 */
		function isArrayIndex(fullNumberNode, value) {
			const parent = fullNumberNode.parent;

			return (
				parent.type === "MemberExpression" &&
				parent.property === fullNumberNode &&
				(Number.isInteger(value) || typeof value === "bigint") &&
				value >= 0 &&
				value < MAX_ARRAY_LENGTH
			);
		}

		return {
			Literal(node) {
				if (!astUtils.isNumericLiteral(node)) {
					return;
				}

				let fullNumberNode;
				let value;
				let raw;

				// Treat unary minus/plus as a part of the number
				if (
					node.parent.type === "UnaryExpression" &&
					["-", "+"].includes(node.parent.operator)
				) {
					fullNumberNode = node.parent;
					value =
						node.parent.operator === "-" ? -node.value : node.value;
					raw = `${node.parent.operator}${node.raw}`;
				} else {
					fullNumberNode = node;
					value = node.value;
					raw = node.raw;
				}

				const parent = fullNumberNode.parent;

				// Always allow radix arguments and JSX props
				if (
					isIgnoredValue(value) ||
					(ignoreDefaultValues && isDefaultValue(fullNumberNode)) ||
					(ignoreClassFieldInitialValues &&
						isClassFieldInitialValue(fullNumberNode)) ||
					(ignoreEnums &&
						isParentTSEnumDeclaration(fullNumberNode)) ||
					(ignoreNumericLiteralTypes &&
						isTSNumericLiteralType(fullNumberNode)) ||
					(ignoreTypeIndexes &&
						isAncestorTSIndexedAccessType(fullNumberNode)) ||
					(ignoreReadonlyClassProperties &&
						isParentTSReadonlyPropertyDefinition(fullNumberNode)) ||
					isParseIntRadix(fullNumberNode) ||
					isJSXNumber(fullNumberNode) ||
					(ignoreArrayIndexes && isArrayIndex(fullNumberNode, value))
				) {
					return;
				}

				if (parent.type === "VariableDeclarator") {
					if (enforceConst && parent.parent.kind !== "const") {
						context.report({
							node: fullNumberNode,
							messageId: "useConst",
						});
					}
				} else if (
					!okTypes.includes(parent.type) ||
					(parent.type === "AssignmentExpression" &&
						parent.left.type === "Identifier")
				) {
					context.report({
						node: fullNumberNode,
						messageId: "noMagic",
						data: {
							raw,
						},
					});
				}
			},
		};
	},
};
