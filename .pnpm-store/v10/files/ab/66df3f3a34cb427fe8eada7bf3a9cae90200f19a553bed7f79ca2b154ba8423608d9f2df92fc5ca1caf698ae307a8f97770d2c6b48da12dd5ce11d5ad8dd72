/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const { EventEmitter } = require("events");
const globToRegExp = require("glob-to-regexp");
const LinkResolver = require("./LinkResolver");
const getWatcherManager = require("./getWatcherManager");
const watchEventSource = require("./watchEventSource");

/** @typedef {import("./getWatcherManager").WatcherManager} WatcherManager */
/** @typedef {import("./DirectoryWatcher")} DirectoryWatcher */
/** @typedef {import("./DirectoryWatcher").DirectoryWatcherEvents} DirectoryWatcherEvents */
/** @typedef {import("./DirectoryWatcher").FileWatcherEvents} FileWatcherEvents */

// eslint-disable-next-line jsdoc/reject-any-type
/** @typedef {Record<string, (...args: any[]) => any>} EventMap */

/**
 * @template {EventMap} T
 * @typedef {import("./DirectoryWatcher").Watcher<T>} Watcher
 */

/** @typedef {(item: string) => boolean} IgnoredFunction */
/** @typedef {string[] | RegExp | string | IgnoredFunction} Ignored */

/**
 * @typedef {object} WatcherOptions
 * @property {boolean=} followSymlinks true when need to resolve symlinks and watch symlink and real file, otherwise false
 * @property {Ignored=} ignored ignore some files from watching (glob pattern or regexp)
 * @property {number | boolean=} poll true when need to enable polling mode for watching, otherwise false
 */

/** @typedef {WatcherOptions & { aggregateTimeout?: number }} WatchOptions */

/**
 * @typedef {object} NormalizedWatchOptions
 * @property {boolean} followSymlinks true when need to resolve symlinks and watch symlink and real file, otherwise false
 * @property {IgnoredFunction} ignored ignore some files from watching (glob pattern or regexp)
 * @property {number | boolean=} poll true when need to enable polling mode for watching, otherwise false
 */

/** @typedef {`scan (${string})` | "change" | "rename" | `watch ${string}` | `directory-removed ${string}`} EventType */
/** @typedef {{ safeTime: number, timestamp: number, accuracy: number }} Entry */
/** @typedef {{ safeTime: number }} OnlySafeTimeEntry */
// eslint-disable-next-line jsdoc/ts-no-empty-object-type
/** @typedef {{}} ExistenceOnlyTimeEntry */
/** @typedef {Map<string, Entry | OnlySafeTimeEntry | ExistenceOnlyTimeEntry | null>} TimeInfoEntries */
/** @typedef {Set<string>} Changes */
/** @typedef {Set<string>} Removals */
/** @typedef {{ changes: Changes, removals: Removals }} Aggregated */
/** @typedef {{ files?: Iterable<string>, directories?: Iterable<string>, missing?: Iterable<string>, startTime?: number }} WatchMethodOptions */
/** @typedef {Record<string, number>} Times */

/**
 * @param {MapIterator<WatchpackFileWatcher> | MapIterator<WatchpackDirectoryWatcher>} watchers watchers
 * @param {Set<DirectoryWatcher>} set set
 */
function addWatchersToSet(watchers, set) {
	for (const ww of watchers) {
		const w = ww.watcher;
		if (!set.has(w.directoryWatcher)) {
			set.add(w.directoryWatcher);
		}
	}
}

/**
 * @param {string} ignored ignored
 * @returns {string | undefined} resolved global to regexp
 */
const stringToRegexp = (ignored) => {
	if (ignored.length === 0) {
		return;
	}
	const { source } = globToRegExp(ignored, { globstar: true, extended: true });
	return `${source.slice(0, -1)}(?:$|\\/)`;
};

/**
 * @param {Ignored=} ignored ignored
 * @returns {(item: string) => boolean} ignored to function
 */
const ignoredToFunction = (ignored) => {
	if (Array.isArray(ignored)) {
		const stringRegexps = ignored.map((i) => stringToRegexp(i)).filter(Boolean);
		if (stringRegexps.length === 0) {
			return () => false;
		}
		const regexp = new RegExp(stringRegexps.join("|"));
		return (item) => regexp.test(item.replace(/\\/g, "/"));
	} else if (typeof ignored === "string") {
		const stringRegexp = stringToRegexp(ignored);
		if (!stringRegexp) {
			return () => false;
		}
		const regexp = new RegExp(stringRegexp);
		return (item) => regexp.test(item.replace(/\\/g, "/"));
	} else if (ignored instanceof RegExp) {
		return (item) => ignored.test(item.replace(/\\/g, "/"));
	} else if (typeof ignored === "function") {
		return ignored;
	} else if (ignored) {
		throw new Error(`Invalid option for 'ignored': ${ignored}`);
	} else {
		return () => false;
	}
};

