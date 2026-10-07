/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sergey Melyukov @smelukov
*/

"use strict";

const { RawSource } = require("webpack-sources");
const ConcatenationScope = require("../ConcatenationScope");
const Generator = require("../Generator");
const {
	NO_TYPES,
	CSS_URL_TYPES,
	JS_TYPES,
	JS_AND_CSS_URL_TYPES
} = require("../ModuleSourceTypesConstants");
const RuntimeGlobals = require("../RuntimeGlobals");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../Module").ConcatenationBailoutReasonContext} ConcatenationBailoutReasonContext */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../NormalModule")} NormalModule */

class AssetSourceGenerator extends Generator {
	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 */
	constructor(moduleGraph) {
		super();

		this._moduleGraph = moduleGraph;
	}

	/**
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
			case "javascript": {
				if (!originalSource) {
					return new RawSource("");
				}

				const content = originalSource.source();
				const encodedSource =
					typeof content === "string" ? content : content.toString("utf-8");

				let sourceContent;
				if (concatenationScope) {
					concatenationScope.registerNamespaceExport(
						ConcatenationScope.NAMESPACE_OBJECT_EXPORT
					);
					sourceContent = `${runtimeTemplate.supportsConst() ? "const" : "var"} ${
						ConcatenationScope.NAMESPACE_OBJECT_EXPORT
					} = ${JSON.stringify(encodedSource)};`;
				} else {
					runtimeRequirements.add(RuntimeGlobals.module);
					sourceContent = `${RuntimeGlobals.module}.exports = ${JSON.stringify(
						encodedSource
					)};`;
				}
				return new RawSource(sourceContent);
			}
			case "css-url": {
				if (!originalSource) {
					return null;
				}

				const content = originalSource.source();
				const encodedSource =
					typeof content === "string" ? content : content.toString("utf-8");

				if (data) {
					data.set("url", { [type]: encodedSource });
				}
				return null;
			}
			default:
				return null;
		}
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
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		const sourceTypes = new Set();
		const connections = this._moduleGraph.getIncomingConnections(module);

		for (const connection of connections) {
			if (!connection.originModule) {
				continue;
			}

			sourceTypes.add(connection.originModule.type.split("/")[0]);
		}

		if (sourceTypes.has("javascript") && sourceTypes.has("css")) {
			return JS_AND_CSS_URL_TYPES;
		} else if (sourceTypes.has("javascript")) {
			return JS_TYPES;
		} else if (sourceTypes.has("css")) {
			return CSS_URL_TYPES;
		}

		return NO_TYPES;
	}

	/**
	 * @param {NormalModule} module the module
	 * @param {string=} type source type
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
