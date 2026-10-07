/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const asyncLib = require("neo-async");
const ChunkGraph = require("../ChunkGraph");
const ModuleGraph = require("../ModuleGraph");
const { STAGE_DEFAULT } = require("../OptimizationStages");
const HarmonyImportDependency = require("../dependencies/HarmonyImportDependency");
const { compareModulesByIdentifier } = require("../util/comparators");
const {
	intersectRuntime,
	mergeRuntimeOwned,
	filterRuntime,
	runtimeToString,
	mergeRuntime
} = require("../util/runtime");
const ConcatenatedModule = require("./ConcatenatedModule");

/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../RequestShortener")} RequestShortener */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

/**
 * @typedef {object} Statistics
 * @property {number} cached
 * @property {number} alreadyInConfig
 * @property {number} invalidModule
 * @property {number} incorrectChunks
 * @property {number} incorrectDependency
 * @property {number} incorrectModuleDependency
 * @property {number} incorrectChunksOfImporter
 * @property {number} incorrectRuntimeCondition
 * @property {number} importerFailed
 * @property {number} added
 */

/**
 * @param {string} msg message
 * @returns {string} formatted message
 */
const formatBailoutReason = msg => `ModuleConcatenation bailout: ${msg}`;

class ModuleConcatenationPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const { _backCompat: backCompat } = compiler;
		compiler.hooks.compilation.tap("ModuleConcatenationPlugin", compilation => {
			if (compilation.moduleMemCaches) {
				throw new Error(
					"optimization.concatenateModules can't be used with cacheUnaffected as module concatenation is a global effect"
				);
			}
			const moduleGraph = compilation.moduleGraph;
			/** @type {Map<Module, string | ((requestShortener: RequestShortener) => string)>} */
			const bailoutReasonMap = new Map();

			/**
			 * @param {Module} module the module
			 * @param {string | ((requestShortener: RequestShortener) => string)} reason the reason
			 */
			const setBailoutReason = (module, reason) => {
				setInnerBailoutReason(module, reason);
				moduleGraph
					.getOptimizationBailout(module)
					.push(
						typeof reason === "function"
							? rs => formatBailoutReason(reason(rs))
							: formatBailoutReason(reason)
					);
			};

			/**
			 * @param {Module} module the module
			 * @param {string | ((requestShortener: RequestShortener) => string)} reason the reason
			 */
			const setInnerBailoutReason = (module, reason) => {
				bailoutReasonMap.set(module, reason);
			};

			/**
			 * @param {Module} module the module
			 * @param {RequestShortener} requestShortener the request shortener
			 * @returns {string | ((requestShortener: RequestShortener) => string) | undefined} the reason
			 */
			const getInnerBailoutReason = (module, requestShortener) => {
				const reason = bailoutReasonMap.get(module);
				if (typeof reason === "function") return reason(requestShortener);
				return reason;
			};

			/**
			 * @param {Module} module the module
			 * @param {Module | function(RequestShortener): string} problem the problem
			 * @returns {(requestShortener: RequestShortener) => string} the reason
			 */
			const formatBailoutWarning = (module, problem) => requestShortener => {
				if (typeof problem === "function") {
					return formatBailoutReason(
						`Cannot concat with ${module.readableIdentifier(
							requestShortener
						)}: ${problem(requestShortener)}`
					);
				}
				const reason = getInnerBailoutReason(module, requestShortener);
				const reasonWithPrefix = reason ? `: ${reason}` : "";
				if (module === problem) {
					return formatBailoutReason(
						`Cannot concat with ${module.readableIdentifier(
							requestShortener
						)}${reasonWithPrefix}`
					);
				}
				return formatBailoutReason(
					`Cannot concat with ${module.readableIdentifier(
						requestShortener
					)} because of ${problem.readableIdentifier(
						requestShortener
					)}${reasonWithPrefix}`
				);
			};

			compilation.hooks.optimizeChunkModules.tapAsync(
				{
					name: "ModuleConcatenationPlugin",
					stage: STAGE_DEFAULT
				},
				(allChunks, modules, callback) => {
					const logger = compilation.getLogger(
						"webpack.ModuleConcatenationPlugin"
					);
					const { chunkGraph, moduleGraph } = compilation;
					const relevantModules = [];
					const possibleInners = new Set();
					const context = {
						chunkGraph,
						moduleGraph
					};
					logger.time("select relevant modules");
					for (const module of modules) {
						let canBeRoot = true;
						let canBeInner = true;

						const bailoutReason = module.getConcatenationBailoutReason(context);
						if (bailoutReason) {
							setBailoutReason(module, bailoutReason);
							continue;
						}

						// Must not be an async module
						if (moduleGraph.isAsync(module)) {
							setBailoutReason(module, "Module is async");
							continue;
						}

						// Must be in strict mode
						if (!(/** @type {BuildInfo} */ (module.buildInfo).strict)) {
							setBailoutReason(module, "Module is not in strict mode");
							continue;
						}

						// Module must be in any chunk (we don't want to do useless work)
						if (chunkGraph.getNumberOfModuleChunks(module) === 0) {
							setBailoutReason(module, "Module is not in any chunk");
							continue;
						}

						// Exports must be known (and not dynamic)
						const exportsInfo = moduleGraph.getExportsInfo(module);
						const relevantExports = exportsInfo.getRelevantExports(undefined);
						const unknownReexports = relevantExports.filter(
							exportInfo =>
								exportInfo.isReexport() && !exportInfo.getTarget(moduleGraph)
						);
						if (unknownReexports.length > 0) {
							setBailoutReason(
								module,
								`Reexports in this module do not have a static target (${Array.from(
									unknownReexports,
									exportInfo =>
										`${
											exportInfo.name || "other exports"
										}: ${exportInfo.getUsedInfo()}`
								).join(", ")})`
							);
							continue;
						}

						// Root modules must have a static list of exports
						const unknownProvidedExports = relevantExports.filter(
							exportInfo => exportInfo.provided !== true
						);
						if (unknownProvidedExports.length > 0) {
							setBailoutReason(
								module,
								`List of module exports is dynamic (${Array.from(
									unknownProvidedExports,
									exportInfo =>
										`${
											exportInfo.name || "other exports"
										}: ${exportInfo.getProvidedInfo()} and ${exportInfo.getUsedInfo()}`
								).join(", ")})`
							);
							canBeRoot = false;
						}

						// Module must not be an entry point
						if (chunkGraph.isEntryModule(module)) {
							setInnerBailoutReason(module, "Module is an entry point");
							canBeInner = false;
						}

						if (canBeRoot) relevantModules.push(module);
						if (canBeInner) possibleInners.add(module);
					}
					logger.timeEnd("select relevant modules");
					logger.debug(
						`${relevantModules.length} potential root modules, ${possibleInners.size} potential inner modules`
					);
					// sort by depth
					// modules with lower depth are more likely suited as roots
					// this improves performance, because modules already selected as inner are skipped
					logger.time("sort relevant modules");
					relevantModules.sort(
						(a, b) =>
							/** @type {number} */ (moduleGraph.getDepth(a)) -
							/** @type {number} */ (moduleGraph.getDepth(b))
					);
					logger.timeEnd("sort relevant modules");

					/** @type {Statistics} */
					const stats = {
						cached: 0,
						alreadyInConfig: 0,
						invalidModule: 0,
						incorrectChunks: 0,
						incorrectDependency: 0,
						incorrectModuleDependency: 0,
						incorrectChunksOfImporter: 0,
						incorrectRuntimeCondition: 0,
						importerFailed: 0,
						added: 0
					};
					let statsCandidates = 0;
					let statsSizeSum = 0;
					let statsEmptyConfigurations = 0;

					logger.time("find modules to concatenate");
					const concatConfigurations = [];
					const usedAsInner = new Set();
					for (const currentRoot of relevantModules) {
						// when used by another configuration as inner:
						// the other configuration is better and we can skip this one
						// TODO reconsider that when it's only used in a different runtime
						if (usedAsInner.has(currentRoot)) continue;

						let chunkRuntime;
						for (const r of chunkGraph.getModuleRuntimes(currentRoot)) {
							chunkRuntime = mergeRuntimeOwned(chunkRuntime, r);
						}
						const exportsInfo = moduleGraph.getExportsInfo(currentRoot);
						const filteredRuntime = filterRuntime(chunkRuntime, r =>
							exportsInfo.isModuleUsed(r)
						);
						const activeRuntime =
							filteredRuntime === true
								? chunkRuntime
								: filteredRuntime === false
									? undefined
									: filteredRuntime;

						// create a configuration with the root
						const currentConfiguration = new ConcatConfiguration(
							currentRoot,
							activeRuntime
						);

						// cache failures to add modules
						const failureCache = new Map();

						// potential optional import candidates
						/** @type {Set<Module>} */
						const candidates = new Set();

						// try to add all imports
						for (const imp of this._getImports(
							compilation,
							currentRoot,
							activeRuntime
						)) {
							candidates.add(imp);
						}

						for (const imp of candidates) {
							const impCandidates = new Set();
							const problem = this._tryToAdd(
								compilation,
								currentConfiguration,
								imp,
								chunkRuntime,
								activeRuntime,
								possibleInners,
								impCandidates,
								failureCache,
								chunkGraph,
								true,
								stats
							);
							if (problem) {
								failureCache.set(imp, problem);
								currentConfiguration.addWarning(imp, problem);
							} else {
								for (const c of impCandidates) {
									candidates.add(c);
								}
							}
						}
						statsCandidates += candidates.size;
						if (!currentConfiguration.isEmpty()) {
							const modules = currentConfiguration.getModules();
							statsSizeSum += modules.size;
							concatConfigurations.push(currentConfiguration);
							for (const module of modules) {
								if (module !== currentConfiguration.rootModule) {
									usedAsInner.add(module);
								}
							}
						} else {
							statsEmptyConfigurations++;
							const optimizationBailouts =
								moduleGraph.getOptimizationBailout(currentRoot);
							for (const warning of currentConfiguration.getWarningsSorted()) {
								optimizationBailouts.push(
									formatBailoutWarning(warning[0], warning[1])
								);
							}
						}
					}
					logger.timeEnd("find modules to concatenate");
					logger.debug(
						`${
							concatConfigurations.length
						} successful concat configurations (avg size: ${
							statsSizeSum / concatConfigurations.length
						}), ${statsEmptyConfigurations} bailed out completely`
					);
					logger.debug(
						`${statsCandidates} candidates were considered for adding (${stats.cached} cached failure, ${stats.alreadyInConfig} already in config, ${stats.invalidModule} invalid module, ${stats.incorrectChunks} incorrect chunks, ${stats.incorrectDependency} incorrect dependency, ${stats.incorrectChunksOfImporter} incorrect chunks of importer, ${stats.incorrectModuleDependency} incorrect module dependency, ${stats.incorrectRuntimeCondition} incorrect runtime condition, ${stats.importerFailed} importer failed, ${stats.added} added)`
					);
					// HACK: Sort configurations by length and start with the longest one
					// to get the biggest groups possible. Used modules are marked with usedModules
					// TODO: Allow to reuse existing configuration while trying to add dependencies.
					// This would improve performance. O(n^2) -> O(n)
					logger.time("sort concat configurations");
					concatConfigurations.sort((a, b) => b.modules.size - a.modules.size);
					logger.timeEnd("sort concat configurations");
					const usedModules = new Set();

					logger.time("create concatenated modules");
					asyncLib.each(
						concatConfigurations,
						(concatConfiguration, callback) => {
							const rootModule = concatConfiguration.rootModule;

							// Avoid overlapping configurations
							// TODO: remove this when todo above is fixed
							if (usedModules.has(rootModule)) return callback();
							const modules = concatConfiguration.getModules();
							for (const m of modules) {
								usedModules.add(m);
							}

							// Create a new ConcatenatedModule
							ConcatenatedModule.getCompilationHooks(compilation);
							const newModule = ConcatenatedModule.create(
								rootModule,
								modules,
								concatConfiguration.runtime,
								compilation,
								compiler.root,
								compilation.outputOptions.hashFunction
							);

							const build = () => {
								newModule.build(
									compiler.options,
									compilation,
									/** @type {TODO} */
									(null),
									/** @type {TODO} */
									(null),
									err => {
										if (err) {
											if (!err.module) {
												err.module = newModule;
											}
											return callback(err);
										}
										integrate();
									}
								);
							};

							const integrate = () => {
								if (backCompat) {
									ChunkGraph.setChunkGraphForModule(newModule, chunkGraph);
									ModuleGraph.setModuleGraphForModule(newModule, moduleGraph);
								}

								for (const warning of concatConfiguration.getWarningsSorted()) {
									moduleGraph
										.getOptimizationBailout(newModule)
										.push(formatBailoutWarning(warning[0], warning[1]));
								}
								moduleGraph.cloneModuleAttributes(rootModule, newModule);
								for (const m of modules) {
									// add to builtModules when one of the included modules was built
									if (compilation.builtModules.has(m)) {
										compilation.builtModules.add(newModule);
									}
									if (m !== rootModule) {
										// attach external references to the concatenated module too
										moduleGraph.copyOutgoingModuleConnections(
											m,
											newModule,
											c =>
												c.originModule === m &&
												!(
													c.dependency instanceof HarmonyImportDependency &&
													modules.has(c.module)
												)
										);
										// remove module from chunk
										for (const chunk of chunkGraph.getModuleChunksIterable(
											rootModule
										)) {
											const sourceTypes = chunkGraph.getChunkModuleSourceTypes(
												chunk,
												m
											);
											if (sourceTypes.size === 1) {
												chunkGraph.disconnectChunkAndModule(chunk, m);
											} else {
												const newSourceTypes = new Set(sourceTypes);
												newSourceTypes.delete("javascript");
												chunkGraph.setChunkModuleSourceTypes(
													chunk,
													m,
													newSourceTypes
												);
											}
										}
									}
								}
								compilation.modules.delete(rootModule);
								ChunkGraph.clearChunkGraphForModule(rootModule);
								ModuleGraph.clearModuleGraphForModule(rootModule);

								// remove module from chunk
								chunkGraph.replaceModule(rootModule, newModule);
								// replace module references with the concatenated module
								moduleGraph.moveModuleConnections(rootModule, newModule, c => {
									const otherModule =
										c.module === rootModule ? c.originModule : c.module;
									const innerConnection =
										c.dependency instanceof HarmonyImportDependency &&
										modules.has(/** @type {Module} */ (otherModule));
									return !innerConnection;
								});
								// add concatenated module to the compilation
								compilation.modules.add(newModule);

								callback();
							};

							build();
						},
						err => {
							logger.timeEnd("create concatenated modules");
							process.nextTick(callback.bind(null, err));
						}
					);
				}
			);
		});
	}

	/**
	 * @param {Compilation} compilation the compilation
	 * @param {Module} module the module to be added
	 * @param {RuntimeSpec} runtime the runtime scope
	 * @returns {Set<Module>} the imported modules
	 */
	_getImports(compilation, module, runtime) {
		const moduleGraph = compilation.moduleGraph;
		const set = new Set();
		for (const dep of module.dependencies) {
			// Get reference info only for harmony Dependencies
			if (!(dep instanceof HarmonyImportDependency)) continue;

			const connection = moduleGraph.getConnection(dep);
			// Reference is valid and has a module
			if (
				!connection ||
				!connection.module ||
				!connection.isTargetActive(runtime)
			) {
				continue;
			}

			const importedNames = compilation.getDependencyReferencedExports(
				dep,
				undefined
			);

			if (
				importedNames.every(i =>
					Array.isArray(i) ? i.length > 0 : i.name.length > 0
				) ||
				Array.isArray(moduleGraph.getProvidedExports(module))
			) {
				set.add(connection.module);
			}
		}
		return set;
	}

	/**
	 * @param {Compilation} compilation webpack compilation
	 * @param {ConcatConfiguration} config concat configuration (will be modified when added)
	 * @param {Module} module the module to be added
	 * @param {RuntimeSpec} runtime the runtime scope of the generated code
	 * @param {RuntimeSpec} activeRuntime the runtime scope of the root module
	 * @param {Set<Module>} possibleModules modules that are candidates
	 * @param {Set<Module>} candidates list of potential candidates (will be added to)
	 * @param {Map<Module, Module | function(RequestShortener): string>} failureCache cache for problematic modules to be more performant
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {boolean} avoidMutateOnFailure avoid mutating the config when adding fails
	 * @param {Statistics} statistics gathering metrics
	 * @returns {null | Module | function(RequestShortener): string} the problematic module
	 */
	_tryToAdd(
		compilation,
		config,
		module,
		runtime,
		activeRuntime,
		possibleModules,
		candidates,
		failureCache,
		chunkGraph,
		avoidMutateOnFailure,
		statistics
	) {
		const cacheEntry = failureCache.get(module);
		if (cacheEntry) {
			statistics.cached++;
			return cacheEntry;
		}

		// Already added?
		if (config.has(module)) {
			statistics.alreadyInConfig++;
			return null;
		}

		// Not possible to add?
		if (!possibleModules.has(module)) {
			statistics.invalidModule++;
			failureCache.set(module, module); // cache failures for performance
			return module;
		}

		// Module must be in the correct chunks
		const missingChunks = Array.from(
			chunkGraph.getModuleChunksIterable(config.rootModule)
		).filter(chunk => !chunkGraph.isModuleInChunk(module, chunk));
		if (missingChunks.length > 0) {
			/**
			 * @param {RequestShortener} requestShortener request shortener
			 * @returns {string} problem description
			 */
			const problem = requestShortener => {
				const missingChunksList = Array.from(
					new Set(missingChunks.map(chunk => chunk.name || "unnamed chunk(s)"))
				).sort();
				const chunks = Array.from(
					new Set(
						Array.from(chunkGraph.getModuleChunksIterable(module)).map(
							chunk => chunk.name || "unnamed chunk(s)"
						)
					)
				).sort();
				return `Module ${module.readableIdentifier(
					requestShortener
				)} is not in the same chunk(s) (expected in chunk(s) ${missingChunksList.join(
					", "
				)}, module is in chunk(s) ${chunks.join(", ")})`;
			};
			statistics.incorrectChunks++;
			failureCache.set(module, problem); // cache failures for performance
			return problem;
		}

		const moduleGraph = compilation.moduleGraph;

		const incomingConnections =
			moduleGraph.getIncomingConnectionsByOriginModule(module);

		const incomingConnectionsFromNonModules =
			incomingConnections.get(null) || incomingConnections.get(undefined);
		if (incomingConnectionsFromNonModules) {
			const activeNonModulesConnections =
				incomingConnectionsFromNonModules.filter(connection =>
					// We are not interested in inactive connections
					// or connections without dependency
					connection.isActive(runtime)
				);
			if (activeNonModulesConnections.length > 0) {
				/**
				 * @param {RequestShortener} requestShortener request shortener
				 * @returns {string} problem description
				 */
				const problem = requestShortener => {
					const importingExplanations = new Set(
						activeNonModulesConnections.map(c => c.explanation).filter(Boolean)
					);
					const explanations = Array.from(importingExplanations).sort();
					return `Module ${module.readableIdentifier(
						requestShortener
					)} is referenced ${
						explanations.length > 0
							? `by: ${explanations.join(", ")}`
							: "in an unsupported way"
					}`;
				};
				statistics.incorrectDependency++;
				failureCache.set(module, problem); // cache failures for performance
				return problem;
			}
		}

		/** @type {Map<Module, readonly ModuleGraph.ModuleGraphConnection[]>} */
		const incomingConnectionsFromModules = new Map();
		for (const [originModule, connections] of incomingConnections) {
			if (originModule) {
				// Ignore connection from orphan modules
				if (chunkGraph.getNumberOfModuleChunks(originModule) === 0) continue;

				// We don't care for connections from other runtimes
				let originRuntime;
				for (const r of chunkGraph.getModuleRuntimes(originModule)) {
					originRuntime = mergeRuntimeOwned(originRuntime, r);
				}

				if (!intersectRuntime(runtime, originRuntime)) continue;

				// We are not interested in inactive connections
				const activeConnections = connections.filter(connection =>
					connection.isActive(runtime)
				);
				if (activeConnections.length > 0)
					incomingConnectionsFromModules.set(originModule, activeConnections);
			}
		}

		const incomingModules = Array.from(incomingConnectionsFromModules.keys());

		// Module must be in the same chunks like the referencing module
		const otherChunkModules = incomingModules.filter(originModule => {
			for (const chunk of chunkGraph.getModuleChunksIterable(
				config.rootModule
			)) {
				if (!chunkGraph.isModuleInChunk(originModule, chunk)) {
					return true;
				}
			}
			return false;
		});
		if (otherChunkModules.length > 0) {
			/**
			 * @param {RequestShortener} requestShortener request shortener
			 * @returns {string} problem description
			 */
			const problem = requestShortener => {
				const names = otherChunkModules
					.map(m => m.readableIdentifier(requestShortener))
					.sort();
				return `Module ${module.readableIdentifier(
					requestShortener
				)} is referenced from different chunks by these modules: ${names.join(
					", "
				)}`;
			};
			statistics.incorrectChunksOfImporter++;
			failureCache.set(module, problem); // cache failures for performance
			return problem;
		}

		/** @type {Map<Module, readonly ModuleGraph.ModuleGraphConnection[]>} */
		const nonHarmonyConnections = new Map();
		for (const [originModule, connections] of incomingConnectionsFromModules) {
			const selected = connections.filter(
				connection =>
					!connection.dependency ||
					!(connection.dependency instanceof HarmonyImportDependency)
			);
			if (selected.length > 0)
				nonHarmonyConnections.set(originModule, connections);
		}
		if (nonHarmonyConnections.size > 0) {
			/**
			 * @param {RequestShortener} requestShortener request shortener
			 * @returns {string} problem description
			 */
			const problem = requestShortener => {
				const names = Array.from(nonHarmonyConnections)
					.map(
						([originModule, connections]) =>
							`${originModule.readableIdentifier(
								requestShortener
							)} (referenced with ${Array.from(
								new Set(
									connections
										.map(c => c.dependency && c.dependency.type)
										.filter(Boolean)
								)
							)
								.sort()
								.join(", ")})`
					)
					.sort();
				return `Module ${module.readableIdentifier(
					requestShortener
				)} is referenced from these modules with unsupported syntax: ${names.join(
					", "
				)}`;
			};
			statistics.incorrectModuleDependency++;
			failureCache.set(module, problem); // cache failures for performance
			return problem;
		}

		if (runtime !== undefined && typeof runtime !== "string") {
			// Module must be consistently referenced in the same runtimes
			/** @type {{ originModule: Module, runtimeCondition: RuntimeSpec }[]} */
			const otherRuntimeConnections = [];
			outer: for (const [
				originModule,
				connections
			] of incomingConnectionsFromModules) {
				/** @type {false | RuntimeSpec} */
				let currentRuntimeCondition = false;
				for (const connection of connections) {
					const runtimeCondition = filterRuntime(runtime, runtime =>
						connection.isTargetActive(runtime)
					);
					if (runtimeCondition === false) continue;
					if (runtimeCondition === true) continue outer;
					currentRuntimeCondition =
						currentRuntimeCondition !== false
							? mergeRuntime(currentRuntimeCondition, runtimeCondition)
							: runtimeCondition;
				}
				if (currentRuntimeCondition !== false) {
					otherRuntimeConnections.push({
						originModule,
						runtimeCondition: currentRuntimeCondition
					});
				}
			}
			if (otherRuntimeConnections.length > 0) {
				/**
				 * @param {RequestShortener} requestShortener request shortener
				 * @returns {string} problem description
				 */
				const problem = requestShortener =>
					`Module ${module.readableIdentifier(
						requestShortener
					)} is runtime-dependent referenced by these modules: ${Array.from(
						otherRuntimeConnections,
						({ originModule, runtimeCondition }) =>
							`${originModule.readableIdentifier(
								requestShortener
							)} (expected runtime ${runtimeToString(
								runtime
							)}, module is only referenced in ${runtimeToString(
								/** @type {RuntimeSpec} */ (runtimeCondition)
							)})`
					).join(", ")}`;
				statistics.incorrectRuntimeCondition++;
				failureCache.set(module, problem); // cache failures for performance
				return problem;
			}
		}

		let backup;
		if (avoidMutateOnFailure) {
			backup = config.snapshot();
		}

		// Add the module
		config.add(module);

		incomingModules.sort(compareModulesByIdentifier);

		// Every module which depends on the added module must be in the configuration too.
		for (const originModule of incomingModules) {
			const problem = this._tryToAdd(
				compilation,
				config,
				originModule,
				runtime,
				activeRuntime,
				possibleModules,
				candidates,
				failureCache,
				chunkGraph,
				false,
				statistics
			);
			if (problem) {
				if (backup !== undefined) config.rollback(backup);
				statistics.importerFailed++;
				failureCache.set(module, problem); // cache failures for performance
				return problem;
			}
		}

		// Add imports to possible candidates list
		for (const imp of this._getImports(compilation, module, runtime)) {
			candidates.add(imp);
		}
		statistics.added++;
		return null;
	}
}

