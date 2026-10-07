/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const SortableSet = require("./util/SortableSet");
const {
	compareChunks,
	compareIterables,
	compareLocations
} = require("./util/comparators");

/** @typedef {import("./AsyncDependenciesBlock")} AsyncDependenciesBlock */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./Entrypoint")} Entrypoint */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./ModuleGraph")} ModuleGraph */

/** @typedef {{ module: Module | null, loc: DependencyLocation, request: string }} OriginRecord */

/**
 * Describes the scheduling hints that can be attached to a chunk group.
 * These values influence how child groups are ordered for preload/prefetch
 * and how their fetch priority is exposed to runtime code.
 * @typedef {object} RawChunkGroupOptions
 * @property {number=} preloadOrder
 * @property {number=} prefetchOrder
 * @property {("low" | "high" | "auto")=} fetchPriority
 */

/** @typedef {RawChunkGroupOptions & { name?: string | null }} ChunkGroupOptions */

let debugId = 5000;

/**
 * Materializes a sortable set as an array without changing its current order.
 * Used with `SortableSet` caches that expect a stable array result.
 * @template T
 * @param {SortableSet<T>} set set to convert to array.
 * @returns {T[]} the array format of existing set
 */
const getArray = (set) => [...set];

/**
 * A convenience method used to sort chunks based on their id's
 * @param {ChunkGroup} a first sorting comparator
 * @param {ChunkGroup} b second sorting comparator
 * @returns {1 | 0 | -1} a sorting index to determine order
 */
const sortById = (a, b) => {
	if (a.id < b.id) return -1;
	if (b.id < a.id) return 1;
	return 0;
};

/**
 * Orders origin records by referencing module and then by source location.
 * This keeps origin metadata deterministic for hashing and diagnostics.
 * @param {OriginRecord} a the first comparator in sort
 * @param {OriginRecord} b the second comparator in sort
 * @returns {1 | -1 | 0} returns sorting order as index
 */
const sortOrigin = (a, b) => {
	const aIdent = a.module ? a.module.identifier() : "";
	const bIdent = b.module ? b.module.identifier() : "";
	if (aIdent < bIdent) return -1;
	if (aIdent > bIdent) return 1;
	return compareLocations(a.loc, b.loc);
};

/**
 * Represents a connected group of chunks along with the parent/child
 * relationships, async blocks, and traversal metadata webpack tracks for it.
 */
class ChunkGroup {
	/**
	 * Creates a chunk group and initializes the relationship sets and ordering
	 * metadata used while building and optimizing the chunk graph.
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
		/** @type {ChunkGroupOptions} */
		this.options = options;
		/** @type {SortableSet<ChunkGroup>} */
		this._children = new SortableSet(undefined, sortById);
		/** @type {SortableSet<ChunkGroup>} */
		this._parents = new SortableSet(undefined, sortById);
		/** @type {SortableSet<ChunkGroup>} */
		this._asyncEntrypoints = new SortableSet(undefined, sortById);
		/** @type {SortableSet<AsyncDependenciesBlock>} */
		this._blocks = new SortableSet();
		/** @type {Chunk[]} */
		this.chunks = [];
		/** @type {OriginRecord[]} */
		this.origins = [];

		/** @typedef {Map<Module, number>} OrderIndices */

