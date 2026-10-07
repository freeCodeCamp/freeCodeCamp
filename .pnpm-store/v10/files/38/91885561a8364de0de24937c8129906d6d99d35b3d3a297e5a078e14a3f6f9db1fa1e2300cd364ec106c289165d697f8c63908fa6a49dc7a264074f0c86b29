/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");

/** @typedef {import("../../declarations/WebpackOptions").CacheOptionsNormalized} CacheOptions */
/** @typedef {import("../../declarations/WebpackOptions").EntryDescriptionNormalized} EntryDescriptionNormalized */
/** @typedef {import("../../declarations/WebpackOptions").EntryStatic} EntryStatic */
/** @typedef {import("../../declarations/WebpackOptions").EntryStaticNormalized} EntryStaticNormalized */
/** @typedef {import("../../declarations/WebpackOptions").Externals} Externals */
/** @typedef {import("../../declarations/WebpackOptions").LibraryName} LibraryName */
/** @typedef {import("../../declarations/WebpackOptions").LibraryOptions} LibraryOptions */
/** @typedef {import("../../declarations/WebpackOptions").ModuleOptionsNormalized} ModuleOptionsNormalized */
/** @typedef {import("../../declarations/WebpackOptions").OptimizationNormalized} OptimizationNormalized */
/** @typedef {import("../../declarations/WebpackOptions").OptimizationRuntimeChunk} OptimizationRuntimeChunk */
/** @typedef {import("../../declarations/WebpackOptions").OptimizationRuntimeChunkNormalized} OptimizationRuntimeChunkNormalized */
/** @typedef {import("../../declarations/WebpackOptions").OutputNormalized} OutputNormalized */
/** @typedef {import("../../declarations/WebpackOptions").PluginsNormalized} PluginsNormalized */
/** @typedef {import("../../declarations/WebpackOptions").WebpackOptions} WebpackOptions */
/** @typedef {import("../../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptionsNormalized */
/** @typedef {import("../WebpackError")} WebpackError */

/**
 * Defines the webpack options interception type used by this module.
 * @typedef {object} WebpackOptionsInterception
 * @property {WebpackOptionsNormalized["devtool"]=} devtool
 */

const handledDeprecatedNoEmitOnErrors = util.deprecate(
	/**
	 * Handles the callback logic for this hook.
	 * @param {boolean} noEmitOnErrors no emit on errors
	 * @param {boolean | undefined} emitOnErrors emit on errors
	 * @returns {boolean} emit on errors
	 */
	(noEmitOnErrors, emitOnErrors) => {
		if (emitOnErrors !== undefined && !noEmitOnErrors === !emitOnErrors) {
			throw new Error(
				"Conflicting use of 'optimization.noEmitOnErrors' and 'optimization.emitOnErrors'. Remove deprecated 'optimization.noEmitOnErrors' from config."
			);
		}
		return !noEmitOnErrors;
	},
	"optimization.noEmitOnErrors is deprecated in favor of optimization.emitOnErrors",
	"DEP_WEBPACK_CONFIGURATION_OPTIMIZATION_NO_EMIT_ON_ERRORS"
);

/**
 * Returns result value.
 * @template T
 * @template R
 * @param {T | undefined} value value or not
 * @param {(value: T) => R} fn nested handler
 * @returns {R} result value
 */
const nestedConfig = (value, fn) =>
	value === undefined ? fn(/** @type {T} */ ({})) : fn(value);

/**
 * Returns result value.
 * @template T
 * @param {T | undefined} value value or not
 * @returns {T} result value
 */
const cloneObject = (value) => /** @type {T} */ ({ ...value });
/**
 * Optional nested config.
 * @template T
 * @template R
 * @param {T | undefined} value value or not
 * @param {(value: T) => R} fn nested handler
 * @returns {R | undefined} result value
 */
const optionalNestedConfig = (value, fn) =>
	value === undefined ? undefined : fn(value);

