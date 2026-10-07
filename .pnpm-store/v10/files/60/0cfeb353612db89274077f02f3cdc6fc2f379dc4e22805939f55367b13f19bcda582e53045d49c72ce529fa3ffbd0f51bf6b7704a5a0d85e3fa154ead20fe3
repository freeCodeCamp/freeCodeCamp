/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Yuta Hiroto @hiroppy
*/

"use strict";

const Parser = require("../Parser");

/** @typedef {import("../../declarations/WebpackOptions").AssetParserDataUrlOptions} AssetParserDataUrlOptions */
/** @typedef {import("../../declarations/WebpackOptions").AssetParserOptions} AssetParserOptions */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../Parser").ParserState} ParserState */
/** @typedef {import("../Parser").PreparsedAst} PreparsedAst */

/** @typedef {((source: string | Buffer, context: { filename: string, module: Module }) => boolean)} AssetParserDataUrlFunction */

class AssetParser extends Parser {
	/**
	 * Creates an instance of AssetParser.
	 * @param {AssetParserOptions["dataUrlCondition"] | boolean} dataUrlCondition condition for inlining as DataUrl
	 */
	constructor(dataUrlCondition) {
		super();
		/** @type {AssetParserOptions["dataUrlCondition"] | boolean} */
		this.dataUrlCondition = dataUrlCondition;
	}

	/**
	 * Parses the provided source and updates the parser state.
	 * @param {string | Buffer | PreparsedAst} source the source to parse
	 * @param {ParserState} state the parser state
	 * @returns {ParserState} the parser state
	 */
	parse(source, state) {
		if (typeof source === "object" && !Buffer.isBuffer(source)) {
			throw new Error("AssetParser doesn't accept preparsed AST");
		}

		const buildInfo =
			/** @type {BuildInfo} */
			(state.module.buildInfo);
		buildInfo.strict = true;
		const buildMeta =
			/** @type {BuildMeta} */
			(state.module.buildMeta);
		buildMeta.exportsType = "default";
		buildMeta.defaultObject = false;

		if (typeof this.dataUrlCondition === "function") {
			buildInfo.dataUrl = this.dataUrlCondition(source, {
				filename: /** @type {string} */ (state.module.getResource()),
				module: state.module
			});
		} else if (typeof this.dataUrlCondition === "boolean") {
			buildInfo.dataUrl = this.dataUrlCondition;
		} else if (
			this.dataUrlCondition &&
			typeof this.dataUrlCondition === "object"
		) {
			buildInfo.dataUrl =
				Buffer.byteLength(source) <=
				/** @type {NonNullable<AssetParserDataUrlOptions["maxSize"]>} */
				(this.dataUrlCondition.maxSize);
		} else {
			throw new Error("Unexpected dataUrlCondition type");
		}

		return state;
	}
}

module.exports = AssetParser;
