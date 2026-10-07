/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const ExportsInfo = require("./ExportsInfo");
const ModuleGraphConnection = require("./ModuleGraphConnection");
const HarmonyImportDependency = require("./dependencies/HarmonyImportDependency");
const { ImportPhaseUtils } = require("./dependencies/ImportPhase");
const SortableSet = require("./util/SortableSet");
const WeakTupleMap = require("./util/WeakTupleMap");
const { sortWithSourceOrder } = require("./util/comparators");

/** @typedef {import("./Compilation").ModuleMemCaches} ModuleMemCaches */
/** @typedef {import("./DependenciesBlock")} DependenciesBlock */
/** @typedef {import("./Dependency")} Dependency */
/** @typedef {import("./ExportsInfo").ExportInfo} ExportInfo */
/** @typedef {import("./ExportsInfo").ExportInfoName} ExportInfoName */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./ModuleProfile")} ModuleProfile */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */
/** @typedef {import("./dependencies/HarmonyImportSideEffectDependency")} HarmonyImportSideEffectDependency */
/** @typedef {import("./dependencies/HarmonyImportSpecifierDependency")} HarmonyImportSpecifierDependency */
/** @typedef {import("./util/comparators").DependencySourceOrder} DependencySourceOrder */

/**
 * Defines the optimization bailout function callback.
 * @callback OptimizationBailoutFunction
 * @param {RequestShortener} requestShortener
 * @returns {string}
 */

/** @type {Iterable<ModuleGraphConnection>} */
const EMPTY_SET = new Set();

/**
 * Gets connections by key.
 * @template {Module | null | undefined} T
 * @param {SortableSet<ModuleGraphConnection>} set input
 * @param {(connection: ModuleGraphConnection) => T} getKey function to extract key from connection
 * @returns {ReadonlyMap<T, ReadonlyArray<ModuleGraphConnection>>} mapped by key
 */
const getConnectionsByKey = (set, getKey) => {
	/** @type {Map<T, ModuleGraphConnection[]>} */
	const map = new Map();
	/** @type {T | 0} */
	let lastKey = 0;
	/** @type {ModuleGraphConnection[] | undefined} */
	let lastList;
	for (const connection of set) {
		const key = getKey(connection);
		if (lastKey === key) {
			/** @type {ModuleGraphConnection[]} */
			(lastList).push(connection);
		} else {
			lastKey = key;
			const list = map.get(key);
			if (list !== undefined) {
				lastList = list;
				list.push(connection);
			} else {
				const list = [connection];
				lastList = list;
				map.set(key, list);
			}
		}
	}
	return map;
};

/**
 * Gets connections by origin module.
 * @param {SortableSet<ModuleGraphConnection>} set input
 * @returns {ReadonlyMap<Module | undefined | null, ReadonlyArray<ModuleGraphConnection>>} mapped by origin module
 */
const getConnectionsByOriginModule = (set) =>
	getConnectionsByKey(set, (connection) => connection.originModule);

/**
 * Gets connections by module.
 * @param {SortableSet<ModuleGraphConnection>} set input
 * @returns {ReadonlyMap<Module | undefined, ReadonlyArray<ModuleGraphConnection>>} mapped by module
 */
const getConnectionsByModule = (set) =>
	getConnectionsByKey(set, (connection) => connection.module);

/** @typedef {SortableSet<ModuleGraphConnection>} IncomingConnections */
/** @typedef {SortableSet<ModuleGraphConnection>} OutgoingConnections */
/** @typedef {Module | null | undefined} Issuer */
/** @typedef {(string | OptimizationBailoutFunction)[]} OptimizationBailouts */

class ModuleGraphModule {
	constructor() {
		/** @type {IncomingConnections} */
		this.incomingConnections = new SortableSet();
		/** @type {OutgoingConnections | undefined} */
		this.outgoingConnections = undefined;
		/** @type {Issuer} */
		this.issuer = undefined;
		/** @type {OptimizationBailouts} */
		this.optimizationBailout = [];
		/** @type {ExportsInfo} */
		this.exports = new ExportsInfo();
		/** @type {number | null} */
		this.preOrderIndex = null;
		/** @type {number | null} */
		this.postOrderIndex = null;
		/** @type {number | null} */
		this.depth = null;
		/** @type {ModuleProfile | undefined} */
		this.profile = undefined;
		/** @type {boolean} */
		this.async = false;
		/** @type {ModuleGraphConnection[] | undefined} */
		this._unassignedConnections = undefined;
	}
}

