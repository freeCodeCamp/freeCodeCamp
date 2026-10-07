/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const FileSystemInfo = require("../FileSystemInfo");
const ProgressPlugin = require("../ProgressPlugin");
const { formatSize } = require("../SizeFormatHelpers");
const SerializerMiddleware = require("../serialization/SerializerMiddleware");
const LazySet = require("../util/LazySet");
const makeSerializable = require("../util/makeSerializable");
const memoize = require("../util/memoize");
const {
	createFileSerializer,
	NOT_SERIALIZABLE
} = require("../util/serialization");

/** @typedef {import("../../declarations/WebpackOptions").SnapshotOptions} SnapshotOptions */
/** @typedef {import("../Cache").Etag} Etag */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../FileSystemInfo").ResolveBuildDependenciesResult} ResolveBuildDependenciesResult */
/** @typedef {import("../FileSystemInfo").Snapshot} Snapshot */
/** @typedef {import("../logging/Logger").Logger} Logger */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/fs").IntermediateFileSystem} IntermediateFileSystem */

/** @typedef {Map<string, string | false>} ResolveResults */
/** @typedef {Set<string>} Items */
/** @typedef {Set<string>} BuildDependencies */
/** @typedef {Map<string, PackItemInfo>} ItemInfo */

class PackContainer {
	/**
	 * @param {object} data stored data
	 * @param {string} version version identifier
	 * @param {Snapshot} buildSnapshot snapshot of all build dependencies
	 * @param {BuildDependencies} buildDependencies list of all unresolved build dependencies captured
	 * @param {ResolveResults} resolveResults result of the resolved build dependencies
	 * @param {Snapshot} resolveBuildDependenciesSnapshot snapshot of the dependencies of the build dependencies resolving
	 */
	constructor(
		data,
		version,
		buildSnapshot,
		buildDependencies,
		resolveResults,
		resolveBuildDependenciesSnapshot
	) {
		this.data = data;
		this.version = version;
		this.buildSnapshot = buildSnapshot;
		this.buildDependencies = buildDependencies;
		this.resolveResults = resolveResults;
		this.resolveBuildDependenciesSnapshot = resolveBuildDependenciesSnapshot;
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize({ write, writeLazy }) {
		write(this.version);
		write(this.buildSnapshot);
		write(this.buildDependencies);
		write(this.resolveResults);
		write(this.resolveBuildDependenciesSnapshot);
		/** @type {NonNullable<ObjectSerializerContext["writeLazy"]>} */
		(writeLazy)(this.data);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize({ read }) {
		this.version = read();
		this.buildSnapshot = read();
		this.buildDependencies = read();
		this.resolveResults = read();
		this.resolveBuildDependenciesSnapshot = read();
		this.data = read();
	}
}

makeSerializable(
	PackContainer,
	"webpack/lib/cache/PackFileCacheStrategy",
	"PackContainer"
);

const MIN_CONTENT_SIZE = 1024 * 1024; // 1 MB
const CONTENT_COUNT_TO_MERGE = 10;
const MIN_ITEMS_IN_FRESH_PACK = 100;
const MAX_ITEMS_IN_FRESH_PACK = 50000;
const MAX_TIME_IN_FRESH_PACK = 1 * 60 * 1000; // 1 min

class PackItemInfo {
	/**
	 * @param {string} identifier identifier of item
	 * @param {string | null | undefined} etag etag of item
	 * @param {any} value fresh value of item
	 */
	constructor(identifier, etag, value) {
		this.identifier = identifier;
		this.etag = etag;
		this.location = -1;
		this.lastAccess = Date.now();
		this.freshValue = value;
	}
}

class Pack {
	/**
	 * @param {Logger} logger a logger
	 * @param {number} maxAge max age of cache items
	 */
	constructor(logger, maxAge) {
		/** @type {ItemInfo} */
		this.itemInfo = new Map();
		/** @type {(string | undefined)[]} */
		this.requests = [];
		this.requestsTimeout = undefined;
		/** @type {ItemInfo} */
		this.freshContent = new Map();
		/** @type {(undefined | PackContent)[]} */
		this.content = [];
		this.invalid = false;
		this.logger = logger;
		this.maxAge = maxAge;
	}

	/**
	 * @param {string} identifier identifier
	 */
	_addRequest(identifier) {
		this.requests.push(identifier);
		if (this.requestsTimeout === undefined) {
			this.requestsTimeout = setTimeout(() => {
				this.requests.push(undefined);
				this.requestsTimeout = undefined;
			}, MAX_TIME_IN_FRESH_PACK);
			if (this.requestsTimeout.unref) this.requestsTimeout.unref();
		}
	}

	stopCapturingRequests() {
		if (this.requestsTimeout !== undefined) {
			clearTimeout(this.requestsTimeout);
			this.requestsTimeout = undefined;
		}
	}

	/**
	 * @param {string} identifier unique name for the resource
	 * @param {string | null} etag etag of the resource
	 * @returns {any} cached content
	 */
	get(identifier, etag) {
		const info = this.itemInfo.get(identifier);
		this._addRequest(identifier);
		if (info === undefined) {
			return;
		}
		if (info.etag !== etag) return null;
		info.lastAccess = Date.now();
		const loc = info.location;
		if (loc === -1) {
			return info.freshValue;
		}
		if (!this.content[loc]) {
			return;
		}
		return /** @type {PackContent} */ (this.content[loc]).get(identifier);
	}

	/**
	 * @param {string} identifier unique name for the resource
	 * @param {string | null} etag etag of the resource
	 * @param {any} data cached content
	 * @returns {void}
	 */
	set(identifier, etag, data) {
		if (!this.invalid) {
			this.invalid = true;
			this.logger.log(`Pack got invalid because of write to: ${identifier}`);
		}
		const info = this.itemInfo.get(identifier);
		if (info === undefined) {
			const newInfo = new PackItemInfo(identifier, etag, data);
			this.itemInfo.set(identifier, newInfo);
			this._addRequest(identifier);
			this.freshContent.set(identifier, newInfo);
		} else {
			const loc = info.location;
			if (loc >= 0) {
				this._addRequest(identifier);
				this.freshContent.set(identifier, info);
				const content = /** @type {PackContent} */ (this.content[loc]);
				content.delete(identifier);
				if (content.items.size === 0) {
					this.content[loc] = undefined;
					this.logger.debug("Pack %d got empty and is removed", loc);
				}
			}
			info.freshValue = data;
			info.lastAccess = Date.now();
			info.etag = etag;
			info.location = -1;
		}
	}

	getContentStats() {
		let count = 0;
		let size = 0;
		for (const content of this.content) {
			if (content !== undefined) {
				count++;
				const s = content.getSize();
				if (s > 0) {
					size += s;
				}
			}
		}
		return { count, size };
	}

	/**
	 * @returns {number} new location of data entries
	 */
	_findLocation() {
		let i;
		for (i = 0; i < this.content.length && this.content[i] !== undefined; i++);
		return i;
	}

	/**
	 * @private
	 * @param {Items} items items
	 * @param {Items} usedItems used items
	 * @param {number} newLoc new location
	 */
	_gcAndUpdateLocation(items, usedItems, newLoc) {
		let count = 0;
		let lastGC;
		const now = Date.now();
		for (const identifier of items) {
			const info = /** @type {PackItemInfo} */ (this.itemInfo.get(identifier));
			if (now - info.lastAccess > this.maxAge) {
				this.itemInfo.delete(identifier);
				items.delete(identifier);
				usedItems.delete(identifier);
				count++;
				lastGC = identifier;
			} else {
				info.location = newLoc;
			}
		}
		if (count > 0) {
			this.logger.log(
				"Garbage Collected %d old items at pack %d (%d items remaining) e. g. %s",
				count,
				newLoc,
				items.size,
				lastGC
			);
		}
	}

	_persistFreshContent() {
		/** @typedef {{ items: Items, map: Map<string, any>, loc: number }} PackItem */
		const itemsCount = this.freshContent.size;
		if (itemsCount > 0) {
			const packCount = Math.ceil(itemsCount / MAX_ITEMS_IN_FRESH_PACK);
			const itemsPerPack = Math.ceil(itemsCount / packCount);
			/** @type {PackItem[]} */
			const packs = [];
			let i = 0;
			let ignoreNextTimeTick = false;
			const createNextPack = () => {
				const loc = this._findLocation();
				this.content[loc] = /** @type {EXPECTED_ANY} */ (null); // reserve
				/** @type {PackItem} */
				const pack = {
					items: new Set(),
					map: new Map(),
					loc
				};
				packs.push(pack);
				return pack;
			};
			let pack = createNextPack();
			if (this.requestsTimeout !== undefined)
				clearTimeout(this.requestsTimeout);
			for (const identifier of this.requests) {
				if (identifier === undefined) {
					if (ignoreNextTimeTick) {
						ignoreNextTimeTick = false;
					} else if (pack.items.size >= MIN_ITEMS_IN_FRESH_PACK) {
						i = 0;
						pack = createNextPack();
					}
					continue;
				}
				const info = this.freshContent.get(identifier);
				if (info === undefined) continue;
				pack.items.add(identifier);
				pack.map.set(identifier, info.freshValue);
				info.location = pack.loc;
				info.freshValue = undefined;
				this.freshContent.delete(identifier);
				if (++i > itemsPerPack) {
					i = 0;
					pack = createNextPack();
					ignoreNextTimeTick = true;
				}
			}
			this.requests.length = 0;
			for (const pack of packs) {
				this.content[pack.loc] = new PackContent(
					pack.items,
					new Set(pack.items),
					new PackContentItems(pack.map)
				);
			}
			this.logger.log(
				`${itemsCount} fresh items in cache put into pack ${
					packs.length > 1
						? packs
								.map(pack => `${pack.loc} (${pack.items.size} items)`)
								.join(", ")
						: packs[0].loc
				}`
			);
		}
	}

	/**
	 * Merges small content files to a single content file
	 */
	_optimizeSmallContent() {
		// 1. Find all small content files
		// Treat unused content files separately to avoid
		// a merge-split cycle
		/** @type {number[]} */
		const smallUsedContents = [];
		/** @type {number} */
		let smallUsedContentSize = 0;
		/** @type {number[]} */
		const smallUnusedContents = [];
		/** @type {number} */
		let smallUnusedContentSize = 0;
		for (let i = 0; i < this.content.length; i++) {
			const content = this.content[i];
			if (content === undefined) continue;
			if (content.outdated) continue;
			const size = content.getSize();
			if (size < 0 || size > MIN_CONTENT_SIZE) continue;
			if (content.used.size > 0) {
				smallUsedContents.push(i);
				smallUsedContentSize += size;
			} else {
				smallUnusedContents.push(i);
				smallUnusedContentSize += size;
			}
		}

		// 2. Check if minimum number is reached
		let mergedIndices;
		if (
			smallUsedContents.length >= CONTENT_COUNT_TO_MERGE ||
			smallUsedContentSize > MIN_CONTENT_SIZE
		) {
			mergedIndices = smallUsedContents;
		} else if (
			smallUnusedContents.length >= CONTENT_COUNT_TO_MERGE ||
			smallUnusedContentSize > MIN_CONTENT_SIZE
		) {
			mergedIndices = smallUnusedContents;
		} else return;

		/** @type {PackContent[] } */
		const mergedContent = [];

		// 3. Remove old content entries
		for (const i of mergedIndices) {
			mergedContent.push(/** @type {PackContent} */ (this.content[i]));
			this.content[i] = undefined;
		}

		// 4. Determine merged items
		/** @type {Items} */
		const mergedItems = new Set();
		/** @type {Items} */
		const mergedUsedItems = new Set();
		/** @type {(function(Map<string, any>): Promise<void>)[]} */
		const addToMergedMap = [];
		for (const content of mergedContent) {
			for (const identifier of content.items) {
				mergedItems.add(identifier);
			}
			for (const identifier of content.used) {
				mergedUsedItems.add(identifier);
			}
			addToMergedMap.push(async map => {
				// unpack existing content
				// after that values are accessible in .content
				await content.unpack(
					"it should be merged with other small pack contents"
				);
				for (const [identifier, value] of /** @type {Content} */ (
					content.content
				)) {
					map.set(identifier, value);
				}
			});
		}

		// 5. GC and update location of merged items
		const newLoc = this._findLocation();
		this._gcAndUpdateLocation(mergedItems, mergedUsedItems, newLoc);

		// 6. If not empty, store content somewhere
		if (mergedItems.size > 0) {
			this.content[newLoc] = new PackContent(
				mergedItems,
				mergedUsedItems,
				memoize(async () => {
					/** @type {Content} */
					const map = new Map();
					await Promise.all(addToMergedMap.map(fn => fn(map)));
					return new PackContentItems(map);
				})
			);
			this.logger.log(
				"Merged %d small files with %d cache items into pack %d",
				mergedContent.length,
				mergedItems.size,
				newLoc
			);
		}
	}

	/**
	 * Split large content files with used and unused items
	 * into two parts to separate used from unused items
	 */
	_optimizeUnusedContent() {
		// 1. Find a large content file with used and unused items
		for (let i = 0; i < this.content.length; i++) {
			const content = this.content[i];
			if (content === undefined) continue;
			const size = content.getSize();
			if (size < MIN_CONTENT_SIZE) continue;
			const used = content.used.size;
			const total = content.items.size;
			if (used > 0 && used < total) {
				// 2. Remove this content
				this.content[i] = undefined;

				// 3. Determine items for the used content file
				const usedItems = new Set(content.used);
				const newLoc = this._findLocation();
				this._gcAndUpdateLocation(usedItems, usedItems, newLoc);

				// 4. Create content file for used items
				if (usedItems.size > 0) {
					this.content[newLoc] = new PackContent(
						usedItems,
						new Set(usedItems),
						async () => {
							await content.unpack(
								"it should be splitted into used and unused items"
							);
							const map = new Map();
							for (const identifier of usedItems) {
								map.set(
									identifier,
									/** @type {Content} */
									(content.content).get(identifier)
								);
							}
							return new PackContentItems(map);
						}
					);
				}

				// 5. Determine items for the unused content file
				const unusedItems = new Set(content.items);
				const usedOfUnusedItems = new Set();
				for (const identifier of usedItems) {
					unusedItems.delete(identifier);
				}
				const newUnusedLoc = this._findLocation();
				this._gcAndUpdateLocation(unusedItems, usedOfUnusedItems, newUnusedLoc);

				// 6. Create content file for unused items
				if (unusedItems.size > 0) {
					this.content[newUnusedLoc] = new PackContent(
						unusedItems,
						usedOfUnusedItems,
						async () => {
							await content.unpack(
								"it should be splitted into used and unused items"
							);
							const map = new Map();
							for (const identifier of unusedItems) {
								map.set(
									identifier,
									/** @type {Content} */
									(content.content).get(identifier)
								);
							}
							return new PackContentItems(map);
						}
					);
				}

				this.logger.log(
					"Split pack %d into pack %d with %d used items and pack %d with %d unused items",
					i,
					newLoc,
					usedItems.size,
					newUnusedLoc,
					unusedItems.size
				);

				// optimizing only one of them is good enough and
				// reduces the amount of serialization needed
				return;
			}
		}
	}

	/**
	 * Find the content with the oldest item and run GC on that.
	 * Only runs for one content to avoid large invalidation.
	 */
	_gcOldestContent() {
		/** @type {PackItemInfo | undefined} */
		let oldest;
		for (const info of this.itemInfo.values()) {
			if (oldest === undefined || info.lastAccess < oldest.lastAccess) {
				oldest = info;
			}
		}
		if (
			Date.now() - /** @type {PackItemInfo} */ (oldest).lastAccess >
			this.maxAge
		) {
			const loc = /** @type {PackItemInfo} */ (oldest).location;
			if (loc < 0) return;
			const content = /** @type {PackContent} */ (this.content[loc]);
			const items = new Set(content.items);
			const usedItems = new Set(content.used);
			this._gcAndUpdateLocation(items, usedItems, loc);

			this.content[loc] =
				items.size > 0
					? new PackContent(items, usedItems, async () => {
							await content.unpack(
								"it contains old items that should be garbage collected"
							);
							const map = new Map();
							for (const identifier of items) {
								map.set(
									identifier,
									/** @type {Content} */
									(content.content).get(identifier)
								);
							}
							return new PackContentItems(map);
						})
					: undefined;
		}
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize({ write, writeSeparate }) {
		this._persistFreshContent();
		this._optimizeSmallContent();
		this._optimizeUnusedContent();
		this._gcOldestContent();
		for (const identifier of this.itemInfo.keys()) {
			write(identifier);
		}
		write(null); // null as marker of the end of keys
		for (const info of this.itemInfo.values()) {
			write(info.etag);
		}
		for (const info of this.itemInfo.values()) {
			write(info.lastAccess);
		}
		for (let i = 0; i < this.content.length; i++) {
			const content = this.content[i];
			if (content !== undefined) {
				write(content.items);
				content.writeLazy(lazy => writeSeparate(lazy, { name: `${i}` }));
			} else {
				write(undefined); // undefined marks an empty content slot
			}
		}
		write(null); // null as marker of the end of items
	}

	/**
	 * @param {ObjectDeserializerContext & { logger: Logger }} context context
	 */
	deserialize({ read, logger }) {
		this.logger = logger;
		{
			const items = [];
			let item = read();
			while (item !== null) {
				items.push(item);
				item = read();
			}
			this.itemInfo.clear();
			const infoItems = items.map(identifier => {
				const info = new PackItemInfo(identifier, undefined, undefined);
				this.itemInfo.set(identifier, info);
				return info;
			});
			for (const info of infoItems) {
				info.etag = read();
			}
			for (const info of infoItems) {
				info.lastAccess = read();
			}
		}
		this.content.length = 0;
		let items = read();
		while (items !== null) {
			if (items === undefined) {
				this.content.push(items);
			} else {
				const idx = this.content.length;
				const lazy = read();
				this.content.push(
					new PackContent(
						items,
						new Set(),
						lazy,
						logger,
						`${this.content.length}`
					)
				);
				for (const identifier of items) {
					/** @type {PackItemInfo} */
					(this.itemInfo.get(identifier)).location = idx;
				}
			}
			items = read();
		}
	}
}

makeSerializable(Pack, "webpack/lib/cache/PackFileCacheStrategy", "Pack");

/** @typedef {Map<string, any>} Content */

class PackContentItems {
	/**
	 * @param {Content} map items
	 */
	constructor(map) {
		this.map = map;
	}

	/**
	 * @param {ObjectSerializerContext & { snapshot: TODO, rollback: TODO, logger: Logger, profile: boolean | undefined  }} context context
	 */
	serialize({ write, snapshot, rollback, logger, profile }) {
		if (profile) {
			write(false);
			for (const [key, value] of this.map) {
				const s = snapshot();
				try {
					write(key);
					const start = process.hrtime();
					write(value);
					const durationHr = process.hrtime(start);
					const duration = durationHr[0] * 1000 + durationHr[1] / 1e6;
					if (duration > 1) {
						if (duration > 500)
							logger.error(`Serialization of '${key}': ${duration} ms`);
						else if (duration > 50)
							logger.warn(`Serialization of '${key}': ${duration} ms`);
						else if (duration > 10)
							logger.info(`Serialization of '${key}': ${duration} ms`);
						else if (duration > 5)
							logger.log(`Serialization of '${key}': ${duration} ms`);
						else logger.debug(`Serialization of '${key}': ${duration} ms`);
					}
				} catch (err) {
					rollback(s);
					if (err === NOT_SERIALIZABLE) continue;
					const msg = "Skipped not serializable cache item";
					const notSerializableErr = /** @type {Error} */ (err);
					if (notSerializableErr.message.includes("ModuleBuildError")) {
						logger.log(
							`${msg} (in build error): ${notSerializableErr.message}`
						);
						logger.debug(
							`${msg} '${key}' (in build error): ${notSerializableErr.stack}`
						);
					} else {
						logger.warn(`${msg}: ${notSerializableErr.message}`);
						logger.debug(`${msg} '${key}': ${notSerializableErr.stack}`);
					}
				}
			}
			write(null);
			return;
		}
		// Try to serialize all at once
		const s = snapshot();
		try {
			write(true);
			write(this.map);
		} catch (_err) {
			rollback(s);

			// Try to serialize each item on it's own
			write(false);
			for (const [key, value] of this.map) {
				const s = snapshot();
				try {
					write(key);
					write(value);
				} catch (err) {
					rollback(s);
					if (err === NOT_SERIALIZABLE) continue;
					const notSerializableErr = /** @type {Error} */ (err);
					logger.warn(
						`Skipped not serializable cache item '${key}': ${notSerializableErr.message}`
					);
					logger.debug(notSerializableErr.stack);
				}
			}
			write(null);
		}
	}

	/**
	 * @param {ObjectDeserializerContext & { logger: Logger, profile: boolean | undefined }} context context
	 */
	deserialize({ read, logger, profile }) {
		if (read()) {
			this.map = read();
		} else if (profile) {
			const map = new Map();
			let key = read();
			while (key !== null) {
				const start = process.hrtime();
				const value = read();
				const durationHr = process.hrtime(start);
				const duration = durationHr[0] * 1000 + durationHr[1] / 1e6;
				if (duration > 1) {
					if (duration > 100)
						logger.error(`Deserialization of '${key}': ${duration} ms`);
					else if (duration > 20)
						logger.warn(`Deserialization of '${key}': ${duration} ms`);
					else if (duration > 5)
						logger.info(`Deserialization of '${key}': ${duration} ms`);
					else if (duration > 2)
						logger.log(`Deserialization of '${key}': ${duration} ms`);
					else logger.debug(`Deserialization of '${key}': ${duration} ms`);
				}
				map.set(key, value);
				key = read();
			}
			this.map = map;
		} else {
			const map = new Map();
			let key = read();
			while (key !== null) {
				map.set(key, read());
				key = read();
			}
			this.map = map;
		}
	}
}

makeSerializable(
	PackContentItems,
	"webpack/lib/cache/PackFileCacheStrategy",
	"PackContentItems"
);

/** @typedef {(function(): Promise<PackContentItems> | PackContentItems)} LazyFn */

class PackContent {
	/*
		This class can be in these states:
		   |   this.lazy    | this.content | this.outdated | state
		A1 |   undefined    |     Map      |     false     | fresh content
		A2 |   undefined    |     Map      |     true      | (will not happen)
		B1 | lazy () => {}  |  undefined   |     false     | not deserialized
		B2 | lazy () => {}  |  undefined   |     true      | not deserialized, but some items has been removed
		C1 | lazy* () => {} |     Map      |     false     | deserialized
		C2 | lazy* () => {} |     Map      |     true      | deserialized, and some items has been removed

		this.used is a subset of this.items.
		this.items is a subset of this.content.keys() resp. this.lazy().map.keys()
		When this.outdated === false, this.items === this.content.keys() resp. this.lazy().map.keys()
		When this.outdated === true, this.items should be used to recreated this.lazy/this.content.
		When this.lazy and this.content is set, they contain the same data.
		this.get must only be called with a valid item from this.items.
		In state C this.lazy is unMemoized
	*/

	/**
	 * @param {Items} items keys
	 * @param {Items} usedItems used keys
	 * @param {PackContentItems | function(): Promise<PackContentItems>} dataOrFn sync or async content
	 * @param {Logger=} logger logger for logging
	 * @param {string=} lazyName name of dataOrFn for logging
	 */
	constructor(items, usedItems, dataOrFn, logger, lazyName) {
		this.items = items;
		/** @type {LazyFn | undefined} */
		this.lazy = typeof dataOrFn === "function" ? dataOrFn : undefined;
		/** @type {Content | undefined} */
		this.content = typeof dataOrFn === "function" ? undefined : dataOrFn.map;
		this.outdated = false;
		this.used = usedItems;
		this.logger = logger;
		this.lazyName = lazyName;
	}

	/**
	 * @param {string} identifier identifier
	 * @returns {string | Promise<string>} result
	 */
	get(identifier) {
		this.used.add(identifier);
		if (this.content) {
			return this.content.get(identifier);
		}

		const logger = /** @type {Logger} */ (this.logger);
		// We are in state B
		const { lazyName } = this;
		/** @type {string | undefined} */
		let timeMessage;
		if (lazyName) {
			// only log once
			this.lazyName = undefined;
			timeMessage = `restore cache content ${lazyName} (${formatSize(
				this.getSize()
			)})`;
			logger.log(
				`starting to restore cache content ${lazyName} (${formatSize(
					this.getSize()
				)}) because of request to: ${identifier}`
			);
			logger.time(timeMessage);
		}
		const value = /** @type {LazyFn} */ (this.lazy)();
		if ("then" in value) {
			return value.then(data => {
				const map = data.map;
				if (timeMessage) {
					logger.timeEnd(timeMessage);
				}
				// Move to state C
				this.content = map;
				this.lazy = SerializerMiddleware.unMemoizeLazy(
					/** @type {LazyFn} */
					(this.lazy)
				);
				return map.get(identifier);
			});
		}

		const map = value.map;
		if (timeMessage) {
			logger.timeEnd(timeMessage);
		}
		// Move to state C
		this.content = map;
		this.lazy = SerializerMiddleware.unMemoizeLazy(
			/** @type {LazyFn} */
			(this.lazy)
		);
		return map.get(identifier);
	}

	/**
	 * @param {string} reason explanation why unpack is necessary
	 * @returns {void | Promise<void>} maybe a promise if lazy
	 */
	unpack(reason) {
		if (this.content) return;

		const logger = /** @type {Logger} */ (this.logger);
		// Move from state B to C
		if (this.lazy) {
			const { lazyName } = this;
			/** @type {string | undefined} */
			let timeMessage;
			if (lazyName) {
				// only log once
				this.lazyName = undefined;
				timeMessage = `unpack cache content ${lazyName} (${formatSize(
					this.getSize()
				)})`;
				logger.log(
					`starting to unpack cache content ${lazyName} (${formatSize(
						this.getSize()
					)}) because ${reason}`
				);
				logger.time(timeMessage);
			}
			const value = this.lazy();
			if ("then" in value) {
				return value.then(data => {
					if (timeMessage) {
						logger.timeEnd(timeMessage);
					}
					this.content = data.map;
				});
			}
			if (timeMessage) {
				logger.timeEnd(timeMessage);
			}
			this.content = value.map;
		}
	}

	/**
	 * @returns {number} size of the content or -1 if not known
	 */
	getSize() {
		if (!this.lazy) return -1;
		const options = /** @type {any} */ (this.lazy).options;
		if (!options) return -1;
		const size = options.size;
		if (typeof size !== "number") return -1;
		return size;
	}

	/**
	 * @param {string} identifier identifier
	 */
	delete(identifier) {
		this.items.delete(identifier);
		this.used.delete(identifier);
		this.outdated = true;
	}

	/**
	 * @template T
	 * @param {function(any): function(): Promise<PackContentItems> | PackContentItems} write write function
	 * @returns {void}
	 */
	writeLazy(write) {
		if (!this.outdated && this.lazy) {
			// State B1 or C1
			// this.lazy is still the valid deserialized version
			write(this.lazy);
			return;
		}
		if (!this.outdated && this.content) {
			// State A1
			const map = new Map(this.content);
			// Move to state C1
			this.lazy = SerializerMiddleware.unMemoizeLazy(
				write(() => new PackContentItems(map))
			);
			return;
		}
		if (this.content) {
			// State A2 or C2
			/** @type {Content} */
			const map = new Map();
			for (const item of this.items) {
				map.set(item, this.content.get(item));
			}
			// Move to state C1
			this.outdated = false;
			this.content = map;
			this.lazy = SerializerMiddleware.unMemoizeLazy(
				write(() => new PackContentItems(map))
			);
			return;
		}
		const logger = /** @type {Logger} */ (this.logger);
		// State B2
		const { lazyName } = this;
		/** @type {string | undefined} */
		let timeMessage;
		if (lazyName) {
			// only log once
			this.lazyName = undefined;
			timeMessage = `unpack cache content ${lazyName} (${formatSize(
				this.getSize()
			)})`;
			logger.log(
				`starting to unpack cache content ${lazyName} (${formatSize(
					this.getSize()
				)}) because it's outdated and need to be serialized`
			);
			logger.time(timeMessage);
		}
		const value = /** @type {LazyFn} */ (this.lazy)();
		this.outdated = false;
		if ("then" in value) {
			// Move to state B1
			this.lazy = write(() =>
				value.then(data => {
					if (timeMessage) {
						logger.timeEnd(timeMessage);
					}
					const oldMap = data.map;
					/** @type {Content} */
					const map = new Map();
					for (const item of this.items) {
						map.set(item, oldMap.get(item));
					}
					// Move to state C1 (or maybe C2)
					this.content = map;
					this.lazy = SerializerMiddleware.unMemoizeLazy(
						/** @type {LazyFn} */
						(this.lazy)
					);

					return new PackContentItems(map);
				})
			);
		} else {
			// Move to state C1
			if (timeMessage) {
				logger.timeEnd(timeMessage);
			}
			const oldMap = value.map;
			/** @type {Content} */
			const map = new Map();
			for (const item of this.items) {
				map.set(item, oldMap.get(item));
			}
			this.content = map;
			this.lazy = write(() => new PackContentItems(map));
		}
	}
}

/**
 * @param {Buffer} buf buffer
 * @returns {Buffer} buffer that can be collected
 */
const allowCollectingMemory = buf => {
	const wasted = buf.buffer.byteLength - buf.byteLength;
	if (wasted > 8192 && (wasted > 1048576 || wasted > buf.byteLength)) {
		return Buffer.from(buf);
	}
	return buf;
};

class PackFileCacheStrategy {
	/**
	 * @param {object} options options
	 * @param {Compiler} options.compiler the compiler
	 * @param {IntermediateFileSystem} options.fs the filesystem
	 * @param {string} options.context the context directory
	 * @param {string} options.cacheLocation the location of the cache data
	 * @param {string} options.version version identifier
	 * @param {Logger} options.logger a logger
	 * @param {SnapshotOptions} options.snapshot options regarding snapshotting
	 * @param {number} options.maxAge max age of cache items
	 * @param {boolean | undefined} options.profile track and log detailed timing information for individual cache items
	 * @param {boolean | undefined} options.allowCollectingMemory allow to collect unused memory created during deserialization
	 * @param {false | "gzip" | "brotli" | undefined} options.compression compression used
	 * @param {boolean | undefined} options.readonly disable storing cache into filesystem
	 */
	constructor({
		compiler,
		fs,
		context,
		cacheLocation,
		version,
		logger,
		snapshot,
		maxAge,
		profile,
		allowCollectingMemory,
		compression,
		readonly
	}) {
		this.fileSerializer = createFileSerializer(
			fs,
			compiler.options.output.hashFunction
		);
		this.fileSystemInfo = new FileSystemInfo(fs, {
			managedPaths: snapshot.managedPaths,
			immutablePaths: snapshot.immutablePaths,
			logger: logger.getChildLogger("webpack.FileSystemInfo"),
			hashFunction: compiler.options.output.hashFunction
		});
		this.compiler = compiler;
		this.context = context;
		this.cacheLocation = cacheLocation;
		this.version = version;
		this.logger = logger;
		this.maxAge = maxAge;
		this.profile = profile;
		this.readonly = readonly;
		this.allowCollectingMemory = allowCollectingMemory;
		this.compression = compression;
		this._extension =
			compression === "brotli"
				? ".pack.br"
				: compression === "gzip"
					? ".pack.gz"
					: ".pack";
		this.snapshot = snapshot;
		/** @type {BuildDependencies} */
		this.buildDependencies = new Set();
		/** @type {LazySet<string>} */
		this.newBuildDependencies = new LazySet();
		/** @type {Snapshot | undefined} */
		this.resolveBuildDependenciesSnapshot = undefined;
		/** @type {ResolveResults | undefined} */
		this.resolveResults = undefined;
		/** @type {Snapshot | undefined} */
		this.buildSnapshot = undefined;
		/** @type {Promise<Pack> | undefined} */
		this.packPromise = this._openPack();
		this.storePromise = Promise.resolve();
	}

	/**
	 * @returns {Promise<Pack>} pack
	 */
	_getPack() {
		if (this.packPromise === undefined) {
			this.packPromise = this.storePromise.then(() => this._openPack());
		}
		return this.packPromise;
	}

	/**
	 * @returns {Promise<Pack>} the pack
	 */
	_openPack() {
		const { logger, profile, cacheLocation, version } = this;
		/** @type {Snapshot} */
		let buildSnapshot;
		/** @type {BuildDependencies} */
		let buildDependencies;
		/** @type {BuildDependencies} */
		let newBuildDependencies;
		/** @type {Snapshot} */
		let resolveBuildDependenciesSnapshot;
		/** @type {ResolveResults | undefined} */
		let resolveResults;
		logger.time("restore cache container");
		return this.fileSerializer
			.deserialize(null, {
				filename: `${cacheLocation}/index${this._extension}`,
				extension: `${this._extension}`,
				logger,
				profile,
				retainedBuffer: this.allowCollectingMemory
					? allowCollectingMemory
					: undefined
			})
			.catch(err => {
				if (err.code !== "ENOENT") {
					logger.warn(
						`Restoring pack failed from ${cacheLocation}${this._extension}: ${err}`
					);
					logger.debug(err.stack);
				} else {
					logger.debug(
						`No pack exists at ${cacheLocation}${this._extension}: ${err}`
					);
				}
				return undefined;
			})
			.then(packContainer => {
				logger.timeEnd("restore cache container");
				if (!packContainer) return;
				if (!(packContainer instanceof PackContainer)) {
					logger.warn(
						`Restored pack from ${cacheLocation}${this._extension}, but contained content is unexpected.`,
						packContainer
					);
					return;
				}
				if (packContainer.version !== version) {
					logger.log(
						`Restored pack from ${cacheLocation}${this._extension}, but version doesn't match.`
					);
					return;
				}
				logger.time("check build dependencies");
				return Promise.all([
					new Promise((resolve, reject) => {
						this.fileSystemInfo.checkSnapshotValid(
							packContainer.buildSnapshot,
							(err, valid) => {
								if (err) {
									logger.log(
										`Restored pack from ${cacheLocation}${this._extension}, but checking snapshot of build dependencies errored: ${err}.`
									);
									logger.debug(err.stack);
									return resolve(false);
								}
								if (!valid) {
									logger.log(
										`Restored pack from ${cacheLocation}${this._extension}, but build dependencies have changed.`
									);
									return resolve(false);
								}
								buildSnapshot = packContainer.buildSnapshot;
								return resolve(true);
							}
						);
					}),
					new Promise((resolve, reject) => {
						this.fileSystemInfo.checkSnapshotValid(
							packContainer.resolveBuildDependenciesSnapshot,
							(err, valid) => {
								if (err) {
									logger.log(
										`Restored pack from ${cacheLocation}${this._extension}, but checking snapshot of resolving of build dependencies errored: ${err}.`
									);
									logger.debug(err.stack);
									return resolve(false);
								}
								if (valid) {
									resolveBuildDependenciesSnapshot =
										packContainer.resolveBuildDependenciesSnapshot;
									buildDependencies = packContainer.buildDependencies;
									resolveResults = packContainer.resolveResults;
									return resolve(true);
								}
								logger.log(
									"resolving of build dependencies is invalid, will re-resolve build dependencies"
								);
								this.fileSystemInfo.checkResolveResultsValid(
									packContainer.resolveResults,
									(err, valid) => {
										if (err) {
											logger.log(
												`Restored pack from ${cacheLocation}${this._extension}, but resolving of build dependencies errored: ${err}.`
											);
											logger.debug(err.stack);
											return resolve(false);
										}
										if (valid) {
											newBuildDependencies = packContainer.buildDependencies;
											resolveResults = packContainer.resolveResults;
											return resolve(true);
										}
										logger.log(
											`Restored pack from ${cacheLocation}${this._extension}, but build dependencies resolve to different locations.`
										);
										return resolve(false);
									}
								);
							}
						);
					})
				])
					.catch(err => {
						logger.timeEnd("check build dependencies");
						throw err;
					})
					.then(([buildSnapshotValid, resolveValid]) => {
						logger.timeEnd("check build dependencies");
						if (buildSnapshotValid && resolveValid) {
							logger.time("restore cache content metadata");
							const d = packContainer.data();
							logger.timeEnd("restore cache content metadata");
							return d;
						}
						return undefined;
					});
			})
			.then(pack => {
				if (pack) {
					pack.maxAge = this.maxAge;
					this.buildSnapshot = buildSnapshot;
					if (buildDependencies) this.buildDependencies = buildDependencies;
					if (newBuildDependencies)
						this.newBuildDependencies.addAll(newBuildDependencies);
					this.resolveResults = resolveResults;
					this.resolveBuildDependenciesSnapshot =
						resolveBuildDependenciesSnapshot;
					return pack;
				}
				return new Pack(logger, this.maxAge);
			})
			.catch(err => {
				this.logger.warn(
					`Restoring pack from ${cacheLocation}${this._extension} failed: ${err}`
				);
				this.logger.debug(err.stack);
				return new Pack(logger, this.maxAge);
			});
	}

	/**
	 * @param {string} identifier unique name for the resource
	 * @param {Etag | null} etag etag of the resource
	 * @param {any} data cached content
	 * @returns {Promise<void>} promise
	 */
	store(identifier, etag, data) {
		if (this.readonly) return Promise.resolve();

		return this._getPack().then(pack => {
			pack.set(identifier, etag === null ? null : etag.toString(), data);
		});
	}

	/**
	 * @param {string} identifier unique name for the resource
	 * @param {Etag | null} etag etag of the resource
	 * @returns {Promise<any>} promise to the cached content
	 */
	restore(identifier, etag) {
		return this._getPack()
			.then(pack =>
				pack.get(identifier, etag === null ? null : etag.toString())
			)
			.catch(err => {
				if (err && err.code !== "ENOENT") {
					this.logger.warn(
						`Restoring failed for ${identifier} from pack: ${err}`
					);
					this.logger.debug(err.stack);
				}
			});
	}

	/**
	 * @param {LazySet<string> | Iterable<string>} dependencies dependencies to store
	 */
	storeBuildDependencies(dependencies) {
		if (this.readonly) return;
		this.newBuildDependencies.addAll(dependencies);
	}

	afterAllStored() {
		const packPromise = this.packPromise;
		if (packPromise === undefined) return Promise.resolve();
		const reportProgress = ProgressPlugin.getReporter(this.compiler);
		return (this.storePromise = packPromise
			.then(pack => {
				pack.stopCapturingRequests();
				if (!pack.invalid) return;
				this.packPromise = undefined;
				this.logger.log("Storing pack...");
				let promise;
				const newBuildDependencies = new Set();
				for (const dep of this.newBuildDependencies) {
					if (!this.buildDependencies.has(dep)) {
						newBuildDependencies.add(dep);
					}
				}
				if (newBuildDependencies.size > 0 || !this.buildSnapshot) {
					if (reportProgress) reportProgress(0.5, "resolve build dependencies");
					this.logger.debug(
						`Capturing build dependencies... (${Array.from(
							newBuildDependencies
						).join(", ")})`
					);
					promise = new Promise((resolve, reject) => {
						this.logger.time("resolve build dependencies");
						this.fileSystemInfo.resolveBuildDependencies(
							this.context,
							newBuildDependencies,
							(err, result) => {
								this.logger.timeEnd("resolve build dependencies");
								if (err) return reject(err);

								this.logger.time("snapshot build dependencies");
								const {
									files,
									directories,
									missing,
									resolveResults,
									resolveDependencies
								} = /** @type {ResolveBuildDependenciesResult} */ (result);
								if (this.resolveResults) {
									for (const [key, value] of resolveResults) {
										this.resolveResults.set(key, value);
									}
								} else {
									this.resolveResults = resolveResults;
								}
								if (reportProgress) {
									reportProgress(
										0.6,
										"snapshot build dependencies",
										"resolving"
									);
								}
								this.fileSystemInfo.createSnapshot(
									undefined,
									resolveDependencies.files,
									resolveDependencies.directories,
									resolveDependencies.missing,
									this.snapshot.resolveBuildDependencies,
									(err, snapshot) => {
										if (err) {
											this.logger.timeEnd("snapshot build dependencies");
											return reject(err);
										}
										if (!snapshot) {
											this.logger.timeEnd("snapshot build dependencies");
											return reject(
												new Error("Unable to snapshot resolve dependencies")
											);
										}
										if (this.resolveBuildDependenciesSnapshot) {
											this.resolveBuildDependenciesSnapshot =
												this.fileSystemInfo.mergeSnapshots(
													this.resolveBuildDependenciesSnapshot,
													snapshot
												);
										} else {
											this.resolveBuildDependenciesSnapshot = snapshot;
										}
										if (reportProgress) {
											reportProgress(
												0.7,
												"snapshot build dependencies",
												"modules"
											);
										}
										this.fileSystemInfo.createSnapshot(
											undefined,
											files,
											directories,
											missing,
											this.snapshot.buildDependencies,
											(err, snapshot) => {
												this.logger.timeEnd("snapshot build dependencies");
												if (err) return reject(err);
												if (!snapshot) {
													return reject(
														new Error("Unable to snapshot build dependencies")
													);
												}
												this.logger.debug("Captured build dependencies");

												if (this.buildSnapshot) {
													this.buildSnapshot =
														this.fileSystemInfo.mergeSnapshots(
															this.buildSnapshot,
															snapshot
														);
												} else {
													this.buildSnapshot = snapshot;
												}

												resolve();
											}
										);
									}
								);
							}
						);
					});
				} else {
					promise = Promise.resolve();
				}
				return promise.then(() => {
					if (reportProgress) reportProgress(0.8, "serialize pack");
					this.logger.time("store pack");
					const updatedBuildDependencies = new Set(this.buildDependencies);
					for (const dep of newBuildDependencies) {
						updatedBuildDependencies.add(dep);
					}
					const content = new PackContainer(
						pack,
						this.version,
						/** @type {Snapshot} */
						(this.buildSnapshot),
						updatedBuildDependencies,
						/** @type {ResolveResults} */
						(this.resolveResults),
						/** @type {Snapshot} */
						(this.resolveBuildDependenciesSnapshot)
					);
					return this.fileSerializer
						.serialize(content, {
							filename: `${this.cacheLocation}/index${this._extension}`,
							extension: `${this._extension}`,
							logger: this.logger,
							profile: this.profile
						})
						.then(() => {
							for (const dep of newBuildDependencies) {
								this.buildDependencies.add(dep);
							}
							this.newBuildDependencies.clear();
							this.logger.timeEnd("store pack");
							const stats = pack.getContentStats();
							this.logger.log(
								"Stored pack (%d items, %d files, %d MiB)",
								pack.itemInfo.size,
								stats.count,
								Math.round(stats.size / 1024 / 1024)
							);
						})
						.catch(err => {
							this.logger.timeEnd("store pack");
							this.logger.warn(`Caching failed for pack: ${err}`);
							this.logger.debug(err.stack);
						});
				});
			})
			.catch(err => {
				this.logger.warn(`Caching failed for pack: ${err}`);
				this.logger.debug(err.stack);
			}));
	}

	clear() {
		this.fileSystemInfo.clear();
		this.buildDependencies.clear();
		this.newBuildDependencies.clear();
		this.resolveBuildDependenciesSnapshot = undefined;
		this.resolveResults = undefined;
		this.buildSnapshot = undefined;
		this.packPromise = undefined;
	}
}

module.exports = PackFileCacheStrategy;
