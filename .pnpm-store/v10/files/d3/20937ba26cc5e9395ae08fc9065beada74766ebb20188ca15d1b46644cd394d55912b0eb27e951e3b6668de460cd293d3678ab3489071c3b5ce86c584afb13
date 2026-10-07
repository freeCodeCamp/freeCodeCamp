/**
 * @fileoverview Rule to flag comparisons to the value NaN
 * @author James Allardice
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
 * Determines if the given node is a NaN `Identifier` node.
 * @param {ASTNode|null} node The node to check.
 * @returns {boolean} `true` if the node is 'NaN' identifier.
 */
function isNaNIdentifier(node) {
	if (!node) {
		return false;
	}

	const nodeToCheck =
		node.type === "SequenceExpression" ? node.expressions.at(-1) : node;

	return (
		astUtils.isSpecificId(nodeToCheck, "NaN") ||
		astUtils.isSpecificMemberAccess(nodeToCheck, "Number", "NaN")
	);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		hasSuggestions: true,
		type: "problem",

		docs: {
			description: "Require calls to `isNaN()` when checking for `NaN`",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/use-isnan",
		},

		schema: [
			{
				type: "object",
				properties: {
					enforceForSwitchCase: {
						type: "boolean",
					},
					enforceForIndexOf: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		defaultOptions: [
			{
				enforceForIndexOf: false,
				enforceForSwitchCase: true,
			},
		],

		messages: {
			comparisonWithNaN: "Use the isNaN function to compare with NaN.",
			switchNaN:
				"'switch(NaN)' can never match a case clause. Use Number.isNaN instead of the switch.",
			caseNaN:
				"'case NaN' can never match. Use Number.isNaN before the switch.",
			indexOfNaN:
				"Array prototype method '{{ methodName }}' cannot find NaN.",
			replaceWithIsNaN: "Replace with Number.isNaN.",
			replaceWithCastingAndIsNaN:
				"Replace with Number.isNaN and cast to a Number.",
			replaceWithFindIndex:
				"Replace with Array.prototype.{{ methodName }}.",
		},
	},

	create(context) {
		const [{ enforceForIndexOf, enforceForSwitchCase }] = context.options;
		const sourceCode = context.sourceCode;

		const fixableOperators = new Set(["==", "===", "!=", "!=="]);
		const castableOperators = new Set(["==", "!="]);

		/**
		 * Get a fixer for a binary expression that compares to NaN.
		 * @param  {ASTNode} node The node to fix.
		 * @param {function(string): string} wrapValue A function that wraps the compared value with a fix.
		 * @returns {function(Fixer): Fix} The fixer function.
		 */
		function getBinaryExpressionFixer(node, wrapValue) {
			return fixer => {
				const comparedValue = isNaNIdentifier(node.left)
					? node.right
					: node.left;
				const shouldWrap = comparedValue.type === "SequenceExpression";
				const shouldNegate = node.operator[0] === "!";

				const negation = shouldNegate ? "!" : "";
				let comparedValueText = sourceCode.getText(comparedValue);

				if (shouldWrap) {
					comparedValueText = `(${comparedValueText})`;
				}

				const fixedValue = wrapValue(comparedValueText);

				return fixer.replaceText(node, `${negation}${fixedValue}`);
			};
		}

		/**
		 * Checks the given `BinaryExpression` node for `foo === NaN` and other comparisons.
		 * @param {ASTNode} node The node to check.
		 * @returns {void}
		 */
		function checkBinaryExpression(node) {
			if (
				/^(?:[<>]|[!=]=)=?$/u.test(node.operator) &&
				(isNaNIdentifier(node.left) || isNaNIdentifier(node.right))
			) {
				const suggestedFixes = [];
				const NaNNode = isNaNIdentifier(node.left)
					? node.left
					: node.right;

				const isSequenceExpression =
					NaNNode.type === "SequenceExpression";
				const isSuggestable =
					fixableOperators.has(node.operator) &&
					!isSequenceExpression;
				const isCastable = castableOperators.has(node.operator);

				if (isSuggestable) {
					suggestedFixes.push({
						messageId: "replaceWithIsNaN",
						fix: getBinaryExpressionFixer(
							node,
							value => `Number.isNaN(${value})`,
						),
					});

					if (isCastable) {
						suggestedFixes.push({
							messageId: "replaceWithCastingAndIsNaN",
							fix: getBinaryExpressionFixer(
								node,
								value => `Number.isNaN(Number(${value}))`,
							),
						});
					}
				}

				context.report({
					node,
					messageId: "comparisonWithNaN",
					suggest: suggestedFixes,
				});
			}
		}

		/**
		 * Checks the discriminant and all case clauses of the given `SwitchStatement` node for `switch(NaN)` and `case NaN:`
		 * @param {ASTNode} node The node to check.
		 * @returns {void}
		 */
		function checkSwitchStatement(node) {
			if (isNaNIdentifier(node.discriminant)) {
				context.report({ node, messageId: "switchNaN" });
			}

			for (const switchCase of node.cases) {
				if (isNaNIdentifier(switchCase.test)) {
					context.report({ node: switchCase, messageId: "caseNaN" });
				}
			}
		}

		/**
		 * Checks the given `CallExpression` node for `.indexOf(NaN)` and `.lastIndexOf(NaN)`.
		 * @param {ASTNode} node The node to check.
		 * @returns {void}
		 */
		function checkCallExpression(node) {
			const callee = astUtils.skipChainExpression(node.callee);

			if (callee.type === "MemberExpression") {
				const methodName = astUtils.getStaticPropertyName(callee);

				if (
					(methodName === "indexOf" ||
						methodName === "lastIndexOf") &&
					node.arguments.length <= 2 &&
					isNaNIdentifier(node.arguments[0])
				) {
					/*
					 * To retain side effects, it's essential to address `NaN` beforehand, which
					 * is not possible with fixes like `arr.findIndex(Number.isNaN)`.
					 */
					const isSuggestable =
						node.arguments[0].type !== "SequenceExpression" &&
						!node.arguments[1];
					const suggestedFixes = [];

					if (isSuggestable) {
						const shouldWrap = callee.computed;
						const findIndexMethod =
							methodName === "indexOf"
								? "findIndex"
								: "findLastIndex";
						const propertyName = shouldWrap
							? `"${findIndexMethod}"`
							: findIndexMethod;

						suggestedFixes.push({
							messageId: "replaceWithFindIndex",
							data: { methodName: findIndexMethod },
							fix: fixer => [
								fixer.replaceText(
									callee.property,
									propertyName,
								),
								fixer.replaceText(
									node.arguments[0],
									"Number.isNaN",
								),
							],
						});
					}

					context.report({
						node,
						messageId: "indexOfNaN",
						data: { methodName },
						suggest: suggestedFixes,
					});
				}
			}
		}

		const listeners = {
			BinaryExpression: checkBinaryExpression,
		};

		if (enforceForSwitchCase) {
			listeners.SwitchStatement = checkSwitchStatement;
		}

		if (enforceForIndexOf) {
			listeners.CallExpression = checkCallExpression;
		}

		return listeners;
	},
};
