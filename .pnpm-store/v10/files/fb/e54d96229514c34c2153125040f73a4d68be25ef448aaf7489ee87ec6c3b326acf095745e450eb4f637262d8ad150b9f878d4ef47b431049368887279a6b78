/**
 * @fileoverview Object to handle access and retrieval of tokens.
 * @author Brandon Mills
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { isCommentToken } = require("@eslint-community/eslint-utils");
const assert = require("../../../../shared/assert");
const cursors = require("./cursors");
const ForwardTokenCursor = require("./forward-token-cursor");
const PaddedTokenCursor = require("./padded-token-cursor");
const utils = require("./utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const TOKENS = Symbol("tokens");
const COMMENTS = Symbol("comments");
const INDEX_MAP = Symbol("indexMap");

/**
 * Creates the map from locations to indices in `tokens`.
 *
 * The first/last location of tokens is mapped to the index of the token.
 * The first/last location of comments is mapped to the index of the next token of each comment.
 * @param {Token[]} tokens The array of tokens.
 * @param {Comment[]} comments The array of comments.
 * @returns {Object} The map from locations to indices in `tokens`.
 * @private
 */
function createIndexMap(tokens, comments) {
	const map = Object.create(null);
	let tokenIndex = 0;
	let commentIndex = 0;
	let nextStart;
	let range;

	while (tokenIndex < tokens.length || commentIndex < comments.length) {
		nextStart =
			commentIndex < comments.length
				? comments[commentIndex].range[0]
				: Number.MAX_SAFE_INTEGER;
		while (
			tokenIndex < tokens.length &&
			(range = tokens[tokenIndex].range)[0] < nextStart
		) {
			map[range[0]] = tokenIndex;
			map[range[1] - 1] = tokenIndex;
			tokenIndex += 1;
		}

		nextStart =
			tokenIndex < tokens.length
				? tokens[tokenIndex].range[0]
				: Number.MAX_SAFE_INTEGER;
		while (
			commentIndex < comments.length &&
			(range = comments[commentIndex].range)[0] < nextStart
		) {
			map[range[0]] = tokenIndex;
			map[range[1] - 1] = tokenIndex;
			commentIndex += 1;
		}
	}

	return map;
}

/**
 * Creates the cursor iterates tokens with options.
 * @param {CursorFactory} factory The cursor factory to initialize cursor.
 * @param {Token[]} tokens The array of tokens.
 * @param {Comment[]} comments The array of comments.
 * @param {Object} indexMap The map from locations to indices in `tokens`.
 * @param {number} startLoc The start location of the iteration range.
 * @param {number} endLoc The end location of the iteration range.
 * @param {number|Function|Object} [opts=0] The option object. If this is a number then it's `opts.skip`. If this is a function then it's `opts.filter`.
 * @param {boolean} [opts.includeComments=false] The flag to iterate comments as well.
 * @param {Function|null} [opts.filter=null] The predicate function to choose tokens.
 * @param {number} [opts.skip=0] The count of tokens the cursor skips.
 * @returns {Cursor} The created cursor.
 * @private
 */
function createCursorWithSkip(
	factory,
	tokens,
	comments,
	indexMap,
	startLoc,
	endLoc,
	opts,
) {
	let includeComments = false;
	let skip = 0;
	let filter = null;

	if (typeof opts === "number") {
		skip = opts | 0;
	} else if (typeof opts === "function") {
		filter = opts;
	} else if (opts) {
		includeComments = !!opts.includeComments;
		skip = opts.skip | 0;
		filter = opts.filter || null;
	}
	assert(skip >= 0, "options.skip should be zero or a positive integer.");
	assert(
		!filter || typeof filter === "function",
		"options.filter should be a function.",
	);

	return factory.createCursor(
		tokens,
		comments,
		indexMap,
		startLoc,
		endLoc,
		includeComments,
		filter,
		skip,
		-1,
	);
}

/**
 * Creates the cursor iterates tokens with options.
 * @param {CursorFactory} factory The cursor factory to initialize cursor.
 * @param {Token[]} tokens The array of tokens.
 * @param {Comment[]} comments The array of comments.
 * @param {Object} indexMap The map from locations to indices in `tokens`.
 * @param {number} startLoc The start location of the iteration range.
 * @param {number} endLoc The end location of the iteration range.
 * @param {number|Function|Object} [opts=0] The option object. If this is a number then it's `opts.count`. If this is a function then it's `opts.filter`.
 * @param {boolean} [opts.includeComments] The flag to iterate comments as well.
 * @param {Function|null} [opts.filter=null] The predicate function to choose tokens.
 * @param {number} [opts.count=0] The maximum count of tokens the cursor iterates. Zero is no iteration for backward compatibility.
 * @returns {Cursor} The created cursor.
 * @private
 */
