/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const SortableSet = require("./util/SortableSet");
const {
	compareLocations,
	compareChunks,
	compareIterables
} = require("./util/comparators");

/** @typedef {import("./AsyncDependenciesBlock")} AsyncDependenciesBlock */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./Entrypoint")} Entrypoint */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./ModuleGraph")} ModuleGraph */

/** @typedef {{id: number}} HasId */
/** @typedef {{module: Module | null, loc: DependencyLocation, request: string}} OriginRecord */

/**
 * @typedef {object} RawChunkGroupOptions
 * @property {number=} preloadOrder
 * @property {number=} prefetchOrder
 * @property {("low" | "high" | "auto")=} fetchPriority
 */

/** @typedef {RawChunkGroupOptions & { name?: string | null }} ChunkGroupOptions */

let debugId = 5000;

/**
 * @template T
 * @param {SortableSet<T>} set set to convert to array.
 * @returns {T[]} the array format of existing set
 */
const getArray = set => Array.from(set);

/**
 * A convenience method used to sort chunks based on their id's
 * @param {ChunkGroup} a first sorting comparator
 * @param {ChunkGroup} b second sorting comparator
 * @returns {1|0|-1} a sorting index to determine order
 */
const sortById = (a, b) => {
	if (a.id < b.id) return -1;
	if (b.id < a.id) return 1;
	return 0;
};

/**
 * @param {OriginRecord} a the first comparator in sort
 * @param {OriginRecord} b the second comparator in sort
 * @returns {1|-1|0} returns sorting order as index
 */
const sortOrigin = (a, b) => {
	const aIdent = a.module ? a.module.identifier() : "";
	const bIdent = b.module ? b.module.identifier() : "";
	if (aIdent < bIdent) return -1;
	if (aIdent > bIdent) return 1;
	return compareLocations(a.loc, b.loc);
};

class ChunkGroup {
	/**
	 * Creates an instance of ChunkGroup.
	 * @param {string | ChunkGroupOptions=} options chunk group options passed to chunkGroup
	 */
	constructor(options) {
		if (typeof options === "string") {
			options = { name: options };
		} else if (!options) {
			options = { name: undefined };
		}
		/** @type {number} */
		this.groupDebugId = debugId++;
		this.options = /** @type {ChunkGroupOptions} */ (options);
		/** @type {SortableSet<ChunkGroup>} */
		this._children = new SortableSet(undefined, sortById);
		/** @type {SortableSet<ChunkGroup>} */
		this._parents = new SortableSet(undefined, sortById);
		/** @type {SortableSet<ChunkGroup>} */
		this._asyncEntrypoints = new SortableSet(undefined, sortById);
		this._blocks = new SortableSet();
		/** @type {Chunk[]} */
		this.chunks = [];
		/** @type {OriginRecord[]} */
		this.origins = [];
		/** Indices in top-down order */
		/**
		 * @private
		 * @type {Map<Module, number>}
		 */
		this._modulePreOrderIndices = new Map();
		/** Indices in bottom-up order */
		/**
		 * @private
		 * @type {Map<Module, number>}
		 */
		this._modulePostOrderIndices = new Map();
		/** @type {number | undefined} */
		this.index = undefined;
	}

	/**
	 * when a new chunk is added to a chunkGroup, addingOptions will occur.
	 * @param {ChunkGroupOptions} options the chunkGroup options passed to addOptions
	 * @returns {void}
	 */
	addOptions(options) {
		for (const _key of Object.keys(options)) {
			const key = /** @type {keyof ChunkGroupOptions} */ (_key);
			if (this.options[key] === undefined) {
				/** @type {TODO} */
				(this.options)[key] = options[key];
			} else if (this.options[key] !== options[key]) {
				if (key.endsWith("Order")) {
					/** @type {TODO} */
					(this.options)[key] = Math.max(
						/** @type {number} */ (this.options[key]),
						/** @type {number} */ (options[key])
					);
				} else {
					throw new Error(
						`ChunkGroup.addOptions: No option merge strategy for ${key}`
					);
				}
			}
		}
	}

	/**
	 * returns the name of current ChunkGroup
	 * @returns {string | null | undefined} returns the ChunkGroup name
	 */
	get name() {
		return this.options.name;
	}

