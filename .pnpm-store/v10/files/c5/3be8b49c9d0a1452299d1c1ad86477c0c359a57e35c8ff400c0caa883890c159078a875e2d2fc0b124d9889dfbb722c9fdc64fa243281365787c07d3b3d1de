/**
 * @fileoverview Rule to disallow use of the `RegExp` constructor in favor of regular expression literals
 * @author Milos Djermanovic
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");
const {
	CALL,
	CONSTRUCT,
	ReferenceTracker,
} = require("@eslint-community/eslint-utils");
const {
	RegExpValidator,
	visitRegExpAST,
	RegExpParser,
} = require("@eslint-community/regexpp");
const { canTokensBeAdjacent } = require("./utils/ast-utils");
const { REGEXPP_LATEST_ECMA_VERSION } = require("./utils/regular-expressions");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Determines whether the given node is a string literal.
 * @param {ASTNode} node Node to check.
 * @returns {boolean} True if the node is a string literal.
 */
function isStringLiteral(node) {
	return node.type === "Literal" && typeof node.value === "string";
}

/**
 * Determines whether the given node is a regex literal.
 * @param {ASTNode} node Node to check.
 * @returns {boolean} True if the node is a regex literal.
 */
function isRegexLiteral(node) {
	return node.type === "Literal" && Object.hasOwn(node, "regex");
}

