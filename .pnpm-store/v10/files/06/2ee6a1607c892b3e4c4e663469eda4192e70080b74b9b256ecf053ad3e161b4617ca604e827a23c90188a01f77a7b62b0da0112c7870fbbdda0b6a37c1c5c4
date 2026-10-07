/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const vm = require("vm");
const eslintScope = require("eslint-scope");
const { SyncBailHook, SyncHook, SyncWaterfallHook } = require("tapable");
const {
	CachedSource,
	ConcatSource,
	OriginalSource,
	PrefixSource,
	RawSource,
	ReplaceSource
} = require("webpack-sources");
const Compilation = require("../Compilation");
const { tryRunOrWebpackError } = require("../HookWebpackError");
const HotUpdateChunk = require("../HotUpdateChunk");
const InitFragment = require("../InitFragment");
const { JAVASCRIPT_TYPE } = require("../ModuleSourceTypeConstants");
const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC,
	JAVASCRIPT_MODULE_TYPE_ESM,
	WEBPACK_MODULE_TYPE_RUNTIME
} = require("../ModuleTypeConstants");
const NormalModule = require("../NormalModule");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const { last, someInIterable } = require("../util/IterableHelpers");
const StringXor = require("../util/StringXor");
const { compareModulesByFullName } = require("../util/comparators");
const {
	RESERVED_NAMES,
	addScopeSymbols,
	findNewName,
	getAllReferences,
	getPathInAst,
	getUsedNamesInScopeInfo
} = require("../util/concatenate");
const createHash = require("../util/createHash");
const nonNumericOnlyHash = require("../util/nonNumericOnlyHash");
const removeBOM = require("../util/removeBOM");
const { intersectRuntime } = require("../util/runtime");
const JavascriptGenerator = require("./JavascriptGenerator");
const JavascriptParser = require("./JavascriptParser");

/** @typedef {import("eslint-scope").Reference} Reference */
/** @typedef {import("eslint-scope").Scope} Scope */
/** @typedef {import("eslint-scope").Variable} Variable */
/** @typedef {import("estree").Program} Program */
/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../config/defaults").OutputNormalizedWithDefaults} OutputOptions */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../ChunkGraph").EntryModuleWithChunkGroup} EntryModuleWithChunkGroup */
/** @typedef {import("../CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("../Compilation").ChunkHashContext} ChunkHashContext */
/** @typedef {import("../Compilation").ExecuteModuleObject} ExecuteModuleObject */
/** @typedef {import("../Compilation").WebpackRequire} WebpackRequire */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../DependencyTemplates")} DependencyTemplates */
/** @typedef {import("../Entrypoint")} Entrypoint */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../Module").CodeGenerationResultData} CodeGenerationResultData */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("../TemplatedPathPlugin").TemplatePath} TemplatePath */
/** @typedef {import("../WebpackError")} WebpackError */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/concatenate").ScopeSet} ScopeSet */
/** @typedef {import("../util/concatenate").UsedNamesInScopeInfo} UsedNamesInScopeInfo */

/** @type {WeakMap<ChunkGraph, WeakMap<Chunk, boolean>>} */
const chunkHasJsCache = new WeakMap();

/**
 * Returns true, when a JS file is needed for this chunk.
 * @param {Chunk} chunk a chunk
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @returns {boolean} true, when a JS file is needed for this chunk
 */
const _chunkHasJs = (chunk, chunkGraph) => {
	if (chunkGraph.getNumberOfEntryModules(chunk) > 0) {
		for (const module of chunkGraph.getChunkEntryModulesIterable(chunk)) {
			if (chunkGraph.getModuleSourceTypes(module).has(JAVASCRIPT_TYPE)) {
				return true;
			}
		}
	}

	return Boolean(
		chunkGraph.getChunkModulesIterableBySourceType(chunk, JAVASCRIPT_TYPE)
	);
};

/**
 * Returns true, when a JS file is needed for this chunk.
 * @param {Chunk} chunk a chunk
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @returns {boolean} true, when a JS file is needed for this chunk
 */
const chunkHasJs = (chunk, chunkGraph) => {
	let innerCache = chunkHasJsCache.get(chunkGraph);
	if (innerCache === undefined) {
		innerCache = new WeakMap();
		chunkHasJsCache.set(chunkGraph, innerCache);
	}

	const cachedResult = innerCache.get(chunk);
	if (cachedResult !== undefined) {
		return cachedResult;
	}

	const result = _chunkHasJs(chunk, chunkGraph);
	innerCache.set(chunk, result);
	return result;
};

/**
 * Chunk has runtime or js.
 * @param {Chunk} chunk a chunk
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @returns {boolean} true, when a JS file is needed for this chunk
 */
const chunkHasRuntimeOrJs = (chunk, chunkGraph) => {
	if (chunkHasJs(chunk, chunkGraph)) {
		return true;
	}

	if (
		chunkGraph.getChunkModulesIterableBySourceType(
			chunk,
			WEBPACK_MODULE_TYPE_RUNTIME
		)
	) {
		for (const chunkGroup of chunk.groupsIterable) {
			for (const c of chunkGroup.chunks) {
				if (chunkHasJs(c, chunkGraph)) return true;
			}
		}
		return false;
	}

	return false;
};

/**
 * Print generated code for stack.
 * @param {Module} module a module
 * @param {string} code the code
 * @returns {string} generated code for the stack
 */
const printGeneratedCodeForStack = (module, code) => {
	const lines = code.split("\n");
	const n = `${lines.length}`.length;
	return `\n\nGenerated code for ${module.identifier()}\n${lines
		.map(
			/**
			 * Handles the callback logic for this hook.
			 * @param {string} line the line
			 * @param {number} i the index
			 * @param {string[]} _lines the lines
			 * @returns {string} the line with line number
			 */
			(line, i, _lines) => {
				const iStr = `${i + 1}`;
				return `${" ".repeat(n - iStr.length)}${iStr} | ${line}`;
			}
		)
		.join("\n")}`;
};

/**
 * Defines the render context type used by this module.
 * @typedef {object} RenderContext
 * @property {Chunk} chunk the chunk
 * @property {DependencyTemplates} dependencyTemplates the dependency templates
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {CodeGenerationResults} codeGenerationResults results of code generation
 * @property {boolean | undefined} strictMode rendering in strict context
 */

/**
 * Defines the main render context type used by this module.
 * @typedef {object} MainRenderContext
 * @property {Chunk} chunk the chunk
 * @property {DependencyTemplates} dependencyTemplates the dependency templates
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {CodeGenerationResults} codeGenerationResults results of code generation
 * @property {string} hash hash to be used for render call
 * @property {boolean | undefined} strictMode rendering in strict context
 */

/**
 * Defines the chunk render context type used by this module.
 * @typedef {object} ChunkRenderContext
 * @property {Chunk} chunk the chunk
 * @property {DependencyTemplates} dependencyTemplates the dependency templates
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {CodeGenerationResults} codeGenerationResults results of code generation
 * @property {InitFragment<ChunkRenderContext>[]} chunkInitFragments init fragments for the chunk
 * @property {boolean | undefined} strictMode rendering in strict context
 */

/**
 * Defines the render bootstrap context type used by this module.
 * @typedef {object} RenderBootstrapContext
 * @property {Chunk} chunk the chunk
 * @property {CodeGenerationResults} codeGenerationResults results of code generation
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {string} hash hash to be used for render call
 */

/**
 * Defines the startup render context type used by this module.
 * @typedef {object} StartupRenderContext
 * @property {Chunk} chunk the chunk
 * @property {DependencyTemplates} dependencyTemplates the dependency templates
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {CodeGenerationResults} codeGenerationResults results of code generation
 * @property {boolean | undefined} strictMode rendering in strict context
 * @property {boolean=} inlined inlined
 * @property {boolean=} inlinedInIIFE the inlined entry module is wrapped in an IIFE
 * @property {boolean=} needExportsDeclaration whether the top-level exports declaration needs to be generated
 */

