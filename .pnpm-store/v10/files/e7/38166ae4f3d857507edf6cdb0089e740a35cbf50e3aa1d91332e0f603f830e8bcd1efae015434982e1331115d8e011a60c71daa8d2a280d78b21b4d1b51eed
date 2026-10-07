/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { ConcatSource } = require("webpack-sources");
const { UsageState } = require("../ExportsInfo");
const ExternalModule = require("../ExternalModule");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const HarmonyExportImportedSpecifierDependency = require("../dependencies/HarmonyExportImportedSpecifierDependency");
const ConcatenatedModule = require("../optimize/ConcatenatedModule");
const { propertyAccess } = require("../util/property");
const { getEntryRuntime, getRuntimeKey } = require("../util/runtime");
const AbstractLibraryPlugin = require("./AbstractLibraryPlugin");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").LibraryOptions} LibraryOptions */
/** @typedef {import("../../declarations/WebpackOptions").LibraryType} LibraryType */
/** @typedef {import("../../declarations/WebpackOptions").LibraryExport} LibraryExport */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../Module").RuntimeRequirements} RuntimeRequirements */
/** @typedef {import("../javascript/JavascriptModulesPlugin").StartupRenderContext} StartupRenderContext */
/** @typedef {import("../javascript/JavascriptModulesPlugin").ModuleRenderContext} ModuleRenderContext */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */

/**
 * Defines the shared type used by this module.
 * @template T
 * @typedef {import("./AbstractLibraryPlugin").LibraryContext<T>} LibraryContext<T>
 */

/**
 * Defines the module library plugin options type used by this module.
 * @typedef {object} ModuleLibraryPluginOptions
 * @property {LibraryType} type
 */

/**
 * Defines the module library plugin parsed type used by this module.
 * @typedef {object} ModuleLibraryPluginParsed
 * @property {string} name
 * @property {LibraryExport=} export
 */

const PLUGIN_NAME = "ModuleLibraryPlugin";

/**
 * Represents the module library plugin runtime component.
 * @typedef {ModuleLibraryPluginParsed} T
 * @extends {AbstractLibraryPlugin<ModuleLibraryPluginParsed>}
 */
