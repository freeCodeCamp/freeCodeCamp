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
	compareModulesByIdentifier,
	compareChunkGroupsByIndex,
	compareModulesById
} = require("./util/comparators");
const { createArrayToSetDeprecationSet } = require("./util/deprecation");
const { mergeRuntime } = require("./util/runtime");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("./ChunkGraph").ChunkFilterPredicate} ChunkFilterPredicate */
/** @typedef {import("./ChunkGraph").ChunkSizeOptions} ChunkSizeOptions */
/** @typedef {import("./ChunkGraph").ModuleFilterPredicate} ModuleFilterPredicate */
/** @typedef {import("./ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("./ChunkGroup")} ChunkGroup */
/** @typedef {import("./ChunkGroup").ChunkGroupOptions} ChunkGroupOptions */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./Compilation").AssetInfo} AssetInfo */
/** @typedef {import("./Entrypoint").EntryOptions} EntryOptions */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./ModuleGraph")} ModuleGraph */
/** @typedef {import("./TemplatedPathPlugin").TemplatePath} TemplatePath */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */

/** @typedef {number | string} ChunkId */

const ChunkFilesSet = createArrayToSetDeprecationSet("chunk.files");

/**
 * @typedef {object} WithId an object who has an id property *
 * @property {string | number} id the id of the object
 */

/**
 * @deprecated
 * @typedef {object} ChunkMaps
 * @property {Record<string|number, string>} hash
 * @property {Record<string|number, Record<string, string>>} contentHash
 * @property {Record<string|number, string>} name
 */

/**
 * @deprecated
 * @typedef {object} ChunkModuleMaps
 * @property {Record<string|number, (string|number)[]>} id
 * @property {Record<string|number, string>} hash
 */

let debugId = 1000;

/**
 * A Chunk is a unit of encapsulation for Modules.
 * Chunks are "rendered" into bundles that get emitted when the build completes.
 */
