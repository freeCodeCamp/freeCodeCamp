/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const RawDataUrlModule = require("../asset/RawDataUrlModule");
const makeSerializable = require("../util/makeSerializable");
const memoize = require("../util/memoize");
const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ModuleGraphConnection")} ModuleGraphConnection */
/** @typedef {import("../ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

const getIgnoredRawDataUrlModule = memoize(
	() => new RawDataUrlModule("data:,", "ignored-asset", "(ignored asset)")
);

class CssUrlDependency extends ModuleDependency {
	/**
	 * @param {string} request request
	 * @param {Range} range range of the argument
	 * @param {"string" | "url" | "src"} urlType dependency type e.g. url() or string
	 */
	constructor(request, range, urlType) {
		super(request);
		this.range = range;
		this.urlType = urlType;
	}

	get type() {
		return "css url()";
	}

	get category() {
		return "url";
	}

	/**
	 * @param {string} context context directory
	 * @returns {Module | null} a module
	 */
	createIgnoredModule(context) {
		return getIgnoredRawDataUrlModule();
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.urlType);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.urlType = read();
		super.deserialize(context);
	}
}

/**
 * @param {string} str string
 * @returns {string} string in quotes if needed
 */
const cssEscapeString = str => {
	let countWhiteOrBracket = 0;
	let countQuotation = 0;
	let countApostrophe = 0;
	for (let i = 0; i < str.length; i++) {
		const cc = str.charCodeAt(i);
		switch (cc) {
			case 9: // tab
			case 10: // nl
			case 32: // space
			case 40: // (
			case 41: // )
				countWhiteOrBracket++;
				break;
			case 34:
				countQuotation++;
				break;
			case 39:
				countApostrophe++;
				break;
		}
	}
	if (countWhiteOrBracket < 2) {
		return str.replace(/[\n\t ()'"\\]/g, m => `\\${m}`);
	} else if (countQuotation <= countApostrophe) {
		return `"${str.replace(/[\n"\\]/g, m => `\\${m}`)}"`;
	}
	return `'${str.replace(/[\n'\\]/g, m => `\\${m}`)}'`;
};

CssUrlDependency.Template = class CssUrlDependencyTemplate extends (
	ModuleDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(
		dependency,
		source,
		{ moduleGraph, runtimeTemplate, codeGenerationResults }
	) {
		const dep = /** @type {CssUrlDependency} */ (dependency);
		const module = /** @type {Module} */ (moduleGraph.getModule(dep));

		/** @type {string | undefined} */
		let newValue;

		switch (dep.urlType) {
			case "string":
				newValue = cssEscapeString(
					this.assetUrl({
						module,
						codeGenerationResults
					})
				);
				break;
			case "url":
				newValue = `url(${cssEscapeString(
					this.assetUrl({
						module,
						codeGenerationResults
					})
				)})`;
				break;
			case "src":
				newValue = `src(${cssEscapeString(
					this.assetUrl({
						module,
						codeGenerationResults
					})
				)})`;
				break;
		}

		source.replace(
			dep.range[0],
			dep.range[1] - 1,
			/** @type {string} */ (newValue)
		);
	}

	/**
	 * @param {object} options options object
	 * @param {Module} options.module the module
	 * @param {RuntimeSpec=} options.runtime runtime
	 * @param {CodeGenerationResults} options.codeGenerationResults the code generation results
	 * @returns {string} the url of the asset
	 */
	assetUrl({ runtime, module, codeGenerationResults }) {
		if (!module) {
			return "data:,";
		}
		const codeGen = codeGenerationResults.get(module, runtime);
		const data =
			/** @type {NonNullable<CodeGenerationResult["data"]>} */
			(codeGen.data);
		if (!data) return "data:,";
		const url = data.get("url");
		if (!url || !url["css-url"]) return "data:,";
		return url["css-url"];
	}
};

makeSerializable(CssUrlDependency, "webpack/lib/dependencies/CssUrlDependency");

CssUrlDependency.PUBLIC_PATH_AUTO = "__WEBPACK_CSS_PUBLIC_PATH_AUTO__";

module.exports = CssUrlDependency;
