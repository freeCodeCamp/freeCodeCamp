/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { create: createResolver } = require("enhanced-resolve");
const nodeModule = require("module");
const asyncLib = require("neo-async");
const { isAbsolute } = require("path");
const AsyncQueue = require("./util/AsyncQueue");
const StackedCacheMap = require("./util/StackedCacheMap");
const createHash = require("./util/createHash");
const { join, dirname, relative, lstatReadlinkAbsolute } = require("./util/fs");
const makeSerializable = require("./util/makeSerializable");
const processAsyncTree = require("./util/processAsyncTree");

/** @typedef {import("enhanced-resolve").Resolver} Resolver */
/** @typedef {import("enhanced-resolve").ResolveRequest} ResolveRequest */
/** @typedef {import("enhanced-resolve").ResolveFunctionAsync} ResolveFunctionAsync */
/** @typedef {import("./WebpackError")} WebpackError */
/** @typedef {import("./logging/Logger").Logger} Logger */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {typeof import("./util/Hash")} Hash */
/** @typedef {import("./util/fs").IStats} IStats */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("./util/fs").PathLike} PathLike */
/** @typedef {import("./util/fs").StringCallback} StringCallback */
/**
 * @template T
 * @typedef {import("./util/AsyncQueue").Callback<T>} ProcessorCallback
 */
/**
 * @template T, R
 * @typedef {import("./util/AsyncQueue").Processor<T, R>} Processor
 */

const supportsEsm = Number(process.versions.modules) >= 83;

/** @type {Set<string>} */
const builtinModules = new Set(nodeModule.builtinModules);

let FS_ACCURACY = 2000;

const EMPTY_SET = new Set();

const RBDT_RESOLVE_CJS = 0;
const RBDT_RESOLVE_ESM = 1;
const RBDT_RESOLVE_DIRECTORY = 2;
const RBDT_RESOLVE_CJS_FILE = 3;
const RBDT_RESOLVE_CJS_FILE_AS_CHILD = 4;
const RBDT_RESOLVE_ESM_FILE = 5;
const RBDT_DIRECTORY = 6;
const RBDT_FILE = 7;
const RBDT_DIRECTORY_DEPENDENCIES = 8;
const RBDT_FILE_DEPENDENCIES = 9;

/** @typedef {RBDT_RESOLVE_CJS | RBDT_RESOLVE_ESM | RBDT_RESOLVE_DIRECTORY | RBDT_RESOLVE_CJS_FILE | RBDT_RESOLVE_CJS_FILE_AS_CHILD | RBDT_RESOLVE_ESM_FILE | RBDT_DIRECTORY | RBDT_FILE | RBDT_DIRECTORY_DEPENDENCIES | RBDT_FILE_DEPENDENCIES} JobType */

const INVALID = Symbol("invalid");

/**
 * @typedef {object} FileSystemInfoEntry
 * @property {number} safeTime
 * @property {number=} timestamp
 */

/**
 * @typedef {object} ResolvedContextFileSystemInfoEntry
 * @property {number} safeTime
 * @property {string=} timestampHash
 */

/**
 * @typedef {object} ContextFileSystemInfoEntry
 * @property {number} safeTime
 * @property {string=} timestampHash
 * @property {ResolvedContextFileSystemInfoEntry=} resolved
 * @property {Set<string>=} symlinks
 */

/**
 * @typedef {object} TimestampAndHash
 * @property {number} safeTime
 * @property {number=} timestamp
 * @property {string} hash
 */

/**
 * @typedef {object} ResolvedContextTimestampAndHash
 * @property {number} safeTime
 * @property {string=} timestampHash
 * @property {string} hash
 */

/** @typedef {Set<string>} Symlinks */

/**
 * @typedef {object} ContextTimestampAndHash
 * @property {number} safeTime
 * @property {string=} timestampHash
 * @property {string} hash
 * @property {ResolvedContextTimestampAndHash=} resolved
 * @property {Symlinks=} symlinks
 */

/**
 * @typedef {object} ContextHash
 * @property {string} hash
 * @property {string=} resolved
 * @property {Symlinks=} symlinks
 */

/** @typedef {Set<string>} SnapshotContent */

/**
 * @typedef {object} SnapshotOptimizationEntry
 * @property {Snapshot} snapshot
 * @property {number} shared
 * @property {SnapshotContent | undefined} snapshotContent
 * @property {Set<SnapshotOptimizationEntry> | undefined} children
 */

/**
 * @typedef {object} ResolveBuildDependenciesResult
 * @property {Set<string>} files list of files
 * @property {Set<string>} directories list of directories
 * @property {Set<string>} missing list of missing entries
 * @property {Map<string, string | false | undefined>} resolveResults stored resolve results
 * @property {object} resolveDependencies dependencies of the resolving
 * @property {Set<string>} resolveDependencies.files list of files
 * @property {Set<string>} resolveDependencies.directories list of directories
 * @property {Set<string>} resolveDependencies.missing list of missing entries
 */

/**
 * @typedef {object} SnapshotOptions
 * @property {boolean=} hash should use hash to snapshot
 * @property {boolean=} timestamp should use timestamp to snapshot
 */

const DONE_ITERATOR_RESULT = new Set().keys().next();

// cspell:word tshs
// Tsh = Timestamp + Hash
// Tshs = Timestamp + Hash combinations

class SnapshotIterator {
	/**
	 * @param {() => IteratorResult<string>} next next
	 */
	constructor(next) {
		this.next = next;
	}
}

/**
 * @typedef {(snapshot: Snapshot) => (Map<string, any> | Set<string> | undefined)[]} GetMapsFunction
 */

class SnapshotIterable {
	/**
	 * @param {Snapshot} snapshot snapshot
	 * @param {GetMapsFunction} getMaps get maps function
	 */
	constructor(snapshot, getMaps) {
		this.snapshot = snapshot;
		this.getMaps = getMaps;
	}

	[Symbol.iterator]() {
		let state = 0;
		/** @type {IterableIterator<string>} */
		let it;
		/** @type {(snapshot: Snapshot) => (Map<string, any> | Set<string> | undefined)[]} */
		let getMaps;
		/** @type {(Map<string, any> | Set<string> | undefined)[]} */
		let maps;
		/** @type {Snapshot} */
		let snapshot;
		/** @type {Snapshot[] | undefined} */
		let queue;
		return new SnapshotIterator(() => {
			for (;;) {
				switch (state) {
					case 0:
						snapshot = this.snapshot;
						getMaps = this.getMaps;
						maps = getMaps(snapshot);
						state = 1;
					/* falls through */
					case 1:
						if (maps.length > 0) {
							const map = maps.pop();
							if (map !== undefined) {
								it = map.keys();
								state = 2;
							} else {
								break;
							}
						} else {
							state = 3;
							break;
						}
					/* falls through */
					case 2: {
						const result = it.next();
						if (!result.done) return result;
						state = 1;
						break;
					}
					case 3: {
						const children = snapshot.children;
						if (children !== undefined) {
							if (children.size === 1) {
								// shortcut for a single child
								// avoids allocation of queue
								for (const child of children) snapshot = child;
								maps = getMaps(snapshot);
								state = 1;
								break;
							}
							if (queue === undefined) queue = [];
							for (const child of children) {
								queue.push(child);
							}
						}
						if (queue !== undefined && queue.length > 0) {
							snapshot = /** @type {Snapshot} */ (queue.pop());
							maps = getMaps(snapshot);
							state = 1;
							break;
						} else {
							state = 4;
						}
					}
					/* falls through */
					case 4:
						return DONE_ITERATOR_RESULT;
				}
			}
		});
	}
}

/** @typedef {Map<string, FileSystemInfoEntry | null>} FileTimestamps */
/** @typedef {Map<string, string | null>} FileHashes */
/** @typedef {Map<string, TimestampAndHash | string | null>} FileTshs */
/** @typedef {Map<string, ResolvedContextFileSystemInfoEntry | null>} ContextTimestamps */
/** @typedef {Map<string, string | null>} ContextHashes */
/** @typedef {Map<string, ResolvedContextTimestampAndHash | null>} ContextTshs */
/** @typedef {Map<string, boolean>} MissingExistence */
/** @typedef {Map<string, string>} ManagedItemInfo */
/** @typedef {Set<string>} ManagedFiles */
/** @typedef {Set<string>} ManagedContexts */
/** @typedef {Set<string>} ManagedMissing */
/** @typedef {Set<Snapshot>} Children */

class Snapshot {
	constructor() {
		this._flags = 0;
		/** @type {Iterable<string> | undefined} */
		this._cachedFileIterable = undefined;
		/** @type {Iterable<string> | undefined} */
		this._cachedContextIterable = undefined;
		/** @type {Iterable<string> | undefined} */
		this._cachedMissingIterable = undefined;
		/** @type {number | undefined} */
		this.startTime = undefined;
		/** @type {FileTimestamps | undefined} */
		this.fileTimestamps = undefined;
		/** @type {FileHashes | undefined} */
		this.fileHashes = undefined;
		/** @type {FileTshs | undefined} */
		this.fileTshs = undefined;
		/** @type {ContextTimestamps | undefined} */
		this.contextTimestamps = undefined;
		/** @type {ContextHashes | undefined} */
		this.contextHashes = undefined;
		/** @type {ContextTshs | undefined} */
		this.contextTshs = undefined;
		/** @type {MissingExistence | undefined} */
		this.missingExistence = undefined;
		/** @type {ManagedItemInfo | undefined} */
		this.managedItemInfo = undefined;
		/** @type {ManagedFiles | undefined} */
		this.managedFiles = undefined;
		/** @type {ManagedContexts | undefined} */
		this.managedContexts = undefined;
		/** @type {ManagedMissing | undefined} */
		this.managedMissing = undefined;
		/** @type {Children | undefined} */
		this.children = undefined;
	}

	hasStartTime() {
		return (this._flags & 1) !== 0;
	}

	/**
	 * @param {number} value start value
	 */
	setStartTime(value) {
		this._flags = this._flags | 1;
		this.startTime = value;
	}

	/**
	 * @param {number | undefined} value value
	 * @param {Snapshot} snapshot snapshot
	 */
	setMergedStartTime(value, snapshot) {
		if (value) {
			if (snapshot.hasStartTime()) {
				this.setStartTime(
					Math.min(
						value,
						/** @type {NonNullable<Snapshot["startTime"]>} */
						(snapshot.startTime)
					)
				);
			} else {
				this.setStartTime(value);
			}
		} else if (snapshot.hasStartTime()) {
			this.setStartTime(
				/** @type {NonNullable<Snapshot["startTime"]>} */
				(snapshot.startTime)
			);
		}
	}

	hasFileTimestamps() {
		return (this._flags & 2) !== 0;
	}

	/**
	 * @param {FileTimestamps} value file timestamps
	 */
	setFileTimestamps(value) {
		this._flags = this._flags | 2;
		this.fileTimestamps = value;
	}

	hasFileHashes() {
		return (this._flags & 4) !== 0;
	}

	/**
	 * @param {FileHashes} value file hashes
	 */
	setFileHashes(value) {
		this._flags = this._flags | 4;
		this.fileHashes = value;
	}

	hasFileTshs() {
		return (this._flags & 8) !== 0;
	}

	/**
	 * @param {FileTshs} value file tshs
	 */
	setFileTshs(value) {
		this._flags = this._flags | 8;
		this.fileTshs = value;
	}

	hasContextTimestamps() {
		return (this._flags & 0x10) !== 0;
	}

	/**
	 * @param {ContextTimestamps} value context timestamps
	 */
	setContextTimestamps(value) {
		this._flags = this._flags | 0x10;
		this.contextTimestamps = value;
	}

	hasContextHashes() {
		return (this._flags & 0x20) !== 0;
	}

	/**
	 * @param {ContextHashes} value context hashes
	 */
	setContextHashes(value) {
		this._flags = this._flags | 0x20;
		this.contextHashes = value;
	}

	hasContextTshs() {
		return (this._flags & 0x40) !== 0;
	}

	/**
	 * @param {ContextTshs} value context tshs
	 */
	setContextTshs(value) {
		this._flags = this._flags | 0x40;
		this.contextTshs = value;
	}

	hasMissingExistence() {
		return (this._flags & 0x80) !== 0;
	}

	/**
	 * @param {MissingExistence} value context tshs
	 */
	setMissingExistence(value) {
		this._flags = this._flags | 0x80;
		this.missingExistence = value;
	}

	hasManagedItemInfo() {
		return (this._flags & 0x100) !== 0;
	}

	/**
	 * @param {ManagedItemInfo} value managed item info
	 */
	setManagedItemInfo(value) {
		this._flags = this._flags | 0x100;
		this.managedItemInfo = value;
	}

	hasManagedFiles() {
		return (this._flags & 0x200) !== 0;
	}

	/**
	 * @param {ManagedFiles} value managed files
	 */
	setManagedFiles(value) {
		this._flags = this._flags | 0x200;
		this.managedFiles = value;
	}

	hasManagedContexts() {
		return (this._flags & 0x400) !== 0;
	}

	/**
	 * @param {ManagedContexts} value managed contexts
	 */
	setManagedContexts(value) {
		this._flags = this._flags | 0x400;
		this.managedContexts = value;
	}

	hasManagedMissing() {
		return (this._flags & 0x800) !== 0;
	}

	/**
	 * @param {ManagedMissing} value managed missing
	 */
	setManagedMissing(value) {
		this._flags = this._flags | 0x800;
		this.managedMissing = value;
	}

	hasChildren() {
		return (this._flags & 0x1000) !== 0;
	}

	/**
	 * @param {Children} value children
	 */
	setChildren(value) {
		this._flags = this._flags | 0x1000;
		this.children = value;
	}

