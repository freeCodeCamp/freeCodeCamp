/**
 * @fileoverview Helper class to aid in constructing fix commands.
 * @author Alan Pierce
 */
"use strict";

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/**
 * @import { SourceRange } from "@eslint/core";
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./ast-utils");

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * A helper class to combine fix options into a fix command. Currently, it
 * exposes some "retain" methods that extend the range of the text being
 * replaced so that other fixes won't touch that region in the same pass.
 */
class FixTracker {
	/**
	 * Create a new FixTracker.
	 * @param {ruleFixer} fixer A ruleFixer instance.
	 * @param {SourceCode} sourceCode A SourceCode object for the current code.
	 */
	constructor(fixer, sourceCode) {
		this.fixer = fixer;
		this.sourceCode = sourceCode;
		this.retainedRange = null;
	}

	/**
	 * Mark the given range as "retained", meaning that other fixes may not
	 * may not modify this region in the same pass.
	 * @param {SourceRange} range The range to retain.
	 * @returns {FixTracker} The same RuleFixer, for chained calls.
	 */
	retainRange(range) {
		this.retainedRange = range;
		return this;
	}

	/**
	 * Given a node, find the function containing it (or the entire program) and
	 * mark it as retained, meaning that other fixes may not modify it in this
	 * pass. This is useful for avoiding conflicts in fixes that modify control
	 * flow.
	 * @param {ASTNode} node The node to use as a starting point.
	 * @returns {FixTracker} The same RuleFixer, for chained calls.
	 */
	retainEnclosingFunction(node) {
		const functionNode = astUtils.getUpperFunction(node);

		return this.retainRange(
			functionNode ? functionNode.range : this.sourceCode.ast.range,
		);
	}

	/**
	 * Given a node or token, find the token before and afterward, and mark that
	 * range as retained, meaning that other fixes may not modify it in this
	 * pass. This is useful for avoiding conflicts in fixes that make a small
	 * change to the code where the AST should not be changed.
	 * @param {ASTNode|Token} nodeOrToken The node or token to use as a starting
	 *      point. The token to the left and right are use in the range.
	 * @returns {FixTracker} The same RuleFixer, for chained calls.
	 */
	retainSurroundingTokens(nodeOrToken) {
		const tokenBefore =
			this.sourceCode.getTokenBefore(nodeOrToken) || nodeOrToken;
		const tokenAfter =
			this.sourceCode.getTokenAfter(nodeOrToken) || nodeOrToken;

		return this.retainRange([tokenBefore.range[0], tokenAfter.range[1]]);
	}

	/**
	 * Create a fix command that replaces the given range with the given text,
	 * accounting for any retained ranges.
	 * @param {SourceRange} range The range to remove in the fix.
	 * @param {string} text The text to insert in place of the range.
	 * @returns {Object} The fix command.
	 */
	replaceTextRange(range, text) {
		let actualRange;

		if (this.retainedRange) {
			actualRange = [
				Math.min(this.retainedRange[0], range[0]),
				Math.max(this.retainedRange[1], range[1]),
			];
		} else {
			actualRange = range;
		}

		return this.fixer.replaceTextRange(
			actualRange,
			this.sourceCode.text.slice(actualRange[0], range[0]) +
				text +
				this.sourceCode.text.slice(range[1], actualRange[1]),
		);
	}

	/**
	 * Create a fix command that removes the given node or token, accounting for
	 * any retained ranges.
	 * @param {ASTNode|Token} nodeOrToken The node or token to remove.
	 * @returns {Object} The fix command.
	 */
	remove(nodeOrToken) {
		return this.replaceTextRange(nodeOrToken.range, "");
	}
}

module.exports = FixTracker;
