/**
 * @fileoverview Rule to flag missing semicolons.
 * @author Nicholas C. Zakas
 * @deprecated in ESLint v8.53.0
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const FixTracker = require("./utils/fix-tracker");
const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		deprecated: {
			message: "Formatting rules are being moved out of ESLint core.",
			url: "https://eslint.org/blog/2023/10/deprecating-formatting-rules/",
			deprecatedSince: "8.53.0",
			availableUntil: "11.0.0",
			replacedBy: [
				{
					message:
						"ESLint Stylistic now maintains deprecated stylistic core rules.",
					url: "https://eslint.style/guide/migration",
					plugin: {
						name: "@stylistic/eslint-plugin",
						url: "https://eslint.style",
					},
					rule: {
						name: "semi",
						url: "https://eslint.style/rules/semi",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Require or disallow semicolons instead of ASI",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/semi",
		},

		fixable: "code",

		schema: {
			anyOf: [
				{
					type: "array",
					items: [
						{
							enum: ["never"],
						},
						{
							type: "object",
							properties: {
								beforeStatementContinuationChars: {
									enum: ["always", "any", "never"],
								},
							},
							additionalProperties: false,
						},
					],
					minItems: 0,
					maxItems: 2,
				},
				{
					type: "array",
					items: [
						{
							enum: ["always"],
						},
						{
							type: "object",
							properties: {
								omitLastInOneLineBlock: { type: "boolean" },
								omitLastInOneLineClassBody: { type: "boolean" },
							},
							additionalProperties: false,
						},
					],
					minItems: 0,
					maxItems: 2,
				},
			],
		},

		messages: {
			missingSemi: "Missing semicolon.",
			extraSemi: "Extra semicolon.",
		},
	},

	create(context) {
		const OPT_OUT_PATTERN = /^[-[(/+`]/u; // One of [(/+-`
		const unsafeClassFieldNames = new Set(["get", "set", "static"]);
		const unsafeClassFieldFollowers = new Set(["*", "in", "instanceof"]);
		const options = context.options[1];
		const never = context.options[0] === "never";
		const exceptOneLine = Boolean(
			options && options.omitLastInOneLineBlock,
		);
		const exceptOneLineClassBody = Boolean(
			options && options.omitLastInOneLineClassBody,
		);
		const beforeStatementContinuationChars =
			(options && options.beforeStatementContinuationChars) || "any";
		const sourceCode = context.sourceCode;

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		/**
		 * Reports a semicolon error with appropriate location and message.
		 * @param {ASTNode} node The node with an extra or missing semicolon.
		 * @param {boolean} missing True if the semicolon is missing.
		 * @returns {void}
		 */
		function report(node, missing) {
			const lastToken = sourceCode.getLastToken(node);
			let messageId, fix, loc;

			if (!missing) {
				messageId = "missingSemi";
				loc = {
					start: lastToken.loc.end,
					end: astUtils.getNextLocation(
						sourceCode,
						lastToken.loc.end,
					),
				};
				fix = function (fixer) {
					return fixer.insertTextAfter(lastToken, ";");
				};
			} else {
				messageId = "extraSemi";
				loc = lastToken.loc;
				fix = function (fixer) {
					/*
					 * Expand the replacement range to include the surrounding
					 * tokens to avoid conflicting with no-extra-semi.
					 * https://github.com/eslint/eslint/issues/7928
					 */
					return new FixTracker(fixer, sourceCode)
						.retainSurroundingTokens(lastToken)
						.remove(lastToken);
				};
			}

			context.report({
				node,
				loc,
				messageId,
				fix,
			});
		}

		/**
		 * Check whether a given semicolon token is redundant.
		 * @param {Token} semiToken A semicolon token to check.
		 * @returns {boolean} `true` if the next token is `;` or `}`.
		 */
		function isRedundantSemi(semiToken) {
			const nextToken = sourceCode.getTokenAfter(semiToken);

			return (
				!nextToken ||
				astUtils.isClosingBraceToken(nextToken) ||
				astUtils.isSemicolonToken(nextToken)
			);
		}

		/**
		 * Check whether a given token is the closing brace of an arrow function.
		 * @param {Token} lastToken A token to check.
		 * @returns {boolean} `true` if the token is the closing brace of an arrow function.
		 */
		function isEndOfArrowBlock(lastToken) {
			if (!astUtils.isClosingBraceToken(lastToken)) {
				return false;
			}
			const node = sourceCode.getNodeByRangeIndex(lastToken.range[0]);

			return (
				node.type === "BlockStatement" &&
				node.parent.type === "ArrowFunctionExpression"
			);
		}

		/**
		 * Checks if a given PropertyDefinition node followed by a semicolon
		 * can safely remove that semicolon. It is not to safe to remove if
		 * the class field name is "get", "set", or "static", or if
		 * followed by a generator method.
		 * @param {ASTNode} node The node to check.
		 * @returns {boolean} `true` if the node cannot have the semicolon
		 *      removed.
		 */
		function maybeClassFieldAsiHazard(node) {
			if (node.type !== "PropertyDefinition") {
				return false;
			}

			/*
			 * Computed property names and non-identifiers are always safe
			 * as they can be distinguished from keywords easily.
			 */
			const needsNameCheck =
				!node.computed && node.key.type === "Identifier";

			/*
			 * Certain names are problematic unless they also have a
			 * a way to distinguish between keywords and property
			 * names.
			 */
			if (needsNameCheck && unsafeClassFieldNames.has(node.key.name)) {
				/*
				 * Special case: If the field name is `static`,
				 * it is only valid if the field is marked as static,
				 * so "static static" is okay but "static" is not.
				 */
				const isStaticStatic =
					node.static && node.key.name === "static";

				/*
				 * For other unsafe names, we only care if there is no
				 * initializer. No initializer = hazard.
				 */
				if (!isStaticStatic && !node.value) {
					return true;
				}
			}

			const followingToken = sourceCode.getTokenAfter(node);

			return unsafeClassFieldFollowers.has(followingToken.value);
		}

		/**
		 * Check whether a given node is on the same line with the next token.
		 * @param {Node} node A statement node to check.
		 * @returns {boolean} `true` if the node is on the same line with the next token.
		 */
		function isOnSameLineWithNextToken(node) {
			const prevToken = sourceCode.getLastToken(node, 1);
			const nextToken = sourceCode.getTokenAfter(node);

			return (
				!!nextToken && astUtils.isTokenOnSameLine(prevToken, nextToken)
			);
		}

		/**
		 * Check whether a given node can connect the next line if the next line is unreliable.
		 * @param {Node} node A statement node to check.
		 * @returns {boolean} `true` if the node can connect the next line.
		 */
		function maybeAsiHazardAfter(node) {
			const t = node.type;

			if (
				t === "DoWhileStatement" ||
				t === "BreakStatement" ||
				t === "ContinueStatement" ||
				t === "DebuggerStatement" ||
				t === "ImportDeclaration" ||
				t === "ExportAllDeclaration"
			) {
				return false;
			}
			if (t === "ReturnStatement") {
				return Boolean(node.argument);
			}
			if (t === "ExportNamedDeclaration") {
				return Boolean(node.declaration);
			}
			if (isEndOfArrowBlock(sourceCode.getLastToken(node, 1))) {
				return false;
			}

			return true;
		}

		/**
		 * Check whether a given token can connect the previous statement.
		 * @param {Token} token A token to check.
		 * @returns {boolean} `true` if the token is one of `[`, `(`, `/`, `+`, `-`, ```, `++`, and `--`.
		 */
		function maybeAsiHazardBefore(token) {
			return (
				Boolean(token) &&
				OPT_OUT_PATTERN.test(token.value) &&
				token.value !== "++" &&
				token.value !== "--"
			);
		}

		/**
		 * Check if the semicolon of a given node is unnecessary, only true if:
		 *   - next token is a valid statement divider (`;` or `}`).
		 *   - next token is on a new line and the node is not connectable to the new line.
		 * @param {Node} node A statement node to check.
		 * @returns {boolean} whether the semicolon is unnecessary.
		 */
		function canRemoveSemicolon(node) {
			if (isRedundantSemi(sourceCode.getLastToken(node))) {
				return true; // `;;` or `;}`
			}
			if (maybeClassFieldAsiHazard(node)) {
				return false;
			}
			if (isOnSameLineWithNextToken(node)) {
				return false; // One liner.
			}

			// continuation characters should not apply to class fields
			if (
				node.type !== "PropertyDefinition" &&
				beforeStatementContinuationChars === "never" &&
				!maybeAsiHazardAfter(node)
			) {
				return true; // ASI works. This statement doesn't connect to the next.
			}
			if (!maybeAsiHazardBefore(sourceCode.getTokenAfter(node))) {
				return true; // ASI works. The next token doesn't connect to this statement.
			}

			return false;
		}

		/**
		 * Checks a node to see if it's the last item in a one-liner block.
		 * Block is any `BlockStatement` or `StaticBlock` node. Block is a one-liner if its
		 * braces (and consequently everything between them) are on the same line.
		 * @param {ASTNode} node The node to check.
		 * @returns {boolean} whether the node is the last item in a one-liner block.
		 */
		function isLastInOneLinerBlock(node) {
			const parent = node.parent;
			const nextToken = sourceCode.getTokenAfter(node);

			if (!nextToken || nextToken.value !== "}") {
				return false;
			}

			if (parent.type === "BlockStatement") {
				return parent.loc.start.line === parent.loc.end.line;
			}

			if (parent.type === "StaticBlock") {
				const openingBrace = sourceCode.getFirstToken(parent, {
					skip: 1,
				}); // skip the `static` token

				return openingBrace.loc.start.line === parent.loc.end.line;
			}

			return false;
		}

		/**
		 * Checks a node to see if it's the last item in a one-liner `ClassBody` node.
		 * ClassBody is a one-liner if its braces (and consequently everything between them) are on the same line.
		 * @param {ASTNode} node The node to check.
		 * @returns {boolean} whether the node is the last item in a one-liner ClassBody.
		 */
		function isLastInOneLinerClassBody(node) {
			const parent = node.parent;
			const nextToken = sourceCode.getTokenAfter(node);

			if (!nextToken || nextToken.value !== "}") {
				return false;
			}

			if (parent.type === "ClassBody") {
				return parent.loc.start.line === parent.loc.end.line;
			}

			return false;
		}

		/**
		 * Checks a node to see if it's followed by a semicolon.
		 * @param {ASTNode} node The node to check.
		 * @returns {void}
		 */
		function checkForSemicolon(node) {
			const isSemi = astUtils.isSemicolonToken(
				sourceCode.getLastToken(node),
			);

			if (never) {
				if (isSemi && canRemoveSemicolon(node)) {
					report(node, true);
				} else if (
					!isSemi &&
					beforeStatementContinuationChars === "always" &&
					node.type !== "PropertyDefinition" &&
					maybeAsiHazardBefore(sourceCode.getTokenAfter(node))
				) {
					report(node);
				}
			} else {
				const oneLinerBlock =
					exceptOneLine && isLastInOneLinerBlock(node);
				const oneLinerClassBody =
					exceptOneLineClassBody && isLastInOneLinerClassBody(node);
				const oneLinerBlockOrClassBody =
					oneLinerBlock || oneLinerClassBody;

				if (isSemi && oneLinerBlockOrClassBody) {
					report(node, true);
				} else if (!isSemi && !oneLinerBlockOrClassBody) {
					report(node);
				}
			}
		}

		/**
		 * Checks to see if there's a semicolon after a variable declaration.
		 * @param {ASTNode} node The node to check.
		 * @returns {void}
		 */
		function checkForSemicolonForVariableDeclaration(node) {
			const parent = node.parent;

			if (
				(parent.type !== "ForStatement" || parent.init !== node) &&
				(!/^For(?:In|Of)Statement/u.test(parent.type) ||
					parent.left !== node)
			) {
				checkForSemicolon(node);
			}
		}

		//--------------------------------------------------------------------------
		// Public API
		//--------------------------------------------------------------------------

		return {
			VariableDeclaration: checkForSemicolonForVariableDeclaration,
			ExpressionStatement: checkForSemicolon,
			ReturnStatement: checkForSemicolon,
			ThrowStatement: checkForSemicolon,
			DoWhileStatement: checkForSemicolon,
			DebuggerStatement: checkForSemicolon,
			BreakStatement: checkForSemicolon,
			ContinueStatement: checkForSemicolon,
			ImportDeclaration: checkForSemicolon,
			ExportAllDeclaration: checkForSemicolon,
			ExportNamedDeclaration(node) {
				if (!node.declaration) {
					checkForSemicolon(node);
				}
			},
			ExportDefaultDeclaration(node) {
				if (
					!/(?:Class|Function)Declaration/u.test(
						node.declaration.type,
					)
				) {
					checkForSemicolon(node);
				}
			},
			PropertyDefinition: checkForSemicolon,
		};
	},
};