/** @typedef {(moduleGraphConnection: ModuleGraphConnection) => boolean} FilterConnection */

/** @typedef {EXPECTED_OBJECT} MetaKey */

/** @typedef {import("./dependencies/CommonJsExportRequireDependency").idsSymbol} CommonJsExportRequireDependencyIDsSymbol */
/** @typedef {import("./dependencies/HarmonyImportSpecifierDependency").idsSymbol} HarmonyImportSpecifierDependencyIDsSymbol */
/** @typedef {import("./dependencies/HarmonyExportImportedSpecifierDependency").idsSymbol} HarmonyExportImportedSpecifierDependencyIDsSymbol */

/**
 * Defines the known meta type used by this module.
 * @typedef {object} KnownMeta
 * @property {Map<Module, string>=} importVarMap
 * @property {Map<Module, string>=} deferredImportVarMap
 */

/** @typedef {KnownMeta & Record<CommonJsExportRequireDependencyIDsSymbol | HarmonyImportSpecifierDependencyIDsSymbol | HarmonyExportImportedSpecifierDependencyIDsSymbol, string[]> & Record<string, EXPECTED_ANY>} Meta */

class ModuleGraph {
	constructor() {
		/**
		 * @type {WeakMap<Dependency, ModuleGraphConnection | null>}
		 * @private
		 */
		this._dependencyMap = new WeakMap();
		/**
		 * @type {Map<Module, ModuleGraphModule>}
		 * @private
		 */
		this._moduleMap = new Map();
		/**
		 * @type {WeakMap<MetaKey, Meta>}
		 * @private
		 */
		this._metaMap = new WeakMap();
		/**
		 * @type {WeakTupleMap<EXPECTED_ANY[], EXPECTED_ANY> | undefined}
		 * @private
		 */
		this._cache = undefined;
		/**
		 * @type {ModuleMemCaches | undefined}
		 * @private
		 */
		this._moduleMemCaches = undefined;

		/**
		 * @type {string | undefined}
		 * @private
		 */
		this._cacheStage = undefined;

		/**
		 * @type {WeakMap<Dependency, DependencySourceOrder>}
		 * @private
		 */
		this._dependencySourceOrderMap = new WeakMap();

		/**
		 * @type {Set<Module>}
		 * @private
		 */
		this._modulesNeedingSort = new Set();
	}

	/**
	 * Get module graph module.
	 * @param {Module} module the module
	 * @returns {ModuleGraphModule} the internal module
	 */
	_getModuleGraphModule(module) {
		let mgm = this._moduleMap.get(module);
		if (mgm === undefined) {
			mgm = new ModuleGraphModule();
			this._moduleMap.set(module, mgm);
		}
		return mgm;
	}

	/**
	 * Updates parents using the provided dependency.
	 * @param {Dependency} dependency the dependency
	 * @param {DependenciesBlock} block parent block
	 * @param {Module} module parent module
	 * @param {number=} indexInBlock position in block
	 * @returns {void}
	 */
	setParents(dependency, block, module, indexInBlock = -1) {
		dependency._parentDependenciesBlockIndex = indexInBlock;
		dependency._parentDependenciesBlock = block;
		dependency._parentModule = module;
	}

	/**
	 * Sets parent dependencies block index.
	 * @param {Dependency} dependency the dependency
	 * @param {number} index the index
	 * @returns {void}
	 */
	setParentDependenciesBlockIndex(dependency, index) {
		dependency._parentDependenciesBlockIndex = index;
	}

	/**
	 * Gets parent module.
	 * @param {Dependency} dependency the dependency
	 * @returns {Module | undefined} parent module
	 */
	getParentModule(dependency) {
		return dependency._parentModule;
	}

	/**
	 * Returns parent block.
	 * @param {Dependency} dependency the dependency
	 * @returns {DependenciesBlock | undefined} parent block
	 */
	getParentBlock(dependency) {
		return dependency._parentDependenciesBlock;
	}