class ModuleLibraryPlugin extends AbstractLibraryPlugin {
	/**
	 * Creates an instance of ModuleLibraryPlugin.
	 * @param {ModuleLibraryPluginOptions} options the plugin options
	 */
	constructor(options) {
		super({
			pluginName: "ModuleLibraryPlugin",
			type: options.type
		});
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		super.apply(compiler);

		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			const { onDemandExportsGeneration } =
				ConcatenatedModule.getCompilationHooks(compilation);
			onDemandExportsGeneration.tap(
				PLUGIN_NAME,
				(module, runtimes, source, finalName) => {
					/** @type {BuildMeta} */
					const buildMeta = module.buildMeta || (module.buildMeta = {});

					/** @type {BuildMeta["exportsSourceByRuntime"]} */
					const exportsSourceByRuntime =
						buildMeta.exportsSourceByRuntime ||
						(buildMeta.exportsSourceByRuntime = new Map());

					/** @type {BuildMeta["exportsFinalNameByRuntime"]} */
					const exportsFinalNameByRuntime =
						buildMeta.exportsFinalNameByRuntime ||
						(buildMeta.exportsFinalNameByRuntime = new Map());

					for (const runtime of runtimes) {
						const key = getRuntimeKey(runtime);
						exportsSourceByRuntime.set(key, source);
						exportsFinalNameByRuntime.set(key, finalName);
					}

					return true;
				}
			);
		});
	}

	/**
	 * Finish entry module.
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

			if (
				// If the entry module is commonjs, its exports cannot be mangled
				(module.buildMeta && module.buildMeta.treatAsCommonJs) ||
				// The entry module provides unknown exports
				exportsInfo._otherExportsInfo.provided === null
			) {
				exportsInfo.setUsedInUnknownWay(runtime);
			} else {
				exportsInfo.setAllKnownExportsUsed(runtime);
			}
		}
		moduleGraph.addExtraReason(module, "used as library export");
	}

	/**
	 * Returns preprocess as needed by overriding.
	 * @param {LibraryOptions} library normalized library option
	 * @returns {T} preprocess as needed by overriding
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
			name: _name,
			export: library.export
		};
	}

	/**
	 * Analyze unknown provided exports.
	 * @param {Source} source source
	 * @param {Module} module module
	 * @param {ModuleGraph} moduleGraph moduleGraph
	 * @param {RuntimeSpec} runtime chunk runtime
	 * @param {[string, string][]} exports exports
	 * @param {Set<string>} alreadyRenderedExports already rendered exports
	 * @returns {ConcatSource} source with null provided exports
	 */
	_analyzeUnknownProvidedExports(
		source,
		module,
		moduleGraph,
		runtime,
		exports,
		alreadyRenderedExports
	) {
		const result = new ConcatSource(source);
		/** @type {Set<string>} */
		const moduleRequests = new Set();
		/** @type {Map<string, string>} */
		const unknownProvidedExports = new Map();

		/**
		 * Resolves dynamic star reexport.
		 * @param {Module} module the module
		 * @param {boolean} isDynamicReexport if module is dynamic reexported
		 */
		const resolveDynamicStarReexport = (module, isDynamicReexport) => {
			for (const connection of moduleGraph.getOutgoingConnections(module)) {
				const dep = connection.dependency;

				// Only handle star-reexport statement
				if (
					dep instanceof HarmonyExportImportedSpecifierDependency &&
					dep.name === null
				) {
					const importedModule = connection.resolvedModule;
					const importedModuleExportsInfo =
						moduleGraph.getExportsInfo(importedModule);

					// The imported module provides unknown exports
					// So keep the reexports rendered in the bundle
					if (
						dep.getMode(moduleGraph, runtime).type === "dynamic-reexport" &&
						importedModuleExportsInfo._otherExportsInfo.provided === null
					) {
						// Handle export * from 'external'
						if (importedModule instanceof ExternalModule) {
							moduleRequests.add(importedModule.userRequest);
						} else {
							resolveDynamicStarReexport(importedModule, true);
						}
					}
					// If importer modules existing `dynamic-reexport` dependency
					// We should keep export statement rendered in the bundle
					else if (isDynamicReexport) {
						for (const exportInfo of importedModuleExportsInfo.orderedExports) {
							if (!exportInfo.provided || exportInfo.name === "default") {
								continue;
							}
							const originalName = exportInfo.name;
							const usedName = exportInfo.getUsedName(originalName, runtime);

							if (!alreadyRenderedExports.has(originalName) && usedName) {
								unknownProvidedExports.set(originalName, usedName);
							}
						}
					}
				}
			}
		};

		resolveDynamicStarReexport(module, false);

		for (const request of moduleRequests) {
			result.add(`export * from "${request}";\n`);
		}

		for (const [origin, used] of unknownProvidedExports) {
			exports.push([
				origin,
				`${RuntimeGlobals.exports}${propertyAccess([used])}`
			]);
		}

		return result;
	}

	/**
	 * Renders source with library export.
	 * @param {Source} source source
	 * @param {Module} module module
	 * @param {StartupRenderContext} renderContext render context
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {Source} source with library export
	 */
	renderStartup(source, module, renderContext, { options, compilation }) {
		const {
			moduleGraph,
			chunk,
			codeGenerationResults,
			inlined,
			inlinedInIIFE,
			runtimeTemplate
		} = renderContext;
		let result = new ConcatSource(source);
		const exportInfos = options.export
			? [
					moduleGraph.getExportInfo(
						module,
						Array.isArray(options.export) ? options.export[0] : options.export
					)
				]
			: moduleGraph.getExportsInfo(module).orderedExports;

		const exportsFinalNameByRuntime =
			(module.buildMeta &&
				module.buildMeta.exportsFinalNameByRuntime &&
				module.buildMeta.exportsFinalNameByRuntime.get(
					getRuntimeKey(chunk.runtime)
				)) ||
			{};

		const isInlinedEntryWithoutIIFE = inlined && !inlinedInIIFE;
		// Direct export bindings from on-demand concatenation
		const definitions = isInlinedEntryWithoutIIFE
			? exportsFinalNameByRuntime
			: {};

		/** @type {string[]} */
		const shortHandedExports = [];
		/** @type {[string, string][]} */
		const exports = [];
		/** @type {Set<string>} */
		const alreadyRenderedExports = new Set();

		const isAsync = moduleGraph.isAsync(module);

		const treatAsCommonJs =
			module.buildMeta && module.buildMeta.treatAsCommonJs;
		const skipRenderDefaultExport = Boolean(treatAsCommonJs);

		const moduleExportsInfo = moduleGraph.getExportsInfo(module);

		// Define ESM compatibility flag will rely on `__webpack_exports__`
		const needHarmonyCompatibilityFlag =
			moduleExportsInfo.otherExportsInfo.getUsed(chunk.runtime) !==
				UsageState.Unused ||
			moduleExportsInfo
				.getReadOnlyExportInfo("__esModule")
				.getUsed(chunk.runtime) !== UsageState.Unused;

		let needExportsDeclaration =
			!isInlinedEntryWithoutIIFE || isAsync || needHarmonyCompatibilityFlag;

		if (isAsync) {
			result.add(
				`${RuntimeGlobals.exports} = await ${RuntimeGlobals.exports};\n`
			);
		}

		// Try to find all known exports of the entry module
		outer: for (const exportInfo of exportInfos) {
			if (!exportInfo.provided) continue;

			const originalName = exportInfo.name;
			// Skip rendering the default export in some cases
			if (skipRenderDefaultExport && originalName === "default") continue;

			// Try to find all exports from the reexported modules
			const target = exportInfo.findTarget(moduleGraph, (_m) => true);
			if (target) {
				const reexportsInfo = moduleGraph.getExportsInfo(target.module);
				for (const reexportInfo of reexportsInfo.orderedExports) {
					if (
						reexportInfo.provided === false &&
						reexportInfo.name !== "default" &&
						reexportInfo.name === /** @type {string[]} */ (target.export)[0]
					) {
						continue outer;
					}
				}
			}

			const usedName =
				/** @type {string} */
				(exportInfo.getUsedName(originalName, chunk.runtime));
			/** @type {string | undefined} */
			const definition = definitions[usedName];
			/** @type {string | undefined} */
			let finalName;

			if (definition) {
				finalName = definition;
			} else {
				// Fallback to `__webpack_exports__` property access
				// when no direct export binding was found
				finalName = `${RuntimeGlobals.exports}${Template.toIdentifier(originalName)}`;
				needExportsDeclaration = true;
				result.add(
					`${runtimeTemplate.renderConst()} ${finalName} = ${RuntimeGlobals.exports}${propertyAccess(
						[usedName]
					)};\n`
				);
			}

			if (
				// If the name includes `property access` and `call expressions`
				finalName &&
				(finalName.includes(".") ||
					finalName.includes("[") ||
					finalName.includes("("))
			) {
				if (exportInfo.isReexport()) {
					const { data } = codeGenerationResults.get(module, chunk.runtime);
					const topLevelDeclarations =
						(data && data.get("topLevelDeclarations")) ||
						(module.buildInfo && module.buildInfo.topLevelDeclarations);

					if (topLevelDeclarations && topLevelDeclarations.has(originalName)) {
						const name = `${RuntimeGlobals.exports}${Template.toIdentifier(originalName)}`;
						result.add(
							`${runtimeTemplate.renderConst()} ${name} = ${finalName};\n`
						);
						shortHandedExports.push(`${name} as ${originalName}`);
					} else {
						exports.push([originalName, finalName]);
					}
				} else {
					exports.push([originalName, finalName]);
				}
			} else {
				shortHandedExports.push(
					definition && finalName === originalName
						? finalName
						: `${finalName} as ${originalName}`
				);
			}

			alreadyRenderedExports.add(originalName);
		}

		// Add default export `__webpack_exports__` statement to keep better compatibility
		if (treatAsCommonJs) {
			needExportsDeclaration = true;
			shortHandedExports.push(`${RuntimeGlobals.exports} as default`);
		}

		if (shortHandedExports.length > 0) {
			result.add(`export { ${shortHandedExports.join(", ")} };\n`);
		}

		result = this._analyzeUnknownProvidedExports(
			result,
			module,
			moduleGraph,
			chunk.runtime,
			exports,
			alreadyRenderedExports
		);

		for (const [exportName, final] of exports) {
			result.add(
				`export ${runtimeTemplate.renderConst()} ${exportName} = ${final};\n`
			);
		}

		if (!needExportsDeclaration) {
			renderContext.needExportsDeclaration = false;
		}

		return result;
	}

	/**
	 * Renders module content.
	 * @param {Source} source source
	 * @param {Module} module module
	 * @param {ModuleRenderContext} renderContext render context
	 * @param {Omit<LibraryContext<T>, "options">} libraryContext context
	 * @returns {Source} source with library export
	 */
	renderModuleContent(
		source,
		module,
		{ factory, inlinedInIIFE, chunk },
		libraryContext
	) {
		const exportsSource =
			module.buildMeta &&
			module.buildMeta.exportsSourceByRuntime &&
			module.buildMeta.exportsSourceByRuntime.get(getRuntimeKey(chunk.runtime));

		// Re-add the module's exports source when rendered in factory
		// or as an inlined startup module wrapped in an IIFE
		if ((inlinedInIIFE || factory) && exportsSource) {
			return new ConcatSource(exportsSource, source);
		}
		return source;
	}
}

module.exports = ModuleLibraryPlugin;
