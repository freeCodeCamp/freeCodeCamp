/**
 * @fileoverview Rule to enforce the use of `u` or `v` flag on regular expressions.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const {
	CALL,
	CONSTRUCT,
	ReferenceTracker,
	getStringIfConstant,
} = require("@eslint-community/eslint-utils");
const astUtils = require("./utils/ast-utils.js");
const { isValidWithUnicodeFlag } = require("./utils/regular-expressions");

/**
 * Checks whether the flag configuration should be treated as a missing flag.
 * @param {"u"|"v"|undefined} requireFlag A particular flag to require
 * @param {string} flags The regex flags
 * @returns {boolean} Whether the flag configuration results in a missing flag.
 */
function checkFlags(requireFlag, flags) {
	let missingFlag;

	if (requireFlag === "v") {
		missingFlag = !flags.includes("v");
	} else if (requireFlag === "u") {
		missingFlag = !flags.includes("u");
	} else {
		missingFlag = !flags.includes("u") && !flags.includes("v");
	}

	return missingFlag;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [{}],

		docs: {
			description:
				"Enforce the use of `u` or `v` flag on regular expressions",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/require-unicode-regexp",
		},

		hasSuggestions: true,

		messages: {
			addUFlag: "Add the 'u' flag.",
			addVFlag: "Add the 'v' flag.",
			requireUFlag: "Use the 'u' flag.",
			requireVFlag: "Use the 'v' flag.",
		},

		schema: [
			{
				type: "object",
				properties: {
					requireFlag: {
						enum: ["u", "v"],
					},
				},
				additionalProperties: false,
			},
		],
	},

	create(context) {
		const sourceCode = context.sourceCode;

		const [{ requireFlag }] = context.options;

		return {
			"Literal[regex]"(node) {
				const flags = node.regex.flags || "";

				const missingFlag = checkFlags(requireFlag, flags);

				if (missingFlag) {
					context.report({
						messageId:
							requireFlag === "v"
								? "requireVFlag"
								: "requireUFlag",
						node,
						suggest: isValidWithUnicodeFlag(
							context.languageOptions.ecmaVersion,
							node.regex.pattern,
							requireFlag,
						)
							? [
									{
										fix(fixer) {
											const replaceFlag =
												requireFlag ?? "u";
											const regex =
												sourceCode.getText(node);
											const slashPos =
												regex.lastIndexOf("/");

											if (requireFlag) {
												const flag =
													requireFlag === "u"
														? "v"
														: "u";

												if (
													regex.includes(
														flag,
														slashPos,
													)
												) {
													return fixer.replaceText(
														node,
														regex.slice(
															0,
															slashPos,
														) +
															regex
																.slice(slashPos)
																.replace(
																	flag,
																	requireFlag,
																),
													);
												}
											}

											return fixer.insertTextAfter(
												node,
												replaceFlag,
											);
										},
										messageId:
											requireFlag === "v"
												? "addVFlag"
												: "addUFlag",
									},
								]
							: null,
					});
				}
			},

			Program(node) {
				const scope = sourceCode.getScope(node);
				const tracker = new ReferenceTracker(scope);
				const trackMap = {
					RegExp: { [CALL]: true, [CONSTRUCT]: true },
				};

				for (const { node: refNode } of tracker.iterateGlobalReferences(
					trackMap,
				)) {
					const [patternNode, flagsNode] = refNode.arguments;

					if (patternNode && patternNode.type === "SpreadElement") {
						continue;
					}
					const pattern = getStringIfConstant(patternNode, scope);
					const flags = getStringIfConstant(flagsNode, scope);

					let missingFlag = !flagsNode;

					if (typeof flags === "string") {
						missingFlag = checkFlags(requireFlag, flags);
					}

					if (missingFlag) {
						context.report({
							messageId:
								requireFlag === "v"
									? "requireVFlag"
									: "requireUFlag",
							node: refNode,
							suggest:
								typeof pattern === "string" &&
								isValidWithUnicodeFlag(
									context.languageOptions.ecmaVersion,
									pattern,
									requireFlag,
								)
									? [
											{
												fix(fixer) {
													const replaceFlag =
														requireFlag ?? "u";

													if (flagsNode) {
														if (
															(flagsNode.type ===
																"Literal" &&
																typeof flagsNode.value ===
																	"string") ||
															flagsNode.type ===
																"TemplateLiteral"
														) {
															const flagsNodeText =
																sourceCode.getText(
																	flagsNode,
																);
															const flag =
																requireFlag ===
																"u"
																	? "v"
																	: "u";

															if (
																flags.includes(
																	flag,
																)
															) {
																// Avoid replacing "u" in escapes like `\uXXXX`
																if (
																	flagsNode.type ===
																		"Literal" &&
																	flagsNode.raw.includes(
																		"\\",
																	)
																) {
																	return null;
																}

																// Avoid replacing "u" in expressions like "`${regularFlags}g`"
																if (
																	flagsNode.type ===
																		"TemplateLiteral" &&
																	(flagsNode
																		.expressions
																		.length ||
																		flagsNode.quasis.some(
																			({
																				value: {
																					raw,
																				},
																			}) =>
																				raw.includes(
																					"\\",
																				),
																		))
																) {
																	return null;
																}

																return fixer.replaceText(
																	flagsNode,
																	flagsNodeText.replace(
																		flag,
																		replaceFlag,
																	),
																);
															}

															return fixer.replaceText(
																flagsNode,
																[
																	flagsNodeText.slice(
																		0,
																		flagsNodeText.length -
																			1,
																	),
																	flagsNodeText.slice(
																		flagsNodeText.length -
																			1,
																	),
																].join(
																	replaceFlag,
																),
															);
														}

														// We intentionally don't suggest concatenating + "u" to non-literals
														return null;
													}

													const penultimateToken =
														sourceCode.getLastToken(
															refNode,
															{ skip: 1 },
														); // skip closing parenthesis

													return fixer.insertTextAfter(
														penultimateToken,
														astUtils.isCommaToken(
															penultimateToken,
														)
															? ` "${replaceFlag}",`
															: `, "${replaceFlag}"`,
													);
												},
												messageId:
													requireFlag === "v"
														? "addVFlag"
														: "addUFlag",
											},
										]
									: null,
						});
					}
				}
			},
		};
	},
};