	/**
	 * Gets parent block index.
	 * @param {Dependency} dependency the dependency
	 * @returns {number} index
	 */
	getParentBlockIndex(dependency) {
		return dependency._parentDependenciesBlockIndex;
	}

	/**
	 * Sets resolved module.
	 * @param {Module | null} originModule the referencing module
	 * @param {Dependency} dependency the referencing dependency
	 * @param {Module} module the referenced module
	 * @returns {void}
	 */
	setResolvedModule(originModule, dependency, module) {
		const connection = new ModuleGraphConnection(
			originModule,
			dependency,
			module,
			undefined,
			dependency.weak,
			dependency.getCondition(this)
		);
		const connections = this._getModuleGraphModule(module).incomingConnections;
		connections.add(connection);
		if (originModule) {
			const mgm = this._getModuleGraphModule(originModule);
			if (mgm._unassignedConnections === undefined) {
				mgm._unassignedConnections = [];
			}
			mgm._unassignedConnections.push(connection);
			if (mgm.outgoingConnections === undefined) {
				mgm.outgoingConnections = new SortableSet();
			}
			mgm.outgoingConnections.add(connection);
		} else {
			this._dependencyMap.set(dependency, connection);
		}
	}

	/**
	 * Updates module using the provided dependency.
	 * @param {Dependency} dependency the referencing dependency
	 * @param {Module} module the referenced module
	 * @returns {void}
	 */
	updateModule(dependency, module) {
		const connection =
			/** @type {ModuleGraphConnection} */
			(this.getConnection(dependency));
		if (connection.module === module) return;
		const newConnection = connection.clone();
		newConnection.module = module;
		this._dependencyMap.set(dependency, newConnection);
		connection.setActive(false);
		const originMgm = this._getModuleGraphModule(
			/** @type {Module} */ (connection.originModule)
		);
		/** @type {OutgoingConnections} */
		(originMgm.outgoingConnections).add(newConnection);
		const targetMgm = this._getModuleGraphModule(module);
		targetMgm.incomingConnections.add(newConnection);
	}

	/**
	 * Updates parent using the provided dependency.
	 * @param {Dependency} dependency the need update dependency
	 * @param {ModuleGraphConnection=} connection the target connection
	 * @param {Module=} parentModule the parent module
	 * @returns {void}
	 */
	updateParent(dependency, connection, parentModule) {
		if (this._dependencySourceOrderMap.has(dependency)) {
			return;
		}
		if (!connection || !parentModule) {
			return;
		}
		const originDependency = connection.dependency;

		// src/index.js
		// import { c } from "lib/c" -> c = 0
		// import { a, b } from "lib" -> a and b have the same source order -> a = b = 1
		// import { d } from "lib/d" -> d = 2
		const currentSourceOrder =
			/** @type {HarmonyImportSideEffectDependency | HarmonyImportSpecifierDependency} */
			(dependency).sourceOrder;

		// lib/index.js (reexport)
		// import { a } from "lib/a" -> a = 0
		// import { b } from "lib/b" -> b = 1
		const originSourceOrder =
			/** @type {HarmonyImportSideEffectDependency | HarmonyImportSpecifierDependency} */
			(originDependency).sourceOrder;
		if (
			typeof currentSourceOrder === "number" &&
			typeof originSourceOrder === "number"
		) {
			// src/index.js
			// import { c } from "lib/c" -> c = 0
			// import { a } from "lib/a" -> a = 1.0 = 1(main) + 0.0(sub)
			// import { b } from "lib/b" -> b = 1.1 = 1(main) + 0.1(sub)
			// import { d } from "lib/d" -> d = 2
			this._dependencySourceOrderMap.set(dependency, {
				main: currentSourceOrder,
				sub: originSourceOrder
			});

			// Save for later batch sorting
			this._modulesNeedingSort.add(parentModule);
		}
	}

	/**
	 * Finish update parent.
	 * @returns {void}
	 */
	finishUpdateParent() {
		if (this._modulesNeedingSort.size === 0) {
			return;
		}
		for (const mod of this._modulesNeedingSort) {
			// If dependencies like HarmonyImportSideEffectDependency and HarmonyImportSpecifierDependency have a SourceOrder,
			// we sort based on it; otherwise, we preserve the original order.
			sortWithSourceOrder(
				mod.dependencies,
				this._dependencySourceOrderMap,
				(dep, index) => this.setParentDependenciesBlockIndex(dep, index)
			);
		}
		this._modulesNeedingSort.clear();
	}