/**
 * Returns cloned value.
 * @template T
 * @template R
 * @param {T[] | undefined} value array or not
 * @param {(value: T[]) => R[]} fn nested handler
 * @returns {R[] | undefined} cloned value
 */
const nestedArray = (value, fn) => (Array.isArray(value) ? fn(value) : fn([]));

/**
 * Optional nested array.
 * @template T
 * @template R
 * @param {T[] | undefined} value array or not
 * @param {(value: T[]) => R[]} fn nested handler
 * @returns {R[] | undefined} cloned value
 */
const optionalNestedArray = (value, fn) =>
	Array.isArray(value) ? fn(value) : undefined;

/**
 * Keyed nested config.
 * @template T
 * @template R
 * @param {Record<string, T> | undefined} value value or not
 * @param {(value: T) => R} fn nested handler
 * @param {Record<string, (value: T) => R>=} customKeys custom nested handler for some keys
 * @returns {Record<string, R>} result value
 */
const keyedNestedConfig = (value, fn, customKeys) => {
	/* eslint-disable no-sequences */
	const result =
		value === undefined
			? {}
			: Object.keys(value).reduce(
					(obj, key) => (
						(obj[key] = (
							customKeys && key in customKeys ? customKeys[key] : fn
						)(value[key])),
						obj
					),
					/** @type {Record<string, R>} */ ({})
				);
	/* eslint-enable no-sequences */
	if (customKeys) {
		for (const key of Object.keys(customKeys)) {
			if (!(key in result)) {
				result[key] = customKeys[key](/** @type {T} */ ({}));
			}
		}
	}
	return result;
};

/**
 * Gets normalized webpack options.
 * @param {WebpackOptions} config input config
 * @returns {WebpackOptionsNormalized} normalized options
 */
