/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Dependency = require("./Dependency");
const { UsageState } = require("./ExportsInfo");
const ModuleGraphConnection = require("./ModuleGraphConnection");
const { STAGE_DEFAULT } = require("./OptimizationStages");
const ArrayQueue = require("./util/ArrayQueue");
const TupleQueue = require("./util/TupleQueue");
const { getEntryRuntime, mergeRuntimeOwned } = require("./util/runtime");

/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./ChunkGroup")} ChunkGroup */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./DependenciesBlock")} DependenciesBlock */
/** @typedef {import("./Dependency").ReferencedExport} ReferencedExport */
/** @typedef {import("./ExportsInfo")} ExportsInfo */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */

const { NO_EXPORTS_REFERENCED, EXPORTS_OBJECT_REFERENCED } = Dependency;

const PLUGIN_NAME = "FlagDependencyUsagePlugin";
const PLUGIN_LOGGER_NAME = `webpack.${PLUGIN_NAME}`;

class FlagDependencyUsagePlugin {
	/**
	 * @param {boolean} global do a global analysis instead of per runtime
	 */
	constructor(global) {
		this.global = global;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(PLUGIN_NAME, compilation => {
			const moduleGraph = compilation.moduleGraph;
			compilation.hooks.optimizeDependencies.tap(
				{ name: PLUGIN_NAME, stage: STAGE_DEFAULT },
				modules => {
					if (compilation.moduleMemCaches) {
						throw new Error(
							"optimization.usedExports can't be used with cacheUnaffected as export usage is a global effect"
						);
					}

					const logger = compilation.getLogger(PLUGIN_LOGGER_NAME);
					/** @type {Map<ExportsInfo, Module>} */
					const exportInfoToModuleMap = new Map();

					/** @type {TupleQueue<[Module, RuntimeSpec]>} */
					const queue = new TupleQueue();

					/**
					 * @param {Module} module module to process
					 * @param {(string[] | ReferencedExport)[]} usedExports list of used exports
					 * @param {RuntimeSpec} runtime part of which runtime
					 * @param {boolean} forceSideEffects always apply side effects
					 * @returns {void}
					 */
					const processReferencedModule = (
						module,
						usedExports,
						runtime,
						forceSideEffects
					) => {
						const exportsInfo = moduleGraph.getExportsInfo(module);
						if (usedExports.length > 0) {
							if (!module.buildMeta || !module.buildMeta.exportsType) {
								if (exportsInfo.setUsedWithoutInfo(runtime)) {
									queue.enqueue(module, runtime);
								}
								return;
							}
							for (const usedExportInfo of usedExports) {
								let usedExport;
								let canMangle = true;
								if (Array.isArray(usedExportInfo)) {
									usedExport = usedExportInfo;
								} else {
									usedExport = usedExportInfo.name;
									canMangle = usedExportInfo.canMangle !== false;
								}
								if (usedExport.length === 0) {
									if (exportsInfo.setUsedInUnknownWay(runtime)) {
										queue.enqueue(module, runtime);
									}
								} else {
									let currentExportsInfo = exportsInfo;
									for (let i = 0; i < usedExport.length; i++) {
										const exportInfo = currentExportsInfo.getExportInfo(
											usedExport[i]
										);
										if (canMangle === false) {
											exportInfo.canMangleUse = false;
										}
										const lastOne = i === usedExport.length - 1;
										if (!lastOne) {
											const nestedInfo = exportInfo.getNestedExportsInfo();
											if (nestedInfo) {
												if (
													exportInfo.setUsedConditionally(
														used => used === UsageState.Unused,
														UsageState.OnlyPropertiesUsed,
														runtime
													)
												) {
													const currentModule =
														currentExportsInfo === exportsInfo
															? module
															: exportInfoToModuleMap.get(currentExportsInfo);
													if (currentModule) {
														queue.enqueue(currentModule, runtime);
													}
												}
												currentExportsInfo = nestedInfo;
												continue;
											}
										}
										if (
											exportInfo.setUsedConditionally(
												v => v !== UsageState.Used,
												UsageState.Used,
												runtime
											)
										) {
											const currentModule =
												currentExportsInfo === exportsInfo
													? module
													: exportInfoToModuleMap.get(currentExportsInfo);
											if (currentModule) {
												queue.enqueue(currentModule, runtime);
											}
										}
										break;
									}
								}
							}
						} else {
							// for a module without side effects we stop tracking usage here when no export is used
							// This module won't be evaluated in this case
							// TODO webpack 6 remove this check
							if (
								!forceSideEffects &&
								module.factoryMeta !== undefined &&
								module.factoryMeta.sideEffectFree
							) {
								return;
							}
							if (exportsInfo.setUsedForSideEffectsOnly(runtime)) {
								queue.enqueue(module, runtime);
							}
						}
					};

					/**
					 * @param {DependenciesBlock} module the module
					 * @param {RuntimeSpec} runtime part of which runtime
					 * @param {boolean} forceSideEffects always apply side effects
					 * @returns {void}
					 */
					const processModule = (module, runtime, forceSideEffects) => {
						/** @type {Map<Module, (string[] | ReferencedExport)[] | Map<string, string[] | ReferencedExport>>} */
						const map = new Map();

						/** @type {ArrayQueue<DependenciesBlock>} */
						const queue = new ArrayQueue();
						queue.enqueue(module);
						for (;;) {
							const block = queue.dequeue();
							if (block === undefined) break;
							for (const b of block.blocks) {
								if (
									!this.global &&
									b.groupOptions &&
									b.groupOptions.entryOptions
								) {
									processModule(
										b,
										b.groupOptions.entryOptions.runtime || undefined,
										true
									);
								} else {
									queue.enqueue(b);
								}
							}
							for (const dep of block.dependencies) {
								const connection = moduleGraph.getConnection(dep);
								if (!connection || !connection.module) {
									continue;
								}
								const activeState = connection.getActiveState(runtime);
								if (activeState === false) continue;
								const { module } = connection;
								if (activeState === ModuleGraphConnection.TRANSITIVE_ONLY) {
									processModule(module, runtime, false);
									continue;
								}
								const oldReferencedExports = map.get(module);
								if (oldReferencedExports === EXPORTS_OBJECT_REFERENCED) {
									continue;
								}
								const referencedExports =
									compilation.getDependencyReferencedExports(dep, runtime);
								if (
									oldReferencedExports === undefined ||
									oldReferencedExports === NO_EXPORTS_REFERENCED ||
									referencedExports === EXPORTS_OBJECT_REFERENCED
								) {
									map.set(module, referencedExports);
								} else if (
									oldReferencedExports !== undefined &&
									referencedExports === NO_EXPORTS_REFERENCED
								) {
									continue;
								} else {
									let exportsMap;
									if (Array.isArray(oldReferencedExports)) {
										exportsMap = new Map();
										for (const item of oldReferencedExports) {
											if (Array.isArray(item)) {
												exportsMap.set(item.join("\n"), item);
											} else {
												exportsMap.set(item.name.join("\n"), item);
											}
										}
										map.set(module, exportsMap);
									} else {
										exportsMap = oldReferencedExports;
									}
									for (const item of referencedExports) {
										if (Array.isArray(item)) {
											const key = item.join("\n");
											const oldItem = exportsMap.get(key);
											if (oldItem === undefined) {
												exportsMap.set(key, item);
											}
											// if oldItem is already an array we have to do nothing
											// if oldItem is an ReferencedExport object, we don't have to do anything
											// as canMangle defaults to true for arrays
										} else {
											const key = item.name.join("\n");
											const oldItem = exportsMap.get(key);
											if (oldItem === undefined || Array.isArray(oldItem)) {
												exportsMap.set(key, item);
											} else {
												exportsMap.set(key, {
													name: item.name,
													canMangle: item.canMangle && oldItem.canMangle
												});
											}
										}
									}
								}
							}
						}

						for (const [module, referencedExports] of map) {
							if (Array.isArray(referencedExports)) {
								processReferencedModule(
									module,
									referencedExports,
									runtime,
									forceSideEffects
								);
							} else {
								processReferencedModule(
									module,
									Array.from(referencedExports.values()),
									runtime,
									forceSideEffects
								);
							}
						}
					};

					logger.time("initialize exports usage");
					for (const module of modules) {
						const exportsInfo = moduleGraph.getExportsInfo(module);
						exportInfoToModuleMap.set(exportsInfo, module);
						exportsInfo.setHasUseInfo();
					}
					logger.timeEnd("initialize exports usage");

					logger.time("trace exports usage in graph");

					/**
					 * @param {Dependency} dep dependency
					 * @param {RuntimeSpec} runtime runtime
					 */
					const processEntryDependency = (dep, runtime) => {
						const module = moduleGraph.getModule(dep);
						if (module) {
							processReferencedModule(
								module,
								NO_EXPORTS_REFERENCED,
								runtime,
								true
							);
						}
					};
					/** @type {RuntimeSpec} */
					let globalRuntime;
					for (const [
						entryName,
						{ dependencies: deps, includeDependencies: includeDeps, options }
					] of compilation.entries) {
						const runtime = this.global
							? undefined
							: getEntryRuntime(compilation, entryName, options);
						for (const dep of deps) {
							processEntryDependency(dep, runtime);
						}
						for (const dep of includeDeps) {
							processEntryDependency(dep, runtime);
						}
						globalRuntime = mergeRuntimeOwned(globalRuntime, runtime);
					}
					for (const dep of compilation.globalEntry.dependencies) {
						processEntryDependency(dep, globalRuntime);
					}
					for (const dep of compilation.globalEntry.includeDependencies) {
						processEntryDependency(dep, globalRuntime);
					}

					while (queue.length) {
						const [module, runtime] = /** @type {[Module, RuntimeSpec]} */ (
							queue.dequeue()
						);
						processModule(module, runtime, false);
					}
					logger.timeEnd("trace exports usage in graph");
				}
			);
		});
	}
}

module.exports = FlagDependencyUsagePlugin;