/**
 * Defines the module render context type used by this module.
 * @typedef {object} ModuleRenderContext
 * @property {Chunk} chunk the chunk
 * @property {DependencyTemplates} dependencyTemplates the dependency templates
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {CodeGenerationResults} codeGenerationResults results of code generation
 * @property {InitFragment<ChunkRenderContext>[]} chunkInitFragments init fragments for the chunk
 * @property {boolean | undefined} strictMode rendering in strict context
 * @property {boolean} factory true: renders as factory method, false: pure module content
 * @property {boolean=} inlinedInIIFE the inlined entry module is wrapped in an IIFE, existing only when `factory` is set to false
 * @property {boolean=} renderInObject render module in object container
 */

/**
 * Defines the compilation hooks type used by this module.
 * @typedef {object} CompilationHooks
 * @property {SyncWaterfallHook<[Source, Module, ModuleRenderContext]>} renderModuleContent
 * @property {SyncWaterfallHook<[Source, Module, ModuleRenderContext]>} renderModuleContainer
 * @property {SyncWaterfallHook<[Source, Module, ModuleRenderContext]>} renderModulePackage
 * @property {SyncWaterfallHook<[Source, RenderContext]>} renderChunk
 * @property {SyncWaterfallHook<[Source, RenderContext]>} renderMain
 * @property {SyncWaterfallHook<[Source, RenderContext]>} renderContent
 * @property {SyncWaterfallHook<[Source, RenderContext]>} render
 * @property {SyncWaterfallHook<[Source, Module, StartupRenderContext]>} renderStartup
 * @property {SyncWaterfallHook<[string, RenderBootstrapContext]>} renderRequire
 * @property {SyncBailHook<[Module, Partial<RenderBootstrapContext>], string | void>} inlineInRuntimeBailout
 * @property {SyncBailHook<[Module, RenderContext], string | void>} embedInRuntimeBailout
 * @property {SyncBailHook<[RenderContext], string | void>} strictRuntimeBailout
 * @property {SyncHook<[Chunk, Hash, ChunkHashContext]>} chunkHash
 * @property {SyncBailHook<[Chunk, RenderContext], boolean | void>} useSourceMap
 */

/** @type {WeakMap<Compilation, CompilationHooks>} */
const compilationHooksMap = new WeakMap();

const PLUGIN_NAME = "JavascriptModulesPlugin";

/** @typedef {{ header: string[], beforeStartup: string[], startup: string[], afterStartup: string[], allowInlineStartup: boolean }} Bootstrap */

class JavascriptModulesPlugin {
	/**
	 * Returns the attached hooks.
	 * @param {Compilation} compilation the compilation
	 * @returns {CompilationHooks} the attached hooks
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
				renderModuleContent: new SyncWaterfallHook([
					"source",
					"module",
					"moduleRenderContext"
				]),
				renderModuleContainer: new SyncWaterfallHook([
					"source",
					"module",
					"moduleRenderContext"
				]),
				renderModulePackage: new SyncWaterfallHook([
					"source",
					"module",
					"moduleRenderContext"
				]),
				render: new SyncWaterfallHook(["source", "renderContext"]),
				renderContent: new SyncWaterfallHook(["source", "renderContext"]),
				renderStartup: new SyncWaterfallHook([
					"source",
					"module",
					"startupRenderContext"
				]),
				renderChunk: new SyncWaterfallHook(["source", "renderContext"]),
				renderMain: new SyncWaterfallHook(["source", "renderContext"]),
				renderRequire: new SyncWaterfallHook(["code", "renderContext"]),
				inlineInRuntimeBailout: new SyncBailHook(["module", "renderContext"]),
				embedInRuntimeBailout: new SyncBailHook(["module", "renderContext"]),
				strictRuntimeBailout: new SyncBailHook(["renderContext"]),
				chunkHash: new SyncHook(["chunk", "hash", "context"]),
				useSourceMap: new SyncBailHook(["chunk", "renderContext"])
			};
			compilationHooksMap.set(compilation, hooks);
		}
		return hooks;
	}

	constructor(options = {}) {
		this.options = options;
		/** @type {WeakMap<Source, { source: Source, needModule: boolean, needExports: boolean, needRequire: boolean, needThisAsExports: boolean, needStrict: boolean | undefined, renderShorthand: boolean }>} */
		this._moduleFactoryCache = new WeakMap();
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				const hooks = JavascriptModulesPlugin.getCompilationHooks(compilation);

				for (const type of [
					JAVASCRIPT_MODULE_TYPE_AUTO,
					JAVASCRIPT_MODULE_TYPE_DYNAMIC,
					JAVASCRIPT_MODULE_TYPE_ESM
				]) {
					normalModuleFactory.hooks.createParser
						.for(type)
						.tap(PLUGIN_NAME, (options) => {
							switch (type) {
								case JAVASCRIPT_MODULE_TYPE_AUTO: {
									return new JavascriptParser("auto", { parse: options.parse });
								}
								case JAVASCRIPT_MODULE_TYPE_DYNAMIC: {
									return new JavascriptParser("script", {
										parse: options.parse
									});
								}
								case JAVASCRIPT_MODULE_TYPE_ESM: {
									return new JavascriptParser("module", {
										parse: options.parse
									});
								}
							}
						});
					normalModuleFactory.hooks.createGenerator
						.for(type)
						.tap(PLUGIN_NAME, () => new JavascriptGenerator());

					NormalModule.getCompilationHooks(compilation).processResult.tap(
						PLUGIN_NAME,
						(result, module) => {
							if (module.type === type) {
								const [source, ...rest] = result;

								return [removeBOM(source), ...rest];
							}

							return result;
						}
					);
				}

