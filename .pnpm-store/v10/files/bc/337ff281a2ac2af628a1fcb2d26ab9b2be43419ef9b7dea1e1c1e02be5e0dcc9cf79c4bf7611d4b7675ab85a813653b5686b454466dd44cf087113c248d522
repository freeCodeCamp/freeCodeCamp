/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const HelperRuntimeModule = require("./HelperRuntimeModule");

/** @typedef {import("../Compilation")} Compilation */

class RelativeUrlRuntimeModule extends HelperRuntimeModule {
	constructor() {
		super("relative url");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate } = compilation;
		return Template.asString([
			`${RuntimeGlobals.relativeUrl} = function RelativeURL(url) {`,
			Template.indent([
				'var realUrl = new URL(url, "x:/");',
				"var values = {};",
				"for (var key in realUrl) values[key] = realUrl[key];",
				"values.href = url;",
				'values.pathname = url.replace(/[?#].*/, "");',
				'values.origin = values.protocol = "";',
				`values.toString = values.toJSON = ${runtimeTemplate.returningFunction(
					"url"
				)};`,
				"for (var key in values) Object.defineProperty(this, key, { enumerable: true, configurable: true, value: values[key] });"
			]),
			"};",
			`${RuntimeGlobals.relativeUrl}.prototype = URL.prototype;`
		]);
	}
}

module.exports = RelativeUrlRuntimeModule;
