/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Joel Denning @joeldenning
*/

"use strict";

const { ConcatSource } = require("webpack-sources");
const { UsageState } = require("../ExportsInfo");
const ExternalModule = require("../ExternalModule");
const Template = require("../Template");
const { propertyAccess } = require("../util/property");
const AbstractLibraryPlugin = require("./AbstractLibraryPlugin");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").LibraryOptions} LibraryOptions */
/** @typedef {import("../../declarations/WebpackOptions").LibraryType} LibraryType */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compilation").ChunkHashContext} ChunkHashContext */
/** @typedef {import("../ExportsInfo").ExportInfoName} ExportInfoName */
/** @typedef {import("../javascript/JavascriptModulesPlugin").RenderContext} RenderContext */
/** @typedef {import("../util/Hash")} Hash */
/**
 * Defines the shared type used by this module.
 * @template T
 * @typedef {import("./AbstractLibraryPlugin").LibraryContext<T>} LibraryContext<T>
 */

/**
 * Defines the system library plugin options type used by this module.
 * @typedef {object} SystemLibraryPluginOptions
 * @property {LibraryType} type
 */

/**
 * Defines the system library plugin parsed type used by this module.
 * @typedef {object} SystemLibraryPluginParsed
 * @property {string} name
 */

/**
 * Represents the system library plugin runtime component.
 * @typedef {SystemLibraryPluginParsed} T
 * @extends {AbstractLibraryPlugin<SystemLibraryPluginParsed>}
 */
class SystemLibraryPlugin extends AbstractLibraryPlugin {
	/**
	 * Creates an instance of SystemLibraryPlugin.
	 * @param {SystemLibraryPluginOptions} options the plugin options
	 */
	constructor(options) {
		super({
			pluginName: "SystemLibraryPlugin",
			type: options.type
		});
	}

	/**
	 * Returns preprocess as needed by overriding.
	 * @param {LibraryOptions} library normalized library option
	 * @returns {T} preprocess as needed by overriding
	 */
	parseOptions(library) {
		const { name } = library;
		if (name && typeof name !== "string") {
			throw new Error(
				`System.js library name must be a simple string or unset. ${AbstractLibraryPlugin.COMMON_LIBRARY_NAME_MESSAGE}`
			);
		}
		const _name = /** @type {string} */ (name);
		return {
			name: _name
		};
	}

	/**
	 * Returns source with library export.
	 * @param {Source} source source
	 * @param {RenderContext} renderContext render context
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {Source} source with library export
	 */
	render(source, { chunkGraph, moduleGraph, chunk }, { options, compilation }) {
		const modules = chunkGraph
			.getChunkModules(chunk)
			.filter(
				(m) => m instanceof ExternalModule && m.externalType === "system"
			);
		const externals = /** @type {ExternalModule[]} */ (modules);

		// The name this bundle should be registered as with System
		const name = options.name
			? `${JSON.stringify(compilation.getPath(options.name, { chunk }))}, `
			: "";

		// The array of dependencies that are external to webpack and will be provided by System
		const systemDependencies = JSON.stringify(
			externals.map((m) =>
				typeof m.request === "object" && !Array.isArray(m.request)
					? m.request.amd
					: m.request
			)
		);

		// The name of the variable provided by System for exporting
		const dynamicExport = "__WEBPACK_DYNAMIC_EXPORT__";

		// An array of the internal variable names for the webpack externals
		const externalWebpackNames = externals.map(
			(m) =>
				`__WEBPACK_EXTERNAL_MODULE_${Template.toIdentifier(
					`${chunkGraph.getModuleId(m)}`
				)}__`
		);

		// Declaring variables for the internal variable names for the webpack externals
		const externalVarDeclarations = externalWebpackNames
			.map((name) => `var ${name} = {};`)
			.join("\n");

		// Define __esModule flag on all internal variables and helpers
		/** @type {string[]} */
		const externalVarInitialization = [];

		// The system.register format requires an array of setter functions for externals.
		const setters =
			externalWebpackNames.length === 0
				? ""
				: Template.asString([
						"setters: [",
						Template.indent(
							externals
								.map((module, i) => {
									const external = externalWebpackNames[i];
									const exportsInfo = moduleGraph.getExportsInfo(module);
									const otherUnused =
										exportsInfo.otherExportsInfo.getUsed(chunk.runtime) ===
										UsageState.Unused;
									/** @type {string[]} */
									const instructions = [];
									/** @type {ExportInfoName[]} */
									const handledNames = [];
									for (const exportInfo of exportsInfo.orderedExports) {
										const used = exportInfo.getUsedName(
											undefined,
											chunk.runtime
										);
										if (used) {
											if (otherUnused || used !== exportInfo.name) {
												if (exportInfo.name === "default") {
													// Ideally we should use `module && module.__esModule ? module['default'] : module`
													// But we need to keep compatibility with SystemJS format libraries (they are using `default`) and bundled SystemJS libraries from commonjs format
													instructions.push(
														`${external}${propertyAccess([
															used
														])} = module["default"] || module;`
													);
												} else {
													instructions.push(
														`${external}${propertyAccess([
															used
														])} = module${propertyAccess([exportInfo.name])};`
													);
												}
												handledNames.push(exportInfo.name);
											}
										} else {
											handledNames.push(exportInfo.name);
										}
									}
									if (!otherUnused) {
										if (
											!Array.isArray(module.request) ||
											module.request.length === 1
										) {
											externalVarInitialization.push(
												`Object.defineProperty(${external}, "__esModule", { value: true });`
											);
										}
										// See comment above
										instructions.push(
											`${external}["default"] = module["default"] || module;`
										);
										if (handledNames.length > 0) {
											const name = `${external}handledNames`;
											externalVarInitialization.push(
												`var ${name} = ${JSON.stringify(handledNames)};`
											);
											instructions.push(
												Template.asString([
													"Object.keys(module).forEach(function(key) {",
													Template.indent([
														`if(${name}.indexOf(key) >= 0)`,
														Template.indent(`${external}[key] = module[key];`)
													]),
													"});"
												])
											);
										} else {
											instructions.push(
												Template.asString([
													"Object.keys(module).forEach(function(key) {",
													Template.indent([`${external}[key] = module[key];`]),
													"});"
												])
											);
										}
									}
									if (instructions.length === 0) return "function() {}";
									return Template.asString([
										"function(module) {",
										Template.indent(instructions),
										"}"
									]);
								})
								.join(",\n")
						),
						"],"
					]);

		return new ConcatSource(
			Template.asString([
				`System.register(${name}${systemDependencies}, function(${dynamicExport}, __system_context__) {`,
				Template.indent([
					externalVarDeclarations,
					Template.asString(externalVarInitialization),
					"return {",
					Template.indent([
						setters,
						"execute: function() {",
						Template.indent(`${dynamicExport}(`)
					])
				]),
				""
			]),
			source,
			Template.asString([
				"",
				Template.indent([
					Template.indent([Template.indent([");"]), "}"]),
					"};"
				]),
				"})"
			])
		);
	}

	/**
	 * Processes the provided chunk.
	 * @param {Chunk} chunk the chunk
	 * @param {Hash} hash hash
	 * @param {ChunkHashContext} chunkHashContext chunk hash context
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {void}
	 */
	chunkHash(chunk, hash, chunkHashContext, { options, compilation }) {
		hash.update("SystemLibraryPlugin");
		if (options.name) {
			hash.update(compilation.getPath(options.name, { chunk }));
		}
	}
}

module.exports = SystemLibraryPlugin;
