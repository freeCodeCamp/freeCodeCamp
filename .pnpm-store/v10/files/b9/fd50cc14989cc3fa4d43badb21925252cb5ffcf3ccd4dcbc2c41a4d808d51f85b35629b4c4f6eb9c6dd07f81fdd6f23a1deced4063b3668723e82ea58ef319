/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const APIPlugin = require("./APIPlugin");

const CompatibilityPlugin = require("./CompatibilityPlugin");

const ConstPlugin = require("./ConstPlugin");

const EntryOptionPlugin = require("./EntryOptionPlugin");

const ExportsInfoApiPlugin = require("./ExportsInfoApiPlugin");
const FlagDependencyExportsPlugin = require("./FlagDependencyExportsPlugin");

const JavascriptMetaInfoPlugin = require("./JavascriptMetaInfoPlugin");

const NodeStuffPlugin = require("./NodeStuffPlugin");
const OptionsApply = require("./OptionsApply");

const RecordIdsPlugin = require("./RecordIdsPlugin");

const RuntimePlugin = require("./RuntimePlugin");

const TemplatedPathPlugin = require("./TemplatedPathPlugin");

const UseStrictPlugin = require("./UseStrictPlugin");

const WarnCaseSensitiveModulesPlugin = require("./WarnCaseSensitiveModulesPlugin");

const WebpackIsIncludedPlugin = require("./WebpackIsIncludedPlugin");

const AssetModulesPlugin = require("./asset/AssetModulesPlugin");

const InferAsyncModulesPlugin = require("./async-modules/InferAsyncModulesPlugin");

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

const JavascriptModulesPlugin = require("./javascript/JavascriptModulesPlugin");
const JavascriptParser = require("./javascript/JavascriptParser");

const JsonModulesPlugin = require("./json/JsonModulesPlugin");

const ChunkPrefetchPreloadPlugin = require("./prefetch/ChunkPrefetchPreloadPlugin");

const DataUriPlugin = require("./schemes/DataUriPlugin");
const FileUriPlugin = require("./schemes/FileUriPlugin");

const DefaultStatsFactoryPlugin = require("./stats/DefaultStatsFactoryPlugin");
const DefaultStatsPresetPlugin = require("./stats/DefaultStatsPresetPlugin");
const DefaultStatsPrinterPlugin = require("./stats/DefaultStatsPrinterPlugin");

const { cleverMerge } = require("./util/cleverMerge");

/** @typedef {import("./webpack").WebpackPluginFunction} WebpackPluginFunction */
/** @typedef {import("./config/defaults").WebpackOptionsNormalizedWithDefaults} WebpackOptions */
/** @typedef {import("./config/normalization").WebpackOptionsInterception} WebpackOptionsInterception */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("./util/fs").IntermediateFileSystem} IntermediateFileSystem */

const CLASS_NAME = "WebpackOptionsApply";

class WebpackOptionsApply extends OptionsApply {
	constructor() {
		super();
	}