	/**
	 * Removes connection.
	 * @param {Dependency} dependency the referencing dependency
	 * @returns {void}
	 */
	removeConnection(dependency) {
		const connection =
			/** @type {ModuleGraphConnection} */
			(this.getConnection(dependency));
		const targetMgm = this._getModuleGraphModule(connection.module);
		targetMgm.incomingConnections.delete(connection);
		const originMgm = this._getModuleGraphModule(
			/** @type {Module} */ (connection.originModule)
		);
		/** @type {OutgoingConnections} */
		(originMgm.outgoingConnections).delete(connection);
		this._dependencyMap.set(dependency, null);
	}

	/**
	 * Adds the provided dependency to the module graph.
	 * @param {Dependency} dependency the referencing dependency
	 * @param {string} explanation an explanation
	 * @returns {void}
	 */
	addExplanation(dependency, explanation) {
		const connection =
			/** @type {ModuleGraphConnection} */
			(this.getConnection(dependency));
		connection.addExplanation(explanation);
	}

	/**
	 * Clones module attributes.
	 * @param {Module} sourceModule the source module
	 * @param {Module} targetModule the target module
	 * @returns {void}
	 */
	cloneModuleAttributes(sourceModule, targetModule) {
		const oldMgm = this._getModuleGraphModule(sourceModule);
		const newMgm = this._getModuleGraphModule(targetModule);
		newMgm.postOrderIndex = oldMgm.postOrderIndex;
		newMgm.preOrderIndex = oldMgm.preOrderIndex;
		newMgm.depth = oldMgm.depth;
		newMgm.exports = oldMgm.exports;
		newMgm.async = oldMgm.async;
	}

	/**
	 * Removes module attributes.
	 * @param {Module} module the module
	 * @returns {void}
	 */
	removeModuleAttributes(module) {
		const mgm = this._getModuleGraphModule(module);
		mgm.postOrderIndex = null;
		mgm.preOrderIndex = null;
		mgm.depth = null;
		mgm.async = false;
	}

	/**
	 * Removes all module attributes.
	 * @returns {void}
	 */
	removeAllModuleAttributes() {
		for (const mgm of this._moduleMap.values()) {
			mgm.postOrderIndex = null;
			mgm.preOrderIndex = null;
			mgm.depth = null;
			mgm.async = false;
		}
	}

	/**
	 * Move module connections.
	 * @param {Module} oldModule the old referencing module
	 * @param {Module} newModule the new referencing module
	 * @param {FilterConnection} filterConnection filter predicate for replacement
	 * @returns {void}
	 */
	moveModuleConnections(oldModule, newModule, filterConnection) {
		if (oldModule === newModule) return;
		const oldMgm = this._getModuleGraphModule(oldModule);
		const newMgm = this._getModuleGraphModule(newModule);
		// Outgoing connections
		const oldConnections = oldMgm.outgoingConnections;
		if (oldConnections !== undefined) {
			if (newMgm.outgoingConnections === undefined) {
				newMgm.outgoingConnections = new SortableSet();
			}
			const newConnections = newMgm.outgoingConnections;
			for (const connection of oldConnections) {
				if (filterConnection(connection)) {
					connection.originModule = newModule;
					newConnections.add(connection);
					oldConnections.delete(connection);
				}
			}
		}
		// Incoming connections
		const oldConnections2 = oldMgm.incomingConnections;
		const newConnections2 = newMgm.incomingConnections;
		for (const connection of oldConnections2) {
			if (filterConnection(connection)) {
				connection.module = newModule;
				newConnections2.add(connection);
				oldConnections2.delete(connection);
			}
		}
	}

