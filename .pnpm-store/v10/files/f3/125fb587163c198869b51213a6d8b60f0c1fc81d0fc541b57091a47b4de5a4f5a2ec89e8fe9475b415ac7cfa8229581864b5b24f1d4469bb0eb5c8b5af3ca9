/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { SyncBailHook } = require("tapable");
const { RawSource } = require("webpack-sources");
const ChunkGraph = require("./ChunkGraph");
const Compilation = require("./Compilation");
const HotUpdateChunk = require("./HotUpdateChunk");
const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC,
	JAVASCRIPT_MODULE_TYPE_ESM,
	WEBPACK_MODULE_TYPE_RUNTIME
} = require("./ModuleTypeConstants");
const NormalModule = require("./NormalModule");
const RuntimeGlobals = require("./RuntimeGlobals");
const WebpackError = require("./WebpackError");
const { chunkHasCss } = require("./css/CssModulesPlugin");
const ConstDependency = require("./dependencies/ConstDependency");
const ImportMetaHotAcceptDependency = require("./dependencies/ImportMetaHotAcceptDependency");
const ImportMetaHotDeclineDependency = require("./dependencies/ImportMetaHotDeclineDependency");
const ModuleHotAcceptDependency = require("./dependencies/ModuleHotAcceptDependency");
const ModuleHotDeclineDependency = require("./dependencies/ModuleHotDeclineDependency");
const HotModuleReplacementRuntimeModule = require("./hmr/HotModuleReplacementRuntimeModule");
const JavascriptParser = require("./javascript/JavascriptParser");
const {
	evaluateToIdentifier
} = require("./javascript/JavascriptParserHelpers");
const { find, isSubset } = require("./util/SetHelpers");
const TupleSet = require("./util/TupleSet");
const { compareModulesById } = require("./util/comparators");
const {
	forEachRuntime,
	getRuntimeKey,
	intersectRuntime,
	keyToRuntime,
	mergeRuntimeOwned,
	subtractRuntime
} = require("./util/runtime");

/** @typedef {import("estree").CallExpression} CallExpression */
/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("estree").SpreadElement} SpreadElement */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./Chunk").ChunkId} ChunkId */
/** @typedef {import("./ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("./Compilation").AssetInfo} AssetInfo */
/** @typedef {import("./Compilation").Records} Records */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./Module").BuildInfo} BuildInfo */
/** @typedef {import("./RuntimeModule")} RuntimeModule */
/** @typedef {import("./javascript/BasicEvaluatedExpression")} BasicEvaluatedExpression */
/** @typedef {import("./javascript/JavascriptParserHelpers").Range} Range */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */

/** @typedef {string[]} Requests */

/**
 * Defines the hmr javascript parser hooks type used by this module.
 * @typedef {object} HMRJavascriptParserHooks
 * @property {SyncBailHook<[Expression | SpreadElement, Requests], void>} hotAcceptCallback
 * @property {SyncBailHook<[CallExpression, Requests], void>} hotAcceptWithoutCallback
 */

/** @typedef {number} HotIndex */
/** @typedef {Record<string, string>} FullHashChunkModuleHashes */
/** @typedef {Record<string, string>} ChunkModuleHashes */
/** @typedef {Record<ChunkId, string>} ChunkHashes */
/** @typedef {Record<ChunkId, string>} ChunkRuntime */
/** @typedef {Record<ChunkId, ModuleId[]>} ChunkModuleIds */

/** @typedef {Set<ChunkId>} ChunkIds */
/** @typedef {Set<Module>} ModuleSet */

/** @typedef {{ updatedChunkIds: ChunkIds, removedChunkIds: ChunkIds, removedModules: ModuleSet, filename: string, assetInfo: AssetInfo }} HotUpdateMainContentByRuntimeItem */
/** @typedef {Map<string, HotUpdateMainContentByRuntimeItem>} HotUpdateMainContentByRuntime */

/** @type {WeakMap<JavascriptParser, HMRJavascriptParserHooks>} */
const parserHooksMap = new WeakMap();

