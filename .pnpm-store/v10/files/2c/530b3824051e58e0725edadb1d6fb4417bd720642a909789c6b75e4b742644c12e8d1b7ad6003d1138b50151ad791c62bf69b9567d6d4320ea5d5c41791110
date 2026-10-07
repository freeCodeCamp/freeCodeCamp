/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { getContext } = require("loader-runner");
const asyncLib = require("neo-async");
const {
	AsyncSeriesBailHook,
	HookMap,
	SyncBailHook,
	SyncHook,
	SyncWaterfallHook
} = require("tapable");
const ChunkGraph = require("./ChunkGraph");
const Module = require("./Module");
const ModuleFactory = require("./ModuleFactory");
const ModuleGraph = require("./ModuleGraph");
const { JAVASCRIPT_MODULE_TYPE_AUTO } = require("./ModuleTypeConstants");
const NormalModule = require("./NormalModule");
const { ImportPhaseUtils } = require("./dependencies/ImportPhase");
const BasicEffectRulePlugin = require("./rules/BasicEffectRulePlugin");
const BasicMatcherRulePlugin = require("./rules/BasicMatcherRulePlugin");
const ObjectMatcherRulePlugin = require("./rules/ObjectMatcherRulePlugin");
const RuleSetCompiler = require("./rules/RuleSetCompiler");
const UseEffectRulePlugin = require("./rules/UseEffectRulePlugin");
const LazySet = require("./util/LazySet");
const { getScheme } = require("./util/URLAbsoluteSpecifier");
const { cachedCleverMerge, cachedSetProperty } = require("./util/cleverMerge");
const { join } = require("./util/fs");
const {
	parseResource,
	parseResourceWithoutFragment
} = require("./util/identifier");

/** @typedef {import("enhanced-resolve").ResolveContext} ResolveContext */
/** @typedef {import("enhanced-resolve").ResolveRequest} ResolveRequest */
/** @typedef {import("../declarations/WebpackOptions").ModuleOptionsNormalized} ModuleOptions */
/** @typedef {import("../declarations/WebpackOptions").RuleSetRule} RuleSetRule */
/** @typedef {import("./Compilation").FileSystemDependencies} FileSystemDependencies */
/** @typedef {import("./Generator")} Generator */
/** @typedef {import("./ModuleFactory").ModuleFactoryCallback} ModuleFactoryCallback */
/** @typedef {import("./ModuleFactory").ModuleFactoryCreateData} ModuleFactoryCreateData */
/** @typedef {import("./ModuleFactory").ModuleFactoryCreateDataContextInfo} ModuleFactoryCreateDataContextInfo */
/** @typedef {import("./ModuleFactory").ModuleFactoryResult} ModuleFactoryResult */
/** @typedef {import("./NormalModule").GeneratorOptions} GeneratorOptions */
/** @typedef {import("./NormalModule").LoaderItem} LoaderItem */
/** @typedef {import("./NormalModule").NormalModuleCreateData} NormalModuleCreateData */
/** @typedef {import("./NormalModule").ParserOptions} ParserOptions */
/** @typedef {import("./Parser")} Parser */
/** @typedef {import("./ResolverFactory")} ResolverFactory */
/** @typedef {import("./ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("./dependencies/ModuleDependency")} ModuleDependency */
/** @typedef {import("./dependencies/ImportPhase").ImportPhaseType} ImportPhaseType */
/** @typedef {import("./dependencies/ImportPhase").ImportPhaseName} ImportPhaseName */
/** @typedef {import("./javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("./rules/RuleSetCompiler").RuleSetRules} RuleSetRules */
/** @typedef {import("./rules/RuleSetCompiler").RuleSet} RuleSet */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("./util/identifier").AssociatedObjectForCache} AssociatedObjectForCache */

/**
 * Defines the callback type used by this module.
 * @template T
 * @typedef {import("./Compiler").Callback<T>} Callback
 */

/** @typedef {Pick<RuleSetRule, "type" | "sideEffects" | "parser" | "generator" | "resolve" | "layer" | "extractSourceMap">} ModuleSettings */
/** @typedef {Partial<NormalModuleCreateData & { settings: ModuleSettings }>} CreateData */

/**
 * Defines the resolve data type used by this module.
 * @typedef {object} ResolveData
 * @property {ModuleFactoryCreateData["contextInfo"]} contextInfo
 * @property {ModuleFactoryCreateData["resolveOptions"]} resolveOptions
 * @property {string} context
 * @property {string} request
 * @property {ImportPhaseName=} phase
 * @property {ImportAttributes=} attributes
 * @property {ModuleDependency[]} dependencies
 * @property {string} dependencyType
 * @property {CreateData} createData
 * @property {FileSystemDependencies} fileDependencies
 * @property {FileSystemDependencies} missingDependencies
 * @property {FileSystemDependencies} contextDependencies
 * @property {Module=} ignoredModule
 * @property {boolean} cacheable allow to use the unsafe cache
 */

/**
 * Defines the resource data type used by this module.
 * @typedef {object} ResourceData
 * @property {string} resource
 * @property {string=} path
 * @property {string=} query
 * @property {string=} fragment
 * @property {string=} context
 */

/**
 * Defines the resource scheme data type used by this module.
 * @typedef {object} ResourceSchemeData
 * @property {string=} mimetype mime type of the resource
 * @property {string=} parameters additional parameters for the resource
 * @property {"base64" | false=} encoding encoding of the resource
 * @property {string=} encodedContent encoded content of the resource
 */

/** @typedef {ResourceData & { data: ResourceSchemeData & Partial<ResolveRequest> }} ResourceDataWithData */

/**
 * Defines the parsed loader request type used by this module.
 * @typedef {object} ParsedLoaderRequest
 * @property {string} loader loader
 * @property {string | undefined} options options
 */