const getNormalizedWebpackOptions = (config) => ({
	amd: config.amd,
	bail: config.bail,
	cache:
		/** @type {NonNullable<CacheOptions>} */
		(
			optionalNestedConfig(config.cache, (cache) => {
				if (cache === false) return false;
				if (cache === true) {
					return {
						type: "memory",
						maxGenerations: undefined
					};
				}
				switch (cache.type) {
					case "filesystem":
						return {
							type: "filesystem",
							allowCollectingMemory: cache.allowCollectingMemory,
							maxMemoryGenerations: cache.maxMemoryGenerations,
							maxAge: cache.maxAge,
							profile: cache.profile,
							buildDependencies: cloneObject(cache.buildDependencies),
							cacheDirectory: cache.cacheDirectory,
							cacheLocation: cache.cacheLocation,
							hashAlgorithm: cache.hashAlgorithm,
							compression: cache.compression,
							idleTimeout: cache.idleTimeout,
							idleTimeoutForInitialStore: cache.idleTimeoutForInitialStore,
							idleTimeoutAfterLargeChanges: cache.idleTimeoutAfterLargeChanges,
							name: cache.name,
							store: cache.store,
							version: cache.version,
							readonly: cache.readonly
						};
					case undefined:
					case "memory":
						return {
							type: "memory",
							maxGenerations: cache.maxGenerations
						};
					default:
						// @ts-expect-error Property 'type' does not exist on type 'never'. ts(2339)
						throw new Error(`Not implemented cache.type ${cache.type}`);
				}
			})
		),
	context: config.context,
	dependencies: config.dependencies,
	devServer: optionalNestedConfig(config.devServer, (devServer) => {
		if (devServer === false) return false;
		return { ...devServer };
	}),
	devtool: config.devtool,
	dotenv: config.dotenv,
	entry:
		config.entry === undefined
			? { main: {} }
			: typeof config.entry === "function"
				? (
						(fn) => () =>
							Promise.resolve().then(fn).then(getNormalizedEntryStatic)
					)(config.entry)
				: getNormalizedEntryStatic(config.entry),
	experiments: nestedConfig(config.experiments, (experiments) => ({
		...experiments,
		buildHttp: optionalNestedConfig(experiments.buildHttp, (options) =>
			Array.isArray(options) ? { allowedUris: options } : options
		),
		lazyCompilation: optionalNestedConfig(
			experiments.lazyCompilation,
			(options) => (options === true ? {} : options)
		)
	})),
	externals: /** @type {NonNullable<Externals>} */ (config.externals),
	externalsPresets: cloneObject(config.externalsPresets),
	externalsType: config.externalsType,
	ignoreWarnings: config.ignoreWarnings
		? config.ignoreWarnings.map((ignore) => {
				if (typeof ignore === "function") return ignore;
				const i = ignore instanceof RegExp ? { message: ignore } : ignore;
				return (warning, { requestShortener }) => {
					if (!i.message && !i.module && !i.file) return false;
					if (i.message && !i.message.test(warning.message)) {
						return false;
					}
					if (
						i.module &&
						(!(/** @type {WebpackError} */ (warning).module) ||
							!i.module.test(
								/** @type {WebpackError} */
								(warning).module.readableIdentifier(requestShortener)
							))
					) {
						return false;
					}
					if (
						i.file &&
						(!(/** @type {WebpackError} */ (warning).file) ||
							!i.file.test(/** @type {WebpackError} */ (warning).file))
					) {
						return false;
					}
					return true;
				};
			})
		: undefined,
	infrastructureLogging: cloneObject(config.infrastructureLogging),
	loader: cloneObject(config.loader),
	mode: config.mode,
	module:
		/** @type {ModuleOptionsNormalized} */
		(
			nestedConfig(config.module, (module) => ({
				noParse: module.noParse,
				unsafeCache: module.unsafeCache,
				parser: keyedNestedConfig(module.parser, cloneObject, {
					javascript: (parserOptions) => ({
						// TODO webpack 6 remove from `ModuleOptions`, keep only `*ByModuleType`
						unknownContextRequest: module.unknownContextRequest,
						unknownContextRegExp: module.unknownContextRegExp,
						unknownContextRecursive: module.unknownContextRecursive,
						unknownContextCritical: module.unknownContextCritical,
						exprContextRequest: module.exprContextRequest,
						exprContextRegExp: module.exprContextRegExp,
						exprContextRecursive: module.exprContextRecursive,
						exprContextCritical: module.exprContextCritical,
						wrappedContextRegExp: module.wrappedContextRegExp,
						wrappedContextRecursive: module.wrappedContextRecursive,
						wrappedContextCritical: module.wrappedContextCritical,
						strictExportPresence: module.strictExportPresence,
						strictThisContextOnImports: module.strictThisContextOnImports,
						...parserOptions
					})
				}),
				generator: cloneObject(module.generator),
				defaultRules: optionalNestedArray(module.defaultRules, (r) => [...r]),
				rules: nestedArray(module.rules, (r) => [...r])
			}))
		),
	name: config.name,
	node: nestedConfig(
		config.node,
		(node) =>
			node && {
				...node
			}
	),
	optimization: nestedConfig(config.optimization, (optimization) => ({
		...optimization,
		runtimeChunk: getNormalizedOptimizationRuntimeChunk(
			optimization.runtimeChunk
		),
		splitChunks: nestedConfig(
			optimization.splitChunks,
			(splitChunks) =>
				splitChunks && {
					...splitChunks,
					defaultSizeTypes: splitChunks.defaultSizeTypes
						? [...splitChunks.defaultSizeTypes]
						: ["..."],
					cacheGroups: cloneObject(splitChunks.cacheGroups)
				}
		),
		minimizer:
			optimization.minimizer !== undefined
				? /** @type {OptimizationNormalized["minimizer"]} */ (
						nestedArray(optimization.minimizer, (p) => p.filter(Boolean))
					)
				: optimization.minimizer,
		emitOnErrors:
			optimization.noEmitOnErrors !== undefined
				? handledDeprecatedNoEmitOnErrors(
						optimization.noEmitOnErrors,
						optimization.emitOnErrors
					)
				: optimization.emitOnErrors
	})),
	output: nestedConfig(config.output, (output) => {
		const { library } = output;
		const libraryAsName = /** @type {LibraryName} */ (library);
		const libraryBase =
			typeof library === "object" &&
			library &&
			!Array.isArray(library) &&
			"type" in library
				? library
				: libraryAsName || output.libraryTarget
					? /** @type {LibraryOptions} */ ({
							name: libraryAsName
						})
					: undefined;
		/** @type {OutputNormalized} */
		const result = {
			assetModuleFilename: output.assetModuleFilename,
			asyncChunks: output.asyncChunks,
			charset: output.charset,
			chunkFilename: output.chunkFilename,
			chunkFormat: output.chunkFormat,
			chunkLoading: output.chunkLoading,
			chunkLoadingGlobal: output.chunkLoadingGlobal,
			chunkLoadTimeout: output.chunkLoadTimeout,
			cssFilename: output.cssFilename,
			cssChunkFilename: output.cssChunkFilename,
			clean: output.clean,
			compareBeforeEmit: output.compareBeforeEmit,
			crossOriginLoading: output.crossOriginLoading,
			devtoolFallbackModuleFilenameTemplate:
				output.devtoolFallbackModuleFilenameTemplate,
			devtoolModuleFilenameTemplate: output.devtoolModuleFilenameTemplate,
			devtoolNamespace: output.devtoolNamespace,
			environment: cloneObject(output.environment),
			enabledChunkLoadingTypes: output.enabledChunkLoadingTypes
				? [...output.enabledChunkLoadingTypes]
				: ["..."],
			enabledLibraryTypes: output.enabledLibraryTypes
				? [...output.enabledLibraryTypes]
				: ["..."],
			enabledWasmLoadingTypes: output.enabledWasmLoadingTypes
				? [...output.enabledWasmLoadingTypes]
				: ["..."],
			filename: output.filename,
			globalObject: output.globalObject,
			hashDigest: output.hashDigest,
			hashDigestLength: output.hashDigestLength,
			hashFunction: output.hashFunction,
			hashSalt: output.hashSalt,
			hotUpdateChunkFilename: output.hotUpdateChunkFilename,
			hotUpdateGlobal: output.hotUpdateGlobal,
			hotUpdateMainFilename: output.hotUpdateMainFilename,
			ignoreBrowserWarnings: output.ignoreBrowserWarnings,
			iife: output.iife,
			importFunctionName: output.importFunctionName,
			importMetaName: output.importMetaName,
			scriptType: output.scriptType,
			// TODO webpack 6 remove `libraryTarget`/`auxiliaryComment`/`amdContainer`/etc in favor of the `library` option
			library: libraryBase && {
				type:
					output.libraryTarget !== undefined
						? output.libraryTarget
						: libraryBase.type,
				auxiliaryComment:
					output.auxiliaryComment !== undefined
						? output.auxiliaryComment
						: libraryBase.auxiliaryComment,
				amdContainer:
					output.amdContainer !== undefined
						? output.amdContainer
						: libraryBase.amdContainer,
				export:
					output.libraryExport !== undefined
						? output.libraryExport
						: libraryBase.export,
				name: libraryBase.name,
				umdNamedDefine:
					output.umdNamedDefine !== undefined
						? output.umdNamedDefine
						: libraryBase.umdNamedDefine
			},
			module: output.module,
			path: output.path,
			pathinfo: output.pathinfo,
			publicPath: output.publicPath,
			sourceMapFilename: output.sourceMapFilename,
			sourcePrefix: output.sourcePrefix,
			strictModuleErrorHandling: output.strictModuleErrorHandling,
			strictModuleExceptionHandling: output.strictModuleExceptionHandling,
			trustedTypes: optionalNestedConfig(
				output.trustedTypes,
				(trustedTypes) => {
					if (trustedTypes === true) return {};
					if (typeof trustedTypes === "string") {
						return { policyName: trustedTypes };
					}
					return { ...trustedTypes };
				}
			),
			uniqueName: output.uniqueName,
			wasmLoading: output.wasmLoading,
			webassemblyModuleFilename: output.webassemblyModuleFilename,
			workerPublicPath: output.workerPublicPath,
			workerChunkLoading: output.workerChunkLoading,
			workerWasmLoading: output.workerWasmLoading
		};
		return result;
	}),
	parallelism: config.parallelism,
	validate: config.validate,
	performance: optionalNestedConfig(config.performance, (performance) => {
		if (performance === false) return false;
		return {
			...performance
		};
	}),
	plugins: /** @type {PluginsNormalized} */ (
		nestedArray(config.plugins, (p) => p.filter(Boolean))
	),
	profile: config.profile,
	recordsInputPath:
		config.recordsInputPath !== undefined
			? config.recordsInputPath
			: config.recordsPath,
	recordsOutputPath:
		config.recordsOutputPath !== undefined
			? config.recordsOutputPath
			: config.recordsPath,
	resolve: nestedConfig(config.resolve, (resolve) => ({
		...resolve,
		byDependency: keyedNestedConfig(resolve.byDependency, cloneObject)
	})),
	resolveLoader: cloneObject(config.resolveLoader),
	snapshot: nestedConfig(config.snapshot, (snapshot) => ({
		resolveBuildDependencies: optionalNestedConfig(
			snapshot.resolveBuildDependencies,
			(resolveBuildDependencies) => ({
				timestamp: resolveBuildDependencies.timestamp,
				hash: resolveBuildDependencies.hash
			})
		),
		buildDependencies: optionalNestedConfig(
			snapshot.buildDependencies,
			(buildDependencies) => ({
				timestamp: buildDependencies.timestamp,
				hash: buildDependencies.hash
			})
		),
		resolve: optionalNestedConfig(snapshot.resolve, (resolve) => ({
			timestamp: resolve.timestamp,
			hash: resolve.hash
		})),
		module: optionalNestedConfig(snapshot.module, (module) => ({
			timestamp: module.timestamp,
			hash: module.hash
		})),
		contextModule: optionalNestedConfig(
			snapshot.contextModule,
			(contextModule) => ({
				timestamp: contextModule.timestamp,
				hash: contextModule.hash
			})
		),
		immutablePaths: optionalNestedArray(snapshot.immutablePaths, (p) => [...p]),
		managedPaths: optionalNestedArray(snapshot.managedPaths, (p) => [...p]),
		unmanagedPaths: optionalNestedArray(snapshot.unmanagedPaths, (p) => [...p])
	})),
	stats: nestedConfig(config.stats, (stats) => {
		if (stats === false) {
			return {
				preset: "none"
			};
		}
		if (stats === true) {
			return {
				preset: "normal"
			};
		}
		if (typeof stats === "string") {
			return {
				preset: stats
			};
		}
		return {
			...stats
		};
	}),
	target: config.target,
	watch: config.watch,
	watchOptions: cloneObject(config.watchOptions)
});