	/**
	 * sets a new name for current ChunkGroup
	 * @param {string | undefined} value the new name for ChunkGroup
	 * @returns {void}
	 */
	set name(value) {
		this.options.name = value;
	}

	/* istanbul ignore next */
	/**
	 * get a uniqueId for ChunkGroup, made up of its member Chunk debugId's
	 * @returns {string} a unique concatenation of chunk debugId's
	 */
	get debugId() {
		return Array.from(this.chunks, x => x.debugId).join("+");
	}

	/**
	 * get a unique id for ChunkGroup, made up of its member Chunk id's
	 * @returns {string} a unique concatenation of chunk ids
	 */
	get id() {
		return Array.from(this.chunks, x => x.id).join("+");
	}

	/**
	 * Performs an unshift of a specific chunk
	 * @param {Chunk} chunk chunk being unshifted
	 * @returns {boolean} returns true if attempted chunk shift is accepted
	 */
	unshiftChunk(chunk) {
		const oldIdx = this.chunks.indexOf(chunk);
		if (oldIdx > 0) {
			this.chunks.splice(oldIdx, 1);
			this.chunks.unshift(chunk);
		} else if (oldIdx < 0) {
			this.chunks.unshift(chunk);
			return true;
		}
		return false;
	}

	/**
	 * inserts a chunk before another existing chunk in group
	 * @param {Chunk} chunk Chunk being inserted
	 * @param {Chunk} before Placeholder/target chunk marking new chunk insertion point
	 * @returns {boolean} return true if insertion was successful
	 */
	insertChunk(chunk, before) {
		const oldIdx = this.chunks.indexOf(chunk);
		const idx = this.chunks.indexOf(before);
		if (idx < 0) {
			throw new Error("before chunk not found");
		}
		if (oldIdx >= 0 && oldIdx > idx) {
			this.chunks.splice(oldIdx, 1);
			this.chunks.splice(idx, 0, chunk);
		} else if (oldIdx < 0) {
			this.chunks.splice(idx, 0, chunk);
			return true;
		}
		return false;
	}

	/**
	 * add a chunk into ChunkGroup. Is pushed on or prepended
	 * @param {Chunk} chunk chunk being pushed into ChunkGroupS
	 * @returns {boolean} returns true if chunk addition was successful.
	 */
	pushChunk(chunk) {
		const oldIdx = this.chunks.indexOf(chunk);
		if (oldIdx >= 0) {
			return false;
		}
		this.chunks.push(chunk);
		return true;
	}

	/**
	 * @param {Chunk} oldChunk chunk to be replaced
	 * @param {Chunk} newChunk New chunk that will be replaced with
	 * @returns {boolean | undefined} returns true if the replacement was successful
	 */
	replaceChunk(oldChunk, newChunk) {
		const oldIdx = this.chunks.indexOf(oldChunk);
		if (oldIdx < 0) return false;
		const newIdx = this.chunks.indexOf(newChunk);
		if (newIdx < 0) {
			this.chunks[oldIdx] = newChunk;
			return true;
		}
		if (newIdx < oldIdx) {
			this.chunks.splice(oldIdx, 1);
			return true;
		} else if (newIdx !== oldIdx) {
			this.chunks[oldIdx] = newChunk;
			this.chunks.splice(newIdx, 1);
			return true;
		}
	}

	/**
	 * @param {Chunk} chunk chunk to remove
	 * @returns {boolean} returns true if chunk was removed
	 */
	removeChunk(chunk) {
		const idx = this.chunks.indexOf(chunk);
		if (idx >= 0) {
			this.chunks.splice(idx, 1);
			return true;
		}
		return false;
	}

	/**
	 * @returns {boolean} true, when this chunk group will be loaded on initial page load
	 */
	isInitial() {
		return false;
	}

	/**
	 * @param {ChunkGroup} group chunk group to add
	 * @returns {boolean} returns true if chunk group was added
	 */
	addChild(group) {
		const size = this._children.size;
		this._children.add(group);
		return size !== this._children.size;
	}

	/**
	 * @returns {ChunkGroup[]} returns the children of this group
	 */
	getChildren() {
		return this._children.getFromCache(getArray);
	}

	getNumberOfChildren() {
		return this._children.size;
	}

	get childrenIterable() {
		return this._children;
	}

