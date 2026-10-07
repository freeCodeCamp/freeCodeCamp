/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const asyncLib = require("neo-async");
const Queue = require("./util/Queue");

/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./DependenciesBlock")} DependenciesBlock */
/** @typedef {import("./Dependency")} Dependency */
/** @typedef {import("./Dependency").ExportSpec} ExportSpec */
/** @typedef {import("./Dependency").ExportsSpec} ExportsSpec */
/** @typedef {import("./ExportsInfo")} ExportsInfo */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./Module").BuildInfo} BuildInfo */

const PLUGIN_NAME = "FlagDependencyExportsPlugin";
const PLUGIN_LOGGER_NAME = `webpack.${PLUGIN_NAME}`;

class FlagDependencyExportsPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(PLUGIN_NAME, compilation => {
			const moduleGraph = compilation.moduleGraph;
			const cache = compilation.getCache(PLUGIN_NAME);
			compilation.hooks.finishModules.tapAsync(
				PLUGIN_NAME,
				(modules, callback) => {
					const logger = compilation.getLogger(PLUGIN_LOGGER_NAME);
					let statRestoredFromMemCache = 0;
					let statRestoredFromCache = 0;
					let statNoExports = 0;
					let statFlaggedUncached = 0;
					let statNotCached = 0;
					let statQueueItemsProcessed = 0;

					const { moduleMemCaches } = compilation;

					/** @type {Queue<Module>} */
					const queue = new Queue();

					// Step 1: Try to restore cached provided export info from cache
					logger.time("restore cached provided exports");
					asyncLib.each(
						modules,
						(module, callback) => {
							const exportsInfo = moduleGraph.getExportsInfo(module);
							// If the module doesn't have an exportsType, it's a module
							// without declared exports.
							if (
								(!module.buildMeta || !module.buildMeta.exportsType) &&
								exportsInfo.otherExportsInfo.provided !== null
							) {
								// It's a module without declared exports
								statNoExports++;
								exportsInfo.setHasProvideInfo();
								exportsInfo.setUnknownExportsProvided();
								return callback();
							}
							// If the module has no hash, it's uncacheable
							if (
								typeof (/** @type {BuildInfo} */ (module.buildInfo).hash) !==
								"string"
							) {
								statFlaggedUncached++;
								// Enqueue uncacheable module for determining the exports
								queue.enqueue(module);
								exportsInfo.setHasProvideInfo();
								return callback();
							}
							const memCache = moduleMemCaches && moduleMemCaches.get(module);
							const memCacheValue = memCache && memCache.get(this);
							if (memCacheValue !== undefined) {
								statRestoredFromMemCache++;
								exportsInfo.restoreProvided(memCacheValue);
								return callback();
							}
							cache.get(
								module.identifier(),
								/** @type {BuildInfo} */
								(module.buildInfo).hash,
								(err, result) => {
									if (err) return callback(err);

									if (result !== undefined) {
										statRestoredFromCache++;
										exportsInfo.restoreProvided(result);
									} else {
										statNotCached++;
										// Without cached info enqueue module for determining the exports
										queue.enqueue(module);
										exportsInfo.setHasProvideInfo();
									}
									callback();
								}
							);
						},
						err => {
							logger.timeEnd("restore cached provided exports");
							if (err) return callback(err);

							/** @type {Set<Module>} */
							const modulesToStore = new Set();

							/** @type {Map<Module, Set<Module>>} */
							const dependencies = new Map();

							/** @type {Module} */
							let module;

							/** @type {ExportsInfo} */
							let exportsInfo;

							/** @type {Map<Dependency, ExportsSpec>} */
							const exportsSpecsFromDependencies = new Map();

							let cacheable = true;
							let changed = false;

							/**
							 * @param {DependenciesBlock} depBlock the dependencies block
							 * @returns {void}
							 */
							const processDependenciesBlock = depBlock => {
								for (const dep of depBlock.dependencies) {
									processDependency(dep);
								}
								for (const block of depBlock.blocks) {
									processDependenciesBlock(block);
								}
							};

							/**
							 * @param {Dependency} dep the dependency
							 * @returns {void}
							 */
							const processDependency = dep => {
								const exportDesc = dep.getExports(moduleGraph);
								if (!exportDesc) return;
								exportsSpecsFromDependencies.set(dep, exportDesc);
							};

							/**
							 * @param {Dependency} dep dependency
							 * @param {ExportsSpec} exportDesc info
							 * @returns {void}
							 */
							const processExportsSpec = (dep, exportDesc) => {
								const exports = exportDesc.exports;
								const globalCanMangle = exportDesc.canMangle;
								const globalFrom = exportDesc.from;
								const globalPriority = exportDesc.priority;
								const globalTerminalBinding =
									exportDesc.terminalBinding || false;
								const exportDeps = exportDesc.dependencies;
								if (exportDesc.hideExports) {
									for (const name of exportDesc.hideExports) {
										const exportInfo = exportsInfo.getExportInfo(name);
										exportInfo.unsetTarget(dep);
									}
								}
								if (exports === true) {
									// unknown exports
									if (
										exportsInfo.setUnknownExportsProvided(
											globalCanMangle,
											exportDesc.excludeExports,
											globalFrom && dep,
											globalFrom,
											globalPriority
										)
									) {
										changed = true;
									}
								} else if (Array.isArray(exports)) {
									/**
									 * merge in new exports
									 * @param {ExportsInfo} exportsInfo own exports info
									 * @param {(ExportSpec | string)[]} exports list of exports
									 */
									const mergeExports = (exportsInfo, exports) => {
										for (const exportNameOrSpec of exports) {
											let name;
											let canMangle = globalCanMangle;
											let terminalBinding = globalTerminalBinding;
											let exports;
											let from = globalFrom;
											let fromExport;
											let priority = globalPriority;
											let hidden = false;
											if (typeof exportNameOrSpec === "string") {
												name = exportNameOrSpec;
											} else {
												name = exportNameOrSpec.name;
												if (exportNameOrSpec.canMangle !== undefined)
													canMangle = exportNameOrSpec.canMangle;
												if (exportNameOrSpec.export !== undefined)
													fromExport = exportNameOrSpec.export;
												if (exportNameOrSpec.exports !== undefined)
													exports = exportNameOrSpec.exports;
												if (exportNameOrSpec.from !== undefined)
													from = exportNameOrSpec.from;
												if (exportNameOrSpec.priority !== undefined)
													priority = exportNameOrSpec.priority;
												if (exportNameOrSpec.terminalBinding !== undefined)
													terminalBinding = exportNameOrSpec.terminalBinding;
												if (exportNameOrSpec.hidden !== undefined)
													hidden = exportNameOrSpec.hidden;
											}
											const exportInfo = exportsInfo.getExportInfo(name);

											if (
												exportInfo.provided === false ||
												exportInfo.provided === null
											) {
												exportInfo.provided = true;
												changed = true;
											}

											if (
												exportInfo.canMangleProvide !== false &&
												canMangle === false
											) {
												exportInfo.canMangleProvide = false;
												changed = true;
											}

											if (terminalBinding && !exportInfo.terminalBinding) {
												exportInfo.terminalBinding = true;
												changed = true;
											}

											if (exports) {
												const nestedExportsInfo =
													exportInfo.createNestedExportsInfo();
												mergeExports(
													/** @type {ExportsInfo} */ (nestedExportsInfo),
													exports
												);
											}

											if (
												from &&
												(hidden
													? exportInfo.unsetTarget(dep)
													: exportInfo.setTarget(
															dep,
															from,
															fromExport === undefined ? [name] : fromExport,
															priority
														))
											) {
												changed = true;
											}

											// Recalculate target exportsInfo
											const target = exportInfo.getTarget(moduleGraph);
											let targetExportsInfo;
											if (target) {
												const targetModuleExportsInfo =
													moduleGraph.getExportsInfo(target.module);
												targetExportsInfo =
													targetModuleExportsInfo.getNestedExportsInfo(
														target.export
													);
												// add dependency for this module
												const set = dependencies.get(target.module);
												if (set === undefined) {
													dependencies.set(target.module, new Set([module]));
												} else {
													set.add(module);
												}
											}

											if (exportInfo.exportsInfoOwned) {
												if (
													/** @type {ExportsInfo} */
													(exportInfo.exportsInfo).setRedirectNamedTo(
														targetExportsInfo
													)
												) {
													changed = true;
												}
											} else if (exportInfo.exportsInfo !== targetExportsInfo) {
												exportInfo.exportsInfo = targetExportsInfo;
												changed = true;
											}
										}
									};
									mergeExports(exportsInfo, exports);
								}
								// store dependencies
								if (exportDeps) {
									cacheable = false;
									for (const exportDependency of exportDeps) {
										// add dependency for this module
										const set = dependencies.get(exportDependency);
										if (set === undefined) {
											dependencies.set(exportDependency, new Set([module]));
										} else {
											set.add(module);
										}
									}
								}
							};

							const notifyDependencies = () => {
								const deps = dependencies.get(module);
								if (deps !== undefined) {
									for (const dep of deps) {
										queue.enqueue(dep);
									}
								}
							};

							logger.time("figure out provided exports");
							while (queue.length > 0) {
								module = /** @type {Module} */ (queue.dequeue());

								statQueueItemsProcessed++;

								exportsInfo = moduleGraph.getExportsInfo(module);

								cacheable = true;
								changed = false;

								exportsSpecsFromDependencies.clear();
								moduleGraph.freeze();
								processDependenciesBlock(module);
								moduleGraph.unfreeze();
								for (const [dep, exportsSpec] of exportsSpecsFromDependencies) {
									processExportsSpec(dep, exportsSpec);
								}

								if (cacheable) {
									modulesToStore.add(module);
								}

								if (changed) {
									notifyDependencies();
								}
							}
							logger.timeEnd("figure out provided exports");

							logger.log(
								`${Math.round(
									(100 * (statFlaggedUncached + statNotCached)) /
										(statRestoredFromMemCache +
											statRestoredFromCache +
											statNotCached +
											statFlaggedUncached +
											statNoExports)
								)}% of exports of modules have been determined (${statNoExports} no declared exports, ${statNotCached} not cached, ${statFlaggedUncached} flagged uncacheable, ${statRestoredFromCache} from cache, ${statRestoredFromMemCache} from mem cache, ${
									statQueueItemsProcessed - statNotCached - statFlaggedUncached
								} additional calculations due to dependencies)`
							);

							logger.time("store provided exports into cache");
							asyncLib.each(
								modulesToStore,
								(module, callback) => {
									if (
										typeof (
											/** @type {BuildInfo} */ (module.buildInfo).hash
										) !== "string"
									) {
										// not cacheable
										return callback();
									}
									const cachedData = moduleGraph
										.getExportsInfo(module)
										.getRestoreProvidedData();
									const memCache =
										moduleMemCaches && moduleMemCaches.get(module);
									if (memCache) {
										memCache.set(this, cachedData);
									}
									cache.store(
										module.identifier(),
										/** @type {BuildInfo} */
										(module.buildInfo).hash,
										cachedData,
										callback
									);
								},
								err => {
									logger.timeEnd("store provided exports into cache");
									callback(err);
								}
							);
						}
					);
				}
			);

			/** @type {WeakMap<Module, any>} */
			const providedExportsCache = new WeakMap();
			compilation.hooks.rebuildModule.tap(PLUGIN_NAME, module => {
				providedExportsCache.set(
					module,
					moduleGraph.getExportsInfo(module).getRestoreProvidedData()
				);
			});
			compilation.hooks.finishRebuildingModule.tap(PLUGIN_NAME, module => {
				moduleGraph
					.getExportsInfo(module)
					.restoreProvided(providedExportsCache.get(module));
			});
		});
	}
}

module.exports = FlagDependencyExportsPlugin;
