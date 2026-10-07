/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const { EventEmitter } = require("events");
const fs = require("fs");
const path = require("path");
const reducePlan = require("./reducePlan");

/** @typedef {import("fs").FSWatcher} FSWatcher */
/** @typedef {import("./index").EventType} EventType */

const IS_OSX = require("os").platform() === "darwin";
const IS_WIN = require("os").platform() === "win32";

const SUPPORTS_RECURSIVE_WATCHING = IS_OSX || IS_WIN;

// Use 20 for OSX to make `FSWatcher.close` faster
// https://github.com/nodejs/node/issues/29949
const watcherLimit =
	// @ts-expect-error avoid additional checks
	+process.env.WATCHPACK_WATCHER_LIMIT || (IS_OSX ? 20 : 10000);

const recursiveWatcherLogging = Boolean(
	process.env.WATCHPACK_RECURSIVE_WATCHER_LOGGING,
);

let isBatch = false;
let watcherCount = 0;

/** @type {Map<Watcher, string>} */
const pendingWatchers = new Map();

/** @type {Map<string, RecursiveWatcher>} */
const recursiveWatchers = new Map();

/** @type {Map<string, DirectWatcher>} */
const directWatchers = new Map();

/** @type {Map<Watcher, RecursiveWatcher | DirectWatcher>} */
const underlyingWatcher = new Map();

/**
 * @param {string} filePath file path
 * @returns {NodeJS.ErrnoException} new error with file path in the message
 */
function createEPERMError(filePath) {
	const error =
		/** @type {NodeJS.ErrnoException} */
		(new Error(`Operation not permitted: ${filePath}`));
	error.code = "EPERM";
	return error;
}

/**
 * @param {FSWatcher} watcher watcher
 * @param {string} filePath a file path
 * @param {(type: "rename" | "change", filename: string) => void} handleChangeEvent function to handle change
 * @returns {(type: "rename" | "change", filename: string) => void} handler of change event
 */
function createHandleChangeEvent(watcher, filePath, handleChangeEvent) {
	return (type, filename) => {
		// TODO: After Node.js v22, fs.watch(dir) and deleting a dir will trigger the rename change event.
		// Here we just ignore it and keep the same behavior as before v22
		// https://github.com/libuv/libuv/pull/4376
		if (
			type === "rename" &&
			path.isAbsolute(filename) &&
			path.basename(filename) === path.basename(filePath)
		) {
			if (!IS_OSX) {
				// Before v22, windows will throw EPERM error
				watcher.emit("error", createEPERMError(filename));
			}
			// Before v22, macos nothing to do
			return;
		}
		handleChangeEvent(type, filename);
	};
}

class DirectWatcher {
	/**
	 * @param {string} filePath file path
	 */
	constructor(filePath) {
		this.filePath = filePath;
		this.watchers = new Set();
		/** @type {FSWatcher | undefined} */
		this.watcher = undefined;
		try {
			const watcher = fs.watch(filePath);

			this.watcher = watcher;
			const handleChangeEvent = createHandleChangeEvent(
				watcher,
				filePath,
				(type, filename) => {
					for (const w of this.watchers) {
						w.emit("change", type, filename);
					}
				},
			);
			watcher.on("change", handleChangeEvent);
			watcher.on("error", (error) => {
				for (const w of this.watchers) {
					w.emit("error", error);
				}
			});
		} catch (err) {
			process.nextTick(() => {
				for (const w of this.watchers) {
					w.emit("error", err);
				}
			});
		}
		watcherCount++;
	}

	/**
	 * @param {Watcher} watcher a watcher
	 */
	add(watcher) {
		underlyingWatcher.set(watcher, this);
		this.watchers.add(watcher);
	}

	/**
	 * @param {Watcher} watcher a watcher
	 */
	remove(watcher) {
		this.watchers.delete(watcher);
		if (this.watchers.size === 0) {
			directWatchers.delete(this.filePath);
			watcherCount--;
			if (this.watcher) this.watcher.close();
		}
	}

	getWatchers() {
		return this.watchers;
	}
}

/** @typedef {Set<Watcher>} WatcherSet */

