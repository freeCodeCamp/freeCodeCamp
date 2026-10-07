/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { RawSource } = require("webpack-sources");
const ConcatenationScope = require("../ConcatenationScope");
const { UsageState } = require("../ExportsInfo");
const Generator = require("../Generator");
const { JS_TYPES } = require("../ModuleSourceTypesConstants");
const RuntimeGlobals = require("../RuntimeGlobals");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../ExportsInfo")} ExportsInfo */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../Module").ConcatenationBailoutReasonContext} ConcatenationBailoutReasonContext */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../NormalModule")} NormalModule */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */
/** @typedef {import("./JsonData")} JsonData */
/** @typedef {import("./JsonModulesPlugin").RawJsonData} RawJsonData */

/**
 * @param {RawJsonData} data Raw JSON data
 * @returns {undefined|string} stringified data
 */
const stringifySafe = data => {
	const stringified = JSON.stringify(data);
	if (!stringified) {
		return; // Invalid JSON
	}

	return stringified.replace(/\u2028|\u2029/g, str =>
		str === "\u2029" ? "\\u2029" : "\\u2028"
	); // invalid in JavaScript but valid JSON
};

/**
 * @param {RawJsonData} data Raw JSON data (always an object or array)
 * @param {ExportsInfo} exportsInfo exports info
 * @param {RuntimeSpec} runtime the runtime
 * @returns {RawJsonData} reduced data
 */
const createObjectForExportsInfo = (data, exportsInfo, runtime) => {
	if (exportsInfo.otherExportsInfo.getUsed(runtime) !== UsageState.Unused)
		return data;
	const isArray = Array.isArray(data);
	/** @type {RawJsonData} */
	const reducedData = isArray ? [] : {};
	for (const key of Object.keys(data)) {
		const exportInfo = exportsInfo.getReadOnlyExportInfo(key);
		const used = exportInfo.getUsed(runtime);
		if (used === UsageState.Unused) continue;

		/** @type {RawJsonData} */
		const value =
			used === UsageState.OnlyPropertiesUsed && exportInfo.exportsInfo
				? createObjectForExportsInfo(data[key], exportInfo.exportsInfo, runtime)
				: data[key];

		const name = /** @type {string} */ (exportInfo.getUsedName(key, runtime));
		/** @type {Record<string, RawJsonData>} */ (reducedData)[name] = value;
	}
	if (isArray) {
		const arrayLengthWhenUsed =
			exportsInfo.getReadOnlyExportInfo("length").getUsed(runtime) !==
			UsageState.Unused
				? data.length
				: undefined;

		let sizeObjectMinusArray = 0;
		for (let i = 0; i < reducedData.length; i++) {
			if (reducedData[i] === undefined) {
				sizeObjectMinusArray -= 2;
			} else {
				sizeObjectMinusArray += `${i}`.length + 3;
			}
		}
		if (arrayLengthWhenUsed !== undefined) {
			sizeObjectMinusArray +=
				`${arrayLengthWhenUsed}`.length +
				8 -
				(arrayLengthWhenUsed - reducedData.length) * 2;
		}
		if (sizeObjectMinusArray < 0)
			return Object.assign(
				arrayLengthWhenUsed === undefined
					? {}
					: { length: arrayLengthWhenUsed },
				reducedData
			);
		/** @type {number} */
		const generatedLength =
			arrayLengthWhenUsed !== undefined
				? Math.max(arrayLengthWhenUsed, reducedData.length)
				: reducedData.length;
		for (let i = 0; i < generatedLength; i++) {
			if (reducedData[i] === undefined) {
				reducedData[i] = 0;
			}
		}
	}
	return reducedData;
};

class JsonGenerator extends Generator {
	/**
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		return JS_TYPES;
	}

	/**
	 * @param {NormalModule} module the module
	 * @param {string=} type source type
	 * @returns {number} estimate size of the module
	 */
	getSize(module, type) {
		/** @type {RawJsonData | undefined} */
		const data =
			module.buildInfo &&
			module.buildInfo.jsonData &&
			module.buildInfo.jsonData.get();
		if (!data) return 0;
		return /** @type {string} */ (stringifySafe(data)).length + 10;
	}

	/**
	 * @param {NormalModule} module module for which the bailout reason should be determined
	 * @param {ConcatenationBailoutReasonContext} context context
	 * @returns {string | undefined} reason why this module can't be concatenated, undefined when it can be concatenated
	 */
	getConcatenationBailoutReason(module, context) {
		return undefined;
	}

	/**
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
		/** @type {RawJsonData | undefined} */
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
		/** @type {RawJsonData} */
		const finalJson =
			typeof data === "object" &&
			data &&
			exportsInfo.otherExportsInfo.getUsed(runtime) === UsageState.Unused
				? createObjectForExportsInfo(data, exportsInfo, runtime)
				: data;
		// Use JSON because JSON.parse() is much faster than JavaScript evaluation
		const jsonStr = /** @type {string} */ (stringifySafe(finalJson));
		const jsonExpr =
			jsonStr.length > 20 && typeof finalJson === "object"
				? `/*#__PURE__*/JSON.parse('${jsonStr.replace(/[\\']/g, "\\$&")}')`
				: jsonStr;
		/** @type {string} */
		let content;
		if (concatenationScope) {
			content = `${runtimeTemplate.supportsConst() ? "const" : "var"} ${
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
}

module.exports = JsonGenerator;
