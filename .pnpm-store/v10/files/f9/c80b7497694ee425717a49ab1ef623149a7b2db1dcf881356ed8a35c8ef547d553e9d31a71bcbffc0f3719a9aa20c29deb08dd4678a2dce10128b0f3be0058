/**
 * @fileoverview Enforce a maximum number of classes per file
 * @author James Garbutt <https://github.com/43081j>
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description: "Enforce a maximum number of classes per file",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/max-classes-per-file",
		},

		schema: [
			{
				oneOf: [
					{
						type: "integer",
						minimum: 1,
					},
					{
						type: "object",
						properties: {
							ignoreExpressions: {
								type: "boolean",
							},
							max: {
								type: "integer",
								minimum: 1,
							},
						},
						additionalProperties: false,
					},
				],
			},
		],

		messages: {
			maximumExceeded:
				"File has too many classes ({{ classCount }}). Maximum allowed is {{ max }}.",
		},
	},
	create(context) {
		const [option = {}] = context.options;
		const [ignoreExpressions, max] =
			typeof option === "number"
				? [false, option || 1]
				: [option.ignoreExpressions, option.max || 1];

		let classCount = 0;

		return {
			Program() {
				classCount = 0;
			},
			"Program:exit"(node) {
				if (classCount > max) {
					context.report({
						node,
						messageId: "maximumExceeded",
						data: {
							classCount,
							max,
						},
					});
				}
			},
			ClassDeclaration() {
				classCount++;
			},
			ClassExpression() {
				if (!ignoreExpressions) {
					classCount++;
				}
			},
		};
	},
};
