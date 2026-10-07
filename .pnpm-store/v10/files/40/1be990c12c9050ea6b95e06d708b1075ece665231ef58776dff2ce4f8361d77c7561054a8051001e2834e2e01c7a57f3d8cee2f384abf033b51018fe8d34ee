/**
 * @fileoverview Rule to disallow unnecessary computed property keys in object literals
 * @author Burak Yigit Kaya
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Determines whether the computed key syntax is unnecessarily used for the given node.
 * In particular, it determines whether removing the square brackets and using the content between them
 * directly as the key (e.g. ['foo'] -> 'foo') would produce valid syntax and preserve the same behavior.
 * Valid non-computed keys are only: identifiers, number literals and string literals.
 * Only literals can preserve the same behavior, with a few exceptions for specific node types:
 * Property
 *   - { ["__proto__"]: foo } defines a property named "__proto__"
 *     { "__proto__": foo } defines object's prototype
 * PropertyDefinition
 *   - class C { ["constructor"]; } defines an instance field named "constructor"
 *     class C { "constructor"; } produces a parsing error
 *   - class C { static ["constructor"]; } defines a static field named "constructor"
 *     class C { static "constructor"; } produces a parsing error
 *   - class C { static ["prototype"]; } produces a runtime error (doesn't break the whole script)
 *     class C { static "prototype"; } produces a parsing error (breaks the whole script)
 * MethodDefinition
 *   - class C { ["constructor"]() {} } defines a prototype method named "constructor"
 *     class C { "constructor"() {} } defines the constructor
 *   - class C { static ["prototype"]() {} } produces a runtime error (doesn't break the whole script)
 *     class C { static "prototype"() {} } produces a parsing error (breaks the whole script)
 * @param {ASTNode} node The node to check. It can be `Property`, `PropertyDefinition` or `MethodDefinition`.
 * @throws {Error} (Unreachable.)
 * @returns {void} `true` if the node has useless computed key.
 */
function hasUselessComputedKey(node) {
	if (!node.computed) {
		return false;
	}

	const { key } = node;

	if (key.type !== "Literal") {
		return false;
	}

	const { value } = key;

	if (typeof value !== "number" && typeof value !== "string") {
		return false;
	}

	switch (node.type) {
		case "Property":
			if (node.parent.type === "ObjectExpression") {
				return value !== "__proto__";
			}
			return true;

		case "PropertyDefinition":
			if (node.static) {
				return value !== "constructor" && value !== "prototype";
			}

			return value !== "constructor";

		case "MethodDefinition":
			if (node.static) {
				return value !== "prototype";
			}

			return value !== "constructor";

		/* c8 ignore next */
		default:
			throw new Error(`Unexpected node type: ${node.type}`);
	}
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [
			{
				enforceForClassMembers: true,
			},
		],

		docs: {
			description:
				"Disallow unnecessary computed property keys in objects and classes",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/no-useless-computed-key",
		},

		schema: [
			{
				type: "object",
				properties: {
					enforceForClassMembers: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],
		fixable: "code",

		messages: {
			unnecessarilyComputedProperty:
				"Unnecessarily computed property [{{property}}] found.",
		},
	},
	create(context) {
		const sourceCode = context.sourceCode;
		const [{ enforceForClassMembers }] = context.options;

		/**
		 * Reports a given node if it violated this rule.
		 * @param {ASTNode} node The node to check.
		 * @returns {void}
		 */
		function check(node) {
			if (hasUselessComputedKey(node)) {
				const { key } = node;

				context.report({
					node,
					messageId: "unnecessarilyComputedProperty",
					data: { property: sourceCode.getText(key) },
					fix(fixer) {
						const leftSquareBracket = sourceCode.getTokenBefore(
							key,
							astUtils.isOpeningBracketToken,
						);
						const rightSquareBracket = sourceCode.getTokenAfter(
							key,
							astUtils.isClosingBracketToken,
						);

						// If there are comments between the brackets and the property name, don't do a fix.
						if (
							sourceCode.commentsExistBetween(
								leftSquareBracket,
								rightSquareBracket,
							)
						) {
							return null;
						}

						const tokenBeforeLeftBracket =
							sourceCode.getTokenBefore(leftSquareBracket);

						// Insert a space before the key to avoid changing identifiers, e.g. ({ get[2]() {} }) to ({ get2() {} })
						const needsSpaceBeforeKey =
							tokenBeforeLeftBracket.range[1] ===
								leftSquareBracket.range[0] &&
							!astUtils.canTokensBeAdjacent(
								tokenBeforeLeftBracket,
								sourceCode.getFirstToken(key),
							);

						const replacementKey =
							(needsSpaceBeforeKey ? " " : "") + key.raw;

						return fixer.replaceTextRange(
							[
								leftSquareBracket.range[0],
								rightSquareBracket.range[1],
							],
							replacementKey,
						);
					},
				});
			}
		}

		/**
		 * A no-op function to act as placeholder for checking a node when the `enforceForClassMembers` option is `false`.
		 * @returns {void}
		 * @private
		 */
		function noop() {}

		return {
			Property: check,
			MethodDefinition: enforceForClassMembers ? check : noop,
			PropertyDefinition: enforceForClassMembers ? check : noop,
		};
	},
};