const PLUGIN_NAME = "HotModuleReplacementPlugin";

class HotModuleReplacementPlugin {
	/**
	 * Returns the attached hooks.
	 * @param {JavascriptParser} parser the parser
	 * @returns {HMRJavascriptParserHooks} the attached hooks
	 */
	static getParserHooks(parser) {
		if (!(parser instanceof JavascriptParser)) {
			throw new TypeError(
				"The 'parser' argument must be an instance of JavascriptParser"
			);
		}
		let hooks = parserHooksMap.get(parser);
		if (hooks === undefined) {
			hooks = {
				hotAcceptCallback: new SyncBailHook(["expression", "requests"]),
				hotAcceptWithoutCallback: new SyncBailHook(["expression", "requests"])
			};
			parserHooksMap.set(parser, hooks);
		}
		return hooks;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const { _backCompat: backCompat } = compiler;
		if (compiler.options.output.strictModuleErrorHandling === undefined) {
			compiler.options.output.strictModuleErrorHandling = true;
		}
		const runtimeRequirements = [RuntimeGlobals.module];

		/**
		 * Creates an accept handler.
		 * @param {JavascriptParser} parser the parser
		 * @param {typeof ModuleHotAcceptDependency} ParamDependency dependency
		 * @returns {(expr: CallExpression) => boolean | undefined} callback
		 */
		const createAcceptHandler = (parser, ParamDependency) => {
			const { hotAcceptCallback, hotAcceptWithoutCallback } =
				HotModuleReplacementPlugin.getParserHooks(parser);

			return (expr) => {
				const module = parser.state.module;
				const dep = new ConstDependency(
					`${module.moduleArgument}.hot.accept`,
					/** @type {Range} */ (expr.callee.range),
					runtimeRequirements
				);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				module.addPresentationalDependency(dep);
				/** @type {BuildInfo} */
				(module.buildInfo).moduleConcatenationBailout =
					"Hot Module Replacement";

				if (expr.arguments.length >= 1) {
					const arg = parser.evaluateExpression(expr.arguments[0]);
					/** @type {BasicEvaluatedExpression[]} */
					let params = [];
					if (arg.isString()) {
						params = [arg];
					} else if (arg.isArray()) {
						params =
							/** @type {BasicEvaluatedExpression[]} */
							(arg.items).filter((param) => param.isString());
					}
					/** @type {Requests} */
					const requests = [];
					if (params.length > 0) {
						for (const [idx, param] of params.entries()) {
							const request = /** @type {string} */ (param.string);
							const dep = new ParamDependency(
								request,
								/** @type {Range} */ (param.range)
							);
							dep.optional = true;
							dep.loc = Object.create(
								/** @type {DependencyLocation} */ (expr.loc)
							);
							dep.loc.index = idx;
							module.addDependency(dep);
							requests.push(request);
						}
						if (expr.arguments.length > 1) {
							hotAcceptCallback.call(expr.arguments[1], requests);
							for (let i = 1; i < expr.arguments.length; i++) {
								parser.walkExpression(expr.arguments[i]);
							}
							return true;
						}
						hotAcceptWithoutCallback.call(expr, requests);
						return true;
					}
				}
				parser.walkExpressions(expr.arguments);
				return true;
			};
		};

		/**
		 * Creates a decline handler.
		 * @param {JavascriptParser} parser the parser
		 * @param {typeof ModuleHotDeclineDependency} ParamDependency dependency
		 * @returns {(expr: CallExpression) => boolean | undefined} callback
		 */
		const createDeclineHandler = (parser, ParamDependency) => (expr) => {
			const module = parser.state.module;
			const dep = new ConstDependency(
				`${module.moduleArgument}.hot.decline`,
				/** @type {Range} */ (expr.callee.range),
				runtimeRequirements
			);
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			module.addPresentationalDependency(dep);
			/** @type {BuildInfo} */
			(module.buildInfo).moduleConcatenationBailout = "Hot Module Replacement";
			if (expr.arguments.length === 1) {
				const arg = parser.evaluateExpression(expr.arguments[0]);
				/** @type {BasicEvaluatedExpression[]} */
				let params = [];
				if (arg.isString()) {
					params = [arg];
				} else if (arg.isArray()) {
					params =
						/** @type {BasicEvaluatedExpression[]} */
						(arg.items).filter((param) => param.isString());
				}
				for (const [idx, param] of params.entries()) {
					const dep = new ParamDependency(
						/** @type {string} */ (param.string),
						/** @type {Range} */ (param.range)
					);
					dep.optional = true;
					dep.loc = Object.create(/** @type {DependencyLocation} */ (expr.loc));
					dep.loc.index = idx;
					module.addDependency(dep);
				}
			}
			return true;
		};

		/**
		 * Creates a hmr expression handler.
		 * @param {JavascriptParser} parser the parser
		 * @returns {(expr: Expression) => boolean | undefined} callback
		 */
		const createHMRExpressionHandler = (parser) => (expr) => {
			const module = parser.state.module;
			const dep = new ConstDependency(
				`${module.moduleArgument}.hot`,
				/** @type {Range} */ (expr.range),
				runtimeRequirements
			);
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			module.addPresentationalDependency(dep);
			/** @type {BuildInfo} */
			(module.buildInfo).moduleConcatenationBailout = "Hot Module Replacement";
			return true;
		};

		/**
		 * Processes the provided parser.
		 * @param {JavascriptParser} parser the parser
		 * @returns {void}
		 */
		const applyModuleHot = (parser) => {
			parser.hooks.evaluateIdentifier.for("module.hot").tap(
				{
					name: PLUGIN_NAME,
					before: "NodeStuffPlugin"
				},
				(expr) =>
					evaluateToIdentifier(
						"module.hot",
						"module",
						() => ["hot"],
						true
					)(expr)
			);
			parser.hooks.call
				.for("module.hot.accept")
				.tap(
					PLUGIN_NAME,
					createAcceptHandler(parser, ModuleHotAcceptDependency)
				);
			parser.hooks.call
				.for("module.hot.decline")
				.tap(
					PLUGIN_NAME,
					createDeclineHandler(parser, ModuleHotDeclineDependency)
				);
			parser.hooks.expression
				.for("module.hot")
				.tap(PLUGIN_NAME, createHMRExpressionHandler(parser));
		};

		/**
		 * Apply import meta hot.
		 * @param {JavascriptParser} parser the parser
		 * @returns {void}
		 */
		const applyImportMetaHot = (parser) => {
			parser.hooks.evaluateIdentifier
				.for("import.meta.webpackHot")
				.tap(PLUGIN_NAME, (expr) =>
					evaluateToIdentifier(
						"import.meta.webpackHot",
						"import.meta",
						() => ["webpackHot"],
						true
					)(expr)
				);
			parser.hooks.call
				.for("import.meta.webpackHot.accept")
				.tap(
					PLUGIN_NAME,
					createAcceptHandler(parser, ImportMetaHotAcceptDependency)
				);
			parser.hooks.call
				.for("import.meta.webpackHot.decline")
				.tap(
					PLUGIN_NAME,
					createDeclineHandler(parser, ImportMetaHotDeclineDependency)
				);
			parser.hooks.expression
				.for("import.meta.webpackHot")
				.tap(PLUGIN_NAME, createHMRExpressionHandler(parser));
		};

		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				// This applies the HMR plugin only to the targeted compiler
				// It should not affect child compilations
				if (compilation.compiler !== compiler) return;

				// #region module.hot.* API
				compilation.dependencyFactories.set(
					ModuleHotAcceptDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					ModuleHotAcceptDependency,
					new ModuleHotAcceptDependency.Template()
				);
				compilation.dependencyFactories.set(
					ModuleHotDeclineDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					ModuleHotDeclineDependency,
					new ModuleHotDeclineDependency.Template()
				);
				// #endregion

				// #region import.meta.webpackHot.* API
				compilation.dependencyFactories.set(
					ImportMetaHotAcceptDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					ImportMetaHotAcceptDependency,
					new ImportMetaHotAcceptDependency.Template()
				);
				compilation.dependencyFactories.set(
					ImportMetaHotDeclineDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					ImportMetaHotDeclineDependency,
					new ImportMetaHotDeclineDependency.Template()
				);
				// #endregion

				/** @type {HotIndex} */
				let hotIndex = 0;
				/** @type {FullHashChunkModuleHashes} */
				const fullHashChunkModuleHashes = {};
				/** @type {ChunkModuleHashes} */
				const chunkModuleHashes = {};

				compilation.hooks.record.tap(PLUGIN_NAME, (compilation, records) => {
					if (records.hash === compilation.hash) return;
					const chunkGraph = compilation.chunkGraph;
					records.hash = compilation.hash;
					records.hotIndex = hotIndex;
					records.fullHashChunkModuleHashes = fullHashChunkModuleHashes;
					records.chunkModuleHashes = chunkModuleHashes;
					records.chunkHashes = {};
					records.chunkRuntime = {};
					for (const chunk of compilation.chunks) {
						const chunkId = /** @type {ChunkId} */ (chunk.id);
						records.chunkHashes[chunkId] = /** @type {string} */ (chunk.hash);
						records.chunkRuntime[chunkId] = getRuntimeKey(chunk.runtime);
					}
					records.chunkModuleIds = {};
					for (const chunk of compilation.chunks) {
						const chunkId = /** @type {ChunkId} */ (chunk.id);

						records.chunkModuleIds[chunkId] = Array.from(
							chunkGraph.getOrderedChunkModulesIterable(
								chunk,
								compareModulesById(chunkGraph)
							),
							(m) => /** @type {ModuleId} */ (chunkGraph.getModuleId(m))
						);
					}
				});
				/** @type {TupleSet<Module, Chunk>} */
				const updatedModules = new TupleSet();
				/** @type {TupleSet<Module, Chunk>} */
				const fullHashModules = new TupleSet();
				/** @type {TupleSet<Module, RuntimeSpec>} */
				const nonCodeGeneratedModules = new TupleSet();
				compilation.hooks.fullHash.tap(PLUGIN_NAME, (hash) => {
					const chunkGraph = compilation.chunkGraph;
					const records = /** @type {Records} */ (compilation.records);
					for (const chunk of compilation.chunks) {
						/**
						 * Returns module hash.
						 * @param {Module} module module
						 * @returns {string} module hash
						 */
						const getModuleHash = (module) => {
							const codeGenerationResults =
								/** @type {CodeGenerationResults} */
								(compilation.codeGenerationResults);
							if (codeGenerationResults.has(module, chunk.runtime)) {
								return codeGenerationResults.getHash(module, chunk.runtime);
							}
							nonCodeGeneratedModules.add(module, chunk.runtime);
							return chunkGraph.getModuleHash(module, chunk.runtime);
						};
						const fullHashModulesInThisChunk =
							chunkGraph.getChunkFullHashModulesSet(chunk);
						if (fullHashModulesInThisChunk !== undefined) {
							for (const module of fullHashModulesInThisChunk) {
								fullHashModules.add(module, chunk);
							}
						}
						const modules = chunkGraph.getChunkModulesIterable(chunk);
						if (modules !== undefined) {
							if (records.chunkModuleHashes) {
								if (fullHashModulesInThisChunk !== undefined) {
									for (const module of modules) {
										const key = `${chunk.id}|${module.identifier()}`;
										const hash = getModuleHash(module);
										if (
											fullHashModulesInThisChunk.has(
												/** @type {RuntimeModule} */
												(module)
											)
										) {
											if (
												/** @type {FullHashChunkModuleHashes} */
												(records.fullHashChunkModuleHashes)[key] !== hash
											) {
												updatedModules.add(module, chunk);
											}
											fullHashChunkModuleHashes[key] = hash;
										} else {
											if (records.chunkModuleHashes[key] !== hash) {
												updatedModules.add(module, chunk);
											}
											chunkModuleHashes[key] = hash;
										}
									}
								} else {
									for (const module of modules) {
										const key = `${chunk.id}|${module.identifier()}`;
										const hash = getModuleHash(module);
										if (records.chunkModuleHashes[key] !== hash) {
											updatedModules.add(module, chunk);
										}
										chunkModuleHashes[key] = hash;
									}
								}
							} else if (fullHashModulesInThisChunk !== undefined) {
								for (const module of modules) {
									const key = `${chunk.id}|${module.identifier()}`;
									const hash = getModuleHash(module);
									if (
										fullHashModulesInThisChunk.has(
											/** @type {RuntimeModule} */ (module)
										)
									) {
										fullHashChunkModuleHashes[key] = hash;
									} else {
										chunkModuleHashes[key] = hash;
									}
								}
							} else {
								for (const module of modules) {
									const key = `${chunk.id}|${module.identifier()}`;
									const hash = getModuleHash(module);
									chunkModuleHashes[key] = hash;
								}
							}
						}
					}

					hotIndex = records.hotIndex || 0;
					if (updatedModules.size > 0) hotIndex++;

					hash.update(`${hotIndex}`);
				});
				compilation.hooks.processAssets.tap(
					{
						name: PLUGIN_NAME,
						stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL
					},
					() => {
						const chunkGraph = compilation.chunkGraph;
						const records = /** @type {Records} */ (compilation.records);
						if (records.hash === compilation.hash) return;
						if (
							!records.chunkModuleHashes ||
							!records.chunkHashes ||
							!records.chunkModuleIds
						) {
							return;
						}
						const codeGenerationResults =
							/** @type {CodeGenerationResults} */
							(compilation.codeGenerationResults);
						for (const [module, chunk] of fullHashModules) {
							const key = `${chunk.id}|${module.identifier()}`;
							const hash = nonCodeGeneratedModules.has(module, chunk.runtime)
								? chunkGraph.getModuleHash(module, chunk.runtime)
								: codeGenerationResults.getHash(module, chunk.runtime);
							if (records.chunkModuleHashes[key] !== hash) {
								updatedModules.add(module, chunk);
							}
							chunkModuleHashes[key] = hash;
						}

						/** @type {HotUpdateMainContentByRuntime} */
						const hotUpdateMainContentByRuntime = new Map();
						/** @type {RuntimeSpec} */
						let allOldRuntime;
						const chunkRuntime =
							/** @type {ChunkRuntime} */
							(records.chunkRuntime);
						for (const key of Object.keys(chunkRuntime)) {
							const runtime = keyToRuntime(chunkRuntime[key]);
							allOldRuntime = mergeRuntimeOwned(allOldRuntime, runtime);
						}
						forEachRuntime(allOldRuntime, (runtime) => {
							const { path: filename, info: assetInfo } =
								compilation.getPathWithInfo(
									compilation.outputOptions.hotUpdateMainFilename,
									{
										hash: records.hash,
										runtime
									}
								);
							hotUpdateMainContentByRuntime.set(
								/** @type {string} */ (runtime),
								{
									/** @type {ChunkIds} */
									updatedChunkIds: new Set(),
									/** @type {ChunkIds} */
									removedChunkIds: new Set(),
									/** @type {ModuleSet} */
									removedModules: new Set(),
									filename,
									assetInfo
								}
							);
						});
						if (hotUpdateMainContentByRuntime.size === 0) return;

						// Create a list of all active modules to verify which modules are removed completely
						/** @type {Map<ModuleId, Module>} */
						const allModules = new Map();
						for (const module of compilation.modules) {
							const id =
								/** @type {ModuleId} */
								(chunkGraph.getModuleId(module));
							allModules.set(id, module);
						}

						// List of completely removed modules
						/** @type {Set<ModuleId>} */
						const completelyRemovedModules = new Set();

						for (const key of Object.keys(records.chunkHashes)) {
							const oldRuntime = keyToRuntime(
								/** @type {ChunkRuntime} */
								(records.chunkRuntime)[key]
							);
							/** @type {Module[]} */
							const remainingModules = [];
							// Check which modules are removed
							for (const id of records.chunkModuleIds[key]) {
								const module = allModules.get(id);
								if (module === undefined) {
									completelyRemovedModules.add(id);
								} else {
									remainingModules.push(module);
								}
							}

							/** @type {ChunkId | null} */
							let chunkId;
							/** @type {undefined | Module[]} */
							let newModules;
							/** @type {undefined | RuntimeModule[]} */
							let newRuntimeModules;
							/** @type {undefined | RuntimeModule[]} */
							let newFullHashModules;
							/** @type {undefined | RuntimeModule[]} */
							let newDependentHashModules;
							/** @type {RuntimeSpec} */
							let newRuntime;
							/** @type {RuntimeSpec} */
							let removedFromRuntime;
							const currentChunk = find(
								compilation.chunks,
								(chunk) => `${chunk.id}` === key
							);
							if (currentChunk) {
								chunkId = currentChunk.id;
								newRuntime = intersectRuntime(
									currentChunk.runtime,
									allOldRuntime
								);
								if (newRuntime === undefined) continue;
								newModules = chunkGraph
									.getChunkModules(currentChunk)
									.filter((module) => updatedModules.has(module, currentChunk));
								newRuntimeModules = [
									...chunkGraph.getChunkRuntimeModulesIterable(currentChunk)
								].filter((module) => updatedModules.has(module, currentChunk));
								const fullHashModules =
									chunkGraph.getChunkFullHashModulesIterable(currentChunk);
								newFullHashModules =
									fullHashModules &&
									[...fullHashModules].filter((module) =>
										updatedModules.has(module, currentChunk)
									);
								const dependentHashModules =
									chunkGraph.getChunkDependentHashModulesIterable(currentChunk);
								newDependentHashModules =
									dependentHashModules &&
									[...dependentHashModules].filter((module) =>
										updatedModules.has(module, currentChunk)
									);
								removedFromRuntime = subtractRuntime(oldRuntime, newRuntime);
							} else {
								// chunk has completely removed
								chunkId = `${Number(key)}` === key ? Number(key) : key;
								removedFromRuntime = oldRuntime;
								newRuntime = oldRuntime;
							}
							if (removedFromRuntime) {
								// chunk was removed from some runtimes
								forEachRuntime(removedFromRuntime, (runtime) => {
									const item =
										/** @type {HotUpdateMainContentByRuntimeItem} */
										(
											hotUpdateMainContentByRuntime.get(
												/** @type {string} */ (runtime)
											)
										);
									item.removedChunkIds.add(/** @type {ChunkId} */ (chunkId));
								});
								// dispose modules from the chunk in these runtimes
								// where they are no longer in this runtime
								for (const module of remainingModules) {
									const moduleKey = `${key}|${module.identifier()}`;
									const oldHash = records.chunkModuleHashes[moduleKey];
									const runtimes = chunkGraph.getModuleRuntimes(module);
									if (oldRuntime === newRuntime && runtimes.has(newRuntime)) {
										// Module is still in the same runtime combination
										const hash = nonCodeGeneratedModules.has(module, newRuntime)
											? chunkGraph.getModuleHash(module, newRuntime)
											: codeGenerationResults.getHash(module, newRuntime);
										if (hash !== oldHash) {
											if (module.type === WEBPACK_MODULE_TYPE_RUNTIME) {
												newRuntimeModules = newRuntimeModules || [];
												newRuntimeModules.push(
													/** @type {RuntimeModule} */ (module)
												);
											} else {
												newModules = newModules || [];
												newModules.push(module);
											}
										}
									} else {
										// module is no longer in this runtime combination
										// We (incorrectly) assume that it's not in an overlapping runtime combination
										// and dispose it from the main runtimes the chunk was removed from
										forEachRuntime(removedFromRuntime, (runtime) => {
											// If the module is still used in this runtime, do not dispose it
											// This could create a bad runtime state where the module is still loaded,
											// but no chunk which contains it. This means we don't receive further HMR updates
											// to this module and that's bad.
											// TODO force load one of the chunks which contains the module
											for (const moduleRuntime of runtimes) {
												if (typeof moduleRuntime === "string") {
													if (moduleRuntime === runtime) return;
												} else if (
													moduleRuntime !== undefined &&
													moduleRuntime.has(/** @type {string} */ (runtime))
												) {
													return;
												}
											}
											const item =
												/** @type {HotUpdateMainContentByRuntimeItem} */ (
													hotUpdateMainContentByRuntime.get(
														/** @type {string} */ (runtime)
													)
												);
											item.removedModules.add(module);
										});
									}
								}
							}
							if (
								(newModules && newModules.length > 0) ||
								(newRuntimeModules && newRuntimeModules.length > 0)
							) {
								const hotUpdateChunk = new HotUpdateChunk();
								if (backCompat) {
									ChunkGraph.setChunkGraphForChunk(hotUpdateChunk, chunkGraph);
								}
								hotUpdateChunk.id = chunkId;
								hotUpdateChunk.runtime = currentChunk
									? currentChunk.runtime
									: newRuntime;
								if (currentChunk) {
									for (const group of currentChunk.groupsIterable) {
										hotUpdateChunk.addGroup(group);
									}
								}
								chunkGraph.attachModules(hotUpdateChunk, newModules || []);
								chunkGraph.attachRuntimeModules(
									hotUpdateChunk,
									newRuntimeModules || []
								);
								if (newFullHashModules) {
									chunkGraph.attachFullHashModules(
										hotUpdateChunk,
										newFullHashModules
									);
								}
								if (newDependentHashModules) {
									chunkGraph.attachDependentHashModules(
										hotUpdateChunk,
										newDependentHashModules
									);
								}
								const renderManifest = compilation.getRenderManifest({
									chunk: hotUpdateChunk,
									hash: /** @type {string} */ (records.hash),
									fullHash: /** @type {string} */ (records.hash),
									outputOptions: compilation.outputOptions,
									moduleTemplates: compilation.moduleTemplates,
									dependencyTemplates: compilation.dependencyTemplates,
									codeGenerationResults: /** @type {CodeGenerationResults} */ (
										compilation.codeGenerationResults
									),
									runtimeTemplate: compilation.runtimeTemplate,
									moduleGraph: compilation.moduleGraph,
									chunkGraph
								});
								for (const entry of renderManifest) {
									/** @type {string} */
									let filename;
									/** @type {AssetInfo} */
									let assetInfo;
									if ("filename" in entry) {
										filename = entry.filename;
										assetInfo = entry.info;
									} else {
										({ path: filename, info: assetInfo } =
											compilation.getPathWithInfo(
												entry.filenameTemplate,
												entry.pathOptions
											));
									}
									const source = entry.render();
									compilation.additionalChunkAssets.push(filename);
									compilation.emitAsset(filename, source, {
										hotModuleReplacement: true,
										...assetInfo
									});
									if (currentChunk) {
										currentChunk.files.add(filename);
										compilation.hooks.chunkAsset.call(currentChunk, filename);
									}
								}
								forEachRuntime(newRuntime, (runtime) => {
									const item =
										/** @type {HotUpdateMainContentByRuntimeItem} */ (
											hotUpdateMainContentByRuntime.get(
												/** @type {string} */ (runtime)
											)
										);
									item.updatedChunkIds.add(/** @type {ChunkId} */ (chunkId));
								});
							}
						}
						const completelyRemovedModulesArray = [...completelyRemovedModules];
						/** @type {Map<string, Omit<HotUpdateMainContentByRuntimeItem, "filename">>} */
						const hotUpdateMainContentByFilename = new Map();
						for (const {
							removedChunkIds,
							removedModules,
							updatedChunkIds,
							filename,
							assetInfo
						} of hotUpdateMainContentByRuntime.values()) {
							const old = hotUpdateMainContentByFilename.get(filename);
							if (
								old &&
								(!isSubset(old.removedChunkIds, removedChunkIds) ||
									!isSubset(old.removedModules, removedModules) ||
									!isSubset(old.updatedChunkIds, updatedChunkIds))
							) {
								compilation.warnings.push(
									new WebpackError(`HotModuleReplacementPlugin
The configured output.hotUpdateMainFilename doesn't lead to unique filenames per runtime and HMR update differs between runtimes.
This might lead to incorrect runtime behavior of the applied update.
To fix this, make sure to include [runtime] in the output.hotUpdateMainFilename option, or use the default config.`)
								);
								for (const chunkId of removedChunkIds) {
									old.removedChunkIds.add(chunkId);
								}
								for (const chunkId of removedModules) {
									old.removedModules.add(chunkId);
								}
								for (const chunkId of updatedChunkIds) {
									old.updatedChunkIds.add(chunkId);
								}
								continue;
							}
							hotUpdateMainContentByFilename.set(filename, {
								removedChunkIds,
								removedModules,
								updatedChunkIds,
								assetInfo
							});
						}
						for (const [
							filename,
							{ removedChunkIds, removedModules, updatedChunkIds, assetInfo }
						] of hotUpdateMainContentByFilename) {
							/** @type {{ c: ChunkId[], r: ChunkId[], m: ModuleId[], css?: { r: ChunkId[] } }} */
							const hotUpdateMainJson = {
								c: [...updatedChunkIds],
								r: [...removedChunkIds],
								m:
									removedModules.size === 0
										? completelyRemovedModulesArray
										: [
												...completelyRemovedModulesArray,
												...Array.from(
													removedModules,
													(m) =>
														/** @type {ModuleId} */ (chunkGraph.getModuleId(m))
												)
											]
							};

							// Build CSS removed chunks list (chunks in updatedChunkIds that no longer have CSS)
							/** @type {ChunkId[]} */
							const cssRemovedChunkIds = [];
							if (compilation.options.experiments.css) {
								for (const chunkId of updatedChunkIds) {
									for (const /** @type {Chunk} */ chunk of compilation.chunks) {
										if (chunk.id === chunkId) {
											if (!chunkHasCss(chunk, chunkGraph)) {
												cssRemovedChunkIds.push(chunkId);
											}
											break;
										}
									}
								}
							}

							if (cssRemovedChunkIds.length > 0) {
								hotUpdateMainJson.css = { r: cssRemovedChunkIds };
							}

							const source = new RawSource(
								(filename.endsWith(".json") ? "" : "export default ") +
									JSON.stringify(hotUpdateMainJson)
							);
							compilation.emitAsset(filename, source, {
								hotModuleReplacement: true,
								...assetInfo
							});
						}
					}
				);

				compilation.hooks.additionalTreeRuntimeRequirements.tap(
					PLUGIN_NAME,
					(chunk, runtimeRequirements) => {
						runtimeRequirements.add(RuntimeGlobals.hmrDownloadManifest);
						runtimeRequirements.add(RuntimeGlobals.hmrDownloadUpdateHandlers);
						runtimeRequirements.add(RuntimeGlobals.interceptModuleExecution);
						runtimeRequirements.add(RuntimeGlobals.moduleCache);
						compilation.addRuntimeModule(
							chunk,
							new HotModuleReplacementRuntimeModule()
						);
					}
				);

				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_AUTO)
					.tap(PLUGIN_NAME, (parser) => {
						applyModuleHot(parser);
						applyImportMetaHot(parser);
					});
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_DYNAMIC)
					.tap(PLUGIN_NAME, (parser) => {
						applyModuleHot(parser);
					});
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_ESM)
					.tap(PLUGIN_NAME, (parser) => {
						applyImportMetaHot(parser);
					});
				normalModuleFactory.hooks.module.tap(PLUGIN_NAME, (module) => {
					module.hot = true;
					return module;
				});

				NormalModule.getCompilationHooks(compilation).loader.tap(
					PLUGIN_NAME,
					(context) => {
						context.hot = true;
					}
				);
			}
		);
	}
}

module.exports = HotModuleReplacementPlugin;
