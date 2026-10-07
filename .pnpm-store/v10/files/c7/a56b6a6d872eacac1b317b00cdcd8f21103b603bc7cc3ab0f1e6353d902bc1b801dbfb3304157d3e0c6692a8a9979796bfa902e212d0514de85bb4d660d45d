/**
 * @fileoverview This rule sets a specific indentation style and width for your code
 *
 * @author Teddy Katz
 * @author Vitaly Puzrin
 * @author Gyandeep Singh
 * @deprecated in ESLint v8.53.0
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const KNOWN_NODES = new Set([
	"AssignmentExpression",
	"AssignmentPattern",
	"ArrayExpression",
	"ArrayPattern",
	"ArrowFunctionExpression",
	"AwaitExpression",
	"BlockStatement",
	"BinaryExpression",
	"BreakStatement",
	"CallExpression",
	"CatchClause",
	"ChainExpression",
	"ClassBody",
	"ClassDeclaration",
	"ClassExpression",
	"ConditionalExpression",
	"ContinueStatement",
	"DoWhileStatement",
	"DebuggerStatement",
	"EmptyStatement",
	"ExperimentalRestProperty",
	"ExperimentalSpreadProperty",
	"ExpressionStatement",
	"ForStatement",
	"ForInStatement",
	"ForOfStatement",
	"FunctionDeclaration",
	"FunctionExpression",
	"Identifier",
	"IfStatement",
	"Literal",
	"LabeledStatement",
	"LogicalExpression",
	"MemberExpression",
	"MetaProperty",
	"MethodDefinition",
	"NewExpression",
	"ObjectExpression",
	"ObjectPattern",
	"PrivateIdentifier",
	"Program",
	"Property",
	"PropertyDefinition",
	"RestElement",
	"ReturnStatement",
	"SequenceExpression",
	"SpreadElement",
	"StaticBlock",
	"Super",
	"SwitchCase",
	"SwitchStatement",
	"TaggedTemplateExpression",
	"TemplateElement",
	"TemplateLiteral",
	"ThisExpression",
	"ThrowStatement",
	"TryStatement",
	"UnaryExpression",
	"UpdateExpression",
	"VariableDeclaration",
	"VariableDeclarator",
	"WhileStatement",
	"WithStatement",
	"YieldExpression",
	"JSXFragment",
	"JSXOpeningFragment",
	"JSXClosingFragment",
	"JSXIdentifier",
	"JSXNamespacedName",
	"JSXMemberExpression",
	"JSXEmptyExpression",
	"JSXExpressionContainer",
	"JSXElement",
	"JSXClosingElement",
	"JSXOpeningElement",
	"JSXAttribute",
	"JSXSpreadAttribute",
	"JSXText",
	"ExportDefaultDeclaration",
	"ExportNamedDeclaration",
	"ExportAllDeclaration",
	"ExportSpecifier",
	"ImportDeclaration",
	"ImportSpecifier",
	"ImportDefaultSpecifier",
	"ImportNamespaceSpecifier",
	"ImportExpression",
]);

/*
 * General rule strategy:
 * 1. An OffsetStorage instance stores a map of desired offsets, where each token has a specified offset from another
 *    specified token or to the first column.
 * 2. As the AST is traversed, modify the desired offsets of tokens accordingly. For example, when entering a
 *    BlockStatement, offset all of the tokens in the BlockStatement by 1 indent level from the opening curly
 *    brace of the BlockStatement.
 * 3. After traversing the AST, calculate the expected indentation levels of every token according to the
 *    OffsetStorage container.
 * 4. For each line, compare the expected indentation of the first token to the actual indentation in the file,
 *    and report the token if the two values are not equal.
 */

/**
 * A mutable map that stores (key, value) pairs. The keys are numeric indices, and must be unique.
 * This is intended to be a generic wrapper around a map with non-negative integer keys, so that the underlying implementation
 * can easily be swapped out.
 */
class IndexMap {
	/**
	 * Creates an empty map
	 * @param {number} maxKey The maximum key
	 */
	constructor(maxKey) {
		// Initializing the array with the maximum expected size avoids dynamic reallocations that could degrade performance.
		this._values = Array(maxKey + 1);
	}

	/**
	 * Inserts an entry into the map.
	 * @param {number} key The entry's key
	 * @param {any} value The entry's value
	 * @returns {void}
	 */
	insert(key, value) {
		this._values[key] = value;
	}

	/**
	 * Finds the value of the entry with the largest key less than or equal to the provided key
	 * @param {number} key The provided key
	 * @returns {*|undefined} The value of the found entry, or undefined if no such entry exists.
	 */
	findLastNotAfter(key) {
		const values = this._values;

		for (let index = key; index >= 0; index--) {
			const value = values[index];

			if (value) {
				return value;
			}
		}
		return void 0;
	}

	/**
	 * Deletes all of the keys in the interval [start, end)
	 * @param {number} start The start of the range
	 * @param {number} end The end of the range
	 * @returns {void}
	 */
	deleteRange(start, end) {
		this._values.fill(void 0, start, end);
	}
}

/**
 * A helper class to get token-based info related to indentation
 */
class TokenInfo {
	/**
	 * @param {SourceCode} sourceCode A SourceCode object
	 */
	constructor(sourceCode) {
		this.sourceCode = sourceCode;
		this.firstTokensByLineNumber = new Map();
		const tokens = sourceCode.tokensAndComments;

		for (let i = 0; i < tokens.length; i++) {
			const token = tokens[i];

			if (!this.firstTokensByLineNumber.has(token.loc.start.line)) {
				this.firstTokensByLineNumber.set(token.loc.start.line, token);
			}
			if (
				!this.firstTokensByLineNumber.has(token.loc.end.line) &&
				sourceCode.text
					.slice(
						token.range[1] - token.loc.end.column,
						token.range[1],
					)
					.trim()
			) {
				this.firstTokensByLineNumber.set(token.loc.end.line, token);
			}
		}
	}

	/**
	 * Gets the first token on a given token's line
	 * @param {Token|ASTNode} token a node or token
	 * @returns {Token} The first token on the given line
	 */
	getFirstTokenOfLine(token) {
		return this.firstTokensByLineNumber.get(token.loc.start.line);
	}

	/**
	 * Determines whether a token is the first token in its line
	 * @param {Token} token The token
	 * @returns {boolean} `true` if the token is the first on its line
	 */
	isFirstTokenOfLine(token) {
		return this.getFirstTokenOfLine(token) === token;
	}

	/**
	 * Get the actual indent of a token
	 * @param {Token} token Token to examine. This should be the first token on its line.
	 * @returns {string} The indentation characters that precede the token
	 */
	getTokenIndent(token) {
		return this.sourceCode.text.slice(
			token.range[0] - token.loc.start.column,
			token.range[0],
		);
	}
}

/**
 * A class to store information on desired offsets of tokens from each other
 */
class OffsetStorage {
	/**
	 * @param {TokenInfo} tokenInfo a TokenInfo instance
	 * @param {number} indentSize The desired size of each indentation level
	 * @param {string} indentType The indentation character
	 * @param {number} maxIndex The maximum end index of any token
	 */
	constructor(tokenInfo, indentSize, indentType, maxIndex) {
		this._tokenInfo = tokenInfo;
		this._indentSize = indentSize;
		this._indentType = indentType;

		this._indexMap = new IndexMap(maxIndex);
		this._indexMap.insert(0, { offset: 0, from: null, force: false });

		this._lockedFirstTokens = new WeakMap();
		this._desiredIndentCache = new WeakMap();
		this._ignoredTokens = new WeakSet();
	}

	_getOffsetDescriptor(token) {
		return this._indexMap.findLastNotAfter(token.range[0]);
	}

	/**
	 * Sets the offset column of token B to match the offset column of token A.
	 * - **WARNING**: This matches a *column*, even if baseToken is not the first token on its line. In
	 * most cases, `setDesiredOffset` should be used instead.
	 * @param {Token} baseToken The first token
	 * @param {Token} offsetToken The second token, whose offset should be matched to the first token
	 * @returns {void}
	 */
	matchOffsetOf(baseToken, offsetToken) {
		/*
		 * lockedFirstTokens is a map from a token whose indentation is controlled by the "first" option to
		 * the token that it depends on. For example, with the `ArrayExpression: first` option, the first
		 * token of each element in the array after the first will be mapped to the first token of the first
		 * element. The desired indentation of each of these tokens is computed based on the desired indentation
		 * of the "first" element, rather than through the normal offset mechanism.
		 */
		this._lockedFirstTokens.set(offsetToken, baseToken);
	}

