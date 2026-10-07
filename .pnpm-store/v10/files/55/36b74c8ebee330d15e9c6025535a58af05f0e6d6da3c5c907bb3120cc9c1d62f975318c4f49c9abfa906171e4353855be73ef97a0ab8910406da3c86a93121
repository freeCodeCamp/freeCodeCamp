/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { SyncHook, SyncWaterfallHook } = require("tapable");
const {
	CachedSource,
	ConcatSource,
	PrefixSource,
	RawSource,
	ReplaceSource
} = require("webpack-sources");
const Compilation = require("../Compilation");
const CssModule = require("../CssModule");
const { tryRunOrWebpackError } = require("../HookWebpackError");
const HotUpdateChunk = require("../HotUpdateChunk");
const { CSS_IMPORT_TYPE, CSS_TYPE } = require("../ModuleSourceTypeConstants");
const {
	CSS_MODULE_TYPE,
	CSS_MODULE_TYPE_AUTO,
	CSS_MODULE_TYPE_GLOBAL,
	CSS_MODULE_TYPE_MODULE
} = require("../ModuleTypeConstants");
const NormalModule = require("../NormalModule");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const WebpackError = require("../WebpackError");
const CssIcssExportDependency = require("../dependencies/CssIcssExportDependency");
const CssIcssImportDependency = require("../dependencies/CssIcssImportDependency");
const CssIcssSymbolDependency = require("../dependencies/CssIcssSymbolDependency");
const CssImportDependency = require("../dependencies/CssImportDependency");
const CssUrlDependency = require("../dependencies/CssUrlDependency");
const StaticExportsDependency = require("../dependencies/StaticExportsDependency");
const JavascriptModulesPlugin = require("../javascript/JavascriptModulesPlugin");
const { compareModulesByFullName } = require("../util/comparators");
const createHash = require("../util/createHash");
const { getUndoPath } = require("../util/identifier");
const memoize = require("../util/memoize");
const nonNumericOnlyHash = require("../util/nonNumericOnlyHash");
const removeBOM = require("../util/removeBOM");
const CssGenerator = require("./CssGenerator");
const CssParser = require("./CssParser");

const publicPathAutoRegex = new RegExp(CssUrlDependency.PUBLIC_PATH_AUTO, "g");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../config/defaults").OutputNormalizedWithDefaults} OutputOptions */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("../Compilation").ChunkHashContext} ChunkHashContext */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../CssModule").Inheritance} Inheritance */
/** @typedef {import("../CssModule").CSSModuleCreateData} CSSModuleCreateData */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../Module").RuntimeRequirements} RuntimeRequirements */
/** @typedef {import("../Template").RuntimeTemplate} RuntimeTemplate */
/** @typedef {import("../TemplatedPathPlugin").TemplatePath} TemplatePath */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../Module").BuildMeta} BuildMeta */

/**
 * Defines the render context type used by this module.
 * @typedef {object} RenderContext
 * @property {Chunk} chunk the chunk
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {CodeGenerationResults} codeGenerationResults results of code generation
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {string} uniqueName the unique name
 * @property {string} undoPath undo path to css file
 * @property {CssModule[]} modules modules
 */

/**
 * Defines the chunk render context type used by this module.
 * @typedef {object} ChunkRenderContext
 * @property {Chunk=} chunk the chunk
 * @property {ChunkGraph=} chunkGraph the chunk graph
 * @property {CodeGenerationResults=} codeGenerationResults results of code generation
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {string} undoPath undo path to css file
 * @property {WeakMap<Source, ModuleFactoryCacheEntry>} moduleFactoryCache moduleFactoryCache
 * @property {Source} moduleSourceContent content
 */

/**
 * Defines the compilation hooks type used by this module.
 * @typedef {object} CompilationHooks
 * @property {SyncWaterfallHook<[Source, Module, ChunkRenderContext]>} renderModulePackage
 * @property {SyncHook<[Chunk, Hash, ChunkHashContext]>} chunkHash
 */