	/**
	 * Copies outgoing module connections.
	 * @param {Module} oldModule the old referencing module
	 * @param {Module} newModule the new referencing module
	 * @param {FilterConnection} filterConnection filter predicate for replacement
	 * @returns {void}
	 */
	copyOutgoingModuleConnections(oldModule, newModule, filterConnection) {
		if (oldModule === newModule) return;
		const oldMgm = this._getModuleGraphModule(oldModule);
		const newMgm = this._getModuleGraphModule(newModule);
		// Outgoing connections
		const oldConnections = oldMgm.outgoingConnections;
		if (oldConnections !== undefined) {
			if (newMgm.outgoingConnections === undefined) {
				newMgm.outgoingConnections = new SortableSet();
			}
			const newConnections = newMgm.outgoingConnections;
			for (const connection of oldConnections) {
				if (filterConnection(connection)) {
					const newConnection = connection.clone();
					newConnection.originModule = newModule;
					newConnections.add(newConnection);
					if (newConnection.module !== undefined) {
						const otherMgm = this._getModuleGraphModule(newConnection.module);
						otherMgm.incomingConnections.add(newConnection);
					}
				}
			}
		}
	}

	/**
	 * Adds the provided module to the module graph.
	 * @param {Module} module the referenced module
	 * @param {string} explanation an explanation why it's referenced
	 * @returns {void}
	 */
	addExtraReason(module, explanation) {
		const connections = this._getModuleGraphModule(module).incomingConnections;
		connections.add(new ModuleGraphConnection(null, null, module, explanation));
	}

	/**
	 * Gets resolved module.
	 * @param {Dependency} dependency the dependency to look for a referenced module
	 * @returns {Module | null} the referenced module
	 */
	getResolvedModule(dependency) {
		const connection = this.getConnection(dependency);
		return connection !== undefined ? connection.resolvedModule : null;
	}

	/**
	 * Returns the connection.
	 * @param {Dependency} dependency the dependency to look for a referenced module
	 * @returns {ModuleGraphConnection | undefined} the connection
	 */
	getConnection(dependency) {
		const connection = this._dependencyMap.get(dependency);
		if (connection === undefined) {
			const module = this.getParentModule(dependency);
			if (module !== undefined) {
				const mgm = this._getModuleGraphModule(module);
				if (
					mgm._unassignedConnections &&
					mgm._unassignedConnections.length !== 0
				) {
					/** @type {undefined | ModuleGraphConnection} */
					let foundConnection;
					for (const connection of mgm._unassignedConnections) {
						this._dependencyMap.set(
							/** @type {Dependency} */ (connection.dependency),
							connection
						);
						if (connection.dependency === dependency) {
							foundConnection = connection;
						}
					}
					mgm._unassignedConnections.length = 0;
					if (foundConnection !== undefined) {
						return foundConnection;
					}
				}
			}
			this._dependencyMap.set(dependency, null);
			return;
		}
		return connection === null ? undefined : connection;
	}

	/**
	 * Returns the referenced module.
	 * @param {Dependency} dependency the dependency to look for a referenced module
	 * @returns {Module | null} the referenced module
	 */
	getModule(dependency) {
		const connection = this.getConnection(dependency);
		return connection !== undefined ? connection.module : null;
	}

	/**
	 * Returns the referencing module.
	 * @param {Dependency} dependency the dependency to look for a referencing module
	 * @returns {Module | null} the referencing module
	 */
	getOrigin(dependency) {
		const connection = this.getConnection(dependency);
		return connection !== undefined ? connection.originModule : null;
	}

	/**
	 * Gets resolved origin.
	 * @param {Dependency} dependency the dependency to look for a referencing module
	 * @returns {Module | null} the original referencing module
	 */
	getResolvedOrigin(dependency) {
		const connection = this.getConnection(dependency);
		return connection !== undefined ? connection.resolvedOriginModule : null;
	}

	/**
	 * Gets incoming connections.
	 * @param {Module} module the module
	 * @returns {Iterable<ModuleGraphConnection>} reasons why a module is included
	 */
	getIncomingConnections(module) {
		const connections = this._getModuleGraphModule(module).incomingConnections;
		return connections;
	}

	/**
	 * Gets outgoing connections.
	 * @param {Module} module the module
	 * @returns {Iterable<ModuleGraphConnection>} list of outgoing connections
	 */
	getOutgoingConnections(module) {
		const connections = this._getModuleGraphModule(module).outgoingConnections;
		return connections === undefined ? EMPTY_SET : connections;
	}

