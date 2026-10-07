/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const parseJson = require("json-parse-even-better-errors");
const { getContext, runLoaders } = require("loader-runner");
const querystring = require("querystring");
const { HookMap, SyncHook, AsyncSeriesBailHook } = require("tapable");
const {
	CachedSource,
	OriginalSource,
	RawSource,
	SourceMapSource
} = require("webpack-sources");
const Compilation = require("./Compilation");
const HookWebpackError = require("./HookWebpackError");
const Module = require("./Module");
const ModuleBuildError = require("./ModuleBuildError");
const ModuleError = require("./ModuleError");
const ModuleGraphConnection = require("./ModuleGraphConnection");
const ModuleParseError = require("./ModuleParseError");
const { JAVASCRIPT_MODULE_TYPE_AUTO } = require("./ModuleTypeConstants");
const ModuleWarning = require("./ModuleWarning");
const RuntimeGlobals = require("./RuntimeGlobals");
const UnhandledSchemeError = require("./UnhandledSchemeError");
const WebpackError = require("./WebpackError");
const formatLocation = require("./formatLocation");
const LazySet = require("./util/LazySet");
const { isSubset } = require("./util/SetHelpers");
const { getScheme } = require("./util/URLAbsoluteSpecifier");
const {
	compareLocations,
	concatComparators,
	compareSelect,
	keepOriginalOrder
} = require("./util/comparators");
const createHash = require("./util/createHash");
const { createFakeHook } = require("./util/deprecation");
const { join } = require("./util/fs");
const {
	contextify,
	absolutify,
	makePathsRelative
} = require("./util/identifier");
const makeSerializable = require("./util/makeSerializable");
const memoize = require("./util/memoize");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").Mode} Mode */
/** @typedef {import("../declarations/WebpackOptions").ResolveOptions} ResolveOptions */
/** @typedef {import("../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptions */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("./DependencyTemplates")} DependencyTemplates */
/** @typedef {import("./Generator")} Generator */
/** @typedef {import("./Module").BuildInfo} BuildInfo */
/** @typedef {import("./Module").BuildMeta} BuildMeta */
/** @typedef {import("./Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("./Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("./Module").ConcatenationBailoutReasonContext} ConcatenationBailoutReasonContext */
/** @typedef {import("./Module").KnownBuildInfo} KnownBuildInfo */
/** @typedef {import("./Module").LibIdentOptions} LibIdentOptions */
/** @typedef {import("./Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("./Generator").SourceTypes} SourceTypes */
/** @typedef {import("./Module").UnsafeCacheData} UnsafeCacheData */
/** @typedef {import("./ModuleGraph")} ModuleGraph */
/** @typedef {import("./ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("./ModuleTypeConstants").JavaScriptModuleTypes} JavaScriptModuleTypes */
/** @typedef {import("./NormalModuleFactory")} NormalModuleFactory */
/** @typedef {import("./NormalModuleFactory").ResourceDataWithData} ResourceDataWithData */
/** @typedef {import("./Parser")} Parser */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./ResolverFactory").ResolveContext} ResolveContext */
/** @typedef {import("./ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./logging/Logger").Logger} WebpackLogger */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */
/** @typedef {import("./util/createHash").Algorithm} Algorithm */
/**
 * @template T
 * @typedef {import("./util/deprecation").FakeHook<T>} FakeHook
 */

/** @typedef {{[k: string]: any}} ParserOptions */
/** @typedef {{[k: string]: any}} GeneratorOptions */

/** @typedef {UnsafeCacheData & { parser: undefined | Parser, parserOptions: undefined | ParserOptions, generator: undefined | Generator, generatorOptions: undefined | GeneratorOptions }} NormalModuleUnsafeCacheData */

/**
 * @template T
 * @typedef {import("../declarations/LoaderContext").LoaderContext<T>} LoaderContext
 */

/**
 * @template T
 * @typedef {import("../declarations/LoaderContext").NormalModuleLoaderContext<T>} NormalModuleLoaderContext
 */

/**
 * @typedef {object} SourceMap
 * @property {number} version
 * @property {string[]} sources
 * @property {string} mappings
 * @property {string=} file
 * @property {string=} sourceRoot
 * @property {string[]=} sourcesContent
 * @property {string[]=} names
 * @property {string=} debugId
 */

const getInvalidDependenciesModuleWarning = memoize(() =>
	require("./InvalidDependenciesModuleWarning")
);
const getValidate = memoize(() => require("schema-utils").validate);

const ABSOLUTE_PATH_REGEX = /^([a-zA-Z]:\\|\\\\|\/)/;

/**
 * @typedef {object} LoaderItem
 * @property {string} loader
 * @property {any} options
 * @property {string?} ident
 * @property {string?} type
 */

/**
 * @param {string} context absolute context path
 * @param {string} source a source path
 * @param {object=} associatedObjectForCache an object to which the cache will be attached
 * @returns {string} new source path
 */
const contextifySourceUrl = (context, source, associatedObjectForCache) => {
	if (source.startsWith("webpack://")) return source;
	return `webpack://${makePathsRelative(
		context,
		source,
		associatedObjectForCache
	)}`;
};

/**
 * @param {string} context absolute context path
 * @param {SourceMap} sourceMap a source map
 * @param {object=} associatedObjectForCache an object to which the cache will be attached
 * @returns {SourceMap} new source map
 */
const contextifySourceMap = (context, sourceMap, associatedObjectForCache) => {
	if (!Array.isArray(sourceMap.sources)) return sourceMap;
	const { sourceRoot } = sourceMap;
	/** @type {function(string): string} */
	const mapper = !sourceRoot
		? source => source
		: sourceRoot.endsWith("/")
			? source =>
					source.startsWith("/")
						? `${sourceRoot.slice(0, -1)}${source}`
						: `${sourceRoot}${source}`
			: source =>
					source.startsWith("/")
						? `${sourceRoot}${source}`
						: `${sourceRoot}/${source}`;
	const newSources = sourceMap.sources.map(source =>
		contextifySourceUrl(context, mapper(source), associatedObjectForCache)
	);
	return {
		...sourceMap,
		file: "x",
		sourceRoot: undefined,
		sources: newSources
	};
};

