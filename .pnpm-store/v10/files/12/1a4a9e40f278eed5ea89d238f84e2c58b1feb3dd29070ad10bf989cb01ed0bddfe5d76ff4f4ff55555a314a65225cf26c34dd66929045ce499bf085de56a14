/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { ConcatSource } = require("webpack-sources");
const ConcatenatedModule = require("../optimize/ConcatenatedModule");
const AbstractLibraryPlugin = require("./AbstractLibraryPlugin");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").LibraryOptions} LibraryOptions */
/** @typedef {import("../../declarations/WebpackOptions").LibraryType} LibraryType */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compilation").ChunkHashContext} ChunkHashContext */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../javascript/JavascriptModulesPlugin").StartupRenderContext} StartupRenderContext */
/** @typedef {import("../util/Hash")} Hash */
/** @template T @typedef {import("./AbstractLibraryPlugin").LibraryContext<T>} LibraryContext<T> */

/**
 * @typedef {object} ModernModuleLibraryPluginOptions
 * @property {LibraryType} type
 */

/**
 * @typedef {object} ModernModuleLibraryPluginParsed
 * @property {string} name
 */

/**
 * @typedef {ModernModuleLibraryPluginParsed} T
 * @extends {AbstractLibraryPlugin<ModernModuleLibraryPluginParsed>}
 */
class ModernModuleLibraryPlugin extends AbstractLibraryPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		super.apply(compiler);

		compiler.hooks.compilation.tap("ModernModuleLibraryPlugin", compilation => {
			const { exportsDefinitions } =
				ConcatenatedModule.getCompilationHooks(compilation);
			exportsDefinitions.tap("ModernModuleLibraryPlugin", () => true);
		});
	}

	/**
	 * @param {ModernModuleLibraryPluginOptions} options the plugin options
	 */
	constructor(options) {
		super({
			pluginName: "ModernModuleLibraryPlugin",
			type: options.type
		});
	}

	/**
	 * @param {LibraryOptions} library normalized library option
	 * @returns {T | false} preprocess as needed by overriding
	 */
	parseOptions(library) {
		const { name } = library;
		if (name) {
			throw new Error(
				`Library name must be unset. ${AbstractLibraryPlugin.COMMON_LIBRARY_NAME_MESSAGE}`
			);
		}
		const _name = /** @type {string} */ (name);
		return {
			name: _name
		};
	}

	/**
	 * @param {Source} source source
	 * @param {Module} module module
	 * @param {StartupRenderContext} renderContext render context
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {Source} source with library export
	 */
	renderStartup(
		source,
		module,
		{ moduleGraph, chunk },
		{ options, compilation }
	) {
		const result = new ConcatSource(source);
		const exportsInfo = moduleGraph.getExportsInfo(module);
		const definitions =
			/** @type {BuildMeta} */
			(module.buildMeta).exportsFinalName;
		const exports = [];

		for (const exportInfo of exportsInfo.orderedExports) {
			let shouldContinue = false;
			const reexport = exportInfo.findTarget(moduleGraph, _m => true);

			if (reexport) {
				const exp = moduleGraph.getExportsInfo(reexport.module);

				for (const reexportInfo of exp.orderedExports) {
					if (
						!reexportInfo.provided &&
						reexportInfo.name === /** @type {string[]} */ (reexport.export)[0]
					) {
						shouldContinue = true;
					}
				}
			}

			if (shouldContinue) continue;

			const webpackExportsProperty = exportInfo.getUsedName(
				exportInfo.name,
				chunk.runtime
			);
			const finalName =
				definitions[
					/** @type {string} */
					(webpackExportsProperty)
				];
			exports.push(
				finalName === exportInfo.name
					? finalName
					: `${finalName} as ${exportInfo.name}`
			);
		}

		if (exports.length > 0) {
			result.add(`export { ${exports.join(", ")} };\n`);
		}

		return result;
	}
}

module.exports = ModernModuleLibraryPlugin;