	/**
	 * Gets incoming connections by origin module.
	 * @param {Module} module the module
	 * @returns {ReadonlyMap<Module | undefined | null, ReadonlyArray<ModuleGraphConnection>>} reasons why a module is included, in a map by source module
	 */
	getIncomingConnectionsByOriginModule(module) {
		const connections = this._getModuleGraphModule(module).incomingConnections;
		return connections.getFromUnorderedCache(getConnectionsByOriginModule);
	}

	/**
	 * Gets outgoing connections by module.
	 * @param {Module} module the module
	 * @returns {ReadonlyMap<Module | undefined, ReadonlyArray<ModuleGraphConnection>> | undefined} connections to modules, in a map by module
	 */
	getOutgoingConnectionsByModule(module) {
		const connections = this._getModuleGraphModule(module).outgoingConnections;
		return connections === undefined
			? undefined
			: connections.getFromUnorderedCache(getConnectionsByModule);
	}

	/**
	 * Returns the module profile.
	 * @param {Module} module the module
	 * @returns {ModuleProfile | undefined} the module profile
	 */
	getProfile(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.profile;
	}

	/**
	 * Updates profile using the provided module.
	 * @param {Module} module the module
	 * @param {ModuleProfile | undefined} profile the module profile
	 * @returns {void}
	 */
	setProfile(module, profile) {
		const mgm = this._getModuleGraphModule(module);
		mgm.profile = profile;
	}

	/**
	 * Returns the issuer module.
	 * @param {Module} module the module
	 * @returns {Issuer} the issuer module
	 */
	getIssuer(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.issuer;
	}

	/**
	 * Updates issuer using the provided module.
	 * @param {Module} module the module
	 * @param {Module | null} issuer the issuer module
	 * @returns {void}
	 */
	setIssuer(module, issuer) {
		const mgm = this._getModuleGraphModule(module);
		mgm.issuer = issuer;
	}

	/**
	 * Sets issuer if unset.
	 * @param {Module} module the module
	 * @param {Module | null} issuer the issuer module
	 * @returns {void}
	 */
	setIssuerIfUnset(module, issuer) {
		const mgm = this._getModuleGraphModule(module);
		if (mgm.issuer === undefined) mgm.issuer = issuer;
	}

	/**
	 * Gets optimization bailout.
	 * @param {Module} module the module
	 * @returns {OptimizationBailouts} optimization bailouts
	 */
	getOptimizationBailout(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.optimizationBailout;
	}

	/**
	 * Gets provided exports.
	 * @param {Module} module the module
	 * @returns {null | true | ExportInfoName[]} the provided exports
	 */
	getProvidedExports(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.exports.getProvidedExports();
	}

	/**
	 * Checks whether this module graph is export provided.
	 * @param {Module} module the module
	 * @param {ExportInfoName | ExportInfoName[]} exportName a name of an export
	 * @returns {boolean | null} true, if the export is provided by the module.
	 * null, if it's unknown.
	 * false, if it's not provided.
	 */
	isExportProvided(module, exportName) {
		const mgm = this._getModuleGraphModule(module);
		const result = mgm.exports.isExportProvided(exportName);
		return result === undefined ? null : result;
	}

	/**
	 * Returns info about the exports.
	 * @param {Module} module the module
	 * @returns {ExportsInfo} info about the exports
	 */
	getExportsInfo(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.exports;
	}