/** @typedef {import("./ModuleTypeConstants").JAVASCRIPT_MODULE_TYPE_AUTO} JAVASCRIPT_MODULE_TYPE_AUTO */
/** @typedef {import("./ModuleTypeConstants").JAVASCRIPT_MODULE_TYPE_DYNAMIC} JAVASCRIPT_MODULE_TYPE_DYNAMIC */
/** @typedef {import("./ModuleTypeConstants").JAVASCRIPT_MODULE_TYPE_ESM} JAVASCRIPT_MODULE_TYPE_ESM */
/** @typedef {import("./ModuleTypeConstants").JSON_MODULE_TYPE} JSON_MODULE_TYPE */
/** @typedef {import("./ModuleTypeConstants").ASSET_MODULE_TYPE} ASSET_MODULE_TYPE */
/** @typedef {import("./ModuleTypeConstants").ASSET_MODULE_TYPE_INLINE} ASSET_MODULE_TYPE_INLINE */
/** @typedef {import("./ModuleTypeConstants").ASSET_MODULE_TYPE_RESOURCE} ASSET_MODULE_TYPE_RESOURCE */
/** @typedef {import("./ModuleTypeConstants").ASSET_MODULE_TYPE_SOURCE} ASSET_MODULE_TYPE_SOURCE */
/** @typedef {import("./ModuleTypeConstants").ASSET_MODULE_TYPE_BYTES} ASSET_MODULE_TYPE_BYTES */
/** @typedef {import("./ModuleTypeConstants").WEBASSEMBLY_MODULE_TYPE_ASYNC} WEBASSEMBLY_MODULE_TYPE_ASYNC */
/** @typedef {import("./ModuleTypeConstants").WEBASSEMBLY_MODULE_TYPE_SYNC} WEBASSEMBLY_MODULE_TYPE_SYNC */
/** @typedef {import("./ModuleTypeConstants").CSS_MODULE_TYPE} CSS_MODULE_TYPE */
/** @typedef {import("./ModuleTypeConstants").CSS_MODULE_TYPE_GLOBAL} CSS_MODULE_TYPE_GLOBAL */
/** @typedef {import("./ModuleTypeConstants").CSS_MODULE_TYPE_MODULE} CSS_MODULE_TYPE_MODULE */
/** @typedef {import("./ModuleTypeConstants").CSS_MODULE_TYPE_AUTO} CSS_MODULE_TYPE_AUTO */

/** @typedef {JAVASCRIPT_MODULE_TYPE_AUTO | JAVASCRIPT_MODULE_TYPE_DYNAMIC | JAVASCRIPT_MODULE_TYPE_ESM | JSON_MODULE_TYPE | ASSET_MODULE_TYPE | ASSET_MODULE_TYPE_INLINE | ASSET_MODULE_TYPE_RESOURCE | ASSET_MODULE_TYPE_SOURCE | WEBASSEMBLY_MODULE_TYPE_ASYNC | WEBASSEMBLY_MODULE_TYPE_SYNC | CSS_MODULE_TYPE | CSS_MODULE_TYPE_GLOBAL | CSS_MODULE_TYPE_MODULE | CSS_MODULE_TYPE_AUTO} KnownNormalModuleTypes */
/** @typedef {KnownNormalModuleTypes | string} NormalModuleTypes */

const EMPTY_RESOLVE_OPTIONS = {};
/** @type {ParserOptions} */
const EMPTY_PARSER_OPTIONS = {};
/** @type {GeneratorOptions} */
const EMPTY_GENERATOR_OPTIONS = {};
/** @type {ParsedLoaderRequest[]} */
const EMPTY_ELEMENTS = [];

const MATCH_RESOURCE_REGEX = /^([^!]+)!=!/;
const LEADING_DOT_EXTENSION_REGEX = /^[^.]/;

/**
 * Returns ident.
 * @param {LoaderItem} data data
 * @returns {string} ident
 */
const loaderToIdent = (data) => {
	if (!data.options) {
		return data.loader;
	}
	if (typeof data.options === "string") {
		return `${data.loader}?${data.options}`;
	}
	if (typeof data.options !== "object") {
		throw new Error("loader options must be string or object");
	}
	if (data.ident) {
		return `${data.loader}??${data.ident}`;
	}
	return `${data.loader}?${JSON.stringify(data.options)}`;
};

/**
 * Stringify loaders and resource.
 * @param {LoaderItem[]} loaders loaders
 * @param {string} resource resource
 * @returns {string} stringified loaders and resource
 */
const stringifyLoadersAndResource = (loaders, resource) => {
	let str = "";
	for (const loader of loaders) {
		str += `${loaderToIdent(loader)}!`;
	}
	return str + resource;
};

/**
 * Checks whether it needs calls.
 * @param {number} times times
 * @param {(err?: null | Error) => void} callback callback
 * @returns {(err?: null | Error) => void} callback
 */
const needCalls = (times, callback) => (err) => {
	if (--times === 0) {
		return callback(err);
	}
	if (err && times > 0) {
		times = Number.NaN;
		return callback(err);
	}
};

/**
 * Merges global options.
 * @template T
 * @template O
 * @param {T} globalOptions global options
 * @param {string} type type
 * @param {O} localOptions local options
 * @returns {T & O | T | O} result
 */
const mergeGlobalOptions = (globalOptions, type, localOptions) => {
	const parts = type.split("/");
	/** @type {undefined | T} */
	let result;
	let current = "";
	for (const part of parts) {
		current = current ? `${current}/${part}` : part;
		const options =
			/** @type {T} */
			(globalOptions[/** @type {keyof T} */ (current)]);
		if (typeof options === "object") {
			result =
				result === undefined ? options : cachedCleverMerge(result, options);
		}
	}
	if (result === undefined) {
		return localOptions;
	}
	return cachedCleverMerge(result, localOptions);
};

// TODO webpack 6 remove
/**
 * Deprecation changed hook message.
 * @template {import("tapable").Hook<EXPECTED_ANY, EXPECTED_ANY>} T
 * @param {string} name name
 * @param {T} hook hook
 * @returns {string} result
 */
const deprecationChangedHookMessage = (name, hook) => {
	const names = hook.taps.map((tapped) => tapped.name).join(", ");

	return (
		`NormalModuleFactory.${name} (${names}) is no longer a waterfall hook, but a bailing hook instead. ` +
		"Do not return the passed object, but modify it instead. " +
		"Returning false will ignore the request and results in no module created."
	);
};

const ruleSetCompiler = new RuleSetCompiler([
	new BasicMatcherRulePlugin("test", "resource"),
	new BasicMatcherRulePlugin("scheme"),
	new BasicMatcherRulePlugin("mimetype"),
	new BasicMatcherRulePlugin("dependency"),
	new BasicMatcherRulePlugin("include", "resource"),
	new BasicMatcherRulePlugin("exclude", "resource", true),
	new BasicMatcherRulePlugin("resource"),
	new BasicMatcherRulePlugin("resourceQuery"),
	new BasicMatcherRulePlugin("resourceFragment"),
	new BasicMatcherRulePlugin("realResource"),
	new BasicMatcherRulePlugin("issuer"),
	new BasicMatcherRulePlugin("compiler"),
	new BasicMatcherRulePlugin("issuerLayer"),
	new BasicMatcherRulePlugin("phase"),
	new ObjectMatcherRulePlugin("assert", "attributes", (value) => {
		if (value) {
			return (
				/** @type {ImportAttributes} */ (value)._isLegacyAssert !== undefined
			);
		}

		return false;
	}),
	new ObjectMatcherRulePlugin("with", "attributes", (value) => {
		if (value) {
			return !(/** @type {ImportAttributes} */ (value)._isLegacyAssert);
		}
		return false;
	}),
	new ObjectMatcherRulePlugin("descriptionData"),
	new BasicEffectRulePlugin("type"),
	new BasicEffectRulePlugin("sideEffects"),
	new BasicEffectRulePlugin("parser"),
	new BasicEffectRulePlugin("resolve"),
	new BasicEffectRulePlugin("generator"),
	new BasicEffectRulePlugin("layer"),
	new BasicEffectRulePlugin("extractSourceMap"),
	new UseEffectRulePlugin()
]);

