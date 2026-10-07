/**
 * @fileoverview Define the abstract class about cursors which iterate tokens.
 * @author Toru Nagashima
 */
"use strict";

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * The abstract class about cursors which iterate tokens.
 *
 * This class has 2 abstract methods.
 *
 * - `current: Token | Comment | null` ... The current token.
 * - `moveNext(): boolean` ... Moves this cursor to the next token. If the next token didn't exist, it returns `false`.
 *
 * This is similar to ES2015 Iterators.
 * However, Iterators were slow (at 2017-01), so I created this class as similar to C# IEnumerable.
 *
 * There are the following known sub classes.
 *
 * - ForwardTokenCursor .......... The cursor which iterates tokens only.
 * - BackwardTokenCursor ......... The cursor which iterates tokens only in reverse.
 * - ForwardTokenCommentCursor ... The cursor which iterates tokens and comments.
 * - BackwardTokenCommentCursor .. The cursor which iterates tokens and comments in reverse.
 * - DecorativeCursor
 *     - FilterCursor ............ The cursor which ignores the specified tokens.
 *     - SkipCursor .............. The cursor which ignores the first few tokens.
 *     - LimitCursor ............. The cursor which limits the count of tokens.
 *
 */
module.exports = class Cursor {
	/**
	 * Initializes this cursor.
	 */
	constructor() {
		this.current = null;
	}

	/**
	 * Gets the first token.
	 * This consumes this cursor.
	 * @returns {Token|Comment} The first token or null.
	 */
	getOneToken() {
		return this.moveNext() ? this.current : null;
	}

	/**
	 * Gets the first tokens.
	 * This consumes this cursor.
	 * @returns {(Token|Comment)[]} All tokens.
	 */
	getAllTokens() {
		const tokens = [];

		while (this.moveNext()) {
			tokens.push(this.current);
		}

		return tokens;
	}

	/**
	 * Moves this cursor to the next token.
	 * @returns {boolean} `true` if the next token exists.
	 * @abstract
	 */
	/* c8 ignore next */
	// eslint-disable-next-line class-methods-use-this -- Unused
	moveNext() {
		throw new Error("Not implemented.");
	}
};