/**
 * @param {WatchOptions} options options
 * @returns {NormalizedWatchOptions} normalized options
 */
const normalizeOptions = (options) => ({
	followSymlinks: Boolean(options.followSymlinks),
	ignored: ignoredToFunction(options.ignored),
	poll: options.poll,
});

const normalizeCache = new WeakMap();
/**
 * @param {WatchOptions} options options
 * @returns {NormalizedWatchOptions} normalized options
 */
const cachedNormalizeOptions = (options) => {
	const cacheEntry = normalizeCache.get(options);
	if (cacheEntry !== undefined) return cacheEntry;
	const normalized = normalizeOptions(options);
	normalizeCache.set(options, normalized);
	return normalized;
};

class WatchpackFileWatcher {
	/**
	 * @param {Watchpack} watchpack watchpack
	 * @param {Watcher<FileWatcherEvents>} watcher watcher
	 * @param {string | string[]} files files
	 */
	constructor(watchpack, watcher, files) {
		/** @type {string[]} */
		this.files = Array.isArray(files) ? files : [files];
		this.watcher = watcher;
		watcher.on("initial-missing", (type) => {
			for (const file of this.files) {
				if (!watchpack._missing.has(file)) {
					watchpack._onRemove(file, file, type);
				}
			}
		});
		watcher.on("change", (mtime, type, _initial) => {
			for (const file of this.files) {
				watchpack._onChange(file, mtime, file, type);
			}
		});
		watcher.on("remove", (type) => {
			for (const file of this.files) {
				watchpack._onRemove(file, file, type);
			}
		});
	}

	/**
	 * @param {string | string[]} files files
	 */
	update(files) {
		if (!Array.isArray(files)) {
			if (this.files.length !== 1) {
				this.files = [files];
			} else if (this.files[0] !== files) {
				this.files[0] = files;
			}
		} else {
			this.files = files;
		}
	}

	close() {
		this.watcher.close();
	}
}

class WatchpackDirectoryWatcher {
	/**
	 * @param {Watchpack} watchpack watchpack
	 * @param {Watcher<DirectoryWatcherEvents>} watcher watcher
	 * @param {string} directories directories
	 */
	constructor(watchpack, watcher, directories) {
		/** @type {string[]} */
		this.directories = Array.isArray(directories) ? directories : [directories];
		this.watcher = watcher;
		watcher.on("initial-missing", (type) => {
			for (const item of this.directories) {
				watchpack._onRemove(item, item, type);
			}
		});
		watcher.on("change", (file, mtime, type, _initial) => {
			for (const item of this.directories) {
				watchpack._onChange(item, mtime, file, type);
			}
		});
		watcher.on("remove", (type) => {
			for (const item of this.directories) {
				watchpack._onRemove(item, item, type);
			}
		});
	}

	/**
	 * @param {string | string[]} directories directories
	 */
	update(directories) {
		if (!Array.isArray(directories)) {
			if (this.directories.length !== 1) {
				this.directories = [directories];
			} else if (this.directories[0] !== directories) {
				this.directories[0] = directories;
			}
		} else {
			this.directories = directories;
		}
	}

	close() {
		this.watcher.close();
	}
}

/**
 * @typedef {object} WatchpackEvents
 * @property {(file: string, mtime: number, type: EventType) => void} change change event
 * @property {(file: string, type: EventType) => void} remove remove event
 * @property {(changes: Changes, removals: Removals) => void} aggregated aggregated event
 */

/**
 * @extends {EventEmitter<{ [K in keyof WatchpackEvents]: Parameters<WatchpackEvents[K]> }>}
 */