function createCursorWithCount(
	factory,
	tokens,
	comments,
	indexMap,
	startLoc,
	endLoc,
	opts,
) {
	let includeComments = false;
	let count = 0;
	let countExists = false;
	let filter = null;

	if (typeof opts === "number") {
		count = opts | 0;
		countExists = true;
	} else if (typeof opts === "function") {
		filter = opts;
	} else if (opts) {
		includeComments = !!opts.includeComments;
		count = opts.count | 0;
		countExists = typeof opts.count === "number";
		filter = opts.filter || null;
	}
	assert(count >= 0, "options.count should be zero or a positive integer.");
	assert(
		!filter || typeof filter === "function",
		"options.filter should be a function.",
	);

	return factory.createCursor(
		tokens,
		comments,
		indexMap,
		startLoc,
		endLoc,
		includeComments,
		filter,
		0,
		countExists ? count : -1,
	);
}

/**
 * Creates the cursor iterates tokens with options.
 * This is overload function of the below.
 * @param {Token[]} tokens The array of tokens.
 * @param {Comment[]} comments The array of comments.
 * @param {Object} indexMap The map from locations to indices in `tokens`.
 * @param {number} startLoc The start location of the iteration range.
 * @param {number} endLoc The end location of the iteration range.
 * @param {Function|Object} opts The option object. If this is a function then it's `opts.filter`.
 * @param {boolean} [opts.includeComments] The flag to iterate comments as well.
 * @param {Function|null} [opts.filter=null] The predicate function to choose tokens.
 * @param {number} [opts.count=0] The maximum count of tokens the cursor iterates. Zero is no iteration for backward compatibility.
 * @returns {Cursor} The created cursor.
 * @private
 */
/**
 * Creates the cursor iterates tokens with options.
 * @param {Token[]} tokens The array of tokens.
 * @param {Comment[]} comments The array of comments.
 * @param {Object} indexMap The map from locations to indices in `tokens`.
 * @param {number} startLoc The start location of the iteration range.
 * @param {number} endLoc The end location of the iteration range.
 * @param {number} [beforeCount=0] The number of tokens before the node to retrieve.
 * @param {boolean} [afterCount=0] The number of tokens after the node to retrieve.
 * @returns {Cursor} The created cursor.
 * @private
 */
function createCursorWithPadding(
	tokens,
	comments,
	indexMap,
	startLoc,
	endLoc,
	beforeCount,
	afterCount,
) {
	if (
		typeof beforeCount === "undefined" &&
		typeof afterCount === "undefined"
	) {
		return new ForwardTokenCursor(
			tokens,
			comments,
			indexMap,
			startLoc,
			endLoc,
		);
	}
	if (typeof beforeCount === "number" || typeof beforeCount === "undefined") {
		return new PaddedTokenCursor(
			tokens,
			comments,
			indexMap,
			startLoc,
			endLoc,
			beforeCount | 0,
			afterCount | 0,
		);
	}
	return createCursorWithCount(
		cursors.forward,
		tokens,
		comments,
		indexMap,
		startLoc,
		endLoc,
		beforeCount,
	);
}

/**
 * Gets comment tokens that are adjacent to the current cursor position.
 * @param {Cursor} cursor A cursor instance.
 * @returns {Array} An array of comment tokens adjacent to the current cursor position.
 * @private
 */
function getAdjacentCommentTokensFromCursor(cursor) {
	const tokens = [];
	let currentToken = cursor.getOneToken();

	while (currentToken && isCommentToken(currentToken)) {
		tokens.push(currentToken);
		currentToken = cursor.getOneToken();
	}

	return tokens;
}

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * The token store.
 *
 * This class provides methods to get tokens by locations as fast as possible.
 * The methods are a part of public API, so we should be careful if it changes this class.
 *
 * People can get tokens in O(1) by the hash map which is mapping from the location of tokens/comments to tokens.
 * Also people can get a mix of tokens and comments in O(log k), the k is the number of comments.
 * Assuming that comments to be much fewer than tokens, this does not make hash map from token's locations to comments to reduce memory cost.
 * This uses binary-searching instead for comments.
 */