class Chunk {
	/**
	 * @param {string=} name of chunk being created, is optional (for subclasses)
	 * @param {boolean} backCompat enable backward-compatibility
	 */
	constructor(name, backCompat = true) {
		/** @type {ChunkId | null} */
		this.id = null;
		/** @type {ChunkId[] | null} */
		this.ids = null;
		/** @type {number} */
		this.debugId = debugId++;
		/** @type {string | undefined} */
		this.name = name;
		/** @type {SortableSet<string>} */
		this.idNameHints = new SortableSet();
		/** @type {boolean} */
		this.preventIntegration = false;
		/** @type {TemplatePath | undefined} */
		this.filenameTemplate = undefined;
		/** @type {TemplatePath | undefined} */
		this.cssFilenameTemplate = undefined;
		/**
		 * @private
		 * @type {SortableSet<ChunkGroup>}
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
	get entryModule() {
		const entryModules = Array.from(
			ChunkGraph.getChunkGraphForChunk(
				this,
				"Chunk.entryModule",
				"DEP_WEBPACK_CHUNK_ENTRY_MODULE"
			).getChunkEntryModulesIterable(this)
		);
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
	 * @returns {number} the number of module which are contained in this chunk
	 */
	getNumberOfModules() {
		return ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.getNumberOfModules",
			"DEP_WEBPACK_CHUNK_GET_NUMBER_OF_MODULES"
		).getNumberOfChunkModules(this);
	}

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
	 * @param {Chunk} otherChunk the chunk to compare with
	 * @returns {-1|0|1} the comparison result
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
	 * @param {ModuleFilterPredicate} filterFn function used to filter modules
	 * @returns {ChunkModuleMaps} module map information
	 */
	getChunkModuleMaps(filterFn) {
		const chunkGraph = ChunkGraph.getChunkGraphForChunk(
			this,
			"Chunk.getChunkModuleMaps",
			"DEP_WEBPACK_CHUNK_GET_CHUNK_MODULE_MAPS"
		);
		/** @type {Record<string|number, (string|number)[]>} */
		const chunkModuleIdMap = Object.create(null);
		/** @type {Record<string|number, string>} */
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
	 * @deprecated
	 * @param {boolean} realHash whether the full hash or the rendered hash is to be used
	 * @returns {ChunkMaps} the chunk map information
	 */
	getChunkMaps(realHash) {
		/** @type {Record<string|number, string>} */
		const chunkHashMap = Object.create(null);
		/** @type {Record<string|number, Record<string, string>>} */
		const chunkContentHashMap = Object.create(null);
		/** @type {Record<string|number, string>} */
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
	 * @returns {boolean} whether or not this chunk can be an initial chunk
	 */
	canBeInitial() {
		for (const chunkGroup of this._groups) {
			if (chunkGroup.isInitial()) return true;
		}
		return false;
	}

	/**
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
	 * @param {ChunkGroup} chunkGroup the chunkGroup the chunk is being added
	 * @returns {void}
	 */
	addGroup(chunkGroup) {
		this._groups.add(chunkGroup);
	}

	/**
	 * @param {ChunkGroup} chunkGroup the chunkGroup the chunk is being removed from
	 * @returns {void}
	 */
	removeGroup(chunkGroup) {
		this._groups.delete(chunkGroup);
	}

	/**
	 * @param {ChunkGroup} chunkGroup the chunkGroup to check
	 * @returns {boolean} returns true if chunk has chunkGroup reference and exists in chunkGroup
	 */
	isInGroup(chunkGroup) {
		return this._groups.has(chunkGroup);
	}

	/**
	 * @returns {number} the amount of groups that the said chunk is in
	 */
	getNumberOfGroups() {
		return this._groups.size;
	}

	/**
	 * @returns {SortableSet<ChunkGroup>} the chunkGroups that the said chunk is referenced in
	 */
	get groupsIterable() {
		this._groups.sort();
		return this._groups;
	}

	/**
	 * @returns {void}
	 */
	disconnectFromGroups() {
		for (const chunkGroup of this._groups) {
			chunkGroup.removeChunk(this);
		}
	}

	/**
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
	 * @returns {Set<Chunk>} a set of all the async chunks
	 */
	getAllAsyncChunks() {
		const queue = new Set();
		const chunks = new Set();

		const initialChunks = intersect(
			Array.from(this.groupsIterable, g => new Set(g.chunks))
		);

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
	 * @returns {Set<Chunk>} a set of all the initial chunks (including itself)
	 */
	getAllInitialChunks() {
		const chunks = new Set();
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
	 * @returns {Set<Chunk>} a set of all the referenced chunks (including itself)
	 */
	getAllReferencedChunks() {
		const queue = new Set(this.groupsIterable);
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
	 * @returns {Set<Entrypoint>} a set of all the referenced entrypoints
	 */
	getAllReferencedAsyncEntrypoints() {
		const queue = new Set(this.groupsIterable);
		const entrypoints = new Set();

		for (const chunkGroup of queue) {
			for (const entrypoint of chunkGroup.asyncEntrypointsIterable) {
				entrypoints.add(entrypoint);
			}
			for (const child of chunkGroup.childrenIterable) {
				queue.add(child);
			}
		}

		return entrypoints;
	}

	/**
	 * @returns {boolean} true, if the chunk references async chunks
	 */
	hasAsyncChunks() {
		const queue = new Set();

		const initialChunks = intersect(
			Array.from(this.groupsIterable, g => new Set(g.chunks))
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
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {ChunkFilterPredicate=} filterFn function used to filter chunks
	 * @returns {Record<string, (string | number)[]>} a record object of names to lists of child ids(?)
	 */
	getChildIdsByOrders(chunkGraph, filterFn) {
		/** @type {Map<string, {order: number, group: ChunkGroup}[]>} */
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
											/** @type {keyof ChunkGroupOptions} */ (key)
										]
									),
								group: childGroup
							});
						}
					}
				}
			}
		}
		/** @type {Record<string, (string | number)[]>} */
		const result = Object.create(null);
		for (const [name, list] of lists) {
			list.sort((a, b) => {
				const cmp = b.order - a.order;
				if (cmp !== 0) return cmp;
				return a.group.compareTo(chunkGraph, b.group);
			});
			/** @type {Set<string | number>} */
			const chunkIdSet = new Set();
			for (const item of list) {
				for (const chunk of item.group.chunks) {
					if (filterFn && !filterFn(chunk, chunkGraph)) continue;
					chunkIdSet.add(/** @type {ChunkId} */ (chunk.id));
				}
			}
			if (chunkIdSet.size > 0) {
				result[name] = Array.from(chunkIdSet);
			}
		}
		return result;
	}

	/**
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {string} type option name
	 * @returns {{ onChunks: Chunk[], chunks: Set<Chunk> }[] | undefined} referenced chunks for a specific type
	 */
	getChildrenOfTypeInOrder(chunkGraph, type) {
		const list = [];
		for (const group of this.groupsIterable) {
			for (const childGroup of group.childrenIterable) {
				const order =
					childGroup.options[/** @type {keyof ChunkGroupOptions} */ (type)];
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
			const cmp =
				/** @type {number} */ (b.order) - /** @type {number} */ (a.order);
			if (cmp !== 0) return cmp;
			return a.group.compareTo(chunkGraph, b.group);
		});
		const result = [];
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
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {boolean=} includeDirectChildren include direct children (by default only children of async children are included)
	 * @param {ChunkFilterPredicate=} filterFn function used to filter chunks
	 * @returns {Record<string|number, Record<string, (string | number)[]>>} a record object of names to lists of child ids(?) by chunk id
	 */
	getChildIdsByOrdersMap(chunkGraph, includeDirectChildren, filterFn) {
		/** @type {Record<string|number, Record<string, (string | number)[]>>} */
		const chunkMaps = Object.create(null);

		/**
		 * @param {Chunk} chunk a chunk
		 * @returns {void}
		 */
		const addChildIdsByOrdersToMap = chunk => {
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
			/** @type {Set<Chunk>} */
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
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {string} type option name
	 * @param {boolean=} includeDirectChildren include direct children (by default only children of async children are included)
	 * @param {ChunkFilterPredicate=} filterFn function used to filter chunks
	 * @returns {boolean} true when the child is of type order, otherwise false
	 */
	hasChildByOrder(chunkGraph, type, includeDirectChildren, filterFn) {
		if (includeDirectChildren) {
			/** @type {Set<Chunk>} */
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