	/**
	 * Sets the desired offset of a token.
	 *
	 * This uses a line-based offset collapsing behavior to handle tokens on the same line.
	 * For example, consider the following two cases:
	 *
	 * (
	 *     [
	 *         bar
	 *     ]
	 * )
	 *
	 * ([
	 *     bar
	 * ])
	 *
	 * Based on the first case, it's clear that the `bar` token needs to have an offset of 1 indent level (4 spaces) from
	 * the `[` token, and the `[` token has to have an offset of 1 indent level from the `(` token. Since the `(` token is
	 * the first on its line (with an indent of 0 spaces), the `bar` token needs to be offset by 2 indent levels (8 spaces)
	 * from the start of its line.
	 *
	 * However, in the second case `bar` should only be indented by 4 spaces. This is because the offset of 1 indent level
	 * between the `(` and the `[` tokens gets "collapsed" because the two tokens are on the same line. As a result, the
	 * `(` token is mapped to the `[` token with an offset of 0, and the rule correctly decides that `bar` should be indented
	 * by 1 indent level from the start of the line.
	 *
	 * This is useful because rule listeners can usually just call `setDesiredOffset` for all the tokens in the node,
	 * without needing to check which lines those tokens are on.
	 *
	 * Note that since collapsing only occurs when two tokens are on the same line, there are a few cases where non-intuitive
	 * behavior can occur. For example, consider the following cases:
	 *
	 * foo(
	 * ).
	 *     bar(
	 *         baz
	 *     )
	 *
	 * foo(
	 * ).bar(
	 *     baz
	 * )
	 *
	 * Based on the first example, it would seem that `bar` should be offset by 1 indent level from `foo`, and `baz`
	 * should be offset by 1 indent level from `bar`. However, this is not correct, because it would result in `baz`
	 * being indented by 2 indent levels in the second case (since `foo`, `bar`, and `baz` are all on separate lines, no
	 * collapsing would occur).
	 *
	 * Instead, the correct way would be to offset `baz` by 1 level from `bar`, offset `bar` by 1 level from the `)`, and
	 * offset the `)` by 0 levels from `foo`. This ensures that the offset between `bar` and the `)` are correctly collapsed
	 * in the second case.
	 * @param {Token} token The token
	 * @param {Token} fromToken The token that `token` should be offset from
	 * @param {number} offset The desired indent level
	 * @returns {void}
	 */
	setDesiredOffset(token, fromToken, offset) {
		return this.setDesiredOffsets(token.range, fromToken, offset);
	}

	/**
	 * Sets the desired offset of all tokens in a range
	 * It's common for node listeners in this file to need to apply the same offset to a large, contiguous range of tokens.
	 * Moreover, the offset of any given token is usually updated multiple times (roughly once for each node that contains
	 * it). This means that the offset of each token is updated O(AST depth) times.
	 * It would not be performant to store and update the offsets for each token independently, because the rule would end
	 * up having a time complexity of O(number of tokens * AST depth), which is quite slow for large files.
	 *
	 * Instead, the offset tree is represented as a collection of contiguous offset ranges in a file. For example, the following
	 * list could represent the state of the offset tree at a given point:
	 *
	 * - Tokens starting in the interval [0, 15) are aligned with the beginning of the file
	 * - Tokens starting in the interval [15, 30) are offset by 1 indent level from the `bar` token
	 * - Tokens starting in the interval [30, 43) are offset by 1 indent level from the `foo` token
	 * - Tokens starting in the interval [43, 820) are offset by 2 indent levels from the `bar` token
	 * - Tokens starting in the interval [820, ∞) are offset by 1 indent level from the `baz` token
	 *
	 * The `setDesiredOffsets` methods inserts ranges like the ones above. The third line above would be inserted by using:
	 * `setDesiredOffsets([30, 43], fooToken, 1);`
	 * @param {[number, number]} range A [start, end] pair. All tokens with range[0] <= token.start < range[1] will have the offset applied.
	 * @param {Token} fromToken The token that this is offset from
	 * @param {number} offset The desired indent level
	 * @param {boolean} force `true` if this offset should not use the normal collapsing behavior. This should almost always be false.
	 * @returns {void}
	 */
	setDesiredOffsets(range, fromToken, offset, force) {
		/*
		 * Offset ranges are stored as a collection of nodes, where each node maps a numeric key to an offset
		 * descriptor. The tree for the example above would have the following nodes:
		 *
		 * * key: 0, value: { offset: 0, from: null }
		 * * key: 15, value: { offset: 1, from: barToken }
		 * * key: 30, value: { offset: 1, from: fooToken }
		 * * key: 43, value: { offset: 2, from: barToken }
		 * * key: 820, value: { offset: 1, from: bazToken }
		 *
		 * To find the offset descriptor for any given token, one needs to find the node with the largest key
		 * which is <= token.start. To make this operation fast, the nodes are stored in a map indexed by key.
		 */

		const descriptorToInsert = { offset, from: fromToken, force };

		const descriptorAfterRange = this._indexMap.findLastNotAfter(range[1]);

		const fromTokenIsInRange =
			fromToken &&
			fromToken.range[0] >= range[0] &&
			fromToken.range[1] <= range[1];
		const fromTokenDescriptor =
			fromTokenIsInRange && this._getOffsetDescriptor(fromToken);

		// First, remove any existing nodes in the range from the map.
		this._indexMap.deleteRange(range[0] + 1, range[1]);

		// Insert a new node into the map for this range
		this._indexMap.insert(range[0], descriptorToInsert);

		/*
		 * To avoid circular offset dependencies, keep the `fromToken` token mapped to whatever it was mapped to previously,
		 * even if it's in the current range.
		 */
		if (fromTokenIsInRange) {
			this._indexMap.insert(fromToken.range[0], fromTokenDescriptor);
			this._indexMap.insert(fromToken.range[1], descriptorToInsert);
		}

		/*
		 * To avoid modifying the offset of tokens after the range, insert another node to keep the offset of the following
		 * tokens the same as it was before.
		 */
		this._indexMap.insert(range[1], descriptorAfterRange);
	}

	/**
	 * Gets the desired indent of a token
	 * @param {Token} token The token
	 * @returns {string} The desired indent of the token
	 */
	getDesiredIndent(token) {
		if (!this._desiredIndentCache.has(token)) {
			if (this._ignoredTokens.has(token)) {
				/*
				 * If the token is ignored, use the actual indent of the token as the desired indent.
				 * This ensures that no errors are reported for this token.
				 */
				this._desiredIndentCache.set(
					token,
					this._tokenInfo.getTokenIndent(token),
				);
			} else if (this._lockedFirstTokens.has(token)) {
				const firstToken = this._lockedFirstTokens.get(token);

				this._desiredIndentCache.set(
					token,

					// (indentation for the first element's line)
					this.getDesiredIndent(
						this._tokenInfo.getFirstTokenOfLine(firstToken),
					) +
						// (space between the start of the first element's line and the first element)
						this._indentType.repeat(
							firstToken.loc.start.column -
								this._tokenInfo.getFirstTokenOfLine(firstToken)
									.loc.start.column,
						),
				);
			} else {
				const offsetInfo = this._getOffsetDescriptor(token);
				const offset =
					offsetInfo.from &&
					offsetInfo.from.loc.start.line === token.loc.start.line &&
					!/^\s*?\n/u.test(token.value) &&
					!offsetInfo.force
						? 0
						: offsetInfo.offset * this._indentSize;

				this._desiredIndentCache.set(
					token,
					(offsetInfo.from
						? this.getDesiredIndent(offsetInfo.from)
						: "") + this._indentType.repeat(offset),
				);
			}
		}
		return this._desiredIndentCache.get(token);
	}

	/**
	 * Ignores a token, preventing it from being reported.
	 * @param {Token} token The token
	 * @returns {void}
	 */
	ignoreToken(token) {
		if (this._tokenInfo.isFirstTokenOfLine(token)) {
			this._ignoredTokens.add(token);
		}
	}

	/**
	 * Gets the first token that the given token's indentation is dependent on
	 * @param {Token} token The token
	 * @returns {Token} The token that the given token depends on, or `null` if the given token is at the top level
	 */
	getFirstDependency(token) {
		return this._getOffsetDescriptor(token).from;
	}
}

