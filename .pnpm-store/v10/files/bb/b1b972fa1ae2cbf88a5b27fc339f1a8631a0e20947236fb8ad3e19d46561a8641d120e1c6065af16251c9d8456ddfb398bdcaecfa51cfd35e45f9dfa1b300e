/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Zackary Jackson @ScriptedAlchemy
*/

"use strict";

const AsyncDependenciesBlock = require("../AsyncDependenciesBlock");
const ExternalModule = require("../ExternalModule");
const { STAGE_ADVANCED } = require("../OptimizationStages");
const memoize = require("../util/memoize");
const { forEachRuntime } = require("../util/runtime");

/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Module")} Module */

const getModuleFederationPlugin = memoize(() =>
	require("./ModuleFederationPlugin")
);

const PLUGIN_NAME = "HoistContainerReferences";

/**
 * This class is used to hoist container references in the code.
 */
class HoistContainerReferences {
	/**
	 * Apply the plugin to the compiler.
	 * @param {Compiler} compiler The webpack compiler instance.
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			const hooks =
				getModuleFederationPlugin().getCompilationHooks(compilation);
			/** @type {Set<Dependency>} */
			const depsToTrace = new Set();
			/** @type {Set<Dependency>} */
			const entryExternalsToHoist = new Set();
			hooks.addContainerEntryDependency.tap(PLUGIN_NAME, (dep) => {
				depsToTrace.add(dep);
			});
			hooks.addFederationRuntimeDependency.tap(PLUGIN_NAME, (dep) => {
				depsToTrace.add(dep);
			});

			compilation.hooks.addEntry.tap(PLUGIN_NAME, (entryDep) => {
				if (entryDep.type === "entry") {
					entryExternalsToHoist.add(entryDep);
				}
			});

			// Hook into the optimizeChunks phase
			compilation.hooks.optimizeChunks.tap(
				{
					name: PLUGIN_NAME,
					// advanced stage is where SplitChunksPlugin runs.
					stage: STAGE_ADVANCED + 1
				},
				(_chunks) => {
					this.hoistModulesInChunks(
						compilation,
						depsToTrace,
						entryExternalsToHoist
					);
				}
			);
		});
	}

	/**
	 * Hoist modules in chunks.
	 * @param {Compilation} compilation The webpack compilation instance.
	 * @param {Set<Dependency>} depsToTrace Set of container entry dependencies.
	 * @param {Set<Dependency>} entryExternalsToHoist Set of container entry dependencies to hoist.
	 */
	hoistModulesInChunks(compilation, depsToTrace, entryExternalsToHoist) {
		const { chunkGraph, moduleGraph } = compilation;

		// loop over entry points
		for (const dep of entryExternalsToHoist) {
			const entryModule = moduleGraph.getModule(dep);
			if (!entryModule) continue;
			// get all the external module types and hoist them to the runtime chunk, this will get RemoteModule externals
			const allReferencedModules = getAllReferencedModules(
				compilation,
				entryModule,
				"external",
				false
			);

			const containerRuntimes = chunkGraph.getModuleRuntimes(entryModule);
			/** @type {Set<string>} */
			const runtimes = new Set();

			for (const runtimeSpec of containerRuntimes) {
				forEachRuntime(runtimeSpec, (runtimeKey) => {
					if (runtimeKey) {
						runtimes.add(runtimeKey);
					}
				});
			}

			for (const runtime of runtimes) {
				const runtimeChunk = compilation.namedChunks.get(runtime);
				if (!runtimeChunk) continue;

				for (const module of allReferencedModules) {
					if (!chunkGraph.isModuleInChunk(module, runtimeChunk)) {
						chunkGraph.connectChunkAndModule(runtimeChunk, module);
					}
				}
			}
			this.cleanUpChunks(compilation, allReferencedModules);
		}

		// handle container entry specifically
		for (const dep of depsToTrace) {
			const containerEntryModule = moduleGraph.getModule(dep);
			if (!containerEntryModule) continue;
			const allReferencedModules = getAllReferencedModules(
				compilation,
				containerEntryModule,
				"initial",
				false
			);

			const allRemoteReferences = getAllReferencedModules(
				compilation,
				containerEntryModule,
				"external",
				false
			);

			for (const remote of allRemoteReferences) {
				allReferencedModules.add(remote);
			}

			const containerRuntimes =
				chunkGraph.getModuleRuntimes(containerEntryModule);
			/** @type {Set<string>} */
			const runtimes = new Set();

			for (const runtimeSpec of containerRuntimes) {
				forEachRuntime(runtimeSpec, (runtimeKey) => {
					if (runtimeKey) {
						runtimes.add(runtimeKey);
					}
				});
			}

			for (const runtime of runtimes) {
				const runtimeChunk = compilation.namedChunks.get(runtime);
				if (!runtimeChunk) continue;

				for (const module of allReferencedModules) {
					if (!chunkGraph.isModuleInChunk(module, runtimeChunk)) {
						chunkGraph.connectChunkAndModule(runtimeChunk, module);
					}
				}
			}
			this.cleanUpChunks(compilation, allReferencedModules);
		}
	}

	/**
	 * Clean up chunks by disconnecting unused modules.
	 * @param {Compilation} compilation The webpack compilation instance.
	 * @param {Set<Module>} modules Set of modules to clean up.
	 */
	cleanUpChunks(compilation, modules) {
		const { chunkGraph } = compilation;
		for (const module of modules) {
			for (const chunk of chunkGraph.getModuleChunks(module)) {
				if (!chunk.hasRuntime()) {
					chunkGraph.disconnectChunkAndModule(chunk, module);
					if (
						chunkGraph.getNumberOfChunkModules(chunk) === 0 &&
						chunkGraph.getNumberOfEntryModules(chunk) === 0
					) {
						chunkGraph.disconnectChunk(chunk);
						compilation.chunks.delete(chunk);
						if (chunk.name) {
							compilation.namedChunks.delete(chunk.name);
						}
					}
				}
			}
		}
		modules.clear();
	}
}

