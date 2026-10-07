/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const fs = require("fs");
const path = require("path");
const {
	CSS_TYPE,
	JAVASCRIPT_TYPE,
	UNKNOWN_TYPE
} = require("../ModuleSourceTypeConstants");
const {
	ASSET_MODULE_TYPE,
	ASSET_MODULE_TYPE_BYTES,
	ASSET_MODULE_TYPE_INLINE,
	ASSET_MODULE_TYPE_RESOURCE,
	ASSET_MODULE_TYPE_SOURCE,
	CSS_MODULE_TYPE,
	CSS_MODULE_TYPE_AUTO,
	CSS_MODULE_TYPE_GLOBAL,
	CSS_MODULE_TYPE_MODULE,
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC,
	JAVASCRIPT_MODULE_TYPE_ESM,
	JSON_MODULE_TYPE,
	WEBASSEMBLY_MODULE_TYPE_ASYNC,
	WEBASSEMBLY_MODULE_TYPE_SYNC
} = require("../ModuleTypeConstants");
const Template = require("../Template");
const { cleverMerge } = require("../util/cleverMerge");
const {
	getDefaultTarget,
	getTargetProperties,
	getTargetsProperties
} = require("./target");

/** @typedef {import("../../declarations/WebpackOptions").CacheOptionsNormalized} CacheOptionsNormalized */
/** @typedef {import("../../declarations/WebpackOptions").Context} Context */
/** @typedef {import("../../declarations/WebpackOptions").DevTool} Devtool */
/** @typedef {import("../../declarations/WebpackOptions").CssGeneratorOptions} CssGeneratorOptions */
/** @typedef {import("../../declarations/WebpackOptions").EntryDescription} EntryDescription */
/** @typedef {import("../../declarations/WebpackOptions").EntryNormalized} Entry */
/** @typedef {import("../../declarations/WebpackOptions").Environment} Environment */
/** @typedef {import("../../declarations/WebpackOptions").Experiments} Experiments */
/** @typedef {import("../../declarations/WebpackOptions").ExperimentsNormalized} ExperimentsNormalized */
/** @typedef {import("../../declarations/WebpackOptions").ExternalsPresets} ExternalsPresets */
/** @typedef {import("../../declarations/WebpackOptions").ExternalsType} ExternalsType */
/** @typedef {import("../../declarations/WebpackOptions").FileCacheOptions} FileCacheOptions */
/** @typedef {import("../../declarations/WebpackOptions").GeneratorOptionsByModuleTypeKnown} GeneratorOptionsByModuleTypeKnown */
/** @typedef {import("../../declarations/WebpackOptions").InfrastructureLogging} InfrastructureLogging */
/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../../declarations/WebpackOptions").JsonGeneratorOptions} JsonGeneratorOptions */
/** @typedef {import("../../declarations/WebpackOptions").Library} Library */
/** @typedef {import("../../declarations/WebpackOptions").LibraryName} LibraryName */
/** @typedef {import("../../declarations/WebpackOptions").LibraryType} LibraryType */
/** @typedef {import("../../declarations/WebpackOptions").Loader} Loader */
/** @typedef {import("../../declarations/WebpackOptions").Mode} Mode */
/** @typedef {import("../../declarations/WebpackOptions").HashFunction} HashFunction */
/** @typedef {import("../../declarations/WebpackOptions").HashSalt} HashSalt */
/** @typedef {import("../../declarations/WebpackOptions").HashDigest} HashDigest */
/** @typedef {import("../../declarations/WebpackOptions").HashDigestLength} HashDigestLength */
/** @typedef {import("../../declarations/WebpackOptions").ModuleOptionsNormalized} ModuleOptions */
/** @typedef {import("../../declarations/WebpackOptions").Node} WebpackNode */
/** @typedef {import("../../declarations/WebpackOptions").OptimizationNormalized} Optimization */
/** @typedef {import("../../declarations/WebpackOptions").OptimizationSplitChunksOptions} OptimizationSplitChunksOptions */
/** @typedef {import("../../declarations/WebpackOptions").OutputNormalized} Output */
/** @typedef {import("../../declarations/WebpackOptions").ParserOptionsByModuleTypeKnown} ParserOptionsByModuleTypeKnown */
/** @typedef {import("../../declarations/WebpackOptions").Performance} Performance */
/** @typedef {import("../../declarations/WebpackOptions").ResolveOptions} ResolveOptions */
/** @typedef {import("../../declarations/WebpackOptions").RuleSetRules} RuleSetRules */
/** @typedef {import("../../declarations/WebpackOptions").SnapshotOptions} SnapshotOptions */
/** @typedef {import("../../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptionsNormalized */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../javascript/EnableChunkLoadingPlugin").ChunkLoadingTypes} ChunkLoadingTypes */
/** @typedef {import("../wasm/EnableWasmLoadingPlugin").WasmLoadingTypes} WasmLoadingTypes */
/** @typedef {import("./target").PlatformTargetProperties} PlatformTargetProperties */
/** @typedef {import("./target").TargetProperties} TargetProperties */

/**
 * Defines the recursive non nullable type used by this module.
 * @template T
 * @typedef {{ [P in keyof T]-?: T[P] extends object ? RecursiveNonNullable<NonNullable<T[P]>> : NonNullable<T[P]> }} RecursiveNonNullable
 */

/**
 * Defines the shared type used by this module.
 * @typedef {Output & {
 * uniqueName: NonNullable<Output["uniqueName"]>,
 * filename: NonNullable<Output["filename"]>,
 * cssFilename: NonNullable<Output["cssFilename"]>,
 * chunkFilename: NonNullable<Output["chunkFilename"]>,
 * cssChunkFilename: NonNullable<Output["cssChunkFilename"]>,
 * hotUpdateChunkFilename: NonNullable<Output["hotUpdateChunkFilename"]>,
 * hotUpdateGlobal: NonNullable<Output["hotUpdateGlobal"]>,
 * assetModuleFilename: NonNullable<Output["assetModuleFilename"]>,
 * webassemblyModuleFilename: NonNullable<Output["webassemblyModuleFilename"]>,
 * sourceMapFilename: NonNullable<Output["sourceMapFilename"]>,
 * hotUpdateMainFilename: NonNullable<Output["hotUpdateMainFilename"]>,
 * devtoolNamespace: NonNullable<Output["devtoolNamespace"]>,
 * publicPath: NonNullable<Output["publicPath"]>,
 * workerPublicPath: NonNullable<Output["workerPublicPath"]>,
 * workerWasmLoading: NonNullable<Output["workerWasmLoading"]>,
 * workerChunkLoading: NonNullable<Output["workerChunkLoading"]>,
 * chunkFormat: NonNullable<Output["chunkFormat"]>,
 * module: NonNullable<Output["module"]>,
 * asyncChunks: NonNullable<Output["asyncChunks"]>,
 * charset: NonNullable<Output["charset"]>,
 * iife: NonNullable<Output["iife"]>,
 * globalObject: NonNullable<Output["globalObject"]>,
 * scriptType: NonNullable<Output["scriptType"]>,
 * path: NonNullable<Output["path"]>,
 * pathinfo: NonNullable<Output["pathinfo"]>,
 * hashFunction: NonNullable<Output["hashFunction"]>,
 * hashDigest: NonNullable<Output["hashDigest"]>,
 * hashDigestLength: NonNullable<Output["hashDigestLength"]>,
 * chunkLoadTimeout: NonNullable<Output["chunkLoadTimeout"]>,
 * chunkLoading: NonNullable<Output["chunkLoading"]>,
 * chunkLoadingGlobal: NonNullable<Output["chunkLoadingGlobal"]>,
 * compareBeforeEmit: NonNullable<Output["compareBeforeEmit"]>,
 * strictModuleErrorHandling: NonNullable<Output["strictModuleErrorHandling"]>,
 * strictModuleExceptionHandling: NonNullable<Output["strictModuleExceptionHandling"]>,
 * importFunctionName: NonNullable<Output["importFunctionName"]>,
 * importMetaName: NonNullable<Output["importMetaName"]>,
 * environment: RecursiveNonNullable<Output["environment"]>,
 * crossOriginLoading: NonNullable<Output["crossOriginLoading"]>,
 * wasmLoading: NonNullable<Output["wasmLoading"]>,
 * }} OutputNormalizedWithDefaults
 */

/**
 * Defines the shared type used by this module.
 * @typedef {SnapshotOptions & {
 * managedPaths: NonNullable<SnapshotOptions["managedPaths"]>,
 * unmanagedPaths: NonNullable<SnapshotOptions["unmanagedPaths"]>,
 * immutablePaths: NonNullable<SnapshotOptions["immutablePaths"]>,
 * resolveBuildDependencies: NonNullable<SnapshotOptions["resolveBuildDependencies"]>,
 * buildDependencies: NonNullable<SnapshotOptions["buildDependencies"]>,
 * module: NonNullable<SnapshotOptions["module"]>,
 * resolve: NonNullable<SnapshotOptions["resolve"]>,
 * }} SnapshotNormalizedWithDefaults
 */