	/**
	 * Returns options object.
	 * @param {WebpackOptions} options options object
	 * @param {Compiler} compiler compiler object
	 * @param {WebpackOptionsInterception=} interception intercepted options
	 * @returns {WebpackOptions} options object
	 */
	process(options, compiler, interception) {
		compiler.outputPath = options.output.path;
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

			// Some older versions of Node.js don't support all built-in modules via import, only via `require`,
			// but it seems like there shouldn't be a warning here since these versions are rarely used in real applications
			new NodeTargetPlugin(
				options.output.module ? "module-import" : "node-commonjs"
			).apply(compiler);

			// Handle external CSS `@import` and `url()`
			if (options.experiments.css) {
				// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
				const ExternalsPlugin = require("./ExternalsPlugin");

				new ExternalsPlugin(
					"module",
					({ request, dependencyType, contextInfo }, callback) => {
						if (
							/\.css(?:\?|$)/.test(contextInfo.issuer) &&
							/^(?:\/\/|https?:\/\/|#)/.test(request)
						) {
							if (dependencyType === "url") {
								return callback(null, `asset ${request}`);
							} else if (
								(dependencyType === "css-import" ||
									dependencyType === "css-import-local-module" ||
									dependencyType === "css-import-global-module") &&
								options.experiments.css
							) {
								return callback(null, `css-import ${request}`);
							}
						}

						callback();
					}
				).apply(compiler);
			}
		}
		if (options.externalsPresets.webAsync || options.externalsPresets.web) {
			const type = options.externalsPresets.webAsync ? "import" : "module";

			// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
			const ExternalsPlugin = require("./ExternalsPlugin");

			new ExternalsPlugin(type, ({ request, dependencyType }, callback) => {
				if (/^(?:\/\/|https?:\/\/|#|std:|jsr:|npm:)/.test(request)) {
					if (dependencyType === "url") {
						return callback(null, `asset ${request}`);
					} else if (
						(dependencyType === "css-import" ||
							dependencyType === "css-import-local-module" ||
							dependencyType === "css-import-global-module") &&
						options.experiments.css
					) {
						return callback(null, `css-import ${request}`);
					} else if (/^(?:\/\/|https?:\/\/|std:|jsr:|npm:)/.test(request)) {
						return callback(null, `${type} ${request}`);
					}
				}

				callback();
			}).apply(compiler);
		}
		if (options.externalsPresets.electron) {
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
				!options.externalsPresets.electronMain &&
				!options.externalsPresets.electronPreload &&
				!options.externalsPresets.electronRenderer
			) {
				// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
				const ElectronTargetPlugin = require("./electron/ElectronTargetPlugin");

				new ElectronTargetPlugin().apply(compiler);
			}
		}
		if (options.externalsPresets.nwjs) {
			// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
			const ExternalsPlugin = require("./ExternalsPlugin");

			new ExternalsPlugin("node-commonjs", "nw.gui").apply(compiler);
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
			let once = true;
			for (const type of enabledLibraryTypes) {
				const EnableLibraryPlugin = require("./library/EnableLibraryPlugin");

				new EnableLibraryPlugin(type, {
					// eslint-disable-next-line no-loop-func
					additionalApply: () => {
						if (!once) return;
						once = false;
						// We rely on `exportInfo` to generate the `export statement` in certain library bundles.
						// Therefore, we ignore the disabling of `optimization.providedExport` and continue to apply `FlagDependencyExportsPlugin`.
						if (
							["module", "commonjs-static", "modern-module"].includes(type) &&
							!options.optimization.providedExports
						) {
							new FlagDependencyExportsPlugin().apply(compiler);
						}
					}
				}).apply(compiler);
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

		if (options.dotenv) {
			const DotenvPlugin = require("./DotenvPlugin");

			new DotenvPlugin(
				typeof options.dotenv === "boolean" ? {} : options.dotenv
			).apply(compiler);
		}

		let devtool =
			interception === undefined ? options.devtool : interception.devtool;
		devtool = Array.isArray(devtool)
			? devtool
			: typeof devtool === "string"
				? [{ type: "all", use: devtool }]
				: [];

		for (const item of devtool) {
			const { type, use } = item;

			if (use) {
				if (use.includes("source-map")) {
					const hidden = use.includes("hidden");
					const inline = use.includes("inline");
					const evalWrapped = use.includes("eval");
					const cheap = use.includes("cheap");
					const moduleMaps = use.includes("module");
					const noSources = use.includes("nosources");
					const debugIds = use.includes("debugids");
					const Plugin = evalWrapped
						? require("./EvalSourceMapDevToolPlugin")
						: require("./SourceMapDevToolPlugin");
					const assetExt =
						type === "javascript"
							? /\.((c|m)?js)($|\?)/i
							: type === "css"
								? /\.(css)($|\?)/i
								: /\.((c|m)?js|css)($|\?)/i;

					new Plugin({
						test: evalWrapped ? undefined : assetExt,
						filename: inline ? null : options.output.sourceMapFilename,
						moduleFilenameTemplate:
							options.output.devtoolModuleFilenameTemplate,
						fallbackModuleFilenameTemplate:
							options.output.devtoolFallbackModuleFilenameTemplate,
						append: hidden ? false : undefined,
						module: moduleMaps ? true : !cheap,
						columns: !cheap,
						noSources,
						namespace: options.output.devtoolNamespace,
						debugIds
					}).apply(compiler);
				} else if (use.includes("eval")) {
					const EvalDevToolModulePlugin = require("./EvalDevToolModulePlugin");

					new EvalDevToolModulePlugin({
						moduleFilenameTemplate:
							options.output.devtoolModuleFilenameTemplate,
						namespace: options.output.devtoolNamespace
					}).apply(compiler);
				}
			}
		}

		new JavascriptModulesPlugin().apply(compiler);
		new JsonModulesPlugin().apply(compiler);
		new AssetModulesPlugin({
			sideEffectFree: options.experiments.futureDefaults
		}).apply(compiler);

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
			const isUniversalTarget =
				options.output.module &&
				compiler.platform.node === null &&
				compiler.platform.web === null;

			if (isUniversalTarget) {
				const emitter = require.resolve("../hot/emitter-event-target.js");

				const NormalModuleReplacementPlugin = require("./NormalModuleReplacementPlugin");

				// Override emitter that using `EventEmitter` to `EventTarget`
				// TODO webpack 6 - migrate to `EventTarget` by default
				new NormalModuleReplacementPlugin(/emitter(\.js)?$/, (result) => {
					if (
						/webpack[/\\]hot|webpack-dev-server[/\\]client|webpack-hot-middleware[/\\]client/.test(
							result.context
						)
					) {
						result.request = emitter;
					}

					return result;
				}).apply(compiler);
			}

			const backend = require.resolve(
				isUniversalTarget
					? "../hot/lazy-compilation-universal.js"
					: `../hot/lazy-compilation-${
							options.externalsPresets.node ? "node" : "web"
						}.js`
			);

			new LazyCompilationPlugin({
				backend:
					typeof lazyOptions.backend === "function"
						? lazyOptions.backend
						: require("./hmr/lazyCompilationBackend")({
								...lazyOptions.backend,
								client:
									(lazyOptions.backend && lazyOptions.backend.client) || backend
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

		if (
			!(
				/** @type {typeof JavascriptParser & { __importPhasesExtended?: true }} */
				(JavascriptParser).__importPhasesExtended
			) &&
			(options.experiments.deferImport || options.experiments.sourceImport)
		) {
			const importPhases = require("acorn-import-phases");

			JavascriptParser.extend(importPhases({ source: true, defer: true }));
			/** @type {typeof JavascriptParser & { __importPhasesExtended?: true }} */
			(JavascriptParser).__importPhasesExtended = true;
		}

		new EntryOptionPlugin().apply(compiler);
		compiler.hooks.entryOption.call(options.context, options.entry);

		new RuntimePlugin().apply(compiler);

		new InferAsyncModulesPlugin().apply(compiler);

		new DataUriPlugin().apply(compiler);
		new FileUriPlugin().apply(compiler);

		new CompatibilityPlugin().apply(compiler);
		new HarmonyModulesPlugin({
			deferImport: options.experiments.deferImport
		}).apply(compiler);
		if (options.amd !== false) {
			const AMDPlugin = require("./dependencies/AMDPlugin");
			const RequireJsStuffPlugin = require("./RequireJsStuffPlugin");

			new AMDPlugin(options.amd || {}).apply(compiler);
			new RequireJsStuffPlugin().apply(compiler);
		}
		new CommonJsPlugin().apply(compiler);
		new LoaderPlugin().apply(compiler);
		new NodeStuffPlugin({
			global: options.node ? options.node.global : false,
			__dirname: options.node ? options.node.__dirname : false,
			__filename: options.node ? options.node.__filename : false
		}).apply(compiler);
		new APIPlugin().apply(compiler);
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

			new RuntimeChunkPlugin(options.optimization.runtimeChunk).apply(compiler);
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

			const defValue = JSON.stringify(options.optimization.nodeEnv);

			new DefinePlugin({
				"process.env.NODE_ENV": defValue,
				"import.meta.env.NODE_ENV": defValue
			}).apply(compiler);
		}
		if (options.optimization.minimize) {
			for (const minimizer of options.optimization.minimizer) {
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
									context: options.context,
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
			.tap(CLASS_NAME, (resolveOptions) => {
				resolveOptions = cleverMerge(options.resolve, resolveOptions);
				resolveOptions.fileSystem =
					/** @type {InputFileSystem} */
					(compiler.inputFileSystem);
				return resolveOptions;
			});
		compiler.resolverFactory.hooks.resolveOptions
			.for("context")
			.tap(CLASS_NAME, (resolveOptions) => {
				resolveOptions = cleverMerge(options.resolve, resolveOptions);
				resolveOptions.fileSystem =
					/** @type {InputFileSystem} */
					(compiler.inputFileSystem);
				resolveOptions.resolveToContext = true;
				return resolveOptions;
			});
		compiler.resolverFactory.hooks.resolveOptions
			.for("loader")
			.tap(CLASS_NAME, (resolveOptions) => {
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
