/**
 * @fileoverview Restrict usage of specified node imports.
 * @author Guy Ellis
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const ignore = require("ignore");

const arrayOfStringsOrObjects = {
	type: "array",
	items: {
		anyOf: [
			{ type: "string" },
			{
				type: "object",
				properties: {
					name: { type: "string" },
					message: {
						type: "string",
						minLength: 1,
					},
					importNames: {
						type: "array",
						items: {
							type: "string",
						},
					},
					allowImportNames: {
						type: "array",
						items: {
							type: "string",
						},
					},
					allowTypeImports: {
						type: "boolean",
						description:
							"Whether to allow type-only imports for a path.",
					},
				},
				additionalProperties: false,
				required: ["name"],
				not: { required: ["importNames", "allowImportNames"] },
			},
		],
	},
	uniqueItems: true,
};

const arrayOfStringsOrObjectPatterns = {
	anyOf: [
		{
			type: "array",
			items: {
				type: "string",
			},
			uniqueItems: true,
		},
		{
			type: "array",
			items: {
				type: "object",
				properties: {
					importNames: {
						type: "array",
						items: {
							type: "string",
						},
						minItems: 1,
						uniqueItems: true,
					},
					allowImportNames: {
						type: "array",
						items: {
							type: "string",
						},
						minItems: 1,
						uniqueItems: true,
					},
					group: {
						type: "array",
						items: {
							type: "string",
						},
						minItems: 1,
						uniqueItems: true,
					},
					regex: {
						type: "string",
					},
					importNamePattern: {
						type: "string",
					},
					allowImportNamePattern: {
						type: "string",
					},
					message: {
						type: "string",
						minLength: 1,
					},
					caseSensitive: {
						type: "boolean",
					},
					allowTypeImports: {
						type: "boolean",
						description:
							"Whether to allow type-only imports for a pattern.",
					},
				},
				additionalProperties: false,
				not: {
					anyOf: [
						{ required: ["importNames", "allowImportNames"] },
						{
							required: [
								"importNamePattern",
								"allowImportNamePattern",
							],
						},
						{ required: ["importNames", "allowImportNamePattern"] },
						{ required: ["importNamePattern", "allowImportNames"] },
						{
							required: [
								"allowImportNames",
								"allowImportNamePattern",
							],
						},
					],
				},
				oneOf: [{ required: ["group"] }, { required: ["regex"] }],
			},
			uniqueItems: true,
		},
	],
};

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",
		dialects: ["typescript", "javascript"],
		language: "javascript",

		docs: {
			description: "Disallow specified modules when loaded by `import`",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-restricted-imports",
		},

		messages: {
			path: "'{{importSource}}' import is restricted from being used.",
			pathWithCustomMessage:
				// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
				"'{{importSource}}' import is restricted from being used. {{customMessage}}",

			patterns:
				"'{{importSource}}' import is restricted from being used by a pattern.",
			patternWithCustomMessage:
				// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
				"'{{importSource}}' import is restricted from being used by a pattern. {{customMessage}}",

			patternAndImportName:
				"'{{importName}}' import from '{{importSource}}' is restricted from being used by a pattern.",
			patternAndImportNameWithCustomMessage:
				// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
				"'{{importName}}' import from '{{importSource}}' is restricted from being used by a pattern. {{customMessage}}",

			patternAndEverything:
				"* import is invalid because '{{importNames}}' from '{{importSource}}' is restricted from being used by a pattern.",

			patternAndEverythingWithRegexImportName:
				"* import is invalid because import name matching '{{importNames}}' pattern from '{{importSource}}' is restricted from being used.",
			patternAndEverythingWithCustomMessage:
				// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
				"* import is invalid because '{{importNames}}' from '{{importSource}}' is restricted from being used by a pattern. {{customMessage}}",
			patternAndEverythingWithRegexImportNameAndCustomMessage:
				// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
				"* import is invalid because import name matching '{{importNames}}' pattern from '{{importSource}}' is restricted from being used. {{customMessage}}",

			everything:
				"* import is invalid because '{{importNames}}' from '{{importSource}}' is restricted.",
			everythingWithCustomMessage:
				// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
				"* import is invalid because '{{importNames}}' from '{{importSource}}' is restricted. {{customMessage}}",

			importName:
				"'{{importName}}' import from '{{importSource}}' is restricted.",
			importNameWithCustomMessage:
				// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
				"'{{importName}}' import from '{{importSource}}' is restricted. {{customMessage}}",

			allowedImportName:
				"'{{importName}}' import from '{{importSource}}' is restricted because only '{{allowedImportNames}}' import(s) is/are allowed.",
			allowedImportNameWithCustomMessage:
				// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
				"'{{importName}}' import from '{{importSource}}' is restricted because only '{{allowedImportNames}}' import(s) is/are allowed. {{customMessage}}",

			everythingWithAllowImportNames:
				"* import is invalid because only '{{allowedImportNames}}' from '{{importSource}}' is/are allowed.",
			everythingWithAllowImportNamesAndCustomMessage:
				// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
				"* import is invalid because only '{{allowedImportNames}}' from '{{importSource}}' is/are allowed. {{customMessage}}",

			allowedImportNamePattern:
				"'{{importName}}' import from '{{importSource}}' is restricted because only imports that match the pattern '{{allowedImportNamePattern}}' are allowed from '{{importSource}}'.",
			allowedImportNamePatternWithCustomMessage:
				// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
				"'{{importName}}' import from '{{importSource}}' is restricted because only imports that match the pattern '{{allowedImportNamePattern}}' are allowed from '{{importSource}}'. {{customMessage}}",

			everythingWithAllowedImportNamePattern:
				"* import is invalid because only imports that match the pattern '{{allowedImportNamePattern}}' from '{{importSource}}' are allowed.",
			everythingWithAllowedImportNamePatternWithCustomMessage:
				// eslint-disable-next-line eslint-plugin/report-message-format -- Custom message might not end in a period
				"* import is invalid because only imports that match the pattern '{{allowedImportNamePattern}}' from '{{importSource}}' are allowed. {{customMessage}}",
		},

		schema: {
			anyOf: [
				arrayOfStringsOrObjects,
				{
					type: "array",
					items: [
						{
							type: "object",
							properties: {
								paths: arrayOfStringsOrObjects,
								patterns: arrayOfStringsOrObjectPatterns,
							},
							additionalProperties: false,
						},
					],
					additionalItems: false,
				},
			],
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;
		const options = Array.isArray(context.options) ? context.options : [];
		const isPathAndPatternsObject =
			typeof options[0] === "object" &&
			(Object.hasOwn(options[0], "paths") ||
				Object.hasOwn(options[0], "patterns"));

		const restrictedPaths =
			(isPathAndPatternsObject ? options[0].paths : context.options) ||
			[];
		const groupedRestrictedPaths = restrictedPaths.reduce(
			(memo, importSource) => {
				const path =
					typeof importSource === "string"
						? importSource
						: importSource.name;

				if (!memo[path]) {
					memo[path] = [];
				}

				if (typeof importSource === "string") {
					memo[path].push({});
				} else {
					memo[path].push({
						message: importSource.message,
						importNames: importSource.importNames,
						allowImportNames: importSource.allowImportNames,
						allowTypeImports: importSource.allowTypeImports,
					});
				}
				return memo;
			},
			Object.create(null),
		);

		// Handle patterns too, either as strings or groups
		let restrictedPatterns =
			(isPathAndPatternsObject ? options[0].patterns : []) || [];

		// standardize to array of objects if we have an array of strings
		if (
			restrictedPatterns.length > 0 &&
			typeof restrictedPatterns[0] === "string"
		) {
			restrictedPatterns = [{ group: restrictedPatterns }];
		}

		// relative paths are supported for this rule
		const restrictedPatternGroups = restrictedPatterns.map(
			({
				group,
				regex,
				message,
				caseSensitive,
				importNames,
				importNamePattern,
				allowImportNames,
				allowImportNamePattern,
				allowTypeImports,
			}) => ({
				...(group
					? {
							matcher: ignore({
								allowRelativePaths: true,
								ignorecase: !caseSensitive,
							}).add(group),
						}
					: {}),
				...(typeof regex === "string"
					? {
							regexMatcher: new RegExp(
								regex,
								caseSensitive ? "u" : "iu",
							),
						}
					: {}),
				customMessage: message,
				importNames,
				importNamePattern,
				allowImportNames,
				allowImportNamePattern,
				allowTypeImports,
			}),
		);

		// if no imports are restricted we don't need to check
		if (
			Object.keys(restrictedPaths).length === 0 &&
			restrictedPatternGroups.length === 0
		) {
			return {};
		}

		/**
		 * Check if the node is a type-only import
		 * @param {ASTNode} node The node to check
		 * @returns {boolean} Whether the node is a type-only import
		 */
		function isTypeOnlyImport(node) {
			return (
				node.importKind === "type" ||
				(node.specifiers?.length > 0 &&
					node.specifiers.every(
						specifier => specifier.importKind === "type",
					))
			);
		}

		/**
		 * Check if a specifier is type-only
		 * @param {ASTNode} specifier The specifier to check
		 * @returns {boolean} Whether the specifier is type-only
		 */
		function isTypeOnlySpecifier(specifier) {
			return (
				specifier.importKind === "type" ||
				specifier.exportKind === "type"
			);
		}

		/**
		 * Check if the node is a type-only export
		 * @param {ASTNode} node The node to check
		 * @returns {boolean} Whether the node is a type-only export
		 */
		function isTypeOnlyExport(node) {
			return (
				node.exportKind === "type" ||
				(node.specifiers?.length > 0 &&
					node.specifiers.every(
						specifier => specifier.exportKind === "type",
					))
			);
		}

		/**
		 * Report a restricted path.
		 * @param {string} importSource path of the import
		 * @param {Map<string,Object[]>} importNames Map of import names that are being imported
		 * @param {node} node representing the restricted path reference
		 * @returns {void}
		 * @private
		 */
		function checkRestrictedPathAndReport(importSource, importNames, node) {
			if (!Object.hasOwn(groupedRestrictedPaths, importSource)) {
				return;
			}

			groupedRestrictedPaths[importSource].forEach(
				restrictedPathEntry => {
					const customMessage = restrictedPathEntry.message;
					const restrictedImportNames =
						restrictedPathEntry.importNames;
					const allowedImportNames =
						restrictedPathEntry.allowImportNames;
					const allowTypeImports =
						restrictedPathEntry.allowTypeImports;

					// Skip if this is a type-only import and it's allowed for this specific entry
					if (
						allowTypeImports &&
						(node.type === "ImportDeclaration" ||
							node.type === "TSImportEqualsDeclaration") &&
						isTypeOnlyImport(node)
					) {
						return;
					}

					// Skip if this is a type-only export and it's allowed for this specific entry
					if (
						allowTypeImports &&
						(node.type === "ExportNamedDeclaration" ||
							node.type === "ExportAllDeclaration") &&
						isTypeOnlyExport(node)
					) {
						return;
					}

					if (!restrictedImportNames && !allowedImportNames) {
						context.report({
							node,
							messageId: customMessage
								? "pathWithCustomMessage"
								: "path",
							data: {
								importSource,
								customMessage,
							},
						});

						return;
					}

					importNames.forEach((specifiers, importName) => {
						if (importName === "*") {
							const [specifier] = specifiers;

							if (restrictedImportNames) {
								context.report({
									node,
									messageId: customMessage
										? "everythingWithCustomMessage"
										: "everything",
									loc: specifier.loc,
									data: {
										importSource,
										importNames: restrictedImportNames,
										customMessage,
									},
								});
							} else if (allowedImportNames) {
								context.report({
									node,
									messageId: customMessage
										? "everythingWithAllowImportNamesAndCustomMessage"
										: "everythingWithAllowImportNames",
									loc: specifier.loc,
									data: {
										importSource,
										allowedImportNames,
										customMessage,
									},
								});
							}

							return;
						}

						if (
							restrictedImportNames &&
							restrictedImportNames.includes(importName)
						) {
							specifiers.forEach(specifier => {
								// Skip if this is a type-only import specifier and type imports are allowed
								if (
									allowTypeImports &&
									isTypeOnlySpecifier(specifier.specifier)
								) {
									return;
								}

								context.report({
									node,
									messageId: customMessage
										? "importNameWithCustomMessage"
										: "importName",
									loc: specifier.loc,
									data: {
										importSource,
										customMessage,
										importName,
									},
								});
							});
						}

						if (
							allowedImportNames &&
							!allowedImportNames.includes(importName)
						) {
							specifiers.forEach(specifier => {
								// Skip if this is a type-only import specifier and type imports are allowed
								if (
									allowTypeImports &&
									isTypeOnlySpecifier(specifier.specifier)
								) {
									return;
								}

								context.report({
									node,
									loc: specifier.loc,
									messageId: customMessage
										? "allowedImportNameWithCustomMessage"
										: "allowedImportName",
									data: {
										importSource,
										customMessage,
										importName,
										allowedImportNames,
									},
								});
							});
						}
					});
				},
			);
		}

		/**
		 * Report a restricted path specifically for patterns.
		 * @param {node} node representing the restricted path reference
		 * @param {Object} group contains an Ignore instance for paths, the customMessage to show on failure,
		 * and any restricted import names that have been specified in the config
		 * @param {Map<string,Object[]>} importNames Map of import names that are being imported
		 * @param {string} importSource the import source string
		 * @returns {void}
		 * @private
		 */
		function reportPathForPatterns(node, group, importNames, importSource) {
			// Skip if this is a type-only import and it's allowed
			if (
				group.allowTypeImports &&
				(node.type === "ImportDeclaration" ||
					node.type === "TSImportEqualsDeclaration") &&
				isTypeOnlyImport(node)
			) {
				return;
			}

			// Skip if this is a type-only export and it's allowed
			if (
				group.allowTypeImports &&
				(node.type === "ExportNamedDeclaration" ||
					node.type === "ExportAllDeclaration") &&
				isTypeOnlyExport(node)
			) {
				return;
			}

			const customMessage = group.customMessage;
			const restrictedImportNames = group.importNames;
			const restrictedImportNamePattern = group.importNamePattern
				? new RegExp(group.importNamePattern, "u")
				: null;
			const allowedImportNames = group.allowImportNames;
			const allowedImportNamePattern = group.allowImportNamePattern
				? new RegExp(group.allowImportNamePattern, "u")
				: null;

			/**
			 * If we are not restricting to any specific import names and just the pattern itself,
			 * report the error and move on
			 */
			if (
				!restrictedImportNames &&
				!allowedImportNames &&
				!restrictedImportNamePattern &&
				!allowedImportNamePattern
			) {
				context.report({
					node,
					messageId: customMessage
						? "patternWithCustomMessage"
						: "patterns",
					data: {
						importSource,
						customMessage,
					},
				});
				return;
			}

			importNames.forEach((specifiers, importName) => {
				if (importName === "*") {
					const [specifier] = specifiers;

					if (restrictedImportNames) {
						context.report({
							node,
							messageId: customMessage
								? "patternAndEverythingWithCustomMessage"
								: "patternAndEverything",
							loc: specifier.loc,
							data: {
								importSource,
								importNames: restrictedImportNames,
								customMessage,
							},
						});
					} else if (allowedImportNames) {
						context.report({
							node,
							messageId: customMessage
								? "everythingWithAllowImportNamesAndCustomMessage"
								: "everythingWithAllowImportNames",
							loc: specifier.loc,
							data: {
								importSource,
								allowedImportNames,
								customMessage,
							},
						});
					} else if (allowedImportNamePattern) {
						context.report({
							node,
							messageId: customMessage
								? "everythingWithAllowedImportNamePatternWithCustomMessage"
								: "everythingWithAllowedImportNamePattern",
							loc: specifier.loc,
							data: {
								importSource,
								allowedImportNamePattern,
								customMessage,
							},
						});
					} else {
						context.report({
							node,
							messageId: customMessage
								? "patternAndEverythingWithRegexImportNameAndCustomMessage"
								: "patternAndEverythingWithRegexImportName",
							loc: specifier.loc,
							data: {
								importSource,
								importNames: restrictedImportNamePattern,
								customMessage,
							},
						});
					}

					return;
				}

				if (
					(restrictedImportNames &&
						restrictedImportNames.includes(importName)) ||
					(restrictedImportNamePattern &&
						restrictedImportNamePattern.test(importName))
				) {
					specifiers.forEach(specifier => {
						// Skip if this is a type-only import specifier and type imports are allowed
						if (
							group.allowTypeImports &&
							isTypeOnlySpecifier(specifier.specifier)
						) {
							return;
						}

						context.report({
							node,
							messageId: customMessage
								? "patternAndImportNameWithCustomMessage"
								: "patternAndImportName",
							loc: specifier.loc,
							data: {
								importSource,
								customMessage,
								importName,
							},
						});
					});
				}

				if (
					allowedImportNames &&
					!allowedImportNames.includes(importName)
				) {
					specifiers.forEach(specifier => {
						// Skip if this is a type-only import specifier and type imports are allowed
						if (
							group.allowTypeImports &&
							isTypeOnlySpecifier(specifier.specifier)
						) {
							return;
						}

						context.report({
							node,
							messageId: customMessage
								? "allowedImportNameWithCustomMessage"
								: "allowedImportName",
							loc: specifier.loc,
							data: {
								importSource,
								customMessage,
								importName,
								allowedImportNames,
							},
						});
					});
				} else if (
					allowedImportNamePattern &&
					!allowedImportNamePattern.test(importName)
				) {
					specifiers.forEach(specifier => {
						// Skip if this is a type-only import specifier and type imports are allowed
						if (
							group.allowTypeImports &&
							isTypeOnlySpecifier(specifier.specifier)
						) {
							return;
						}

						context.report({
							node,
							messageId: customMessage
								? "allowedImportNamePatternWithCustomMessage"
								: "allowedImportNamePattern",
							loc: specifier.loc,
							data: {
								importSource,
								customMessage,
								importName,
								allowedImportNamePattern,
							},
						});
					});
				}
			});
		}

		/**
		 * Check if the given importSource is restricted by a pattern.
		 * @param {string} importSource path of the import
		 * @param {Object} group contains a Ignore instance for paths, and the customMessage to show if it fails
		 * @returns {boolean} whether the variable is a restricted pattern or not
		 * @private
		 */
		function isRestrictedPattern(importSource, group) {
			return group.regexMatcher
				? group.regexMatcher.test(importSource)
				: group.matcher.ignores(importSource);
		}

		/**
		 * Checks a node to see if any problems should be reported.
		 * @param {ASTNode} node The node to check.
		 * @returns {void}
		 * @private
		 */
		function checkNode(node) {
			const importSource = node.source.value.trim();
			const importNames = new Map();

			if (node.type === "ExportAllDeclaration") {
				const starToken = sourceCode.getFirstToken(node, 1);

				importNames.set("*", [{ loc: starToken.loc }]);
			} else if (node.specifiers) {
				for (const specifier of node.specifiers) {
					let name;
					const specifierData = { loc: specifier.loc, specifier };

					if (specifier.type === "ImportDefaultSpecifier") {
						name = "default";
					} else if (specifier.type === "ImportNamespaceSpecifier") {
						name = "*";
					} else if (specifier.imported) {
						name = astUtils.getModuleExportName(specifier.imported);
					} else if (specifier.local) {
						name = astUtils.getModuleExportName(specifier.local);
					}

					if (typeof name === "string") {
						if (importNames.has(name)) {
							importNames.get(name).push(specifierData);
						} else {
							importNames.set(name, [specifierData]);
						}
					}
				}
			}

			checkRestrictedPathAndReport(importSource, importNames, node);
			restrictedPatternGroups.forEach(group => {
				if (isRestrictedPattern(importSource, group)) {
					reportPathForPatterns(
						node,
						group,
						importNames,
						importSource,
					);
				}
			});
		}

		return {
			ImportDeclaration: checkNode,
			ExportNamedDeclaration(node) {
				if (node.source) {
					checkNode(node);
				}
			},
			ExportAllDeclaration: checkNode,
			// Add support for TypeScript import equals declarations
			TSImportEqualsDeclaration(node) {
				if (node.moduleReference.type === "TSExternalModuleReference") {
					const importSource = node.moduleReference.expression.value;
					const importNames = new Map();

					// Use existing logic with the actual node
					checkRestrictedPathAndReport(
						importSource,
						importNames,
						node,
					);
					restrictedPatternGroups.forEach(group => {
						if (isRestrictedPattern(importSource, group)) {
							reportPathForPatterns(
								node,
								group,
								importNames,
								importSource,
							);
						}
					});
				}
			},
		};
	},
};