	/**
	 * @param {ChunkGroup} group the chunk group to remove
	 * @returns {boolean} returns true if the chunk group was removed
	 */
	removeChild(group) {
		if (!this._children.has(group)) {
			return false;
		}

		this._children.delete(group);
		group.removeParent(this);
		return true;
	}

	/**
	 * @param {ChunkGroup} parentChunk the parent group to be added into
	 * @returns {boolean} returns true if this chunk group was added to the parent group
	 */
	addParent(parentChunk) {
		if (!this._parents.has(parentChunk)) {
			this._parents.add(parentChunk);
			return true;
		}
		return false;
	}

	/**
	 * @returns {ChunkGroup[]} returns the parents of this group
	 */
	getParents() {
		return this._parents.getFromCache(getArray);
	}

	getNumberOfParents() {
		return this._parents.size;
	}

	/**
	 * @param {ChunkGroup} parent the parent group
	 * @returns {boolean} returns true if the parent group contains this group
	 */
	hasParent(parent) {
		return this._parents.has(parent);
	}

	get parentsIterable() {
		return this._parents;
	}

	/**
	 * @param {ChunkGroup} chunkGroup the parent group
	 * @returns {boolean} returns true if this group has been removed from the parent
	 */
	removeParent(chunkGroup) {
		if (this._parents.delete(chunkGroup)) {
			chunkGroup.removeChild(this);
			return true;
		}
		return false;
	}

	/**
	 * @param {Entrypoint} entrypoint entrypoint to add
	 * @returns {boolean} returns true if entrypoint was added
	 */
	addAsyncEntrypoint(entrypoint) {
		const size = this._asyncEntrypoints.size;
		this._asyncEntrypoints.add(entrypoint);
		return size !== this._asyncEntrypoints.size;
	}

	get asyncEntrypointsIterable() {
		return this._asyncEntrypoints;
	}

	/**
	 * @returns {Array<AsyncDependenciesBlock>} an array containing the blocks
	 */
	getBlocks() {
		return this._blocks.getFromCache(getArray);
	}

	getNumberOfBlocks() {
		return this._blocks.size;
	}

	/**
	 * @param {AsyncDependenciesBlock} block block
	 * @returns {boolean} true, if block exists
	 */
	hasBlock(block) {
		return this._blocks.has(block);
	}

	/**
	 * @returns {Iterable<AsyncDependenciesBlock>} blocks
	 */
	get blocksIterable() {
		return this._blocks;
	}

	/**
	 * @param {AsyncDependenciesBlock} block a block
	 * @returns {boolean} false, if block was already added
	 */
	addBlock(block) {
		if (!this._blocks.has(block)) {
			this._blocks.add(block);
			return true;
		}
		return false;
	}

	/**
	 * @param {Module | null} module origin module
	 * @param {DependencyLocation} loc location of the reference in the origin module
	 * @param {string} request request name of the reference
	 * @returns {void}
	 */
	addOrigin(module, loc, request) {
		this.origins.push({
			module,
			loc,
			request
		});
	}

	/**
	 * @returns {string[]} the files contained this chunk group
	 */
	getFiles() {
		const files = new Set();

		for (const chunk of this.chunks) {
			for (const file of chunk.files) {
				files.add(file);
			}
		}

		return Array.from(files);
	}

	/**
	 * @returns {void}
	 */
	remove() {
		// cleanup parents
		for (const parentChunkGroup of this._parents) {
			// remove this chunk from its parents
			parentChunkGroup._children.delete(this);

			// cleanup "sub chunks"
			for (const chunkGroup of this._children) {
				/**
				 * remove this chunk as "intermediary" and connect
				 * it "sub chunks" and parents directly
				 */
				// add parent to each "sub chunk"
				chunkGroup.addParent(parentChunkGroup);
				// add "sub chunk" to parent
				parentChunkGroup.addChild(chunkGroup);
			}
		}

		/**
		 * we need to iterate again over the children
		 * to remove this from the child's parents.
		 * This can not be done in the above loop
		 * as it is not guaranteed that `this._parents` contains anything.
		 */
		for (const chunkGroup of this._children) {
			// remove this as parent of every "sub chunk"
			chunkGroup._parents.delete(this);
		}

		// remove chunks
		for (const chunk of this.chunks) {
			chunk.removeGroup(this);
		}
	}