/**
 * Gets normalized entry static.
 * @param {EntryStatic} entry static entry options
 * @returns {EntryStaticNormalized} normalized static entry options
 */
const getNormalizedEntryStatic = (entry) => {
	if (typeof entry === "string") {
		return {
			main: {
				import: [entry]
			}
		};
	}
	if (Array.isArray(entry)) {
		return {
			main: {
				import: entry
			}
		};
	}
	/** @type {EntryStaticNormalized} */
	const result = {};
	for (const key of Object.keys(entry)) {
		const value = entry[key];
		if (typeof value === "string") {
			result[key] = {
				import: [value]
			};
		} else if (Array.isArray(value)) {
			result[key] = {
				import: value
			};
		} else {
			result[key] = {
				import:
					/** @type {EntryDescriptionNormalized["import"]} */
					(
						value.import &&
							(Array.isArray(value.import) ? value.import : [value.import])
					),
				filename: value.filename,
				layer: value.layer,
				runtime: value.runtime,
				baseUri: value.baseUri,
				publicPath: value.publicPath,
				chunkLoading: value.chunkLoading,
				asyncChunks: value.asyncChunks,
				wasmLoading: value.wasmLoading,
				dependOn:
					/** @type {EntryDescriptionNormalized["dependOn"]} */
					(
						value.dependOn &&
							(Array.isArray(value.dependOn)
								? value.dependOn
								: [value.dependOn])
					),
				library: value.library
			};
		}
	}
	return result;
};