class ConcatConfiguration {
	/**
	 * @param {Module} rootModule the root module
	 * @param {RuntimeSpec} runtime the runtime
	 */
	constructor(rootModule, runtime) {
		this.rootModule = rootModule;
		this.runtime = runtime;
		/** @type {Set<Module>} */
		this.modules = new Set();
		this.modules.add(rootModule);
		/** @type {Map<Module, Module | function(RequestShortener): string>} */
		this.warnings = new Map();
	}

	/**
	 * @param {Module} module the module
	 */
	add(module) {
		this.modules.add(module);
	}

	/**
	 * @param {Module} module the module
	 * @returns {boolean} true, when the module is in the module set
	 */
	has(module) {
		return this.modules.has(module);
	}

	isEmpty() {
		return this.modules.size === 1;
	}

	/**
	 * @param {Module} module the module
	 * @param {Module | function(RequestShortener): string} problem the problem
	 */
	addWarning(module, problem) {
		this.warnings.set(module, problem);
	}

	/**
	 * @returns {Map<Module, Module | function(RequestShortener): string>} warnings
	 */
	getWarningsSorted() {
		return new Map(
			Array.from(this.warnings).sort((a, b) => {
				const ai = a[0].identifier();
				const bi = b[0].identifier();
				if (ai < bi) return -1;
				if (ai > bi) return 1;
				return 0;
			})
		);
	}

	/**
	 * @returns {Set<Module>} modules as set
	 */
	getModules() {
		return this.modules;
	}

	snapshot() {
		return this.modules.size;
	}

	/**
	 * @param {number} snapshot snapshot
	 */
	rollback(snapshot) {
		const modules = this.modules;
		for (const m of modules) {
			if (snapshot === 0) {
				modules.delete(m);
			} else {
				snapshot--;
			}
		}
	}
}

module.exports = ModuleConcatenationPlugin;