/**
 * @param {string | Buffer} input the input
 * @returns {string} the converted string
 */
const asString = input => {
	if (Buffer.isBuffer(input)) {
		return input.toString("utf-8");
	}
	return input;
};

/**
 * @param {string | Buffer} input the input
 * @returns {Buffer} the converted buffer
 */
const asBuffer = input => {
	if (!Buffer.isBuffer(input)) {
		return Buffer.from(input, "utf-8");
	}
	return input;
};

class NonErrorEmittedError extends WebpackError {
	/**
	 * @param {any} error value which is not an instance of Error
	 */
	constructor(error) {
		super();

		this.name = "NonErrorEmittedError";
		this.message = `(Emitted value instead of an instance of Error) ${error}`;
	}
}

makeSerializable(
	NonErrorEmittedError,
	"webpack/lib/NormalModule",
	"NonErrorEmittedError"
);

/**
 * @typedef {object} NormalModuleCompilationHooks
 * @property {SyncHook<[LoaderContext<any>, NormalModule]>} loader
 * @property {SyncHook<[LoaderItem[], NormalModule, LoaderContext<any>]>} beforeLoaders
 * @property {SyncHook<[NormalModule]>} beforeParse
 * @property {SyncHook<[NormalModule]>} beforeSnapshot
 * @property {HookMap<FakeHook<AsyncSeriesBailHook<[string, NormalModule], string | Buffer | null>>>} readResourceForScheme
 * @property {HookMap<AsyncSeriesBailHook<[LoaderContext<any>], string | Buffer | null>>} readResource
 * @property {AsyncSeriesBailHook<[NormalModule, NeedBuildContext], boolean>} needBuild
 */

/**
 * @typedef {object} NormalModuleCreateData
 * @property {string=} layer an optional layer in which the module is
 * @property {JavaScriptModuleTypes | ""} type module type. When deserializing, this is set to an empty string "".
 * @property {string} request request string
 * @property {string} userRequest request intended by user (without loaders from config)
 * @property {string} rawRequest request without resolving
 * @property {LoaderItem[]} loaders list of loaders
 * @property {string} resource path + query of the real resource
 * @property {Record<string, any>=} resourceResolveData resource resolve data
 * @property {string} context context directory for resolving
 * @property {string=} matchResource path + query of the matched resource (virtual)
 * @property {Parser} parser the parser used
 * @property {ParserOptions=} parserOptions the options of the parser used
 * @property {Generator} generator the generator used
 * @property {GeneratorOptions=} generatorOptions the options of the generator used
 * @property {ResolveOptions=} resolveOptions options used for resolving requests from this module
 */

/** @type {WeakMap<Compilation, NormalModuleCompilationHooks>} */
const compilationHooksMap = new WeakMap();

class NormalModule extends Module {
	/**
	 * @param {Compilation} compilation the compilation
	 * @returns {NormalModuleCompilationHooks} the attached hooks
	 */
	static getCompilationHooks(compilation) {
		if (!(compilation instanceof Compilation)) {
			throw new TypeError(
				"The 'compilation' argument must be an instance of Compilation"
			);
		}
		let hooks = compilationHooksMap.get(compilation);
		if (hooks === undefined) {
			hooks = {
				loader: new SyncHook(["loaderContext", "module"]),
				beforeLoaders: new SyncHook(["loaders", "module", "loaderContext"]),
				beforeParse: new SyncHook(["module"]),
				beforeSnapshot: new SyncHook(["module"]),
				// TODO webpack 6 deprecate
				readResourceForScheme: new HookMap(scheme => {
					const hook =
						/** @type {NormalModuleCompilationHooks} */
						(hooks).readResource.for(scheme);
					return createFakeHook(
						/** @type {AsyncSeriesBailHook<[string, NormalModule], string | Buffer | null>} */ ({
							tap: (options, fn) =>
								hook.tap(options, loaderContext =>
									fn(
										loaderContext.resource,
										/** @type {NormalModule} */ (loaderContext._module)
									)
								),
							tapAsync: (options, fn) =>
								hook.tapAsync(options, (loaderContext, callback) =>
									fn(
										loaderContext.resource,
										/** @type {NormalModule} */ (loaderContext._module),
										callback
									)
								),
							tapPromise: (options, fn) =>
								hook.tapPromise(options, loaderContext =>
									fn(
										loaderContext.resource,
										/** @type {NormalModule} */ (loaderContext._module)
									)
								)
						})
					);
				}),
				readResource: new HookMap(
					() => new AsyncSeriesBailHook(["loaderContext"])
				),
				needBuild: new AsyncSeriesBailHook(["module", "context"])
			};
			compilationHooksMap.set(
				compilation,
				/** @type {NormalModuleCompilationHooks} */ (hooks)
			);
		}
		return /** @type {NormalModuleCompilationHooks} */ (hooks);
	}

	/**
	 * @param {NormalModuleCreateData} options options object
	 */
	constructor({
		layer,
		type,
		request,
		userRequest,
		rawRequest,
		loaders,
		resource,
		resourceResolveData,
		context,
		matchResource,
		parser,
		parserOptions,
		generator,
		generatorOptions,
		resolveOptions
	}) {
		super(type, context || getContext(resource), layer);

		// Info from Factory
		/** @type {string} */
		this.request = request;
		/** @type {string} */
		this.userRequest = userRequest;
		/** @type {string} */
		this.rawRequest = rawRequest;
		/** @type {boolean} */
		this.binary = /^(asset|webassembly)\b/.test(type);
		/** @type {undefined | Parser} */
		this.parser = parser;
		/** @type {undefined | ParserOptions} */
		this.parserOptions = parserOptions;
		/** @type {undefined | Generator} */
		this.generator = generator;
		/** @type {undefined | GeneratorOptions} */
		this.generatorOptions = generatorOptions;
		/** @type {string} */
		this.resource = resource;
		this.resourceResolveData = resourceResolveData;
		/** @type {string | undefined} */
		this.matchResource = matchResource;
		/** @type {LoaderItem[]} */
		this.loaders = loaders;
		if (resolveOptions !== undefined) {
			// already declared in super class
			this.resolveOptions = resolveOptions;
		}

		// Info from Build
		/** @type {WebpackError | null} */
		this.error = null;
		/**
		 * @private
		 * @type {Source | null}
		 */
		this._source = null;
		/**
		 * @private
		 * @type {Map<string | undefined, number> | undefined}
		 */
		this._sourceSizes = undefined;
		/**
		 * @private
		 * @type {undefined | SourceTypes}
		 */
		this._sourceTypes = undefined;

		// Cache
		this._lastSuccessfulBuildMeta = {};
		this._forceBuild = true;
		this._isEvaluatingSideEffects = false;
		/** @type {WeakSet<ModuleGraph> | undefined} */
		this._addedSideEffectsBailout = undefined;
		/** @type {Map<string, any>} */
		this._codeGeneratorData = new Map();
	}

