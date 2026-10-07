/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { ConcatSource } = require("webpack-sources");
const { UsageState } = require("../ExportsInfo");
const RuntimeGlobals = require("../RuntimeGlobals");
const propertyAccess = require("../util/propertyAccess");
const { getEntryRuntime } = require("../util/runtime");
const AbstractLibraryPlugin = require("./AbstractLibraryPlugin");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").LibraryOptions} LibraryOptions */
/** @typedef {import("../../declarations/WebpackOptions").LibraryType} LibraryType */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../javascript/JavascriptModulesPlugin").StartupRenderContext} StartupRenderContext */
/** @template T @typedef {import("./AbstractLibraryPlugin").LibraryContext<T>} LibraryContext<T> */

/**
 * @typedef {object} ExportPropertyLibraryPluginParsed
 * @property {string | string[]} export
 */

/**
 * @typedef {object} ExportPropertyLibraryPluginOptions
 * @property {LibraryType} type
 * @property {boolean} nsObjectUsed the namespace object is used
 * @property {boolean} runtimeExportsUsed runtime exports are used
 */
/**
 * @typedef {ExportPropertyLibraryPluginParsed} T
 * @extends {AbstractLibraryPlugin<ExportPropertyLibraryPluginParsed>}
 */
class ExportPropertyLibraryPlugin extends AbstractLibraryPlugin {
	/**
	 * @param {ExportPropertyLibraryPluginOptions} options options
	 */
	constructor({ type, nsObjectUsed, runtimeExportsUsed }) {
		super({
			pluginName: "ExportPropertyLibraryPlugin",
			type
		});
		this.nsObjectUsed = nsObjectUsed;
		this.runtimeExportsUsed = runtimeExportsUsed;
	}

	/**
	 * @param {LibraryOptions} library normalized library option
	 * @returns {T | false} preprocess as needed by overriding
	 */
	parseOptions(library) {
		return {
			export: /** @type {string | string[]} */ (library.export)
		};
	}

	/**
	 * @param {Module} module the exporting entry module
	 * @param {string} entryName the name of the entrypoint
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {void}
	 */
	finishEntryModule(
		module,
		entryName,
		{ options, compilation, compilation: { moduleGraph } }
	) {
		const runtime = getEntryRuntime(compilation, entryName);
		if (options.export) {
			const exportsInfo = moduleGraph.getExportInfo(
				module,
				Array.isArray(options.export) ? options.export[0] : options.export
			);
			exportsInfo.setUsed(UsageState.Used, runtime);
			exportsInfo.canMangleUse = false;
		} else {
			const exportsInfo = moduleGraph.getExportsInfo(module);
			if (this.nsObjectUsed) {
				exportsInfo.setUsedInUnknownWay(runtime);
			} else {
				exportsInfo.setAllKnownExportsUsed(runtime);
			}
		}
		moduleGraph.addExtraReason(module, "used as library export");
	}

	/**
	 * @param {Chunk} chunk the chunk
	 * @param {Set<string>} set runtime requirements
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {void}
	 */
	runtimeRequirements(chunk, set, libraryContext) {
		if (this.runtimeExportsUsed) {
			set.add(RuntimeGlobals.exports);
		}
	}

	/**
	 * @param {Source} source source
	 * @param {Module} module module
	 * @param {StartupRenderContext} renderContext render context
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {Source} source with library export
	 */
	renderStartup(source, module, renderContext, { options }) {
		if (!options.export) return source;
		const postfix = `${RuntimeGlobals.exports} = ${
			RuntimeGlobals.exports
		}${propertyAccess(
			Array.isArray(options.export) ? options.export : [options.export]
		)};\n`;
		return new ConcatSource(source, postfix);
	}
}

module.exports = ExportPropertyLibraryPlugin;