				compilation.hooks.renderManifest.tap(PLUGIN_NAME, (result, options) => {
					const {
						hash,
						chunk,
						chunkGraph,
						moduleGraph,
						runtimeTemplate,
						dependencyTemplates,
						outputOptions,
						codeGenerationResults
					} = options;

					const hotUpdateChunk = chunk instanceof HotUpdateChunk ? chunk : null;
					const filenameTemplate =
						JavascriptModulesPlugin.getChunkFilenameTemplate(
							chunk,
							outputOptions
						);

					/** @type {() => Source} */
					let render;

					if (hotUpdateChunk) {
						render = () =>
							this.renderChunk(
								{
									chunk,
									dependencyTemplates,
									runtimeTemplate,
									moduleGraph,
									chunkGraph,
									codeGenerationResults,
									strictMode: runtimeTemplate.isModule()
								},
								hooks
							);
					} else if (chunk.hasRuntime()) {
						if (!chunkHasRuntimeOrJs(chunk, chunkGraph)) {
							return result;
						}

						render = () =>
							this.renderMain(
								{
									hash,
									chunk,
									dependencyTemplates,
									runtimeTemplate,
									moduleGraph,
									chunkGraph,
									codeGenerationResults,
									strictMode: runtimeTemplate.isModule()
								},
								hooks,
								compilation
							);
					} else {
						if (!chunkHasJs(chunk, chunkGraph)) {
							return result;
						}

						render = () =>
							this.renderChunk(
								{
									chunk,
									dependencyTemplates,
									runtimeTemplate,
									moduleGraph,
									chunkGraph,
									codeGenerationResults,
									strictMode: runtimeTemplate.isModule()
								},
								hooks
							);
					}

					result.push({
						render,
						filenameTemplate,
						pathOptions: {
							hash,
							runtime: chunk.runtime,
							chunk,
							contentHashType: "javascript"
						},
						info: {
							javascriptModule: compilation.runtimeTemplate.isModule()
						},
						identifier: hotUpdateChunk
							? `hotupdatechunk${chunk.id}`
							: `chunk${chunk.id}`,
						hash: chunk.contentHash.javascript
					});

					return result;
				});
				compilation.hooks.chunkHash.tap(PLUGIN_NAME, (chunk, hash, context) => {
					hooks.chunkHash.call(chunk, hash, context);
					if (chunk.hasRuntime()) {
						this.updateHashWithBootstrap(
							hash,
							{
								hash: "0000",
								chunk,
								codeGenerationResults: context.codeGenerationResults,
								chunkGraph: context.chunkGraph,
								moduleGraph: context.moduleGraph,
								runtimeTemplate: context.runtimeTemplate
							},
							hooks
						);
					}
				});
				compilation.hooks.contentHash.tap(PLUGIN_NAME, (chunk) => {
					const {
						chunkGraph,
						moduleGraph,
						runtimeTemplate,
						outputOptions: {
							hashSalt,
							hashDigest,
							hashDigestLength,
							hashFunction
						}
					} = compilation;
					const codeGenerationResults =
						/** @type {CodeGenerationResults} */
						(compilation.codeGenerationResults);
					const hash = createHash(hashFunction);
					if (hashSalt) hash.update(hashSalt);
					if (chunk.hasRuntime()) {
						this.updateHashWithBootstrap(
							hash,
							{
								hash: "0000",
								chunk,
								codeGenerationResults,
								chunkGraph: compilation.chunkGraph,
								moduleGraph: compilation.moduleGraph,
								runtimeTemplate: compilation.runtimeTemplate
							},
							hooks
						);
					} else {
						hash.update(`${chunk.id} `);
						hash.update(chunk.ids ? chunk.ids.join(",") : "");
					}
					hooks.chunkHash.call(chunk, hash, {
						chunkGraph,
						codeGenerationResults,
						moduleGraph,
						runtimeTemplate
					});
					const modules = chunkGraph.getChunkModulesIterableBySourceType(
						chunk,
						JAVASCRIPT_TYPE
					);
					if (modules) {
						const xor = new StringXor();
						for (const m of modules) {
							xor.add(chunkGraph.getModuleHash(m, chunk.runtime));
						}
						xor.updateHash(hash);
					}
					const runtimeModules = chunkGraph.getChunkModulesIterableBySourceType(
						chunk,
						WEBPACK_MODULE_TYPE_RUNTIME
					);
					if (runtimeModules) {
						const xor = new StringXor();
						for (const m of runtimeModules) {
							xor.add(chunkGraph.getModuleHash(m, chunk.runtime));
						}
						xor.updateHash(hash);
					}
					const digest = hash.digest(hashDigest);
					chunk.contentHash.javascript = nonNumericOnlyHash(
						digest,
						hashDigestLength
					);
				});
				compilation.hooks.additionalTreeRuntimeRequirements.tap(
					PLUGIN_NAME,
					(chunk, set, { chunkGraph }) => {
						if (
							!set.has(RuntimeGlobals.startupNoDefault) &&
							chunkGraph.hasChunkEntryDependentChunks(chunk)
						) {
							set.add(RuntimeGlobals.onChunksLoaded);
							set.add(RuntimeGlobals.exports);
							set.add(RuntimeGlobals.require);
						}
					}
				);
				compilation.hooks.executeModule.tap(PLUGIN_NAME, (options, context) => {
					const source =
						options.codeGenerationResult.sources.get(JAVASCRIPT_TYPE);
					if (source === undefined) return;
					const { module } = options;
					const code = source.source();

					/** @type {(this: ExecuteModuleObject["exports"], exports: ExecuteModuleObject["exports"], moduleObject: ExecuteModuleObject, webpackRequire: WebpackRequire) => void} */
					const fn = vm.runInThisContext(
						`(function(${module.moduleArgument}, ${module.exportsArgument}, ${RuntimeGlobals.require}) {\n${code}\n/**/})`,
						{
							filename: module.identifier(),
							lineOffset: -1
						}
					);

					const moduleObject =
						/** @type {ExecuteModuleObject} */
						(options.moduleObject);

					try {
						fn.call(
							moduleObject.exports,
							moduleObject,
							moduleObject.exports,
							/** @type {WebpackRequire} */
							(context.__webpack_require__)
						);
					} catch (err) {
						/** @type {Error} */
						(err).stack += printGeneratedCodeForStack(
							options.module,
							/** @type {string} */ (code)
						);
						throw err;
					}
				});
				compilation.hooks.executeModule.tap(PLUGIN_NAME, (options, context) => {
					const source = options.codeGenerationResult.sources.get("runtime");
					if (source === undefined) return;
					let code = source.source();
					if (typeof code !== "string") code = code.toString();

					/** @type {(this: null, webpackRequire: WebpackRequire) => void} */
					const fn = vm.runInThisContext(
						`(function(${RuntimeGlobals.require}) {\n${code}\n/**/})`,
						{
							filename: options.module.identifier(),
							lineOffset: -1
						}
					);
					try {
						// eslint-disable-next-line no-useless-call
						fn.call(
							null,
							/** @type {WebpackRequire} */
							(context.__webpack_require__)
						);
					} catch (err) {
						/** @type {Error} */
						(err).stack += printGeneratedCodeForStack(options.module, code);
						throw err;
					}
				});
			}
		);
	}

	/**
	 * Gets chunk filename template.
	 * @param {Chunk} chunk chunk
	 * @param {OutputOptions} outputOptions output options
	 * @returns {TemplatePath} used filename template
	 */
	static getChunkFilenameTemplate(chunk, outputOptions) {
		if (chunk.filenameTemplate) {
			return chunk.filenameTemplate;
		} else if (chunk instanceof HotUpdateChunk) {
			return outputOptions.hotUpdateChunkFilename;
		} else if (chunk.canBeInitial()) {
			return outputOptions.filename;
		}
		return outputOptions.chunkFilename;
	}

	/**
	 * Renders the newly generated source from rendering.
	 * @param {Module} module the rendered module
	 * @param {ModuleRenderContext} renderContext options object
	 * @param {CompilationHooks} hooks hooks
	 * @returns {Source | null} the newly generated source from rendering
	 */
	renderModule(module, renderContext, hooks) {
		const {
			chunk,
			chunkGraph,
			runtimeTemplate,
			codeGenerationResults,
			strictMode,
			factory,
			renderInObject
		} = renderContext;
		try {
			const codeGenResult = codeGenerationResults.get(module, chunk.runtime);
			const moduleSource = codeGenResult.sources.get(JAVASCRIPT_TYPE);
			if (!moduleSource) return null;
			if (codeGenResult.data !== undefined) {
				const chunkInitFragments = codeGenResult.data.get("chunkInitFragments");
				if (chunkInitFragments) {
					for (const i of chunkInitFragments) {
						renderContext.chunkInitFragments.push(i);
					}
				}
			}
			const moduleSourcePostContent = tryRunOrWebpackError(
				() =>
					hooks.renderModuleContent.call(moduleSource, module, renderContext),
				"JavascriptModulesPlugin.getCompilationHooks().renderModuleContent"
			);
			/** @type {Source} */
			let moduleSourcePostContainer;
			if (factory) {
				const runtimeRequirements = chunkGraph.getModuleRuntimeRequirements(
					module,
					chunk.runtime
				);
				const needModule = runtimeRequirements.has(RuntimeGlobals.module);
				const needExports = runtimeRequirements.has(RuntimeGlobals.exports);
				const needRequire =
					runtimeRequirements.has(RuntimeGlobals.require) ||
					runtimeRequirements.has(RuntimeGlobals.requireScope);
				const needThisAsExports = runtimeRequirements.has(
					RuntimeGlobals.thisAsExports
				);
				const needStrict =
					/** @type {BuildInfo} */
					(module.buildInfo).strict && !strictMode;
				const cacheEntry = this._moduleFactoryCache.get(
					moduleSourcePostContent
				);
				const renderShorthand =
					renderInObject === true && runtimeTemplate.supportsMethodShorthand();
				/** @type {Source} */
				let source;
				if (
					cacheEntry &&
					cacheEntry.needModule === needModule &&
					cacheEntry.needExports === needExports &&
					cacheEntry.needRequire === needRequire &&
					cacheEntry.needThisAsExports === needThisAsExports &&
					cacheEntry.needStrict === needStrict &&
					cacheEntry.renderShorthand === renderShorthand
				) {
					source = cacheEntry.source;
				} else {
					const factorySource = new ConcatSource();
					/** @type {string[]} */
					const args = [];
					if (needExports || needRequire || needModule) {
						args.push(
							needModule
								? module.moduleArgument
								: `__unused_webpack_${module.moduleArgument}`
						);
					}
					if (needExports || needRequire) {
						args.push(
							needExports
								? module.exportsArgument
								: `__unused_webpack_${module.exportsArgument}`
						);
					}
					if (needRequire) args.push(RuntimeGlobals.require);

					if (renderShorthand) {
						// we can optimize function to methodShorthand if render module factory in object
						factorySource.add(`(${args.join(", ")}) {\n\n`);
					} else if (
						!needThisAsExports &&
						runtimeTemplate.supportsArrowFunction()
					) {
						factorySource.add(`/***/ ((${args.join(", ")}) => {\n\n`);
					} else {
						factorySource.add(`/***/ (function(${args.join(", ")}) {\n\n`);
					}

					if (needStrict) {
						factorySource.add('"use strict";\n');
					}
					factorySource.add(moduleSourcePostContent);
					factorySource.add(`\n\n/***/ }${renderShorthand ? "" : ")"}`);
					source = new CachedSource(factorySource);
					this._moduleFactoryCache.set(moduleSourcePostContent, {
						source,
						needModule,
						needExports,
						needRequire,
						needThisAsExports,
						needStrict,
						renderShorthand
					});
				}
				moduleSourcePostContainer = tryRunOrWebpackError(
					() => hooks.renderModuleContainer.call(source, module, renderContext),
					"JavascriptModulesPlugin.getCompilationHooks().renderModuleContainer"
				);
			} else {
				moduleSourcePostContainer = moduleSourcePostContent;
			}
			return tryRunOrWebpackError(
				() =>
					hooks.renderModulePackage.call(
						moduleSourcePostContainer,
						module,
						renderContext
					),
				"JavascriptModulesPlugin.getCompilationHooks().renderModulePackage"
			);
		} catch (err) {
			/** @type {WebpackError} */
			(err).module = module;
			throw err;
		}
	}

	/**
	 * Renders the rendered source.
	 * @param {RenderContext} renderContext the render context
	 * @param {CompilationHooks} hooks hooks
	 * @returns {Source} the rendered source
	 */
	renderChunk(renderContext, hooks) {
		const { chunk, chunkGraph, runtimeTemplate } = renderContext;
		const modules = chunkGraph.getOrderedChunkModulesIterableBySourceType(
			chunk,
			JAVASCRIPT_TYPE,
			compareModulesByFullName(runtimeTemplate.compilation.compiler)
		);
		const allModules = modules ? [...modules] : [];
		/** @type {undefined | string} */
		let strictHeader;
		let allStrict = renderContext.strictMode;
		if (
			!allStrict &&
			allModules.every((m) => /** @type {BuildInfo} */ (m.buildInfo).strict)
		) {
			const strictBailout = hooks.strictRuntimeBailout.call(renderContext);
			strictHeader = strictBailout
				? `// runtime can't be in strict mode because ${strictBailout}.\n`
				: '"use strict";\n';
			if (!strictBailout) allStrict = true;
		}
		/** @type {ChunkRenderContext} */
		const chunkRenderContext = {
			...renderContext,
			chunkInitFragments: [],
			strictMode: allStrict
		};
		const moduleSources =
			Template.renderChunkModules(
				chunkRenderContext,
				allModules,
				(module, renderInObject) =>
					this.renderModule(
						module,
						{ ...chunkRenderContext, factory: true, renderInObject },
						hooks
					)
			) || new RawSource("{}");
		let source = tryRunOrWebpackError(
			() => hooks.renderChunk.call(moduleSources, chunkRenderContext),
			"JavascriptModulesPlugin.getCompilationHooks().renderChunk"
		);
		source = tryRunOrWebpackError(
			() => hooks.renderContent.call(source, chunkRenderContext),
			"JavascriptModulesPlugin.getCompilationHooks().renderContent"
		);
		if (!source) {
			throw new Error(
				"JavascriptModulesPlugin error: JavascriptModulesPlugin.getCompilationHooks().renderContent plugins should return something"
			);
		}
		source = InitFragment.addToSource(
			source,
			chunkRenderContext.chunkInitFragments,
			chunkRenderContext
		);
		source = tryRunOrWebpackError(
			() => hooks.render.call(source, chunkRenderContext),
			"JavascriptModulesPlugin.getCompilationHooks().render"
		);
		if (!source) {
			throw new Error(
				"JavascriptModulesPlugin error: JavascriptModulesPlugin.getCompilationHooks().render plugins should return something"
			);
		}
		chunk.rendered = true;
		return strictHeader
			? new ConcatSource(strictHeader, source, ";")
			: renderContext.runtimeTemplate.isModule()
				? source
				: new ConcatSource(source, ";");
	}

	/**
	 * Renders the newly generated source from rendering.
	 * @param {MainRenderContext} renderContext options object
	 * @param {CompilationHooks} hooks hooks
	 * @param {Compilation} compilation the compilation
	 * @returns {Source} the newly generated source from rendering
	 */
	renderMain(renderContext, hooks, compilation) {
		const { chunk, chunkGraph, runtimeTemplate } = renderContext;

		const runtimeRequirements = chunkGraph.getTreeRuntimeRequirements(chunk);
		const iife = runtimeTemplate.isIIFE();

		const bootstrap = this.renderBootstrap(renderContext, hooks);
		const useSourceMap = hooks.useSourceMap.call(chunk, renderContext);

		/** @type {Module[]} */
		const allModules = [
			...(chunkGraph.getOrderedChunkModulesIterableBySourceType(
				chunk,
				JAVASCRIPT_TYPE,
				compareModulesByFullName(runtimeTemplate.compilation.compiler)
			) || [])
		];

		const hasEntryModules = chunkGraph.getNumberOfEntryModules(chunk) > 0;
		/** @type {Set<Module> | undefined} */
		let inlinedModules;
		if (bootstrap.allowInlineStartup && hasEntryModules) {
			inlinedModules = new Set(chunkGraph.getChunkEntryModulesIterable(chunk));
		}

		const source = new ConcatSource();
		/** @type {string} */
		let prefix;
		if (iife) {
			if (runtimeTemplate.supportsArrowFunction()) {
				source.add("/******/ (() => { // webpackBootstrap\n");
			} else {
				source.add("/******/ (function() { // webpackBootstrap\n");
			}
			prefix = "/******/ \t";
		} else {
			prefix = "/******/ ";
		}
		let allStrict = renderContext.strictMode;
		if (
			!allStrict &&
			allModules.every((m) => /** @type {BuildInfo} */ (m.buildInfo).strict)
		) {
			const strictBailout = hooks.strictRuntimeBailout.call(renderContext);
			if (strictBailout) {
				source.add(
					`${
						prefix
					}// runtime can't be in strict mode because ${strictBailout}.\n`
				);
			} else {
				allStrict = true;
				source.add(`${prefix}"use strict";\n`);
			}
		}

		/** @type {ChunkRenderContext} */
		const chunkRenderContext = {
			...renderContext,
			chunkInitFragments: [],
			strictMode: allStrict
		};

		const chunkModules = Template.renderChunkModules(
			chunkRenderContext,
			inlinedModules
				? allModules.filter(
						(m) => !(/** @type {Set<Module>} */ (inlinedModules).has(m))
					)
				: allModules,
			(module, renderInObject) =>
				this.renderModule(
					module,
					{ ...chunkRenderContext, factory: true, renderInObject },
					hooks
				),
			prefix
		);
		if (
			chunkModules ||
			runtimeRequirements.has(RuntimeGlobals.moduleFactories) ||
			runtimeRequirements.has(RuntimeGlobals.moduleFactoriesAddOnly) ||
			runtimeRequirements.has(RuntimeGlobals.require)
		) {
			source.add(`${prefix}var __webpack_modules__ = (`);
			source.add(chunkModules || "{}");
			source.add(");\n");
			source.add(
				"/************************************************************************/\n"
			);
		}

		if (bootstrap.header.length > 0) {
			const header = `${Template.asString(bootstrap.header)}\n`;
			source.add(
				new PrefixSource(
					prefix,
					useSourceMap
						? new OriginalSource(header, "webpack/bootstrap")
						: new RawSource(header)
				)
			);
			source.add(
				"/************************************************************************/\n"
			);
		}

		const runtimeModules =
			renderContext.chunkGraph.getChunkRuntimeModulesInOrder(chunk);

		if (runtimeModules.length > 0) {
			source.add(
				new PrefixSource(
					prefix,
					Template.renderRuntimeModules(runtimeModules, chunkRenderContext)
				)
			);
			source.add(
				"/************************************************************************/\n"
			);
			// runtimeRuntimeModules calls codeGeneration
			for (const module of runtimeModules) {
				compilation.codeGeneratedModules.add(module);
			}
		}
		if (inlinedModules) {
			if (bootstrap.beforeStartup.length > 0) {
				const beforeStartup = `${Template.asString(bootstrap.beforeStartup)}\n`;
				source.add(
					new PrefixSource(
						prefix,
						useSourceMap
							? new OriginalSource(beforeStartup, "webpack/before-startup")
							: new RawSource(beforeStartup)
					)
				);
			}
			const lastInlinedModule = /** @type {Module} */ (last(inlinedModules));
			const startupSource = new ConcatSource();

			const avoidEntryIife = compilation.options.optimization.avoidEntryIife;
			/** @type {Map<Module, Source> | false} */
			let renamedInlinedModule = false;
			let inlinedInIIFE = false;

			if (avoidEntryIife) {
				renamedInlinedModule = this._getRenamedInlineModule(
					compilation,
					allModules,
					renderContext,
					inlinedModules,
					chunkRenderContext,
					hooks,
					allStrict,
					Boolean(chunkModules)
				);
			}

			for (const m of inlinedModules) {
				const runtimeRequirements = chunkGraph.getModuleRuntimeRequirements(
					m,
					chunk.runtime
				);
				const exports = runtimeRequirements.has(RuntimeGlobals.exports);
				const webpackExports =
					exports && m.exportsArgument === RuntimeGlobals.exports;

				const innerStrict =
					!allStrict && /** @type {BuildInfo} */ (m.buildInfo).strict;

				const iife = innerStrict
					? "it needs to be in strict mode."
					: inlinedModules.size > 1
						? // TODO check globals and top-level declarations of other entries and chunk modules
							// to make a better decision
							"it needs to be isolated against other entry modules."
						: chunkModules && !renamedInlinedModule
							? "it needs to be isolated against other modules in the chunk."
							: exports && !webpackExports
								? `it uses a non-standard name for the exports (${m.exportsArgument}).`
								: hooks.embedInRuntimeBailout.call(m, renderContext);

				if (iife) {
					inlinedInIIFE = true;
				}

				const renderedModule = renamedInlinedModule
					? renamedInlinedModule.get(m)
					: this.renderModule(
							m,
							{
								...chunkRenderContext,
								factory: false,
								inlinedInIIFE
							},
							hooks
						);

				if (renderedModule) {
					/** @type {string} */
					let footer;
					if (iife !== undefined) {
						startupSource.add(
							`// This entry needs to be wrapped in an IIFE because ${iife}\n`
						);
						const arrow = runtimeTemplate.supportsArrowFunction();
						if (arrow) {
							startupSource.add("(() => {\n");
							footer = "\n})();\n\n";
						} else {
							startupSource.add("!function() {\n");
							footer = "\n}();\n";
						}
						if (innerStrict) startupSource.add('"use strict";\n');
					} else {
						footer = "\n";
					}
					if (exports) {
						if (m !== lastInlinedModule) {
							startupSource.add(`var ${m.exportsArgument} = {};\n`);
						} else if (m.exportsArgument !== RuntimeGlobals.exports) {
							startupSource.add(
								`var ${m.exportsArgument} = ${RuntimeGlobals.exports};\n`
							);
						}
					}
					startupSource.add(renderedModule);
					startupSource.add(footer);
				}
			}
			if (runtimeRequirements.has(RuntimeGlobals.onChunksLoaded)) {
				startupSource.add(
					`${RuntimeGlobals.exports} = ${RuntimeGlobals.onChunksLoaded}(${RuntimeGlobals.exports});\n`
				);
			}
			/** @type {StartupRenderContext} */
			const startupRenderContext = {
				...renderContext,
				inlined: true,
				inlinedInIIFE,
				needExportsDeclaration: runtimeRequirements.has(RuntimeGlobals.exports)
			};
			let renderedStartup = hooks.renderStartup.call(
				startupSource,
				lastInlinedModule,
				startupRenderContext
			);
			const lastInlinedModuleRequirements =
				chunkGraph.getModuleRuntimeRequirements(
					lastInlinedModule,
					chunk.runtime
				);
			if (
				// `onChunksLoaded` reads and reassigns `__webpack_exports__`
				runtimeRequirements.has(RuntimeGlobals.onChunksLoaded) ||
				// Top-level `__webpack_exports__` will be returned
				runtimeRequirements.has(RuntimeGlobals.returnExportsFromRuntime) ||
				// Custom exports argument aliases from `__webpack_exports__`
				(lastInlinedModuleRequirements.has(RuntimeGlobals.exports) &&
					lastInlinedModule.exportsArgument !== RuntimeGlobals.exports)
			) {
				startupRenderContext.needExportsDeclaration = true;
			}
			if (startupRenderContext.needExportsDeclaration) {
				renderedStartup = new ConcatSource(
					`var ${RuntimeGlobals.exports} = {};\n`,
					renderedStartup
				);
			}
			source.add(renderedStartup);
			if (bootstrap.afterStartup.length > 0) {
				const afterStartup = `${Template.asString(bootstrap.afterStartup)}\n`;
				source.add(
					new PrefixSource(
						prefix,
						useSourceMap
							? new OriginalSource(afterStartup, "webpack/after-startup")
							: new RawSource(afterStartup)
					)
				);
			}
		} else {
			const lastEntryModule =
				/** @type {Module} */
				(last(chunkGraph.getChunkEntryModulesIterable(chunk)));
			/** @type {(content: string[], name: string) => Source} */
			const toSource = useSourceMap
				? (content, name) =>
						new OriginalSource(Template.asString(content), name)
				: (content) => new RawSource(Template.asString(content));
			source.add(
				new PrefixSource(
					prefix,
					new ConcatSource(
						toSource(bootstrap.beforeStartup, "webpack/before-startup"),
						"\n",
						hooks.renderStartup.call(
							toSource([...bootstrap.startup, ""], "webpack/startup"),
							lastEntryModule,
							{
								...renderContext,
								inlined: false,
								needExportsDeclaration: true
							}
						),
						toSource(bootstrap.afterStartup, "webpack/after-startup"),
						"\n"
					)
				)
			);
		}
		if (
			hasEntryModules &&
			runtimeRequirements.has(RuntimeGlobals.returnExportsFromRuntime)
		) {
			source.add(`${prefix}return ${RuntimeGlobals.exports};\n`);
		}
		if (iife) {
			source.add("/******/ })()\n");
		}

		/** @type {Source} */
		let finalSource = tryRunOrWebpackError(
			() => hooks.renderMain.call(source, renderContext),
			"JavascriptModulesPlugin.getCompilationHooks().renderMain"
		);
		if (!finalSource) {
			throw new Error(
				"JavascriptModulesPlugin error: JavascriptModulesPlugin.getCompilationHooks().renderMain plugins should return something"
			);
		}
		finalSource = tryRunOrWebpackError(
			() => hooks.renderContent.call(finalSource, renderContext),
			"JavascriptModulesPlugin.getCompilationHooks().renderContent"
		);
		if (!finalSource) {
			throw new Error(
				"JavascriptModulesPlugin error: JavascriptModulesPlugin.getCompilationHooks().renderContent plugins should return something"
			);
		}

		finalSource = InitFragment.addToSource(
			finalSource,
			chunkRenderContext.chunkInitFragments,
			chunkRenderContext
		);
		finalSource = tryRunOrWebpackError(
			() => hooks.render.call(finalSource, renderContext),
			"JavascriptModulesPlugin.getCompilationHooks().render"
		);
		if (!finalSource) {
			throw new Error(
				"JavascriptModulesPlugin error: JavascriptModulesPlugin.getCompilationHooks().render plugins should return something"
			);
		}
		chunk.rendered = true;
		return iife ? new ConcatSource(finalSource, ";") : finalSource;
	}

	/**
	 * Updates hash with bootstrap.
	 * @param {Hash} hash the hash to be updated
	 * @param {RenderBootstrapContext} renderContext options object
	 * @param {CompilationHooks} hooks hooks
	 */
	updateHashWithBootstrap(hash, renderContext, hooks) {
		const bootstrap = this.renderBootstrap(renderContext, hooks);
		for (const _k of Object.keys(bootstrap)) {
			const key = /** @type {keyof Bootstrap} */ (_k);
			hash.update(key);
			if (Array.isArray(bootstrap[key])) {
				for (const line of bootstrap[key]) {
					hash.update(line);
				}
			} else {
				hash.update(JSON.stringify(bootstrap[key]));
			}
		}
	}

	/**
	 * Renders the generated source of the bootstrap code.
	 * @param {RenderBootstrapContext} renderContext options object
	 * @param {CompilationHooks} hooks hooks
	 * @returns {Bootstrap} the generated source of the bootstrap code
	 */
	renderBootstrap(renderContext, hooks) {
		const {
			chunkGraph,
			codeGenerationResults,
			moduleGraph,
			chunk,
			runtimeTemplate
		} = renderContext;

		const runtimeRequirements = chunkGraph.getTreeRuntimeRequirements(chunk);

		const requireFunction = runtimeRequirements.has(RuntimeGlobals.require);
		const moduleCache = runtimeRequirements.has(RuntimeGlobals.moduleCache);
		const moduleFactories = runtimeRequirements.has(
			RuntimeGlobals.moduleFactories
		);
		const moduleUsed = runtimeRequirements.has(RuntimeGlobals.module);
		const requireScopeUsed = runtimeRequirements.has(
			RuntimeGlobals.requireScope
		);
		const interceptModuleExecution = runtimeRequirements.has(
			RuntimeGlobals.interceptModuleExecution
		);

		const useRequire =
			requireFunction || interceptModuleExecution || moduleUsed;

		/**
		 * @type {{ startup: string[], beforeStartup: string[], header: string[], afterStartup: string[], allowInlineStartup: boolean }}
		 */
		const result = {
			header: [],
			beforeStartup: [],
			startup: [],
			afterStartup: [],
			allowInlineStartup: true
		};

		const { header: buf, startup, beforeStartup, afterStartup } = result;

		if (result.allowInlineStartup && moduleFactories) {
			startup.push(
				"// module factories are used so entry inlining is disabled"
			);
			result.allowInlineStartup = false;
		}
		if (result.allowInlineStartup && moduleCache) {
			startup.push("// module cache are used so entry inlining is disabled");
			result.allowInlineStartup = false;
		}
		if (result.allowInlineStartup && interceptModuleExecution) {
			startup.push(
				"// module execution is intercepted so entry inlining is disabled"
			);
			result.allowInlineStartup = false;
		}

		if (useRequire || moduleCache) {
			buf.push("// The module cache");
			buf.push("var __webpack_module_cache__ = {};");
			buf.push("");
		}

		if (runtimeRequirements.has(RuntimeGlobals.makeDeferredNamespaceObject)) {
			// in order to optimize of DeferredNamespaceObject, we remove all proxy handlers after the module initialize
			// (see MakeDeferredNamespaceObjectRuntimeModule)
			// This requires all deferred imports to a module can get the module export object before the module
			// is evaluated.
			buf.push("// The deferred module cache");
			buf.push("var __webpack_module_deferred_exports__ = {};");
			buf.push("");
		}

		if (useRequire) {
			buf.push("// The require function");
			buf.push(`function ${RuntimeGlobals.require}(moduleId) {`);
			buf.push(Template.indent(this.renderRequire(renderContext, hooks)));
			buf.push("}");
			buf.push("");
		} else if (runtimeRequirements.has(RuntimeGlobals.requireScope)) {
			buf.push("// The require scope");
			buf.push(`var ${RuntimeGlobals.require} = {};`);
			buf.push("");
		}

		if (
			moduleFactories ||
			runtimeRequirements.has(RuntimeGlobals.moduleFactoriesAddOnly)
		) {
			buf.push("// expose the modules object (__webpack_modules__)");
			buf.push(`${RuntimeGlobals.moduleFactories} = __webpack_modules__;`);
			buf.push("");
		}

		if (moduleCache) {
			buf.push("// expose the module cache");
			buf.push(`${RuntimeGlobals.moduleCache} = __webpack_module_cache__;`);
			buf.push("");
		}

		if (interceptModuleExecution) {
			buf.push("// expose the module execution interceptor");
			buf.push(`${RuntimeGlobals.interceptModuleExecution} = [];`);
			buf.push("");
		}

		if (!runtimeRequirements.has(RuntimeGlobals.startupNoDefault)) {
			if (chunkGraph.getNumberOfEntryModules(chunk) > 0) {
				/** @type {string[]} */
				const buf2 = [];
				const runtimeRequirements =
					chunkGraph.getTreeRuntimeRequirements(chunk);
				buf2.push("// Load entry module and return exports");

				/** @type {EntryModuleWithChunkGroup[]} */
				const jsEntries = [];
				for (const [
					entryModule,
					entrypoint
				] of chunkGraph.getChunkEntryModulesWithChunkGroupIterable(chunk)) {
					if (
						chunkGraph.getModuleSourceTypes(entryModule).has(JAVASCRIPT_TYPE)
					) {
						jsEntries.push([entryModule, entrypoint]);
						continue;
					}
				}
				let i = jsEntries.length;
				for (const [entryModule, entrypoint] of jsEntries) {
					const chunks =
						/** @type {Entrypoint} */
						(entrypoint).chunks.filter((c) => c !== chunk);
					if (result.allowInlineStartup && chunks.length > 0) {
						buf2.push(
							"// This entry module depends on other loaded chunks and execution need to be delayed"
						);
						result.allowInlineStartup = false;
					}
					if (
						result.allowInlineStartup &&
						someInIterable(
							moduleGraph.getIncomingConnectionsByOriginModule(entryModule),
							([originModule, connections]) =>
								originModule &&
								connections.some((c) => c.isTargetActive(chunk.runtime)) &&
								someInIterable(
									chunkGraph.getModuleRuntimes(originModule),
									(runtime) =>
										intersectRuntime(runtime, chunk.runtime) !== undefined
								)
						)
					) {
						buf2.push(
							"// This entry module is referenced by other modules so it can't be inlined"
						);
						result.allowInlineStartup = false;
					}

					/** @type {undefined | CodeGenerationResultData} */
					let data;
					if (codeGenerationResults.has(entryModule, chunk.runtime)) {
						const result = codeGenerationResults.get(
							entryModule,
							chunk.runtime
						);
						data = result.data;
					}
					if (
						result.allowInlineStartup &&
						(!data || !data.get("topLevelDeclarations")) &&
						(!entryModule.buildInfo ||
							!entryModule.buildInfo.topLevelDeclarations)
					) {
						buf2.push(
							"// This entry module doesn't tell about it's top-level declarations so it can't be inlined"
						);
						result.allowInlineStartup = false;
					}
					if (result.allowInlineStartup) {
						const bailout = hooks.inlineInRuntimeBailout.call(
							entryModule,
							renderContext
						);
						if (bailout !== undefined) {
							buf2.push(
								`// This entry module can't be inlined because ${bailout}`
							);
							result.allowInlineStartup = false;
						}
					}
					i--;
					const moduleId = chunkGraph.getModuleId(entryModule);
					const entryRuntimeRequirements =
						chunkGraph.getModuleRuntimeRequirements(entryModule, chunk.runtime);
					let moduleIdExpr = JSON.stringify(moduleId);
					if (runtimeRequirements.has(RuntimeGlobals.entryModuleId)) {
						moduleIdExpr = `${RuntimeGlobals.entryModuleId} = ${moduleIdExpr}`;
					}
					if (
						result.allowInlineStartup &&
						entryRuntimeRequirements.has(RuntimeGlobals.module)
					) {
						result.allowInlineStartup = false;
						buf2.push(
							"// This entry module used 'module' so it can't be inlined"
						);
					}
					if (
						result.allowInlineStartup &&
						entryRuntimeRequirements.has(RuntimeGlobals.thisAsExports)
					) {
						buf2.push(
							"// This entry module used `this` as exports so it can't be inlined"
						);
						result.allowInlineStartup = false;
					}

					if (chunks.length > 0) {
						buf2.push(
							`${i === 0 ? `var ${RuntimeGlobals.exports} = ` : ""}${
								RuntimeGlobals.onChunksLoaded
							}(undefined, ${JSON.stringify(
								chunks.map((c) => c.id)
							)}, ${runtimeTemplate.returningFunction(
								`${RuntimeGlobals.require}(${moduleIdExpr})`
							)})`
						);
					} else if (useRequire) {
						buf2.push(
							`${i === 0 ? `var ${RuntimeGlobals.exports} = ` : ""}${
								RuntimeGlobals.require
							}(${moduleIdExpr});`
						);
					} else {
						if (i === 0) buf2.push(`var ${RuntimeGlobals.exports} = {};`);
						const needThisAsExports = entryRuntimeRequirements.has(
							RuntimeGlobals.thisAsExports
						);

						/** @type {string[]} */
						const args = [];
						if (
							requireScopeUsed ||
							entryRuntimeRequirements.has(RuntimeGlobals.exports)
						) {
							const exportsArg = i === 0 ? RuntimeGlobals.exports : "{}";
							args.push("0", exportsArg);
							if (requireScopeUsed) {
								args.push(RuntimeGlobals.require);
							}
						}
						buf2.push(
							Template.asString(
								(() => {
									if (needThisAsExports) {
										const comma = args.length ? "," : "";
										return `__webpack_modules__[${moduleIdExpr}].call(${RuntimeGlobals.exports}${comma}${args.join(",")});`;
									}
									return `__webpack_modules__[${moduleIdExpr}](${args.join(",")});`;
								})()
							)
						);
					}
				}
				if (runtimeRequirements.has(RuntimeGlobals.onChunksLoaded)) {
					buf2.push(
						`${RuntimeGlobals.exports} = ${RuntimeGlobals.onChunksLoaded}(${RuntimeGlobals.exports});`
					);
				}
				if (
					runtimeRequirements.has(RuntimeGlobals.startup) ||
					(runtimeRequirements.has(RuntimeGlobals.startupOnlyBefore) &&
						runtimeRequirements.has(RuntimeGlobals.startupOnlyAfter))
				) {
					result.allowInlineStartup = false;
					buf.push("// the startup function");
					buf.push(
						`${RuntimeGlobals.startup} = ${runtimeTemplate.basicFunction("", [
							...buf2,
							`return ${RuntimeGlobals.exports};`
						])};`
					);
					buf.push("");
					startup.push("// run startup");
					startup.push(
						`var ${RuntimeGlobals.exports} = ${RuntimeGlobals.startup}();`
					);
				} else if (runtimeRequirements.has(RuntimeGlobals.startupOnlyBefore)) {
					buf.push("// the startup function");
					buf.push(
						`${RuntimeGlobals.startup} = ${runtimeTemplate.emptyFunction()};`
					);
					beforeStartup.push("// run runtime startup");
					beforeStartup.push(`${RuntimeGlobals.startup}();`);
					startup.push("// startup");
					startup.push(Template.asString(buf2));
				} else if (runtimeRequirements.has(RuntimeGlobals.startupOnlyAfter)) {
					buf.push("// the startup function");
					buf.push(
						`${RuntimeGlobals.startup} = ${runtimeTemplate.emptyFunction()};`
					);
					startup.push("// startup");
					startup.push(Template.asString(buf2));
					afterStartup.push("// run runtime startup");
					afterStartup.push(`${RuntimeGlobals.startup}();`);
				} else {
					startup.push("// startup");
					startup.push(Template.asString(buf2));
				}
			} else if (
				runtimeRequirements.has(RuntimeGlobals.startup) ||
				runtimeRequirements.has(RuntimeGlobals.startupOnlyBefore) ||
				runtimeRequirements.has(RuntimeGlobals.startupOnlyAfter)
			) {
				buf.push(
					"// the startup function",
					"// It's empty as no entry modules are in this chunk",
					`${RuntimeGlobals.startup} = ${runtimeTemplate.emptyFunction()};`,
					""
				);
			}
		} else if (
			runtimeRequirements.has(RuntimeGlobals.startup) ||
			runtimeRequirements.has(RuntimeGlobals.startupOnlyBefore) ||
			runtimeRequirements.has(RuntimeGlobals.startupOnlyAfter)
		) {
			result.allowInlineStartup = false;
			buf.push(
				"// the startup function",
				"// It's empty as some runtime module handles the default behavior",
				`${RuntimeGlobals.startup} = ${runtimeTemplate.emptyFunction()};`
			);
			startup.push("// run startup");
			startup.push(
				`var ${RuntimeGlobals.exports} = ${RuntimeGlobals.startup}();`
			);
		}
		return result;
	}

	/**
	 * Renders the generated source of the require function.
	 * @param {RenderBootstrapContext} renderContext options object
	 * @param {CompilationHooks} hooks hooks
	 * @returns {string} the generated source of the require function
	 */
	renderRequire(renderContext, hooks) {
		const {
			chunk,
			chunkGraph,
			runtimeTemplate: { outputOptions }
		} = renderContext;
		const runtimeRequirements = chunkGraph.getTreeRuntimeRequirements(chunk);

		/**
		 * Renders missing module error.
		 * @param {string} condition guard expression
		 * @returns {string[]} source
		 */
		const renderMissingModuleError = (condition) =>
			outputOptions.pathinfo
				? [
						`if (${condition}) {`,
						Template.indent([
							"delete __webpack_module_cache__[moduleId];",
							'var e = new Error("Cannot find module \'" + moduleId + "\'");',
							"e.code = 'MODULE_NOT_FOUND';",
							"throw e;"
						]),
						"}"
					]
				: [];

		const moduleExecution = runtimeRequirements.has(
			RuntimeGlobals.interceptModuleExecution
		)
			? Template.asString([
					`var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: ${RuntimeGlobals.require} };`,
					`${RuntimeGlobals.interceptModuleExecution}.forEach(function(handler) { handler(execOptions); });`,
					...renderMissingModuleError("!execOptions.factory"),
					"module = execOptions.module;",
					"execOptions.factory.call(module.exports, module, module.exports, execOptions.require);"
				])
			: runtimeRequirements.has(RuntimeGlobals.thisAsExports)
				? Template.asString([
						...renderMissingModuleError("!(moduleId in __webpack_modules__)"),
						`__webpack_modules__[moduleId].call(module.exports, module, module.exports, ${RuntimeGlobals.require});`
					])
				: Template.asString([
						...renderMissingModuleError("!(moduleId in __webpack_modules__)"),
						`__webpack_modules__[moduleId](module, module.exports, ${RuntimeGlobals.require});`
					]);
		const needModuleId = runtimeRequirements.has(RuntimeGlobals.moduleId);
		const needModuleLoaded = runtimeRequirements.has(
			RuntimeGlobals.moduleLoaded
		);
		const needModuleDefer = runtimeRequirements.has(
			RuntimeGlobals.makeDeferredNamespaceObject
		);
		const content = Template.asString([
			"// Check if module is in cache",
			"var cachedModule = __webpack_module_cache__[moduleId];",
			"if (cachedModule !== undefined) {",
			outputOptions.strictModuleErrorHandling
				? Template.indent([
						"if (cachedModule.error !== undefined) throw cachedModule.error;",
						"return cachedModule.exports;"
					])
				: Template.indent("return cachedModule.exports;"),
			"}",
			"// Create a new module (and put it into the cache)",
			"var module = __webpack_module_cache__[moduleId] = {",
			Template.indent([
				needModuleId ? "id: moduleId," : "// no module.id needed",
				needModuleLoaded ? "loaded: false," : "// no module.loaded needed",
				needModuleDefer
					? "exports: __webpack_module_deferred_exports__[moduleId] || {}"
					: "exports: {}"
			]),
			"};",
			"",
			outputOptions.strictModuleExceptionHandling
				? Template.asString([
						"// Execute the module function",
						"var threw = true;",
						"try {",
						Template.indent([
							moduleExecution,
							"threw = false;",
							...(needModuleDefer
								? ["delete __webpack_module_deferred_exports__[moduleId];"]
								: [])
						]),
						"} finally {",
						Template.indent([
							"if(threw) delete __webpack_module_cache__[moduleId];"
						]),
						"}"
					])
				: outputOptions.strictModuleErrorHandling
					? Template.asString([
							"// Execute the module function",
							"try {",
							Template.indent(
								needModuleDefer
									? [
											moduleExecution,
											"delete __webpack_module_deferred_exports__[moduleId];"
										]
									: moduleExecution
							),
							"} catch(e) {",
							Template.indent(["module.error = e;", "throw e;"]),
							"}"
						])
					: Template.asString([
							"// Execute the module function",
							moduleExecution,
							...(needModuleDefer
								? ["delete __webpack_module_deferred_exports__[moduleId];"]
								: [])
						]),
			needModuleLoaded
				? Template.asString([
						"",
						"// Flag the module as loaded",
						`${RuntimeGlobals.moduleLoaded} = true;`,
						""
					])
				: "",
			"// Return the exports of the module",
			"return module.exports;"
		]);
		return tryRunOrWebpackError(
			() => hooks.renderRequire.call(content, renderContext),
			"JavascriptModulesPlugin.getCompilationHooks().renderRequire"
		);
	}

	/**
	 * Get renamed inline module.
	 * @param {Compilation} compilation compilation
	 * @param {Module[]} allModules allModules
	 * @param {MainRenderContext} renderContext renderContext
	 * @param {Set<Module>} inlinedModules inlinedModules
	 * @param {ChunkRenderContext} chunkRenderContext chunkRenderContext
	 * @param {CompilationHooks} hooks hooks
	 * @param {boolean | undefined} allStrict allStrict
	 * @param {boolean} hasChunkModules hasChunkModules
	 * @returns {Map<Module, Source> | false} renamed inlined modules
	 */
	_getRenamedInlineModule(
		compilation,
		allModules,
		renderContext,
		inlinedModules,
		chunkRenderContext,
		hooks,
		allStrict,
		hasChunkModules
	) {
		const innerStrict =
			!allStrict &&
			allModules.every((m) => /** @type {BuildInfo} */ (m.buildInfo).strict);
		const isMultipleEntries = inlinedModules.size > 1;
		const singleEntryWithModules = inlinedModules.size === 1 && hasChunkModules;
		// TODO:
		// This step is before the IIFE reason calculation. Ideally, it should only be executed when this function can optimize the
		// IIFE reason. Otherwise, it should directly return false. There are four reasons now, we have skipped two already, the left
		// one is 'it uses a non-standard name for the exports'.
		if (isMultipleEntries || innerStrict || !singleEntryWithModules) {
			return false;
		}

		/** @type {Map<Module, Source>} */
		const renamedInlinedModules = new Map();
		const { runtimeTemplate } = renderContext;

		/** @typedef {{ source: Source, module: Module, ast: Program, variables: Set<Variable>, through: Set<Reference>, usedInNonInlined: Set<Variable>, moduleScope: Scope }} Info */
		/** @type {Map<Module, Info>} */
		const inlinedModulesToInfo = new Map();
		/** @type {Set<string>} */
		const nonInlinedModuleThroughIdentifiers = new Set();

		for (const m of allModules) {
			const isInlinedModule = inlinedModules && inlinedModules.has(m);
			const moduleSource = this.renderModule(
				m,
				{
					...chunkRenderContext,
					factory: !isInlinedModule,
					inlinedInIIFE: false
				},
				hooks
			);

			if (!moduleSource) continue;
			const code = /** @type {string} */ (moduleSource.source());

			const { ast } = JavascriptParser._parse(
				code,
				{
					sourceType: "auto",
					ranges: true
				},
				JavascriptParser._getModuleParseFunction(compilation, m)
			);

			const scopeManager = eslintScope.analyze(ast, {
				ecmaVersion: 6,
				sourceType: "module",
				optimistic: true,
				ignoreEval: true
			});

			const globalScope = /** @type {Scope} */ (scopeManager.acquire(ast));
			if (inlinedModules && inlinedModules.has(m)) {
				const moduleScope = globalScope.childScopes[0];
				inlinedModulesToInfo.set(m, {
					source: moduleSource,
					ast,
					module: m,
					variables: new Set(moduleScope.variables),
					through: new Set(moduleScope.through),
					usedInNonInlined: new Set(),
					moduleScope
				});
			} else {
				for (const ref of globalScope.through) {
					nonInlinedModuleThroughIdentifiers.add(ref.identifier.name);
				}
			}
		}

		for (const [, { variables, usedInNonInlined }] of inlinedModulesToInfo) {
			for (const variable of variables) {
				if (
					nonInlinedModuleThroughIdentifiers.has(variable.name) ||
					RESERVED_NAMES.has(variable.name)
				) {
					usedInNonInlined.add(variable);
				}
			}
		}

		for (const [m, moduleInfo] of inlinedModulesToInfo) {
			const { ast, source: _source, usedInNonInlined } = moduleInfo;
			const source = new ReplaceSource(_source);
			if (usedInNonInlined.size === 0) {
				renamedInlinedModules.set(m, source);
				continue;
			}

			const info = /** @type {Info} */ (inlinedModulesToInfo.get(m));
			const allUsedNames = new Set(
				Array.from(info.through, (v) => v.identifier.name)
			);

			for (const variable of usedInNonInlined) {
				allUsedNames.add(variable.name);
			}

			for (const variable of info.variables) {
				/** @type {UsedNamesInScopeInfo} */
				const usedNamesInScopeInfo = new Map();
				/** @type {ScopeSet} */
				const ignoredScopes = new Set();

				const name = variable.name;
				const { usedNames, alreadyCheckedScopes } = getUsedNamesInScopeInfo(
					usedNamesInScopeInfo,
					info.module.identifier(),
					name
				);

				if (allUsedNames.has(name) || usedNames.has(name)) {
					const references = getAllReferences(variable);
					const allIdentifiers = new Set([
						...references.map((r) => r.identifier),
						...variable.identifiers
					]);
					for (const ref of references) {
						addScopeSymbols(
							ref.from,
							usedNames,
							alreadyCheckedScopes,
							ignoredScopes
						);
					}

					const newName = findNewName(
						variable.name,
						allUsedNames,
						usedNames,
						m.readableIdentifier(runtimeTemplate.requestShortener)
					);
					allUsedNames.add(newName);
					for (const identifier of allIdentifiers) {
						const r = /** @type {Range} */ (identifier.range);
						const path = getPathInAst(ast, identifier);
						if (path && path.length > 1) {
							const maybeProperty =
								path[1].type === "AssignmentPattern" && path[1].left === path[0]
									? path[2]
									: path[1];
							if (
								maybeProperty.type === "Property" &&
								maybeProperty.shorthand
							) {
								source.insert(r[1], `: ${newName}`);
								continue;
							}
						}
						source.replace(r[0], r[1] - 1, newName);
					}
				}
				allUsedNames.add(name);
			}

			renamedInlinedModules.set(m, source);
		}

		return renamedInlinedModules;
	}
}

module.exports = JavascriptModulesPlugin;
module.exports.chunkHasJs = chunkHasJs;