/**
 * Defines the module factory cache entry type used by this module.
 * @typedef {object} ModuleFactoryCacheEntry
 * @property {string} undoPath - The undo path to the CSS file
 * @property {Inheritance} inheritance - The inheritance chain
 * @property {CachedSource} source - The cached source
 */

const getCssLoadingRuntimeModule = memoize(() =>
	require("./CssLoadingRuntimeModule")
);
const getCssMergeStyleSheetsRuntimeModule = memoize(() =>
	require("./CssMergeStyleSheetsRuntimeModule")
);
const getCssInjectStyleRuntimeModule = memoize(() =>
	require("./CssInjectStyleRuntimeModule")
);

/**
 * Returns ], definitions: import("../../schemas/WebpackOptions.json")["definitions"] }} schema.
 * @param {string} name name
 * @returns {{ oneOf: [{ $ref: string }], definitions: import("../../schemas/WebpackOptions.json")["definitions"] }} schema
 */
const getSchema = (name) => {
	const { definitions } = require("../../schemas/WebpackOptions.json");

	return {
		definitions,
		oneOf: [{ $ref: `#/definitions/${name}` }]
	};
};

const parserValidationOptions = {
	name: "Css Modules Plugin",
	baseDataPath: "parser"
};

const generatorValidationOptions = {
	name: "Css Modules Plugin",
	baseDataPath: "generator"
};

/** @type {WeakMap<Compilation, CompilationHooks>} */
const compilationHooksMap = new WeakMap();

const PLUGIN_NAME = "CssModulesPlugin";

