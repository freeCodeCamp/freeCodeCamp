/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const ExportsInfo = require("./ExportsInfo");
const ModuleGraphConnection = require("./ModuleGraphConnection");
const SortableSet = require("./util/SortableSet");
const WeakTupleMap = require("./util/WeakTupleMap");

/** @typedef {import("./DependenciesBlock")} DependenciesBlock */
/** @typedef {import("./Dependency")} Dependency */
/** @typedef {import("./ExportsInfo").ExportInfo} ExportInfo */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./ModuleProfile")} ModuleProfile */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */

/**
 * @callback OptimizationBailoutFunction
 * @param {RequestShortener} requestShortener
 * @returns {string}
 */

const EMPTY_SET = new Set();

/**
 * @param {SortableSet<ModuleGraphConnection>} set input
 * @returns {readonly Map<Module | undefined, readonly ModuleGraphConnection[]>} mapped by origin module
 */
const getConnectionsByOriginModule = set => {
	const map = new Map();
	/** @type {Module | 0} */
	let lastModule = 0;
	/** @type {ModuleGraphConnection[] | undefined} */
	let lastList;
	for (const connection of set) {
		const { originModule } = connection;
		if (lastModule === originModule) {
			/** @type {ModuleGraphConnection[]} */
			(lastList).push(connection);
		} else {
			lastModule = /** @type {Module} */ (originModule);
			const list = map.get(originModule);
			if (list !== undefined) {
				lastList = list;
				list.push(connection);
			} else {
				const list = [connection];
				lastList = list;
				map.set(originModule, list);
			}
		}
	}
	return map;
};

/**
 * @param {SortableSet<ModuleGraphConnection>} set input
 * @returns {readonly Map<Module | undefined, readonly ModuleGraphConnection[]>} mapped by module
 */
const getConnectionsByModule = set => {
	const map = new Map();
	/** @type {Module | 0} */
	let lastModule = 0;
	/** @type {ModuleGraphConnection[] | undefined} */
	let lastList;
	for (const connection of set) {
		const { module } = connection;
		if (lastModule === module) {
			/** @type {ModuleGraphConnection[]} */
			(lastList).push(connection);
		} else {
			lastModule = module;
			const list = map.get(module);
			if (list !== undefined) {
				lastList = list;
				list.push(connection);
			} else {
				const list = [connection];
				lastList = list;
				map.set(module, list);
			}
		}
	}
	return map;
};

/** @typedef {SortableSet<ModuleGraphConnection>} IncomingConnections */
/** @typedef {SortableSet<ModuleGraphConnection>} OutgoingConnections */

class ModuleGraphModule {
	constructor() {
		/** @type {IncomingConnections} */
		this.incomingConnections = new SortableSet();
		/** @type {OutgoingConnections | undefined} */
		this.outgoingConnections = undefined;
		/** @type {Module | null | undefined} */
		this.issuer = undefined;
		/** @type {(string | OptimizationBailoutFunction)[]} */
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
		 * @type {WeakMap<any, object>}
		 * @private
		 */
		this._metaMap = new WeakMap();
		/**
		 * @type {WeakTupleMap<any[], any> | undefined}
		 * @private
		 */
		this._cache = undefined;
		/**
		 * @type {Map<Module, WeakTupleMap<any, any>> | undefined}
		 * @private
		 */
		this._moduleMemCaches = undefined;

		/**
		 * @type {string | undefined}
		 * @private
		 */
		this._cacheStage = undefined;
	}

	/**
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
	 * @param {Dependency} dependency the dependency
	 * @returns {Module | undefined} parent module
	 */
	getParentModule(dependency) {
		return dependency._parentModule;
	}

	/**
	 * @param {Dependency} dependency the dependency
	 * @returns {DependenciesBlock | undefined} parent block
	 */
	getParentBlock(dependency) {
		return dependency._parentDependenciesBlock;
	}

	/**
	 * @param {Dependency} dependency the dependency
	 * @returns {number} index
	 */
	getParentBlockIndex(dependency) {
		return dependency._parentDependenciesBlockIndex;
	}

	/**
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
	 * @param {Module} oldModule the old referencing module
	 * @param {Module} newModule the new referencing module
	 * @param {function(ModuleGraphConnection): boolean} filterConnection filter predicate for replacement
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
	 * @param {Module} oldModule the old referencing module
	 * @param {Module} newModule the new referencing module
	 * @param {function(ModuleGraphConnection): boolean} filterConnection filter predicate for replacement
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
	 * @param {Module} module the referenced module
	 * @param {string} explanation an explanation why it's referenced
	 * @returns {void}
	 */
	addExtraReason(module, explanation) {
		const connections = this._getModuleGraphModule(module).incomingConnections;
		connections.add(new ModuleGraphConnection(null, null, module, explanation));
	}

