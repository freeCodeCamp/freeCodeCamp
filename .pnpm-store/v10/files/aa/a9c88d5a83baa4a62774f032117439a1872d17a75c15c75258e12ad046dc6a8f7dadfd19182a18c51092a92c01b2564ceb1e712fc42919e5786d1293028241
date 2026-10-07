/**
 * @fileoverview enforce `for` loop update clause moving the counter in the right direction.(for-direction)
 * @author Aladdin-ADD<hh_2013@foxmail.com>
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { getStaticValue } = require("@eslint-community/eslint-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description:
				"Enforce `for` loop update clause moving the counter in the right direction",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/for-direction",
		},

		fixable: null,
		schema: [],

		messages: {
			incorrectDirection:
				"The update clause in this loop moves the variable in the wrong direction.",
		},
	},

	create(context) {
		const { sourceCode } = context;

		/**
		 * report an error.
		 * @param {ASTNode} node the node to report.
		 * @returns {void}
		 */
		function report(node) {
			context.report({
				loc: {
					start: node.loc.start,
					end: sourceCode.getTokenBefore(node.body).loc.end,
				},
				messageId: "incorrectDirection",
			});
		}

		/**
		 * check the right side of the assignment
		 * @param {ASTNode} update UpdateExpression to check
		 * @param {number} dir expected direction that could either be turned around or invalidated
		 * @returns {number} return dir, the negated dir, or zero if the counter does not change or the direction is not clear
		 */
		function getRightDirection(update, dir) {
			const staticValue = getStaticValue(
				update.right,
				sourceCode.getScope(update),
			);

			if (
				staticValue &&
				["bigint", "boolean", "number"].includes(
					typeof staticValue.value,
				)
			) {
				const sign = Math.sign(Number(staticValue.value)) || 0; // convert NaN to 0

				return dir * sign;
			}
			return 0;
		}

		/**
		 * check UpdateExpression add/sub the counter
		 * @param {ASTNode} update UpdateExpression to check
		 * @param {string} counter variable name to check
		 * @returns {number} if add return 1, if sub return -1, if nochange, return 0
		 */
		function getUpdateDirection(update, counter) {
			if (
				update.argument.type === "Identifier" &&
				update.argument.name === counter
			) {
				if (update.operator === "++") {
					return 1;
				}
				if (update.operator === "--") {
					return -1;
				}
			}
			return 0;
		}

		/**
		 * check AssignmentExpression add/sub the counter
		 * @param {ASTNode} update AssignmentExpression to check
		 * @param {string} counter variable name to check
		 * @returns {number} if add return 1, if sub return -1, if nochange, return 0
		 */
		function getAssignmentDirection(update, counter) {
			if (update.left.name === counter) {
				if (update.operator === "+=") {
					return getRightDirection(update, 1);
				}
				if (update.operator === "-=") {
					return getRightDirection(update, -1);
				}
			}
			return 0;
		}

		return {
			ForStatement(node) {
				if (
					node.test &&
					node.test.type === "BinaryExpression" &&
					node.update
				) {
					for (const counterPosition of ["left", "right"]) {
						if (node.test[counterPosition].type !== "Identifier") {
							continue;
						}

						const counter = node.test[counterPosition].name;
						const operator = node.test.operator;
						const update = node.update;

						let wrongDirection;

						if (operator === "<" || operator === "<=") {
							wrongDirection =
								counterPosition === "left" ? -1 : 1;
						} else if (operator === ">" || operator === ">=") {
							wrongDirection =
								counterPosition === "left" ? 1 : -1;
						} else {
							return;
						}

						if (update.type === "UpdateExpression") {
							if (
								getUpdateDirection(update, counter) ===
								wrongDirection
							) {
								report(node);
							}
						} else if (
							update.type === "AssignmentExpression" &&
							getAssignmentDirection(update, counter) ===
								wrongDirection
						) {
							report(node);
						}
					}
				}
			},
		};
	},
};