	/**
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		if (this.layer === null) {
			if (this.type === JAVASCRIPT_MODULE_TYPE_AUTO) {
				return this.request;
			}
			return `${this.type}|${this.request}`;
		}
		return `${this.type}|${this.request}|${this.layer}`;
	}

	/**
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		return /** @type {string} */ (requestShortener.shorten(this.userRequest));
	}

	/**
	 * @param {LibIdentOptions} options options
	 * @returns {string | null} an identifier for library inclusion
	 */
	libIdent(options) {
		let ident = contextify(
			options.context,
			this.userRequest,
			options.associatedObjectForCache
		);
		if (this.layer) ident = `(${this.layer})/${ident}`;
		return ident;
	}

	/**
	 * @returns {string | null} absolute path which should be used for condition matching (usually the resource path)
	 */
	nameForCondition() {
		const resource = this.matchResource || this.resource;
		const idx = resource.indexOf("?");
		if (idx >= 0) return resource.slice(0, idx);
		return resource;
	}

	/**
	 * Assuming this module is in the cache. Update the (cached) module with
	 * the fresh module from the factory. Usually updates internal references
	 * and properties.
	 * @param {Module} module fresh module
	 * @returns {void}
	 */
	updateCacheModule(module) {
		super.updateCacheModule(module);
		const m = /** @type {NormalModule} */ (module);
		this.binary = m.binary;
		this.request = m.request;
		this.userRequest = m.userRequest;
		this.rawRequest = m.rawRequest;
		this.parser = m.parser;
		this.parserOptions = m.parserOptions;
		this.generator = m.generator;
		this.generatorOptions = m.generatorOptions;
		this.resource = m.resource;
		this.resourceResolveData = m.resourceResolveData;
		this.context = m.context;
		this.matchResource = m.matchResource;
		this.loaders = m.loaders;
	}

	/**
	 * Assuming this module is in the cache. Remove internal references to allow freeing some memory.
	 */
	cleanupForCache() {
		// Make sure to cache types and sizes before cleanup when this module has been built
		// They are accessed by the stats and we don't want them to crash after cleanup
		// TODO reconsider this for webpack 6
		if (this.buildInfo) {
			if (this._sourceTypes === undefined) this.getSourceTypes();
			for (const type of /** @type {SourceTypes} */ (this._sourceTypes)) {
				this.size(type);
			}
		}
		super.cleanupForCache();
		this.parser = undefined;
		this.parserOptions = undefined;
		this.generator = undefined;
		this.generatorOptions = undefined;
	}

	/**
	 * Module should be unsafe cached. Get data that's needed for that.
	 * This data will be passed to restoreFromUnsafeCache later.
	 * @returns {UnsafeCacheData} cached data
	 */
	getUnsafeCacheData() {
		const data =
			/** @type {NormalModuleUnsafeCacheData} */
			(super.getUnsafeCacheData());
		data.parserOptions = this.parserOptions;
		data.generatorOptions = this.generatorOptions;
		return data;
	}

	/**
	 * restore unsafe cache data
	 * @param {NormalModuleUnsafeCacheData} unsafeCacheData data from getUnsafeCacheData
	 * @param {NormalModuleFactory} normalModuleFactory the normal module factory handling the unsafe caching
	 */
	restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory) {
		this._restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory);
	}

	/**
	 * restore unsafe cache data
	 * @param {object} unsafeCacheData data from getUnsafeCacheData
	 * @param {NormalModuleFactory} normalModuleFactory the normal module factory handling the unsafe caching
	 */
	_restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory) {
		super._restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory);
		this.parserOptions = unsafeCacheData.parserOptions;
		this.parser = normalModuleFactory.getParser(this.type, this.parserOptions);
		this.generatorOptions = unsafeCacheData.generatorOptions;
		this.generator = normalModuleFactory.getGenerator(
			this.type,
			this.generatorOptions
		);
		// we assume the generator behaves identically and keep cached sourceTypes/Sizes
	}

	/**
	 * @param {string} context the compilation context
	 * @param {string} name the asset name
	 * @param {string | Buffer} content the content
	 * @param {(string | SourceMap)=} sourceMap an optional source map
	 * @param {object=} associatedObjectForCache object for caching
	 * @returns {Source} the created source
	 */
	createSourceForAsset(
		context,
		name,
		content,
		sourceMap,
		associatedObjectForCache
	) {
		if (sourceMap) {
			if (
				typeof sourceMap === "string" &&
				(this.useSourceMap || this.useSimpleSourceMap)
			) {
				return new OriginalSource(
					content,
					contextifySourceUrl(context, sourceMap, associatedObjectForCache)
				);
			}

			if (this.useSourceMap) {
				return new SourceMapSource(
					content,
					name,
					contextifySourceMap(
						context,
						/** @type {SourceMap} */ (sourceMap),
						associatedObjectForCache
					)
				);
			}
		}

		return new RawSource(content);
	}

	/**
	 * @private
	 * @template T
	 * @param {ResolverWithOptions} resolver a resolver
	 * @param {WebpackOptions} options webpack options
	 * @param {Compilation} compilation the compilation
	 * @param {InputFileSystem} fs file system from reading
	 * @param {NormalModuleCompilationHooks} hooks the hooks
	 * @returns {import("../declarations/LoaderContext").NormalModuleLoaderContext<T>} loader context
	 */
	_createLoaderContext(resolver, options, compilation, fs, hooks) {
		const { requestShortener } = compilation.runtimeTemplate;
		const getCurrentLoaderName = () => {
			const currentLoader = this.getCurrentLoader(loaderContext);
			if (!currentLoader) return "(not in loader scope)";
			return requestShortener.shorten(currentLoader.loader);
		};
		/**
		 * @returns {ResolveContext} resolve context
		 */
		const getResolveContext = () => ({
			fileDependencies: {
				add: d => /** @type {TODO} */ (loaderContext).addDependency(d)
			},
			contextDependencies: {
				add: d => /** @type {TODO} */ (loaderContext).addContextDependency(d)
			},
			missingDependencies: {
				add: d => /** @type {TODO} */ (loaderContext).addMissingDependency(d)
			}
		});
		const getAbsolutify = memoize(() =>
			absolutify.bindCache(compilation.compiler.root)
		);
		const getAbsolutifyInContext = memoize(() =>
			absolutify.bindContextCache(
				/** @type {string} */
				(this.context),
				compilation.compiler.root
			)
		);
		const getContextify = memoize(() =>
			contextify.bindCache(compilation.compiler.root)
		);
		const getContextifyInContext = memoize(() =>
			contextify.bindContextCache(
				/** @type {string} */
				(this.context),
				compilation.compiler.root
			)
		);
		const utils = {
			/**
			 * @param {string} context context
			 * @param {string} request request
			 * @returns {string} result
			 */
			absolutify: (context, request) =>
				context === this.context
					? getAbsolutifyInContext()(request)
					: getAbsolutify()(context, request),
			/**
			 * @param {string} context context
			 * @param {string} request request
			 * @returns {string} result
			 */
			contextify: (context, request) =>
				context === this.context
					? getContextifyInContext()(request)
					: getContextify()(context, request),
			/**
			 * @param {(string | typeof import("./util/Hash"))=} type type
			 * @returns {Hash} hash
			 */
			createHash: type =>
				createHash(
					type ||
						/** @type {Algorithm} */
						(compilation.outputOptions.hashFunction)
				)
		};
		/** @type {import("../declarations/LoaderContext").NormalModuleLoaderContext<T>} */
		const loaderContext = {
			version: 2,
			getOptions: schema => {
				const loader = this.getCurrentLoader(loaderContext);

				let { options } = /** @type {LoaderItem} */ (loader);

				if (typeof options === "string") {
					if (options.startsWith("{") && options.endsWith("}")) {
						try {
							options = parseJson(options);
						} catch (err) {
							throw new Error(
								`Cannot parse string options: ${/** @type {Error} */ (err).message}`
							);
						}
					} else {
						options = querystring.parse(options, "&", "=", {
							maxKeys: 0
						});
					}
				}

				if (options === null || options === undefined) {
					options = {};
				}

				if (schema) {
					let name = "Loader";
					let baseDataPath = "options";
					let match;
					if (schema.title && (match = /^(.+) (.+)$/.exec(schema.title))) {
						[, name, baseDataPath] = match;
					}
					getValidate()(schema, options, {
						name,
						baseDataPath
					});
				}

				return options;
			},
			emitWarning: warning => {
				if (!(warning instanceof Error)) {
					warning = new NonErrorEmittedError(warning);
				}
				this.addWarning(
					new ModuleWarning(warning, {
						from: getCurrentLoaderName()
					})
				);
			},
			emitError: error => {
				if (!(error instanceof Error)) {
					error = new NonErrorEmittedError(error);
				}
				this.addError(
					new ModuleError(error, {
						from: getCurrentLoaderName()
					})
				);
			},
			getLogger: name => {
				const currentLoader = this.getCurrentLoader(loaderContext);
				return compilation.getLogger(() =>
					[currentLoader && currentLoader.loader, name, this.identifier()]
						.filter(Boolean)
						.join("|")
				);
			},
			resolve(context, request, callback) {
				resolver.resolve({}, context, request, getResolveContext(), callback);
			},
			getResolve(options) {
				const child = options ? resolver.withOptions(options) : resolver;
				return (context, request, callback) => {
					if (callback) {
						child.resolve({}, context, request, getResolveContext(), callback);
					} else {
						return new Promise((resolve, reject) => {
							child.resolve(
								{},
								context,
								request,
								getResolveContext(),
								(err, result) => {
									if (err) reject(err);
									else resolve(result);
								}
							);
						});
					}
				};
			},
			emitFile: (name, content, sourceMap, assetInfo) => {
				const buildInfo = /** @type {BuildInfo} */ (this.buildInfo);

				if (!buildInfo.assets) {
					buildInfo.assets = Object.create(null);
					buildInfo.assetsInfo = new Map();
				}

				const assets =
					/** @type {NonNullable<KnownBuildInfo["assets"]>} */
					(buildInfo.assets);
				const assetsInfo =
					/** @type {NonNullable<KnownBuildInfo["assetsInfo"]>} */
					(buildInfo.assetsInfo);

				assets[name] = this.createSourceForAsset(
					/** @type {string} */ (options.context),
					name,
					content,
					sourceMap,
					compilation.compiler.root
				);
				assetsInfo.set(name, assetInfo);
			},
			addBuildDependency: dep => {
				const buildInfo = /** @type {BuildInfo} */ (this.buildInfo);

				if (buildInfo.buildDependencies === undefined) {
					buildInfo.buildDependencies = new LazySet();
				}
				buildInfo.buildDependencies.add(dep);
			},
			utils,
			rootContext: /** @type {string} */ (options.context),
			webpack: true,
			sourceMap: Boolean(this.useSourceMap),
			mode: options.mode || "production",
			hashFunction: /** @type {TODO} */ (options.output.hashFunction),
			hashDigest: /** @type {string} */ (options.output.hashDigest),
			hashDigestLength: /** @type {number} */ (options.output.hashDigestLength),
			hashSalt: /** @type {string} */ (options.output.hashSalt),
			_module: this,
			_compilation: compilation,
			_compiler: compilation.compiler,
			fs
		};

		Object.assign(loaderContext, options.loader);

		hooks.loader.call(/** @type {LoaderContext<any>} */ (loaderContext), this);

		return loaderContext;
	}

	// TODO remove `loaderContext` in webpack@6
	/**
	 * @param {TODO} loaderContext loader context
	 * @param {number} index index
	 * @returns {LoaderItem | null} loader
	 */
	getCurrentLoader(loaderContext, index = loaderContext.loaderIndex) {
		if (
			this.loaders &&
			this.loaders.length &&
			index < this.loaders.length &&
			index >= 0 &&
			this.loaders[index]
		) {
			return this.loaders[index];
		}
		return null;
	}

	/**
	 * @param {string} context the compilation context
	 * @param {string | Buffer} content the content
	 * @param {(string | SourceMapSource | null)=} sourceMap an optional source map
	 * @param {object=} associatedObjectForCache object for caching
	 * @returns {Source} the created source
	 */
	createSource(context, content, sourceMap, associatedObjectForCache) {
		if (Buffer.isBuffer(content)) {
			return new RawSource(content);
		}

		// if there is no identifier return raw source
		if (!this.identifier) {
			return new RawSource(content);
		}

		// from here on we assume we have an identifier
		const identifier = this.identifier();

		if (this.useSourceMap && sourceMap) {
			return new SourceMapSource(
				content,
				contextifySourceUrl(context, identifier, associatedObjectForCache),
				contextifySourceMap(
					context,
					/** @type {TODO} */ (sourceMap),
					associatedObjectForCache
				)
			);
		}

		if (this.useSourceMap || this.useSimpleSourceMap) {
			return new OriginalSource(
				content,
				contextifySourceUrl(context, identifier, associatedObjectForCache)
			);
		}

		return new RawSource(content);
	}

	/**
	 * @param {WebpackOptions} options webpack options
	 * @param {Compilation} compilation the compilation
	 * @param {ResolverWithOptions} resolver the resolver
	 * @param {InputFileSystem} fs the file system
	 * @param {NormalModuleCompilationHooks} hooks the hooks
	 * @param {function((WebpackError | null)=): void} callback callback function
	 * @returns {void}
	 */
	_doBuild(options, compilation, resolver, fs, hooks, callback) {
		const loaderContext = this._createLoaderContext(
			resolver,
			options,
			compilation,
			fs,
			hooks
		);

		/** @typedef {[string | Buffer, string | SourceMapSource, Record<string, any>]}  Result */

		/**
		 * @param {Error | null} err err
		 * @param {(Result | null)=} _result result
		 * @returns {void}
		 */
		const processResult = (err, _result) => {
			if (err) {
				if (!(err instanceof Error)) {
					err = new NonErrorEmittedError(err);
				}
				const currentLoader = this.getCurrentLoader(loaderContext);
				const error = new ModuleBuildError(err, {
					from:
						currentLoader &&
						compilation.runtimeTemplate.requestShortener.shorten(
							currentLoader.loader
						)
				});
				return callback(error);
			}

			const result = /** @type {Result} */ (_result);
			const source = result[0];
			const sourceMap = result.length >= 1 ? result[1] : null;
			const extraInfo = result.length >= 2 ? result[2] : null;

			if (!Buffer.isBuffer(source) && typeof source !== "string") {
				const currentLoader = this.getCurrentLoader(loaderContext, 0);
				const err = new Error(
					`Final loader (${
						currentLoader
							? compilation.runtimeTemplate.requestShortener.shorten(
									currentLoader.loader
								)
							: "unknown"
					}) didn't return a Buffer or String`
				);
				const error = new ModuleBuildError(err);
				return callback(error);
			}

			const isBinaryModule =
				this.generatorOptions && this.generatorOptions.binary !== undefined
					? this.generatorOptions.binary
					: this.binary;

			this._source = this.createSource(
				/** @type {string} */ (options.context),
				isBinaryModule ? asBuffer(source) : asString(source),
				sourceMap,
				compilation.compiler.root
			);
			if (this._sourceSizes !== undefined) this._sourceSizes.clear();
			this._ast =
				typeof extraInfo === "object" &&
				extraInfo !== null &&
				extraInfo.webpackAST !== undefined
					? extraInfo.webpackAST
					: null;
			return callback();
		};

		const buildInfo = /** @type {BuildInfo} */ (this.buildInfo);

		buildInfo.fileDependencies = new LazySet();
		buildInfo.contextDependencies = new LazySet();
		buildInfo.missingDependencies = new LazySet();
		buildInfo.cacheable = true;

		try {
			hooks.beforeLoaders.call(
				this.loaders,
				this,
				/** @type {LoaderContext<any>} */ (loaderContext)
			);
		} catch (err) {
			processResult(/** @type {Error} */ (err));
			return;
		}

		if (this.loaders.length > 0) {
			/** @type {BuildInfo} */
			(this.buildInfo).buildDependencies = new LazySet();
		}

		runLoaders(
			{
				resource: this.resource,
				loaders: this.loaders,
				context: loaderContext,
				/**
				 * @param {LoaderContext<TODO>} loaderContext the loader context
				 * @param {string} resourcePath the resource Path
				 * @param {(err: Error | null, result?: string | Buffer) => void} callback callback
				 */
				processResource: (loaderContext, resourcePath, callback) => {
					const resource = loaderContext.resource;
					const scheme = getScheme(resource);
					hooks.readResource
						.for(scheme)
						.callAsync(loaderContext, (err, result) => {
							if (err) return callback(err);
							if (typeof result !== "string" && !result) {
								return callback(
									new UnhandledSchemeError(
										/** @type {string} */
										(scheme),
										resource
									)
								);
							}
							return callback(null, result);
						});
				}
			},
			(err, result) => {
				// Cleanup loaderContext to avoid leaking memory in ICs
				loaderContext._compilation =
					loaderContext._compiler =
					loaderContext._module =
					// eslint-disable-next-line no-warning-comments
					// @ts-ignore
					loaderContext.fs =
						undefined;

				if (!result) {
					/** @type {BuildInfo} */
					(this.buildInfo).cacheable = false;
					return processResult(
						err || new Error("No result from loader-runner processing"),
						null
					);
				}

				const buildInfo = /** @type {BuildInfo} */ (this.buildInfo);

				const fileDependencies =
					/** @type {NonNullable<KnownBuildInfo["fileDependencies"]>} */
					(buildInfo.fileDependencies);
				const contextDependencies =
					/** @type {NonNullable<KnownBuildInfo["contextDependencies"]>} */
					(buildInfo.contextDependencies);
				const missingDependencies =
					/** @type {NonNullable<KnownBuildInfo["missingDependencies"]>} */
					(buildInfo.missingDependencies);

				fileDependencies.addAll(result.fileDependencies);
				contextDependencies.addAll(result.contextDependencies);
				missingDependencies.addAll(result.missingDependencies);
				for (const loader of this.loaders) {
					const buildDependencies =
						/** @type {NonNullable<KnownBuildInfo["buildDependencies"]>} */
						(buildInfo.buildDependencies);

					buildDependencies.add(loader.loader);
				}
				buildInfo.cacheable = buildInfo.cacheable && result.cacheable;
				processResult(err, result.result);
			}
		);
	}

	/**
	 * @param {WebpackError} error the error
	 * @returns {void}
	 */
	markModuleAsErrored(error) {
		// Restore build meta from successful build to keep importing state
		this.buildMeta = { ...this._lastSuccessfulBuildMeta };
		this.error = error;
		this.addError(error);
	}

	/**
	 * @param {TODO} rule rule
	 * @param {string} content content
	 * @returns {boolean} result
	 */
	applyNoParseRule(rule, content) {
		// must start with "rule" if rule is a string
		if (typeof rule === "string") {
			return content.startsWith(rule);
		}

		if (typeof rule === "function") {
			return rule(content);
		}
		// we assume rule is a regexp
		return rule.test(content);
	}

	/**
	 * @param {TODO} noParseRule no parse rule
	 * @param {string} request request
	 * @returns {boolean} check if module should not be parsed, returns "true" if the module should !not! be parsed, returns "false" if the module !must! be parsed
	 */
	shouldPreventParsing(noParseRule, request) {
		// if no noParseRule exists, return false
		// the module !must! be parsed.
		if (!noParseRule) {
			return false;
		}

		// we only have one rule to check
		if (!Array.isArray(noParseRule)) {
			// returns "true" if the module is !not! to be parsed
			return this.applyNoParseRule(noParseRule, request);
		}

		for (let i = 0; i < noParseRule.length; i++) {
			const rule = noParseRule[i];
			// early exit on first truthy match
			// this module is !not! to be parsed
			if (this.applyNoParseRule(rule, request)) {
				return true;
			}
		}
		// no match found, so this module !should! be parsed
		return false;
	}

	/**
	 * @param {Compilation} compilation compilation
	 * @private
	 */
	_initBuildHash(compilation) {
		const hash = createHash(
			/** @type {Algorithm} */
			(compilation.outputOptions.hashFunction)
		);
		if (this._source) {
			hash.update("source");
			this._source.updateHash(hash);
		}
		hash.update("meta");
		hash.update(JSON.stringify(this.buildMeta));
		/** @type {BuildInfo} */
		(this.buildInfo).hash = /** @type {string} */ (hash.digest("hex"));
	}

	/**
	 * @param {WebpackOptions} options webpack options
	 * @param {Compilation} compilation the compilation
	 * @param {ResolverWithOptions} resolver the resolver
	 * @param {InputFileSystem} fs the file system
	 * @param {function(WebpackError=): void} callback callback function
	 * @returns {void}
	 */
	build(options, compilation, resolver, fs, callback) {
		this._forceBuild = false;
		this._source = null;
		if (this._sourceSizes !== undefined) this._sourceSizes.clear();
		this._sourceTypes = undefined;
		this._ast = null;
		this.error = null;
		this.clearWarningsAndErrors();
		this.clearDependenciesAndBlocks();
		this.buildMeta = {};
		this.buildInfo = {
			cacheable: false,
			parsed: true,
			fileDependencies: undefined,
			contextDependencies: undefined,
			missingDependencies: undefined,
			buildDependencies: undefined,
			valueDependencies: undefined,
			hash: undefined,
			assets: undefined,
			assetsInfo: undefined
		};

		const startTime = compilation.compiler.fsStartTime || Date.now();

		const hooks = NormalModule.getCompilationHooks(compilation);

		return this._doBuild(options, compilation, resolver, fs, hooks, err => {
			// if we have an error mark module as failed and exit
			if (err) {
				this.markModuleAsErrored(err);
				this._initBuildHash(compilation);
				return callback();
			}

			/**
			 * @param {Error} e error
			 * @returns {void}
			 */
			const handleParseError = e => {
				const source = /** @type {Source} */ (this._source).source();
				const loaders = this.loaders.map(item =>
					contextify(
						/** @type {string} */ (options.context),
						item.loader,
						compilation.compiler.root
					)
				);
				const error = new ModuleParseError(source, e, loaders, this.type);
				this.markModuleAsErrored(error);
				this._initBuildHash(compilation);
				return callback();
			};

			const handleParseResult = () => {
				this.dependencies.sort(
					concatComparators(
						compareSelect(a => a.loc, compareLocations),
						keepOriginalOrder(this.dependencies)
					)
				);
				this._initBuildHash(compilation);
				this._lastSuccessfulBuildMeta =
					/** @type {BuildMeta} */
					(this.buildMeta);
				return handleBuildDone();
			};

			const handleBuildDone = () => {
				try {
					hooks.beforeSnapshot.call(this);
				} catch (err) {
					this.markModuleAsErrored(/** @type {WebpackError} */ (err));
					return callback();
				}

				const snapshotOptions = compilation.options.snapshot.module;
				const { cacheable } = /** @type {BuildInfo} */ (this.buildInfo);
				if (!cacheable || !snapshotOptions) {
					return callback();
				}
				// add warning for all non-absolute paths in fileDependencies, etc
				// This makes it easier to find problems with watching and/or caching
				/** @type {undefined | Set<string>} */
				let nonAbsoluteDependencies;
				/**
				 * @param {LazySet<string>} deps deps
				 */
				const checkDependencies = deps => {
					for (const dep of deps) {
						if (!ABSOLUTE_PATH_REGEX.test(dep)) {
							if (nonAbsoluteDependencies === undefined)
								nonAbsoluteDependencies = new Set();
							nonAbsoluteDependencies.add(dep);
							deps.delete(dep);
							try {
								const depWithoutGlob = dep.replace(/[\\/]?\*.*$/, "");
								const absolute = join(
									compilation.fileSystemInfo.fs,
									/** @type {string} */
									(this.context),
									depWithoutGlob
								);
								if (absolute !== dep && ABSOLUTE_PATH_REGEX.test(absolute)) {
									(depWithoutGlob !== dep
										? /** @type {NonNullable<KnownBuildInfo["contextDependencies"]>} */
											(
												/** @type {BuildInfo} */ (this.buildInfo)
													.contextDependencies
											)
										: deps
									).add(absolute);
								}
							} catch (_err) {
								// ignore
							}
						}
					}
				};
				const buildInfo = /** @type {BuildInfo} */ (this.buildInfo);
				const fileDependencies =
					/** @type {NonNullable<KnownBuildInfo["fileDependencies"]>} */
					(buildInfo.fileDependencies);
				const contextDependencies =
					/** @type {NonNullable<KnownBuildInfo["contextDependencies"]>} */
					(buildInfo.contextDependencies);
				const missingDependencies =
					/** @type {NonNullable<KnownBuildInfo["missingDependencies"]>} */
					(buildInfo.missingDependencies);
				checkDependencies(fileDependencies);
				checkDependencies(missingDependencies);
				checkDependencies(contextDependencies);
				if (nonAbsoluteDependencies !== undefined) {
					const InvalidDependenciesModuleWarning =
						getInvalidDependenciesModuleWarning();
					this.addWarning(
						new InvalidDependenciesModuleWarning(this, nonAbsoluteDependencies)
					);
				}
				// convert file/context/missingDependencies into filesystem snapshot
				compilation.fileSystemInfo.createSnapshot(
					startTime,
					fileDependencies,
					contextDependencies,
					missingDependencies,
					snapshotOptions,
					(err, snapshot) => {
						if (err) {
							this.markModuleAsErrored(err);
							return;
						}
						buildInfo.fileDependencies = undefined;
						buildInfo.contextDependencies = undefined;
						buildInfo.missingDependencies = undefined;
						buildInfo.snapshot = snapshot;
						return callback();
					}
				);
			};

			try {
				hooks.beforeParse.call(this);
			} catch (err) {
				this.markModuleAsErrored(/** @type {WebpackError} */ (err));
				this._initBuildHash(compilation);
				return callback();
			}

			// check if this module should !not! be parsed.
			// if so, exit here;
			const noParseRule = options.module && options.module.noParse;
			if (this.shouldPreventParsing(noParseRule, this.request)) {
				// We assume that we need module and exports
				/** @type {BuildInfo} */
				(this.buildInfo).parsed = false;
				this._initBuildHash(compilation);
				return handleBuildDone();
			}

			try {
				const source = /** @type {Source} */ (this._source).source();
				/** @type {Parser} */
				(this.parser).parse(this._ast || source, {
					source,
					current: this,
					module: this,
					compilation,
					options
				});
			} catch (parseErr) {
				handleParseError(/** @type {Error} */ (parseErr));
				return;
			}
			handleParseResult();
		});
	}

	/**
	 * @param {ConcatenationBailoutReasonContext} context context
	 * @returns {string | undefined} reason why this module can't be concatenated, undefined when it can be concatenated
	 */
	getConcatenationBailoutReason(context) {
		return /** @type {Generator} */ (
			this.generator
		).getConcatenationBailoutReason(this, context);
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {ConnectionState} how this module should be connected to referencing modules when consumed for side-effects only
	 */
	getSideEffectsConnectionState(moduleGraph) {
		if (this.factoryMeta !== undefined) {
			if (this.factoryMeta.sideEffectFree) return false;
			if (this.factoryMeta.sideEffectFree === false) return true;
		}
		if (this.buildMeta !== undefined && this.buildMeta.sideEffectFree) {
			if (this._isEvaluatingSideEffects)
				return ModuleGraphConnection.CIRCULAR_CONNECTION;
			this._isEvaluatingSideEffects = true;
			/** @type {ConnectionState} */
			let current = false;
			for (const dep of this.dependencies) {
				const state = dep.getModuleEvaluationSideEffectsState(moduleGraph);
				if (state === true) {
					if (
						this._addedSideEffectsBailout === undefined
							? ((this._addedSideEffectsBailout = new WeakSet()), true)
							: !this._addedSideEffectsBailout.has(moduleGraph)
					) {
						this._addedSideEffectsBailout.add(moduleGraph);
						moduleGraph
							.getOptimizationBailout(this)
							.push(
								() =>
									`Dependency (${
										dep.type
									}) with side effects at ${formatLocation(dep.loc)}`
							);
					}
					this._isEvaluatingSideEffects = false;
					return true;
				} else if (state !== ModuleGraphConnection.CIRCULAR_CONNECTION) {
					current = ModuleGraphConnection.addConnectionStates(current, state);
				}
			}
			this._isEvaluatingSideEffects = false;
			// When caching is implemented here, make sure to not cache when
			// at least one circular connection was in the loop above
			return current;
		}
		return true;
	}

	/**
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		if (this._sourceTypes === undefined) {
			this._sourceTypes = /** @type {Generator} */ (this.generator).getTypes(
				this
			);
		}
		return this._sourceTypes;
	}

	/**
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration({
		dependencyTemplates,
		runtimeTemplate,
		moduleGraph,
		chunkGraph,
		runtime,
		concatenationScope,
		codeGenerationResults,
		sourceTypes
	}) {
		/** @type {Set<string>} */
		const runtimeRequirements = new Set();

		const { parsed } = /** @type {BuildInfo} */ (this.buildInfo);

		if (!parsed) {
			runtimeRequirements.add(RuntimeGlobals.module);
			runtimeRequirements.add(RuntimeGlobals.exports);
			runtimeRequirements.add(RuntimeGlobals.thisAsExports);
		}

		/** @type {function(): Map<string, any>} */
		const getData = () => this._codeGeneratorData;

		const sources = new Map();
		for (const type of sourceTypes || chunkGraph.getModuleSourceTypes(this)) {
			const source = this.error
				? new RawSource(
						`throw new Error(${JSON.stringify(this.error.message)});`
					)
				: /** @type {Generator} */ (this.generator).generate(this, {
						dependencyTemplates,
						runtimeTemplate,
						moduleGraph,
						chunkGraph,
						runtimeRequirements,
						runtime,
						concatenationScope,
						codeGenerationResults,
						getData,
						type
					});

			if (source) {
				sources.set(type, new CachedSource(source));
			}
		}

		/** @type {CodeGenerationResult} */
		const resultEntry = {
			sources,
			runtimeRequirements,
			data: this._codeGeneratorData
		};
		return resultEntry;
	}

	/**
	 * @returns {Source | null} the original source for the module before webpack transformation
	 */
	originalSource() {
		return this._source;
	}

	/**
	 * @returns {void}
	 */
	invalidateBuild() {
		this._forceBuild = true;
	}

	/**
	 * @param {NeedBuildContext} context context info
	 * @param {function((WebpackError | null)=, boolean=): void} callback callback function, returns true, if the module needs a rebuild
	 * @returns {void}
	 */
	needBuild(context, callback) {
		const { fileSystemInfo, compilation, valueCacheVersions } = context;
		// build if enforced
		if (this._forceBuild) return callback(null, true);

		// always try to build in case of an error
		if (this.error) return callback(null, true);

		const { cacheable, snapshot, valueDependencies } =
			/** @type {BuildInfo} */ (this.buildInfo);

		// always build when module is not cacheable
		if (!cacheable) return callback(null, true);

		// build when there is no snapshot to check
		if (!snapshot) return callback(null, true);

		// build when valueDependencies have changed
		if (valueDependencies) {
			if (!valueCacheVersions) return callback(null, true);
			for (const [key, value] of valueDependencies) {
				if (value === undefined) return callback(null, true);
				const current = valueCacheVersions.get(key);
				if (
					value !== current &&
					(typeof value === "string" ||
						typeof current === "string" ||
						current === undefined ||
						!isSubset(value, current))
				) {
					return callback(null, true);
				}
			}
		}

		// check snapshot for validity
		fileSystemInfo.checkSnapshotValid(snapshot, (err, valid) => {
			if (err) return callback(err);
			if (!valid) return callback(null, true);
			const hooks = NormalModule.getCompilationHooks(compilation);
			hooks.needBuild.callAsync(this, context, (err, needBuild) => {
				if (err) {
					return callback(
						HookWebpackError.makeWebpackError(
							err,
							"NormalModule.getCompilationHooks().needBuild"
						)
					);
				}
				callback(null, Boolean(needBuild));
			});
		});
	}

	/**
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		const cachedSize =
			this._sourceSizes === undefined ? undefined : this._sourceSizes.get(type);
		if (cachedSize !== undefined) {
			return cachedSize;
		}
		const size = Math.max(
			1,
			/** @type {Generator} */ (this.generator).getSize(this, type)
		);
		if (this._sourceSizes === undefined) {
			this._sourceSizes = new Map();
		}
		this._sourceSizes.set(type, size);
		return size;
	}

	/**
	 * @param {LazySet<string>} fileDependencies set where file dependencies are added to
	 * @param {LazySet<string>} contextDependencies set where context dependencies are added to
	 * @param {LazySet<string>} missingDependencies set where missing dependencies are added to
	 * @param {LazySet<string>} buildDependencies set where build dependencies are added to
	 */
	addCacheDependencies(
		fileDependencies,
		contextDependencies,
		missingDependencies,
		buildDependencies
	) {
		const { snapshot, buildDependencies: buildDeps } =
			/** @type {BuildInfo} */ (this.buildInfo);
		if (snapshot) {
			fileDependencies.addAll(snapshot.getFileIterable());
			contextDependencies.addAll(snapshot.getContextIterable());
			missingDependencies.addAll(snapshot.getMissingIterable());
		} else {
			const {
				fileDependencies: fileDeps,
				contextDependencies: contextDeps,
				missingDependencies: missingDeps
			} = /** @type {BuildInfo} */ (this.buildInfo);
			if (fileDeps !== undefined) fileDependencies.addAll(fileDeps);
			if (contextDeps !== undefined) contextDependencies.addAll(contextDeps);
			if (missingDeps !== undefined) missingDependencies.addAll(missingDeps);
		}
		if (buildDeps !== undefined) {
			buildDependencies.addAll(buildDeps);
		}
	}

	/**
	 * @param {Hash} hash the hash used to track dependencies
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		hash.update(/** @type {BuildInfo} */ (this.buildInfo).hash);
		/** @type {Generator} */
		(this.generator).updateHash(hash, {
			module: this,
			...context
		});
		super.updateHash(hash, context);
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		// deserialize
		write(this._source);
		write(this.error);
		write(this._lastSuccessfulBuildMeta);
		write(this._forceBuild);
		write(this._codeGeneratorData);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 * @returns {TODO} Module
	 */
	static deserialize(context) {
		const obj = new NormalModule({
			// will be deserialized by Module
			layer: /** @type {EXPECTED_ANY} */ (null),
			type: "",
			// will be filled by updateCacheModule
			resource: "",
			context: "",
			request: /** @type {EXPECTED_ANY} */ (null),
			userRequest: /** @type {EXPECTED_ANY} */ (null),
			rawRequest: /** @type {EXPECTED_ANY} */ (null),
			loaders: /** @type {EXPECTED_ANY} */ (null),
			matchResource: /** @type {EXPECTED_ANY} */ (null),
			parser: /** @type {EXPECTED_ANY} */ (null),
			parserOptions: /** @type {EXPECTED_ANY} */ (null),
			generator: /** @type {EXPECTED_ANY} */ (null),
			generatorOptions: /** @type {EXPECTED_ANY} */ (null),
			resolveOptions: /** @type {EXPECTED_ANY} */ (null)
		});
		obj.deserialize(context);
		return obj;
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this._source = read();
		this.error = read();
		this._lastSuccessfulBuildMeta = read();
		this._forceBuild = read();
		this._codeGeneratorData = read();
		super.deserialize(context);
	}
}

makeSerializable(NormalModule, "webpack/lib/NormalModule");

module.exports = NormalModule;