		/** Indices in top-down order */
		/**
		 * @private
		 * @type {OrderIndices}
		 */
		this._modulePreOrderIndices = new Map();
		/** Indices in bottom-up order */
		/**
		 * @private
		 * @type {OrderIndices}
		 */
		this._modulePostOrderIndices = new Map();
		/** @type {number | undefined} */
		this.index = undefined;
	}

	/**
	 * Merges additional options into the chunk group.
	 * Order-based options are combined by taking the higher priority, while
	 * unsupported conflicts surface as an explicit error.
	 * @param {ChunkGroupOptions} options the chunkGroup options passed to addOptions
	 * @returns {void}
	 */
	addOptions(options) {
		for (const key of /** @type {(keyof ChunkGroupOptions)[]} */ (
			Object.keys(options)
		)) {
			if (this.options[key] === undefined) {
				/** @type {ChunkGroupOptions[keyof ChunkGroupOptions]} */
				(this.options[key]) = options[key];
			} else if (this.options[key] !== options[key]) {
				if (key.endsWith("Order")) {
					const orderKey =
						/** @type {Exclude<keyof ChunkGroupOptions, "name" | "fetchPriority">} */
						(key);

					this.options[orderKey] = Math.max(
						/** @type {number} */
						(this.options[orderKey]),
						/** @type {number} */
						(options[orderKey])
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
	 * Returns the configured name of the chunk group, if one was assigned.
	 * @returns {ChunkGroupOptions["name"]} returns the ChunkGroup name
	 */
	get name() {
		return this.options.name;
	}

	/**
	 * Updates the configured name of the chunk group.
	 * @param {string | undefined} value the new name for ChunkGroup
	 * @returns {void}
	 */
	set name(value) {
		this.options.name = value;
	}

	/* istanbul ignore next */
	/**
	 * Returns a debug-only identifier derived from the group's member chunk
	 * debug ids. This is primarily useful in diagnostics and assertions.
	 * @returns {string} a unique concatenation of chunk debugId's
	 */
	get debugId() {
		return Array.from(this.chunks, (x) => x.debugId).join("+");
	}

	/**
	 * Returns an identifier derived from the ids of the chunks currently in
	 * the group.
	 * @returns {string} a unique concatenation of chunk ids
	 */
	get id() {
		return Array.from(this.chunks, (x) => x.id).join("+");
	}

	/**
	 * Moves a chunk to the front of the group or inserts it when it is not
	 * already present.
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
	 * Inserts a chunk directly before another chunk that already belongs to the
	 * group, preserving the rest of the ordering.
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
	 * Appends a chunk to the group when it is not already a member.
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
	 * Replaces one member chunk with another while preserving the group's
	 * ordering and avoiding duplicates.
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
	 * Removes a chunk from this group.
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
	 * Indicates whether this chunk group is loaded as part of the initial page
	 * load instead of being created lazily.
	 * @returns {boolean} true, when this chunk group will be loaded on initial page load
	 */
	isInitial() {
		return false;
	}

	/**
	 * Adds a child chunk group to the current group.
	 * @param {ChunkGroup} group chunk group to add
	 * @returns {boolean} returns true if chunk group was added
	 */
	addChild(group) {
		const size = this._children.size;
		this._children.add(group);
		return size !== this._children.size;
	}

	/**
	 * Returns the child chunk groups reachable from this group.
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
	 * Removes a child chunk group and clears the corresponding parent link on
	 * the removed child.
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
	 * Records a parent chunk group relationship.
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
	 * Returns the parent chunk groups that can lead to this group.
	 * @returns {ChunkGroup[]} returns the parents of this group
	 */
	getParents() {
		return this._parents.getFromCache(getArray);
	}

	getNumberOfParents() {
		return this._parents.size;
	}

	/**
	 * Checks whether the provided group is registered as a parent.
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
	 * Removes a parent chunk group and clears the reverse child relationship.
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
	 * Registers an async entrypoint that is rooted in this chunk group.
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
	 * Returns the async dependency blocks that create or reference this group.
	 * @returns {AsyncDependenciesBlock[]} an array containing the blocks
	 */
	getBlocks() {
		return this._blocks.getFromCache(getArray);
	}

	getNumberOfBlocks() {
		return this._blocks.size;
	}

	/**
	 * Checks whether an async dependency block is associated with this group.
	 * @param {AsyncDependenciesBlock} block block
	 * @returns {boolean} true, if block exists
	 */
	hasBlock(block) {
		return this._blocks.has(block);
	}

	/**
	 * Exposes the group's async dependency blocks as an iterable.
	 * @returns {Iterable<AsyncDependenciesBlock>} blocks
	 */
	get blocksIterable() {
		return this._blocks;
	}

	/**
	 * Associates an async dependency block with this chunk group.
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
	 * Records where this chunk group originated from in user code.
	 * The origin is used for diagnostics, ordering, and reporting.
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
	 * Collects the emitted files produced by every chunk in the group.
	 * @returns {string[]} the files contained this chunk group
	 */
	getFiles() {
		/** @type {Set<string>} */
		const files = new Set();

		for (const chunk of this.chunks) {
			for (const file of chunk.files) {
				files.add(file);
			}
		}

		return [...files];
	}

	/**
	 * Disconnects this group from its parents, children, and chunks.
	 * Child groups are reconnected to this group's parents so the surrounding
	 * graph remains intact after removal.
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
	 * @returns {-1 | 0 | 1} sort position for comparison
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
	 * Groups child chunk groups by their `*Order` options and sorts each group
	 * by descending order and deterministic chunk-group comparison.
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @returns {Record<string, ChunkGroup[]>} mapping from children type to ordered list of ChunkGroups
	 */
	getChildrenByOrders(moduleGraph, chunkGraph) {
		/** @type {Map<string, { order: number, group: ChunkGroup }[]>} */
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
			result[name] = list.map((i) => i.group);
		}
		return result;
	}

	/**
	 * Stores the module's top-down traversal index within this group.
	 * @param {Module} module module for which the index should be set
	 * @param {number} index the index of the module
	 * @returns {void}
	 */
	setModulePreOrderIndex(module, index) {
		this._modulePreOrderIndices.set(module, index);
	}

	/**
	 * Returns the module's top-down traversal index within this group.
	 * @param {Module} module the module
	 * @returns {number | undefined} index
	 */
	getModulePreOrderIndex(module) {
		return this._modulePreOrderIndices.get(module);
	}

	/**
	 * Stores the module's bottom-up traversal index within this group.
	 * @param {Module} module module for which the index should be set
	 * @param {number} index the index of the module
	 * @returns {void}
	 */
	setModulePostOrderIndex(module, index) {
		this._modulePostOrderIndices.set(module, index);
	}

	/**
	 * Returns the module's bottom-up traversal index within this group.
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
