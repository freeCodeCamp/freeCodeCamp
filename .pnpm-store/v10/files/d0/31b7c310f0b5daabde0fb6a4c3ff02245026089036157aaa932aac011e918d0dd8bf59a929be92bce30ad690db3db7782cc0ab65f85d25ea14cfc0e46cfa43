/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const OptionsApply = require("./OptionsApply");

const AssetModulesPlugin = require("./asset/AssetModulesPlugin");
const JavascriptModulesPlugin = require("./javascript/JavascriptModulesPlugin");
const JsonModulesPlugin = require("./json/JsonModulesPlugin");

const ChunkPrefetchPreloadPlugin = require("./prefetch/ChunkPrefetchPreloadPlugin");

const EntryOptionPlugin = require("./EntryOptionPlugin");
const RecordIdsPlugin = require("./RecordIdsPlugin");

const RuntimePlugin = require("./RuntimePlugin");

const APIPlugin = require("./APIPlugin");
const CompatibilityPlugin = require("./CompatibilityPlugin");
const ConstPlugin = require("./ConstPlugin");
const ExportsInfoApiPlugin = require("./ExportsInfoApiPlugin");
const WebpackIsIncludedPlugin = require("./WebpackIsIncludedPlugin");

const TemplatedPathPlugin = require("./TemplatedPathPlugin");
const UseStrictPlugin = require("./UseStrictPlugin");
const WarnCaseSensitiveModulesPlugin = require("./WarnCaseSensitiveModulesPlugin");

const DataUriPlugin = require("./schemes/DataUriPlugin");
const FileUriPlugin = require("./schemes/FileUriPlugin");

const ResolverCachePlugin = require("./cache/ResolverCachePlugin");

const CommonJsPlugin = require("./dependencies/CommonJsPlugin");
const HarmonyModulesPlugin = require("./dependencies/HarmonyModulesPlugin");
const ImportMetaContextPlugin = require("./dependencies/ImportMetaContextPlugin");
const ImportMetaPlugin = require("./dependencies/ImportMetaPlugin");
const ImportPlugin = require("./dependencies/ImportPlugin");
const LoaderPlugin = require("./dependencies/LoaderPlugin");
const RequireContextPlugin = require("./dependencies/RequireContextPlugin");
const RequireEnsurePlugin = require("./dependencies/RequireEnsurePlugin");
const RequireIncludePlugin = require("./dependencies/RequireIncludePlugin");
const SystemPlugin = require("./dependencies/SystemPlugin");
const URLPlugin = require("./dependencies/URLPlugin");
const WorkerPlugin = require("./dependencies/WorkerPlugin");

const InferAsyncModulesPlugin = require("./async-modules/InferAsyncModulesPlugin");

const JavascriptMetaInfoPlugin = require("./JavascriptMetaInfoPlugin");
const DefaultStatsFactoryPlugin = require("./stats/DefaultStatsFactoryPlugin");
const DefaultStatsPresetPlugin = require("./stats/DefaultStatsPresetPlugin");
const DefaultStatsPrinterPlugin = require("./stats/DefaultStatsPrinterPlugin");

const { cleverMerge } = require("./util/cleverMerge");

/** @typedef {import("../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptions */
/** @typedef {import("../declarations/WebpackOptions").WebpackPluginFunction} WebpackPluginFunction */
/** @typedef {import("../declarations/WebpackOptions").WebpackPluginInstance} WebpackPluginInstance */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("./util/fs").IntermediateFileSystem} IntermediateFileSystem */

class WebpackOptionsApply extends OptionsApply {
	constructor() {
		super();
	}

