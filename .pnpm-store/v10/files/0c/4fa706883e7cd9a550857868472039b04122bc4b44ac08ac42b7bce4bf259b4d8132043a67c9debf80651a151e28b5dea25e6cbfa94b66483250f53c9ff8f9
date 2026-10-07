/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Parser = require("../Parser");
const JsonExportsDependency = require("../dependencies/JsonExportsDependency");
const parseJson = require("../util/parseJson");
const JsonData = require("./JsonData");

/** @typedef {import("../../declarations/plugins/JsonModulesPluginParser").JsonModulesPluginParserOptions} JsonModulesPluginParserOptions */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../Parser").ParserState} ParserState */
/** @typedef {import("../Parser").PreparsedAst} PreparsedAst */
/** @typedef {import("../util/fs").JsonValue} JsonValue */

/** @typedef {(input: string) => Buffer | JsonValue} ParseFn */

/**
 * Defines the function returning type used by this module.
 * @template T
 * @typedef {import("../util/memoize").FunctionReturning<T>} FunctionReturning
 */

class JsonParser extends Parser {
	/**
	 * Creates an instance of JsonParser.
	 * @param {JsonModulesPluginParserOptions} options parser options
	 */
	constructor(options = {}) {
		super();
		/** @type {JsonModulesPluginParserOptions} */
		this.options = options;
	}

	/**
	 * Parses the provided source and updates the parser state.
	 * @param {string | Buffer | PreparsedAst} source the source to parse
	 * @param {ParserState} state the parser state
	 * @returns {ParserState} the parser state
	 */
	parse(source, state) {
		if (Buffer.isBuffer(source)) {
			source = source.toString("utf8");
		}

		/** @type {typeof parseJson} */
		const parseFn =
			typeof this.options.parse === "function" ? this.options.parse : parseJson;
		/** @type {Buffer | JsonValue | undefined} */
		let data;
		try {
			data =
				typeof source === "object"
					? source
					: parseFn(source[0] === "\uFEFF" ? source.slice(1) : source);
		} catch (err) {
			throw new Error(
				`Cannot parse JSON: ${/** @type {Error} */ (err).message}`,
				{ cause: err }
			);
		}
		const jsonData = new JsonData(/** @type {Buffer | JsonValue} */ (data));
		const buildInfo = /** @type {BuildInfo} */ (state.module.buildInfo);
		buildInfo.jsonData = jsonData;
		buildInfo.strict = true;
		const buildMeta = /** @type {BuildMeta} */ (state.module.buildMeta);
		buildMeta.exportsType = "default";
		buildMeta.defaultObject =
			typeof data === "object"
				? this.options.namedExports === false
					? false
					: this.options.namedExports === true
						? "redirect"
						: "redirect-warn"
				: false;
		state.module.addDependency(
			new JsonExportsDependency(
				jsonData,
				/** @type {number} */
				(this.options.exportsDepth)
			)
		);
		return state;
	}
}

module.exports = JsonParser;
