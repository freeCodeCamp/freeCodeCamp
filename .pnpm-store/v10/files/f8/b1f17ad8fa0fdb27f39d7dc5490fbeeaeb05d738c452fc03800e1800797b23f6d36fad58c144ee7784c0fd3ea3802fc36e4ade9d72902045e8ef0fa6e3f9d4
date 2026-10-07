/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ChunkGraph = require("./ChunkGraph");
const Entrypoint = require("./Entrypoint");
const { intersect } = require("./util/SetHelpers");
const SortableSet = require("./util/SortableSet");
const StringXor = require("./util/StringXor");
const {
	compareChunkGroupsByIndex,
	compareModulesById,
	compareModulesByIdentifier
} = require("./util/comparators");
const { createArrayToSetDeprecationSet } = require("./util/deprecation");
const { mergeRuntime } = require("./util/runtime");

/** @typedef {import("./ChunkGraph").ChunkFilterPredicate} ChunkFilterPredicate */
/** @typedef {import("./ChunkGraph").ChunkSizeOptions} ChunkSizeOptions */
/** @typedef {import("./ChunkGraph").ModuleFilterPredicate} ModuleFilterPredicate */
/** @typedef {import("./ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("./ChunkGroup")} ChunkGroup */
/** @typedef {import("./ChunkGroup").ChunkGroupOptions} ChunkGroupOptions */
/** @typedef {import("./Entrypoint").EntryOptions} EntryOptions */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./TemplatedPathPlugin").TemplatePath} TemplatePath */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */

/** @typedef {string | null} ChunkName */
/** @typedef {string | number} ChunkId */
/** @typedef {SortableSet<string>} IdNameHints */

const ChunkFilesSet = createArrayToSetDeprecationSet("chunk.files");

/**
 * Defines the chunk maps type used by this module.
 * @deprecated
 * @typedef {object} ChunkMaps
 * @property {Record<ChunkId, string>} hash
 * @property {Record<ChunkId, Record<string, string>>} contentHash
 * @property {Record<ChunkId, string>} name
 */

/**
 * Defines the chunk module id map type used by this module.
 * @deprecated
 * @typedef {Record<ChunkId, ChunkId[]>} ChunkModuleIdMap
 */

/**
 * Defines the chunk module hash map type used by this module.
 * @deprecated
 * @typedef {Record<ModuleId, string>} chunkModuleHashMap
 */

/**
 * Defines the chunk module maps type used by this module.
 * @deprecated
 * @typedef {object} ChunkModuleMaps
 * @property {ChunkModuleIdMap} id
 * @property {chunkModuleHashMap} hash
 */

/** @typedef {Set<Chunk>} Chunks */
/** @typedef {Set<Entrypoint>} Entrypoints */
/** @typedef {Set<ChunkGroup>} Queue */
/** @typedef {SortableSet<ChunkGroup>} SortableChunkGroups */
/** @typedef {Record<string, ChunkId[]>} ChunkChildIdsByOrdersMap */
/** @typedef {Record<string, ChunkChildIdsByOrdersMap>} ChunkChildIdsByOrdersMapByData */
/** @typedef {{ onChunks: Chunk[], chunks: Chunks }} ChunkChildOfTypeInOrder */

let debugId = 1000;

/**
 * A Chunk is a unit of encapsulation for Modules.
 * Chunks are "rendered" into bundles that get emitted when the build completes.
 */
