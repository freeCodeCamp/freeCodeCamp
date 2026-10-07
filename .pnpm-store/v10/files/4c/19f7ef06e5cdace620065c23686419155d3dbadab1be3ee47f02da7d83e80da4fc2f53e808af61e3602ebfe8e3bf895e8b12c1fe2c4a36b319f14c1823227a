/**
 * @fileoverview Counts the cyclomatic complexity of each function of the script. See http://en.wikipedia.org/wiki/Cyclomatic_complexity.
 * Counts the number of if, conditional, for, while, try, switch/case,
 * @author Patrick Brosset
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");
const { upperCaseFirst } = require("../shared/string-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const THRESHOLD_DEFAULT = 20;

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [THRESHOLD_DEFAULT],

		docs: {
			description:
				"Enforce a maximum cyclomatic complexity allowed in a program",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/complexity",
		},

		schema: [
			{
				oneOf: [
					{
						type: "integer",
						minimum: 0,
					},
					{
						type: "object",
						properties: {
							maximum: {
								type: "integer",
								minimum: 0,
							},
							max: {
								type: "integer",
								minimum: 0,
							},
							variant: {
								enum: ["classic", "modified"],
							},
						},
						additionalProperties: false,
					},
				],
			},
		],

		messages: {
			complex:
				"{{name}} has a complexity of {{complexity}}. Maximum allowed is {{max}}.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;
		const option = context.options[0];
		let threshold = THRESHOLD_DEFAULT;
		let VARIANT = "classic";

		if (typeof option === "object") {
			if (
				Object.hasOwn(option, "maximum") ||
				Object.hasOwn(option, "max")
			) {
				threshold = option.maximum || option.max;
			}

			if (Object.hasOwn(option, "variant")) {
				VARIANT = option.variant;
			}
		} else if (typeof option === "number") {
			threshold = option;
		}

		const IS_MODIFIED_COMPLEXITY = VARIANT === "modified";

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		// Using a stack to store complexity per code path
		const complexities = [];

		/**
		 * Increase the complexity of the code path in context
		 * @returns {void}
		 * @private
		 */
		function increaseComplexity() {
			complexities[complexities.length - 1]++;
		}

		//--------------------------------------------------------------------------
		// Public API
		//--------------------------------------------------------------------------

		return {
			onCodePathStart() {
				// The initial complexity is 1, representing one execution path in the CodePath
				complexities.push(1);
			},

			// Each branching in the code adds 1 to the complexity
			CatchClause: increaseComplexity,
			ConditionalExpression: increaseComplexity,
			LogicalExpression: increaseComplexity,
			ForStatement: increaseComplexity,
			ForInStatement: increaseComplexity,
			ForOfStatement: increaseComplexity,
			IfStatement: increaseComplexity,
			WhileStatement: increaseComplexity,
			DoWhileStatement: increaseComplexity,
			AssignmentPattern: increaseComplexity,

			// Avoid `default`
			"SwitchCase[test]": () =>
				IS_MODIFIED_COMPLEXITY || increaseComplexity(),
			SwitchStatement: () =>
				IS_MODIFIED_COMPLEXITY && increaseComplexity(),

			// Logical assignment operators have short-circuiting behavior
			AssignmentExpression(node) {
				if (astUtils.isLogicalAssignmentOperator(node.operator)) {
					increaseComplexity();
				}
			},

			MemberExpression(node) {
				if (node.optional === true) {
					increaseComplexity();
				}
			},

			CallExpression(node) {
				if (node.optional === true) {
					increaseComplexity();
				}
			},

			onCodePathEnd(codePath, node) {
				const complexity = complexities.pop();

				/*
				 * This rule only evaluates complexity of functions, so "program" is excluded.
				 * Class field initializers and class static blocks are implicit functions. Therefore,
				 * they shouldn't contribute to the enclosing function's complexity, but their
				 * own complexity should be evaluated.
				 */
				if (
					codePath.origin !== "function" &&
					codePath.origin !== "class-field-initializer" &&
					codePath.origin !== "class-static-block"
				) {
					return;
				}

				if (complexity > threshold) {
					let name;
					let loc = node.loc;

					if (codePath.origin === "class-field-initializer") {
						name = "class field initializer";
					} else if (codePath.origin === "class-static-block") {
						name = "class static block";
						loc = sourceCode.getFirstToken(node).loc;
					} else {
						name = astUtils.getFunctionNameWithKind(node);
						loc = astUtils.getFunctionHeadLoc(node, sourceCode);
					}

					context.report({
						node,
						loc,
						messageId: "complex",
						data: {
							name: upperCaseFirst(name),
							complexity,
							max: threshold,
						},
					});
				}
			},
		};
	},
};