const validPrecedingTokens = new Set([
	"(",
	";",
	"[",
	",",
	"=",
	"+",
	"*",
	"-",
	"?",
	"~",
	"%",
	"**",
	"!",
	"typeof",
	"instanceof",
	"&&",
	"||",
	"??",
	"return",
	"...",
	"delete",
	"void",
	"in",
	"<",
	">",
	"<=",
	">=",
	"==",
	"===",
	"!=",
	"!==",
	"<<",
	">>",
	">>>",
	"&",
	"|",
	"^",
	":",
	"{",
	"=>",
	"*=",
	"<<=",
	">>=",
	">>>=",
	"^=",
	"|=",
	"&=",
	"??=",
	"||=",
	"&&=",
	"**=",
	"+=",
	"-=",
	"/=",
	"%=",
	"/",
	"do",
	"break",
	"continue",
	"debugger",
	"case",
	"throw",
]);

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [
			{
				disallowRedundantWrapping: false,
			},
		],

		docs: {
			description:
				"Disallow use of the `RegExp` constructor in favor of regular expression literals",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/prefer-regex-literals",
		},

		hasSuggestions: true,

		schema: [
			{
				type: "object",
				properties: {
					disallowRedundantWrapping: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpectedRegExp:
				"Use a regular expression literal instead of the 'RegExp' constructor.",
			replaceWithLiteral:
				"Replace with an equivalent regular expression literal.",
			replaceWithLiteralAndFlags:
				"Replace with an equivalent regular expression literal with flags '{{ flags }}'.",
			replaceWithIntendedLiteralAndFlags:
				"Replace with a regular expression literal with flags '{{ flags }}'.",
			unexpectedRedundantRegExp:
				"Regular expression literal is unnecessarily wrapped within a 'RegExp' constructor.",
			unexpectedRedundantRegExpWithFlags:
				"Use regular expression literal with flags instead of the 'RegExp' constructor.",
		},
	},

	create(context) {
		const [{ disallowRedundantWrapping }] = context.options;
		const sourceCode = context.sourceCode;

		/**
		 * Determines whether the given node is a String.raw`` tagged template expression
		 * with a static template literal.
		 * @param {ASTNode} node Node to check.
		 * @returns {boolean} True if the node is String.raw`` with a static template.
		 */
		function isStringRawTaggedStaticTemplateLiteral(node) {
			return (
				node.type === "TaggedTemplateExpression" &&
				astUtils.isSpecificMemberAccess(node.tag, "String", "raw") &&
				sourceCode.isGlobalReference(
					astUtils.skipChainExpression(node.tag).object,
				) &&
				astUtils.isStaticTemplateLiteral(node.quasi)
			);
		}

		/**
		 * Gets the value of a string
		 * @param {ASTNode} node The node to get the string of.
		 * @returns {string|null} The value of the node.
		 */
		function getStringValue(node) {
			if (isStringLiteral(node)) {
				return node.value;
			}

			if (astUtils.isStaticTemplateLiteral(node)) {
				return node.quasis[0].value.cooked;
			}

			if (isStringRawTaggedStaticTemplateLiteral(node)) {
				return node.quasi.quasis[0].value.raw;
			}

			return null;
		}

		/**
		 * Determines whether the given node is considered to be a static string by the logic of this rule.
		 * @param {ASTNode} node Node to check.
		 * @returns {boolean} True if the node is a static string.
		 */
		function isStaticString(node) {
			return (
				isStringLiteral(node) ||
				astUtils.isStaticTemplateLiteral(node) ||
				isStringRawTaggedStaticTemplateLiteral(node)
			);
		}

		/**
		 * Determines whether the relevant arguments of the given are all static string literals.
		 * @param {ASTNode} node Node to check.
		 * @returns {boolean} True if all arguments are static strings.
		 */
		function hasOnlyStaticStringArguments(node) {
			const args = node.arguments;

			if (
				(args.length === 1 || args.length === 2) &&
				args.every(isStaticString)
			) {
				return true;
			}

			return false;
		}

		/**
		 * Determines whether the arguments of the given node indicate that a regex literal is unnecessarily wrapped.
		 * @param {ASTNode} node Node to check.
		 * @returns {boolean} True if the node already contains a regex literal argument.
		 */
		function isUnnecessarilyWrappedRegexLiteral(node) {
			const args = node.arguments;

			if (args.length === 1 && isRegexLiteral(args[0])) {
				return true;
			}

			if (
				args.length === 2 &&
				isRegexLiteral(args[0]) &&
				isStaticString(args[1])
			) {
				return true;
			}

			return false;
		}

		/**
		 * Returns a ecmaVersion compatible for regexpp.
		 * @param {number} ecmaVersion The ecmaVersion to convert.
		 * @returns {import("@eslint-community/regexpp/ecma-versions").EcmaVersion} The resulting ecmaVersion compatible for regexpp.
		 */
		function getRegexppEcmaVersion(ecmaVersion) {
			if (ecmaVersion <= 5) {
				return 5;
			}
			return Math.min(ecmaVersion, REGEXPP_LATEST_ECMA_VERSION);
		}

		const regexppEcmaVersion = getRegexppEcmaVersion(
			context.languageOptions.ecmaVersion,
		);

		/**
		 * Makes a character escaped or else returns null.
		 * @param {string} character The character to escape.
		 * @returns {string} The resulting escaped character.
		 */
		function resolveEscapes(character) {
			switch (character) {
				case "\n":
				case "\\\n":
					return "\\n";

				case "\r":
				case "\\\r":
					return "\\r";

				case "\t":
				case "\\\t":
					return "\\t";

				case "\v":
				case "\\\v":
					return "\\v";

				case "\f":
				case "\\\f":
					return "\\f";

				case "/":
					return "\\/";

				default:
					return null;
			}
		}

		/**
		 * Checks whether the given regex and flags are valid for the ecma version or not.
		 * @param {string} pattern The regex pattern to check.
		 * @param {string | undefined} flags The regex flags to check.
		 * @returns {boolean} True if the given regex pattern and flags are valid for the ecma version.
		 */
		function isValidRegexForEcmaVersion(pattern, flags) {
			const validator = new RegExpValidator({
				ecmaVersion: regexppEcmaVersion,
			});

			try {
				validator.validatePattern(pattern, 0, pattern.length, {
					unicode: flags ? flags.includes("u") : false,
					unicodeSets: flags ? flags.includes("v") : false,
				});
				if (flags) {
					validator.validateFlags(flags);
				}
				return true;
			} catch {
				return false;
			}
		}

		/**
		 * Checks whether two given regex flags contain the same flags or not.
		 * @param {string} flagsA The regex flags.
		 * @param {string} flagsB The regex flags.
		 * @returns {boolean} True if two regex flags contain same flags.
		 */
		function areFlagsEqual(flagsA, flagsB) {
			return [...flagsA].sort().join("") === [...flagsB].sort().join("");
		}

		/**
		 * Merges two regex flags.
		 * @param {string} flagsA The regex flags.
		 * @param {string} flagsB The regex flags.
		 * @returns {string} The merged regex flags.
		 */
		function mergeRegexFlags(flagsA, flagsB) {
			const flagsSet = new Set([...flagsA, ...flagsB]);

			return [...flagsSet].join("");
		}

		/**
		 * Checks whether a give node can be fixed to the given regex pattern and flags.
		 * @param {ASTNode} node The node to check.
		 * @param {string} pattern The regex pattern to check.
		 * @param {string} flags The regex flags
		 * @returns {boolean} True if a node can be fixed to the given regex pattern and flags.
		 */
		function canFixTo(node, pattern, flags) {
			const tokenBefore = sourceCode.getTokenBefore(node);

			return (
				sourceCode.getCommentsInside(node).length === 0 &&
				(!tokenBefore || validPrecedingTokens.has(tokenBefore.value)) &&
				isValidRegexForEcmaVersion(pattern, flags)
			);
		}

		/**
		 * Returns a safe output code considering the before and after tokens.
		 * @param {ASTNode} node The regex node.
		 * @param {string} newRegExpValue The new regex expression value.
		 * @returns {string} The output code.
		 */
		function getSafeOutput(node, newRegExpValue) {
			const tokenBefore = sourceCode.getTokenBefore(node);
			const tokenAfter = sourceCode.getTokenAfter(node);

			return (
				(tokenBefore &&
				!canTokensBeAdjacent(tokenBefore, newRegExpValue) &&
				tokenBefore.range[1] === node.range[0]
					? " "
					: "") +
				newRegExpValue +
				(tokenAfter &&
				!canTokensBeAdjacent(newRegExpValue, tokenAfter) &&
				node.range[1] === tokenAfter.range[0]
					? " "
					: "")
			);
		}

		return {
			Program(node) {
				const scope = sourceCode.getScope(node);
				const tracker = new ReferenceTracker(scope);
				const traceMap = {
					RegExp: {
						[CALL]: true,
						[CONSTRUCT]: true,
					},
				};

				for (const { node: refNode } of tracker.iterateGlobalReferences(
					traceMap,
				)) {
					if (
						disallowRedundantWrapping &&
						isUnnecessarilyWrappedRegexLiteral(refNode)
					) {
						const regexNode = refNode.arguments[0];

						if (refNode.arguments.length === 2) {
							const suggests = [];

							const argFlags =
								getStringValue(refNode.arguments[1]) || "";

							if (
								canFixTo(
									refNode,
									regexNode.regex.pattern,
									argFlags,
								)
							) {
								suggests.push({
									messageId: "replaceWithLiteralAndFlags",
									pattern: regexNode.regex.pattern,
									flags: argFlags,
								});
							}

							const literalFlags = regexNode.regex.flags || "";
							const mergedFlags = mergeRegexFlags(
								literalFlags,
								argFlags,
							);

							if (
								!areFlagsEqual(mergedFlags, argFlags) &&
								canFixTo(
									refNode,
									regexNode.regex.pattern,
									mergedFlags,
								)
							) {
								suggests.push({
									messageId:
										"replaceWithIntendedLiteralAndFlags",
									pattern: regexNode.regex.pattern,
									flags: mergedFlags,
								});
							}

							context.report({
								node: refNode,
								messageId: "unexpectedRedundantRegExpWithFlags",
								suggest: suggests.map(
									({ flags, pattern, messageId }) => ({
										messageId,
										data: {
											flags,
										},
										fix(fixer) {
											return fixer.replaceText(
												refNode,
												getSafeOutput(
													refNode,
													`/${pattern}/${flags}`,
												),
											);
										},
									}),
								),
							});
						} else {
							const outputs = [];

							if (
								canFixTo(
									refNode,
									regexNode.regex.pattern,
									regexNode.regex.flags,
								)
							) {
								outputs.push(sourceCode.getText(regexNode));
							}

							context.report({
								node: refNode,
								messageId: "unexpectedRedundantRegExp",
								suggest: outputs.map(output => ({
									messageId: "replaceWithLiteral",
									fix(fixer) {
										return fixer.replaceText(
											refNode,
											getSafeOutput(refNode, output),
										);
									},
								})),
							});
						}
					} else if (hasOnlyStaticStringArguments(refNode)) {
						let regexContent = getStringValue(refNode.arguments[0]);
						let noFix = false;
						let flags;

						if (refNode.arguments[1]) {
							flags = getStringValue(refNode.arguments[1]);
						}

						if (!canFixTo(refNode, regexContent, flags)) {
							noFix = true;
						}

						if (
							!/^[-\w\\[\](){} \t\r\n\v\f!@#$%^&*+=/~`.><?,'"|:;]*$/u.test(
								regexContent,
							)
						) {
							noFix = true;
						}

						if (regexContent && !noFix) {
							let charIncrease = 0;

							const ast = new RegExpParser({
								ecmaVersion: regexppEcmaVersion,
							}).parsePattern(
								regexContent,
								0,
								regexContent.length,
								{
									unicode: flags
										? flags.includes("u")
										: false,
									unicodeSets: flags
										? flags.includes("v")
										: false,
								},
							);

							visitRegExpAST(ast, {
								onCharacterEnter(characterNode) {
									const escaped = resolveEscapes(
										characterNode.raw,
									);

									if (escaped) {
										regexContent =
											regexContent.slice(
												0,
												characterNode.start +
													charIncrease,
											) +
											escaped +
											regexContent.slice(
												characterNode.end +
													charIncrease,
											);

										if (characterNode.raw.length === 1) {
											charIncrease += 1;
										}
									}
								},
							});
						}

						const newRegExpValue = `/${regexContent || "(?:)"}/${flags || ""}`;

						context.report({
							node: refNode,
							messageId: "unexpectedRegExp",
							suggest: noFix
								? []
								: [
										{
											messageId: "replaceWithLiteral",
											fix(fixer) {
												return fixer.replaceText(
													refNode,
													getSafeOutput(
														refNode,
														newRegExpValue,
													),
												);
											},
										},
									],
						});
					}
				}
			},
		};
	},
};