	/**
	 * @param {WebpackOptions} options options object
	 * @param {Compiler} compiler compiler object
	 * @returns {WebpackOptions} options object
	 */
	process(options, compiler) {
		compiler.outputPath = /** @type {string} */ (options.output.path);
		compiler.recordsInputPath = options.recordsInputPath || null;
		compiler.recordsOutputPath = options.recordsOutputPath || null;
		compiler.name = options.name;

		if (options.externals) {
			// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
			const ExternalsPlugin = require("./ExternalsPlugin");
			new ExternalsPlugin(options.externalsType, options.externals).apply(
				compiler
			);
		}

		if (options.externalsPresets.node) {
			const NodeTargetPlugin = require("./node/NodeTargetPlugin");
			new NodeTargetPlugin().apply(compiler);
		}
		if (options.externalsPresets.electronMain) {
			// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
			const ElectronTargetPlugin = require("./electron/ElectronTargetPlugin");
			new ElectronTargetPlugin("main").apply(compiler);
		}
		if (options.externalsPresets.electronPreload) {
			// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
			const ElectronTargetPlugin = require("./electron/ElectronTargetPlugin");
			new ElectronTargetPlugin("preload").apply(compiler);
		}
		if (options.externalsPresets.electronRenderer) {
			// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
			const ElectronTargetPlugin = require("./electron/ElectronTargetPlugin");
			new ElectronTargetPlugin("renderer").apply(compiler);
		}
		if (
			options.externalsPresets.electron &&
			!options.externalsPresets.electronMain &&
			!options.externalsPresets.electronPreload &&
			!options.externalsPresets.electronRenderer
		) {
			// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
			const ElectronTargetPlugin = require("./electron/ElectronTargetPlugin");
			new ElectronTargetPlugin().apply(compiler);
		}
		if (options.externalsPresets.nwjs) {
			// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
			const ExternalsPlugin = require("./ExternalsPlugin");
			new ExternalsPlugin("node-commonjs", "nw.gui").apply(compiler);
		}
		if (options.externalsPresets.webAsync) {
			// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
			const ExternalsPlugin = require("./ExternalsPlugin");
			new ExternalsPlugin("import", ({ request, dependencyType }, callback) => {
				if (dependencyType === "url") {
					if (/^(\/\/|https?:\/\/|#)/.test(/** @type {string} */ (request)))
						return callback(null, `asset ${request}`);
				} else if (options.experiments.css && dependencyType === "css-import") {
					if (/^(\/\/|https?:\/\/|#)/.test(/** @type {string} */ (request)))
						return callback(null, `css-import ${request}`);
				} else if (
					options.experiments.css &&
					/^(\/\/|https?:\/\/|std:)/.test(/** @type {string} */ (request))
				) {
					if (/^\.css(\?|$)/.test(/** @type {string} */ (request)))
						return callback(null, `css-import ${request}`);
					return callback(null, `import ${request}`);
				}
				callback();
			}).apply(compiler);
		} else if (options.externalsPresets.web) {
			// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
			const ExternalsPlugin = require("./ExternalsPlugin");
			new ExternalsPlugin("module", ({ request, dependencyType }, callback) => {
				if (dependencyType === "url") {
					if (/^(\/\/|https?:\/\/|#)/.test(/** @type {string} */ (request)))
						return callback(null, `asset ${request}`);
				} else if (options.experiments.css && dependencyType === "css-import") {
					if (/^(\/\/|https?:\/\/|#)/.test(/** @type {string} */ (request)))
						return callback(null, `css-import ${request}`);
				} else if (
					/^(\/\/|https?:\/\/|std:)/.test(/** @type {string} */ (request))
				) {
					if (
						options.experiments.css &&
						/^\.css((\?)|$)/.test(/** @type {string} */ (request))
					)
						return callback(null, `css-import ${request}`);
					return callback(null, `module ${request}`);
				}
				callback();
			}).apply(compiler);
		} else if (options.externalsPresets.node && options.experiments.css) {
			// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
			const ExternalsPlugin = require("./ExternalsPlugin");
			new ExternalsPlugin("module", ({ request, dependencyType }, callback) => {
				if (dependencyType === "url") {
					if (/^(\/\/|https?:\/\/|#)/.test(/** @type {string} */ (request)))
						return callback(null, `asset ${request}`);
				} else if (dependencyType === "css-import") {
					if (/^(\/\/|https?:\/\/|#)/.test(/** @type {string} */ (request)))
						return callback(null, `css-import ${request}`);
				} else if (
					/^(\/\/|https?:\/\/|std:)/.test(/** @type {string} */ (request))
				) {
					if (/^\.css(\?|$)/.test(/** @type {string} */ (request)))
						return callback(null, `css-import ${request}`);
					return callback(null, `module ${request}`);
				}
				callback();
			}).apply(compiler);
		}

		new ChunkPrefetchPreloadPlugin().apply(compiler);

		if (typeof options.output.chunkFormat === "string") {
			switch (options.output.chunkFormat) {
				case "array-push": {
					const ArrayPushCallbackChunkFormatPlugin = require("./javascript/ArrayPushCallbackChunkFormatPlugin");
					new ArrayPushCallbackChunkFormatPlugin().apply(compiler);
					break;
				}
				case "commonjs": {
					const CommonJsChunkFormatPlugin = require("./javascript/CommonJsChunkFormatPlugin");
					new CommonJsChunkFormatPlugin().apply(compiler);
					break;
				}
				case "module": {
					const ModuleChunkFormatPlugin = require("./esm/ModuleChunkFormatPlugin");
					new ModuleChunkFormatPlugin().apply(compiler);
					break;
				}
				default:
					throw new Error(
						`Unsupported chunk format '${options.output.chunkFormat}'.`
					);
			}
		}

		const enabledChunkLoadingTypes =
			/** @type {NonNullable<WebpackOptions["output"]["enabledChunkLoadingTypes"]>} */
			(options.output.enabledChunkLoadingTypes);

		if (enabledChunkLoadingTypes.length > 0) {
			for (const type of enabledChunkLoadingTypes) {
				const EnableChunkLoadingPlugin = require("./javascript/EnableChunkLoadingPlugin");
				new EnableChunkLoadingPlugin(type).apply(compiler);
			}
		}

		const enabledWasmLoadingTypes =
			/** @type {NonNullable<WebpackOptions["output"]["enabledWasmLoadingTypes"]>} */
			(options.output.enabledWasmLoadingTypes);

		if (enabledWasmLoadingTypes.length > 0) {
			for (const type of enabledWasmLoadingTypes) {
				const EnableWasmLoadingPlugin = require("./wasm/EnableWasmLoadingPlugin");
				new EnableWasmLoadingPlugin(type).apply(compiler);
			}
		}

		const enabledLibraryTypes =
			/** @type {NonNullable<WebpackOptions["output"]["enabledLibraryTypes"]>} */
			(options.output.enabledLibraryTypes);

		if (enabledLibraryTypes.length > 0) {
			for (const type of enabledLibraryTypes) {
				const EnableLibraryPlugin = require("./library/EnableLibraryPlugin");
				new EnableLibraryPlugin(type).apply(compiler);
			}
		}

		if (options.output.pathinfo) {
			const ModuleInfoHeaderPlugin = require("./ModuleInfoHeaderPlugin");
			new ModuleInfoHeaderPlugin(options.output.pathinfo !== true).apply(
				compiler
			);
		}

		if (options.output.clean) {
			const CleanPlugin = require("./CleanPlugin");
			new CleanPlugin(
				options.output.clean === true ? {} : options.output.clean
			).apply(compiler);
		}

		if (options.devtool) {
			if (options.devtool.includes("source-map")) {
				const hidden = options.devtool.includes("hidden");
				const inline = options.devtool.includes("inline");
				const evalWrapped = options.devtool.includes("eval");
				const cheap = options.devtool.includes("cheap");
				const moduleMaps = options.devtool.includes("module");
				const noSources = options.devtool.includes("nosources");
				const debugIds = options.devtool.includes("debugids");
				const Plugin = evalWrapped
					? require("./EvalSourceMapDevToolPlugin")
					: require("./SourceMapDevToolPlugin");
				new Plugin({
					filename: inline ? null : options.output.sourceMapFilename,
					moduleFilenameTemplate: options.output.devtoolModuleFilenameTemplate,
					fallbackModuleFilenameTemplate:
						options.output.devtoolFallbackModuleFilenameTemplate,
					append: hidden ? false : undefined,
					module: moduleMaps ? true : !cheap,
					columns: !cheap,
					noSources,
					namespace: options.output.devtoolNamespace,
					debugIds
				}).apply(compiler);
			} else if (options.devtool.includes("eval")) {
				const EvalDevToolModulePlugin = require("./EvalDevToolModulePlugin");
				new EvalDevToolModulePlugin({
					moduleFilenameTemplate: options.output.devtoolModuleFilenameTemplate,
					namespace: options.output.devtoolNamespace
				}).apply(compiler);
			}
		}

		new JavascriptModulesPlugin().apply(compiler);
		new JsonModulesPlugin().apply(compiler);
		new AssetModulesPlugin().apply(compiler);

		if (!options.experiments.outputModule) {
			if (options.output.module) {
				throw new Error(
					"'output.module: true' is only allowed when 'experiments.outputModule' is enabled"
				);
			}
			if (options.output.enabledLibraryTypes.includes("module")) {
				throw new Error(
					"library type \"module\" is only allowed when 'experiments.outputModule' is enabled"
				);
			}
			if (options.output.enabledLibraryTypes.includes("modern-module")) {
				throw new Error(
					"library type \"modern-module\" is only allowed when 'experiments.outputModule' is enabled"
				);
			}
			if (
				options.externalsType === "module" ||
				options.externalsType === "module-import"
			) {
				throw new Error(
					"'externalsType: \"module\"' is only allowed when 'experiments.outputModule' is enabled"
				);
			}
		}

		if (options.experiments.syncWebAssembly) {
			const WebAssemblyModulesPlugin = require("./wasm-sync/WebAssemblyModulesPlugin");
			new WebAssemblyModulesPlugin({
				mangleImports: options.optimization.mangleWasmImports
			}).apply(compiler);
		}

		if (options.experiments.asyncWebAssembly) {
			const AsyncWebAssemblyModulesPlugin = require("./wasm-async/AsyncWebAssemblyModulesPlugin");
			new AsyncWebAssemblyModulesPlugin({
				mangleImports: options.optimization.mangleWasmImports
			}).apply(compiler);
		}

		if (options.experiments.css) {
			const CssModulesPlugin = require("./css/CssModulesPlugin");
			new CssModulesPlugin().apply(compiler);
		}

		if (options.experiments.lazyCompilation) {
			const LazyCompilationPlugin = require("./hmr/LazyCompilationPlugin");
			const lazyOptions =
				typeof options.experiments.lazyCompilation === "object"
					? options.experiments.lazyCompilation
					: {};
			new LazyCompilationPlugin({
				backend:
					typeof lazyOptions.backend === "function"
						? lazyOptions.backend
						: require("./hmr/lazyCompilationBackend")({
								...lazyOptions.backend,
								client:
									(lazyOptions.backend && lazyOptions.backend.client) ||
									require.resolve(
										`../hot/lazy-compilation-${
											options.externalsPresets.node ? "node" : "web"
										}.js`
									)
							}),
				entries: !lazyOptions || lazyOptions.entries !== false,
				imports: !lazyOptions || lazyOptions.imports !== false,
				test: (lazyOptions && lazyOptions.test) || undefined
			}).apply(compiler);
		}

		if (options.experiments.buildHttp) {
			const HttpUriPlugin = require("./schemes/HttpUriPlugin");
			const httpOptions = options.experiments.buildHttp;
			new HttpUriPlugin(httpOptions).apply(compiler);
		}

		new EntryOptionPlugin().apply(compiler);
		compiler.hooks.entryOption.call(
			/** @type {string} */
			(options.context),
			options.entry
		);

		new RuntimePlugin().apply(compiler);

		new InferAsyncModulesPlugin().apply(compiler);

		new DataUriPlugin().apply(compiler);
		new FileUriPlugin().apply(compiler);

		new CompatibilityPlugin().apply(compiler);
		new HarmonyModulesPlugin({
			topLevelAwait: options.experiments.topLevelAwait
		}).apply(compiler);
		if (options.amd !== false) {
			const AMDPlugin = require("./dependencies/AMDPlugin");
			const RequireJsStuffPlugin = require("./RequireJsStuffPlugin");
			new AMDPlugin(options.amd || {}).apply(compiler);
			new RequireJsStuffPlugin().apply(compiler);
		}
		new CommonJsPlugin().apply(compiler);
		new LoaderPlugin({}).apply(compiler);
		if (options.node !== false) {
			const NodeStuffPlugin = require("./NodeStuffPlugin");
			new NodeStuffPlugin(options.node).apply(compiler);
		}
		new APIPlugin({
			module: options.output.module
		}).apply(compiler);
		new ExportsInfoApiPlugin().apply(compiler);
		new WebpackIsIncludedPlugin().apply(compiler);
		new ConstPlugin().apply(compiler);
		new UseStrictPlugin().apply(compiler);
		new RequireIncludePlugin().apply(compiler);
		new RequireEnsurePlugin().apply(compiler);
		new RequireContextPlugin().apply(compiler);
		new ImportPlugin().apply(compiler);
		new ImportMetaContextPlugin().apply(compiler);
		new SystemPlugin().apply(compiler);
		new ImportMetaPlugin().apply(compiler);
		new URLPlugin().apply(compiler);
		new WorkerPlugin(
			options.output.workerChunkLoading,
			options.output.workerWasmLoading,
			options.output.module,
			options.output.workerPublicPath
		).apply(compiler);

		new DefaultStatsFactoryPlugin().apply(compiler);
		new DefaultStatsPresetPlugin().apply(compiler);
		new DefaultStatsPrinterPlugin().apply(compiler);

		new JavascriptMetaInfoPlugin().apply(compiler);

		if (typeof options.mode !== "string") {
			const WarnNoModeSetPlugin = require("./WarnNoModeSetPlugin");
			new WarnNoModeSetPlugin().apply(compiler);
		}

		const EnsureChunkConditionsPlugin = require("./optimize/EnsureChunkConditionsPlugin");
		new EnsureChunkConditionsPlugin().apply(compiler);
		if (options.optimization.removeAvailableModules) {
			const RemoveParentModulesPlugin = require("./optimize/RemoveParentModulesPlugin");
			new RemoveParentModulesPlugin().apply(compiler);
		}
		if (options.optimization.removeEmptyChunks) {
			const RemoveEmptyChunksPlugin = require("./optimize/RemoveEmptyChunksPlugin");
			new RemoveEmptyChunksPlugin().apply(compiler);
		}
		if (options.optimization.mergeDuplicateChunks) {
			const MergeDuplicateChunksPlugin = require("./optimize/MergeDuplicateChunksPlugin");
			new MergeDuplicateChunksPlugin().apply(compiler);
		}
		if (options.optimization.flagIncludedChunks) {
			const FlagIncludedChunksPlugin = require("./optimize/FlagIncludedChunksPlugin");
			new FlagIncludedChunksPlugin().apply(compiler);
		}
		if (options.optimization.sideEffects) {
			const SideEffectsFlagPlugin = require("./optimize/SideEffectsFlagPlugin");
			new SideEffectsFlagPlugin(
				options.optimization.sideEffects === true
			).apply(compiler);
		}
		if (options.optimization.providedExports) {
			const FlagDependencyExportsPlugin = require("./FlagDependencyExportsPlugin");
			new FlagDependencyExportsPlugin().apply(compiler);
		}
		if (options.optimization.usedExports) {
			const FlagDependencyUsagePlugin = require("./FlagDependencyUsagePlugin");
			new FlagDependencyUsagePlugin(
				options.optimization.usedExports === "global"
			).apply(compiler);
		}
		if (options.optimization.innerGraph) {
			const InnerGraphPlugin = require("./optimize/InnerGraphPlugin");
			new InnerGraphPlugin().apply(compiler);
		}
		if (options.optimization.mangleExports) {
			const MangleExportsPlugin = require("./optimize/MangleExportsPlugin");
			new MangleExportsPlugin(
				options.optimization.mangleExports !== "size"
			).apply(compiler);
		}
		if (options.optimization.concatenateModules) {
			const ModuleConcatenationPlugin = require("./optimize/ModuleConcatenationPlugin");
			new ModuleConcatenationPlugin().apply(compiler);
		}
		if (options.optimization.splitChunks) {
			const SplitChunksPlugin = require("./optimize/SplitChunksPlugin");
			new SplitChunksPlugin(options.optimization.splitChunks).apply(compiler);
		}
		if (options.optimization.runtimeChunk) {
			const RuntimeChunkPlugin = require("./optimize/RuntimeChunkPlugin");
			new RuntimeChunkPlugin(
				/** @type {{ name?: (entrypoint: { name: string }) => string }} */
				(options.optimization.runtimeChunk)
			).apply(compiler);
		}
		if (!options.optimization.emitOnErrors) {
			const NoEmitOnErrorsPlugin = require("./NoEmitOnErrorsPlugin");
			new NoEmitOnErrorsPlugin().apply(compiler);
		}
		if (options.optimization.realContentHash) {
			const RealContentHashPlugin = require("./optimize/RealContentHashPlugin");
			new RealContentHashPlugin({
				hashFunction:
					/** @type {NonNullable<WebpackOptions["output"]["hashFunction"]>} */
					(options.output.hashFunction),
				hashDigest:
					/** @type {NonNullable<WebpackOptions["output"]["hashDigest"]>} */
					(options.output.hashDigest)
			}).apply(compiler);
		}
		if (options.optimization.checkWasmTypes) {
			const WasmFinalizeExportsPlugin = require("./wasm-sync/WasmFinalizeExportsPlugin");
			new WasmFinalizeExportsPlugin().apply(compiler);
		}
		const moduleIds = options.optimization.moduleIds;
		if (moduleIds) {
			switch (moduleIds) {
				case "natural": {
					const NaturalModuleIdsPlugin = require("./ids/NaturalModuleIdsPlugin");
					new NaturalModuleIdsPlugin().apply(compiler);
					break;
				}
				case "named": {
					const NamedModuleIdsPlugin = require("./ids/NamedModuleIdsPlugin");
					new NamedModuleIdsPlugin().apply(compiler);
					break;
				}
				case "hashed": {
					const WarnDeprecatedOptionPlugin = require("./WarnDeprecatedOptionPlugin");
					const HashedModuleIdsPlugin = require("./ids/HashedModuleIdsPlugin");
					new WarnDeprecatedOptionPlugin(
						"optimization.moduleIds",
						"hashed",
						"deterministic"
					).apply(compiler);
					new HashedModuleIdsPlugin({
						hashFunction: options.output.hashFunction
					}).apply(compiler);
					break;
				}
				case "deterministic": {
					const DeterministicModuleIdsPlugin = require("./ids/DeterministicModuleIdsPlugin");
					new DeterministicModuleIdsPlugin().apply(compiler);
					break;
				}
				case "size": {
					const OccurrenceModuleIdsPlugin = require("./ids/OccurrenceModuleIdsPlugin");
					new OccurrenceModuleIdsPlugin({
						prioritiseInitial: true
					}).apply(compiler);
					break;
				}
				default:
					throw new Error(
						`webpack bug: moduleIds: ${moduleIds} is not implemented`
					);
			}
		}
		const chunkIds = options.optimization.chunkIds;
		if (chunkIds) {
			switch (chunkIds) {
				case "natural": {
					const NaturalChunkIdsPlugin = require("./ids/NaturalChunkIdsPlugin");
					new NaturalChunkIdsPlugin().apply(compiler);
					break;
				}
				case "named": {
					const NamedChunkIdsPlugin = require("./ids/NamedChunkIdsPlugin");
					new NamedChunkIdsPlugin().apply(compiler);
					break;
				}
				case "deterministic": {
					const DeterministicChunkIdsPlugin = require("./ids/DeterministicChunkIdsPlugin");
					new DeterministicChunkIdsPlugin().apply(compiler);
					break;
				}
				case "size": {
					// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
					const OccurrenceChunkIdsPlugin = require("./ids/OccurrenceChunkIdsPlugin");
					new OccurrenceChunkIdsPlugin({
						prioritiseInitial: true
					}).apply(compiler);
					break;
				}
				case "total-size": {
					// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
					const OccurrenceChunkIdsPlugin = require("./ids/OccurrenceChunkIdsPlugin");
					new OccurrenceChunkIdsPlugin({
						prioritiseInitial: false
					}).apply(compiler);
					break;
				}
				default:
					throw new Error(
						`webpack bug: chunkIds: ${chunkIds} is not implemented`
					);
			}
		}
		if (options.optimization.nodeEnv) {
			const DefinePlugin = require("./DefinePlugin");
			new DefinePlugin({
				"process.env.NODE_ENV": JSON.stringify(options.optimization.nodeEnv)
			}).apply(compiler);
		}
		if (options.optimization.minimize) {
			for (const minimizer of /** @type {(WebpackPluginInstance | WebpackPluginFunction | "...")[]} */ (
				options.optimization.minimizer
			)) {
				if (typeof minimizer === "function") {
					/** @type {WebpackPluginFunction} */
					(minimizer).call(compiler, compiler);
				} else if (minimizer !== "..." && minimizer) {
					minimizer.apply(compiler);
				}
			}
		}

		if (options.performance) {
			const SizeLimitsPlugin = require("./performance/SizeLimitsPlugin");
			new SizeLimitsPlugin(options.performance).apply(compiler);
		}

		new TemplatedPathPlugin().apply(compiler);

		new RecordIdsPlugin({
			portableIds: options.optimization.portableRecords
		}).apply(compiler);

		new WarnCaseSensitiveModulesPlugin().apply(compiler);

		const AddManagedPathsPlugin = require("./cache/AddManagedPathsPlugin");
		new AddManagedPathsPlugin(
			/** @type {NonNullable<WebpackOptions["snapshot"]["managedPaths"]>} */
			(options.snapshot.managedPaths),
			/** @type {NonNullable<WebpackOptions["snapshot"]["managedPaths"]>} */
			(options.snapshot.immutablePaths),
			/** @type {NonNullable<WebpackOptions["snapshot"]["managedPaths"]>} */
			(options.snapshot.unmanagedPaths)
		).apply(compiler);

		if (options.cache && typeof options.cache === "object") {
			const cacheOptions = options.cache;
			switch (cacheOptions.type) {
				case "memory": {
					if (Number.isFinite(cacheOptions.maxGenerations)) {
						// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
						const MemoryWithGcCachePlugin = require("./cache/MemoryWithGcCachePlugin");
						new MemoryWithGcCachePlugin({
							maxGenerations:
								/** @type {number} */
								(cacheOptions.maxGenerations)
						}).apply(compiler);
					} else {
						// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
						const MemoryCachePlugin = require("./cache/MemoryCachePlugin");
						new MemoryCachePlugin().apply(compiler);
					}
					if (cacheOptions.cacheUnaffected) {
						if (!options.experiments.cacheUnaffected) {
							throw new Error(
								"'cache.cacheUnaffected: true' is only allowed when 'experiments.cacheUnaffected' is enabled"
							);
						}
						compiler.moduleMemCaches = new Map();
					}
					break;
				}
				case "filesystem": {
					const AddBuildDependenciesPlugin = require("./cache/AddBuildDependenciesPlugin");
					// eslint-disable-next-line guard-for-in
					for (const key in cacheOptions.buildDependencies) {
						const list = cacheOptions.buildDependencies[key];
						new AddBuildDependenciesPlugin(list).apply(compiler);
					}
					if (!Number.isFinite(cacheOptions.maxMemoryGenerations)) {
						// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
						const MemoryCachePlugin = require("./cache/MemoryCachePlugin");
						new MemoryCachePlugin().apply(compiler);
					} else if (cacheOptions.maxMemoryGenerations !== 0) {
						// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
						const MemoryWithGcCachePlugin = require("./cache/MemoryWithGcCachePlugin");
						new MemoryWithGcCachePlugin({
							maxGenerations:
								/** @type {number} */
								(cacheOptions.maxMemoryGenerations)
						}).apply(compiler);
					}
					if (cacheOptions.memoryCacheUnaffected) {
						if (!options.experiments.cacheUnaffected) {
							throw new Error(
								"'cache.memoryCacheUnaffected: true' is only allowed when 'experiments.cacheUnaffected' is enabled"
							);
						}
						compiler.moduleMemCaches = new Map();
					}
					switch (cacheOptions.store) {
						case "pack": {
							const IdleFileCachePlugin = require("./cache/IdleFileCachePlugin");
							const PackFileCacheStrategy = require("./cache/PackFileCacheStrategy");
							new IdleFileCachePlugin(
								new PackFileCacheStrategy({
									compiler,
									fs:
										/** @type {IntermediateFileSystem} */
										(compiler.intermediateFileSystem),
									context: /** @type {string} */ (options.context),
									cacheLocation:
										/** @type {string} */
										(cacheOptions.cacheLocation),
									version: /** @type {string} */ (cacheOptions.version),
									logger: compiler.getInfrastructureLogger(
										"webpack.cache.PackFileCacheStrategy"
									),
									snapshot: options.snapshot,
									maxAge: /** @type {number} */ (cacheOptions.maxAge),
									profile: cacheOptions.profile,
									allowCollectingMemory: cacheOptions.allowCollectingMemory,
									compression: cacheOptions.compression,
									readonly: cacheOptions.readonly
								}),
								/** @type {number} */
								(cacheOptions.idleTimeout),
								/** @type {number} */
								(cacheOptions.idleTimeoutForInitialStore),
								/** @type {number} */
								(cacheOptions.idleTimeoutAfterLargeChanges)
							).apply(compiler);
							break;
						}
						default:
							throw new Error("Unhandled value for cache.store");
					}
					break;
				}
				default:
					// @ts-expect-error Property 'type' does not exist on type 'never'. ts(2339)
					throw new Error(`Unknown cache type ${cacheOptions.type}`);
			}
		}
		new ResolverCachePlugin().apply(compiler);

		if (options.ignoreWarnings && options.ignoreWarnings.length > 0) {
			const IgnoreWarningsPlugin = require("./IgnoreWarningsPlugin");
			new IgnoreWarningsPlugin(options.ignoreWarnings).apply(compiler);
		}

		compiler.hooks.afterPlugins.call(compiler);
		if (!compiler.inputFileSystem) {
			throw new Error("No input filesystem provided");
		}
		compiler.resolverFactory.hooks.resolveOptions
			.for("normal")
			.tap("WebpackOptionsApply", resolveOptions => {
				resolveOptions = cleverMerge(options.resolve, resolveOptions);
				resolveOptions.fileSystem =
					/** @type {InputFileSystem} */
					(compiler.inputFileSystem);
				return resolveOptions;
			});
		compiler.resolverFactory.hooks.resolveOptions
			.for("context")
			.tap("WebpackOptionsApply", resolveOptions => {
				resolveOptions = cleverMerge(options.resolve, resolveOptions);
				resolveOptions.fileSystem =
					/** @type {InputFileSystem} */
					(compiler.inputFileSystem);
				resolveOptions.resolveToContext = true;
				return resolveOptions;
			});
		compiler.resolverFactory.hooks.resolveOptions
			.for("loader")
			.tap("WebpackOptionsApply", resolveOptions => {
				resolveOptions = cleverMerge(options.resolveLoader, resolveOptions);
				resolveOptions.fileSystem =
					/** @type {InputFileSystem} */
					(compiler.inputFileSystem);
				return resolveOptions;
			});
		compiler.hooks.afterResolvers.call(compiler);
		return options;
	}
}

module.exports = WebpackOptionsApply;
