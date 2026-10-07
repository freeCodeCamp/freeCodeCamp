/**
 * @fileoverview enforce or disallow capitalization of the first letter of a comment
 * @author Kevin Partington
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const DEFAULT_IGNORE_PATTERN = astUtils.COMMENTS_IGNORE_PATTERN,
	WHITESPACE = /\s/gu,
	MAYBE_URL = /^\s*[^:/?#\s]+:\/\/[^?#]/u, // TODO: Combine w/ max-len pattern?
	LETTER_PATTERN = /\p{L}/u;

/*
 * Base schema body for defining the basic capitalization rule, ignorePattern,
 * and ignoreInlineComments values.
 * This can be used in a few different ways in the actual schema.
 */
const SCHEMA_BODY = {
	type: "object",
	properties: {
		ignorePattern: {
			type: "string",
		},
		ignoreInlineComments: {
			type: "boolean",
		},
		ignoreConsecutiveComments: {
			type: "boolean",
		},
	},
	additionalProperties: false,
};
const DEFAULTS = {
	ignorePattern: "",
	ignoreInlineComments: false,
	ignoreConsecutiveComments: false,
};

/**
 * Get normalized options for either block or line comments from the given
 * user-provided options.
 * - If the user-provided options is just a string, returns a normalized
 *   set of options using default values for all other options.
 * - If the user-provided options is an object, then a normalized option
 *   set is returned. Options specified in overrides will take priority
 *   over options specified in the main options object, which will in
 *   turn take priority over the rule's defaults.
 * @param {Object|string} rawOptions The user-provided options.
 * @param {string} which Either "line" or "block".
 * @returns {Object} The normalized options.
 */
function getNormalizedOptions(rawOptions, which) {
	return Object.assign({}, DEFAULTS, rawOptions[which] || rawOptions);
}

/**
 * Get normalized options for block and line comments.
 * @param {Object|string} rawOptions The user-provided options.
 * @returns {Object} An object with "Line" and "Block" keys and corresponding
 * normalized options objects.
 */
function getAllNormalizedOptions(rawOptions = {}) {
	return {
		Line: getNormalizedOptions(rawOptions, "line"),
		Block: getNormalizedOptions(rawOptions, "block"),
	};
}

/**
 * Creates a regular expression for each ignorePattern defined in the rule
 * options.
 *
 * This is done in order to avoid invoking the RegExp constructor repeatedly.
 * @param {Object} normalizedOptions The normalized rule options.
 * @returns {void}
 */