class Watchpack extends EventEmitter {
	/**
	 * @param {WatchOptions=} options options
	 */
	constructor(options = {}) {
		super();
		if (!options) options = {};
		/** @type {WatchOptions} */
		this.options = options;
		this.aggregateTimeout =
			typeof options.aggregateTimeout === "number"
				? options.aggregateTimeout
				: 200;
		/** @type {NormalizedWatchOptions} */
		this.watcherOptions = cachedNormalizeOptions(options);
		/** @type {WatcherManager} */
		this.watcherManager = getWatcherManager(this.watcherOptions);
		/** @type {Map<string, WatchpackFileWatcher>} */
		this.fileWatchers = new Map();
		/** @type {Map<string, WatchpackDirectoryWatcher>} */
		this.directoryWatchers = new Map();
		/** @type {Set<string>} */
		this._missing = new Set();
		this.startTime = undefined;
		this.paused = false;
		/** @type {Changes} */
		this.aggregatedChanges = new Set();
		/** @type {Removals} */
		this.aggregatedRemovals = new Set();
		/** @type {undefined | NodeJS.Timeout} */
		this.aggregateTimer = undefined;
		this._onTimeout = this._onTimeout.bind(this);
	}

	/**
	 * @overload
	 * @param {Iterable<string>} arg1 files
	 * @param {Iterable<string>} arg2 directories
	 * @param {number=} arg3 startTime
	 * @returns {void}
	 */
	/**
	 * @overload
	 * @param {WatchMethodOptions} arg1 watch options
	 * @returns {void}
	 */
	/**
	 * @param {Iterable<string> | WatchMethodOptions} arg1 files
	 * @param {Iterable<string>=} arg2 directories
	 * @param {number=} arg3 startTime
	 * @returns {void}
	 */
	watch(arg1, arg2, arg3) {
		/** @type {Iterable<string> | undefined} */
		let files;
		/** @type {Iterable<string> | undefined} */
		let directories;
		/** @type {Iterable<string> | undefined} */
		let missing;
		/** @type {number | undefined} */
		let startTime;
		if (!arg2) {
			({
				files = [],
				directories = [],
				missing = [],
				startTime,
			} = /** @type {WatchMethodOptions} */ (arg1));
		} else {
			files = /** @type {Iterable<string>} */ (arg1);
			directories = /** @type {Iterable<string>} */ (arg2);
			missing = [];
			startTime = /** @type {number} */ (arg3);
		}
		this.paused = false;
		const { fileWatchers, directoryWatchers } = this;
		const { ignored } = this.watcherOptions;
		/**
		 * @param {string} path path
		 * @returns {boolean} true when need to filter, otherwise false
		 */
		const filter = (path) => !ignored(path);
		/**
		 * @template K, V
		 * @param {Map<K, V | V[]>} map map
		 * @param {K} key key
		 * @param {V} item item
		 */
		const addToMap = (map, key, item) => {
			const list = map.get(key);
			if (list === undefined) {
				map.set(key, item);
			} else if (Array.isArray(list)) {
				list.push(item);
			} else {
				map.set(key, [list, item]);
			}
		};
		const fileWatchersNeeded = new Map();
		const directoryWatchersNeeded = new Map();
		/** @type {Set<string>} */
		const missingFiles = new Set();
		if (this.watcherOptions.followSymlinks) {
			const resolver = new LinkResolver();
			for (const file of files) {
				if (filter(file)) {
					for (const innerFile of resolver.resolve(file)) {
						if (file === innerFile || filter(innerFile)) {
							addToMap(fileWatchersNeeded, innerFile, file);
						}
					}
				}
			}
			for (const file of missing) {
				if (filter(file)) {
					for (const innerFile of resolver.resolve(file)) {
						if (file === innerFile || filter(innerFile)) {
							missingFiles.add(file);
							addToMap(fileWatchersNeeded, innerFile, file);
						}
					}
				}
			}
			for (const dir of directories) {
				if (filter(dir)) {
					let first = true;
					for (const innerItem of resolver.resolve(dir)) {
						if (filter(innerItem)) {
							addToMap(
								first ? directoryWatchersNeeded : fileWatchersNeeded,
								innerItem,
								dir,
							);
						}
						first = false;
					}
				}
			}
		} else {
			for (const file of files) {
				if (filter(file)) {
					addToMap(fileWatchersNeeded, file, file);
				}
			}
			for (const file of missing) {
				if (filter(file)) {
					missingFiles.add(file);
					addToMap(fileWatchersNeeded, file, file);
				}
			}
			for (const dir of directories) {
				if (filter(dir)) {
					addToMap(directoryWatchersNeeded, dir, dir);
				}
			}
		}
		// Close unneeded old watchers
		// and update existing watchers
		for (const [key, w] of fileWatchers) {
			const needed = fileWatchersNeeded.get(key);
			if (needed === undefined) {
				w.close();
				fileWatchers.delete(key);
			} else {
				w.update(needed);
				fileWatchersNeeded.delete(key);
			}
		}
		for (const [key, w] of directoryWatchers) {
			const needed = directoryWatchersNeeded.get(key);
			if (needed === undefined) {
				w.close();
				directoryWatchers.delete(key);
			} else {
				w.update(needed);
				directoryWatchersNeeded.delete(key);
			}
		}
		// Create new watchers and install handlers on these watchers
		watchEventSource.batch(() => {
			for (const [key, files] of fileWatchersNeeded) {
				const watcher = this.watcherManager.watchFile(key, startTime);
				if (watcher) {
					fileWatchers.set(key, new WatchpackFileWatcher(this, watcher, files));
				}
			}
			for (const [key, directories] of directoryWatchersNeeded) {
				const watcher = this.watcherManager.watchDirectory(key, startTime);
				if (watcher) {
					directoryWatchers.set(
						key,
						new WatchpackDirectoryWatcher(this, watcher, directories),
					);
				}
			}
		});
		this._missing = missingFiles;
		this.startTime = startTime;
	}