class RecursiveWatcher {
	/**
	 * @param {string} rootPath a root path
	 */
	constructor(rootPath) {
		this.rootPath = rootPath;
		/** @type {Map<Watcher, string>} */
		this.mapWatcherToPath = new Map();
		/** @type {Map<string, WatcherSet>} */
		this.mapPathToWatchers = new Map();
		this.watcher = undefined;
		try {
			const watcher = fs.watch(rootPath, {
				recursive: true,
			});
			this.watcher = watcher;
			watcher.on("change", (type, filename) => {
				if (!filename) {
					if (recursiveWatcherLogging) {
						process.stderr.write(
							`[watchpack] dispatch ${type} event in recursive watcher (${this.rootPath}) to all watchers\n`,
						);
					}
					for (const w of this.mapWatcherToPath.keys()) {
						w.emit("change", /** @type {EventType} */ (type));
					}
				} else {
					const dir = path.dirname(/** @type {string} */ (filename));
					const watchers = this.mapPathToWatchers.get(dir);
					if (recursiveWatcherLogging) {
						process.stderr.write(
							`[watchpack] dispatch ${type} event in recursive watcher (${
								this.rootPath
							}) for '${filename}' to ${
								watchers ? watchers.size : 0
							} watchers\n`,
						);
					}
					if (watchers === undefined) return;
					for (const w of watchers) {
						w.emit(
							"change",
							/** @type {EventType} */ (type),
							path.basename(/** @type {string} */ (filename)),
						);
					}
				}
			});
			watcher.on("error", (error) => {
				for (const w of this.mapWatcherToPath.keys()) {
					w.emit("error", error);
				}
			});
		} catch (err) {
			process.nextTick(() => {
				for (const w of this.mapWatcherToPath.keys()) {
					w.emit("error", err);
				}
			});
		}
		watcherCount++;
		if (recursiveWatcherLogging) {
			process.stderr.write(
				`[watchpack] created recursive watcher at ${rootPath}\n`,
			);
		}
	}

	/**
	 * @param {string} filePath a file path
	 * @param {Watcher} watcher a watcher
	 */
	add(filePath, watcher) {
		underlyingWatcher.set(watcher, this);
		const subpath = filePath.slice(this.rootPath.length + 1) || ".";
		this.mapWatcherToPath.set(watcher, subpath);
		const set = this.mapPathToWatchers.get(subpath);
		if (set === undefined) {
			const newSet = new Set();
			newSet.add(watcher);
			this.mapPathToWatchers.set(subpath, newSet);
		} else {
			set.add(watcher);
		}
	}

	/**
	 * @param {Watcher} watcher a watcher
	 */
	remove(watcher) {
		const subpath = this.mapWatcherToPath.get(watcher);
		if (!subpath) return;
		this.mapWatcherToPath.delete(watcher);
		const set = /** @type {WatcherSet} */ (this.mapPathToWatchers.get(subpath));
		set.delete(watcher);
		if (set.size === 0) {
			this.mapPathToWatchers.delete(subpath);
		}
		if (this.mapWatcherToPath.size === 0) {
			recursiveWatchers.delete(this.rootPath);
			watcherCount--;
			if (this.watcher) this.watcher.close();
			if (recursiveWatcherLogging) {
				process.stderr.write(
					`[watchpack] closed recursive watcher at ${this.rootPath}\n`,
				);
			}
		}
	}

	getWatchers() {
		return this.mapWatcherToPath;
	}
}

/**
 * @typedef {object} WatcherEvents
 * @property {(eventType: EventType, filename?: string) => void} change change event
 * @property {(err: unknown) => void} error error event
 */

/**
 * @extends {EventEmitter<{ [K in keyof WatcherEvents]: Parameters<WatcherEvents[K]> }>}
 */
class Watcher extends EventEmitter {
	constructor() {
		super();
	}

	close() {
		if (pendingWatchers.has(this)) {
			pendingWatchers.delete(this);
			return;
		}
		const watcher = underlyingWatcher.get(this);
		/** @type {RecursiveWatcher | DirectWatcher} */
		(watcher).remove(this);
		underlyingWatcher.delete(this);
	}
}

/**
 * @param {string} filePath a file path
 * @returns {DirectWatcher} a directory watcher
 */
const createDirectWatcher = (filePath) => {
	const existing = directWatchers.get(filePath);
	if (existing !== undefined) return existing;
	const w = new DirectWatcher(filePath);
	directWatchers.set(filePath, w);
	return w;
};