	/**
	 * Returns info about the export.
	 * @param {Module} module the module
	 * @param {string} exportName the export
	 * @returns {ExportInfo} info about the export
	 */
	getExportInfo(module, exportName) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.exports.getExportInfo(exportName);
	}

	/**
	 * Gets read only export info.
	 * @param {Module} module the module
	 * @param {string} exportName the export
	 * @returns {ExportInfo} info about the export (do not modify)
	 */
	getReadOnlyExportInfo(module, exportName) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.exports.getReadOnlyExportInfo(exportName);
	}

	/**
	 * Returns the used exports.
	 * @param {Module} module the module
	 * @param {RuntimeSpec} runtime the runtime
	 * @returns {false | true | SortableSet<string> | null} the used exports
	 * false: module is not used at all.
	 * true: the module namespace/object export is used.
	 * SortableSet<string>: these export names are used.
	 * empty SortableSet<string>: module is used but no export.
	 * null: unknown, worst case should be assumed.
	 */
	getUsedExports(module, runtime) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.exports.getUsedExports(runtime);
	}

	/**
	 * Gets pre order index.
	 * @param {Module} module the module
	 * @returns {number | null} the index of the module
	 */
	getPreOrderIndex(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.preOrderIndex;
	}

	/**
	 * Gets post order index.
	 * @param {Module} module the module
	 * @returns {number | null} the index of the module
	 */
	getPostOrderIndex(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.postOrderIndex;
	}

	/**
	 * Sets pre order index.
	 * @param {Module} module the module
	 * @param {number} index the index of the module
	 * @returns {void}
	 */
	setPreOrderIndex(module, index) {
		const mgm = this._getModuleGraphModule(module);
		mgm.preOrderIndex = index;
	}

	/**
	 * Sets pre order index if unset.
	 * @param {Module} module the module
	 * @param {number} index the index of the module
	 * @returns {boolean} true, if the index was set
	 */
	setPreOrderIndexIfUnset(module, index) {
		const mgm = this._getModuleGraphModule(module);
		if (mgm.preOrderIndex === null) {
			mgm.preOrderIndex = index;
			return true;
		}
		return false;
	}

	/**
	 * Sets post order index.
	 * @param {Module} module the module
	 * @param {number} index the index of the module
	 * @returns {void}
	 */
	setPostOrderIndex(module, index) {
		const mgm = this._getModuleGraphModule(module);
		mgm.postOrderIndex = index;
	}

	/**
	 * Sets post order index if unset.
	 * @param {Module} module the module
	 * @param {number} index the index of the module
	 * @returns {boolean} true, if the index was set
	 */
	setPostOrderIndexIfUnset(module, index) {
		const mgm = this._getModuleGraphModule(module);
		if (mgm.postOrderIndex === null) {
			mgm.postOrderIndex = index;
			return true;
		}
		return false;
	}

	/**
	 * Returns the depth of the module.
	 * @param {Module} module the module
	 * @returns {number | null} the depth of the module
	 */
	getDepth(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.depth;
	}

	/**
	 * Updates depth using the provided module.
	 * @param {Module} module the module
	 * @param {number} depth the depth of the module
	 * @returns {void}
	 */
	setDepth(module, depth) {
		const mgm = this._getModuleGraphModule(module);
		mgm.depth = depth;
	}

	/**
	 * Sets depth if lower.
	 * @param {Module} module the module
	 * @param {number} depth the depth of the module
	 * @returns {boolean} true, if the depth was set
	 */
	setDepthIfLower(module, depth) {
		const mgm = this._getModuleGraphModule(module);
		if (mgm.depth === null || mgm.depth > depth) {
			mgm.depth = depth;
			return true;
		}
		return false;
	}

	/**
	 * Checks whether this module graph is async.
	 * @param {Module} module the module
	 * @returns {boolean} true, if the module is async
	 */
	isAsync(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.async;
	}

	/**
	 * Checks whether this module graph is deferred.
	 * @param {Module} module the module
	 * @returns {boolean} true, if the module is used as a deferred module at least once
	 */
	isDeferred(module) {
		if (this.isAsync(module)) return false;
		const connections = this.getIncomingConnections(module);
		for (const connection of connections) {
			if (
				!connection.dependency ||
				!(connection.dependency instanceof HarmonyImportDependency)
			) {
				continue;
			}
			if (ImportPhaseUtils.isDefer(connection.dependency.phase)) return true;
		}
		return false;
	}

	/**
	 * Updates async using the provided module.
	 * @param {Module} module the module
	 * @returns {void}
	 */
	setAsync(module) {
		const mgm = this._getModuleGraphModule(module);
		mgm.async = true;
	}

	/**
	 * Returns metadata.
	 * @param {MetaKey} thing any thing
	 * @returns {Meta} metadata
	 */
	getMeta(thing) {
		let meta = this._metaMap.get(thing);
		if (meta === undefined) {
			meta = /** @type {Meta} */ (Object.create(null));
			this._metaMap.set(thing, meta);
		}
		return meta;
	}

	/**
	 * Gets meta if existing.
	 * @param {MetaKey} thing any thing
	 * @returns {Meta | undefined} metadata
	 */
	getMetaIfExisting(thing) {
		return this._metaMap.get(thing);
	}

	/**
	 * Processes the provided cache stage.
	 * @param {string=} cacheStage a persistent stage name for caching
	 */
	freeze(cacheStage) {
		this._cache = new WeakTupleMap();
		this._cacheStage = cacheStage;
	}

	unfreeze() {
		this._cache = undefined;
		this._cacheStage = undefined;
	}

	/**
	 * Returns computed value or cached.
	 * @template {EXPECTED_ANY[]} T
	 * @template R
	 * @param {(moduleGraph: ModuleGraph, ...args: T) => R} fn computer
	 * @param {T} args arguments
	 * @returns {R} computed value or cached
	 */
	cached(fn, ...args) {
		if (this._cache === undefined) return fn(this, ...args);
		return this._cache.provide(fn, ...args, () => fn(this, ...args));
	}

	/**
	 * Sets module mem caches.
	 * @param {ModuleMemCaches} moduleMemCaches mem caches for modules for better caching
	 */
	setModuleMemCaches(moduleMemCaches) {
		this._moduleMemCaches = moduleMemCaches;
	}

	/**
	 * Dependency cache provide.
	 * @template {Dependency} D
	 * @template {EXPECTED_ANY[]} ARGS
	 * @template R
	 * @param {D} dependency dependency
	 * @param {[...ARGS, (moduleGraph: ModuleGraph, dependency: D, ...args: ARGS) => R]} args arguments, last argument is a function called with moduleGraph, dependency, ...args
	 * @returns {R} computed value or cached
	 */
	dependencyCacheProvide(dependency, ...args) {
		const fn =
			/** @type {(moduleGraph: ModuleGraph, dependency: D, ...args: EXPECTED_ANY[]) => R} */
			(args.pop());
		if (this._moduleMemCaches && this._cacheStage) {
			const memCache = this._moduleMemCaches.get(
				/** @type {Module} */
				(this.getParentModule(dependency))
			);
			if (memCache !== undefined) {
				return memCache.provide(dependency, this._cacheStage, ...args, () =>
					fn(this, dependency, ...args)
				);
			}
		}
		if (this._cache === undefined) return fn(this, dependency, ...args);
		return this._cache.provide(dependency, ...args, () =>
			fn(this, dependency, ...args)
		);
	}

	// TODO remove in webpack 6
	/**
	 * Gets module graph for module.
	 * @deprecated
	 * @param {Module} module the module
	 * @param {string} deprecateMessage message for the deprecation message
	 * @param {string} deprecationCode code for the deprecation
	 * @returns {ModuleGraph} the module graph
	 */
	static getModuleGraphForModule(module, deprecateMessage, deprecationCode) {
		const fn = deprecateMap.get(deprecateMessage);
		if (fn) return fn(module);
		const newFn = util.deprecate(
			/**
			 * Handles the callback logic for this hook.
			 * @param {Module} module the module
			 * @returns {ModuleGraph} the module graph
			 */
			(module) => {
				const moduleGraph = moduleGraphForModuleMap.get(module);
				if (!moduleGraph) {
					throw new Error(
						`${
							deprecateMessage
						}There was no ModuleGraph assigned to the Module for backward-compat (Use the new API)`
					);
				}
				return moduleGraph;
			},
			`${deprecateMessage}: Use new ModuleGraph API`,
			deprecationCode
		);
		deprecateMap.set(deprecateMessage, newFn);
		return newFn(module);
	}

	// TODO remove in webpack 6
	/**
	 * Sets module graph for module.
	 * @deprecated
	 * @param {Module} module the module
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {void}
	 */
	static setModuleGraphForModule(module, moduleGraph) {
		moduleGraphForModuleMap.set(module, moduleGraph);
	}

	// TODO remove in webpack 6
	/**
	 * Clear module graph for module.
	 * @deprecated
	 * @param {Module} module the module
	 * @returns {void}
	 */
	static clearModuleGraphForModule(module) {
		moduleGraphForModuleMap.delete(module);
	}
}

// TODO remove in webpack 6
/** @type {WeakMap<Module, ModuleGraph>} */
const moduleGraphForModuleMap = new WeakMap();

// TODO remove in webpack 6
/** @type {Map<string, (module: Module) => ModuleGraph>} */
const deprecateMap = new Map();

module.exports = ModuleGraph;
module.exports.ModuleGraphConnection = ModuleGraphConnection;
