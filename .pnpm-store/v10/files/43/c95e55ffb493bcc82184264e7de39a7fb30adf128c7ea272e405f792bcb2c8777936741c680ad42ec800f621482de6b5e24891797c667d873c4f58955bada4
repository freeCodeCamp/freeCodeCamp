/**
 * @fileoverview A rule to disallow `this` keywords in contexts where the value of `this` is `undefined`.
 * @author Toru Nagashima
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
 * Determines if the given code path is a code path with lexical `this` binding.
 * That is, if `this` within the code path refers to `this` of surrounding code path.
 * @param {CodePath} codePath Code path.
 * @param {ASTNode} node Node that started the code path.
 * @returns {boolean} `true` if it is a code path with lexical `this` binding.
 */
function isCodePathWithLexicalThis(codePath, node) {
	return (
		codePath.origin === "function" &&
		node.type === "ArrowFunctionExpression"
	);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		dialects: ["javascript", "typescript"],
		language: "javascript",
		type: "suggestion",

		defaultOptions: [{ capIsConstructor: true }],

		docs: {
			description:
				"Disallow use of `this` in contexts where the value of `this` is `undefined`",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-invalid-this",
		},

		schema: [
			{
				type: "object",
				properties: {
					capIsConstructor: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpectedThis: "Unexpected 'this'.",
		},
	},

	create(context) {
		const [{ capIsConstructor }] = context.options;
		const stack = [],
			sourceCode = context.sourceCode;

		/**
		 * Gets the current checking context.
		 *
		 * The return value has a flag that whether or not `this` keyword is valid.
		 * The flag is initialized when got at the first time.
		 * @returns {{valid: boolean}}
		 *   an object which has a flag that whether or not `this` keyword is valid.
		 */
		stack.getCurrent = function () {
			const current = this.at(-1);

			if (!current.init) {
				current.init = true;
				current.valid = !astUtils.isDefaultThisBinding(
					current.node,
					sourceCode,
					{ capIsConstructor },
				);
			}
			return current;
		};

		return {
			onCodePathStart(codePath, node) {
				if (isCodePathWithLexicalThis(codePath, node)) {
					return;
				}

				if (codePath.origin === "program") {
					const scope = sourceCode.getScope(node);
					const features =
						context.languageOptions.parserOptions.ecmaFeatures ||
						{};

					// `this` at the top level of scripts always refers to the global object
					stack.push({
						init: true,
						node,
						valid: !(
							node.sourceType === "module" ||
							(features.globalReturn &&
								scope.childScopes[0].isStrict)
						),
					});

					return;
				}

				/*
				 * `init: false` means that `valid` isn't determined yet.
				 * Most functions don't use `this`, and the calculation for `valid`
				 * is relatively costly, so we'll calculate it lazily when the first
				 * `this` within the function is traversed. A special case are non-strict
				 * functions, because `this` refers to the global object and therefore is
				 * always valid, so we can set `init: true` right away.
				 */
				stack.push({
					init: !sourceCode.getScope(node).isStrict,
					node,
					valid: true,
				});
			},

			onCodePathEnd(codePath, node) {
				if (isCodePathWithLexicalThis(codePath, node)) {
					return;
				}

				stack.pop();
			},

			"AccessorProperty > *.value"(node) {
				stack.push({
					init: true,
					node,
					valid: true,
				});
			},

			"AccessorProperty:exit"() {
				stack.pop();
			},

			// Reports if `this` of the current context is invalid.
			ThisExpression(node) {
				// Special case: skip `this` if it's the value of an AccessorProperty
				if (
					node.parent.type === "AccessorProperty" &&
					node.parent.value === node
				) {
					return;
				}

				const current = stack.getCurrent();

				if (current && !current.valid) {
					context.report({
						node,
						messageId: "unexpectedThis",
					});
				}
			},
		};
	},
};
