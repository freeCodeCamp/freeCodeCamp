/**
 * @fileoverview Restrict usage of specified globals.
 * @author Benoît Zugmeyer
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const TYPE_NODES = new Set([
	"TSTypeReference",
	"TSInterfaceHeritage",
	"TSClassImplements",
	"TSTypeQuery",
	"TSQualifiedName",
]);

const GLOBAL_OBJECTS = new Set(["globalThis", "self", "window"]);

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const arrayOfGlobals = {
	type: "array",
	items: {
		oneOf: [
			{
				type: "string",
			},
			{
				type: "object",
				properties: {
					name: { type: "string" },
					message: { type: "string" },
				},
				required: ["name"],
				additionalProperties: false,
			},
		],
	},
	uniqueItems: true,
	minItems: 0,
};

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		dialects: ["javascript", "typescript"],
		language: "javascript",
		type: "suggestion",

		docs: {
			description: "Disallow specified global variables",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-restricted-globals",
		},

		schema: {
			anyOf: [
				arrayOfGlobals,
				{
					type: "array",
					items: [
						{
							type: "object",
							properties: {
								globals: arrayOfGlobals,
								checkGlobalObject: {
									type: "boolean",
								},
								globalObjects: {
									type: "array",
									items: {
										type: "string",
									},
									uniqueItems: true,
								},
							},
							required: ["globals"],
							additionalProperties: false,
						},
					],
					additionalItems: false,
				},
			],
		},

		messages: {
			defaultMessage: "Unexpected use of '{{name}}'.",
			// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
			customMessage: "Unexpected use of '{{name}}'. {{customMessage}}",
		},
	},

	create(context) {
		const { sourceCode, options } = context;

		const isGlobalsObject =
			typeof options[0] === "object" &&
			Object.hasOwn(options[0], "globals");

		const restrictedGlobals = isGlobalsObject
			? options[0].globals
			: options;
		const checkGlobalObject = isGlobalsObject
			? options[0].checkGlobalObject
			: false;
		const userGlobalObjects = isGlobalsObject
			? options[0].globalObjects || []
			: [];

		const globalObjects = new Set([
			...GLOBAL_OBJECTS,
			...userGlobalObjects,
		]);

		// If no globals are restricted, we don't need to do anything
		if (restrictedGlobals.length === 0) {
			return {};
		}

		const restrictedGlobalMessages = restrictedGlobals.reduce(
			(memo, option) => {
				if (typeof option === "string") {
					memo[option] = null;
				} else {
					memo[option.name] = option.message;
				}

				return memo;
			},
			{},
		);

		/**
		 * Report a variable to be used as a restricted global.
		 * @param {Reference} reference the variable reference
		 * @returns {void}
		 * @private
		 */
		function reportReference(reference) {
			const name = reference.identifier.name,
				customMessage = restrictedGlobalMessages[name],
				messageId = customMessage ? "customMessage" : "defaultMessage";

			context.report({
				node: reference.identifier,
				messageId,
				data: {
					name,
					customMessage,
				},
			});
		}

		/**
		 * Check if the given name is a restricted global name.
		 * @param {string} name name of a variable
		 * @returns {boolean} whether the variable is a restricted global or not
		 * @private
		 */
		function isRestricted(name) {
			return Object.hasOwn(restrictedGlobalMessages, name);
		}

		/**
		 * Check if the given reference occurs within a TypeScript type context.
		 * @param {Reference} reference The variable reference to check.
		 * @returns {boolean} Whether the reference is in a type context.
		 * @private
		 */
		function isInTypeContext(reference) {
			const parent = reference.identifier.parent;

			return TYPE_NODES.has(parent.type);
		}

		return {
			Program(node) {
				const scope = sourceCode.getScope(node);

				// Report variables declared elsewhere (ex: variables defined as "global" by eslint)
				scope.variables.forEach(variable => {
					if (!variable.defs.length && isRestricted(variable.name)) {
						variable.references.forEach(reference => {
							if (!isInTypeContext(reference)) {
								reportReference(reference);
							}
						});
					}
				});

				// Report variables not declared at all
				scope.through.forEach(reference => {
					if (
						isRestricted(reference.identifier.name) &&
						!isInTypeContext(reference)
					) {
						reportReference(reference);
					}
				});
			},

			"Program:exit"(node) {
				if (!checkGlobalObject) {
					return;
				}

				const globalScope = sourceCode.getScope(node);
				globalObjects.forEach(globalObjectName => {
					const variable = astUtils.getVariableByName(
						globalScope,
						globalObjectName,
					);

					if (!variable) {
						return;
					}

					variable.references.forEach(reference => {
						const identifier = reference.identifier;
						let parent = identifier.parent;

						// To detect code like `window.window.Promise`.
						while (
							astUtils.isSpecificMemberAccess(
								parent,
								null,
								globalObjectName,
							)
						) {
							parent = parent.parent;
						}

						const propertyName =
							astUtils.getStaticPropertyName(parent);
						if (propertyName && isRestricted(propertyName)) {
							const customMessage =
								restrictedGlobalMessages[propertyName];
							const messageId = customMessage
								? "customMessage"
								: "defaultMessage";

							context.report({
								node: parent.property,
								messageId,
								data: {
									name: propertyName,
									customMessage,
								},
							});
						}
					});
				});
			},
		};
	},
};
