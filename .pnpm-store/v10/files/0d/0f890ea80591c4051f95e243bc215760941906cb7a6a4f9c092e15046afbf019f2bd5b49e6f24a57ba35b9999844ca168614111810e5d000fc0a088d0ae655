/**
 * @fileoverview Specify the maximum number of statements allowed per line.
 * @author Kenneth Williams
 * @deprecated in ESLint v8.53.0
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
						name: "max-statements-per-line",
						url: "https://eslint.style/rules/max-statements-per-line",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description:
				"Enforce a maximum number of statements allowed per line",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/max-statements-per-line",
		},

		schema: [
			{
				type: "object",
				properties: {
					max: {
						type: "integer",
						minimum: 1,
						default: 1,
					},
				},
				additionalProperties: false,
			},
		],
		messages: {
			exceed: "This line has {{numberOfStatementsOnThisLine}} {{statements}}. Maximum allowed is {{maxStatementsPerLine}}.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode,
			options = context.options[0] || {},
			maxStatementsPerLine =
				typeof options.max !== "undefined" ? options.max : 1;

		let lastStatementLine = 0,
			numberOfStatementsOnThisLine = 0,
			firstExtraStatement;

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		const SINGLE_CHILD_ALLOWED =
			/^(?:(?:DoWhile|For|ForIn|ForOf|If|Labeled|While)Statement|Export(?:Default|Named)Declaration)$/u;

		/**
		 * Reports with the first extra statement, and clears it.
		 * @returns {void}
		 */
		function reportFirstExtraStatementAndClear() {
			if (firstExtraStatement) {
				context.report({
					node: firstExtraStatement,
					messageId: "exceed",
					data: {
						numberOfStatementsOnThisLine,
						maxStatementsPerLine,
						statements:
							numberOfStatementsOnThisLine === 1
								? "statement"
								: "statements",
					},
				});
			}
			firstExtraStatement = null;
		}

		/**
		 * Gets the actual last token of a given node.
		 * @param {ASTNode} node A node to get. This is a node except EmptyStatement.
		 * @returns {Token} The actual last token.
		 */
		function getActualLastToken(node) {
			return sourceCode.getLastToken(node, astUtils.isNotSemicolonToken);
		}

		/**
		 * Addresses a given node.
		 * It updates the state of this rule, then reports the node if the node violated this rule.
		 * @param {ASTNode} node A node to check.
		 * @returns {void}
		 */
		function enterStatement(node) {
			const line = node.loc.start.line;

			/*
			 * Skip to allow non-block statements if this is direct child of control statements.
			 * `if (a) foo();` is counted as 1.
			 * But `if (a) foo(); else foo();` should be counted as 2.
			 */
			if (
				SINGLE_CHILD_ALLOWED.test(node.parent.type) &&
				node.parent.alternate !== node
			) {
				return;
			}

			// Update state.
			if (line === lastStatementLine) {
				numberOfStatementsOnThisLine += 1;
			} else {
				reportFirstExtraStatementAndClear();
				numberOfStatementsOnThisLine = 1;
				lastStatementLine = line;
			}

			// Reports if the node violated this rule.
			if (numberOfStatementsOnThisLine === maxStatementsPerLine + 1) {
				firstExtraStatement = firstExtraStatement || node;
			}
		}

		/**
		 * Updates the state of this rule with the end line of leaving node to check with the next statement.
		 * @param {ASTNode} node A node to check.
		 * @returns {void}
		 */
		function leaveStatement(node) {
			const line = getActualLastToken(node).loc.end.line;

			// Update state.
			if (line !== lastStatementLine) {
				reportFirstExtraStatementAndClear();
				numberOfStatementsOnThisLine = 1;
				lastStatementLine = line;
			}
		}

		//--------------------------------------------------------------------------
		// Public API
		//--------------------------------------------------------------------------

		return {
			BreakStatement: enterStatement,
			ClassDeclaration: enterStatement,
			ContinueStatement: enterStatement,
			DebuggerStatement: enterStatement,
			DoWhileStatement: enterStatement,
			ExpressionStatement: enterStatement,
			ForInStatement: enterStatement,
			ForOfStatement: enterStatement,
			ForStatement: enterStatement,
			FunctionDeclaration: enterStatement,
			IfStatement: enterStatement,
			ImportDeclaration: enterStatement,
			LabeledStatement: enterStatement,
			ReturnStatement: enterStatement,
			SwitchStatement: enterStatement,
			ThrowStatement: enterStatement,
			TryStatement: enterStatement,
			VariableDeclaration: enterStatement,
			WhileStatement: enterStatement,
			WithStatement: enterStatement,
			ExportNamedDeclaration: enterStatement,
			ExportDefaultDeclaration: enterStatement,
			ExportAllDeclaration: enterStatement,

			"BreakStatement:exit": leaveStatement,
			"ClassDeclaration:exit": leaveStatement,
			"ContinueStatement:exit": leaveStatement,
			"DebuggerStatement:exit": leaveStatement,
			"DoWhileStatement:exit": leaveStatement,
			"ExpressionStatement:exit": leaveStatement,
			"ForInStatement:exit": leaveStatement,
			"ForOfStatement:exit": leaveStatement,
			"ForStatement:exit": leaveStatement,
			"FunctionDeclaration:exit": leaveStatement,
			"IfStatement:exit": leaveStatement,
			"ImportDeclaration:exit": leaveStatement,
			"LabeledStatement:exit": leaveStatement,
			"ReturnStatement:exit": leaveStatement,
			"SwitchStatement:exit": leaveStatement,
			"ThrowStatement:exit": leaveStatement,
			"TryStatement:exit": leaveStatement,
			"VariableDeclaration:exit": leaveStatement,
			"WhileStatement:exit": leaveStatement,
			"WithStatement:exit": leaveStatement,
			"ExportNamedDeclaration:exit": leaveStatement,
			"ExportDefaultDeclaration:exit": leaveStatement,
			"ExportAllDeclaration:exit": leaveStatement,
			"Program:exit": reportFirstExtraStatementAndClear,
		};
	},
};
