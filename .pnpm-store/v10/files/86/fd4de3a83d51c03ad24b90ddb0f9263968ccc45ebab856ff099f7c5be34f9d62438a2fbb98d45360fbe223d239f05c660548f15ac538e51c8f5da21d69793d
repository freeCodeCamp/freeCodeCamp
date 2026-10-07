/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Parser = require("../Parser");
const JsonExportsDependency = require("../dependencies/JsonExportsDependency");
const memoize = require("../util/memoize");
const JsonData = require("./JsonData");

/** @typedef {import("../../declarations/plugins/JsonModulesPluginParser").JsonModulesPluginParserOptions} JsonModulesPluginParserOptions */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../Parser").ParserState} ParserState */
/** @typedef {import("../Parser").PreparsedAst} PreparsedAst */
/** @typedef {import("./JsonModulesPlugin").RawJsonData} RawJsonData */

const getParseJson = memoize(() => require("json-parse-even-better-errors"));

class JsonParser extends Parser {
	/**
	 * @param {JsonModulesPluginParserOptions} options parser options
	 */
	constructor(options) {
		super();
		this.options = options || {};
	}

	/**
	 * @param {string | Buffer | PreparsedAst} source the source to parse
	 * @param {ParserState} state the parser state
	 * @returns {ParserState} the parser state
	 */
	parse(source, state) {
		if (Buffer.isBuffer(source)) {
			source = source.toString("utf-8");
		}

		/** @type {NonNullable<JsonModulesPluginParserOptions["parse"]>} */
		const parseFn =
			typeof this.options.parse === "function"
				? this.options.parse
				: getParseJson();
		/** @type {Buffer | RawJsonData | undefined} */
		let data;
		try {
			data =
				typeof source === "object"
					? source
					: parseFn(source[0] === "\uFEFF" ? source.slice(1) : source);
		} catch (err) {
			throw new Error(
				`Cannot parse JSON: ${/** @type {Error} */ (err).message}`
			);
		}
		const jsonData = new JsonData(/** @type {Buffer | RawJsonData} */ (data));
		const buildInfo = /** @type {BuildInfo} */ (state.module.buildInfo);
		buildInfo.jsonData = jsonData;
		buildInfo.strict = true;
		const buildMeta = /** @type {BuildMeta} */ (state.module.buildMeta);
		buildMeta.exportsType = "default";
		buildMeta.defaultObject =
			typeof data === "object" ? "redirect-warn" : false;
		state.module.addDependency(
			new JsonExportsDependency(jsonData, this.options.exportsDepth)
		);
		return state;
	}
}

module.exports = JsonParser;
