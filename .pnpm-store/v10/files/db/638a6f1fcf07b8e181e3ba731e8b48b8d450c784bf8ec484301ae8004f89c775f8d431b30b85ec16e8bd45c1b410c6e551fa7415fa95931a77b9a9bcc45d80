/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./config/defaults").WebpackOptionsNormalizedWithDefaults} WebpackOptions */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./NormalModule")} NormalModule */

/** @typedef {Record<string, EXPECTED_ANY>} PreparsedAst */

/**
 * Defines the parser state base type used by this module.
 * @typedef {object} ParserStateBase
 * @property {string | Buffer} source
 * @property {NormalModule} current
 * @property {NormalModule} module
 * @property {Compilation} compilation
 * @property {WebpackOptions} options
 */

/** @typedef {ParserStateBase & Record<string, EXPECTED_ANY>} ParserState */

class Parser {
	/* istanbul ignore next */
	/**
	 * Parses the provided source and updates the parser state.
	 * @abstract
	 * @param {string | Buffer | PreparsedAst} source the source to parse
	 * @param {ParserState} state the parser state
	 * @returns {ParserState} the parser state
	 */
	parse(source, state) {
		const AbstractMethodError = require("./AbstractMethodError");

		throw new AbstractMethodError();
	}
}

module.exports = Parser;