/**
 * Gets normalized optimization runtime chunk.
 * @param {OptimizationRuntimeChunk=} runtimeChunk runtimeChunk option
 * @returns {OptimizationRuntimeChunkNormalized=} normalized runtimeChunk option
 */
const getNormalizedOptimizationRuntimeChunk = (runtimeChunk) => {
	if (runtimeChunk === undefined) return;
	if (runtimeChunk === false) return false;
	if (runtimeChunk === "single") {
		return {
			name: () => "runtime"
		};
	}
	if (runtimeChunk === true || runtimeChunk === "multiple") {
		return {
			name: (entrypoint) => `runtime~${entrypoint.name}`
		};
	}
	const { name } = runtimeChunk;
	return {
		name:
			typeof name === "function"
				? /** @type {Exclude<OptimizationRuntimeChunkNormalized, false>["name"]} */
					(name)
				: () => /** @type {string} */ (name)
	};
};

/**
 * Apply webpack options interception.
 * @param {WebpackOptionsNormalized} options options to be intercepted
 * @returns {{ options: WebpackOptionsNormalized, interception?: WebpackOptionsInterception }} options and interception
 */
const applyWebpackOptionsInterception = (options) => {
	// Return origin options when backCompat is disabled
	if (options.experiments.futureDefaults) {
		return {
			options
		};
	}

	// TODO webpack 6 - remove compatibility logic and move `devtools` fully into `devtool` with multi-type support
	let _devtool = options.devtool;
	/** @type {WebpackOptionsNormalized["devtool"]} */
	let cached;

	const devtoolBackCompat = () => {
		if (Array.isArray(_devtool)) {
			if (cached) return cached;
			// Prefer `all`, then `javascript`, then `css`
			const match = ["all", "javascript", "css"]
				.map((type) =>
					/** @type {Extract<WebpackOptionsNormalized["devtool"], EXPECTED_ANY[]>} */ (
						_devtool
					).find((item) => item.type === type)
				)
				.find(Boolean);

			// If `devtool: []` is specified, return `false` here
			return (cached = match ? match.use : false);
		}
		return _devtool;
	};

	/** @type {ProxyHandler<WebpackOptionsNormalized>} */
	const handler = Object.create(null);
	handler.get = (target, prop, receiver) => {
		if (prop === "devtool") {
			return devtoolBackCompat();
		}
		return Reflect.get(target, prop, receiver);
	};
	handler.set = (target, prop, value, receiver) => {
		if (prop === "devtool") {
			_devtool = value;
			cached = undefined;
			return true;
		}
		return Reflect.set(target, prop, value, receiver);
	};
	handler.deleteProperty = (target, prop) => {
		if (prop === "devtool") {
			_devtool = undefined;
			cached = undefined;
			return true;
		}
		return Reflect.deleteProperty(target, prop);
	};
	handler.defineProperty = (target, prop, descriptor) => {
		if (prop === "devtool") {
			_devtool = descriptor.value;
			cached = undefined;
			return true;
		}
		return Reflect.defineProperty(target, prop, descriptor);
	};
	handler.getOwnPropertyDescriptor = (target, prop) => {
		if (prop === "devtool") {
			return {
				configurable: true,
				enumerable: true,
				value: devtoolBackCompat(),
				writable: true
			};
		}
		return Reflect.getOwnPropertyDescriptor(target, prop);
	};

	return {
		options: new Proxy(options, handler),
		interception: {
			get devtool() {
				return _devtool;
			}
		}
	};
};

module.exports.applyWebpackOptionsInterception =
	applyWebpackOptionsInterception;
module.exports.getNormalizedWebpackOptions = getNormalizedWebpackOptions;
