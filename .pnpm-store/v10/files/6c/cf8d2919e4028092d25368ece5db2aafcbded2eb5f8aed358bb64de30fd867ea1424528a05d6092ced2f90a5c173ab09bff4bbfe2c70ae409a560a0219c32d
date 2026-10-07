/**
 * @fileoverview Rule to flag use of certain node types
 * @author Burak Yigit Kaya
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
			description: "Disallow specified syntax",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-restricted-syntax",
		},

		schema: {
			type: "array",
			items: {
				oneOf: [
					{
						type: "string",
					},
					{
						type: "object",
						properties: {
							selector: { type: "string" },
							message: { type: "string" },
						},
						required: ["selector"],
						additionalProperties: false,
					},
				],
			},
			uniqueItems: true,
			minItems: 0,
		},

		messages: {
			// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
			restrictedSyntax: "{{message}}",
		},
	},

	create(context) {
		return context.options.reduce((result, selectorOrObject) => {
			const isStringFormat = typeof selectorOrObject === "string";
			const hasCustomMessage =
				!isStringFormat && Boolean(selectorOrObject.message);

			const selector = isStringFormat
				? selectorOrObject
				: selectorOrObject.selector;
			const message = hasCustomMessage
				? selectorOrObject.message
				: `Using '${selector}' is not allowed.`;

			return Object.assign(result, {
				[selector](node) {
					context.report({
						node,
						messageId: "restrictedSyntax",
						data: { message },
					});
				},
			});
		}, {});
	},
};
