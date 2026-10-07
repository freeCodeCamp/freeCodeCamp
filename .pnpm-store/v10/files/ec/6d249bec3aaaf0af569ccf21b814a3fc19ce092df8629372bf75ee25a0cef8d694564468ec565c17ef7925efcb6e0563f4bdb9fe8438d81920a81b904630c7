/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Yuta Hiroto @hiroppy
*/

"use strict";

const Parser = require("../Parser");

/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../Parser").ParserState} ParserState */
/** @typedef {import("../Parser").PreparsedAst} PreparsedAst */

class AssetSourceParser extends Parser {
	/**
	 * @param {string | Buffer | PreparsedAst} source the source to parse
	 * @param {ParserState} state the parser state
	 * @returns {ParserState} the parser state
	 */
	parse(source, state) {
		if (typeof source === "object" && !Buffer.isBuffer(source)) {
			throw new Error("AssetSourceParser doesn't accept preparsed AST");
		}
		const { module } = state;
		/** @type {BuildInfo} */
		(module.buildInfo).strict = true;
		/** @type {BuildMeta} */
		(module.buildMeta).exportsType = "default";
		/** @type {BuildMeta} */
		(state.module.buildMeta).defaultObject = false;

		return state;
	}
}

module.exports = AssetSourceParser;