	/**
	 * @param {Dependency} dependency the dependency to look for a referenced module
	 * @returns {Module | null} the referenced module
	 */
	getResolvedModule(dependency) {
		const connection = this.getConnection(dependency);
		return connection !== undefined ? connection.resolvedModule : null;
	}

	/**
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
					let foundConnection;
					for (const connection of mgm._unassignedConnections) {
						this._dependencyMap.set(
							/** @type {Dependency} */ (connection.dependency),
							connection
						);
						if (connection.dependency === dependency)
							foundConnection = connection;
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
	 * @param {Dependency} dependency the dependency to look for a referenced module
	 * @returns {Module | null} the referenced module
	 */
	getModule(dependency) {
		const connection = this.getConnection(dependency);
		return connection !== undefined ? connection.module : null;
	}

	/**
	 * @param {Dependency} dependency the dependency to look for a referencing module
	 * @returns {Module | null} the referencing module
	 */
	getOrigin(dependency) {
		const connection = this.getConnection(dependency);
		return connection !== undefined ? connection.originModule : null;
	}

	/**
	 * @param {Dependency} dependency the dependency to look for a referencing module
	 * @returns {Module | null} the original referencing module
	 */
	getResolvedOrigin(dependency) {
		const connection = this.getConnection(dependency);
		return connection !== undefined ? connection.resolvedOriginModule : null;
	}

	/**
	 * @param {Module} module the module
	 * @returns {Iterable<ModuleGraphConnection>} reasons why a module is included
	 */
	getIncomingConnections(module) {
		const connections = this._getModuleGraphModule(module).incomingConnections;
		return connections;
	}

	/**
	 * @param {Module} module the module
	 * @returns {Iterable<ModuleGraphConnection>} list of outgoing connections
	 */
	getOutgoingConnections(module) {
		const connections = this._getModuleGraphModule(module).outgoingConnections;
		return connections === undefined ? EMPTY_SET : connections;
	}

	/**
	 * @param {Module} module the module
	 * @returns {readonly Map<Module | undefined | null, readonly ModuleGraphConnection[]>} reasons why a module is included, in a map by source module
	 */
	getIncomingConnectionsByOriginModule(module) {
		const connections = this._getModuleGraphModule(module).incomingConnections;
		return connections.getFromUnorderedCache(getConnectionsByOriginModule);
	}

	/**
	 * @param {Module} module the module
	 * @returns {readonly Map<Module | undefined, readonly ModuleGraphConnection[]> | undefined} connections to modules, in a map by module
	 */
	getOutgoingConnectionsByModule(module) {
		const connections = this._getModuleGraphModule(module).outgoingConnections;
		return connections === undefined
			? undefined
			: connections.getFromUnorderedCache(getConnectionsByModule);
	}

	/**
	 * @param {Module} module the module
	 * @returns {ModuleProfile | undefined} the module profile
	 */
	getProfile(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.profile;
	}

	/**
	 * @param {Module} module the module
	 * @param {ModuleProfile | undefined} profile the module profile
	 * @returns {void}
	 */
	setProfile(module, profile) {
		const mgm = this._getModuleGraphModule(module);
		mgm.profile = profile;
	}

	/**
	 * @param {Module} module the module
	 * @returns {Module | null | undefined} the issuer module
	 */
	getIssuer(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.issuer;
	}

	/**
	 * @param {Module} module the module
	 * @param {Module | null} issuer the issuer module
	 * @returns {void}
	 */
	setIssuer(module, issuer) {
		const mgm = this._getModuleGraphModule(module);
		mgm.issuer = issuer;
	}

	/**
	 * @param {Module} module the module
	 * @param {Module | null} issuer the issuer module
	 * @returns {void}
	 */
	setIssuerIfUnset(module, issuer) {
		const mgm = this._getModuleGraphModule(module);
		if (mgm.issuer === undefined) mgm.issuer = issuer;
	}

	/**
	 * @param {Module} module the module
	 * @returns {(string | OptimizationBailoutFunction)[]} optimization bailouts
	 */
	getOptimizationBailout(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.optimizationBailout;
	}

	/**
	 * @param {Module} module the module
	 * @returns {true | string[] | null} the provided exports
	 */
	getProvidedExports(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.exports.getProvidedExports();
	}

	/**
	 * @param {Module} module the module
	 * @param {string | string[]} exportName a name of an export
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
	 * @param {Module} module the module
	 * @returns {ExportsInfo} info about the exports
	 */
	getExportsInfo(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.exports;
	}

	/**
	 * @param {Module} module the module
	 * @param {string} exportName the export
	 * @returns {ExportInfo} info about the export
	 */
	getExportInfo(module, exportName) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.exports.getExportInfo(exportName);
	}

	/**
	 * @param {Module} module the module
	 * @param {string} exportName the export
	 * @returns {ExportInfo} info about the export (do not modify)
	 */
	getReadOnlyExportInfo(module, exportName) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.exports.getReadOnlyExportInfo(exportName);
	}

	/**
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
	 * @param {Module} module the module
	 * @returns {number | null} the index of the module
	 */
	getPreOrderIndex(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.preOrderIndex;
	}

	/**
	 * @param {Module} module the module
	 * @returns {number | null} the index of the module
	 */
	getPostOrderIndex(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.postOrderIndex;
	}

	/**
	 * @param {Module} module the module
	 * @param {number} index the index of the module
	 * @returns {void}
	 */
	setPreOrderIndex(module, index) {
		const mgm = this._getModuleGraphModule(module);
		mgm.preOrderIndex = index;
	}

	/**
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
	 * @param {Module} module the module
	 * @param {number} index the index of the module
	 * @returns {void}
	 */
	setPostOrderIndex(module, index) {
		const mgm = this._getModuleGraphModule(module);
		mgm.postOrderIndex = index;
	}

	/**
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
	 * @param {Module} module the module
	 * @returns {number | null} the depth of the module
	 */
	getDepth(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.depth;
	}

	/**
	 * @param {Module} module the module
	 * @param {number} depth the depth of the module
	 * @returns {void}
	 */
	setDepth(module, depth) {
		const mgm = this._getModuleGraphModule(module);
		mgm.depth = depth;
	}

	/**
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
	 * @param {Module} module the module
	 * @returns {boolean} true, if the module is async
	 */
	isAsync(module) {
		const mgm = this._getModuleGraphModule(module);
		return mgm.async;
	}

	/**
	 * @param {Module} module the module
	 * @returns {void}
	 */
	setAsync(module) {
		const mgm = this._getModuleGraphModule(module);
		mgm.async = true;
	}

	/**
	 * @param {any} thing any thing
	 * @returns {object} metadata
	 */
	getMeta(thing) {
		let meta = this._metaMap.get(thing);
		if (meta === undefined) {
			meta = Object.create(null);
			this._metaMap.set(thing, /** @type {object} */ (meta));
		}
		return /** @type {object} */ (meta);
	}

	/**
	 * @param {any} thing any thing
	 * @returns {object | undefined} metadata
	 */
	getMetaIfExisting(thing) {
		return this._metaMap.get(thing);
	}

	/**
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
	 * @template {any[]} T
	 * @template V
	 * @param {(moduleGraph: ModuleGraph, ...args: T) => V} fn computer
	 * @param {T} args arguments
	 * @returns {V} computed value or cached
	 */
	cached(fn, ...args) {
		if (this._cache === undefined) return fn(this, ...args);
		return this._cache.provide(fn, ...args, () => fn(this, ...args));
	}

	/**
	 * @param {Map<Module, WeakTupleMap<any, any>>} moduleMemCaches mem caches for modules for better caching
	 */
	setModuleMemCaches(moduleMemCaches) {
		this._moduleMemCaches = moduleMemCaches;
	}

	/**
	 * @param {Dependency} dependency dependency
	 * @param {...any} args arguments, last argument is a function called with moduleGraph, dependency, ...args
	 * @returns {any} computed value or cached
	 */
	dependencyCacheProvide(dependency, ...args) {
		/** @type {(moduleGraph: ModuleGraph, dependency: Dependency, ...args: any[]) => any} */
		const fn = args.pop();
		if (this._moduleMemCaches && this._cacheStage) {
			const memCache = this._moduleMemCaches.get(
				/** @type {Module} */ (this.getParentModule(dependency))
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
			 * @param {Module} module the module
			 * @returns {ModuleGraph} the module graph
			 */
			module => {
				const moduleGraph = moduleGraphForModuleMap.get(module);
				if (!moduleGraph)
					throw new Error(
						`${
							deprecateMessage
						}There was no ModuleGraph assigned to the Module for backward-compat (Use the new API)`
					);
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
	 * @param {Module} module the module
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {void}
	 */
	static setModuleGraphForModule(module, moduleGraph) {
		moduleGraphForModuleMap.set(module, moduleGraph);
	}

	// TODO remove in webpack 6
	/**
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
