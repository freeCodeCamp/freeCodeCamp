/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../javascript/JavascriptParser").JavascriptParserState} JavascriptParserState */

/** @type {WeakMap<JavascriptParserState, boolean>} */
const parserStateExportsState = new WeakMap();

/**
 * Processes the provided parser state.
 * @param {JavascriptParserState} parserState parser state
 * @returns {void}
 */
module.exports.bailout = (parserState) => {
	const value = parserStateExportsState.get(parserState);
	parserStateExportsState.set(parserState, false);
	if (value === true) {
		const buildMeta = /** @type {BuildMeta} */ (parserState.module.buildMeta);
		buildMeta.exportsType = undefined;
		buildMeta.defaultObject = false;
	}
};

/**
 * Processes the provided parser state.
 * @param {JavascriptParserState} parserState parser state
 * @returns {void}
 */
module.exports.enable = (parserState) => {
	const value = parserStateExportsState.get(parserState);
	if (value === false) return;
	parserStateExportsState.set(parserState, true);
	if (value !== true) {
		const buildMeta = /** @type {BuildMeta} */ (parserState.module.buildMeta);
		buildMeta.exportsType = "default";
		buildMeta.defaultObject = "redirect";
	}
};

/**
 * Returns true, when enabled.
 * @param {JavascriptParserState} parserState parser state
 * @returns {boolean} true, when enabled
 */
module.exports.isEnabled = (parserState) => {
	const value = parserStateExportsState.get(parserState);
	return value === true;
};

/**
 * Processes the provided parser state.
 * @param {JavascriptParserState} parserState parser state
 * @returns {void}
 */
module.exports.setDynamic = (parserState) => {
	const value = parserStateExportsState.get(parserState);
	if (value !== true) return;
	/** @type {BuildMeta} */
	(parserState.module.buildMeta).exportsType = "dynamic";
};

/**
 * Processes the provided parser state.
 * @param {JavascriptParserState} parserState parser state
 * @returns {void}
 */
module.exports.setFlagged = (parserState) => {
	const value = parserStateExportsState.get(parserState);
	if (value !== true) return;
	const buildMeta = /** @type {BuildMeta} */ (parserState.module.buildMeta);
	if (buildMeta.exportsType === "dynamic") return;
	buildMeta.exportsType = "flagged";
};
