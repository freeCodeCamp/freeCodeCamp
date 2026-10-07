/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const LocalModule = require("./LocalModule");

/** @typedef {import("../javascript/JavascriptParser").ParserState} ParserState */

/**
 * @param {string} parent parent module
 * @param {string} mod module to resolve
 * @returns {string} resolved module
 */
const lookup = (parent, mod) => {
	if (mod.charAt(0) !== ".") return mod;

	const path = parent.split("/");
	const segments = mod.split("/");
	path.pop();

	for (let i = 0; i < segments.length; i++) {
		const seg = segments[i];
		if (seg === "..") {
			path.pop();
		} else if (seg !== ".") {
			path.push(seg);
		}
	}

	return path.join("/");
};

/**
 * @param {ParserState} state parser state
 * @param {string} name name
 * @returns {LocalModule} local module
 */
module.exports.addLocalModule = (state, name) => {
	if (!state.localModules) {
		state.localModules = [];
	}
	const m = new LocalModule(name, state.localModules.length);
	state.localModules.push(m);
	return m;
};

/**
 * @param {ParserState} state parser state
 * @param {string} name name
 * @param {string} [namedModule] named module
 * @returns {LocalModule | null} local module or null
 */
module.exports.getLocalModule = (state, name, namedModule) => {
	if (!state.localModules) return null;
	if (namedModule) {
		// resolve dependency name relative to the defining named module
		name = lookup(namedModule, name);
	}
	for (let i = 0; i < state.localModules.length; i++) {
		if (state.localModules[i].name === name) {
			return state.localModules[i];
		}
	}
	return null;
};