/**
 * Defines the shared type used by this module.
 * @typedef {Optimization & {
 * runtimeChunk: NonNullable<Optimization["runtimeChunk"]>,
 * splitChunks: NonNullable<Optimization["splitChunks"]>,
 * mergeDuplicateChunks: NonNullable<Optimization["mergeDuplicateChunks"]>,
 * removeAvailableModules: NonNullable<Optimization["removeAvailableModules"]>,
 * removeEmptyChunks: NonNullable<Optimization["removeEmptyChunks"]>,
 * flagIncludedChunks: NonNullable<Optimization["flagIncludedChunks"]>,
 * moduleIds: NonNullable<Optimization["moduleIds"]>,
 * chunkIds: NonNullable<Optimization["chunkIds"]>,
 * sideEffects: NonNullable<Optimization["sideEffects"]>,
 * providedExports: NonNullable<Optimization["providedExports"]>,
 * usedExports: NonNullable<Optimization["usedExports"]>,
 * mangleExports: NonNullable<Optimization["mangleExports"]>,
 * innerGraph: NonNullable<Optimization["innerGraph"]>,
 * concatenateModules: NonNullable<Optimization["concatenateModules"]>,
 * avoidEntryIife: NonNullable<Optimization["avoidEntryIife"]>,
 * emitOnErrors: NonNullable<Optimization["emitOnErrors"]>,
 * checkWasmTypes: NonNullable<Optimization["checkWasmTypes"]>,
 * mangleWasmImports: NonNullable<Optimization["mangleWasmImports"]>,
 * portableRecords: NonNullable<Optimization["portableRecords"]>,
 * realContentHash: NonNullable<Optimization["realContentHash"]>,
 * minimize: NonNullable<Optimization["minimize"]>,
 * minimizer: NonNullable<Exclude<Optimization["minimizer"], "...">>,
 * nodeEnv: NonNullable<Optimization["nodeEnv"]>,
 * }} OptimizationNormalizedWithDefaults
 */

/**
 * Defines the shared type used by this module.
 * @typedef {ExternalsPresets & {
 * web: NonNullable<ExternalsPresets["web"]>,
 * node: NonNullable<ExternalsPresets["node"]>,
 * nwjs: NonNullable<ExternalsPresets["nwjs"]>,
 * electron: NonNullable<ExternalsPresets["electron"]>,
 * electronMain: NonNullable<ExternalsPresets["electronMain"]>,
 * electronPreload: NonNullable<ExternalsPresets["electronPreload"]>,
 * electronRenderer: NonNullable<ExternalsPresets["electronRenderer"]>,
 * }} ExternalsPresetsNormalizedWithDefaults
 */

/**
 * Defines the shared type used by this module.
 * @typedef {InfrastructureLogging & {
 * stream: NonNullable<InfrastructureLogging["stream"]>,
 * level: NonNullable<InfrastructureLogging["level"]>,
 * debug: NonNullable<InfrastructureLogging["debug"]>,
 * colors: NonNullable<InfrastructureLogging["colors"]>,
 * appendOnly: NonNullable<InfrastructureLogging["appendOnly"]>,
 * }} InfrastructureLoggingNormalizedWithDefaults
 */

/**
 * Defines the webpack options normalized with base defaults type used by this module.
 * @typedef {WebpackOptionsNormalized & { context: NonNullable<WebpackOptionsNormalized["context"]> } & { infrastructureLogging: InfrastructureLoggingNormalizedWithDefaults }} WebpackOptionsNormalizedWithBaseDefaults
 */

/**
 * Defines the webpack options normalized with defaults type used by this module.
 * @typedef {WebpackOptionsNormalizedWithBaseDefaults & { target: NonNullable<WebpackOptionsNormalized["target"]> } & { output: OutputNormalizedWithDefaults } & { optimization: OptimizationNormalizedWithDefaults } & { devtool: NonNullable<WebpackOptionsNormalized["devtool"]> } & { stats: NonNullable<WebpackOptionsNormalized["stats"]> } & { node: NonNullable<WebpackOptionsNormalized["node"]> } & { profile: NonNullable<WebpackOptionsNormalized["profile"]> } & { parallelism: NonNullable<WebpackOptionsNormalized["parallelism"]> } & { snapshot: SnapshotNormalizedWithDefaults } & { externalsPresets: ExternalsPresetsNormalizedWithDefaults } & { externalsType: NonNullable<WebpackOptionsNormalized["externalsType"]> } & { watch: NonNullable<WebpackOptionsNormalized["watch"]> } & { performance: NonNullable<WebpackOptionsNormalized["performance"]> } & { recordsInputPath: NonNullable<WebpackOptionsNormalized["recordsInputPath"]> } & { recordsOutputPath: NonNullable<WebpackOptionsNormalized["recordsOutputPath"]> } & { dotenv: NonNullable<WebpackOptionsNormalized["dotenv"]> }} WebpackOptionsNormalizedWithDefaults
 */

/**
 * Defines the resolved options type used by this module.
 * @typedef {object} ResolvedOptions
 * @property {PlatformTargetProperties | false} platform - platform target properties
 */

const NODE_MODULES_REGEXP = /[\\/]node_modules[\\/]/i;
const DEFAULT_CACHE_NAME = "default";
const DEFAULTS = {
	// TODO webpack 6 - use xxhash64
	HASH_FUNCTION: "md4"
};

/**
 * Processes the provided obj.
 * @template T
 * @template {keyof T} P
 * @param {T} obj an object
 * @param {P} prop a property of this object
 * @param {T[P]} value a default value of the property
 * @returns {void}
 */
const D = (obj, prop, value) => {
	if (obj[prop] === undefined) {
		obj[prop] = value;
	}
};

/**
 * Processes the provided obj.
 * @template T
 * @template {keyof T} P
 * @param {T} obj an object
 * @param {P} prop a property of this object
 * @param {() => T[P]} factory a default value factory for the property
 * @returns {void}
 */
const F = (obj, prop, factory) => {
	if (obj[prop] === undefined) {
		obj[prop] = factory();
	}
};

/**
 * Sets a dynamic default value when undefined, by calling the factory function.
 * factory must return an array or undefined
 * When the current value is already an array an contains "..." it's replaced with
 * the result of the factory function
 * @template T
 * @template {keyof T} P
 * @param {T} obj an object
 * @param {P} prop a property of this object
 * @param {() => T[P]} factory a default value factory for the property
 * @returns {void}
 */
const A = (obj, prop, factory) => {
	const value = obj[prop];
	if (value === undefined) {
		obj[prop] = factory();
	} else if (Array.isArray(value)) {
		/** @type {EXPECTED_ANY[] | undefined} */
		let newArray;
		for (let i = 0; i < value.length; i++) {
			const item = value[i];
			if (item === "...") {
				if (newArray === undefined) {
					newArray = value.slice(0, i);
					obj[prop] = /** @type {T[P]} */ (/** @type {unknown} */ (newArray));
				}
				const items =
					/** @type {EXPECTED_ANY[]} */
					(/** @type {unknown} */ (factory()));
				if (items !== undefined) {
					for (const item of items) {
						newArray.push(item);
					}
				}
			} else if (newArray !== undefined) {
				newArray.push(item);
			}
		}
	}
};

/**
 * Apply webpack options base defaults.
 * @param {WebpackOptionsNormalized} options options to be modified
 * @returns {void}
 */
const applyWebpackOptionsBaseDefaults = (options) => {
	F(options, "context", () => process.cwd());
	applyInfrastructureLoggingDefaults(options.infrastructureLogging);
};

/**
 * Apply webpack options defaults.
 * @param {WebpackOptionsNormalized} options options to be modified
 * @param {number=} compilerIndex index of compiler
 * @returns {ResolvedOptions} Resolved options after apply defaults
 */