	sortItems() {
		this.origins.sort(sortOrigin);
	}

	/**
	 * Sorting predicate which allows current ChunkGroup to be compared against another.
	 * Sorting values are based off of number of chunks in ChunkGroup.
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {ChunkGroup} otherGroup the chunkGroup to compare this against
	 * @returns {-1|0|1} sort position for comparison
	 */
	compareTo(chunkGraph, otherGroup) {
		if (this.chunks.length > otherGroup.chunks.length) return -1;
		if (this.chunks.length < otherGroup.chunks.length) return 1;
		return compareIterables(compareChunks(chunkGraph))(
			this.chunks,
			otherGroup.chunks
		);
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @returns {Record<string, ChunkGroup[]>} mapping from children type to ordered list of ChunkGroups
	 */
	getChildrenByOrders(moduleGraph, chunkGraph) {
		/** @type {Map<string, {order: number, group: ChunkGroup}[]>} */
		const lists = new Map();
		for (const childGroup of this._children) {
			for (const key of Object.keys(childGroup.options)) {
				if (key.endsWith("Order")) {
					const name = key.slice(0, key.length - "Order".length);
					let list = lists.get(name);
					if (list === undefined) {
						lists.set(name, (list = []));
					}
					list.push({
						order:
							/** @type {number} */
							(
								childGroup.options[/** @type {keyof ChunkGroupOptions} */ (key)]
							),
						group: childGroup
					});
				}
			}
		}
		/** @type {Record<string, ChunkGroup[]>} */
		const result = Object.create(null);
		for (const [name, list] of lists) {
			list.sort((a, b) => {
				const cmp = b.order - a.order;
				if (cmp !== 0) return cmp;
				return a.group.compareTo(chunkGraph, b.group);
			});
			result[name] = list.map(i => i.group);
		}
		return result;
	}

	/**
	 * Sets the top-down index of a module in this ChunkGroup
	 * @param {Module} module module for which the index should be set
	 * @param {number} index the index of the module
	 * @returns {void}
	 */
	setModulePreOrderIndex(module, index) {
		this._modulePreOrderIndices.set(module, index);
	}

	/**
	 * Gets the top-down index of a module in this ChunkGroup
	 * @param {Module} module the module
	 * @returns {number | undefined} index
	 */
	getModulePreOrderIndex(module) {
		return this._modulePreOrderIndices.get(module);
	}

	/**
	 * Sets the bottom-up index of a module in this ChunkGroup
	 * @param {Module} module module for which the index should be set
	 * @param {number} index the index of the module
	 * @returns {void}
	 */
	setModulePostOrderIndex(module, index) {
		this._modulePostOrderIndices.set(module, index);
	}

	/**
	 * Gets the bottom-up index of a module in this ChunkGroup
	 * @param {Module} module the module
	 * @returns {number | undefined} index
	 */
	getModulePostOrderIndex(module) {
		return this._modulePostOrderIndices.get(module);
	}

	/* istanbul ignore next */
	checkConstraints() {
		const chunk = this;
		for (const child of chunk._children) {
			if (!child._parents.has(chunk)) {
				throw new Error(
					`checkConstraints: child missing parent ${chunk.debugId} -> ${child.debugId}`
				);
			}
		}
		for (const parentChunk of chunk._parents) {
			if (!parentChunk._children.has(chunk)) {
				throw new Error(
					`checkConstraints: parent missing child ${parentChunk.debugId} <- ${chunk.debugId}`
				);
			}
		}
	}
}

ChunkGroup.prototype.getModuleIndex = util.deprecate(
	ChunkGroup.prototype.getModulePreOrderIndex,
	"ChunkGroup.getModuleIndex was renamed to getModulePreOrderIndex",
	"DEP_WEBPACK_CHUNK_GROUP_GET_MODULE_INDEX"
);

ChunkGroup.prototype.getModuleIndex2 = util.deprecate(
	ChunkGroup.prototype.getModulePostOrderIndex,
	"ChunkGroup.getModuleIndex2 was renamed to getModulePostOrderIndex",
	"DEP_WEBPACK_CHUNK_GROUP_GET_MODULE_INDEX_2"
);

module.exports = ChunkGroup;