const ELEMENT_LIST_SCHEMA = {
	oneOf: [
		{
			type: "integer",
			minimum: 0,
		},
		{
			enum: ["first", "off"],
		},
	],
};

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
						name: "indent",
						url: "https://eslint.style/rules/indent",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Enforce consistent indentation",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/indent",
		},

		fixable: "whitespace",

		schema: [
			{
				oneOf: [
					{
						enum: ["tab"],
					},
					{
						type: "integer",
						minimum: 0,
					},
				],
			},
			{
				type: "object",
				properties: {
					SwitchCase: {
						type: "integer",
						minimum: 0,
						default: 0,
					},
					VariableDeclarator: {
						oneOf: [
							ELEMENT_LIST_SCHEMA,
							{
								type: "object",
								properties: {
									var: ELEMENT_LIST_SCHEMA,
									let: ELEMENT_LIST_SCHEMA,
									const: ELEMENT_LIST_SCHEMA,
								},
								additionalProperties: false,
							},
						],
					},
					outerIIFEBody: {
						oneOf: [
							{
								type: "integer",
								minimum: 0,
							},
							{
								enum: ["off"],
							},
						],
					},
					MemberExpression: {
						oneOf: [
							{
								type: "integer",
								minimum: 0,
							},
							{
								enum: ["off"],
							},
						],
					},
					FunctionDeclaration: {
						type: "object",
						properties: {
							parameters: ELEMENT_LIST_SCHEMA,
							body: {
								type: "integer",
								minimum: 0,
							},
						},
						additionalProperties: false,
					},
					FunctionExpression: {
						type: "object",
						properties: {
							parameters: ELEMENT_LIST_SCHEMA,
							body: {
								type: "integer",
								minimum: 0,
							},
						},
						additionalProperties: false,
					},
					StaticBlock: {
						type: "object",
						properties: {
							body: {
								type: "integer",
								minimum: 0,
							},
						},
						additionalProperties: false,
					},
					CallExpression: {
						type: "object",
						properties: {
							arguments: ELEMENT_LIST_SCHEMA,
						},
						additionalProperties: false,
					},
					ArrayExpression: ELEMENT_LIST_SCHEMA,
					ObjectExpression: ELEMENT_LIST_SCHEMA,
					ImportDeclaration: ELEMENT_LIST_SCHEMA,
					flatTernaryExpressions: {
						type: "boolean",
						default: false,
					},
					offsetTernaryExpressions: {
						type: "boolean",
						default: false,
					},
					ignoredNodes: {
						type: "array",
						items: {
							type: "string",
							not: {
								pattern: ":exit$",
							},
						},
					},
					ignoreComments: {
						type: "boolean",
						default: false,
					},
				},
				additionalProperties: false,
			},
		],
		messages: {
			wrongIndentation:
				"Expected indentation of {{expected}} but found {{actual}}.",
		},
	},

	create(context) {
		const DEFAULT_VARIABLE_INDENT = 1;
		const DEFAULT_PARAMETER_INDENT = 1;
		const DEFAULT_FUNCTION_BODY_INDENT = 1;

		let indentType = "space";
		let indentSize = 4;
		const options = {
			SwitchCase: 0,
			VariableDeclarator: {
				var: DEFAULT_VARIABLE_INDENT,
				let: DEFAULT_VARIABLE_INDENT,
				const: DEFAULT_VARIABLE_INDENT,
			},
			outerIIFEBody: 1,
			FunctionDeclaration: {
				parameters: DEFAULT_PARAMETER_INDENT,
				body: DEFAULT_FUNCTION_BODY_INDENT,
			},
			FunctionExpression: {
				parameters: DEFAULT_PARAMETER_INDENT,
				body: DEFAULT_FUNCTION_BODY_INDENT,
			},
			StaticBlock: {
				body: DEFAULT_FUNCTION_BODY_INDENT,
			},
			CallExpression: {
				arguments: DEFAULT_PARAMETER_INDENT,
			},
			MemberExpression: 1,
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: false,
			ignoredNodes: [],
			ignoreComments: false,
		};

		if (context.options.length) {
			if (context.options[0] === "tab") {
				indentSize = 1;
				indentType = "tab";
			} else {
				indentSize = context.options[0];
				indentType = "space";
			}

			if (context.options[1]) {
				Object.assign(options, context.options[1]);

				if (
					typeof options.VariableDeclarator === "number" ||
					options.VariableDeclarator === "first"
				) {
					options.VariableDeclarator = {
						var: options.VariableDeclarator,
						let: options.VariableDeclarator,
						const: options.VariableDeclarator,
					};
				}
			}
		}

		const sourceCode = context.sourceCode;
		const tokenInfo = new TokenInfo(sourceCode);
		const offsets = new OffsetStorage(
			tokenInfo,
			indentSize,
			indentType === "space" ? " " : "\t",
			sourceCode.text.length,
		);
		const parameterParens = new WeakSet();

		/**
		 * Creates an error message for a line, given the expected/actual indentation.
		 * @param {number} expectedAmount The expected amount of indentation characters for this line
		 * @param {number} actualSpaces The actual number of indentation spaces that were found on this line
		 * @param {number} actualTabs The actual number of indentation tabs that were found on this line
		 * @returns {string} An error message for this line
		 */
		function createErrorMessageData(
			expectedAmount,
			actualSpaces,
			actualTabs,
		) {
			const expectedStatement = `${expectedAmount} ${indentType}${expectedAmount === 1 ? "" : "s"}`; // e.g. "2 tabs"
			const foundSpacesWord = `space${actualSpaces === 1 ? "" : "s"}`; // e.g. "space"
			const foundTabsWord = `tab${actualTabs === 1 ? "" : "s"}`; // e.g. "tabs"
			let foundStatement;

			if (actualSpaces > 0) {
				/*
				 * Abbreviate the message if the expected indentation is also spaces.
				 * e.g. 'Expected 4 spaces but found 2' rather than 'Expected 4 spaces but found 2 spaces'
				 */
				foundStatement =
					indentType === "space"
						? actualSpaces
						: `${actualSpaces} ${foundSpacesWord}`;
			} else if (actualTabs > 0) {
				foundStatement =
					indentType === "tab"
						? actualTabs
						: `${actualTabs} ${foundTabsWord}`;
			} else {
				foundStatement = "0";
			}
			return {
				expected: expectedStatement,
				actual: foundStatement,
			};
		}

		/**
		 * Reports a given indent violation
		 * @param {Token} token Token violating the indent rule
		 * @param {string} neededIndent Expected indentation string
		 * @returns {void}
		 */
		function report(token, neededIndent) {
			const actualIndent = Array.from(tokenInfo.getTokenIndent(token));
			const numSpaces = actualIndent.filter(char => char === " ").length;
			const numTabs = actualIndent.filter(char => char === "\t").length;

			context.report({
				node: token,
				messageId: "wrongIndentation",
				data: createErrorMessageData(
					neededIndent.length,
					numSpaces,
					numTabs,
				),
				loc: {
					start: { line: token.loc.start.line, column: 0 },
					end: {
						line: token.loc.start.line,
						column: token.loc.start.column,
					},
				},
				fix(fixer) {
					const range = [
						token.range[0] - token.loc.start.column,
						token.range[0],
					];
					const newText = neededIndent;

					return fixer.replaceTextRange(range, newText);
				},
			});
		}

		/**
		 * Checks if a token's indentation is correct
		 * @param {Token} token Token to examine
		 * @param {string} desiredIndent Desired indentation of the string
		 * @returns {boolean} `true` if the token's indentation is correct
		 */
		function validateTokenIndent(token, desiredIndent) {
			const indentation = tokenInfo.getTokenIndent(token);

			return (
				indentation === desiredIndent ||
				// To avoid conflicts with no-mixed-spaces-and-tabs, don't report mixed spaces and tabs.
				(indentation.includes(" ") && indentation.includes("\t"))
			);
		}

		/**
		 * Check to see if the node is a file level IIFE
		 * @param {ASTNode} node The function node to check.
		 * @returns {boolean} True if the node is the outer IIFE
		 */
		function isOuterIIFE(node) {
			/*
			 * Verify that the node is an IIFE
			 */
			if (
				!node.parent ||
				node.parent.type !== "CallExpression" ||
				node.parent.callee !== node
			) {
				return false;
			}

			/*
			 * Navigate legal ancestors to determine whether this IIFE is outer.
			 * A "legal ancestor" is an expression or statement that causes the function to get executed immediately.
			 * For example, `!(function(){})()` is an outer IIFE even though it is preceded by a ! operator.
			 */
			let statement = node.parent && node.parent.parent;

			while (
				(statement.type === "UnaryExpression" &&
					["!", "~", "+", "-"].includes(statement.operator)) ||
				statement.type === "AssignmentExpression" ||
				statement.type === "LogicalExpression" ||
				statement.type === "SequenceExpression" ||
				statement.type === "VariableDeclarator"
			) {
				statement = statement.parent;
			}

			return (
				(statement.type === "ExpressionStatement" ||
					statement.type === "VariableDeclaration") &&
				statement.parent.type === "Program"
			);
		}

		/**
		 * Counts the number of linebreaks that follow the last non-whitespace character in a string
		 * @param {string} string The string to check
		 * @returns {number} The number of JavaScript linebreaks that follow the last non-whitespace character,
		 * or the total number of linebreaks if the string is all whitespace.
		 */
		function countTrailingLinebreaks(string) {
			const trailingWhitespace = string.match(/\s*$/u)[0];
			const linebreakMatches = trailingWhitespace.match(
				astUtils.createGlobalLinebreakMatcher(),
			);

			return linebreakMatches === null ? 0 : linebreakMatches.length;
		}

		/**
		 * Check indentation for lists of elements (arrays, objects, function params)
		 * @param {ASTNode[]} elements List of elements that should be offset
		 * @param {Token} startToken The start token of the list that element should be aligned against, e.g. '['
		 * @param {Token} endToken The end token of the list, e.g. ']'
		 * @param {number|string} offset The amount that the elements should be offset
		 * @returns {void}
		 */
		function addElementListIndent(elements, startToken, endToken, offset) {
			/**
			 * Gets the first token of a given element, including surrounding parentheses.
			 * @param {ASTNode} element A node in the `elements` list
			 * @returns {Token} The first token of this element
			 */
			function getFirstToken(element) {
				let token = sourceCode.getTokenBefore(element);

				while (
					astUtils.isOpeningParenToken(token) &&
					token !== startToken
				) {
					token = sourceCode.getTokenBefore(token);
				}
				return sourceCode.getTokenAfter(token);
			}

			// Run through all the tokens in the list, and offset them by one indent level (mainly for comments, other things will end up overridden)
			offsets.setDesiredOffsets(
				[startToken.range[1], endToken.range[0]],
				startToken,
				typeof offset === "number" ? offset : 1,
			);
			offsets.setDesiredOffset(endToken, startToken, 0);

			// If the preference is "first" but there is no first element (e.g. sparse arrays w/ empty first slot), fall back to 1 level.
			if (offset === "first" && elements.length && !elements[0]) {
				return;
			}
			elements.forEach((element, index) => {
				if (!element) {
					// Skip holes in arrays
					return;
				}
				if (offset === "off") {
					// Ignore the first token of every element if the "off" option is used
					offsets.ignoreToken(getFirstToken(element));
				}

				// Offset the following elements correctly relative to the first element
				if (index === 0) {
					return;
				}
				if (
					offset === "first" &&
					tokenInfo.isFirstTokenOfLine(getFirstToken(element))
				) {
					offsets.matchOffsetOf(
						getFirstToken(elements[0]),
						getFirstToken(element),
					);
				} else {
					const previousElement = elements[index - 1];
					const firstTokenOfPreviousElement =
						previousElement && getFirstToken(previousElement);
					const previousElementLastToken =
						previousElement &&
						sourceCode.getLastToken(previousElement);

					if (
						previousElement &&
						previousElementLastToken.loc.end.line -
							countTrailingLinebreaks(
								previousElementLastToken.value,
							) >
							startToken.loc.end.line
					) {
						offsets.setDesiredOffsets(
							[previousElement.range[1], element.range[1]],
							firstTokenOfPreviousElement,
							0,
						);
					}
				}
			});
		}

		/**
		 * Check and decide whether to check for indentation for blockless nodes
		 * Scenarios are for or while statements without braces around them
		 * @param {ASTNode} node node to examine
		 * @returns {void}
		 */
		function addBlocklessNodeIndent(node) {
			if (node.type !== "BlockStatement") {
				const lastParentToken = sourceCode.getTokenBefore(
					node,
					astUtils.isNotOpeningParenToken,
				);

				let firstBodyToken = sourceCode.getFirstToken(node);
				let lastBodyToken = sourceCode.getLastToken(node);

				while (
					astUtils.isOpeningParenToken(
						sourceCode.getTokenBefore(firstBodyToken),
					) &&
					astUtils.isClosingParenToken(
						sourceCode.getTokenAfter(lastBodyToken),
					)
				) {
					firstBodyToken = sourceCode.getTokenBefore(firstBodyToken);
					lastBodyToken = sourceCode.getTokenAfter(lastBodyToken);
				}

				offsets.setDesiredOffsets(
					[firstBodyToken.range[0], lastBodyToken.range[1]],
					lastParentToken,
					1,
				);
			}
		}

		/**
		 * Checks the indentation for nodes that are like function calls (`CallExpression` and `NewExpression`)
		 * @param {ASTNode} node A CallExpression or NewExpression node
		 * @returns {void}
		 */
		function addFunctionCallIndent(node) {
			let openingParen;

			if (node.arguments.length) {
				openingParen = sourceCode.getFirstTokenBetween(
					node.callee,
					node.arguments[0],
					astUtils.isOpeningParenToken,
				);
			} else {
				openingParen = sourceCode.getLastToken(node, 1);
			}
			const closingParen = sourceCode.getLastToken(node);

			parameterParens.add(openingParen);
			parameterParens.add(closingParen);

			/*
			 * If `?.` token exists, set desired offset for that.
			 * This logic is copied from `MemberExpression`'s.
			 */
			if (node.optional) {
				const dotToken = sourceCode.getTokenAfter(
					node.callee,
					astUtils.isQuestionDotToken,
				);
				const calleeParenCount = sourceCode.getTokensBetween(
					node.callee,
					dotToken,
					{ filter: astUtils.isClosingParenToken },
				).length;
				const firstTokenOfCallee = calleeParenCount
					? sourceCode.getTokenBefore(node.callee, {
							skip: calleeParenCount - 1,
						})
					: sourceCode.getFirstToken(node.callee);
				const lastTokenOfCallee = sourceCode.getTokenBefore(dotToken);
				const offsetBase =
					lastTokenOfCallee.loc.end.line ===
					openingParen.loc.start.line
						? lastTokenOfCallee
						: firstTokenOfCallee;

				offsets.setDesiredOffset(dotToken, offsetBase, 1);
			}

			const offsetAfterToken =
				node.callee.type === "TaggedTemplateExpression"
					? sourceCode.getFirstToken(node.callee.quasi)
					: openingParen;
			const offsetToken = sourceCode.getTokenBefore(offsetAfterToken);

			offsets.setDesiredOffset(openingParen, offsetToken, 0);

			addElementListIndent(
				node.arguments,
				openingParen,
				closingParen,
				options.CallExpression.arguments,
			);
		}

		/**
		 * Checks the indentation of parenthesized values, given a list of tokens in a program
		 * @param {Token[]} tokens A list of tokens
		 * @returns {void}
		 */
		function addParensIndent(tokens) {
			const parenStack = [];
			const parenPairs = [];

			for (let i = 0; i < tokens.length; i++) {
				const nextToken = tokens[i];

				if (astUtils.isOpeningParenToken(nextToken)) {
					parenStack.push(nextToken);
				} else if (astUtils.isClosingParenToken(nextToken)) {
					parenPairs.push({
						left: parenStack.pop(),
						right: nextToken,
					});
				}
			}

			for (let i = parenPairs.length - 1; i >= 0; i--) {
				const leftParen = parenPairs[i].left;
				const rightParen = parenPairs[i].right;

				// We only want to handle parens around expressions, so exclude parentheses that are in function parameters and function call arguments.
				if (
					!parameterParens.has(leftParen) &&
					!parameterParens.has(rightParen)
				) {
					const parenthesizedTokens = new Set(
						sourceCode.getTokensBetween(leftParen, rightParen),
					);

					parenthesizedTokens.forEach(token => {
						if (
							!parenthesizedTokens.has(
								offsets.getFirstDependency(token),
							)
						) {
							offsets.setDesiredOffset(token, leftParen, 1);
						}
					});
				}

				offsets.setDesiredOffset(rightParen, leftParen, 0);
			}
		}

		/**
		 * Ignore all tokens within an unknown node whose offset do not depend
		 * on another token's offset within the unknown node
		 * @param {ASTNode} node Unknown Node
		 * @returns {void}
		 */
		function ignoreNode(node) {
			const unknownNodeTokens = new Set(
				sourceCode.getTokens(node, { includeComments: true }),
			);

			unknownNodeTokens.forEach(token => {
				if (!unknownNodeTokens.has(offsets.getFirstDependency(token))) {
					const firstTokenOfLine =
						tokenInfo.getFirstTokenOfLine(token);

					if (token === firstTokenOfLine) {
						offsets.ignoreToken(token);
					} else {
						offsets.setDesiredOffset(token, firstTokenOfLine, 0);
					}
				}
			});
		}

		/**
		 * Check whether the given token is on the first line of a statement.
		 * @param {Token} token The token to check.
		 * @param {ASTNode} leafNode The expression node that the token belongs directly.
		 * @returns {boolean} `true` if the token is on the first line of a statement.
		 */
		function isOnFirstLineOfStatement(token, leafNode) {
			let node = leafNode;

			while (
				node.parent &&
				!node.parent.type.endsWith("Statement") &&
				!node.parent.type.endsWith("Declaration")
			) {
				node = node.parent;
			}
			node = node.parent;

			return !node || node.loc.start.line === token.loc.start.line;
		}

		/**
		 * Check whether there are any blank (whitespace-only) lines between
		 * two tokens on separate lines.
		 * @param {Token} firstToken The first token.
		 * @param {Token} secondToken The second token.
		 * @returns {boolean} `true` if the tokens are on separate lines and
		 *   there exists a blank line between them, `false` otherwise.
		 */
		function hasBlankLinesBetween(firstToken, secondToken) {
			const firstTokenLine = firstToken.loc.end.line;
			const secondTokenLine = secondToken.loc.start.line;

			if (
				firstTokenLine === secondTokenLine ||
				firstTokenLine === secondTokenLine - 1
			) {
				return false;
			}

			for (
				let line = firstTokenLine + 1;
				line < secondTokenLine;
				++line
			) {
				if (!tokenInfo.firstTokensByLineNumber.has(line)) {
					return true;
				}
			}

			return false;
		}

		const ignoredNodeFirstTokens = new Set();

		const baseOffsetListeners = {
			"ArrayExpression, ArrayPattern"(node) {
				const openingBracket = sourceCode.getFirstToken(node);
				const closingBracket = sourceCode.getTokenAfter(
					[...node.elements].reverse().find(_ => _) || openingBracket,
					astUtils.isClosingBracketToken,
				);

				addElementListIndent(
					node.elements,
					openingBracket,
					closingBracket,
					options.ArrayExpression,
				);
			},

			"ObjectExpression, ObjectPattern"(node) {
				const openingCurly = sourceCode.getFirstToken(node);
				const closingCurly = sourceCode.getTokenAfter(
					node.properties.length
						? node.properties.at(-1)
						: openingCurly,
					astUtils.isClosingBraceToken,
				);

				addElementListIndent(
					node.properties,
					openingCurly,
					closingCurly,
					options.ObjectExpression,
				);
			},

			ArrowFunctionExpression(node) {
				const maybeOpeningParen = sourceCode.getFirstToken(node, {
					skip: node.async ? 1 : 0,
				});

				if (astUtils.isOpeningParenToken(maybeOpeningParen)) {
					const openingParen = maybeOpeningParen;
					const closingParen = sourceCode.getTokenBefore(
						node.body,
						astUtils.isClosingParenToken,
					);

					parameterParens.add(openingParen);
					parameterParens.add(closingParen);
					addElementListIndent(
						node.params,
						openingParen,
						closingParen,
						options.FunctionExpression.parameters,
					);
				}

				addBlocklessNodeIndent(node.body);
			},

			AssignmentExpression(node) {
				const operator = sourceCode.getFirstTokenBetween(
					node.left,
					node.right,
					token => token.value === node.operator,
				);

				offsets.setDesiredOffsets(
					[operator.range[0], node.range[1]],
					sourceCode.getLastToken(node.left),
					1,
				);
				offsets.ignoreToken(operator);
				offsets.ignoreToken(sourceCode.getTokenAfter(operator));
			},

			"BinaryExpression, LogicalExpression"(node) {
				const operator = sourceCode.getFirstTokenBetween(
					node.left,
					node.right,
					token => token.value === node.operator,
				);

				/*
				 * For backwards compatibility, don't check BinaryExpression indents, e.g.
				 * var foo = bar &&
				 *                   baz;
				 */

				const tokenAfterOperator = sourceCode.getTokenAfter(operator);

				offsets.ignoreToken(operator);
				offsets.ignoreToken(tokenAfterOperator);
				offsets.setDesiredOffset(tokenAfterOperator, operator, 0);
			},

			"BlockStatement, ClassBody"(node) {
				let blockIndentLevel;

				if (node.parent && isOuterIIFE(node.parent)) {
					blockIndentLevel = options.outerIIFEBody;
				} else if (
					node.parent &&
					(node.parent.type === "FunctionExpression" ||
						node.parent.type === "ArrowFunctionExpression")
				) {
					blockIndentLevel = options.FunctionExpression.body;
				} else if (
					node.parent &&
					node.parent.type === "FunctionDeclaration"
				) {
					blockIndentLevel = options.FunctionDeclaration.body;
				} else {
					blockIndentLevel = 1;
				}

				/*
				 * For blocks that aren't lone statements, ensure that the opening curly brace
				 * is aligned with the parent.
				 */
				if (!astUtils.STATEMENT_LIST_PARENTS.has(node.parent.type)) {
					offsets.setDesiredOffset(
						sourceCode.getFirstToken(node),
						sourceCode.getFirstToken(node.parent),
						0,
					);
				}

				addElementListIndent(
					node.body,
					sourceCode.getFirstToken(node),
					sourceCode.getLastToken(node),
					blockIndentLevel,
				);
			},

			CallExpression: addFunctionCallIndent,

			"ClassDeclaration[superClass], ClassExpression[superClass]"(node) {
				const classToken = sourceCode.getFirstToken(node);
				const extendsToken = sourceCode.getTokenBefore(
					node.superClass,
					astUtils.isNotOpeningParenToken,
				);

				offsets.setDesiredOffsets(
					[extendsToken.range[0], node.body.range[0]],
					classToken,
					1,
				);
			},

			ConditionalExpression(node) {
				const firstToken = sourceCode.getFirstToken(node);

				// `flatTernaryExpressions` option is for the following style:
				// var a =
				//     foo > 0 ? bar :
				//     foo < 0 ? baz :
				//     /*else*/ qiz ;
				if (
					!options.flatTernaryExpressions ||
					!astUtils.isTokenOnSameLine(node.test, node.consequent) ||
					isOnFirstLineOfStatement(firstToken, node)
				) {
					const questionMarkToken = sourceCode.getFirstTokenBetween(
						node.test,
						node.consequent,
						token =>
							token.type === "Punctuator" && token.value === "?",
					);
					const colonToken = sourceCode.getFirstTokenBetween(
						node.consequent,
						node.alternate,
						token =>
							token.type === "Punctuator" && token.value === ":",
					);

					const firstConsequentToken =
						sourceCode.getTokenAfter(questionMarkToken);
					const lastConsequentToken =
						sourceCode.getTokenBefore(colonToken);
					const firstAlternateToken =
						sourceCode.getTokenAfter(colonToken);

					offsets.setDesiredOffset(questionMarkToken, firstToken, 1);
					offsets.setDesiredOffset(colonToken, firstToken, 1);

					offsets.setDesiredOffset(
						firstConsequentToken,
						firstToken,
						firstConsequentToken.type === "Punctuator" &&
							options.offsetTernaryExpressions
							? 2
							: 1,
					);

					/*
					 * The alternate and the consequent should usually have the same indentation.
					 * If they share part of a line, align the alternate against the first token of the consequent.
					 * This allows the alternate to be indented correctly in cases like this:
					 * foo ? (
					 *   bar
					 * ) : ( // this '(' is aligned with the '(' above, so it's considered to be aligned with `foo`
					 *   baz // as a result, `baz` is offset by 1 rather than 2
					 * )
					 */
					if (
						lastConsequentToken.loc.end.line ===
						firstAlternateToken.loc.start.line
					) {
						offsets.setDesiredOffset(
							firstAlternateToken,
							firstConsequentToken,
							0,
						);
					} else {
						/**
						 * If the alternate and consequent do not share part of a line, offset the alternate from the first
						 * token of the conditional expression. For example:
						 * foo ? bar
						 *   : baz
						 *
						 * If `baz` were aligned with `bar` rather than being offset by 1 from `foo`, `baz` would end up
						 * having no expected indentation.
						 */
						offsets.setDesiredOffset(
							firstAlternateToken,
							firstToken,
							firstAlternateToken.type === "Punctuator" &&
								options.offsetTernaryExpressions
								? 2
								: 1,
						);
					}
				}
			},

			"DoWhileStatement, WhileStatement, ForInStatement, ForOfStatement, WithStatement":
				node => addBlocklessNodeIndent(node.body),

			ExportNamedDeclaration(node) {
				if (node.declaration === null) {
					const closingCurly = sourceCode.getLastToken(
						node,
						astUtils.isClosingBraceToken,
					);

					// Indent the specifiers in `export {foo, bar, baz}`
					addElementListIndent(
						node.specifiers,
						sourceCode.getFirstToken(node, { skip: 1 }),
						closingCurly,
						1,
					);

					if (node.source) {
						// Indent everything after and including the `from` token in `export {foo, bar, baz} from 'qux'`
						offsets.setDesiredOffsets(
							[closingCurly.range[1], node.range[1]],
							sourceCode.getFirstToken(node),
							1,
						);
					}
				}
			},

			ForStatement(node) {
				const forOpeningParen = sourceCode.getFirstToken(node, 1);

				if (node.init) {
					offsets.setDesiredOffsets(
						node.init.range,
						forOpeningParen,
						1,
					);
				}
				if (node.test) {
					offsets.setDesiredOffsets(
						node.test.range,
						forOpeningParen,
						1,
					);
				}
				if (node.update) {
					offsets.setDesiredOffsets(
						node.update.range,
						forOpeningParen,
						1,
					);
				}
				addBlocklessNodeIndent(node.body);
			},

			"FunctionDeclaration, FunctionExpression"(node) {
				const closingParen = sourceCode.getTokenBefore(node.body);
				const openingParen = sourceCode.getTokenBefore(
					node.params.length ? node.params[0] : closingParen,
				);

				parameterParens.add(openingParen);
				parameterParens.add(closingParen);
				addElementListIndent(
					node.params,
					openingParen,
					closingParen,
					options[node.type].parameters,
				);
			},

			IfStatement(node) {
				addBlocklessNodeIndent(node.consequent);
				if (node.alternate) {
					addBlocklessNodeIndent(node.alternate);
				}
			},

			/*
			 * For blockless nodes with semicolon-first style, don't indent the semicolon.
			 * e.g.
			 * if (foo)
			 *     bar()
			 * ; [1, 2, 3].map(foo)
			 *
			 * Traversal into the node sets indentation of the semicolon, so we need to override it on exit.
			 */
			":matches(DoWhileStatement, ForStatement, ForInStatement, ForOfStatement, IfStatement, WhileStatement, WithStatement):exit"(
				node,
			) {
				let nodesToCheck;

				if (node.type === "IfStatement") {
					nodesToCheck = [node.consequent];
					if (node.alternate) {
						nodesToCheck.push(node.alternate);
					}
				} else {
					nodesToCheck = [node.body];
				}

				for (const nodeToCheck of nodesToCheck) {
					const lastToken = sourceCode.getLastToken(nodeToCheck);

					if (astUtils.isSemicolonToken(lastToken)) {
						const tokenBeforeLast =
							sourceCode.getTokenBefore(lastToken);
						const tokenAfterLast =
							sourceCode.getTokenAfter(lastToken);

						// override indentation of `;` only if its line looks like a semicolon-first style line
						if (
							!astUtils.isTokenOnSameLine(
								tokenBeforeLast,
								lastToken,
							) &&
							tokenAfterLast &&
							astUtils.isTokenOnSameLine(
								lastToken,
								tokenAfterLast,
							)
						) {
							offsets.setDesiredOffset(
								lastToken,
								sourceCode.getFirstToken(node),
								0,
							);
						}
					}
				}
			},

			ImportDeclaration(node) {
				if (
					node.specifiers.some(
						specifier => specifier.type === "ImportSpecifier",
					)
				) {
					const openingCurly = sourceCode.getFirstToken(
						node,
						astUtils.isOpeningBraceToken,
					);
					const closingCurly = sourceCode.getLastToken(
						node,
						astUtils.isClosingBraceToken,
					);

					addElementListIndent(
						node.specifiers.filter(
							specifier => specifier.type === "ImportSpecifier",
						),
						openingCurly,
						closingCurly,
						options.ImportDeclaration,
					);
				}

				const fromToken = sourceCode.getLastToken(
					node,
					token =>
						token.type === "Identifier" && token.value === "from",
				);
				const sourceToken = sourceCode.getLastToken(
					node,
					token => token.type === "String",
				);
				const semiToken = sourceCode.getLastToken(
					node,
					token => token.type === "Punctuator" && token.value === ";",
				);

				if (fromToken) {
					const end =
						semiToken && semiToken.range[1] === sourceToken.range[1]
							? node.range[1]
							: sourceToken.range[1];

					offsets.setDesiredOffsets(
						[fromToken.range[0], end],
						sourceCode.getFirstToken(node),
						1,
					);
				}
			},

			ImportExpression(node) {
				const openingParen = sourceCode.getFirstToken(node, 1);
				const closingParen = sourceCode.getLastToken(node);

				parameterParens.add(openingParen);
				parameterParens.add(closingParen);
				offsets.setDesiredOffset(
					openingParen,
					sourceCode.getTokenBefore(openingParen),
					0,
				);

				addElementListIndent(
					[node.source],
					openingParen,
					closingParen,
					options.CallExpression.arguments,
				);
			},

			"MemberExpression, JSXMemberExpression, MetaProperty"(node) {
				const object =
					node.type === "MetaProperty" ? node.meta : node.object;
				const firstNonObjectToken = sourceCode.getFirstTokenBetween(
					object,
					node.property,
					astUtils.isNotClosingParenToken,
				);
				const secondNonObjectToken =
					sourceCode.getTokenAfter(firstNonObjectToken);

				const objectParenCount = sourceCode.getTokensBetween(
					object,
					node.property,
					{ filter: astUtils.isClosingParenToken },
				).length;
				const firstObjectToken = objectParenCount
					? sourceCode.getTokenBefore(object, {
							skip: objectParenCount - 1,
						})
					: sourceCode.getFirstToken(object);
				const lastObjectToken =
					sourceCode.getTokenBefore(firstNonObjectToken);
				const firstPropertyToken = node.computed
					? firstNonObjectToken
					: secondNonObjectToken;

				if (node.computed) {
					// For computed MemberExpressions, match the closing bracket with the opening bracket.
					offsets.setDesiredOffset(
						sourceCode.getLastToken(node),
						firstNonObjectToken,
						0,
					);
					offsets.setDesiredOffsets(
						node.property.range,
						firstNonObjectToken,
						1,
					);
				}

				/*
				 * If the object ends on the same line that the property starts, match against the last token
				 * of the object, to ensure that the MemberExpression is not indented.
				 *
				 * Otherwise, match against the first token of the object, e.g.
				 * foo
				 *   .bar
				 *   .baz // <-- offset by 1 from `foo`
				 */
				const offsetBase =
					lastObjectToken.loc.end.line ===
					firstPropertyToken.loc.start.line
						? lastObjectToken
						: firstObjectToken;

				if (typeof options.MemberExpression === "number") {
					// Match the dot (for non-computed properties) or the opening bracket (for computed properties) against the object.
					offsets.setDesiredOffset(
						firstNonObjectToken,
						offsetBase,
						options.MemberExpression,
					);

					/*
					 * For computed MemberExpressions, match the first token of the property against the opening bracket.
					 * Otherwise, match the first token of the property against the object.
					 */
					offsets.setDesiredOffset(
						secondNonObjectToken,
						node.computed ? firstNonObjectToken : offsetBase,
						options.MemberExpression,
					);
				} else {
					// If the MemberExpression option is off, ignore the dot and the first token of the property.
					offsets.ignoreToken(firstNonObjectToken);
					offsets.ignoreToken(secondNonObjectToken);

					// To ignore the property indentation, ensure that the property tokens depend on the ignored tokens.
					offsets.setDesiredOffset(
						firstNonObjectToken,
						offsetBase,
						0,
					);
					offsets.setDesiredOffset(
						secondNonObjectToken,
						firstNonObjectToken,
						0,
					);
				}
			},

			NewExpression(node) {
				// Only indent the arguments if the NewExpression has parens (e.g. `new Foo(bar)` or `new Foo()`, but not `new Foo`
				if (
					node.arguments.length > 0 ||
					(astUtils.isClosingParenToken(
						sourceCode.getLastToken(node),
					) &&
						astUtils.isOpeningParenToken(
							sourceCode.getLastToken(node, 1),
						))
				) {
					addFunctionCallIndent(node);
				}
			},

			Property(node) {
				if (!node.shorthand && !node.method && node.kind === "init") {
					const colon = sourceCode.getFirstTokenBetween(
						node.key,
						node.value,
						astUtils.isColonToken,
					);

					offsets.ignoreToken(sourceCode.getTokenAfter(colon));
				}
			},

			PropertyDefinition(node) {
				const firstToken = sourceCode.getFirstToken(node);
				const maybeSemicolonToken = sourceCode.getLastToken(node);
				let keyLastToken;

				// Indent key.
				if (node.computed) {
					const bracketTokenL = sourceCode.getTokenBefore(
						node.key,
						astUtils.isOpeningBracketToken,
					);
					const bracketTokenR = (keyLastToken =
						sourceCode.getTokenAfter(
							node.key,
							astUtils.isClosingBracketToken,
						));
					const keyRange = [
						bracketTokenL.range[1],
						bracketTokenR.range[0],
					];

					if (bracketTokenL !== firstToken) {
						offsets.setDesiredOffset(bracketTokenL, firstToken, 0);
					}
					offsets.setDesiredOffsets(keyRange, bracketTokenL, 1);
					offsets.setDesiredOffset(bracketTokenR, bracketTokenL, 0);
				} else {
					const idToken = (keyLastToken = sourceCode.getFirstToken(
						node.key,
					));

					if (idToken !== firstToken) {
						offsets.setDesiredOffset(idToken, firstToken, 1);
					}
				}

				// Indent initializer.
				if (node.value) {
					const eqToken = sourceCode.getTokenBefore(
						node.value,
						astUtils.isEqToken,
					);
					const valueToken = sourceCode.getTokenAfter(eqToken);

					offsets.setDesiredOffset(eqToken, keyLastToken, 1);
					offsets.setDesiredOffset(valueToken, eqToken, 1);
					if (astUtils.isSemicolonToken(maybeSemicolonToken)) {
						offsets.setDesiredOffset(
							maybeSemicolonToken,
							eqToken,
							1,
						);
					}
				} else if (astUtils.isSemicolonToken(maybeSemicolonToken)) {
					offsets.setDesiredOffset(
						maybeSemicolonToken,
						keyLastToken,
						1,
					);
				}
			},

			StaticBlock(node) {
				const openingCurly = sourceCode.getFirstToken(node, {
					skip: 1,
				}); // skip the `static` token
				const closingCurly = sourceCode.getLastToken(node);

				addElementListIndent(
					node.body,
					openingCurly,
					closingCurly,
					options.StaticBlock.body,
				);
			},

			SwitchStatement(node) {
				const openingCurly = sourceCode.getTokenAfter(
					node.discriminant,
					astUtils.isOpeningBraceToken,
				);
				const closingCurly = sourceCode.getLastToken(node);

				offsets.setDesiredOffsets(
					[openingCurly.range[1], closingCurly.range[0]],
					openingCurly,
					options.SwitchCase,
				);

				if (node.cases.length) {
					sourceCode
						.getTokensBetween(node.cases.at(-1), closingCurly, {
							includeComments: true,
							filter: astUtils.isCommentToken,
						})
						.forEach(token => offsets.ignoreToken(token));
				}
			},

			SwitchCase(node) {
				if (
					!(
						node.consequent.length === 1 &&
						node.consequent[0].type === "BlockStatement"
					)
				) {
					const caseKeyword = sourceCode.getFirstToken(node);
					const tokenAfterCurrentCase =
						sourceCode.getTokenAfter(node);

					offsets.setDesiredOffsets(
						[caseKeyword.range[1], tokenAfterCurrentCase.range[0]],
						caseKeyword,
						1,
					);
				}
			},

			TemplateLiteral(node) {
				node.expressions.forEach((expression, index) => {
					const previousQuasi = node.quasis[index];
					const nextQuasi = node.quasis[index + 1];
					const tokenToAlignFrom =
						previousQuasi.loc.start.line ===
						previousQuasi.loc.end.line
							? sourceCode.getFirstToken(previousQuasi)
							: null;

					offsets.setDesiredOffsets(
						[previousQuasi.range[1], nextQuasi.range[0]],
						tokenToAlignFrom,
						1,
					);
					offsets.setDesiredOffset(
						sourceCode.getFirstToken(nextQuasi),
						tokenToAlignFrom,
						0,
					);
				});
			},

			VariableDeclaration(node) {
				let variableIndent = Object.hasOwn(
					options.VariableDeclarator,
					node.kind,
				)
					? options.VariableDeclarator[node.kind]
					: DEFAULT_VARIABLE_INDENT;

				const firstToken = sourceCode.getFirstToken(node),
					lastToken = sourceCode.getLastToken(node);

				if (options.VariableDeclarator[node.kind] === "first") {
					if (node.declarations.length > 1) {
						addElementListIndent(
							node.declarations,
							firstToken,
							lastToken,
							"first",
						);
						return;
					}

					variableIndent = DEFAULT_VARIABLE_INDENT;
				}

				if (
					node.declarations.at(-1).loc.start.line >
					node.loc.start.line
				) {
					/*
					 * VariableDeclarator indentation is a bit different from other forms of indentation, in that the
					 * indentation of an opening bracket sometimes won't match that of a closing bracket. For example,
					 * the following indentations are correct:
					 *
					 * var foo = {
					 *   ok: true
					 * };
					 *
					 * var foo = {
					 *     ok: true,
					 *   },
					 *   bar = 1;
					 *
					 * Account for when exiting the AST (after indentations have already been set for the nodes in
					 * the declaration) by manually increasing the indentation level of the tokens in this declarator
					 * on the same line as the start of the declaration, provided that there are declarators that
					 * follow this one.
					 */
					offsets.setDesiredOffsets(
						node.range,
						firstToken,
						variableIndent,
						true,
					);
				} else {
					offsets.setDesiredOffsets(
						node.range,
						firstToken,
						variableIndent,
					);
				}

				if (astUtils.isSemicolonToken(lastToken)) {
					offsets.ignoreToken(lastToken);
				}
			},

			VariableDeclarator(node) {
				if (node.init) {
					const equalOperator = sourceCode.getTokenBefore(
						node.init,
						astUtils.isNotOpeningParenToken,
					);
					const tokenAfterOperator =
						sourceCode.getTokenAfter(equalOperator);

					offsets.ignoreToken(equalOperator);
					offsets.ignoreToken(tokenAfterOperator);
					offsets.setDesiredOffsets(
						[tokenAfterOperator.range[0], node.range[1]],
						equalOperator,
						1,
					);
					offsets.setDesiredOffset(
						equalOperator,
						sourceCode.getLastToken(node.id),
						0,
					);
				}
			},

			"JSXAttribute[value]"(node) {
				const equalsToken = sourceCode.getFirstTokenBetween(
					node.name,
					node.value,
					token => token.type === "Punctuator" && token.value === "=",
				);

				offsets.setDesiredOffsets(
					[equalsToken.range[0], node.value.range[1]],
					sourceCode.getFirstToken(node.name),
					1,
				);
			},

			JSXElement(node) {
				if (node.closingElement) {
					addElementListIndent(
						node.children,
						sourceCode.getFirstToken(node.openingElement),
						sourceCode.getFirstToken(node.closingElement),
						1,
					);
				}
			},

			JSXOpeningElement(node) {
				const firstToken = sourceCode.getFirstToken(node);
				let closingToken;

				if (node.selfClosing) {
					closingToken = sourceCode.getLastToken(node, { skip: 1 });
					offsets.setDesiredOffset(
						sourceCode.getLastToken(node),
						closingToken,
						0,
					);
				} else {
					closingToken = sourceCode.getLastToken(node);
				}
				offsets.setDesiredOffsets(
					node.name.range,
					sourceCode.getFirstToken(node),
				);
				addElementListIndent(
					node.attributes,
					firstToken,
					closingToken,
					1,
				);
			},

			JSXClosingElement(node) {
				const firstToken = sourceCode.getFirstToken(node);

				offsets.setDesiredOffsets(node.name.range, firstToken, 1);
			},

			JSXFragment(node) {
				const firstOpeningToken = sourceCode.getFirstToken(
					node.openingFragment,
				);
				const firstClosingToken = sourceCode.getFirstToken(
					node.closingFragment,
				);

				addElementListIndent(
					node.children,
					firstOpeningToken,
					firstClosingToken,
					1,
				);
			},

			JSXOpeningFragment(node) {
				const firstToken = sourceCode.getFirstToken(node);
				const closingToken = sourceCode.getLastToken(node);

				offsets.setDesiredOffsets(node.range, firstToken, 1);
				offsets.matchOffsetOf(firstToken, closingToken);
			},

			JSXClosingFragment(node) {
				const firstToken = sourceCode.getFirstToken(node);
				const slashToken = sourceCode.getLastToken(node, { skip: 1 });
				const closingToken = sourceCode.getLastToken(node);
				const tokenToMatch = astUtils.isTokenOnSameLine(
					slashToken,
					closingToken,
				)
					? slashToken
					: closingToken;

				offsets.setDesiredOffsets(node.range, firstToken, 1);
				offsets.matchOffsetOf(firstToken, tokenToMatch);
			},

			JSXExpressionContainer(node) {
				const openingCurly = sourceCode.getFirstToken(node);
				const closingCurly = sourceCode.getLastToken(node);

				offsets.setDesiredOffsets(
					[openingCurly.range[1], closingCurly.range[0]],
					openingCurly,
					1,
				);
			},

			JSXSpreadAttribute(node) {
				const openingCurly = sourceCode.getFirstToken(node);
				const closingCurly = sourceCode.getLastToken(node);

				offsets.setDesiredOffsets(
					[openingCurly.range[1], closingCurly.range[0]],
					openingCurly,
					1,
				);
			},

			"*"(node) {
				const firstToken = sourceCode.getFirstToken(node);

				// Ensure that the children of every node are indented at least as much as the first token.
				if (firstToken && !ignoredNodeFirstTokens.has(firstToken)) {
					offsets.setDesiredOffsets(node.range, firstToken, 0);
				}
			},
		};

		const listenerCallQueue = [];

		/*
		 * To ignore the indentation of a node:
		 * 1. Don't call the node's listener when entering it (if it has a listener)
		 * 2. Don't set any offsets against the first token of the node.
		 * 3. Call `ignoreNode` on the node sometime after exiting it and before validating offsets.
		 */
		const offsetListeners = {};

		for (const [selector, listener] of Object.entries(
			baseOffsetListeners,
		)) {
			/*
			 * Offset listener calls are deferred until traversal is finished, and are called as
			 * part of the final `Program:exit` listener. This is necessary because a node might
			 * be matched by multiple selectors.
			 *
			 * Example: Suppose there is an offset listener for `Identifier`, and the user has
			 * specified in configuration that `MemberExpression > Identifier` should be ignored.
			 * Due to selector specificity rules, the `Identifier` listener will get called first. However,
			 * if a given Identifier node is supposed to be ignored, then the `Identifier` offset listener
			 * should not have been called at all. Without doing extra selector matching, we don't know
			 * whether the Identifier matches the `MemberExpression > Identifier` selector until the
			 * `MemberExpression > Identifier` listener is called.
			 *
			 * To avoid this, the `Identifier` listener isn't called until traversal finishes and all
			 * ignored nodes are known.
			 */
			offsetListeners[selector] = node =>
				listenerCallQueue.push({ listener, node });
		}

		// For each ignored node selector, set up a listener to collect it into the `ignoredNodes` set.
		const ignoredNodes = new Set();

		/**
		 * Ignores a node
		 * @param {ASTNode} node The node to ignore
		 * @returns {void}
		 */
		function addToIgnoredNodes(node) {
			ignoredNodes.add(node);
			ignoredNodeFirstTokens.add(sourceCode.getFirstToken(node));
		}

		const ignoredNodeListeners = options.ignoredNodes.reduce(
			(listeners, ignoredSelector) =>
				Object.assign(listeners, {
					[ignoredSelector]: addToIgnoredNodes,
				}),
			{},
		);

		/*
		 * Join the listeners, and add a listener to verify that all tokens actually have the correct indentation
		 * at the end.
		 *
		 * Using Object.assign will cause some offset listeners to be overwritten if the same selector also appears
		 * in `ignoredNodeListeners`. This isn't a problem because all of the matching nodes will be ignored,
		 * so those listeners wouldn't be called anyway.
		 */
		return Object.assign(offsetListeners, ignoredNodeListeners, {
			"*:exit"(node) {
				// If a node's type is nonstandard, we can't tell how its children should be offset, so ignore it.
				if (!KNOWN_NODES.has(node.type)) {
					addToIgnoredNodes(node);
				}
			},
			"Program:exit"() {
				// If ignoreComments option is enabled, ignore all comment tokens.
				if (options.ignoreComments) {
					sourceCode
						.getAllComments()
						.forEach(comment => offsets.ignoreToken(comment));
				}

				// Invoke the queued offset listeners for the nodes that aren't ignored.
				for (let i = 0; i < listenerCallQueue.length; i++) {
					const nodeInfo = listenerCallQueue[i];

					if (!ignoredNodes.has(nodeInfo.node)) {
						nodeInfo.listener(nodeInfo.node);
					}
				}

				// Update the offsets for ignored nodes to prevent their child tokens from being reported.
				ignoredNodes.forEach(ignoreNode);

				addParensIndent(sourceCode.ast.tokens);

				/*
				 * Create a Map from (tokenOrComment) => (precedingToken).
				 * This is necessary because sourceCode.getTokenBefore does not handle a comment as an argument correctly.
				 */
				const precedingTokens = new WeakMap();

				for (let i = 0; i < sourceCode.ast.comments.length; i++) {
					const comment = sourceCode.ast.comments[i];

					const tokenOrCommentBefore = sourceCode.getTokenBefore(
						comment,
						{ includeComments: true },
					);
					const hasToken = precedingTokens.has(tokenOrCommentBefore)
						? precedingTokens.get(tokenOrCommentBefore)
						: tokenOrCommentBefore;

					precedingTokens.set(comment, hasToken);
				}

				for (let i = 1; i < sourceCode.lines.length + 1; i++) {
					if (!tokenInfo.firstTokensByLineNumber.has(i)) {
						// Don't check indentation on blank lines
						continue;
					}

					const firstTokenOfLine =
						tokenInfo.firstTokensByLineNumber.get(i);

					if (firstTokenOfLine.loc.start.line !== i) {
						// Don't check the indentation of multi-line tokens (e.g. template literals or block comments) twice.
						continue;
					}

					if (astUtils.isCommentToken(firstTokenOfLine)) {
						const tokenBefore =
							precedingTokens.get(firstTokenOfLine);
						const tokenAfter = tokenBefore
							? sourceCode.getTokenAfter(tokenBefore)
							: sourceCode.ast.tokens[0];
						const mayAlignWithBefore =
							tokenBefore &&
							!hasBlankLinesBetween(
								tokenBefore,
								firstTokenOfLine,
							);
						const mayAlignWithAfter =
							tokenAfter &&
							!hasBlankLinesBetween(firstTokenOfLine, tokenAfter);

						/*
						 * If a comment precedes a line that begins with a semicolon token, align to that token, i.e.
						 *
						 * let foo
						 * // comment
						 * ;(async () => {})()
						 */
						if (
							tokenAfter &&
							astUtils.isSemicolonToken(tokenAfter) &&
							!astUtils.isTokenOnSameLine(
								firstTokenOfLine,
								tokenAfter,
							)
						) {
							offsets.setDesiredOffset(
								firstTokenOfLine,
								tokenAfter,
								0,
							);
						}

						// If a comment matches the expected indentation of the token immediately before or after, don't report it.
						if (
							(mayAlignWithBefore &&
								validateTokenIndent(
									firstTokenOfLine,
									offsets.getDesiredIndent(tokenBefore),
								)) ||
							(mayAlignWithAfter &&
								validateTokenIndent(
									firstTokenOfLine,
									offsets.getDesiredIndent(tokenAfter),
								))
						) {
							continue;
						}
					}

					// If the token matches the expected indentation, don't report it.
					if (
						validateTokenIndent(
							firstTokenOfLine,
							offsets.getDesiredIndent(firstTokenOfLine),
						)
					) {
						continue;
					}

					// Otherwise, report the token/comment.
					report(
						firstTokenOfLine,
						offsets.getDesiredIndent(firstTokenOfLine),
					);
				}
			},
		});
	},
};
