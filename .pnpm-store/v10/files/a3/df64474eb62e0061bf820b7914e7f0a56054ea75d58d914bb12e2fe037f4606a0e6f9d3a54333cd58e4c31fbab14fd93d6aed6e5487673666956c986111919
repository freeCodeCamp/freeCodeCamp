/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const eslintScope = require("eslint-scope");
const { SyncWaterfallHook, SyncHook, SyncBailHook } = require("tapable");
const vm = require("vm");
const {
	ConcatSource,
	OriginalSource,
	PrefixSource,
	RawSource,
	CachedSource,
	ReplaceSource
} = require("webpack-sources");
const Compilation = require("../Compilation");
const { tryRunOrWebpackError } = require("../HookWebpackError");
const HotUpdateChunk = require("../HotUpdateChunk");
const InitFragment = require("../InitFragment");
const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC,
	JAVASCRIPT_MODULE_TYPE_ESM,
	WEBPACK_MODULE_TYPE_RUNTIME
} = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const { last, someInIterable } = require("../util/IterableHelpers");
const StringXor = require("../util/StringXor");
const { compareModulesByIdOrIdentifier } = require("../util/comparators");
const {
	getPathInAst,
	getAllReferences,
	RESERVED_NAMES,
	findNewName,
	addScopeSymbols,
	getUsedNamesInScopeInfo
} = require("../util/concatenate");
const createHash = require("../util/createHash");
const nonNumericOnlyHash = require("../util/nonNumericOnlyHash");
const { intersectRuntime } = require("../util/runtime");
const JavascriptGenerator = require("./JavascriptGenerator");
const JavascriptParser = require("./JavascriptParser");

/** @typedef {import("eslint-scope").Reference} Reference */
/** @typedef {import("eslint-scope").Scope} Scope */
/** @typedef {import("eslint-scope").Variable} Variable */
/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").Output} OutputOptions */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("../Compilation").ChunkHashContext} ChunkHashContext */
/** @typedef {import("../Compilation").ModuleObject} ModuleObject */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../DependencyTemplates")} DependencyTemplates */
/** @typedef {import("../Entrypoint")} Entrypoint */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("../TemplatedPathPlugin").TemplatePath} TemplatePath */
/** @typedef {import("../WebpackError")} WebpackError */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/createHash").Algorithm} Algorithm */

/**
 * @param {Chunk} chunk a chunk
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @returns {boolean} true, when a JS file is needed for this chunk
 */
const chunkHasJs = (chunk, chunkGraph) => {
	if (chunkGraph.getNumberOfEntryModules(chunk) > 0) return true;

	return Boolean(
		chunkGraph.getChunkModulesIterableBySourceType(chunk, "javascript")
	);
};

/**
 * @param {Chunk} chunk a chunk
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @returns {boolean} true, when a JS file is needed for this chunk
 */
const chunkHasRuntimeOrJs = (chunk, chunkGraph) => {
	if (
		chunkGraph.getChunkModulesIterableBySourceType(
			chunk,
			WEBPACK_MODULE_TYPE_RUNTIME
		)
	)
		return true;

	return Boolean(
		chunkGraph.getChunkModulesIterableBySourceType(chunk, "javascript")
	);
};