function createRegExpForIgnorePatterns(normalizedOptions) {
	Object.keys(normalizedOptions).forEach(key => {
		const ignorePatternStr = normalizedOptions[key].ignorePattern;

		if (ignorePatternStr) {
			const regExp = RegExp(`^\\s*(?:${ignorePatternStr})`, "u");

			normalizedOptions[key].ignorePatternRegExp = regExp;
		}
	});
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description:
				"Enforce or disallow capitalization of the first letter of a comment",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/capitalized-comments",
		},

		fixable: "code",

		schema: [
			{ enum: ["always", "never"] },
			{
				oneOf: [
					SCHEMA_BODY,
					{
						type: "object",
						properties: {
							line: SCHEMA_BODY,
							block: SCHEMA_BODY,
						},
						additionalProperties: false,
					},
				],
			},
		],

		messages: {
			unexpectedLowercaseComment:
				"Comments should not begin with a lowercase character.",
			unexpectedUppercaseComment:
				"Comments should not begin with an uppercase character.",
		},
	},

	create(context) {
		const capitalize = context.options[0] || "always",
			normalizedOptions = getAllNormalizedOptions(context.options[1]),
			sourceCode = context.sourceCode;

		createRegExpForIgnorePatterns(normalizedOptions);

		//----------------------------------------------------------------------
		// Helpers
		//----------------------------------------------------------------------

		/**
		 * Checks whether a comment is an inline comment.
		 *
		 * For the purpose of this rule, a comment is inline if:
		 * 1. The comment is preceded by a token on the same line; and
		 * 2. The command is followed by a token on the same line.
		 *
		 * Note that the comment itself need not be single-line!
		 *
		 * Also, it follows from this definition that only block comments can
		 * be considered as possibly inline. This is because line comments
		 * would consume any following tokens on the same line as the comment.
		 * @param {ASTNode} comment The comment node to check.
		 * @returns {boolean} True if the comment is an inline comment, false
		 * otherwise.
		 */
		function isInlineComment(comment) {
			const previousToken = sourceCode.getTokenBefore(comment, {
					includeComments: true,
				}),
				nextToken = sourceCode.getTokenAfter(comment, {
					includeComments: true,
				});

			return Boolean(
				previousToken &&
					nextToken &&
					comment.loc.start.line === previousToken.loc.end.line &&
					comment.loc.end.line === nextToken.loc.start.line,
			);
		}

		/**
		 * Determine if a comment follows another comment.
		 * @param {ASTNode} comment The comment to check.
		 * @returns {boolean} True if the comment follows a valid comment.
		 */
		function isConsecutiveComment(comment) {
			const previousTokenOrComment = sourceCode.getTokenBefore(comment, {
				includeComments: true,
			});

			return Boolean(
				previousTokenOrComment &&
					["Block", "Line"].includes(previousTokenOrComment.type),
			);
		}

		/**
		 * Check a comment to determine if it is valid for this rule.
		 * @param {ASTNode} comment The comment node to process.
		 * @param {Object} options The options for checking this comment.
		 * @returns {boolean} True if the comment is valid, false otherwise.
		 */
		function isCommentValid(comment, options) {
			// 1. Check for default ignore pattern.
			if (DEFAULT_IGNORE_PATTERN.test(comment.value)) {
				return true;
			}

			// 2. Check for custom ignore pattern.
			const commentWithoutAsterisks = comment.value.replace(/\*/gu, "");

			if (
				options.ignorePatternRegExp &&
				options.ignorePatternRegExp.test(commentWithoutAsterisks)
			) {
				return true;
			}

			// 3. Check for inline comments.
			if (options.ignoreInlineComments && isInlineComment(comment)) {
				return true;
			}

			// 4. Is this a consecutive comment (and are we tolerating those)?
			if (
				options.ignoreConsecutiveComments &&
				isConsecutiveComment(comment)
			) {
				return true;
			}

			// 5. Does the comment start with a possible URL?
			if (MAYBE_URL.test(commentWithoutAsterisks)) {
				return true;
			}

			// 6. Is the initial word character a letter?
			const commentWordCharsOnly = commentWithoutAsterisks.replace(
				WHITESPACE,
				"",
			);

			if (commentWordCharsOnly.length === 0) {
				return true;
			}

			// Get the first Unicode character (1 or 2 code units).
			const [firstWordChar] = commentWordCharsOnly;

			if (!LETTER_PATTERN.test(firstWordChar)) {
				return true;
			}

			// 7. Check the case of the initial word character.
			const isUppercase =
					firstWordChar !== firstWordChar.toLocaleLowerCase(),
				isLowercase =
					firstWordChar !== firstWordChar.toLocaleUpperCase();

			if (capitalize === "always" && isLowercase) {
				return false;
			}
			if (capitalize === "never" && isUppercase) {
				return false;
			}

			return true;
		}

		/**
		 * Process a comment to determine if it needs to be reported.
		 * @param {ASTNode} comment The comment node to process.
		 * @returns {void}
		 */
		function processComment(comment) {
			const options = normalizedOptions[comment.type],
				commentValid = isCommentValid(comment, options);

			if (!commentValid) {
				const messageId =
					capitalize === "always"
						? "unexpectedLowercaseComment"
						: "unexpectedUppercaseComment";

				context.report({
					node: null, // Intentionally using loc instead
					loc: comment.loc,
					messageId,
					fix(fixer) {
						const match = comment.value.match(LETTER_PATTERN);
						const char = match[0];

						// Offset match.index by 2 to account for the first 2 characters that start the comment (// or /*)
						const charIndex = comment.range[0] + match.index + 2;

						return fixer.replaceTextRange(
							[charIndex, charIndex + char.length],
							capitalize === "always"
								? char.toLocaleUpperCase()
								: char.toLocaleLowerCase(),
						);
					},
				});
			}
		}

		//----------------------------------------------------------------------
		// Public
		//----------------------------------------------------------------------

		return {
			Program() {
				const comments = sourceCode.getAllComments();

				comments
					.filter(token => token.type !== "Shebang")
					.forEach(processComment);
			},
		};
	},
};