const applyWebpackOptionsDefaults = (options, compilerIndex) => {
	F(options, "context", () => process.cwd());
	F(options, "target", () =>
		getDefaultTarget(/** @type {string} */ (options.context))
	);

	const { mode, name, target } = options;

	const targetProperties =
		target === false
			? /** @type {false} */ (false)
			: typeof target === "string"
				? getTargetProperties(target, /** @type {Context} */ (options.context))
				: getTargetsProperties(
						/** @type {string[]} */ (target),
						/** @type {Context} */ (options.context)
					);

	const development = mode === "development";
	const production = mode === "production" || !mode;

	if (typeof options.entry !== "function") {
		for (const key of Object.keys(options.entry)) {
			F(
				options.entry[key],
				"import",
				() => /** @type {[string]} */ (["./src"])
			);
		}
	}

	F(
		options,
		"devtool",
		() =>
			/** @type {Devtool} */ (
				development
					? [
							options.experiments.css
								? {
										type: "css",
										use: "source-map"
									}
								: undefined,
							{
								type: "javascript",
								use: "eval"
							}
						].filter(Boolean)
					: false
			)
	);

	D(options, "watch", false);
	D(options, "profile", false);
	D(options, "parallelism", 100);
	D(options, "recordsInputPath", false);
	D(options, "recordsOutputPath", false);

	applyExperimentsDefaults(options.experiments, {
		production,
		development,
		targetProperties
	});

	const futureDefaults =
		/** @type {NonNullable<ExperimentsNormalized["futureDefaults"]>} */
		(options.experiments.futureDefaults);

	F(options, "validate", () => !(futureDefaults === true && production));

	F(options, "cache", () =>
		development ? { type: /** @type {"memory"} */ ("memory") } : false
	);
	applyCacheDefaults(options.cache, {
		name: name || DEFAULT_CACHE_NAME,
		mode: mode || "production",
		development,
		cacheUnaffected: options.experiments.cacheUnaffected,
		futureDefaults,
		compilerIndex
	});
	const cache = Boolean(options.cache);

	applySnapshotDefaults(options.snapshot, {
		production,
		futureDefaults
	});

	applyOutputDefaults(options.output, {
		context: /** @type {Context} */ (options.context),
		targetProperties,
		isAffectedByBrowserslist:
			target === undefined ||
			(typeof target === "string" && target.startsWith("browserslist")) ||
			(Array.isArray(target) &&
				target.some((target) => target.startsWith("browserslist"))),
		outputModule:
			/** @type {NonNullable<ExperimentsNormalized["outputModule"]>} */
			(options.experiments.outputModule),
		development,
		entry: options.entry,
		futureDefaults,
		asyncWebAssembly:
			/** @type {NonNullable<ExperimentsNormalized["asyncWebAssembly"]>} */
			(options.experiments.asyncWebAssembly)
	});

	applyModuleDefaults(options.module, {
		cache,
		hashSalt: /** @type {NonNullable<Output["hashSalt"]>} */ (
			options.output.hashSalt
		),
		hashFunction: /** @type {NonNullable<Output["hashFunction"]>} */ (
			options.output.hashFunction
		),
		syncWebAssembly:
			/** @type {NonNullable<ExperimentsNormalized["syncWebAssembly"]>} */
			(options.experiments.syncWebAssembly),
		asyncWebAssembly:
			/** @type {NonNullable<ExperimentsNormalized["asyncWebAssembly"]>} */
			(options.experiments.asyncWebAssembly),
		css:
			/** @type {NonNullable<ExperimentsNormalized["css"]>} */
			(options.experiments.css),
		deferImport:
			/** @type {NonNullable<ExperimentsNormalized["deferImport"]>} */
			(options.experiments.deferImport),
		sourceImport:
			/** @type {NonNullable<ExperimentsNormalized["sourceImport"]>} */
			(options.experiments.sourceImport),
		futureDefaults,
		isNode: targetProperties && targetProperties.node === true,
		uniqueName: /** @type {string} */ (options.output.uniqueName),
		targetProperties,
		mode: options.mode,
		outputModule:
			/** @type {NonNullable<WebpackOptionsNormalized["output"]["module"]>} */
			(options.output.module)
	});

	applyExternalsPresetsDefaults(options.externalsPresets, {
		targetProperties,
		buildHttp: Boolean(options.experiments.buildHttp),
		outputModule:
			/** @type {NonNullable<WebpackOptionsNormalized["output"]["module"]>} */
			(options.output.module)
	});

	applyLoaderDefaults(
		/** @type {NonNullable<WebpackOptionsNormalized["loader"]>} */ (
			options.loader
		),
		{ targetProperties, environment: options.output.environment }
	);

	F(options, "externalsType", () => {
		const validExternalTypes = require("../../schemas/WebpackOptions.json")
			.definitions.ExternalsType.enum;

		return options.output.library &&
			validExternalTypes.includes(options.output.library.type)
			? /** @type {ExternalsType} */ (options.output.library.type)
			: options.output.module
				? "module-import"
				: "var";
	});

	applyNodeDefaults(options.node, {
		futureDefaults:
			/** @type {NonNullable<WebpackOptionsNormalized["experiments"]["futureDefaults"]>} */
			(options.experiments.futureDefaults),
		outputModule:
			/** @type {NonNullable<WebpackOptionsNormalized["output"]["module"]>} */
			(options.output.module),
		targetProperties
	});

	F(options, "performance", () =>
		production &&
		targetProperties &&
		(targetProperties.browser || targetProperties.browser === null)
			? {}
			: false
	);
	applyPerformanceDefaults(
		/** @type {NonNullable<WebpackOptionsNormalized["performance"]>} */
		(options.performance),
		{
			production
		}
	);

	applyOptimizationDefaults(options.optimization, {
		development,
		production,
		css:
			/** @type {NonNullable<ExperimentsNormalized["css"]>} */
			(options.experiments.css),
		records: Boolean(options.recordsInputPath || options.recordsOutputPath)
	});

	options.resolve = cleverMerge(
		getResolveDefaults({
			cache,
			context: /** @type {Context} */ (options.context),
			targetProperties,
			mode: /** @type {Mode} */ (options.mode),
			css:
				/** @type {NonNullable<ExperimentsNormalized["css"]>} */
				(options.experiments.css)
		}),
		options.resolve
	);

	options.resolveLoader = cleverMerge(
		getResolveLoaderDefaults({ cache }),
		options.resolveLoader
	);

	return {
		platform:
			targetProperties === false
				? targetProperties
				: {
						web: targetProperties.web,
						browser: targetProperties.browser,
						webworker: targetProperties.webworker,
						node: targetProperties.node,
						nwjs: targetProperties.nwjs,
						electron: targetProperties.electron
					}
	};
};

/**
 * Apply experiments defaults.
 * @param {ExperimentsNormalized} experiments options
 * @param {object} options options
 * @param {boolean} options.production is production
 * @param {boolean} options.development is development mode
 * @param {TargetProperties | false} options.targetProperties target properties
 * @returns {void}
 */
const applyExperimentsDefaults = (
	experiments,
	{ production, development, targetProperties }
) => {
	D(experiments, "futureDefaults", false);
	D(experiments, "backCompat", !experiments.futureDefaults);
	// TODO do we need sync web assembly in webpack@6?
	D(experiments, "syncWebAssembly", false);
	D(experiments, "asyncWebAssembly", experiments.futureDefaults);
	D(experiments, "outputModule", false);
	D(experiments, "lazyCompilation", undefined);
	D(experiments, "buildHttp", undefined);
	D(experiments, "cacheUnaffected", experiments.futureDefaults);
	D(experiments, "deferImport", false);
	D(experiments, "sourceImport", false);
	F(experiments, "css", () => (experiments.futureDefaults ? true : undefined));

	if (typeof experiments.buildHttp === "object") {
		D(experiments.buildHttp, "frozen", production);
		D(experiments.buildHttp, "upgrade", false);
	}
};

/**
 * Apply cache defaults.
 * @param {CacheOptionsNormalized} cache options
 * @param {object} options options
 * @param {string} options.name name
 * @param {Mode} options.mode mode
 * @param {boolean} options.futureDefaults is future defaults enabled
 * @param {boolean} options.development is development mode
 * @param {number=} options.compilerIndex index of compiler
 * @param {Experiments["cacheUnaffected"]} options.cacheUnaffected the cacheUnaffected experiment is enabled
 * @returns {void}
 */
const applyCacheDefaults = (
	cache,
	{ name, mode, development, cacheUnaffected, compilerIndex, futureDefaults }
) => {
	if (cache === false) return;
	switch (cache.type) {
		case "filesystem":
			F(cache, "name", () =>
				compilerIndex !== undefined
					? `${`${name}-${mode}`}__compiler${compilerIndex + 1}__`
					: `${name}-${mode}`
			);
			D(cache, "version", "");
			F(cache, "cacheDirectory", () => {
				const cwd = process.cwd();
				/** @type {string | undefined} */
				let dir = cwd;
				for (;;) {
					try {
						if (fs.statSync(path.join(dir, "package.json")).isFile()) break;
						// eslint-disable-next-line no-empty
					} catch (_err) {}
					const parent = path.dirname(dir);
					if (dir === parent) {
						dir = undefined;
						break;
					}
					dir = parent;
				}
				if (!dir) {
					return path.resolve(cwd, ".cache/webpack");
				} else if (process.versions.pnp === "1") {
					return path.resolve(dir, ".pnp/.cache/webpack");
				} else if (process.versions.pnp === "3") {
					return path.resolve(dir, ".yarn/.cache/webpack");
				}
				return path.resolve(dir, "node_modules/.cache/webpack");
			});
			F(cache, "cacheLocation", () =>
				path.resolve(
					/** @type {NonNullable<FileCacheOptions["cacheDirectory"]>} */
					(cache.cacheDirectory),
					/** @type {NonNullable<FileCacheOptions["name"]>} */ (cache.name)
				)
			);
			D(cache, "hashAlgorithm", futureDefaults ? "xxhash64" : "md4");
			D(cache, "store", "pack");
			D(cache, "compression", false);
			D(cache, "profile", false);
			D(cache, "idleTimeout", 60000);
			D(cache, "idleTimeoutForInitialStore", 5000);
			D(cache, "idleTimeoutAfterLargeChanges", 1000);
			D(cache, "maxMemoryGenerations", development ? 5 : Infinity);
			D(cache, "maxAge", 1000 * 60 * 60 * 24 * 60); // 1 month
			D(cache, "allowCollectingMemory", development);
			D(cache, "memoryCacheUnaffected", development && cacheUnaffected);
			D(cache, "readonly", false);
			D(
				/** @type {NonNullable<FileCacheOptions["buildDependencies"]>} */
				(cache.buildDependencies),
				"defaultWebpack",
				[path.resolve(__dirname, "..") + path.sep]
			);
			break;
		case "memory":
			D(cache, "maxGenerations", Infinity);
			D(cache, "cacheUnaffected", development && cacheUnaffected);
			break;
	}
};

