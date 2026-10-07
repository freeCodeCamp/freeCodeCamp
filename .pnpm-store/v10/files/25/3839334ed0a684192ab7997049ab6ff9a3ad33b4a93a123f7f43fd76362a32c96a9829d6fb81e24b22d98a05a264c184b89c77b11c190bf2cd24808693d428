/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const path = require("path");
const DirectoryWatcher = require("./DirectoryWatcher");

/** @typedef {import("./index").EventMap} EventMap */
/** @typedef {import("./DirectoryWatcher").DirectoryWatcherOptions} DirectoryWatcherOptions */
/** @typedef {import("./DirectoryWatcher").DirectoryWatcherEvents} DirectoryWatcherEvents */
/** @typedef {import("./DirectoryWatcher").FileWatcherEvents} FileWatcherEvents */
/**
 * @template {EventMap} T
 * @typedef {import("./DirectoryWatcher").Watcher<T>} Watcher
 */

class WatcherManager {
	/**
	 * @param {DirectoryWatcherOptions=} options options
	 */
	constructor(options = {}) {
		this.options = options;
		/** @type {Map<string, DirectoryWatcher>} */
		this.directoryWatchers = new Map();
	}

	/**
	 * @param {string} directory a directory
	 * @returns {DirectoryWatcher} a directory watcher
	 */
	getDirectoryWatcher(directory) {
		const watcher = this.directoryWatchers.get(directory);
		if (watcher === undefined) {
			const newWatcher = new DirectoryWatcher(this, directory, this.options);
			this.directoryWatchers.set(directory, newWatcher);
			newWatcher.on("closed", () => {
				this.directoryWatchers.delete(directory);
			});
			return newWatcher;
		}
		return watcher;
	}

	/**
	 * @param {string} file file
	 * @param {number=} startTime start time
	 * @returns {Watcher<FileWatcherEvents> | null} watcher or null if file has no directory
	 */
	watchFile(file, startTime) {
		const directory = path.dirname(file);
		if (directory === file) return null;
		return this.getDirectoryWatcher(directory).watch(file, startTime);
	}

	/**
	 * @param {string} directory directory
	 * @param {number=} startTime start time
	 * @returns {Watcher<DirectoryWatcherEvents>} watcher
	 */
	watchDirectory(directory, startTime) {
		return this.getDirectoryWatcher(directory).watch(directory, startTime);
	}
}

const watcherManagers = new WeakMap();

/**
 * @param {DirectoryWatcherOptions} options options
 * @returns {WatcherManager} the watcher manager
 */
module.exports = (options) => {
	const watcherManager = watcherManagers.get(options);
	if (watcherManager !== undefined) return watcherManager;
	const newWatcherManager = new WatcherManager(options);
	watcherManagers.set(options, newWatcherManager);
	return newWatcherManager;
};
module.exports.WatcherManager = WatcherManager;