module.exports = class TokenStore {
	/**
	 * Initializes this token store.
	 * @param {Token[]} tokens The array of tokens.
	 * @param {Comment[]} comments The array of comments.
	 */
	constructor(tokens, comments) {
		this[TOKENS] = tokens;
		this[COMMENTS] = comments;
		this[INDEX_MAP] = createIndexMap(tokens, comments);
	}

	//--------------------------------------------------------------------------
	// Gets single token.
	//--------------------------------------------------------------------------

	/**
	 * Gets the token starting at the specified index.
	 * @param {number} offset Index of the start of the token's range.
	 * @param {Object} [options=0] The option object.
	 * @param {boolean} [options.includeComments=false] The flag to iterate comments as well.
	 * @returns {Token|null} The token starting at index, or null if no such token.
	 */
	getTokenByRangeStart(offset, options) {
		const includeComments = options && options.includeComments;
		const token = cursors.forward
			.createBaseCursor(
				this[TOKENS],
				this[COMMENTS],
				this[INDEX_MAP],
				offset,
				-1,
				includeComments,
			)
			.getOneToken();

		if (token && token.range[0] === offset) {
			return token;
		}
		return null;
	}

	/**
	 * Gets the first token of the given node.
	 * @param {ASTNode} node The AST node.
	 * @param {number|Function|Object} [options=0] The option object. If this is a number then it's `options.skip`. If this is a function then it's `options.filter`.
	 * @param {boolean} [options.includeComments=false] The flag to iterate comments as well.
	 * @param {Function|null} [options.filter=null] The predicate function to choose tokens.
	 * @param {number} [options.skip=0] The count of tokens the cursor skips.
	 * @returns {Token|null} An object representing the token.
	 */
	getFirstToken(node, options) {
		return createCursorWithSkip(
			cursors.forward,
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			node.range[0],
			node.range[1],
			options,
		).getOneToken();
	}

	/**
	 * Gets the last token of the given node.
	 * @param {ASTNode} node The AST node.
	 * @param {number|Function|Object} [options=0] The option object. Same options as getFirstToken()
	 * @returns {Token|null} An object representing the token.
	 */
	getLastToken(node, options) {
		return createCursorWithSkip(
			cursors.backward,
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			node.range[0],
			node.range[1],
			options,
		).getOneToken();
	}

	/**
	 * Gets the token that precedes a given node or token.
	 * @param {ASTNode|Token|Comment} node The AST node or token.
	 * @param {number|Function|Object} [options=0] The option object. Same options as getFirstToken()
	 * @returns {Token|null} An object representing the token.
	 */
	getTokenBefore(node, options) {
		return createCursorWithSkip(
			cursors.backward,
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			-1,
			node.range[0],
			options,
		).getOneToken();
	}

	/**
	 * Gets the token that follows a given node or token.
	 * @param {ASTNode|Token|Comment} node The AST node or token.
	 * @param {number|Function|Object} [options=0] The option object. Same options as getFirstToken()
	 * @returns {Token|null} An object representing the token.
	 */
	getTokenAfter(node, options) {
		return createCursorWithSkip(
			cursors.forward,
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			node.range[1],
			-1,
			options,
		).getOneToken();
	}

	/**
	 * Gets the first token between two non-overlapping nodes.
	 * @param {ASTNode|Token|Comment} left Node before the desired token range.
	 * @param {ASTNode|Token|Comment} right Node after the desired token range.
	 * @param {number|Function|Object} [options=0] The option object. Same options as getFirstToken()
	 * @returns {Token|null} An object representing the token.
	 */
	getFirstTokenBetween(left, right, options) {
		return createCursorWithSkip(
			cursors.forward,
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			left.range[1],
			right.range[0],
			options,
		).getOneToken();
	}

	/**
	 * Gets the last token between two non-overlapping nodes.
	 * @param {ASTNode|Token|Comment} left Node before the desired token range.
	 * @param {ASTNode|Token|Comment} right Node after the desired token range.
	 * @param {number|Function|Object} [options=0] The option object. Same options as getFirstToken()
	 * @returns {Token|null} An object representing the token.
	 */
	getLastTokenBetween(left, right, options) {
		return createCursorWithSkip(
			cursors.backward,
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			left.range[1],
			right.range[0],
			options,
		).getOneToken();
	}

	/**
	 * Gets the token that precedes a given node or token in the token stream.
	 * This is defined for backward compatibility. Use `includeComments` option instead.
	 * TODO: We have a plan to remove this in a future major version.
	 * @param {ASTNode|Token|Comment} node The AST node or token.
	 * @param {number} [skip=0] A number of tokens to skip.
	 * @returns {Token|null} An object representing the token.
	 * @deprecated
	 */
	getTokenOrCommentBefore(node, skip) {
		return this.getTokenBefore(node, { includeComments: true, skip });
	}

	/**
	 * Gets the token that follows a given node or token in the token stream.
	 * This is defined for backward compatibility. Use `includeComments` option instead.
	 * TODO: We have a plan to remove this in a future major version.
	 * @param {ASTNode|Token|Comment} node The AST node or token.
	 * @param {number} [skip=0] A number of tokens to skip.
	 * @returns {Token|null} An object representing the token.
	 * @deprecated
	 */
	getTokenOrCommentAfter(node, skip) {
		return this.getTokenAfter(node, { includeComments: true, skip });
	}

	//--------------------------------------------------------------------------
	// Gets multiple tokens.
	//--------------------------------------------------------------------------

	/**
	 * Gets the first `count` tokens of the given node.
	 * @param {ASTNode} node The AST node.
	 * @param {number|Function|Object} [options=0] The option object. If this is a number then it's `options.count`. If this is a function then it's `options.filter`.
	 * @param {boolean} [options.includeComments=false] The flag to iterate comments as well.
	 * @param {Function|null} [options.filter=null] The predicate function to choose tokens.
	 * @param {number} [options.count=0] The maximum count of tokens the cursor iterates.
	 * @returns {Token[]} Tokens.
	 */
	getFirstTokens(node, options) {
		return createCursorWithCount(
			cursors.forward,
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			node.range[0],
			node.range[1],
			options,
		).getAllTokens();
	}

	/**
	 * Gets the last `count` tokens of the given node.
	 * @param {ASTNode} node The AST node.
	 * @param {number|Function|Object} [options=0] The option object. Same options as getFirstTokens()
	 * @returns {Token[]} Tokens.
	 */
	getLastTokens(node, options) {
		return createCursorWithCount(
			cursors.backward,
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			node.range[0],
			node.range[1],
			options,
		)
			.getAllTokens()
			.reverse();
	}

	/**
	 * Gets the `count` tokens that precedes a given node or token.
	 * @param {ASTNode|Token|Comment} node The AST node or token.
	 * @param {number|Function|Object} [options=0] The option object. Same options as getFirstTokens()
	 * @returns {Token[]} Tokens.
	 */
	getTokensBefore(node, options) {
		return createCursorWithCount(
			cursors.backward,
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			-1,
			node.range[0],
			options,
		)
			.getAllTokens()
			.reverse();
	}

	/**
	 * Gets the `count` tokens that follows a given node or token.
	 * @param {ASTNode|Token|Comment} node The AST node or token.
	 * @param {number|Function|Object} [options=0] The option object. Same options as getFirstTokens()
	 * @returns {Token[]} Tokens.
	 */
	getTokensAfter(node, options) {
		return createCursorWithCount(
			cursors.forward,
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			node.range[1],
			-1,
			options,
		).getAllTokens();
	}

	/**
	 * Gets the first `count` tokens between two non-overlapping nodes.
	 * @param {ASTNode|Token|Comment} left Node before the desired token range.
	 * @param {ASTNode|Token|Comment} right Node after the desired token range.
	 * @param {number|Function|Object} [options=0] The option object. Same options as getFirstTokens()
	 * @returns {Token[]} Tokens between left and right.
	 */
	getFirstTokensBetween(left, right, options) {
		return createCursorWithCount(
			cursors.forward,
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			left.range[1],
			right.range[0],
			options,
		).getAllTokens();
	}

	/**
	 * Gets the last `count` tokens between two non-overlapping nodes.
	 * @param {ASTNode|Token|Comment} left Node before the desired token range.
	 * @param {ASTNode|Token|Comment} right Node after the desired token range.
	 * @param {number|Function|Object} [options=0] The option object. Same options as getFirstTokens()
	 * @returns {Token[]} Tokens between left and right.
	 */
	getLastTokensBetween(left, right, options) {
		return createCursorWithCount(
			cursors.backward,
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			left.range[1],
			right.range[0],
			options,
		)
			.getAllTokens()
			.reverse();
	}

	/**
	 * Gets all tokens that are related to the given node.
	 * @param {ASTNode} node The AST node.
	 * @param {Function|Object} options The option object. If this is a function then it's `options.filter`.
	 * @param {boolean} [options.includeComments=false] The flag to iterate comments as well.
	 * @param {Function|null} [options.filter=null] The predicate function to choose tokens.
	 * @param {number} [options.count=0] The maximum count of tokens the cursor iterates.
	 * @returns {Token[]} Array of objects representing tokens.
	 */
	/**
	 * Gets all tokens that are related to the given node.
	 * @param {ASTNode} node The AST node.
	 * @param {number} [beforeCount=0] The number of tokens before the node to retrieve.
	 * @param {number} [afterCount=0] The number of tokens after the node to retrieve.
	 * @returns {Token[]} Array of objects representing tokens.
	 */
	getTokens(node, beforeCount, afterCount) {
		return createCursorWithPadding(
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			node.range[0],
			node.range[1],
			beforeCount,
			afterCount,
		).getAllTokens();
	}

	/**
	 * Gets all of the tokens between two non-overlapping nodes.
	 * @param {ASTNode|Token|Comment} left Node before the desired token range.
	 * @param {ASTNode|Token|Comment} right Node after the desired token range.
	 * @param {Function|Object} options The option object. If this is a function then it's `options.filter`.
	 * @param {boolean} [options.includeComments=false] The flag to iterate comments as well.
	 * @param {Function|null} [options.filter=null] The predicate function to choose tokens.
	 * @param {number} [options.count=0] The maximum count of tokens the cursor iterates.
	 * @returns {Token[]} Tokens between left and right.
	 */
	/**
	 * Gets all of the tokens between two non-overlapping nodes.
	 * @param {ASTNode|Token|Comment} left Node before the desired token range.
	 * @param {ASTNode|Token|Comment} right Node after the desired token range.
	 * @param {number} [padding=0] Number of extra tokens on either side of center.
	 * @returns {Token[]} Tokens between left and right.
	 */
	getTokensBetween(left, right, padding) {
		return createCursorWithPadding(
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			left.range[1],
			right.range[0],
			padding,
			padding,
		).getAllTokens();
	}

	//--------------------------------------------------------------------------
	// Others.
	//--------------------------------------------------------------------------

	/**
	 * Checks whether any comments exist or not between the given 2 nodes.
	 * @param {ASTNode} left The node to check.
	 * @param {ASTNode} right The node to check.
	 * @returns {boolean} `true` if one or more comments exist.
	 */
	commentsExistBetween(left, right) {
		const index = utils.search(this[COMMENTS], left.range[1]);

		return (
			index < this[COMMENTS].length &&
			this[COMMENTS][index].range[1] <= right.range[0]
		);
	}

	/**
	 * Gets all comment tokens directly before the given node or token.
	 * @param {ASTNode|token} nodeOrToken The AST node or token to check for adjacent comment tokens.
	 * @returns {Array} An array of comments in occurrence order.
	 */
	getCommentsBefore(nodeOrToken) {
		const cursor = createCursorWithCount(
			cursors.backward,
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			-1,
			nodeOrToken.range[0],
			{ includeComments: true },
		);

		return getAdjacentCommentTokensFromCursor(cursor).reverse();
	}

	/**
	 * Gets all comment tokens directly after the given node or token.
	 * @param {ASTNode|token} nodeOrToken The AST node or token to check for adjacent comment tokens.
	 * @returns {Array} An array of comments in occurrence order.
	 */
	getCommentsAfter(nodeOrToken) {
		const cursor = createCursorWithCount(
			cursors.forward,
			this[TOKENS],
			this[COMMENTS],
			this[INDEX_MAP],
			nodeOrToken.range[1],
			-1,
			{ includeComments: true },
		);

		return getAdjacentCommentTokensFromCursor(cursor);
	}

	/**
	 * Gets all comment tokens inside the given node.
	 * @param {ASTNode} node The AST node to get the comments for.
	 * @returns {Array} An array of comments in occurrence order.
	 */
	getCommentsInside(node) {
		return this.getTokens(node, {
			includeComments: true,
			filter: isCommentToken,
		});
	}
};