class Chunk {
	/**
	 * Creates an instance of Chunk.
	 * @param {ChunkName=} name of chunk being created, is optional (for subclasses)
	 * @param {boolean} backCompat enable backward-compatibility
	 */
	constructor(name, backCompat = true) {
		/** @type {ChunkId | null} */
		this.id = null;
		/** @type {ChunkId[] | null} */
		this.ids = null;
		/** @type {number} */
		this.debugId = debugId++;
		/** @type {ChunkName | undefined} */
		this.name = name;
		/** @type {IdNameHints} */
		this.idNameHints = new SortableSet();
		/** @type {boolean} */
		this.preventIntegration = false;
		/** @type {TemplatePath | undefined} */
		this.filenameTemplate = undefined;
		/** @type {TemplatePath | undefined} */
		this.cssFilenameTemplate = undefined;
		/**
		 * @private
		 * @type {SortableChunkGroups}
		 */
		this._groups = new SortableSet(undefined, compareChunkGroupsByIndex);
		/** @type {RuntimeSpec} */
		this.runtime = undefined;
		/** @type {Set<string>} */
		this.files = backCompat ? new ChunkFilesSet() : new Set();
		/** @type {Set<string>} */
		this.auxiliaryFiles = new Set();
		/** @type {boolean} */
		this.rendered = false;
		/** @type {string=} */
		this.hash = undefined;
		/** @type {Record<string, string>} */
		this.contentHash = Object.create(null);
		/** @type {string=} */
		this.renderedHash = undefined;
		/** @type {string=} */
		this.chunkReason = undefined;
		/** @type {boolean} */
		this.extraAsync = false;
	}

	// TODO remove in webpack 6
	// BACKWARD-COMPAT START
	/**
	 * Returns entry module.
	 * @deprecated
	 * @returns {Module | undefined} entry module
	 */
	get entryModule() {
		const entryModules = [
			...ChunkGraph.getChunkGraphForChunk(
				this,
				"Chunk.entryModule",
				"DEP_WEBPACK_CHUNK_ENTRY_MODULE"
			).getChunkEntryModulesIterable(this)
		];
		if (entryModules.length === 0) {
			return undefined;
		} else if (entryModules.length === 1) {
			return entryModules[0];
		}

		throw new Error(
			"Module.entryModule: Multiple entry modules are not supported by the deprecated API (Use the new ChunkGroup API)"
		);
	}

	/**
	 * Checks whether this chunk has an entry module.
	 * @deprecated
	 * @returns {boolean} true, if the chunk contains an entry module
	 */
	hasEntryModule() {
		return (
			ChunkGraph.getChunkGraphForChunk(
				this,
				"Chunk.hasEntryModule",
				"DEP_WEBPACK_CHUNK_HAS_ENTRY_MODULE"
			).getNumberOfEntryModules(this) > 0
		);
	}