/**
 * Helper method to collect all referenced modules recursively.
 * @param {Compilation} compilation The webpack compilation instance.
 * @param {Module} module The module to start collecting from.
 * @param {string} type The type of modules to collect ("initial", "external", or "all").
 * @param {boolean} includeInitial Should include the referenced module passed
 * @returns {Set<Module>} Set of collected modules.
 */
function getAllReferencedModules(compilation, module, type, includeInitial) {
	const collectedModules = new Set(includeInitial ? [module] : []);
	/** @type {WeakSet<Module>} */
	const visitedModules = new WeakSet([module]);
	/** @type {Module[]} */
	const stack = [module];

	while (stack.length > 0) {
		const currentModule = stack.pop();
		if (!currentModule) continue;

		const outgoingConnections =
			compilation.moduleGraph.getOutgoingConnections(currentModule);
		if (outgoingConnections) {
			for (const connection of outgoingConnections) {
				const connectedModule = connection.module;

				// Skip if module has already been visited
				if (!connectedModule || visitedModules.has(connectedModule)) {
					continue;
				}

				// Handle 'initial' type (skipping async blocks)
				if (type === "initial") {
					const parentBlock = compilation.moduleGraph.getParentBlock(
						/** @type {Dependency} */
						(connection.dependency)
					);
					if (parentBlock instanceof AsyncDependenciesBlock) {
						continue;
					}
				}

				// Handle 'external' type (collecting only external modules)
				if (type === "external") {
					if (connection.module instanceof ExternalModule) {
						collectedModules.add(connectedModule);
					}
				} else {
					// Handle 'all' or unspecified types
					collectedModules.add(connectedModule);
				}

				// Add connected module to the stack and mark it as visited
				visitedModules.add(connectedModule);
				stack.push(connectedModule);
			}
		}
	}

	return collectedModules;
}

module.exports = HoistContainerReferences;