/**
 * Apply snapshot defaults.
 * @param {SnapshotOptions} snapshot options
 * @param {object} options options
 * @param {boolean} options.production is production
 * @param {boolean} options.futureDefaults is future defaults enabled
 * @returns {void}
 */
const applySnapshotDefaults = (snapshot, { production, futureDefaults }) => {
	if (futureDefaults) {
		F(snapshot, "managedPaths", () =>
			process.versions.pnp === "3"
				? [
						/^(.+?(?:[\\/]\.yarn[\\/]unplugged[\\/][^\\/]+)?[\\/]node_modules[\\/])/
					]
				: [/^(.+?[\\/]node_modules[\\/])/]
		);
		F(snapshot, "immutablePaths", () =>
			process.versions.pnp === "3"
				? [/^(.+?[\\/]cache[\\/][^\\/]+\.zip[\\/]node_modules[\\/])/]
				: []
		);
	} else {
		A(snapshot, "managedPaths", () => {
			if (process.versions.pnp === "3") {
				const match =
					/^(.+?)[\\/]cache[\\/]watchpack-npm-[^\\/]+\.zip[\\/]node_modules[\\/]/.exec(
						require.resolve("watchpack")
					);
				if (match) {
					return [path.resolve(match[1], "unplugged")];
				}
			} else {
				const match = /^(.+?[\\/]node_modules[\\/])/.exec(
					require.resolve("watchpack")
				);
				if (match) {
					return [match[1]];
				}
			}
			return [];
		});
		A(snapshot, "immutablePaths", () => {
			if (process.versions.pnp === "1") {
				const match =
					/^(.+?[\\/]v4)[\\/]npm-watchpack-[^\\/]+-[\da-f]{40}[\\/]node_modules[\\/]/.exec(
						require.resolve("watchpack")
					);
				if (match) {
					return [match[1]];
				}
			} else if (process.versions.pnp === "3") {
				const match =
					/^(.+?)[\\/]watchpack-npm-[^\\/]+\.zip[\\/]node_modules[\\/]/.exec(
						require.resolve("watchpack")
					);
				if (match) {
					return [match[1]];
				}
			}
			return [];
		});
	}
	F(snapshot, "unmanagedPaths", () => []);
	F(snapshot, "resolveBuildDependencies", () => ({
		timestamp: true,
		hash: true
	}));
	F(snapshot, "buildDependencies", () => ({ timestamp: true, hash: true }));
	F(snapshot, "module", () =>
		production ? { timestamp: true, hash: true } : { timestamp: true }
	);
	F(snapshot, "contextModule", () => ({ timestamp: true }));
	F(snapshot, "resolve", () =>
		production ? { timestamp: true, hash: true } : { timestamp: true }
	);
};

/**
 * Apply javascript parser options defaults.
 * @param {JavascriptParserOptions} parserOptions parser options
 * @param {object} options options
 * @param {boolean} options.futureDefaults is future defaults enabled
 * @param {boolean} options.deferImport is defer import enabled
 * @param {boolean} options.sourceImport is import source enabled
 * @param {boolean} options.isNode is node target platform
 * @param {boolean} options.outputModule is output.module enabled
 * @returns {void}
 */
const applyJavascriptParserOptionsDefaults = (
	parserOptions,
	{ futureDefaults, deferImport, sourceImport, isNode, outputModule }
) => {
	D(parserOptions, "unknownContextRequest", ".");
	D(parserOptions, "unknownContextRegExp", false);
	D(parserOptions, "unknownContextRecursive", true);
	D(parserOptions, "unknownContextCritical", true);
	D(parserOptions, "exprContextRequest", ".");
	D(parserOptions, "exprContextRegExp", false);
	D(parserOptions, "exprContextRecursive", true);
	D(parserOptions, "exprContextCritical", true);
	D(parserOptions, "wrappedContextRegExp", /.*/);
	D(parserOptions, "wrappedContextRecursive", true);
	D(parserOptions, "wrappedContextCritical", false);
	D(parserOptions, "strictThisContextOnImports", false);
	D(parserOptions, "importMeta", outputModule ? "preserve-unknown" : true);
	D(parserOptions, "dynamicImportMode", "lazy");
	D(parserOptions, "dynamicImportPrefetch", false);
	D(parserOptions, "dynamicImportPreload", false);
	D(parserOptions, "dynamicImportFetchPriority", false);
	D(parserOptions, "createRequire", isNode);
	D(parserOptions, "dynamicUrl", true);
	D(parserOptions, "deferImport", deferImport);
	D(parserOptions, "sourceImport", sourceImport);
	if (futureDefaults) D(parserOptions, "exportsPresence", "error");
};

/**
 * Apply json generator options defaults.
 * @param {JsonGeneratorOptions} generatorOptions generator options
 * @returns {void}
 */
const applyJsonGeneratorOptionsDefaults = (generatorOptions) => {
	D(generatorOptions, "JSONParse", true);
};

/**
 * Apply css generator options defaults.
 * @param {CssGeneratorOptions} generatorOptions generator options
 * @param {object} options options
 * @param {TargetProperties | false} options.targetProperties target properties
 * @returns {void}
 */
const applyCssGeneratorOptionsDefaults = (
	generatorOptions,
	{ targetProperties }
) => {
	D(
		generatorOptions,
		"exportsOnly",
		!targetProperties || targetProperties.document === false
	);
	D(generatorOptions, "esModule", true);
};

/**
 * Apply module defaults.
 * @param {ModuleOptions} module options
 * @param {object} options options
 * @param {boolean} options.cache is caching enabled
 * @param {boolean} options.syncWebAssembly is syncWebAssembly enabled
 * @param {boolean} options.asyncWebAssembly is asyncWebAssembly enabled
 * @param {boolean} options.css is css enabled
 * @param {boolean} options.futureDefaults is future defaults enabled
 * @param {string} options.uniqueName the unique name
 * @param {boolean} options.isNode is node target platform
 * @param {boolean} options.deferImport is defer import enabled
 * @param {boolean} options.sourceImport is import source enabled
 * @param {TargetProperties | false} options.targetProperties target properties
 * @param {Mode | undefined} options.mode mode
 * @param {HashSalt} options.hashSalt hash salt
 * @param {HashFunction} options.hashFunction hash function
 * @param {boolean} options.outputModule is output.module enabled
 * @returns {void}
 */