	/**
	 * Adds the provided module to the chunk.
	 * @deprecated
	 * @param {Module} module the module
	 * @returns {boolean} true, if the chunk could be added
	 */
	addModule(module) {
		const chunkGraph = ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.addModule",
			"DEP_WEBPACK_CHUNK_ADD_MODULE"
		);
		if (chunkGraph.isModuleInChunk(module, this)) return false;
		chunkGraph.connectChunkAndModule(this, module);
		return true;
	}

	/**
	 * Removes the provided module from the chunk.
	 * @deprecated
	 * @param {Module} module the module
	 * @returns {void}
	 */
	removeModule(module) {
		ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.removeModule",
			"DEP_WEBPACK_CHUNK_REMOVE_MODULE"
		).disconnectChunkAndModule(this, module);
	}

	/**
	 * Gets the number of modules in this chunk.
	 * @deprecated
	 * @returns {number} the number of module which are contained in this chunk
	 */
	getNumberOfModules() {
		return ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.getNumberOfModules",
			"DEP_WEBPACK_CHUNK_GET_NUMBER_OF_MODULES"
		).getNumberOfChunkModules(this);
	}

	/**
	 * @deprecated
	 * @returns {Iterable<Module>} modules
	 */
	get modulesIterable() {
		const chunkGraph = ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.modulesIterable",
			"DEP_WEBPACK_CHUNK_MODULES_ITERABLE"
		);
		return chunkGraph.getOrderedChunkModulesIterable(
			this,
			compareModulesByIdentifier
		);
	}

	/**
	 * Compares this chunk with another chunk.
	 * @deprecated
	 * @param {Chunk} otherChunk the chunk to compare with
	 * @returns {-1 | 0 | 1} the comparison result
	 */
	compareTo(otherChunk) {
		const chunkGraph = ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.compareTo",
			"DEP_WEBPACK_CHUNK_COMPARE_TO"
		);
		return chunkGraph.compareChunks(this, otherChunk);
	}

	/**
	 * Checks whether this chunk contains the module.
	 * @deprecated
	 * @param {Module} module the module
	 * @returns {boolean} true, if the chunk contains the module
	 */
	containsModule(module) {
		return ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.containsModule",
			"DEP_WEBPACK_CHUNK_CONTAINS_MODULE"
		).isModuleInChunk(module, this);
	}

	/**
	 * Returns the modules for this chunk.
	 * @deprecated
	 * @returns {Module[]} the modules for this chunk
	 */
	getModules() {
		return ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.getModules",
			"DEP_WEBPACK_CHUNK_GET_MODULES"
		).getChunkModules(this);
	}

	/**
	 * Removes this chunk from the chunk graph and chunk groups.
	 * @deprecated
	 * @returns {void}
	 */
	remove() {
		const chunkGraph = ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.remove",
			"DEP_WEBPACK_CHUNK_REMOVE"
		);
		chunkGraph.disconnectChunk(this);
		this.disconnectFromGroups();
	}

	/**
	 * Moves a module from this chunk to another chunk.
	 * @deprecated
	 * @param {Module} module the module
	 * @param {Chunk} otherChunk the target chunk
	 * @returns {void}
	 */
	moveModule(module, otherChunk) {
		const chunkGraph = ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.moveModule",
			"DEP_WEBPACK_CHUNK_MOVE_MODULE"
		);
		chunkGraph.disconnectChunkAndModule(this, module);
		chunkGraph.connectChunkAndModule(otherChunk, module);
	}

	/**
	 * Integrates another chunk into this chunk when possible.
	 * @deprecated
	 * @param {Chunk} otherChunk the other chunk
	 * @returns {boolean} true, if the specified chunk has been integrated
	 */
	integrate(otherChunk) {
		const chunkGraph = ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.integrate",
			"DEP_WEBPACK_CHUNK_INTEGRATE"
		);
		if (chunkGraph.canChunksBeIntegrated(this, otherChunk)) {
			chunkGraph.integrateChunks(this, otherChunk);
			return true;
		}

		return false;
	}

	/**
	 * Checks whether this chunk can be integrated with another chunk.
	 * @deprecated
	 * @param {Chunk} otherChunk the other chunk
	 * @returns {boolean} true, if chunks could be integrated
	 */
	canBeIntegrated(otherChunk) {
		const chunkGraph = ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.canBeIntegrated",
			"DEP_WEBPACK_CHUNK_CAN_BE_INTEGRATED"
		);
		return chunkGraph.canChunksBeIntegrated(this, otherChunk);
	}

	/**
	 * Checks whether this chunk is empty.
	 * @deprecated
	 * @returns {boolean} true, if this chunk contains no module
	 */
	isEmpty() {
		const chunkGraph = ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.isEmpty",
			"DEP_WEBPACK_CHUNK_IS_EMPTY"
		);
		return chunkGraph.getNumberOfChunkModules(this) === 0;
	}

	/**
	 * Returns the total size of all modules in this chunk.
	 * @deprecated
	 * @returns {number} total size of all modules in this chunk
	 */
	modulesSize() {
		const chunkGraph = ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.modulesSize",
			"DEP_WEBPACK_CHUNK_MODULES_SIZE"
		);
		return chunkGraph.getChunkModulesSize(this);
	}

	/**
	 * Returns the estimated size for the requested source type.
	 * @deprecated
	 * @param {ChunkSizeOptions} options options object
	 * @returns {number} total size of this chunk
	 */
	size(options = {}) {
		const chunkGraph = ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.size",
			"DEP_WEBPACK_CHUNK_SIZE"
		);
		return chunkGraph.getChunkSize(this, options);
	}

	/**
	 * Returns the integrated size with another chunk.
	 * @deprecated
	 * @param {Chunk} otherChunk the other chunk
	 * @param {ChunkSizeOptions} options options object
	 * @returns {number} total size of the chunk or false if the chunk can't be integrated
	 */
	integratedSize(otherChunk, options) {
		const chunkGraph = ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.integratedSize",
			"DEP_WEBPACK_CHUNK_INTEGRATED_SIZE"
		);
		return chunkGraph.getIntegratedChunksSize(this, otherChunk, options);
	}

	/**
	 * Gets chunk module maps.
	 * @deprecated
	 * @param {ModuleFilterPredicate} filterFn function used to filter modules
	 * @returns {ChunkModuleMaps} module map information
	 */
	getChunkModuleMaps(filterFn) {
		const chunkGraph = ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.getChunkModuleMaps",
			"DEP_WEBPACK_CHUNK_GET_CHUNK_MODULE_MAPS"
		);
		/** @type {ChunkModuleIdMap} */
		const chunkModuleIdMap = Object.create(null);
		/** @type {chunkModuleHashMap} */
		const chunkModuleHashMap = Object.create(null);

		for (const asyncChunk of this.getAllAsyncChunks()) {
			/** @type {ChunkId[] | undefined} */
			let array;
			for (const module of chunkGraph.getOrderedChunkModulesIterable(
				asyncChunk,
				compareModulesById(chunkGraph)
			)) {
				if (filterFn(module)) {
					if (array === undefined) {
						array = [];
						chunkModuleIdMap[/** @type {ChunkId} */ (asyncChunk.id)] = array;
					}
					const moduleId =
						/** @type {ModuleId} */
						(chunkGraph.getModuleId(module));
					array.push(moduleId);
					chunkModuleHashMap[moduleId] = chunkGraph.getRenderedModuleHash(
						module,
						undefined
					);
				}
			}
		}

		return {
			id: chunkModuleIdMap,
			hash: chunkModuleHashMap
		};
	}

	/**
	 * Checks whether this chunk contains a matching module in the graph.
	 * @deprecated
	 * @param {ModuleFilterPredicate} filterFn predicate function used to filter modules
	 * @param {ChunkFilterPredicate=} filterChunkFn predicate function used to filter chunks
	 * @returns {boolean} return true if module exists in graph
	 */
	hasModuleInGraph(filterFn, filterChunkFn) {
		const chunkGraph = ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.hasModuleInGraph",
			"DEP_WEBPACK_CHUNK_HAS_MODULE_IN_GRAPH"
		);
		return chunkGraph.hasModuleInGraph(this, filterFn, filterChunkFn);
	}

	/**
	 * Returns the chunk map information.
	 * @deprecated
	 * @param {boolean} realHash whether the full hash or the rendered hash is to be used
	 * @returns {ChunkMaps} the chunk map information
	 */
	getChunkMaps(realHash) {
		/** @type {Record<ChunkId, string>} */
		const chunkHashMap = Object.create(null);
		/** @type {Record<string, Record<ChunkId, string>>} */
		const chunkContentHashMap = Object.create(null);
		/** @type {Record<ChunkId, string>} */
		const chunkNameMap = Object.create(null);

		for (const chunk of this.getAllAsyncChunks()) {
			const id = /** @type {ChunkId} */ (chunk.id);
			chunkHashMap[id] =
				/** @type {string} */
				(realHash ? chunk.hash : chunk.renderedHash);
			for (const key of Object.keys(chunk.contentHash)) {
				if (!chunkContentHashMap[key]) {
					chunkContentHashMap[key] = Object.create(null);
				}
				chunkContentHashMap[key][id] = chunk.contentHash[key];
			}
			if (chunk.name) {
				chunkNameMap[id] = chunk.name;
			}
		}

		return {
			hash: chunkHashMap,
			contentHash: chunkContentHashMap,
			name: chunkNameMap
		};
	}
	// BACKWARD-COMPAT END

	/**
	 * Checks whether this chunk has runtime.
	 * @returns {boolean} whether or not the Chunk will have a runtime
	 */
	hasRuntime() {
		for (const chunkGroup of this._groups) {
			if (
				chunkGroup instanceof Entrypoint &&
				chunkGroup.getRuntimeChunk() === this
			) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Checks whether it can be initial.
	 * @returns {boolean} whether or not this chunk can be an initial chunk
	 */
	canBeInitial() {
		for (const chunkGroup of this._groups) {
			if (chunkGroup.isInitial()) return true;
		}
		return false;
	}

	/**
	 * Checks whether this chunk is only initial.
	 * @returns {boolean} whether this chunk can only be an initial chunk
	 */
	isOnlyInitial() {
		if (this._groups.size <= 0) return false;
		for (const chunkGroup of this._groups) {
			if (!chunkGroup.isInitial()) return false;
		}
		return true;
	}

	/**
	 * Gets entry options.
	 * @returns {EntryOptions | undefined} the entry options for this chunk
	 */
	getEntryOptions() {
		for (const chunkGroup of this._groups) {
			if (chunkGroup instanceof Entrypoint) {
				return chunkGroup.options;
			}
		}
		return undefined;
	}

	/**
	 * Adds the provided chunk group to the chunk.
	 * @param {ChunkGroup} chunkGroup the chunkGroup the chunk is being added
	 * @returns {void}
	 */
	addGroup(chunkGroup) {
		this._groups.add(chunkGroup);
	}

	/**
	 * Removes the provided chunk group from the chunk.
	 * @param {ChunkGroup} chunkGroup the chunkGroup the chunk is being removed from
	 * @returns {void}
	 */
	removeGroup(chunkGroup) {
		this._groups.delete(chunkGroup);
	}

	/**
	 * Checks whether this chunk is in group.
	 * @param {ChunkGroup} chunkGroup the chunkGroup to check
	 * @returns {boolean} returns true if chunk has chunkGroup reference and exists in chunkGroup
	 */
	isInGroup(chunkGroup) {
		return this._groups.has(chunkGroup);
	}

	/**
	 * Gets number of groups.
	 * @returns {number} the amount of groups that the said chunk is in
	 */
	getNumberOfGroups() {
		return this._groups.size;
	}

	/**
	 * Gets groups iterable.
	 * @returns {SortableChunkGroups} the chunkGroups that the said chunk is referenced in
	 */
	get groupsIterable() {
		this._groups.sort();
		return this._groups;
	}

	/**
	 * Disconnects from groups.
	 * @returns {void}
	 */
	disconnectFromGroups() {
		for (const chunkGroup of this._groups) {
			chunkGroup.removeChunk(this);
		}
	}

	/**
	 * Processes the provided new chunk.
	 * @param {Chunk} newChunk the new chunk that will be split out of
	 * @returns {void}
	 */
	split(newChunk) {
		for (const chunkGroup of this._groups) {
			chunkGroup.insertChunk(newChunk, this);
			newChunk.addGroup(chunkGroup);
		}
		for (const idHint of this.idNameHints) {
			newChunk.idNameHints.add(idHint);
		}
		newChunk.runtime = mergeRuntime(newChunk.runtime, this.runtime);
	}

	/**
	 * Updates the hash with the data contributed by this instance.
	 * @param {Hash} hash hash (will be modified)
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @returns {void}
	 */
	updateHash(hash, chunkGraph) {
		hash.update(
			`${this.id} ${this.ids ? this.ids.join() : ""} ${this.name || ""} `
		);
		const xor = new StringXor();
		for (const m of chunkGraph.getChunkModulesIterable(this)) {
			xor.add(chunkGraph.getModuleHash(m, this.runtime));
		}
		xor.updateHash(hash);
		const entryModules =
			chunkGraph.getChunkEntryModulesWithChunkGroupIterable(this);
		for (const [m, chunkGroup] of entryModules) {
			hash.update(
				`entry${chunkGraph.getModuleId(m)}${
					/** @type {ChunkGroup} */ (chunkGroup).id
				}`
			);
		}
	}

	/**
	 * Gets all async chunks.
	 * @returns {Chunks} a set of all the async chunks
	 */
	getAllAsyncChunks() {
		/** @type {Queue} */
		const queue = new Set();
		/** @type {Chunks} */
		const chunks = new Set();

		const initialChunks = intersect(
			Array.from(this.groupsIterable, (g) => new Set(g.chunks))
		);

		/** @type {Queue} */
		const initialQueue = new Set(this.groupsIterable);

		for (const chunkGroup of initialQueue) {
			for (const child of chunkGroup.childrenIterable) {
				if (child instanceof Entrypoint) {
					initialQueue.add(child);
				} else {
					queue.add(child);
				}
			}
		}

		for (const chunkGroup of queue) {
			for (const chunk of chunkGroup.chunks) {
				if (!initialChunks.has(chunk)) {
					chunks.add(chunk);
				}
			}
			for (const child of chunkGroup.childrenIterable) {
				queue.add(child);
			}
		}

		return chunks;
	}

	/**
	 * Gets all initial chunks.
	 * @returns {Chunks} a set of all the initial chunks (including itself)
	 */
	getAllInitialChunks() {
		/** @type {Chunks} */
		const chunks = new Set();
		/** @type {Queue} */
		const queue = new Set(this.groupsIterable);
		for (const group of queue) {
			if (group.isInitial()) {
				for (const c of group.chunks) chunks.add(c);
				for (const g of group.childrenIterable) queue.add(g);
			}
		}
		return chunks;
	}

	/**
	 * Gets all referenced chunks.
	 * @returns {Chunks} a set of all the referenced chunks (including itself)
	 */
	getAllReferencedChunks() {
		/** @type {Queue} */
		const queue = new Set(this.groupsIterable);
		/** @type {Chunks} */
		const chunks = new Set();

		for (const chunkGroup of queue) {
			for (const chunk of chunkGroup.chunks) {
				chunks.add(chunk);
			}
			for (const child of chunkGroup.childrenIterable) {
				queue.add(child);
			}
		}

		return chunks;
	}

	/**
	 * Gets all referenced async entrypoints.
	 * @returns {Entrypoints} a set of all the referenced entrypoints
	 */
	getAllReferencedAsyncEntrypoints() {
		/** @type {Queue} */
		const queue = new Set(this.groupsIterable);
		/** @type {Entrypoints} */
		const entrypoints = new Set();

		for (const chunkGroup of queue) {
			for (const entrypoint of chunkGroup.asyncEntrypointsIterable) {
				entrypoints.add(/** @type {Entrypoint} */ (entrypoint));
			}
			for (const child of chunkGroup.childrenIterable) {
				queue.add(child);
			}
		}

		return entrypoints;
	}

	/**
	 * Checks whether this chunk has async chunks.
	 * @returns {boolean} true, if the chunk references async chunks
	 */
	hasAsyncChunks() {
		/** @type {Queue} */
		const queue = new Set();

		const initialChunks = intersect(
			Array.from(this.groupsIterable, (g) => new Set(g.chunks))
		);

		for (const chunkGroup of this.groupsIterable) {
			for (const child of chunkGroup.childrenIterable) {
				queue.add(child);
			}
		}

		for (const chunkGroup of queue) {
			for (const chunk of chunkGroup.chunks) {
				if (!initialChunks.has(chunk)) {
					return true;
				}
			}
			for (const child of chunkGroup.childrenIterable) {
				queue.add(child);
			}
		}

		return false;
	}

	/**
	 * Gets child ids by orders.
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {ChunkFilterPredicate=} filterFn function used to filter chunks
	 * @returns {Record<string, ChunkId[]>} a record object of names to lists of child ids(?)
	 */
	getChildIdsByOrders(chunkGraph, filterFn) {
		/** @type {Map<string, { order: number, group: ChunkGroup }[]>} */
		const lists = new Map();
		for (const group of this.groupsIterable) {
			if (group.chunks[group.chunks.length - 1] === this) {
				for (const childGroup of group.childrenIterable) {
					for (const key of Object.keys(childGroup.options)) {
						if (key.endsWith("Order")) {
							const name = key.slice(0, key.length - "Order".length);
							let list = lists.get(name);
							if (list === undefined) {
								list = [];
								lists.set(name, list);
							}
							list.push({
								order:
									/** @type {number} */
									(
										childGroup.options[
											/** @type {keyof ChunkGroupOptions} */
											(key)
										]
									),
								group: childGroup
							});
						}
					}
				}
			}
		}
		/** @type {Record<string, ChunkId[]>} */
		const result = Object.create(null);
		for (const [name, list] of lists) {
			list.sort((a, b) => {
				const cmp = b.order - a.order;
				if (cmp !== 0) return cmp;
				return a.group.compareTo(chunkGraph, b.group);
			});
			/** @type {Set<ChunkId>} */
			const chunkIdSet = new Set();
			for (const item of list) {
				for (const chunk of item.group.chunks) {
					if (filterFn && !filterFn(chunk, chunkGraph)) continue;
					chunkIdSet.add(/** @type {ChunkId} */ (chunk.id));
				}
			}
			if (chunkIdSet.size > 0) {
				result[name] = [...chunkIdSet];
			}
		}
		return result;
	}

	/**
	 * Gets children of type in order.
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {string} type option name
	 * @returns {ChunkChildOfTypeInOrder[] | undefined} referenced chunks for a specific type
	 */
	getChildrenOfTypeInOrder(chunkGraph, type) {
		/** @type {{ order: number, group: ChunkGroup, childGroup: ChunkGroup }[]} */
		const list = [];
		for (const group of this.groupsIterable) {
			for (const childGroup of group.childrenIterable) {
				const order =
					/** @type {number} */
					(childGroup.options[/** @type {keyof ChunkGroupOptions} */ (type)]);
				if (order === undefined) continue;
				list.push({
					order,
					group,
					childGroup
				});
			}
		}
		if (list.length === 0) return;
		list.sort((a, b) => {
			const cmp = b.order - a.order;
			if (cmp !== 0) return cmp;
			return a.group.compareTo(chunkGraph, b.group);
		});
		/** @type {ChunkChildOfTypeInOrder[]} */
		const result = [];
		/** @type {undefined | ChunkChildOfTypeInOrder} */
		let lastEntry;
		for (const { group, childGroup } of list) {
			if (lastEntry && lastEntry.onChunks === group.chunks) {
				for (const chunk of childGroup.chunks) {
					lastEntry.chunks.add(chunk);
				}
			} else {
				result.push(
					(lastEntry = {
						onChunks: group.chunks,
						chunks: new Set(childGroup.chunks)
					})
				);
			}
		}
		return result;
	}

	/**
	 * Gets child ids by orders map.
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {boolean=} includeDirectChildren include direct children (by default only children of async children are included)
	 * @param {ChunkFilterPredicate=} filterFn function used to filter chunks
	 * @returns {ChunkChildIdsByOrdersMapByData} a record object of names to lists of child ids(?) by chunk id
	 */
	getChildIdsByOrdersMap(chunkGraph, includeDirectChildren, filterFn) {
		/** @type {ChunkChildIdsByOrdersMapByData} */
		const chunkMaps = Object.create(null);

		/**
		 * Adds child ids by orders to map.
		 * @param {Chunk} chunk a chunk
		 * @returns {void}
		 */
		const addChildIdsByOrdersToMap = (chunk) => {
			const data = chunk.getChildIdsByOrders(chunkGraph, filterFn);
			for (const key of Object.keys(data)) {
				let chunkMap = chunkMaps[key];
				if (chunkMap === undefined) {
					chunkMaps[key] = chunkMap = Object.create(null);
				}
				chunkMap[/** @type {ChunkId} */ (chunk.id)] = data[key];
			}
		};

		if (includeDirectChildren) {
			/** @type {Chunks} */
			const chunks = new Set();
			for (const chunkGroup of this.groupsIterable) {
				for (const chunk of chunkGroup.chunks) {
					chunks.add(chunk);
				}
			}
			for (const chunk of chunks) {
				addChildIdsByOrdersToMap(chunk);
			}
		}

		for (const chunk of this.getAllAsyncChunks()) {
			addChildIdsByOrdersToMap(chunk);
		}

		return chunkMaps;
	}

	/**
	 * Checks whether this chunk contains the chunk graph.
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {string} type option name
	 * @param {boolean=} includeDirectChildren include direct children (by default only children of async children are included)
	 * @param {ChunkFilterPredicate=} filterFn function used to filter chunks
	 * @returns {boolean} true when the child is of type order, otherwise false
	 */
	hasChildByOrder(chunkGraph, type, includeDirectChildren, filterFn) {
		if (includeDirectChildren) {
			/** @type {Chunks} */
			const chunks = new Set();
			for (const chunkGroup of this.groupsIterable) {
				for (const chunk of chunkGroup.chunks) {
					chunks.add(chunk);
				}
			}
			for (const chunk of chunks) {
				const data = chunk.getChildIdsByOrders(chunkGraph, filterFn);
				if (data[type] !== undefined) return true;
			}
		}

		for (const chunk of this.getAllAsyncChunks()) {
			const data = chunk.getChildIdsByOrders(chunkGraph, filterFn);
			if (data[type] !== undefined) return true;
		}

		return false;
	}
}

module.exports = Chunk;