/**
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
			 * @param {string} line the line
			 * @param {number} i the index
			 * @param {string[]} lines the lines
			 * @returns {string} the line with line number
			 */
			(line, i, lines) => {
				const iStr = `${i + 1}`;
				return `${" ".repeat(n - iStr.length)}${iStr} | ${line}`;
			}
		)
		.join("\n")}`;
};

/**
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
 * @typedef {object} RenderBootstrapContext
 * @property {Chunk} chunk the chunk
 * @property {CodeGenerationResults} codeGenerationResults results of code generation
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {string} hash hash to be used for render call
 */

/** @typedef {RenderContext & { inlined: boolean }} StartupRenderContext */

/**
 * @typedef {object} CompilationHooks
 * @property {SyncWaterfallHook<[Source, Module, ChunkRenderContext]>} renderModuleContent
 * @property {SyncWaterfallHook<[Source, Module, ChunkRenderContext]>} renderModuleContainer
 * @property {SyncWaterfallHook<[Source, Module, ChunkRenderContext]>} renderModulePackage
 * @property {SyncWaterfallHook<[Source, RenderContext]>} renderChunk
 * @property {SyncWaterfallHook<[Source, RenderContext]>} renderMain
 * @property {SyncWaterfallHook<[Source, RenderContext]>} renderContent
 * @property {SyncWaterfallHook<[Source, RenderContext]>} render
 * @property {SyncWaterfallHook<[Source, Module, StartupRenderContext]>} renderStartup
 * @property {SyncWaterfallHook<[string, RenderBootstrapContext]>} renderRequire
 * @property {SyncBailHook<[Module, RenderBootstrapContext], string | void>} inlineInRuntimeBailout
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
					"renderContext"
				]),
				renderModuleContainer: new SyncWaterfallHook([
					"source",
					"module",
					"renderContext"
				]),
				renderModulePackage: new SyncWaterfallHook([
					"source",
					"module",
					"renderContext"
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
		/** @type {WeakMap<Source, TODO>} */
		this._moduleFactoryCache = new WeakMap();
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				const hooks = JavascriptModulesPlugin.getCompilationHooks(compilation);
				normalModuleFactory.hooks.createParser
					.for(JAVASCRIPT_MODULE_TYPE_AUTO)
					.tap(PLUGIN_NAME, options => new JavascriptParser("auto"));
				normalModuleFactory.hooks.createParser
					.for(JAVASCRIPT_MODULE_TYPE_DYNAMIC)
					.tap(PLUGIN_NAME, options => new JavascriptParser("script"));
				normalModuleFactory.hooks.createParser
					.for(JAVASCRIPT_MODULE_TYPE_ESM)
					.tap(PLUGIN_NAME, options => new JavascriptParser("module"));
				normalModuleFactory.hooks.createGenerator
					.for(JAVASCRIPT_MODULE_TYPE_AUTO)
					.tap(PLUGIN_NAME, () => new JavascriptGenerator());
				normalModuleFactory.hooks.createGenerator
					.for(JAVASCRIPT_MODULE_TYPE_DYNAMIC)
					.tap(PLUGIN_NAME, () => new JavascriptGenerator());
				normalModuleFactory.hooks.createGenerator
					.for(JAVASCRIPT_MODULE_TYPE_ESM)
					.tap(PLUGIN_NAME, () => new JavascriptGenerator());
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
				compilation.hooks.contentHash.tap(PLUGIN_NAME, chunk => {
					const {
						chunkGraph,
						codeGenerationResults,
						moduleGraph,
						runtimeTemplate,
						outputOptions: {
							hashSalt,
							hashDigest,
							hashDigestLength,
							hashFunction
						}
					} = compilation;
					const hash = createHash(/** @type {Algorithm} */ (hashFunction));
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
						"javascript"
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
					const digest = /** @type {string} */ (hash.digest(hashDigest));
					chunk.contentHash.javascript = nonNumericOnlyHash(
						digest,
						/** @type {number} */
						(hashDigestLength)
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
					const source = options.codeGenerationResult.sources.get("javascript");
					if (source === undefined) return;
					const { module } = options;
					const code = source.source();

					const fn = vm.runInThisContext(
						`(function(${module.moduleArgument}, ${module.exportsArgument}, ${RuntimeGlobals.require}) {\n${code}\n/**/})`,
						{
							filename: module.identifier(),
							lineOffset: -1
						}
					);

					const moduleObject =
						/** @type {ModuleObject} */
						(options.moduleObject);

					try {
						fn.call(
							moduleObject.exports,
							moduleObject,
							moduleObject.exports,
							context.__webpack_require__
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

					const fn = vm.runInThisContext(
						`(function(${RuntimeGlobals.require}) {\n${code}\n/**/})`,
						{
							filename: options.module.identifier(),
							lineOffset: -1
						}
					);
					try {
						// eslint-disable-next-line no-useless-call
						fn.call(null, context.__webpack_require__);
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
	 * @param {Chunk} chunk chunk
	 * @param {OutputOptions} outputOptions output options
	 * @returns {TemplatePath} used filename template
	 */
	static getChunkFilenameTemplate(chunk, outputOptions) {
		if (chunk.filenameTemplate) {
			return chunk.filenameTemplate;
		} else if (chunk instanceof HotUpdateChunk) {
			return /** @type {TemplatePath} */ (outputOptions.hotUpdateChunkFilename);
		} else if (chunk.canBeInitial()) {
			return /** @type {TemplatePath} */ (outputOptions.filename);
		}
		return /** @type {TemplatePath} */ (outputOptions.chunkFilename);
	}

	/**
	 * @param {Module} module the rendered module
	 * @param {ChunkRenderContext} renderContext options object
	 * @param {CompilationHooks} hooks hooks
	 * @param {boolean} factory true: renders as factory method, false: pure module content
	 * @returns {Source | null} the newly generated source from rendering
	 */
	renderModule(module, renderContext, hooks, factory) {
		const {
			chunk,
			chunkGraph,
			runtimeTemplate,
			codeGenerationResults,
			strictMode
		} = renderContext;
		try {
			const codeGenResult = codeGenerationResults.get(module, chunk.runtime);
			const moduleSource = codeGenResult.sources.get("javascript");
			if (!moduleSource) return null;
			if (codeGenResult.data !== undefined) {
				const chunkInitFragments = codeGenResult.data.get("chunkInitFragments");
				if (chunkInitFragments) {
					for (const i of chunkInitFragments)
						renderContext.chunkInitFragments.push(i);
				}
			}
			const moduleSourcePostContent = tryRunOrWebpackError(
				() =>
					hooks.renderModuleContent.call(moduleSource, module, renderContext),
				"JavascriptModulesPlugin.getCompilationHooks().renderModuleContent"
			);
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
				let source;
				if (
					cacheEntry &&
					cacheEntry.needModule === needModule &&
					cacheEntry.needExports === needExports &&
					cacheEntry.needRequire === needRequire &&
					cacheEntry.needThisAsExports === needThisAsExports &&
					cacheEntry.needStrict === needStrict
				) {
					source = cacheEntry.source;
				} else {
					const factorySource = new ConcatSource();
					const args = [];
					if (needExports || needRequire || needModule)
						args.push(
							needModule
								? module.moduleArgument
								: `__unused_webpack_${module.moduleArgument}`
						);
					if (needExports || needRequire)
						args.push(
							needExports
								? module.exportsArgument
								: `__unused_webpack_${module.exportsArgument}`
						);
					if (needRequire) args.push(RuntimeGlobals.require);
					if (!needThisAsExports && runtimeTemplate.supportsArrowFunction()) {
						factorySource.add(`/***/ ((${args.join(", ")}) => {\n\n`);
					} else {
						factorySource.add(`/***/ (function(${args.join(", ")}) {\n\n`);
					}
					if (needStrict) {
						factorySource.add('"use strict";\n');
					}
					factorySource.add(moduleSourcePostContent);
					factorySource.add("\n\n/***/ })");
					source = new CachedSource(factorySource);
					this._moduleFactoryCache.set(moduleSourcePostContent, {
						source,
						needModule,
						needExports,
						needRequire,
						needThisAsExports,
						needStrict
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
	 * @param {RenderContext} renderContext the render context
	 * @param {CompilationHooks} hooks hooks
	 * @returns {Source} the rendered source
	 */
	renderChunk(renderContext, hooks) {
		const { chunk, chunkGraph } = renderContext;
		const modules = chunkGraph.getOrderedChunkModulesIterableBySourceType(
			chunk,
			"javascript",
			compareModulesByIdOrIdentifier(chunkGraph)
		);
		const allModules = modules ? Array.from(modules) : [];
		let strictHeader;
		let allStrict = renderContext.strictMode;
		if (
			!allStrict &&
			allModules.every(m => /** @type {BuildInfo} */ (m.buildInfo).strict)
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
			Template.renderChunkModules(chunkRenderContext, allModules, module =>
				this.renderModule(module, chunkRenderContext, hooks, true)
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

		const allModules = Array.from(
			chunkGraph.getOrderedChunkModulesIterableBySourceType(
				chunk,
				"javascript",
				compareModulesByIdOrIdentifier(chunkGraph)
			) || []
		);

		const hasEntryModules = chunkGraph.getNumberOfEntryModules(chunk) > 0;
		/** @type {Set<Module> | undefined} */
		let inlinedModules;
		if (bootstrap.allowInlineStartup && hasEntryModules) {
			inlinedModules = new Set(chunkGraph.getChunkEntryModulesIterable(chunk));
		}

		const source = new ConcatSource();
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
			allModules.every(m => /** @type {BuildInfo} */ (m.buildInfo).strict)
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
						m => !(/** @type {Set<Module>} */ (inlinedModules).has(m))
					)
				: allModules,
			module => this.renderModule(module, chunkRenderContext, hooks, true),
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

			if (runtimeRequirements.has(RuntimeGlobals.exports)) {
				startupSource.add(`var ${RuntimeGlobals.exports} = {};\n`);
			}

			const avoidEntryIife = compilation.options.optimization.avoidEntryIife;
			/** @type {Map<Module, Source> | false} */
			let renamedInlinedModule = false;
			if (avoidEntryIife) {
				renamedInlinedModule = this.getRenamedInlineModule(
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
				const renderedModule = renamedInlinedModule
					? renamedInlinedModule.get(m)
					: this.renderModule(m, chunkRenderContext, hooks, false);

				if (renderedModule) {
					const innerStrict =
						!allStrict && /** @type {BuildInfo} */ (m.buildInfo).strict;
					const runtimeRequirements = chunkGraph.getModuleRuntimeRequirements(
						m,
						chunk.runtime
					);
					const exports = runtimeRequirements.has(RuntimeGlobals.exports);
					const webpackExports =
						exports && m.exportsArgument === RuntimeGlobals.exports;
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
						if (m !== lastInlinedModule)
							startupSource.add(`var ${m.exportsArgument} = {};\n`);
						else if (m.exportsArgument !== RuntimeGlobals.exports)
							startupSource.add(
								`var ${m.exportsArgument} = ${RuntimeGlobals.exports};\n`
							);
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
			source.add(
				hooks.renderStartup.call(startupSource, lastInlinedModule, {
					...renderContext,
					inlined: true
				})
			);
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
			/** @type {function(string[], string): Source} */
			const toSource = useSourceMap
				? (content, name) =>
						new OriginalSource(Template.asString(content), name)
				: content => new RawSource(Template.asString(content));
			source.add(
				new PrefixSource(
					prefix,
					new ConcatSource(
						toSource(bootstrap.beforeStartup, "webpack/before-startup"),
						"\n",
						hooks.renderStartup.call(
							toSource(bootstrap.startup.concat(""), "webpack/startup"),
							lastEntryModule,
							{
								...renderContext,
								inlined: false
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
		 * @type {{startup: string[], beforeStartup: string[], header: string[], afterStartup: string[], allowInlineStartup: boolean}}
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
				let i = chunkGraph.getNumberOfEntryModules(chunk);
				for (const [
					entryModule,
					entrypoint
				] of chunkGraph.getChunkEntryModulesWithChunkGroupIterable(chunk)) {
					if (!chunkGraph.getModuleSourceTypes(entryModule).has("javascript")) {
						i--;
						continue;
					}
					const chunks =
						/** @type {Entrypoint} */
						(entrypoint).chunks.filter(c => c !== chunk);
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
								connections.some(c => c.isTargetActive(chunk.runtime)) &&
								someInIterable(
									chunkGraph.getModuleRuntimes(originModule),
									runtime =>
										intersectRuntime(runtime, chunk.runtime) !== undefined
								)
						)
					) {
						buf2.push(
							"// This entry module is referenced by other modules so it can't be inlined"
						);
						result.allowInlineStartup = false;
					}

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
					if (chunks.length > 0) {
						buf2.push(
							`${i === 0 ? `var ${RuntimeGlobals.exports} = ` : ""}${
								RuntimeGlobals.onChunksLoaded
							}(undefined, ${JSON.stringify(
								chunks.map(c => c.id)
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
						if (requireScopeUsed) {
							buf2.push(
								`__webpack_modules__[${moduleIdExpr}](0, ${
									i === 0 ? RuntimeGlobals.exports : "{}"
								}, ${RuntimeGlobals.require});`
							);
						} else if (entryRuntimeRequirements.has(RuntimeGlobals.exports)) {
							buf2.push(
								`__webpack_modules__[${moduleIdExpr}](0, ${
									i === 0 ? RuntimeGlobals.exports : "{}"
								});`
							);
						} else {
							buf2.push(`__webpack_modules__[${moduleIdExpr}]();`);
						}
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
		const moduleExecution = runtimeRequirements.has(
			RuntimeGlobals.interceptModuleExecution
		)
			? Template.asString([
					`var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: ${RuntimeGlobals.require} };`,
					`${RuntimeGlobals.interceptModuleExecution}.forEach(function(handler) { handler(execOptions); });`,
					"module = execOptions.module;",
					"execOptions.factory.call(module.exports, module, module.exports, execOptions.require);"
				])
			: runtimeRequirements.has(RuntimeGlobals.thisAsExports)
				? Template.asString([
						`__webpack_modules__[moduleId].call(module.exports, module, module.exports, ${RuntimeGlobals.require});`
					])
				: Template.asString([
						`__webpack_modules__[moduleId](module, module.exports, ${RuntimeGlobals.require});`
					]);
		const needModuleId = runtimeRequirements.has(RuntimeGlobals.moduleId);
		const needModuleLoaded = runtimeRequirements.has(
			RuntimeGlobals.moduleLoaded
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
				"exports: {}"
			]),
			"};",
			"",
			outputOptions.strictModuleExceptionHandling
				? Template.asString([
						"// Execute the module function",
						"var threw = true;",
						"try {",
						Template.indent([moduleExecution, "threw = false;"]),
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
							Template.indent(moduleExecution),
							"} catch(e) {",
							Template.indent(["module.error = e;", "throw e;"]),
							"}"
						])
					: Template.asString([
							"// Execute the module function",
							moduleExecution
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
	 * @param {Module[]} allModules allModules
	 * @param {MainRenderContext} renderContext renderContext
	 * @param {Set<Module>} inlinedModules inlinedModules
	 * @param {ChunkRenderContext} chunkRenderContext chunkRenderContext
	 * @param {CompilationHooks} hooks hooks
	 * @param {boolean | undefined} allStrict allStrict
	 * @param {boolean} hasChunkModules hasChunkModules
	 * @returns {Map<Module, Source> | false} renamed inlined modules
	 */
	getRenamedInlineModule(
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
			allModules.every(m => /** @type {BuildInfo} */ (m.buildInfo).strict);
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

		/** @typedef {{ source: Source, module: Module, ast: any, variables: Set<Variable>, through: Set<Reference>, usedInNonInlined: Set<Variable>, moduleScope: Scope }} Info */
		/** @type {Map<Module, Info>} */
		const inlinedModulesToInfo = new Map();
		/** @type {Set<string>} */
		const nonInlinedModuleThroughIdentifiers = new Set();
		/** @type {Map<Module, Source>} */

		for (const m of allModules) {
			const isInlinedModule = inlinedModules && inlinedModules.has(m);
			const moduleSource = this.renderModule(
				m,
				chunkRenderContext,
				hooks,
				!isInlinedModule
			);

			if (!moduleSource) continue;
			const code = /** @type {string} */ (moduleSource.source());
			const ast = JavascriptParser._parse(code, {
				sourceType: "auto"
			});

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
				Array.from(info.through, v => v.identifier.name)
			);

			for (const variable of usedInNonInlined) {
				allUsedNames.add(variable.name);
			}

			for (const variable of info.variables) {
				allUsedNames.add(variable.name);
				const references = getAllReferences(variable);
				const allIdentifiers = new Set(
					references.map(r => r.identifier).concat(variable.identifiers)
				);

				const usedNamesInScopeInfo = new Map();
				const ignoredScopes = new Set();

				const name = variable.name;
				const { usedNames, alreadyCheckedScopes } = getUsedNamesInScopeInfo(
					usedNamesInScopeInfo,
					info.module.identifier(),
					name
				);

				if (allUsedNames.has(name) || usedNames.has(name)) {
					const references = getAllReferences(variable);
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
				} else {
					allUsedNames.add(name);
				}
			}

			renamedInlinedModules.set(m, source);
		}

		return renamedInlinedModules;
	}
}

module.exports = JavascriptModulesPlugin;
module.exports.chunkHasJs = chunkHasJs;