const applyModuleDefaults = (
	module,
	{
		hashSalt,
		hashFunction,
		cache,
		syncWebAssembly,
		asyncWebAssembly,
		css,
		futureDefaults,
		isNode,
		uniqueName,
		targetProperties,
		mode,
		deferImport,
		sourceImport,
		outputModule
	}
) => {
	if (cache) {
		D(
			module,
			"unsafeCache",
			/**
			 * Handles the callback logic for this hook.
			 * @param {Module} module module
			 * @returns {boolean} true, if we want to cache the module
			 */
			(module) => {
				const name = module.nameForCondition();
				if (!name) {
					return false;
				}
				return NODE_MODULES_REGEXP.test(name);
			}
		);
	} else {
		D(module, "unsafeCache", false);
	}

	F(module.parser, ASSET_MODULE_TYPE, () => ({}));
	F(
		/** @type {NonNullable<ParserOptionsByModuleTypeKnown[ASSET_MODULE_TYPE]>} */
		(module.parser[ASSET_MODULE_TYPE]),
		"dataUrlCondition",
		() => ({})
	);
	if (
		typeof (
			/** @type {NonNullable<ParserOptionsByModuleTypeKnown[ASSET_MODULE_TYPE]>} */
			(module.parser[ASSET_MODULE_TYPE]).dataUrlCondition
		) === "object"
	) {
		D(
			/** @type {NonNullable<ParserOptionsByModuleTypeKnown[ASSET_MODULE_TYPE]>} */
			(module.parser[ASSET_MODULE_TYPE]).dataUrlCondition,
			"maxSize",
			8096
		);
	}

	F(module.parser, "javascript", () => ({}));
	F(module.parser, JSON_MODULE_TYPE, () => ({}));
	D(
		/** @type {NonNullable<ParserOptionsByModuleTypeKnown[JSON_MODULE_TYPE]>} */
		(module.parser[JSON_MODULE_TYPE]),
		"exportsDepth",
		mode === "development" ? 1 : Infinity
	);

	applyJavascriptParserOptionsDefaults(
		/** @type {NonNullable<ParserOptionsByModuleTypeKnown["javascript"]>} */
		(module.parser.javascript),
		{
			futureDefaults,
			deferImport,
			sourceImport,
			isNode,
			outputModule
		}
	);

	F(module.generator, "json", () => ({}));
	applyJsonGeneratorOptionsDefaults(
		/** @type {NonNullable<GeneratorOptionsByModuleTypeKnown["json"]>} */
		(module.generator.json)
	);

	if (css) {
		F(module.parser, CSS_MODULE_TYPE, () => ({}));

		D(
			/** @type {NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE]>} */
			(module.parser[CSS_MODULE_TYPE]),
			"import",
			true
		);
		D(
			/** @type {NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE]>} */
			(module.parser[CSS_MODULE_TYPE]),
			"url",
			true
		);
		D(
			/** @type {NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE]>} */
			(module.parser[CSS_MODULE_TYPE]),
			"namedExports",
			true
		);

		for (const type of [
			CSS_MODULE_TYPE_AUTO,
			CSS_MODULE_TYPE_MODULE,
			CSS_MODULE_TYPE_GLOBAL
		]) {
			F(module.parser, type, () => ({}));

			D(
				/** @type {NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_AUTO]> | NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]> | NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_GLOBAL]>} */
				(module.parser[type]),
				"animation",
				true
			);
			D(
				/** @type {NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_AUTO]> | NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]> | NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_GLOBAL]>} */
				(module.parser[type]),
				"container",
				true
			);
			D(
				/** @type {NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_AUTO]> | NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]> | NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_GLOBAL]>} */
				(module.parser[type]),
				"customIdents",
				true
			);
			D(
				/** @type {NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_AUTO]> | NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]> | NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_GLOBAL]>} */
				(module.parser[type]),
				"dashedIdents",
				true
			);
			D(
				/** @type {NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_AUTO]> | NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]> | NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_GLOBAL]>} */
				(module.parser[type]),
				"function",
				true
			);
			D(
				/** @type {NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_AUTO]> | NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]> | NonNullable<ParserOptionsByModuleTypeKnown[CSS_MODULE_TYPE_GLOBAL]>} */
				(module.parser[type]),
				"grid",
				true
			);
		}

		F(module.generator, CSS_MODULE_TYPE, () => ({}));

		applyCssGeneratorOptionsDefaults(
			/** @type {NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE]>} */
			(module.generator[CSS_MODULE_TYPE]),
			{ targetProperties }
		);

		const localIdentName =
			mode === "development"
				? uniqueName.length > 0
					? "[uniqueName]-[id]-[local]"
					: "[id]-[local]"
				: "[fullhash]";
		const localIdentHashSalt = hashSalt;
		const localIdentHashDigest = "base64url";
		const localIdentHashDigestLength = 6;
		const exportsConvention = "as-is";

		for (const type of [
			CSS_MODULE_TYPE_AUTO,
			CSS_MODULE_TYPE_MODULE,
			CSS_MODULE_TYPE_GLOBAL
		]) {
			F(module.generator, type, () => ({}));

			D(
				/** @type {NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_AUTO]> | NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]> | NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_GLOBAL]>} */
				(module.generator[type]),
				"localIdentName",
				localIdentName
			);

			D(
				/** @type {NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_AUTO]> | NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]> | NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_GLOBAL]>} */
				(module.generator[type]),
				"localIdentHashSalt",
				localIdentHashSalt
			);

			D(
				/** @type {NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_AUTO]> | NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]> | NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]>} */
				(module.generator[type]),
				"localIdentHashFunction",
				hashFunction
			);

			D(
				/** @type {NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_AUTO]> | NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]> | NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]>} */
				(module.generator[type]),
				"localIdentHashDigest",
				localIdentHashDigest
			);

			D(
				/** @type {NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_AUTO]> | NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]> | NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]>} */
				(module.generator[type]),
				"localIdentHashDigestLength",
				localIdentHashDigestLength
			);

			D(
				/** @type {NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_AUTO]> | NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_MODULE]> | NonNullable<GeneratorOptionsByModuleTypeKnown[CSS_MODULE_TYPE_GLOBAL]>} */
				(module.generator[type]),
				"exportsConvention",
				exportsConvention
			);
		}
	}

	A(module, "defaultRules", () => {
		const esm = {
			type: JAVASCRIPT_MODULE_TYPE_ESM,
			resolve: {
				byDependency: {
					esm: {
						fullySpecified: true
					}
				}
			}
		};
		const commonjs = {
			type: JAVASCRIPT_MODULE_TYPE_DYNAMIC
		};
		/** @type {RuleSetRules} */
		const rules = [
			{
				mimetype: "application/node",
				type: JAVASCRIPT_MODULE_TYPE_AUTO
			},
			{
				test: /\.json$/i,
				type: JSON_MODULE_TYPE
			},
			{
				mimetype: "application/json",
				type: JSON_MODULE_TYPE
			},
			{
				test: /\.mjs$/i,
				...esm
			},
			{
				test: /\.js$/i,
				descriptionData: {
					type: "module"
				},
				...esm
			},
			{
				test: /\.cjs$/i,
				...commonjs
			},
			{
				test: /\.js$/i,
				descriptionData: {
					type: "commonjs"
				},
				...commonjs
			},
			{
				mimetype: {
					or: ["text/javascript", "application/javascript"]
				},
				...esm
			}
		];
		if (asyncWebAssembly) {
			const wasm = {
				type: WEBASSEMBLY_MODULE_TYPE_ASYNC,
				rules: [
					{
						descriptionData: {
							type: "module"
						},
						resolve: {
							fullySpecified: true
						}
					}
				]
			};
			rules.push({
				test: /\.wasm$/i,
				...wasm
			});
			rules.push({
				mimetype: "application/wasm",
				...wasm
			});
		} else if (syncWebAssembly) {
			const wasm = {
				type: WEBASSEMBLY_MODULE_TYPE_SYNC,
				rules: [
					{
						descriptionData: {
							type: "module"
						},
						resolve: {
							fullySpecified: true
						}
					}
				]
			};
			rules.push({
				test: /\.wasm$/i,
				...wasm
			});
			rules.push({
				mimetype: "application/wasm",
				...wasm
			});
		}
		if (css) {
			const resolve = {
				fullySpecified: true,
				preferRelative: true
			};
			rules.push({
				test: /\.css$/i,
				type: CSS_MODULE_TYPE_AUTO,
				resolve
			});
			rules.push({
				mimetype: "text/css+module",
				type: CSS_MODULE_TYPE_MODULE,
				resolve
			});
			rules.push({
				mimetype: "text/css",
				type: CSS_MODULE_TYPE,
				resolve
			});
			// For CSS modules, i.e. `.class { composes: className from "./style.css" }`
			// We inherit for such constructions
			rules.push({
				dependency: /css-import-local-module/,
				type: CSS_MODULE_TYPE_MODULE,
				resolve
			});
			rules.push({
				dependency: /css-import-global-module/,
				type: CSS_MODULE_TYPE_GLOBAL,
				resolve
			});

			rules.push(
				{
					with: { type: "css" },
					parser: {
						exportType: "css-style-sheet"
					},
					resolve
				},
				{
					assert: { type: "css" },
					parser: {
						exportType: "css-style-sheet"
					},
					resolve
				}
			);
		}
		rules.push(
			{
				dependency: "url",
				oneOf: [
					{
						scheme: /^data$/,
						type: ASSET_MODULE_TYPE_INLINE
					},
					{
						type: ASSET_MODULE_TYPE_RESOURCE
					}
				]
			},
			{
				with: { type: JSON_MODULE_TYPE },
				type: JSON_MODULE_TYPE,
				parser: { namedExports: false }
			},
			{
				assert: { type: JSON_MODULE_TYPE },
				type: JSON_MODULE_TYPE,
				parser: { namedExports: false }
			},
			{
				with: { type: "text" },
				type: ASSET_MODULE_TYPE_SOURCE
			},
			{
				with: { type: "bytes" },
				type: ASSET_MODULE_TYPE_BYTES
			}
		);
		return rules;
	});
};

/**
 * Apply output defaults.
 * @param {Output} output options
 * @param {object} options options
 * @param {string} options.context context
 * @param {TargetProperties | false} options.targetProperties target properties
 * @param {boolean} options.isAffectedByBrowserslist is affected by browserslist
 * @param {boolean} options.outputModule is outputModule experiment enabled
 * @param {boolean} options.development is development mode
 * @param {Entry} options.entry entry option
 * @param {boolean} options.futureDefaults is future defaults enabled
 * @param {boolean} options.asyncWebAssembly is asyncWebAssembly enabled
 * @returns {void}
 */