	/**
	 * @param {Snapshot} child children
	 */
	addChild(child) {
		if (!this.hasChildren()) {
			this.setChildren(new Set());
		}
		/** @type {Children} */
		(this.children).add(child);
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize({ write }) {
		write(this._flags);
		if (this.hasStartTime()) write(this.startTime);
		if (this.hasFileTimestamps()) write(this.fileTimestamps);
		if (this.hasFileHashes()) write(this.fileHashes);
		if (this.hasFileTshs()) write(this.fileTshs);
		if (this.hasContextTimestamps()) write(this.contextTimestamps);
		if (this.hasContextHashes()) write(this.contextHashes);
		if (this.hasContextTshs()) write(this.contextTshs);
		if (this.hasMissingExistence()) write(this.missingExistence);
		if (this.hasManagedItemInfo()) write(this.managedItemInfo);
		if (this.hasManagedFiles()) write(this.managedFiles);
		if (this.hasManagedContexts()) write(this.managedContexts);
		if (this.hasManagedMissing()) write(this.managedMissing);
		if (this.hasChildren()) write(this.children);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize({ read }) {
		this._flags = read();
		if (this.hasStartTime()) this.startTime = read();
		if (this.hasFileTimestamps()) this.fileTimestamps = read();
		if (this.hasFileHashes()) this.fileHashes = read();
		if (this.hasFileTshs()) this.fileTshs = read();
		if (this.hasContextTimestamps()) this.contextTimestamps = read();
		if (this.hasContextHashes()) this.contextHashes = read();
		if (this.hasContextTshs()) this.contextTshs = read();
		if (this.hasMissingExistence()) this.missingExistence = read();
		if (this.hasManagedItemInfo()) this.managedItemInfo = read();
		if (this.hasManagedFiles()) this.managedFiles = read();
		if (this.hasManagedContexts()) this.managedContexts = read();
		if (this.hasManagedMissing()) this.managedMissing = read();
		if (this.hasChildren()) this.children = read();
	}

	/**
	 * @param {GetMapsFunction} getMaps first
	 * @returns {Iterable<string>} iterable
	 */
	_createIterable(getMaps) {
		return new SnapshotIterable(this, getMaps);
	}

	/**
	 * @returns {Iterable<string>} iterable
	 */
	getFileIterable() {
		if (this._cachedFileIterable === undefined) {
			this._cachedFileIterable = this._createIterable(s => [
				s.fileTimestamps,
				s.fileHashes,
				s.fileTshs,
				s.managedFiles
			]);
		}
		return this._cachedFileIterable;
	}

	/**
	 * @returns {Iterable<string>} iterable
	 */
	getContextIterable() {
		if (this._cachedContextIterable === undefined) {
			this._cachedContextIterable = this._createIterable(s => [
				s.contextTimestamps,
				s.contextHashes,
				s.contextTshs,
				s.managedContexts
			]);
		}
		return this._cachedContextIterable;
	}

	/**
	 * @returns {Iterable<string>} iterable
	 */
	getMissingIterable() {
		if (this._cachedMissingIterable === undefined) {
			this._cachedMissingIterable = this._createIterable(s => [
				s.missingExistence,
				s.managedMissing
			]);
		}
		return this._cachedMissingIterable;
	}
}

makeSerializable(Snapshot, "webpack/lib/FileSystemInfo", "Snapshot");

const MIN_COMMON_SNAPSHOT_SIZE = 3;

/**
 * @template U, T
 * @typedef {U extends true ? Set<string> : Map<string, T>} SnapshotOptimizationValue
 */

/**
 * @template T
 * @template {boolean} [U=false]
 */
class SnapshotOptimization {
	/**
	 * @param {function(Snapshot): boolean} has has value
	 * @param {function(Snapshot): SnapshotOptimizationValue<U, T> | undefined} get get value
	 * @param {function(Snapshot, SnapshotOptimizationValue<U, T>): void} set set value
	 * @param {boolean=} useStartTime use the start time of snapshots
	 * @param {U=} isSet value is an Set instead of a Map
	 */
	constructor(
		has,
		get,
		set,
		useStartTime = true,
		isSet = /** @type {U} */ (false)
	) {
		this._has = has;
		this._get = get;
		this._set = set;
		this._useStartTime = useStartTime;
		/** @type {U} */
		this._isSet = isSet;
		/** @type {Map<string, SnapshotOptimizationEntry>} */
		this._map = new Map();
		this._statItemsShared = 0;
		this._statItemsUnshared = 0;
		this._statSharedSnapshots = 0;
		this._statReusedSharedSnapshots = 0;
	}

	getStatisticMessage() {
		const total = this._statItemsShared + this._statItemsUnshared;
		if (total === 0) return;
		return `${
			this._statItemsShared && Math.round((this._statItemsShared * 100) / total)
		}% (${this._statItemsShared}/${total}) entries shared via ${
			this._statSharedSnapshots
		} shared snapshots (${
			this._statReusedSharedSnapshots + this._statSharedSnapshots
		} times referenced)`;
	}

	clear() {
		this._map.clear();
		this._statItemsShared = 0;
		this._statItemsUnshared = 0;
		this._statSharedSnapshots = 0;
		this._statReusedSharedSnapshots = 0;
	}

	/**
	 * @param {Snapshot} newSnapshot snapshot
	 * @param {Set<string>} capturedFiles files to snapshot/share
	 * @returns {void}
	 */
	optimize(newSnapshot, capturedFiles) {
		/**
		 * @param {SnapshotOptimizationEntry} entry optimization entry
		 * @returns {void}
		 */
		const increaseSharedAndStoreOptimizationEntry = entry => {
			if (entry.children !== undefined) {
				for (const child of entry.children) {
					increaseSharedAndStoreOptimizationEntry(child);
				}
			}
			entry.shared++;
			storeOptimizationEntry(entry);
		};
		/**
		 * @param {SnapshotOptimizationEntry} entry optimization entry
		 * @returns {void}
		 */
		const storeOptimizationEntry = entry => {
			for (const path of /** @type {SnapshotContent} */ (
				entry.snapshotContent
			)) {
				const old =
					/** @type {SnapshotOptimizationEntry} */
					(this._map.get(path));
				if (old.shared < entry.shared) {
					this._map.set(path, entry);
				}
				capturedFiles.delete(path);
			}
		};

		/** @type {SnapshotOptimizationEntry | undefined} */
		let newOptimizationEntry;

		const capturedFilesSize = capturedFiles.size;

		/** @type {Set<SnapshotOptimizationEntry> | undefined} */
		const optimizationEntries = new Set();

		for (const path of capturedFiles) {
			const optimizationEntry = this._map.get(path);
			if (optimizationEntry === undefined) {
				if (newOptimizationEntry === undefined) {
					newOptimizationEntry = {
						snapshot: newSnapshot,
						shared: 0,
						snapshotContent: undefined,
						children: undefined
					};
				}
				this._map.set(path, newOptimizationEntry);
				continue;
			} else {
				optimizationEntries.add(optimizationEntry);
			}
		}

		optimizationEntriesLabel: for (const optimizationEntry of optimizationEntries) {
			const snapshot = optimizationEntry.snapshot;
			if (optimizationEntry.shared > 0) {
				// It's a shared snapshot
				// We can't change it, so we can only use it when all files match
				// and startTime is compatible
				if (
					this._useStartTime &&
					newSnapshot.startTime &&
					(!snapshot.startTime || snapshot.startTime > newSnapshot.startTime)
				) {
					continue;
				}
				const nonSharedFiles = new Set();
				const snapshotContent =
					/** @type {NonNullable<SnapshotOptimizationEntry["snapshotContent"]>} */
					(optimizationEntry.snapshotContent);
				const snapshotEntries =
					/** @type {SnapshotOptimizationValue<U, T>} */
					(this._get(snapshot));
				for (const path of snapshotContent) {
					if (!capturedFiles.has(path)) {
						if (!snapshotEntries.has(path)) {
							// File is not shared and can't be removed from the snapshot
							// because it's in a child of the snapshot
							continue optimizationEntriesLabel;
						}
						nonSharedFiles.add(path);
						continue;
					}
				}
				if (nonSharedFiles.size === 0) {
					// The complete snapshot is shared
					// add it as child
					newSnapshot.addChild(snapshot);
					increaseSharedAndStoreOptimizationEntry(optimizationEntry);
					this._statReusedSharedSnapshots++;
				} else {
					// Only a part of the snapshot is shared
					const sharedCount = snapshotContent.size - nonSharedFiles.size;
					if (sharedCount < MIN_COMMON_SNAPSHOT_SIZE) {
						// Common part it too small
						continue;
					}
					// Extract common timestamps from both snapshots
					let commonMap;
					if (this._isSet) {
						commonMap = new Set();
						for (const path of /** @type {Set<string>} */ (snapshotEntries)) {
							if (nonSharedFiles.has(path)) continue;
							commonMap.add(path);
							snapshotEntries.delete(path);
						}
					} else {
						commonMap = new Map();
						const map = /** @type {Map<string, T>} */ (snapshotEntries);
						for (const [path, value] of map) {
							if (nonSharedFiles.has(path)) continue;
							commonMap.set(path, value);
							snapshotEntries.delete(path);
						}
					}
					// Create and attach snapshot
					const commonSnapshot = new Snapshot();
					if (this._useStartTime) {
						commonSnapshot.setMergedStartTime(newSnapshot.startTime, snapshot);
					}
					this._set(
						commonSnapshot,
						/** @type {SnapshotOptimizationValue<U, T>} */ (commonMap)
					);
					newSnapshot.addChild(commonSnapshot);
					snapshot.addChild(commonSnapshot);
					// Create optimization entry
					const newEntry = {
						snapshot: commonSnapshot,
						shared: optimizationEntry.shared + 1,
						snapshotContent: new Set(commonMap.keys()),
						children: undefined
					};
					if (optimizationEntry.children === undefined)
						optimizationEntry.children = new Set();
					optimizationEntry.children.add(newEntry);
					storeOptimizationEntry(newEntry);
					this._statSharedSnapshots++;
				}
			} else {
				// It's a unshared snapshot
				// We can extract a common shared snapshot
				// with all common files
				const snapshotEntries = this._get(snapshot);
				if (snapshotEntries === undefined) {
					// Incomplete snapshot, that can't be used
					continue;
				}
				let commonMap;
				if (this._isSet) {
					commonMap = new Set();
					const set = /** @type {Set<string>} */ (snapshotEntries);
					if (capturedFiles.size < set.size) {
						for (const path of capturedFiles) {
							if (set.has(path)) commonMap.add(path);
						}
					} else {
						for (const path of set) {
							if (capturedFiles.has(path)) commonMap.add(path);
						}
					}
				} else {
					commonMap = new Map();
					const map = /** @type {Map<string, T>} */ (snapshotEntries);
					for (const path of capturedFiles) {
						const ts = map.get(path);
						if (ts === undefined) continue;
						commonMap.set(path, ts);
					}
				}

				if (commonMap.size < MIN_COMMON_SNAPSHOT_SIZE) {
					// Common part it too small
					continue;
				}
				// Create and attach snapshot
				const commonSnapshot = new Snapshot();
				if (this._useStartTime) {
					commonSnapshot.setMergedStartTime(newSnapshot.startTime, snapshot);
				}
				this._set(
					commonSnapshot,
					/** @type {SnapshotOptimizationValue<U, T>} */
					(commonMap)
				);
				newSnapshot.addChild(commonSnapshot);
				snapshot.addChild(commonSnapshot);
				// Remove files from snapshot
				for (const path of commonMap.keys()) snapshotEntries.delete(path);
				const sharedCount = commonMap.size;
				this._statItemsUnshared -= sharedCount;
				this._statItemsShared += sharedCount;
				// Create optimization entry
				storeOptimizationEntry({
					snapshot: commonSnapshot,
					shared: 2,
					snapshotContent: new Set(commonMap.keys()),
					children: undefined
				});
				this._statSharedSnapshots++;
			}
		}
		const unshared = capturedFiles.size;
		this._statItemsUnshared += unshared;
		this._statItemsShared += capturedFilesSize - unshared;
	}
}

/**
 * @param {string} str input
 * @returns {string} result
 */
const parseString = str => {
	if (str[0] === "'" || str[0] === "`")
		str = `"${str.slice(1, -1).replace(/"/g, '\\"')}"`;
	return JSON.parse(str);
};

/* istanbul ignore next */
/**
 * @param {number} mtime mtime
 */
const applyMtime = mtime => {
	if (FS_ACCURACY > 1 && mtime % 2 !== 0) FS_ACCURACY = 1;
	else if (FS_ACCURACY > 10 && mtime % 20 !== 0) FS_ACCURACY = 10;
	else if (FS_ACCURACY > 100 && mtime % 200 !== 0) FS_ACCURACY = 100;
	else if (FS_ACCURACY > 1000 && mtime % 2000 !== 0) FS_ACCURACY = 1000;
};

/**
 * @template T
 * @template K
 * @param {Map<T, K> | undefined} a source map
 * @param {Map<T, K> | undefined} b joining map
 * @returns {Map<T, K>} joined map
 */
const mergeMaps = (a, b) => {
	if (!b || b.size === 0) return /** @type {Map<T, K>} */ (a);
	if (!a || a.size === 0) return /** @type {Map<T, K>} */ (b);
	/** @type {Map<T, K>} */
	const map = new Map(a);
	for (const [key, value] of b) {
		map.set(key, value);
	}
	return map;
};

/**
 * @template T
 * @param {Set<T> | undefined} a source map
 * @param {Set<T> | undefined} b joining map
 * @returns {Set<T>} joined map
 */
const mergeSets = (a, b) => {
	if (!b || b.size === 0) return /** @type {Set<T>} */ (a);
	if (!a || a.size === 0) return /** @type {Set<T>} */ (b);
	/** @type {Set<T>} */
	const map = new Set(a);
	for (const item of b) {
		map.add(item);
	}
	return map;
};

/**
 * Finding file or directory to manage
 * @param {string} managedPath path that is managing by {@link FileSystemInfo}
 * @param {string} path path to file or directory
 * @returns {string|null} managed item
 * @example
 * getManagedItem(
 *   '/Users/user/my-project/node_modules/',
 *   '/Users/user/my-project/node_modules/package/index.js'
 * ) === '/Users/user/my-project/node_modules/package'
 * getManagedItem(
 *   '/Users/user/my-project/node_modules/',
 *   '/Users/user/my-project/node_modules/package1/node_modules/package2'
 * ) === '/Users/user/my-project/node_modules/package1/node_modules/package2'
 * getManagedItem(
 *   '/Users/user/my-project/node_modules/',
 *   '/Users/user/my-project/node_modules/.bin/script.js'
 * ) === null // hidden files are disallowed as managed items
 * getManagedItem(
 *   '/Users/user/my-project/node_modules/',
 *   '/Users/user/my-project/node_modules/package'
 * ) === '/Users/user/my-project/node_modules/package'
 */
const getManagedItem = (managedPath, path) => {
	let i = managedPath.length;
	let slashes = 1;
	let startingPosition = true;
	loop: while (i < path.length) {
		switch (path.charCodeAt(i)) {
			case 47: // slash
			case 92: // backslash
				if (--slashes === 0) break loop;
				startingPosition = true;
				break;
			case 46: // .
				// hidden files are disallowed as managed items
				// it's probably .yarn-integrity or .cache
				if (startingPosition) return null;
				break;
			case 64: // @
				if (!startingPosition) return null;
				slashes++;
				break;
			default:
				startingPosition = false;
				break;
		}
		i++;
	}
	if (i === path.length) slashes--;
	// return null when path is incomplete
	if (slashes !== 0) return null;
	// if (path.slice(i + 1, i + 13) === "node_modules")
	if (
		path.length >= i + 13 &&
		path.charCodeAt(i + 1) === 110 &&
		path.charCodeAt(i + 2) === 111 &&
		path.charCodeAt(i + 3) === 100 &&
		path.charCodeAt(i + 4) === 101 &&
		path.charCodeAt(i + 5) === 95 &&
		path.charCodeAt(i + 6) === 109 &&
		path.charCodeAt(i + 7) === 111 &&
		path.charCodeAt(i + 8) === 100 &&
		path.charCodeAt(i + 9) === 117 &&
		path.charCodeAt(i + 10) === 108 &&
		path.charCodeAt(i + 11) === 101 &&
		path.charCodeAt(i + 12) === 115
	) {
		// if this is the end of the path
		if (path.length === i + 13) {
			// return the node_modules directory
			// it's special
			return path;
		}
		const c = path.charCodeAt(i + 13);
		// if next symbol is slash or backslash
		if (c === 47 || c === 92) {
			// Managed subpath
			return getManagedItem(path.slice(0, i + 14), path);
		}
	}
	return path.slice(0, i);
};

/**
 * @template {ContextFileSystemInfoEntry | ContextTimestampAndHash} T
 * @param {T | null} entry entry
 * @returns {T["resolved"] | null | undefined} the resolved entry
 */
const getResolvedTimestamp = entry => {
	if (entry === null) return null;
	if (entry.resolved !== undefined) return entry.resolved;
	return entry.symlinks === undefined ? entry : undefined;
};

/**
 * @param {ContextHash | null} entry entry
 * @returns {string | null | undefined} the resolved entry
 */
const getResolvedHash = entry => {
	if (entry === null) return null;
	if (entry.resolved !== undefined) return entry.resolved;
	return entry.symlinks === undefined ? entry.hash : undefined;
};

/**
 * @template T
 * @param {Set<T>} source source
 * @param {Set<T>} target target
 */
const addAll = (source, target) => {
	for (const key of source) target.add(key);
};

/** @typedef {Set<string>} LoggedPaths */

/**
 * Used to access information about the filesystem in a cached way
 */
class FileSystemInfo {
	/**
	 * @param {InputFileSystem} fs file system
	 * @param {object} options options
	 * @param {Iterable<string | RegExp>=} options.unmanagedPaths paths that are not managed by a package manager and the contents are subject to change
	 * @param {Iterable<string | RegExp>=} options.managedPaths paths that are only managed by a package manager
	 * @param {Iterable<string | RegExp>=} options.immutablePaths paths that are immutable
	 * @param {Logger=} options.logger logger used to log invalid snapshots
	 * @param {string | Hash=} options.hashFunction the hash function to use
	 */
	constructor(
		fs,
		{
			unmanagedPaths = [],
			managedPaths = [],
			immutablePaths = [],
			logger,
			hashFunction = "md4"
		} = {}
	) {
		this.fs = fs;
		this.logger = logger;
		this._remainingLogs = logger ? 40 : 0;
		/** @type {LoggedPaths | undefined} */
		this._loggedPaths = logger ? new Set() : undefined;
		this._hashFunction = hashFunction;
		/** @type {WeakMap<Snapshot, boolean | (function((WebpackError | null)=, boolean=): void)[]>} */
		this._snapshotCache = new WeakMap();
		this._fileTimestampsOptimization = new SnapshotOptimization(
			s => s.hasFileTimestamps(),
			s => s.fileTimestamps,
			(s, v) => s.setFileTimestamps(v)
		);
		this._fileHashesOptimization = new SnapshotOptimization(
			s => s.hasFileHashes(),
			s => s.fileHashes,
			(s, v) => s.setFileHashes(v),
			false
		);
		this._fileTshsOptimization = new SnapshotOptimization(
			s => s.hasFileTshs(),
			s => s.fileTshs,
			(s, v) => s.setFileTshs(v)
		);
		this._contextTimestampsOptimization = new SnapshotOptimization(
			s => s.hasContextTimestamps(),
			s => s.contextTimestamps,
			(s, v) => s.setContextTimestamps(v)
		);
		this._contextHashesOptimization = new SnapshotOptimization(
			s => s.hasContextHashes(),
			s => s.contextHashes,
			(s, v) => s.setContextHashes(v),
			false
		);
		this._contextTshsOptimization = new SnapshotOptimization(
			s => s.hasContextTshs(),
			s => s.contextTshs,
			(s, v) => s.setContextTshs(v)
		);
		this._missingExistenceOptimization = new SnapshotOptimization(
			s => s.hasMissingExistence(),
			s => s.missingExistence,
			(s, v) => s.setMissingExistence(v),
			false
		);
		this._managedItemInfoOptimization = new SnapshotOptimization(
			s => s.hasManagedItemInfo(),
			s => s.managedItemInfo,
			(s, v) => s.setManagedItemInfo(v),
			false
		);
		this._managedFilesOptimization = new SnapshotOptimization(
			s => s.hasManagedFiles(),
			s => s.managedFiles,
			(s, v) => s.setManagedFiles(v),
			false,
			true
		);
		this._managedContextsOptimization = new SnapshotOptimization(
			s => s.hasManagedContexts(),
			s => s.managedContexts,
			(s, v) => s.setManagedContexts(v),
			false,
			true
		);
		this._managedMissingOptimization = new SnapshotOptimization(
			s => s.hasManagedMissing(),
			s => s.managedMissing,
			(s, v) => s.setManagedMissing(v),
			false,
			true
		);
		/** @type {StackedCacheMap<string, FileSystemInfoEntry | "ignore" | null>} */
		this._fileTimestamps = new StackedCacheMap();
		/** @type {Map<string, string | null>} */
		this._fileHashes = new Map();
		/** @type {Map<string, TimestampAndHash | string>} */
		this._fileTshs = new Map();
		/** @type {StackedCacheMap<string, ContextFileSystemInfoEntry | "ignore" | null>} */
		this._contextTimestamps = new StackedCacheMap();
		/** @type {Map<string, ContextHash>} */
		this._contextHashes = new Map();
		/** @type {Map<string, ContextTimestampAndHash>} */
		this._contextTshs = new Map();
		/** @type {Map<string, string>} */
		this._managedItems = new Map();
		/** @type {AsyncQueue<string, string, FileSystemInfoEntry>} */
		this.fileTimestampQueue = new AsyncQueue({
			name: "file timestamp",
			parallelism: 30,
			processor: this._readFileTimestamp.bind(this)
		});
		/** @type {AsyncQueue<string, string, string>} */
		this.fileHashQueue = new AsyncQueue({
			name: "file hash",
			parallelism: 10,
			processor: this._readFileHash.bind(this)
		});
		/** @type {AsyncQueue<string, string, ContextFileSystemInfoEntry>} */
		this.contextTimestampQueue = new AsyncQueue({
			name: "context timestamp",
			parallelism: 2,
			processor: this._readContextTimestamp.bind(this)
		});
		/** @type {AsyncQueue<string, string, ContextHash>} */
		this.contextHashQueue = new AsyncQueue({
			name: "context hash",
			parallelism: 2,
			processor: this._readContextHash.bind(this)
		});
		/** @type {AsyncQueue<string, string, ContextTimestampAndHash>} */
		this.contextTshQueue = new AsyncQueue({
			name: "context hash and timestamp",
			parallelism: 2,
			processor: this._readContextTimestampAndHash.bind(this)
		});
		/** @type {AsyncQueue<string, string, string>} */
		this.managedItemQueue = new AsyncQueue({
			name: "managed item info",
			parallelism: 10,
			processor: this._getManagedItemInfo.bind(this)
		});
		/** @type {AsyncQueue<string, string, Set<string>>} */
		this.managedItemDirectoryQueue = new AsyncQueue({
			name: "managed item directory info",
			parallelism: 10,
			processor: this._getManagedItemDirectoryInfo.bind(this)
		});
		const _unmanagedPaths = Array.from(unmanagedPaths);
		this.unmanagedPathsWithSlash = /** @type {string[]} */ (
			_unmanagedPaths.filter(p => typeof p === "string")
		).map(p => join(fs, p, "_").slice(0, -1));
		this.unmanagedPathsRegExps = /** @type {RegExp[]} */ (
			_unmanagedPaths.filter(p => typeof p !== "string")
		);

		this.managedPaths = Array.from(managedPaths);
		this.managedPathsWithSlash = /** @type {string[]} */ (
			this.managedPaths.filter(p => typeof p === "string")
		).map(p => join(fs, p, "_").slice(0, -1));

		this.managedPathsRegExps = /** @type {RegExp[]} */ (
			this.managedPaths.filter(p => typeof p !== "string")
		);
		this.immutablePaths = Array.from(immutablePaths);
		this.immutablePathsWithSlash = /** @type {string[]} */ (
			this.immutablePaths.filter(p => typeof p === "string")
		).map(p => join(fs, p, "_").slice(0, -1));
		this.immutablePathsRegExps = /** @type {RegExp[]} */ (
			this.immutablePaths.filter(p => typeof p !== "string")
		);

		this._cachedDeprecatedFileTimestamps = undefined;
		this._cachedDeprecatedContextTimestamps = undefined;

		this._warnAboutExperimentalEsmTracking = false;

		this._statCreatedSnapshots = 0;
		this._statTestedSnapshotsCached = 0;
		this._statTestedSnapshotsNotCached = 0;
		this._statTestedChildrenCached = 0;
		this._statTestedChildrenNotCached = 0;
		this._statTestedEntries = 0;
	}

	logStatistics() {
		const logger = /** @type {Logger} */ (this.logger);
		/**
		 * @param {string} header header
		 * @param {string | undefined} message message
		 */
		const logWhenMessage = (header, message) => {
			if (message) {
				logger.log(`${header}: ${message}`);
			}
		};
		logger.log(`${this._statCreatedSnapshots} new snapshots created`);
		logger.log(
			`${
				this._statTestedSnapshotsNotCached &&
				Math.round(
					(this._statTestedSnapshotsNotCached * 100) /
						(this._statTestedSnapshotsCached +
							this._statTestedSnapshotsNotCached)
				)
			}% root snapshot uncached (${this._statTestedSnapshotsNotCached} / ${
				this._statTestedSnapshotsCached + this._statTestedSnapshotsNotCached
			})`
		);
		logger.log(
			`${
				this._statTestedChildrenNotCached &&
				Math.round(
					(this._statTestedChildrenNotCached * 100) /
						(this._statTestedChildrenCached + this._statTestedChildrenNotCached)
				)
			}% children snapshot uncached (${this._statTestedChildrenNotCached} / ${
				this._statTestedChildrenCached + this._statTestedChildrenNotCached
			})`
		);
		logger.log(`${this._statTestedEntries} entries tested`);
		logger.log(
			`File info in cache: ${this._fileTimestamps.size} timestamps ${this._fileHashes.size} hashes ${this._fileTshs.size} timestamp hash combinations`
		);
		logWhenMessage(
			"File timestamp snapshot optimization",
			this._fileTimestampsOptimization.getStatisticMessage()
		);
		logWhenMessage(
			"File hash snapshot optimization",
			this._fileHashesOptimization.getStatisticMessage()
		);
		logWhenMessage(
			"File timestamp hash combination snapshot optimization",
			this._fileTshsOptimization.getStatisticMessage()
		);
		logger.log(
			`Directory info in cache: ${this._contextTimestamps.size} timestamps ${this._contextHashes.size} hashes ${this._contextTshs.size} timestamp hash combinations`
		);
		logWhenMessage(
			"Directory timestamp snapshot optimization",
			this._contextTimestampsOptimization.getStatisticMessage()
		);
		logWhenMessage(
			"Directory hash snapshot optimization",
			this._contextHashesOptimization.getStatisticMessage()
		);
		logWhenMessage(
			"Directory timestamp hash combination snapshot optimization",
			this._contextTshsOptimization.getStatisticMessage()
		);
		logWhenMessage(
			"Missing items snapshot optimization",
			this._missingExistenceOptimization.getStatisticMessage()
		);
		logger.log(`Managed items info in cache: ${this._managedItems.size} items`);
		logWhenMessage(
			"Managed items snapshot optimization",
			this._managedItemInfoOptimization.getStatisticMessage()
		);
		logWhenMessage(
			"Managed files snapshot optimization",
			this._managedFilesOptimization.getStatisticMessage()
		);
		logWhenMessage(
			"Managed contexts snapshot optimization",
			this._managedContextsOptimization.getStatisticMessage()
		);
		logWhenMessage(
			"Managed missing snapshot optimization",
			this._managedMissingOptimization.getStatisticMessage()
		);
	}

	/**
	 * @param {string} path path
	 * @param {string} reason reason
	 * @param {any[]} args arguments
	 */
	_log(path, reason, ...args) {
		const key = path + reason;
		const loggedPaths = /** @type {LoggedPaths} */ (this._loggedPaths);
		if (loggedPaths.has(key)) return;
		loggedPaths.add(key);
		/** @type {Logger} */
		(this.logger).debug(`${path} invalidated because ${reason}`, ...args);
		if (--this._remainingLogs === 0) {
			/** @type {Logger} */
			(this.logger).debug(
				"Logging limit has been reached and no further logging will be emitted by FileSystemInfo"
			);
		}
	}

	clear() {
		this._remainingLogs = this.logger ? 40 : 0;
		if (this._loggedPaths !== undefined) this._loggedPaths.clear();

		this._snapshotCache = new WeakMap();
		this._fileTimestampsOptimization.clear();
		this._fileHashesOptimization.clear();
		this._fileTshsOptimization.clear();
		this._contextTimestampsOptimization.clear();
		this._contextHashesOptimization.clear();
		this._contextTshsOptimization.clear();
		this._missingExistenceOptimization.clear();
		this._managedItemInfoOptimization.clear();
		this._managedFilesOptimization.clear();
		this._managedContextsOptimization.clear();
		this._managedMissingOptimization.clear();
		this._fileTimestamps.clear();
		this._fileHashes.clear();
		this._fileTshs.clear();
		this._contextTimestamps.clear();
		this._contextHashes.clear();
		this._contextTshs.clear();
		this._managedItems.clear();
		this._managedItems.clear();

		this._cachedDeprecatedFileTimestamps = undefined;
		this._cachedDeprecatedContextTimestamps = undefined;

		this._statCreatedSnapshots = 0;
		this._statTestedSnapshotsCached = 0;
		this._statTestedSnapshotsNotCached = 0;
		this._statTestedChildrenCached = 0;
		this._statTestedChildrenNotCached = 0;
		this._statTestedEntries = 0;
	}

	/**
	 * @param {ReadonlyMap<string, FileSystemInfoEntry | "ignore" | null>} map timestamps
	 * @param {boolean=} immutable if 'map' is immutable and FileSystemInfo can keep referencing it
	 * @returns {void}
	 */
	addFileTimestamps(map, immutable) {
		this._fileTimestamps.addAll(map, immutable);
		this._cachedDeprecatedFileTimestamps = undefined;
	}

	/**
	 * @param {ReadonlyMap<string, FileSystemInfoEntry | "ignore" | null>} map timestamps
	 * @param {boolean=} immutable if 'map' is immutable and FileSystemInfo can keep referencing it
	 * @returns {void}
	 */
	addContextTimestamps(map, immutable) {
		this._contextTimestamps.addAll(map, immutable);
		this._cachedDeprecatedContextTimestamps = undefined;
	}

	/**
	 * @param {string} path file path
	 * @param {function((WebpackError | null)=, (FileSystemInfoEntry | "ignore" | null)=): void} callback callback function
	 * @returns {void}
	 */
	getFileTimestamp(path, callback) {
		const cache = this._fileTimestamps.get(path);
		if (cache !== undefined) return callback(null, cache);
		this.fileTimestampQueue.add(path, callback);
	}

	/**
	 * @param {string} path context path
	 * @param {function((WebpackError | null)=, (ResolvedContextFileSystemInfoEntry | "ignore" | null)=): void} callback callback function
	 * @returns {void}
	 */
	getContextTimestamp(path, callback) {
		const cache = this._contextTimestamps.get(path);
		if (cache !== undefined) {
			if (cache === "ignore") return callback(null, "ignore");
			const resolved = getResolvedTimestamp(cache);
			if (resolved !== undefined) return callback(null, resolved);
			return this._resolveContextTimestamp(
				/** @type {ResolvedContextFileSystemInfoEntry} */
				(cache),
				callback
			);
		}
		this.contextTimestampQueue.add(path, (err, _entry) => {
			if (err) return callback(err);
			const entry = /** @type {ContextFileSystemInfoEntry} */ (_entry);
			const resolved = getResolvedTimestamp(entry);
			if (resolved !== undefined) return callback(null, resolved);
			this._resolveContextTimestamp(entry, callback);
		});
	}

	/**
	 * @param {string} path context path
	 * @param {function((WebpackError | null)=, (ContextFileSystemInfoEntry | "ignore" | null)=): void} callback callback function
	 * @returns {void}
	 */
	_getUnresolvedContextTimestamp(path, callback) {
		const cache = this._contextTimestamps.get(path);
		if (cache !== undefined) return callback(null, cache);
		this.contextTimestampQueue.add(path, callback);
	}

	/**
	 * @param {string} path file path
	 * @param {function((WebpackError | null)=, (string | null)=): void} callback callback function
	 * @returns {void}
	 */
	getFileHash(path, callback) {
		const cache = this._fileHashes.get(path);
		if (cache !== undefined) return callback(null, cache);
		this.fileHashQueue.add(path, callback);
	}

	/**
	 * @param {string} path context path
	 * @param {function((WebpackError | null)=, string=): void} callback callback function
	 * @returns {void}
	 */
	getContextHash(path, callback) {
		const cache = this._contextHashes.get(path);
		if (cache !== undefined) {
			const resolved = getResolvedHash(cache);
			if (resolved !== undefined)
				return callback(null, /** @type {string} */ (resolved));
			return this._resolveContextHash(cache, callback);
		}
		this.contextHashQueue.add(path, (err, _entry) => {
			if (err) return callback(err);
			const entry = /** @type {ContextHash} */ (_entry);
			const resolved = getResolvedHash(entry);
			if (resolved !== undefined)
				return callback(null, /** @type {string} */ (resolved));
			this._resolveContextHash(entry, callback);
		});
	}

	/**
	 * @param {string} path context path
	 * @param {function((WebpackError | null)=, (ContextHash | null)=): void} callback callback function
	 * @returns {void}
	 */
	_getUnresolvedContextHash(path, callback) {
		const cache = this._contextHashes.get(path);
		if (cache !== undefined) return callback(null, cache);
		this.contextHashQueue.add(path, callback);
	}

	/**
	 * @param {string} path context path
	 * @param {function((WebpackError | null)=, (ResolvedContextTimestampAndHash | null)=): void} callback callback function
	 * @returns {void}
	 */
	getContextTsh(path, callback) {
		const cache = this._contextTshs.get(path);
		if (cache !== undefined) {
			const resolved = getResolvedTimestamp(cache);
			if (resolved !== undefined) return callback(null, resolved);
			return this._resolveContextTsh(cache, callback);
		}
		this.contextTshQueue.add(path, (err, _entry) => {
			if (err) return callback(err);
			const entry = /** @type {ContextTimestampAndHash} */ (_entry);
			const resolved = getResolvedTimestamp(entry);
			if (resolved !== undefined) return callback(null, resolved);
			this._resolveContextTsh(entry, callback);
		});
	}

	/**
	 * @param {string} path context path
	 * @param {function((WebpackError | null)=, (ContextTimestampAndHash | null)=): void} callback callback function
	 * @returns {void}
	 */
	_getUnresolvedContextTsh(path, callback) {
		const cache = this._contextTshs.get(path);
		if (cache !== undefined) return callback(null, cache);
		this.contextTshQueue.add(path, callback);
	}

	_createBuildDependenciesResolvers() {
		const resolveContext = createResolver({
			resolveToContext: true,
			exportsFields: [],
			fileSystem: this.fs
		});
		const resolveCjs = createResolver({
			extensions: [".js", ".json", ".node"],
			conditionNames: ["require", "node"],
			exportsFields: ["exports"],
			fileSystem: this.fs
		});
		const resolveCjsAsChild = createResolver({
			extensions: [".js", ".json", ".node"],
			conditionNames: ["require", "node"],
			exportsFields: [],
			fileSystem: this.fs
		});
		const resolveEsm = createResolver({
			extensions: [".js", ".json", ".node"],
			fullySpecified: true,
			conditionNames: ["import", "node"],
			exportsFields: ["exports"],
			fileSystem: this.fs
		});
		return { resolveContext, resolveEsm, resolveCjs, resolveCjsAsChild };
	}

	/**
	 * @param {string} context context directory
	 * @param {Iterable<string>} deps dependencies
	 * @param {function((Error | null)=, ResolveBuildDependenciesResult=): void} callback callback function
	 * @returns {void}
	 */
	resolveBuildDependencies(context, deps, callback) {
		const { resolveContext, resolveEsm, resolveCjs, resolveCjsAsChild } =
			this._createBuildDependenciesResolvers();

		/** @type {Set<string>} */
		const files = new Set();
		/** @type {Set<string>} */
		const fileSymlinks = new Set();
		/** @type {Set<string>} */
		const directories = new Set();
		/** @type {Set<string>} */
		const directorySymlinks = new Set();
		/** @type {Set<string>} */
		const missing = new Set();
		/** @type {Set<string>} */
		const resolveFiles = new Set();
		/** @type {Set<string>} */
		const resolveDirectories = new Set();
		/** @type {Set<string>} */
		const resolveMissing = new Set();
		/** @type {Map<string, string | false | undefined>} */
		const resolveResults = new Map();
		const invalidResolveResults = new Set();
		const resolverContext = {
			fileDependencies: resolveFiles,
			contextDependencies: resolveDirectories,
			missingDependencies: resolveMissing
		};
		/**
		 * @param {undefined | boolean | string} expected expected result
		 * @returns {string} expected result
		 */
		const expectedToString = expected =>
			expected ? ` (expected ${expected})` : "";
		/** @typedef {{ type: JobType, context: string | undefined, path: string, issuer: Job | undefined, expected: undefined | boolean | string }} Job */

		/**
		 * @param {Job} job job
		 * @returns {`resolve commonjs file ${string}${string}`|`resolve esm file ${string}${string}`|`resolve esm ${string}${string}`|`resolve directory ${string}`|`file ${string}`|`unknown ${string} ${string}`|`resolve commonjs ${string}${string}`|`directory ${string}`|`file dependencies ${string}`|`directory dependencies ${string}`} result
		 */
		const jobToString = job => {
			switch (job.type) {
				case RBDT_RESOLVE_CJS:
					return `resolve commonjs ${job.path}${expectedToString(
						job.expected
					)}`;
				case RBDT_RESOLVE_ESM:
					return `resolve esm ${job.path}${expectedToString(job.expected)}`;
				case RBDT_RESOLVE_DIRECTORY:
					return `resolve directory ${job.path}`;
				case RBDT_RESOLVE_CJS_FILE:
					return `resolve commonjs file ${job.path}${expectedToString(
						job.expected
					)}`;
				case RBDT_RESOLVE_ESM_FILE:
					return `resolve esm file ${job.path}${expectedToString(
						job.expected
					)}`;
				case RBDT_DIRECTORY:
					return `directory ${job.path}`;
				case RBDT_FILE:
					return `file ${job.path}`;
				case RBDT_DIRECTORY_DEPENDENCIES:
					return `directory dependencies ${job.path}`;
				case RBDT_FILE_DEPENDENCIES:
					return `file dependencies ${job.path}`;
			}
			return `unknown ${job.type} ${job.path}`;
		};
		/**
		 * @param {Job} job job
		 * @returns {string} string value
		 */
		const pathToString = job => {
			let result = ` at ${jobToString(job)}`;
			/** @type {Job | undefined} */
			(job) = job.issuer;
			while (job !== undefined) {
				result += `\n at ${jobToString(job)}`;
				job = /** @type {Job} */ (job.issuer);
			}
			return result;
		};
		const logger = /** @type {Logger} */ (this.logger);
		processAsyncTree(
			Array.from(
				deps,
				dep =>
					/** @type {Job} */ ({
						type: RBDT_RESOLVE_CJS,
						context,
						path: dep,
						expected: undefined,
						issuer: undefined
					})
			),
			20,
			(job, push, callback) => {
				const { type, context, path, expected } = job;
				/**
				 * @param {string} path path
				 * @returns {void}
				 */
				const resolveDirectory = path => {
					const key = `d\n${context}\n${path}`;
					if (resolveResults.has(key)) {
						return callback();
					}
					resolveResults.set(key, undefined);
					resolveContext(
						/** @type {string} */ (context),
						path,
						resolverContext,
						(err, _, result) => {
							if (err) {
								if (expected === false) {
									resolveResults.set(key, false);
									return callback();
								}
								invalidResolveResults.add(key);
								err.message += `\nwhile resolving '${path}' in ${context} to a directory`;
								return callback(err);
							}
							const resultPath = /** @type {ResolveRequest} */ (result).path;
							resolveResults.set(key, resultPath);
							push({
								type: RBDT_DIRECTORY,
								context: undefined,
								path: /** @type {string} */ (resultPath),
								expected: undefined,
								issuer: job
							});
							callback();
						}
					);
				};
				/**
				 * @param {string} path path
				 * @param {("f" | "c" | "e")=} symbol symbol
				 * @param {(ResolveFunctionAsync)=} resolve resolve fn
				 * @returns {void}
				 */
				const resolveFile = (path, symbol, resolve) => {
					const key = `${symbol}\n${context}\n${path}`;
					if (resolveResults.has(key)) {
						return callback();
					}
					resolveResults.set(key, undefined);
					/** @type {ResolveFunctionAsync} */
					(resolve)(
						/** @type {string} */ (context),
						path,
						resolverContext,
						(err, _, result) => {
							if (typeof expected === "string") {
								if (!err && result && result.path === expected) {
									resolveResults.set(key, result.path);
								} else {
									invalidResolveResults.add(key);
									logger.warn(
										`Resolving '${path}' in ${context} for build dependencies doesn't lead to expected result '${expected}', but to '${
											err || (result && result.path)
										}' instead. Resolving dependencies are ignored for this path.\n${pathToString(
											job
										)}`
									);
								}
							} else {
								if (err) {
									if (expected === false) {
										resolveResults.set(key, false);
										return callback();
									}
									invalidResolveResults.add(key);
									err.message += `\nwhile resolving '${path}' in ${context} as file\n${pathToString(
										job
									)}`;
									return callback(err);
								}
								const resultPath = /** @type {ResolveRequest} */ (result).path;
								resolveResults.set(key, resultPath);
								push({
									type: RBDT_FILE,
									context: undefined,
									path: /** @type {string} */ (resultPath),
									expected: undefined,
									issuer: job
								});
							}
							callback();
						}
					);
				};
				switch (type) {
					case RBDT_RESOLVE_CJS: {
						const isDirectory = /[\\/]$/.test(path);
						if (isDirectory) {
							resolveDirectory(path.slice(0, -1));
						} else {
							resolveFile(path, "f", resolveCjs);
						}
						break;
					}
					case RBDT_RESOLVE_ESM: {
						const isDirectory = /[\\/]$/.test(path);
						if (isDirectory) {
							resolveDirectory(path.slice(0, -1));
						} else {
							resolveFile(path);
						}
						break;
					}
					case RBDT_RESOLVE_DIRECTORY: {
						resolveDirectory(path);
						break;
					}
					case RBDT_RESOLVE_CJS_FILE: {
						resolveFile(path, "f", resolveCjs);
						break;
					}
					case RBDT_RESOLVE_CJS_FILE_AS_CHILD: {
						resolveFile(path, "c", resolveCjsAsChild);
						break;
					}
					case RBDT_RESOLVE_ESM_FILE: {
						resolveFile(path, "e", resolveEsm);
						break;
					}
					case RBDT_FILE: {
						if (files.has(path)) {
							callback();
							break;
						}
						files.add(path);
						/** @type {NonNullable<InputFileSystem["realpath"]>} */
						(this.fs.realpath)(path, (err, _realPath) => {
							if (err) return callback(err);
							const realPath = /** @type {string} */ (_realPath);
							if (realPath !== path) {
								fileSymlinks.add(path);
								resolveFiles.add(path);
								if (files.has(realPath)) return callback();
								files.add(realPath);
							}
							push({
								type: RBDT_FILE_DEPENDENCIES,
								context: undefined,
								path: realPath,
								expected: undefined,
								issuer: job
							});
							callback();
						});
						break;
					}
					case RBDT_DIRECTORY: {
						if (directories.has(path)) {
							callback();
							break;
						}
						directories.add(path);
						/** @type {NonNullable<InputFileSystem["realpath"]>} */
						(this.fs.realpath)(path, (err, _realPath) => {
							if (err) return callback(err);
							const realPath = /** @type {string} */ (_realPath);
							if (realPath !== path) {
								directorySymlinks.add(path);
								resolveFiles.add(path);
								if (directories.has(realPath)) return callback();
								directories.add(realPath);
							}
							push({
								type: RBDT_DIRECTORY_DEPENDENCIES,
								context: undefined,
								path: realPath,
								expected: undefined,
								issuer: job
							});
							callback();
						});
						break;
					}
					case RBDT_FILE_DEPENDENCIES: {
						// Check for known files without dependencies
						if (/\.json5?$|\.yarn-integrity$|yarn\.lock$|\.ya?ml/.test(path)) {
							process.nextTick(callback);
							break;
						}
						// Check commonjs cache for the module
						/** @type {NodeModule | undefined} */
						const module = require.cache[path];
						if (module && Array.isArray(module.children)) {
							children: for (const child of module.children) {
								const childPath = child.filename;
								if (childPath) {
									push({
										type: RBDT_FILE,
										context: undefined,
										path: childPath,
										expected: undefined,
										issuer: job
									});
									const context = dirname(this.fs, path);
									for (const modulePath of module.paths) {
										if (childPath.startsWith(modulePath)) {
											const subPath = childPath.slice(modulePath.length + 1);
											const packageMatch = /^(@[^\\/]+[\\/])[^\\/]+/.exec(
												subPath
											);
											if (packageMatch) {
												push({
													type: RBDT_FILE,
													context: undefined,
													path: `${
														modulePath +
														childPath[modulePath.length] +
														packageMatch[0] +
														childPath[modulePath.length]
													}package.json`,
													expected: false,
													issuer: job
												});
											}
											let request = subPath.replace(/\\/g, "/");
											if (request.endsWith(".js"))
												request = request.slice(0, -3);
											push({
												type: RBDT_RESOLVE_CJS_FILE_AS_CHILD,
												context,
												path: request,
												expected: child.filename,
												issuer: job
											});
											continue children;
										}
									}
									let request = relative(this.fs, context, childPath);
									if (request.endsWith(".js")) request = request.slice(0, -3);
									request = request.replace(/\\/g, "/");
									if (!request.startsWith("../") && !isAbsolute(request)) {
										request = `./${request}`;
									}
									push({
										type: RBDT_RESOLVE_CJS_FILE,
										context,
										path: request,
										expected: child.filename,
										issuer: job
									});
								}
							}
						} else if (supportsEsm && /\.m?js$/.test(path)) {
							if (!this._warnAboutExperimentalEsmTracking) {
								logger.log(
									"Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.\n" +
										"Until a full solution is available webpack uses an experimental ESM tracking based on parsing.\n" +
										"As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking."
								);
								this._warnAboutExperimentalEsmTracking = true;
							}
							const lexer = require("es-module-lexer");
							lexer.init.then(() => {
								this.fs.readFile(path, (err, content) => {
									if (err) return callback(err);
									try {
										const context = dirname(this.fs, path);
										const source = /** @type {Buffer} */ (content).toString();
										const [imports] = lexer.parse(source);
										for (const imp of imports) {
											try {
												let dependency;
												if (imp.d === -1) {
													// import ... from "..."
													dependency = parseString(
														source.substring(imp.s - 1, imp.e + 1)
													);
												} else if (imp.d > -1) {
													// import()
													const expr = source.substring(imp.s, imp.e).trim();
													dependency = parseString(expr);
												} else {
													// e.g. import.meta
													continue;
												}

												// we should not track Node.js build dependencies
												if (dependency.startsWith("node:")) continue;
												if (builtinModules.has(dependency)) continue;

												push({
													type: RBDT_RESOLVE_ESM_FILE,
													context,
													path: dependency,
													expected: imp.d > -1 ? false : undefined,
													issuer: job
												});
											} catch (err1) {
												logger.warn(
													`Parsing of ${path} for build dependencies failed at 'import(${source.substring(
														imp.s,
														imp.e
													)})'.\n` +
														"Build dependencies behind this expression are ignored and might cause incorrect cache invalidation."
												);
												logger.debug(pathToString(job));
												logger.debug(/** @type {Error} */ (err1).stack);
											}
										}
									} catch (err2) {
										logger.warn(
											`Parsing of ${path} for build dependencies failed and all dependencies of this file are ignored, which might cause incorrect cache invalidation..`
										);
										logger.debug(pathToString(job));
										logger.debug(/** @type {Error} */ (err2).stack);
									}
									process.nextTick(callback);
								});
							}, callback);
							break;
						} else {
							logger.log(
								`Assuming ${path} has no dependencies as we were unable to assign it to any module system.`
							);
							logger.debug(pathToString(job));
						}
						process.nextTick(callback);
						break;
					}
					case RBDT_DIRECTORY_DEPENDENCIES: {
						const match =
							/(^.+[\\/]node_modules[\\/](?:@[^\\/]+[\\/])?[^\\/]+)/.exec(path);
						const packagePath = match ? match[1] : path;
						const packageJson = join(this.fs, packagePath, "package.json");
						this.fs.readFile(packageJson, (err, content) => {
							if (err) {
								if (err.code === "ENOENT") {
									resolveMissing.add(packageJson);
									const parent = dirname(this.fs, packagePath);
									if (parent !== packagePath) {
										push({
											type: RBDT_DIRECTORY_DEPENDENCIES,
											context: undefined,
											path: parent,
											expected: undefined,
											issuer: job
										});
									}
									callback();
									return;
								}
								return callback(err);
							}
							resolveFiles.add(packageJson);
							let packageData;
							try {
								packageData = JSON.parse(
									/** @type {Buffer} */ (content).toString("utf-8")
								);
							} catch (parseErr) {
								return callback(/** @type {Error} */ (parseErr));
							}
							const depsObject = packageData.dependencies;
							const optionalDepsObject = packageData.optionalDependencies;
							const allDeps = new Set();
							const optionalDeps = new Set();
							if (typeof depsObject === "object" && depsObject) {
								for (const dep of Object.keys(depsObject)) {
									allDeps.add(dep);
								}
							}
							if (
								typeof optionalDepsObject === "object" &&
								optionalDepsObject
							) {
								for (const dep of Object.keys(optionalDepsObject)) {
									allDeps.add(dep);
									optionalDeps.add(dep);
								}
							}
							for (const dep of allDeps) {
								push({
									type: RBDT_RESOLVE_DIRECTORY,
									context: packagePath,
									path: dep,
									expected: !optionalDeps.has(dep),
									issuer: job
								});
							}
							callback();
						});
						break;
					}
				}
			},
			err => {
				if (err) return callback(err);
				for (const l of fileSymlinks) files.delete(l);
				for (const l of directorySymlinks) directories.delete(l);
				for (const k of invalidResolveResults) resolveResults.delete(k);
				callback(null, {
					files,
					directories,
					missing,
					resolveResults,
					resolveDependencies: {
						files: resolveFiles,
						directories: resolveDirectories,
						missing: resolveMissing
					}
				});
			}
		);
	}

	/**
	 * @param {Map<string, string | false>} resolveResults results from resolving
	 * @param {function((Error | null)=, boolean=): void} callback callback with true when resolveResults resolve the same way
	 * @returns {void}
	 */
	checkResolveResultsValid(resolveResults, callback) {
		const { resolveCjs, resolveCjsAsChild, resolveEsm, resolveContext } =
			this._createBuildDependenciesResolvers();
		asyncLib.eachLimit(
			resolveResults,
			20,
			([key, expectedResult], callback) => {
				const [type, context, path] = key.split("\n");
				switch (type) {
					case "d":
						resolveContext(context, path, {}, (err, _, result) => {
							if (expectedResult === false)
								return callback(err ? undefined : INVALID);
							if (err) return callback(err);
							const resultPath = /** @type {ResolveRequest} */ (result).path;
							if (resultPath !== expectedResult) return callback(INVALID);
							callback();
						});
						break;
					case "f":
						resolveCjs(context, path, {}, (err, _, result) => {
							if (expectedResult === false)
								return callback(err ? undefined : INVALID);
							if (err) return callback(err);
							const resultPath = /** @type {ResolveRequest} */ (result).path;
							if (resultPath !== expectedResult) return callback(INVALID);
							callback();
						});
						break;
					case "c":
						resolveCjsAsChild(context, path, {}, (err, _, result) => {
							if (expectedResult === false)
								return callback(err ? undefined : INVALID);
							if (err) return callback(err);
							const resultPath = /** @type {ResolveRequest} */ (result).path;
							if (resultPath !== expectedResult) return callback(INVALID);
							callback();
						});
						break;
					case "e":
						resolveEsm(context, path, {}, (err, _, result) => {
							if (expectedResult === false)
								return callback(err ? undefined : INVALID);
							if (err) return callback(err);
							const resultPath = /** @type {ResolveRequest} */ (result).path;
							if (resultPath !== expectedResult) return callback(INVALID);
							callback();
						});
						break;
					default:
						callback(new Error("Unexpected type in resolve result key"));
						break;
				}
			},
			/**
			 * @param {Error | typeof INVALID=} err error or invalid flag
			 * @returns {void}
			 */
			err => {
				if (err === INVALID) {
					return callback(null, false);
				}
				if (err) {
					return callback(err);
				}
				return callback(null, true);
			}
		);
	}

	/**
	 * @param {number | null | undefined} startTime when processing the files has started
	 * @param {Iterable<string> | null} files all files
	 * @param {Iterable<string> | null} directories all directories
	 * @param {Iterable<string> | null} missing all missing files or directories
	 * @param {SnapshotOptions | null | undefined} options options object (for future extensions)
	 * @param {function(WebpackError | null, Snapshot | null): void} callback callback function
	 * @returns {void}
	 */
	createSnapshot(startTime, files, directories, missing, options, callback) {
		/** @type {FileTimestamps} */
		const fileTimestamps = new Map();
		/** @type {FileHashes} */
		const fileHashes = new Map();
		/** @type {FileTshs} */
		const fileTshs = new Map();
		/** @type {ContextTimestamps} */
		const contextTimestamps = new Map();
		/** @type {ContextHashes} */
		const contextHashes = new Map();
		/** @type {ContextTshs} */
		const contextTshs = new Map();
		/** @type {MissingExistence} */
		const missingExistence = new Map();
		/** @type {ManagedItemInfo} */
		const managedItemInfo = new Map();
		/** @type {ManagedFiles} */
		const managedFiles = new Set();
		/** @type {ManagedContexts} */
		const managedContexts = new Set();
		/** @type {ManagedMissing} */
		const managedMissing = new Set();
		/** @type {Children} */
		const children = new Set();

		const snapshot = new Snapshot();
		if (startTime) snapshot.setStartTime(startTime);

		/** @type {Set<string>} */
		const managedItems = new Set();

		/** 1 = timestamp, 2 = hash, 3 = timestamp + hash */
		const mode = options && options.hash ? (options.timestamp ? 3 : 2) : 1;

		let jobs = 1;
		const jobDone = () => {
			if (--jobs === 0) {
				if (fileTimestamps.size !== 0) {
					snapshot.setFileTimestamps(fileTimestamps);
				}
				if (fileHashes.size !== 0) {
					snapshot.setFileHashes(fileHashes);
				}
				if (fileTshs.size !== 0) {
					snapshot.setFileTshs(fileTshs);
				}
				if (contextTimestamps.size !== 0) {
					snapshot.setContextTimestamps(contextTimestamps);
				}
				if (contextHashes.size !== 0) {
					snapshot.setContextHashes(contextHashes);
				}
				if (contextTshs.size !== 0) {
					snapshot.setContextTshs(contextTshs);
				}
				if (missingExistence.size !== 0) {
					snapshot.setMissingExistence(missingExistence);
				}
				if (managedItemInfo.size !== 0) {
					snapshot.setManagedItemInfo(managedItemInfo);
				}
				this._managedFilesOptimization.optimize(snapshot, managedFiles);
				if (managedFiles.size !== 0) {
					snapshot.setManagedFiles(managedFiles);
				}
				this._managedContextsOptimization.optimize(snapshot, managedContexts);
				if (managedContexts.size !== 0) {
					snapshot.setManagedContexts(managedContexts);
				}
				this._managedMissingOptimization.optimize(snapshot, managedMissing);
				if (managedMissing.size !== 0) {
					snapshot.setManagedMissing(managedMissing);
				}
				if (children.size !== 0) {
					snapshot.setChildren(children);
				}
				this._snapshotCache.set(snapshot, true);
				this._statCreatedSnapshots++;

				callback(null, snapshot);
			}
		};
		const jobError = () => {
			if (jobs > 0) {
				// large negative number instead of NaN or something else to keep jobs to stay a SMI (v8)
				jobs = -100000000;
				callback(null, null);
			}
		};
		/**
		 * @param {string} path path
		 * @param {Set<string>} managedSet managed set
		 * @returns {boolean} true when managed
		 */
		const checkManaged = (path, managedSet) => {
			for (const unmanagedPath of this.unmanagedPathsRegExps) {
				if (unmanagedPath.test(path)) return false;
			}
			for (const unmanagedPath of this.unmanagedPathsWithSlash) {
				if (path.startsWith(unmanagedPath)) return false;
			}
			for (const immutablePath of this.immutablePathsRegExps) {
				if (immutablePath.test(path)) {
					managedSet.add(path);
					return true;
				}
			}
			for (const immutablePath of this.immutablePathsWithSlash) {
				if (path.startsWith(immutablePath)) {
					managedSet.add(path);
					return true;
				}
			}
			for (const managedPath of this.managedPathsRegExps) {
				const match = managedPath.exec(path);
				if (match) {
					const managedItem = getManagedItem(match[1], path);
					if (managedItem) {
						managedItems.add(managedItem);
						managedSet.add(path);
						return true;
					}
				}
			}
			for (const managedPath of this.managedPathsWithSlash) {
				if (path.startsWith(managedPath)) {
					const managedItem = getManagedItem(managedPath, path);
					if (managedItem) {
						managedItems.add(managedItem);
						managedSet.add(path);
						return true;
					}
				}
			}
			return false;
		};
		/**
		 * @param {Iterable<string>} items items
		 * @param {Set<string>} managedSet managed set
		 * @returns {Set<string>} result
		 */
		const captureNonManaged = (items, managedSet) => {
			const capturedItems = new Set();
			for (const path of items) {
				if (!checkManaged(path, managedSet)) capturedItems.add(path);
			}
			return capturedItems;
		};
		/**
		 * @param {Set<string>} capturedFiles captured files
		 */
		const processCapturedFiles = capturedFiles => {
			switch (mode) {
				case 3:
					this._fileTshsOptimization.optimize(snapshot, capturedFiles);
					for (const path of capturedFiles) {
						const cache = this._fileTshs.get(path);
						if (cache !== undefined) {
							fileTshs.set(path, cache);
						} else {
							jobs++;
							this._getFileTimestampAndHash(path, (err, entry) => {
								if (err) {
									if (this.logger) {
										this.logger.debug(
											`Error snapshotting file timestamp hash combination of ${path}: ${err.stack}`
										);
									}
									jobError();
								} else {
									fileTshs.set(path, /** @type {TimestampAndHash} */ (entry));
									jobDone();
								}
							});
						}
					}
					break;
				case 2:
					this._fileHashesOptimization.optimize(snapshot, capturedFiles);
					for (const path of capturedFiles) {
						const cache = this._fileHashes.get(path);
						if (cache !== undefined) {
							fileHashes.set(path, cache);
						} else {
							jobs++;
							this.fileHashQueue.add(path, (err, entry) => {
								if (err) {
									if (this.logger) {
										this.logger.debug(
											`Error snapshotting file hash of ${path}: ${err.stack}`
										);
									}
									jobError();
								} else {
									fileHashes.set(path, /** @type {string} */ (entry));
									jobDone();
								}
							});
						}
					}
					break;
				case 1:
					this._fileTimestampsOptimization.optimize(snapshot, capturedFiles);
					for (const path of capturedFiles) {
						const cache = this._fileTimestamps.get(path);
						if (cache !== undefined) {
							if (cache !== "ignore") {
								fileTimestamps.set(path, cache);
							}
						} else {
							jobs++;
							this.fileTimestampQueue.add(path, (err, entry) => {
								if (err) {
									if (this.logger) {
										this.logger.debug(
											`Error snapshotting file timestamp of ${path}: ${err.stack}`
										);
									}
									jobError();
								} else {
									fileTimestamps.set(
										path,
										/** @type {FileSystemInfoEntry} */
										(entry)
									);
									jobDone();
								}
							});
						}
					}
					break;
			}
		};
		if (files) {
			processCapturedFiles(captureNonManaged(files, managedFiles));
		}
		/**
		 * @param {Set<string>} capturedDirectories captured directories
		 */
		const processCapturedDirectories = capturedDirectories => {
			switch (mode) {
				case 3:
					this._contextTshsOptimization.optimize(snapshot, capturedDirectories);
					for (const path of capturedDirectories) {
						const cache = this._contextTshs.get(path);
						/** @type {ResolvedContextTimestampAndHash | null | undefined} */
						let resolved;
						if (
							cache !== undefined &&
							(resolved = getResolvedTimestamp(cache)) !== undefined
						) {
							contextTshs.set(path, resolved);
						} else {
							jobs++;
							/**
							 * @param {(WebpackError | null)=} err error
							 * @param {(ResolvedContextTimestampAndHash | null)=} entry entry
							 * @returns {void}
							 */
							const callback = (err, entry) => {
								if (err) {
									if (this.logger) {
										this.logger.debug(
											`Error snapshotting context timestamp hash combination of ${path}: ${err.stack}`
										);
									}
									jobError();
								} else {
									contextTshs.set(
										path,
										/** @type {ResolvedContextTimestampAndHash | null} */
										(entry)
									);
									jobDone();
								}
							};
							if (cache !== undefined) {
								this._resolveContextTsh(cache, callback);
							} else {
								this.getContextTsh(path, callback);
							}
						}
					}
					break;
				case 2:
					this._contextHashesOptimization.optimize(
						snapshot,
						capturedDirectories
					);
					for (const path of capturedDirectories) {
						const cache = this._contextHashes.get(path);
						let resolved;
						if (
							cache !== undefined &&
							(resolved = getResolvedHash(cache)) !== undefined
						) {
							contextHashes.set(path, resolved);
						} else {
							jobs++;
							/**
							 * @param {(WebpackError | null)=} err err
							 * @param {string=} entry entry
							 */
							const callback = (err, entry) => {
								if (err) {
									if (this.logger) {
										this.logger.debug(
											`Error snapshotting context hash of ${path}: ${err.stack}`
										);
									}
									jobError();
								} else {
									contextHashes.set(path, /** @type {string} */ (entry));
									jobDone();
								}
							};
							if (cache !== undefined) {
								this._resolveContextHash(cache, callback);
							} else {
								this.getContextHash(path, callback);
							}
						}
					}
					break;
				case 1:
					this._contextTimestampsOptimization.optimize(
						snapshot,
						capturedDirectories
					);
					for (const path of capturedDirectories) {
						const cache = this._contextTimestamps.get(path);
						if (cache === "ignore") continue;
						let resolved;
						if (
							cache !== undefined &&
							(resolved = getResolvedTimestamp(cache)) !== undefined
						) {
							contextTimestamps.set(path, resolved);
						} else {
							jobs++;
							/**
							 * @param {(Error | null)=} err error
							 * @param {(FileSystemInfoEntry | "ignore" | null)=} entry entry
							 * @returns {void}
							 */
							const callback = (err, entry) => {
								if (err) {
									if (this.logger) {
										this.logger.debug(
											`Error snapshotting context timestamp of ${path}: ${err.stack}`
										);
									}
									jobError();
								} else {
									contextTimestamps.set(
										path,
										/** @type {FileSystemInfoEntry | null} */
										(entry)
									);
									jobDone();
								}
							};
							if (cache !== undefined) {
								this._resolveContextTimestamp(
									/** @type {ContextFileSystemInfoEntry} */
									(cache),
									callback
								);
							} else {
								this.getContextTimestamp(path, callback);
							}
						}
					}
					break;
			}
		};
		if (directories) {
			processCapturedDirectories(
				captureNonManaged(directories, managedContexts)
			);
		}
		/**
		 * @param {Set<string>} capturedMissing captured missing
		 */
		const processCapturedMissing = capturedMissing => {
			this._missingExistenceOptimization.optimize(snapshot, capturedMissing);
			for (const path of capturedMissing) {
				const cache = this._fileTimestamps.get(path);
				if (cache !== undefined) {
					if (cache !== "ignore") {
						missingExistence.set(path, Boolean(cache));
					}
				} else {
					jobs++;
					this.fileTimestampQueue.add(path, (err, entry) => {
						if (err) {
							if (this.logger) {
								this.logger.debug(
									`Error snapshotting missing timestamp of ${path}: ${err.stack}`
								);
							}
							jobError();
						} else {
							missingExistence.set(path, Boolean(entry));
							jobDone();
						}
					});
				}
			}
		};
		if (missing) {
			processCapturedMissing(captureNonManaged(missing, managedMissing));
		}
		this._managedItemInfoOptimization.optimize(snapshot, managedItems);
		for (const path of managedItems) {
			const cache = this._managedItems.get(path);
			if (cache !== undefined) {
				if (!cache.startsWith("*")) {
					managedFiles.add(join(this.fs, path, "package.json"));
				} else if (cache === "*nested") {
					managedMissing.add(join(this.fs, path, "package.json"));
				}
				managedItemInfo.set(path, cache);
			} else {
				jobs++;
				this.managedItemQueue.add(path, (err, entry) => {
					if (err) {
						if (this.logger) {
							this.logger.debug(
								`Error snapshotting managed item ${path}: ${err.stack}`
							);
						}
						jobError();
					} else if (entry) {
						if (!entry.startsWith("*")) {
							managedFiles.add(join(this.fs, path, "package.json"));
						} else if (cache === "*nested") {
							managedMissing.add(join(this.fs, path, "package.json"));
						}
						managedItemInfo.set(path, entry);
						jobDone();
					} else {
						// Fallback to normal snapshotting
						/**
						 * @param {Set<string>} set set
						 * @param {function(Set<string>): void} fn fn
						 */
						const process = (set, fn) => {
							if (set.size === 0) return;
							const captured = new Set();
							for (const file of set) {
								if (file.startsWith(path)) captured.add(file);
							}
							if (captured.size > 0) fn(captured);
						};
						process(managedFiles, processCapturedFiles);
						process(managedContexts, processCapturedDirectories);
						process(managedMissing, processCapturedMissing);
						jobDone();
					}
				});
			}
		}
		jobDone();
	}

	/**
	 * @param {Snapshot} snapshot1 a snapshot
	 * @param {Snapshot} snapshot2 a snapshot
	 * @returns {Snapshot} merged snapshot
	 */
	mergeSnapshots(snapshot1, snapshot2) {
		const snapshot = new Snapshot();
		if (snapshot1.hasStartTime() && snapshot2.hasStartTime()) {
			snapshot.setStartTime(
				Math.min(
					/** @type {NonNullable<Snapshot["startTime"]>} */
					(snapshot1.startTime),
					/** @type {NonNullable<Snapshot["startTime"]>} */
					(snapshot2.startTime)
				)
			);
		} else if (snapshot2.hasStartTime()) {
			snapshot.startTime = snapshot2.startTime;
		} else if (snapshot1.hasStartTime()) {
			snapshot.startTime = snapshot1.startTime;
		}
		if (snapshot1.hasFileTimestamps() || snapshot2.hasFileTimestamps()) {
			snapshot.setFileTimestamps(
				mergeMaps(snapshot1.fileTimestamps, snapshot2.fileTimestamps)
			);
		}
		if (snapshot1.hasFileHashes() || snapshot2.hasFileHashes()) {
			snapshot.setFileHashes(
				mergeMaps(snapshot1.fileHashes, snapshot2.fileHashes)
			);
		}
		if (snapshot1.hasFileTshs() || snapshot2.hasFileTshs()) {
			snapshot.setFileTshs(mergeMaps(snapshot1.fileTshs, snapshot2.fileTshs));
		}
		if (snapshot1.hasContextTimestamps() || snapshot2.hasContextTimestamps()) {
			snapshot.setContextTimestamps(
				mergeMaps(snapshot1.contextTimestamps, snapshot2.contextTimestamps)
			);
		}
		if (snapshot1.hasContextHashes() || snapshot2.hasContextHashes()) {
			snapshot.setContextHashes(
				mergeMaps(snapshot1.contextHashes, snapshot2.contextHashes)
			);
		}
		if (snapshot1.hasContextTshs() || snapshot2.hasContextTshs()) {
			snapshot.setContextTshs(
				mergeMaps(snapshot1.contextTshs, snapshot2.contextTshs)
			);
		}
		if (snapshot1.hasMissingExistence() || snapshot2.hasMissingExistence()) {
			snapshot.setMissingExistence(
				mergeMaps(snapshot1.missingExistence, snapshot2.missingExistence)
			);
		}
		if (snapshot1.hasManagedItemInfo() || snapshot2.hasManagedItemInfo()) {
			snapshot.setManagedItemInfo(
				mergeMaps(snapshot1.managedItemInfo, snapshot2.managedItemInfo)
			);
		}
		if (snapshot1.hasManagedFiles() || snapshot2.hasManagedFiles()) {
			snapshot.setManagedFiles(
				mergeSets(snapshot1.managedFiles, snapshot2.managedFiles)
			);
		}
		if (snapshot1.hasManagedContexts() || snapshot2.hasManagedContexts()) {
			snapshot.setManagedContexts(
				mergeSets(snapshot1.managedContexts, snapshot2.managedContexts)
			);
		}
		if (snapshot1.hasManagedMissing() || snapshot2.hasManagedMissing()) {
			snapshot.setManagedMissing(
				mergeSets(snapshot1.managedMissing, snapshot2.managedMissing)
			);
		}
		if (snapshot1.hasChildren() || snapshot2.hasChildren()) {
			snapshot.setChildren(mergeSets(snapshot1.children, snapshot2.children));
		}
		if (
			this._snapshotCache.get(snapshot1) === true &&
			this._snapshotCache.get(snapshot2) === true
		) {
			this._snapshotCache.set(snapshot, true);
		}
		return snapshot;
	}

	/**
	 * @param {Snapshot} snapshot the snapshot made
	 * @param {function((WebpackError | null)=, boolean=): void} callback callback function
	 * @returns {void}
	 */
	checkSnapshotValid(snapshot, callback) {
		const cachedResult = this._snapshotCache.get(snapshot);
		if (cachedResult !== undefined) {
			this._statTestedSnapshotsCached++;
			if (typeof cachedResult === "boolean") {
				callback(null, cachedResult);
			} else {
				cachedResult.push(callback);
			}
			return;
		}
		this._statTestedSnapshotsNotCached++;
		this._checkSnapshotValidNoCache(snapshot, callback);
	}

	/**
	 * @param {Snapshot} snapshot the snapshot made
	 * @param {function((WebpackError | null)=, boolean=): void} callback callback function
	 * @returns {void}
	 */
	_checkSnapshotValidNoCache(snapshot, callback) {
		/** @type {number | undefined} */
		let startTime;
		if (snapshot.hasStartTime()) {
			startTime = snapshot.startTime;
		}
		let jobs = 1;
		const jobDone = () => {
			if (--jobs === 0) {
				this._snapshotCache.set(snapshot, true);
				callback(null, true);
			}
		};
		const invalid = () => {
			if (jobs > 0) {
				// large negative number instead of NaN or something else to keep jobs to stay a SMI (v8)
				jobs = -100000000;
				this._snapshotCache.set(snapshot, false);
				callback(null, false);
			}
		};
		/**
		 * @param {string} path path
		 * @param {WebpackError} err err
		 */
		const invalidWithError = (path, err) => {
			if (this._remainingLogs > 0) {
				this._log(path, "error occurred: %s", err);
			}
			invalid();
		};
		/**
		 * @param {string} path file path
		 * @param {string | null} current current hash
		 * @param {string | null} snap snapshot hash
		 * @returns {boolean} true, if ok
		 */
		const checkHash = (path, current, snap) => {
			if (current !== snap) {
				// If hash differ it's invalid
				if (this._remainingLogs > 0) {
					this._log(path, "hashes differ (%s != %s)", current, snap);
				}
				return false;
			}
			return true;
		};
		/**
		 * @param {string} path file path
		 * @param {boolean} current current entry
		 * @param {boolean} snap entry from snapshot
		 * @returns {boolean} true, if ok
		 */
		const checkExistence = (path, current, snap) => {
			if (!current !== !snap) {
				// If existence of item differs
				// it's invalid
				if (this._remainingLogs > 0) {
					this._log(
						path,
						current ? "it didn't exist before" : "it does no longer exist"
					);
				}
				return false;
			}
			return true;
		};
		/**
		 * @param {string} path file path
		 * @param {FileSystemInfoEntry | null} c current entry
		 * @param {FileSystemInfoEntry | null} s entry from snapshot
		 * @param {boolean} log log reason
		 * @returns {boolean} true, if ok
		 */
		const checkFile = (path, c, s, log = true) => {
			if (c === s) return true;
			if (!checkExistence(path, Boolean(c), Boolean(s))) return false;
			if (c) {
				// For existing items only
				if (typeof startTime === "number" && c.safeTime > startTime) {
					// If a change happened after starting reading the item
					// this may no longer be valid
					if (log && this._remainingLogs > 0) {
						this._log(
							path,
							"it may have changed (%d) after the start time of the snapshot (%d)",
							c.safeTime,
							startTime
						);
					}
					return false;
				}
				const snap = /** @type {FileSystemInfoEntry} */ (s);
				if (snap.timestamp !== undefined && c.timestamp !== snap.timestamp) {
					// If we have a timestamp (it was a file or symlink) and it differs from current timestamp
					// it's invalid
					if (log && this._remainingLogs > 0) {
						this._log(
							path,
							"timestamps differ (%d != %d)",
							c.timestamp,
							snap.timestamp
						);
					}
					return false;
				}
			}
			return true;
		};
		/**
		 * @param {string} path file path
		 * @param {ResolvedContextFileSystemInfoEntry | null} c current entry
		 * @param {ResolvedContextFileSystemInfoEntry | null} s entry from snapshot
		 * @param {boolean} log log reason
		 * @returns {boolean} true, if ok
		 */
		const checkContext = (path, c, s, log = true) => {
			if (c === s) return true;
			if (!checkExistence(path, Boolean(c), Boolean(s))) return false;
			if (c) {
				// For existing items only
				if (typeof startTime === "number" && c.safeTime > startTime) {
					// If a change happened after starting reading the item
					// this may no longer be valid
					if (log && this._remainingLogs > 0) {
						this._log(
							path,
							"it may have changed (%d) after the start time of the snapshot (%d)",
							c.safeTime,
							startTime
						);
					}
					return false;
				}
				const snap = /** @type {ResolvedContextFileSystemInfoEntry} */ (s);
				if (
					snap.timestampHash !== undefined &&
					c.timestampHash !== snap.timestampHash
				) {
					// If we have a timestampHash (it was a directory) and it differs from current timestampHash
					// it's invalid
					if (log && this._remainingLogs > 0) {
						this._log(
							path,
							"timestamps hashes differ (%s != %s)",
							c.timestampHash,
							snap.timestampHash
						);
					}
					return false;
				}
			}
			return true;
		};
		if (snapshot.hasChildren()) {
			/**
			 * @param {(WebpackError | null)=} err err
			 * @param {boolean=} result result
			 * @returns {void}
			 */
			const childCallback = (err, result) => {
				if (err || !result) return invalid();
				jobDone();
			};
			for (const child of /** @type {Children} */ (snapshot.children)) {
				const cache = this._snapshotCache.get(child);
				if (cache !== undefined) {
					this._statTestedChildrenCached++;
					/* istanbul ignore else */
					if (typeof cache === "boolean") {
						if (cache === false) {
							invalid();
							return;
						}
					} else {
						jobs++;
						cache.push(childCallback);
					}
				} else {
					this._statTestedChildrenNotCached++;
					jobs++;
					this._checkSnapshotValidNoCache(child, childCallback);
				}
			}
		}
		if (snapshot.hasFileTimestamps()) {
			const fileTimestamps =
				/** @type {FileTimestamps} */
				(snapshot.fileTimestamps);
			this._statTestedEntries += fileTimestamps.size;
			for (const [path, ts] of fileTimestamps) {
				const cache = this._fileTimestamps.get(path);
				if (cache !== undefined) {
					if (cache !== "ignore" && !checkFile(path, cache, ts)) {
						invalid();
						return;
					}
				} else {
					jobs++;
					this.fileTimestampQueue.add(path, (err, entry) => {
						if (err) return invalidWithError(path, err);
						if (
							!checkFile(
								path,
								/** @type {FileSystemInfoEntry | null} */ (entry),
								ts
							)
						) {
							invalid();
						} else {
							jobDone();
						}
					});
				}
			}
		}
		/**
		 * @param {string} path file path
		 * @param {string | null} hash hash
		 */
		const processFileHashSnapshot = (path, hash) => {
			const cache = this._fileHashes.get(path);
			if (cache !== undefined) {
				if (cache !== "ignore" && !checkHash(path, cache, hash)) {
					invalid();
				}
			} else {
				jobs++;
				this.fileHashQueue.add(path, (err, entry) => {
					if (err) return invalidWithError(path, err);
					if (!checkHash(path, /** @type {string} */ (entry), hash)) {
						invalid();
					} else {
						jobDone();
					}
				});
			}
		};
		if (snapshot.hasFileHashes()) {
			const fileHashes = /** @type {FileHashes} */ (snapshot.fileHashes);
			this._statTestedEntries += fileHashes.size;
			for (const [path, hash] of fileHashes) {
				processFileHashSnapshot(path, hash);
			}
		}
		if (snapshot.hasFileTshs()) {
			const fileTshs = /** @type {FileTshs} */ (snapshot.fileTshs);
			this._statTestedEntries += fileTshs.size;
			for (const [path, tsh] of fileTshs) {
				if (typeof tsh === "string") {
					processFileHashSnapshot(path, tsh);
				} else {
					const cache = this._fileTimestamps.get(path);
					if (cache !== undefined) {
						if (cache === "ignore" || !checkFile(path, cache, tsh, false)) {
							processFileHashSnapshot(path, tsh && tsh.hash);
						}
					} else {
						jobs++;
						this.fileTimestampQueue.add(path, (err, entry) => {
							if (err) return invalidWithError(path, err);
							if (
								!checkFile(
									path,
									/** @type {FileSystemInfoEntry | null} */
									(entry),
									tsh,
									false
								)
							) {
								processFileHashSnapshot(path, tsh && tsh.hash);
							}
							jobDone();
						});
					}
				}
			}
		}
		if (snapshot.hasContextTimestamps()) {
			const contextTimestamps =
				/** @type {ContextTimestamps} */
				(snapshot.contextTimestamps);
			this._statTestedEntries += contextTimestamps.size;
			for (const [path, ts] of contextTimestamps) {
				const cache = this._contextTimestamps.get(path);
				if (cache === "ignore") continue;
				let resolved;
				if (
					cache !== undefined &&
					(resolved = getResolvedTimestamp(cache)) !== undefined
				) {
					if (!checkContext(path, resolved, ts)) {
						invalid();
						return;
					}
				} else {
					jobs++;
					/**
					 * @param {(WebpackError | null)=} err error
					 * @param {(ResolvedContextFileSystemInfoEntry | "ignore" | null)=} entry entry
					 * @returns {void}
					 */
					const callback = (err, entry) => {
						if (err) return invalidWithError(path, err);
						if (
							!checkContext(
								path,
								/** @type {ResolvedContextFileSystemInfoEntry | null} */
								(entry),
								ts
							)
						) {
							invalid();
						} else {
							jobDone();
						}
					};
					if (cache !== undefined) {
						this._resolveContextTimestamp(
							/** @type {ContextFileSystemInfoEntry} */
							(cache),
							callback
						);
					} else {
						this.getContextTimestamp(path, callback);
					}
				}
			}
		}
		/**
		 * @param {string} path path
		 * @param {string | null} hash hash
		 */
		const processContextHashSnapshot = (path, hash) => {
			const cache = this._contextHashes.get(path);
			let resolved;
			if (
				cache !== undefined &&
				(resolved = getResolvedHash(cache)) !== undefined
			) {
				if (!checkHash(path, resolved, hash)) {
					invalid();
				}
			} else {
				jobs++;
				/**
				 * @param {(WebpackError | null)=} err err
				 * @param {string=} entry entry
				 * @returns {void}
				 */
				const callback = (err, entry) => {
					if (err) return invalidWithError(path, err);
					if (!checkHash(path, /** @type {string} */ (entry), hash)) {
						invalid();
					} else {
						jobDone();
					}
				};
				if (cache !== undefined) {
					this._resolveContextHash(cache, callback);
				} else {
					this.getContextHash(path, callback);
				}
			}
		};
		if (snapshot.hasContextHashes()) {
			const contextHashes =
				/** @type {ContextHashes} */
				(snapshot.contextHashes);
			this._statTestedEntries += contextHashes.size;
			for (const [path, hash] of contextHashes) {
				processContextHashSnapshot(path, hash);
			}
		}
		if (snapshot.hasContextTshs()) {
			const contextTshs = /** @type {ContextTshs} */ (snapshot.contextTshs);
			this._statTestedEntries += contextTshs.size;
			for (const [path, tsh] of contextTshs) {
				if (typeof tsh === "string") {
					processContextHashSnapshot(path, tsh);
				} else {
					const cache = this._contextTimestamps.get(path);
					if (cache === "ignore") continue;
					let resolved;
					if (
						cache !== undefined &&
						(resolved = getResolvedTimestamp(cache)) !== undefined
					) {
						if (
							!checkContext(
								path,
								/** @type {ResolvedContextFileSystemInfoEntry | null} */
								(resolved),
								tsh,
								false
							)
						) {
							processContextHashSnapshot(path, tsh && tsh.hash);
						}
					} else {
						jobs++;
						/**
						 * @param {(WebpackError | null)=} err error
						 * @param {(ResolvedContextFileSystemInfoEntry | "ignore" | null)=} entry entry
						 * @returns {void}
						 */
						const callback = (err, entry) => {
							if (err) return invalidWithError(path, err);
							if (
								!checkContext(
									path,
									// TODO: test with `"ignore"`
									/** @type {ResolvedContextFileSystemInfoEntry | null} */
									(entry),
									tsh,
									false
								)
							) {
								processContextHashSnapshot(path, tsh && tsh.hash);
							}
							jobDone();
						};
						if (cache !== undefined) {
							this._resolveContextTimestamp(
								/** @type {ContextFileSystemInfoEntry} */
								(cache),
								callback
							);
						} else {
							this.getContextTimestamp(path, callback);
						}
					}
				}
			}
		}
		if (snapshot.hasMissingExistence()) {
			const missingExistence =
				/** @type {MissingExistence} */
				(snapshot.missingExistence);
			this._statTestedEntries += missingExistence.size;
			for (const [path, existence] of missingExistence) {
				const cache = this._fileTimestamps.get(path);
				if (cache !== undefined) {
					if (
						cache !== "ignore" &&
						!checkExistence(path, Boolean(cache), Boolean(existence))
					) {
						invalid();
						return;
					}
				} else {
					jobs++;
					this.fileTimestampQueue.add(path, (err, entry) => {
						if (err) return invalidWithError(path, err);
						if (!checkExistence(path, Boolean(entry), Boolean(existence))) {
							invalid();
						} else {
							jobDone();
						}
					});
				}
			}
		}
		if (snapshot.hasManagedItemInfo()) {
			const managedItemInfo =
				/** @type {ManagedItemInfo} */
				(snapshot.managedItemInfo);
			this._statTestedEntries += managedItemInfo.size;
			for (const [path, info] of managedItemInfo) {
				const cache = this._managedItems.get(path);
				if (cache !== undefined) {
					if (!checkHash(path, cache, info)) {
						invalid();
						return;
					}
				} else {
					jobs++;
					this.managedItemQueue.add(path, (err, entry) => {
						if (err) return invalidWithError(path, err);
						if (!checkHash(path, /** @type {string} */ (entry), info)) {
							invalid();
						} else {
							jobDone();
						}
					});
				}
			}
		}
		jobDone();

		// if there was an async action
		// try to join multiple concurrent request for this snapshot
		if (jobs > 0) {
			const callbacks = [callback];
			callback = (err, result) => {
				for (const callback of callbacks) callback(err, result);
			};
			this._snapshotCache.set(snapshot, callbacks);
		}
	}

	/**
	 * @type {Processor<string, FileSystemInfoEntry>}
	 * @private
	 */
	_readFileTimestamp(path, callback) {
		this.fs.stat(path, (err, _stat) => {
			if (err) {
				if (err.code === "ENOENT") {
					this._fileTimestamps.set(path, null);
					this._cachedDeprecatedFileTimestamps = undefined;
					return callback(null, null);
				}
				return callback(/** @type {WebpackError} */ (err));
			}
			const stat = /** @type {IStats} */ (_stat);
			let ts;
			if (stat.isDirectory()) {
				ts = {
					safeTime: 0,
					timestamp: undefined
				};
			} else {
				const mtime = Number(stat.mtime);

				if (mtime) applyMtime(mtime);

				ts = {
					safeTime: mtime ? mtime + FS_ACCURACY : Infinity,
					timestamp: mtime
				};
			}

			this._fileTimestamps.set(path, ts);
			this._cachedDeprecatedFileTimestamps = undefined;

			callback(null, ts);
		});
	}

	/**
	 * @type {Processor<string, string>}
	 * @private
	 */
	_readFileHash(path, callback) {
		this.fs.readFile(path, (err, content) => {
			if (err) {
				if (err.code === "EISDIR") {
					this._fileHashes.set(path, "directory");
					return callback(null, "directory");
				}
				if (err.code === "ENOENT") {
					this._fileHashes.set(path, null);
					return callback(null, null);
				}
				if (err.code === "ERR_FS_FILE_TOO_LARGE") {
					/** @type {Logger} */
					(this.logger).warn(`Ignoring ${path} for hashing as it's very large`);
					this._fileHashes.set(path, "too large");
					return callback(null, "too large");
				}
				return callback(/** @type {WebpackError} */ (err));
			}

			const hash = createHash(this._hashFunction);

			hash.update(/** @type {string | Buffer} */ (content));

			const digest = /** @type {string} */ (hash.digest("hex"));

			this._fileHashes.set(path, digest);

			callback(null, digest);
		});
	}

	/**
	 * @param {string} path path
	 * @param {function(WebpackError | null, TimestampAndHash=) : void} callback callback
	 * @private
	 */
	_getFileTimestampAndHash(path, callback) {
		/**
		 * @param {string} hash hash
		 * @returns {void}
		 */
		const continueWithHash = hash => {
			const cache = this._fileTimestamps.get(path);
			if (cache !== undefined) {
				if (cache !== "ignore") {
					/** @type {TimestampAndHash} */
					const result = {
						.../** @type {FileSystemInfoEntry} */ (cache),
						hash
					};
					this._fileTshs.set(path, result);
					return callback(null, result);
				}
				this._fileTshs.set(path, hash);
				return callback(null, /** @type {TODO} */ (hash));
			}
			this.fileTimestampQueue.add(path, (err, entry) => {
				if (err) {
					return callback(err);
				}
				/** @type {TimestampAndHash} */
				const result = {
					.../** @type {FileSystemInfoEntry} */ (entry),
					hash
				};
				this._fileTshs.set(path, result);
				return callback(null, result);
			});
		};

		const cache = this._fileHashes.get(path);
		if (cache !== undefined) {
			continueWithHash(/** @type {string} */ (cache));
		} else {
			this.fileHashQueue.add(path, (err, entry) => {
				if (err) {
					return callback(err);
				}
				continueWithHash(/** @type {string} */ (entry));
			});
		}
	}

	/**
	 * @template T
	 * @template ItemType
	 * @param {object} options options
	 * @param {string} options.path path
	 * @param {function(string): ItemType} options.fromImmutablePath called when context item is an immutable path
	 * @param {function(string): ItemType} options.fromManagedItem called when context item is a managed path
	 * @param {function(string, string, function((WebpackError | null)=, ItemType=): void): void} options.fromSymlink called when context item is a symlink
	 * @param {function(string, IStats, function((WebpackError | null)=, (ItemType | null)=): void): void} options.fromFile called when context item is a file
	 * @param {function(string, IStats, function((WebpackError | null)=, ItemType=): void): void} options.fromDirectory called when context item is a directory
	 * @param {function(string[], ItemType[]): T} options.reduce called from all context items
	 * @param {function((Error | null)=, (T | null)=): void} callback callback
	 */
	_readContext(
		{
			path,
			fromImmutablePath,
			fromManagedItem,
			fromSymlink,
			fromFile,
			fromDirectory,
			reduce
		},
		callback
	) {
		this.fs.readdir(path, (err, _files) => {
			if (err) {
				if (err.code === "ENOENT") {
					return callback(null, null);
				}
				return callback(err);
			}
			const files = /** @type {string[]} */ (_files)
				.map(file => file.normalize("NFC"))
				.filter(file => !/^\./.test(file))
				.sort();
			asyncLib.map(
				files,
				(file, callback) => {
					const child = join(this.fs, path, file);
					for (const immutablePath of this.immutablePathsRegExps) {
						if (immutablePath.test(path)) {
							// ignore any immutable path for timestamping
							return callback(null, fromImmutablePath(path));
						}
					}
					for (const immutablePath of this.immutablePathsWithSlash) {
						if (path.startsWith(immutablePath)) {
							// ignore any immutable path for timestamping
							return callback(null, fromImmutablePath(path));
						}
					}
					for (const managedPath of this.managedPathsRegExps) {
						const match = managedPath.exec(path);
						if (match) {
							const managedItem = getManagedItem(match[1], path);
							if (managedItem) {
								// construct timestampHash from managed info
								return this.managedItemQueue.add(managedItem, (err, info) => {
									if (err) return callback(err);
									return callback(
										null,
										fromManagedItem(/** @type {string} */ (info))
									);
								});
							}
						}
					}
					for (const managedPath of this.managedPathsWithSlash) {
						if (path.startsWith(managedPath)) {
							const managedItem = getManagedItem(managedPath, child);
							if (managedItem) {
								// construct timestampHash from managed info
								return this.managedItemQueue.add(managedItem, (err, info) => {
									if (err) return callback(err);
									return callback(
										null,
										fromManagedItem(/** @type {string} */ (info))
									);
								});
							}
						}
					}

					lstatReadlinkAbsolute(this.fs, child, (err, _stat) => {
						if (err) return callback(err);

						const stat = /** @type {IStats | string} */ (_stat);

						if (typeof stat === "string") {
							return fromSymlink(child, stat, callback);
						}

						if (stat.isFile()) {
							return fromFile(child, stat, callback);
						}
						if (stat.isDirectory()) {
							return fromDirectory(child, stat, callback);
						}
						callback(null, null);
					});
				},
				(err, results) => {
					if (err) return callback(err);
					const result = reduce(files, /** @type {ItemType[]} */ (results));
					callback(null, result);
				}
			);
		});
	}

	/**
	 * @type {Processor<string, ContextFileSystemInfoEntry>}
	 * @private
	 */
	_readContextTimestamp(path, callback) {
		this._readContext(
			{
				path,
				fromImmutablePath: () =>
					/** @type {ContextFileSystemInfoEntry | FileSystemInfoEntry | "ignore" | null} */
					(null),
				fromManagedItem: info => ({
					safeTime: 0,
					timestampHash: info
				}),
				fromSymlink: (file, target, callback) => {
					callback(
						null,
						/** @type {ContextFileSystemInfoEntry} */
						({
							timestampHash: target,
							symlinks: new Set([target])
						})
					);
				},
				fromFile: (file, stat, callback) => {
					// Prefer the cached value over our new stat to report consistent results
					const cache = this._fileTimestamps.get(file);
					if (cache !== undefined)
						return callback(null, cache === "ignore" ? null : cache);

					const mtime = Number(stat.mtime);

					if (mtime) applyMtime(mtime);

					/** @type {FileSystemInfoEntry} */
					const ts = {
						safeTime: mtime ? mtime + FS_ACCURACY : Infinity,
						timestamp: mtime
					};

					this._fileTimestamps.set(file, ts);
					this._cachedDeprecatedFileTimestamps = undefined;
					callback(null, ts);
				},
				fromDirectory: (directory, stat, callback) => {
					this.contextTimestampQueue.increaseParallelism();
					this._getUnresolvedContextTimestamp(directory, (err, tsEntry) => {
						this.contextTimestampQueue.decreaseParallelism();
						callback(err, tsEntry);
					});
				},
				reduce: (files, tsEntries) => {
					let symlinks;

					const hash = createHash(this._hashFunction);

					for (const file of files) hash.update(file);
					let safeTime = 0;
					for (const _e of tsEntries) {
						if (!_e) {
							hash.update("n");
							continue;
						}
						const entry =
							/** @type {FileSystemInfoEntry | ContextFileSystemInfoEntry} */
							(_e);
						if (/** @type {FileSystemInfoEntry} */ (entry).timestamp) {
							hash.update("f");
							hash.update(
								`${/** @type {FileSystemInfoEntry} */ (entry).timestamp}`
							);
						} else if (
							/** @type {ContextFileSystemInfoEntry} */ (entry).timestampHash
						) {
							hash.update("d");
							hash.update(
								`${/** @type {ContextFileSystemInfoEntry} */ (entry).timestampHash}`
							);
						}
						if (
							/** @type {ContextFileSystemInfoEntry} */
							(entry).symlinks !== undefined
						) {
							if (symlinks === undefined) symlinks = new Set();
							addAll(
								/** @type {ContextFileSystemInfoEntry} */ (entry).symlinks,
								symlinks
							);
						}
						if (entry.safeTime) {
							safeTime = Math.max(safeTime, entry.safeTime);
						}
					}

					const digest = /** @type {string} */ (hash.digest("hex"));
					/** @type {ContextFileSystemInfoEntry} */
					const result = {
						safeTime,
						timestampHash: digest
					};
					if (symlinks) result.symlinks = symlinks;
					return result;
				}
			},
			(err, result) => {
				if (err) return callback(/** @type {WebpackError} */ (err));
				this._contextTimestamps.set(path, result);
				this._cachedDeprecatedContextTimestamps = undefined;

				callback(null, result);
			}
		);
	}

	/**
	 * @param {ContextFileSystemInfoEntry} entry entry
	 * @param {function((WebpackError | null)=, (ResolvedContextFileSystemInfoEntry | "ignore" | null)=): void} callback callback
	 * @returns {void}
	 */
	_resolveContextTimestamp(entry, callback) {
		/** @type {string[]} */
		const hashes = [];
		let safeTime = 0;
		processAsyncTree(
			/** @type {NonNullable<ContextHash["symlinks"]>} */ (entry.symlinks),
			10,
			(target, push, callback) => {
				this._getUnresolvedContextTimestamp(target, (err, entry) => {
					if (err) return callback(err);
					if (entry && entry !== "ignore") {
						hashes.push(/** @type {string} */ (entry.timestampHash));
						if (entry.safeTime) {
							safeTime = Math.max(safeTime, entry.safeTime);
						}
						if (entry.symlinks !== undefined) {
							for (const target of entry.symlinks) push(target);
						}
					}
					callback();
				});
			},
			err => {
				if (err) return callback(/** @type {WebpackError} */ (err));
				const hash = createHash(this._hashFunction);
				hash.update(/** @type {string} */ (entry.timestampHash));
				if (entry.safeTime) {
					safeTime = Math.max(safeTime, entry.safeTime);
				}
				hashes.sort();
				for (const h of hashes) {
					hash.update(h);
				}
				callback(
					null,
					(entry.resolved = {
						safeTime,
						timestampHash: /** @type {string} */ (hash.digest("hex"))
					})
				);
			}
		);
	}

	/**
	 * @type {Processor<string, ContextHash>}
	 * @private
	 */
	_readContextHash(path, callback) {
		this._readContext(
			{
				path,
				fromImmutablePath: () => /** @type {ContextHash | ""} */ (""),
				fromManagedItem: info => info || "",
				fromSymlink: (file, target, callback) => {
					callback(
						null,
						/** @type {ContextHash} */
						({
							hash: target,
							symlinks: new Set([target])
						})
					);
				},
				fromFile: (file, stat, callback) =>
					this.getFileHash(file, (err, hash) => {
						callback(err, hash || "");
					}),
				fromDirectory: (directory, stat, callback) => {
					this.contextHashQueue.increaseParallelism();
					this._getUnresolvedContextHash(directory, (err, hash) => {
						this.contextHashQueue.decreaseParallelism();
						callback(err, hash || "");
					});
				},
				/**
				 * @param {string[]} files files
				 * @param {(string | ContextHash)[]} fileHashes hashes
				 * @returns {ContextHash} reduced hash
				 */
				reduce: (files, fileHashes) => {
					let symlinks;
					const hash = createHash(this._hashFunction);

					for (const file of files) hash.update(file);
					for (const entry of fileHashes) {
						if (typeof entry === "string") {
							hash.update(entry);
						} else {
							hash.update(entry.hash);
							if (entry.symlinks) {
								if (symlinks === undefined) symlinks = new Set();
								addAll(entry.symlinks, symlinks);
							}
						}
					}

					/** @type {ContextHash} */
					const result = {
						hash: /** @type {string} */ (hash.digest("hex"))
					};
					if (symlinks) result.symlinks = symlinks;
					return result;
				}
			},
			(err, _result) => {
				if (err) return callback(/** @type {WebpackError} */ (err));
				const result = /** @type {ContextHash} */ (_result);
				this._contextHashes.set(path, result);
				return callback(null, result);
			}
		);
	}

	/**
	 * @param {ContextHash} entry context hash
	 * @param {function(WebpackError | null, string=): void} callback callback
	 * @returns {void}
	 */
	_resolveContextHash(entry, callback) {
		/** @type {string[]} */
		const hashes = [];
		processAsyncTree(
			/** @type {NonNullable<ContextHash["symlinks"]>} */ (entry.symlinks),
			10,
			(target, push, callback) => {
				this._getUnresolvedContextHash(target, (err, hash) => {
					if (err) return callback(err);
					if (hash) {
						hashes.push(hash.hash);
						if (hash.symlinks !== undefined) {
							for (const target of hash.symlinks) push(target);
						}
					}
					callback();
				});
			},
			err => {
				if (err) return callback(/** @type {WebpackError} */ (err));
				const hash = createHash(this._hashFunction);
				hash.update(entry.hash);
				hashes.sort();
				for (const h of hashes) {
					hash.update(h);
				}
				callback(
					null,
					(entry.resolved = /** @type {string} */ (hash.digest("hex")))
				);
			}
		);
	}

	/**
	 * @type {Processor<string, ContextTimestampAndHash>}
	 * @private
	 */
	_readContextTimestampAndHash(path, callback) {
		/**
		 * @param {ContextFileSystemInfoEntry | "ignore" | null} timestamp timestamp
		 * @param {ContextHash} hash hash
		 */
		const finalize = (timestamp, hash) => {
			const result =
				/** @type {ContextTimestampAndHash} */
				(timestamp === "ignore" ? hash : { ...timestamp, ...hash });
			this._contextTshs.set(path, result);
			callback(null, result);
		};
		const cachedHash = this._contextHashes.get(path);
		const cachedTimestamp = this._contextTimestamps.get(path);
		if (cachedHash !== undefined) {
			if (cachedTimestamp !== undefined) {
				finalize(cachedTimestamp, cachedHash);
			} else {
				this.contextTimestampQueue.add(path, (err, entry) => {
					if (err) return callback(err);
					finalize(
						/** @type {ContextFileSystemInfoEntry} */
						(entry),
						cachedHash
					);
				});
			}
		} else if (cachedTimestamp !== undefined) {
			this.contextHashQueue.add(path, (err, entry) => {
				if (err) return callback(err);
				finalize(cachedTimestamp, /** @type {ContextHash} */ (entry));
			});
		} else {
			this._readContext(
				{
					path,
					fromImmutablePath: () =>
						/** @type {ContextTimestampAndHash | null} */ (null),
					fromManagedItem: info => ({
						safeTime: 0,
						timestampHash: info,
						hash: info || ""
					}),
					fromSymlink: (file, target, callback) => {
						callback(
							null,
							/** @type {TODO} */
							({
								timestampHash: target,
								hash: target,
								symlinks: new Set([target])
							})
						);
					},
					fromFile: (file, stat, callback) => {
						this._getFileTimestampAndHash(file, callback);
					},
					fromDirectory: (directory, stat, callback) => {
						this.contextTshQueue.increaseParallelism();
						this.contextTshQueue.add(directory, (err, result) => {
							this.contextTshQueue.decreaseParallelism();
							callback(err, result);
						});
					},
					/**
					 * @param {string[]} files files
					 * @param {(Partial<TimestampAndHash> & Partial<ContextTimestampAndHash> | string | null)[]} results results
					 * @returns {ContextTimestampAndHash} tsh
					 */
					reduce: (files, results) => {
						let symlinks;

						const tsHash = createHash(this._hashFunction);
						const hash = createHash(this._hashFunction);

						for (const file of files) {
							tsHash.update(file);
							hash.update(file);
						}
						let safeTime = 0;
						for (const entry of results) {
							if (!entry) {
								tsHash.update("n");
								continue;
							}
							if (typeof entry === "string") {
								tsHash.update("n");
								hash.update(entry);
								continue;
							}
							if (entry.timestamp) {
								tsHash.update("f");
								tsHash.update(`${entry.timestamp}`);
							} else if (entry.timestampHash) {
								tsHash.update("d");
								tsHash.update(`${entry.timestampHash}`);
							}
							if (entry.symlinks !== undefined) {
								if (symlinks === undefined) symlinks = new Set();
								addAll(entry.symlinks, symlinks);
							}
							if (entry.safeTime) {
								safeTime = Math.max(safeTime, entry.safeTime);
							}
							hash.update(/** @type {string} */ (entry.hash));
						}

						/** @type {ContextTimestampAndHash} */
						const result = {
							safeTime,
							timestampHash: /** @type {string} */ (tsHash.digest("hex")),
							hash: /** @type {string} */ (hash.digest("hex"))
						};
						if (symlinks) result.symlinks = symlinks;
						return result;
					}
				},
				(err, _result) => {
					if (err) return callback(/** @type {WebpackError} */ (err));
					const result = /** @type {ContextTimestampAndHash} */ (_result);
					this._contextTshs.set(path, result);
					return callback(null, result);
				}
			);
		}
	}

	/**
	 * @param {ContextTimestampAndHash} entry entry
	 * @param {ProcessorCallback<ResolvedContextTimestampAndHash>} callback callback
	 * @returns {void}
	 */
	_resolveContextTsh(entry, callback) {
		/** @type {string[]} */
		const hashes = [];
		/** @type {string[]} */
		const tsHashes = [];
		let safeTime = 0;
		processAsyncTree(
			/** @type {NonNullable<ContextHash["symlinks"]>} */ (entry.symlinks),
			10,
			(target, push, callback) => {
				this._getUnresolvedContextTsh(target, (err, entry) => {
					if (err) return callback(err);
					if (entry) {
						hashes.push(entry.hash);
						if (entry.timestampHash) tsHashes.push(entry.timestampHash);
						if (entry.safeTime) {
							safeTime = Math.max(safeTime, entry.safeTime);
						}
						if (entry.symlinks !== undefined) {
							for (const target of entry.symlinks) push(target);
						}
					}
					callback();
				});
			},
			err => {
				if (err) return callback(/** @type {WebpackError} */ (err));
				const hash = createHash(this._hashFunction);
				const tsHash = createHash(this._hashFunction);
				hash.update(entry.hash);
				if (entry.timestampHash) tsHash.update(entry.timestampHash);
				if (entry.safeTime) {
					safeTime = Math.max(safeTime, entry.safeTime);
				}
				hashes.sort();
				for (const h of hashes) {
					hash.update(h);
				}
				tsHashes.sort();
				for (const h of tsHashes) {
					tsHash.update(h);
				}
				callback(
					null,
					(entry.resolved = {
						safeTime,
						timestampHash: /** @type {string} */ (tsHash.digest("hex")),
						hash: /** @type {string} */ (hash.digest("hex"))
					})
				);
			}
		);
	}

	/**
	 * @type {Processor<string, Set<string>>}
	 * @private
	 */
	_getManagedItemDirectoryInfo(path, callback) {
		this.fs.readdir(path, (err, elements) => {
			if (err) {
				if (err.code === "ENOENT" || err.code === "ENOTDIR") {
					return callback(null, EMPTY_SET);
				}
				return callback(/** @type {WebpackError} */ (err));
			}
			const set = new Set(
				/** @type {string[]} */ (elements).map(element =>
					join(this.fs, path, element)
				)
			);
			callback(null, set);
		});
	}

	/**
	 * @type {Processor<string, string>}
	 * @private
	 */
	_getManagedItemInfo(path, callback) {
		const dir = dirname(this.fs, path);
		this.managedItemDirectoryQueue.add(dir, (err, elements) => {
			if (err) {
				return callback(err);
			}
			if (!(/** @type {Set<string>} */ (elements).has(path))) {
				// file or directory doesn't exist
				this._managedItems.set(path, "*missing");
				return callback(null, "*missing");
			}
			// something exists
			// it may be a file or directory
			if (
				path.endsWith("node_modules") &&
				(path.endsWith("/node_modules") || path.endsWith("\\node_modules"))
			) {
				// we are only interested in existence of this special directory
				this._managedItems.set(path, "*node_modules");
				return callback(null, "*node_modules");
			}

			// we assume it's a directory, as files shouldn't occur in managed paths
			const packageJsonPath = join(this.fs, path, "package.json");
			this.fs.readFile(packageJsonPath, (err, content) => {
				if (err) {
					if (err.code === "ENOENT" || err.code === "ENOTDIR") {
						// no package.json or path is not a directory
						this.fs.readdir(path, (err, elements) => {
							if (
								!err &&
								/** @type {string[]} */ (elements).length === 1 &&
								/** @type {string[]} */ (elements)[0] === "node_modules"
							) {
								// This is only a grouping folder e.g. used by yarn
								// we are only interested in existence of this special directory
								this._managedItems.set(path, "*nested");
								return callback(null, "*nested");
							}
							/** @type {Logger} */
							(this.logger).warn(
								`Managed item ${path} isn't a directory or doesn't contain a package.json (see snapshot.managedPaths option)`
							);
							return callback();
						});
						return;
					}
					return callback(/** @type {WebpackError} */ (err));
				}
				let data;
				try {
					data = JSON.parse(/** @type {Buffer} */ (content).toString("utf-8"));
				} catch (parseErr) {
					return callback(/** @type {WebpackError} */ (parseErr));
				}
				if (!data.name) {
					/** @type {Logger} */
					(this.logger).warn(
						`${packageJsonPath} doesn't contain a "name" property (see snapshot.managedPaths option)`
					);
					return callback();
				}
				const info = `${data.name || ""}@${data.version || ""}`;
				this._managedItems.set(path, info);
				callback(null, info);
			});
		});
	}

	getDeprecatedFileTimestamps() {
		if (this._cachedDeprecatedFileTimestamps !== undefined)
			return this._cachedDeprecatedFileTimestamps;
		const map = new Map();
		for (const [path, info] of this._fileTimestamps) {
			if (info) map.set(path, typeof info === "object" ? info.safeTime : null);
		}
		return (this._cachedDeprecatedFileTimestamps = map);
	}

	getDeprecatedContextTimestamps() {
		if (this._cachedDeprecatedContextTimestamps !== undefined)
			return this._cachedDeprecatedContextTimestamps;
		const map = new Map();
		for (const [path, info] of this._contextTimestamps) {
			if (info) map.set(path, typeof info === "object" ? info.safeTime : null);
		}
		return (this._cachedDeprecatedContextTimestamps = map);
	}
}

module.exports = FileSystemInfo;
module.exports.Snapshot = Snapshot;
