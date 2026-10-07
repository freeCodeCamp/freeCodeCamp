/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { RawSource } = require("webpack-sources");
const ConcatenationScope = require("../ConcatenationScope");
const { UsageState } = require("../ExportsInfo");
const Generator = require("../Generator");
const { JAVASCRIPT_TYPES } = require("../ModuleSourceTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").JsonGeneratorOptions} JsonGeneratorOptions */
/** @typedef {import("../ExportsInfo")} ExportsInfo */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../Generator").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../Module").ConcatenationBailoutReasonContext} ConcatenationBailoutReasonContext */
/** @typedef {import("../Module").SourceType} SourceType */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../NormalModule")} NormalModule */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */
/** @typedef {import("../util/fs").JsonArray} JsonArray */
/** @typedef {import("../util/fs").JsonObject} JsonObject */
/** @typedef {import("../util/fs").JsonValue} JsonValue */

/**
 * Returns stringified data.
 * @param {JsonValue} data Raw JSON data
 * @returns {undefined | string} stringified data
 */
const stringifySafe = (data) => {
	const stringified = JSON.stringify(data);
	if (!stringified) {
		return; // Invalid JSON
	}

	return stringified.replace(/\u2028|\u2029/g, (str) =>
		str === "\u2029" ? "\\u2029" : "\\u2028"
	); // invalid in JavaScript but valid JSON
};

/**
 * Creates an object for exports info.
 * @param {JsonObject | JsonArray} data Raw JSON data (always an object or array)
 * @param {ExportsInfo} exportsInfo exports info
 * @param {RuntimeSpec} runtime the runtime
 * @returns {JsonObject | JsonArray} reduced data
 */
const createObjectForExportsInfo = (data, exportsInfo, runtime) => {
	if (exportsInfo.otherExportsInfo.getUsed(runtime) !== UsageState.Unused) {
		return data;
	}
	const isArray = Array.isArray(data);
	/** @type {JsonObject | JsonArray} */
	const reducedData = isArray ? [] : {};
	for (const key of Object.keys(data)) {
		const exportInfo = exportsInfo.getReadOnlyExportInfo(key);
		const used = exportInfo.getUsed(runtime);
		if (used === UsageState.Unused) continue;

		// The real type is `JsonObject | JsonArray`, but typescript doesn't work `Object.keys(['string', 'other-string', 'etc'])` properly
		const newData = /** @type {JsonObject} */ (data)[key];
		const value =
			used === UsageState.OnlyPropertiesUsed &&
			exportInfo.exportsInfo &&
			typeof newData === "object" &&
			newData
				? createObjectForExportsInfo(newData, exportInfo.exportsInfo, runtime)
				: newData;

		const name = /** @type {string} */ (exportInfo.getUsedName(key, runtime));
		/** @type {JsonObject} */
		(reducedData)[name] = value;
	}
	if (isArray) {
		const arrayLengthWhenUsed =
			exportsInfo.getReadOnlyExportInfo("length").getUsed(runtime) !==
			UsageState.Unused
				? data.length
				: undefined;

		let sizeObjectMinusArray = 0;
		const reducedDataLength =
			/** @type {JsonArray} */
			(reducedData).length;
		for (let i = 0; i < reducedDataLength; i++) {
			if (/** @type {JsonArray} */ (reducedData)[i] === undefined) {
				sizeObjectMinusArray -= 2;
			} else {
				sizeObjectMinusArray += `${i}`.length + 3;
			}
		}
		if (arrayLengthWhenUsed !== undefined) {
			sizeObjectMinusArray +=
				`${arrayLengthWhenUsed}`.length +
				8 -
				(arrayLengthWhenUsed - reducedDataLength) * 2;
		}
		if (sizeObjectMinusArray < 0) {
			return Object.assign(
				arrayLengthWhenUsed === undefined
					? {}
					: { length: arrayLengthWhenUsed },
				reducedData
			);
		}
		/** @type {number} */
		const generatedLength =
			arrayLengthWhenUsed !== undefined
				? Math.max(arrayLengthWhenUsed, reducedDataLength)
				: reducedDataLength;
		for (let i = 0; i < generatedLength; i++) {
			if (/** @type {JsonArray} */ (reducedData)[i] === undefined) {
				/** @type {JsonArray} */
				(reducedData)[i] = 0;
			}
		}
	}
	return reducedData;
};

