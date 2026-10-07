/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Alexander Akait @alexander-akait
*/

"use strict";

const { RawSource } = require("webpack-sources");
const ConcatenationScope = require("../ConcatenationScope");
const Generator = require("../Generator");
const {
	CSS_TYPE,
	CSS_URL_TYPE,
	CSS_URL_TYPES,
	JAVASCRIPT_AND_CSS_URL_TYPES,
	JAVASCRIPT_TYPE,
	JAVASCRIPT_TYPES,
	NO_TYPES
} = require("../ModuleSourceTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../Module").ConcatenationBailoutReasonContext} ConcatenationBailoutReasonContext */
/** @typedef {import("../Module").SourceType} SourceType */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../NormalModule")} NormalModule */

class AssetSourceGenerator extends Generator {
	/**
	 * Creates an instance of AssetSourceGenerator.
	 * @param {ModuleGraph} moduleGraph the module graph
	 */
	constructor(moduleGraph) {
		super();

		this._moduleGraph = moduleGraph;
	}

	/**
	 * Generates generated code for this runtime module.
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generate(
		module,
		{ type, concatenationScope, getData, runtimeTemplate, runtimeRequirements }
	) {
		const originalSource = module.originalSource();
		const data = getData ? getData() : undefined;

		switch (type) {
			case JAVASCRIPT_TYPE: {
				if (!originalSource) {
					return new RawSource("");
				}

				const encodedSource = originalSource.buffer().toString("base64");

				runtimeRequirements.add(RuntimeGlobals.requireScope);
				runtimeRequirements.add(RuntimeGlobals.toBinary);

				/** @type {string} */
				let sourceContent;
				if (concatenationScope) {
					concatenationScope.registerNamespaceExport(
						ConcatenationScope.NAMESPACE_OBJECT_EXPORT
					);
					sourceContent = `${runtimeTemplate.renderConst()} ${
						ConcatenationScope.NAMESPACE_OBJECT_EXPORT
					} = ${RuntimeGlobals.toBinary}(${JSON.stringify(encodedSource)});`;
				} else {
					runtimeRequirements.add(RuntimeGlobals.module);
					sourceContent = `${module.moduleArgument}.exports = ${RuntimeGlobals.toBinary}(${JSON.stringify(
						encodedSource
					)});`;
				}
				return new RawSource(sourceContent);
			}
			case CSS_URL_TYPE: {
				if (!originalSource) {
					return null;
				}

				const encodedSource = originalSource.buffer().toString("base64");

				if (data) {
					data.set("url", {
						[type]: `data:application/octet-stream;base64,${encodedSource}`
					});
				}
				return null;
			}
			default:
				return null;
		}
	}

	/**
	 * Generates fallback output for the provided error condition.
	 * @param {Error} error the error
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generateError(error, module, generateContext) {
		switch (generateContext.type) {
			case JAVASCRIPT_TYPE: {
				return new RawSource(
					`throw new Error(${JSON.stringify(error.message)});`
				);
			}
			default:
				return null;
		}
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
	 * Returns the source types available for this module.
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		/** @type {Set<string>} */
		const sourceTypes = new Set();
		const connections = this._moduleGraph.getIncomingConnections(module);

		for (const connection of connections) {
			if (!connection.originModule) {
				continue;
			}

			sourceTypes.add(connection.originModule.type.split("/")[0]);
		}

		if (sourceTypes.size > 0) {
			if (sourceTypes.has(JAVASCRIPT_TYPE) && sourceTypes.has(CSS_TYPE)) {
				return JAVASCRIPT_AND_CSS_URL_TYPES;
			} else if (sourceTypes.has(CSS_TYPE)) {
				return CSS_URL_TYPES;
			}
			return JAVASCRIPT_TYPES;
		}

		return NO_TYPES;
	}

	/**
	 * Returns the estimated size for the requested source type.
	 * @param {NormalModule} module the module
	 * @param {SourceType=} type source type
	 * @returns {number} estimate size of the module
	 */
	getSize(module, type) {
		const originalSource = module.originalSource();

		if (!originalSource) {
			return 0;
		}

		// Example: m.exports="abcd"
		return originalSource.size() + 12;
	}
}

module.exports = AssetSourceGenerator;
