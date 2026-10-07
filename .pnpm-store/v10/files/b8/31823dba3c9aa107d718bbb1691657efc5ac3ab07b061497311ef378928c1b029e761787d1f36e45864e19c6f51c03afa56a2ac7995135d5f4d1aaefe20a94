/**
 * @fileoverview Rule to flag blocks with no reason to exist
 * @author Brandon Mills
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description: "Disallow unnecessary nested blocks",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-lone-blocks",
		},

		schema: [],

		messages: {
			redundantBlock: "Block is redundant.",
			redundantNestedBlock: "Nested block is redundant.",
		},
	},

	create(context) {
		// A stack of lone blocks to be checked for block-level bindings
		const loneBlocks = [];
		let ruleDef;
		const sourceCode = context.sourceCode;

		/**
		 * Reports a node as invalid.
		 * @param {ASTNode} node The node to be reported.
		 * @returns {void}
		 */
		function report(node) {
			const messageId =
				node.parent.type === "BlockStatement" ||
				node.parent.type === "StaticBlock"
					? "redundantNestedBlock"
					: "redundantBlock";

			context.report({
				node,
				messageId,
			});
		}

		/**
		 * Checks for any occurrence of a BlockStatement in a place where lists of statements can appear
		 * @param {ASTNode} node The node to check
		 * @returns {boolean} True if the node is a lone block.
		 */
		function isLoneBlock(node) {
			return (
				node.parent.type === "BlockStatement" ||
				node.parent.type === "StaticBlock" ||
				node.parent.type === "Program" ||
				// Don't report blocks in switch cases if the block is the only statement of the case.
				(node.parent.type === "SwitchCase" &&
					!(
						node.parent.consequent[0] === node &&
						node.parent.consequent.length === 1
					))
			);
		}

		/**
		 * Checks the enclosing block of the current node for block-level bindings,
		 * and "marks it" as valid if any.
		 * @param {ASTNode} node The current node to check.
		 * @returns {void}
		 */
		function markLoneBlock(node) {
			if (loneBlocks.length === 0) {
				return;
			}

			const block = node.parent;

			if (loneBlocks.at(-1) === block) {
				loneBlocks.pop();
			}
		}

		// Default rule definition: report all lone blocks
		ruleDef = {
			BlockStatement(node) {
				if (isLoneBlock(node)) {
					report(node);
				}
			},
		};

		// ES6: report blocks without block-level bindings, or that's only child of another block
		if (context.languageOptions.ecmaVersion >= 2015) {
			ruleDef = {
				BlockStatement(node) {
					if (isLoneBlock(node)) {
						loneBlocks.push(node);
					}
				},
				"BlockStatement:exit"(node) {
					if (loneBlocks.length > 0 && loneBlocks.at(-1) === node) {
						loneBlocks.pop();
						report(node);
					} else if (
						(node.parent.type === "BlockStatement" ||
							node.parent.type === "StaticBlock") &&
						node.parent.body.length === 1
					) {
						report(node);
					}
				},
			};

			ruleDef.VariableDeclaration = function (node) {
				if (node.kind !== "var") {
					markLoneBlock(node);
				}
			};

			ruleDef.FunctionDeclaration = function (node) {
				if (sourceCode.getScope(node).isStrict) {
					markLoneBlock(node);
				}
			};

			ruleDef.ClassDeclaration = markLoneBlock;
		}

		return ruleDef;
	},
};