/**
 * @param {string} rootPath a root path
 * @returns {RecursiveWatcher} a recursive watcher
 */
const createRecursiveWatcher = (rootPath) => {
	const existing = recursiveWatchers.get(rootPath);
	if (existing !== undefined) return existing;
	const w = new RecursiveWatcher(rootPath);
	recursiveWatchers.set(rootPath, w);
	return w;
};

const execute = () => {
	/** @type {Map<string, Watcher[] | Watcher>} */
	const map = new Map();
	/**
	 * @param {Watcher} watcher a watcher
	 * @param {string} filePath a file path
	 */
	const addWatcher = (watcher, filePath) => {
		const entry = map.get(filePath);
		if (entry === undefined) {
			map.set(filePath, watcher);
		} else if (Array.isArray(entry)) {
			entry.push(watcher);
		} else {
			map.set(filePath, [entry, watcher]);
		}
	};
	for (const [watcher, filePath] of pendingWatchers) {
		addWatcher(watcher, filePath);
	}
	pendingWatchers.clear();

	// Fast case when we are not reaching the limit
	if (!SUPPORTS_RECURSIVE_WATCHING || watcherLimit - watcherCount >= map.size) {
		// Create watchers for all entries in the map
		for (const [filePath, entry] of map) {
			const w = createDirectWatcher(filePath);
			if (Array.isArray(entry)) {
				for (const item of entry) w.add(item);
			} else {
				w.add(entry);
			}
		}
		return;
	}

	// Reconsider existing watchers to improving watch plan
	for (const watcher of recursiveWatchers.values()) {
		for (const [w, subpath] of watcher.getWatchers()) {
			addWatcher(w, path.join(watcher.rootPath, subpath));
		}
	}
	for (const watcher of directWatchers.values()) {
		for (const w of watcher.getWatchers()) {
			addWatcher(w, watcher.filePath);
		}
	}

	// Merge map entries to keep watcher limit
	// Create a 10% buffer to be able to enter fast case more often
	const plan = reducePlan(map, watcherLimit * 0.9);

	// Update watchers for all entries in the map
	for (const [filePath, entry] of plan) {
		if (entry.size === 1) {
			for (const [watcher, filePath] of entry) {
				const w = createDirectWatcher(filePath);
				const old = underlyingWatcher.get(watcher);
				if (old === w) continue;
				w.add(watcher);
				if (old !== undefined) old.remove(watcher);
			}
		} else {
			const filePaths = new Set(entry.values());
			if (filePaths.size > 1) {
				const w = createRecursiveWatcher(filePath);
				for (const [watcher, watcherPath] of entry) {
					const old = underlyingWatcher.get(watcher);
					if (old === w) continue;
					w.add(watcherPath, watcher);
					if (old !== undefined) old.remove(watcher);
				}
			} else {
				for (const filePath of filePaths) {
					const w = createDirectWatcher(filePath);
					for (const watcher of entry.keys()) {
						const old = underlyingWatcher.get(watcher);
						if (old === w) continue;
						w.add(watcher);
						if (old !== undefined) old.remove(watcher);
					}
				}
			}
		}
	}
};

module.exports.Watcher = Watcher;

/**
 * @param {() => void} fn a function
 */
module.exports.batch = (fn) => {
	isBatch = true;
	try {
		fn();
	} finally {
		isBatch = false;
		execute();
	}
};

module.exports.createHandleChangeEvent = createHandleChangeEvent;

module.exports.getNumberOfWatchers = () => watcherCount;

/**
 * @param {string} filePath a file path
 * @returns {Watcher} watcher
 */
module.exports.watch = (filePath) => {
	const watcher = new Watcher();
	// Find an existing watcher
	const directWatcher = directWatchers.get(filePath);
	if (directWatcher !== undefined) {
		directWatcher.add(watcher);
		return watcher;
	}
	let current = filePath;
	for (;;) {
		const recursiveWatcher = recursiveWatchers.get(current);
		if (recursiveWatcher !== undefined) {
			recursiveWatcher.add(filePath, watcher);
			return watcher;
		}
		const parent = path.dirname(current);
		if (parent === current) break;
		current = parent;
	}
	// Queue up watcher for creation
	pendingWatchers.set(watcher, filePath);
	if (!isBatch) execute();
	return watcher;
};

module.exports.watcherLimit = watcherLimit;
