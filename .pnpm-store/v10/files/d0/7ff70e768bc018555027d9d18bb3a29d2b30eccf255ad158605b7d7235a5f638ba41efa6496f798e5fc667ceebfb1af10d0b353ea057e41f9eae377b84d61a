/**
 * @fileoverview Rule to flag use of console object
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

		defaultOptions: [{}],

		docs: {
			description: "Disallow the use of `console`",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-console",
		},

		schema: [
			{
				type: "object",
				properties: {
					allow: {
						type: "array",
						items: {
							type: "string",
						},
						minItems: 1,
						uniqueItems: true,
					},
				},
				additionalProperties: false,
			},
		],

		hasSuggestions: true,

		messages: {
			unexpected: "Unexpected console statement.",
			limited:
				"Unexpected console statement. Only these console methods are allowed: {{ allowed }}.",
			removeConsole: "Remove the console.{{ propertyName }}().",
			removeMethodCall: "Remove the console method call.",
		},
	},

	create(context) {
		const [{ allow: allowed = [] }] = context.options;
		const sourceCode = context.sourceCode;

		/**
		 * Checks whether the given reference is 'console' or not.
		 * @param {eslint-scope.Reference} reference The reference to check.
		 * @returns {boolean} `true` if the reference is 'console'.
		 */
		function isConsole(reference) {
			const id = reference.identifier;

			return id && id.name === "console";
		}

		/**
		 * Checks whether the property name of the given MemberExpression node
		 * is allowed by options or not.
		 * @param {ASTNode} node The MemberExpression node to check.
		 * @returns {boolean} `true` if the property name of the node is allowed.
		 */
		function isAllowed(node) {
			const propertyName = astUtils.getStaticPropertyName(node);

			return propertyName && allowed.includes(propertyName);
		}

		/**
		 * Checks whether the given reference is a member access which is not
		 * allowed by options or not.
		 * @param {eslint-scope.Reference} reference The reference to check.
		 * @returns {boolean} `true` if the reference is a member access which
		 *      is not allowed by options.
		 */
		function isMemberAccessExceptAllowed(reference) {
			const node = reference.identifier;
			const parent = node.parent;

			return (
				parent.type === "MemberExpression" &&
				parent.object === node &&
				!isAllowed(parent)
			);
		}

		/**
		 * Checks if removing the ExpressionStatement node will cause ASI to
		 * break.
		 * eg.
		 * foo()
		 * console.log();
		 * [1, 2, 3].forEach(a => doSomething(a))
		 *
		 * Removing the console.log(); statement should leave two statements, but
		 * here the two statements will become one because [ causes continuation after
		 * foo().
		 * @param {ASTNode} node The ExpressionStatement node to check.
		 * @returns {boolean} `true` if ASI will break after removing the ExpressionStatement
		 *      node.
		 */
		function maybeAsiHazard(node) {
			const SAFE_TOKENS_BEFORE = /^[:;{]$/u; // One of :;{
			const UNSAFE_CHARS_AFTER = /^[-[(/+`]/u; // One of [(/+-`

			const tokenBefore = sourceCode.getTokenBefore(node);
			const tokenAfter = sourceCode.getTokenAfter(node);

			return (
				Boolean(tokenAfter) &&
				UNSAFE_CHARS_AFTER.test(tokenAfter.value) &&
				tokenAfter.value !== "++" &&
				tokenAfter.value !== "--" &&
				Boolean(tokenBefore) &&
				!SAFE_TOKENS_BEFORE.test(tokenBefore.value)
			);
		}

		/**
		 * Checks if the MemberExpression node's parent.parent.parent is a
		 * Program, BlockStatement, StaticBlock, or SwitchCase node. This check
		 * is necessary to avoid providing a suggestion that might cause a syntax error.
		 *
		 * eg. if (a) console.log(b), removing console.log() here will lead to a
		 *     syntax error.
		 *     if (a) { console.log(b) }, removing console.log() here is acceptable.
		 *
		 * Additionally, it checks if the callee of the CallExpression node is
		 * the node itself.
		 *
		 * eg. foo(console.log), cannot provide a suggestion here.
		 * @param {ASTNode} node The MemberExpression node to check.
		 * @returns {boolean} `true` if a suggestion can be provided for a node.
		 */
		function canProvideSuggestions(node) {
			return (
				node.parent.type === "CallExpression" &&
				node.parent.callee === node &&
				node.parent.parent.type === "ExpressionStatement" &&
				astUtils.STATEMENT_LIST_PARENTS.has(
					node.parent.parent.parent.type,
				) &&
				!maybeAsiHazard(node.parent.parent)
			);
		}

		/**
		 * Reports the given reference as a violation.
		 * @param {eslint-scope.Reference} reference The reference to report.
		 * @returns {void}
		 */
		function report(reference) {
			const node = reference.identifier.parent;

			const suggest = [];

			if (canProvideSuggestions(node)) {
				const suggestion = {
					fix(fixer) {
						return fixer.remove(node.parent.parent);
					},
				};

				if (node.computed) {
					suggestion.messageId = "removeMethodCall";
				} else {
					suggestion.messageId = "removeConsole";
					suggestion.data = { propertyName: node.property.name };
				}
				suggest.push(suggestion);
			}
			context.report({
				node,
				loc: node.loc,
				messageId: allowed.length ? "limited" : "unexpected",
				data: { allowed: allowed.join(", ") },
				suggest,
			});
		}

		return {
			"Program:exit"(node) {
				const scope = sourceCode.getScope(node);
				const consoleVar = astUtils.getVariableByName(scope, "console");
				const shadowed = consoleVar && consoleVar.defs.length > 0;

				/*
				 * 'scope.through' includes all references to undefined
				 * variables. If the variable 'console' is not defined, it uses
				 * 'scope.through'.
				 */
				const references = consoleVar
					? consoleVar.references
					: scope.through.filter(isConsole);

				if (!shadowed) {
					references
						.filter(isMemberAccessExceptAllowed)
						.forEach(report);
				}
			},
		};
	},
};