const applyOutputDefaults = (
	output,
	{
		context,
		targetProperties: tp,
		isAffectedByBrowserslist,
		outputModule,
		development,
		entry,
		futureDefaults,
		asyncWebAssembly
	}
) => {
	/**
	 * Returns a readable library name.
	 * @param {Library=} library the library option
	 * @returns {string} a readable library name
	 */
	const getLibraryName = (library) => {
		const libraryName =
			typeof library === "object" &&
			library &&
			!Array.isArray(library) &&
			"type" in library
				? library.name
				: /** @type {LibraryName} */ (library);
		if (Array.isArray(libraryName)) {
			return libraryName.join(".");
		} else if (typeof libraryName === "object") {
			return getLibraryName(libraryName.root);
		} else if (typeof libraryName === "string") {
			return libraryName;
		}
		return "";
	};

	F(output, "uniqueName", () => {
		const libraryName = getLibraryName(output.library).replace(
			/^\[(\\*[\w:]+\\*)\](\.)|(\.)\[(\\*[\w:]+\\*)\](?=\.|$)|\[(\\*[\w:]+\\*)\]/g,
			(m, a, d1, d2, b, c) => {
				const content = a || b || c;
				return content.startsWith("\\") && content.endsWith("\\")
					? `${d2 || ""}[${content.slice(1, -1)}]${d1 || ""}`
					: "";
			}
		);
		if (libraryName) return libraryName;
		const pkgPath = path.resolve(context, "package.json");
		try {
			const packageInfo = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
			return packageInfo.name || "";
		} catch (err) {
			if (/** @type {Error & { code: string }} */ (err).code !== "ENOENT") {
				/** @type {Error & { code: string }} */
				(err).message +=
					`\nwhile determining default 'output.uniqueName' from 'name' in ${pkgPath}`;
				throw err;
			}
			return "";
		}
	});

	F(output, "module", () => Boolean(outputModule));

	const environment = /** @type {Environment} */ (output.environment);
	/**
	 * Returns true, when v is truthy or undefined.
	 * @param {boolean | undefined} v value
	 * @returns {boolean} true, when v is truthy or undefined
	 */
	const optimistic = (v) => v || v === undefined;
	/**
	 * Conditionally optimistic.
	 * @param {boolean | undefined} v value
	 * @param {boolean | undefined} c condition
	 * @returns {boolean | undefined} true, when v is truthy or undefined, or c is truthy
	 */
	const conditionallyOptimistic = (v, c) => (v === undefined && c) || v;

	F(
		environment,
		"globalThis",
		() => /** @type {boolean | undefined} */ (tp && tp.globalThis)
	);
	F(
		environment,
		"bigIntLiteral",
		() =>
			tp && optimistic(/** @type {boolean | undefined} */ (tp.bigIntLiteral))
	);
	F(
		environment,
		"const",
		() => tp && optimistic(/** @type {boolean | undefined} */ (tp.const))
	);
	F(
		environment,
		"methodShorthand",
		() =>
			tp && optimistic(/** @type {boolean | undefined} */ (tp.methodShorthand))
	);
	F(
		environment,
		"arrowFunction",
		() =>
			tp && optimistic(/** @type {boolean | undefined} */ (tp.arrowFunction))
	);
	F(
		environment,
		"asyncFunction",
		() =>
			tp && optimistic(/** @type {boolean | undefined} */ (tp.asyncFunction))
	);
	F(
		environment,
		"forOf",
		() => tp && optimistic(/** @type {boolean | undefined} */ (tp.forOf))
	);
	F(
		environment,
		"destructuring",
		() =>
			tp && optimistic(/** @type {boolean | undefined} */ (tp.destructuring))
	);
	F(
		environment,
		"optionalChaining",
		() =>
			tp && optimistic(/** @type {boolean | undefined} */ (tp.optionalChaining))
	);
	F(
		environment,
		"nodePrefixForCoreModules",
		() =>
			tp &&
			optimistic(
				/** @type {boolean | undefined} */ (tp.nodePrefixForCoreModules)
			)
	);
	F(
		environment,
		"importMetaDirnameAndFilename",
		() =>
			// No optimistic, because it is new
			tp && /** @type {boolean | undefined} */ (tp.importMetaDirnameAndFilename)
	);
	F(
		environment,
		"templateLiteral",
		() =>
			tp && optimistic(/** @type {boolean | undefined} */ (tp.templateLiteral))
	);
	F(environment, "dynamicImport", () =>
		conditionallyOptimistic(
			/** @type {boolean | undefined} */ (tp && tp.dynamicImport),
			output.module
		)
	);
	F(environment, "dynamicImportInWorker", () =>
		conditionallyOptimistic(
			/** @type {boolean | undefined} */ (tp && tp.dynamicImportInWorker),
			output.module
		)
	);
	F(environment, "module", () =>
		conditionallyOptimistic(
			/** @type {boolean | undefined} */ (tp && tp.module),
			output.module
		)
	);
	F(
		environment,
		"document",
		() => tp && optimistic(/** @type {boolean | undefined} */ (tp.document))
	);

	D(output, "filename", output.module ? "[name].mjs" : "[name].js");
	F(output, "iife", () => !output.module);
	D(output, "importFunctionName", "import");
	D(output, "importMetaName", "import.meta");
	F(output, "chunkFilename", () => {
		const filename =
			/** @type {NonNullable<Output["chunkFilename"]>} */
			(output.filename);
		if (typeof filename !== "function") {
			const hasName = filename.includes("[name]");
			const hasId = filename.includes("[id]");
			const hasChunkHash = filename.includes("[chunkhash]");
			const hasContentHash = filename.includes("[contenthash]");
			// Anything changing depending on chunk is fine
			if (hasChunkHash || hasContentHash || hasName || hasId) return filename;
			// Otherwise prefix "[id]." in front of the basename to make it changing
			return filename.replace(/(^|\/)([^/]*(?:\?|$))/, "$1[id].$2");
		}
		return output.module ? "[id].mjs" : "[id].js";
	});
	F(output, "cssFilename", () => {
		const filename =
			/** @type {NonNullable<Output["cssFilename"]>} */
			(output.filename);
		if (typeof filename !== "function") {
			return filename.replace(/\.[mc]?js(\?|$)/, ".css$1");
		}
		return "[id].css";
	});
	F(output, "cssChunkFilename", () => {
		const chunkFilename =
			/** @type {NonNullable<Output["cssChunkFilename"]>} */
			(output.chunkFilename);
		if (typeof chunkFilename !== "function") {
			return chunkFilename.replace(/\.[mc]?js(\?|$)/, ".css$1");
		}
		return "[id].css";
	});
	D(output, "assetModuleFilename", "[hash][ext][query][fragment]");
	D(output, "webassemblyModuleFilename", "[hash].module.wasm");
	D(output, "compareBeforeEmit", true);
	D(output, "charset", !futureDefaults);
	const uniqueNameId = Template.toIdentifier(
		/** @type {NonNullable<Output["uniqueName"]>} */ (output.uniqueName)
	);
	F(output, "hotUpdateGlobal", () => `webpackHotUpdate${uniqueNameId}`);
	F(output, "chunkLoadingGlobal", () => `webpackChunk${uniqueNameId}`);
	F(output, "globalObject", () => {
		if (tp) {
			if (tp.global) return "global";
			if (tp.globalThis) return "globalThis";
			// For universal target (i.e. code can be run in browser/node/worker etc.)
			if (tp.web === null && tp.node === null && tp.module) return "globalThis";
		}
		return "self";
	});
	F(output, "chunkFormat", () => {
		if (tp) {
			const helpMessage = isAffectedByBrowserslist
				? "Make sure that your 'browserslist' includes only platforms that support these features or select an appropriate 'target' to allow selecting a chunk format by default. Alternatively specify the 'output.chunkFormat' directly."
				: "Select an appropriate 'target' to allow selecting one by default, or specify the 'output.chunkFormat' directly.";
			if (output.module) {
				if (environment.dynamicImport) return "module";
				if (tp.document) return "array-push";
				throw new Error(
					"For the selected environment is no default ESM chunk format available:\n" +
						"ESM exports can be chosen when 'import()' is available.\n" +
						`JSONP Array push can be chosen when 'document' is available.\n${helpMessage}`
				);
			} else {
				if (tp.document) return "array-push";
				if (tp.require) return "commonjs";
				if (tp.nodeBuiltins) return "commonjs";
				if (tp.importScripts) return "array-push";
				throw new Error(
					"For the selected environment is no default script chunk format available:\n" +
						`${
							tp.module
								? "Module ('module') can be chosen when ES modules are available (please set 'experiments.outputModule' and 'output.module' to `true`)"
								: ""
						}\n` +
						"JSONP Array push ('array-push') can be chosen when 'document' or 'importScripts' is available.\n" +
						`CommonJs exports ('commonjs') can be chosen when 'require' or node builtins are available.\n${helpMessage}`
				);
			}
		}
		throw new Error(
			"Chunk format can't be selected by default when no target is specified"
		);
	});
	D(output, "asyncChunks", true);
	F(output, "chunkLoading", () => {
		if (tp) {
			switch (output.chunkFormat) {
				case "array-push":
					if (tp.document) return "jsonp";
					if (tp.importScripts) return "import-scripts";
					break;
				case "commonjs":
					if (tp.require) return "require";
					if (tp.nodeBuiltins) return "async-node";
					break;
				case "module":
					if (environment.dynamicImport) return "import";
					break;
			}
			if (
				(tp.require === null ||
					tp.nodeBuiltins === null ||
					tp.document === null ||
					tp.importScripts === null) &&
				output.module &&
				environment.dynamicImport
			) {
				return "import";
			}
		}
		return false;
	});
	F(output, "workerChunkLoading", () => {
		if (tp) {
			switch (output.chunkFormat) {
				case "array-push":
					if (tp.importScriptsInWorker) return "import-scripts";
					break;
				case "commonjs":
					if (tp.require) return "require";
					if (tp.nodeBuiltins) return "async-node";
					break;
				case "module":
					if (environment.dynamicImportInWorker) return "import";
					break;
			}
			if (
				(tp.require === null ||
					tp.nodeBuiltins === null ||
					tp.importScriptsInWorker === null) &&
				output.module &&
				environment.dynamicImportInWorker
			) {
				return "import";
			}
		}
		return false;
	});
	F(output, "wasmLoading", () => {
		if (tp) {
			if (tp.fetchWasm) return "fetch";
			if (tp.nodeBuiltins) return "async-node";
			if (
				(tp.nodeBuiltins === null || tp.fetchWasm === null) &&
				output.module &&
				environment.dynamicImport
			) {
				return "universal";
			}
		}
		return false;
	});
	F(output, "workerWasmLoading", () => output.wasmLoading);
	F(output, "devtoolNamespace", () => output.uniqueName);
	if (output.library) {
		F(output.library, "type", () => (output.module ? "module" : "var"));
	}
	F(output, "path", () => path.join(process.cwd(), "dist"));
	F(output, "pathinfo", () => development);
	D(output, "sourceMapFilename", "[file].map[query]");
	D(
		output,
		"hotUpdateChunkFilename",
		`[id].[fullhash].hot-update.${output.module ? "mjs" : "js"}`
	);
	D(
		output,
		"hotUpdateMainFilename",
		`[runtime].[fullhash].hot-update.${output.module ? "json.mjs" : "json"}`
	);
	D(output, "crossOriginLoading", false);
	F(output, "scriptType", () => (output.module ? "module" : false));
	D(
		output,
		"publicPath",
		(tp && (tp.document || tp.importScripts)) || output.scriptType === "module"
			? "auto"
			: ""
	);
	D(output, "workerPublicPath", "");
	D(output, "chunkLoadTimeout", 120000);
	F(output, "hashFunction", () => {
		if (futureDefaults) {
			DEFAULTS.HASH_FUNCTION = "xxhash64";
			return "xxhash64";
		}

		return "md4";
	});
	D(output, "hashDigest", "hex");
	D(output, "hashDigestLength", futureDefaults ? 16 : 20);
	D(output, "strictModuleErrorHandling", false);
	D(output, "strictModuleExceptionHandling", false);

	const { trustedTypes } = output;
	if (trustedTypes) {
		F(
			trustedTypes,
			"policyName",
			() =>
				/** @type {NonNullable<Output["uniqueName"]>} */
				(output.uniqueName).replace(/[^a-z0-9\-#=_/@.%]+/gi, "_") || "webpack"
		);
		D(trustedTypes, "onPolicyCreationFailure", "stop");
	}

	/**
	 * Processes the provided fn.
	 * @param {(entryDescription: EntryDescription) => void} fn iterator
	 * @returns {void}
	 */
	const forEachEntry = (fn) => {
		for (const name of Object.keys(entry)) {
			fn(/** @type {{ [k: string]: EntryDescription }} */ (entry)[name]);
		}
	};
	A(output, "enabledLibraryTypes", () => {
		/** @type {LibraryType[]} */
		const enabledLibraryTypes = [];
		if (output.library) {
			enabledLibraryTypes.push(output.library.type);
		}
		forEachEntry((desc) => {
			if (desc.library) {
				enabledLibraryTypes.push(desc.library.type);
			}
		});
		return enabledLibraryTypes;
	});

	A(output, "enabledChunkLoadingTypes", () => {
		/** @type {ChunkLoadingTypes} */
		const enabledChunkLoadingTypes = new Set();
		if (output.chunkLoading) {
			enabledChunkLoadingTypes.add(output.chunkLoading);
		}
		if (output.workerChunkLoading) {
			enabledChunkLoadingTypes.add(output.workerChunkLoading);
		}
		forEachEntry((desc) => {
			if (desc.chunkLoading) {
				enabledChunkLoadingTypes.add(desc.chunkLoading);
			}
		});
		return [...enabledChunkLoadingTypes];
	});

	A(output, "enabledWasmLoadingTypes", () => {
		/** @type {WasmLoadingTypes} */
		const enabledWasmLoadingTypes = new Set();
		if (output.wasmLoading) {
			enabledWasmLoadingTypes.add(output.wasmLoading);
		}
		if (output.workerWasmLoading) {
			enabledWasmLoadingTypes.add(output.workerWasmLoading);
		}
		forEachEntry((desc) => {
			if (desc.wasmLoading) {
				enabledWasmLoadingTypes.add(desc.wasmLoading);
			}
		});
		return [...enabledWasmLoadingTypes];
	});
};

/**
 * Apply externals presets defaults.
 * @param {ExternalsPresets} externalsPresets options
 * @param {object} options options
 * @param {TargetProperties | false} options.targetProperties target properties
 * @param {boolean} options.buildHttp buildHttp experiment enabled
 * @param {boolean} options.outputModule is output type is module
 * @returns {void}
 */
const applyExternalsPresetsDefaults = (
	externalsPresets,
	{ targetProperties, buildHttp, outputModule }
) => {
	/**
	 * Checks whether this object is universal.
	 * @param {keyof TargetProperties} key a key
	 * @returns {boolean} true when target is universal, otherwise false
	 */
	const isUniversal = (key) =>
		Boolean(outputModule && targetProperties && targetProperties[key] === null);

	D(
		externalsPresets,
		"web",
		/** @type {boolean | undefined} */
		(
			!buildHttp &&
				targetProperties &&
				(targetProperties.web || isUniversal("node"))
		)
	);
	D(
		externalsPresets,
		"node",
		/** @type {boolean | undefined} */
		(targetProperties && (targetProperties.node || isUniversal("node")))
	);
	D(
		externalsPresets,
		"nwjs",
		/** @type {boolean | undefined} */
		(targetProperties && (targetProperties.nwjs || isUniversal("nwjs")))
	);
	D(
		externalsPresets,
		"electron",
		/** @type {boolean | undefined} */
		((targetProperties && targetProperties.electron) || isUniversal("electron"))
	);
	D(
		externalsPresets,
		"electronMain",
		/** @type {boolean | undefined} */
		(
			targetProperties &&
				targetProperties.electron &&
				(targetProperties.electronMain || isUniversal("electronMain"))
		)
	);
	D(
		externalsPresets,
		"electronPreload",
		/** @type {boolean | undefined} */
		(
			targetProperties &&
				targetProperties.electron &&
				(targetProperties.electronPreload || isUniversal("electronPreload"))
		)
	);
	D(
		externalsPresets,
		"electronRenderer",
		/** @type {boolean | undefined} */
		(
			targetProperties &&
				targetProperties.electron &&
				(targetProperties.electronRenderer || isUniversal("electronRenderer"))
		)
	);
};

/**
 * Apply loader defaults.
 * @param {Loader} loader options
 * @param {object} options options
 * @param {TargetProperties | false} options.targetProperties target properties
 * @param {Environment} options.environment environment
 * @returns {void}
 */
const applyLoaderDefaults = (loader, { targetProperties, environment }) => {
	F(loader, "target", () => {
		if (targetProperties) {
			if (targetProperties.electron) {
				if (targetProperties.electronMain) return "electron-main";
				if (targetProperties.electronPreload) return "electron-preload";
				if (targetProperties.electronRenderer) return "electron-renderer";
				return "electron";
			}
			if (targetProperties.nwjs) return "nwjs";
			if (targetProperties.node) return "node";
			if (targetProperties.web) return "web";
		}
	});
	D(loader, "environment", environment);
};

/**
 * Apply node defaults.
 * @param {WebpackNode} node options
 * @param {object} options options
 * @param {TargetProperties | false} options.targetProperties target properties
 * @param {boolean} options.futureDefaults is future defaults enabled
 * @param {boolean} options.outputModule is output type is module
 * @returns {void}
 */
const applyNodeDefaults = (
	node,
	{ futureDefaults, outputModule, targetProperties }
) => {
	if (node === false) return;

	F(node, "global", () => {
		if (targetProperties && targetProperties.global) return false;
		// We use `warm` because overriding `global` with `globalThis` (or a polyfill) is sometimes safe (global.URL), sometimes unsafe (global.process), but we need to warn about it
		return futureDefaults ? "warn" : true;
	});

	const handlerForNames = () => {
		// TODO webpack@6 remove `node-module` in favor of `eval-only`
		if (targetProperties) {
			if (targetProperties.node) {
				return "eval-only";
			}

			// For the "universal" target we only evaluate these values
			if (
				outputModule &&
				targetProperties.node === null &&
				targetProperties.web === null
			) {
				return "eval-only";
			}
		}

		// TODO webpack@6 should we use `warn-even-only`?
		return futureDefaults ? "warn-mock" : "mock";
	};

	F(node, "__filename", handlerForNames);
	F(node, "__dirname", handlerForNames);
};

/**
 * Apply performance defaults.
 * @param {Performance} performance options
 * @param {object} options options
 * @param {boolean} options.production is production
 * @returns {void}
 */
const applyPerformanceDefaults = (performance, { production }) => {
	if (performance === false) return;
	D(performance, "maxAssetSize", 250000);
	D(performance, "maxEntrypointSize", 250000);
	F(performance, "hints", () => (production ? "warning" : false));
};

/**
 * Apply optimization defaults.
 * @param {Optimization} optimization options
 * @param {object} options options
 * @param {boolean} options.production is production
 * @param {boolean} options.development is development
 * @param {boolean} options.css is css enabled
 * @param {boolean} options.records using records
 * @returns {void}
 */
const applyOptimizationDefaults = (
	optimization,
	{ production, development, css, records }
) => {
	D(optimization, "removeAvailableModules", false);
	D(optimization, "removeEmptyChunks", true);
	D(optimization, "mergeDuplicateChunks", true);
	D(optimization, "flagIncludedChunks", production);
	F(optimization, "moduleIds", () => {
		if (production) return "deterministic";
		if (development) return "named";
		return "natural";
	});
	F(optimization, "chunkIds", () => {
		if (production) return "deterministic";
		if (development) return "named";
		return "natural";
	});
	F(optimization, "sideEffects", () => (production ? true : "flag"));
	D(optimization, "providedExports", true);
	D(optimization, "usedExports", production);
	D(optimization, "innerGraph", production);
	D(optimization, "mangleExports", production);
	D(optimization, "concatenateModules", production);
	D(optimization, "avoidEntryIife", production);
	D(optimization, "runtimeChunk", false);
	D(optimization, "emitOnErrors", !production);
	D(optimization, "checkWasmTypes", production);
	D(optimization, "mangleWasmImports", false);
	D(optimization, "portableRecords", records);
	D(optimization, "realContentHash", production);
	D(optimization, "minimize", production);
	A(optimization, "minimizer", () => [
		{
			apply: (compiler) => {
				// Lazy load the Terser plugin
				const TerserPlugin = require("terser-webpack-plugin");

				new TerserPlugin({
					terserOptions: {
						compress: {
							passes: 2
						}
					}
				}).apply(/** @type {EXPECTED_ANY} */ (compiler));
			}
		}
	]);
	F(optimization, "nodeEnv", () => {
		if (production) return "production";
		if (development) return "development";
		return false;
	});
	const { splitChunks } = optimization;
	if (splitChunks) {
		A(splitChunks, "defaultSizeTypes", () =>
			css
				? [JAVASCRIPT_TYPE, CSS_TYPE, UNKNOWN_TYPE]
				: [JAVASCRIPT_TYPE, UNKNOWN_TYPE]
		);
		D(splitChunks, "hidePathInfo", production);
		D(splitChunks, "chunks", "async");
		D(splitChunks, "usedExports", optimization.usedExports === true);
		D(splitChunks, "minChunks", 1);
		F(splitChunks, "minSize", () => (production ? 20000 : 10000));
		F(splitChunks, "minRemainingSize", () => (development ? 0 : undefined));
		F(splitChunks, "enforceSizeThreshold", () => (production ? 50000 : 30000));
		F(splitChunks, "maxAsyncRequests", () => (production ? 30 : Infinity));
		F(splitChunks, "maxInitialRequests", () => (production ? 30 : Infinity));
		D(splitChunks, "automaticNameDelimiter", "-");
		const cacheGroups =
			/** @type {NonNullable<OptimizationSplitChunksOptions["cacheGroups"]>} */
			(splitChunks.cacheGroups);
		F(cacheGroups, "default", () => ({
			idHint: "",
			reuseExistingChunk: true,
			minChunks: 2,
			priority: -20
		}));
		F(cacheGroups, "defaultVendors", () => ({
			idHint: "vendors",
			reuseExistingChunk: true,
			test: NODE_MODULES_REGEXP,
			priority: -10
		}));
	}
};

/**
 * Gets resolve defaults.
 * @param {object} options options
 * @param {boolean} options.cache is cache enable
 * @param {string} options.context build context
 * @param {TargetProperties | false} options.targetProperties target properties
 * @param {Mode} options.mode mode
 * @param {boolean} options.css is css enabled
 * @returns {ResolveOptions} resolve options
 */
const getResolveDefaults = ({
	cache,
	context,
	targetProperties,
	mode,
	css
}) => {
	/** @type {string[]} */
	const conditions = ["webpack"];

	conditions.push(mode === "development" ? "development" : "production");

	if (targetProperties) {
		if (targetProperties.webworker) conditions.push("worker");
		if (targetProperties.node) conditions.push("node");
		if (targetProperties.web) conditions.push("browser");
		if (targetProperties.electron) conditions.push("electron");
		if (targetProperties.nwjs) conditions.push("nwjs");
	}

	const jsExtensions = [".js", ".json", ".wasm"];

	const tp = targetProperties;
	const browserField =
		tp && tp.web && (!tp.node || (tp.electron && tp.electronRenderer));

	/** @type {() => ResolveOptions} */
	const cjsDeps = () => ({
		aliasFields: browserField ? ["browser"] : [],
		mainFields: browserField ? ["browser", "module", "..."] : ["module", "..."],
		conditionNames: ["require", "module", "..."],
		extensions: [...jsExtensions]
	});
	/** @type {() => ResolveOptions} */
	const esmDeps = () => ({
		aliasFields: browserField ? ["browser"] : [],
		mainFields: browserField ? ["browser", "module", "..."] : ["module", "..."],
		conditionNames: ["import", "module", "..."],
		extensions: [...jsExtensions]
	});

	/** @type {() => ResolveOptions} */
	const workerDeps = () => {
		const options = esmDeps();

		const conditionNames = options.conditionNames
			? ["worker", ...options.conditionNames]
			: options.conditionNames;
		return {
			...options,
			conditionNames,
			preferRelative: true
		};
	};

	/** @type {ResolveOptions} */
	const resolveOptions = {
		cache,
		modules: ["node_modules"],
		conditionNames: conditions,
		mainFiles: ["index"],
		extensions: [],
		aliasFields: [],
		exportsFields: ["exports"],
		roots: [context],
		mainFields: ["main"],
		importsFields: ["imports"],
		byDependency: {
			wasm: esmDeps(),
			esm: esmDeps(),
			loaderImport: esmDeps(),
			url: {
				preferRelative: true
			},
			worker: workerDeps(),
			commonjs: cjsDeps(),
			amd: cjsDeps(),
			// for backward-compat: loadModule
			loader: cjsDeps(),
			// for backward-compat: Custom Dependency
			unknown: cjsDeps(),
			// for backward-compat: getResolve without dependencyType
			undefined: cjsDeps()
		}
	};

	if (css) {
		/** @type {string[]} */
		const styleConditions = [];

		styleConditions.push("webpack");
		styleConditions.push(mode === "development" ? "development" : "production");
		styleConditions.push("style");

		/** @type {ResolveOptions} */
		const cssResolveOptions = {
			// We avoid using any main files because we have to be consistent with CSS `@import`
			// and CSS `@import` does not handle `main` files in directories,
			// you should always specify the full URL for styles
			mainFiles: [],
			mainFields: ["style", "..."],
			conditionNames: styleConditions,
			extensions: [".css"],
			preferRelative: true
		};

		/** @type {NonNullable<ResolveOptions["byDependency"]>} */
		(resolveOptions.byDependency)["css-import"] = cssResolveOptions;
		// For CSS modules, i.e. `.class { composes: className from "./style.css" }`
		// We inherit for such constructions
		/** @type {NonNullable<ResolveOptions["byDependency"]>} */
		(resolveOptions.byDependency)["css-import-local-module"] =
			cssResolveOptions;
		/** @type {NonNullable<ResolveOptions["byDependency"]>} */
		(resolveOptions.byDependency)["css-import-global-module"] =
			cssResolveOptions;
	}

	return resolveOptions;
};

/**
 * Gets resolve loader defaults.
 * @param {object} options options
 * @param {boolean} options.cache is cache enable
 * @returns {ResolveOptions} resolve options
 */
const getResolveLoaderDefaults = ({ cache }) => {
	/** @type {ResolveOptions} */
	const resolveOptions = {
		cache,
		conditionNames: ["loader", "require", "node"],
		exportsFields: ["exports"],
		mainFields: ["loader", "main"],
		extensions: [".js"],
		mainFiles: ["index"]
	};

	return resolveOptions;
};

/**
 * Apply infrastructure logging defaults.
 * @param {InfrastructureLogging} infrastructureLogging options
 * @returns {void}
 */
const applyInfrastructureLoggingDefaults = (infrastructureLogging) => {
	F(infrastructureLogging, "stream", () => process.stderr);
	const tty =
		/** @type {NonNullable<InfrastructureLogging["stream"]>} */
		(infrastructureLogging.stream).isTTY && process.env.TERM !== "dumb";
	D(infrastructureLogging, "level", "info");
	D(infrastructureLogging, "debug", false);
	D(infrastructureLogging, "colors", tty);
	D(infrastructureLogging, "appendOnly", !tty);
};

module.exports.DEFAULTS = DEFAULTS;
module.exports.applyWebpackOptionsBaseDefaults =
	applyWebpackOptionsBaseDefaults;
module.exports.applyWebpackOptionsDefaults = applyWebpackOptionsDefaults;
