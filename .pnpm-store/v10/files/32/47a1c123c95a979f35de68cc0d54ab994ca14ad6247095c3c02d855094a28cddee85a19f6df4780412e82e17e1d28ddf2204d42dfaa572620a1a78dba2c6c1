/**
 * @fileoverview Rule to disallow unused labels.
 * @author Toru Nagashima
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
			description: "Disallow unused labels",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-unused-labels",
		},

		schema: [],

		fixable: "code",

		messages: {
			unused: "'{{name}}:' is defined but never used.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;
		let scopeInfo = null;

		/**
		 * Adds a scope info to the stack.
		 * @param {ASTNode} node A node to add. This is a LabeledStatement.
		 * @returns {void}
		 */
		function enterLabeledScope(node) {
			scopeInfo = {
				label: node.label.name,
				used: false,
				upper: scopeInfo,
			};
		}

		/**
		 * Checks if a `LabeledStatement` node is fixable.
		 * For a node to be fixable, there must be no comments between the label and the body.
		 * Furthermore, is must be possible to remove the label without turning the body statement into a
		 * directive after other fixes are applied.
		 * @param {ASTNode} node The node to evaluate.
		 * @returns {boolean} Whether or not the node is fixable.
		 */
		function isFixable(node) {
			/*
			 * Only perform a fix if there are no comments between the label and the body. This will be the case
			 * when there is exactly one token/comment (the ":") between the label and the body.
			 */
			if (
				sourceCode.getTokenAfter(node.label, {
					includeComments: true,
				}) !==
				sourceCode.getTokenBefore(node.body, { includeComments: true })
			) {
				return false;
			}

			// Looking for the node's deepest ancestor which is not a `LabeledStatement`.
			let ancestor = node.parent;

			while (ancestor.type === "LabeledStatement") {
				ancestor = ancestor.parent;
			}

			if (
				ancestor.type === "Program" ||
				(ancestor.type === "BlockStatement" &&
					astUtils.isFunction(ancestor.parent))
			) {
				const { body } = node;

				if (
					body.type === "ExpressionStatement" &&
					((body.expression.type === "Literal" &&
						typeof body.expression.value === "string") ||
						astUtils.isStaticTemplateLiteral(body.expression))
				) {
					return false; // potential directive
				}
			}
			return true;
		}

		/**
		 * Removes the top of the stack.
		 * At the same time, this reports the label if it's never used.
		 * @param {ASTNode} node A node to report. This is a LabeledStatement.
		 * @returns {void}
		 */
		function exitLabeledScope(node) {
			if (!scopeInfo.used) {
				context.report({
					node: node.label,
					messageId: "unused",
					data: node.label,
					fix: isFixable(node)
						? fixer =>
								fixer.removeRange([
									node.range[0],
									node.body.range[0],
								])
						: null,
				});
			}

			scopeInfo = scopeInfo.upper;
		}

		/**
		 * Marks the label of a given node as used.
		 * @param {ASTNode} node A node to mark. This is a BreakStatement or
		 *      ContinueStatement.
		 * @returns {void}
		 */
		function markAsUsed(node) {
			if (!node.label) {
				return;
			}

			const label = node.label.name;
			let info = scopeInfo;

			while (info) {
				if (info.label === label) {
					info.used = true;
					break;
				}
				info = info.upper;
			}
		}

		return {
			LabeledStatement: enterLabeledScope,
			"LabeledStatement:exit": exitLabeledScope,
			BreakStatement: markAsUsed,
			ContinueStatement: markAsUsed,
		};
	},
};