class CssModulesPlugin {
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
				renderModulePackage: new SyncWaterfallHook([
					"source",
					"module",
					"renderContext"
				]),
				chunkHash: new SyncHook(["chunk", "hash", "context"])
			};
			compilationHooksMap.set(compilation, hooks);
		}
		return hooks;
	}

	constructor() {
		/** @type {WeakMap<Source, ModuleFactoryCacheEntry>} */
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
				const hooks = CssModulesPlugin.getCompilationHooks(compilation);
				compilation.dependencyFactories.set(
					CssImportDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					CssImportDependency,
					new CssImportDependency.Template()
				);
				compilation.dependencyFactories.set(
					CssUrlDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					CssUrlDependency,
					new CssUrlDependency.Template()
				);
				compilation.dependencyFactories.set(
					CssIcssImportDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					CssIcssImportDependency,
					new CssIcssImportDependency.Template()
				);
				compilation.dependencyTemplates.set(
					CssIcssExportDependency,
					new CssIcssExportDependency.Template()
				);
				compilation.dependencyTemplates.set(
					CssIcssSymbolDependency,
					new CssIcssSymbolDependency.Template()
				);
				compilation.dependencyTemplates.set(
					StaticExportsDependency,
					new StaticExportsDependency.Template()
				);
				for (const type of [
					CSS_MODULE_TYPE,
					CSS_MODULE_TYPE_GLOBAL,
					CSS_MODULE_TYPE_MODULE,
					CSS_MODULE_TYPE_AUTO
				]) {
					normalModuleFactory.hooks.createParser
						.for(type)
						.tap(PLUGIN_NAME, (parserOptions) => {
							/** @type {undefined | "global" | "local" | "auto"} */
							let defaultMode;

							switch (type) {
								case CSS_MODULE_TYPE: {
									compiler.validate(
										() => getSchema("CssParserOptions"),
										parserOptions,
										parserValidationOptions,
										(options) =>
											require("../../schemas/plugins/css/CssParserOptions.check")(
												options
											)
									);

									break;
								}
								case CSS_MODULE_TYPE_GLOBAL: {
									defaultMode = "global";
									compiler.validate(
										() => getSchema("CssModuleParserOptions"),
										parserOptions,
										parserValidationOptions,
										(options) =>
											require("../../schemas/plugins/css/CssModuleParserOptions.check")(
												options
											)
									);
									break;
								}
								case CSS_MODULE_TYPE_MODULE: {
									defaultMode = "local";
									compiler.validate(
										() => getSchema("CssModuleParserOptions"),
										parserOptions,
										parserValidationOptions,
										(options) =>
											require("../../schemas/plugins/css/CssModuleParserOptions.check")(
												options
											)
									);
									break;
								}
								case CSS_MODULE_TYPE_AUTO: {
									defaultMode = "auto";
									compiler.validate(
										() => getSchema("CssModuleParserOptions"),
										parserOptions,
										parserValidationOptions,
										(options) =>
											require("../../schemas/plugins/css/CssModuleParserOptions.check")(
												options
											)
									);
									break;
								}
							}

							return new CssParser({
								defaultMode,
								...parserOptions
							});
						});
					normalModuleFactory.hooks.createGenerator
						.for(type)
						.tap(PLUGIN_NAME, (generatorOptions) => {
							switch (type) {
								case CSS_MODULE_TYPE: {
									compiler.validate(
										() => getSchema("CssGeneratorOptions"),
										generatorOptions,
										generatorValidationOptions,
										(options) =>
											require("../../schemas/plugins/css/CssGeneratorOptions.check")(
												options
											)
									);

									break;
								}
								case CSS_MODULE_TYPE_GLOBAL: {
									compiler.validate(
										() => getSchema("CssModuleGeneratorOptions"),
										generatorOptions,
										generatorValidationOptions,
										(options) =>
											require("../../schemas/plugins/css/CssModuleGeneratorOptions.check")(
												options
											)
									);

									break;
								}
								case CSS_MODULE_TYPE_MODULE: {
									compiler.validate(
										() => getSchema("CssModuleGeneratorOptions"),
										generatorOptions,
										generatorValidationOptions,
										(options) =>
											require("../../schemas/plugins/css/CssModuleGeneratorOptions.check")(
												options
											)
									);

									break;
								}
								case CSS_MODULE_TYPE_AUTO: {
									compiler.validate(
										() => getSchema("CssModuleGeneratorOptions"),
										generatorOptions,
										generatorValidationOptions,
										(options) =>
											require("../../schemas/plugins/css/CssModuleGeneratorOptions.check")(
												options
											)
									);

									break;
								}
							}

							return new CssGenerator(
								generatorOptions,
								compilation.moduleGraph
							);
						});
					normalModuleFactory.hooks.createModuleClass
						.for(type)
						.tap(PLUGIN_NAME, (createData, resolveData) => {
							const exportType =
								/** @type {CssParser} */
								(createData.parser).options.exportType;
							if (resolveData.dependencies.length > 0) {
								// When CSS is imported from CSS there is only one dependency
								const dependency = resolveData.dependencies[0];

								if (dependency instanceof CssImportDependency) {
									const parent =
										/** @type {CssModule} */
										(compilation.moduleGraph.getParentModule(dependency));

									if (parent instanceof CssModule) {
										/** @type {Inheritance | undefined} */
										let inheritance;

										if (
											parent.cssLayer !== undefined ||
											parent.supports ||
											parent.media
										) {
											if (!inheritance) {
												inheritance = [];
											}

											inheritance.push([
												parent.cssLayer,
												parent.supports,
												parent.media
											]);
										}

										if (parent.inheritance) {
											if (!inheritance) {
												inheritance = [];
											}

											inheritance.push(...parent.inheritance);
										}

										return new CssModule(
											/** @type {CSSModuleCreateData} */
											({
												...createData,
												cssLayer: dependency.layer,
												supports: dependency.supports,
												media: dependency.media,
												inheritance,
												exportType: parent.exportType || exportType
											})
										);
									}

									return new CssModule(
										/** @type {CSSModuleCreateData} */
										({
											...createData,
											cssLayer: dependency.layer,
											supports: dependency.supports,
											media: dependency.media,
											exportType
										})
									);
								}
							}

							return new CssModule(
								/** @type {CSSModuleCreateData} */
								(
									/** @type {unknown} */ ({
										...createData,
										exportType
									})
								)
							);
						});

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

				JavascriptModulesPlugin.getCompilationHooks(
					compilation
				).renderModuleContent.tap(PLUGIN_NAME, (source, module) => {
					if (module instanceof CssModule && module.hot) {
						const exportType = module.exportType;
						// When exportType !== "link", modules behave like JavaScript modules
						if (exportType && !["link", "style"].includes(exportType)) {
							return source;
						}
						// For exportType === "link", we can optimize with self-acceptance
						const cssData = /** @type {BuildInfo} */ (module.buildInfo).cssData;
						if (!cssData) {
							return source;
						}
						const exports = cssData.exports;
						/** @type {Record<string, string>} */
						const exportsObj = {};
						for (const [key, value] of exports) {
							exportsObj[key] = value;
						}
						const stringifiedExports = JSON.stringify(
							JSON.stringify(exportsObj)
						);

						const hmrCode = Template.asString([
							"",
							`var __webpack_css_exports__ = ${stringifiedExports};`,
							"// only invalidate when locals change",
							"if (module.hot.data && module.hot.data.__webpack_css_exports__ && module.hot.data.__webpack_css_exports__ != __webpack_css_exports__) {",
							Template.indent("module.hot.invalidate();"),
							"} else {",
							Template.indent("module.hot.accept();"),
							"}",
							"module.hot.dispose(function(data) {",
							Template.indent([
								"data.__webpack_css_exports__ = __webpack_css_exports__;"
							]),
							"});"
						]);

						return new ConcatSource(source, "\n", new RawSource(hmrCode));
					}

					return source;
				});
				/** @type {WeakMap<Chunk, CssModule[]>} */
				const orderedCssModulesPerChunk = new WeakMap();
				compilation.hooks.afterCodeGeneration.tap(PLUGIN_NAME, () => {
					const { chunkGraph } = compilation;
					for (const chunk of compilation.chunks) {
						if (CssModulesPlugin.chunkHasCss(chunk, chunkGraph)) {
							orderedCssModulesPerChunk.set(
								chunk,
								this.getOrderedChunkCssModules(chunk, chunkGraph, compilation)
							);
						}
					}
				});
				compilation.hooks.chunkHash.tap(PLUGIN_NAME, (chunk, hash, context) => {
					hooks.chunkHash.call(chunk, hash, context);
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
					const hash = createHash(hashFunction);
					if (hashSalt) hash.update(hashSalt);
					const codeGenerationResults =
						/** @type {CodeGenerationResults} */
						(compilation.codeGenerationResults);
					hooks.chunkHash.call(chunk, hash, {
						chunkGraph,
						codeGenerationResults,
						moduleGraph,
						runtimeTemplate
					});
					const modules = orderedCssModulesPerChunk.get(chunk);
					if (modules) {
						for (const module of modules) {
							hash.update(chunkGraph.getModuleHash(module, chunk.runtime));
						}
					}
					const digest = hash.digest(hashDigest);
					chunk.contentHash.css = nonNumericOnlyHash(digest, hashDigestLength);
				});
				compilation.hooks.renderManifest.tap(PLUGIN_NAME, (result, options) => {
					const { chunkGraph } = compilation;
					const { hash, chunk, codeGenerationResults, runtimeTemplate } =
						options;

					if (chunk instanceof HotUpdateChunk) return result;

					/** @type {CssModule[] | undefined} */
					const modules = orderedCssModulesPerChunk.get(chunk);
					if (modules !== undefined) {
						const { path: filename, info } = compilation.getPathWithInfo(
							CssModulesPlugin.getChunkFilenameTemplate(
								chunk,
								compilation.outputOptions
							),
							{
								hash,
								runtime: chunk.runtime,
								chunk,
								contentHashType: "css"
							}
						);
						const undoPath = getUndoPath(
							filename,
							compilation.outputOptions.path,
							false
						);
						result.push({
							render: () =>
								this.renderChunk(
									{
										chunk,
										chunkGraph,
										codeGenerationResults,
										uniqueName: compilation.outputOptions.uniqueName,
										undoPath,
										modules,
										runtimeTemplate
									},
									hooks
								),
							filename,
							info,
							identifier: `css${chunk.id}`,
							hash: chunk.contentHash.css
						});
					}
					return result;
				});
				const globalChunkLoading = compilation.outputOptions.chunkLoading;
				/**
				 * Checks whether this css modules plugin is enabled for chunk.
				 * @param {Chunk} chunk the chunk
				 * @returns {boolean} true, when enabled
				 */
				const isEnabledForChunk = (chunk) => {
					const options = chunk.getEntryOptions();
					const chunkLoading =
						options && options.chunkLoading !== undefined
							? options.chunkLoading
							: globalChunkLoading;
					return chunkLoading === "jsonp" || chunkLoading === "import";
				};
				/** @type {WeakSet<Chunk>} */
				const onceForChunkSet = new WeakSet();
				/**
				 * Handles the hook callback for this code path.
				 * @param {Chunk} chunk chunk to check
				 * @param {RuntimeRequirements} set runtime requirements
				 */
				const handler = (chunk, set) => {
					if (onceForChunkSet.has(chunk)) return;
					onceForChunkSet.add(chunk);
					if (!isEnabledForChunk(chunk)) return;

					const CssLoadingRuntimeModule = getCssLoadingRuntimeModule();
					compilation.addRuntimeModule(chunk, new CssLoadingRuntimeModule(set));
				};
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.hasCssModules)
					.tap(PLUGIN_NAME, handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.ensureChunkHandlers)
					.tap(PLUGIN_NAME, (chunk, set, { chunkGraph }) => {
						if (!isEnabledForChunk(chunk)) return;
						if (
							!chunkGraph.hasModuleInGraph(
								chunk,
								(m) =>
									m.type === CSS_MODULE_TYPE ||
									m.type === CSS_MODULE_TYPE_GLOBAL ||
									m.type === CSS_MODULE_TYPE_MODULE ||
									m.type === CSS_MODULE_TYPE_AUTO
							)
						) {
							return;
						}

						set.add(RuntimeGlobals.hasOwnProperty);
						set.add(RuntimeGlobals.publicPath);
						set.add(RuntimeGlobals.getChunkCssFilename);
					});
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.hmrDownloadUpdateHandlers)
					.tap(PLUGIN_NAME, (chunk, set, { chunkGraph }) => {
						if (!isEnabledForChunk(chunk)) return;
						if (
							!chunkGraph.hasModuleInGraph(
								chunk,
								(m) =>
									m.type === CSS_MODULE_TYPE ||
									m.type === CSS_MODULE_TYPE_GLOBAL ||
									m.type === CSS_MODULE_TYPE_MODULE ||
									m.type === CSS_MODULE_TYPE_AUTO
							)
						) {
							return;
						}
						set.add(RuntimeGlobals.publicPath);
						set.add(RuntimeGlobals.getChunkCssFilename);
					});

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.cssMergeStyleSheets)
					.tap(PLUGIN_NAME, (chunk) => {
						const CssMergeStyleSheetsRuntimeModule =
							getCssMergeStyleSheetsRuntimeModule();
						compilation.addRuntimeModule(
							chunk,
							new CssMergeStyleSheetsRuntimeModule()
						);
					});

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.cssInjectStyle)
					.tap(PLUGIN_NAME, (chunk, set) => {
						const CssInjectStyleRuntimeModule =
							getCssInjectStyleRuntimeModule();
						compilation.addRuntimeModule(
							chunk,
							new CssInjectStyleRuntimeModule(set)
						);
					});
			}
		);
	}

	/**
	 * Gets modules in order.
	 * @param {Chunk} chunk chunk
	 * @param {Iterable<Module> | undefined} modules unordered modules
	 * @param {Compilation} compilation compilation
	 * @returns {Module[]} ordered modules
	 */
	getModulesInOrder(chunk, modules, compilation) {
		if (!modules) return [];

		/** @type {Module[]} */
		const modulesList = [...modules];

		// Get ordered list of modules per chunk group
		// Lists are in reverse order to allow to use Array.pop()
		const modulesByChunkGroup = Array.from(
			chunk.groupsIterable,
			(chunkGroup) => {
				const sortedModules = modulesList
					.map((module) => ({
						module,
						index: chunkGroup.getModulePostOrderIndex(module)
					}))
					.filter((item) => item.index !== undefined)
					.sort(
						(a, b) =>
							/** @type {number} */ (b.index) - /** @type {number} */ (a.index)
					)
					.map((item) => item.module);

				return { list: sortedModules, set: new Set(sortedModules) };
			}
		);

		if (modulesByChunkGroup.length === 1) {
			return modulesByChunkGroup[0].list.reverse();
		}

		const boundCompareModulesByFullName = compareModulesByFullName(
			compilation.compiler
		);

		/**
		 * Compares module lists.
		 * @param {{ list: Module[] }} a a
		 * @param {{ list: Module[] }} b b
		 * @returns {-1 | 0 | 1} result
		 */
		const compareModuleLists = ({ list: a }, { list: b }) => {
			if (a.length === 0) {
				return b.length === 0 ? 0 : 1;
			}
			if (b.length === 0) return -1;
			return boundCompareModulesByFullName(a[a.length - 1], b[b.length - 1]);
		};

		modulesByChunkGroup.sort(compareModuleLists);

		/** @type {Module[]} */
		const finalModules = [];

		for (;;) {
			/** @type {Set<Module>} */
			const failedModules = new Set();
			const list = modulesByChunkGroup[0].list;
			if (list.length === 0) {
				// done, everything empty
				break;
			}
			/** @type {Module} */
			let selectedModule = list[list.length - 1];
			/** @type {undefined | false | Module} */
			let hasFailed;
			outer: for (;;) {
				for (const { list, set } of modulesByChunkGroup) {
					if (list.length === 0) continue;
					const lastModule = list[list.length - 1];
					if (lastModule === selectedModule) continue;
					if (!set.has(selectedModule)) continue;
					failedModules.add(selectedModule);
					if (failedModules.has(lastModule)) {
						// There is a conflict, try other alternatives
						hasFailed = lastModule;
						continue;
					}
					selectedModule = lastModule;
					hasFailed = false;
					continue outer; // restart
				}
				break;
			}
			if (hasFailed) {
				const fallbackModule = /** @type {Module} */ (hasFailed);

				const fallbackIssuers = [
					...compilation.moduleGraph
						.getIncomingConnectionsByOriginModule(fallbackModule)
						.keys()
				].filter(Boolean);

				const selectedIssuers = [
					...compilation.moduleGraph
						.getIncomingConnectionsByOriginModule(selectedModule)
						.keys()
				].filter(Boolean);

				const allIssuers = [
					...new Set([...fallbackIssuers, ...selectedIssuers])
				]
					.map((m) =>
						/** @type {Module} */ (m).readableIdentifier(
							compilation.requestShortener
						)
					)
					.sort();

				// There is a not resolve-able conflict with the selectedModule
				compilation.warnings.push(
					new WebpackError(
						`chunk ${
							chunk.name || chunk.id
						}\nConflicting order between ${fallbackModule.readableIdentifier(
							compilation.requestShortener
						)} and ${selectedModule.readableIdentifier(
							compilation.requestShortener
						)}\nCSS modules are imported in:\n  - ${allIssuers.join("\n  - ")}`
					)
				);
				selectedModule = fallbackModule;
			}
			// Insert the selected module into the final modules list
			finalModules.push(selectedModule);
			// Remove the selected module from all lists
			for (const { list, set } of modulesByChunkGroup) {
				const lastModule = list[list.length - 1];
				if (lastModule === selectedModule) {
					list.pop();
				} else if (hasFailed && set.has(selectedModule)) {
					const idx = list.indexOf(selectedModule);
					if (idx >= 0) list.splice(idx, 1);
				}
			}
			modulesByChunkGroup.sort(compareModuleLists);
		}
		return finalModules;
	}

	/**
	 * Gets ordered chunk css modules.
	 * @param {Chunk} chunk chunk
	 * @param {ChunkGraph} chunkGraph chunk graph
	 * @param {Compilation} compilation compilation
	 * @returns {CssModule[]} ordered css modules
	 */
	getOrderedChunkCssModules(chunk, chunkGraph, compilation) {
		/** @type {string | undefined} */
		let charset;

		return /** @type {CssModule[]} */ ([
			...this.getModulesInOrder(
				chunk,
				chunkGraph.getOrderedChunkModulesIterableBySourceType(
					chunk,
					CSS_IMPORT_TYPE,
					compareModulesByFullName(compilation.compiler)
				),
				compilation
			),
			...this.getModulesInOrder(
				chunk,
				chunkGraph.getOrderedChunkModulesIterableBySourceType(
					chunk,
					CSS_TYPE,
					compareModulesByFullName(compilation.compiler)
				),
				compilation
			).map((module) => {
				if (
					typeof (/** @type {BuildInfo} */ (module.buildInfo).charset) !==
					"undefined"
				) {
					if (
						typeof charset !== "undefined" &&
						charset !== /** @type {BuildInfo} */ (module.buildInfo).charset
					) {
						const err = new WebpackError(
							`Conflicting @charset at-rules detected: the module ${module.readableIdentifier(
								compilation.requestShortener
							)} (in chunk ${chunk.name || chunk.id}) specifies "${
								/** @type {BuildInfo} */ (module.buildInfo).charset
							}", but "${charset}" was expected, all modules must use the same character set`
						);

						err.chunk = chunk;
						err.module = module;
						err.hideStack = true;

						compilation.warnings.push(err);
					}

					if (typeof charset === "undefined") {
						charset = /** @type {BuildInfo} */ (module.buildInfo).charset;
					}
				}

				return module;
			})
		]);
	}

	/**
	 * Renders css module source.
	 * @param {CssModule} module css module
	 * @param {ChunkRenderContext} renderContext options object
	 * @param {CompilationHooks} hooks hooks
	 * @returns {Source | null} css module source
	 */
	static renderModule(module, renderContext, hooks) {
		const { undoPath, moduleFactoryCache, moduleSourceContent } = renderContext;
		const cacheEntry = moduleFactoryCache.get(moduleSourceContent);

		/** @type {Inheritance} */
		const inheritance = [[module.cssLayer, module.supports, module.media]];
		if (module.inheritance) {
			inheritance.push(...module.inheritance);
		}

		/** @type {CachedSource} */
		let source;
		if (
			cacheEntry &&
			cacheEntry.undoPath === undoPath &&
			cacheEntry.inheritance.length === inheritance.length &&
			cacheEntry.inheritance.every(([layer, supports, media], i) => {
				const item = inheritance[i];
				if (Array.isArray(item)) {
					return layer === item[0] && supports === item[1] && media === item[2];
				}
				return false;
			})
		) {
			source = cacheEntry.source;
		} else {
			if (!moduleSourceContent) return null;
			const moduleSourceCode =
				/** @type {string} */
				(moduleSourceContent.source());
			publicPathAutoRegex.lastIndex = 0;
			/** @type {Source} */
			let moduleSource = new ReplaceSource(moduleSourceContent);
			/** @type {null | RegExpExecArray} */
			let match;
			while ((match = publicPathAutoRegex.exec(moduleSourceCode))) {
				/** @type {ReplaceSource} */ (moduleSource).replace(
					match.index,
					match.index + match[0].length - 1,
					undoPath
				);
			}

			for (let i = 0; i < inheritance.length; i++) {
				const layer = inheritance[i][0];
				const supports = inheritance[i][1];
				const media = inheritance[i][2];

				if (media) {
					moduleSource = new ConcatSource(
						`@media ${media} {\n`,
						new PrefixSource("\t", moduleSource),
						"}\n"
					);
				}

				if (supports) {
					moduleSource = new ConcatSource(
						`@supports (${supports}) {\n`,
						new PrefixSource("\t", moduleSource),
						"}\n"
					);
				}

				// Layer can be anonymous
				if (layer !== undefined && layer !== null) {
					moduleSource = new ConcatSource(
						`@layer${layer ? ` ${layer}` : ""} {\n`,
						new PrefixSource("\t", moduleSource),
						"}\n"
					);
				}
			}

			if (moduleSource) {
				moduleSource = new ConcatSource(moduleSource, "\n");
			}

			source = new CachedSource(moduleSource);
			moduleFactoryCache.set(moduleSourceContent, {
				inheritance,
				undoPath,
				source
			});
		}

		return tryRunOrWebpackError(
			() => hooks.renderModulePackage.call(source, module, renderContext),
			"CssModulesPlugin.getCompilationHooks().renderModulePackage"
		);
	}

	/**
	 * Renders generated source.
	 * @param {RenderContext} renderContext the render context
	 * @param {CompilationHooks} hooks hooks
	 * @returns {Source} generated source
	 */
	renderChunk(
		{
			undoPath,
			chunk,
			codeGenerationResults,
			modules,
			runtimeTemplate,
			chunkGraph
		},
		hooks
	) {
		const source = new ConcatSource();

		/** @type {string | undefined} */
		let charset;

		for (const module of modules) {
			if (
				typeof (/** @type {BuildInfo} */ (module.buildInfo).charset) !==
					"undefined" &&
				typeof charset === "undefined"
			) {
				charset = /** @type {BuildInfo} */ (module.buildInfo).charset;
			}

			try {
				const codeGenResult = codeGenerationResults.get(module, chunk.runtime);
				const moduleSourceContent =
					/** @type {Source} */
					(
						codeGenResult.sources.get(CSS_TYPE) ||
							codeGenResult.sources.get(CSS_IMPORT_TYPE)
					);
				const moduleSource = CssModulesPlugin.renderModule(
					module,
					{
						undoPath,
						chunk,
						chunkGraph,
						codeGenerationResults,
						moduleSourceContent,
						moduleFactoryCache: this._moduleFactoryCache,
						runtimeTemplate
					},
					hooks
				);
				if (moduleSource) {
					source.add(moduleSource);
				}
			} catch (err) {
				/** @type {Error} */
				(err).message += `\nduring rendering of css ${module.identifier()}`;
				throw err;
			}
		}

		chunk.rendered = true;

		if (charset) {
			return new ConcatSource(`@charset "${charset}";\n`, source);
		}

		return source;
	}

	/**
	 * Gets chunk filename template.
	 * @param {Chunk} chunk chunk
	 * @param {OutputOptions} outputOptions output options
	 * @returns {TemplatePath} used filename template
	 */
	static getChunkFilenameTemplate(chunk, outputOptions) {
		if (chunk.cssFilenameTemplate) {
			return chunk.cssFilenameTemplate;
		} else if (chunk.canBeInitial()) {
			return outputOptions.cssFilename;
		}
		return outputOptions.cssChunkFilename;
	}

	/**
	 * Returns true, when the chunk has css.
	 * @param {Chunk} chunk chunk
	 * @param {ChunkGraph} chunkGraph chunk graph
	 * @returns {boolean} true, when the chunk has css
	 */
	static chunkHasCss(chunk, chunkGraph) {
		return (
			Boolean(
				chunkGraph.getChunkModulesIterableBySourceType(chunk, CSS_TYPE)
			) ||
			Boolean(
				chunkGraph.getChunkModulesIterableBySourceType(chunk, CSS_IMPORT_TYPE)
			)
		);
	}
}

module.exports = CssModulesPlugin;