/** @typedef {import("./javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("./javascript/JavascriptGenerator")} JavascriptGenerator */
/** @typedef {import("../declarations/WebpackOptions").EmptyGeneratorOptions} EmptyGeneratorOptions */

/** @typedef {import("./json/JsonParser")} JsonParser */
/** @typedef {import("../declarations/WebpackOptions").JsonParserOptions} JsonParserOptions */
/** @typedef {import("./json/JsonGenerator")} JsonGenerator */
/** @typedef {import("../declarations/WebpackOptions").JsonGeneratorOptions} JsonGeneratorOptions */

/** @typedef {import("./asset/AssetParser")} AssetParser */
/** @typedef {import("./asset/AssetSourceParser")} AssetSourceParser */
/** @typedef {import("./asset/AssetBytesParser")} AssetBytesParser */
/** @typedef {import("../declarations/WebpackOptions").AssetParserOptions} AssetParserOptions */
/** @typedef {import("../declarations/WebpackOptions").EmptyParserOptions} EmptyParserOptions */
/** @typedef {import("./asset/AssetGenerator")} AssetGenerator */
/** @typedef {import("../declarations/WebpackOptions").AssetGeneratorOptions} AssetGeneratorOptions */
/** @typedef {import("../declarations/WebpackOptions").AssetInlineGeneratorOptions} AssetInlineGeneratorOptions */
/** @typedef {import("../declarations/WebpackOptions").AssetResourceGeneratorOptions} AssetResourceGeneratorOptions */
/** @typedef {import("./asset/AssetSourceGenerator")} AssetSourceGenerator */
/** @typedef {import("./asset/AssetBytesGenerator")} AssetBytesGenerator */

/** @typedef {import("./wasm-async/AsyncWebAssemblyParser")} AsyncWebAssemblyParser */
/** @typedef {import("./wasm-sync/WebAssemblyParser")} WebAssemblyParser */

/** @typedef {import("./css/CssParser")} CssParser */
/** @typedef {import("../declarations/WebpackOptions").CssParserOptions} CssParserOptions */
/** @typedef {import("../declarations/WebpackOptions").CssModuleParserOptions} CssModuleParserOptions */
/** @typedef {import("./css/CssGenerator")} CssGenerator */
/** @typedef {import("../declarations/WebpackOptions").CssGeneratorOptions} CssGeneratorOptions */
/** @typedef {import("../declarations/WebpackOptions").CssModuleGeneratorOptions} CssModuleGeneratorOptions */

/* eslint-disable jsdoc/type-formatting */
/**
 * Defines the shared type used by this module.
 * @typedef {[
 * [JAVASCRIPT_MODULE_TYPE_AUTO, JavascriptParser, JavascriptParserOptions, JavascriptGenerator, EmptyGeneratorOptions],
 * [JAVASCRIPT_MODULE_TYPE_DYNAMIC, JavascriptParser, JavascriptParserOptions, JavascriptGenerator, EmptyGeneratorOptions],
 * [JAVASCRIPT_MODULE_TYPE_ESM, JavascriptParser, JavascriptParserOptions, JavascriptGenerator, EmptyGeneratorOptions],
 * [JSON_MODULE_TYPE, JsonParser, JsonParserOptions, JsonGenerator, JsonGeneratorOptions],
 * [ASSET_MODULE_TYPE, AssetParser, AssetParserOptions, AssetGenerator, AssetGeneratorOptions],
 * [ASSET_MODULE_TYPE_INLINE, AssetParser, EmptyParserOptions, AssetGenerator, AssetGeneratorOptions],
 * [ASSET_MODULE_TYPE_RESOURCE, AssetParser, EmptyParserOptions, AssetGenerator, AssetGeneratorOptions],
 * [ASSET_MODULE_TYPE_SOURCE, AssetSourceParser, EmptyParserOptions, AssetSourceGenerator, EmptyGeneratorOptions],
 * [ASSET_MODULE_TYPE_BYTES, AssetBytesParser, EmptyParserOptions, AssetBytesGenerator, EmptyGeneratorOptions],
 * [WEBASSEMBLY_MODULE_TYPE_ASYNC, AsyncWebAssemblyParser, EmptyParserOptions, Generator, EmptyParserOptions],
 * [WEBASSEMBLY_MODULE_TYPE_SYNC, WebAssemblyParser, EmptyParserOptions, Generator, EmptyParserOptions],
 * [CSS_MODULE_TYPE, CssParser, CssParserOptions, CssGenerator, CssGeneratorOptions],
 * [CSS_MODULE_TYPE_AUTO, CssParser, CssModuleParserOptions, CssGenerator, CssModuleGeneratorOptions],
 * [CSS_MODULE_TYPE_MODULE, CssParser, CssModuleParserOptions, CssGenerator, CssModuleGeneratorOptions],
 * [CSS_MODULE_TYPE_GLOBAL, CssParser, CssModuleParserOptions, CssGenerator, CssModuleGeneratorOptions],
 * [string, Parser, ParserOptions, Generator, GeneratorOptions],
 * ]} ParsersAndGeneratorsByTypes
 */
/* eslint-enable jsdoc/type-formatting */

/**
 * Defines the extract tuple elements type used by this module.
 * @template {unknown[]} T
 * @template {number[]} I
 * @typedef {{ [K in keyof I]: K extends keyof I ? I[K] extends keyof T ? T[I[K]] : never : never }} ExtractTupleElements
 */

/**
 * Represents the normal module factory runtime component.
 * @template {unknown[]} T
 * @template {number[]} A
 * @template [R=void]
 * @typedef {T extends [infer Head extends [string, ...unknown[]], ...infer Tail extends [string, ...unknown[]][]] ? Record<Head[0], SyncBailHook<ExtractTupleElements<Head, A>, R extends number ? Head[R] : R>> & RecordFactoryFromTuple<Tail, A, R> : unknown } RecordFactoryFromTuple
 */