class JsonGenerator extends Generator {
	/**
	 * Creates an instance of JsonGenerator.
	 * @param {JsonGeneratorOptions} options options
	 */
	constructor(options) {
		super();
		/** @type {JsonGeneratorOptions} */
		this.options = options;
	}

	/**
	 * Returns the source types available for this module.
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		return JAVASCRIPT_TYPES;
	}

	/**
	 * Returns the estimated size for the requested source type.
	 * @param {NormalModule} module the module
	 * @param {SourceType=} type source type
	 * @returns {number} estimate size of the module
	 */
	getSize(module, type) {
		/** @type {JsonValue | undefined} */
		const data =
			module.buildInfo &&
			module.buildInfo.jsonData &&
			module.buildInfo.jsonData.get();
		if (!data) return 0;
		return /** @type {string} */ (stringifySafe(data)).length + 10;
	}

	/**
	 * Returns the reason this module cannot be concatenated, when one exists.
	 * @param {NormalModule} module module for which the bailout reason should be determined
	 * @param {ConcatenationBailoutReasonContext} context context
	 * @returns {string | undefined} reason why this module can't be concatenated, undefined when it can be concatenated
	 */
	getConcatenationBailoutReason(module, context) {
		return undefined;
	}

	/**
	 * Generates generated code for this runtime module.
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generate(
		module,
		{
			moduleGraph,
			runtimeTemplate,
			runtimeRequirements,
			runtime,
			concatenationScope
		}
	) {
		/** @type {JsonValue | undefined} */
		const data =
			module.buildInfo &&
			module.buildInfo.jsonData &&
			module.buildInfo.jsonData.get();
		if (data === undefined) {
			return new RawSource(
				runtimeTemplate.missingModuleStatement({
					request: module.rawRequest
				})
			);
		}
		const exportsInfo = moduleGraph.getExportsInfo(module);
		/** @type {JsonValue} */
		const finalJson =
			typeof data === "object" &&
			data &&
			exportsInfo.otherExportsInfo.getUsed(runtime) === UsageState.Unused
				? createObjectForExportsInfo(data, exportsInfo, runtime)
				: data;
		// Use JSON because JSON.parse() is much faster than JavaScript evaluation
		const jsonStr = /** @type {string} */ (stringifySafe(finalJson));
		const jsonExpr =
			this.options.JSONParse &&
			jsonStr.length > 20 &&
			typeof finalJson === "object"
				? `/*#__PURE__*/JSON.parse('${jsonStr.replace(/[\\']/g, "\\$&")}')`
				: jsonStr.replace(/"__proto__":/g, '["__proto__"]:');
		/** @type {string} */
		let content;
		if (concatenationScope) {
			content = `${runtimeTemplate.renderConst()} ${
				ConcatenationScope.NAMESPACE_OBJECT_EXPORT
			} = ${jsonExpr};`;
			concatenationScope.registerNamespaceExport(
				ConcatenationScope.NAMESPACE_OBJECT_EXPORT
			);
		} else {
			runtimeRequirements.add(RuntimeGlobals.module);
			content = `${module.moduleArgument}.exports = ${jsonExpr};`;
		}
		return new RawSource(content);
	}

	/**
	 * Generates fallback output for the provided error condition.
	 * @param {Error} error the error
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generateError(error, module, generateContext) {
		return new RawSource(`throw new Error(${JSON.stringify(error.message)});`);
	}

	/**
	 * Updates the hash with the data contributed by this instance.
	 * @param {Hash} hash hash that will be modified
	 * @param {UpdateHashContext} updateHashContext context for updating hash
	 */
	updateHash(hash, updateHashContext) {
		if (this.options.JSONParse) {
			hash.update("json-parse");
		}
	}
}

module.exports = JsonGenerator;