	close() {
		this.paused = true;
		if (this.aggregateTimer) clearTimeout(this.aggregateTimer);
		for (const w of this.fileWatchers.values()) w.close();
		for (const w of this.directoryWatchers.values()) w.close();
		this.fileWatchers.clear();
		this.directoryWatchers.clear();
	}

	pause() {
		this.paused = true;
		if (this.aggregateTimer) clearTimeout(this.aggregateTimer);
	}

	/**
	 * @returns {Record<string, number>} times
	 */
	getTimes() {
		/** @type {Set<DirectoryWatcher>} */
		const directoryWatchers = new Set();
		addWatchersToSet(this.fileWatchers.values(), directoryWatchers);
		addWatchersToSet(this.directoryWatchers.values(), directoryWatchers);
		/** @type {Record<string, number>} */
		const obj = Object.create(null);
		for (const w of directoryWatchers) {
			const times = w.getTimes();
			for (const file of Object.keys(times)) obj[file] = times[file];
		}
		return obj;
	}

	/**
	 * @returns {TimeInfoEntries} time info entries
	 */
	getTimeInfoEntries() {
		/** @type {TimeInfoEntries} */
		const map = new Map();
		this.collectTimeInfoEntries(map, map);
		return map;
	}

	/**
	 * @param {TimeInfoEntries} fileTimestamps file timestamps
	 * @param {TimeInfoEntries} directoryTimestamps directory timestamps
	 */
	collectTimeInfoEntries(fileTimestamps, directoryTimestamps) {
		/** @type {Set<DirectoryWatcher>} */
		const allWatchers = new Set();
		addWatchersToSet(this.fileWatchers.values(), allWatchers);
		addWatchersToSet(this.directoryWatchers.values(), allWatchers);
		for (const w of allWatchers) {
			w.collectTimeInfoEntries(fileTimestamps, directoryTimestamps);
		}
	}

	/**
	 * @returns {Aggregated} aggregated info
	 */
	getAggregated() {
		if (this.aggregateTimer) {
			clearTimeout(this.aggregateTimer);
			this.aggregateTimer = undefined;
		}
		const changes = this.aggregatedChanges;
		const removals = this.aggregatedRemovals;
		this.aggregatedChanges = new Set();
		this.aggregatedRemovals = new Set();
		return { changes, removals };
	}

	/**
	 * @param {string} item item
	 * @param {number} mtime mtime
	 * @param {string} file file
	 * @param {EventType} type type
	 */
	_onChange(item, mtime, file, type) {
		file = file || item;
		if (!this.paused) {
			this.emit("change", file, mtime, type);
			if (this.aggregateTimer) clearTimeout(this.aggregateTimer);
			this.aggregateTimer = setTimeout(this._onTimeout, this.aggregateTimeout);
		}
		this.aggregatedRemovals.delete(item);
		this.aggregatedChanges.add(item);
	}

	/**
	 * @param {string} item item
	 * @param {string} file file
	 * @param {EventType} type type
	 */
	_onRemove(item, file, type) {
		file = file || item;
		if (!this.paused) {
			this.emit("remove", file, type);
			if (this.aggregateTimer) clearTimeout(this.aggregateTimer);
			this.aggregateTimer = setTimeout(this._onTimeout, this.aggregateTimeout);
		}
		this.aggregatedChanges.delete(item);
		this.aggregatedRemovals.add(item);
	}

	_onTimeout() {
		this.aggregateTimer = undefined;
		const changes = this.aggregatedChanges;
		const removals = this.aggregatedRemovals;
		this.aggregatedChanges = new Set();
		this.aggregatedRemovals = new Set();
		this.emit("aggregated", changes, removals);
	}
}

module.exports = Watchpack;