class NormalModuleFactory extends ModuleFactory {
	/**
	 * Creates an instance of NormalModuleFactory.
	 * @param {object} param params
	 * @param {string=} param.context context
	 * @param {InputFileSystem} param.fs file system
	 * @param {ResolverFactory} param.resolverFactory resolverFactory
	 * @param {ModuleOptions} param.options options
	 * @param {AssociatedObjectForCache} param.associatedObjectForCache an object to which the cache will be attached
	 */
	constructor({
		context,
		fs,
		resolverFactory,
		options,
		associatedObjectForCache
	}) {
		super();
		this.hooks = Object.freeze({
			/** @type {AsyncSeriesBailHook<[ResolveData], Module | false | void>} */
			resolve: new AsyncSeriesBailHook(["resolveData"]),
			/** @type {HookMap<AsyncSeriesBailHook<[ResourceDataWithData, ResolveData], true | void>>} */
			resolveForScheme: new HookMap(
				() => new AsyncSeriesBailHook(["resourceData", "resolveData"])
			),
			/** @type {HookMap<AsyncSeriesBailHook<[ResourceDataWithData, ResolveData], true | void>>} */
			resolveInScheme: new HookMap(
				() => new AsyncSeriesBailHook(["resourceData", "resolveData"])
			),
			/** @type {AsyncSeriesBailHook<[ResolveData], Module | undefined>} */
			factorize: new AsyncSeriesBailHook(["resolveData"]),
			/** @type {AsyncSeriesBailHook<[ResolveData], false | void>} */
			beforeResolve: new AsyncSeriesBailHook(["resolveData"]),
			/** @type {AsyncSeriesBailHook<[ResolveData], false | void>} */
			afterResolve: new AsyncSeriesBailHook(["resolveData"]),
			/** @type {AsyncSeriesBailHook<[CreateData, ResolveData], Module | void>} */
			createModule: new AsyncSeriesBailHook(["createData", "resolveData"]),
			/** @type {SyncWaterfallHook<[Module, CreateData, ResolveData]>} */
			module: new SyncWaterfallHook(["module", "createData", "resolveData"]),
			/** @type {import("tapable").TypedHookMap<RecordFactoryFromTuple<ParsersAndGeneratorsByTypes, [2], 1>>} */
			createParser: new HookMap(() => new SyncBailHook(["parserOptions"])),
			/** @type {import("tapable").TypedHookMap<RecordFactoryFromTuple<ParsersAndGeneratorsByTypes, [1, 2]>>} */
			parser: new HookMap(() => new SyncHook(["parser", "parserOptions"])),
			/** @type {import("tapable").TypedHookMap<RecordFactoryFromTuple<ParsersAndGeneratorsByTypes, [4], 3>>} */
			createGenerator: new HookMap(
				() => new SyncBailHook(["generatorOptions"])
			),
			/** @type {import("tapable").TypedHookMap<RecordFactoryFromTuple<ParsersAndGeneratorsByTypes, [3, 4]>>} */
			generator: new HookMap(
				() => new SyncHook(["generator", "generatorOptions"])
			),
			/** @type {HookMap<SyncBailHook<[CreateData, ResolveData], Module | void>>} */
			createModuleClass: new HookMap(
				() => new SyncBailHook(["createData", "resolveData"])
			)
		});
		/** @type {ResolverFactory} */
		this.resolverFactory = resolverFactory;
		/** @type {RuleSet} */
		this.ruleSet = ruleSetCompiler.compile([
			{
				rules: /** @type {RuleSetRules} */ (options.defaultRules)
			},
			{
				rules: /** @type {RuleSetRules} */ (options.rules)
			}
		]);
		/** @type {string} */
		this.context = context || "";
		/** @type {InputFileSystem} */
		this.fs = fs;
		this._globalParserOptions = options.parser;
		this._globalGeneratorOptions = options.generator;
		/** @type {Map<string, WeakMap<ParserOptions, Parser>>} */
		this.parserCache = new Map();
		/** @type {Map<string, WeakMap<GeneratorOptions, Generator>>} */
		this.generatorCache = new Map();
		/** @type {Set<Module>} */
		this._restoredUnsafeCacheEntries = new Set();

		/** @type {(resource: string) => import("./util/identifier").ParsedResource} */
		const cacheParseResource = parseResource.bindCache(
			associatedObjectForCache
		);
		const cachedParseResourceWithoutFragment =
			parseResourceWithoutFragment.bindCache(associatedObjectForCache);
		this._parseResourceWithoutFragment = cachedParseResourceWithoutFragment;

		this.hooks.factorize.tapAsync(
			{
				name: "NormalModuleFactory",
				stage: 100
			},
			(resolveData, callback) => {
				this.hooks.resolve.callAsync(resolveData, (err, result) => {
					if (err) return callback(err);

					// Ignored
					if (result === false) return callback();

					// direct module
					if (result instanceof Module) return callback(null, result);

					if (typeof result === "object") {
						throw new Error(
							`${deprecationChangedHookMessage(
								"resolve",
								this.hooks.resolve
							)} Returning a Module object will result in this module used as result.`
						);
					}

					this.hooks.afterResolve.callAsync(resolveData, (err, result) => {
						if (err) return callback(err);

						if (typeof result === "object") {
							throw new Error(
								deprecationChangedHookMessage(
									"afterResolve",
									this.hooks.afterResolve
								)
							);
						}

						// Ignored
						if (result === false) return callback();

						const createData = resolveData.createData;

						this.hooks.createModule.callAsync(
							createData,
							resolveData,
							(err, createdModule) => {
								if (!createdModule) {
									if (!resolveData.request) {
										return callback(new Error("Empty dependency (no request)"));
									}

									// TODO webpack 6 make it required and move javascript/wasm/asset properties to own module
									createdModule = this.hooks.createModuleClass
										.for(
											/** @type {ModuleSettings} */
											(createData.settings).type
										)
										.call(createData, resolveData);

									if (!createdModule) {
										createdModule = /** @type {Module} */ (
											new NormalModule(
												/** @type {NormalModuleCreateData} */
												(createData)
											)
										);
									}
								}

								createdModule = this.hooks.module.call(
									createdModule,
									createData,
									resolveData
								);

								return callback(null, createdModule);
							}
						);
					});
				});
			}
		);
		this.hooks.resolve.tapAsync(
			{
				name: "NormalModuleFactory",
				stage: 100
			},
			(data, callback) => {
				const {
					contextInfo,
					context,
					dependencies,
					dependencyType,
					request,
					phase,
					attributes,
					resolveOptions,
					fileDependencies,
					missingDependencies,
					contextDependencies
				} = data;
				const loaderResolver = this.getResolver("loader");

				/** @type {ResourceData | undefined} */
				let matchResourceData;
				/** @type {string} */
				let unresolvedResource;
				/** @type {ParsedLoaderRequest[]} */
				let elements;
				let noPreAutoLoaders = false;
				let noAutoLoaders = false;
				let noPrePostAutoLoaders = false;

				const contextScheme = getScheme(context);
				/** @type {string | undefined} */
				let scheme = getScheme(request);

				if (!scheme) {
					/** @type {string} */
					let requestWithoutMatchResource = request;
					const matchResourceMatch = MATCH_RESOURCE_REGEX.exec(request);
					if (matchResourceMatch) {
						let matchResource = matchResourceMatch[1];
						// Check if matchResource starts with ./ or ../
						if (matchResource.charCodeAt(0) === 46) {
							// 46 is "."
							const secondChar = matchResource.charCodeAt(1);
							if (
								secondChar === 47 || // 47 is "/"
								(secondChar === 46 && matchResource.charCodeAt(2) === 47) // "../"
							) {
								// Resolve relative path against context
								matchResource = join(this.fs, context, matchResource);
							}
						}

						matchResourceData = {
							...cacheParseResource(matchResource),
							resource: matchResource
						};
						requestWithoutMatchResource = request.slice(
							matchResourceMatch[0].length
						);
					}

					scheme = getScheme(requestWithoutMatchResource);

					if (!scheme && !contextScheme) {
						const firstChar = requestWithoutMatchResource.charCodeAt(0);
						const secondChar = requestWithoutMatchResource.charCodeAt(1);
						noPreAutoLoaders = firstChar === 45 && secondChar === 33; // startsWith "-!"
						noAutoLoaders = noPreAutoLoaders || firstChar === 33; // startsWith "!"
						noPrePostAutoLoaders = firstChar === 33 && secondChar === 33; // startsWith "!!";
						const rawElements = requestWithoutMatchResource
							.slice(
								noPreAutoLoaders || noPrePostAutoLoaders
									? 2
									: noAutoLoaders
										? 1
										: 0
							)
							.split(/!+/);
						unresolvedResource = /** @type {string} */ (rawElements.pop());
						elements = rawElements.map((el) => {
							const { path, query } = cachedParseResourceWithoutFragment(el);
							return {
								loader: path,
								options: query ? query.slice(1) : undefined
							};
						});
						scheme = getScheme(unresolvedResource);
					} else {
						unresolvedResource = requestWithoutMatchResource;
						elements = EMPTY_ELEMENTS;
					}
				} else {
					unresolvedResource = request;
					elements = EMPTY_ELEMENTS;
				}

				/** @type {ResolveContext} */
				const resolveContext = {
					fileDependencies,
					missingDependencies,
					contextDependencies
				};

				/** @type {ResourceDataWithData} */
				let resourceData;

				/** @type {undefined | LoaderItem[]} */
				let loaders;

				const continueCallback = needCalls(2, (err) => {
					if (err) return callback(err);

					// translate option idents
					try {
						for (const item of /** @type {LoaderItem[]} */ (loaders)) {
							if (typeof item.options === "string" && item.options[0] === "?") {
								const ident = item.options.slice(1);
								if (ident === "[[missing ident]]") {
									throw new Error(
										"No ident is provided by referenced loader. " +
											"When using a function for Rule.use in config you need to " +
											"provide an 'ident' property for referenced loader options."
									);
								}
								item.options = this.ruleSet.references.get(ident);
								if (item.options === undefined) {
									throw new Error(
										"Invalid ident is provided by referenced loader"
									);
								}
								item.ident = ident;
							}
						}
					} catch (identErr) {
						return callback(/** @type {Error} */ (identErr));
					}

					if (!resourceData) {
						// ignored
						return callback(null, dependencies[0].createIgnoredModule(context));
					}

					const userRequest =
						(matchResourceData !== undefined
							? `${matchResourceData.resource}!=!`
							: "") +
						stringifyLoadersAndResource(
							/** @type {LoaderItem[]} */ (loaders),
							resourceData.resource
						);

					/** @type {ModuleSettings} */
					const settings = {};
					/** @type {LoaderItem[]} */
					const useLoadersPost = [];
					/** @type {LoaderItem[]} */
					const useLoaders = [];
					/** @type {LoaderItem[]} */
					const useLoadersPre = [];

					// handle .webpack[] suffix
					/** @type {string} */
					let resource;
					/** @type {RegExpExecArray | null} */
					let match;
					if (
						matchResourceData &&
						typeof (resource = matchResourceData.resource) === "string" &&
						(match = /\.webpack\[([^\]]+)\]$/.exec(resource))
					) {
						settings.type = match[1];
						matchResourceData.resource = matchResourceData.resource.slice(
							0,
							-settings.type.length - 10
						);
					} else {
						settings.type = JAVASCRIPT_MODULE_TYPE_AUTO;
						const resourceDataForRules = matchResourceData || resourceData;

						const result = this.ruleSet.exec({
							resource: resourceDataForRules.path,
							realResource: resourceData.path,
							resourceQuery: resourceDataForRules.query,
							resourceFragment: resourceDataForRules.fragment,
							scheme,
							phase,
							attributes,
							mimetype: matchResourceData
								? ""
								: resourceData.data.mimetype || "",
							dependency: dependencyType,
							descriptionData: matchResourceData
								? undefined
								: resourceData.data.descriptionFileData,
							issuer: contextInfo.issuer,
							compiler: contextInfo.compiler,
							issuerLayer: contextInfo.issuerLayer || ""
						});
						for (const r of result) {
							// https://github.com/webpack/webpack/issues/16466
							// if a request exists PrePostAutoLoaders, should disable modifying Rule.type
							if (r.type === "type" && noPrePostAutoLoaders) {
								continue;
							}
							if (r.type === "use") {
								if (!noAutoLoaders && !noPrePostAutoLoaders) {
									useLoaders.push(r.value);
								}
							} else if (r.type === "use-post") {
								if (!noPrePostAutoLoaders) {
									useLoadersPost.push(r.value);
								}
							} else if (r.type === "use-pre") {
								if (!noPreAutoLoaders && !noPrePostAutoLoaders) {
									useLoadersPre.push(r.value);
								}
							} else if (
								typeof r.value === "object" &&
								r.value !== null &&
								typeof settings[
									/** @type {keyof ModuleSettings} */
									(r.type)
								] === "object" &&
								settings[/** @type {keyof ModuleSettings} */ (r.type)] !== null
							) {
								const type = /** @type {keyof ModuleSettings} */ (r.type);
								settings[type] = cachedCleverMerge(settings[type], r.value);
							} else {
								const type = /** @type {keyof ModuleSettings} */ (r.type);
								settings[type] = r.value;
							}
						}
					}

					/** @type {undefined | LoaderItem[]} */
					let postLoaders;
					/** @type {undefined | LoaderItem[]} */
					let normalLoaders;
					/** @type {undefined | LoaderItem[]} */
					let preLoaders;

					const continueCallback = needCalls(3, (err) => {
						if (err) {
							return callback(err);
						}
						const allLoaders = /** @type {LoaderItem[]} */ (postLoaders);
						if (matchResourceData === undefined) {
							for (const loader of /** @type {LoaderItem[]} */ (loaders)) {
								allLoaders.push(loader);
							}
							for (const loader of /** @type {LoaderItem[]} */ (
								normalLoaders
							)) {
								allLoaders.push(loader);
							}
						} else {
							for (const loader of /** @type {LoaderItem[]} */ (
								normalLoaders
							)) {
								allLoaders.push(loader);
							}
							for (const loader of /** @type {LoaderItem[]} */ (loaders)) {
								allLoaders.push(loader);
							}
						}
						for (const loader of /** @type {LoaderItem[]} */ (preLoaders)) {
							allLoaders.push(loader);
						}
						const type = /** @type {NormalModuleTypes} */ (settings.type);
						const resolveOptions = settings.resolve;
						const layer = settings.layer;

						try {
							Object.assign(data.createData, {
								layer:
									layer === undefined ? contextInfo.issuerLayer || null : layer,
								request: stringifyLoadersAndResource(
									allLoaders,
									resourceData.resource
								),
								userRequest,
								rawRequest: request,
								loaders: allLoaders,
								resource: resourceData.resource,
								context:
									resourceData.context || getContext(resourceData.resource),
								matchResource: matchResourceData
									? matchResourceData.resource
									: undefined,
								resourceResolveData: resourceData.data,
								settings,
								type,
								parser: this.getParser(type, settings.parser),
								parserOptions: settings.parser,
								generator: this.getGenerator(type, settings.generator),
								generatorOptions: settings.generator,
								resolveOptions,
								extractSourceMap: settings.extractSourceMap || false
							});
						} catch (createDataErr) {
							return callback(/** @type {Error} */ (createDataErr));
						}
						callback();
					});
					this.resolveRequestArray(
						contextInfo,
						this.context,
						useLoadersPost,
						loaderResolver,
						resolveContext,
						(err, result) => {
							postLoaders = result;
							continueCallback(err);
						}
					);
					this.resolveRequestArray(
						contextInfo,
						this.context,
						useLoaders,
						loaderResolver,
						resolveContext,
						(err, result) => {
							normalLoaders = result;
							continueCallback(err);
						}
					);
					this.resolveRequestArray(
						contextInfo,
						this.context,
						useLoadersPre,
						loaderResolver,
						resolveContext,
						(err, result) => {
							preLoaders = result;
							continueCallback(err);
						}
					);
				});

				this.resolveRequestArray(
					contextInfo,
					contextScheme ? this.context : context,
					/** @type {LoaderItem[]} */ (elements),
					loaderResolver,
					resolveContext,
					(err, result) => {
						if (err) return continueCallback(err);
						loaders = result;
						continueCallback();
					}
				);

				/**
				 * Processes the provided string.
				 * @param {string} context context
				 */
				const defaultResolve = (context) => {
					if (/^(?:$|\?)/.test(unresolvedResource)) {
						resourceData = {
							...cacheParseResource(unresolvedResource),
							resource: unresolvedResource,
							data: {}
						};
						continueCallback();
					}

					// resource without scheme and with path
					else {
						const normalResolver = this.getResolver(
							"normal",
							dependencyType
								? cachedSetProperty(
										resolveOptions || EMPTY_RESOLVE_OPTIONS,
										"dependencyType",
										dependencyType
									)
								: resolveOptions
						);
						this.resolveResource(
							contextInfo,
							context,
							unresolvedResource,
							normalResolver,
							resolveContext,
							(err, _resolvedResource, resolvedResourceResolveData) => {
								if (err) return continueCallback(err);
								if (_resolvedResource !== false) {
									const resolvedResource =
										/** @type {string} */
										(_resolvedResource);
									resourceData = {
										...cacheParseResource(resolvedResource),
										resource: resolvedResource,
										data:
											/** @type {ResolveRequest} */
											(resolvedResourceResolveData)
									};
								}
								continueCallback();
							}
						);
					}
				};

				// resource with scheme
				if (scheme) {
					resourceData = {
						resource: unresolvedResource,
						data: {},
						path: undefined,
						query: undefined,
						fragment: undefined,
						context: undefined
					};
					this.hooks.resolveForScheme
						.for(scheme)
						.callAsync(resourceData, data, (err) => {
							if (err) return continueCallback(err);
							continueCallback();
						});
				}

				// resource within scheme
				else if (contextScheme) {
					resourceData = {
						resource: unresolvedResource,
						data: {},
						path: undefined,
						query: undefined,
						fragment: undefined,
						context: undefined
					};
					this.hooks.resolveInScheme
						.for(contextScheme)
						.callAsync(resourceData, data, (err, handled) => {
							if (err) return continueCallback(err);
							if (!handled) return defaultResolve(this.context);
							continueCallback();
						});
				}

				// resource without scheme and without path
				else {
					defaultResolve(context);
				}
			}
		);
	}

	cleanupForCache() {
		for (const module of this._restoredUnsafeCacheEntries) {
			ChunkGraph.clearChunkGraphForModule(module);
			ModuleGraph.clearModuleGraphForModule(module);
			module.cleanupForCache();
		}
	}

	/**
	 * Processes the provided data.
	 * @param {ModuleFactoryCreateData} data data object
	 * @param {ModuleFactoryCallback} callback callback
	 * @returns {void}
	 */
	create(data, callback) {
		const dependencies = /** @type {ModuleDependency[]} */ (data.dependencies);
		const context = data.context || this.context;
		const resolveOptions = data.resolveOptions || EMPTY_RESOLVE_OPTIONS;
		const dependency = dependencies[0];
		const request = dependency.request;
		const attributes =
			/** @type {ModuleDependency & { attributes: ImportAttributes }} */
			(dependency).attributes;
		const phase =
			typeof (
				/** @type {ModuleDependency & { phase?: ImportPhaseType }} */
				(dependency).phase
			) === "number"
				? ImportPhaseUtils.stringify(
						/** @type {ModuleDependency & { phase?: ImportPhaseType }} */
						(dependency).phase
					)
				: "evaluation";
		const dependencyType = dependency.category || "";
		const contextInfo = data.contextInfo;
		/** @type {FileSystemDependencies} */
		const fileDependencies = new LazySet();
		/** @type {FileSystemDependencies} */
		const missingDependencies = new LazySet();
		/** @type {FileSystemDependencies} */
		const contextDependencies = new LazySet();
		/** @type {ResolveData} */
		const resolveData = {
			contextInfo,
			resolveOptions,
			context,
			request,
			phase,
			attributes,
			dependencies,
			dependencyType,
			fileDependencies,
			missingDependencies,
			contextDependencies,
			createData: {},
			cacheable: true
		};
		this.hooks.beforeResolve.callAsync(resolveData, (err, result) => {
			if (err) {
				return callback(err, {
					fileDependencies,
					missingDependencies,
					contextDependencies,
					cacheable: false
				});
			}

			// Ignored
			if (result === false) {
				/** @type {ModuleFactoryResult} * */
				const factoryResult = {
					fileDependencies,
					missingDependencies,
					contextDependencies,
					cacheable: resolveData.cacheable
				};

				if (resolveData.ignoredModule) {
					factoryResult.module = resolveData.ignoredModule;
				}

				return callback(null, factoryResult);
			}

			if (typeof result === "object") {
				throw new Error(
					deprecationChangedHookMessage(
						"beforeResolve",
						this.hooks.beforeResolve
					)
				);
			}

			this.hooks.factorize.callAsync(resolveData, (err, module) => {
				if (err) {
					return callback(err, {
						fileDependencies,
						missingDependencies,
						contextDependencies,
						cacheable: false
					});
				}

				/** @type {ModuleFactoryResult} * */
				const factoryResult = {
					module,
					fileDependencies,
					missingDependencies,
					contextDependencies,
					cacheable: resolveData.cacheable
				};

				callback(null, factoryResult);
			});
		});
	}

	/**
	 * Processes the provided context info.
	 * @param {ModuleFactoryCreateDataContextInfo} contextInfo context info
	 * @param {string} context context
	 * @param {string} unresolvedResource unresolved resource
	 * @param {ResolverWithOptions} resolver resolver
	 * @param {ResolveContext} resolveContext resolver context
	 * @param {(err: null | Error, res?: string | false, req?: ResolveRequest) => void} callback callback
	 */
	resolveResource(
		contextInfo,
		context,
		unresolvedResource,
		resolver,
		resolveContext,
		callback
	) {
		resolver.resolve(
			contextInfo,
			context,
			unresolvedResource,
			resolveContext,
			(err, resolvedResource, resolvedResourceResolveData) => {
				if (err) {
					return this._resolveResourceErrorHints(
						err,
						contextInfo,
						context,
						unresolvedResource,
						resolver,
						resolveContext,
						(err2, hints) => {
							if (err2) {
								err.message += `
A fatal error happened during resolving additional hints for this error: ${err2.message}`;
								err.stack += `

A fatal error happened during resolving additional hints for this error:
${err2.stack}`;
								return callback(err);
							}
							if (hints && hints.length > 0) {
								err.message += `
${hints.join("\n\n")}`;
							}

							// Check if the extension is missing a leading dot (e.g. "js" instead of ".js")
							let appendResolveExtensionsHint = false;
							const specifiedExtensions = [...resolver.options.extensions];
							const expectedExtensions = specifiedExtensions.map(
								(extension) => {
									if (LEADING_DOT_EXTENSION_REGEX.test(extension)) {
										appendResolveExtensionsHint = true;
										return `.${extension}`;
									}
									return extension;
								}
							);
							if (appendResolveExtensionsHint) {
								err.message += `\nDid you miss the leading dot in 'resolve.extensions'? Did you mean '${JSON.stringify(
									expectedExtensions
								)}' instead of '${JSON.stringify(specifiedExtensions)}'?`;
							}

							callback(err);
						}
					);
				}
				callback(err, resolvedResource, resolvedResourceResolveData);
			}
		);
	}

	/**
	 * Resolve resource error hints.
	 * @param {Error} error error
	 * @param {ModuleFactoryCreateDataContextInfo} contextInfo context info
	 * @param {string} context context
	 * @param {string} unresolvedResource unresolved resource
	 * @param {ResolverWithOptions} resolver resolver
	 * @param {ResolveContext} resolveContext resolver context
	 * @param {Callback<string[]>} callback callback
	 * @private
	 */
	_resolveResourceErrorHints(
		error,
		contextInfo,
		context,
		unresolvedResource,
		resolver,
		resolveContext,
		callback
	) {
		asyncLib.parallel(
			[
				(callback) => {
					if (!resolver.options.fullySpecified) return callback();
					resolver
						.withOptions({
							fullySpecified: false
						})
						.resolve(
							contextInfo,
							context,
							unresolvedResource,
							resolveContext,
							(err, resolvedResource) => {
								if (!err && resolvedResource) {
									const resource = parseResource(resolvedResource).path.replace(
										/^.*[\\/]/,
										""
									);
									return callback(
										null,
										`Did you mean '${resource}'?
BREAKING CHANGE: The request '${unresolvedResource}' failed to resolve only because it was resolved as fully specified
(probably because the origin is strict EcmaScript Module, e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"').
The extension in the request is mandatory for it to be fully specified.
Add the extension to the request.`
									);
								}
								callback();
							}
						);
				},
				(callback) => {
					if (!resolver.options.enforceExtension) return callback();
					resolver
						.withOptions({
							enforceExtension: false,
							extensions: []
						})
						.resolve(
							contextInfo,
							context,
							unresolvedResource,
							resolveContext,
							(err, resolvedResource) => {
								if (!err && resolvedResource) {
									let hint = "";
									const match = /\.[^.]+(?:\?|$)/.exec(unresolvedResource);
									if (match) {
										const fixedRequest = unresolvedResource.replace(
											/(\.[^.]+)(\?|$)/,
											"$2"
										);
										hint = resolver.options.extensions.has(match[1])
											? `Did you mean '${fixedRequest}'?`
											: `Did you mean '${fixedRequest}'? Also note that '${match[1]}' is not in 'resolve.extensions' yet and need to be added for this to work?`;
									} else {
										hint =
											"Did you mean to omit the extension or to remove 'resolve.enforceExtension'?";
									}
									return callback(
										null,
										`The request '${unresolvedResource}' failed to resolve only because 'resolve.enforceExtension' was specified.
${hint}
Including the extension in the request is no longer possible. Did you mean to enforce including the extension in requests with 'resolve.extensions: []' instead?`
									);
								}
								callback();
							}
						);
				},
				(callback) => {
					if (
						/^\.\.?\//.test(unresolvedResource) ||
						resolver.options.preferRelative
					) {
						return callback();
					}
					resolver.resolve(
						contextInfo,
						context,
						`./${unresolvedResource}`,
						resolveContext,
						(err, resolvedResource) => {
							if (err || !resolvedResource) return callback();
							const moduleDirectories = resolver.options.modules
								.map((m) => (Array.isArray(m) ? m.join(", ") : m))
								.join(", ");
							callback(
								null,
								`Did you mean './${unresolvedResource}'?
Requests that should resolve in the current directory need to start with './'.
Requests that start with a name are treated as module requests and resolve within module directories (${moduleDirectories}).
If changing the source code is not an option there is also a resolve options called 'preferRelative' which tries to resolve these kind of requests in the current directory too.`
							);
						}
					);
				}
			],
			(err, hints) => {
				if (err) return callback(err);
				callback(null, /** @type {string[]} */ (hints).filter(Boolean));
			}
		);
	}

	/**
	 * Resolves request array.
	 * @param {ModuleFactoryCreateDataContextInfo} contextInfo context info
	 * @param {string} context context
	 * @param {LoaderItem[]} array array
	 * @param {ResolverWithOptions} resolver resolver
	 * @param {ResolveContext} resolveContext resolve context
	 * @param {Callback<LoaderItem[]>} callback callback
	 * @returns {void} result
	 */
	resolveRequestArray(
		contextInfo,
		context,
		array,
		resolver,
		resolveContext,
		callback
	) {
		// LoaderItem
		if (array.length === 0) return callback(null, array);
		asyncLib.map(
			array,
			/**
			 * Handles the callback logic for this hook.
			 * @param {LoaderItem} item item
			 * @param {Callback<LoaderItem>} callback callback
			 */
			(item, callback) => {
				resolver.resolve(
					contextInfo,
					context,
					item.loader,
					resolveContext,
					(err, result, resolveRequest) => {
						if (
							err &&
							/^[^/]*$/.test(item.loader) &&
							!item.loader.endsWith("-loader")
						) {
							return resolver.resolve(
								contextInfo,
								context,
								`${item.loader}-loader`,
								resolveContext,
								(err2) => {
									if (!err2) {
										err.message =
											`${err.message}\n` +
											"BREAKING CHANGE: It's no longer allowed to omit the '-loader' suffix when using loaders.\n" +
											`                 You need to specify '${item.loader}-loader' instead of '${item.loader}',\n` +
											"                 see https://webpack.js.org/migrate/3/#automatic-loader-module-name-extension-removed";
									}
									callback(err);
								}
							);
						}
						if (err) return callback(err);

						const parsedResult = this._parseResourceWithoutFragment(
							/** @type {string} */
							(result)
						);

						const type = /\.mjs$/i.test(parsedResult.path)
							? "module"
							: /\.cjs$/i.test(parsedResult.path)
								? "commonjs"
								: /** @type {ResolveRequest} */
									(resolveRequest).descriptionFileData === undefined
									? undefined
									: /** @type {string} */
										(
											/** @type {ResolveRequest} */
											(resolveRequest).descriptionFileData.type
										);
						/** @type {LoaderItem} */
						const resolved = {
							loader: parsedResult.path,
							type,
							options:
								item.options === undefined
									? parsedResult.query
										? parsedResult.query.slice(1)
										: undefined
									: item.options,
							ident: item.options === undefined ? undefined : item.ident
						};

						return callback(null, resolved);
					}
				);
			},
			(err, value) => {
				callback(
					/** @type {Error | null} */ (err),
					/** @type {(LoaderItem)[]} */ (value)
				);
			}
		);
	}

	/**
	 * Returns parser.
	 * @param {string} type type
	 * @param {ParserOptions} parserOptions parser options
	 * @returns {Parser} parser
	 */
	getParser(type, parserOptions = EMPTY_PARSER_OPTIONS) {
		let cache = this.parserCache.get(type);

		if (cache === undefined) {
			cache = new WeakMap();
			this.parserCache.set(type, cache);
		}

		let parser = cache.get(parserOptions);

		if (parser === undefined) {
			parser = this.createParser(type, parserOptions);
			cache.set(parserOptions, parser);
		}

		return parser;
	}

	/**
	 * Creates a parser from the provided type.
	 * @param {string} type type
	 * @param {ParserOptions} parserOptions parser options
	 * @returns {Parser} parser
	 */
	createParser(type, parserOptions = {}) {
		parserOptions = mergeGlobalOptions(
			this._globalParserOptions,
			type,
			parserOptions
		);
		const parser = this.hooks.createParser.for(type).call(parserOptions);
		if (!parser) {
			throw new Error(`No parser registered for ${type}`);
		}
		this.hooks.parser.for(type).call(parser, parserOptions);
		return parser;
	}

	/**
	 * Returns generator.
	 * @param {string} type type of generator
	 * @param {GeneratorOptions} generatorOptions generator options
	 * @returns {Generator} generator
	 */
	getGenerator(type, generatorOptions = EMPTY_GENERATOR_OPTIONS) {
		let cache = this.generatorCache.get(type);

		if (cache === undefined) {
			cache = new WeakMap();
			this.generatorCache.set(type, cache);
		}

		let generator = cache.get(generatorOptions);

		if (generator === undefined) {
			generator = this.createGenerator(type, generatorOptions);
			cache.set(generatorOptions, generator);
		}

		return generator;
	}

	/**
	 * Creates a generator.
	 * @param {string} type type of generator
	 * @param {GeneratorOptions} generatorOptions generator options
	 * @returns {Generator} generator
	 */
	createGenerator(type, generatorOptions = {}) {
		generatorOptions = mergeGlobalOptions(
			this._globalGeneratorOptions,
			type,
			generatorOptions
		);
		const generator = this.hooks.createGenerator
			.for(type)
			.call(generatorOptions);
		if (!generator) {
			throw new Error(`No generator registered for ${type}`);
		}
		this.hooks.generator.for(type).call(generator, generatorOptions);
		return generator;
	}

	/**
	 * Returns the resolver.
	 * @param {Parameters<ResolverFactory["get"]>[0]} type type of resolver
	 * @param {Parameters<ResolverFactory["get"]>[1]=} resolveOptions options
	 * @returns {ReturnType<ResolverFactory["get"]>} the resolver
	 */
	getResolver(type, resolveOptions) {
		return this.resolverFactory.get(type, resolveOptions);
	}
}

module.exports = NormalModuleFactory;
